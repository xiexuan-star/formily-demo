import { FieldItem } from "../types";
import { AsyncQueue } from "../hooks";
export * from "./fieldItem";

export interface FieldVisitorContext {
  field: FieldItem;

  replace(f: FieldItem): void;

  insertBefore(f: FieldItem | FieldItem[]): void;

  insertAfter(f: FieldItem | FieldItem[]): void;
}

export type FieldVisitor = Record<string, (context: FieldVisitorContext) => void>;

export type FormRequestType = "post" | "get" | "patch" | "delete" | "put";

export interface FormAsyncQueueItem {
  key: any;
  url: string;
  method: FormRequestType;
  params?: AnyObject;
}

export type FormAsyncQueue = AsyncQueue<FormAsyncQueueItem, any, AnyObject[]>;

export type IdCardParseInfo = Record<'sex' | 'birthday', string> & Record<'age' | 'day' | 'month' | 'year', number>
