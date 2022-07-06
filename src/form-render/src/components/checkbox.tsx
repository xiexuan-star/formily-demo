import { AnyObject } from '@/types';
import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { NCheckbox, NCheckboxGroup, NSpace } from "naive-ui";
import { defineComponent, PropType } from "vue";

const script = defineComponent({
  name: "FormCheckbox",
  props: {
    options: { type: Array as PropType<AnyObject[]>, default: () => [] },
    vertical: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () => (
      <NCheckboxGroup {...attrs}>
        <NSpace vertical={props.vertical}>
          {props.options?.map(option => (
            <NCheckbox key={option.value} value={option.value}>
              {option.text}
            </NCheckbox>
          ))}
        </NSpace>
      </NCheckboxGroup>
    );
  },
});

export const CHECKBOX = connect(script, mapProps({ dataSource: "options" }, assignUpdateValue));
