var F={exports:{}},re=function(e,t){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return e.apply(t,a)}},ve=re,w=Object.prototype.toString;function H(r){return w.call(r)==="[object Array]"}function D(r){return typeof r=="undefined"}function ye(r){return r!==null&&!D(r)&&r.constructor!==null&&!D(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function be(r){return w.call(r)==="[object ArrayBuffer]"}function we(r){return typeof FormData!="undefined"&&r instanceof FormData}function Ee(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function ge(r){return typeof r=="string"}function xe(r){return typeof r=="number"}function te(r){return r!==null&&typeof r=="object"}function A(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Se(r){return w.call(r)==="[object Date]"}function Ce(r){return w.call(r)==="[object File]"}function Oe(r){return w.call(r)==="[object Blob]"}function ne(r){return w.call(r)==="[object Function]"}function Re(r){return te(r)&&ne(r.pipe)}function Ae(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function je(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ne(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function M(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),H(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.call(null,r[a],a,r)}function q(){var r={};function e(a,i){A(r[i])&&A(a)?r[i]=q(r[i],a):A(a)?r[i]=q({},a):H(a)?r[i]=a.slice():r[i]=a}for(var t=0,n=arguments.length;t<n;t++)M(arguments[t],e);return r}function $e(r,e,t){return M(e,function(a,i){t&&typeof a=="function"?r[i]=ve(a,t):r[i]=a}),r}function Pe(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:H,isArrayBuffer:be,isBuffer:ye,isFormData:we,isArrayBufferView:Ee,isString:ge,isNumber:xe,isObject:te,isPlainObject:A,isUndefined:D,isDate:Se,isFile:Ce,isBlob:Oe,isFunction:ne,isStream:Re,isURLSearchParams:Ae,isStandardBrowserEnv:Ne,forEach:M,merge:q,extend:$e,trim:je,stripBOM:Pe},g=h;function z(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ae=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(g.isURLSearchParams(t))a=t.toString();else{var i=[];g.forEach(t,function(s,v){s===null||typeof s=="undefined"||(g.isArray(s)?v=v+"[]":s=[s],g.forEach(s,function(l){g.isDate(l)?l=l.toISOString():g.isObject(l)&&(l=JSON.stringify(l)),i.push(z(v)+"="+z(l))}))}),a=i.join("&")}if(a){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},Te=h;function $(){this.handlers=[]}$.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){Te.forEach(this.handlers,function(n){n!==null&&e(n)})};var ke=$,Ue=h,Le=function(e,t){Ue.forEach(e,function(a,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[i])})},se=function(e,t,n,a,i){return e.config=t,n&&(e.code=n),e.request=a,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},Be=se,ie=function(e,t,n,a,i){var o=new Error(e);return Be(o,t,n,a,i)},De=ie,qe=function(e,t,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(De("Request failed with status code "+n.status,n.config,null,n.request,n))},O=h,Fe=O.isStandardBrowserEnv()?function(){return{write:function(t,n,a,i,o,u){var s=[];s.push(t+"="+encodeURIComponent(n)),O.isNumber(a)&&s.push("expires="+new Date(a).toGMTString()),O.isString(i)&&s.push("path="+i),O.isString(o)&&s.push("domain="+o),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),He=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Me=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Ie=He,_e=Me,Je=function(e,t){return e&&!Ie(t)?_e(e,t):t},k=h,ze=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ve=function(e){var t={},n,a,i;return e&&k.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=k.trim(u.substr(0,i)).toLowerCase(),a=k.trim(u.substr(i+1)),n){if(t[n]&&ze.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([a]):t[n]=t[n]?t[n]+", "+a:a}}),t},V=h,Ke=V.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function a(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=a(window.location.href),function(o){var u=V.isString(o)?a(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),R=h,We=qe,Xe=Fe,Ge=ae,Ye=Je,Ze=Ve,Qe=Ke,U=ie,K=function(e){return new Promise(function(n,a){var i=e.data,o=e.headers,u=e.responseType;R.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(v+":"+E)}var l=Ye(e.baseURL,e.url);s.open(e.method.toUpperCase(),Ge(l,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function f(){if(!!s){var b="getAllResponseHeaders"in s?Ze(s.getAllResponseHeaders()):null,y=!u||u==="text"||u==="json"?s.responseText:s.response,S={data:y,status:s.status,statusText:s.statusText,headers:b,config:e,request:s};We(n,a,S),s=null}}if("onloadend"in s?s.onloadend=f:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(f)},s.onabort=function(){!s||(a(U("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){a(U("Network Error",e,null,s)),s=null},s.ontimeout=function(){var y="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),a(U(y,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},R.isStandardBrowserEnv()){var c=(e.withCredentials||Qe(l))&&e.xsrfCookieName?Xe.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}"setRequestHeader"in s&&R.forEach(o,function(y,S){typeof i=="undefined"&&S.toLowerCase()==="content-type"?delete o[S]:s.setRequestHeader(S,y)}),R.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(y){!s||(s.abort(),a(y),s=null)}),i||(i=null),s.send(i)})},d=h,W=Le,er=se,rr={"Content-Type":"application/x-www-form-urlencoded"};function X(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function tr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=K),r}function nr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var P={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:tr(),transformRequest:[function(e,t){return W(t,"Accept"),W(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(X(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||t&&t["Content-Type"]==="application/json"?(X(t,"application/json"),nr(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||a&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?er(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};P.headers={common:{Accept:"application/json, text/plain, */*"}};d.forEach(["delete","get","head"],function(e){P.headers[e]={}});d.forEach(["post","put","patch"],function(e){P.headers[e]=d.merge(rr)});var I=P,ar=h,sr=I,ir=function(e,t,n){var a=this||sr;return ar.forEach(n,function(o){e=o.call(a,e,t)}),e},oe=function(e){return!!(e&&e.__CANCEL__)},G=h,L=ir,or=oe,ur=I;function B(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var cr=function(e){B(e),e.headers=e.headers||{},e.data=L.call(e,e.data,e.headers,e.transformRequest),e.headers=G.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),G.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var t=e.adapter||ur.adapter;return t(e).then(function(a){return B(e),a.data=L.call(e,a.data,a.headers,e.transformResponse),a},function(a){return or(a)||(B(e),a&&a.response&&(a.response.data=L.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},p=h,ue=function(e,t){t=t||{};var n={},a=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function s(f,c){return p.isPlainObject(f)&&p.isPlainObject(c)?p.merge(f,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function v(f){p.isUndefined(t[f])?p.isUndefined(e[f])||(n[f]=s(void 0,e[f])):n[f]=s(e[f],t[f])}p.forEach(a,function(c){p.isUndefined(t[c])||(n[c]=s(void 0,t[c]))}),p.forEach(i,v),p.forEach(o,function(c){p.isUndefined(t[c])?p.isUndefined(e[c])||(n[c]=s(void 0,e[c])):n[c]=s(void 0,t[c])}),p.forEach(u,function(c){c in t?n[c]=s(e[c],t[c]):c in e&&(n[c]=s(void 0,e[c]))});var E=a.concat(i).concat(o).concat(u),l=Object.keys(e).concat(Object.keys(t)).filter(function(c){return E.indexOf(c)===-1});return p.forEach(l,v),n};const fr="axios",lr="0.21.4",dr="Promise based HTTP client for the browser and node.js",pr="index.js",hr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},mr={type:"git",url:"https://github.com/axios/axios.git"},vr=["xhr","http","ajax","promise","node"],yr="Matt Zabriskie",br="MIT",wr={url:"https://github.com/axios/axios/issues"},Er="https://axios-http.com",gr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},xr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Sr="dist/axios.min.js",Cr="dist/axios.min.js",Or="./index.d.ts",Rr={"follow-redirects":"^1.14.0"},Ar=[{path:"./dist/axios.min.js",threshold:"5kB"}];var jr={name:fr,version:lr,description:dr,main:pr,scripts:hr,repository:mr,keywords:vr,author:yr,license:br,bugs:wr,homepage:Er,devDependencies:gr,browser:xr,jsdelivr:Sr,unpkg:Cr,typings:Or,dependencies:Rr,bundlesize:Ar},ce=jr,_={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){_[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var Y={},Nr=ce.version.split(".");function fe(r,e){for(var t=e?e.split("."):Nr,n=r.split("."),a=0;a<3;a++){if(t[a]>n[a])return!0;if(t[a]<n[a])return!1}return!1}_.transitional=function(e,t,n){var a=t&&fe(t);function i(o,u){return"[Axios v"+ce.version+"] Transitional option '"+o+"'"+u+(n?". "+n:"")}return function(o,u,s){if(e===!1)throw new Error(i(u," has been removed in "+t));return a&&!Y[u]&&(Y[u]=!0,console.warn(i(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,u,s):!0}};function $r(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),a=n.length;a-- >0;){var i=n[a],o=e[i];if(o){var u=r[i],s=u===void 0||o(u,i,r);if(s!==!0)throw new TypeError("option "+i+" must be "+s);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Pr={isOlderVersion:fe,assertOptions:$r,validators:_},le=h,Tr=ae,Z=ke,Q=cr,T=ue,de=Pr,x=de.validators;function C(r){this.defaults=r,this.interceptors={request:new Z,response:new Z}}C.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=T(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&de.assertOptions(t,{silentJSONParsing:x.transitional(x.boolean,"1.0.0"),forcedJSONParsing:x.transitional(x.boolean,"1.0.0"),clarifyTimeoutError:x.transitional(x.boolean,"1.0.0")},!1);var n=[],a=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(a=a&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!a){var u=[Q,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var s=e;n.length;){var v=n.shift(),E=n.shift();try{s=v(s)}catch(l){E(l);break}}try{o=Q(s)}catch(l){return Promise.reject(l)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};C.prototype.getUri=function(e){return e=T(this.defaults,e),Tr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};le.forEach(["delete","get","head","options"],function(e){C.prototype[e]=function(t,n){return this.request(T(n||{},{method:e,url:t,data:(n||{}).data}))}});le.forEach(["post","put","patch"],function(e){C.prototype[e]=function(t,n,a){return this.request(T(a||{},{method:e,url:t,data:n}))}});var kr=C;function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var pe=J,Ur=pe;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var t=this;r(function(a){t.reason||(t.reason=new Ur(a),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.source=function(){var e,t=new N(function(a){e=a});return{token:t,cancel:e}};var Lr=N,Br=function(e){return function(n){return e.apply(null,n)}},Dr=function(e){return typeof e=="object"&&e.isAxiosError===!0},ee=h,qr=re,j=kr,Fr=ue,Hr=I;function he(r){var e=new j(r),t=qr(j.prototype.request,e);return ee.extend(t,j.prototype,e),ee.extend(t,e),t}var m=he(Hr);m.Axios=j;m.create=function(e){return he(Fr(m.defaults,e))};m.Cancel=pe;m.CancelToken=Lr;m.isCancel=oe;m.all=function(e){return Promise.all(e)};m.spread=Br;m.isAxiosError=Dr;F.exports=m;F.exports.default=m;var Mr=F.exports,me=Mr;const Ir=me.create({baseURL:"http://192.168.10.189/vizapi/public/L"}),_r=me.create({baseURL:"http://192.168.10.61:1619/Assist/public/api/restock"});Ir.interceptors.response.use(r=>r,r=>(r.response?r.response.status==511&&alert(r.response.data):(console.log("%cNememes el servidor no anda jalando!","background:red;padding:5px;font-size:2em;color:white;"),alert("Error: Sin conexion al servidor")),Promise.reject(r)));export{_r as assistdb,Ir as vizapi};