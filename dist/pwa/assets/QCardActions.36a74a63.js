import{h as ae,i as ne,j as re,k as le,l as ue,m as oe,n as Y,o as ie,p as se,f as ce,g as fe}from"./QTable.f3671085.js";import{r as W,g as j,x as D,ab as de,c as b,F as L,k as ge,j as me,B as z,m as ee,aa as G,E as X,ay as ve,az as he}from"./index.8cc6e8e2.js";const J={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},K={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},te=Object.keys(K);te.forEach(e=>{K[e].regex=new RegExp(K[e].pattern)});const ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+te.join("")+"])|(.)","g"),p=/[.*+?^${}()|[\]\\]/g,m=String.fromCharCode(1),Me={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function xe(e,M,S,x){let c,g,O,R;const A=W(null),F=W(v());function E(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,C),j(()=>e.mask,t=>{if(t!==void 0)P(F.value,!0);else{const n=_(F.value);C(),e.modelValue!==n&&M("update:modelValue",n)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{A.value===!0&&P(F.value,!0)}),j(()=>e.unmaskedValue,()=>{A.value===!0&&P(F.value)});function v(){if(C(),A.value===!0){const t=$(_(e.modelValue));return e.fillMask!==!1?B(t):t}return e.modelValue}function N(t){if(t<c.length)return c.slice(-t);let n="",r=c;const l=r.indexOf(m);if(l>-1){for(let u=t-r.length;u>0;u--)n+=m;r=r.slice(0,l)+n+r.slice(l)}return r}function C(){if(A.value=e.mask!==void 0&&e.mask.length>0&&E(),A.value===!1){R=void 0,c="",g="";return}const t=J[e.mask]===void 0?e.mask:J[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(p,"\\$&"),l=[],u=[],o=[];let d=e.reverseFillMask===!0,i="",f="";t.replace(ke,(w,q,a,h,T)=>{if(h!==void 0){const k=K[h];o.push(k),f=k.negate,d===!0&&(u.push("(?:"+f+"+)?("+k.pattern+"+)?(?:"+f+"+)?("+k.pattern+"+)?"),d=!1),u.push("(?:"+f+"+)?("+k.pattern+")?")}else if(a!==void 0)i="\\"+(a==="\\"?"":a),o.push(a),l.push("([^"+i+"]+)?"+i+"?");else{const k=q!==void 0?q:T;i=k==="\\"?"\\\\\\\\":k.replace(p,"\\\\$&"),o.push(k),l.push("([^"+i+"]+)?"+i+"?")}});const V=new RegExp("^"+l.join("")+"("+(i===""?".":"[^"+i+"]")+"+)?"+(i===""?"":"["+i+"]*")+"$"),I=u.length-1,s=u.map((w,q)=>q===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+w):q===I?new RegExp("^"+w+"("+(f===""?".":f)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+w));O=o,R=w=>{const q=V.exec(w);q!==null&&(w=q.slice(1).join(""));const a=[],h=s.length;for(let T=0,k=w;T<h;T++){const H=s[T].exec(k);if(H===null)break;k=k.slice(H.shift().length),a.push(...H)}return a.length>0?a.join(""):w},c=o.map(w=>typeof w=="string"?w:m).join(""),g=c.split(m).join(n)}function P(t,n,r){const l=x.value,u=l.selectionEnd,o=l.value.length-u,d=_(t);n===!0&&C();const i=$(d),f=e.fillMask!==!1?B(i):i,V=F.value!==f;l.value!==f&&(l.value=f),V===!0&&(F.value=f),document.activeElement===l&&D(()=>{if(f===g){const s=e.reverseFillMask===!0?g.length:0;l.setSelectionRange(s,s,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const s=u-1;y.right(l,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const s=e.reverseFillMask===!0?u===0?f.length>i.length?1:0:Math.max(0,f.length-(f===g?0:Math.min(i.length,o)+1))+1:u;l.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(V===!0){const s=Math.max(0,f.length-(f===g?0:Math.min(i.length,o+1)));s===1&&u===1?l.setSelectionRange(s,s,"forward"):y.rightReverse(l,s,s)}else{const s=f.length-o;l.setSelectionRange(s,s,"backward")}else if(V===!0){const s=Math.max(0,c.indexOf(m),Math.min(i.length,u)-1);y.right(l,s,s)}else{const s=u-1;y.right(l,s,s)}});const I=e.unmaskedValue===!0?_(f):f;String(e.modelValue)!==I&&S(I,!0)}function Q(t,n,r){const l=$(_(t.value));n=Math.max(0,c.indexOf(m),Math.min(l.length,n)),t.setSelectionRange(n,r,"forward")}const y={left(t,n,r,l){const u=c.slice(n-1).indexOf(m)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(c[o]===m){n=o,u===!0&&n++;break}if(o<0&&c[n]!==void 0&&c[n]!==m)return y.right(t,0,0);n>=0&&t.setSelectionRange(n,l===!0?r:n,"backward")},right(t,n,r,l){const u=t.value.length;let o=Math.min(u,r+1);for(;o<=u;o++)if(c[o]===m){r=o;break}else c[o-1]===m&&(r=o);if(o>u&&c[r-1]!==void 0&&c[r-1]!==m)return y.left(t,u,u);t.setSelectionRange(l?n:r,r,"forward")},leftReverse(t,n,r,l){const u=N(t.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(u[o-1]===m){n=o;break}else if(u[o]===m&&(n=o,o===0))break;if(o<0&&u[n]!==void 0&&u[n]!==m)return y.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,l===!0?r:n,"backward")},rightReverse(t,n,r,l){const u=t.value.length,o=N(u),d=o.slice(0,r+1).indexOf(m)===-1;let i=Math.min(u,r+1);for(;i<=u;i++)if(o[i-1]===m){r=i,r>0&&d===!0&&r--;break}if(i>u&&o[r-1]!==void 0&&o[r-1]!==m)return y.leftReverse(t,u,u);t.setSelectionRange(l===!0?n:r,r,"forward")}};function U(t){if(de(t)===!0)return;const n=x.value,r=n.selectionStart,l=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const u=y[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),u(n,r,l,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&r===l?y.left(n,r,l,!0):t.keyCode===46&&e.reverseFillMask===!0&&r===l&&y.rightReverse(n,r,l,!0)}function $(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return Z(t);const n=O;let r=0,l="";for(let u=0;u<n.length;u++){const o=t[r],d=n[u];if(typeof d=="string")l+=d,o===d&&r++;else if(o!==void 0&&d.regex.test(o))l+=d.transform!==void 0?d.transform(o):o,r++;else return l}return l}function Z(t){const n=O,r=c.indexOf(m);let l=t.length-1,u="";for(let o=n.length-1;o>=0&&l>-1;o--){const d=n[o];let i=t[l];if(typeof d=="string")u=d+u,i===d&&l--;else if(i!==void 0&&d.regex.test(i))do u=(d.transform!==void 0?d.transform(i):i)+u,l--,i=t[l];while(r===o&&i!==void 0&&d.regex.test(i));else return u}return u}function _(t){return typeof t!="string"||R===void 0?typeof t=="number"?R(""+t):t:R(t)}function B(t){return g.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?g.slice(0,-t.length)+t:t+g.slice(t.length)}return{innerValue:F,hasMask:A,moveCursorForPaste:Q,updateMaskValue:P,onMaskedKeydown:U}}function we(e,M){function S(){const x=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(x)===x&&("length"in x?Array.from(x):[x]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return M===!0?b(()=>{if(e.type==="file")return S()}):b(S)}var be=L({name:"QInput",inheritAttrs:!1,props:{...ae,...Me,...ne,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...re,"paste","change"],setup(e,{emit:M,attrs:S}){const{proxy:x}=ee(),{$q:c}=x,g={};let O=NaN,R,A,F,E;const v=W(null),N=le(e),{innerValue:C,hasMask:P,moveCursorForPaste:Q,updateMaskValue:y,onMaskedKeydown:U}=xe(e,M,f,v),$=we(e,!0),Z=b(()=>Y(C.value)),_=se(i),B=ue(),t=b(()=>e.type==="textarea"||e.autogrow===!0),n=b(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),r=b(()=>{const a={...B.splitAttrs.listeners.value,onInput:i,onPaste:d,onChange:I,onBlur:s,onFocus:G};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=_,P.value===!0&&(a.onKeydown=U),e.autogrow===!0&&(a.onAnimationend=V),a}),l=b(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:N.value,...B.splitAttrs.attributes.value,id:B.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});j(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),j(()=>e.modelValue,a=>{if(P.value===!0){if(A===!0&&(A=!1,String(a)===O))return;y(a)}else C.value!==a&&(C.value=a,e.type==="number"&&g.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete g.value));e.autogrow===!0&&D(V)}),j(()=>e.autogrow,a=>{a===!0?D(V):v.value!==null&&S.rows>0&&(v.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&D(V)});function u(){ie(()=>{const a=document.activeElement;v.value!==null&&v.value!==a&&(a===null||a.id!==B.targetUid.value)&&v.value.focus({preventScroll:!0})})}function o(){v.value!==null&&v.value.select()}function d(a){if(P.value===!0&&e.reverseFillMask!==!0){const h=a.target;Q(h,h.selectionStart,h.selectionEnd)}M("paste",a)}function i(a){if(!a||!a.target)return;if(e.type==="file"){M("update:modelValue",a.target.files);return}const h=a.target.value;if(a.target.qComposing===!0){g.value=h;return}if(P.value===!0)y(h,!1,a.inputType);else if(f(h),n.value===!0&&a.target===document.activeElement){const{selectionStart:T,selectionEnd:k}=a.target;T!==void 0&&k!==void 0&&D(()=>{a.target===document.activeElement&&h.indexOf(a.target.value)===0&&a.target.setSelectionRange(T,k)})}e.autogrow===!0&&V()}function f(a,h){E=()=>{e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==a&&O!==a&&(O=a,h===!0&&(A=!0),M("update:modelValue",a),D(()=>{O===a&&(O=NaN)})),E=void 0},e.type==="number"&&(R=!0,g.value=a),e.debounce!==void 0?(clearTimeout(F),g.value=a,F=setTimeout(E,e.debounce)):E()}function V(){requestAnimationFrame(()=>{const a=v.value;if(a!==null){const h=a.parentNode.style,{overflow:T}=a.style;c.platform.is.firefox!==!0&&(a.style.overflow="hidden"),a.style.height="1px",h.marginBottom=a.scrollHeight-1+"px",a.style.height=a.scrollHeight+"px",a.style.overflow=T,h.marginBottom=""}})}function I(a){_(a),clearTimeout(F),E!==void 0&&E(),M("change",a.target.value)}function s(a){a!==void 0&&G(a),clearTimeout(F),E!==void 0&&E(),R=!1,A=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=C.value!==void 0?C.value:"")})}function w(){return g.hasOwnProperty("value")===!0?g.value:C.value!==void 0?C.value:""}ge(()=>{s()}),me(()=>{e.autogrow===!0&&V()}),Object.assign(B,{innerValue:C,fieldClass:b(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:v,emitValue:f,hasValue:Z,floatingLabel:b(()=>Z.value===!0||Y(e.displayValue)),getControl:()=>z(t.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...r.value,...e.type!=="file"?{value:w()}:$.value}),getShadowControl:()=>z("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[z("span",{class:"invisible"},w()),z("span",e.shadowText)])});const q=oe(B);return Object.assign(x,{focus:u,select:o,getNativeElement:()=>v.value}),q}}),Se=L({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:M}){const S=b(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>z(e.tag,{class:S.value},X(M.default))}}),Fe=L({name:"QCard",props:{...ce,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:M}){const{proxy:{$q:S}}=ee(),x=fe(e,S),c=b(()=>"q-card"+(x.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>z(e.tag,{class:c.value},X(M.default))}}),Ve=L({name:"QCardActions",props:{...ve,vertical:Boolean},setup(e,{slots:M}){const S=he(e),x=b(()=>`q-card__actions ${S.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>z("div",{class:x.value},X(M.default))}});export{be as Q,Fe as a,Se as b,Ve as c};