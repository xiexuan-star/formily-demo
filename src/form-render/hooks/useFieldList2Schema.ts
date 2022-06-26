import { ISchema } from "@formily/json-schema/esm/types";
import { isObject } from "@vueuse/core";

interface SchemaCreator {
  (item: AnyObject): ISchema;
}

/**
 * @description 将低代码平台中的fieldList转换为JSON Schema
 */
export function useFieldList2Schema() {
  // 模板schema, 后续控件的schema基本上基于此模板生成
  const createTemplateSchema: SchemaCreator = item => {
    const result: ISchema = {
      name: item.val_key,
      type: "string",
      title: item.alias || item.name,
      // 控件的容器组件, 默认FORM_ITEM
      "x-decorator": "FORM_ITEM",
      // 容器props
      "x-decorator-props": { span: item.elem_width, showLabel: item.hide_title === "0" },
      // 控件
      "x-component": item.html_type,
      // 控件属性, 默认带上placeholder
      "x-component-props": { placeholder: item.placeholder },
      // 控件的显隐
      "x-display": item.is_show === "0" ? "none" : "visible",
      // 控件的状态
      "x-pattern": item.is_edit === "0" ? "disabled" : "editable",
    };
    if (isObject(item.reactions)) {
      result["x-reactions"] = item.reactions;
    }
    return result;
  };

  const createSelectSchema: SchemaCreator = item => {
    const schema = createTemplateSchema(item);
    Object.assign(schema["x-component-props"], {
      urlConfig: item.urlConfig,
    });
    return schema;
  };

  const createDateSchema: SchemaCreator = item => {
    const schema = createTemplateSchema(item);
    Object.assign(schema["x-component-props"], {
      valueFormat: item.date_format,
      type:
        item.html_type === "DATE"
          ? item.date_format === "yyyy-MM-dd"
            ? "date"
            : item.date_format === "yyyy-MM-dd HH:mm:ss"
            ? "datetime"
            : undefined
          : undefined,
    });
    return schema;
  };

  const createCascaderSchema: SchemaCreator = item => {
    const schema = createTemplateSchema(item);
    Object.assign(schema["x-component-props"], {
      urlConfig: item.urlConfig,
      deep: item.wordbook.level_num,
    });
    return schema;
  };

  const createCombinationSchema: SchemaCreator = item => {
    const schema = createTemplateSchema(item);
    schema["x-decorator-props"].showLabel = false;
    Object.assign(schema["x-component-props"], {
      title: item.alias || item.name,
      properties: transform(item.children || []),
    });
    return schema;
  };

  const createCustomSchema: SchemaCreator = item => {
    const schema = createTemplateSchema(item);
    Object.assign(schema["x-component-props"], {
      itemConfig: item,
    });
    return schema;
  };

  const createCollapseSchema: SchemaCreator = item => {
    return {
      name: item.val_key,
      type: "void",
      title: item.alias || item.name,
      "x-component": "COLLAPSE",
    };
  };

  const creatorMap =new Map<string,SchemaCreator> ([
    ["LINEBAR", createCollapseSchema],
    ["INPUT", createTemplateSchema],
    ["SELECT", createSelectSchema],
    ["DATE", createDateSchema],
    ["SEARCH_CASCADE", createCascaderSchema],
    ["COMBINATION", createCombinationSchema],
  ]);

  const createWidgetSchema: SchemaCreator = item => {
    if (item.suffixConfig) return createWidgetCombinationSchema(item);
    const creator = creatorMap.get(item.html_type) || createCustomSchema;
    return creator(item);
  };

  const createWidgetCombinationSchema: SchemaCreator = item => {
    const suffixList: AnyObject[] = Array.isArray(item.suffixConfig)
      ? item.suffixConfig
      : [item.suffixConfig];
    const fieldList = [<AnyObject>{ ...item, suffixConfig: undefined }].concat(
      suffixList.map(suffix => {
        // 业务中此处需要渲染suffix, 但是is_show属性却在业务方错误的设置成了'0', 固定为'1'同时指定hide_title属性隐藏label
        // 也就是说, 组合控件的显隐完全由外层控件决定
        return { ...suffix, is_show: "1", hide_title: "1" };
      })
    );
    return {
      type: "void",
      title: item.alias || item.name,
      "x-component": "INPUT_GROUP",
      "x-component-props": { span: item.elem_width },
      properties: transform(fieldList),
    };
  };

  function transform(fieldList: AnyObject[]) {
    let prevCollapse: Record<string, ISchema> | null = null;
    return fieldList.reduce((fin, cur) => {
      if (cur.html_type === "LINEBAR") {
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
