import{u as g,b as I,a as v,Q as F,c as _}from"./QTable.7f8932d3.js";import{r as E,o as h,b as P,w as c,u as x,f as T,t as k,d as a,h as R,Q as y}from"./index.767d3255.js";import{Q as G,a as Q,b as p,c as V}from"./QInput.be1c204b.js";import{Q as H}from"./QDate.62fb1d0b.js";import{Q as B}from"./QPage.b4f3eebb.js";import{A as N}from"./AssistApi.d49e53f7.js";import{d as $}from"./dayjs.min.25545ff6.js";import{E as j}from"./exceljs.min.9e24d01d.js";import"./rtl.b38b1c0a.js";import"./axios.10c2b4ae.js";import"./_commonjsHelpers.88e99c8f.js";const Y={class:"text-center text-h6 text-bold"},M={class:"row"},q={class:"q-pa-md"},W=T("div",{class:"q-pb-sm"},null,-1),re={__name:"Report",setup(J){const D=g();x();const t=E({workpoints:[],cedis:null,val:null}),C=E(!1),s=E(null),u=E({salidas:null,entradas:null}),A=E({rows:[],filter:""}),O=async()=>{let r=new Date,e=$(r).format("YYYY/MM/DD");s.value=e,console.log(e);const o=await N.getStores();o.status==200?(console.log(o.data),t.value.workpoints=o.data,t.value.cedis=o.data.filter(l=>l.id==1)[0]):console.log(o)},f=async()=>{A.value.rows=[],D.loading.show({message:"Obteniendo datos"});let r={cedis:t.value.cedis,sucursal:t.value.val,fechas:s.value};console.log(r);const e=await N.getData(r);console.log(e),e.status==200?(console.log(e.data),u.value.salidas=e.data.salidas,u.value.entradas=e.data.entradas,D.loading.hide(),L()):alert(e)},L=()=>{D.loading.show({message:"Haciendo Match"}),u.value.entradas.sort((e,o)=>o.ARTICULOS!==e.ARTICULOS?o.ARTICULOS.localeCompare(e.ARTICULOS):o.SALIDA.localeCompare(e.SALIDA)),u.value.salidas.sort((e,o)=>o.ARTICULOS!==e.ARTICULOS?o.ARTICULOS.localeCompare(e.ARTICULOS):o.FACTURA.localeCompare(e.FACTURA));const r=new Set;u.value.entradas.forEach(e=>{const o=u.value.salidas.find((l,i)=>{const d=l.ARTICULOS===e.ARTICULOS&&"FAC "+l.FACTURA===e.SALIDA;return d&&r.add(i),d});if(o){const l=e.CANTIDAD*e.PRECIO,i=o.CANTIDAD*o.PRECIO,d=o.ARTICULOS===e.ARTICULOS,n=o.CANTIDAD===e.CANTIDAD,U=o.PRECIO===e.PRECIO,w=i===l;A.value.rows.push({SALIDA:o.FACTURA,FECHA:o.FECHAYHORA,REFERENCIA:o.REFERENCIA,CLIENTE:o.NOMBRECLIENTE,CODIGO:o.ARTICULOS,DESCRIPCION:o.DESCRIPCION,CANTIDAD:Number(o.CANTIDAD).toFixed(2),PRECIO:Number(o.PRECIO).toFixed(2),TOTAL:Number(i).toFixed(2),codigoIGUAL:d?"verdadero":"falso",CANTIDADIGUAL:n?"verdadero":"falso",PRECIOIGUAL:U?"verdadero":"falso",TOTALIGUAL:w?"verdadero":"falso",ENTRADA:e.FACTURA,ENTRADA_SALIDA:e.SALIDA,ENTRADA_FECHA:e.FECHA,ENTRADA_CODIGO:e.ARTICULOS,ENTRADA_DESCRIPCION:e.DESCRIPCION,ENTRADA_CANTIDAD:Number(e.CANTIDAD).toFixed(2),ENTRADA_PRECIO:Number(e.PRECIO).toFixed(2),ENTRADA_TOTAL:Number(l).toFixed(2)});const m=u.value.salidas.indexOf(o);m>-1&&u.value.salidas.splice(m,1)}else{const l=e.CANTIDAD*e.PRECIO;A.value.rows.push({SALIDA:"",FECHA:"",REFERENCIA:"",CLIENTE:"",CODIGO:"",DESCRIPCION:"",CANTIDAD:"",PRECIO:"",TOTAL:"",codigoIGUAL:!1,CANTIDADIGUAL:!1,PRECIOIGUAL:!1,TOTALIGUAL:!1,ENTRADA:e.FACTURA,ENTRADA_SALIDA:e.SALIDA,ENTRADA_FECHA:e.FECHA,ENTRADA_CODIGO:e.ARTICULOS,ENTRADA_DESCRIPCION:e.DESCRIPCION,ENTRADA_CANTIDAD:Number(e.CANTIDAD).toFixed(2),ENTRADA_PRECIO:Number(e.PRECIO).toFixed(2),ENTRADA_TOTAL:Number(l).toFixed(2)})}}),u.value.salidas.forEach((e,o)=>{if(!r.has(o)){const l=e.CANTIDAD*e.PRECIO;A.value.rows.push({SALIDA:e.FACTURA,FECHA:e.FECHAYHORA,REFERENCIA:e.REFERENCIA,CLIENTE:e.NOMBRECLIENTE,CODIGO:e.ARTICULOS,DESCRIPCION:e.DESCRIPCION,CANTIDAD:Number(e.CANTIDAD).toFixed(2),PRECIO:Number(e.PRECIO).toFixed(2),TOTAL:Number(l).toFixed(2),codigoIGUAL:!1,CANTIDADIGUAL:!1,PRECIOIGUAL:!1,TOTALIGUAL:!1,ENTRADA:"",ENTRADA_SALIDA:"",ENTRADA_FECHA:"",ENTRADA_CODIGO:"",ENTRADA_DESCRIPCION:"",ENTRADA_CANTIDAD:"",ENTRADA_PRECIO:"",ENTRADA_TOTAL:""})}}),D.loading.hide()},S=async()=>{console.log(s.value),C.value=!1,t.value.val=null,A.value.rows=[]},b=async()=>{const r=new j.Workbook,e=r.addWorksheet(`Comparativo ${t.value.val.name}`);console.log(),e.addTable({name:"Comparativo",ref:"A1",headerRow:!0,totalsRow:!1,style:{showRowStripes:!0},columns:Object.keys(A.value.rows[0]).map(l=>({name:l,filterButton:!0})),rows:A.value.rows.map(l=>Object.values(l))}),e.columns.forEach(l=>{let i=0;l.eachCell({includeEmpty:!0},d=>{const n=d.value?d.value.toString().length:10;n>i&&(i=n)}),l.width=i<10?10:i}),(async()=>{const l=await r.xlsx.writeBuffer(),i=new Blob([l],{type:"application/octet-stream"}),d=URL.createObjectURL(i),n=document.createElement("a");n.href=d,n.download=`Comparativo ${t.value.val.name} ${typeof s.value=="object"?`Del ${s.value.from} a ${s.value.to}`:s.value}.xlsx`,document.body.appendChild(n),n.click(),document.body.removeChild(n)})()};return O(),(r,e)=>(h(),P(B,{padding:""},{default:c(()=>[T("div",Y,"Reporte "+k(typeof s.value=="object"?`Del ${s.value.from} a
      ${s.value.to}`:s.value),1),a(I,{spaced:"",inset:"",vertical:"",dark:""}),T("div",M,[a(R,{color:"primary",icon:"event",onClick:e[0]||(e[0]=o=>C.value=!C.value),flat:"",rounded:""}),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(v,{modelValue:t.value.cedis,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.cedis=o),options:t.value.workpoints,label:"Cedis",class:"col","option-label":"name",disable:!0,outlined:""},null,8,["modelValue","options"]),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(v,{modelValue:t.value.val,"onUpdate:modelValue":[e[2]||(e[2]=o=>t.value.val=o),f],options:t.value.workpoints,label:"Sucursal",class:"col","option-label":"name",outlined:"","option-disable":o=>o.id==1},null,8,["modelValue","options","option-disable"])]),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(F,{title:"Comparativo",rows:A.value.rows,filter:A.value.filter},{"top-right":c(()=>[a(G,{borderless:"",dense:"",debounce:"300",modelValue:A.value.filter,"onUpdate:modelValue":e[3]||(e[3]=o=>A.value.filter=o),placeholder:"Buscar"},{append:c(()=>[a(y,{name:"search"})]),_:1},8,["modelValue"]),a(I,{spaced:"",inset:"",vertical:"",dark:""}),a(R,{color:"primary",icon:"ios_share",onClick:b,flat:"",disable:A.value.rows.length<=0},null,8,["disable"])]),_:1},8,["rows","filter"]),a(_,{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=o=>C.value=o)},{default:c(()=>[a(Q,{class:"my-card"},{default:c(()=>[a(p,null,{default:c(()=>[T("div",q,[W,a(H,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=o=>s.value=o),range:"",minimal:""},null,8,["modelValue"])])]),_:1}),a(p,null,{default:c(()=>[a(V,{align:"right"},{default:c(()=>[a(R,{flat:"",icon:"close",color:"negative",onClick:e[5]||(e[5]=o=>C.value=!C.value)}),a(R,{flat:"",icon:"check",color:"positive",onClick:S})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{re as default};
