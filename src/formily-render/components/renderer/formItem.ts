import { isVoidField } from '@formily/core';
import { connect, mapProps } from '@formily/vue';
import { NFormItem } from 'naive-ui';

export const FORM_ITEM = connect(
  NFormItem,
  mapProps({ title: 'label' }, (props, field: any) => {
    const feedback = !isVoidField(field)
      ? field.selfErrors.length
        ? field.selfErrors.join(',')
        : undefined
      : undefined;
    return {
      ...props,
      class: 'formily-render__formItem',
      style: { '--form-item-column': props.span ?? 3 },
      feedback,
      'validation-status': feedback ? 'error' : undefined,
    };
  })
);
