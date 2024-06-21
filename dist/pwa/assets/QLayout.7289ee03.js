import{r as z,A as _,j as P,F as R,k as H,a6 as D,x as W,B as h,m as q,U as F,aj as L,c as f,g as x,N as K,l as U,ak as N,E as X,am as A,al as G,a2 as J,an as Y,ao as Z,a0 as E,ap as C,X as ee,ac as te}from"./index.a5a34942.js";function ne(){const e=z(!_.value);return e.value===!1&&P(()=>{e.value=!0}),e}const I=typeof ResizeObserver!="undefined",k=I===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:p}){let l=null,t,o={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?c():l===null&&(l=setTimeout(c,e.debounce))}function c(){if(clearTimeout(l),l=null,t){const{offsetWidth:r,offsetHeight:i}=t;(r!==o.width||i!==o.height)&&(o={width:r,height:i},p("resize",o))}}const{proxy:v}=q();if(I===!0){let r;const i=g=>{t=v.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),c()):g!==!0&&W(()=>{i(!0)})};return P(()=>{i()}),H(()=>{clearTimeout(l),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),D}else{let g=function(){clearTimeout(l),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,F.passive),i=void 0)},m=function(){g(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,F.passive),c())};const r=ne();let i;return P(()=>{W(()=>{t=v.$el,t&&m()})}),H(g),v.trigger=s,()=>{if(r.value===!0)return h("object",{style:k.style,tabindex:-1,type:"text/html",data:k.url,"aria-hidden":"true",onLoad:m})}}}}),ae=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:l}){const{proxy:{$q:t}}=q(),o=U(N,L);if(o===L)return console.error("QHeader needs to be child of QLayout"),L;const s=z(parseInt(e.heightHint,10)),c=z(!0),v=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||t.platform.is.ios&&o.isContainer.value===!0),r=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return c.value===!0?s.value:0;const n=s.value-o.scroll.value.position;return n>0?n:0}),i=f(()=>e.modelValue!==!0||v.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),m=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const n=o.rows.value.top,b={};return n[0]==="l"&&o.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function u(n,b){o.update("header",n,b)}function y(n,b){n.value!==b&&(n.value=b)}function Q({height:n}){y(s,n),u("size",n)}function O(n){g.value===!0&&y(c,!0),l("focusin",n)}x(()=>e.modelValue,n=>{u("space",n),y(c,!0),o.animate()}),x(r,n=>{u("offset",n)}),x(()=>e.reveal,n=>{n===!1&&y(c,e.modelValue)}),x(c,n=>{o.animate(),l("reveal",n)}),x(o.scroll,n=>{e.reveal===!0&&y(c,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const $={};return o.instances.header=$,e.modelValue===!0&&u("size",s.value),u("space",e.modelValue),u("offset",r.value),H(()=>{o.instances.header===$&&(o.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const n=K(p.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(B,{debounce:0,onResize:Q})),h("header",{class:m.value,style:w.value,onFocusin:O},n)}}}),re=R({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:l}}=q(),t=U(N,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;A(G,!0);const o=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:o.value},X(p.default))}});const{passive:M}=F,oe=["both","horizontal","vertical"];var ie=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>oe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;x(()=>e.scrollTarget,()=>{r(),v()});function c(){t!==null&&t();const m=Math.max(0,Y(o)),w=Z(o),u={top:m-l.position.top,left:w-l.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";l.position={top:m,left:w},l.directionChanged=l.direction!==y,l.delta=u,l.directionChanged===!0&&(l.direction=y,l.inflectionPoint=l.position),p("scroll",{...l})}function v(){o=J(s,e.scrollTarget),o.addEventListener("scroll",i,M),i(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",i,M),o=void 0)}function i(m){if(m===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[w,u]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{u(w),t=null}}}const{proxy:g}=q();return P(()=>{s=g.$el.parentNode,v()}),H(()=>{t!==null&&t(),r()}),Object.assign(g,{trigger:i,getPosition:()=>l}),D}}),se=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:l}){const{proxy:{$q:t}}=q(),o=z(null),s=z(t.screen.height),c=z(e.container===!0?0:t.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),i=z(_.value===!0?0:E()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),u=f(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(a){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};v.value=d,e.onScroll!==void 0&&l("scroll",d)}}function Q(a){const{height:d,width:S}=a;let T=!1;s.value!==d&&(T=!0,s.value=d,e.onScrollHeight!==void 0&&l("scroll-height",d),$()),c.value!==S&&(T=!0,c.value=S),T===!0&&e.onResize!==void 0&&l("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,$())}function $(){if(e.container===!0){const a=s.value>r.value?E():0;i.value!==a&&(i.value=a)}}let n;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:r,scrollbarWidth:i,totalWidth:f(()=>c.value+i.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:v,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(a,d,S){b[a][d]=S}};if(A(N,b),E()>0){let S=function(){a=null,d.classList.remove("hide-scrollbar")},T=function(){if(a===null){if(d.scrollHeight>t.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(S,300)},V=function(j){a!==null&&j==="remove"&&(clearTimeout(a),S()),window[`${j}EventListener`]("resize",T)},a=null;const d=document.body;x(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ee(()=>{V("remove")})}return()=>{const a=te(p.default,[h(ie,{onScroll:y}),h(B,{onResize:Q})]),d=h("div",{class:g.value,style:m.value,ref:e.container===!0?void 0:o,tabindex:-1},a);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(B,{onResize:O}),h("div",{class:"absolute-full",style:w.value},[h("div",{class:"scroll",style:u.value},[d])])]):d}}});export{se as Q,ae as a,re as b,B as c};