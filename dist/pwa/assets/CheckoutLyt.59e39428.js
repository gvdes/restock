import{u as S,a as Y,r as n,c as p,o as y,b as k,w as l,d as a,e as C,f as d,t as M,Q as I,g as O,h as Q,i as B}from"./index.eca9d018.js";import{Q as L,a as P,b as R,c as q,u as z,R as N,d as U,e as H,f as T,g as j}from"./QCard.a3c9784d.js";import{d as f}from"./dayjs.min.16be2667.js";import{u as D}from"./Restock.28a9b2f3.js";import"./axios.b18e358a.js";import"./ClosePopup.b3e1fb99.js";const A={class:"full-width row items-center"},E={class:"col text-h6 text-dark"},F={__name:"OrdersCheckout",setup(V){S();const c=Y(),u=D(),_=["text-grey-5 text-bold","text-bold text-h6 text-red","text-indigo","4","5","6","text-bold text-orange","8","text-primary","text-positive"],o=n({columns:[{name:"id",label:"Folio",field:"id",align:"center"},{name:"state",label:"Estado",field:e=>e.log.length==1?e.log[0].name:e.log[e.log.length-1].name,align:"left",sortable:!0,sort:(e,t,s,b)=>parseInt(s._status)-parseInt(b._status),classes:e=>_[e._status-1]},{name:"laststate",label:"Ultima actividad",field:e=>f(e.log.find(t=>t.id==e.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:e=>e.from.name.toUpperCase(),align:"left",sortable:!0},{name:"models",label:"Modelos",field:"products_count",align:"center"},{name:"notes",label:"Notas",field:e=>e.notes,align:"left"},{name:"invoice",label:"Salida",field:e=>{var t;return(t=e.invoice)!=null?t:"--"},align:"center"}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),g=(e,t,s)=>c.push(`/checkout/${t.id}`),r=p(()=>u.ordersSize),v=p(()=>u.ordersdb);return(e,t)=>(y(),k(R,{padding:""},{default:l(()=>[a(L,{flat:"","row-key":"id",rows:C(v),columns:o.value.columns,filter:o.value.filter,pagination:o.value.pagination,onRowClick:g},{top:l(()=>[d("div",A,[d("div",E,"Pedidos: "+M(C(r)),1),a(P,{dense:"",modelValue:o.value.filter,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.filter=s),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:l(()=>[a(I,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"])]),_:1}))}};const G=d("div",{class:"text-bold"},"CheckOut ",-1),J={class:"row"},K={class:"col row"},oe={__name:"CheckoutLyt",setup(V){const c=S(),u=Y(),_=D(),o=z(),g=n([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),r=n([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),v=n(null),e=n(null),t=n({from:f(Date.now()).startOf("day"),to:f(Date.now()).startOf("day")}),s=async()=>{var w;o.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let m=(w=c.query.v)!=null?w:"day",i=r.value.findIndex($=>$.id==m),h=i>=0?i:0;e.value=r.value[h],t.value.from=f(Date.now()).startOf(e.value.id);const x=await N.index(e.value.id);console.log(x),_.fillOrders(x.orders),v.value=g.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),o.loading.hide()},b=m=>u.push(`/checkout?v=${m.id}`);return p(()=>t.value.from.format("YYYY/MM/DD")),p(()=>t.value.to.format("YYYY/MM/DD")),O(()=>c.query,()=>{s()}),s(),document.title="CheckOut",(m,i)=>(y(),k(q,{view:"lHh Lpr lFf"},{default:l(()=>[a(T,{bordered:"",class:"transparent text-dark"},{default:l(()=>[a(U,{class:"row justify-between items-center"},{default:l(()=>[G,d("div",J,[a(Q,{color:"pink-5",round:"",unelevated:"",flat:"",icon:"sync",onClick:s}),d("div",K,[a(H,{class:"col",dense:"",filled:"",label:"Vista",modelValue:e.value,"onUpdate:modelValue":[i[0]||(i[0]=h=>e.value=h),b],options:r.value},null,8,["modelValue","options"]),e.value.id=="C"?(y(),k(Q,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):B("",!0)])])]),_:1})]),_:1}),a(j,null,{default:l(()=>[a(F)]),_:1})]),_:1}))}};export{oe as default};