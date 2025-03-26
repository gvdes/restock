import { vizapi } from "src/boot/axios";

export default{
  getProduct(data){
    let burl = `/product/${data}`;
    return vizapi.get(burl).then( done => done.data ).catch( fail => fail);
  }
}
