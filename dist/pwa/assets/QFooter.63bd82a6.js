import{F as R,aj as v,r as d,A as _,c as r,g as s,k as $,ac as L,B as h,l as O,m as S,ak as j}from"./index.2b3d8d3a.js";import{c as k}from"./QLayout.351489fc.js";var p=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:z,emit:m}){const{proxy:{$q:c}}=S(),t=O(j,v);if(t===v)return console.error("QFooter needs to be child of QLayout"),v;const l=d(parseInt(a.heightHint,10)),n=d(!0),g=d(_.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=r(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||c.platform.is.ios&&t.isContainer.value===!0),y=r(()=>t.isContainer.value===!0?t.containerHeight.value:g.value),b=r(()=>{if(a.modelValue!==!0)return 0;if(f.value===!0)return n.value===!0?l.value:0;const e=t.scroll.value.position+y.value+l.value-t.height.value;return e>0?e:0}),w=r(()=>a.modelValue!==!0||f.value===!0&&n.value!==!0),F=r(()=>a.modelValue===!0&&w.value===!0&&a.reveal===!0),q=r(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),x=r(()=>{const e=t.rows.value.bottom,o={};return e[0]==="l"&&t.left.space===!0&&(o[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(o[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function u(e,o){t.update("footer",e,o)}function i(e,o){e.value!==o&&(e.value=o)}function H({height:e}){i(l,e),u("size",e)}function B(){if(a.reveal!==!0)return;const{direction:e,position:o,inflectionPoint:Q}=t.scroll.value;i(n,e==="up"||o-Q<100||t.height.value-y.value-o-l.value<300)}function C(e){F.value===!0&&i(n,!0),m("focusin",e)}s(()=>a.modelValue,e=>{u("space",e),i(n,!0),t.animate()}),s(b,e=>{u("offset",e)}),s(()=>a.reveal,e=>{e===!1&&i(n,a.modelValue)}),s(n,e=>{t.animate(),m("reveal",e)}),s([l,t.scroll,t.height],B),s(()=>c.screen.height,e=>{t.isContainer.value!==!0&&i(g,e)});const V={};return t.instances.footer=V,a.modelValue===!0&&u("size",l.value),u("space",a.modelValue),u("offset",b.value),$(()=>{t.instances.footer===V&&(t.instances.footer=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const e=L(z.default,[h(k,{debounce:0,onResize:H})]);return a.elevated===!0&&e.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h("footer",{class:q.value,style:x.value,onFocusin:C},e)}}});export{p as Q};
