import{Q,a as d}from"./QTd.4498f859.js";import{r as s,o as h,b as A,w as l,u as P,f as w,d as a,aE as p,t as m,h as f,e as V,aA as x}from"./index.a13ff6e6.js";import{a as S,u as N,Q as B,x as D}from"./QPage.d9ae1c29.js";import{R as g,a as R,b as v,Q as T,c as U}from"./QCardActions.48ef1265.js";import{C as I}from"./ClosePopup.8b04e9cf.js";import"./axios.728dd142.js";import"./rtl.b3ca904d.js";const $=w("div",{class:"text-h6"},"Notas",-1),J={__name:"Automate",setup(q){const n=N();P();const _=s([]),u=s(!1),i=s(!1),r=s(""),c=s(null);let b=s({cols:[{name:"id",label:"ID",align:"center"},{name:"alias",label:"ALIAS",align:"center"},{name:"name",label:"SUCURSAL",align:"left"},{name:"actions",label:"Actions",align:"left"}]});const y=async()=>{n.loading.show({message:"Obteniendo Sucursales"});const o=await g.suc();o.status==200?(console.log(o.data),_.value=o.data,n.loading.hide()):alert("Problemas con la obtencion de datos")},k=o=>{i.value=!0,c.value=o},C=async o=>{u.value=!0,n.loading.show({message:"Creando Pedido"});let t={_workpoint_from:c.value,_workpoint_to:1,_type:2,notes:r.value};const e=await g.createAutomate(t);e.status==200?(console.log(e.data),u.value=!1,n.loading.hide(),n.notify({type:"positive",message:`Pedido ${e.data.order.id} creado`,position:"center"}),r.value="",c.value=null,i.value=!1):alert("Nosegeneroelpedido")};return y(),(o,t)=>(h(),A(S,{padding:""},{default:l(()=>[w("div",null,[a(B,{title:"Sucursales",rows:_.value,"row-key":"id",columns:V(b).cols,pagination:{rowsPerPage:20}},{body:l(e=>[a(Q,{props:e},{default:l(()=>[a(d,{key:"id",props:e},{default:l(()=>[p(m(e.row.id),1)]),_:2},1032,["props"]),a(d,{key:"alias",props:e},{default:l(()=>[p(m(e.row.alias),1)]),_:2},1032,["props"]),a(d,{key:"name",props:e},{default:l(()=>[p(m(e.row.name),1)]),_:2},1032,["props"]),a(d,{key:"actions",props:e},{default:l(()=>[a(f,{flat:"",rounded:"","icon-right":"arrow_circle_right",label:"Crear Pedido",color:"primary",onClick:L=>k(e.row.id),disable:u.value},null,8,["onClick","disable"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),a(D,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),persistent:""},{default:l(()=>[a(R,{style:{"min-width":"350px"}},{default:l(()=>[a(v,null,{default:l(()=>[$]),_:1}),a(v,{class:"q-pt-none"},{default:l(()=>[a(T,{dense:"",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),autofocus:""},null,8,["modelValue"])]),_:1}),a(U,{align:"right",class:"text-primary"},{default:l(()=>[x(a(f,{flat:"",label:"Cancel"},null,512),[[I]]),a(f,{flat:"",label:"Continuar",onClick:C})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{J as default};