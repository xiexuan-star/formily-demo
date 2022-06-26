import { AsyncQueue } from '../hooks';

export interface FieldVisitorContext {
  field: AnyObject,

  replace(f: AnyObject): void

  insertBefore(f: AnyObject | AnyObject[]): void

  insertAfter(f: AnyObject | AnyObject[]): void
}

export type FieldVisitor = Record<string, (context: FieldVisitorContext) => void>;

export type FormRequestType = 'post' | 'get' | 'patch' | 'delete' | 'put';

export interface FormAsyncQueueItem {
  key: any;
  url: string;
  method: FormRequestType;
  params?: AnyObject;
}

export type FormAsyncQueue = AsyncQueue<FormAsyncQueueItem, any, AnyObject[]>;
