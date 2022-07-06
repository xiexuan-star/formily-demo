import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { NInput } from "naive-ui";

export const TEXTAREA = connect(
  NInput,
  mapProps((props, field) => {
    const _props = assignUpdateValue(props, field);
    _props.type = "textarea";
    return _props;
  })
);
