<template>
  <section class="form-render__wrapper" :style="{ '--column': column }">
    <form-provider :form="formModel">
      <slot :schema-filed="SchemaField">
        <schema-field :schema="renderSchema" />
      </slot>
    </form-provider>
  </section>
</template>

<script lang="ts" setup>
import { AnyObject } from '@/types';
import { injectOrProvide } from "./utils";
import { cloneDeep } from "lodash-es";
import { InjectAsyncQueue, InjectionBusinessCollector } from "./constants";
import { InjectionSchemaField } from "./constants";
import { useFieldVisitor } from "./hooks";
import { useBusinessBinding } from './hooks';
import { FieldItem, FieldVisitor } from "./types";
import { ISchema } from "@formily/json-schema/esm/types";
import { useAsyncQueue, useFieldList2Schema } from "./hooks";
import * as components from "./components";
import { Component, computed, FunctionalComponent, PropType } from "vue";
import { createForm, onFieldValueChange } from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";

const props = defineProps({
  fieldList: { type: Array as PropType<FieldItem[]> },
  initialData: { type: Object as PropType<AnyObject>, default: () => ({}) },
  fieldVisitor: { type: Object as PropType<FieldVisitor> },
  column: { type: Number, default: 12 },
  parallelism: { type: Number, default: 3 },
  schema: { type: Object as PropType<ISchema> },
  components: {
    type: Object as PropType<Record<string, Component | FunctionalComponent>>,
    default: () => ({}),
  },
  scope: { type: Object as PropType<AnyObject>, default: () => ({}) },
});

const emit = defineEmits(["formChange"]);

const { create, trigger } = useBusinessBinding();
const collector = injectOrProvide(InjectionBusinessCollector, create);

injectOrProvide(InjectAsyncQueue, () => useAsyncQueue().create(props.parallelism));

const formModel = createForm({
  initialValues: props.initialData,
  effects() {
    onFieldValueChange("*", field => {
      emit("formChange", {
        fieldInstance: field,
        fieldKey: field.props.name,
        fieldName: field.title,
        value: field.value,
      });
      trigger(collector, formModel, field.props.name as string, field.value);
    });
  },
});

const SchemaField = injectOrProvide(
  InjectionSchemaField,
  () =>
    createSchemaField({
      components: { ...components, ...props.components },
      scope: props.scope,
    }).SchemaField
);

const { traverse } = useFieldVisitor();
const { transform } = useFieldList2Schema(collector);

const renderSchema = computed<ISchema>(() => {
  if (props.schema) {
    return props.schema;
  } else if (props.fieldList) {
    const _fieldList = traverse(cloneDeep(props.fieldList), props.fieldVisitor);
    return { type: "object", properties: transform(_fieldList) };
  }
  return { type: "object", properties: {} };
});

function validate() {
  return formModel.validate();
}

defineExpose({
  validate,
  getFormValues() {
    return formModel.getFormState().values;
  },
  setFieldState: formModel.setFieldState.bind(formModel),
});
</script>
