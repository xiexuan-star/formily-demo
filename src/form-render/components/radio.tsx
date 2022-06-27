import { connect, mapProps } from '@formily/vue';
import { NRadio, NRadioGroup } from 'naive-ui';
import { defineComponent, PropType } from 'vue';
import { assignUpdateValue } from '../utils';

const script = defineComponent({
  props: { options: { type: Array as PropType<AnyObject[]>, default: () => [] } },
  setup(props, { attrs }) {
    return () => {
      return <NRadioGroup { ...attrs }>
        {
          props.options?.map(option => {
            return <NRadio value={ option.value }>{ option.text }</NRadio>;
          })
        }
      </NRadioGroup>;
    };
  }
});

export const RADIO = connect(script, mapProps({ dataSource: 'options' }, assignUpdateValue));
