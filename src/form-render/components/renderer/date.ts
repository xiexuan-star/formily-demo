import { connect, mapProps } from "@formily/vue";
import { NDatePicker } from "naive-ui";

export const DATE = connect(
  NDatePicker,
  mapProps((props, field: any) => {
    return {
      ...props,
      "formatted-value": field.value,
      "onUpdate:formatted-value": (v: string) => {
        field.setValue(v);
      },
    };
  })
);
