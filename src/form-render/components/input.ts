import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { NInput } from "naive-ui";

export const INPUT = connect(
  NInput,
  mapProps((props, field) => {
    const _props = assignUpdateValue(props, field);
    _props.allowInput = (value: string) => !value.startsWith(" ") && !value.endsWith(" ");
    return _props;
  })
);
