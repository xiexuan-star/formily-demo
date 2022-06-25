import { AsyncQueue } from "../hooks";

export type FormVisitorMap = Record<string, (item: Record<string, any>) => Record<string, any>>;

export type FormRequestType = "post" | "get" | "patch" | "delete" | "put";

export interface FormAsyncQueueItem {
  key: any;
  url: string;
  method: FormRequestType;
  params?: Record<string, any>;
}

export type FormAsyncQueue = AsyncQueue<FormAsyncQueueItem, string, Record<string, any>[]>;
