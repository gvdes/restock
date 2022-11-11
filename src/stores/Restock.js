import { defineStore } from 'pinia'

export const useRestockStore = defineStore('restock', {
  state: () => ({
    ordersdb: [],
    resume: [],
    printers: []
  }),
  getters: {
    ordersSize (state) { return state.ordersdb.length; },
    ordersok (state) { return state.ordersdb.filter( o => o.log.length) },
    orderserrors (state) { return state.ordersdb.filter( o => !o.log.length) }
  },
  actions: {
    fillOrders(data) { this.ordersdb = data; },
    fillResume(data) { this.resume = data; },
    fillPrinters(data){ this.printers = data; }
  }
})
