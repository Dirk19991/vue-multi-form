<template>
  <div>Current Step: {{ currentStep }}</div>
</template>

<script setup lang="ts">
interface SideBarProps {
  currentStep: number;
}

const emit = defineEmits<{
  changeStep: [step: number];
}>();

const { currentStep } = defineProps<SideBarProps>();
</script>

<style lang="scss" scoped></style>
