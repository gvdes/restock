import{vizapi as M}from"./axios.625f35ec.js";import{f as ne,g as le,h as se,i as oe,j as ue,k as ie,l as Y,m as ce,n as de,o as fe,p as he,q as ge,r as ve}from"./QPage.a8b89497.js";import{r as W,g as O,x as j,ab as me,c as S,F as Z,k as ke,j as ye,B,m as ae,aa as G,E as X,aq as xe,ar as Me,as as we,M as be}from"./index.a5a34942.js";var Ve={index(e,n="all"){let t=`/restock?v=${e}&d=${n}`;return M.get(t).then(f=>f.data).catch(f=>f)},order(e){let n=`/restock/${e}`;return M.get(n).then(t=>t).catch(t=>t.response)},nextState(e){let n="/restock/changestate";return M.post(n,e).then(t=>t).catch(t=>t.response)},setDeliveryProduct(e){let n="/restock/setdelivery";return M.post(n,e).then(t=>t).catch(t=>t.response)},setReceiveProduct(e){let n="/restock/setreceived";return M.post(n,e).then(t=>t).catch(t=>t.response)},orderFresh(e){let n=`/restock/${e}/fresh`;return M.get(n).then(t=>t).catch(t=>t.response)},genInvoice(e,n){let t=`/restock/${e}/${n}/newinvoice`;return M.get(t).then(f=>f).catch(f=>f.response)},genEntry(e){let n=`/restock/${e}/newentry`;return M.get(n).then(t=>t).catch(t=>t.response)},checkin(e){let n="/restock/checkin";return M.post(n,e).then(t=>t).catch(t=>t.response)},checkinInit(e){let n="/restock/checkininit";return M.post(n,e).then(t=>t).catch(t=>t.response)},report(e){let n=`/restock/report/${e}`;return M.get(n).then(t=>t).catch(t=>t.response)},massiveAction(e){let n="/restock/massaction";return M.post(n,e).then(t=>t).catch(t=>t.response)},printForSupply(e){let n="/restock/print/forsupply";return M.post(n,e).then(t=>t).catch(t=>t.response)},printKey(e){let n="/restock/print/key";return M.post(n,e).then(t=>t).catch(t=>t.response)},createAutomate(e){let n="/restock/create";return M.post(n,e).then(t=>t).catch(t=>t.response)},suc(){let e="/restock/suc";return M.get(e).then(n=>n).catch(n=>n.response)},printForPartition(e){let n="/restock/print/Partition";return M.post(n,e).then(t=>t).catch(t=>t.response)}};const J={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},L={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},re=Object.keys(L);re.forEach(e=>{L[e].regex=new RegExp(L[e].pattern)});const pe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+re.join("")+"])|(.)","g"),ee=/[.*+?^${}()|[\]\\]/g,k=String.fromCharCode(1),Ce={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Se(e,n,t,f){let h,m,_,R;const E=W(null),F=W(y());function V(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}O(()=>e.type+e.autogrow,C),O(()=>e.mask,a=>{if(a!==void 0)T(F.value,!0);else{const l=I(F.value);C(),e.modelValue!==l&&n("update:modelValue",l)}}),O(()=>e.fillMask+e.reverseFillMask,()=>{E.value===!0&&T(F.value,!0)}),O(()=>e.unmaskedValue,()=>{E.value===!0&&T(F.value)});function y(){if(C(),E.value===!0){const a=z(I(e.modelValue));return e.fillMask!==!1?$(a):a}return e.modelValue}function K(a){if(a<h.length)return h.slice(-a);let l="",s=h;const o=s.indexOf(k);if(o>-1){for(let u=a-s.length;u>0;u--)l+=k;s=s.slice(0,o)+l+s.slice(o)}return s}function C(){if(E.value=e.mask!==void 0&&e.mask.length>0&&V(),E.value===!1){R=void 0,h="",m="";return}const a=J[e.mask]===void 0?e.mask:J[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=l.replace(ee,"\\$&"),o=[],u=[],i=[];let v=e.reverseFillMask===!0,c="",g="";a.replace(pe,(b,q,r,x,P)=>{if(x!==void 0){const w=L[x];i.push(w),g=w.negate,v===!0&&(u.push("(?:"+g+"+)?("+w.pattern+"+)?(?:"+g+"+)?("+w.pattern+"+)?"),v=!1),u.push("(?:"+g+"+)?("+w.pattern+")?")}else if(r!==void 0)c="\\"+(r==="\\"?"":r),i.push(r),o.push("([^"+c+"]+)?"+c+"?");else{const w=q!==void 0?q:P;c=w==="\\"?"\\\\\\\\":w.replace(ee,"\\\\$&"),i.push(w),o.push("([^"+c+"]+)?"+c+"?")}});const A=new RegExp("^"+o.join("")+"("+(c===""?".":"[^"+c+"]")+"+)?"+(c===""?"":"["+c+"]*")+"$"),D=u.length-1,d=u.map((b,q)=>q===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+b):q===D?new RegExp("^"+b+"("+(g===""?".":g)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+b));_=i,R=b=>{const q=A.exec(b);q!==null&&(b=q.slice(1).join(""));const r=[],x=d.length;for(let P=0,w=b;P<x;P++){const H=d[P].exec(w);if(H===null)break;w=w.slice(H.shift().length),r.push(...H)}return r.length>0?r.join(""):b},h=i.map(b=>typeof b=="string"?b:k).join(""),m=h.split(k).join(l)}function T(a,l,s){const o=f.value,u=o.selectionEnd,i=o.value.length-u,v=I(a);l===!0&&C();const c=z(v),g=e.fillMask!==!1?$(c):c,A=F.value!==g;o.value!==g&&(o.value=g),A===!0&&(F.value=g),document.activeElement===o&&j(()=>{if(g===m){const d=e.reverseFillMask===!0?m.length:0;o.setSelectionRange(d,d,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const d=u-1;p.right(o,d,d);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const d=e.reverseFillMask===!0?u===0?g.length>c.length?1:0:Math.max(0,g.length-(g===m?0:Math.min(c.length,i)+1))+1:u;o.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(A===!0){const d=Math.max(0,g.length-(g===m?0:Math.min(c.length,i+1)));d===1&&u===1?o.setSelectionRange(d,d,"forward"):p.rightReverse(o,d,d)}else{const d=g.length-i;o.setSelectionRange(d,d,"backward")}else if(A===!0){const d=Math.max(0,h.indexOf(k),Math.min(c.length,u)-1);p.right(o,d,d)}else{const d=u-1;p.right(o,d,d)}});const D=e.unmaskedValue===!0?I(g):g;String(e.modelValue)!==D&&t(D,!0)}function Q(a,l,s){const o=z(I(a.value));l=Math.max(0,h.indexOf(k),Math.min(o.length,l)),a.setSelectionRange(l,s,"forward")}const p={left(a,l,s,o){const u=h.slice(l-1).indexOf(k)===-1;let i=Math.max(0,l-1);for(;i>=0;i--)if(h[i]===k){l=i,u===!0&&l++;break}if(i<0&&h[l]!==void 0&&h[l]!==k)return p.right(a,0,0);l>=0&&a.setSelectionRange(l,o===!0?s:l,"backward")},right(a,l,s,o){const u=a.value.length;let i=Math.min(u,s+1);for(;i<=u;i++)if(h[i]===k){s=i;break}else h[i-1]===k&&(s=i);if(i>u&&h[s-1]!==void 0&&h[s-1]!==k)return p.left(a,u,u);a.setSelectionRange(o?l:s,s,"forward")},leftReverse(a,l,s,o){const u=K(a.value.length);let i=Math.max(0,l-1);for(;i>=0;i--)if(u[i-1]===k){l=i;break}else if(u[i]===k&&(l=i,i===0))break;if(i<0&&u[l]!==void 0&&u[l]!==k)return p.rightReverse(a,0,0);l>=0&&a.setSelectionRange(l,o===!0?s:l,"backward")},rightReverse(a,l,s,o){const u=a.value.length,i=K(u),v=i.slice(0,s+1).indexOf(k)===-1;let c=Math.min(u,s+1);for(;c<=u;c++)if(i[c-1]===k){s=c,s>0&&v===!0&&s--;break}if(c>u&&i[s-1]!==void 0&&i[s-1]!==k)return p.leftReverse(a,u,u);a.setSelectionRange(o===!0?l:s,s,"forward")}};function U(a){if(me(a)===!0)return;const l=f.value,s=l.selectionStart,o=l.selectionEnd;if(a.keyCode===37||a.keyCode===39){const u=p[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),u(l,s,o,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?p.left(l,s,o,!0):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&p.rightReverse(l,s,o,!0)}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return N(a);const l=_;let s=0,o="";for(let u=0;u<l.length;u++){const i=a[s],v=l[u];if(typeof v=="string")o+=v,i===v&&s++;else if(i!==void 0&&v.regex.test(i))o+=v.transform!==void 0?v.transform(i):i,s++;else return o}return o}function N(a){const l=_,s=h.indexOf(k);let o=a.length-1,u="";for(let i=l.length-1;i>=0&&o>-1;i--){const v=l[i];let c=a[o];if(typeof v=="string")u=v+u,c===v&&o--;else if(c!==void 0&&v.regex.test(c))do u=(v.transform!==void 0?v.transform(c):c)+u,o--,c=a[o];while(s===i&&c!==void 0&&v.regex.test(c));else return u}return u}function I(a){return typeof a!="string"||R===void 0?typeof a=="number"?R(""+a):a:R(a)}function $(a){return m.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?m.slice(0,-a.length)+a:a+m.slice(a.length)}return{innerValue:F,hasMask:E,moveCursorForPaste:Q,updateMaskValue:T,onMaskedKeydown:U}}function Fe(e,n){function t(){const f=e.modelValue;try{const h="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(f)===f&&("length"in f?Array.from(f):[f]).forEach(m=>{h.items.add(m)}),{files:h.files}}catch{return{files:void 0}}}return n===!0?S(()=>{if(e.type==="file")return t()}):S(t)}var qe=Z({name:"QInput",inheritAttrs:!1,props:{...ne,...Ce,...le,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...se,"paste","change"],setup(e,{emit:n,attrs:t}){const{proxy:f}=ae(),{$q:h}=f,m={};let _=NaN,R,E,F,V;const y=W(null),K=oe(e),{innerValue:C,hasMask:T,moveCursorForPaste:Q,updateMaskValue:p,onMaskedKeydown:U}=Se(e,n,g,y),z=Fe(e,!0),N=S(()=>Y(C.value)),I=de(c),$=ue(),a=S(()=>e.type==="textarea"||e.autogrow===!0),l=S(()=>a.value===!0||["text","search","url","tel","password"].includes(e.type)),s=S(()=>{const r={...$.splitAttrs.listeners.value,onInput:c,onPaste:v,onChange:D,onBlur:d,onFocus:G};return r.onCompositionstart=r.onCompositionupdate=r.onCompositionend=I,T.value===!0&&(r.onKeydown=U),e.autogrow===!0&&(r.onAnimationend=A),r}),o=S(()=>{const r={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:K.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return a.value===!1&&(r.type=e.type),e.autogrow===!0&&(r.rows=1),r});O(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),O(()=>e.modelValue,r=>{if(T.value===!0){if(E===!0&&(E=!1,String(r)===_))return;p(r)}else C.value!==r&&(C.value=r,e.type==="number"&&m.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete m.value));e.autogrow===!0&&j(A)}),O(()=>e.autogrow,r=>{r===!0?j(A):y.value!==null&&t.rows>0&&(y.value.style.height="auto")}),O(()=>e.dense,()=>{e.autogrow===!0&&j(A)});function u(){ce(()=>{const r=document.activeElement;y.value!==null&&y.value!==r&&(r===null||r.id!==$.targetUid.value)&&y.value.focus({preventScroll:!0})})}function i(){y.value!==null&&y.value.select()}function v(r){if(T.value===!0&&e.reverseFillMask!==!0){const x=r.target;Q(x,x.selectionStart,x.selectionEnd)}n("paste",r)}function c(r){if(!r||!r.target)return;if(e.type==="file"){n("update:modelValue",r.target.files);return}const x=r.target.value;if(r.target.qComposing===!0){m.value=x;return}if(T.value===!0)p(x,!1,r.inputType);else if(g(x),l.value===!0&&r.target===document.activeElement){const{selectionStart:P,selectionEnd:w}=r.target;P!==void 0&&w!==void 0&&j(()=>{r.target===document.activeElement&&x.indexOf(r.target.value)===0&&r.target.setSelectionRange(P,w)})}e.autogrow===!0&&A()}function g(r,x){V=()=>{e.type!=="number"&&m.hasOwnProperty("value")===!0&&delete m.value,e.modelValue!==r&&_!==r&&(_=r,x===!0&&(E=!0),n("update:modelValue",r),j(()=>{_===r&&(_=NaN)})),V=void 0},e.type==="number"&&(R=!0,m.value=r),e.debounce!==void 0?(clearTimeout(F),m.value=r,F=setTimeout(V,e.debounce)):V()}function A(){requestAnimationFrame(()=>{const r=y.value;if(r!==null){const x=r.parentNode.style,{overflow:P}=r.style;h.platform.is.firefox!==!0&&(r.style.overflow="hidden"),r.style.height="1px",x.marginBottom=r.scrollHeight-1+"px",r.style.height=r.scrollHeight+"px",r.style.overflow=P,x.marginBottom=""}})}function D(r){I(r),clearTimeout(F),V!==void 0&&V(),n("change",r.target.value)}function d(r){r!==void 0&&G(r),clearTimeout(F),V!==void 0&&V(),R=!1,E=!1,delete m.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=C.value!==void 0?C.value:"")})}function b(){return m.hasOwnProperty("value")===!0?m.value:C.value!==void 0?C.value:""}ke(()=>{d()}),ye(()=>{e.autogrow===!0&&A()}),Object.assign($,{innerValue:C,fieldClass:S(()=>`q-${a.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:S(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:y,emitValue:g,hasValue:N,floatingLabel:S(()=>N.value===!0||Y(e.displayValue)),getControl:()=>B(a.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...s.value,...e.type!=="file"?{value:b()}:z.value}),getShadowControl:()=>B("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(a.value===!0?"":" text-no-wrap")},[B("span",{class:"invisible"},b()),B("span",e.shadowText)])});const q=ie($);return Object.assign(f,{focus:u,select:i,getNativeElement:()=>y.value}),q}}),Pe=Z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const t=S(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>B(e.tag,{class:t.value},X(n.default))}}),_e=Z({name:"QCard",props:{...fe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=ae(),f=he(e,t),h=S(()=>"q-card"+(f.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>B(e.tag,{class:h.value},X(n.default))}}),Te=Z({name:"QCardActions",props:{...xe,vertical:Boolean},setup(e,{slots:n}){const t=Me(e),f=S(()=>`q-card__actions ${t.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>B("div",{class:f.value},X(n.default))}});function te(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var $e=we({name:"close-popup",beforeMount(e,{value:n}){const t={depth:te(n),handler(f){t.depth!==0&&setTimeout(()=>{const h=ge(e);h!==void 0&&ve(h,f,t.depth)})},handlerKey(f){be(f,13)===!0&&t.handler(f)}};e.__qclosepopup=t,e.addEventListener("click",t.handler),e.addEventListener("keyup",t.handlerKey)},updated(e,{value:n,oldValue:t}){n!==t&&(e.__qclosepopup.depth=te(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}});export{$e as C,qe as Q,Ve as R,_e as a,Pe as b,Te as c};