import{Q as l}from"./QTable.3c8a9cdd.js";import{Q as r}from"./QPage.3c9deba9.js";import{A as c}from"./AssistApi.9aa0c0ab.js";import{u as m}from"./use-quasar.4386f8b5.js";import{r as s,a as A,d as u,w as d,ar as p,e as f}from"./index.a786ea1c.js";import"./QSeparator.8014d1ef.js";import"./QItem.982b9061.js";import"./QList.e7e92840.js";import"./use-key-composition.8298a578.js";import"./uid.42677368.js";import"./axios.44e3cd65.js";import"./format.83a20244.js";import"./rtl.4f11f6c7.js";import"./use-timeout.c408bef4.js";const w={__name:"Compare",setup(T){const o=m();p();const n=s({columns:[{name:"invoice",label:"Factura",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.FACTURA}},{name:"entrie",label:"Entrada",field:e=>{var a;return(a=e.entries[0])==null?void 0:a.FACTURA}},{name:"workpoint",label:"Sucursal",field:e=>e.store_name},{name:"reference",label:"Referencia",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.REFFAC}},{name:"warehouse",label:"Almacen",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.ALMFAC}},{name:"hour",label:"Hora",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.HORFAC}},{name:"totales",label:"Total",field:e=>{var a,i;return((a=e.invoices[0])==null?void 0:a.TOTFAC)==((i=e.entries[0])==null?void 0:i.TOTFRE)?"IGUAL":"DIFERENTE"}},{name:"articulos",label:"Articulos",field:e=>{var a,i;return((a=e.invoices[0])==null?void 0:a.ARTICULOS)==((i=e.entries[0])==null?void 0:i.ARTICULOS)?"IGUAL":"DIFERENTE"}},{name:"cantidad",label:"Cantidades",field:e=>{var a,i;return((a=e.invoices[0])==null?void 0:a.CANTIDAD)==((i=e.entries[0])==null?void 0:i.CANTIDAD)?"IGUAL":"DIFERENTE"}}]}),t=s([]);return(async()=>{o.loading.show({message:"Obteniendo Facturas"});const e=await c.getInvoices();e.status==200&&(console.log(e.data),t.value=e.data,o.loading.hide())})(),(e,a)=>(A(),u(r,{padding:""},{default:d(()=>[f(l,{title:"SALIDAS VS ENTRADAS",rows:t.value,columns:n.value.columns,"row-key":"FACTURA"},null,8,["rows","columns"])]),_:1}))}};export{w as default};
