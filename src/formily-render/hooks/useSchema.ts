import { ISchema } from '@formily/json-schema/esm/types';
import { Component } from 'vue';

export function useFormilySchema() {
  function createCollapse(title: string, properties: Record<string, ISchema> = {}) {
    return {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-decorator': 'FORM_ITEM',
      'x-component-props': { title, name: title },
      properties
    };
  }

  function createField(componentName: string | [Component, Record<string, any>?], options: ISchema & { name: string }): ISchema {
    return {
      type: 'string',
      'x-decorator': 'FORM_ITEM',
      'x-component': componentName,
      ...options
    };
  }

  return { createCollapse, createField };
}
