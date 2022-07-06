import { BusinessCollector } from "../hooks";
import { FormAsyncQueue } from "../types";
import { Component, InjectionKey } from "vue";

export const InjectAsyncQueue: InjectionKey<FormAsyncQueue> = Symbol("InjectAsyncQueue");

export const InjectionSchemaField: InjectionKey<Component> = Symbol("InjectionSchemaField");

export const InjectionBusinessCollector: InjectionKey<BusinessCollector> = Symbol(
  "InjectionBusinessCollector"
);

export enum FIELD_BUSINESS_TYPE {
  PASSWORD = "password",
  ID_CARD = "id_card",
  AGE = "age",
  MOBILE = "mobile",
  TELEPHONE = "telephone",
  EMAIL = "email",
  BANK_CARD = "bank_card",
  WEBSITE = "website",
  GESTATIONAL_WEEKS = "gestational_weeks",
  GESTATIONAL_STAGE = "gestational_stage",
  CUSTOMER_NAME = "customer_name",
}

export enum FIELD_SEX_VALUE {
  MALE = "1",
  FEMALE = "2",
}
