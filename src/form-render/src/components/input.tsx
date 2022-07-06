import { computed, defineComponent, FunctionalComponent } from "vue";
import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { NInput } from "naive-ui";

const script = defineComponent({
  name: "FormInput",
  props: { prefix: { type: String }, suffix: { type: String } },
  setup(props, { attrs }) {
    const _slots = computed(() => {
      const res: Record<string, FunctionalComponent> = {};
      if (props.prefix) {
        res.prefix = () => <>{props.prefix}</>;
      }
      if (props.suffix) {
        res.suffix = () => <>{props.suffix}</>;
      }
      return res;
    });
    return () => {
      return <NInput {...attrs} v-slots={_slots.value} />;
    };
  },
});

export const INPUT = connect(
  script,
  mapProps((props, field) => {
    const _props = assignUpdateValue(props, field);
    _props.allowInput = (value: string) => !value.startsWith(" ") && !value.endsWith(" ");
    return _props;
  })
);
