import { Form } from "@formily/core";
import { isString } from "@vueuse/core";
import { FIELD_BUSINESS_TYPE } from "../constants";
import { isIdCard, parseIdCard } from "../utils";

export class BusinessCollector {
  typeCollector = new Map<FIELD_BUSINESS_TYPE, Set<string>>();
  fieldNameCollector = new Map<string, FIELD_BUSINESS_TYPE>();

  collect(type: FIELD_BUSINESS_TYPE, fieldName: string) {
    const set = this.typeCollector.get(type) || new Set<string>();
    set.add(fieldName);
    this.typeCollector.set(type, set);
    this.fieldNameCollector.set(fieldName, type);
  }

  getField(type: FIELD_BUSINESS_TYPE) {
    return [...(this.typeCollector.get(type) || new Set())];
  }

  getType(fieldName: string) {
    return this.fieldNameCollector.get(fieldName);
  }
}

// 业务逻辑绑定, 用一种与组件解耦的方式去收集各个字段的类型
export function useBusinessBinding() {
  function create() {
    return new BusinessCollector();
  }

  function handlerIdCardType(formModel: Form, collector: BusinessCollector, value: unknown) {
    if (!value || !isString(value) || !isIdCard(value)) return;
    const info = parseIdCard(value);
    const ageFields = collector.getField(FIELD_BUSINESS_TYPE.AGE);
    ageFields.forEach(field => {
      formModel.setFieldState(field, state => {
        state.value = info.age;
      });
    });
  }

  const handlerMap = new Map<
    FIELD_BUSINESS_TYPE,
    (formModel: Form, collector: BusinessCollector, value: unknown) => void
  >([[FIELD_BUSINESS_TYPE.ID_CARD, handlerIdCardType]]);

  function trigger(
    collector: BusinessCollector,
    formModel: Form,
    fieldName: string,
    value: unknown
  ) {
    const type = collector.fieldNameCollector.get(fieldName);
    if (!type || !handlerMap.has(type)) return;
    handlerMap.get(type)!(formModel, collector, value);
  }

  return { create, trigger };
}
