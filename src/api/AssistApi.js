import { assistdb } from "src/boot/axios";

export default{
  getSupply(data){
    let burl = `/getSupply/${data}`;
    return assistdb.get(burl).then( done => done.data ).catch( fail => fail);
  },
  getVerified(data){
    let burl = `/getVerified/${data}`;
    return assistdb.get(burl).then( done => done.data ).catch( fail => fail);
  },
  SaveSupply(data){
    let burl = `/saveSupply`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  SaveVerified(data){
    let burl = `/saveVerified`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  SaveChofi(data){
    let burl = `/saveChofi`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  SaveCheck(data){
    let burl = `/saveCheck`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  getCheck(data){
    let burl = `/getCheck/${data}`;
    return assistdb.get(burl).then( done => done ).catch( fail => fail);
  },
  getChof(data){
    let burl = `/getChof/${data}`;
    return assistdb.get(burl).then( done => done ).catch( fail => fail);
  },
  getSalida(data){
    let burl = `/getSalida`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  getTransfer(data){
    let burl = `/getTransfer`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  nextState(data){
    let burl = `/changeStatus`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  getInvoices(){
    let burl = `/getInvoices`;
    return assistdb.get(burl).then( done => done ).catch( fail => fail);
  },
  sendMessage(data){
    let burl = `/sendMessage`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  }


}
