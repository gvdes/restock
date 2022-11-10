import { defineStore } from 'pinia'

export const useRestockStore = defineStore('restock', {
  state: () => ({
    ordersdb: [],
    resume: [],
    printers: []
  }),
  getters: {
    ordersSize (state) { return state.ordersdb.length; },
  },
  actions: {
    fillOrders(data) { this.ordersdb = data; },
    fillResume(data) { this.resume = data; },
    clearResumeCard(keyres) {
      let idx = this.resume.findIndex( r => r.key == keyres);
      this.resume[idx].total=0;
    },
    fillPrinters(data){ this.printers = data; }
  }
})
