import{r,c as x,o as d,b as w,w as o,u as ge,a as he,d as l,h as _,e as p,aE as v,t as n,f as a,aF as P,i as S,aJ as N,Q as F,aG as K,aH as H,aI as ye,ax as M,aK as ke,x as xe,R as Y}from"./index.ffaa529b.js";import{Q as we,a as Ve,b as Z}from"./QFooter.1c117fbd.js";import{c as Ce,u as Qe,R as j,d as Se,o as G,f as Pe,s as I,v as h,e as Ue,w as ee,t as R,b as qe,Q as te,a as U,p as le,q as ae,g as De,x as oe,y as A,z as T,A as se,C as Ee}from"./ClosePopup.889994f6.js";import"./dayjs.min.53a5c0af.js";import{A as ie}from"./AssistApi.1c437439.js";import"./axios.2cb04522.js";const $e={class:"q-px-md q-py-sm"},je={class:"col row justify-between"},Ie={key:0,class:"row items-center justify-between q-pt-sm"},Re=a("span",{class:"text--2"},"Por revisar:",-1),Ae=a("span",{class:"text--2"},"Revisados:",-1),Te=a("span",{class:"text--2"},"Agotados:",-1),ze=a("span",{class:"text--2"},"Con stock:",-1),Be={class:"q-mx-sm text-h6"},Le={class:"row"},Ne={class:"col"},Fe=a("div",{class:"text-h6"},"Productos sin revisar",-1),Ke={class:"full-width row items-center justify-between"},He={class:"col"},Me=a("div",{class:"text-h6"},"Productos revisados",-1),Ge={class:"full-width row items-center justify-between"},Oe={class:"row justify-between"},Je={class:"text-left"},We={class:"text--3"},Xe={class:"text-h6"},Ye={class:"text-right"},Ze={class:"text-bold"},et={class:"text--2"},tt={class:"text-center"},lt={class:"text-h6"},at=a("div",{class:"text--2"},"PxC",-1),ot={class:"text-h6"},st={class:"text--2"},it={class:"row items-start justify-between"},nt={class:"text-center col text-primary"},dt=a("div",null,"Solicitud",-1),ut={class:"text-bold"},ct={class:"text-center col"},rt=a("div",null,"Conteo",-1),pt={class:"text-center col"},vt=a("div",null,"PxC",-1),mt={class:"text-center col"},ft=a("div",null,"Piezas",-1),_t={class:"text-bold"},bt=a("div",{class:"q-ml-md"},[a("div",{class:"text-h6"},"Deseas terminar la revision?"),a("div",null,"EL pedido ya no podra editarse")],-1),gt={class:"q-ml-sm"},ht={class:"q-ml-sm"},yt={class:"q-pa-md text-bold text-uppercase text-center"},Pt={__name:"Checkout",setup(kt){const y=ge(),ne=he(),b=Qe(),z=r({state:!0}),V=r(["code","assocs","ipack","request","uspply","delivery","reqinpzs","checkout","stocks"]),g=r([]),k=r(""),B=r(null),O=r(null),f=r(null),u=r({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:e=>e.variants.length?e.variants.map(t=>t.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"locs",label:"Ubicacion",field:e=>e.locations.length?e.locations.map(t=>t.path).join(", "):"--",align:"left",coldesc:"Ubicaciones en almacen general"},{name:"ipack",label:"PxC",field:e=>typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:e=>e.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:e=>e.units.id==3?"Cajas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Conteo",field:e=>e.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:e=>e.pivot._supply_by==3?(typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces)*(typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount):typeof e.pivot.ipack=="number"?e.pivot.toDelivered:e.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:e=>e.pivot.checkout?"OK":null,classes:e=>e.pivot.checkout?"text-positive text-bold":"",align:"center",coldesc:"Revision del Administrador"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"},{name:"stocks",label:"Stock (pzs)",field:e=>e.stocks.reduce((t,s)=>t+s.pivot.stock,0),sortable:!0,classes:e=>e.stocks.reduce((t,s)=>t+s.pivot.stock,0)<=0?"text-red text-bold":"text-bold text-primary",align:"center",coldesc:"Stock total en almacenes GENERALES (CEDIS+PAN)"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),i=r({state:!1,item:null,form:{count:0,ipack:null,setting:!1}}),C=r({val:null,opts:null}),q=r({state:!1,code:null,text:null}),D=r({state:!1}),J=x(()=>f.value?f.value.id==5:!1),de=x(()=>g.value.reduce((e,t)=>e+(t.pivot._supply_by==3?t.pivot.amount*t.pieces:t.pivot.amount),0)),L=x(()=>g.value.filter(e=>!e.pivot.checkout)),Q=x(()=>g.value.filter(e=>e.pivot.checkout)),ue=x(()=>Q.value.filter(e=>e.pivot.toDelivered==0)),ce=x(()=>Q.value.filter(e=>e.pivot.toDelivered>0)),E=x(()=>{let e=k.value.toUpperCase().trim();return e.length?L.value.filter(t=>t.code.match(e)||t.barcode&&t.barcode.match(e)):L.value}),re=x(()=>{let e=k.value.toUpperCase().trim();return e.length?Q.value.filter(t=>t.code.match(e)||t.barcode&&t.barcode.match(e)):Q.value}),$=async()=>{b.loading.show({message:"Cargando..."}),console.log("Iniciando...");const e=await j.order(y.params.oid);console.log(e),e.status==200?(g.value=e.data.products,f.value=e.data.status,b.loading.hide()):displayErrRequest(e)},W=(e,t,s)=>J.value?X(t):null,X=e=>{console.log(e),i.value.item=e,i.value.form.count=typeof e.pivot.toDelivered=="number"?e.pivot.toDelivered:0,i.value.form.ipack=typeof e.pivot.ipack=="number"?e.pivot.ipack:e.pieces,i.value.state=!0,xe(()=>{B.value.focus(),B.value.select()})},pe=()=>{let e=k.value.toUpperCase().trim();if(e.length){let t=E.value.length==1?E.value[0]:E.value.find(s=>s.code==e||s.barcode==e);t?X(t):b.notify({message:`Sin coincidencias para <b>${e}</b>`,color:"pink-5",position:"center",html:!0})}},ve=async()=>{const e=parseInt(i.value.form.count),t=parseInt(i.value.form.ipack),s={order:y.params.oid,product:i.value.item.id,delivery:e,ipack:t,checkout:!0},m=await j.setDeliveryProduct(s);if(console.log(m),m.status==200){console.log(m.data);let c=g.value.findIndex(be=>be.id==i.value.item.id);g.value[c].pivot.toDelivered=e,g.value[c].pivot.ipack=t,g.value[c].pivot.checkout=1,i.value.state=!1,k.value="",b.notify({color:"positive",icon:"done",position:"right",message:""})}else alert(`Error ${m.status}: ${m.data}`)},me=async()=>{b.loading.show({message:"Terminando, espera..."}),D.value.state=!1;let e={id:y.params.oid,state:6};const t=await j.nextState(e);console.log(t),t.status==200&&$(),b.loading.hide()},fe=async()=>{let e=await ie.getVerified();console.log(e),C.value.opts=e},_e=async()=>{b.loading.show({message:"Inicando, espera..."});let e=5,t={id:y.params.oid,state:e};const s=await j.nextState(t);if(s.status==200){b.notify({message:`Validacion iniciada para el pedido  ${y.params.oid}`,icon:"done",position:"center",color:"teal"});let m={supplyer:C.value.val,pedido:y.params.oid,status:e},c=await ie.SaveVerified(m);console.log(c),c.status==200?($(),z.value.state=!1,b.loading.hide()):alert(`Error ${c.status}: ${c.data} 2`)}else alert(`Error ${s.status}: ${s.data} 1`)};return fe(),$(),(e,t)=>(d(),w(Ce,{view:"hHh Lpr fFf"},{default:o(()=>[l(Pe,{bordered:"",class:"bg-cyan-10"},{default:o(()=>[l(Se,null,{default:o(()=>[l(_,{flat:"",round:"",dense:"",icon:"arrow_back",onClick:t[0]||(t[0]=s=>{p(ne).replace("/checkout")})}),l(we,null,{default:o(()=>[v(" Pedido "+n(p(y).params.oid),1)]),_:1}),l(_,{color:"white",icon:"sync",onClick:$,round:"",dense:"",flat:""})]),_:1}),l(G),a("div",$e,[a("div",je,[a("div",null,[v("Productos: "),a("b",null,n(g.value.length),1)]),a("div",null,[v("Piezas: "),a("b",null,n(p(de)),1)])]),f.value&&f.value.id>=3?(d(),P("div",Ie,[a("div",null,[Re,v(),a("b",null,n(p(L).length),1)]),a("div",null,[Ae,v(),a("b",null,n(p(Q).length),1)]),a("div",null,[Te,v(),a("b",null,n(p(ue).length),1)]),a("div",null,[ze,v(),a("b",null,n(p(ce).length),1)])])):S("",!0)])]),_:1}),f.value&&f.value.id==4?(d(),w(I,{key:0,modelValue:z.value.state,"onUpdate:modelValue":t[2]||(t[2]=s=>z.value.state=s),persistent:""},{default:o(()=>[l(R,null,{default:o(()=>[l(h,{class:"row items-center"},{default:o(()=>[l(N,{icon:"warning",color:"orange-14","text-color":"white"}),a("span",Be,"Iniciar CheckOut #"+n(p(y).params.oid),1)]),_:1}),l(h,null,{default:o(()=>[l(Ue,{modelValue:C.value.val,"onUpdate:modelValue":t[1]||(t[1]=s=>C.value.val=s),options:C.value.opts,label:"Verificador","option-label":"complete_name",filled:""},null,8,["modelValue","options"])]),_:1}),l(ee,{vertical:"",align:"center"},{default:o(()=>[l(_,{flat:"",label:"Si",color:"primary",onClick:_e,disable:C.value.val==null},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):S("",!0),l(De,null,{default:o(()=>[l(qe,{padding:""},{default:o(()=>[a("div",Le,[a("div",Ne,[Fe,l(te,{"row-key":"id",flat:"",rows:p(E),columns:u.value.columns,pagination:u.value.pagination,filter:u.value.filter,"visible-columns":V.value,onRowClick:W},{top:o(()=>[a("div",Ke,[l(U,{dense:"",modelValue:u.value.filter,"onUpdate:modelValue":t[3]||(t[3]=s=>u.value.filter=s),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:o(()=>[l(F,{name:"search"})]),_:1},8,["modelValue"]),l(_,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:o(()=>[l(le,{style:{"min-width":"200px"}},{default:o(()=>[l(ae,null,{default:o(()=>[(d(!0),P(H,null,K(u.value.columns,(s,m)=>M((d(),w(oe,{tag:"label",key:m},{default:o(()=>[l(A,null,{default:o(()=>[l(T,null,{default:o(()=>[v(n(s.label),1)]),_:2},1024),l(T,{caption:""},{default:o(()=>[v(n(s.coldesc),1)]),_:2},1024)]),_:2},1024),l(A,{side:"",top:""},{default:o(()=>[l(se,{color:"pink-5",modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=c=>V.value=c),val:s.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[Y]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])]),l(G,{vertical:""}),a("div",He,[Me,l(te,{"row-key":"id",flat:"",rows:p(re),columns:u.value.columns,pagination:u.value.pagination,filter:u.value.filter,"visible-columns":V.value,onRowClick:W},{top:o(()=>[a("div",Ge,[l(U,{dense:"",modelValue:u.value.filter,"onUpdate:modelValue":t[5]||(t[5]=s=>u.value.filter=s),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:o(()=>[l(F,{name:"search"})]),_:1},8,["modelValue"]),l(_,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:o(()=>[l(le,{style:{"min-width":"200px"}},{default:o(()=>[l(ae,null,{default:o(()=>[(d(!0),P(H,null,K(u.value.columns,(s,m)=>M((d(),w(oe,{tag:"label",key:m},{default:o(()=>[l(A,null,{default:o(()=>[l(T,null,{default:o(()=>[v(n(s.label),1)]),_:2},1024),l(T,{caption:""},{default:o(()=>[v(n(s.coldesc),1)]),_:2},1024)]),_:2},1024),l(A,{side:"",top:""},{default:o(()=>[l(se,{color:"pink-5",modelValue:V.value,"onUpdate:modelValue":t[6]||(t[6]=c=>V.value=c),val:s.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[Y]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])])]),l(I,{modelValue:i.value.state,"onUpdate:modelValue":t[9]||(t[9]=s=>i.value.state=s),position:"bottom",onHide:t[10]||(t[10]=s=>O.value.focus())},{default:o(()=>[i.value.item?(d(),w(R,{key:0},{default:o(()=>[l(h,{class:"bg-grey-3"},{default:o(()=>[a("div",Oe,[a("div",Je,[a("div",We,"ID: "+n(i.value.item.id),1),a("div",Xe,n(i.value.item.code),1)]),a("div",Ye,[a("div",Ze,n(i.value.item.name),1),a("div",et,n(i.value.item.barcode),1)])])]),_:1}),l(G),l(h,null,{default:o(()=>[v(n(i.value.item.description),1)]),_:1}),l(h,{class:"row justify-around items-center"},{default:o(()=>[a("div",tt,[a("div",lt,n(i.value.item.pieces),1),at]),(d(!0),P(H,null,K(i.value.item.stocks,s=>(d(),P("div",{key:s.id,class:"text-center"},[a("div",ot,n(s.pivot.gen),1),a("div",st,n(s.alias),1)]))),128))]),_:1}),l(Ve,{onSubmit:ye(ve,["prevent"])},{default:o(()=>[l(h,null,{default:o(()=>[a("div",it,[a("div",nt,[dt,a("div",ut,n(i.value.item.pivot.amount)+" "+n(i.value.item.units.id==3?`Caja${i.value.item.pivot.amount!=1?"s":""}`:`Pieza${i.value.item.pivot.amount!=1?"s":""}`),1)]),a("div",ct,[rt,l(U,{dense:"",borderless:"",modelValue:i.value.form.count,"onUpdate:modelValue":t[7]||(t[7]=s=>i.value.form.count=s),type:"number",min:"0","input-class":"text-h6 text-center",ref_key:"iptcounter",ref:B},null,8,["modelValue"])]),a("div",pt,[vt,l(U,{dense:"",borderless:"",modelValue:i.value.form.ipack,"onUpdate:modelValue":t[8]||(t[8]=s=>i.value.form.ipack=s),type:"number","input-class":"text-h6 text-center",readonly:i.value.item.units.id!=3,disable:i.value.item.units.id!=3},null,8,["modelValue","readonly","disable"])]),a("div",mt,[ft,a("div",_t,n(i.value.item.units.id==3?i.value.form.count*i.value.form.ipack:i.value.form.count),1)])])]),_:1}),l(_,{color:"green-5",type:"submit",square:"",icon:"done_all","no-caps":"",class:"q-mt-md q-py-md full-width"})]),_:1},8,["onSubmit"])]),_:1})):S("",!0)]),_:1},8,["modelValue"]),l(I,{modelValue:D.value.state,"onUpdate:modelValue":t[11]||(t[11]=s=>D.value.state=s)},{default:o(()=>[l(R,null,{default:o(()=>[l(h,{class:"row items-start"},{default:o(()=>[l(N,{icon:"warning",color:"orange-14","text-color":"white"}),bt]),_:1}),l(ee,{align:"right"},{default:o(()=>[M(l(_,{flat:"",label:"No",color:"primary","no-caps":""},null,512),[[Ee]]),l(_,{flat:"",label:"Si",color:"primary",onClick:me})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(I,{modelValue:q.value.state,"onUpdate:modelValue":t[12]||(t[12]=s=>q.value.state=s),persistent:""},{default:o(()=>[l(R,{class:"bg-red text-white"},{default:o(()=>[l(h,{class:"row items-center"},{default:o(()=>[l(N,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),a("span",gt,n(q.value.code),1)]),_:1}),l(h,null,{default:o(()=>[a("span",ht,n(q.value.text),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),p(J)?(d(),w(Z,{key:0,bordered:"",class:"bg-cyan-10 text-dark q-pa-sm row",elevated:""},{default:o(()=>[l(U,{color:"white",modelValue:k.value,"onUpdate:modelValue":t[14]||(t[14]=s=>k.value=s),type:"text",class:"col","input-class":"text-white text-h6 text-center text-uppercase",autofocus:"",dense:"",onKeypress:ke(pe,["enter"]),ref_key:"iptfinder",ref:O},{prepend:o(()=>[l(F,{name:"fas fa-barcode",color:"white"})]),append:o(()=>[l(_,{flat:"",icon:"fas fa-delete-left",color:"white",onClick:t[13]||(t[13]=s=>k.value=""),disabled:!k.value.length},null,8,["disabled"])]),_:1},8,["modelValue","onKeypress"]),p(Q).length>0?(d(),w(_,{key:0,color:"white","text-color":"cyan-9",label:"Terminar",icon:"done",onClick:t[15]||(t[15]=s=>D.value.state=!0),"no-caps":""})):S("",!0)]),_:1})):S("",!0),f.value&&f.value.id!=5?(d(),w(Z,{key:1,bordered:"",class:"bg-orange-9 text-white"},{default:o(()=>[a("div",yt,n(f.value.name),1)]),_:1})):S("",!0)]),_:1})]),_:1}))}};export{Pt as default};