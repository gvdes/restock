import{Q as k,a as d}from"./QTd.22667a6c.js";import{r as s,o as h,b as P,w as o,u as V,f as w,d as a,aF as m,t as p,h as f,e as A,aC as x}from"./index.767d3255.js";import{u as S,Q as N,c as B}from"./QTable.7f8932d3.js";import{a as D,b as g,Q as R,c as T}from"./QInput.be1c204b.js";import{Q as U}from"./QPage.b4f3eebb.js";import{C as I}from"./ClosePopup.5d030b49.js";import"./axios.10c2b4ae.js";import{R as v}from"./RestockApi.b0d544bf.js";import"./rtl.b38b1c0a.js";const $=w("div",{class:"text-h6"},"Notas",-1),M={__name:"Automate",setup(q){const n=S();V();const _=s([]),u=s(!1),r=s(!1),i=s(""),c=s(null);let b=s({cols:[{name:"id",label:"ID",align:"center"},{name:"alias",label:"ALIAS",align:"center"},{name:"name",label:"SUCURSAL",align:"left"},{name:"actions",label:"Actions",align:"left"}]});const y=async()=>{n.loading.show({message:"Obteniendo Sucursales"});const t=await v.suc();t.status==200?(console.log(t.data),_.value=t.data,n.loading.hide()):alert("Problemas con la obtencion de datos")},C=t=>{r.value=!0,c.value=t},Q=async t=>{u.value=!0,n.loading.show({message:"Creando Pedido"});let l={_workpoint_from:c.value,_workpoint_to:1,_type:2,notes:i.value};const e=await v.createAutomate(l);e.status==200?(console.log(e.data),u.value=!1,n.loading.hide(),n.notify({type:"positive",message:`Pedido ${e.data.order.id} creado`,position:"center"}),i.value="",c.value=null,r.value=!1):alert("Nosegeneroelpedido")};return y(),(t,l)=>(h(),P(U,{padding:""},{default:o(()=>[w("div",null,[a(N,{title:"Sucursales",rows:_.value,"row-key":"id",columns:A(b).cols,pagination:{rowsPerPage:20}},{body:o(e=>[a(k,{props:e},{default:o(()=>[a(d,{key:"id",props:e},{default:o(()=>[m(p(e.row.id),1)]),_:2},1032,["props"]),a(d,{key:"alias",props:e},{default:o(()=>[m(p(e.row.alias),1)]),_:2},1032,["props"]),a(d,{key:"name",props:e},{default:o(()=>[m(p(e.row.name),1)]),_:2},1032,["props"]),a(d,{key:"actions",props:e},{default:o(()=>[a(f,{flat:"",rounded:"","icon-right":"arrow_circle_right",label:"Crear Pedido",color:"primary",onClick:L=>C(e.row.id),disable:u.value},null,8,["onClick","disable"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),a(B,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value=e),persistent:""},{default:o(()=>[a(D,{style:{"min-width":"350px"}},{default:o(()=>[a(g,null,{default:o(()=>[$]),_:1}),a(g,{class:"q-pt-none"},{default:o(()=>[a(R,{dense:"",modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),autofocus:""},null,8,["modelValue"])]),_:1}),a(T,{align:"right",class:"text-primary"},{default:o(()=>[x(a(f,{flat:"",label:"Cancel"},null,512),[[I]]),a(f,{flat:"",label:"Continuar",onClick:Q})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{M as default};
