import{r as u,c as g,o as r,b as k,w as o,u as Se,a as Pe,d as l,h as m,e as v,aE as d,t as n,f as s,aF as D,i as P,aJ as G,Q as O,aG as J,aH as W,aI as Ue,ax as z,aK as De,aL as qe,aM as Ee,x as je,R as se}from"./index.a7b27ce2.js";import{Q as Ie,a as $e,b as ie}from"./QFooter.8bc4e7b7.js";import{Q as ne}from"./QSpace.8fd810c6.js";import{c as Re,u as Ae,R as ue,d as ze,o as X,f as Te,s as q,v as f,e as de,w as Y,t as E,b as Be,Q as ce,a as j,p as re,q as pe,x as Z,y as I,z as U,g as Le,A as ve,C as me}from"./ClosePopup.c0414e10.js";import"./dayjs.min.53a5c0af.js";import{A as T}from"./AssistApi.3449fdd3.js";import"./axios.073d26f8.js";const Ne={class:"q-px-md q-py-sm"},Fe={class:"col row justify-between"},Ke={key:0,class:"row items-center justify-between q-pt-sm"},He=s("span",{class:"text--2"},"Por revisar:",-1),Me=s("span",{class:"text--2"},"Revisados:",-1),Ge=s("span",{class:"text--2"},"Agotados:",-1),Oe=s("span",{class:"text--2"},"Con stock:",-1),Je={class:"q-mx-sm text-h6"},We={class:"row"},Xe={class:"col"},Ye=s("div",{class:"text-h6"},"Productos sin revisar",-1),Ze={class:"full-width row items-center justify-between"},et={class:"col"},tt=s("div",{class:"text-h6"},"Productos revisados",-1),lt={class:"full-width row items-center justify-between"},at={class:"row justify-between"},ot={class:"text-left"},st={class:"text--3"},it={class:"text-h6"},nt={class:"text-right"},ut={class:"text-bold"},dt={class:"text--2"},ct={class:"text-center"},rt={class:"text-h6"},pt=s("div",{class:"text--2"},"PxC",-1),vt={class:"text-h6"},mt={class:"text--2"},ft={class:"row items-start justify-between"},_t={class:"text-center col text-primary"},bt=s("div",null,"Solicitud",-1),gt={class:"text-bold"},yt={class:"text-center col"},ht=s("div",null,"Conteo",-1),kt={class:"text-center col"},xt=s("div",null,"PxC",-1),wt={class:"text-center col"},Vt=s("div",null,"Piezas",-1),Ct={class:"text-bold"},Qt=s("div",{class:"q-ml-md"},[s("div",{class:"text-h6"},"Deseas terminar la revision?"),s("div",null,"EL pedido ya no podra editarse")],-1),St={class:"q-ml-sm"},Pt={class:"q-ml-sm"},Ut=s("div",null,"Quien Surtio?",-1),Dt={class:"q-pa-md text-bold text-uppercase text-center"},Tt={__name:"Checkout",setup(qt){const x=Se(),fe=Pe(),y=Ae(),B=u({state:!0}),L=u(!0),_=u({val:null,opts:[]}),c=u(null),C=u(["code","assocs","ipack","request","uspply","delivery","reqinpzs","checkout","stocks"]),w=u([]),h=u(""),N=u(null),ee=u(null),F=u(null),p=u({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:e=>e.variants.length?e.variants.map(t=>t.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"locs",label:"Ubicacion",field:e=>e.locations.length?e.locations.map(t=>t.path).join(", "):"--",align:"left",coldesc:"Ubicaciones en almacen general"},{name:"ipack",label:"PxC",field:e=>typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:e=>e.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:e=>e.pivot._supply_by==3?"Cajas":e.pivot._supply_by==2?"Docenas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Conteo",field:e=>e.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:e=>e.pivot._supply_by==3?(typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces)*(typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount):typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:e=>e.pivot.checkout?"OK":null,classes:e=>e.pivot.checkout?"text-positive text-bold":"",align:"center",coldesc:"Revision del Administrador"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"},{name:"stocks",label:"Stock (pzs)",field:e=>e.stocks.reduce((t,a)=>t+a.pivot.stock,0),sortable:!0,classes:e=>e.stocks.reduce((t,a)=>t+a.pivot.stock,0)<=0?"text-red text-bold":"text-bold text-primary",align:"center",coldesc:"Stock total en almacenes GENERALES (CEDIS+PAN)"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),i=u({state:!1,item:null,form:{count:0,ipack:null,setting:!1}}),Q=u({val:null,opts:null}),te=u([]),$=u({state:!1,code:null,text:null}),R=u({state:!1}),K=g(()=>_.value.val?w.value.filter(e=>e.pivot._suplier_id==_.value.val._suplier_id):[]),le=g(()=>c.value?c.value._status==5:!1),_e=g(()=>K.value.reduce((e,t)=>e+(t.pivot._supply_by==3?t.pivot.amount*t.pieces:t.pivot.amount),0)),H=g(()=>K.value.filter(e=>!e.pivot.checkout)),S=g(()=>K.value.filter(e=>e.pivot.checkout)),be=g(()=>S.value.filter(e=>e.pivot.toDelivered==0)),ge=g(()=>S.value.filter(e=>e.pivot.toDelivered>0)),A=g(()=>{let e=h.value.toUpperCase().trim();return e.length?H.value.filter(t=>t.code.match(e)||t.barcode&&t.barcode.match(e)):H.value}),ye=g(()=>{let e=h.value.toUpperCase().trim();return e.length?S.value.filter(t=>t.code.match(e)||t.barcode&&t.barcode.match(e)):S.value}),M=async()=>{y.loading.show({message:"Cargando..."}),console.log("Iniciando...");const e=await ue.order(x.params.oid);if(console.log(e),e.status==200){w.value=e.data.products,F.value=e.data.status,te.value=e.data,_.value.opts=e.data.partition;let t=await T.getVerified();console.log(t),Q.value.opts=t,y.loading.hide()}else displayErrRequest(e)},he=e=>{c.value=e,e._status==5&&(L.value=!1)},ae=(e,t,a)=>le.value?oe(t):null,oe=e=>{console.log(e),i.value.item=e,i.value.form.count=typeof e.pivot.toDelivered=="number"?e.pivot.toDelivered:0,i.value.form.ipack=typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,i.value.state=!0,je(()=>{N.value.focus(),N.value.select()})},ke=()=>{let e=h.value.toUpperCase().trim();if(e.length){let t=A.value.length==1?A.value[0]:A.value.find(a=>a.code==e||a.barcode==e);t?oe(t):y.notify({message:`Sin coincidencias para <b>${e}</b>`,color:"pink-5",position:"center",html:!0})}},xe=async()=>{const e=parseInt(i.value.form.count),t=parseInt(i.value.form.ipack),a={order:x.params.oid,product:i.value.item.id,delivery:e,ipack:t,checkout:!0},b=await ue.setDeliveryProduct(a);if(console.log(b),b.status==200){console.log(b.data);let V=w.value.findIndex(Qe=>Qe.id==i.value.item.id);w.value[V].pivot.toDelivered=e,w.value[V].pivot.ipack=t,w.value[V].pivot.checkout=1,i.value.state=!1,h.value="",y.notify({color:"positive",icon:"done",position:"right",message:""})}else alert(`Error ${b.status}: ${b.data}`)},we=async()=>{y.loading.show({message:"Terminando, espera..."}),R.value.state=!1;let e={id:x.params.oid,state:6,suply:_.value.val._suplier_id};console.log(e);let t=await T.nextState(e);t.status==200&&(c.value._status=t.data._status,c.value.status.name=t.data.name),console.log(t),y.loading.hide()},Ve=async()=>{let e={id:x.params.oid,state:5,suply:_.value.val._suplier_id};console.log(e);let t=await T.nextState(e);t.status==200&&(c.value._status=t.data._status,c.value.status.name=t.data.name),console.log(t)},Ce=async()=>{y.loading.show({message:"Inicando, espera..."});let e={pedido:x.params.oid,surtidor:_.value.val._suplier_id,verified:Q.value.val.id};console.log(e);let t=await T.SaveVerified(e);console.log(t),t.status==200?(M(),B.value.state=!1,y.loading.hide()):alert(`Error ${t.status}: ${t.data} 2`)};return M(),(e,t)=>(r(),k(Re,{view:"hHh Lpr fFf"},{default:o(()=>[l(Te,{bordered:"",class:"bg-cyan-10"},{default:o(()=>[l(ze,null,{default:o(()=>{var a;return[l(m,{flat:"",round:"",dense:"",icon:"arrow_back",onClick:t[0]||(t[0]=b=>{v(fe).replace("/checkout")})}),l(Ie,null,{default:o(()=>[d(" Pedido "+n(v(x).params.oid),1)]),_:1}),d(" "+n((a=c.value)==null?void 0:a._suplier)+" ",1),l(ne),d(" "+n(te.value.notes)+" ",1),l(ne),l(m,{color:"white",icon:"sync",onClick:M,round:"",dense:"",flat:""})]}),_:1}),l(X),s("div",Ne,[s("div",Fe,[s("div",null,[d("Productos: "),s("b",null,n(w.value.length),1)]),s("div",null,[d("Piezas: "),s("b",null,n(v(_e)),1)])]),F.value&&F.value.id>=3?(r(),D("div",Ke,[s("div",null,[He,d(),s("b",null,n(v(H).length),1)]),s("div",null,[Me,d(),s("b",null,n(v(S).length),1)]),s("div",null,[Ge,d(),s("b",null,n(v(be).length),1)]),s("div",null,[Oe,d(),s("b",null,n(v(ge).length),1)])])):P("",!0)])]),_:1}),c.value&&c.value._status==5&&c.value._out_verified==null?(r(),k(q,{key:0,modelValue:B.value.state,"onUpdate:modelValue":t[2]||(t[2]=a=>B.value.state=a),persistent:""},{default:o(()=>[l(E,null,{default:o(()=>[l(f,{class:"row items-center"},{default:o(()=>[l(G,{icon:"warning",color:"orange-14","text-color":"white"}),s("span",Je,"Iniciar CheckOut #"+n(v(x).params.oid),1)]),_:1}),l(f,null,{default:o(()=>[l(de,{modelValue:Q.value.val,"onUpdate:modelValue":t[1]||(t[1]=a=>Q.value.val=a),options:Q.value.opts,label:"Verificador","option-label":"complete_name",filled:""},null,8,["modelValue","options"])]),_:1}),l(Y,{vertical:"",align:"center"},{default:o(()=>[l(m,{flat:"",label:"Si",color:"primary",onClick:Ce,disable:Q.value.val==null},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):P("",!0),l(Le,null,{default:o(()=>[l(Be,{padding:""},{default:o(()=>[s("div",We,[s("div",Xe,[Ye,l(ce,{"row-key":"id",flat:"",rows:v(A),columns:p.value.columns,pagination:p.value.pagination,filter:p.value.filter,"visible-columns":C.value,onRowClick:ae},{top:o(()=>[s("div",Ze,[l(j,{dense:"",modelValue:p.value.filter,"onUpdate:modelValue":t[3]||(t[3]=a=>p.value.filter=a),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:o(()=>[l(O,{name:"search"})]),_:1},8,["modelValue"]),l(m,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:o(()=>[l(re,{style:{"min-width":"200px"}},{default:o(()=>[l(pe,null,{default:o(()=>[(r(!0),D(W,null,J(p.value.columns,(a,b)=>z((r(),k(Z,{tag:"label",key:b},{default:o(()=>[l(I,null,{default:o(()=>[l(U,null,{default:o(()=>[d(n(a.label),1)]),_:2},1024),l(U,{caption:""},{default:o(()=>[d(n(a.coldesc),1)]),_:2},1024)]),_:2},1024),l(I,{side:"",top:""},{default:o(()=>[l(ve,{color:"pink-5",modelValue:C.value,"onUpdate:modelValue":t[4]||(t[4]=V=>C.value=V),val:a.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[se]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])]),l(X,{vertical:""}),s("div",et,[tt,l(ce,{"row-key":"id",flat:"",rows:v(ye),columns:p.value.columns,pagination:p.value.pagination,filter:p.value.filter,"visible-columns":C.value,onRowClick:ae},{top:o(()=>[s("div",lt,[l(j,{dense:"",modelValue:p.value.filter,"onUpdate:modelValue":t[5]||(t[5]=a=>p.value.filter=a),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:o(()=>[l(O,{name:"search"})]),_:1},8,["modelValue"]),l(m,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:o(()=>[l(re,{style:{"min-width":"200px"}},{default:o(()=>[l(pe,null,{default:o(()=>[(r(!0),D(W,null,J(p.value.columns,(a,b)=>z((r(),k(Z,{tag:"label",key:b},{default:o(()=>[l(I,null,{default:o(()=>[l(U,null,{default:o(()=>[d(n(a.label),1)]),_:2},1024),l(U,{caption:""},{default:o(()=>[d(n(a.coldesc),1)]),_:2},1024)]),_:2},1024),l(I,{side:"",top:""},{default:o(()=>[l(ve,{color:"pink-5",modelValue:C.value,"onUpdate:modelValue":t[6]||(t[6]=V=>C.value=V),val:a.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[se]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])])]),l(q,{modelValue:i.value.state,"onUpdate:modelValue":t[9]||(t[9]=a=>i.value.state=a),position:"bottom",onHide:t[10]||(t[10]=a=>ee.value.focus())},{default:o(()=>[i.value.item?(r(),k(E,{key:0},{default:o(()=>[l(f,{class:"bg-grey-3"},{default:o(()=>[s("div",at,[s("div",ot,[s("div",st,"ID: "+n(i.value.item.id),1),s("div",it,n(i.value.item.code),1)]),s("div",nt,[s("div",ut,n(i.value.item.name),1),s("div",dt,n(i.value.item.barcode),1)])])]),_:1}),l(X),l(f,null,{default:o(()=>[d(n(i.value.item.description),1)]),_:1}),l(f,{class:"row justify-around items-center"},{default:o(()=>[s("div",ct,[s("div",rt,n(i.value.item.pieces),1),pt]),(r(!0),D(W,null,J(i.value.item.stocks,a=>(r(),D("div",{key:a.id,class:"text-center"},[s("div",vt,n(a.pivot.gen),1),s("div",mt,n(a.alias),1)]))),128))]),_:1}),l($e,{onSubmit:Ue(xe,["prevent"])},{default:o(()=>[l(f,null,{default:o(()=>[s("div",ft,[s("div",_t,[bt,s("div",gt,n(i.value.item.pivot.amount)+" "+n(i.value.item.pivot._supply_by==3?`Caja${i.value.item.pivot.amount!=1?"s":""}`:i.value.item.pivot._supply_by==2?`Docena${i.value.item.pivot.amount!=1?"s":""}`:`Pieza${i.value.item.pivot.amount!=1?"s":""}`),1)]),s("div",yt,[ht,l(j,{dense:"",borderless:"",modelValue:i.value.form.count,"onUpdate:modelValue":t[7]||(t[7]=a=>i.value.form.count=a),type:"number",min:"0","input-class":"text-h6 text-center",ref_key:"iptcounter",ref:N},null,8,["modelValue"])]),s("div",kt,[xt,l(j,{dense:"",borderless:"",modelValue:i.value.form.ipack,"onUpdate:modelValue":t[8]||(t[8]=a=>i.value.form.ipack=a),type:"number","input-class":"text-h6 text-center",readonly:i.value.item.units.id!=3,disable:i.value.item.units.id!=3},null,8,["modelValue","readonly","disable"])]),s("div",wt,[Vt,s("div",Ct,n(i.value.item.pivot._supply_by==3?i.value.form.count*i.value.form.ipack:i.value.item.pivot._supply_by==2?i.value.form.count*12:i.value.form.count),1)])])]),_:1}),l(m,{color:"green-5",type:"submit",square:"",icon:"done_all","no-caps":"",class:"q-mt-md q-py-md full-width"})]),_:1},8,["onSubmit"])]),_:1})):P("",!0)]),_:1},8,["modelValue"]),l(q,{modelValue:R.value.state,"onUpdate:modelValue":t[11]||(t[11]=a=>R.value.state=a)},{default:o(()=>[l(E,null,{default:o(()=>[l(f,{class:"row items-start"},{default:o(()=>[l(G,{icon:"warning",color:"orange-14","text-color":"white"}),Qt]),_:1}),l(Y,{align:"right"},{default:o(()=>[z(l(m,{flat:"",label:"No",color:"primary","no-caps":""},null,512),[[me]]),l(m,{flat:"",label:"Si",color:"primary",onClick:we})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(q,{modelValue:$.value.state,"onUpdate:modelValue":t[12]||(t[12]=a=>$.value.state=a),persistent:""},{default:o(()=>[l(E,{class:"bg-red text-white"},{default:o(()=>[l(f,{class:"row items-center"},{default:o(()=>[l(G,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),s("span",St,n($.value.code),1)]),_:1}),l(f,null,{default:o(()=>[s("span",Pt,n($.value.text),1)]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(q,{modelValue:L.value,"onUpdate:modelValue":t[14]||(t[14]=a=>L.value=a),persistent:""},{default:o(()=>[l(E,{style:{width:"400px"}},{default:o(()=>[l(f,{class:"row items-center"},{default:o(()=>[Ut]),_:1}),l(f,null,{default:o(()=>[l(de,{modelValue:_.value.val,"onUpdate:modelValue":[t[13]||(t[13]=a=>_.value.val=a),he],options:_.value.opts,label:"Surtidor","option-label":"_suplier","option-value":"_suplier_id",filled:"","option-disable":a=>!(a._status==4||a._status==5)},{option:o(a=>[l(Z,De(qe(a.itemProps)),{default:o(()=>[l(I,null,{default:o(()=>[l(U,null,{default:o(()=>[d(n(a.opt._suplier),1)]),_:2},1024),l(U,{caption:"",lines:"2"},{default:o(()=>[d("Estado: "+n(a.opt.status.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","option-disable"])]),_:1}),l(Y,{align:"right"},{default:o(()=>[z(l(m,{flat:"",label:"Continuar",color:"primary",disable:!_.value.val,onClick:Ve},null,8,["disable"]),[[me]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),v(le)?(r(),k(ie,{key:0,bordered:"",class:"bg-cyan-10 text-dark q-pa-sm row",elevated:""},{default:o(()=>[l(j,{color:"white",modelValue:h.value,"onUpdate:modelValue":t[16]||(t[16]=a=>h.value=a),type:"text",class:"col","input-class":"text-white text-h6 text-center text-uppercase",autofocus:"",dense:"",onKeypress:Ee(ke,["enter"]),ref_key:"iptfinder",ref:ee},{prepend:o(()=>[l(O,{name:"fas fa-barcode",color:"white"})]),append:o(()=>[l(m,{flat:"",icon:"fas fa-delete-left",color:"white",onClick:t[15]||(t[15]=a=>h.value=""),disabled:!h.value.length},null,8,["disabled"])]),_:1},8,["modelValue","onKeypress"]),v(S).length>0?(r(),k(m,{key:0,color:"white","text-color":"cyan-9",label:"Terminar",icon:"done",onClick:t[17]||(t[17]=a=>R.value.state=!0),"no-caps":""})):P("",!0)]),_:1})):P("",!0),c.value&&c.value._status!=5?(r(),k(ie,{key:1,bordered:"",class:"bg-orange-9 text-white"},{default:o(()=>{var a;return[s("div",Dt,n((a=c.value)==null?void 0:a.status.name),1)]}),_:1})):P("",!0)]),_:1})]),_:1}))}};export{Tt as default};