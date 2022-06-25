<template>
  <section style="padding: 20px">
    <form-render :initial-data="initialData" ref="formilyRenderRef" :field-list="mockData"/>
    <n-button @click="validate">validate</n-button>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormRender from './formily-render/formRender.vue';
import { mockData, initialData } from './mock';

const formilyRenderRef = ref<any>();

async function validate() {
  await formilyRenderRef.value?.validate();
}
</script>
