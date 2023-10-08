<template>
  <Step1 v-if="currentStep === 1" />
</template>

<script setup lang="ts">
import Step1 from './steps/Step1.vue';

interface SideBarProps {
  currentStep: number;
}

const emit = defineEmits<{
  changeStep: [step: number];
}>();

const { currentStep } = defineProps<SideBarProps>();
</script>

<style lang="scss" scoped></style>
