import{Q as I}from"./QSeparator.8014d1ef.js";import{r as m,a as g,d as F,w as c,ar as _,h as R,t as h,e as a,Q as D,j as P}from"./index.a786ea1c.js";import{u as x,Q as T,a as k}from"./use-quasar.4386f8b5.js";import{Q}from"./QInput.294ae5db.js";import{Q as y}from"./QTable.3c8a9cdd.js";import{Q as G}from"./QDate.1e7f1479.js";import{Q as V,a as v}from"./QCard.4dff5d9f.js";import{Q as H}from"./QCardActions.5398980a.js";import{Q as B}from"./QPage.3c9deba9.js";import{A as N}from"./AssistApi.9aa0c0ab.js";import{d as $}from"./dayjs.min.25545ff6.js";import{E as j}from"./exceljs.min.9e24d01d.js";import"./QItem.982b9061.js";import"./use-key-composition.8298a578.js";import"./uid.42677368.js";import"./format.83a20244.js";import"./rtl.4f11f6c7.js";import"./use-timeout.c408bef4.js";import"./QList.e7e92840.js";import"./axios.44e3cd65.js";import"./_commonjsHelpers.88e99c8f.js";const Y={class:"text-center text-h6 text-bold"},M={class:"row"},q={class:"q-pa-md"},W=R("div",{class:"q-pb-sm"},null,-1),De={__name:"Report",setup(J){const E=x();_();const t=m({workpoints:[],cedis:null,val:null}),C=m(!1),s=m(null),u=m({salidas:null,entradas:null}),A=m({rows:[],filter:""}),f=async()=>{let r=new Date,e=$(r).format("YYYY/MM/DD");s.value=e,console.log(e);const o=await N.getStores();o.status==200?(console.log(o.data),t.value.workpoints=o.data,t.value.cedis=o.data.filter(l=>l.id==1)[0]):console.log(o)},O=async()=>{A.value.rows=[],E.loading.show({message:"Obteniendo datos"});let r={cedis:t.value.cedis,sucursal:t.value.val,fechas:s.value};console.log(r);const e=await N.getData(r);console.log(e),e.status==200?(console.log(e.data),u.value.salidas=e.data.salidas,u.value.entradas=e.data.entradas,E.loading.hide(),L()):alert(e)},L=()=>{E.loading.show({message:"Haciendo Match"}),u.value.entradas.sort((e,o)=>o.ARTICULOS!==e.ARTICULOS?o.ARTICULOS.localeCompare(e.ARTICULOS):o.SALIDA.localeCompare(e.SALIDA)),u.value.salidas.sort((e,o)=>o.ARTICULOS!==e.ARTICULOS?o.ARTICULOS.localeCompare(e.ARTICULOS):o.FACTURA.localeCompare(e.FACTURA));const r=new Set;u.value.entradas.forEach(e=>{const o=u.value.salidas.find((l,i)=>{const d=l.ARTICULOS===e.ARTICULOS&&"FAC "+l.FACTURA===e.SALIDA;return d&&r.add(i),d});if(o){const l=e.CANTIDAD*e.PRECIO,i=o.CANTIDAD*o.PRECIO,d=o.ARTICULOS===e.ARTICULOS,n=o.CANTIDAD===e.CANTIDAD,w=o.PRECIO===e.PRECIO,b=i===l;A.value.rows.push({SALIDA:o.FACTURA,FECHA:o.FECHAYHORA,REFERENCIA:o.REFERENCIA,CLIENTE:o.NOMBRECLIENTE,CODIGO:o.ARTICULOS,DESCRIPCION:o.DESCRIPCION,CANTIDAD:Number(o.CANTIDAD).toFixed(2),PRECIO:Number(o.PRECIO).toFixed(2),TOTAL:Number(i).toFixed(2),codigoIGUAL:d?"verdadero":"falso",CANTIDADIGUAL:n?"verdadero":"falso",PRECIOIGUAL:w?"verdadero":"falso",TOTALIGUAL:b?"verdadero":"falso",ENTRADA:e.FACTURA,ENTRADA_SALIDA:e.SALIDA,ENTRADA_FECHA:e.FECHA,ENTRADA_CODIGO:e.ARTICULOS,ENTRADA_DESCRIPCION:e.DESCRIPCION,ENTRADA_CANTIDAD:Number(e.CANTIDAD).toFixed(2),ENTRADA_PRECIO:Number(e.PRECIO).toFixed(2),ENTRADA_TOTAL:Number(l).toFixed(2)});const p=u.value.salidas.indexOf(o);p>-1&&u.value.salidas.splice(p,1)}else{const l=e.CANTIDAD*e.PRECIO;A.value.rows.push({SALIDA:"",FECHA:"",REFERENCIA:"",CLIENTE:"",CODIGO:"",DESCRIPCION:"",CANTIDAD:"",PRECIO:"",TOTAL:"",codigoIGUAL:!1,CANTIDADIGUAL:!1,PRECIOIGUAL:!1,TOTALIGUAL:!1,ENTRADA:e.FACTURA,ENTRADA_SALIDA:e.SALIDA,ENTRADA_FECHA:e.FECHA,ENTRADA_CODIGO:e.ARTICULOS,ENTRADA_DESCRIPCION:e.DESCRIPCION,ENTRADA_CANTIDAD:Number(e.CANTIDAD).toFixed(2),ENTRADA_PRECIO:Number(e.PRECIO).toFixed(2),ENTRADA_TOTAL:Number(l).toFixed(2)})}}),u.value.salidas.forEach((e,o)=>{if(!r.has(o)){const l=e.CANTIDAD*e.PRECIO;A.value.rows.push({SALIDA:e.FACTURA,FECHA:e.FECHAYHORA,REFERENCIA:e.REFERENCIA,CLIENTE:e.NOMBRECLIENTE,CODIGO:e.ARTICULOS,DESCRIPCION:e.DESCRIPCION,CANTIDAD:Number(e.CANTIDAD).toFixed(2),PRECIO:Number(e.PRECIO).toFixed(2),TOTAL:Number(l).toFixed(2),codigoIGUAL:!1,CANTIDADIGUAL:!1,PRECIOIGUAL:!1,TOTALIGUAL:!1,ENTRADA:"",ENTRADA_SALIDA:"",ENTRADA_FECHA:"",ENTRADA_CODIGO:"",ENTRADA_DESCRIPCION:"",ENTRADA_CANTIDAD:"",ENTRADA_PRECIO:"",ENTRADA_TOTAL:""})}}),E.loading.hide()},S=async()=>{console.log(s.value),C.value=!1,t.value.val=null,A.value.rows=[]},U=async()=>{const r=new j.Workbook,e=r.addWorksheet(`Comparativo ${t.value.val.name}`);console.log(),e.addTable({name:"Comparativo",ref:"A1",headerRow:!0,totalsRow:!1,style:{showRowStripes:!0},columns:Object.keys(A.value.rows[0]).map(l=>({name:l,filterButton:!0})),rows:A.value.rows.map(l=>Object.values(l))}),e.columns.forEach(l=>{let i=0;l.eachCell({includeEmpty:!0},d=>{const n=d.value?d.value.toString().length:10;n>i&&(i=n)}),l.width=i<10?10:i}),(async()=>{const l=await r.xlsx.writeBuffer(),i=new Blob([l],{type:"application/octet-stream"}),d=URL.createObjectURL(i),n=document.createElement("a");n.href=d,n.download=`Comparativo ${t.value.val.name} ${typeof s.value=="object"?`Del ${s.value.from} a ${s.value.to}`:s.value}.xlsx`,document.body.appendChild(n),n.click(),document.body.removeChild(n)})()};return f(),(r,e)=>(g(),F(B,{padding:""},{default:c(()=>[R("div",Y,"Reporte "+h(typeof s.value=="object"?`Del ${s.value.from} a
      ${s.value.to}`:s.value),1),a(I,{spaced:"",inset:"",vertical:"",dark:""}),R("div",M,[a(D,{color:"primary",icon:"event",onClick:e[0]||(e[0]=o=>C.value=!C.value),flat:"",rounded:""}),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(T,{modelValue:t.value.cedis,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.cedis=o),options:t.value.workpoints,label:"Cedis",class:"col","option-label":"name",disable:!0,outlined:""},null,8,["modelValue","options"]),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(T,{modelValue:t.value.val,"onUpdate:modelValue":[e[2]||(e[2]=o=>t.value.val=o),O],options:t.value.workpoints,label:"Sucursal",class:"col","option-label":"name",outlined:"","option-disable":o=>o.id==1},null,8,["modelValue","options","option-disable"])]),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(y,{title:"Comparativo",rows:A.value.rows,filter:A.value.filter},{"top-right":c(()=>[a(Q,{borderless:"",dense:"",debounce:"300",modelValue:A.value.filter,"onUpdate:modelValue":e[3]||(e[3]=o=>A.value.filter=o),placeholder:"Buscar"},{append:c(()=>[a(P,{name:"search"})]),_:1},8,["modelValue"]),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(D,{color:"primary",icon:"ios_share",onClick:U,flat:"",disable:A.value.rows.length<=0},null,8,["disable"])]),_:1},8,["rows","filter"]),a(k,{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=o=>C.value=o)},{default:c(()=>[a(V,{class:"my-card"},{default:c(()=>[a(v,null,{default:c(()=>[R("div",q,[W,a(G,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=o=>s.value=o),range:"",minimal:""},null,8,["modelValue"])])]),_:1}),a(v,null,{default:c(()=>[a(H,{align:"right"},{default:c(()=>[a(D,{flat:"",icon:"close",color:"negative",onClick:e[5]||(e[5]=o=>C.value=!C.value)}),a(D,{flat:"",icon:"check",color:"positive",onClick:S})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{De as default};
