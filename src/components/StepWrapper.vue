<template>
  <Step1 v-if="currentStep === 1" />
  <Step2 v-if="currentStep === 2" />
</template>

<script setup lang="ts">
import Step1 from '@/components/steps/Step1.vue';
import Step2 from '@/components/steps/Step2.vue';

interface SideBarProps {
  currentStep: number;
}

const emit = defineEmits<{
  changeStep: [step: number];
}>();

const { currentStep } = defineProps<SideBarProps>();
</script>

<style lang="scss" scoped></style>
