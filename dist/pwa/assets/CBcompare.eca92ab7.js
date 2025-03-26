import{Q as z}from"./QHeader.acc98f29.js";import{Q as M,a as U}from"./QLayout.62c3cf3f.js";import{Q as j}from"./QFooter.67e28f34.js";import{vizapi as w}from"./axios.44e3cd65.js";import{_ as J,r as x,c as S,o as K,a as d,b as Q,d as b,w as c,e as s,Q as h,f as H,g as V,m as L,u as D,h as n,t as m,i as E,j as G,n as W,k as X}from"./index.a786ea1c.js";import{Q as Y}from"./QInput.294ae5db.js";import{Q as B,a as I}from"./QItem.982b9061.js";import{u as Z,Q as ee}from"./use-quasar.4386f8b5.js";import"./use-key-composition.8298a578.js";import"./uid.42677368.js";import"./format.83a20244.js";import"./rtl.4f11f6c7.js";import"./use-timeout.c408bef4.js";var C={autocomplete(i){return w.post("/product",i)},getMassive(i){return w.post("/product/getMassive",i)}};const te={class:"QuickRegular row items-center"},ae={class:"row items-center justify-between no-wrap QuickRegular"},oe={class:"col"},le={class:"text-grey-4 q-pl-md"},se={class:"text--2 text-grey-5"},re={class:"text--3"},ce={key:0,class:"text--3 text-amber-13"},ne={__name:"ProductsAutocomplete",props:{limit:{default:30,type:Number},_category:{default:null,type:Boolean},_status:{default:null,type:Boolean},_location:{default:null,type:Boolean},_celler:{default:null,type:Boolean},check_stock:{default:null,type:Boolean},with_locations:{default:null,type:Boolean},with_image:{default:null,type:Boolean},with_prices:{default:null,type:Boolean},with_stock:{default:null,type:Boolean},checkState:{default:!0,type:Boolean},workpointStatus:{default:null,type:[Array,String]},wkpToVal:{default:null,type:Number},blockStates:{type:Array,default:()=>[4,5,6]}},emits:["input","similarcodes","agregar"],setup(i,{emit:u}){const o=i,_=Z(),e=x({target:"",iptsearch:{processing:!1,type:"number",icon:"fas fa-font"},options:void 0,read_barcode:!0}),f=x(null),g=S(()=>({autocomplete:e.value.target,_category:o._category,_status:o._status,_location:o._location,with_locations:o.with_locations,with_stock:o.with_stock,check_stock:o.check_stock,with_prices:o.with_prices,_celler:o._celler,limit:o.limit,_workpoint_status:o.workpointStatus,_workpoint:1})),T=S(()=>t=>o.checkState?o.blockStates.some(l=>l==t.state.id):!1);K(()=>{e.value.read_barcode=JSON.parse(localStorage.getItem("barcodereader"));let t=JSON.parse(localStorage.getItem("typeiptsearch"));t&&(e.value.iptsearch.type=t.type,e.value.iptsearch.icon=t.icon)});const y=()=>{e.value.read_barcode=!e.value.read_barcode,e.value.target="",localStorage.setItem("barcodereader",e.value.read_barcode)},$=(t,l,a)=>{console.log(g.value),t.trim().length>1&&(e.value.target=t.toUpperCase().trim(),console.log(e.value.target),C.autocomplete(g.value).then(p=>{console.log(p);let O=p.data.map(r=>{if(o.checkState)if(o.wkpToVal){let v=r.stocks.find(R=>R._workpoint==o.wkpToVal);r.stateToVal=v?{own:v,state:v.status}:{own:null,state:r.status}}else r.stateToVal={own:!0,state:r.status};else r.stateToVal={own:!0,state:r.status};return r});l(()=>{e.value.options=O},r=>{r.setOptionIndex(-1),r.moveOptionSelection(1,!0)})}).catch(p=>{console.log(p)}))},N=()=>{switch(e.value.iptsearch.type){case"text":e.value.iptsearch.type="number",e.value.iptsearch.icon="fas fa-font";break;case"number":e.value.iptsearch.type="text",e.value.iptsearch.icon="fas fa-hashtag";break}localStorage.setItem("typeiptsearch",JSON.stringify(e.value.iptsearch))},k=t=>{e.value.target="",u("input",t)},P=t=>{e.value.target="",u("similarcodes",t)},A=()=>{e.value.target.trim().toUpperCase(),e.value.target.length&&(e.value.iptsearch.processing=!0,C.autocomplete(g.value).then(t=>{let l=t.data;switch(l.length){case 0:let a=e.value.target;_.notify({message:`Sin resultados para <b>${a}</b>`,color:"negative",icon:"fas fa-times",html:!0,timeout:1e3,position:"center"}),q();break;case 1:console.log("Perfecto, aqui esta tu producto"),k(l[0]);break;default:console.log(l),P(l);break}e.value.target="",e.value.iptsearch.processing=!1}).catch(t=>{console.log(t)}))},q=()=>{console.log("putFocus ejecutada!!"),f.value.focus()},F=t=>{u("agregar",t)};return(t,l)=>(d(),Q("div",te,[e.value.read_barcode?(d(),b(Y,{key:0,ref_key:"iptatc",ref:f,loading:e.value.iptsearch.processing,disable:e.value.iptsearch.processing,modelValue:e.value.target,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.target=a),dense:"",filled:"",color:"blue-13",class:"text-uppercase col",onKeypress:H(A,["enter"]),autocomplete:"off",autofocus:""},{prepend:c(()=>[s(h,{dense:"",flat:"",color:e.value.read_barcode?"light-blue-13":"blue-13",icon:e.value.read_barcode?"far fa-keyboard":"fas fa-barcode",onClick:l[0]||(l[0]=a=>y())},null,8,["color","icon"])]),_:1},8,["loading","disable","modelValue","onKeypress"])):(d(),b(ee,{key:1,dense:"",filled:"",color:"blue-13",class:"text-uppercase col",ref_key:"iptatc",ref:f,"use-input":"","hide-dropdown-icon":"","option-value":"id","option-label":"id","hide-selected":"",behavior:"menu",modelValue:e.value.target,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value.target=a),"input-debounce":400,autofocus:"",options:e.value.options,type:e.value.iptsearch.type,onFilter:$,onInput:k,"popup-content-class":"bg-darkl1"},{"no-option":c(()=>[s(B,null,{default:c(()=>[s(I,{class:"text-grey QuickRegular"},{default:c(()=>[V("Nada por aqui...")]),_:1})]),_:1})]),prepend:c(()=>[s(h,{dense:"",flat:"",color:e.value.read_barcode?"light-blue-13":"blue-13",icon:e.value.read_barcode?"far fa-keyboard":"fas fa-barcode",onClick:l[2]||(l[2]=a=>y())},null,8,["color","icon"]),s(h,{type:"button",dense:"",size:"sm",flat:"",onClick:N,icon:e.value.iptsearch.icon,color:"grey-6"},null,8,["icon"])]),option:c(a=>[s(B,L(a.itemProps,{onClick:p=>F(a.opt),disable:D(T)(a.opt.stateToVal)}),{default:c(()=>[s(I,null,{default:c(()=>[n("div",ae,[n("div",oe,[n("div",null,[V(m(a.opt.code)+" ",1),n("span",le,m(a.opt.name),1)]),n("div",se,m(a.opt.description),1),n("div",re,m(a.opt.stateToVal.state.name),1),a.opt.stateToVal.own?E("",!0):(d(),Q("div",ce,"Producto en conflicto con status "))]),s(G,{name:"fas fa-circle",class:W(["q-pl-md",`bullet-${a.opt.stateToVal.state.id}`]),size:"10px"},null,8,["class"])])]),_:2},1024)]),_:2},1040,["onClick","disable"])]),_:1},8,["modelValue","options","type"]))]))}};var ie=J(ne,[["__scopeId","data-v-5bb56708"]]);const ue=n("div",{class:"text-center text-h6"},"Revision Bodigo de Barras",-1),pe={class:"row"},Qe={__name:"CBcompare",setup(i){const u=X(),o=e=>{console.log(e)},_=e=>{u.push(`/barcode/${e.id}`)};return(e,f)=>(d(),b(M,{view:"hHh Lpr fFf"},{default:c(()=>[s(z,{elevated:""},{default:c(()=>[ue]),_:1}),s(U),s(j,{reveal:"",elevated:"",bordered:"",class:"bg-white"},{default:c(()=>[n("div",pe,[s(ie,{checkState:!1,onInput:o,onAgregar:_,class:"col"})])]),_:1})]),_:1}))}};export{Qe as default};
