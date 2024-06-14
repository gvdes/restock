import{u as O,a as Y,r as m,c as $,o as S,b as Q,w as c,d,e as C,f,t as q,Q as L,g as P,h as R,i as N}from"./index.8b802c3e.js";import{Q as j,a as H,u as T,b as z}from"./QPage.ec3aa7eb.js";import{Q as A}from"./QToggle.b31ded63.js";import{Q as G,a as J,b as K}from"./QLayout.42732104.js";import{d as h}from"./dayjs.min.53a5c0af.js";import{Q as W,R as b}from"./ClosePopup.70109a64.js";import{u as D}from"./Restock.7ad6cebe.js";import"./axios.625f35ec.js";import"./QTabs.9309dd16.js";import"./jspdf.plugin.autotable.a50de25a.js";import{$sktRestock as n,usrSkt as X}from"./socket.1aa8b866.js";import"./rtl.19991549.js";const Z={class:"full-width row items-center"},ee={class:"col text-h6 text-dark"},te={__name:"OrdersSupply",setup(V){O();const g=Y(),y=D(),r=m({columns:[{name:"id",label:"Folio",field:"id",align:"center"},{name:"state",label:"Estado",field:e=>e.log.length==1?e.log[0].name:e.log[e.log.length-1].name,align:"left",sortable:!0,classes:e=>e._status==3?"text-positive text-bold":""},{name:"laststate",label:"Ultima actividad",field:e=>h(e.log.find(a=>a.id==e.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:e=>e.from.name.toUpperCase(),align:"left",sortable:!0},{name:"models",label:"Modelos",field:"products_count",align:"center"},{name:"notes",label:"Notas",field:e=>e.notes,align:"left"},{name:"invoice",label:"Salida",field:e=>{var a;return(a=e.invoice)!=null?a:"--"},align:"center"}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),u=(e,a,v)=>g.push(`/supply/${a.id}`),_=$(()=>y.ordersdb.filter(e=>e._status>2));return(e,a)=>(S(),Q(H,{padding:""},{default:c(()=>[d(j,{flat:"","row-key":"id",rows:C(_),columns:r.value.columns,filter:r.value.filter,pagination:r.value.pagination,onRowClick:u},{top:c(()=>[f("div",Z,[f("div",ee,"Pedidos: "+q(C(_).length),1),d(W,{dense:"",modelValue:r.value.filter,"onUpdate:modelValue":a[0]||(a[0]=v=>r.value.filter=v),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:c(()=>[d(L,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"])]),_:1}))}};const oe=f("div",{class:"text-bold"},"Resurtido ",-1),ae={class:"row"},se={class:"col row"},ve={__name:"SupplyLyt",setup(V){const g=O(),y=Y(),r=D(),u=T(),_=X,e=m([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),a=m([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),v=m(null),p=m(null),w=m({from:h(Date.now()).startOf("day"),to:h(Date.now()).startOf("day")}),k=async()=>{var i;u.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let t=(i=g.query.v)!=null?i:"day",o=a.value.findIndex(x=>x.id==t),l=o>=0?o:0;p.value=a.value[l],w.value.from=h(Date.now()).startOf(p.value.id);const s=await b.index(p.value.id);console.log(s),r.fillOrders(s.orders),v.value=e.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),u.loading.hide(),n.connect(),n.emit("joinat",_),n.on("joineddashreq",U),n.on("creating",E),n.on("order_update",F),n.on("order_changestate",B),n.on("order_refresh",I)},M=t=>y.push(`/supply?v=${t.id}`);$(()=>w.value.from.format("YYYY/MM/DD")),$(()=>w.value.to.format("YYYY/MM/DD"));const U=t=>{console.log(`%c${t.user.me.nick} de ${t.from.alias} se ha unido a Restock (UID: ${t.user.me.id})`,"background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;")},E=async t=>{let o=t.order;console.log(`El pedido ${o.id} ha sido iniciado!`);let l=await b.orderFresh(o.id),s=l.data.order,i=l.data.oid;r.addOrUpdate(i,s)},F=t=>{r.orderUpdate(t)},B=async t=>{let o=t.order;console.log(`Refrescando orden ${o.id}`);let l=t.state,s=await b.orderFresh(o.id);console.log(s.data);let i=s.data.order,x=s.data.oid;r.addOrUpdate(x,i),l.id==3&&u.notify({message:`El pedido <b>${o.id}</b> esta listo para surtir!!`,color:"positive",textColor:"white",position:"bottom",html:!0,timeout:5e3})},I=async t=>{console.log("REFRESHING BY SKT!!",t);let o=t.order,l=await b.orderFresh(o);console.log(l);let s=l.data.order;console.log(s);let i=l.data.oid;r.addOrUpdate(i,s),s._status==3&&u.notify({message:`El pedido <b>${s.id}</b> esta listo para surtir!!`,color:"positive",textColor:"white",position:"bottom",html:!0,timeout:5e3})};return P(()=>g.query,()=>{k()}),k(),document.title="Resurtido",(t,o)=>(S(),Q(G,{view:"lHh Lpr lFf"},{default:c(()=>[d(J,{bordered:"",class:"transparent text-dark"},{default:c(()=>[d(A,{class:"row justify-between items-center"},{default:c(()=>[oe,f("div",ae,[d(R,{color:"pink-5",round:"",unelevated:"",flat:"",icon:"sync",onClick:k}),f("div",se,[d(z,{class:"col",dense:"",filled:"",label:"Vista",modelValue:p.value,"onUpdate:modelValue":[o[0]||(o[0]=l=>p.value=l),M],options:a.value},null,8,["modelValue","options"]),p.value.id=="C"?(S(),Q(R,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):N("",!0)])])]),_:1})]),_:1}),d(K,null,{default:c(()=>[d(te)]),_:1})]),_:1}))}};export{ve as default};
