import { connect, mapProps } from '@formily/vue';
import { NRadio, NRadioGroup, NSpace } from 'naive-ui';
import { defineComponent, PropType } from 'vue';
import { assignUpdateValue } from '../utils';

const script = defineComponent({
  props: {
    options: { type: Array as PropType<AnyObject[]>, default: () => [] },
    vertical: { type: Boolean, default: false }
  },
  setup(props, { attrs }) {
    return () => {
      return <NRadioGroup { ...attrs }>
        <NSpace vertical={ props.vertical }>
          {
            props.options?.map(option => {
              return <NRadio value={ option.value }>{ option.text }</NRadio>;
            })
          }
        </NSpace>
      </NRadioGroup>;
    };
  }
});

export const RADIO = connect(script, mapProps({ dataSource: 'options' }, assignUpdateValue));
