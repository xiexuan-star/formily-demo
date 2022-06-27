<template>
  <section class="formily-render__wrapper" :style="{ '--column': column }">
    <form-provider :form="formModel">
      <slot :schema-filed="SchemaField">
        <schema-field :schema="renderSchema" />
      </slot>
    </form-provider>
  </section>
</template>

<script lang="ts" setup>
import { cloneDeep } from "lodash-es";
import { InjectAsyncQueue } from "./constants";
import { InjectionSchemaField } from "./constants";
import { useFieldVisitor } from "./hooks";
import { FieldItem, FieldVisitor } from "./types";
import { ISchema } from "@formily/json-schema/esm/types";
import { useAsyncQueue, useFieldList2Schema } from "./hooks";
import * as components from "./components";
import { Component, computed, FunctionalComponent, inject, PropType, provide } from "vue";
import { createForm, onFieldValueChange } from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";

const props = defineProps({
  fieldList: { type: Array as PropType<FieldItem[]> },
  schema: { type: Object as PropType<ISchema> },
  column: { type: Number, default: 12 },
  parallelism: { type: Number, default: 3 },
  initialData: { type: Object as PropType<AnyObject>, default: () => ({}) },
  fieldVisitor: { type: Object as PropType<FieldVisitor> },
  components: {
    type: Object as PropType<Record<string, Component | FunctionalComponent>>,
    default: () => ({}),
  },
  scope: { type: Object as PropType<AnyObject>, default: () => ({}) },
});

const emit = defineEmits(["formChange"]);

const { transform } = useFieldList2Schema();

!inject(InjectAsyncQueue) && provide(InjectAsyncQueue, useAsyncQueue().create(props.parallelism));

const formModel = createForm({
  initialValues: props.initialData,
  effects() {
    onFieldValueChange("*", field => {
      emit("formChange", {
        fieldInstance: field,
        field: field.props.name,
        fieldName: field.title,
        value: field.value,
      });
    });
  },
});

const SchemaField = inject(
  InjectionSchemaField,
  createSchemaField({
    components: { ...components, ...props.components },
    scope: props.scope,
  }).SchemaField
);

provide(InjectionSchemaField, SchemaField);

const { traverse } = useFieldVisitor();

const renderSchema = computed<ISchema>(() => {
  if (props.schema) {
    return props.schema;
  } else if (props.fieldList) {
    const _fieldList = traverse(cloneDeep(props.fieldList), props.fieldVisitor);
    return { type: "object", properties: transform(_fieldList) };
  }
  return { type: "object", properties: {} };
});

defineExpose({
  validate() {
    return formModel.validate();
  },
  setFieldState: formModel.setFieldState.bind(formModel),
});
</script>

<style lang="less">
@block: ~"formily-render";

#formily-grid() {
  .display(@column) {
    display: grid !important;
    grid-template-columns: repeat(@column, minmax(0px, 1fr));
    gap: 0 8px;
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

  &__combination {
    width: 100%;

    &Close {
      position: absolute;
      right: 0;
      top: 0;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: red;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      vertical-align: middle;
      font-size: 16px;
    }

    &Content {
      position: relative;
    }
  }
}
</style>
