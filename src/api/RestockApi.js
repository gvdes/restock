import { vizapi } from "src/boot/axios";

export default{
  index(view,dash="all"){
    let burl = `/restock?v=${view}&d=${dash}`;
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
  orderFresh(id){
    let burl = `/restock/${id}/fresh`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  genInvoice(id,supply){
    let burl = `/restock/${id}/${supply}/newinvoice`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  genTransfer(id,supply){
    let burl = `/restock/${id}/${supply}/newTransfer`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  genTransferRec(id,supply){
    let burl = `/restock/${id}/${supply}/newTransferRec`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  genEntry(id){
    let burl = `/restock/${id}/newentry`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  checkin(data){
    let burl = `/restock/checkin`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  checkinInit(data){
    let burl = `/restock/checkininit`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  report(data){
    let burl = `/restock/report/${data}`;
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  massiveAction(data){
    let burl = `/restock/massaction`;
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  printForSupply(data){
    let burl = "/restock/print/forsupply";
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  printKey(data){
    let burl = "/restock/print/key";
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  createAutomate(data){
    let burl = "/restock/create";
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
  suc(){
    let burl = "/restock/suc";
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  cedis(){
    let burl = "/restock/cedis";
    return vizapi.get(burl).then( done => done ).catch( fail => fail.response);
  },
  printForPartition(data){
    let burl = "/restock/print/Partition";
    return vizapi.post(burl,data).then( done => done ).catch( fail => fail.response);
  },
}
