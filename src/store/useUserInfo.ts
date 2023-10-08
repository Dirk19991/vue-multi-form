import { defineStore } from 'pinia';

export const useUserInfo = defineStore('userInfo', {
  state: () => ({
    name: '',
    email: '',
    phone: '',
  }),
});
