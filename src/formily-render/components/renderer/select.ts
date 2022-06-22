import { connect, mapProps } from "@formily/vue";
import { NSelect } from "naive-ui";

export const SELECT = connect(
  NSelect,
  mapProps({ dataSource: "options" }, (props, field: any) => {
    return { ...props, "onUpdate:value": field.onChange, options: field.enum || [] };
  })
);
