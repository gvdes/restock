import{u as te,r as c,c as $,o as m,aF as E,d as t,w as o,h as y,aE as R,t as r,e as f,i as C,f as l,Q as O,aH as T,aG as J,ax as W,b as j,R as de,aI as re,aJ as N,aM as ue,x as ce,a as pe}from"./index.1a2b59b5.js";import{u as ae,d as ve,o as X,f as me,a as F,p as fe,q as _e,x as ge,y as Y,z as Z,A as be,Q as he,t as B,v as Q,s as L,w as M,C as ye,R as D,c as xe,b as ke,e as we,g as Ce}from"./ClosePopup.04d0f868.js";import{Q as Qe,a as Ve,b as ee}from"./QFooter.4d2cbdf4.js";import{A as I}from"./AssistApi.b4cc6349.js";import"./axios.ac4b1d99.js";const Se={key:0,class:"text--3"},qe={key:0,class:"text-primary"},Ee=l("div",null,"Entrada:",-1),Re={class:"text-bold"},$e={class:"q-px-md q-py-sm"},je=l("div",{class:"col text-dark row justify-between"},null,-1),Pe={key:0,class:"row items-center justify-between q-pt-sm"},Ie=l("span",{class:"text--2"},"Contados:",-1),Ue=l("span",{class:"text--2"},"Por contar:",-1),De={class:"full-width row items-center justify-between"},ze={class:"row justify-between"},Ae={class:"text-left"},Be={class:"text--3"},Le={class:"text-h6"},Te={class:"text-right"},Fe={class:"text-bold"},Ne={class:"text--2"},Me={class:"text-h6"},He={class:"text--2"},Ke={class:"row items-start justify-between"},Ge={class:"text-center col text-primary"},Oe=l("div",null,"Solicitud",-1),Je={class:"text-bold"},We={class:"text-center col text-orange-10"},Xe=l("div",null,"Salida",-1),Ye={class:"text-bold"},Ze={class:"text-center col"},et=l("div",null,"PxC",-1),tt={class:"text-bold"},at={class:"text-center col"},lt=l("div",null,"Conteo",-1),ot={class:"text-center col"},st=l("div",null,"Piezas",-1),it={class:"text-bold"},nt=l("div",{class:"q-ml-md"},[l("div",{class:"text-h6"},"Quieres finalizar la revision?"),l("div",null,"EL pedido ya no podra editarse y se emitira una entrada...")],-1),dt={class:"q-pa-md text-bold text-uppercase text-center"},rt={__name:"OrderCheckin",props:{order:{type:Object,default:{}}},emits:["reload"],setup(H,{emit:h}){const _=H,g=ae(),x=te(),d=c(_.order),V=c({state:!1}),p=c(""),z=c(null),S=c(null),U=c(["code","request","ipack","uspply","delivery","checkout","received","reqinpzs"]),k=c({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:e=>e.variants.length?e.variants.map(s=>s.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"ipack",label:"PxC",field:e=>typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:e=>e.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:e=>e.units.id==3?"Cajas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Salida",field:e=>e.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:e=>e.pivot._supply_by==3?(typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces)*(typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount):typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:e=>e.pivot.checkout?"OK":null,classes:e=>e.pivot.checkout?"text-positive text-bold":"",align:"center",coldesc:"Revision del Administrador",sortable:!0},{name:"received",label:"Conteo",field:e=>e.pivot.toReceived,align:"center",coldesc:"Embalaje recepcion"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),a=c({state:!1,item:null,form:{count:0,ipack:null,setting:!1}}),n=$(()=>d.value?d.value.products.filter(e=>e.pivot.checkout==1):[]),u=$(()=>d.value?d.value.status:null),v=$(()=>u.value?u.value.id==9:!1),P=$(()=>n.value.filter(e=>typeof e.pivot.toReceived!="number")),q=$(()=>n.value.filter(e=>typeof e.pivot.toReceived=="number")),b=$(()=>{let e=p.value.toUpperCase().trim();return e.length?n.value.filter(s=>s.code.match(e)||s.barcode&&s.barcode.match(e)):n.value}),K=e=>{console.log(e),a.value.item=e,a.value.form.count=typeof e.pivot.toReceived=="number"?e.pivot.toReceived:0,a.value.form.ipack=typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,a.value.state=!0,ce(()=>{S.value.focus(),S.value.select()})},le=()=>{let e=p.value.toUpperCase().trim();if(e.length){let s=b.value.length==1?b.value[0]:b.value.find(i=>i.code==e||i.barcode==e);s?K(s):g.notify({message:`Sin coincidencias para <b>${e}</b>`,color:"pink-5",position:"center",html:!0})}},oe=async()=>{const e=parseInt(a.value.form.count),s=parseInt(a.value.form.ipack),i={order:a.value.item.pivot._partition,product:a.value.item.id,received:e,ipack:s,checkout:!1};console.log(i);const w=await D.setReceiveProduct(i);if(console.log(w),w.status==200){let A=n.value.findIndex(ne=>ne.id==a.value.item.id);n.value[A].pivot.toReceived=e,n.value[A].pivot.ipack=s,a.value.state=!1,p.value="",g.notify({color:"positive",icon:"done",position:"right",message:""})}else alert(`Error ${w.status}: ${w.data}`)},se=async()=>{g.loading.show({message:"Generando, espera..."});let e={id:x.params.oid,state:10,suply:d.value._suplier_id};console.log(e);let s=await I.nextState(e);if(s.status==200){if(s.data.partitionsEnd>d.value.requisition._status){let i={id:x.params.oid,state:s.data.partitionsEnd};console.log(i);const w=await D.nextState(i);console.log(w)}g.notify({message:"Se genero la entrada",html:!0,position:"center",icon:"done",timeout:5e3,color:"positive"}),G(),console.log(s)}else console.log(s);g.loading.hide()},ie=(e,s,i)=>v.value?K(s):null,G=()=>h("reload");return(e,s)=>(m(),E(T,null,[t(me,{bordered:"",class:"bg-white text-dark"},{default:o(()=>[t(ve,null,{default:o(()=>[t(y,{color:"pink-5",icon:"sync",onClick:G,round:"",dense:"",flat:""}),t(Qe,null,{default:o(()=>[R(" Pedido "+r(f(x).params.oid)+" ",1),d.value?(m(),E("span",Se,"- "+r(d.value.requisition.from.alias),1)):C("",!0)]),_:1}),d.value.invoice_received?(m(),E("div",qe,[Ee,l("div",Re,r(d.value.invoice_received),1)])):C("",!0)]),_:1}),t(X),l("div",$e,[je,f(u)&&f(u).id>=5?(m(),E("div",Pe,[l("div",null,[Ie,R(),l("b",null,r(f(q).length),1)]),l("div",null,[Ue,R(),l("b",null,r(f(P).length),1)])])):C("",!0)])]),_:1}),t(he,{"row-key":"id",flat:"",rows:f(b),columns:k.value.columns,pagination:k.value.pagination,filter:k.value.filter,"visible-columns":U.value,onRowClick:ie},{top:o(()=>[l("div",De,[t(F,{dense:"",modelValue:k.value.filter,"onUpdate:modelValue":s[0]||(s[0]=i=>k.value.filter=i),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:o(()=>[t(O,{name:"search"})]),_:1},8,["modelValue"]),t(y,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:o(()=>[t(fe,{style:{"min-width":"200px"}},{default:o(()=>[t(_e,null,{default:o(()=>[(m(!0),E(T,null,J(k.value.columns,(i,w)=>W((m(),j(ge,{tag:"label",key:w},{default:o(()=>[t(Y,null,{default:o(()=>[t(Z,null,{default:o(()=>[R(r(i.label),1)]),_:2},1024),t(Z,{caption:""},{default:o(()=>[R(r(i.coldesc),1)]),_:2},1024)]),_:2},1024),t(Y,{side:"",top:""},{default:o(()=>[t(be,{color:"pink-5",modelValue:U.value,"onUpdate:modelValue":s[1]||(s[1]=A=>U.value=A),val:i.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[de]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"]),t(L,{modelValue:a.value.state,"onUpdate:modelValue":s[3]||(s[3]=i=>a.value.state=i),position:"bottom",onHide:s[4]||(s[4]=i=>z.value.focus())},{default:o(()=>[a.value.item?(m(),j(B,{key:0},{default:o(()=>[t(Q,{class:"bg-grey-3"},{default:o(()=>[l("div",ze,[l("div",Ae,[l("div",Be,"ID: "+r(a.value.item.id),1),l("div",Le,r(a.value.item.code),1)]),l("div",Te,[l("div",Fe,r(a.value.item.name),1),l("div",Ne,r(a.value.item.barcode),1)])])]),_:1}),t(X),t(Q,null,{default:o(()=>[R(r(a.value.item.description),1)]),_:1}),t(Q,{class:"row justify-around items-center bg-grey-2"},{default:o(()=>[(m(!0),E(T,null,J(a.value.item.stocks,i=>(m(),E("div",{key:i.id,class:"text-center"},[l("div",Me,r(i.pivot.gen),1),l("div",He,r(i.alias),1)]))),128))]),_:1}),t(Ve,{onSubmit:re(oe,["prevent"])},{default:o(()=>[t(Q,null,{default:o(()=>[l("div",Ke,[l("div",Ge,[Oe,l("div",Je,r(a.value.item.pivot.amount)+" "+r(a.value.item.units.id==3?`Caja${a.value.item.pivot.amount!=1?"s":""}`:`Pieza${a.value.item.pivot.amount!=1?"s":""}`),1)]),l("div",We,[Xe,l("div",Ye,[R(r(a.value.item.pivot.toDelivered)+" "+r(a.value.item.units.id==3?a.value.item.pivot.toDelivered!=1?"Cajas":"Caja":a.value.item.pivot.toDelivered!=1?"Piezas":"Pieza")+" ",1),l("small",null,"("+r(a.value.item.units.id==3?a.value.item.pivot.toDelivered*a.value.item.pivot.ipack:a.value.item.pivot.toDelivered)+" pzs)",1)])]),l("div",Ze,[et,l("div",tt,r(a.value.item.pivot.ipack),1)]),l("div",at,[lt,t(F,{dense:"",borderless:"",modelValue:a.value.form.count,"onUpdate:modelValue":s[2]||(s[2]=i=>a.value.form.count=i),type:"number",min:"0","input-class":"text-h6 text-center",ref_key:"iptcounter",ref:S},null,8,["modelValue"])]),l("div",ot,[st,l("div",it,r(a.value.item.units.id==3?a.value.form.count*a.value.form.ipack:a.value.form.count),1)])])]),_:1}),t(y,{color:"indigo",type:"submit",square:"",icon:"done","no-caps":"",class:"q-mt-md q-py-md full-width"})]),_:1},8,["onSubmit"])]),_:1})):C("",!0)]),_:1},8,["modelValue"]),t(L,{modelValue:V.value.state,"onUpdate:modelValue":s[5]||(s[5]=i=>V.value.state=i)},{default:o(()=>[t(B,null,{default:o(()=>[t(Q,{class:"row items-start"},{default:o(()=>[t(N,{icon:"warning",color:"orange-14","text-color":"white"}),nt]),_:1}),t(M,{align:"right"},{default:o(()=>[W(t(y,{flat:"",label:"No",color:"primary","no-caps":""},null,512),[[ye]]),t(y,{flat:"",label:"Si",color:"primary",onClick:se})]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(v)?(m(),j(ee,{key:0,bordered:"",class:"bg-indigo-10 text-dark q-pa-sm row",elevated:""},{default:o(()=>[t(F,{color:"white",modelValue:p.value,"onUpdate:modelValue":s[7]||(s[7]=i=>p.value=i),type:"text",class:"col","input-class":"text-white text-h6 text-center text-uppercase",autofocus:"",dense:"",onKeypress:ue(le,["enter"]),ref_key:"iptfinder",ref:z},{prepend:o(()=>[t(O,{name:"fas fa-barcode",color:"white"})]),append:o(()=>[t(y,{flat:"",icon:"fas fa-eraser",color:"white",dense:"",onClick:s[6]||(s[6]=i=>p.value=""),disabled:!p.value.length},null,8,["disabled"])]),_:1},8,["modelValue","onKeypress"]),f(q).length>0?(m(),j(y,{key:0,color:"white","text-color":"indigo-10",label:"Finalizar",icon:"done",onClick:s[8]||(s[8]=i=>V.value.state=!0),"no-caps":""})):C("",!0)]),_:1})):C("",!0),f(u)&&f(u).id!=9?(m(),j(ee,{key:1,bordered:"",class:"bg-orange-9 text-white"},{default:o(()=>[l("div",dt,r(f(u).name),1)]),_:1})):C("",!0)],64))}},ut={class:"q-mx-sm text-h6"},ct={class:"q-mx-sm text-h6"},gt={__name:"CheckInLyt",setup(H){const h=ae(),_=te();pe(),c(""),c("");const g=c({state:!1}),x=c({state:!1}),d=c(null),V=c(null),p=c({val:null,opts:null}),z=$(()=>d.value?d.value.status:null),S=async()=>{d.value=null,h.loading.show({message:"Espera..."});let a=_.params.oid,n=_.query.key,u={oid:a,key:n};const v=await D.checkin(u);if(console.log(v.data),v.status==200){let P=v.data;d.value=P.order,V.value=P.order.requisition,d.value._status==8&&(g.value.state=!0),d.value._status==7&&(x.value.state=!0),h.loading.hide();let q=d.value.requisition.from._client;console.log(q);let b=await I.getCheck(q);console.log(b),b.status==200?p.value.opts=b.data:alert(`Error ${b.status}: ${b.data}`)}else alert(`Error ${v.status}: ${v.data}`)},U=async()=>{h.loading.show({message:"Inicando, espera..."}),g.value.state=!1,h.loading.show({message:"Espera..."});let a={id:_.params.oid,state:9,suply:d.value._suplier_id};const n=await I.nextState(a);if(console.log(a),n.status==200){let u={verified:p.value.val.id,supplyer:d.value._suplier_id,pedido:d.value.requisition.id,status:9};if(console.log(u),n.data.partitionsEnd>V.value._status){let P={id:_.params.oid,state:n.data.partitionsEnd};const q=await D.nextState(P);console.log(q)}let v=await I.SaveCheck(u);v.status==200?(S(),h.notify({message:"Revision de Recibo",position:"center",icon:"done",timeout:5e3,color:"positive"})):alert(`Error ${v.status}: ${v.data}`)}else alert(`Error ${n.status} ${n.data}`)},k=async()=>{h.loading.show({message:"Cambiando Estado..."});let a={id:_.params.oid,state:8,suply:d.value._suplier_id};const n=await I.nextState(a);if(console.log(n),n.data.partitionsEnd>V.value._status){let u={id:_.params.oid,state:n.data.partitionsEnd};const v=await D.nextState(u);console.log(v)}if(n.status==200){x.value.state=!1;let u={id:d.value.invoice,suply:d.value._suplier,store:d.value.requisition.from.name};await I.sendMessage(u)}h.loading.hide()};return S(),(a,n)=>(m(),j(xe,{view:"hHh Lpr fFf"},{default:o(()=>[t(Ce,null,{default:o(()=>[t(ke,null,{default:o(()=>[f(z)?(m(),j(rt,{key:0,order:d.value,onReload:S},null,8,["order"])):C("",!0),t(L,{modelValue:g.value.state,"onUpdate:modelValue":n[1]||(n[1]=u=>g.value.state=u),persistent:""},{default:o(()=>[t(B,null,{default:o(()=>[t(Q,{class:"row items-center"},{default:o(()=>[t(N,{icon:"warning",color:"orange-14","text-color":"white"}),l("span",ut,"Iniciar CheckIn #"+r(f(_).params.oid),1)]),_:1}),t(Q,null,{default:o(()=>[t(we,{modelValue:p.value.val,"onUpdate:modelValue":n[0]||(n[0]=u=>p.value.val=u),options:p.value.opts,label:"Revisa ?","option-label":"complete_name",filled:""},null,8,["modelValue","options"])]),_:1}),t(M,{vertical:"",align:"center"},{default:o(()=>[t(y,{flat:"",label:"Si",color:"primary",onClick:U,disable:p.value.val==null},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(L,{modelValue:x.value.state,"onUpdate:modelValue":n[2]||(n[2]=u=>x.value.state=u),persistent:""},{default:o(()=>[t(B,null,{default:o(()=>[t(Q,{class:"row items-center"},{default:o(()=>[t(N,{icon:"warning",color:"orange-14","text-color":"white"}),l("span",ct,"Recepcionas el pedido #"+r(f(_).params.oid)+"? ",1)]),_:1}),t(M,{vertical:"",align:"center"},{default:o(()=>[t(y,{flat:"",label:"Si",color:"primary",onClick:k})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}};export{gt as default};
