export function useFormilyFormatter() {
  function formatter(fieldList: Record<string, any>[]) {
    return fieldList.reduce((fin, cur) => {
      fin[cur.val_key] = {
        name: cur.val_key,
        title: cur.alias || cur.name,
        "x-decorator": "FORM_ITEM",
        "x-component": cur.html_type,
      };
      return fin;
    }, {} as Record<string, any>);
  }
  return { formatter };
}
