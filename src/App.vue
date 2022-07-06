<template>
  <section style="padding: 20px">
    <form-render @change="onChange" :initial-data="initialData" ref="formRenderRef" :field-list="mockData"
                 :field-visitor="visitor"/>
    <n-button @click="validate">validate</n-button>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFormRequest } from './form-render';
import FormRender from './form-render';
import { FieldVisitor } from './form-render';
import { mockData, initialData } from './mock';
import http from './http';
import './form-render/style/index.less';

useFormRequest().registGlobHttpInstance(http as any);

const formRenderRef = ref<any>();

async function validate() {
  await formRenderRef.value?.validate();
}

function onChange({ field, fieldInstance, fieldName, value }: any) {
  if (fieldName === '其它联系方式') {
    formRenderRef.value.setField('vaa05', value);
  }
}

const visitor: FieldVisitor = {
  vaa14({ field, replace, insertAfter, insertBefore }) {
    field.alias += '123';
  }
};
</script>
