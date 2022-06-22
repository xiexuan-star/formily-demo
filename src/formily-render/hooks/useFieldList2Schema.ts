import { ISchema } from '@formily/json-schema/esm/types';

interface SchemaCreator {
  (item: Record<string, any>): ISchema;
}

export function useFieldList2Schema() {
  const createInputSchema: SchemaCreator = item => {
    return {
      name: item.val_key,
      type: 'string',
      title: item.alias || item.name,
      'x-decorator': 'FORM_ITEM',
      'x-decorator-props': { span: item.elem_width, showLabel: item.hide_title === '0' },
      'x-component': item.html_type,
      'x-component-props': { placeholder: item.placeholder },
      'x-display': item.is_show === '0' ? 'none' : 'visible',
      'x-pattern': item.is_edit === '0' ? 'disabled' : 'editable',
    };
  };

  const createSelectSchema: SchemaCreator = item => {
    const schema = createInputSchema(item);
    Object.assign(schema['x-component-props'], {
      urlConfig: item.urlConfig
    });
    return schema;
  };

  const createDateSchema: SchemaCreator = item => {
    const schema = createInputSchema(item);
    Object.assign(schema['x-component-props'], {
      valueFormat: item.date_format,
      type: item.html_type === 'DATE'
        ? item.date_format === 'yyyy-MM-dd'
          ? 'date'
          : item.date_format === 'yyyy-MM-dd HH:mm:ss'
            ? 'datetime'
            : undefined
        : undefined
    });
    return schema;
  };

  const createCollapseSchema: SchemaCreator = item => {
    return {
      name: item.val_key,
      type: 'void',
      title: item.alias || item.name,
      'x-component': 'COLLAPSE'
    };
  };

  const creatorMap = new Map<String, SchemaCreator>([
    ['LINEBAR', createCollapseSchema],
    ['INPUT', createInputSchema],
    ['SELECT', createSelectSchema],
    ['DATE', createDateSchema]
  ]);

  const createWidgetSchema: SchemaCreator = item => {
    if (item.suffixConfig) return createCombinationSchema(item);
    const creator = creatorMap.get(item.html_type) || createInputSchema;
    return creator(item);
  };

  const createCombinationSchema: SchemaCreator = item => {
    const suffixList: Record<string, any>[] = Array.isArray(item.suffixConfig)
      ? item.suffixConfig
      : [item.suffixConfig];
    const fieldList = [<Record<string, any>>{ ...item, suffixConfig: undefined }].concat(
      suffixList.map(suffix => {
        // 业务中此处需要渲染suffix, 但是is_show属性却在业务方错误的设置成了'0', 同时指定hide_title属性隐藏label
        return { ...suffix, is_show: '1', hide_title: '1' };
      })
    );
    return {
      type: 'void',
      title: item.alias || item.name,
      'x-component': 'INPUT_GROUP',
      'x-component-props': { span: item.elem_width },
      properties: transform(fieldList),
    };
  };

  function transform(fieldList: Record<string, any>[]) {
    let prevCollapse: Record<string, ISchema> | null = null;
    return fieldList.reduce((fin, cur) => {
      if (cur.html_type === 'LINEBAR') {
        fin[cur.val_key] = createCollapseSchema(cur);
        prevCollapse = fin[cur.val_key].properties = {};
      } else if (prevCollapse) {
        // 如果出现LINEBAR,则其后的所有field都加入该LINEBAR的properties
        prevCollapse[cur.val_key] = createWidgetSchema(cur);
      } else {
        prevCollapse = null;
        fin[cur.val_key] = createWidgetSchema(cur);
      }
      return fin;
    }, {} as Record<string, ISchema>);
  }

  return { transform };
}
