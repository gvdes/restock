import{Q as C,a as d}from"./QTd.4f2bd813.js";import{r as s,a as h,d as P,w as o,ar as V,h as w,e as a,g as c,t as p,Q as f,u as A,aL as x}from"./index.da85b8dc.js";import{Q as S}from"./QTable.cc354dbb.js";import{Q as N,a as _}from"./QCard.25c69692.js";import{Q as B}from"./QInput.e927a1f6.js";import{Q as D}from"./QCardActions.c9efc98d.js";import{u as R,a as T}from"./use-quasar.fc3d653f.js";import{Q as U}from"./QPage.22409e19.js";import{C as I}from"./ClosePopup.b7dbda90.js";import"./axios.99c185bb.js";import{R as v}from"./RestockApi.4e5b12b6.js";import"./QList.171e9366.js";import"./QItem.ca5ad26b.js";import"./use-key-composition.a558bfa4.js";import"./uid.42677368.js";import"./format.fb212846.js";import"./rtl.c50304db.js";import"./use-timeout.c18bcc16.js";const L=w("div",{class:"text-h6"},"Notas",-1),le={__name:"Automate",setup($){const r=R();V();const g=s([]),u=s(!1),i=s(!1),n=s(""),m=s(null);let Q=s({cols:[{name:"id",label:"ID",align:"center"},{name:"alias",label:"ALIAS",align:"center"},{name:"name",label:"SUCURSAL",align:"left"},{name:"actions",label:"Actions",align:"left"}]});const b=async()=>{r.loading.show({message:"Obteniendo Sucursales"});const t=await v.suc();t.status==200?(console.log(t.data),g.value=t.data,r.loading.hide()):alert("Problemas con la obtencion de datos")},y=t=>{i.value=!0,m.value=t},k=async t=>{u.value=!0,r.loading.show({message:"Creando Pedido"});let l={_workpoint_from:m.value,_workpoint_to:1,_type:2,notes:n.value};const e=await v.createAutomate(l);e.status==200?(console.log(e.data),u.value=!1,r.loading.hide(),r.notify({type:"positive",message:`Pedido ${e.data.order.id} creado`,position:"center"}),n.value="",m.value=null,i.value=!1):alert("Nosegeneroelpedido")};return b(),(t,l)=>(h(),P(U,{padding:""},{default:o(()=>[w("div",null,[a(S,{title:"Sucursales",rows:g.value,"row-key":"id",columns:A(Q).cols,pagination:{rowsPerPage:20}},{body:o(e=>[a(C,{props:e},{default:o(()=>[a(d,{key:"id",props:e},{default:o(()=>[c(p(e.row.id),1)]),_:2},1032,["props"]),a(d,{key:"alias",props:e},{default:o(()=>[c(p(e.row.alias),1)]),_:2},1032,["props"]),a(d,{key:"name",props:e},{default:o(()=>[c(p(e.row.name),1)]),_:2},1032,["props"]),a(d,{key:"actions",props:e},{default:o(()=>[a(f,{flat:"",rounded:"","icon-right":"arrow_circle_right",label:"Crear Pedido",color:"primary",onClick:q=>y(e.row.id),disable:u.value},null,8,["onClick","disable"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),a(T,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=e=>i.value=e),persistent:""},{default:o(()=>[a(N,{style:{"min-width":"350px"}},{default:o(()=>[a(_,null,{default:o(()=>[L]),_:1}),a(_,{class:"q-pt-none"},{default:o(()=>[a(B,{dense:"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),autofocus:""},null,8,["modelValue"])]),_:1}),a(D,{align:"right",class:"text-primary"},{default:o(()=>[x(a(f,{flat:"",label:"Cancel"},null,512),[[I]]),a(f,{flat:"",label:"Continuar",onClick:k})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{le as default};
