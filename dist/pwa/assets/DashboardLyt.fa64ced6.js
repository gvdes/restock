import{r as v,c as A,o as p,aF as C,f as o,d as e,w as t,h as x,aH as Y,i as F,e as B,ax as Z,b as R,aN as Re,Q as de,t as u,aE as h,R as Se,u as he,a8 as Ae,aG as X,aJ as $e,x as Le,F as Ve,B as fe,E as _e,m as je,a as De,aO as Be,aP as Fe,g as Te}from"./index.936f670f.js";import{u as se,o as H,e as le,x as oe,y as Q,z as te,v as P,p as ue,q as ge,Q as ie,a as xe,A as Me,t as W,s as ee,w as be,C as ye,R as N,D as we,b as ze,c as Ne,d as Ye,f as He,g as Ge}from"./ClosePopup.11f69061.js";import{d as K}from"./dayjs.min.53a5c0af.js";import{a as Ke,Q as Je,b as We,c as Xe,d as ce,e as Ze,f as pe,g as et,u as ke}from"./Restock.2bfaed6b.js";import{A as ae}from"./AssistApi.82e5e84a.js";import{b as tt}from"./jspdf.plugin.autotable.0f43f8fb.js";import{p as at}from"./pdfCreate.61ce5da8.js";import{$sktRestock as G,usrSkt as lt}from"./socket.e6c7a486.js";import"./axios.0b76110d.js";const ot={class:"q-pa-sm bg-grey-2 text-bold row justify-between items-center",style:{"min-width":"250px"}},st=o("div",null,"Impresion",-1),nt={key:0,class:"row justify-between items-center"},it={class:"q-mt-sm q-pa-sm"},dt={key:0,class:"q-pa-sm"},rt={class:"text--3"},ut={class:"q-pa-sm text-right"},Ce={__name:"PrinterSelect",emits:["selected"],setup(S,{emit:y}){const $=se(),m=Ke(),d=v(null),c=v(null),b=A(()=>m.printers),r=A(()=>d.value?d.value.printers:[]),M=()=>{$.localStorage.set("LUP",{wkp:d.value,printer:c.value}),y("selected",c.value)},I=$.localStorage.getItem("LUP");return I&&(d.value=I.wkp,c.value=I.printer),(E,V)=>(p(),C(Y,null,[o("div",ot,[st,d.value?(p(),C("div",nt,[e(Je,{flat:""},{default:t(()=>[e(x,{flat:"",color:"positive",icon:"add",dense:""}),c.value?(p(),C(Y,{key:0},[e(x,{flat:"",color:"negative",icon:"delete",dense:""}),e(x,{flat:"",color:"orange",icon:"edit",dense:""})],64)):F("",!0)]),_:1})])):F("",!0)]),e(H),o("div",it,[e(le,{modelValue:d.value,"onUpdate:modelValue":[V[0]||(V[0]=f=>d.value=f),V[1]||(V[1]=f=>c.value=null)],options:B(b),label:"Sucursal",filled:"","option-label":"alias","option-value":"id"},null,8,["modelValue","options"])]),d.value?(p(),C("div",dt,[e(le,{modelValue:c.value,"onUpdate:modelValue":V[2]||(V[2]=f=>c.value=f),options:B(r),label:"Impresora",filled:"","option-value":"id","option-label":"name"},{option:t(f=>[Z((p(),R(oe,Re({clickable:""},f.itemProps),{default:t(()=>[e(Q,{class:"text-center",side:""},{default:t(()=>[e(de,{color:"primary","text-color":"white",name:"print",size:"30px"}),o("span",rt,"ID:"+u(f.opt.id),1)]),_:2},1024),e(Q,null,{default:t(()=>[e(te,null,{default:t(()=>[h(u(f.opt.name),1)]),_:2},1024),e(te,{caption:"",lines:"2"},{default:t(()=>[h(u(f.opt.ip),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)),[[Se]])]),_:1},8,["modelValue","options"])])):F("",!0),o("div",ut,[d.value&&c.value?(p(),R(x,{key:0,color:"primary",icon:"print",onClick:M})):F("",!0)])],64))}},ct=o("div",{class:"text-overline text-grey-7"},"Sucursal",-1),pt={class:"text-h6"},vt={class:"q-px-lg text-center"},mt=o("div",{class:"text-overline text-grey-7"},"Folio",-1),ft={class:"text-h6"},_t={class:"text-right"},gt=o("div",{class:"text-overline text-grey-7"},"Agente",-1),bt={class:"text-h6"},yt={class:"text-center"},ht=o("div",{class:"text-overline text-grey-7"},"Fecha",-1),xt={class:"text-h6"},kt={key:0,class:"text-center"},wt=o("div",{class:"text-overline text-grey-7 col"},"Notas",-1),Ct={class:"text-h6"},St={class:"flex item-center"},$t={class:"full-width row items-center"},Vt={class:"col text-dark"},Dt={class:"text-h6"},qt={class:"text-bold"},It={key:1,class:"text-center q-pa-lg text-h6 text-grey-7"},Et={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Qt=o("br",null,null,-1),Ut=o("br",null,null,-1),Ot={class:"text-overline text-grey-7"},Pt=o("div",null,"Salida",-1),Rt=o("div",null,"Entrada",-1),At=o("div",null,"Herramientas",-1),Lt={class:"row"},jt={key:0,class:"col"},Bt={key:1,class:"col"},Ft={key:2,class:"col"},Tt=o("canvas",{id:"qrcode"},null,-1),Mt={class:"text--2"},zt=o("div",{class:"q-ml-md"},[o("div",{class:"text-h6"},"Cambiar a En Camino?"),o("div",null,"Cambiara a estatus en camino")],-1),Nt=o("div",{class:"text-center text-h6"},"Surtidor",-1),Yt={class:"text-center text-bold text-subtitle2 text-overline"},Ht={__name:"OrderViewer",props:{head:{type:Object,default:{}}},emits:["loaded","loading","fresh"],setup(S,{emit:y}){const $=S,m=se();he();const d=v({opts:[],val:[],filter:[]}),c=v({opts:null,val:null,filter:null}),b=v(null),r=v($.head),M=v(null),I=v(!0),E=v([]),V=v("supliers"),f=v(null),z=v([]),D=v(!1),U=v({state:!1}),n=v({state:!1,key:null}),_=v(null),i=v({state:!1}),w=v(null),g=v([]),k=v({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:a=>a.variants.length?a.variants.map(l=>l.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"locs",label:"Ubicacion",field:a=>a.locations.length?a.locations.map(l=>l.path).join(", "):"--",align:"left",coldesc:"Ubicaciones en almacen general"},{name:"stocks",label:"Stock (pzs)",field:a=>a.stocks.reduce((l,s)=>l+s.pivot.stock,0),sortable:!0,classes:a=>a.stocks.reduce((l,s)=>l+s.pivot.stock,0)<=0?"text-red text-bold":"text-bold text-primary",align:"center",coldesc:"Stock total en almacenes GENERALES (CEDIS+PAN)"},{name:"ipack",label:"PxC",field:a=>typeof a.pivot.ipack=="number"?a.pivot.ipack:a.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:a=>a.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:a=>a.units.id==3?"Cajas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Salida (conteo)",field:a=>a.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:a=>a.pivot._supply_by==3?(typeof a.pivot.ipack=="number"?a.pivot.ipack:a.pieces)*(typeof a.pivot.ipack=="number"?a.pivot.toDelivered:a.pivot.amount):typeof a.pivot.ipack=="number"?a.pivot.toDelivered:a.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:a=>a.pivot.checkout?"OK":"---",align:"center",classes:a=>a.pivot.checkout?"text-positive text-bold":"text-red",sortable:!0,coldesc:"Revision del Administrador"},{name:"received",label:"Entrada (conteo)",field:a=>a.pivot.toReceived,align:"center",coldesc:"Embalaje recibido"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),L=A(()=>z.value.reduce((a,l)=>a+(l.pivot._supply_by==3?l.pivot.amount*l.pieces:l.pivot.amount),0));A(()=>f.value&&(f.value.id==2||f.value.id==6)),A(()=>E.value.find(a=>a.id==f.value.id).pivot),A(()=>_.value.map(a=>a._status).includes(6));const j=async()=>{y("loading"),I.value=!0;let a=await N.order(r.value.id);if(console.log(a.data),z.value=a.data.products,E.value=a.data.log.map(l=>(l.pivot.details=JSON.parse(l.pivot.details),l)),_.value=a.data.partition,f.value=a.data.status,M.value=a.data,w.value=a.data.invoice,f.value.id==2){let l=await ae.getSupply();console.log(l),d.value.opts=l}I.value=!1,y("loaded")},T=()=>{i.value.state=!0},J=async()=>{console.log("Iniciando surtido"),y("loading"),D.value=!0;let a=3,l={id:r.value.id,state:a};const s=await N.nextState(l);if(s.status==200){D.value=!1,m.notify({message:`Surtido iniciado para el pedido  ${r.value.id}`,icon:"done",position:"center",color:"teal"});let q={supplyer:d.value.val,pedido:r.value.id,status:a},O=await ae.SaveSupply(q);console.log(O),O.status==200?(j(),y("fresh",r.value.id),i.value.state=!1):alert(`Error ${O.status}: ${O.data} 2`)}else alert(`Error ${s.status}: ${s.data} 1`);y("loaded")},re=async()=>{m.loading.show({message:"Cambiando, espera..."});let a={chofi:c.value.val,supplyer:b.value._suplier_id,pedido:r.value.id,status:7},l=await ae.SaveChofi(a);if(l.status==200){let s={id:r.value.id,state:7,suply:b.value._suplier_id};console.log(s);let q=await ae.nextState(s);if(console.log(q),q.data.partitionsEnd>M.value._status){let O={id:r.value.id,state:q.data.partitionsEnd};console.log(O);const ne=await N.nextState(O);console.log(ne)}if(q.status==200){j();let O=q.data.partition.id,ne=_.value.findIndex(Pe=>Pe.id==O);_.value[ne]._status=q.data.partition._status,_.value[ne].invoice=q.data.partition.invoice}m.notify({message:"Pedido en ruta",position:"center",icon:"done",timeout:5e3,color:"positive"}),U.value.state=!1}else alert(`Error ${l.status}: ${l.data}`);m.loading.hide()},qe=async a=>{let l=`http://192.168.10.189:2200/#/checkin/${r.value.id}?key=${a}`;n.value.state=!0,Le(()=>tt.toCanvas(document.getElementById("qrcode"),l))},Ie=async a=>{m.loading.show({message:"..."}),console.log(a);const l=await N.printKey({ip:a.ip,port:a._port,order:r.value.id});l.status==200?(l.data,m.loading.hide(),m.notify({message:"Impresion correcta",icon:"done",color:"positive",position:"top"})):(console.error(l),alert(`Error ${l.status}: ${l.data}`))},Ee=async a=>{m.loading.show({message:"..."}),console.log(a);const l=await N.printForSupply({ip:a.ip,port:a._port,order:r.value.id});console.log(l),l.status==200?(l.data?m.notify({message:"Impresion correcta",icon:"done",color:"positive",position:"top"}):m.notify({message:`Sin conexion a <b>${a.name} <small>(${a.ip})</small></b>`,icon:"fas fa-bug",color:"negative",position:"center",html:!0,timeout:4e3}),m.loading.hide()):(console.error(l),alert(`Error ${l.status}: ${l.data}`))},Qe=async a=>{b.value=a,U.value.state=!0;let l=await ae.getSupply();console.log(l),c.value.opts=l},Ue=(a,l,s)=>{l(()=>{if(a==="")d.value.filter=d.value.opts;else{const q=a.toLowerCase();d.value.filter=d.value.opts.filter(O=>O.complete_name.toLowerCase().indexOf(q)>-1)}})},Oe=(a,l,s)=>{l(()=>{if(a==="")c.value.filter=c.value.opts;else{const q=a.toLowerCase();c.value.filter=c.value.opts.filter(O=>O.complete_name.toLowerCase().indexOf(q)>-1)}})};return Ae(()=>g.value=k.value.columns.map(a=>a.name)),j(),(a,l)=>(p(),C(Y,null,[e(W,{class:"full-width"},{default:t(()=>[e(P,{class:"row justify-between"},{default:t(()=>[o("div",null,[ct,o("div",pt,u(r.value.from.alias),1)]),o("div",vt,[mt,o("div",ft,u(r.value.id),1)]),o("div",_t,[gt,o("div",bt,u(r.value.created_by.nick),1)])]),_:1}),e(H),e(P,{class:"row justify-between"},{default:t(()=>[o("div",yt,[ht,o("div",xt,u(B(K)(r.value.updated_at).format("YYYY-MM-DD")),1)]),r.value.notes?(p(),C("div",kt,[wt,o("div",Ct,u(r.value.notes),1)])):F("",!0),o("div",St,[f.value&&f.value.id==2?(p(),R(x,{key:0,color:"positive",icon:"start",dense:"",label:"Iniciar Surtido",onClick:T,flat:"",rounded:""})):F("",!0),f.value&&f.value.id>2?(p(),R(x,{key:1,color:"indigo-10",icon:"print",dense:""},{default:t(()=>[e(ue,{class:"bg-grey-1 text-indigo-10",style:{"min-width":"250px"}},{default:t(()=>[e(Ce,{onSelected:Ee})]),_:1})]),_:1})):F("",!0)])]),_:1}),e(H),I.value?(p(),R(P,{key:0,class:"text-center"},{default:t(()=>[e(We,{size:"50px",color:"purple"})]),_:1})):(p(),C(Y,{key:1},[e(H),e(Xe,{modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=s=>V.value=s),class:"text-pink-5",dense:"","no-caps":""},{default:t(()=>[e(ce,{name:"log",label:"Log"}),e(ce,{name:"basket",label:"Productos"}),e(ce,{name:"supliers",label:"Surtidores"})]),_:1},8,["modelValue"]),e(Ze,{modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=s=>V.value=s),animated:""},{default:t(()=>[e(pe,{name:"log"},{default:t(()=>[e(ge,null,{default:t(()=>[(p(!0),C(Y,null,X(E.value,s=>(p(),R(oe,{key:s.id},{default:t(()=>[e(Q,{avatar:""},{default:t(()=>[h(u(s.id),1)]),_:2},1024),e(Q,null,{default:t(()=>[h(u(s.name),1)]),_:2},1024),e(Q,null,{default:t(()=>[h(u(s.pivot.details.responsable),1)]),_:2},1024),e(Q,null,{default:t(()=>[h("de "+u(B(K)(s.pivot.created_at).format("h:mm a"))+" a "+u(B(K)(s.pivot.updated_at).format("h:mm a")),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(pe,{name:"basket"},{default:t(()=>[z.value.length?(p(),R(ie,{key:0,"row-key":"id",flat:"",rows:z.value,columns:k.value.columns,pagination:k.value.pagination,filter:k.value.filter,"visible-columns":g.value},{top:t(()=>[o("div",$t,[o("div",Vt,[o("span",Dt,[e(x,{color:"pink-5",icon:"sync",onClick:j,round:"",dense:"",flat:""}),h(" Productos: "+u(z.value.length),1)]),h(", "),o("span",qt,"Piezas: "+u(B(L)),1)]),e(xe,{dense:"",modelValue:k.value.filter,"onUpdate:modelValue":l[1]||(l[1]=s=>k.value.filter=s),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:t(()=>[e(de,{name:"search"})]),_:1},8,["modelValue"]),e(x,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:t(()=>[e(ue,{style:{"min-width":"200px"}},{default:t(()=>[e(ge,null,{default:t(()=>[(p(!0),C(Y,null,X(k.value.columns,(s,q)=>Z((p(),R(oe,{tag:"label",key:q},{default:t(()=>[e(Q,null,{default:t(()=>[e(te,null,{default:t(()=>[h(u(s.label),1)]),_:2},1024),e(te,{caption:""},{default:t(()=>[h(u(s.coldesc),1)]),_:2},1024)]),_:2},1024),e(Q,{side:"",top:""},{default:t(()=>[e(Me,{color:"pink-5",modelValue:g.value,"onUpdate:modelValue":l[2]||(l[2]=O=>g.value=O),val:s.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[Se]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])):(p(),C("div",It,"Nada por aqui"))]),_:1}),e(pe,{name:"supliers"},{default:t(()=>[e(ie,{rows:_.value,"row-key":"id",dense:"",flat:"",bordered:"",grid:"","hide-header":""},{item:t(s=>[o("div",Et,[e(W,{flat:"",bordered:""},{default:t(()=>[e(P,{class:"text-center"},{default:t(()=>[h(" Surtidor "),Qt,o("strong",null,u(s.row._suplier),1),Ut,o("div",Ot,[e(et,{color:"primary","text-color":"white",label:s.row.status.name},null,8,["label"])])]),_:2},1024),e(H),e(P,{class:"flex justify-between"},{default:t(()=>[Pt,Rt,At]),_:1}),e(H),e(P,{class:"flex justify-between"},{default:t(()=>[o("div",null,u(s.row.invoice),1),o("div",null,u(s.row.invoice_received),1),o("div",Lt,[s.row._status==6?(p(),C("div",jt,[e(x,{color:"pink",label:"En Camino",class:"q-px-xl q-py-xs",size:"10px",padding:"5px 2px","icon-right":"start",flat:"",onClick:q=>Qe(s.row)},null,8,["onClick"])])):F("",!0),s.row._status>=7?(p(),C("div",Bt,[e(x,{color:"pink",icon:"qr_code",onClick:q=>qe(s.row.entry_key),flat:""},null,8,["onClick"])])):F("",!0),s.row._status>=7?(p(),C("div",Ft,[e(x,{color:"pink",icon:"list",onClick:q=>B(at).pdf(s.row.invoice,s.row.entry_key,r.value.id),flat:""},null,8,["onClick"])])):F("",!0)])]),_:2},1024)]),_:2},1024)])]),_:1},8,["rows"])]),_:1})]),_:1},8,["modelValue"])],64))]),_:1}),e(ee,{modelValue:n.value.state,"onUpdate:modelValue":l[4]||(l[4]=s=>n.value.state=s)},{default:t(()=>[e(W,null,{default:t(()=>[e(P,{class:"text-h6 text-center"},{default:t(()=>[h(u(r.value.id)+" - "+u(r.value.from.alias),1)]),_:1}),e(H),e(P,{class:"text-center"},{default:t(()=>[Tt,o("div",Mt,u(n.value.key),1)]),_:1}),e(H),e(P,{align:"center"},{default:t(()=>[e(x,{color:"indigo-10",icon:"print"},{default:t(()=>[e(ue,null,{default:t(()=>[e(Ce,{onSelected:Ie})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(ee,{modelValue:U.value.state,"onUpdate:modelValue":l[6]||(l[6]=s=>U.value.state=s)},{default:t(()=>[e(W,null,{default:t(()=>[e(P,{class:"row items-start"},{default:t(()=>[e($e,{icon:"warning",color:"orange-14","text-color":"white"}),zt]),_:1}),e(P,null,{default:t(()=>[o("div",null,[Nt,o("div",Yt,u(b.value._suplier),1)])]),_:1}),b.value?(p(),R(P,{key:0},{default:t(()=>[e(le,{modelValue:c.value.val,"onUpdate:modelValue":l[5]||(l[5]=s=>c.value.val=s),options:c.value.filter,label:"CHOFER","option-label":"complete_name",filled:"",style:{width:"100%"},onFilter:Oe,"input-debounce":"0","use-input":""},null,8,["modelValue","options"])]),_:1})):F("",!0),e(be,{align:"right"},{default:t(()=>[Z(e(x,{flat:"",label:"Cancelar",color:"primary","no-caps":""},null,512),[[ye]]),e(x,{flat:"",label:"Continuar",color:"primary",onClick:re,"no-caps":"",disable:c.value.val==null},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(ee,{modelValue:i.value.state,"onUpdate:modelValue":l[8]||(l[8]=s=>i.value.state=s),persistent:""},{default:t(()=>[e(W,{style:{width:"400px"}},{default:t(()=>[e(P,{class:"row items-center"},{default:t(()=>[e(le,{modelValue:d.value.val,"onUpdate:modelValue":l[7]||(l[7]=s=>d.value.val=s),options:d.value.filter,label:"SELECCIONA SURTIDOR","option-label":"complete_name",filled:"",multiple:"",counter:"","max-values":"5",hint:"Maximo 5 colaboradores",style:{width:"100%"},onFilter:Ue,"input-debounce":"0","use-input":"","use-chips":""},null,8,["modelValue","options"])]),_:1}),e(be,{align:"right"},{default:t(()=>[Z(e(x,{flat:"",label:"Cancel",color:"primary"},null,512),[[ye]]),e(x,{flat:"",label:"Continuar",color:"primary",onClick:J,disable:d.value.val.length==0},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};var ve=Ve({name:"QTr",props:{props:Object,noHover:Boolean},setup(S,{slots:y}){const $=A(()=>"q-tr"+(S.props===void 0||S.props.header===!0?"":" "+S.props.__trClass)+(S.noHover===!0?" q-tr--no-hover":""));return()=>fe("tr",{class:$.value},_e(y.default))}}),me=Ve({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(S,{slots:y}){const $=je(),m=A(()=>"q-td"+(S.autoWidth===!0?" q-table--col-auto-width":"")+(S.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(S.props===void 0)return fe("td",{class:m.value},_e(y.default));const d=$.vnode.key,c=(S.props.colsMap!==void 0?S.props.colsMap[d]:null)||S.props.col;if(c===void 0)return;const{row:b}=S.props;return fe("td",{class:m.value+c.__tdClass(b),style:c.__tdStyle(b)},_e(y.default))}}});const Gt={class:"text-h6"},Kt={class:"row q-mt-md"},Jt={class:"q-ml-sm text-h6"},Wt={__name:"TableReport",props:{rows:{type:Array,default:[]},name:{type:String,default:""},type:{type:String,default:""}},emits:["cardResumeActived"],setup(S,{emit:y}){const $=S;ke();const m=se(),d=v({state:!1,action:null}),c=v({columns:[{name:"ID",field:"ID",label:"ID",align:"center"},{name:"code",field:"CODIGO",label:"Codigo",align:"center",sortable:!0},{name:"desc",field:"DESCRIPCION",label:"Descripcion",align:"left"},{name:"stockcedis",field:"CEDIS",label:"Stock (CEDIS)",align:"center",sortable:!0},{name:"stockpan",field:"PANTACO",label:"Stock (PAN)",align:"center",sortable:!0}],filter:""}),b={pndcs:{l:"Habilitar todo",c:"indigo-13",desc:"Los productos en esta lista se habilitaran y podran ser solicitados por cuaqluier tienda."},pdss:{l:"Deshabilitar todo",c:"pink-13",desc:"Los productos en esta lista se deshabilitaran y no podran ser solicitados."}},r=v($.rows),M=v($.name),I=v($.type),E=A(()=>I.value?b[I.value]:{l:"",c:""}),V=()=>{const D=b[I.value];d.value.action=D,d.value.state=!0},f=async()=>{m.loading.show({message:"Espera..."});const D=await N.massiveAction({action:I.value});console.log(D),D.status==200?(D.data,d.value.state=!1,d.value.action=null,m.loading.hide(),m.notify({position:"center",color:"positive",icon:"done"}),y("cardResumeActived")):(console.error(D.data),alert(`Error ${D.status}: ${D.data.msg}`))},z=(D,U,n)=>{console.log(D),console.log(U),console.log(n),console.log(I.value)};return(D,U)=>(p(),C(Y,null,[e(ie,{"row-key":"ID",rows:r.value,columns:c.value.columns,filter:c.value.filter,onRowClick:z},{top:t(()=>[o("div",Gt,u(M.value),1),o("div",Kt,[e(x,{color:B(E).c,icon:"warning",label:B(E).l,onClick:V},null,8,["color","label"]),e(xe,{modelValue:c.value.filter,"onUpdate:modelValue":U[0]||(U[0]=n=>c.value.filter=n),dense:"",type:"text",icon:"search",label:"Buscar"},{prepend:t(()=>[e(de,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter"]),e(ee,{modelValue:d.value.state,"onUpdate:modelValue":U[1]||(U[1]=n=>d.value.state=n),persistent:""},{default:t(()=>[e(W,null,{default:t(()=>[e(P,{class:"row items-center"},{default:t(()=>[e($e,{icon:"warning",color:d.value.action.c,"text-color":"white"},null,8,["color"]),o("span",Jt,u(d.value.action.l),1)]),_:1}),e(P,null,{default:t(()=>[h(u(d.value.action.desc),1)]),_:1}),e(be,{align:"right"},{default:t(()=>[Z(e(x,{flat:"",label:"cancelar",color:"primary"},null,512),[[ye]]),e(x,{flat:"",label:"continuar",color:"primary",onClick:f})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Xt={key:0,class:"bg-negative text-white q-pa-md q-mb-md"},Zt=o("div",{class:"text-warning text-bold"},"Los siguientes folios tienen errores que no permiten ser listados en la tabla. ",-1),ea={class:"text-h6"},ta=o("div",{class:"text--2"},"Errores comunes: Sin log, Sin fecha, Estatus desconocido",-1),aa={class:"row q-mb-md items-start justify-around"},la={class:"text-left"},oa={class:"text-h5"},sa={class:"text--2"},na={class:"full-width row items-center"},ia={class:"col text-h6 text-dark"},da={__name:"AdminDashboard",emits:["reloadDashboard","freshOrder"],setup(S,{emit:y}){he(),De();const $=ke(),m=se(),d=["text-grey-5 text-bold","text-bold text-h6 text-red","text-indigo","4","5","text-bold text-pink-7","text-orange-8","8","text-primary","text-positive"],c=v({columns:[{name:"id",label:"Folio",field:"id",align:"center",sortable:!0},{name:"state",label:"Estado",field:n=>n.log.length==1?n.log[0].name:n.log[n.log.length-1].name,align:"left",sortable:!0,sort:(n,_,i,w)=>parseInt(i._status)-parseInt(w._status),classes:n=>d[n._status?parseInt(n._status)-1:parseInt(n.status.id)-1]},{name:"suplier",label:"Surtidores",field:n=>{var _;return(_=n.partition)==null?void 0:_.length},align:"center",classes:"text-bold"},{name:"laststate",label:"Ultima actividad",field:n=>K(n.log.find(_=>_.id==n.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:n=>n.from.name.toUpperCase(),align:"left",sortable:!0},{name:"to",label:"Destino",field:n=>n.to.name.toUpperCase(),align:"left",sortable:!0},{name:"notes",label:"Notas",field:n=>n.notes,align:"left",classes:n=>n.notes?"text-orange text-bold":""},{name:"tmodels",label:"Modelos",field:n=>n.products_count,align:"center",sortable:!0}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),b=v({state:!1,title:"",data:null,name:null,type:null}),r=v({state:!1,head:null,block:!0}),M=A(()=>$.ordersSize),I=A(()=>$.ordersok),E=A(()=>$.orderserrors),V=A(()=>$.resume),f=async n=>{console.log(n.row),r.value.head=n.row,r.value.state=!0},z=async n=>{m.loading.show({message:"cargando..."+n});const _=await N.report(n);console.log(_.data),b.value.data=_.data.rows,b.value.name=_.data.name,b.value.type=n,b.value.state=!0,m.loading.hide()},D=()=>{b.value.state=!1,b.state=!1,y("reload")},U=n=>{console.log("Se crearon las particiones"),y("freshOrder",n)};return(n,_)=>(p(),R(ze,{padding:"",class:"bg-grey-2"},{default:t(()=>[B(E).length?(p(),C("div",Xt,[Zt,o("div",ea,u(B(E).map(i=>i.id).join("id")),1),ta])):F("",!0),o("div",aa,[(p(!0),C(Y,null,X(B(V),i=>(p(),R(x,{stack:"","no-caps":"",class:"q-py-md",key:i.key,onClick:w=>z(i.key),color:i.total==0?"teal-10":"pink-13",disabled:i.total==0},{default:t(()=>[o("div",la,[o("div",oa,u(i.total),1),o("div",sa,u(i.name),1)])]),_:2},1032,["onClick","color","disabled"]))),128))]),e(ie,{flat:"",bordered:"","row-key":"id",rows:B(I),columns:c.value.columns,filter:c.value.filter,pagination:c.value.pagination},{header:t(i=>[e(ve,{props:i},{default:t(()=>[e(we,{"auto-width":""}),(p(!0),C(Y,null,X(i.cols,w=>(p(),R(we,{key:w.name,props:i},{default:t(()=>[h(u(w.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:t(i=>[e(ve,{props:i},{default:t(()=>[e(me,{"auto-width":""},{default:t(()=>[e(x,{size:"sm",dense:"",round:"",flat:"",onClick:w=>i.expand=!i.expand,icon:i.expand?"expand_less":"expand_more"},null,8,["onClick","icon"])]),_:2},1024),(p(!0),C(Y,null,X(i.cols,w=>(p(),R(me,{key:w.name,props:i,onClick:g=>f(i)},{default:t(()=>[h(u(w.value),1)]),_:2},1032,["props","onClick"]))),128))]),_:2},1032,["props"]),Z(e(ve,{props:i},{default:t(()=>[e(me,{colspan:"100%"},{default:t(()=>[e(ge,{dense:"",padding:"",class:"rounded-borders"},{default:t(()=>[e(oe,null,{default:t(()=>[e(Q,null,{default:t(()=>[h("ID")]),_:1}),e(Q,null,{default:t(()=>[h("ESTADO")]),_:1}),e(Q,null,{default:t(()=>[h(" SALIDA")]),_:1}),e(Q,null,{default:t(()=>[h("ENTRADA")]),_:1})]),_:1}),(p(!0),C(Y,null,X(i.row.partition,(w,g)=>(p(),C("div",{key:g},[e(oe,null,{default:t(()=>[e(Q,null,{default:t(()=>[e(te,{overline:""},{default:t(()=>[h(u(w._suplier),1)]),_:2},1024),e(te,{caption:""},{default:t(()=>[h(u(w.id),1)]),_:2},1024)]),_:2},1024),e(Q,{class:Be(`${d[w.status.id-1]}`)},{default:t(()=>[h(u(w.status.name),1)]),_:2},1032,["class"]),e(Q,null,{default:t(()=>[h(u(w.invoice),1)]),_:2},1024),e(Q,null,{default:t(()=>[h(u(w.invoice_received),1)]),_:2},1024)]),_:2},1024),e(H,{spaced:"",inset:""})]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"]),[[Fe,i.expand]])]),top:t(()=>[o("div",na,[o("div",ia,"Pedidos: "+u(B(M)),1),e(xe,{dense:"",modelValue:c.value.filter,"onUpdate:modelValue":_[0]||(_[0]=i=>c.value.filter=i),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:t(()=>[e(de,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"]),e(ee,{"full-width":"",modelValue:r.value.state,"onUpdate:modelValue":_[3]||(_[3]=i=>r.value.state=i),persistent:r.value.block,"no-esc-dismiss":r.value.block,"no-backdrop-dismiss":r.value.block},{default:t(()=>[e(Ht,{head:r.value.head,onLoaded:_[1]||(_[1]=i=>r.value.block=!1),onLoading:_[2]||(_[2]=i=>r.value.block=!0),onFresh:U},null,8,["head"])]),_:1},8,["modelValue","persistent","no-esc-dismiss","no-backdrop-dismiss"]),e(ee,{modelValue:b.value.state,"onUpdate:modelValue":_[4]||(_[4]=i=>b.value.state=i)},{default:t(()=>[e(Wt,{rows:b.value.data,name:b.value.name,type:b.value.type,onCardResumeActived:D},null,8,["rows","name","type"])]),_:1},8,["modelValue"])]),_:1}))}};const ra=o("div",{class:"text-bold"},"Dashboard ",-1),ua={class:"row"},ca={class:"col row"},xa={__name:"DashboardLyt",setup(S){const y=he(),$=De(),m=ke(),d=se(),c=lt,b=v([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),r=v([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),M=["p2","P2","p3","P3","bol","BOL","sap","SAP"],I=v(null),E=v(null),V=v({from:K(Date.now()).startOf("day"),to:K(Date.now()).startOf("day")}),f=async()=>{var J;d.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let g=(J=y.query.v)!=null?J:"day",k=r.value.findIndex(re=>re.id==g),L=k>=0?k:0;E.value=r.value[L],V.value.from=K(Date.now()).startOf(E.value.id);let j=y.query.d&&M.includes(y.query.d)?y.query.d:"all";console.log(j);const T=await N.index(E.value.id,j);console.log(T),m.fillOrders(T.orders),m.fillResume(T.resume),m.fillPrinters(T.printers),I.value=b.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),d.loading.hide(),G.connect(),G.emit("joinat",c),G.on("joineddashreq",D),G.on("creating",U),G.on("order_update",n),G.on("order_changestate",_),G.on("order_refresh",i)},z=g=>{let k=y.query.d&&M.includes(y.query.d)?y.query.d:"all";$.push(`/dashboard?v=${g.id}&d=${k}`)};A(()=>V.value.from.format("YYYY/MM/DD")),A(()=>V.value.to.format("YYYY/MM/DD"));const D=g=>{console.log(`%c${g.user.me.nick} de ${g.from.alias} se ha unido a Restock (UID: ${g.user.me.id})`,"background:#076F3E;color:#f5f6fa;border-radius:10px;padding:10px;font-size:1.1em;")},U=async g=>{let k=g.order,L=await N.orderFresh(k.id),j=L.data.order,T=L.data.oid;m.addOrUpdate(T,j)},n=g=>{m.orderUpdate(g)},_=async g=>{let k=g.order,L=g.state,j=await N.orderFresh(k.id),T=j.data.order,J=j.data.oid;m.addOrUpdate(J,T),L.id==2&&d.notify({message:`El pedido <b>${k.id}</b> esta listo para iniciar surtido!!`,color:"positive",textColor:"white",position:"bottom",html:!0,timeout:5e3})},i=async g=>{console.log("REFRESHING BY SKT!!",g);let k=g.order,L=await N.orderFresh(k);console.log(L);let j=L.data.order,T=L.data.oid;m.addOrUpdate(T,j)},w=g=>{console.log("orderViewer/AdminDashboard actualizaron el pedido:",g),G.emit("order_refresh",{order:g})};return Te(()=>y.query,()=>{f()}),f(),document.title="Dashboard",(g,k)=>(p(),R(Ne,{view:"lHh Lpr lFf"},{default:t(()=>[e(He,{bordered:"",class:"bg-yellow text-dark"},{default:t(()=>[e(Ye,{class:"row justify-between items-center"},{default:t(()=>[ra,o("div",ua,[e(x,{color:"dark",round:"",unelevated:"",flat:"",icon:"sync",onClick:f}),o("div",ca,[e(le,{class:"col",dense:"",filled:"",label:"Vista",modelValue:E.value,"onUpdate:modelValue":[k[0]||(k[0]=L=>E.value=L),z],options:r.value},null,8,["modelValue","options"]),E.value.id=="C"?(p(),R(x,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):F("",!0)])])]),_:1})]),_:1}),e(Ge,null,{default:t(()=>[e(da,{onReload:f,onFreshOrder:w})]),_:1})]),_:1}))}};export{xa as default};