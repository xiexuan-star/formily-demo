import { AnyObject } from '@/types';

export type ValidateItem = Partial<{
  obj_type: string;
  vali_obj: string;
  max_value: string | number;
  min_value: string | number;
  min_length: string | number;
  max_length: string | number;
  decimal_length: string | number;
  regular_expression: any;
  regular_error_tip: string;
  [key: string]: any;
}>

interface OptionItem {
  text: string;
  value: string;
  children?: OptionItem[];
}

export interface Ievent {
  event_field: string;
  event_type: string;
}

//表单配置单项
export type FieldItem = {
  val_key: string; // 字段的key
  elem_width: number; // 字段的宽度
  html_type: string;
} & Partial<{
  is_edit: string;
  is_show: string | number;
  is_null: string;
  name: string;
  alias: string;
  default_val: string;
  is_empty: string;
  group: string;
  hide_title: string;
  placeholder: string;
  validate?: ValidateItem;
  option?: OptionItem[];
  wordbook?: AnyObject;
  suFieldList?: any[]; // 分线栏的子元素
  bindEventSetting?: Ievent[];
  [key: string]: any;
}>
