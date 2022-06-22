<template>
  <n-form>
    <section class="formily-render__wrapper" :style="{'--column':column}">
      <form-provider :form="form">
        <schema-field :schema="renderSchema"/>
        <form-consumer>
          <template #default="{ form }">
            <div style="white-space: pre">
              {{ JSON.stringify(form.values, null, 2) }}
            </div>
          </template>
        </form-consumer>
      </form-provider>
    </section>
  </n-form>
</template>

<script lang="ts" setup>
import { ISchema } from '@formily/json-schema/esm/types';
import { useFormilyFormatter } from './hooks';
import { TEXTAREA, INPUT, SELECT, FORM_ITEM, INPUT_NUMBER, COLLAPSE } from './components';
import { computed, PropType, ref } from 'vue';
import { createForm } from '@formily/core';
import { createSchemaField, FormProvider, FormConsumer } from '@formily/vue';
import { log } from './utils';

const props = defineProps({
  fieldList: { type: Array as PropType<Record<string, any>[]> },
  schema: { type: Object as PropType<ISchema> },
  column: { type: Number, default: 4 }
});

const { formatter } = useFormilyFormatter();

const form = createForm({
  effects() {},
});

const { SchemaField } = createSchemaField({
  components: {
    TEXTAREA,
    INPUT,
    SELECT,
    FORM_ITEM,
    INPUT_NUMBER,
    COLLAPSE
  }
});

const renderSchema = computed<ISchema>(() => {
  if (props.schema) {
    return props.schema;
  } else if (props.fieldList) {
    return {
      type: 'object',
      properties: formatter(props.fieldList),
    };
  }
  log(`invalid props field, you should provide at least one of schema or fieldList`, 'warn');
  return { type: 'object', properties: [] };
});

defineExpose({
  validate() {
    return form.validate();
  }
});
</script>

<style lang="less">
.formily-grid-display {
  display: grid !important;
  grid-template-columns: repeat(var(--column), minmax(0px, 1fr));
  gap: 0 12px;
}

.formily-render__wrapper {
  .formily-grid-display();

  .formily-render__collapse {
    grid-column: span var(--column) / span var(--column);

    > header {
      cursor: pointer;
      display: flex;
      background: #fafafa;
      height: 36px;
      align-items: center;
      padding: 0 16px;
      margin-bottom: 8px;
      border: 1px solid #d9d9d9;
    }
  }

  .formily-render__collapse__item {
    .formily-grid-display();
  }
}
</style>
