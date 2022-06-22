import { connect, mapProps } from '@formily/vue';
import { NInput } from 'naive-ui';

export const TEXTAREA = connect(
  NInput,
  mapProps((props, field: any) => {
    return { ...props, type: 'textarea', 'onUpdate:value': field.onInput, onChange: null, onInput: null };
  })
);
