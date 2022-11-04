import { vizapi } from "src/boot/axios";

export default{
  index(view){
    console.log(view);
    let burl = `/restock?v=${view}`;
    return vizapi.get(burl).then( done => done.data ).catch( fail => fail);
  },
  order(id){
    let burl = `/restock/${id}`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  nextState(data){
    let burl = `/restock/changestate`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  setDeliveryProduct(data){
    let burl = `/restock/setdelivery`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  setReceiveProduct(data){
    let burl = `/restock/setreceived`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  genInvoice(id){
    let burl = `/restock/${id}/newinvoice`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  genEntry(id){
    let burl = `/restock/${id}/newentry`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  printKey(id){
    let burl = `/restock/${id}/printkey`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  checkin(data){
    let burl = `/restock/checkin`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  checkinInit(data){
    let burl = `/restock/checkininit`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  }
}