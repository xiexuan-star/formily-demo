import { NSwitch } from 'naive-ui';
import { assignUpdateValue } from '../utils';
import { connect, mapProps } from '@formily/vue';
import { computed, createTextVNode, defineComponent, PropType } from 'vue';

interface Description {
  value: string,
  describe: string
}

const script = defineComponent({
  name: 'FormSwitch',
  props: {
    openDescription: { type: Object as PropType<Description> },
    closeDescription: { type: Object as PropType<Description> }
  },
  setup(props, { attrs }) {
    return () => {
      const checkedValue = computed(() => {
        return props.openDescription?.value ?? true;
      });
      const uncheckedValue = computed(() => {
        return props.closeDescription?.value ?? false;
      });
      const checked = () => createTextVNode(props.openDescription?.describe ?? '');

      const unchecked = () => createTextVNode(props.closeDescription?.describe ?? '');


      return <NSwitch
        { ...attrs }
        checkedValue={ checkedValue.value }
        uncheckedValue={ uncheckedValue.value }
        v-slots={ { checked, unchecked } }
      />;
    };
  },
});

export const SWITCH = connect(script, mapProps(assignUpdateValue));
