<template>
  <section style="padding: 20px">
    <form-render @change="onChange" :initial-data="initialData" ref="formRenderRef" :field-list="mockData"/>
    <n-button @click="validate">validate</n-button>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFormRequest } from './form-render/hooks';
import FormRender from './form-render/formRender.vue';
import { mockData, initialData } from './mock';
import http from './http';

useFormRequest().registGlobHttpInstance(http as any);

const formRenderRef = ref<any>();

async function validate() {
  await formRenderRef.value?.validate();
}

function onChange({ field, fieldInstance, fieldName, value }: any) {
  console.log(field, fieldName, value);
  if (fieldName === '其它联系方式') {
    formRenderRef.value.setField('vaa05', value);
  }
}
</script>
