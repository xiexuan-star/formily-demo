import { connect, mapProps } from '@formily/vue';
import { NInput } from 'naive-ui';

export const INPUT = connect(
  NInput,
  mapProps((props, field: any) => {
    return { ...props, 'onUpdate:value': field.onInput, onInput: null, onChange: null };
  })
);
