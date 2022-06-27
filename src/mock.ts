const mockData = [
  {
    'is_not_fold': '0',
    'val_key': '基础信息',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'LINEBAR',
    'is_fast_reply_field': '1',
    'name': '基础信息',
    'hide_title': '0',
    'alias': '基础信息',
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa05',
    'elem_width': '2',
    'is_null': '0',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '姓名',
    'hide_title': '0',
    'alias': '姓名',
    'placeholder': '请输入',
    'is_drag': '0',
    'is_empty': '1',
    'validate': {
      'min_length': '2',
      'max_length': '20'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa35',
    'elem_width': '2',
    'is_null': '0',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '手机号',
    'hide_title': '0',
    'alias': '手机号',
    'placeholder': '请输入',
    'is_drag': '0',
    'is_empty': '1',
    'validate': {
      'vali_obj': 'mobile',
      'obj_type': 'mobile',
      'max_length': '11'
    },
    'group': ''
  },
  {
    'wordbook': {
      'value_key': 'aaj01',
      'search_key': [
        'aaj02'
      ],
      'render_key': [
        'aaj02'
      ],
      'name': '证件类型',
      'openWindowType': 'pop',
      'id': '1515230207727902720',
      'type': 'TABLELIST',
      'show_key': [
        'aaj02'
      ]
    },
    'val_key': 'vaa14',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '证件类型',
    'default_val': '01',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '证件类型',
    'hide_title': '0',
    'is_drag': '0'
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa15',
    'elem_width': '2',
    'is_null': '0',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '证件号码',
    'hide_title': '0',
    'alias': '证件号码',
    'placeholder': '请输入',
    'is_drag': '0',
    'is_empty': '1',
    'validate': {
      'obj_type': 'id_card',
      'max_length': '20'
    },
    'group': ''
  },
  {
    'wordbook': {
      'value_key': 'bdp02',
      'search_key': [
        'bdp02'
      ],
      'queryParamsType': '1',
      'render_key': [
        'bdp02'
      ],
      'name': '病人类别',
      'openWindowType': 'pop',
      'id': '1511664593096679424',
      'type': 'TABLELIST',
      'setting': {
        'cascading': [
          {
            'form.name': '患者费别',
            'value': 'abc02'
          }
        ]
      },
      'show_key': [
        'bdp02'
      ]
    },
    'val_key': 'bdp02',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '患者类别',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '患者类别',
    'hide_title': '0',
    'is_drag': '0'
  },
  {
    'wordbook': {
      'value_key': 'abc02',
      'search_key': [
        'abc02'
      ],
      'render_key': [
        'abc02'
      ],
      'name': '病人费别对照',
      'conObj': [
        {
          'is_compare_field': false,
          'con': 'EQ',
          'field_key': 'bdp02',
          'value': '${form.bdp02}'
        }
      ],
      'openWindowType': 'pop',
      'id': '1512727445215649792',
      'type': 'TABLELIST',
      'show_key': [
        'abc02'
      ]
    },
    'val_key': 'abc02',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAA019mWeElN0IlMjJwcmVDb25PYmolMjIlM0ElMjIlNUIlN0IlNUMlMjJpc19jb21wYXJlX2ZpZWxkJTVDJTIyJTNBZmFsc2UlMkMlNUMlMjJjb24lNUMlMjIlM0ElNUMlMjJFUSU1QyUyMiUyQyU1QyUyMmZpZWxkX2tleSU1QyUyMiUzQSU1QyUyMmJkcDAyJTVDJTIyJTJDJTVDJTIydmFsdWUlNUMlMjIlM0ElNUMlMjIlMjQlN0Jmb3JtLmJkcDAyJTdEJTVDJTIyJTdEJTVEJTIyJTdEAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '患者费别',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '患者费别',
    'hide_title': '0',
    'is_drag': '0'
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa03',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '0',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '1',
    'name': '门诊号',
    'hide_title': '0',
    'alias': '门诊号',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '20'
    },
    'group': ''
  },
  {
    'show_picture': '1',
    'val_key': 'abw01',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'RADIO',
    'is_fast_reply_field': '1',
    'alias': '性别',
    'default_val': '0',
    'is_empty': '1',
    'validate': {
      'obj_type': 'sex'
    },
    'group': '',
    'is_contain_images': 0,
    'is_null': '1',
    'option_type': 'normal',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'name': '性别',
    'hide_title': '0',
    'is_drag': '1',
    'option': [
      {
        'color': '#000000',
        'text': '男',
        'value': '1',
        'i18n': '国际化'
      },
      {
        'color': '#000000',
        'text': '女',
        'value': '2',
        'i18n': '国际化'
      }
    ]
  },
  {
    'val_key': 'vaa12',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'DATE',
    'is_fast_reply_field': '1',
    'alias': '出生日期',
    'placeholder': '请输入',
    'is_empty': '1',
    'validate': {
      'max_date': 'currTime',
      'obj_type': 'birthday'
    },
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'condition': '0',
    'unit': 'DAY',
    'is_default_first': '0',
    'multi_select': '1',
    'name': '出生日期',
    'hide_title': '0',
    'date_format': 'yyyy-MM-dd',
    'is_drag': '1'
  },
  {
    'val_key': 'vaa10',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'val_key_unit': 'aau01',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'AGE',
    'is_fast_reply_field': '1',
    'alias': '年龄',
    'showSeq': [
      'YEAR',
      'MONTH',
      'DAY',
      'WEEK',
      'HOUR',
      'MIN'
    ],
    'placeholder': '请输入',
    'is_empty': '1',
    'validate': {
      'obj_type': 'age'
    },
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'name': '年龄',
    'hide_title': '0',
    'is_drag': '1',
    'option': [
      {
        'text': '岁',
        'value': 'YEAR'
      },
      {
        'text': '月',
        'value': 'MONTH'
      },
      {
        'text': '天',
        'value': 'DAY'
      }
    ]
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'iak05',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '社会保障号',
    'hide_title': '0',
    'alias': '社会保障号',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '50'
    },
    'group': ''
  },
  {
    'wordbook': {
      'levelSetting': [
        {
          'valKey': 'bdx02_1',
          'title': '一级'
        },
        {
          'valKey': 'bdx02_2',
          'title': '二级'
        },
        {
          'valKey': 'bdx02_3',
          'title': '三级'
        }
      ],
      'value_key': 'bdx02',
      'search_key': [
        'bdx02'
      ],
      'level_num': '3',
      'render_key': [
        'bdx02'
      ],
      'name': '了解途径(客户媒介)',
      'level_key': 'bdx01a',
      'id': '1512668345840705536',
      'type': 'TABLELIST',
      'primary_key': 'bdx01',
      'show_key': [
        'bdx02'
      ]
    },
    'val_key': 'bdx02',
    'elem_width': '4',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'SEARCH_CASCADE',
    'is_fast_reply_field': '1',
    'is_allow_check_mid': '0',
    'alias': '了解途径',
    'placeholder': '请选择',
    'is_empty': '1',
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '了解途径',
    'hide_title': '0',
    'is_drag': '1',
    'is_multi': '0'
  },
  {
    'wordbook': {
      'value_key': 'abl01',
      'search_key': [
        'abl02'
      ],
      'queryParamsType': '1',
      'render_key': [
        'abl02'
      ],
      'name': '血型',
      'openWindowType': 'pop',
      'id': '1511660124086738944',
      'type': 'TABLELIST',
      'setting': '',
      'show_key': [
        'abl02'
      ]
    },
    'val_key': 'abl01',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '血型',
    'placeholder': '请选择',
    'is_empty': '0',
    'validate': '',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '血型',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'wordbook': {
      'value_key': 'ack01',
      'search_key': [
        'ack02'
      ],
      'render_key': [
        'ack02'
      ],
      'name': '婚姻状况',
      'openWindowType': 'pop',
      'id': '1512638722058756096',
      'type': 'TABLELIST',
      'show_key': [
        'ack02'
      ]
    },
    'val_key': 'ack01',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '婚姻状况',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '婚姻状况',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'wordbook': {
      'value_key': 'aay02',
      'search_key': [
        'aay02'
      ],
      'render_key': [
        'aay02'
      ],
      'name': '学历',
      'openWindowType': 'pop',
      'id': '1511662310518693888',
      'type': 'TABLELIST',
      'show_key': [
        'aay02'
      ]
    },
    'val_key': 'vaa38',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '学历',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '学历',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'wordbook': {
      'value_key': 'acp02',
      'search_key': [
        'acp02'
      ],
      'render_key': [
        'acp02'
      ],
      'name': '政治面貌(身份)',
      'openWindowType': 'pop',
      'id': '1511663240177786880',
      'type': 'TABLELIST',
      'show_key': [
        'acp02'
      ]
    },
    'val_key': 'acp02',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '政治面貌',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '政治面貌',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'wordbook': {
      'value_key': 'acc02',
      'search_key': [
        'acc02'
      ],
      'render_key': [
        'acc02'
      ],
      'name': '国家和地区（国籍）',
      'openWindowType': 'pop',
      'id': '1511661908528209920',
      'type': 'TABLELIST',
      'show_key': [
        'acc02'
      ]
    },
    'val_key': 'acc02',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '国家及地区',
    'default_val': '中国',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'bindEventSetting': [
      {
        'event_type': 'IS_SHOW_FIELD',
        'event_field': 'acc02'
      }
    ],
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '国家及地区',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'wordbook': {
      'value_key': 'abq02',
      'search_key': [
        'abq02'
      ],
      'render_key': [
        'abq02'
      ],
      'name': '民族',
      'openWindowType': 'pop',
      'id': '1511662774316441600',
      'type': 'TABLELIST',
      'show_key': [
        'abq02'
      ]
    },
    'val_key': 'abq02',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '民族',
    'default_val': '汉族',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '民族',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'wordbook': {
      'value_key': 'acm02',
      'search_key': [
        'acm02'
      ],
      'render_key': [
        'acm02'
      ],
      'name': '从业状况',
      'openWindowType': 'pop',
      'id': '1531177236287201280',
      'type': 'TABLELIST',
      'show_key': [
        'acm02'
      ]
    },
    'val_key': 'acm02',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '职业',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '职业',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa34',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '电话',
    'hide_title': '0',
    'alias': '电话',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'vali_obj': 'integer',
      'obj_type': 'mobile',
      'max_length': '12'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa36',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '电子邮箱',
    'hide_title': '0',
    'alias': '电子邮箱',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'obj_type': 'email',
      'max_length': '128'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa37',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '其它联系方式',
    'hide_title': '0',
    'alias': '其它联系方式',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '64'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa64',
    'elem_width': '12',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'TEXTAREA',
    'is_fast_reply_field': '0',
    'name': '备注',
    'hide_title': '0',
    'alias': '备注',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '500'
    },
    'group': ''
  },
  {
    'val_key': 'label',
    'elem_width': '4',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'label_type': '个人客户',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'multi_select_value': '50',
    'html_type': 'LABEL',
    'is_fast_reply_field': '1',
    'name': '患者标签',
    'hide_title': '0',
    'alias': '患者标签',
    'is_drag': '1',
    'embedded': '0',
    'is_empty': '1',
    'group': ''
  },
  {
    'wordbook': {
      'openWindowType': 'pop'
    },
    'val_key': 'ga',
    'elem_width': '2',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'free_entry': '0',
    'html_type': 'SEARCH',
    'is_fast_reply_field': '1',
    'alias': '患者来源',
    'placeholder': '请选择',
    'is_empty': '0',
    'group': '',
    'buttonOpenWindowType': 'pop',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '0',
    'show_type': 'search',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '患者来源',
    'hide_title': '0',
    'is_drag': '1'
  },
  {
    'is_not_fold': '0',
    'val_key': '过敏信息',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'LINEBAR',
    'is_fast_reply_field': '1',
    'name': '过敏信息',
    'hide_title': '0',
    'alias': '过敏信息',
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'val_key': 'van1s',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'children': [
      {
        'wordbook': {
          'value_key': 'gmlx01',
          'search_key': [
            'gmlx02'
          ],
          'render_key': [
            'gmlx02'
          ],
          'name': '过敏类型',
          'openWindowType': 'pop',
          'id': '1511669535568044032',
          'type': 'TABLELIST',
          'show_key': [
            'gmlx02'
          ]
        },
        'val_key': 'gmlx01',
        'elem_width': '2',
        'is_back': '0',
        'is_show_select_all': '0',
        'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
        'is_admin': '1',
        'selectAllText': '全选',
        'free_entry': '0',
        'html_type': 'SEARCH',
        'is_fast_reply_field': '1',
        'alias': '过敏类型',
        'placeholder': '请选择',
        'is_empty': '0',
        'group': '',
        'buttonOpenWindowType': 'pop',
        'is_null': '1',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'show_type': 'search',
        'is_default_first': '0',
        'multi_select': '1',
        'is_recommend': '0',
        'name': '过敏类型',
        'hide_title': '0',
        'is_drag': '1'
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'van10',
        'elem_width': '4',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'INPUT',
        'is_fast_reply_field': '0',
        'name': '过敏源',
        'hide_title': '0',
        'alias': '过敏源',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'max_length': '64'
        },
        'group': ''
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'zzms01s',
        'elem_width': '6',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'INPUT',
        'is_fast_reply_field': '0',
        'name': '症状描述',
        'hide_title': '0',
        'alias': '症状描述',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'max_length': '255'
        },
        'group': ''
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'van11',
        'elem_width': '12',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'initialize_high': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'TEXTAREA',
        'is_fast_reply_field': '0',
        'name': '过敏备注',
        'hide_title': '0',
        'alias': '过敏备注',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'max_length': '256'
        },
        'group': ''
      }
    ],
    'html_type': 'COMBINATION',
    'is_fast_reply_field': '1',
    'name': '过敏',
    'hide_title': '0',
    'alias': '过敏',
    'cascading': [
      '过敏类型',
      '过敏源',
      '症状描述',
      '过敏备注'
    ],
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'is_not_fold': '0',
    'val_key': '分线栏',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'LINEBAR',
    'is_fast_reply_field': '1',
    'name': '家庭信息',
    'hide_title': '0',
    'alias': '家庭信息',
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'wordbook': {
      'levelSetting': [
        {
          'valKey': 'a_province',
          'title': '省'
        },
        {
          'valKey': 'city',
          'title': '市'
        },
        {
          'valKey': 'county',
          'title': '区'
        },
        {
          'valKey': 'street',
          'title': '街道'
        }
      ],
      'value_key': 'abu02',
      'search_key': [
        'abu02'
      ],
      'level_num': '4',
      'render_key': [
        'abu02'
      ],
      'name': '国家省市区',
      'level_key': 'parent_id',
      'id': '1513358948689780736',
      'type': 'TABLELIST',
      'primary_key': 'abu01',
      'show_key': [
        'abu02'
      ]
    },
    'val_key': 'vaa90',
    'elem_width': '6',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'SEARCH_CASCADE',
    'is_fast_reply_field': '1',
    'is_allow_check_mid': '0',
    'alias': '出生地址',
    'placeholder': '请选择',
    'is_empty': '1',
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '出生地址',
    'hide_title': '0',
    'is_drag': '1',
    'is_multi': '0'
  },
  {
    'wordbook': {
      'levelSetting': [
        {
          'valKey': 'd_province',
          'title': '省'
        },
        {
          'valKey': 'city',
          'title': '市'
        },
        {
          'valKey': 'county',
          'title': '区'
        },
        {
          'valKey': 'street',
          'title': '街道'
        }
      ],
      'value_key': 'abu02',
      'search_key': [
        'abu02'
      ],
      'level_num': '4',
      'render_key': [
        'abu02'
      ],
      'name': '国家省市区',
      'level_key': 'parent_id',
      'id': '1513358948689780736',
      'type': 'TABLELIST',
      'primary_key': 'abu01',
      'show_key': [
        'abu02'
      ]
    },
    'val_key': 'vaa91',
    'elem_width': '6',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'SEARCH_CASCADE',
    'is_fast_reply_field': '1',
    'is_allow_check_mid': '0',
    'alias': '籍贯',
    'placeholder': '请选择',
    'is_empty': '1',
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '籍贯',
    'hide_title': '0',
    'is_drag': '1',
    'is_multi': '0'
  },
  {
    'wordbook': {
      'levelSetting': [
        {
          'valKey': 'b_province',
          'title': '省'
        },
        {
          'valKey': 'city',
          'title': '市'
        },
        {
          'valKey': 'county',
          'title': '区'
        },
        {
          'valKey': 'street',
          'title': '街道'
        }
      ],
      'value_key': 'abu02',
      'search_key': [
        'abu02'
      ],
      'level_num': '4',
      'render_key': [
        'abu02'
      ],
      'name': '国家省市区',
      'level_key': 'parent_id',
      'id': '1513358948689780736',
      'type': 'TABLELIST',
      'primary_key': 'abu01',
      'show_key': [
        'abu02'
      ]
    },
    'val_key': 'vaa87',
    'elem_width': '6',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'SEARCH_CASCADE',
    'is_fast_reply_field': '1',
    'is_allow_check_mid': '0',
    'alias': '户口地址',
    'placeholder': '请选择',
    'is_empty': '1',
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '户口地址',
    'hide_title': '0',
    'is_drag': '1',
    'is_multi': '0'
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa28',
    'elem_width': '6',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '详细户口地址',
    'hide_title': '0',
    'alias': '详细户口地址',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '128'
    },
    'group': ''
  },
  {
    'wordbook': {
      'levelSetting': [
        {
          'valKey': 'c_province',
          'title': '省'
        },
        {
          'valKey': 'city',
          'title': '市'
        },
        {
          'valKey': 'county',
          'title': '区'
        },
        {
          'valKey': 'street',
          'title': '街道'
        }
      ],
      'value_key': 'abu02',
      'search_key': [
        'abu02'
      ],
      'level_num': '4',
      'render_key': [
        'abu02'
      ],
      'name': '国家省市区',
      'level_key': 'parent_id',
      'id': '1513358948689780736',
      'type': 'TABLELIST',
      'primary_key': 'abu01',
      'show_key': [
        'abu02'
      ]
    },
    'val_key': 'vaa88',
    'elem_width': '6',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'SEARCH_CASCADE',
    'is_fast_reply_field': '1',
    'is_allow_check_mid': '0',
    'alias': '常住地址',
    'placeholder': '请选择',
    'is_empty': '1',
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '常住地址',
    'hide_title': '0',
    'is_drag': '1',
    'is_multi': '0'
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa33',
    'elem_width': '6',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '详细常住地址',
    'hide_title': '0',
    'alias': '详细常住地址',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '64'
    },
    'group': ''
  },
  {
    'is_not_fold': '0',
    'val_key': '联系人信息',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'LINEBAR',
    'is_fast_reply_field': '1',
    'name': '联系人信息',
    'hide_title': '0',
    'alias': '联系人信息',
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'val_key': 'vaac1s',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'children': [
      {
        'wordbook': {
          'value_key': 'aaz02',
          'search_key': [
            'aaz02'
          ],
          'render_key': [
            'aaz02'
          ],
          'name': '关系',
          'openWindowType': 'pop',
          'id': '1515263622766403584',
          'type': 'TABLELIST',
          'show_key': [
            'aaz02'
          ]
        },
        'val_key': 'vaac05',
        'elem_width': '2',
        'is_back': '0',
        'is_show_select_all': '0',
        'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
        'is_admin': '1',
        'selectAllText': '全选',
        'free_entry': '0',
        'html_type': 'SEARCH',
        'is_fast_reply_field': '1',
        'alias': '联系人关系',
        'placeholder': '请选择',
        'is_empty': '0',
        'group': '',
        'buttonOpenWindowType': 'pop',
        'is_null': '1',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'show_type': 'search',
        'is_default_first': '0',
        'multi_select': '1',
        'is_recommend': '0',
        'name': '联系人关系',
        'hide_title': '0',
        'is_drag': '1'
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'vaac02',
        'elem_width': '2',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'INPUT',
        'is_fast_reply_field': '0',
        'name': '联系人姓名',
        'hide_title': '0',
        'alias': '联系人姓名',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'max_length': '255'
        },
        'group': ''
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'vaac09',
        'elem_width': '2',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'INPUT',
        'is_fast_reply_field': '0',
        'name': '联系人手机号',
        'hide_title': '0',
        'alias': '联系人手机号',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'vali_obj': 'mobile',
          'obj_type': 'mobile',
          'max_length': '11'
        },
        'group': ''
      },
      {
        'wordbook': {
          'value_key': 'aaj01',
          'search_key': [
            'aaj02'
          ],
          'render_key': [
            'aaj02'
          ],
          'name': '证件类型',
          'openWindowType': 'pop',
          'id': '1515230207727902720',
          'type': 'TABLELIST',
          'show_key': [
            'aaj02'
          ]
        },
        'val_key': 'vaac03',
        'elem_width': '2',
        'is_back': '0',
        'is_show_select_all': '0',
        'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
        'is_admin': '1',
        'selectAllText': '全选',
        'free_entry': '0',
        'html_type': 'SEARCH',
        'is_fast_reply_field': '1',
        'alias': '联系人证件类型',
        'placeholder': '请选择',
        'is_empty': '0',
        'group': '',
        'buttonOpenWindowType': 'pop',
        'is_null': '1',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'show_type': 'search',
        'is_default_first': '0',
        'multi_select': '1',
        'is_recommend': '0',
        'name': '联系人证件类型',
        'hide_title': '0',
        'is_drag': '1'
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'vaac04',
        'elem_width': '2',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'INPUT',
        'is_fast_reply_field': '0',
        'name': '联系人证件号码',
        'hide_title': '0',
        'alias': '联系人证件号码',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'obj_type': 'id_card',
          'max_length': '20'
        },
        'group': ''
      },
      {
        'wordbook': {
          'levelSetting': [
            {
              'valKey': 'f_province',
              'title': '省'
            },
            {
              'valKey': 'city',
              'title': '市'
            },
            {
              'valKey': 'county',
              'title': '区'
            },
            {
              'valKey': 'street',
              'title': '街道'
            }
          ],
          'value_key': 'abu02',
          'search_key': [
            'abu02'
          ],
          'level_num': '4',
          'render_key': [
            'abu02'
          ],
          'name': '国家省市区',
          'level_key': 'parent_id',
          'id': '1513358948689780736',
          'type': 'TABLELIST',
          'primary_key': 'abu01',
          'show_key': [
            'abu02'
          ]
        },
        'val_key': 'vaac06',
        'elem_width': '6',
        'is_back': '0',
        'is_show_select_all': '0',
        'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
        'is_admin': '1',
        'selectAllText': '全选',
        'html_type': 'SEARCH_CASCADE',
        'is_fast_reply_field': '1',
        'is_allow_check_mid': '0',
        'alias': '联系人地址',
        'placeholder': '请选择',
        'is_empty': '1',
        'group': '',
        'is_null': '1',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_default_first': '0',
        'multi_select': '1',
        'is_recommend': '0',
        'name': '联系人地址',
        'hide_title': '0',
        'is_drag': '1',
        'is_multi': '0'
      },
      {
        'delete_before_after_spaces': '1',
        'val_key': 'vaac07',
        'elem_width': '6',
        'is_null': '1',
        'is_back': '0',
        'is_show_select_all': '0',
        'is_edit': '1',
        'is_system_fields': '1',
        'is_show': '1',
        'is_admin': '1',
        'selectAllText': '全选',
        'is_default_first': '0',
        'multi_select': '1',
        'html_type': 'INPUT',
        'is_fast_reply_field': '0',
        'name': '详细联系人地址',
        'hide_title': '0',
        'alias': '详细联系人地址',
        'placeholder': '请输入',
        'is_drag': '1',
        'is_empty': '1',
        'validate': {
          'max_length': '255'
        },
        'group': ''
      }
    ],
    'html_type': 'COMBINATION',
    'is_fast_reply_field': '1',
    'name': '联系人',
    'hide_title': '0',
    'alias': '联系人',
    'cascading': [
      '联系人关系',
      '联系人姓名',
      '联系人手机号',
      '联系人证件类型',
      '联系人证件号码',
      '联系人地址',
      '详细联系人地址'
    ],
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'is_not_fold': '0',
    'val_key': '单位信息',
    'elem_width': 12,
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'LINEBAR',
    'is_fast_reply_field': '1',
    'name': '单位信息',
    'hide_title': '0',
    'alias': '单位信息',
    'is_drag': '1',
    'is_empty': '1',
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa47',
    'elem_width': '4',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '工作单位',
    'hide_title': '0',
    'alias': '工作单位',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '64'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa48',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '单位电话',
    'hide_title': '0',
    'alias': '单位电话',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '20'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa51',
    'elem_width': '4',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '单位开户行',
    'hide_title': '0',
    'alias': '单位开户行',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '64'
    },
    'group': ''
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa52',
    'elem_width': '2',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '单位开户行帐号',
    'hide_title': '0',
    'alias': '单位开户行帐号',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '20'
    },
    'group': ''
  },
  {
    'wordbook': {
      'levelSetting': [
        {
          'valKey': 'e_province',
          'title': '省'
        },
        {
          'valKey': 'city',
          'title': '市'
        },
        {
          'valKey': 'county',
          'title': '区'
        },
        {
          'valKey': 'street',
          'title': '街道'
        }
      ],
      'value_key': 'abu02',
      'search_key': [
        'abu02'
      ],
      'level_num': '4',
      'render_key': [
        'abu02'
      ],
      'name': '国家省市区',
      'level_key': 'parent_id',
      'id': '1513358948689780736',
      'type': 'TABLELIST',
      'primary_key': 'abu01',
      'show_key': [
        'abu02'
      ]
    },
    'val_key': 'vaa89',
    'elem_width': '6',
    'is_back': '0',
    'is_show_select_all': '0',
    'autograph': 'AAAABkJI7gIlN0IlN0QAAAAAAAAAAA',
    'is_admin': '1',
    'selectAllText': '全选',
    'html_type': 'SEARCH_CASCADE',
    'is_fast_reply_field': '1',
    'is_allow_check_mid': '0',
    'alias': '工作单位地址',
    'placeholder': '请选择',
    'is_empty': '1',
    'group': '',
    'is_null': '1',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_default_first': '0',
    'multi_select': '1',
    'is_recommend': '0',
    'name': '工作单位地址',
    'hide_title': '0',
    'is_drag': '1',
    'is_multi': '0'
  },
  {
    'delete_before_after_spaces': '1',
    'val_key': 'vaa49',
    'elem_width': '6',
    'is_null': '1',
    'is_back': '0',
    'is_show_select_all': '0',
    'is_edit': '1',
    'is_system_fields': '1',
    'is_show': '1',
    'is_admin': '1',
    'selectAllText': '全选',
    'is_default_first': '0',
    'multi_select': '1',
    'html_type': 'INPUT',
    'is_fast_reply_field': '0',
    'name': '详细单位地址',
    'hide_title': '0',
    'alias': '详细单位地址',
    'placeholder': '请输入',
    'is_drag': '1',
    'is_empty': '1',
    'validate': {
      'max_length': '64'
    },
    'group': ''
  }
];

