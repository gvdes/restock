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
    addOrder(order) {
      console.log(order);
      let idx = this.ordersdb.findIndex( o => o.id==order.id);
      (idx<0) ? this.ordersdb.unshift(order) : void 0;
      return idx;
    },
    fillResume(data) { this.resume = data; },
    fillPrinters(data){ this.printers = data; },
    orderUpdate(data){
      let order = data.order;
      let basketsize = data.basketsize;
      let _order = this.ordersdb.find( o => o.id == order.id );
      if (_order)
        _order.products_count = basketsize;
    },
    addOrUpdate(oid,data){
      let idx = this.ordersdb.findIndex( o => o.id == oid );
      if (idx>=0){
        this.ordersdb[idx] = data;
        return "u";
      }else{
        this.ordersdb.unshift(data);
        return "a";
      }
    }
  }
})
