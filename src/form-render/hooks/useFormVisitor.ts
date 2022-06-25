import { FormVisitorMap } from "../types";
import { isFunction } from "@vueuse/core";

export function useFormVisitor() {
  function traverse(
    fieldList: Record<string, any>[],
    visitorMap?: FormVisitorMap,
    key = "val_key"
  ) {
    if (!visitorMap) return fieldList;
    return fieldList.map(field => {
      const visitor = visitorMap[field[key]];
      return isFunction(visitor) ? visitor(field) : field;
    });
  }

  return { traverse };
}
