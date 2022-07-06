import { connect, mapProps } from '@formily/vue';
import { NSlider } from 'naive-ui';
import { assignUpdateValue } from '../utils';

export const SLIDER = connect(
  NSlider,
  mapProps((props, field) => {
    const _props = assignUpdateValue(props, field);
    if (Array.isArray(_props.option)) {
      _props.marks = _props.option.reduce((fin: AnyObject, option: AnyObject) => {
        fin[option.value] = option.text;
        return fin;
      }, {});
    }
    return _props;
  })
);
