<template>
  <section style="padding: 20px">
    <formily-render ref="formilyRenderRef" :schema="schema" :column="8"/>
    <n-button @click="validate">validate</n-button>
  </section>
</template>

<script lang="ts" setup>
import { ISchema } from '@formily/json-schema/esm/types';
import { ref } from 'vue';
import FormilyRender from './formily-render/formilyRender.vue';

const schema: ISchema = {
  type: 'object',
  properties: {
    panel_1: {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-component-props': { title: 'required' },
      properties: {
        required_1: {
          name: 'required_1',
          title: '必填1',
          type: 'string',
          required: true,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        required_2: {
          name: 'required_2',
          title: '必填2',
          type: 'string',
          'x-validator': {
            required: true,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        required_3: {
          name: 'required_3',
          title: '必填3',
          type: 'string',
          'x-validator': [
            {
              required: true,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
      }
    },
    panel_2: {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-component-props': { title: 'max' },
      properties: {
        max_1: {
          name: 'max_1',
          title: '最大值(>5报错)1',
          type: 'number',
          maximum: 5,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        max_2: {
          name: 'max_2',
          title: '最大值(>5报错)2',
          type: 'number',
          'x-validator': {
            maximum: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        max_3: {
          name: 'max_3',
          title: '最大值(>5报错)3',
          type: 'number',
          'x-validator': [
            {
              maximum: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        max_4: {
          name: 'max_4',
          title: '最大值(>=5报错)4',
          type: 'number',
          exclusiveMaximum: 5,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        max_5: {
          name: 'max_5',
          title: '最大值(>=5报错)5',
          type: 'number',
          'x-validator': {
            exclusiveMaximum: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        max_6: {
          name: 'max_6',
          title: '最大值(>=5报错)6',
          type: 'number',
          'x-validator': [
            {
              exclusiveMaximum: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
      }
    },
    panel_3: {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-component-props': { title: 'min' },
      properties: {
        min_1: {
          name: 'min_1',
          title: '最小值(<5报错)1',
          type: 'number',
          minimum: 5,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        min_2: {
          name: 'min_2',
          title: '最小值(<5报错)2',
          type: 'number',
          'x-validator': {
            minimum: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        min_3: {
          name: 'min_3',
          title: '最小值(<5报错)3',
          type: 'string',
          'x-validator': [
            {
              minimum: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        min_4: {
          name: 'min_4',
          title: '最小值(<=5报错)4',
          type: 'number',
          exclusiveMinimum: 5,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        min_5: {
          name: 'min_5',
          title: '最小值(<=5报错)5',
          type: 'number',
          'x-validator': {
            exclusiveMinimum: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
        min_6: {
          name: 'min_6',
          title: '最小值(<=5报错)6',
          type: 'number',
          'x-validator': [
            {
              exclusiveMinimum: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT_NUMBER',
        },
      }
    },
    panel_4: {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-component-props': { title: 'length' },
      properties: {
        length_1: {
          name: 'length_1',
          title: '长度为5_1',
          type: 'string',
          'x-validator': {
            len: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        length_2: {
          name: 'length_2',
          title: '长度为5_2',
          type: 'string',
          'x-validator': [
            {
              len: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
      }
    },
    panel_5: {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-component-props': { title: 'maxLength' },
      properties: {
        maxlength_1: {
          name: 'maxlength_1',
          title: '最大长度为5_1',
          type: 'string',
          maxLength: 5,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        maxlength_2: {
          name: 'maxlength_2',
          title: '最大长度为5_2',
          type: 'string',
          'x-validator': {
            max: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        maxlength_3: {
          name: 'maxlength_3',
          title: '最大长度为5_3',
          type: 'string',
          'x-validator': [
            {
              max: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
      }
    },
    panel_6: {
      type: 'void',
      'x-component': 'COLLAPSE',
      'x-component-props': { title: 'minLength' },
      properties: {
        minlength_1: {
          name: 'minlength_1',
          title: '最小长度为5_1',
          type: 'string',
          minLength: 5,
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        minlength_2: {
          name: 'minlength_2',
          title: '最小长度为5_2',
          type: 'string',
          'x-validator': {
            min: 5,
          },
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
        minlength_3: {
          name: 'minlength_3',
          title: '最小长度为5_3',
          type: 'string',
          'x-validator': [
            {
              min: 5,
            },
          ],
          'x-decorator': 'FORM_ITEM',
          'x-component': 'INPUT',
        },
      }
    },
    whitespace: {
      name: 'whitespace',
      title: '排除纯空白字符',
      type: 'string',
      'x-validator': [
        {
          whitespace: true,
        },
      ],
      'x-decorator': 'FORM_ITEM',
      'x-component': 'INPUT',
    },
    enum: {
      name: 'enum',
      title: '枚举匹配',
      type: 'string',
      'x-validator': [
        {
          enum: ['1', '2', '3'],
        },
      ],
      'x-decorator': 'FORM_ITEM',
      'x-component': 'INPUT',
    },
    const: {
      name: 'const',
      title: '常量匹配',
      type: 'string',
      const: '123',
      'x-decorator': 'FORM_ITEM',
      'x-component': 'INPUT',
    },
    multipleOf: {
      name: 'multipleOf',
      title: '整除匹配',
      type: 'string',
      multipleOf: 2,
      'x-decorator': 'FORM_ITEM',
      'x-component': 'INPUT_NUMBER',
    }
  }
};

const formilyRenderRef = ref<any>();

async function validate() {
  await formilyRenderRef.value?.validate();
}
</script>
