<template>
  <div class="wrapper__step1">
    <h2 class="header">Select your plan</h2>
    <h3 class="subheader">You have the option of monthly or yearly billing.</h3>
  </div>
</template>

<script setup lang="ts">
import { useUserInfo } from '@/store/useUserInfo';
import { storeToRefs } from 'pinia';

const store = useUserInfo();

const { name, email, phone } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.wrapper__step2 {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.header {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.subheader {
  font-size: 1.2rem;
  color: var(--Cool-gray);
  margin-bottom: 30px;
}
</style>
