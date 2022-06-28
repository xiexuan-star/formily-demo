import { FieldItem } from '../types';

// sideEffect
// 胶水层, 将低代码中的控件转换成FormRender中的基本控件
export function useTypeNormalize() {
  function normalizeAgeField(item: FieldItem) {
    item.html_type = 'INPUT';
    item.suffixConfig = [
      {
        val_key: item.val_key_unit,
        html_type: 'SELECT',
        option: item.option
      }
    ];
  }

  const types: [string | string[], string][] = [
    [['SEARCH', 'PHONE_TYPE', 'IDCARD_TYPE'], 'SELECT'],
    ['DIGITAL', 'INPUT_NUMBER'],
    ['CHECKBOX_BLOCK', 'CHECKBOX'],
    ['RADIO_BLOCK', 'RADIO'],
    [['DATE', 'DATE-INPUT', 'DATETIME-INPUT'], 'DATE'],
    ['SWITCH_COMPONENT', 'SWITCH'],
    ['SLIDER_COMPONENT', 'SLIDER'],
  ];

  function normalize(item: FieldItem) {
    const type = item.html_type;
    if (['CHECK_BLOCK', 'RADIO_BLOCK'].includes(item.html_type)) {
      item.__vertical = true;
    }
    if (item.html_type === 'AGE') {
      normalizeAgeField(item);
    }
    types.some(([rule, target]) => {
      const match = Array.isArray(rule) ? rule.includes(type) : rule === type;
      return match && (item.html_type = target);
    });
  }

  return { normalize };
}
