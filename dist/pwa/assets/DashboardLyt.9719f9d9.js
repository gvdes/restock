import{r as m,c as L,o as p,aF as R,f as i,d as e,w as a,h as x,aH as Q,i as w,e as I,ax as J,b as S,aL as Te,Q as Z,t as v,aE as O,R as Ae,u as de,a8 as Qe,aG as se,aJ as Ce,x as Fe,a as Se,g as Me}from"./index.01e730c9.js";import{u as X,o as Y,e as K,x as ne,y as q,z as te,v as D,w as ee,p as oe,q as be,Q as re,a as ce,A as ze,t as H,s as B,C as ie,R as T,b as Ge,c as Be,d as je,f as Ye,g as He}from"./ClosePopup.d0fdfcb2.js";import{d as z}from"./dayjs.min.54da9cde.js";import{a as Je,Q as Ze,b as Ke,c as Xe,d as ye,e as We,f as xe,g as he,E as et,u as ue}from"./Restock.62256869.js";import{A as j}from"./AssistApi.dc14e23b.js";import"./axios.2cb04522.js";const tt={class:"q-pa-sm bg-grey-2 text-bold row justify-between items-center",style:{"min-width":"250px"}},at=i("div",null,"Impresion",-1),lt={key:0,class:"row justify-between items-center"},ot={class:"q-mt-sm q-pa-sm"},st={key:0,class:"q-pa-sm"},nt={class:"text--3"},it={class:"q-pa-sm text-right"},ke={__name:"PrinterSelect",emits:["selected"],setup(G,{emit:A}){const E=X(),b=Je(),u=m(null),g=m(null),d=L(()=>b.printers),h=L(()=>u.value?u.value.printers:[]),U=()=>{E.localStorage.set("LUP",{wkp:u.value,printer:g.value}),A("selected",g.value)},y=E.localStorage.getItem("LUP");return y&&(u.value=y.wkp,g.value=y.printer),(c,k)=>(p(),R(Q,null,[i("div",tt,[at,u.value?(p(),R("div",lt,[e(Ze,{flat:""},{default:a(()=>[e(x,{flat:"",color:"positive",icon:"add",dense:""}),g.value?(p(),R(Q,{key:0},[e(x,{flat:"",color:"negative",icon:"delete",dense:""}),e(x,{flat:"",color:"orange",icon:"edit",dense:""})],64)):w("",!0)]),_:1})])):w("",!0)]),e(Y),i("div",ot,[e(K,{modelValue:u.value,"onUpdate:modelValue":[k[0]||(k[0]=C=>u.value=C),k[1]||(k[1]=C=>g.value=null)],options:I(d),label:"Sucursal",filled:"","option-label":"alias","option-value":"id"},null,8,["modelValue","options"])]),u.value?(p(),R("div",st,[e(K,{modelValue:g.value,"onUpdate:modelValue":k[2]||(k[2]=C=>g.value=C),options:I(h),label:"Impresora",filled:"","option-value":"id","option-label":"name"},{option:a(C=>[J((p(),S(ne,Te({clickable:""},C.itemProps),{default:a(()=>[e(q,{class:"text-center",side:""},{default:a(()=>[e(Z,{color:"primary","text-color":"white",name:"print",size:"30px"}),i("span",nt,"ID:"+v(C.opt.id),1)]),_:2},1024),e(q,null,{default:a(()=>[e(te,null,{default:a(()=>[O(v(C.opt.name),1)]),_:2},1024),e(te,{caption:"",lines:"2"},{default:a(()=>[O(v(C.opt.ip),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)),[[Ae]])]),_:1},8,["modelValue","options"])])):w("",!0),i("div",it,[u.value&&g.value?(p(),S(x,{key:0,color:"primary",icon:"print",onClick:U})):w("",!0)])],64))}},dt=i("div",{class:"text-overline text-grey-7"},"Sucursal",-1),rt={class:"text-h6"},ct={class:"q-px-lg text-center"},ut=i("div",{class:"text-overline text-grey-7"},"Folio",-1),pt={class:"text-h6"},vt={class:"text-right"},mt=i("div",{class:"text-overline text-grey-7"},"Agente",-1),ft={class:"text-h6"},_t={class:"text--1"},gt={key:0},bt=i("div",null,"Salida",-1),yt={class:"text-bold text-indigo-10"},xt=i("div",null,"Entrada",-1),ht={class:"text-bold text-orange-10"},kt={class:"full-width row items-center"},At={class:"col text-dark"},Ct={class:"text-h6"},St={class:"text-bold"},Et={key:1,class:"text-center q-pa-lg text-h6 text-grey-7"},wt=i("canvas",{id:"qrcode"},null,-1),Dt={class:"text--2"},It=i("div",{class:"q-ml-md"},[i("div",{class:"text-h6"},"Emitir salida?"),i("div",null,"La salida emitira la factura correspondiente en Factusol.")],-1),Vt={__name:"OrderViewer",props:{head:{type:Object,default:{}}},emits:["loaded","loading"],setup(G,{emit:A}){const E=G,b=X();de();const u=m({opts:[],val:[]}),g=m({opts:null,val:null}),d=m(E.head),h=m(!0),U=m([]),y=m("basket"),c=m(null),k=m([]),C=m(!1),V=m({state:!1}),f=m({state:!1,key:null}),n=m({state:!1}),r=m(null),_=m([]),$=m({columns:[{name:"id",label:"ID",field:"id",align:"left",coldesc:"Identificador del producto (MySQL)"},{name:"code",label:"Codigo",field:"code",align:"left",coldesc:"Codigo principal del producto"},{name:"assocs",label:"Asociados",field:t=>t.variants.length?t.variants.map(o=>o.barcode).join(", "):null,align:"left",coldesc:"Codigos relacionados al codigo principal"},{name:"bcode",label:"Codigo de Barras",field:"barcode",align:"center",coldesc:"Codigo de barras principal"},{name:"locs",label:"Ubicacion",field:t=>t.locations.length?t.locations.map(o=>o.path).join(", "):"--",align:"left",coldesc:"Ubicaciones en almacen general"},{name:"stocks",label:"Stock (pzs)",field:t=>t.stocks.reduce((o,s)=>o+s.pivot.stock,0),sortable:!0,classes:t=>t.stocks.reduce((o,s)=>o+s.pivot.stock,0)<=0?"text-red text-bold":"text-bold text-primary",align:"center",coldesc:"Stock total en almacenes GENERALES (CEDIS+PAN)"},{name:"ipack",label:"PxC",field:t=>typeof t.pivot.ipack=="number"?t.pivot.ipack:t.pieces,align:"center",coldesc:"Unidades x Embalaje"},{name:"request",label:"Solicitud",field:t=>t.pivot.amount,align:"center",coldesc:"Embalaje solicitado"},{name:"uspply",label:"Unidad",field:t=>t.units.id==3?"Cajas":"Piezas",align:"left",coldesc:"Unidad de embalaje del producto"},{name:"delivery",label:"Salida (conteo)",field:t=>t.pivot.toDelivered,align:"center",coldesc:"Embalaje surtido",sortable:!0},{name:"reqinpzs",label:"Piezas",field:t=>t.pivot._supply_by==3?(typeof t.pivot.ipack=="number"?t.pivot.ipack:t.pieces)*(typeof t.pivot.ipack=="number"?t.pivot.toDelivered:t.pivot.amount):typeof t.pivot.ipack=="number"?t.pivot.toDelivered:t.pivot.amount,align:"center",coldesc:"Unidades totales en embalaje"},{name:"checkout",label:"Checkout",field:t=>t.pivot.checkout?"OK":"---",align:"center",classes:t=>t.pivot.checkout?"text-positive text-bold":"text-red",sortable:!0,coldesc:"Revision del Administrador"},{name:"received",label:"Entrada (conteo)",field:t=>t.pivot.toReceived,align:"center",coldesc:"Embalaje recibido"},{name:"descr",label:"Descripcion",field:"description",align:"left"},{name:"section",label:"Seccion",field:"section",align:"left"},{name:"family",label:"Familia",field:"family",align:"left"},{name:"category",label:"Categoria",field:"category",align:"left"}],filter:"",pagination:{sortBy:"locs",descending:!1,rowsPerPage:20}}),ae=L(()=>k.value.reduce((t,o)=>t+(o.pivot._supply_by==3?o.pivot.amount*o.pieces:o.pivot.amount),0));L(()=>c.value&&(c.value.id==2||c.value.id==6));const Ee=L(()=>U.value.find(t=>t.id==c.value.id).pivot),W=async()=>{A("loading"),h.value=!0;let t=await T.order(d.value.id);console.log(t.data),k.value=t.data.products,U.value=t.data.log.map(o=>(o.pivot.details=JSON.parse(o.pivot.details),o)),c.value=t.data.status,f.value.key=t.data.entry_key,r.value=t.data.invoice,h.value=!1,A("loaded")},we=()=>{n.value.state=!0},De=async()=>{A("loading"),C.value=!0;let t=3,o={id:d.value.id,state:t};const s=await T.nextState(o);if(s.status==200){C.value=!1,b.notify({message:`Surtido iniciado para el pedido  ${d.value.id}`,icon:"done",position:"center",color:"teal"});let P={supplyer:u.value.val,pedido:d.value.id,status:t},N=await j.SaveSupply(P);console.log(N),N.status==200?(W(),n.value.state=!1):alert(`Error ${N.status}: ${N.data} 2`)}else alert(`Error ${s.status}: ${s.data} 1`);A("loaded")},Ie=async()=>{b.loading.show({message:"Generando, espera..."}),V.value.state=!1;const t=await T.genInvoice(d.value.id);if(console.log(t),t.status==200){if(console.log(t),t.data.invoice){b.notify({message:`Se genero la salida <b class="text-h6">${t.data.invoice.folio}</b>`,html:!0,position:"center",icon:"done",timeout:5e3,color:"positive"});let o={supplyer:g.value.val,pedido:d.value.id,status:7},s=await j.SaveChofi(o);s.status==200?(W(),pe(t.data.invoice.folio),b.notify({message:"Pedido en ruta",position:"center",icon:"done",timeout:5e3,color:"positive"})):alert(`Error ${s.status}: ${s.data}`)}}else alert(`Error ${t.status}: ${t.data}`);b.loading.hide()},Ve=async()=>{let t=`http://192.168.10.189:2200/#/checkin/${d.value.id}?key=${f.value.key}`;f.value.state=!0,Fe(()=>he.toCanvas(document.getElementById("qrcode"),t))},$e=async t=>{b.loading.show({message:"..."}),console.log(t);const o=await T.printKey({ip:t.ip,port:t._port,order:d.value.id});o.status==200?(o.data,b.loading.hide(),b.notify({message:"Impresion correcta",icon:"done",color:"positive",position:"top"})):(console.error(o),alert(`Error ${o.status}: ${o.data}`))},Oe=async t=>{b.loading.show({message:"..."}),console.log(t);const o=await T.printForSupply({ip:t.ip,port:t._port,order:d.value.id});console.log(o),o.status==200?(o.data?b.notify({message:"Impresion correcta",icon:"done",color:"positive",position:"top"}):b.notify({message:`Sin conexion a <b>${t.name} <small>(${t.ip})</small></b>`,icon:"fas fa-bug",color:"negative",position:"center",html:!0,timeout:4e3}),b.loading.hide()):(console.error(o),alert(`Error ${o.status}: ${o.data}`))},Re=async()=>{let t=await j.getSupply();console.log(t),u.value.opts=t},Le=async()=>{V.value.state=!0;let t=await j.getChof();console.log(t),g.value.opts=t.data},pe=async t=>{let o={salida:t};console.log(o);let s=await j.getSalida(o);if(console.log(s),s.status==200){const N=`http://192.168.10.189:2200/#/checkin/${d.value.id}?key=${f.value.key}`,Ue={margin:1,width:1,height:1},ve=document.createElement("canvas");await he.toCanvas(ve,N,Ue);const Pe=ve.toDataURL("image/png"),l=new et;let me=[];const le=s.data.productos.map(F=>Object.values(F)),Ne=Math.ceil(le.length/20);for(var P=0;P<le.length;P+=20)me.push(le.slice(P,P+20));me.forEach(function(F,fe){fe>0&&l.addPage();let _e=0;for(let M=0;M<F.length;M++)_e+=parseFloat(F[M][1]);let ge=0;for(let M=0;M<F.length;M++)ge+=parseFloat(F[M][3]);l.setFontSize(25),l.setFont("helvetica","bold"),l.text("GRUPO VIZCARRA",105,10,"center"),l.setFontSize(8),l.text("NUMERO PEDIDO:",10,10,"left"),l.text(s.data.salida.FOLIO,10,15,"left"),l.setFontSize(12),l.text("ORIGINAL",185,10,"left"),l.text(s.data.salida.CLIENTE,10,25,"left"),l.text("LLUVIA LIGTH SA DE CV",120,25,"left"),l.setFontSize(8),l.text("CALLE AN PABLO 10 LOC G 10",120,30,"left"),l.text("06090",120,35,"left"),l.text("DELEG, CUAUHTEMOC CDMX       CENTRO",120,40,"left"),l.text("LLI1210184G8",120,45,"left"),l.text("HORA DE IMP:",10,50,"left"),l.rect(45,46,15,5),l.text("HR SALIDA M:",61,50,"left"),l.rect(91,46,15,5),l.text("LLEGADA A SUCURSAL:",10,60,"left"),l.rect(45,56,15,5),l.text("SALIDA SUCURSAL:",61,60,"left"),l.rect(91,56,15,5),l.rect(120,51,80,5),l.text("DOCUMENTO",121,55,"left"),l.text("FACTURA",121,60,"left"),l.text("NUMERO",143,55,"left"),l.text(s.data.salida.FACTURA,143,60,"left"),l.text("PAGINA",165,55,"left"),l.text(`${fe+1} de ${Ne}`,165,60,"left"),l.text("FECHA",185,55,"left");const qe=s.data.salida.FECHA.replace(/\b0+/g,"");l.text(qe,185,60,"left"),l.autoTable({startX:10,startY:65,theme:"plain",styles:{cellPadding:1,fontSize:8},head:[["CREADOR DOC","ALMACEN","AGENTE","FORMA DE PAGO"]],body:[["APP",s.data.salida.AMACEN,s.data.salida.AGENTE,s.data.salida.FPAGO]]}),l.autoTable({startX:10,startY:80,theme:"striped",styles:{cellPadding:.6,fontSize:8},head:[["ARTICULO","CAJAS","U.X CAJA","CANTIDAD","DESCRIPCION"]],body:F}),l.setFontSize(11),l.text("TOTAL CAJAS:",10,200,"left"),l.text(_e.toString(),40,200,"left"),l.text("TOTAL UNIDDADES:",60,200,"left"),l.text(ge.toString(),100,200,"left"),l.setFontSize(8),l.text("Debo(emos) y pagare(mos) incondicionalmente por este pagare a la order de GRUPO VIZCARRA, en la ciudad de Mexico,",10,210,"left"),l.text("la cantidad de el valor recibido a mi(nuestra) entera satisfaccion",10,215,"left"),l.text("Este pagare forma parte de una serie numerica del 1 al y 9 y todos estos estan sujetos a la condicion, de que al no pagarse cualquiera de ellos a su",10,220,"left"),l.text("vencimiento sean exigibles todos los que le sigan en numero, ademas de los ya vencidosm desde la fecha de su vencimiento de el presente documento",10,225,"left"),l.text("hasta el dia de su liquidacion, causaran intereses moratorios al tipo del % mensual en esta ciudad justamente con el principal",10,230,"left"),l.setFontSize(15),l.text("______________",31,248,"center"),l.text("AUTORIZO",20,254,"left"),l.text("______________",85,248,"center"),l.text("CHOFER",75,254,"left"),l.text("______________",140,248,"center"),l.text("RECIBIO",130,254,"left"),l.text("______________",168,248,"left"),l.text("FECHA Y HORA",168,254,"left"),l.setFontSize(9),l.text("UNA VEZ ENTREGADA LA MERCANCIA EN LA FLETERA O DOMICILIO QUE INDIQUE EL CLIENTE ",10,260,"left"),l.text("LLUVIA LIGHT SA DE CV NO ES RESPONSABLE POR PEDIDAS TOTALES, PARCIALES ",10,265,"left"),l.text("O CUALQUIER TIPO DE DANO EN LA MERCANCIA DE ESTE DOCUMENTO ",10,270,"left"),l.setFont("helvetica","bold"),l.setFontSize(12),l.text("NO SE ACEPTAN CAMBIOS NI DEVOLUCIONES",10,280,"left"),l.setFontSize(25),l.setFont("helvetica","bold"),l.text("GRUPO VIZCARRA",105,10,"center"),l.addImage(Pe,"PNG",167,255)}),l.save(s.data.salida.FACTURA)}else console.error("No se logro imprimir la factura")};return Qe(()=>_.value=$.value.columns.map(t=>t.name)),Re(),W(),(t,o)=>(p(),R(Q,null,[e(H,{class:"full-width"},{default:a(()=>[e(D,{class:"row justify-between"},{default:a(()=>[i("div",null,[dt,i("div",rt,v(d.value.from.alias),1)]),i("div",ct,[ut,i("div",pt,v(d.value.id),1)]),i("div",vt,[mt,i("div",ft,v(d.value.created_by.nick),1)])]),_:1}),e(Y),h.value?(p(),S(D,{key:0,class:"text-center"},{default:a(()=>[e(Ke,{size:"50px",color:"purple"})]),_:1})):(p(),R(Q,{key:1},[e(D,{horizontal:"",class:"row"},{default:a(()=>[e(D,{class:"col"},{default:a(()=>[i("div",null,v(c.value.name),1),i("div",_t,v(I(z)(I(Ee).updated_at).format("YYYY-MM-DD hh:mm A")),1),d.value.notes?(p(),R("div",gt,[e(Z,{name:"info",color:"pink-5",size:"20px"}),O(v(d.value.notes),1)])):w("",!0)]),_:1}),c.value&&c.value.id>6?(p(),S(D,{key:0},{default:a(()=>[bt,i("div",yt,v(d.value.invoice),1)]),_:1})):w("",!0),c.value&&c.value.id>9?(p(),S(D,{key:1},{default:a(()=>[xt,i("div",ht,v(d.value.invoice),1)]),_:1})):w("",!0),c.value&&c.value.id>1?(p(),S(ee,{key:2,class:"col",align:"right"},{default:a(()=>[c.value&&c.value.id>6?(p(),S(x,{key:0,color:"pink-6",icon:"qr_code",dense:"",onClick:Ve})):w("",!0),c.value&&c.value.id>6?(p(),S(x,{key:1,color:"pink-6",icon:"list",dense:"",onClick:o[0]||(o[0]=s=>pe(r.value))})):w("",!0),c.value&&c.value.id>2?(p(),S(x,{key:2,color:"indigo-10",icon:"print",dense:""},{default:a(()=>[e(oe,{class:"bg-grey-1 text-indigo-10",style:{"min-width":"250px"}},{default:a(()=>[e(ke,{onSelected:Oe})]),_:1})]),_:1})):w("",!0),c.value&&c.value.id==2?(p(),S(x,{key:3,color:"positive",icon:"start",dense:"",label:"Iniciar Surtido",onClick:we})):w("",!0),c.value&&c.value.id==6?(p(),S(x,{key:4,color:"pink",icon:"start",dense:"",label:"Emitir Salida",onClick:Le})):w("",!0)]),_:1})):w("",!0)]),_:1}),e(Y),e(Xe,{modelValue:y.value,"onUpdate:modelValue":o[1]||(o[1]=s=>y.value=s),class:"text-pink-5",dense:"","no-caps":""},{default:a(()=>[e(ye,{name:"log",label:"Log"}),e(ye,{name:"basket",label:"Productos"})]),_:1},8,["modelValue"]),e(We,{modelValue:y.value,"onUpdate:modelValue":o[4]||(o[4]=s=>y.value=s),animated:""},{default:a(()=>[e(xe,{name:"log"},{default:a(()=>[e(be,null,{default:a(()=>[(p(!0),R(Q,null,se(U.value,s=>(p(),S(ne,{key:s.id},{default:a(()=>[e(q,{avatar:""},{default:a(()=>[O(v(s.id),1)]),_:2},1024),e(q,null,{default:a(()=>[O(v(s.name),1)]),_:2},1024),e(q,null,{default:a(()=>[O(v(s.pivot.details.responsable),1)]),_:2},1024),e(q,null,{default:a(()=>[O("de "+v(I(z)(s.pivot.created_at).format("h:mm a"))+" a "+v(I(z)(s.pivot.updated_at).format("h:mm a")),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(xe,{name:"basket"},{default:a(()=>[k.value.length?(p(),S(re,{key:0,"row-key":"id",flat:"",rows:k.value,columns:$.value.columns,pagination:$.value.pagination,filter:$.value.filter,"visible-columns":_.value},{top:a(()=>[i("div",kt,[i("div",At,[i("span",Ct,[e(x,{color:"pink-5",icon:"sync",onClick:W,round:"",dense:"",flat:""}),O(" Productos: "+v(k.value.length),1)]),O(", "),i("span",St,"Piezas: "+v(I(ae)),1)]),e(ce,{dense:"",modelValue:$.value.filter,"onUpdate:modelValue":o[2]||(o[2]=s=>$.value.filter=s),placeholder:"Buscar","input-class":"text-uppercase",color:"pink-5"},{append:a(()=>[e(Z,{name:"search"})]),_:1},8,["modelValue"]),e(x,{color:"secondary",icon:"fas fa-eye","no-caps":""},{default:a(()=>[e(oe,{style:{"min-width":"200px"}},{default:a(()=>[e(be,null,{default:a(()=>[(p(!0),R(Q,null,se($.value.columns,(s,P)=>J((p(),S(ne,{tag:"label",key:P},{default:a(()=>[e(q,null,{default:a(()=>[e(te,null,{default:a(()=>[O(v(s.label),1)]),_:2},1024),e(te,{caption:""},{default:a(()=>[O(v(s.coldesc),1)]),_:2},1024)]),_:2},1024),e(q,{side:"",top:""},{default:a(()=>[e(ze,{color:"pink-5",modelValue:_.value,"onUpdate:modelValue":o[3]||(o[3]=N=>_.value=N),val:s.name},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024)),[[Ae]])),128))]),_:1})]),_:1})]),_:1})])]),_:1},8,["rows","columns","pagination","filter","visible-columns"])):(p(),R("div",Et,"Nada por aqui"))]),_:1})]),_:1},8,["modelValue"])],64))]),_:1}),e(B,{modelValue:f.value.state,"onUpdate:modelValue":o[5]||(o[5]=s=>f.value.state=s)},{default:a(()=>[e(H,null,{default:a(()=>[e(D,{class:"text-h6 text-center"},{default:a(()=>[O(v(d.value.id)+" - "+v(d.value.from.alias),1)]),_:1}),e(Y),e(D,{class:"text-center"},{default:a(()=>[wt,i("div",Dt,v(f.value.key),1)]),_:1}),e(Y),e(D,{align:"center"},{default:a(()=>[e(x,{color:"indigo-10",icon:"print"},{default:a(()=>[e(oe,null,{default:a(()=>[e(ke,{onSelected:$e})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(B,{modelValue:V.value.state,"onUpdate:modelValue":o[7]||(o[7]=s=>V.value.state=s)},{default:a(()=>[e(H,null,{default:a(()=>[e(D,{class:"row items-start"},{default:a(()=>[e(Ce,{icon:"warning",color:"orange-14","text-color":"white"}),It]),_:1}),e(D,null,{default:a(()=>[e(K,{modelValue:g.value.val,"onUpdate:modelValue":o[6]||(o[6]=s=>g.value.val=s),options:g.value.opts,label:"Chofer",filled:"","option-label":"complete_name"},null,8,["modelValue","options"])]),_:1}),e(ee,{align:"right"},{default:a(()=>[J(e(x,{flat:"",label:"Cancelar",color:"primary","no-caps":""},null,512),[[ie]]),e(x,{flat:"",label:"Continuar",color:"primary",onClick:Ie,"no-caps":"",disable:g.value.val==null},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(B,{modelValue:n.value.state,"onUpdate:modelValue":o[9]||(o[9]=s=>n.value.state=s),persistent:""},{default:a(()=>[e(H,{style:{width:"400px"}},{default:a(()=>[e(D,{class:"row items-center"},{default:a(()=>[e(K,{modelValue:u.value.val,"onUpdate:modelValue":o[8]||(o[8]=s=>u.value.val=s),options:u.value.opts,label:"SELECCIONA SURTIDOR","option-label":"complete_name",filled:"",multiple:"",counter:"","max-values":"4",hint:"Maximo 4 colaboradores",style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),e(ee,{align:"right"},{default:a(()=>[J(e(x,{flat:"",label:"Cancel",color:"primary"},null,512),[[ie]]),e(x,{flat:"",label:"Continuar",color:"primary",onClick:De,disable:u.value.val.length==0},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},$t={class:"text-h6"},Ot={class:"row q-mt-md"},Rt={class:"q-ml-sm text-h6"},Lt={__name:"TableReport",props:{rows:{type:Array,default:[]},name:{type:String,default:""},type:{type:String,default:""}},emits:["cardResumeActived"],setup(G,{emit:A}){const E=G;ue();const b=X(),u=m({state:!1,action:null}),g=m({columns:[{name:"ID",field:"ID",label:"ID",align:"center"},{name:"code",field:"CODIGO",label:"Codigo",align:"center",sortable:!0},{name:"desc",field:"DESCRIPCION",label:"Descripcion",align:"left"},{name:"stockcedis",field:"CEDIS",label:"Stock (CEDIS)",align:"center",sortable:!0},{name:"stockpan",field:"PANTACO",label:"Stock (PAN)",align:"center",sortable:!0}],filter:""}),d={pndcs:{l:"Habilitar todo",c:"indigo-13",desc:"Los productos en esta lista se habilitaran y podran ser solicitados por cuaqluier tienda."},pdss:{l:"Deshabilitar todo",c:"pink-13",desc:"Los productos en esta lista se deshabilitaran y no podran ser solicitados."}},h=m(E.rows),U=m(E.name),y=m(E.type),c=L(()=>y.value?d[y.value]:{l:"",c:""}),k=()=>{const f=d[y.value];u.value.action=f,u.value.state=!0},C=async()=>{b.loading.show({message:"Espera..."});const f=await T.massiveAction({action:y.value});console.log(f),f.status==200?(f.data,u.value.state=!1,u.value.action=null,b.loading.hide(),b.notify({position:"center",color:"positive",icon:"done"}),A("cardResumeActived")):(console.error(f.data),alert(`Error ${f.status}: ${f.data.msg}`))},V=(f,n,r)=>{console.log(f),console.log(n),console.log(r),console.log(y.value)};return(f,n)=>(p(),R(Q,null,[e(re,{"row-key":"ID",rows:h.value,columns:g.value.columns,filter:g.value.filter,onRowClick:V},{top:a(()=>[i("div",$t,v(U.value),1),i("div",Ot,[e(x,{color:I(c).c,icon:"warning",label:I(c).l,onClick:k},null,8,["color","label"]),e(ce,{modelValue:g.value.filter,"onUpdate:modelValue":n[0]||(n[0]=r=>g.value.filter=r),dense:"",type:"text",icon:"search",label:"Buscar"},{prepend:a(()=>[e(Z,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter"]),e(B,{modelValue:u.value.state,"onUpdate:modelValue":n[1]||(n[1]=r=>u.value.state=r),persistent:""},{default:a(()=>[e(H,null,{default:a(()=>[e(D,{class:"row items-center"},{default:a(()=>[e(Ce,{icon:"warning",color:u.value.action.c,"text-color":"white"},null,8,["color"]),i("span",Rt,v(u.value.action.l),1)]),_:1}),e(D,null,{default:a(()=>[O(v(u.value.action.desc),1)]),_:1}),e(ee,{align:"right"},{default:a(()=>[J(e(x,{flat:"",label:"cancelar",color:"primary"},null,512),[[ie]]),e(x,{flat:"",label:"continuar",color:"primary",onClick:C})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Ut={key:0,class:"bg-negative text-white q-pa-md q-mb-md"},Pt=i("div",{class:"text-warning text-bold"},"Los siguientes folios tienen errores que no permiten ser listados en la tabla.",-1),Nt={class:"text-h6"},qt=i("div",{class:"text--2"},"Errores comunes: Sin log, Sin fecha, Estatus desconocido",-1),Tt={class:"row q-mb-md items-start justify-around"},Qt={class:"text-left"},Ft={class:"text-h5"},Mt={class:"text--2"},zt={class:"full-width row items-center"},Gt={class:"col text-h6 text-dark"},Bt={__name:"AdminDashboard",emits:["reloadDashboard"],setup(G,{emit:A}){de(),Se();const E=ue(),b=X(),u=["text-grey-5 text-bold","text-bold text-h6 text-red","text-indigo","4","5","text-bold text-pink-7","text-orange-8","8","text-primary","text-positive"],g=m({columns:[{name:"id",label:"Folio",field:"id",align:"center",sortable:!0},{name:"state",label:"Estado",field:n=>n.log.length==1?n.log[0].name:n.log[n.log.length-1].name,align:"left",sortable:!0,sort:(n,r,_,$)=>parseInt(_._status)-parseInt($._status),classes:n=>u[n._status-1]},{name:"laststate",label:"Ultima actividad",field:n=>z(n.log.find(r=>r.id==n.status.id).pivot.updated_at).format("YYYY-MM-DD hh:mm A"),align:"left"},{name:"from",label:"Sucursal",field:n=>n.from.name.toUpperCase(),align:"left",sortable:!0},{name:"to",label:"Destino",field:n=>n.to.name.toUpperCase(),align:"left",sortable:!0},{name:"notes",label:"Notas",field:n=>n.notes,align:"left",classes:n=>n.notes?"text-orange text-bold":""},{name:"tmodels",label:"Modelos",field:n=>n.products_count,align:"center",sortable:!0},{name:"invoice",label:"Salida",field:n=>{var r;return(r=n.invoice)!=null?r:null},align:"center",classes:"text-bold"},{name:"entry",label:"Entrada",field:n=>{var r;return(r=n.invoice_received)!=null?r:null},align:"center",classes:"text-bold"}],filter:"",pagination:{sortBy:"desc",descending:!1,rowsPerPage:20}}),d=m({state:!1,title:"",data:null,name:null,type:null}),h=m({state:!1,head:null,block:!0}),U=L(()=>E.ordersSize),y=L(()=>E.ordersok),c=L(()=>E.orderserrors),k=L(()=>E.resume),C=async(n,r,_)=>{h.value.head=r,h.value.state=!0},V=async n=>{b.loading.show({message:"cargando..."+n});const r=await T.report(n);console.log(r.data),d.value.data=r.data.rows,d.value.name=r.data.name,d.value.type=n,d.value.state=!0,b.loading.hide()},f=()=>{d.value.state=!1,d.state=!1,A("reload")};return(n,r)=>(p(),S(Ge,{padding:"",class:"bg-grey-2"},{default:a(()=>[I(c).length?(p(),R("div",Ut,[Pt,i("div",Nt,v(I(c).map(_=>_.id).join("id")),1),qt])):w("",!0),i("div",Tt,[(p(!0),R(Q,null,se(I(k),_=>(p(),S(x,{stack:"","no-caps":"",class:"q-py-md",key:_.key,onClick:$=>V(_.key),color:_.total==0?"teal-10":"pink-13",disabled:_.total==0},{default:a(()=>[i("div",Qt,[i("div",Ft,v(_.total),1),i("div",Mt,v(_.name),1)])]),_:2},1032,["onClick","color","disabled"]))),128))]),e(re,{flat:"",bordered:"","row-key":"id",rows:I(y),columns:g.value.columns,filter:g.value.filter,pagination:g.value.pagination,onRowClick:C},{top:a(()=>[i("div",zt,[i("div",Gt,"Pedidos: "+v(I(U)),1),e(ce,{dense:"",modelValue:g.value.filter,"onUpdate:modelValue":r[0]||(r[0]=_=>g.value.filter=_),"input-class":"text-uppercase",placeholder:"Buscar",color:"pink-5"},{append:a(()=>[e(Z,{name:"search"})]),_:1},8,["modelValue"])])]),_:1},8,["rows","columns","filter","pagination"]),e(B,{"full-width":"",modelValue:h.value.state,"onUpdate:modelValue":r[3]||(r[3]=_=>h.value.state=_),persistent:h.value.block,"no-esc-dismiss":h.value.block,"no-backdrop-dismiss":h.value.block},{default:a(()=>[e(Vt,{head:h.value.head,onLoaded:r[1]||(r[1]=_=>h.value.block=!1),onLoading:r[2]||(r[2]=_=>h.value.block=!0)},null,8,["head"])]),_:1},8,["modelValue","persistent","no-esc-dismiss","no-backdrop-dismiss"]),e(B,{modelValue:d.value.state,"onUpdate:modelValue":r[4]||(r[4]=_=>d.value.state=_)},{default:a(()=>[e(Lt,{rows:d.value.data,name:d.value.name,type:d.value.type,onCardResumeActived:f},null,8,["rows","name","type"])]),_:1},8,["modelValue"])]),_:1}))}};const jt=i("div",{class:"text-bold"},"Dashboard ",-1),Yt={class:"row"},Ht={class:"col row"},ta={__name:"DashboardLyt",setup(G){const A=de(),E=Se(),b=ue(),u=X(),g=m([{id:0,alias:"Todas"},{id:1,alias:"CEDIS",_state:1},{id:2,alias:"SP1",_state:1}]),d=m([{id:"day",label:"Hoy"},{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"C",label:"otra ...",disable:!0}]),h=["p2","P2","p3","P3","bol","BOL","sap","SAP"],U=m(null),y=m(null),c=m({from:z(Date.now()).startOf("day"),to:z(Date.now()).startOf("day")}),k=async()=>{var $;u.loading.show({message:"Cargado vista..."}),console.log("%cIniciando MainLayout...","font-size:2em;color:orange;");let V=($=A.query.v)!=null?$:"day",f=d.value.findIndex(ae=>ae.id==V),n=f>=0?f:0;y.value=d.value[n],c.value.from=z(Date.now()).startOf(y.value.id);let r=A.query.d&&h.includes(A.query.d)?A.query.d:"all";console.log(r);const _=await T.index(y.value.id,r);console.log(_),b.fillOrders(_.orders),b.fillResume(_.resume),b.fillPrinters(_.printers),U.value=g.value[0],console.log("%cMainLayout listo!!","font-size:2em;color:orange;"),u.loading.hide()},C=V=>{let f=A.query.d&&h.includes(A.query.d)?A.query.d:"all";E.push(`/dashboard?v=${V.id}&d=${f}`)};return L(()=>c.value.from.format("YYYY/MM/DD")),L(()=>c.value.to.format("YYYY/MM/DD")),Me(()=>A.query,()=>{k()}),k(),document.title="Dashboard",(V,f)=>(p(),S(Be,{view:"lHh Lpr lFf"},{default:a(()=>[e(Ye,{bordered:"",class:"bg-yellow text-dark"},{default:a(()=>[e(je,{class:"row justify-between items-center"},{default:a(()=>[jt,i("div",Yt,[e(x,{color:"dark",round:"",unelevated:"",flat:"",icon:"sync",onClick:k}),i("div",Ht,[e(K,{class:"col",dense:"",filled:"",label:"Vista",modelValue:y.value,"onUpdate:modelValue":[f[0]||(f[0]=n=>y.value=n),C],options:d.value},null,8,["modelValue","options"]),y.value.id=="C"?(p(),S(x,{key:0,unelevated:"",color:"pink-5",icon:"fas fa-calendar-day",dense:""})):w("",!0)])])]),_:1})]),_:1}),e(He,null,{default:a(()=>[e(Bt,{onReload:k})]),_:1})]),_:1}))}};export{ta as default};
