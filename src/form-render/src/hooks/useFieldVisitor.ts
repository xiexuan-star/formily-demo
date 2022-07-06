import { arrayed } from "../utils";
import { FieldItem, FieldVisitor } from "../types";
import { isFunction } from "@vueuse/core";

// filed字段实例访问器, 设计上基本上模仿了babel.traverse的做法
export function useFieldVisitor() {
  function traverse(
    fieldList: FieldItem[],
    visitorMap?: FieldVisitor,
    key = "val_key"
  ): FieldItem[] {
    if (!visitorMap) return fieldList;
    return fieldList.reduce((fin: FieldItem[], field) => {
      if (Array.isArray(field.children)) {
        field.children = traverse(field.children, visitorMap, key);
      }
      if (field.suffixConfig) {
        field.suffixConfig = traverse(arrayed(field.suffixConfig!), visitorMap, key);
      }
      const visitor = visitorMap[field[key]];
      let current = field;
      const before: FieldItem[] = [];
      const after: FieldItem[] = [];
      isFunction(visitor) &&
        visitor({
          field,
          replace(field) {
            current = field;
          },
          insertBefore(field) {
            before.push(...arrayed(field));
          },
          insertAfter(field) {
            after.push(...arrayed(field));
          },
        });
      fin.push(...before, current, ...after);
      return fin;
    }, []);
  }

  return { traverse };
}
