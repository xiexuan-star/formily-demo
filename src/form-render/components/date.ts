import { isField } from '@formily/core';
import { connect, mapProps } from '@formily/vue';
import { isObject } from '@vueuse/core';
import { NDatePicker } from 'naive-ui';

export const DATE = connect(
  NDatePicker,
  mapProps((props, field) => {
    const _props = { ...props };
    if (isField(field)) {
      Object.assign(_props, {
        'formatted-value': field.value,
        'onUpdate:formatted-value'(v: string) {
          field.setValue(v);
        },
      });
      if (isObject(props.validate)) {
        const { min_date, max_date } = props.validate;
        if (min_date || max_date) {
          _props.isDateDisabled = (time: number) => {
            let disabled = false;
            if (min_date === 'currTime') {
              disabled = time < Date.now();
            }
            if (max_date === 'currTime') {
              disabled = time > Date.now();
            }
            return disabled;
          };
        }
      }
    }
    return _props;
  })
);
