import { FormAsyncQueueItem } from "@/modules/clidoctor/view/workstation/patientInfo/form-render/types";
import { useCommonLog } from "./useCommonLog";
import { useFormilyRequest } from "./useFormilyRequest";

enum ENTRY_STATE {
  PENDING,
  PROCESSING,
  DONE,
}

interface EntryCallback {
  (err?: any, result?: any): void;
}

class AsyncQueueEntry<K = any> {
  key: K;

  // 保存Task的处理值
  item: any;

  // 初始化状态
  state: ENTRY_STATE;

  // 保存Task的完成函数
  callback?: EntryCallback;

  // 用于重复Task的处理
  callbacks?: EntryCallback[];

  // 用于保存任务处理的结果
  result?: any;

  // 用于保存任务处理的错误
  error?: any;

  constructor(item: any, key: any, callback: EntryCallback) {
    this.item = item;
    this.key = key;
    this.state = ENTRY_STATE.PENDING;
    this.callback = callback;
  }
}

class ArrayQueue<K = any> {
  _list: AsyncQueueEntry<K>[];

  constructor(items?: AsyncQueueEntry<K>[]) {
    this._list = items ? Array.from(items) : [];
  }

  enqueue(item: AsyncQueueEntry<K>) {
    this._list.push(item);
  }

  dequeue() {
    return this._list.shift();
  }
}

interface Processor<T, R = any> {
  (item: T, cb: (err?: any, result?: R) => void, removeCache: () => void): void;
}

interface AsyncQueueOptions<T = any, K = any> {
  name: string;
  processor: Processor<T>;
  parallelism: number;
  getKey: (item: T) => K;
}

export class AsyncQueue<T = any, K = any, R = any> {
  // 名称
  name: string;
  // 处理函数
  processor: Processor<T, R>;
  // 并发数量
  getKey: AsyncQueueOptions<T, K>["getKey"];
  // 获取唯一key
  parallelism: number;

  // 当前队列中等待执行的任务
  _queued = new ArrayQueue<K>();

  // 当前队列中所有执行过的任务,用于去重
  _entries = new Map<K, AsyncQueueEntry<K>>();

  // 当前并发的任务数量
  _activeTasks = 0;

  // 同步锁, 保证一次任务只会开启一次processing
  _processingLock = false;

  // 队列是否结束
  _stopped = false;

  constructor({ name, processor, getKey, parallelism }: AsyncQueueOptions<T>) {
    this.name = name;
    this.processor = processor;
    this.getKey = getKey;
    this.parallelism = parallelism || 100;
  }

  add(item: T, callback: EntryCallback) {
    if (this._stopped) return callback(new Error("Queue was stopped"));
    const key = this.getKey(item);
    if (this._entries.has(key)) {
      const entry = this._entries.get(key)!;
      if (entry.state === ENTRY_STATE.DONE) {
        // 如果缓存中的entry已经执行完毕,那么直接执行回调即可
        setTimeout(() => {
          entry.callback && entry.callback(entry.error, entry.result);
        });
        // 否则,推入该entry的callbacks
      } else if (!entry.callbacks) {
        entry.callbacks = [callback];
      } else {
        entry.callbacks.push(callback);
      }
      return;
    }
    const newEntry = new AsyncQueueEntry(item, key, callback);
    this._entries.set(key, newEntry);
    this._queued.enqueue(newEntry);

    if (!this._processingLock) {
      this._processingLock = true;
      // 下一次EventLoop调用, 确保本次宏任务中添加的所有回调只开启一次processing
      setTimeout(this._ensureProcessing.bind(this));
    }
  }

  addAsync(item: T) {
    return new Promise<R>((resolve, reject) => {
      this.add(item, (err, result) => {
        err && reject(err);
        resolve(result);
      });
    });
  }

  // 迭代队列执行
  _ensureProcessing() {
    // 达到并发上限后, 终止当前轮次的Loop
    while (this._activeTasks < this.parallelism) {
      // 获取任务
      const entry = this._queued.dequeue();
      if (!entry) break;
      this._activeTasks++;
      // 修改状态
      entry.state = ENTRY_STATE.PENDING;
      // 该函数的调用是同步的, 也就是说如果回调也是是同步的, 会自动添加一个新回调进入队列处理
      // 但是activeTasks--是否异步取决于处理器
      this._startProcess(entry);
    }
    // 解锁,该行为只会发生在当前任务中的回调全部推入之后
    this._processingLock = false;
  }

  _startProcess(entry: AsyncQueueEntry) {
    this.processor(
      entry.item,
      (e: any, r: any) => {
        if (e) {
          this._handlerResult(
            entry,
            new Error(`AsyncQueue(${this.name} processor error) => ${e}`),
            undefined
          );
        }
        this._handlerResult(entry, e, r);
      },
      () => this._entries.delete(entry.key)
    );
  }

  _handlerResult(entry: AsyncQueueEntry, e: any, r: any) {
    const callback = entry.callback;
    entry.state = ENTRY_STATE.DONE;
    entry.callback = undefined;
    entry.result = r;
    entry.error = e;
    this._activeTasks--;
    callback && callback(e, r);
    // 如果有同Key的Task被调度,那么会被缓存至最先创建的entry中然后一并执行
    if (entry.callbacks) {
      entry.callbacks.forEach(cb => cb(e, r));
    }
    // 调度器任务完成,如果下一次EventLoop没有安排调度器执行
    // 重置this._processingLock状态, 并开启调度器执行
    if (!this._processingLock) {
      this._processingLock = true;
      setTimeout(this._ensureProcessing);
    }
  }
}

export function useAsyncQueue() {
  const { getHttpInstance } = useFormilyRequest();

  function create(parallelism = 3) {
    return new AsyncQueue<FormAsyncQueueItem, string | Symbol, { label: string; value: any }[]>({
      name: "FormRender",
      parallelism,
      async processor({ method, params, url }, cb, removeCache) {
        const http = getHttpInstance();
        if (!http) {
          useCommonLog().invalidHttpInstanceLog();
          cb();
          removeCache();
          return;
        }
        try {
          const { data, success } = await http[method](url, params);
          if (!success) throw new Error("request failure");
          cb(data);
        } catch (e) {
          cb(undefined, e);
        }
      },
      getKey(item) {
        return item.key;
      },
    });
  }

  return { create };
}
