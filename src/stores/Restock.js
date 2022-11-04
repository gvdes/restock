import { defineStore } from 'pinia'

export const useRestockStore = defineStore('restock', {
  state: () => ({
    ordersdb: []
  }),
  getters: {
    ordersSize (state) { return state.ordersdb.length; }
  },
  actions: {
    fillOrders (data) { this.ordersdb = data; }
  }
})
