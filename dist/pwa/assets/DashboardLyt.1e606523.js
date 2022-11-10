import{u as J,r as v,c as q,a8 as ve,o as p,aE as P,d as e,w as a,f as s,t as u,b,aG as L,e as $,Q as M,aD as w,i as R,h as k,au as N,R as ee,aF as H,aJ as oe,x as me,a as se,g as fe}from"./index.6a05ca58.js";import{u as F,x as V,q as O,s as ae,y as z,z as E,A as B,t as G,Q as W,a as X,B as _e,w as T,v as j,R as A,b as ge,c as be,d as ye,e as ke,f as he,g as xe}from"./QCard.96e116b3.js";import{d as U}from"./dayjs.min.16be2667.js";import{Q as we,a as Ce,b as te,c as Ve,d as le,e as Se,u as Z}from"./browser.ec369685.js";import{Q as K,C as ne}from"./ClosePopup.ed8da0dc.js";import"./axios.05577114.js";const De=s("div",{class:"text-overline text-grey-7"},"Sucursal",-1),Qe={class:"text-h6"},$e={class:"q-px-lg text-center"},Ie=s("div",{class:"text-overline text-grey-7"},"Folio",-1),Ee={class:"text-h6"},Re={class:"text-right"},qe=s("div",{class:"text-overline text-grey-7"},"Agente",-1),Pe={class:"text-h6"},Ae={class:"text--1"},Ue={key:0},Le=s("div",null,"Salida",-1),Ye={class:"text-bold text-indigo-10"},Be=s("div",null,"Entrada",-1),Me={class:"text-bold text-orange-10"},je=s("span",{class:"text-indigo-11"},"ID:10",-1),Oe={class:"full-width row items-center"},ze={class:"col text-dark"},Ne={class:"text-h6"},Te={class:"text-bold"},Fe={key:1,class:"text-center q-pa-lg text-h6 text-grey-7"},Ge=s("canvas",{id:"qrcode"},null,-1),He={class:"text--2"},Ke=s("div",{class:"q-ml-md"},[s("div",{class:"text-h6"},"Emitir salida?"),s("div",null,"La salida emitira la factura correspondiente en Factusol.")],-1),Je={__name:"OrderViewer",props:{head:{type:Object,default:{}}},emits:["loaded","loading"],setup(Y,{emit:S}){const D=Y,h=F();J();const d=v(D.head),g=v(!0),m=v([]),f=v("basket"),i=v(null),_=v([]),C=v(!1),Q=v({state:!1}),y=v({state:!1,key:null}),x=v([]),l=v({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:t=>t.variants.length?t.variants.map(n=>n.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"locs",label:"Ubicacion",field:t=>t.locations.length?t.locations.map(n=>n.path).join(", "):"--",align:"left",coldesc:"Ubicaciones en almacen general"},{name:"stocks",label:"Stock (pzs)",field:t=>t.stocks.reduce((n,r)=>n+r.pivot.stock,0),sortable:!0,classes:t=>t.stocks.reduce((n,r)=>n+r.pivot.stock,0)<=0?"text-red text-bold":"text-bold text-primary",align:"center",coldesc:"Stock total en almacenes GENERALES (CEDIS+PAN)"},{name:"ipack",label:"PxC",field:t=>typeof t.pivot.ipack=="number"?t.pivot.ipack:t.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:t=>t.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:t=>t.units.id==3?"Cajas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Salida (conteo)",field:t=>t.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:t=>t.pivot._supply_by==3?(typeof t.pivot.ipack=="number"?t.pivot.ipack:t.pieces)*(typeof t.pivot.ipack=="number"?t.pivot.toDelivered:t.pivot.amount):typeof t.pivot.ipack=="number"?t.pivot.toDelivered:t.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:t=>t.pivot.checkout?"OK":"---",align:"center",classes:t=>t.pivot.checkout?"text-positive text-bold":"text-red",sortable:!0,coldesc:"Revision del Administrador"},{name:"received",label:"Entrada (conteo)",field:t=>t.pivot.toReceived,align:"center",coldesc:"Embalaje recibido"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),o=q(()=>_.value.reduce((t,n)=>t+(n.pivot._supply_by==3?n.pivot.amount*n.pieces:n.pivot.amount),0));q(()=>i.value&&(i.value.id==2||i.value.id==6));const c=q(()=>m.value.find(t=>t.id==i.value.id).pivot),I=async()=>{S("loading"),g.value=!0;let t=await A.order(d.value.id);console.log(t.data),_.value=t.data.products,m.value=t.data.log.map(n=>(n.pivot.details=JSON.parse(n.pivot.details),n)),i.value=t.data.status,y.value.key=t.data.entry_key,g.value=!1,S("loaded")},ie=async()=>{S("loading"),C.value=!0;let t=3,n={id:d.value.id,state:t};const r=await A.nextState(n);r.status==200?(C.value=!1,h.notify({message:`Surtido iniciado para el pedido  ${d.value.id}`,icon:"done",position:"center",color:"teal"}),I()):alert(`Error ${r.status}: ${r.data}`),S("loaded")},de=async()=>{h.loading.show({message:"Generando, espera..."}),Q.value.state=!1;const t=await A.genInvoice(d.value.id);console.log(t.data),t.status==200?t.data.invoice?I():alert("Error 500: Ocurrio un error inesperado :("):alert(`Error ${t.status}: ${t.data}`),h.loading.hide()},re=async()=>{let t=`http://192.168.10.15:2200/#/checkin/${d.value.id}?key=${y.value.key}`;y.value.state=!0,me(()=>Se.toCanvas(document.getElementById("qrcode"),t))},ce=async()=>{const t=await A.printKey(d.value.id);console.log(t)};return ve(()=>x.value=l.value.columns.map(t=>t.name)),I(),(t,n)=>(p(),P(L,null,[e(T,{class:"full-width"},{default:a(()=>[e(V,{class:"row justify-between"},{default:a(()=>[s("div",null,[De,s("div",Qe,u(d.value.from.alias),1)]),s("div",$e,[Ie,s("div",Ee,u(d.value.id),1)]),s("div",Re,[qe,s("div",Pe,u(d.value.created_by.nick),1)])]),_:1}),e(O),g.value?(p(),b(V,{key:0,class:"text-center"},{default:a(()=>[e(we,{size:"50px",color:"purple"})]),_:1})):(p(),P(L,{key:1},[e(V,{horizontal:"",class:"row"},{default:a(()=>[e(V,{class:"col"},{default:a(()=>[s("div",null,u(i.value.name),1),s("div",Ae,u($(U)($(c).updated_at).format("YYYY-MM-DD hh:mm A")),1),d.value.notes?(p(),P("div",Ue,[e(M,{name:"info",color:"pink-5",size:"20px"}),w(u(d.value.notes),1)])):R("",!0)]),_:1}),i.value&&i.value.id>6?(p(),b(V,{key:0},{default:a(()=>[Le,s("div",Ye,u(d.value.invoice),1)]),_:1})):R("",!0),i.value&&i.value.id>9?(p(),b(V,{key:1},{default:a(()=>[Be,s("div",Me,u(d.value.invoice),1)]),_:1})):R("",!0),i.value&&i.value.id>1?(p(),b(K,{key:2,class:"col",align:"right"},{default:a(()=>[i.value&&i.value.id>6?(p(),b(k,{key:0,color:"pink-6",icon:"qr_code",dense:"",onClick:re})):R("",!0),i.value&&i.value.id>2?(p(),b(k,{key:1,color:"indigo-10",icon:"print",dense:""},{default:a(()=>[e(ae,{class:"bg-indigo-10",style:{"min-width":"250px"}},{default:a(()=>[e(z,{dark:""},{default:a(()=>[e(E,null,{default:a(()=>[e(B,null,{default:a(()=>[w("Impresion")]),_:1})]),_:1})]),_:1}),e(G,{dark:""},{default:a(()=>[N((p(),b(z,{clickable:""},{default:a(()=>[e(E,{avatar:""},{default:a(()=>[e(M,{name:"print"})]),_:1}),e(E,null,{default:a(()=>[e(B,null,{default:a(()=>[w("Salidas")]),_:1}),e(B,{caption:"",class:"text--2"},{default:a(()=>[je,w(" 192.168.10.15")]),_:1})]),_:1})]),_:1})),[[ee]])]),_:1})]),_:1})]),_:1})):R("",!0),i.value&&i.value.id==2?(p(),b(k,{key:2,color:"positive",icon:"start",dense:"",label:"Iniciar Surtido",onClick:ie})):R("",!0),i.value&&i.value.id==6?(p(),b(k,{key:3,color:"pink",icon:"start",dense:"",label:"Emitir Salida",onClick:n[0]||(n[0]=r=>Q.value.state=!0)})):R("",!0)]),_:1})):R("",!0)]),_:1}),e(O),e(Ce,{modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=r=>f.value=r),class:"text-pink-5",dense:"","no-caps":""},{default:a(()=>[e(te,{name:"log",label:"Log"}),e(te,{name:"basket",label:"Productos"})]),_:1},8,["modelValue"]),e(Ve,{modelValue:f.value,"onUpdate:modelValue":n[4]||(n[4]=r=>f.value=r),animated:""},{default:a(()=>[e(le,{name:"log"},{default:a(()=>[e(G,null,{default:a(()=>[(p(!0),P(L,null,H(m.value,r=>(p(),b(z,{key:r.id},{default:a(()=>[e(E,{avatar:""},{default:a(()=>[w(u(r.id),1)]),_:2},1024),e(E,null,{default:a(()=>[w(u(r.name),1)]),_:2},1024),e(E,null,{default:a(()=>[w(u(r.pivot.details.responsable),1)]),_:2},1024),e(E,null,{default:a(()=>[w("de "+u($(U)(r.pivot.created_at).format("h:mm a"))+" a "+u($(U)(r.pivot.updated_at).format("h:mm a")),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(le,{name:"basket"},{default:a(()=>[_.value.length?(p(),b(W,{key:0,"row-key":"id",flat:"",rows:_.value,columns:l.value.columns,pagination:l.value.pagination,filter:l.value.filter,"visible-columns":x.value},{top:a(()=>[s("div",Oe,[s("div",ze,[s("span",Ne,[e(k,{color:"pink-5",icon:"sync",onClick:I,round:"",dense:"",flat:""}),w(" Productos: "+u(_.value.length),1)]),w(", "),s("span",Te,"Piezas: "+u($(o)),1)]),e(X,{dense:"",modelValue:l.value.filter,"onUpdate:modelValue":n[2]||(n[2]=r=>l.value.filter=r),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:a(()=>[e(M,{name:"search"})]),_:1},8,["modelValue"]),e(k,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:a(()=>[e(ae,{style:{"min-width":"200px"}},{default:a(()=>[e(G,null,{default:a(()=>[(p(!0),P(L,null,H(l.value.columns,(r,ue)=>N((p(),b(z,{tag:"label",key:ue},{default:a(()=>[e(E,null,{default:a(()=>[e(B,null,{default:a(()=>[w(u(r.label),1)]),_:2},1024),e(B,{caption:""},{default:a(()=>[w(u(r.coldesc),1)]),_:2},1024)]),_:2},1024),e(E,{side:"",top:""},{default:a(()=>[e(_e,{color:"pink-5",modelValue:x.value,"onUpdate:modelValue":n[3]||(n[3]=pe=>x.value=pe),val:r.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[ee]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])):(p(),P("div",Fe,"Nada por aqui"))]),_:1})]),_:1},8,["modelValue"])],64))]),_:1}),e(j,{modelValue:y.value.state,"onUpdate:modelValue":n[5]||(n[5]=r=>y.value.state=r)},{default:a(()=>[e(T,null,{default:a(()=>[e(V,{class:"text-h6 text-center"},{default:a(()=>[w(u(d.value.id)+" - "+u(d.value.from.alias),1)]),_:1}),e(O),e(V,{class:"text-center"},{default:a(()=>[Ge,s("div",He,u(y.value.key),1)]),_:1}),e(O),e(V,{align:"center"},{default:a(()=>[e(k,{color:"primary",icon:"print",onClick:ce})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(j,{modelValue:Q.value.state,"onUpdate:modelValue":n[6]||(n[6]=r=>Q.value.state=r)},{default:a(()=>[e(T,null,{default:a(()=>[e(V,{class:"row items-start"},{default:a(()=>[e(oe,{icon:"warning",color:"orange-14","text-color":"white"}),Ke]),_:1}),e(K,{align:"right"},{default:a(()=>[N(e(k,{flat:"",label:"Cancelar",color:"primary","no-caps":""},null,512),[[ne]]),e(k,{flat:"",label:"Continuar",color:"primary",onClick:de,"no-caps":""})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},We={class:"text-h6"},Xe={class:"row q-mt-md"},Ze={class:"q-ml-sm text-h6"},ea={__name:"TableReport",props:{rows:{type:Array,default:[]},name:{type:String,default:""},type:{type:String,default:""}},emits:["cardResumeActived"],setup(Y,{emit:S}){const D=Y;Z();const h=F(),d=v({state:!1,action:null}),g=v({columns:[{name:"ID",field:"ID",label:"ID",align:"center"},{name:"code",field:"CODIGO",label:"Codigo",align:"center"},{name:"desc",field:"DESCRIPCION",label:"Descripcion",align:"left"},{name:"stockcedis",field:"CEDIS",label:"Stock (CEDIS)",align:"center"},{name:"stockpan",field:"PANTACO",label:"Stock (PAN)",align:"center"}],filter:""}),m={pndcs:{l:"Habilitar todo",c:"indigo-13",desc:"Los productos en esta lista se habilitaran y podran ser solicitados por cuaqluier tienda."},pdss:{l:"Deshabilitar todo",c:"pink-13",desc:"Los productos en esta lista se deshabilitaran y no podran ser solicitados."}},f=v(D.rows),i=v(D.name),_=v(D.type),C=q(()=>_.value?m[_.value]:{l:"",c:""}),Q=()=>{const l=m[_.value];d.value.action=l,d.value.state=!0},y=async()=>{h.loading.show({message:"Espera..."});const l=await A.massiveAction({action:_.value});console.log(l),l.status==200?(l.data,d.value.state=!1,d.value.action=null,h.loading.hide(),h.notify({position:"center",color:"positive",icon:"done"}),S("cardResumeActived")):(console.error(l.data),alert(`Error ${l.status}: ${l.data.msg}`))},x=(l,o,c)=>{console.log(l),console.log(o),console.log(c),console.log(_.value)};return(l,o)=>(p(),P(L,null,[e(W,{"row-key":"ID",rows:f.value,columns:g.value.columns,filter:g.value.filter,onRowClick:x},{top:a(()=>[s("div",We,u(i.value),1),s("div",Xe,[e(k,{color:$(C).c,icon:"warning",label:$(C).l,onClick:Q},null,8,["color","label"]),e(X,{modelValue:g.value.filter,"onUpdate:modelValue":o[0]||(o[0]=c=>g.value.filter=c),dense:"",type:"text",icon:"search",label:"Buscar"},{prepend:a(()=>[e(M,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter"]),e(j,{modelValue:d.value.state,"onUpdate:modelValue":o[1]||(o[1]=c=>d.value.state=c),persistent:""},{default:a(()=>[e(T,null,{default:a(()=>[e(V,{class:"row items-center"},{default:a(()=>[e(oe,{icon:"warning",color:d.value.action.c,"text-color":"white"},null,8,["color"]),s("span",Ze,u(d.value.action.l),1)]),_:1}),e(V,null,{default:a(()=>[w(u(d.value.action.desc),1)]),_:1}),e(K,{align:"right"},{default:a(()=>[N(e(k,{flat:"",label:"cancelar",color:"primary"},null,512),[[ne]]),e(k,{flat:"",label:"continuar",color:"primary",onClick:y})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},aa={class:"row q-mb-md items-start justify-around"},ta={class:"text-left"},la={class:"text-h5"},oa={class:"text--2"},sa={class:"full-width row items-center"},na={class:"col text-h6 text-dark"},ia={__name:"AdminDashboard",emits:["reloadDashboard"],setup(Y,{emit:S}){J(),se();const D=Z(),h=F(),d=["text-grey-5 text-bold","text-bold text-h6 text-red","text-indigo","4","5","text-bold text-pink-7","text-orange-8","8","text-primary","text-positive"],g=v({columns:[{name:"id",label:"Folio",field:"id",align:"center",sortable:!0},{name:"state",label:"Estado",field:l=>l.log.length==1?l.log[0].name:l.log[l.log.length-1].name,align:"left",sortable:!0,sort:(l,o,c,I)=>parseInt(c._status)-parseInt(I._status),classes:l=>d[l._status-1]},{name:"laststate",label:"Ultima actividad",field:l=>U(l.log.find(o=>o.id==l.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:l=>l.from.name.toUpperCase(),align:"left",sortable:!0},{name:"notes",label:"Notas",field:l=>l.notes,align:"left",classes:l=>l.notes?"text-orange text-bold":""},{name:"tmodels",label:"Modelos",field:l=>l.products_count,align:"center",sortable:!0},{name:"invoice",label:"Salida",field:l=>{var o;return(o=l.invoice)!=null?o:null},align:"center",classes:"text-bold"},{name:"entry",label:"Entrada",field:l=>{var o;return(o=l.invoice_received)!=null?o:null},align:"center",classes:"text-bold"}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),m=v({state:!1,title:"",data:null,name:null,type:null}),f=v({state:!1,head:null,block:!0}),i=q(()=>D.ordersSize),_=q(()=>D.ordersdb),C=q(()=>D.resume),Q=async(l,o,c)=>{f.value.head=o,f.value.state=!0},y=async l=>{h.loading.show({message:"cargando..."+l});const o=await A.report(l);console.log(o.data),m.value.data=o.data.rows,m.value.name=o.data.name,m.value.type=l,m.value.state=!0,h.loading.hide()},x=()=>{m.value.state=!1,m.state=!1,S("reload")};return(l,o)=>(p(),b(ge,{padding:"",class:"bg-grey-2"},{default:a(()=>[s("div",aa,[(p(!0),P(L,null,H($(C),c=>(p(),b(k,{stack:"","no-caps":"",class:"q-py-md",key:c.key,onClick:I=>y(c.key),color:c.total==0?"teal-10":"pink-13",disabled:c.total==0},{default:a(()=>[s("div",ta,[s("div",la,u(c.total),1),s("div",oa,u(c.name),1)])]),_:2},1032,["onClick","color","disabled"]))),128))]),e(W,{flat:"",bordered:"","row-key":"id",rows:$(_),columns:g.value.columns,filter:g.value.filter,pagination:g.value.pagination,onRowClick:Q},{top:a(()=>[s("div",sa,[s("div",na,"Pedidos: "+u($(i)),1),e(X,{dense:"",modelValue:g.value.filter,"onUpdate:modelValue":o[0]||(o[0]=c=>g.value.filter=c),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:a(()=>[e(M,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"]),e(j,{"full-width":"",modelValue:f.value.state,"onUpdate:modelValue":o[3]||(o[3]=c=>f.value.state=c),persistent:f.value.block,"no-esc-dismiss":f.value.block,"no-backdrop-dismiss":f.value.block},{default:a(()=>[e(Je,{head:f.value.head,onLoaded:o[1]||(o[1]=c=>f.value.block=!1),onLoading:o[2]||(o[2]=c=>f.value.block=!0)},null,8,["head"])]),_:1},8,["modelValue","persistent","no-esc-dismiss","no-backdrop-dismiss"]),e(j,{modelValue:m.value.state,"onUpdate:modelValue":o[4]||(o[4]=c=>m.value.state=c)},{default:a(()=>[e(ea,{rows:m.value.data,name:m.value.name,type:m.value.type,onCardResumeActived:x},null,8,["rows","name","type"])]),_:1},8,["modelValue"])]),_:1}))}};const da=s("div",{class:"text-bold"},"Dashboard ",-1),ra={class:"row"},ca={class:"col row"},ga={__name:"DashboardLyt",setup(Y){const S=J(),D=se(),h=Z(),d=F(),g=v([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),m=v([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),f=v(null),i=v(null),_=v({from:U(Date.now()).startOf("day"),to:U(Date.now()).startOf("day")}),C=async()=>{var c;d.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let y=(c=S.query.v)!=null?c:"day",x=m.value.findIndex(I=>I.id==y),l=x>=0?x:0;i.value=m.value[l],_.value.from=U(Date.now()).startOf(i.value.id);const o=await A.index(i.value.id);console.log(o),h.fillOrders(o.orders),h.fillResume(o.resume),h.fillPrinters(o.printers),f.value=g.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),d.loading.hide()},Q=y=>D.push(`/dashboard?v=${y.id}`);return q(()=>_.value.from.format("YYYY/MM/DD")),q(()=>_.value.to.format("YYYY/MM/DD")),fe(()=>S.query,()=>{C()}),C(),document.title="Dashboard",(y,x)=>(p(),b(be,{view:"lHh Lpr lFf"},{default:a(()=>[e(he,{bordered:"",class:"transparent text-dark"},{default:a(()=>[e(ye,{class:"row justify-between items-center"},{default:a(()=>[da,s("div",ra,[e(k,{color:"pink-5",round:"",unelevated:"",flat:"",icon:"sync",onClick:C}),s("div",ca,[e(ke,{class:"col",dense:"",filled:"",label:"Vista",modelValue:i.value,"onUpdate:modelValue":[x[0]||(x[0]=l=>i.value=l),Q],options:m.value},null,8,["modelValue","options"]),i.value.id=="C"?(p(),b(k,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):R("",!0)])])]),_:1})]),_:1}),e(xe,null,{default:a(()=>[e(ia,{onReload:C})]),_:1})]),_:1}))}};export{ga as default};
