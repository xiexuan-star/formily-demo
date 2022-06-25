import { FormAsyncQueue } from "../types";
import { Component, InjectionKey } from "vue";

export const InjectAsyncQueue: InjectionKey<FormAsyncQueue> = Symbol("InjectAsyncQueue");
export const InjectionSchemaField: InjectionKey<Component> = Symbol("InjectionSchemaField");
