import{Q as n,a as s}from"./QCard.4dff5d9f.js";import{Q as I}from"./QInput.294ae5db.js";import{Q as L}from"./QForm.fa3ebb90.js";import{r as f,a as d,d as i,w as t,ar as N,k as F,e,h as r,t as u,b as y,as as b,at as g,i as j,j as k,g as V}from"./index.a786ea1c.js";import{Q as w,a as m}from"./QItem.982b9061.js";import{Q as C}from"./QList.e7e92840.js";import{Q as A}from"./QSeparator.8014d1ef.js";import{Q as E}from"./QPage.3c9deba9.js";import{Q as R,a as U}from"./QLayout.62c3cf3f.js";import{vizapi as $}from"./axios.44e3cd65.js";import"./use-key-composition.8298a578.js";import"./uid.42677368.js";var z={getProduct(x){let p=`/product/${x}`;return $.get(p).then(c=>c.data).catch(c=>c)}};const D={class:"text-center text-h5 text-bold"},H={class:"text-center text-h6 text-bold"},T={class:"text-center text-bold"},q={class:"text-center text-grey"},G={class:"row"},J={class:"col"},K=r("div",{class:"text-center text-bold text-h6"},"Validos",-1),M={class:"col"},O=r("div",{class:"text-center text-bold text-h6"},"Invalidos",-1),ut={__name:"checkCB",setup(x){const p=new Audio("sounds/incorrect.mp3"),c=new Audio("sounds/correct.mp3"),P=N();F();const a=f({product:null,variants:[],modal:null}),h=f([]),Q=f([]),S=async()=>{const o=await z.getProduct(P.params.id);o.error?console.log(o):(console.log(o),a.value.product=o,a.value.variants=o.variants)},B=()=>{if(a.value.modal){let o=a.value.modal.toUpperCase();a.value.product.barcode==o||a.value.product.code==o||a.value.product.variants.some(l=>l.barcode==o)?(Q.value.push(o),c.play()):(h.value.push(o),p.play()),a.value.modal=null}};return S(),(o,_)=>(d(),i(R,{view:"hHh Lpr fFf"},{default:t(()=>[e(U,null,{default:t(()=>[a.value.product?(d(),i(E,{key:0,padding:""},{default:t(()=>[e(n,{class:"my-card"},{default:t(()=>[e(s,null,{default:t(()=>[r("div",D,u(a.value.product.code),1),r("div",H,u(a.value.product.barcode),1),r("div",T,u(a.value.product.description),1),r("div",q," Variantes "+u(a.value.variants.map(l=>l.barcode).join("-")),1)]),_:1}),e(n,{class:"my-card"},{default:t(()=>[e(L,{onSubmit:B},{default:t(()=>[e(s,null,{default:t(()=>[e(I,{modelValue:a.value.modal,"onUpdate:modelValue":_[0]||(_[0]=l=>a.value.modal=l),type:"text",label:"Escaner",filled:"",autofocus:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,null,{default:t(()=>[r("div",G,[r("div",J,[e(n,{class:"my-card"},{default:t(()=>[e(s,null,{default:t(()=>[K]),_:1}),e(s,null,{default:t(()=>[(d(!0),y(g,null,b(Q.value,(l,v)=>(d(),i(C,{bordered:"",key:v},{default:t(()=>[e(w,null,{default:t(()=>[e(m,{avatar:""},{default:t(()=>[e(k,{color:"primary",name:"inventory"})]),_:1}),e(m,null,{default:t(()=>[V(u(l),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),e(A,{spaced:"",inset:"",vertical:"",dark:""}),r("div",M,[e(n,{class:"my-card"},{default:t(()=>[e(s,null,{default:t(()=>[O]),_:1}),e(s,null,{default:t(()=>[(d(!0),y(g,null,b(h.value,(l,v)=>(d(),i(C,{bordered:"",key:v},{default:t(()=>[e(w,null,{default:t(()=>[e(m,{avatar:""},{default:t(()=>[e(k,{color:"primary",name:"inventory"})]),_:1}),e(m,null,{default:t(()=>[V(u(l),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})):j("",!0)]),_:1})]),_:1}))}};export{ut as default};
