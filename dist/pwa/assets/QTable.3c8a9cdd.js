import{l as z,x as n,F as ue,v as yt,j as Ce,z as H,c as u,r as j,q as p,ac as Ne,o as Qe,ae as _t,ad as qt,s as ze,I as wt,E as De,O as Pe,W as He,X as Ue,aH as Q,V as Ee,an as kt,ao as pe,aI as ke,aJ as Me,aw as Ct,D as Ke,aK as Pt,ak as W,Q as oe}from"./index.a786ea1c.js";import{Q as xt}from"./QSeparator.8014d1ef.js";import{Q as Rt}from"./QList.e7e92840.js";import{u as se,b as ce}from"./QItem.982b9061.js";import{b as Tt,c as Bt,d as We,Q as Vt}from"./use-quasar.4386f8b5.js";import{a as Ot,k as Ft}from"./use-key-composition.8298a578.js";var $t=z({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const d=H(),{proxy:{$q:o}}=d,f=i=>{l("click",i)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},ue(a.default));let i,c;const v=d.vnode.key;if(v){if(i=e.props.colsMap[v],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const r=i.align==="right"?"unshift":"push";c=yt(a.default,[]),c[r](n(Ce,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else c=ue(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:r=>{i.sortable===!0&&e.props.sort(i),f(r)}};return n("th",m,c)}}});const Lt=["horizontal","vertical","cell","none"];var Dt=z({name:"QMarkupTable",props:{...se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:a}){const l=H(),d=ce(e,l.proxy.$q),o=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},ue(a.default))])}});function Ge(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const Et={list:Rt,table:Dt},pt=["list","table","__qtable"];var Mt=z({name:"QVirtualScroll",props:{...Tt,type:{type:String,default:"list",validator:e=>pt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let d;const o=j(null),f=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:c,padVirtualScroll:v,onVirtualScrollEvt:m}=Bt({virtualScrollLength:f,getVirtualScrollTarget:w,getVirtualScrollEl:C}),r=u(()=>{if(f.value===0)return[];const V=(F,x)=>({index:i.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(V):e.itemsFn(i.value.from,i.value.to-i.value.from).map(V)}),b=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});p(f,()=>{c()}),p(()=>e.scrollTarget,()=>{_(),h()});function C(){return o.value.$el||o.value}function w(){return d}function h(){d=wt(C(),e.scrollTarget),d.addEventListener("scroll",m,De.passive)}function _(){d!==void 0&&(d.removeEventListener("scroll",m,De.passive),d=void 0)}function B(){let V=v(e.type==="list"?"div":"tbody",r.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),Pe(a.after,V)}return Ne(()=>{c()}),Qe(()=>{h()}),_t(()=>{h()}),qt(()=>{_()}),ze(()=>{_()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ge({ref:o,class:"q-table__middle "+b.value},B()):n(Et[e.type],{...l,ref:o,class:[l.class,b.value],...q.value},B)}}});const jt={xs:2,sm:4,md:6,lg:10,xl:14};function je(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var At=z({name:"QLinearProgress",props:{...se,...He,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=H(),d=ce(e,l.$q),o=Ue(e,jt),f=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),c=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>je(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),r=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),b=u(()=>je(f.value===!0?1:e.value,i.value,l.$q)),q=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${f.value===!0?"in":""}determinate`),C=u(()=>({width:`${e.value*100}%`})),w=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[n("div",{class:r.value,style:m.value}),n("div",{class:q.value,style:b.value})];return e.stripe===!0&&f.value===!1&&h.push(n("div",{class:w.value,style:C.value})),n("div",{class:v.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Pe(a.default,h))}}});function It(e,a){const l=j(null),d=u(()=>e.disable===!0?null:n("span",{ref:l,class:"no-outline",tabindex:-1}));function o(f){const i=a.value;f!==void 0&&f.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(f===void 0||i!==null&&i.contains(f.target)===!0)&&l.value.focus()}return{refocusTargetEl:d,refocusTarget:o}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const Qt={...se,...He,...Ot,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},zt=["update:modelValue"];function Ht(e,a){const{props:l,slots:d,emit:o,proxy:f}=H(),{$q:i}=f,c=ce(l,i),v=j(null),{refocusTargetEl:m,refocusTarget:r}=It(l,v),b=Ue(l,Nt),q=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=u(()=>{const k=Q(l.val);return q.value===!0?l.modelValue.findIndex(L=>Q(L)===k):-1}),w=u(()=>q.value===!0?C.value>-1:Q(l.modelValue)===Q(l.trueValue)),h=u(()=>q.value===!0?C.value===-1:Q(l.modelValue)===Q(l.falseValue)),_=u(()=>w.value===!1&&h.value===!1),B=u(()=>l.disable===!0?-1:l.tabindex||0),V=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(c.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),F=u(()=>{const k=w.value===!0?"truthy":h.value===!0?"falsy":"indet",L=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?w.value===!0:h.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${L}`}),x=u(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{"^checked":w.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),k}),T=Ft(x),A=u(()=>{const k={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":_.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function U(k){k!==void 0&&(Ee(k),r(k)),l.disable!==!0&&o("update:modelValue",K(),k)}function K(){if(q.value===!0){if(w.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(h.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function X(k){(k.keyCode===13||k.keyCode===32)&&Ee(k)}function $(k){(k.keyCode===13||k.keyCode===32)&&U(k)}const M=a(w,_);return Object.assign(f,{toggle:U}),()=>{const k=M();l.disable!==!0&&T(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const L=[n("div",{class:F.value,style:b.value,"aria-hidden":"true"},k)];m.value!==null&&L.push(m.value);const J=l.label!==void 0?Pe(d.default,[l.label]):ue(d.default);return J!==void 0&&L.push(n("div",{class:`q-${e}__label q-anchor--skip`},J)),n("div",{ref:v,class:V.value,...A.value,onClick:U,onKeydown:X,onKeyup:$},L)}}const Ut=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var we=z({name:"QCheckbox",props:Qt,emits:zt,setup(e){function a(l,d){const o=u(()=>(l.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(Ce,{class:"q-checkbox__icon",name:o.value})])]:[Ut]}return Ht("checkbox",a)}});let G=0;const Kt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Wt=["update:fullscreen","fullscreen"];function Gt(){const e=H(),{props:a,emit:l,proxy:d}=e;let o,f,i;const c=j(!1);kt(e)===!0&&p(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&r()}),p(()=>a.fullscreen,b=>{c.value!==b&&v()}),p(c,b=>{l("update:fullscreen",b),l("fullscreen",b)});function v(){c.value===!0?r():m()}function m(){c.value!==!0&&(c.value=!0,i=d.$el.parentNode,i.replaceChild(f,d.$el),document.body.appendChild(d.$el),G++,G===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:r},pe.add(o))}function r(){c.value===!0&&(o!==void 0&&(pe.remove(o),o=void 0),i.replaceChild(d.$el,f),c.value=!1,G=Math.max(0,G-1),G===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Ne(()=>{f=document.createElement("span")}),Qe(()=>{a.fullscreen===!0&&m()}),ze(r),Object.assign(d,{toggleFullscreen:v,setFullscreen:m,exitFullscreen:r}),{inFullscreen:c,toggleFullscreen:v}}function Xt(e,a){return new Date(e)-new Date(a)}const Jt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Yt(e,a,l,d){const o=u(()=>{const{sortBy:c}=a.value;return c&&l.value.find(v=>v.name===c)||null}),f=u(()=>e.sortMethod!==void 0?e.sortMethod:(c,v,m)=>{const r=l.value.find(C=>C.name===v);if(r===void 0||r.field===void 0)return c;const b=m===!0?-1:1,q=typeof r.field=="function"?C=>r.field(C):C=>C[r.field];return c.sort((C,w)=>{let h=q(C),_=q(w);return h==null?-1*b:_==null?1*b:r.sort!==void 0?r.sort(h,_,C,w)*b:ke(h)===!0&&ke(_)===!0?(h-_)*b:Me(h)===!0&&Me(_)===!0?Xt(h,_)*b:typeof h=="boolean"&&typeof _=="boolean"?(h-_)*b:([h,_]=[h,_].map(B=>(B+"").toLocaleString().toLowerCase()),h<_?-1*b:h===_?0:b)})});function i(c){let v=e.columnSortOrder;if(Ct(c)===!0)c.sortOrder&&(v=c.sortOrder),c=c.name;else{const b=l.value.find(q=>q.name===c);b!==void 0&&b.sortOrder&&(v=b.sortOrder)}let{sortBy:m,descending:r}=a.value;m!==c?(m=c,r=v==="da"):e.binaryStateSort===!0?r=!r:r===!0?v==="ad"?m=null:r=!1:v==="ad"?r=!0:m=null,d({sortBy:m,descending:r,page:1})}return{columnToSort:o,computedSortMethod:f,sort:i}}const Zt={filter:[String,Object],filterMethod:Function};function el(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,i)=>{const c=o?o.toLowerCase():"";return d.filter(v=>f.some(m=>{const r=i(m,v)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(c)!==-1}))});return p(()=>e.filter,()=>{Ke(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function tl(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ll={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function al(e,a){const{props:l,emit:d}=e,o=j(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length>0?l.rowsPerPageOptions[0]:5},l.pagination)),f=u(()=>{const r=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ae(r)}),i=u(()=>f.value.rowsNumber!==void 0);function c(r){v({pagination:r,filter:l.filter})}function v(r={}){Ke(()=>{d("request",{pagination:r.pagination||f.value,filter:r.filter||l.filter,getCellValue:a})})}function m(r,b){const q=Ae({...f.value,...r});if(tl(f.value,q)===!0){i.value===!0&&b===!0&&c(q);return}if(i.value===!0){c(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?d("update:pagination",q):o.value=q}return{innerPagination:o,computedPagination:f,isServerSide:i,requestServerInteraction:v,setPagination:m}}function nl(e,a,l,d,o,f){const{props:i,emit:c,proxy:{$q:v}}=e,m=u(()=>d.value===!0?l.value.rowsNumber||0:f.value),r=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),b=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),q=u(()=>l.value.page===1),C=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),w=u(()=>b.value===0?!0:l.value.page>=C.value),h=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?v.lang.table.allRows:""+T,value:T})));p(C,(x,T)=>{if(x===T)return;const A=l.value.page;x&&!A?o({page:1}):x<A&&o({page:x})});function _(){o({page:1})}function B(){const{page:x}=l.value;x>1&&o({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;b.value>0&&x*T<m.value&&o({page:x+1})}function F(){o({page:C.value})}return i["onUpdate:pagination"]!==void 0&&c("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:b,isFirstPage:q,isLastPage:w,pagesNumber:C,computedRowsPerPageOptions:h,computedRowsNumber:m,firstPage:_,prevPage:B,nextPage:V,lastPage:F}}const rl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ol=["update:selected","selection"];function il(e,a,l,d){const o=u(()=>{const w={};return e.selected.map(d.value).forEach(h=>{w[h]=!0}),w}),f=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),c=u(()=>e.selection==="multiple"),v=u(()=>l.value.length>0&&l.value.every(w=>o.value[d.value(w)]===!0)),m=u(()=>v.value!==!0&&l.value.some(w=>o.value[d.value(w)]===!0)),r=u(()=>e.selected.length);function b(w){return o.value[w]===!0}function q(){a("update:selected",[])}function C(w,h,_,B){a("selection",{rows:h,added:_,keys:w,evt:B});const V=i.value===!0?_===!0?h:[]:_===!0?e.selected.concat(h):e.selected.filter(F=>w.includes(d.value(F))===!1);a("update:selected",V)}return{hasSelectionMode:f,singleSelection:i,multipleSelection:c,allRowsSelected:v,someRowsSelected:m,rowsSelectedNumber:r,isRowSelected:b,clearSelection:q,updateSelection:C}}function Ie(e){return Array.isArray(e)?e.slice():[]}const ul={expanded:Array},sl=["update:expanded"];function cl(e,a){const l=j(Ie(e.expanded));p(()=>e.expanded,i=>{l.value=Ie(i)});function d(i){return l.value.includes(i)}function o(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function f(i,c){const v=l.value.slice(),m=v.indexOf(i);c===!0?m===-1&&(v.push(i),o(v)):m!==-1&&(v.splice(m,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const dl={visibleColumns:Array};function vl(e,a,l){const d=u(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(v=>({name:v,label:v.toUpperCase(),field:v,align:ke(c[v])?"right":"left",sortable:!0})):[]}),o=u(()=>{const{sortBy:c,descending:v}=a.value;return(e.visibleColumns!==void 0?d.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):d.value).map(r=>{const b=r.align||"right",q=`text-${b}`;return{...r,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:q+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===c?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>q+" "+r.classes:C=>q+" "+r.classes(C):()=>q}})}),f=u(()=>{const c={};return o.value.forEach(v=>{c[v.name]=v}),c}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:i}}const ie="q-table__bottom row items-center",Xe={};We.forEach(e=>{Xe[e]={}});var yl=z({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Xe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...se,...Kt,...dl,...Zt,...ll,...ul,...rl,...Jt},emits:["request","virtual-scroll",...Wt,...sl,...ol],setup(e,{slots:a,emit:l}){const d=H(),{proxy:{$q:o}}=d,f=ce(e,o),{inFullscreen:i,toggleFullscreen:c}=Gt(),v=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=j(null),r=j(null),b=u(()=>e.grid!==!0&&e.virtualScroll===!0),q=u(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),w=u(()=>C.value+(e.loading===!0?" q-table--loading":""));p(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{b.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:h,computedPagination:_,isServerSide:B,requestServerInteraction:V,setPagination:F}=al(d,I),{computedFilterMethod:x}=el(e,F),{isRowExpanded:T,setExpanded:A,updateExpanded:U}=cl(e,l),K=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=_.value;return e.filter&&(t=x.value(t,e.filter,D.value,I)),Ze.value!==null&&(t=et.value(e.rows===t?t.slice():t,s,g)),t}),X=u(()=>K.value.length),$=u(()=>{let t=K.value;if(B.value===!0)return t;const{rowsPerPage:s}=_.value;return s!==0&&(Z.value===0&&e.rows!==t?t.length>ee.value&&(t=t.slice(0,ee.value)):t=t.slice(Z.value,ee.value)),t}),{hasSelectionMode:M,singleSelection:k,multipleSelection:L,allRowsSelected:J,someRowsSelected:xe,rowsSelectedNumber:de,isRowSelected:ve,clearSelection:Je,updateSelection:Y}=il(e,l,$,v),{colList:Ye,computedCols:D,computedColsMap:Re,computedColspan:Te}=vl(e,_,M),{columnToSort:Ze,computedSortMethod:et,sort:fe}=Yt(e,_,Ye,F),{firstRowIndex:Z,lastRowIndex:ee,isFirstPage:ge,isLastPage:be,pagesNumber:te,computedRowsPerPageOptions:tt,computedRowsNumber:le,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye}=nl(d,h,_,B,F,X),lt=u(()=>$.value.length===0),at=u(()=>{const t={};return We.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function nt(){b.value===!0&&r.value.reset()}function rt(){if(e.grid===!0)return St();const t=e.hideHeader!==!0?$e:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],y={default:R=>Ve(R.item,a.body,R.index)};if(g!==void 0){const R=n("tbody",g({cols:D.value}));y.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(y.before=t);return S!==void 0&&(y.after=()=>n("tbody",S({cols:D.value}))),n(Mt,{ref:r,class:e.tableClass,style:e.tableStyle,...at.value,scrollTarget:e.virtualScrollTarget,items:$.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:it},y)}const s=[ut()];return t!==null&&s.unshift(t()),Ge({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function ot(t,s){if(r.value!==null){r.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),y=g.offsetTop-e.virtualScrollStickySizeStart,R=y<S.scrollTop?"decrease":"increase";S.scrollTop=y,l("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:R})}}function it(t){l("virtual-scroll",t)}function Be(){return[n(At,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(t,s,g){const S=v.value(t),y=ve(S);if(s!==void 0)return s(Oe({key:S,row:t,pageIndex:g,__trClass:y?"selected":""}));const R=a["body-cell"],P=D.value.map(O=>{const ne=a[`body-cell-${O.name}`],re=ne!==void 0?ne:R;return re!==void 0?re(st({key:S,row:t,pageIndex:g,col:O})):n("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},I(O,t))});if(M.value===!0){const O=a["body-selection"],ne=O!==void 0?O(ct({key:S,row:t,pageIndex:g})):[n(we,{modelValue:y,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(re,ht)=>{Y([S],[t],re,ht)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},ne))}const E={key:S,class:{selected:y}};return e.onRowClick!==void 0&&(E.class["cursor-pointer"]=!0,E.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(E.class["cursor-pointer"]=!0,E.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(E.class["cursor-pointer"]=!0,E.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),n("tr",E,P)}function ut(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let S=$.value.map((y,R)=>Ve(y,t,R));return s!==void 0&&(S=s({cols:D.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:D.value}))),n("tbody",S)}function Oe(t){return _e(t),t.cols=t.cols.map(s=>W({...s},"value",()=>I(s,t.row))),t}function st(t){return _e(t),W(t,"value",()=>I(t.col,t.row)),t}function ct(t){return _e(t),t}function _e(t){Object.assign(t,{cols:D.value,colsMap:Re.value,sort:fe,rowIndex:Z.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),M.value===!0&&W(t,"selected",()=>ve(t.key),(s,g)=>{Y([t.key],[t.row],s,g)}),W(t,"expand",()=>T(t.key),s=>{U(t.key,s)})}function I(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const N=u(()=>({pagination:_.value,pagesNumber:te.value,isFirstPage:ge.value,isLastPage:be.value,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,inFullscreen:i.value,toggleFullscreen:c}));function dt(){const t=a.top,s=a["top-left"],g=a["top-right"],S=a["top-selection"],y=M.value===!0&&S!==void 0&&de.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:R},[t(N.value)]);let P;if(y===!0?P=S(N.value).slice():(P=[],s!==void 0?P.push(n("div",{class:"q-table-control"},[s(N.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[g(N.value)]))),P.length!==0)return n("div",{class:R},P)}const Fe=u(()=>xe.value===!0?null:J.value);function $e(){const t=vt();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Te.value},Be())])),n("thead",t)}function vt(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const g=D.value.map(S=>{const y=a[`header-cell-${S.name}`],R=y!==void 0?y:s,P=qe({col:S});return R!==void 0?R(P):n($t,{key:S.name,props:P},()=>S.label)});if(k.value===!0&&e.grid!==!0)g.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(L.value===!0){const S=a["header-selection"],y=S!==void 0?S(qe({})):[n(we,{color:e.color,modelValue:Fe.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Le})];g.unshift(n("th",{class:"q-table--col-auto-width"},y))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function qe(t){return Object.assign(t,{cols:D.value,sort:fe,colsMap:Re.value,color:e.color,dark:f.value,dense:e.dense}),L.value===!0&&W(t,"selected",()=>Fe.value,Le),t}function Le(t){xe.value===!0&&(t=!1),Y($.value.map(v.value),$.value,t)}const ae=u(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ft(){if(e.hideBottom===!0)return;if(lt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,S=a["no-data"],y=S!==void 0?[S({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[n(Ce,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return n("div",{class:ie+" q-table__bottom--nodata"},y)}const t=a.bottom;if(t!==void 0)return n("div",{class:ie},[t(N.value)]);const s=e.hideSelectedBanner!==!0&&M.value===!0&&de.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(de.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ie+" justify-end"},bt(s));if(s.length>0)return n("div",{class:ie},s)}function gt(t){F({page:1,rowsPerPage:t.value})}function bt(t){let s;const{rowsPerPage:g}=_.value,S=e.paginationLabel||o.lang.table.pagination,y=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),R===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Vt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:tt.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":gt})])),y!==void 0)s=y(N.value);else if(s=[n("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(Z.value+1,Math.min(ee.value,le.value),le.value):S(1,X.value,le.value)])],g!==0&&te.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),te.value>2&&s.push(n(oe,{key:"pgFirst",...P,icon:ae.value[0],disable:ge.value,onClick:me})),s.push(n(oe,{key:"pgPrev",...P,icon:ae.value[1],disable:ge.value,onClick:Se}),n(oe,{key:"pgNext",...P,icon:ae.value[2],disable:be.value,onClick:he})),te.value>2&&s.push(n(oe,{key:"pgLast",...P,icon:ae.value[3],disable:be.value,onClick:ye}))}return t.push(n("div",{class:"q-table__control"},s)),t}function mt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[$e()])]:e.loading===!0&&a.loading===void 0?Be():void 0;return n("div",{class:"q-table__middle"},t)}function St(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(y=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[y.label]),n("div",{class:"q-table__grid-item-value"},[y.value])]));if(M.value===!0){const y=a["body-selection"],R=y!==void 0?y(s):[n(we,{modelValue:s.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,E)=>{Y([s.key],[s.row],P,E)}})];g.unshift(n("div",{class:"q-table__grid-item-row"},R),n(xt,{dark:f.value}))}const S={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=y=>{l("RowClick",y,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=y=>{l("RowDblclick",y,s.row,s.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[n("div",S,g)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},$.value.map((s,g)=>t(Oe({key:v.value(s),row:s,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:V,setPagination:F,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,isRowSelected:ve,clearSelection:Je,isRowExpanded:T,setExpanded:A,sort:fe,resetVirtualScroll:nt,scrollTo:ot,getCellValue:I}),Pt(d.proxy,{filteredSortedRows:()=>K.value,computedRows:()=>$.value,computedRowsNumber:()=>le.value}),()=>{const t=[dt()],s={ref:m,class:w.value};return e.grid===!0?t.push(mt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(rt(),ft()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",s,t)}}});export{yl as Q,zt as a,Ht as b,$t as c,Qt as u};
