import{u as te,r as p,c as R,o as m,aF as E,d as t,w as i,h as k,aE as $,t as r,e as f,i as C,f as l,Q as O,aH as F,aG as J,aA as W,b as j,R as de,aI as re,aJ as M,aM as ue,x as ce,a as pe}from"./index.7e3dde04.js";import{Q as N,a as A,b as Q,c as H}from"./QCardActions.6c177c96.js";import{u as ae,t as X,v as ve,w as me,y as fe,z as Y,A as Z,Q as _e,x as B,a as ge,b as be}from"./QPage.2d1f42a4.js";import{a as ye,Q as he,b as xe}from"./QLayout.f0eb81dd.js";import{R as P}from"./RestockApi.f0c7f0de.js";import{Q as ke,a as we}from"./QForm.d2e7b551.js";import{Q as Ce,a as Qe}from"./QToggle.abea5747.js";import{Q as ee}from"./QFooter.47cf8d9f.js";import{C as Se}from"./ClosePopup.472f98eb.js";import{A as D}from"./AssistApi.d49e53f7.js";import{p as Ve}from"./pdfCreate.3dde56e7.js";import"./rtl.c2b0dab7.js";import"./axios.10c2b4ae.js";import"./jspdf.plugin.autotable.ba0a73a2.js";import"./_commonjsHelpers.88e99c8f.js";import"./dayjs.min.25545ff6.js";const qe={key:0,class:"text--3"},Ee={key:0,class:"text-primary"},$e={class:"text-bold"},Re={class:"q-px-md q-py-sm"},je=l("div",{class:"col text-dark row justify-between"},null,-1),Pe={key:0,class:"row items-center justify-between q-pt-sm"},Ie=l("span",{class:"text--2"},"Contados:",-1),Ue=l("span",{class:"text--2"},"Por contar:",-1),De={class:"full-width row items-center justify-between"},ze={class:"row justify-between"},Te={class:"text-left"},Ae={class:"text--3"},Be={class:"text-h6"},Le={class:"text-right"},Fe={class:"text-bold"},Ne={class:"text--2"},Me={class:"text-h6"},He={class:"text--2"},Ke={class:"row items-start justify-between"},Ge={class:"text-center col text-primary"},Oe=l("div",null,"Solicitud",-1),Je={class:"text-bold"},We={class:"text-center col text-orange-10"},Xe=l("div",null,"Salida",-1),Ye={class:"text-bold"},Ze={class:"text-center col"},et=l("div",null,"PxC",-1),tt={class:"text-bold"},at={class:"text-center col"},lt=l("div",null,"Conteo",-1),ot={class:"text-center col"},st=l("div",null,"Piezas",-1),it={class:"text-bold"},nt=l("div",{class:"q-ml-md"},[l("div",{class:"text-h6"},"Quieres finalizar la revision?"),l("div",null,"EL pedido ya no podra editarse y se emitira una entrada...")],-1),dt={class:"q-pa-md text-bold text-uppercase text-center"},rt={__name:"OrderCheckin",props:{order:{type:Object,default:{}}},emits:["reload"],setup(K,{emit:x}){const y=K,g=ae(),b=te(),n=p(y.order),S=p({state:!1}),v=p(""),T=p(null),V=p(null),z=p(["code","request","ipack","uspply","delivery","checkout","received","reqinpzs"]),w=p({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:e=>e.variants.length?e.variants.map(s=>s.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"ipack",label:"PxC",field:e=>typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:e=>e.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:e=>e.units.id==3?"Cajas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Salida",field:e=>e.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:e=>e.pivot._supply_by==3?(typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces)*(typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount):typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:e=>e.pivot.checkout?"OK":null,classes:e=>e.pivot.checkout?"text-positive text-bold":"",align:"center",coldesc:"Revision del Administrador",sortable:!0},{name:"received",label:"Conteo",field:e=>e.pivot.toReceived,align:"center",coldesc:"Embalaje recepcion"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),a=p({state:!1,item:null,form:{count:0,ipack:null,setting:!1}}),d=R(()=>n.value?n.value.products.filter(e=>e.pivot.checkout==1):[]),u=R(()=>n.value?n.value.status:null),c=R(()=>u.value?u.value.id==9:!1),I=R(()=>d.value.filter(e=>typeof e.pivot.toReceived!="number")),q=R(()=>d.value.filter(e=>typeof e.pivot.toReceived=="number")),h=R(()=>{let e=v.value.toUpperCase().trim();return e.length?d.value.filter(s=>s.code.match(e)||s.barcode&&s.barcode.match(e)):d.value}),G=e=>{console.log(e),a.value.item=e,a.value.form.count=typeof e.pivot.toReceived=="number"?e.pivot.toReceived:0,a.value.form.ipack=typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,a.value.state=!0,ce(()=>{V.value.focus(),V.value.select()})},le=()=>{let e=v.value.toUpperCase().trim();if(e.length){let s=h.value.length==1?h.value[0]:h.value.find(o=>o.code==e||o.barcode==e);s?G(s):g.notify({message:`Sin coincidencias para <b>${e}</b>`,color:"pink-5",position:"center",html:!0})}},oe=async()=>{const e=parseInt(a.value.form.count),s=parseInt(a.value.form.ipack),o={order:a.value.item.pivot._partition,product:a.value.item.id,received:e,ipack:s,checkout:!1};console.log(o);const _=await P.setReceiveProduct(o);if(console.log(_),_.status==200){let U=d.value.findIndex(ne=>ne.id==a.value.item.id);d.value[U].pivot.toReceived=e,d.value[U].pivot.ipack=s,a.value.state=!1,v.value="",g.notify({color:"positive",icon:"done",position:"right",message:""})}else alert(`Error ${_.status}: ${_.data}`)},se=async()=>{g.loading.show({message:"Generando, espera..."}),console.log(n.value.requisition.from._type);let e={id:b.params.oid,state:10,suply:n.value._suplier_id};console.log(e);let s=await D.nextState(e);if(s.status==200)if(n.value.requisition.from._type!=1){if(s.data.partitionsEnd>n.value.requisition._status){let o={id:b.params.oid,state:s.data.partitionsEnd};console.log(o);const _=await P.nextState(o);console.log(_)}g.notify({message:"Se genero la entrada",html:!0,position:"center",icon:"done",timeout:5e3,color:"positive"}),L(),console.log(s)}else{console.log("es Traspaso");const o=await P.genTransferRec(b.params.oid,n.value._suplier_id);if(console.log(o),o.status==200){if(s.data.partitionsEnd>n.value.requisition._status){let _={id:b.params.oid,state:s.data.partitionsEnd};console.log(_);const U=await P.nextState(_);console.log(U)}if(console.log(o),o.data.transfer){console.log(o),g.notify({message:`Se actualizo el traspaso  <b class="text-h6">${o.data.transfer.folio}</b>`,html:!0,position:"center",icon:"done",timeout:5e3,color:"positive"});let _=o.data.requisition.entry_key;Ve.pdfTransfer(o.data.transfer.folio,_,b.params.oid)}L()}else alert(`Error ${o.status}: ${o.data}`)}else console.log(s);g.loading.hide()},ie=(e,s,o)=>c.value?G(s):null,L=()=>x("reload");return(e,s)=>(m(),E(F,null,[t(ye,{bordered:"",class:"bg-white text-dark"},{default:i(()=>[t(Ce,null,{default:i(()=>[t(k,{color:"pink-5",icon:"sync",onClick:L,round:"",dense:"",flat:""}),t(ke,null,{default:i(()=>[$(" Pedido "+r(f(b).params.oid)+" ",1),n.value?(m(),E("span",qe,"- "+r(n.value.requisition.from.alias),1)):C("",!0)]),_:1}),n.value.invoice_received?(m(),E("div",Ee,[l("div",null,r(n.value.requisition.from._type==1?"Traspaso":"Entrada"),1),l("div",$e,r(n.value.invoice_received),1)])):C("",!0)]),_:1}),t(X),l("div",Re,[je,f(u)&&f(u).id>=5?(m(),E("div",Pe,[l("div",null,[Ie,$(),l("b",null,r(f(q).length),1)]),l("div",null,[Ue,$(),l("b",null,r(f(I).length),1)])])):C("",!0)])]),_:1}),t(_e,{"row-key":"id",flat:"",rows:f(h),columns:w.value.columns,pagination:w.value.pagination,filter:w.value.filter,"visible-columns":z.value,onRowClick:ie},{top:i(()=>[l("div",De,[t(N,{dense:"",modelValue:w.value.filter,"onUpdate:modelValue":s[0]||(s[0]=o=>w.value.filter=o),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:i(()=>[t(O,{name:"search"})]),_:1},8,["modelValue"]),t(k,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:i(()=>[t(ve,{style:{"min-width":"200px"}},{default:i(()=>[t(me,null,{default:i(()=>[(m(!0),E(F,null,J(w.value.columns,(o,_)=>W((m(),j(fe,{tag:"label",key:_},{default:i(()=>[t(Y,null,{default:i(()=>[t(Z,null,{default:i(()=>[$(r(o.label),1)]),_:2},1024),t(Z,{caption:""},{default:i(()=>[$(r(o.coldesc),1)]),_:2},1024)]),_:2},1024),t(Y,{side:"",top:""},{default:i(()=>[t(Qe,{color:"pink-5",modelValue:z.value,"onUpdate:modelValue":s[1]||(s[1]=U=>z.value=U),val:o.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[de]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"]),t(B,{modelValue:a.value.state,"onUpdate:modelValue":s[3]||(s[3]=o=>a.value.state=o),position:"bottom",onHide:s[4]||(s[4]=o=>T.value.focus())},{default:i(()=>[a.value.item?(m(),j(A,{key:0},{default:i(()=>[t(Q,{class:"bg-grey-3"},{default:i(()=>[l("div",ze,[l("div",Te,[l("div",Ae,"ID: "+r(a.value.item.id),1),l("div",Be,r(a.value.item.code),1)]),l("div",Le,[l("div",Fe,r(a.value.item.name),1),l("div",Ne,r(a.value.item.barcode),1)])])]),_:1}),t(X),t(Q,null,{default:i(()=>[$(r(a.value.item.description),1)]),_:1}),t(Q,{class:"row justify-around items-center bg-grey-2"},{default:i(()=>[(m(!0),E(F,null,J(a.value.item.stocks,o=>(m(),E("div",{key:o.id,class:"text-center"},[l("div",Me,r(o.pivot.gen),1),l("div",He,r(o.alias),1)]))),128))]),_:1}),t(we,{onSubmit:re(oe,["prevent"])},{default:i(()=>[t(Q,null,{default:i(()=>[l("div",Ke,[l("div",Ge,[Oe,l("div",Je,r(a.value.item.pivot.amount)+" "+r(a.value.item.units.id==3?`Caja${a.value.item.pivot.amount!=1?"s":""}`:`Pieza${a.value.item.pivot.amount!=1?"s":""}`),1)]),l("div",We,[Xe,l("div",Ye,[$(r(a.value.item.pivot.toDelivered)+" "+r(a.value.item.units.id==3?a.value.item.pivot.toDelivered!=1?"Cajas":"Caja":a.value.item.pivot.toDelivered!=1?"Piezas":"Pieza")+" ",1),l("small",null,"("+r(a.value.item.units.id==3?a.value.item.pivot.toDelivered*a.value.item.pivot.ipack:a.value.item.pivot.toDelivered)+" pzs)",1)])]),l("div",Ze,[et,l("div",tt,r(a.value.item.pivot.ipack),1)]),l("div",at,[lt,t(N,{dense:"",borderless:"",modelValue:a.value.form.count,"onUpdate:modelValue":s[2]||(s[2]=o=>a.value.form.count=o),type:"number",min:"0","input-class":"text-h6 text-center",ref_key:"iptcounter",ref:V},null,8,["modelValue"])]),l("div",ot,[st,l("div",it,r(a.value.item.units.id==3?a.value.form.count*a.value.form.ipack:a.value.form.count),1)])])]),_:1}),t(k,{color:"indigo",type:"submit",square:"",icon:"done","no-caps":"",class:"q-mt-md q-py-md full-width"})]),_:1},8,["onSubmit"])]),_:1})):C("",!0)]),_:1},8,["modelValue"]),t(B,{modelValue:S.value.state,"onUpdate:modelValue":s[5]||(s[5]=o=>S.value.state=o)},{default:i(()=>[t(A,null,{default:i(()=>[t(Q,{class:"row items-start"},{default:i(()=>[t(M,{icon:"warning",color:"orange-14","text-color":"white"}),nt]),_:1}),t(H,{align:"right"},{default:i(()=>[W(t(k,{flat:"",label:"No",color:"primary","no-caps":""},null,512),[[Se]]),t(k,{flat:"",label:"Si",color:"primary",onClick:se})]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c)?(m(),j(ee,{key:0,bordered:"",class:"bg-indigo-10 text-dark q-pa-sm row",elevated:""},{default:i(()=>[t(N,{color:"white",modelValue:v.value,"onUpdate:modelValue":s[7]||(s[7]=o=>v.value=o),type:"text",class:"col","input-class":"text-white text-h6 text-center text-uppercase",autofocus:"",dense:"",onKeypress:ue(le,["enter"]),ref_key:"iptfinder",ref:T},{prepend:i(()=>[t(O,{name:"fas fa-barcode",color:"white"})]),append:i(()=>[t(k,{flat:"",icon:"fas fa-eraser",color:"white",dense:"",onClick:s[6]||(s[6]=o=>v.value=""),disabled:!v.value.length},null,8,["disabled"])]),_:1},8,["modelValue","onKeypress"]),f(q).length>0?(m(),j(k,{key:0,color:"white","text-color":"indigo-10",label:"Finalizar",icon:"done",onClick:s[8]||(s[8]=o=>S.value.state=!0),"no-caps":""})):C("",!0)]),_:1})):C("",!0),f(u)&&f(u).id!=9?(m(),j(ee,{key:1,bordered:"",class:"bg-orange-9 text-white"},{default:i(()=>[l("div",dt,r(f(u).name),1)]),_:1})):C("",!0)],64))}},ut={class:"q-mx-sm text-h6"},ct={class:"q-mx-sm text-h6"},qt={__name:"CheckInLyt",setup(K){const x=ae(),y=te();pe(),p(""),p("");const g=p({state:!1}),b=p({state:!1}),n=p(null),S=p(null),v=p({val:null,opts:null}),T=R(()=>n.value?n.value.status:null),V=async()=>{n.value=null,x.loading.show({message:"Espera..."});let a=y.params.oid,d=y.query.key,u={oid:a,key:d};const c=await P.checkin(u);if(console.log(c.data),c.status==200){let I=c.data;n.value=I.order,S.value=I.order.requisition,n.value._status==8&&(g.value.state=!0),n.value._status==7&&(b.value.state=!0),x.loading.hide();let q=n.value.requisition.from._client;console.log(q);let h=await D.getCheck(q);console.log(h),h.status==200?v.value.opts=h.data:alert(`Error ${h.status}: ${h.data}`)}else alert(`Error ${c.status}: ${c.data}`)},z=async()=>{x.loading.show({message:"Inicando, espera..."}),g.value.state=!1,x.loading.show({message:"Espera..."});let a={id:y.params.oid,state:9,suply:n.value._suplier_id};const d=await D.nextState(a);if(console.log(a),d.status==200){let u={verified:v.value.val.id,supplyer:n.value._suplier_id,pedido:n.value.requisition.id,status:9};if(console.log(u),d.data.partitionsEnd>S.value._status){let I={id:y.params.oid,state:d.data.partitionsEnd};const q=await P.nextState(I);console.log(q)}let c=await D.SaveCheck(u);c.status==200?(V(),x.notify({message:"Revision de Recibo",position:"center",icon:"done",timeout:5e3,color:"positive"})):alert(`Error ${c.status}: ${c.data}`)}else alert(`Error ${d.status} ${d.data}`)},w=async()=>{x.loading.show({message:"Cambiando Estado..."});let a={id:y.params.oid,state:8,suply:n.value._suplier_id};const d=await D.nextState(a);if(console.log(d),d.data.partitionsEnd>S.value._status){let u={id:y.params.oid,state:d.data.partitionsEnd};const c=await P.nextState(u);console.log(c)}if(d.status==200){b.value.state=!1;let u={id:n.value.invoice,suply:n.value._driver,store:n.value.requisition.from.name};const c=await D.sendMessage(u);console.log(c)}x.loading.hide()};return V(),(a,d)=>(m(),j(he,{view:"hHh Lpr fFf"},{default:i(()=>[t(xe,null,{default:i(()=>[t(ge,null,{default:i(()=>[f(T)?(m(),j(rt,{key:0,order:n.value,onReload:V},null,8,["order"])):C("",!0),t(B,{modelValue:g.value.state,"onUpdate:modelValue":d[1]||(d[1]=u=>g.value.state=u),persistent:""},{default:i(()=>[t(A,null,{default:i(()=>[t(Q,{class:"row items-center"},{default:i(()=>[t(M,{icon:"warning",color:"orange-14","text-color":"white"}),l("span",ut,"Iniciar CheckIn #"+r(f(y).params.oid),1)]),_:1}),t(Q,null,{default:i(()=>[t(be,{modelValue:v.value.val,"onUpdate:modelValue":d[0]||(d[0]=u=>v.value.val=u),options:v.value.opts,label:"Revisa ?","option-label":"complete_name",filled:""},null,8,["modelValue","options"])]),_:1}),t(H,{vertical:"",align:"center"},{default:i(()=>[t(k,{flat:"",label:"Si",color:"primary",onClick:z,disable:v.value.val==null},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(B,{modelValue:b.value.state,"onUpdate:modelValue":d[2]||(d[2]=u=>b.value.state=u),persistent:""},{default:i(()=>[t(A,null,{default:i(()=>[t(Q,{class:"row items-center"},{default:i(()=>[t(M,{icon:"warning",color:"orange-14","text-color":"white"}),l("span",ct,"Recepcionas el pedido #"+r(f(y).params.oid)+"? ",1)]),_:1}),t(H,{vertical:"",align:"center"},{default:i(()=>[t(k,{flat:"",label:"Si",color:"primary",onClick:w})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}};export{qt as default};
