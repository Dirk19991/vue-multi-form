<template>
  <main class="wrapper">
    <div class="content">
      <Sidebar @changeStep="onStepChange" :currentStep="currentStep" />
      <StepWrapper :currentStep="currentStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import StepWrapper from './components/StepWrapper.vue';

const currentStep = ref(1);

const onStepChange = (step: number) => {
  currentStep.value = step;
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: var(--Magnolia);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 1050px;
  height: 80%;
  display: flex;
  gap: 100px;
  background-color: white;
  border-radius: 20px;
}
</style>
