import { cloneDeep } from 'lodash-es';
import { FieldVisitor } from '../types';
import { isFunction } from '@vueuse/core';

export function useFieldVisitor() {
  function traverse(
    fieldList: AnyObject[],
    visitorMap?: FieldVisitor,
    key = 'val_key'
  ): AnyObject[] {
    const _fieldList = cloneDeep(fieldList);
    if (!visitorMap) return _fieldList;
    return _fieldList.reduce((fin: AnyObject[], field) => {
      const visitor = visitorMap[field[key]];
      let current = field;
      const before: AnyObject[] = [];
      const after: AnyObject[] = [];
      isFunction(visitor) && visitor({
        field,
        replace(field) {
          current = field;
        },
        insertBefore(field) {
          Array.isArray(field) ? before.push(...field) : before.push(field);
        },
        insertAfter(field) {
          Array.isArray(field) ? after.push(...field) : after.push(field);
        }
      });
      fin.push(...before, current, ...after);
      return fin;
    }, []);
  }

  return { traverse };
}
