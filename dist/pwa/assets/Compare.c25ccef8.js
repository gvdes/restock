import{a as t,u as r,Q as c}from"./QPage.a7345da3.js";import{A}from"./AssistApi.a6b5b94c.js";import{r as o,o as u,b as m,w as d,u as f,d as T}from"./index.2b3d8d3a.js";import"./rtl.ff96e2df.js";import"./axios.d46b4b71.js";const I={__name:"Compare",setup(p){const s=r();f();const l=o({columns:[{name:"invoice",label:"Factura",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.FACTURA}},{name:"entrie",label:"Entrada",field:e=>{var a;return(a=e.entries[0])==null?void 0:a.FACTURA}},{name:"workpoint",label:"Sucursal",field:e=>e.store_name},{name:"reference",label:"Referencia",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.REFFAC}},{name:"warehouse",label:"Almacen",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.ALMFAC}},{name:"hour",label:"Hora",field:e=>{var a;return(a=e.invoices[0])==null?void 0:a.HORFAC}},{name:"totales",label:"Total",field:e=>{var a,i;return((a=e.invoices[0])==null?void 0:a.TOTFAC)==((i=e.entries[0])==null?void 0:i.TOTFRE)?"IGUAL":"DIFERENTE"}},{name:"articulos",label:"Articulos",field:e=>{var a,i;return((a=e.invoices[0])==null?void 0:a.ARTICULOS)==((i=e.entries[0])==null?void 0:i.ARTICULOS)?"IGUAL":"DIFERENTE"}},{name:"cantidad",label:"Cantidades",field:e=>{var a,i;return((a=e.invoices[0])==null?void 0:a.CANTIDAD)==((i=e.entries[0])==null?void 0:i.CANTIDAD)?"IGUAL":"DIFERENTE"}}]}),n=o([]);return(async()=>{s.loading.show({message:"Obteniendo Facturas"});const e=await A.getInvoices();e.status==200&&(console.log(e.data),n.value=e.data,s.loading.hide())})(),(e,a)=>(u(),m(t,{padding:""},{default:d(()=>[T(c,{title:"SALIDAS VS ENTRADAS",rows:n.value,columns:l.value.columns,"row-key":"FACTURA"},null,8,["rows","columns"])]),_:1}))}};export{I as default};
