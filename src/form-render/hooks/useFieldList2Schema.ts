import { FIELD_BUSINESS_TYPE } from '../constants';
import { FieldItem } from '../types';
import { transformDateFormat } from '../utils';
import { BusinessCollector } from './useBusinessBinding';
import { useFormValidator } from './useFormValidator';
import { ISchema } from '@formily/json-schema/esm/types';
import { isObject } from '@vueuse/core';
import { useTypeNormalize } from './useTypeNormalize';

interface SchemaCreator {
  (item: FieldItem): ISchema;
}

/**
 * @description 胶水层, 将低代码平台中的fieldList转换为JSONSchema
 */
export function useFieldList2Schema(collector: BusinessCollector) {
  const { createValidatorSchema } = useFormValidator();

  // 作为标准的模板schema, 后续控件的schema基本上基于此模板生成
  const createStandardSchema: SchemaCreator = item => {
    const result: ISchema = {
      name: item.val_key,
      type: 'string',
      title: item.alias || item.name,
      // 控件的容器组件, 默认FORM_ITEM
      'x-decorator': 'FORM_ITEM',
      // 容器props
      'x-decorator-props': { span: item.elem_width, showLabel: item.hide_title !== '1' },
      // 控件
      'x-component': item.html_type,
      // 控件属性, 默认带上placeholder
      'x-component-props': { placeholder: item.placeholder, clearable: item.is_empty === '1' },
      // 控件的显隐
      'x-display': item.is_show === '0' ? 'hidden' : 'visible',
      // 控件的状态
      'x-pattern': item.is_edit === '0' ? 'disabled' : 'editable',
    };
    if (isObject(item.reactions)) {
      // 联动控制
      result['x-reactions'] = item.reactions;
    }
    const rules = createValidatorSchema(item);
    rules && (result['x-validator'] = rules);

    // 这个规则比较特殊需要挂载在schema最外层供form-item消费
    item.is_null === '0' && (result.required = true);

    return result;
  };

  const createSelectSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    Object.assign(schema['x-component-props'], {
      urlConfig: item.urlConfig,
      options: item.option,
      multiple: item.multi_select === '0', /* multi_select: 这个数值应该是平台那边反了 */
      maxTagCount: (+item.multi_select_value)
    });
    return schema;
  };

  const createRadioSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    Object.assign(schema['x-component-props'], {
      options: item.option,
      vertical: item.__vertical
    });
    return schema;
  };

  const createDateSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    Object.assign(schema['x-component-props'], {
      valueFormat: item.date_format,
      type: transformDateFormat(item.date_format),
      validate: item.validate
    });
    return schema;
  };

  const createCascaderSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    Object.assign(schema['x-component-props'], {
      urlConfig: item.urlConfig,
      deep: item.wordbook?.level_num,
      options: item.option
    });
    return schema;
  };

  const createSwitchSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    Object.assign(schema['x-component-props'], {
      openDescription: item.open,
      closeDescription: item.close
    });
    return schema;
  };

  const createCombinationSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    schema['x-decorator-props'].showLabel = false;
    Object.assign(schema['x-component-props'], {
      title: item.alias || item.name,
      properties: transform(item.children || []),
    });
    return schema;
  };

  const createInputNumberSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    const { decimal_length, validate } = item;
    Object.assign(schema['x-component-props'], {
      precision: decimal_length || validate?.decimal_length,
      max: validate?.max_value,
      min: validate?.min_value,
    });
    return schema;
  };

  const createCustomSchema: SchemaCreator = item => {
    const schema = createStandardSchema(item);
    Object.assign(schema['x-component-props'], {
      itemConfig: item,
    });
    return schema;
  };

  const createCollapseSchema: SchemaCreator = item => {
    return {
      name: item.val_key,
      type: 'void',
      title: item.alias || item.name,
      'x-component': 'COLLAPSE',
      'x-component-props': {
        disabled: item.is_not_fold === '1',
        show: !!item.is_show,
      },
    };
  };

  /**
   * 以下的Map中的schema对应FormRender组件设计中的几种基本控件
   * 所以还需要一个胶水层将低代码平台中的其它控件类型转化为这些基本控件类型
   */
  const creatorMap = new Map<string, SchemaCreator>([
    ['LINEBAR', createCollapseSchema],
    ['INPUT', createStandardSchema],
    ['INPUT_NUMBER', createInputNumberSchema],
    ['SELECT', createSelectSchema],
    ['DATE', createDateSchema],
    ['SEARCH_CASCADE', createCascaderSchema],
    ['COMBINATION', createCombinationSchema],
    ['RADIO', createRadioSchema],
    ['CHECKBOX', createRadioSchema /* 目前和RADIO的属性完全相同 */],
    ['SWITCH', createSwitchSchema]
  ]);

  const createWidgetSchema: SchemaCreator = item => {
    if (item.suffixConfig) return createWidgetCombinationSchema(item);
    const creator = creatorMap.get(item.html_type) || createCustomSchema;
    return creator(item);
  };

  const createWidgetCombinationSchema: SchemaCreator = item => {
    const suffixList: FieldItem[] = Array.isArray(item.suffixConfig)
      ? item.suffixConfig
      : [item.suffixConfig];
    const fieldList = [<FieldItem>{ ...item, suffixConfig: undefined }].concat(
      suffixList.map(suffix => {
        // 业务中此处需要渲染suffix, 但是is_show属性却在业务方错误的设置成了'0', 固定为'1'同时指定hide_title属性隐藏label
        // 也就是说, suffix控件的显隐完全由外层控件决定, 这样看起来会更像一个整体
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

  const { normalize } = useTypeNormalize();

  function transform(fieldList: FieldItem[]) {
    let prevCollapse: Record<string, ISchema> | null = null;
    return fieldList.reduce((fin, cur) => {
      normalize(cur);
      const obj_type = cur.validate?.obj_type;
      obj_type && collector.collect(obj_type as FIELD_BUSINESS_TYPE, cur.val_key);
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
