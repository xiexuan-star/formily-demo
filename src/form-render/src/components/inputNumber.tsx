import { computed, defineComponent } from 'vue';
import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { NInputNumber } from 'naive-ui';

const script = defineComponent({
  setup(_, { attrs }) {
    const _attrs = computed(() => {
      return { ...attrs, onChange: undefined, value: undefined };
    });
    return () => {
      return <>
        <NInputNumber { ..._attrs.value } />
      </>;
    };
  }
});
export const INPUT_NUMBER = connect(script, mapProps(assignUpdateValue));
