import { GeneralField, isField } from "@formily/core";

export function formRenderLog(message: string, type: keyof Console = "log") {
  console[type as "log"](`[FormRender]: ${message}`);
}

export function assignUpdateValue(props: any, field: GeneralField) {
  const _props = { ...props };
  if (isField(field)) {
    Object.assign(_props, {
      "onUpdate:value"(value: any) {
        field.setValue(value);
      },
    });
  }
  return _props;
}
