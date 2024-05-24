import { assistdb } from "src/boot/axios";

export default{
  getSupply(){
    let burl = `/getSupply`;
    return assistdb.get(burl).then( done => done.data ).catch( fail => fail);
  },
  getVerified(){
    let burl = `/getVerified`;
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
  getChof(){
    let burl = `/getChof`;
    return assistdb.get(burl).then( done => done ).catch( fail => fail);
  },
  getSalida(data){
    let burl = `/getSalida`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  nextState(data){
    let burl = `/changeStatus`;
    return assistdb.post(burl,data).then( done => done ).catch( fail => fail);
  },
  getInvoices(){
    let burl = `/getInvoices`;
    return assistdb.get(burl).then( done => done ).catch( fail => fail);
  }


}
