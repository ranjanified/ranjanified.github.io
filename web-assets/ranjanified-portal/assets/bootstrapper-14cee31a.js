function g(){}function B(t){return t()}function C(){return Object.create(null)}function b(t){t.forEach(B)}function M(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function T(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function D(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function H(){return G("")}function J(t){return Array.from(t.childNodes)}let _;function h(t){_=t}function K(){if(!_)throw new Error("Function called outside component initialization");return _}function Q(t){K().$$.on_mount.push(t)}const l=[],N=[];let m=[];const O=[],V=Promise.resolve();let w=!1;function W(){w||(w=!0,V.then(I))}function x(t){m.push(t)}const y=new Set;let u=0;function I(){if(u!==0)return;const t=_;do{try{for(;u<l.length;){const e=l[u];u++,h(e),X(e.$$)}}catch(e){throw l.length=0,u=0,e}for(h(null),l.length=0,u=0;N.length;)N.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];y.has(n)||(y.add(n),n())}m.length=0}while(l.length);for(;O.length;)O.pop()();w=!1,y.clear(),h(t)}function X(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}function Y(t){const e=[],n=[];m.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),m=e}const Z=new Set;function tt(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function et(t,e,n,o){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),o||x(()=>{const a=t.$$.on_mount.map(B).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...a):b(a),t.$$.on_mount=[]}),r.forEach(x)}function nt(t,e){const n=t.$$;n.fragment!==null&&(Y(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(l.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,o,i,r,a,s=[-1]){const d=_;h(t);const c=t.$$={fragment:null,ctx:[],props:r,update:g,not_equal:i,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:e.target||d.$$.root};a&&a(c.root);let p=!1;if(c.ctx=n?n(t,e.props||{},(f,k,...v)=>{const j=v.length?v[0]:k;return c.ctx&&i(c.ctx[f],c.ctx[f]=j)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](j),p&&ot(t,f)),k}):[],c.update(),p=!0,b(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const f=J(e.target);c.fragment&&c.fragment.l(f),f.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&tt(t.$$.fragment),et(t,e.target,e.anchor,e.customElement),I()}h(d)}class ct{$destroy(){nt(this,1),this.$destroy=g}$on(e,n){if(!M(n))return g;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function S(t){let e;return{c(){e=D("div"),e.textContent="Build In Progress"},m(n,o){T(n,e,o)},d(n){n&&E(e)}}}function rt(t){let e,n=t[0]&&S();return{c(){n&&n.c(),e=H()},m(o,i){n&&n.m(o,i),T(o,e,i)},p(o,[i]){o[0]?n||(n=S(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:g,o:g,d(o){n&&n.d(o),o&&E(e)}}}function at(t,e,n){let o=!1;return Q(()=>{setTimeout(()=>{dispatchEvent(new CustomEvent("ranjanified:app:loaded")),n(0,o=!0)},3e3)}),[o]}class L extends ct{constructor(e){super(),it(this,e,at,rt,z,{})}}const $=new URLSearchParams(location.search),R=(t="")=>{const e=$.get("app_target")||$.get("integration_target")||$.get("target_selector")||t;return e!=null&&e.trim()&&document.body.querySelector(e==null?void 0:e.trim())||document.body};var P;const ft=((P=$.get("_instantiate"))==null?void 0:P.toLowerCase())==="true";ft&&new L({target:R()});const dt=(t="")=>{new L({target:R(t)})},st=async()=>await(await fetch(`${document.baseURI}/config/app.json`)).json(),ut=async()=>await(await fetch("/web-assets/ranjanified-portal/manifest.json")).json(),lt=(t,e)=>{if(e&&(t!=null&&t.trim()))return e[t==null?void 0:t.trim()]?e[t==null?void 0:t.trim()]:Object.values(e).find(n=>{n.src,t==null||t.trim()})},mt=(t,e,n)=>{t.inline?q(t,n):U(e,n)},U=(t,e)=>{if(t!=null&&t.trim()){const n=document.createElement("link");n.rel="stylesheet",n.href=t.trim(),e==="head"?document.head.appendChild(n):document.body.appendChild(n)}},q=(t,e)=>{var n;if((n=t.inline_text)!=null&&n.trim()){const o=document.createElement("style");o.appendChild(document.createTextNode(t.inline_text.trim())),e==="head"?document.head.appendChild(o):document.body.appendChild(o)}},A=(t,e,n,o)=>{t&&(t==null||t.filter(i=>{var r;return(r=i.name)==null?void 0:r.trim()}).forEach(i=>{var r,a;if(i.skip_manifest)i.inline?pt(i,o):ht(i,o);else{const s=lt(i.name,e);if(s&&((r=s.file)!=null&&r.trim())){const d=`/${(n==null?void 0:n.trim())??""}/${((a=s.file)==null?void 0:a.trim())??""}`;gt(i,d,o)}}}))};function pt(t,e){switch(t.type){case"css":q(t,e);break}}function ht(t,e){var n;switch(t.type){case"css":U(((n=t.attrs)==null?void 0:n.href)??"",e);break}}function gt(t,e,n){switch(console.log("[Manifested Asset]",e),t.type){case"css":mt(t,e,n);break}}const _t=async t=>{var i,r,a,s,d,c,p,f;console.log("Bootstrapping Application"),dispatchEvent(new CustomEvent("ranjanified:app:bootstrapping"));const[e,n]=await Promise.all([ut(),st()]),o={...e,...n.manifest};dispatchEvent(new CustomEvent("ranjanified:app:manifest",{detail:{generated:e,configured:n.manifest,merged:o}})),dispatchEvent(new CustomEvent("ranjanified:app:config",{detail:n})),A([...((r=(i=n.document)==null?void 0:i.assets)==null?void 0:r.head)??[]],{...n,manifest:o}.manifest,((s=(a=n.document)==null?void 0:a.assets)==null?void 0:s.path_prefix)??"","head"),A([...((c=(d=n.document)==null?void 0:d.assets)==null?void 0:c.body)??[]],{...n,manifest:o}.manifest,((f=(p=n.document)==null?void 0:p.assets)==null?void 0:f.path_prefix)??"","body"),dt((t==null?void 0:t.target_selector)??"")};export{_t as bootstrap};