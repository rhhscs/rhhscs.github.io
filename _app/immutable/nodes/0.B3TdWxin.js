import{s as M,n as y,q as J,u as K,v as X,w as B,x as G,y as Q}from"../chunks/scheduler.B-CmTsXk.js";import{S,i as U,e as g,c as p,f as b,d as f,v as h,b as d,j as $,A as P,t as W,h as Y,k as Z,g as ee,s as R,l as H,z as te,a as E,m as O,n as N,o as C,p as j,q as T}from"../chunks/index.C4WAWUN_.js";import{r as se}from"../chunks/routes.BACPwS2N.js";function L(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const le=!0,de=Object.freeze(Object.defineProperty({__proto__:null,prerender:le},Symbol.toStringTag,{value:"Module"}));function q(a,e,l){const t=a.slice();return t[1]=e[l],t}function F(a){let e,l,t=a[1].title+"",r,n;return{c(){e=g("li"),l=g("a"),r=W(t),this.h()},l(i){e=p(i,"LI",{class:!0});var s=b(e);l=p(s,"A",{href:!0,class:!0});var u=b(l);r=Y(u,t),u.forEach(f),s.forEach(f),this.h()},h(){h(l,"href",n=a[1].url),h(l,"class","svelte-duu0aw"),h(e,"class","svelte-duu0aw")},m(i,s){d(i,e,s),$(e,l),$(l,r)},p(i,s){s&1&&t!==(t=i[1].title+"")&&Z(r,t),s&1&&n!==(n=i[1].url)&&h(l,"href",n)},d(i){i&&f(e)}}}function re(a){let e,l,t=L(a[0]),r=[];for(let n=0;n<t.length;n+=1)r[n]=F(q(a,t,n));return{c(){e=g("nav"),l=g("ul");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=p(n,"NAV",{class:!0});var i=b(e);l=p(i,"UL",{class:!0});var s=b(l);for(let u=0;u<r.length;u+=1)r[u].l(s);s.forEach(f),i.forEach(f),this.h()},h(){h(l,"class","nav__links svelte-duu0aw"),h(e,"class","nav svelte-duu0aw")},m(n,i){d(n,e,i),$(e,l);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(l,null)},p(n,[i]){if(i&1){t=L(n[0]);let s;for(s=0;s<t.length;s+=1){const u=q(n,t,s);r[s]?r[s].p(u,i):(r[s]=F(u),r[s].c(),r[s].m(l,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},i:y,o:y,d(n){n&&f(e),P(r,n)}}}function ne(a,e,l){let{routes:t}=e;return a.$$set=r=>{"routes"in r&&l(0,t=r.routes)},[t]}class ie extends S{constructor(e){super(),U(this,e,ne,re,M,{routes:0})}}function ae(a){let e,l='<ul class="footer__links svelte-tywn4y"><li><a href="https://github.com/rhhscs" class="svelte-tywn4y"><i class="ri-github-line svelte-tywn4y"></i></a></li> <li><a href="https://instagram.com/rhhs.cs.club" class="svelte-tywn4y"><i class="ri-instagram-line svelte-tywn4y"></i></a></li> <li><a href="https://discord.gg/EzgjbPhgxX" class="svelte-tywn4y"><i class="ri-discord-line svelte-tywn4y"></i></a></li> <li><a href="rhhs.compsci@gmail.com" class="svelte-tywn4y"><i class="ri-mail-line svelte-tywn4y"></i></a></li> <li><a href="https://classroom.google.com/c/Mzk3MjgzNjk3Mzg2?cjc=6bzuaye" class="svelte-tywn4y"><i class="ri-google-line svelte-tywn4y"></i></a></li></ul>';return{c(){e=g("footer"),e.innerHTML=l,this.h()},l(t){e=p(t,"FOOTER",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-ktsmm4"&&(e.innerHTML=l),this.h()},h(){h(e,"class","footer svelte-tywn4y")},m(t,r){d(t,e,r)},p:y,i:y,o:y,d(t){t&&f(e)}}}class ce extends S{constructor(e){super(),U(this,e,null,ae,M,{})}}const v={sources:{avif:""+new URL("../assets/logo_white.F1jyJzc8.avif",import.meta.url).href+" 460w, "+new URL("../assets/logo_white.DeDm2nc1.avif",import.meta.url).href+" 400w",webp:""+new URL("../assets/logo_white.Cxc6RScu.webp",import.meta.url).href+" 460w, "+new URL("../assets/logo_white.DaGeKg57.webp",import.meta.url).href+" 400w",png:""+new URL("../assets/logo_white.C616x8FR.png",import.meta.url).href+" 460w, "+new URL("../assets/logo_white.CNV8btdN.png",import.meta.url).href+" 400w"},img:{src:""+new URL("../assets/logo_white.C616x8FR.png",import.meta.url).href,w:460,h:300}};function I(a,e,l){const t=a.slice();return t[2]=e[l][0],t[3]=e[l][1],t}function oe(a){let e,l,t,r,n=L(Object.entries(v.sources)),i=[];for(let s=0;s<n.length;s+=1)i[s]=D(I(a,n,s));return{c(){e=g("picture");for(let s=0;s<i.length;s+=1)i[s].c();l=R(),t=g("img"),this.h()},l(s){e=p(s,"PICTURE",{});var u=b(e);for(let o=0;o<i.length;o+=1)i[o].l(u);l=E(u),t=p(u,"IMG",{src:!0,alt:!0,width:!0,height:!0}),u.forEach(f),this.h()},h(){G(t.src,r=v.img.src)||h(t,"src",r),h(t,"alt","RHHS Computer Science Club"),h(t,"width",v.img.w),h(t,"height",v.img.h)},m(s,u){d(s,e,u);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null);$(e,l),$(e,t)},p(s,u){if(u&0){n=L(Object.entries(v.sources));let o;for(o=0;o<n.length;o+=1){const w=I(s,n,o);i[o]?i[o].p(w,u):(i[o]=D(w),i[o].c(),i[o].m(e,l))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(s){s&&f(e),P(i,s)}}}function ue(a){let e,l;return{c(){e=g("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){G(e.src,l=v.img.src)||h(e,"src",l),h(e,"alt","RHHS Computer Science Club"),h(e,"width",v.img.w),h(e,"height",v.img.h)},m(t,r){d(t,e,r)},p:y,d(t){t&&f(e)}}}function D(a){let e,l;return{c(){e=g("source"),this.h()},l(t){e=p(t,"SOURCE",{srcset:!0,sizes:!0,type:!0}),this.h()},h(){Q(e,l=a[3])||h(e,"srcset",l),h(e,"sizes","(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"),h(e,"type","image/"+a[2])},m(t,r){d(t,e,r)},p:y,d(t){t&&f(e)}}}function he(a){let e,l,t,r,n,i,s,u,o,w;function V(c,m){return typeof v=="string"?ue:oe}let x=V()(a);n=new ie({props:{routes:se}});const z=a[1].default,_=J(z,a,a[0],null);return o=new ce({}),{c(){e=g("meta"),l=R(),t=g("header"),x.c(),r=R(),H(n.$$.fragment),i=R(),s=g("main"),_&&_.c(),u=R(),H(o.$$.fragment),this.h()},l(c){const m=te("svelte-xkk7ov",document.head);e=p(m,"META",{property:!0,content:!0}),m.forEach(f),l=E(c),t=p(c,"HEADER",{class:!0});var k=b(t);x.l(k),r=E(k),O(n.$$.fragment,k),k.forEach(f),i=E(c),s=p(c,"MAIN",{class:!0});var A=b(s);_&&_.l(A),A.forEach(f),u=E(c),O(o.$$.fragment,c),this.h()},h(){h(e,"property","og:image"),h(e,"content",v.img.src),h(t,"class","svelte-18zeu70"),h(s,"class","svelte-18zeu70")},m(c,m){$(document.head,e),d(c,l,m),d(c,t,m),x.m(t,null),$(t,r),N(n,t,null),d(c,i,m),d(c,s,m),_&&_.m(s,null),d(c,u,m),N(o,c,m),w=!0},p(c,[m]){x.p(c,m),_&&_.p&&(!w||m&1)&&K(_,z,c,c[0],w?B(z,c[0],m,null):X(c[0]),null)},i(c){w||(C(n.$$.fragment,c),C(_,c),C(o.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),j(_,c),j(o.$$.fragment,c),w=!1},d(c){c&&(f(l),f(t),f(i),f(s),f(u)),f(e),x.d(),T(n),_&&_.d(c),T(o,c)}}}function fe(a,e,l){let{$$slots:t={},$$scope:r}=e;return a.$$set=n=>{"$$scope"in n&&l(0,r=n.$$scope)},[r,t]}class ve extends S{constructor(e){super(),U(this,e,fe,he,M,{})}}export{ve as component,de as universal};
