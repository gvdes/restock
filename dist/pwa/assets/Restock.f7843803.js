import{aq as j,B as u,F as x,ar as G,as as H,at as J,$ as k,a6 as Z,au as ee,O as w,av as N,a1 as O,v as D,S as $,r as V,c as v,g as te,m as F,T as re,aw as ne,E as T,x as ie,ax as ae,ac as oe,I as se}from"./index.7e3dde04.js";import{u as le,a as ue,b as de}from"./QTabs.40b41cca.js";import{f as ce,g as pe,h as ve}from"./QPage.2d1f42a4.js";import{u as fe}from"./use-cache.b0833c75.js";const Te=j("restock",{state:()=>({ordersdb:[],resume:[],printers:[]}),getters:{ordersSize(e){return e.ordersdb.length},ordersok(e){return e.ordersdb.filter(t=>t.log.length)},orderserrors(e){return e.ordersdb.filter(t=>!t.log.length)}},actions:{fillOrders(e){this.ordersdb=e},addOrder(e){console.log(e);let t=this.ordersdb.findIndex(n=>n.id==e.id);return t<0&&this.ordersdb.unshift(e),t},fillResume(e){this.resume=e},fillPrinters(e){this.printers=e},orderUpdate(e){let t=e.order,n=e.basketsize,o=this.ordersdb.find(s=>s.id==t.id);o&&(o.products_count=n)},addOrUpdate(e,t){let n=this.ordersdb.findIndex(o=>o.id==e);return n>=0?(this.ordersdb[n]=t,"u"):(this.ordersdb.unshift(t),"a")}}}),me=[u("circle",{cx:"15",cy:"15",r:"15"},[u("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),u("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[u("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),u("circle",{cx:"105",cy:"15",r:"15"},[u("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var Ae=x({name:"QSpinnerDots",props:G,setup(e){const{cSize:t,classes:n}=H(e);return()=>u("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},me)}}),Ne=x({name:"QTab",props:le,emits:ue,setup(e,{slots:t,emit:n}){const{renderTab:o}=de(e,t,n);return()=>o("div")}});const z={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},be=Object.keys(z);z.all=!0;function L(e){const t={};for(const n of be)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?z:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function U(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function ge(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((n,o)=>{const s=parseFloat(n);s&&(t[o]=s)}),t}var he=J({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:o}){if(o.mouse!==!0&&k.has.touch!==!0)return;const s=o.mouseCapture===!0?"Capture":"",r={handler:t,sensitivity:ge(n),direction:L(o),noop:Z,mouseStart(a){U(a,r)&&ee(a)&&(w(r,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),r.start(a,!0))},touchStart(a){if(U(a,r)){const d=a.target;w(r,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),r.start(a)}},start(a,d){k.is.firefox===!0&&N(e,!0);const b=O(a);r.event={x:b.left,y:b.top,time:Date.now(),mouse:d===!0,dir:!1}},move(a){if(r.event===void 0)return;if(r.event.dir!==!1){D(a);return}const d=Date.now()-r.event.time;if(d===0)return;const b=O(a),g=b.left-r.event.x,p=Math.abs(g),h=b.top-r.event.y,c=Math.abs(h);if(r.event.mouse!==!0){if(p<r.sensitivity[1]&&c<r.sensitivity[1]){r.end(a);return}}else if(p<r.sensitivity[2]&&c<r.sensitivity[2])return;const m=p/d,y=c/d;r.direction.vertical===!0&&p<c&&p<100&&y>r.sensitivity[0]&&(r.event.dir=h<0?"up":"down"),r.direction.horizontal===!0&&p>c&&c<100&&m>r.sensitivity[0]&&(r.event.dir=g<0?"left":"right"),r.direction.up===!0&&p<c&&h<0&&p<100&&y>r.sensitivity[0]&&(r.event.dir="up"),r.direction.down===!0&&p<c&&h>0&&p<100&&y>r.sensitivity[0]&&(r.event.dir="down"),r.direction.left===!0&&p>c&&g<0&&c<100&&m>r.sensitivity[0]&&(r.event.dir="left"),r.direction.right===!0&&p>c&&g>0&&c<100&&m>r.sensitivity[0]&&(r.event.dir="right"),r.event.dir!==!1?(D(a),r.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ce(),r.styleCleanup=q=>{r.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};q===!0?setTimeout(P,50):P()}),r.handler({evt:a,touch:r.event.mouse!==!0,mouse:r.event.mouse,direction:r.event.dir,duration:d,distance:{x:p,y:c}})):r.end(a)},end(a){r.event!==void 0&&($(r,"temp"),k.is.firefox===!0&&N(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(!0),a!==void 0&&r.event.dir!==!1&&D(a),r.event=void 0)}};if(e.__qtouchswipe=r,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";w(r,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}k.has.touch===!0&&w(r,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;n!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&n.end(),n.handler=t.value),n.direction=L(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&($(t,"main"),$(t,"temp"),k.is.firefox===!0&&N(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});const ye={name:{required:!0},disable:Boolean},R={setup(e,{slots:t}){return()=>u("div",{class:"q-panel scroll",role:"tabpanel"},T(t.default))}},xe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Pe=["update:modelValue","before-transition","transition"];function Ce(){const{props:e,emit:t,proxy:n}=F(),{getCacheWithFn:o}=fe();let s,r;const a=V(null),d=V(null);function b(i){const l=e.vertical===!0?"up":"left";C((n.$q.lang.rtl===!0?-1:1)*(i.direction===l?1:-1))}const g=v(()=>[[he,b,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),h=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),c=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),m=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),y=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),q=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);te(()=>e.modelValue,(i,l)=>{const f=S(i)===!0?A(i):-1;r!==!0&&Q(f===-1?0:f<A(l)?-1:1),a.value!==f&&(a.value=f,t("before-transition",i,l),ie(()=>{t("transition",i,l)}))});function P(){C(1)}function _(){C(-1)}function M(i){t("update:modelValue",i)}function S(i){return i!=null&&i!==""}function A(i){return s.findIndex(l=>l.props.name===i&&l.props.disable!==""&&l.props.disable!==!0)}function K(){return s.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function Q(i){const l=i!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(i===-1?p.value:h.value):null;d.value!==l&&(d.value=l)}function C(i,l=a.value){let f=l+i;for(;f>-1&&f<s.length;){const B=s[f];if(B!==void 0&&B.props.disable!==""&&B.props.disable!==!0){Q(i),r=!0,t("update:modelValue",B.props.name),setTimeout(()=>{r=!1});return}f+=i}e.infinite===!0&&s.length>0&&l!==-1&&l!==s.length&&C(i,i===-1?s.length:-1)}function E(){const i=A(e.modelValue);return a.value!==i&&(a.value=i),!0}function I(){const i=S(e.modelValue)===!0&&E()&&s[a.value];return e.keepAlive===!0?[u(ae,y.value,[u(q.value===!0?o(m.value,()=>({...R,name:m.value})):R,{key:m.value,style:c.value},()=>i)])]:[u("div",{class:"q-panel scroll",style:c.value,key:m.value,role:"tabpanel"},[i])]}function W(){if(s.length!==0)return e.animated===!0?[u(re,{name:d.value},I)]:I()}function X(i){return s=ne(T(i.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&S(l.props.name)===!0),s.length}function Y(){return s}return Object.assign(n,{next:P,previous:_,goTo:M}),{panelIndex:a,panelDirectives:g,updatePanelsList:X,updatePanelIndex:E,getPanelContent:W,getEnabledPanels:K,getPanels:Y,isValidPanelName:S,keepAliveProps:y,needsUniqueKeepAliveWrapper:q,goToPanelByOffset:C,goToPanel:M,nextPanel:P,previousPanel:_}}var De=x({name:"QTabPanel",props:ye,setup(e,{slots:t}){return()=>u("div",{class:"q-tab-panel",role:"tabpanel"},T(t.default))}});const ke=["top","middle","bottom"];var $e=x({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ke.includes(e)}},setup(e,{slots:t}){const n=v(()=>e.align!==void 0?{verticalAlign:e.align}:null),o=v(()=>{const s=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(s!==void 0?` text-${s}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>u("div",{class:o.value,style:n.value,role:"status","aria-label":e.label},oe(t.default,e.label!==void 0?[e.label]:[]))}}),ze=x({name:"QTabPanels",props:{...xe,...pe},emits:Pe,setup(e,{slots:t}){const n=F(),o=ve(e,n.proxy.$q),{updatePanelsList:s,getPanelContent:r,panelDirectives:a}=Ce(),d=v(()=>"q-tab-panels q-panel-parent"+(o.value===!0?" q-tab-panels--dark q-dark":""));return()=>(s(t),se("div",{class:d.value},r(),"pan",e.swipeable,()=>a.value))}}),_e=x({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=v(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(s=>e[s]===!0).map(s=>`q-btn-group--${s}`).join(" ");return`q-btn-group row no-wrap${o.length>0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>u("div",{class:n.value},T(t.default))}});const Me=j("restock",{state:()=>({ordersdb:[],resume:[],printers:[]}),getters:{ordersSize(e){return e.ordersdb.length},ordersok(e){return e.ordersdb.filter(t=>t.log.length)},orderserrors(e){return e.ordersdb.filter(t=>!t.log.length)}},actions:{fillOrders(e){this.ordersdb=e},addOrder(e){console.log(e);let t=this.ordersdb.findIndex(n=>n.id==e.id);return t<0&&this.ordersdb.unshift(e),t},fillResume(e){this.resume=e},fillPrinters(e){this.printers=e},orderUpdate(e){let t=e.order,n=e.basketsize,o=this.ordersdb.find(s=>s.id==t.id);o&&(o.products_count=n)},addOrUpdate(e,t){let n=this.ordersdb.findIndex(o=>o.id==e);return n>=0?(this.ordersdb[n]=t,"u"):(this.ordersdb.unshift(t),"a")}}});export{_e as Q,Me as a,Ae as b,Ne as c,ze as d,De as e,$e as f,Te as u};