import{assistdb as a}from"./axios.d46b4b71.js";var c={getSupply(){let r="/getSupply";return a.get(r).then(e=>e.data).catch(e=>e)},getVerified(){let r="/getVerified";return a.get(r).then(e=>e.data).catch(e=>e)},SaveSupply(r){let e="/saveSupply";return a.post(e,r).then(t=>t).catch(t=>t)},SaveVerified(r){let e="/saveVerified";return a.post(e,r).then(t=>t).catch(t=>t)},SaveChofi(r){let e="/saveChofi";return a.post(e,r).then(t=>t).catch(t=>t)},SaveCheck(r){let e="/saveCheck";return a.post(e,r).then(t=>t).catch(t=>t)},getCheck(r){let e=`/getCheck/${r}`;return a.get(e).then(t=>t).catch(t=>t)},getChof(){let r="/getChof";return a.get(r).then(e=>e).catch(e=>e)},getSalida(r){let e="/getSalida";return a.post(e,r).then(t=>t).catch(t=>t)},nextState(r){let e="/changeStatus";return a.post(e,r).then(t=>t).catch(t=>t)},getInvoices(){let r="/getInvoices";return a.get(r).then(e=>e).catch(e=>e)},sendMessage(r){let e="/sendMessage";return a.post(e,r).then(t=>t).catch(t=>t)}};export{c as A};
