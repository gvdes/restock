import{assistdb as a}from"./axios.10c2b4ae.js";var n={getSupply(r){let t=`/getSupply/${r}`;return a.get(t).then(e=>e.data).catch(e=>e)},getVerified(r){let t=`/getVerified/${r}`;return a.get(t).then(e=>e.data).catch(e=>e)},SaveSupply(r){let t="/saveSupply";return a.post(t,r).then(e=>e).catch(e=>e)},SaveVerified(r){let t="/saveVerified";return a.post(t,r).then(e=>e).catch(e=>e)},SaveChofi(r){let t="/saveChofi";return a.post(t,r).then(e=>e).catch(e=>e)},SaveCheck(r){let t="/saveCheck";return a.post(t,r).then(e=>e).catch(e=>e)},getCheck(r){let t=`/getCheck/${r}`;return a.get(t).then(e=>e).catch(e=>e)},getChof(r){let t=`/getChof/${r}`;return a.get(t).then(e=>e).catch(e=>e)},getSalida(r){let t="/getSalida";return a.post(t,r).then(e=>e).catch(e=>e)},getTransfer(r){let t="/getTransfer";return a.post(t,r).then(e=>e).catch(e=>e)},nextState(r){let t="/changeStatus";return a.post(t,r).then(e=>e).catch(e=>e)},getInvoices(){let r="/getInvoices";return a.get(r).then(t=>t).catch(t=>t)},sendMessage(r){let t="/sendMessage";return a.post(t,r).then(e=>e).catch(e=>e)}};export{n as A};