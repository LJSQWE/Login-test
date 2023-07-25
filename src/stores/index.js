import { defineStore } from 'pinia'

export const store = defineStore('alerts', {
  state: () => ({
    //用户信息
  
    }),

  actions: {
   SET_USERINFO(state, user) {
    state.user = user;
     }
  },
})