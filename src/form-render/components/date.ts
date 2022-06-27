import { isField } from "@formily/core";
import { connect, mapProps } from "@formily/vue";
import { NDatePicker } from "naive-ui";

export const DATE = connect(
  NDatePicker,
  mapProps((props, field) => {
    const _props = { ...props };
    if (isField(field)) {
      Object.assign(_props, {
        "formatted-value": field.value,
        "onUpdate:formatted-value"(v: string) {
          field.setValue(v);
        },
      });
    }
    return _props;
  })
);
