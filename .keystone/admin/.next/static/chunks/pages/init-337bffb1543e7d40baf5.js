(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{8955:function(t,e,r){"use strict";r.d(e,{S:function(){return o}});var n=r(5614);const o=({children:t})=>{const{colors:e,shadow:r}=(0,n.Fg)();return(0,n.tZ)(n.M5,{css:{minWidth:"100vw",minHeight:"100vh",backgroundColor:e.backgroundMuted},rounding:"medium"},(0,n.tZ)(n.xu,{css:{background:e.background,width:600,boxShadow:r.s100},margin:"medium",padding:"xlarge",rounding:"medium"},t))}},3716:function(t,e,r){"use strict";r.d(e,{H:function(){return _},P:function(){return j}});var n=r(7896),o=r(5614),i=r(2784),a=r(9740),s=r(5632),l=r(5631),u=r(6361),c=r(891),d=r(5273),h=r(6964),f=r(3485),p=r(1428),y=r(9097);const g=()=>{var t;const{spacing:e}=(0,o.Fg)(),{adminConfig:r}=(0,h.jf)();return null!==(t=r.components)&&void 0!==t&&t.Logo?(0,o.tZ)(r.components.Logo,null):(0,o.tZ)(o.H3,null,(0,o.tZ)(y.default,{href:"/",passHref:!0},(0,o.tZ)("a",{css:{backgroundImage:"linear-gradient(to right, #0ea5e9, #6366f1)",backgroundClip:"text",lineHeight:"1.75rem",color:"transparent",verticalAlign:"middle",transition:"color 0.3s ease",textDecoration:"none"}},(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 220 220",css:{display:"inline-block",width:"2rem",height:"2rem",margin:`0  ${e.medium}px ${e.xsmall}px 0`,verticalAlign:"middle"}},(0,o.tZ)("defs",null,(0,o.tZ)("linearGradient",{id:"logo-a",x1:"0%",x2:"50%",y1:"0%",y2:"71.9%"},(0,o.tZ)("stop",{offset:"0%",stopColor:"#5AE8FA"}),(0,o.tZ)("stop",{offset:"100%",stopColor:"#2684FF"}))),(0,o.tZ)("path",{fill:"url(#logo-a)",fillRule:"evenodd",d:"M290.1 47h117.5c17.8 0 24.3 1.9 30.8 5.3a36.3 36.3 0 0115.1 15.2c3.5 6.5 5.4 13 5.4 30.8v117.4c0 17.9-1.9 24.3-5.4 30.8a36.3 36.3 0 01-15.1 15.2c-6.5 3.4-13 5.3-30.8 5.3H290c-17.8 0-24.3-1.9-30.8-5.3a36.3 36.3 0 01-15.1-15.2c-3.5-6.5-5.3-13-5.3-30.8V98.3c0-17.9 1.8-24.3 5.3-30.8a36.3 36.3 0 0115.1-15.2c6.5-3.4 13-5.3 30.8-5.3zm11.8 56.8V218H327v-36.8l14.4-14.6 34.4 51.4h31.5l-49-69.1 44.7-45.1h-31.3L327 151v-47.3H302z",transform:"translate(-238.9 -47)"})),"Keystone 6")))},m=["children"],b=({href:t,children:e,isSelected:r})=>{const{colors:n,palette:i,spacing:a,radii:l,typography:u}=(0,o.Fg)(),c=(0,s.useRouter)(),d=void 0!==r?r:c.pathname===t;return(0,o.tZ)("li",null,(0,o.tZ)(f.rU,{"aria-current":!!d&&"location",href:t,css:{background:"transparent",borderBottomRightRadius:l.xsmall,borderTopRightRadius:l.xsmall,color:i.neutral700,display:"block",fontWeight:u.fontWeight.medium,marginBottom:a.xsmall,marginRight:a.xlarge,padding:`${a.small}px ${a.xlarge}px`,position:"relative",textDecoration:"none",":hover":{background:n.backgroundHover,color:n.linkHoverColor},"&[aria-current=location]":{background:i.neutral200,color:i.neutral900}}},e))},v=({item:t})=>{const{apiPath:e}=(0,h.jf)(),{spacing:r,typography:i}=(0,o.Fg)();return(0,o.tZ)("div",{css:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:r.xlarge,marginBottom:0}},t&&"authenticated"===t.state?(0,o.tZ)("div",{css:{fontSize:i.fontSize.small}},"Signed in as ",(0,o.tZ)("strong",null,t.label)):(0,o.tZ)("div",{css:{fontSize:i.fontSize.small}},"GraphQL Playground and Docs"),(0,o.tZ)(u.J2,{placement:"bottom",triggerRenderer:({triggerProps:t})=>(0,o.tZ)(l.zx,(0,n.Z)({size:"small",style:{padding:0,width:36},"aria-label":"Links and signout"},t),(0,o.tZ)(c.x,null))},(0,o.tZ)(o.Kq,{gap:"medium",padding:"large",dividers:"between"},(0,o.tZ)(w,{target:"_blank",href:e},"API Explorer"),(0,o.tZ)(w,{target:"_blank",href:"https://github.com/keystonejs/keystone"},"GitHub Repository"),(0,o.tZ)(w,{target:"_blank",href:"https://keystonejs.com"},"Keystone Documentation"),t&&"authenticated"===t.state&&(0,o.tZ)(p.S,null))))},w=t=>{let{children:e}=t,r=(0,a.Z)(t,m);const{typography:i}=(0,o.Fg)();return(0,o.tZ)("a",(0,n.Z)({css:{alignItems:"center",display:"flex",fontSize:i.fontSize.small,textDecoration:"none"}},r),e,(0,o.tZ)(d.X,{size:"small"}))},Z=({authenticatedItem:t,children:e})=>{const{spacing:r}=(0,o.Fg)();return(0,o.tZ)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"}},(0,o.tZ)(v,{item:t}),(0,o.tZ)("nav",{role:"navigation","aria-label":"Side Navigation",css:{marginTop:r.xlarge}},(0,o.tZ)("ul",{css:{padding:0,margin:0,li:{listStyle:"none"}}},e)))},x=({list:t})=>{const e=(0,s.useRouter)();return(0,o.tZ)(b,{isSelected:e.pathname.split("/")[1]===`/${t.path}`.split("/")[1],href:`/${t.path}`},t.label)},E=({lists:t=[],include:e=[]})=>{const r=e.length>0?t.filter((t=>e.includes(t.key))):t;return(0,o.tZ)(i.Fragment,null,r.map((t=>(0,o.tZ)(x,{key:t.key,list:t}))))},A=()=>{var t;const{adminMeta:{lists:e},adminConfig:r,authenticatedItem:n,visibleLists:i}=(0,h.jf)();if("loading"===i.state)return null;if("error"===i.state)return(0,o.tZ)(o.xv,{as:"span",paddingLeft:"xlarge",css:{color:"red"}},i.error instanceof Error?i.error.message:i.error[0].message);const a=Object.keys(e).map((t=>i.lists.has(t)?e[t]:null)).filter((t=>Boolean(t)));return null!==r&&void 0!==r&&null!==(t=r.components)&&void 0!==t&&t.Navigation?(0,o.tZ)(r.components.Navigation,{authenticatedItem:n,lists:a}):(0,o.tZ)(Z,{authenticatedItem:n},(0,o.tZ)(b,{href:"/"},"Dashboard"),(0,o.tZ)(E,{lists:a}))},_=80,S=t=>(0,o.tZ)(i.Fragment,null,(0,o.tZ)("style",null,"body { overflow: hidden; }"),(0,o.tZ)("div",(0,n.Z)({css:{display:"grid",gridTemplateColumns:"minmax(300px, 1fr) 4fr",gridTemplateRows:`${_}px auto`,height:"100vh"}},t))),k=t=>(0,o.tZ)("aside",(0,n.Z)({css:{minWidth:0,overflowY:"auto",WebkitOverflowScrolling:"touch"}},t)),T=t=>{const{colors:e,spacing:r}=(0,o.Fg)();return(0,o.tZ)("main",(0,n.Z)({css:{backgroundColor:e.background,boxSizing:"border-box",minWidth:0,paddingLeft:r.xlarge,paddingRight:r.xlarge,overflowY:"auto",WebkitOverflowScrolling:"touch",position:"relative"}},t))},j=({children:t,header:e})=>{const{colors:r,spacing:n}=(0,o.Fg)();return(0,o.tZ)(S,null,(0,o.tZ)("div",{css:{alignItems:"center",borderBottom:`1px solid ${r.border}`,display:"flex",justifyContent:"space-between",paddingLeft:n.xlarge,paddingRight:n.xlarge}},(0,o.tZ)(g,null)),(0,o.tZ)("header",{css:{alignItems:"center",backgroundColor:r.background,borderBottom:`1px solid ${r.border}`,display:"flex",justifyContent:"space-between",minWidth:0,paddingLeft:n.xlarge,paddingRight:n.xlarge}},e),(0,o.tZ)(k,null,(0,o.tZ)(A,null)),(0,o.tZ)(T,null,t))}},6279:function(t,e){var r="undefined"!==typeof self?self:this,n=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();!function(t){!function(e){var r="URLSearchParams"in t,n="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,a="ArrayBuffer"in t;if(a)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!==typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||l(t))?this._bodyArrayBuffer=g(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=p(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[u(t)]},h.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},h.prototype.set=function(t,e){this.map[u(t)]=c(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var r=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=function(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function Z(t){var e=new h;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function x(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var t=new x(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];x.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new x(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(_){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function A(t,r){return new Promise((function(n,i){var a=new v(t,r);if(a.signal&&a.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;function l(){s.abort()}s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:Z(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;n(new x(e,t))},s.onerror=function(){i(new TypeError("Network request failed"))},s.ontimeout=function(){i(new TypeError("Network request failed"))},s.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&o&&(s.responseType="blob"),a.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),a.signal&&(a.signal.addEventListener("abort",l),s.onreadystatechange=function(){4===s.readyState&&a.signal.removeEventListener("abort",l)}),s.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}A.polyfill=!0,t.fetch||(t.fetch=A,t.Headers=h,t.Request=v,t.Response=x),e.Headers=h,e.Request=v,e.Response=x,e.fetch=A,Object.defineProperty(e,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var o=n;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},9213:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return B}});var n=r(2784),o=r(6279),i=r.n(o),a=r(5614),s=r(5631),l=r(4944),u=r(6964),c=r(9378),d=r.n(c),h=r(3501),f=r(81),p=r(3485),y=(r(3319),r(6074),r(4974),r(3716),r(5808),r(8651)),g=(r(5632),r(9097),r(7595),r(6361),r(891),r(5273),r(5364),r(6759),r(2158),r(3233),r(7018),r(7668),r(7532),r(2180),r(1168),r(581),r(8139),r(1428),r(4356)),m=(r(3900),r(9935),r(4205)),b=r(7896),v=r(9740),w=r(8955);const Z=["email","username"],x=["children"],E=["as"],A=t=>{let{children:e}=t,r=(0,v.Z)(t,x);return(0,a.tZ)("a",(0,b.Z)({css:{color:"#6C798F",display:"flex",alignItems:"center",justifyContent:"center",height:24,width:24,":hover,:focus":{color:"#253858"},svg:{width:"100%"}}},r),e)},_=t=>(0,a.tZ)(A,t,(0,a.tZ)("svg",{viewBox:"0 0 24 20",xmlns:"http://www.w3.org/2000/svg"},(0,a.tZ)("path",{d:"M7.548 20c9.056 0 14.01-7.695 14.01-14.368 0-.219 0-.437-.015-.653.964-.715 1.796-1.6 2.457-2.614a9.638 9.638 0 0 1-2.828.794A5.047 5.047 0 0 0 23.337.366a9.72 9.72 0 0 1-3.127 1.226C18.684-.072 16.258-.48 14.294.598c-1.964 1.078-2.98 3.374-2.475 5.6C7.859 5.994 4.17 4.076 1.67.922.363 3.229 1.031 6.18 3.195 7.662A4.795 4.795 0 0 1 .96 7.032v.064c0 2.403 1.653 4.474 3.95 4.95a4.797 4.797 0 0 1-2.223.087c.645 2.057 2.494 3.466 4.6 3.506A9.725 9.725 0 0 1 0 17.732a13.688 13.688 0 0 0 7.548 2.264",fill:"currentColor",fillRule:"nonzero"})),(0,a.tZ)(k,null,"Hear about KeystoneJS on Twitter")),S=t=>(0,a.tZ)(A,t,(0,a.tZ)("svg",{viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"},(0,a.tZ)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),(0,a.tZ)(k,null,"KeystoneJS repository on GitHub")),k=(0,a.yV)(((t,e)=>{let{as:r="span"}=t,n=(0,v.Z)(t,E);return(0,a.tZ)(r,(0,b.Z)({ref:e,css:{border:0,clip:"rect(1px, 1px, 1px, 1px)",height:1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:1}},n))})),T=({value:t})=>{const[e,r]=(0,n.useState)(!1),[o,u]=(0,n.useState)((t=>{for(const e of Z)if(t[e]&&"string"===typeof t[e].value)return t[e].value})(t)),[c,d]=(0,n.useState)(null),[h,f]=(0,n.useState)(!1),y=(0,p.tv)();return(0,a.tZ)(a.Kq,{gap:"large"},(0,a.tZ)(a.Kq,{gap:"small",align:"center",across:!0,css:{width:"100%",justifyContent:"space-between"}},(0,a.tZ)(a.H1,null,"Welcome"),(0,a.tZ)(a.Kq,{across:!0,gap:"small"},(0,a.tZ)(_,{title:"Twitter Logo"}),(0,a.tZ)(S,{href:"https://github.com/keystonejs/keystone",target:"_blank",title:"Github"}))),(0,a.tZ)("p",{css:{margin:0}},"Thanks for installing KeystoneJS. While you're getting started, check out the docs at"," ",(0,a.tZ)("a",{href:"https://keystonejs.com"},"keystonejs.com")),(0,a.tZ)("div",null,"If you'd like to stay up to date with the exciting things we have planned, join our mailing list (just useful announcements, no spam!)"),(0,a.tZ)("div",null,(0,a.tZ)(l.XZ,{checked:e,onChange:()=>{d(null),r(!e)}},"sign up to our mailing list")),(0,a.tZ)("form",{onSubmit:r=>(r.preventDefault(),d(null),e?(f(!0),(t=>/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t))(o)?i()("https://signup.keystonejs.cloud/api/newsletter-signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.username,email:o,source:"@keystone-next/auth InitPage"})}).then((t=>{200!==t.status?t.json().then((({error:t})=>{d(t),f(!1)})):y.push(y.query.from||"/")})).catch((t=>{d(t.toString()),f(!1)})):(f(!1),void d("Email is invalid"))):y.push(y.query.from||"/"))},(0,a.tZ)(a.TX,{as:"label",htmlFor:"email-field"},"Email Address"),(0,a.tZ)(l.oi,{id:"email-field",disabled:!e,autoFocus:!0,placeholder:"Email",value:o,onChange:t=>u(t.target.value)}),(0,a.tZ)("p",{css:{color:"red"}},c),(0,a.tZ)(a.gF,{gap:"medium",align:"center"},(0,a.tZ)(s.zx,{isLoading:h,type:"submit",weight:"bold",tone:"active"},c?"Try again":"Continue"),c&&(0,a.tZ)(s.zx,{as:p.rU,href:"/",tone:"active"},"Continue"))))},j=({fieldPaths:t,listKey:e,enableWelcome:r})=>{var o;const{adminMeta:i}=(0,u.jf)(),l=(0,n.useMemo)((()=>{const r={};return t.forEach((t=>{r[t]=i.lists[e].fields[t]})),r}),[t,i.lists,e]),[c,b]=(0,n.useState)((()=>{let t={};return Object.keys(l).forEach((e=>{t[e]={kind:"value",value:l[e].controller.defaultValue}})),t})),v=(0,m.a)(l,c),[Z,x]=(0,n.useState)(!1),[E,A]=(0,n.useState)("init"),[_,{loading:S,error:k,data:j}]=(0,h.D)(f.Ps`mutation($data: CreateInitial${e}Input!) {
    authenticate: createInitial${e}(data: $data) {
      ... on ${e}AuthenticationWithPasswordSuccess {
        item {
          id
        }
      }
    }
  }`),O=(0,u.Mz)(),B=(0,p.tv)(),C=(0,u.gS)();return(0,n.useEffect)((()=>{"authenticated"===C.authenticatedItem.state&&(r?A("welcome"):B.push(B.query.from||"/"))}),[C.authenticatedItem,r,B]),"init"===E?(0,a.tZ)(w.S,null,(0,a.tZ)(a.H1,null,"Welcome to KeystoneJS"),(0,a.tZ)("p",null,"Create your first user to get started"),(0,a.tZ)("form",{onSubmit:t=>{t.preventDefault();const e=0!==v.size;if(x(e),e)return;const r={},n=(0,m.s)(l,c);Object.keys(n).forEach((t=>{const{controller:e}=l[t],o=n[t];d()(o,e.serialize(e.defaultValue))||Object.assign(r,o)})),_({variables:{data:r}}).then((()=>{O()})).catch((()=>{}))}},(0,a.tZ)(a.Kq,{gap:"large"},k&&(0,a.tZ)(y.G,{errors:null===k||void 0===k?void 0:k.graphQLErrors,networkError:null===k||void 0===k?void 0:k.networkError}),(0,a.tZ)(g.F,{fields:l,fieldModes:null,forceValidation:Z,invalidFields:v,onChange:b,value:c}),(0,a.tZ)(s.zx,{isLoading:S||(null===j||void 0===j||null===(o=j.authenticate)||void 0===o?void 0:o.__typename)===`${e}AuthenticationWithPasswordSuccess`,type:"submit",weight:"bold",tone:"active"},"Get started")))):(0,a.tZ)(w.S,null,(0,a.tZ)(T,{value:c}))};var O,B=(O={listKey:"User",fieldPaths:["name","email","password"],enableWelcome:!0},()=>(0,a.tZ)(j,O))},4620:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/init",function(){return r(9213)}])}},function(t){t.O(0,[774,888,179],(function(){return e=4620,t(t.s=e);var e}));var e=t.O();_N_E=e}]);