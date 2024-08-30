import{u as R,a as Y,r as g,c as x,o as S,b as Q,w as u,d as i,e as C,f as _,t as L,Q as N,g as T,h as O,i as j}from"./index.66eec2b8.js";import{Q as H,a as z,u as A,b as G}from"./QPage.5e14d418.js";import{Q as J}from"./QToggle.98ea1995.js";import{Q as K,a as X,b as W}from"./QLayout.8add0faa.js";import{d as b}from"./dayjs.min.53a5c0af.js";import{Q as Z,R as h}from"./QCardActions.35400994.js";import{u as q}from"./Restock.a5e210e9.js";import"./axios.6e9c026a.js";import"./QTabs.9498884f.js";import"./ClosePopup.5636933a.js";import"./jspdf.plugin.autotable.66079b52.js";import{$sktRestock as c,usrSkt as ee}from"./socket.9951ace7.js";import"./rtl.c2904f27.js";const te={class:"full-width row items-center"},oe={class:"col text-h6 text-dark"},ae={__name:"OrdersSupply",setup(D){R();const d=Y(),w=q(),l=g({columns:[{name:"id",label:"Folio",field:"id",align:"center"},{name:"state",label:"Estado",field:e=>e.log.length==1?e.log[0].name:e.log[e.log.length-1].name,align:"left",sortable:!0,classes:e=>e._status==3?"text-positive text-bold":""},{name:"laststate",label:"Ultima actividad",field:e=>b(e.log.find(r=>r.id==e.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:e=>e.from.name.toUpperCase(),align:"left",sortable:!0},{name:"models",label:"Modelos",field:"products_count",align:"center"},{name:"notes",label:"Notas",field:e=>e.notes,align:"left"},{name:"invoice",label:"Salida",field:e=>{var r;return(r=e.invoice)!=null?r:"--"},align:"center"}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),p=(e,r,m)=>d.push(`/supply/${r.id}`),v=x(()=>w.ordersdb.filter(e=>e._status>2));return(e,r)=>(S(),Q(z,{padding:""},{default:u(()=>[i(H,{flat:"","row-key":"id",rows:C(v),columns:l.value.columns,filter:l.value.filter,pagination:l.value.pagination,onRowClick:p},{top:u(()=>[_("div",te,[_("div",oe,"Pedidos: "+L(C(v).length),1),i(Z,{dense:"",modelValue:l.value.filter,"onUpdate:modelValue":r[0]||(r[0]=m=>l.value.filter=m),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:u(()=>[i(N,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"])]),_:1}))}};const se=_("div",{class:"text-bold"},"Resurtido ",-1),le={class:"row"},re={class:"col row"},be={__name:"SupplyLyt",setup(D){const d=R(),w=Y(),l=q(),p=A(),v=ee,e=["p2","P2","p3","P3","bol","BOL","sap","SAP","TEX"],r=g([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),m=g([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),V=g(null),f=g(null),k=g({from:b(Date.now()).startOf("day"),to:b(Date.now()).startOf("day")}),$=async()=>{var y;p.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let t=(y=d.query.v)!=null?y:"day",o=m.value.findIndex(I=>I.id==t),s=o>=0?o:0;f.value=m.value[s],k.value.from=b(Date.now()).startOf(f.value.id);let a=d.query.d&&e.includes(d.query.d)?d.query.d:"all";console.log(a);const n=await h.index(f.value.id,a);console.log(n),l.fillOrders(n.orders),V.value=r.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),p.loading.hide(),c.connect(),c.emit("joinat",v),c.on("joineddashreq",U),c.on("creating",E),c.on("order_update",P),c.on("order_changestate",B),c.on("order_refresh",F)},M=t=>{let o=d.query.d&&e.includes(d.query.d)?d.query.d:"all";w.push(`/supply?v=${t.id}&d=${o}`)};x(()=>k.value.from.format("YYYY/MM/DD")),x(()=>k.value.to.format("YYYY/MM/DD"));const U=t=>{console.log(`%c${t.user.me.nick} de ${t.from.alias} se ha unido a Restock (UID: ${t.user.me.id})`,"background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;")},E=async t=>{let o=t.order;console.log(`El pedido ${o.id} ha sido iniciado!`);let s=await h.orderFresh(o.id),a=s.data.order,n=s.data.oid;l.addOrUpdate(n,a)},P=t=>{l.orderUpdate(t)},B=async t=>{let o=t.order;console.log(`Refrescando orden ${o.id}`);let s=t.state,a=await h.orderFresh(o.id);console.log(a.data);let n=a.data.order,y=a.data.oid;l.addOrUpdate(y,n),s.id==3&&p.notify({message:`El pedido <b>${o.id}</b> esta listo para surtir!!`,color:"positive",textColor:"white",position:"bottom",html:!0,timeout:5e3})},F=async t=>{console.log("REFRESHING BY SKT!!",t);let o=t.order,s=await h.orderFresh(o);console.log(s);let a=s.data.order;console.log(a);let n=s.data.oid;l.addOrUpdate(n,a),a._status==3&&p.notify({message:`El pedido <b>${a.id}</b> esta listo para surtir!!`,color:"positive",textColor:"white",position:"bottom",html:!0,timeout:5e3})};return T(()=>d.query,()=>{$()}),$(),document.title="Resurtido",(t,o)=>(S(),Q(K,{view:"lHh Lpr lFf"},{default:u(()=>[i(X,{bordered:"",class:"transparent text-dark"},{default:u(()=>[i(J,{class:"row justify-between items-center"},{default:u(()=>[se,_("div",le,[i(O,{color:"pink-5",round:"",unelevated:"",flat:"",icon:"sync",onClick:$}),_("div",re,[i(G,{class:"col",dense:"",filled:"",label:"Vista",modelValue:f.value,"onUpdate:modelValue":[o[0]||(o[0]=s=>f.value=s),M],options:m.value},null,8,["modelValue","options"]),f.value.id=="C"?(S(),Q(O,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):j("",!0)])])]),_:1})]),_:1}),i(W,null,{default:u(()=>[i(ae)]),_:1})]),_:1}))}};export{be as default};
