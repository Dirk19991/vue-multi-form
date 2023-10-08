<template>
  <div class="wrapper__step1">
    <h2 class="header">Personal information</h2>
    <h3 class="subheader">Please provide your name, email address, and phone number.</h3>
    <form class="form">
      <label class="inputWrapper">
        Name
        <input v-model="name" class="input" type="text" name="name" />
      </label>
      <label class="inputWrapper">
        Email Address
        <input v-model="email" class="input" type="email" name="email" />
      </label>
      <label class="inputWrapper">
        Phone Number
        <input v-model="phone" class="input" type="tel" name="phone" />
      </label>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserInfo } from '../../store/useUserInfo';
import { storeToRefs } from 'pinia';

const store = useUserInfo();
const { name, email, phone } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.wrapper__step1 {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.inputWrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--Marine-blue);
  font-weight: 500;
}
.input {
  font-family: 'Ubuntu', sans-serif;
  padding: 10px;
  color: var(--Marine-blue);
  font-size: 1.2rem;
  font-weight: 500;
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
