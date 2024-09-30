/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}var v;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(v||(v={}));const B="popstate";function ne(e){e===void 0&&(e={});function t(n,a){let{pathname:i,search:s,hash:o}=n.location;return L("",{pathname:i,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:U(a)}return k(t,r,null,e)}function E(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function W(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V(){return Math.random().toString(36).substr(2,8)}function I(e,t){return{usr:e.state,key:e.key,idx:t}}function L(e,t,r,n){return r===void 0&&(r=null),P({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?A(t):t,{state:r,key:t&&t.key||n||V()})}function U(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function A(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function k(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,s=a.history,o=v.Pop,l=null,c=f();c==null&&(c=0,s.replaceState(P({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function h(){o=v.Pop;let u=f(),d=u==null?null:u-c;c=u,l&&l({action:o,location:p.location,delta:d})}function g(u,d){o=v.Push;let m=L(p.location,u,d);c=f()+1;let R=I(m,c),y=p.createHref(m);try{s.pushState(R,"",y)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(y)}i&&l&&l({action:o,location:p.location,delta:1})}function S(u,d){o=v.Replace;let m=L(p.location,u,d);c=f();let R=I(m,c),y=p.createHref(m);s.replaceState(R,"",y),i&&l&&l({action:o,location:p.location,delta:0})}function w(u){let d=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof u=="string"?u:U(u);return m=m.replace(/ $/,"%20"),E(d,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,d)}let p={get action(){return o},get location(){return e(a,s)},listen(u){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(B,h),l=u,()=>{a.removeEventListener(B,h),l=null}},createHref(u){return t(a,u)},createURL:w,encodeLocation(u){let d=w(u);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:S,go(u){return s.go(u)}};return p}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));function re(e,t,r){return r===void 0&&(r="/"),N(e,t,r,!1)}function N(e,t,r,n){let a=typeof t=="string"?A(t):t,i=Z(a.pathname||"/",r);if(i==null)return null;let s=C(e);T(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=Y(i);o=Q(s[l],c,n)}return o}function C(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,s,o)=>{let l={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(E(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=x([n,l.relativePath]),f=r.concat(l);i.children&&i.children.length>0&&(E(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),C(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:K(c,i.index),routesMeta:f})};return e.forEach((i,s)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,s);else for(let l of M(i.path))a(i,s,l)}),t}function M(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let s=M(n.join("/")),o=[];return o.push(...s.map(l=>l===""?i:[i,l].join("/"))),a&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function T(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:J(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const _=/^:[\w-]+$/,q=3,D=2,F=1,z=10,G=-2,j=e=>e==="*";function K(e,t){let r=e.split("/"),n=r.length;return r.some(j)&&(n+=G),t&&(n+=D),r.filter(a=>!j(a)).reduce((a,i)=>a+(_.test(i)?q:i===""?F:z),n)}function J(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Q(e,t,r){let{routesMeta:n}=e,a={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),g=l.route;if(!h&&c&&r&&!n[n.length-1].route.index&&(h=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(a,h.params),s.push({params:a,pathname:x([i,h.pathname]),pathnameBase:ee(x([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=x([i,h.pathnameBase]))}return s}function b(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=X(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],s=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:n.reduce((c,f,h)=>{let{paramName:g,isOptional:S}=f;if(g==="*"){let p=o[h]||"";s=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}const w=o[h];return S&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function X(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),W(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(n.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Y(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return W(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const x=e=>e.join("/").replace(/\/\/+/g,"/"),ee=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function ae(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const H=["post","put","patch","delete"];new Set(H);const te=["get",...H];new Set(te);export{v as A,ae as a,ne as c,E as i,x as j,re as m,A as p,Z as s};
