import{F as u,K as i,L as m,c as p,g as f,aQ as b,o as _,b as d,w as r,aR as v,d as e}from"./index.6c710a1a.js";import{u as Q,a as k,b as x,Q as T}from"./QTabs.c8630008.js";import{Q as R,a as h,b as L}from"./QLayout.38273bc0.js";import{Q as w}from"./QFooter.25a3bc7e.js";import"./rtl.265bbe46.js";var t=u({name:"QRouteTab",props:{...i,...Q},emits:k,setup(a,{slots:l,emit:s}){const o=m({useDisableForRouterLinkProps:!1}),{renderTab:n,$tabs:c}=x(a,l,s,{exact:p(()=>a.exact),...o});return f(()=>`${a.name} | ${a.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{c.verifyRouteModel()}),()=>n(o.linkTag.value,o.linkAttrs.value)}});const C={};function P(a,l){const s=v("router-view");return _(),d(R,{view:"hHh Lpr fFf"},{default:r(()=>[e(h,{elevated:""},{default:r(()=>[e(T,null,{default:r(()=>[e(t,{icon:"flag",to:"/Compare",replace:"",label:"Comparativos"}),e(t,{icon:"list",to:"/Automate",replace:"",label:"Automaticos"}),e(t,{icon:"atm",to:"/texas",replace:"",label:"P. Texcoco"}),e(t,{icon:"ios_share",to:"/report",replace:"",label:"Reporte"}),e(t,{icon:"inventory_2",to:"/stocks",replace:"",label:"Stocks"})]),_:1})]),_:1}),e(w),e(L,null,{default:r(()=>[e(s)]),_:1})]),_:1})}var B=b(C,[["render",P]]);export{B as default};