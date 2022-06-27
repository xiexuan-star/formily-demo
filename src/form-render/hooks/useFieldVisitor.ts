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
            Array.isArray(field) ? before.push(...field) : before.push(field);
          },
          insertAfter(field) {
            Array.isArray(field) ? after.push(...field) : after.push(field);
          },
        });
      fin.push(...before, current, ...after);
      return fin;
    }, []);
  }

  return { traverse };
}
