var et=Object.defineProperty;var nt=(t,e,n)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>(nt(t,typeof e!="symbol"?e+"":e,n),n);function _(){}function rt(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function I(){return Object.create(null)}function w(t){t.forEach(V)}function D(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function it(t,e,n,r){if(t){const o=G(t,e,n,r);return t[0](o)}}function G(t,e,n,r){return t[1]&&r?rt(n.ctx.slice(),t[1](r(e))):n.ctx}function st(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],c=Math.max(e.dirty.length,o.length);for(let a=0;a<c;a+=1)i[a]=e.dirty[a]|o[a];return i}return e.dirty|o}return e.dirty}function ct(t,e,n,r,o,i){if(o){const c=G(e,n,r,i);t.p(c,o)}}function at(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function P(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t){return document.createElement(t)}function lt(t){return document.createTextNode(t)}function ft(){return lt("")}function K(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}let y;function $(t){y=t}function dt(){if(!y)throw new Error("Function called outside component initialization");return y}function pt(t){dt().$$.on_mount.push(t)}const m=[],H=[];let g=[];const U=[],mt=Promise.resolve();let k=!1;function _t(){k||(k=!0,mt.then(Q))}function A(t){g.push(t)}const C=new Set;let p=0;function Q(){if(p!==0)return;const t=y;do{try{for(;p<m.length;){const e=m[p];p++,$(e),gt(e.$$)}}catch(e){throw m.length=0,p=0,e}for($(null),m.length=0,p=0;H.length;)H.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];C.has(n)||(C.add(n),n())}g.length=0}while(m.length);for(;U.length;)U.pop()();k=!1,C.clear(),$(t)}function gt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function ht(t){const e=[],n=[];g.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),g=e}const v=new Set;let u;function $t(){u={r:0,c:[],p:u}}function yt(){u.r||w(u.c),u=u.p}function d(t,e){t&&t.i&&(v.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if(v.has(t))return;v.add(t),u.c.push(()=>{v.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function W(t){t&&t.c()}function M(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),A(()=>{const i=t.$$.on_mount.map(V).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...i):w(i),t.$$.on_mount=[]}),o.forEach(A)}function S(t,e){const n=t.$$;n.fragment!==null&&(ht(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(m.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,r,o,i,c,a=[-1]){const f=y;$(t);const s=t.$$={fragment:null,ctx:[],props:i,update:_,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:I(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};c&&c(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(l,R,...T)=>{const B=T.length?T[0]:R;return s.ctx&&o(s.ctx[l],s.ctx[l]=B)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](B),h&&bt(t,l)),R}):[],s.update(),h=!0,w(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const l=ut(e.target);s.fragment&&s.fragment.l(l),l.forEach(E)}else s.fragment&&s.fragment.c();e.intro&&d(t.$$.fragment),M(t,e.target,e.anchor),Q()}$(f)}class O{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){S(this,1),this.$destroy=_}$on(e,n){if(!D(n))return _;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(wt);function vt(t){let e,n;const r=t[1].default,o=it(r,t,t[0],null);return{c(){e=J("div"),o&&o.c(),K(e,"class","app-layout svelte-xxgsx4")},m(i,c){P(i,e,c),o&&o.m(e,null),n=!0},p(i,[c]){o&&o.p&&(!n||c&1)&&ct(o,r,i,i[0],n?st(r,i[0],c,null):at(i[0]),null)},i(i){n||(d(o,i),n=!0)},o(i){b(o,i),n=!1},d(i){i&&E(e),o&&o.d(i)}}}function xt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=i=>{"$$scope"in i&&n(0,o=i.$$scope)},[o,r]}class Et extends O{constructor(e){super(),L(this,e,xt,vt,N,{})}}function jt(t){let e;return{c(){e=J("div"),e.innerHTML='<div class="picture-container"><img class="portrayal-image svelte-1oab3e2" src="/web-assets/web-portal//assets/images/NalinRanjan-ProfilePic.png" alt=""/></div> <div class="portrayal-title svelte-1oab3e2"><a href="mailto: nalin39@gmail.com" class="svelte-1oab3e2">Nalin Ranjan</a> <p class="svelte-1oab3e2">I am about to open myself up, Here !!!</p></div>',K(e,"class","portrayal-message covered svelte-1oab3e2")},m(n,r){P(n,e,r)},p:_,i:_,o:_,d(n){n&&E(e)}}}function Ct(t){return console.log("base url:","/web-assets/web-portal/"),[]}class kt extends O{constructor(e){super(),L(this,e,Ct,jt,N,{})}}function q(t){let e,n;return e=new Et({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment)},m(r,o){M(e,r,o),n=!0},i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){S(e,r)}}}function At(t){let e,n;return e=new kt({}),{c(){W(e.$$.fragment)},m(r,o){M(e,r,o),n=!0},i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){S(e,r)}}}function Nt(t){let e,n,r=t[0]&&q(t);return{c(){r&&r.c(),e=ft()},m(o,i){r&&r.m(o,i),P(o,e,i),n=!0},p(o,[i]){o[0]?r?i&1&&d(r,1):(r=q(o),r.c(),d(r,1),r.m(e.parentNode,e)):r&&($t(),b(r,1,1,()=>{r=null}),yt())},i(o){n||(d(r),n=!0)},o(o){b(r),n=!1},d(o){o&&E(e),r&&r.d(o)}}}function Pt(t,e,n){let r=!1;return pt(()=>{setTimeout(()=>{dispatchEvent(new CustomEvent("ranjanified:app:loaded")),n(0,r=!0)},3e3)}),[r]}class X extends O{constructor(e){super(),L(this,e,Pt,Nt,N,{})}}const x=new URLSearchParams(location.search),Y=(t="")=>{const e=x.get("app_target")||x.get("integration_target")||x.get("target_selector")||t;return e!=null&&e.trim()&&document.body.querySelector(e==null?void 0:e.trim())||document.body};var F;const Mt=((F=x.get("_instantiate"))==null?void 0:F.toLowerCase())==="true";Mt&&new X({target:Y()});const St=(t="")=>{new X({target:Y(t)})},Lt=async()=>await(await fetch("/web-assets/web-portal/config/app.json")).json(),Ot=async()=>await(await fetch("/web-assets/web-portal/manifest.json")).json(),Rt=(t,e)=>{if(e&&(t!=null&&t.trim()))return e[t==null?void 0:t.trim()]?e[t==null?void 0:t.trim()]:Object.values(e).find(n=>{n.src,t==null||t.trim()})},Tt=(t,e,n)=>{t.inline?tt(t,n):Z(e,n)},Z=(t,e)=>{if(t!=null&&t.trim()){const n=document.createElement("link");n.rel="stylesheet",n.href=t.trim(),e==="head"?document.head.appendChild(n):document.body.appendChild(n)}},tt=(t,e)=>{var n;if((n=t.inline_text)!=null&&n.trim()){const r=document.createElement("style");r.appendChild(document.createTextNode(t.inline_text.trim())),e==="head"?document.head.appendChild(r):document.body.appendChild(r)}},z=(t,e,n,r)=>{t&&(t==null||t.filter(o=>{var i;return(i=o.name)==null?void 0:i.trim()}).forEach(o=>{var i,c;if(o.skip_manifest)o.inline?Bt(o,r):It(o,r);else{const a=Rt(o.name,e);if(a&&((i=a.file)!=null&&i.trim())){const f=`/${(n==null?void 0:n.trim())??""}/${((c=a.file)==null?void 0:c.trim())??""}`;Ht(o,f,r)}}}))};function Bt(t,e){switch(t.type){case"css":tt(t,e);break}}function It(t,e){var n;switch(t.type){case"css":Z(((n=t.attrs)==null?void 0:n.href)??"",e);break}}function Ht(t,e,n){switch(console.log("[Manifested Asset]",e),t.type){case"css":Tt(t,e,n);break}}const qt=async t=>{var o,i,c,a,f,s,h,l;console.log("Bootstrapping Application"),dispatchEvent(new CustomEvent("ranjanified:app:bootstrapping"));const[e,n]=await Promise.all([Ot(),Lt()]),r={...e,...n.manifest};dispatchEvent(new CustomEvent("ranjanified:app:manifest",{detail:{generated:e,configured:n.manifest,merged:r}})),dispatchEvent(new CustomEvent("ranjanified:app:config",{detail:n})),z([...((i=(o=n.document)==null?void 0:o.assets)==null?void 0:i.head)??[]],{...n,manifest:r}.manifest,((a=(c=n.document)==null?void 0:c.assets)==null?void 0:a.path_prefix)??"","head"),z([...((s=(f=n.document)==null?void 0:f.assets)==null?void 0:s.body)??[]],{...n,manifest:r}.manifest,((l=(h=n.document)==null?void 0:h.assets)==null?void 0:l.path_prefix)??"","body"),St((t==null?void 0:t.target_selector)??"")};export{qt as bootstrap};