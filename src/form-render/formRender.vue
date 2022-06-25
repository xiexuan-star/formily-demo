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
import { InjectAsyncQueue } from "@/modules/clidoctor/view/workstation/patientInfo/form-render/constants";
import { InjectionSchemaField } from "./constants";
import { useFormVisitor } from "./hooks/useFormVisitor";
import { FormVisitorMap } from "./types";
import { ISchema } from "@formily/json-schema/esm/types";
import { useAsyncQueue, useFieldList2Schema } from "./hooks";
import {
  TEXTAREA,
  INPUT,
  SELECT,
  FORM_ITEM,
  INPUT_NUMBER,
  COLLAPSE,
  INPUT_GROUP,
  DATE,
  SEARCH_CASCADE,
  COMBINATION,
} from "./components";
import { Component, computed, FunctionalComponent, inject, PropType, provide } from "vue";
import { createForm, onFieldValueChange, onFormValuesChange } from "@formily/core";
import { createSchemaField, FormProvider, useForm } from "@formily/vue";
import { cloneDeep } from "lodash-es";

const props = defineProps({
  fieldList: { type: Array as PropType<Record<string, any>[]> },
  schema: { type: Object as PropType<ISchema> },
  column: { type: Number, default: 12 },
  initialData: { type: Object as PropType<Record<string, any>>, default: () => ({}) },
  fieldVisitor: { type: Object as PropType<FormVisitorMap> },
  components: {
    type: Object as PropType<Record<string, Component | FunctionalComponent>>,
    default: () => ({}),
  },
});

const emit = defineEmits(["change"]);

const { transform } = useFieldList2Schema();

!inject(InjectAsyncQueue) && provide(InjectAsyncQueue, useAsyncQueue().create());

const formModel = createForm({
  initialValues: props.initialData,
  effects() {
    onFieldValueChange("*", (field, form) => {
      emit("change", { field, form });
    });
  },
});

const SchemaField = inject(
  InjectionSchemaField,
  createSchemaField({
    components: {
      COLLAPSE,
      INPUT_GROUP,
      FORM_ITEM,
      TEXTAREA,
      INPUT,
      SELECT,
      INPUT_NUMBER,
      DATE,
      SEARCH_CASCADE,
      COMBINATION,
      ...props.components,
    },
  }).SchemaField
);

provide(InjectionSchemaField, SchemaField);

const { traverse } = useFormVisitor();

const renderSchema = computed<ISchema>(() => {
  if (props.schema) {
    return props.schema;
  } else if (props.fieldList) {
    const _fieldList = traverse(cloneDeep(props.fieldList), props.fieldVisitor);
    return { type: "object", properties: transform(_fieldList) };
  }
  return { type: "object", properties: [] };
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
