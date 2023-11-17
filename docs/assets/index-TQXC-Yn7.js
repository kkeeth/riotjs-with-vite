(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/* Riot WIP, @license MIT */const Y=new Map,Ge=Symbol("riot-component"),Yt=new Set,fe="is",q="mount",he="update",me="unmount",Ve="shouldUpdate",We="onBeforeMount",ke="onMounted",qe="onBeforeUpdate",Xe="onUpdated",Je="onBeforeUnmount",Ze="onUnmounted",T="props",y="state",Qe="slots",ce="root",K=Symbol("pure"),oe=Symbol("is_updating"),U=Symbol("parent"),D=Symbol("attributes"),z=Symbol("template");/* Riot WIP, @license MIT */const X=0,ge=1,J=2,ve=3,et={ATTRIBUTE:X,EVENT:ge,TEXT:J,VALUE:ve};/* Riot WIP, @license MIT */function Gt(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function tt(e){return e.replace(/-(\w)/g,(t,n)=>n.toUpperCase())}/* Riot WIP, @license MIT */function j(e,t){throw new Error(e,{cause:t})}function nt(e){const t=new Map,n=o=>(t.has(o)||t.set(o,e.call(this,o)))&&t.get(o);return n.cache=t,n}function le(e){return e.reduce((t,n)=>{const{value:o,type:r}=n;switch(!0){case(!n.name&&r===X):return{...t,...o};case r===ve:t.value=n.value;break;default:t[tt(n.name)]=n.value}return t},{})}/* Riot WIP, @license MIT */function rt(e,t){return typeof e===t}function ot(e){const t=e.ownerSVGElement;return!!t||t===null}function Z(e){return e.tagName.toLowerCase()==="template"}function Q(e){return rt(e,"function")}function Vt(e){return rt(e,"boolean")}function it(e){return!st(e)&&e.constructor===Object}function st(e){return e==null}/* Riot WIP, @license MIT */function E(){return this}function Wt(e,t){return t.forEach(n=>{e[n]=e[n].bind(e)}),e}function ee(e){return Q(e)?e.prototype&&e.prototype.constructor?new e:e():e}/* Riot WIP, @license MIT */function at(e){return Array.from(e.attributes).reduce((t,n)=>(t[tt(n.name)]=n.value,t),{})}function kt(e,t){for(;e.firstChild;)t.appendChild(e.firstChild)}function Ee(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function qt(e){for(let t=0;t<e.length;t++)R(e[t])}const R=e=>e.remove(),M=(e,t)=>t&&t.parentNode&&t.parentNode.insertBefore(e,t),Xt=(e,t)=>t&&t.parentNode&&t.parentNode.replaceChild(e,t);/* Riot v9.1.1, @license MIT */const Jt={[q](e){this.el=e},[he]:E,[me](e,t,n=!1){n?R(this.el):n||Ee(this.el)},clone:E,createDOM:E};/* Riot WIP, @license MIT */const ut=0,ct=1,be=2,lt=3,pt=4,dt={EACH:ut,IF:ct,SIMPLE:be,TAG:lt,SLOT:pt};/* Riot WIP, @license MIT */function w(e,t,n,o={}){return Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!1,configurable:!0,...o}),e}function ft(e,t,n){return Object.entries(t).forEach(([o,r])=>{w(e,o,r,n)}),e}function ht(e,t){return Object.entries(t).forEach(([n,o])=>{e[n]||(e[n]=o)}),e}/* Riot WIP, @license MIT */const Zt=Symbol(),Qt=Symbol();function en(){const e=document.createTextNode(""),t=document.createTextNode("");return e[Zt]=!0,t[Qt]=!0,{head:e,tail:t}}function tn(e){const t=e.dom.cloneNode(!0),{head:n,tail:o}=en();return{avoidDOMInjection:!0,fragment:t,head:n,tail:o,children:[n,...Array.from(t.childNodes),o]}}const nn=(e,t,n,o)=>{const r=t.length;let i=e.length,s=r,a=0,u=0,l=null;for(;a<i||u<s;)if(i===a){const c=s<r?u?n(t[u-1],-0).nextSibling:n(t[s-u],0):o;for(;u<s;)M(n(t[u++],1),c)}else if(s===u)for(;a<i;)(!l||!l.has(e[a]))&&R(n(e[a],-1)),a++;else if(e[a]===t[u])a++,u++;else if(e[i-1]===t[s-1])i--,s--;else if(e[a]===t[s-1]&&t[u]===e[i-1]){const c=n(e[--i],-1).nextSibling;M(n(t[u++],1),n(e[a++],-1).nextSibling),M(n(t[--s],1),c),e[i]=t[s]}else{if(!l){l=new Map;let c=u;for(;c<s;)l.set(t[c],c++)}if(l.has(e[a])){const c=l.get(e[a]);if(u<c&&c<s){let p=a,d=1;for(;++p<i&&p<s&&l.get(e[p])===c+d;)d++;if(d>c-u){const h=n(e[a],0);for(;u<c;)M(n(t[u++],1),h)}else Xt(n(t[u++],1),n(e[a++],-1))}else a++}else R(n(e[a++],-1))}return t},Ne=Symbol("unmount"),rn={nodes:[],mount(e,t){return this.update(e,t)},update(e,t){const{placeholder:n,nodes:o,childrenMap:r}=this,i=e===Ne?null:this.evaluate(e),s=i?Array.from(i):[],{newChildrenMap:a,batches:u,futureNodes:l}=un(s,e,t,this);return nn(o,l,on(Array.from(r.values()),t),n),u.forEach(c=>c()),this.childrenMap=a,this.nodes=l,this},unmount(e,t){return this.update(Ne,t),this}};function on(e,t){return(n,o)=>{if(o<0){const r=e[e.length-1];if(r){const{template:i,nodes:s,context:a}=r;s.pop(),s.length||(e.pop(),i.unmount(a,t,null))}}return n}}function sn(e,t){return e?!e(t):!1}function an(e,{itemName:t,indexName:n,index:o,item:r}){return w(e,t,r),n&&w(e,n,o),e}function un(e,t,n,o){const{condition:r,template:i,childrenMap:s,itemName:a,getKey:u,indexName:l,root:c,isTemplateTag:p}=o,d=new Map,h=[],g=[];return e.forEach((P,f)=>{const m=an(Object.create(t),{itemName:a,indexName:l,index:f,item:P}),b=u?u(m):f,_=s.get(b),v=[];if(sn(r,m))return;const L=!_,x=_?_.template:i.clone(),O=x.el||c.cloneNode(),S=p&&L?tn(x):x.meta;L?h.push(()=>x.mount(O,m,n,S)):h.push(()=>x.update(m,n)),p?v.push(...S.children):v.push(O),s.delete(b),g.push(...v),d.set(b,{nodes:v,template:x,context:m,index:f})}),{newChildrenMap:d,batches:h,futureNodes:g}}function cn(e,{evaluate:t,condition:n,itemName:o,indexName:r,getKey:i,template:s}){const a=document.createTextNode(""),u=e.cloneNode();return M(a,e),R(e),{...rn,childrenMap:new Map,node:e,root:u,condition:n,evaluate:t,isTemplateTag:Z(u),template:s.createDOM(e),getKey:i,indexName:r,itemName:o,placeholder:a}}const ln={mount(e,t){return this.update(e,t)},update(e,t){const n=!!this.evaluate(e),o=!this.value&&n,r=this.value&&!n,i=()=>{const s=this.node.cloneNode();M(s,this.placeholder),this.template=this.template.clone(),this.template.mount(s,e,t)};switch(!0){case o:i();break;case r:this.unmount(e);break;default:n&&this.template.update(e,t)}return this.value=n,this},unmount(e,t){return this.template.unmount(e,t,!0),this}};function pn(e,{evaluate:t,template:n}){const o=document.createTextNode("");return M(o,e),R(e),{...ln,node:e,evaluate:t,placeholder:o,template:n.createDOM(e)}}const dn=typeof Element>"u"?{}:Element.prototype,fn=nt(e=>dn.hasOwnProperty(e));function hn(e,t){Object.entries(t).forEach(([n,o])=>mt(e,{name:n},o))}function mn(e,t,n){const o=t?Object.keys(t):[];Object.keys(n).filter(r=>!o.includes(r)).forEach(r=>e.removeAttribute(r))}function gn(e){return["string","number","boolean"].includes(typeof e)}function vn(e,t){return t?!e&&e!==0:typeof e>"u"||e===null}function mt(e,{name:t,isBoolean:n},o,r){if(!t){r&&mn(e,o,r),o&&hn(e,o);return}!fn(t)&&(Vt(o)||it(o)||Q(o))&&(e[t]=o),vn(o,n)?e.removeAttribute(t):gn(o)&&e.setAttribute(t,En(t,o,n))}function En(e,t,n){return t===!0&&n?e:t}const bn=/^on/,xn=e=>Array.isArray(e)?e:[e,!1],Tn={handleEvent(e){this[e.type](e)}},gt=new WeakMap,yn=e=>{const t=Object.create(Tn);return gt.set(e,t),t};function An(e,{name:t},n){const o=t.replace(bn,""),r=gt.get(e)||yn(e),[i,s]=xn(n),a=r[o],u=a&&!i,l=i&&!a;u&&e.removeEventListener(o,r),l&&e.addEventListener(o,r,s),r[o]=i}function vt(e){return st(e)?"":e}const On=(e,t)=>{const n=e.childNodes[t];if(n.nodeType===Node.COMMENT_NODE){const o=document.createTextNode("");return e.replaceChild(o,n),o}return n};function Nn(e,t,n){e.data=vt(n)}function wn(e,t,n){e.value=vt(n)}const Cn={[X]:mt,[ge]:An,[J]:Nn,[ve]:wn},_n={mount(e){return this.value=this.evaluate(e),ie(this,this.value),this},update(e){const t=this.evaluate(e);return this.value!==t&&(ie(this,t),this.value=t),this},unmount(){return this.type===ge&&ie(this,null),this}};function ie(e,t){return Cn[e.type](e.node,e,t,e.value)}function xe(e,t){return{..._n,...t,node:t.type===J?On(e,t.childNodeIndex):e}}function Sn(e,t,n){return t.reduce((o,r)=>({...o,[r]:i=>e.map(s=>s[r](i))&&n}),{})}function Mn(e,{expressions:t}){return{...Sn(t.map(n=>xe(e,n)),["mount","update","unmount"])}}function Rn(e,t,n){if(!e||!e.length)return n;const o=e.map(r=>({...r,value:r.evaluate(t)}));return Object.assign(Object.create(n||null),le(o))}const we=(e,t)=>e[U]||t,Pn={attributes:[],getTemplateScope(e,t){return Rn(this.attributes,e,t)},mount(e,t){const n=e.slots?e.slots.find(({id:i})=>i===this.name):!1,{parentNode:o}=this.node,r=we(e,t);return this.template=n&&te(n.html,n.bindings).createDOM(o),this.template&&(Ee(this.node),this.template.mount(this.node,this.getTemplateScope(e,r),r),this.template.children=Array.from(this.node.childNodes)),Et(this.node),R(this.node),this},update(e,t){if(this.template){const n=we(e,t);this.template.update(this.getTemplateScope(e,n),n)}return this},unmount(e,t,n){return this.template&&this.template.unmount(this.getTemplateScope(e,t),null,n),this}};function Et(e){const t=e&&e.firstChild;t&&(M(t,e),Et(e))}function Ln(e,{name:t,attributes:n}){return{...Pn,attributes:n,node:e,name:t}}function In(e,t=[],n=[]){return e?e({slots:t,attributes:n}):te(Un(t),[...Bn(t),{expressions:n.map(o=>({type:X,...o}))}])}function Bn(e){return e.reduce((t,{bindings:n})=>t.concat(n),[])}function Un(e){return e.reduce((t,n)=>t+n.html,"")}const Dn={mount(e){return this.update(e)},update(e,t){const n=this.evaluate(e);return n&&n===this.name?this.tag.update(e):(this.unmount(e,t,!0),this.name=n,this.tag=In(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,e)),this},unmount(e,t,n){return this.tag&&this.tag.unmount(n),this}};function jn(e,{evaluate:t,getComponent:n,slots:o,attributes:r}){return{...Dn,node:e,evaluate:t,slots:o,attributes:r,getComponent:n}}const Ce={[ct]:pn,[be]:Mn,[ut]:cn,[lt]:jn,[pt]:Ln};function $n(e,t){return e.map(n=>n.type===J?{...n,childNodeIndex:n.childNodeIndex+t}:n)}function bt(e,t,n){const{selector:o,type:r,redundantAttribute:i,expressions:s}=t,a=o?e.querySelector(o):e;i&&a.removeAttribute(i);const u=s||[];return(Ce[r]||Ce[be])(a,{...t,expressions:n&&!o?$n(u,n):u})}function Fn(e,t){const n=Z(t)?t:document.createElement("template");return n.innerHTML=e,n.content}function Hn(e,t){return t.ownerDocument.importNode(new window.DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${e}</svg>`,"application/xml").documentElement,!0)}function Kn(e,t){return ot(e)?Hn(t,e):Fn(t,e)}function zn(e,t){switch(!0){case ot(e):kt(t,e);break;case Z(e):e.parentNode.replaceChild(t,e);break;default:e.appendChild(t)}}function Yn(e,t){return t&&(typeof t=="string"?Kn(e,t):t)}function Gn(e,t,n){const o=Array.from(e.childNodes);return Math.max(o.indexOf(t),o.indexOf(n.head)+1,0)}const Vn={createDOM(e){return this.dom=this.dom||Yn(e,this.html)||document.createDocumentFragment(),this},mount(e,t,n,o={}){e||j("Please provide DOM node to mount properly your template"),this.el&&this.unmount(t);const{fragment:r,children:i,avoidDOMInjection:s}=o,{parentNode:a}=i?i[0]:e,u=Z(e),l=u?Gn(a,e,o):null;this.createDOM(e);const c=r||this.dom.cloneNode(!0);return this.el=u?a:e,this.children=u?i||Array.from(c.childNodes):null,!s&&c&&zn(e,c),this.bindings=this.bindingsData.map(p=>bt(this.el,p,l)),this.bindings.forEach(p=>p.mount(t,n)),this.meta=o,this},update(e,t){return this.bindings.forEach(n=>n.update(e,t)),this},unmount(e,t,n=!1){const o=this.el;if(!o)return this;switch(this.bindings.forEach(r=>r.unmount(e,t,n)),!0){case(o[K]||n===null):break;case Array.isArray(this.children):qt(this.children);break;case!n:Ee(o);break;case!!n:R(o);break}return this.el=null,this},clone(){return{...this,meta:{},el:null}}};function te(e,t=[]){return{...Vn,html:e,bindingsData:t}}/* Riot v9.1.1, @license MIT */function Wn(e,t,n){return e(te,et,dt,n)}/* Riot v9.1.1, @license MIT */const kn=Object.freeze({[q]:E,[he]:E,[me]:E});/* Riot v9.1.1, @license MIT */const xt=(e,t)=>e[Ge]=t;/* Riot v9.1.1, @license MIT */function Tt(e){return[q,he,me].reduce((t,n)=>(t[n]=e(n),t),{})}/* Riot v9.1.1, @license MIT */function qn(e,{slots:t,attributes:n,props:o,css:r,template:i}){i&&j("Pure components can not have html"),r&&j("Pure components do not have css");const s=ht(e({slots:t,attributes:n,props:o}),kn);return Tt(a=>(...u)=>{if(a===q){const[l]=u;w(l,K,!0),xt(l,s)}return s[a](...u),s})}/* Riot WIP, @license MIT */function Te(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&typeof e.length=="number"?Array.from(e):[e]}/* Riot WIP, @license MIT */function pe(e,t){return Te(typeof e=="string"?(t||document).querySelectorAll(e):e)}/* Riot v9.1.1, @license MIT */const Xn=Object.freeze({$(e){return pe(e,this.root)[0]},$$(e){return pe(e,this.root)}});/* Riot v9.1.1, @license MIT */const Jn=Object.freeze({[Ve]:E,[We]:E,[ke]:E,[qe]:E,[Xe]:E,[Je]:E,[Ze]:E});/* Riot WIP, @license MIT */const _e=e=>e.length===1?e[0]:e;function Zn(e,t,n){const o=typeof t=="string"?[t]:t;return _e(Te(e).map(r=>_e(o.map(i=>r[n](i)))))}function yt(e,t,n){const o=typeof t=="object"?t:{[t]:n},r=Object.keys(o);return Te(e).forEach(i=>{r.forEach(s=>i.setAttribute(s,o[s]))}),e}function Qn(e,t){return Zn(e,t,"getAttribute")}/* Riot v9.1.1, @license MIT */const I=new Map,er="style[riot]",tr=(e=>()=>e||(e=pe(er)[0]||document.createElement("style"),yt(e,"type","text/css"),e.parentNode||document.head.appendChild(e),e))(),At={CSS_BY_NAME:I,add(e,t){return I.has(e)||(I.set(e,t),this.inject()),this},inject(){return tr().innerHTML=[...I.values()].join(`
`),this},remove(e){return I.has(e)&&(I.delete(e),this.inject()),this}};/* Riot WIP, @license MIT */function Ot(e,...t){return(...n)=>(n=[...t,...n],n.length<e.length?Ot(e,...n):e(...n))}/* Riot v9.1.1, @license MIT */function nr(e){return Qn(e,fe)||e.tagName.toLowerCase()}/* Riot v9.1.1, @license MIT */function rr(e,t){nr(e)!==t&&yt(e,fe,t)}/* Riot v9.1.1, @license MIT */function Se(e,t){return{...e,...ee(t)}}/* Riot v9.1.1, @license MIT */function or(e,t={}){return{...at(e),...ee(t)}}/* Riot v9.1.1, @license MIT */function ir(e,t=[]){const n=t.map(r=>xe(e,r)),o={};return Object.assign(o,{expressions:n,...Tt(r=>i=>(n.forEach(s=>s[r](i)),o))})}/* Riot v9.1.1, @license MIT */function sr(e){return[...Yt].reduce((t,n)=>n(t)||t,e)}/* Riot v9.1.1, @license MIT */function ar(e,{slots:t,attributes:n,props:o}){return Wt(sr(ft(it(e)?Object.create(e):e,{mount(r,i={},s){return w(r,K,!1),this[U]=s,this[D]=ir(r,n).mount(s),w(this,T,Object.freeze({...or(r,o),...le(this[D].expressions)})),this[y]=Se(this[y],i),this[z]=this.template.createDOM(r).clone(),xt(r,this),e.name&&rr(r,e.name),w(this,ce,r),w(this,Qe,t),this[We](this[T],this[y]),this[z].mount(r,this,s),this[ke](this[T],this[y]),this},update(r={},i){i&&(this[U]=i,this[D].update(i));const{[fe]:s,...a}={...at(this[ce]),...le(this[D].expressions)};if(this[Ve](a,this[T])!==!1)return w(this,T,Object.freeze({...i?null:this[T],...a})),this[y]=Se(this[y],r),this[qe](this[T],this[y]),this[oe]||(this[oe]=!0,this[z].update(this,this[U])),this[Xe](this[T],this[y]),this[oe]=!1,this},unmount(r){return this[Je](this[T],this[y]),this[D].unmount(),this[z].unmount(this,this[U],r===null?null:!r),this[Ze](this[T],this[y]),this}})),Object.keys(e).filter(r=>Q(e[r])))}/* Riot v9.1.1, @license MIT */function ur({css:e,template:t,componentAPI:n,name:o}){return e&&o&&At.add(o,e),Ot(ar)(ft(ht(n,{...Jn,[T]:{},[y]:{}}),{[Qe]:null,[ce]:null,...Xn,name:o,css:e,template:t}))}/* Riot v9.1.1, @license MIT */function cr(e={}){return Object.entries(ee(e)).reduce((t,[n,o])=>(t[Gt(n)]=ne(o),t),{})}const lr=e=>{const t=cr(e.exports?e.exports.components:{});return n=>n===e.name?pr(e):t[n]||Y.get(n)},pr=nt(ne);function ne(e){const{css:t,template:n,exports:o,name:r}=e,i=n?Wn(n,e,lr(e)):Jt;return({slots:s,attributes:a,props:u})=>{if(o&&o[K])return qn(o,{slots:s,attributes:a,props:u,css:t,template:n});const l=ee(o)||{},c=ur({css:t,template:i,componentAPI:l,name:r})({slots:s,attributes:a,props:u});return{mount(p,d,h){return c.mount(p,h,d)},update(p,d){return c.update(d,p)},unmount(p){return c.unmount(p)}}}}/* Riot v9.1.1, @license MIT */function dr(e,{css:t,template:n,exports:o}){return Y.has(e)&&j(`The component "${e}" was already registered`),Y.set(e,ne({name:e,css:t,template:n,exports:o})),Y}/* Riot WIP, @license MIT */function fr(...e){return e.reduce((t,n)=>(...o)=>t(n(...o)))}/* Riot v9.1.1, @license MIT */function Nt(e){return(t,n,{slots:o,attributes:r,parentScope:i}={})=>fr(s=>s.mount(t,i),s=>s({props:n,slots:o,attributes:r}),ne)(e)}/* Riot v9.1.1, @license MIT */function wt(e){return Q(e)||j('riot.pure accepts only arguments of type "function"'),e[K]=!0,e}/* Riot v9.1.1, @license MIT */const hr={cssManager:At,DOMBindings:{template:te,createBinding:bt,createExpression:xe,bindingTypes:dt,expressionTypes:et},globals:{DOM_COMPONENT_INSTANCE_PROPERTY:Ge,PARENT_KEY_SYMBOL:U}},mr="modulepreload",gr=function(e){return"/"+e},Me={},Re=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=gr(i),i in Me)return;Me[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!o)for(let c=r.length-1;c>=0;c--){const p=r[c];if(p.href===i&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":mr,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((c,p)=>{l.addEventListener("load",c),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};function vr(e){for(var t=[],n=0;n<e.length;){var o=e[n];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(o==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(o==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(o===":"){for(var r="",i=n+1;i<e.length;){var s=e.charCodeAt(i);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){r+=e[i++];continue}break}if(!r)throw new TypeError("Missing parameter name at "+n);t.push({type:"NAME",index:n,value:r}),n=i;continue}if(o==="("){var a=1,u="",i=n+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '+i);for(;i<e.length;){if(e[i]==="\\"){u+=e[i++]+e[i++];continue}if(e[i]===")"){if(a--,a===0){i++;break}}else if(e[i]==="("&&(a++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+i);u+=e[i++]}if(a)throw new TypeError("Unbalanced pattern at "+n);if(!u)throw new TypeError("Missing pattern at "+n);t.push({type:"PATTERN",index:n,value:u}),n=i;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}function Er(e,t){t===void 0&&(t={});for(var n=vr(e),o=t.prefixes,r=o===void 0?"./":o,i="[^"+B(t.delimiter||"/#?")+"]+?",s=[],a=0,u=0,l="",c=function(O){if(u<n.length&&n[u].type===O)return n[u++].value},p=function(O){var S=c(O);if(S!==void 0)return S;var Oe=n[u],Kt=Oe.type,zt=Oe.index;throw new TypeError("Unexpected "+Kt+" at "+zt+", expected "+O)},d=function(){for(var O="",S;S=c("CHAR")||c("ESCAPED_CHAR");)O+=S;return O};u<n.length;){var h=c("CHAR"),g=c("NAME"),P=c("PATTERN");if(g||P){var f=h||"";r.indexOf(f)===-1&&(l+=f,f=""),l&&(s.push(l),l=""),s.push({name:g||a++,prefix:f,suffix:"",pattern:P||i,modifier:c("MODIFIER")||""});continue}var m=h||c("ESCAPED_CHAR");if(m){l+=m;continue}l&&(s.push(l),l="");var b=c("OPEN");if(b){var f=d(),_=c("NAME")||"",v=c("PATTERN")||"",L=d();p("CLOSE"),s.push({name:_||(v?a++:""),pattern:_&&!v?i:v,prefix:f,suffix:L,modifier:c("MODIFIER")||""});continue}p("END")}return s}function B(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ct(e){return e&&e.sensitive?"":"i"}function br(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,r=n.exec(e.source);r;)t.push({name:r[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),r=n.exec(e.source);return e}function xr(e,t,n){var o=e.map(function(r){return ye(r,t,n).source});return new RegExp("(?:"+o.join("|")+")",Ct(n))}function Tr(e,t,n){return yr(Er(e,n),t,n)}function yr(e,t,n){n===void 0&&(n={});for(var o=n.strict,r=o===void 0?!1:o,i=n.start,s=i===void 0?!0:i,a=n.end,u=a===void 0?!0:a,l=n.encode,c=l===void 0?function(x){return x}:l,p="["+B(n.endsWith||"")+"]|$",d="["+B(n.delimiter||"/#?")+"]",h=s?"^":"",g=0,P=e;g<P.length;g++){var f=P[g];if(typeof f=="string")h+=B(c(f));else{var m=B(c(f.prefix)),b=B(c(f.suffix));if(f.pattern)if(t&&t.push(f),m||b)if(f.modifier==="+"||f.modifier==="*"){var _=f.modifier==="*"?"?":"";h+="(?:"+m+"((?:"+f.pattern+")(?:"+b+m+"(?:"+f.pattern+"))*)"+b+")"+_}else h+="(?:"+m+"("+f.pattern+")"+b+")"+f.modifier;else h+="("+f.pattern+")"+f.modifier;else h+="(?:"+m+b+")"+f.modifier}}if(u)r||(h+=d+"?"),h+=n.endsWith?"(?="+p+")":"$";else{var v=e[e.length-1],L=typeof v=="string"?d.indexOf(v[v.length-1])>-1:v===void 0;r||(h+="(?:"+d+"(?="+p+"))?"),L||(h+="(?="+d+"|"+p+")")}return new RegExp(h,Ct(n))}function ye(e,t,n){return e instanceof RegExp?br(e,t):Array.isArray(e)?xr(e,t,n):Tr(e,t,n)}const _t=Symbol();$.cancel=()=>_t;$.compose=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return $(...t.reverse())};function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Promise((o,r)=>function i(s,a){if(!s.length)return o(a);const[u,...l]=s,c=typeof u=="function"?u(a):u,p=d=>i(l,d);if(c!=null){if(c===_t)return;if(c.then)return c.then(p,r)}return Promise.resolve(p(c))}(t))}const Pe=new Set,St=Symbol(),Ar="off",Or="cancel";function Nr(e){const t=function*(){for(;;){const o=yield;yield $(o,...e)}}();return t.next(),t}function se(e,t){return e.forEach(n=>{n(t)===St&&e.delete(n)}),e}function G(e){throw new Error(e)}N.install=function(e,t){return(!e||typeof e!="string")&&G("Please provide a name (as string) for your erre plugin"),(!t||typeof t!="function")&&G("Please provide a function for your erre plugin"),Pe.has(e)?G(`The ${e} is already part of the erre API, please provide a different name`):(N[e]=t,Pe.add(e)),N};N.install(Or,$.cancel);N.install(Ar,()=>St);function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const[o,r,i,s]=[new Set,new Set,new Set,new Set(t)],a=Nr(s),u=Object.create(a),l=p=>d=>p.add(d)&&u,c=p=>d=>p.delete(d)?u:G("Couldn't remove handler passed by reference");return Object.assign(u,{on:Object.freeze({value:l(o),error:l(r),end:l(i)}),off:Object.freeze({value:c(o),error:c(r),end:c(i)}),connect:l(s),push(p){const{value:d,done:h}=u.next(p);return h||d.then(g=>se(o,g),g=>se(r,g)),u},end(){return a.return(),se(i),[o,r,i,s].forEach(p=>p.clear()),u},fork(){return N(...s)},next(p){const d=a.next(p);return a.next(),d}})}const wr=typeof process<"u",Cr=e=>typeof e=="string",_r=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return wr?require("url").parse(...n):new URL(...n)},Sr=e=>e.replace(C.base,""),Mr=e=>t=>k(t,e)?t:N.cancel(),Rr=(e,t)=>(e.on.value(t.push),t.on.end(()=>{e.off.value(t.push)}),t),Mt=e=>{if(!C.silentErrors)throw new Error(e)},Pr=e=>Cr(e)?e:N.cancel(),A=N(Pr).on.error(Mt),C={base:"",silentErrors:!1,sensitive:!1,strict:!1,end:!0,start:!0,delimiter:"/#?",encode:void 0,endsWith:void 0,prefixes:"./"},Rt=e=>Object.assign({},C,e),Pt=(e,t,n)=>ye(e,t,Rt(n)),Lr=function(t,n,o){o===void 0&&(o={});const{base:r}=Rt(o),[,...i]=n.exec(t),s=_r(t,r);return s.params=i.reduce((a,u,l)=>{const c=o.keys&&o.keys[l];return c&&(a[c.name]=u&&decodeURIComponent(u)),a},{}),s},k=(e,t)=>t.test(e),Lt=(e,t)=>[decodeURI,Sr,Mr(e),n=>Lr(n,e,t)];function V(e,t){const n=[],o=ye(e,n,t),r=N(...Lt(o,Object.assign({},t,{keys:n})));return Rr(A,r).on.error(Mt)}const de=(e=>(A.on.value(t=>e=t),()=>e))(null);function Ir(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((o,r)=>function(){return o(r(...arguments))})}const Br=(e,t,n)=>{const o=Ir(...Lt(e,n).reverse())(t);return o.params?o:null};var Ur={css:null,exports:{onBeforeMount(e){const t=de(),n=Pt(e.path,[],e);this.state={pathToRegexp:n,route:t&&k(t,n)?Br(n,t,e):null},A.on.value(this.onBeforeRoute),this.stream=V(e.path,e).on.value(this.onRoute)},onBeforeRoute(e,t){this.state.route&&!k(e,this.state.pathToRegexp)&&(this.callLifecycleProperty("onBeforeUnmount",V),this.update({route:null}),this.callLifecycleProperty("onUnmounted",V))},onRoute(e){this.callLifecycleProperty("onBeforeMount",e),this.update({route:e}),this.callLifecycleProperty("onMounted",e)},callLifecycleProperty(e,...t){this.props[e]&&this.props[e](...t)},onUnmounted(){A.off.value(this.onBeforeRoute),this.stream.end()}},template:(e,t,n,o)=>e('<template expr0="expr0"></template>',[{type:n.IF,evaluate:r=>r.state.route,redundantAttribute:"expr0",selector:"[expr0]",template:e('<slot expr1="expr1"></slot>',[{type:n.SLOT,attributes:[{type:t.ATTRIBUTE,name:"route",evaluate:r=>r.state.route}],name:"default",redundantAttribute:"expr1",selector:"[expr1]"}])}]),name:"route-hoc"};const It=()=>re()||global,re=()=>typeof window>"u"?null:window,Bt=()=>typeof document>"u"?null:document,Dr=()=>typeof history>"u"?null:history,Ae=()=>{const e=re();return e?e.location:{}},jr=(()=>{const e=It();return e.requestAnimationFrame||e.setTimeout})(),$r=(()=>{const e=It();return e.cancelAnimationFrame||e.clearTimeout})(),Le="popstate",Ie="click",Fr="download",Hr="href",Kr="_self",zr="A",Ut="#",F="/",Yr=/^.+?\/\/+[^/]+/,Gr=e=>e[0]===F?e:`${F}${e}`,ae=e=>e[e.length-1]===F?e.substr(0,e.length-1):e,Vr=e=>{const n=re().location,o=n?`${n.protocol}//${n.host}`:"",{pathname:r}=n||{};switch(!0){case!e:return ae(`${o}${r||""}`);case/(www|http(s)?:)/.test(e):return e;case e[0]===Ut:return`${o}${r&&r!==F?r:""}${e}`;case e===F:return ae(o);default:return ae(`${o}${Gr(e)}`)}};function Wr(e){C.base=Vr(e)}function kr(e){return e.replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function qr(e){throw new Error(e)}function Dt(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&typeof e.length=="number"?Array.from(e):[e]}const Xr=e=>e.split(/\s/);function jt(e,t,n,o,r){e=Dt(e),Xr(t).forEach(i=>{e.forEach(s=>s[o](i,n,r||!1))})}function Be(e,t,n,o){return jt(e,t,n,"addEventListener",o),e}function Ue(e,t,n,o){return jt(e,t,n,"removeEventListener",o),e}const De=e=>e.length===1?e[0]:e;function Jr(e,t,n){const o=typeof t=="string"?[t]:t;return De(Dt(e).map(r=>De(o.map(i=>r[n](i)))))}function je(e,t){return Jr(e,t,"hasAttribute")}const $e=()=>A.push(Ht(String(Ae().href))),Fe=e=>{const t=e.includes(C.base)?e:C.base+e,n=Ae(),o=Dr(),r=Bt();o&&t!==n.href&&o.pushState(null,r.title,t)},$t=e=>e&&!Ft(e)?$t(e.parentNode):e,Ft=e=>e.nodeName===zr,Zr=e=>e.indexOf(Ae().href.match(Yr)[0])===-1,Qr=e=>e.target&&e.target!==Kr,eo=e=>e.which&&e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented,to=e=>!e||!Ft(e)||je(e,Fr)||!je(e,Hr)||Qr(e)||Zr(e.href),no=e=>e.split(Ut).length>1,Ht=e=>e.replace(C.base,""),ro=e=>!C.base||e.includes(C.base),He=e=>{if(eo(e))return;const t=$t(e.target);if(to(t)||no(t.href)||!ro(t.href))return;const n=Ht(t.href);A.push(n),e.preventDefault()};function oo(e){const t=re(),n=e||Bt();return t&&(Be(t,Le,$e),Be(n,Ie,He)),A.on.value(Fe),()=>{t&&(Ue(t,Le,$e),Ue(n,Ie,He)),A.off.value(Fe)}}const Ke="base",io="initialRoute",so="onStarted",{template:ao,bindingTypes:uo}=hr.DOMBindings;let ue=!1;var co={css:null,exports:wt(({slots:e,attributes:t,props:n})=>{ue&&qr("Multiple <router> components are not supported");const o=r=>t&&t.find(i=>kr(i.name)===r);return{slot:null,el:null,teardown:null,mount(r,i){const s=o(io),a=s?s.evaluate(i):null,u=de(),l=()=>{this.createSlot(i),A.off.value(l)};ue=!0,this.el=r,this.teardown=oo(this.root),this.setBase(i),u&&!a?this.createSlot(i):(A.on.value(l),A.push(a||window.location.href))},createSlot(r){if(!e||!e.length)return;const i=o(so);this.slot=ao(null,[{type:uo.SLOT,name:"default"}]),this.slot.mount(this.el,{slots:e},r),i&&i.evaluate(r)(de())},update(r){this.setBase(r),this.slot&&($r(this.deferred),this.deferred=jr(()=>{this.slot.update({},r)}))},unmount(...r){this.teardown(),ue=!1,this.slot&&this.slot.unmount(...r)},getBase(r){const i=o(Ke);return i?this.el.getAttribute(Ke)||i.evaluate(r):"/"},setBase(r){Wr(n?n.base:this.getBase(r))}}}),template:null,name:"router-hoc"};function lo(e){for(;e.firstChild;)e.removeChild(e.firstChild)}const W=new WeakMap;H.cache=W;H.export=function(t,n){const o=t&&n,r=o?n:t,i=()=>typeof r=="function"?r():Promise.resolve(r),s=W.get(r);return wt(({slots:a,attributes:u,props:l})=>({mount(c,p){this.el=c,this.isMounted=!0;const d=()=>{this.mountLazyComponent(p),this.el.dispatchEvent(new Event("load"))};s?d():(o&&this.createManagedComponent(t,p),i().then(h=>{W.set(r,h.default||h),d()}))},createManagedComponent(c,p){this.component=Nt(c)(this.el,l,{attributes:u,slots:a,parentScope:p})},mountLazyComponent(c){this.isMounted&&(this.component&&(this.component.unmount(!0),this.el.children.length&&lo(this.el)),this.createManagedComponent(W.get(r),c))},update(c){this.isMounted&&this.component&&this.component.update({},c)},unmount(...c){this.isMounted=!1,this.component&&this.component.unmount(...c)}}))};function H(e,t){return{name:"lazy",exports:H.export(e,t)}}const ze={css:'loader,[is="loader"]{ padding: 1rem 0; } loader svg,[is="loader"] svg{ overflow: visible; }',exports:null,template:(e,t,n,o)=>e('<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"/><animatetransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animatetransform></g></g></svg>',[]),name:"loader"},po={css:null,exports:null,template:(e,t,n,o)=>e('<h1>Page not found</h1><p>Go back to <a href="/">home</a></p>',[]),name:"not-found"},Ye=[{path:"/",label:"Home",componentName:"home"},{path:"/about",label:"About",componentName:"about"}],fo={css:'app,[is="app"]{ margin: 1rem; padding: 4rem 2rem; min-width: 60vw; border: 1px solid #ccc; border-radius: 16px; box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35); } app .menu,[is="app"] .menu{ margin: 1rem -1rem; } app .menu a + a,[is="app"] .menu a + a{ margin-left: 1rem; } app .menu a.active.active,[is="app"] .menu a.active.active{ font-weight: bold; text-decoration: none; } app .menu a:hover,[is="app"] .menu a:hover,app .menu a:focus,[is="app"] .menu a:focus,app .menu a:active,[is="app"] .menu a:active{ text-decoration: underline; }',exports:{components:{Router:co,Route:Ur,NotFound:po,Home:H(ze,()=>Re(()=>import("./home-h8L5dLY1.js"),__vite__mapDeps([]))),About:H(ze,()=>Re(()=>import("./about-1tPr__LP.js"),__vite__mapDeps([])))},state:{pages:Ye,showNotFound:!1,activePage:null},onBeforeMount({isServer:e}){this.anyRouteStream=V("(.*)"),this.anyRouteStream.on.value(this.onAnyRoute)},onAnyRoute(e){const t=Ye.find(n=>k(e.pathname,Pt(n.path)));this.update({activePage:t,showNotFound:!t})},onBeforeUnmount(){this.anyRouteStream.end()}},template:(e,t,n,o)=>e('<div class="container"><h1> Riotjs + ViteJS </h1><router expr0="expr0"></router></div>',[{type:n.TAG,getComponent:o,evaluate:r=>"router",slots:[{id:"default",html:'<div class="row"><nav class="menu column"><a expr1="expr1"></a></nav></div><div expr2="expr2" class="row"></div><div expr4="expr4" class="row"></div>',bindings:[{type:n.EACH,getKey:null,condition:null,template:e(" ",[{expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:r=>[r.page.label].join("")},{type:t.ATTRIBUTE,isBoolean:!1,name:"class",evaluate:r=>r.state.activePage===r.page?"active":""},{type:t.ATTRIBUTE,isBoolean:!1,name:"href",evaluate:r=>r.page.path}]}]),redundantAttribute:"expr1",selector:"[expr1]",itemName:"page",indexName:null,evaluate:r=>r.state.pages},{type:n.IF,evaluate:r=>r.state.showNotFound,redundantAttribute:"expr2",selector:"[expr2]",template:e('<div class="column column-60"><not-found expr3="expr3"></not-found></div>',[{type:n.TAG,getComponent:o,evaluate:r=>"not-found",slots:[],attributes:[],redundantAttribute:"expr3",selector:"[expr3]"}])},{type:n.IF,evaluate:r=>!r.state.showNotFound,redundantAttribute:"expr4",selector:"[expr4]",template:e('<div class="column column-60"><route expr5="expr5"></route></div><div class="column column-40"><sidebar expr7="expr7"></sidebar></div>',[{type:n.EACH,getKey:null,condition:null,template:e(null,[{type:n.TAG,getComponent:o,evaluate:r=>"route",slots:[{id:"default",html:'<main expr6="expr6"></main>',bindings:[{type:n.TAG,getComponent:o,evaluate:r=>r.page.componentName,slots:[],attributes:[],redundantAttribute:"expr6",selector:"[expr6]"}]}],attributes:[{type:t.ATTRIBUTE,isBoolean:!1,name:"path",evaluate:r=>r.page.path}]}]),redundantAttribute:"expr5",selector:"[expr5]",itemName:"page",indexName:null,evaluate:r=>r.state.pages},{type:n.TAG,getComponent:o,evaluate:r=>"sidebar",slots:[],attributes:[],redundantAttribute:"expr7",selector:"[expr7]"}])}]}],attributes:[],redundantAttribute:"expr0",selector:"[expr0]"}]),name:"app"},ho={css:null,exports:null,template:(e,t,n,o)=>e('<button expr16="expr16"><slot expr17="expr17"></slot></button>',[{redundantAttribute:"expr16",selector:"[expr16]",expressions:[{type:t.ATTRIBUTE,isBoolean:!1,name:"class",evaluate:r=>["btn",r.props.primary?" btn-primary":"",r.props.danger?" btn-danger":""].join("")}]},{type:n.SLOT,attributes:[],name:"default",redundantAttribute:"expr17",selector:"[expr17]"}]),name:"c-button"},mo={css:null,exports:{components:{cButton:ho},state:{total:0}},template:(e,t,n,o)=>e('<div><h2>Count App</h2><c-button expr8="expr8"></c-button><c-button expr9="expr9" primary="true"></c-button><c-button expr10="expr10" danger="true"></c-button></div>',[{type:n.TAG,getComponent:o,evaluate:r=>"c-button",slots:[{id:"default",html:" ",bindings:[{expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:r=>[r.state.total].join("")}]}]}],attributes:[],redundantAttribute:"expr8",selector:"[expr8]"},{type:n.TAG,getComponent:o,evaluate:r=>"c-button",slots:[{id:"default",html:" Add ",bindings:[]}],attributes:[{type:t.EVENT,name:"onclick",evaluate:r=>()=>r.update({total:r.state.total+1})}],redundantAttribute:"expr9",selector:"[expr9]"},{type:n.TAG,getComponent:o,evaluate:r=>"c-button",slots:[{id:"default",html:" Delete ",bindings:[]}],attributes:[{type:t.EVENT,name:"onclick",evaluate:r=>()=>r.update({total:r.state.total-1})}],redundantAttribute:"expr10",selector:"[expr10]"}]),name:"count"},go=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"})),vo={css:null,exports:null,template:(e,t,n,o)=>e('<p expr14="expr14"> </p>',[{redundantAttribute:"expr14",selector:"[expr14]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:r=>r.props.message}]}]),name:"my-component"},Eo=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),bo={css:null,exports:null,template:(e,t,n,o)=>e('<p>My username is: <b expr15="expr15"> </b></p>',[{redundantAttribute:"expr15",selector:"[expr15]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:r=>r.props.name}]}]),name:"user"},xo={css:null,exports:{components:{User:bo},state:{name:"John",showUser:!1},toggleUser(){this.update({showUser:!this.state.showUser})}},template:(e,t,n,o)=>e('<div><div class="row"><h1>Sidebar</h1></div><div expr11="expr11" class="row"></div><div class="row"><button expr13="expr13">Toggle username</button></div></div>',[{type:n.IF,evaluate:r=>r.state.showUser,redundantAttribute:"expr11",selector:"[expr11]",template:e('<user expr12="expr12"></user>',[{type:n.TAG,getComponent:o,evaluate:r=>"user",slots:[],attributes:[{type:t.ATTRIBUTE,isBoolean:!1,name:"name",evaluate:r=>r.state.name}],redundantAttribute:"expr12",selector:"[expr12]"}])},{redundantAttribute:"expr13",selector:"[expr13]",expressions:[{type:t.EVENT,name:"onclick",evaluate:r=>r.toggleUser}]}]),name:"sidebar"},To=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),yo={css:null,exports:{state:{todos:[]},onMounted(){console.log("todo monted!")}},template:(e,t,n,o)=>e("<div><h2>todo app</h2><div></div></div>",[]),name:"todo"},Ao=Object.freeze(Object.defineProperty({__proto__:null,default:yo},Symbol.toStringTag,{value:"Module"})),Oo=(e,t="")=>e.split("/").reverse()[0].replace(t,""),No=Object.assign({"./components/global/count/count.riot":go,"./components/global/my-component/my-component.riot":Eo,"./components/global/sidebar/sidebar.riot":To,"./components/global/todo/todo.riot":Ao}),wo=()=>{Object.entries(No).map(([e,t])=>{const n=Oo(e,".riot");return dr(n,t.default||t),{name:n,component:t}})};wo();Nt(fo)(document.getElementById("root"));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}