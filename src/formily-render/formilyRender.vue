<template>
  <section class="formily-render__wrapper" :style="{ '--column': column }">
    <form-provider :form="formModel">
      <schema-field :schema="renderSchema"/>
    </form-provider>
  </section>
</template>

<script lang="ts" setup>
import { ISchema } from '@formily/json-schema/esm/types';
import { useFieldList2Schema } from './hooks';
import {
  TEXTAREA,
  INPUT,
  SELECT,
  FORM_ITEM,
  INPUT_NUMBER,
  COLLAPSE,
  INPUT_GROUP, DATE,
} from './components';
import { computed, PropType } from 'vue';
import { createForm } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/vue';
import { log } from './utils';

const props = defineProps({
  fieldList: { type: Array as PropType<Record<string, any>[]> },
  schema: { type: Object as PropType<ISchema> },
  column: { type: Number, default: 12 },
  initialData: { type: Object as PropType<Record<string, any>>, default: () => ({}) },
});

const { transform } = useFieldList2Schema();

const formModel = createForm({
  initialValues: props.initialData,
});

const { SchemaField } = createSchemaField({
  components: {
    TEXTAREA,
    INPUT,
    INPUT_GROUP,
    SELECT,
    FORM_ITEM,
    INPUT_NUMBER,
    COLLAPSE,
    DATE
  },
});

const renderSchema = computed<ISchema>(() => {
  if (props.schema) {
    return props.schema;
  } else if (props.fieldList) {
    return {
      type: 'object',
      properties: transform(props.fieldList),
    };
  }
  log(`invalid props field, you should provide at least one of schema or fieldList`, 'warn');
  return { type: 'object', properties: [] };
});

defineExpose({
  validate() {
    return formModel.validate();
  },
});
</script>

<style lang="less">
@block: ~"formily-render";

#formily-grid() {
  .display(@column) {
    display: grid !important;
    grid-template-columns: repeat(@column, minmax(0px, 1fr));
    gap: 0 12px;
  }
  .item(@column) {
    grid-column: span @column / span @column;
  }
}

#formily-input-group(@direction) {
  border-bottom-@{direction}-radius: 0;
  border-top-@{direction}-radius: 0;
}

.@{block} {
  @display: #formily-grid .display(var(--column));
  @item: #formily-grid .item(var(--column));
  @form-item: #formily-grid .item(var(--form-item-column));

  &__wrapper {
    @display();
  }

  &__formItem {
    @form-item();

    .n-date-picker {
      width: 100%;
    }
  }

  &__collapse {
    @item();

    &Header {
      cursor: pointer;
      display: flex;
      background: #fafafa;
      height: 36px;
      align-items: center;
      padding: 0 16px;
      margin-bottom: 8px;
      border: 1px solid #d9d9d9;
    }

    &Item {
      @display();
    }
  }

  &__inputGroup {
    @item();
    display: flex;
    align-items: flex-end;

    > div {
      flex: 1;

      &:not(:last-of-type) {
        .n-input__border,
        .n-base-selection__border {
          border-right: 0;
          #formily-input-group(right);
        }
      }

      &:last-of-type {
        .n-input__border,
        .n-base-selection__border {
          #formily-input-group(left);
        }
      }
    }
  }
}
</style>
