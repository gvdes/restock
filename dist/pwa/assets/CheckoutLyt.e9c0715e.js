import{u as Y,a as q,r as h,c as C,o as O,b as Q,w as m,d as n,e as D,f as b,t as T,Q as j,g as z,h as P,i as H}from"./index.7e3dde04.js";import{Q as A,a as G,u as J,b as K}from"./QPage.2d1f42a4.js";import{Q as X}from"./QToggle.abea5747.js";import{Q as W,a as Z,b as ee}from"./QLayout.f0eb81dd.js";import{d as y}from"./dayjs.min.25545ff6.js";import{R as _}from"./RestockApi.f0c7f0de.js";import{u as R}from"./Restock.f7843803.js";import{Q as te}from"./QCardActions.6c177c96.js";import"./axios.10c2b4ae.js";import"./QTabs.40b41cca.js";import"./ClosePopup.472f98eb.js";import"./jspdf.plugin.autotable.ba0a73a2.js";import{$sktRestock as p,usrSkt as oe}from"./socket.9951ace7.js";import"./rtl.c2b0dab7.js";import"./_commonjsHelpers.88e99c8f.js";import"./use-cache.b0833c75.js";const ae={class:"full-width row items-center"},se={class:"col text-h6 text-dark"},re={__name:"OrdersCheckout",setup(U){Y();const i=q(),k=R(),c=["text-grey-5 text-bold","text-bold text-h6 text-red","text-indigo","text-orange-8 text-bold","text-positive text-bold","6","7","8","9","9"],l=h({columns:[{name:"id",label:"Folio",field:"id",align:"center"},{name:"state",label:"Estado",field:e=>e.log.length==1?e.log[0].name:e.log[e.log.length-1].name,align:"left",sortable:!0,sort:(e,s,f,u)=>parseInt(f._status)-parseInt(u._status),classes:e=>c[e._status-1]},{name:"laststate",label:"Ultima actividad",field:e=>y(e.log.find(s=>s.id==e.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:e=>e.from.name.toUpperCase(),align:"left",sortable:!0},{name:"models",label:"Modelos",field:"products_count",align:"center"},{name:"notes",label:"Notas",field:e=>e.notes,align:"left"},{name:"invoice",label:"Salida",field:e=>{var s;return(s=e.invoice)!=null?s:"--"},align:"center"}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),x=(e,s,f)=>i.push(`/checkout/${s.id}`),v=C(()=>k.ordersdb.filter(e=>e._status>2));return(e,s)=>(O(),Q(G,{padding:""},{default:m(()=>[n(A,{flat:"","row-key":"id",rows:D(v),columns:l.value.columns,filter:l.value.filter,pagination:l.value.pagination,onRowClick:x},{top:m(()=>[b("div",ae,[b("div",se,"Pedidos: "+T(D(v).length),1),n(te,{dense:"",modelValue:l.value.filter,"onUpdate:modelValue":s[0]||(s[0]=f=>l.value.filter=f),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:m(()=>[n(j,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"])]),_:1}))}};const le=b("div",{class:"text-bold"},"CheckOut ",-1),de={class:"row"},ie={class:"col row"},Ce={__name:"CheckoutLyt",setup(U){const i=Y(),k=q(),c=R(),l=J(),x=oe,v=h([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),e=h([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),s=["p2","P2","p3","P3","bol","BOL","sap","SAP","TEX"],f=h(null),u=h(null),w=h({from:y(Date.now()).startOf("day"),to:y(Date.now()).startOf("day")}),$=async()=>{var g;l.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let t=(g=i.query.v)!=null?g:"day",o=e.value.findIndex(S=>S.id==t),a=o>=0?o:0;u.value=e.value[a],w.value.from=y(Date.now()).startOf(u.value.id);let r=i.query.d&&s.includes(i.query.d)?i.query.d:"all";console.log(r);const d=await _.index(u.value.id,r);console.log(d),c.fillOrders(d.orders),f.value=v.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),l.loading.hide(),p.connect(),p.emit("joinat",x),p.on("joineddashreq",F),p.on("creating",M),p.on("order_update",I),p.on("order_changestate",B),p.on("order_refresh",E),p.on("orderpartition_refresh",L)},V=t=>{let o=i.query.d&&s.includes(i.query.d)?i.query.d:"all";k.push(`/checkout?v=${t.id}&d=${o}`)};C(()=>w.value.from.format("YYYY/MM/DD")),C(()=>w.value.to.format("YYYY/MM/DD")),z(()=>i.query,()=>{$()});const F=t=>{console.log(`%c${t.user.me.nick} de ${t.from.alias} se ha unido a Restock (UID: ${t.user.me.id})`,"background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;")},M=async t=>{let o=t.order;console.log(`Pedido ${o.id} iniciado`);let a=await _.orderFresh(o.id),r=a.data.order,d=a.data.oid;c.addOrUpdate(d,r)},I=t=>{c.orderUpdate(t)},B=async t=>{let o=t.order;console.log(`Refrescando orden ${o.id}`),t.state;let a=await _.orderFresh(o.id);console.log(a.data);let r=a.data.order,d=a.data.oid;c.addOrUpdate(d,r),r._status==4&&l.notify({message:`El pedido <b>${o.id}</b> esta listo para CheckOut!!`,color:"positive",textColor:"white",position:"bottom",html:!0,timeout:5e3})},E=async t=>{console.log("REFRESHING BY SKT!!",t);let o=t.order,a=await _.orderFresh(o);console.log(a);let r=a.data.order,d=a.data.oid;c.addOrUpdate(d,r)},L=async t=>{console.log("Partition refresh!!",t);let o=t.order,a=await _.orderFresh(o);console.log(a);let r=a.data.order,d=r.partition,g=a.data.oid;c.addOrUpdate(g,r),d.filter(N=>N._status==4).length==d.length?l.notify({message:`El pedido ${g} ha finalizado particiones`,html:!0,color:"purple-10",icon:"fa-solid fa-truck-ramp-box"}):l.notify({message:`Particion lista para checkout en pedidido <b>${g}</b>`,html:!0,color:"pink-14",icon:"fa-solid fa-truck-ramp-box"})};return $(),document.title="CheckOut",(t,o)=>(O(),Q(W,{view:"lHh Lpr lFf"},{default:m(()=>[n(Z,{bordered:"",class:"bg-cyan-10"},{default:m(()=>[n(X,{class:"row justify-between items-center"},{default:m(()=>[le,b("div",de,[n(P,{color:"white",round:"",unelevated:"",flat:"",icon:"sync",onClick:$}),b("div",ie,[n(K,{class:"col",dark:"",dense:"",filled:"",label:"Vista",modelValue:u.value,"onUpdate:modelValue":[o[0]||(o[0]=a=>u.value=a),V],options:e.value},null,8,["modelValue","options"]),u.value.id=="C"?(O(),Q(P,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):H("",!0)])])]),_:1})]),_:1}),n(ee,null,{default:m(()=>[n(re)]),_:1})]),_:1}))}};export{Ce as default};