const initialData = {
  "vaa01": "1539050067453108225",
  "vaa02": null,
  "vaa03": "MZ103680",
  "vaa04": null,
  "vaa05": "6月21-上午",
  "vaa06": null,
  "abbrp": null,
  "abw01": "2",
  "vaa10": 25,
  "aau01": "YEAR",
  "vaa12": "1997-03-07",
  "ack01": null,
  "vaa14": "01",
  "vaa15": "15040219970307948X",
  "vaa16": null,
  "abj01": null,
  "bdp02": "无力偿付",
  "abc02": "自费",
  "acm02": null,
  "aat02": null,
  "acc02": "中国",
  "abq02": "汉族",
  "vaa26": null,
  "vaa27": null,
  "vaa29": null,
  "vaa30": null,
  "vaa34": null,
  "vaa35": "13443233334",
  "vaa36": null,
  "vaa37": null,
  "vaa38": null,
  "vaa39": null,
  "vaa40": null,
  "vaa41": null,
  "vaa43": null,
  "vaa44": null,
  "baq01": null,
  "baq02": null,
  "vaa47": null,
  "vaa48": null,
  "vaa50": null,
  "vaa51": null,
  "vaa52": null,
  "vaa53": null,
  "vaa54": null,
  "vaa55": null,
  "vaa56": null,
  "vaa57": null,
  "bck01a": 92,
  "vaa61": 1,
  "vaa62": null,
  "bdx02": null,
  "vaa64": null,
  "vbu01": null,
  "vaa66": null,
  "vaa67": null,
  "iak05": null,
  "iaa01": null,
  "bck01b": null,
  "bck01c": null,
  "bcq04": null,
  "vaa73": null,
  "vaa74": null,
  "vaa75": null,
  "vaa76": null,
  "abl01": null,
  "vaa78": null,
  "bep05": null,
  "bep06": null,
  "abl01a": null,
  "abl01b": null,
  "bep06b": null,
  "vaa82": null,
  "vaa01a": "0",
  "vaa84": null,
  "vaa18": null,
  "vaa19": null,
  "hospitalid": null,
  "vaa17": null,
  "serialid": 129614,
  "vaa21": null,
  "modifieddate": "2022-06-22 10:50:07",
  "vaa86": null,
  "sca56": null,
  "outvaa01": null,
  "bck01h": null,
  "abce01": null,
  "abce03": null,
  "gcp": null,
  "companion": null,
  "source": null,
  "vaa25": null,
  "vaa28": null,
  "vaa33": null,
  "van1s": "[{\"acf01\":1,\"van10\":\"123\",\"van09\":1655805253048,\"bce03c\":\"邓真\",\"bce01b\":6008365,\"bce01c\":6008365,\"van05\":1539184166938218502,\"van08\":\"0\",\"bce03b\":\"邓真\",\"van01\":\"1539184906533691393\",\"bbx01\":11654,\"updateBce01\":6008365,\"bbx05\":\"皮下注射（皮试）\",\"updateBce03\":\"邓真\",\"vaa07\":1539050350995181569,\"bce03\":\"邓真\",\"bce01\":6008365,\"vaa01\":\"1539050067453108225\"},{\"acf01\":1,\"van09\":1655805253132,\"bce03c\":\"邓真\",\"bce01b\":6008365,\"bce01c\":6008365,\"van05\":1539184166938218499,\"van08\":\"0\",\"bce03b\":\"邓真\",\"van01\":\"1539184906886012930\",\"bbx01\":6781,\"updateBce01\":6008365,\"bbx05\":\"破伤风人免疫球蛋白\",\"updateBce03\":\"邓真\",\"vaa07\":1539050350995181569,\"bce03\":\"邓真\",\"bce01\":6008365,\"vaa01\":\"1539050067453108225\"},{\"acf01\":1,\"van09\":1655773692730,\"bce03c\":\"邓真\",\"bce01b\":6008365,\"updatedTime\":1655773800142,\"bce01c\":6008365,\"van05\":1539051289311318021,\"van08\":\"1\",\"bce03b\":\"邓真\",\"van01\":\"1539052532965662721\",\"bbx01\":12127,\"updateBce01\":6008365,\"bbx05\":\"青霉素皮试\",\"updateBce03\":\"邓真\",\"vaa07\":1539050350995181569,\"bce03\":\"邓真\",\"bce01\":6008365,\"vaa01\":\"1539050067453108225\"},{\"acf01\":1,\"van09\":1655773692779,\"bce03c\":\"邓真\",\"bce01b\":6008365,\"updatedTime\":1655773800194,\"bce01c\":6008365,\"van05\":1539051289311318018,\"van08\":\"1\",\"bce03b\":\"邓真\",\"van01\":\"1539052533175377921\",\"bbx01\":6748,\"updateBce01\":6008365,\"bbx05\":\"门冬氨酸钾镁针（限）\",\"updateBce03\":\"邓真\",\"vaa07\":1539050350995181569,\"bce03\":\"邓真\",\"bce01\":6008365,\"vaa01\":\"1539050067453108225\"},{\"acf01\":1,\"van09\":1655783802352,\"bce03c\":\"万超\",\"bce01b\":6009823,\"bce01c\":6009823,\"van05\":1539089180074840070,\"van08\":\"0\",\"bce03b\":\"万超\",\"van01\":\"1539094935793655810\",\"bbx01\":11654,\"updateBce01\":6009823,\"bbx05\":\"皮下注射（皮试）\",\"updateBce03\":\"万超\",\"vaa07\":1539050350995181569,\"bce03\":\"万超\",\"bce01\":6009823,\"bag02\":\"044444,0切切\",\"vaa01\":\"1539050067453108225\"},{\"acf01\":1,\"van09\":1655783802408,\"bce03c\":\"万超\",\"bce01b\":6009823,\"bce01c\":6009823,\"van05\":1539089180074840067,\"van08\":\"0\",\"bce03b\":\"万超\",\"van01\":\"1539094936020148225\",\"bbx01\":6781,\"updateBce01\":6009823,\"bbx05\":\"破伤风人免疫球蛋白\",\"updateBce03\":\"万超\",\"vaa07\":1539050350995181569,\"bce03\":\"万超\",\"bce01\":6009823,\"bag02\":\"044444,0切切\",\"vaa01\":\"1539050067453108225\"}]",
  "vaa49": null,
  "vaa20": null,
  "vaa87": "{\"city\": \"\", \"objs\": [], \"county\": \"\", \"objStr\": \"内蒙古自治区赤峰市/红山区\", \"street\": \"\", \"b_province\": \"\"}",
  "vaa88": null,
  "vaa89": null,
  "vaa90": null,
  "vaa91": null,
  "vaac1s": "[]",
  "acp02": null,
  "aau02": "岁",
  "label": null,
  "imgFlag": 7,
  "vaa93": "IHO",
  "createdTime": "2022-06-21 08:58:24",
  "createdBy": "6008365",
  "updatedTime": "2022-06-22 10:50:07",
  "updatedBy": "6009819"
};

export { mockData, initialData };
