import{d as _,r as k,a5 as x,o as n,c as r,e as a,a9 as V,am as m,N as g,O as M,f as d,J as f,h as S,i as b,G as h,a as i,w as s,z as v,u as e,F as C,A as L,j as A,b as N,y as O}from"./index-5f1fbf13.js";import{O as W,a as H,b as G}from"./OnboardingPage-503a3bf7.js";const I=t=>(g("data-v-4b67edd8"),t=t(),M(),t),$=I(()=>d("defs",null,null,-1)),B=m('<defs data-v-4b67edd8><linearGradient id="a" x1="64.8%" x2="34.4%" y1="-12.6%" y2="153.1%" data-v-4b67edd8><stop offset="0%" stop-color="var(--onboarding-accent-dark)" data-v-4b67edd8></stop> <stop offset="100%" stop-color="var(--onboarding-accent)" data-v-4b67edd8></stop></linearGradient> <linearGradient id="b" x1="0%" x2="107.4%" y1="41.5%" y2="41.5%" data-v-4b67edd8><stop offset="0%" stop-color="var(--onboarding-accent-dark)" data-v-4b67edd8></stop> <stop offset="100%" stop-color="var(--onboarding-accent)" data-v-4b67edd8></stop></linearGradient></defs>',1),j=m('<g fill="none" fill-rule="evenodd" mask="url(#ccard)" transform="translate(-63 -285)" data-v-4b67edd8><g stroke="var(--onboarding-accent)" stroke-width="6" data-v-4b67edd8><path d="M1444 893h252" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M1529 705h232M1452 603h237" data-v-4b67edd8></path> <path d="M1754 563l-332 332h-76M1444 935l121 121M263 859l156 156" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M742 781H556" data-v-4b67edd8></path> <path d="M697 736H513" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M695 783V577" data-v-4b67edd8></path> <path d="M261 1026V751M509 573V438M1502 415l291 290" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M698 912L26 240M1368 411v540l61 61 95-95M1434 3h267l193 192v354" data-v-4b67edd8></path> <path d="M517 411h342l138 138M1416 573v242l371 323" data-v-4b67edd8></path> <path d="M1486 817V612l-146-146M839 243h-97l-83 84v348M1698 1063V817l58-57h122M1069 299L558 810M696 1058H585L468 941V570L322 424" data-v-4b67edd8></path> <path d="M277 528l160 160 236-236 121 121M632 979h-45l-67-67v-86H0M106 669h275M70 707h331M207 745h210M85 784h356M1417 558h228M1609 634h203M528 946h76M619 604v131M1359 567l125 125M1332 594l156 156M1594 1070V959M381 632L260 753" data-v-4b67edd8></path> <path stroke-opacity=".4" d="M605 817V497M1851 959h-518M944 570H390" data-v-4b67edd8></path> <path d="M638 912H342M635 1139V912" data-v-4b67edd8></path></g> <foreignObject x="0" y="0" width="100%" height="100%" data-v-4b67edd8><div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div> <div data-v-4b67edd8></div></foreignObject></g>',1),z=_({__name:"WelcomeAnimationSvg",setup(t){const o=k(!1);return x(function(){window.setTimeout(()=>{o.value=!0},30)}),(u,c)=>(n(),r("svg",{class:V(["background svg",{active:o.value}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1080"},[$,a(),B,a(),j],2))}});const E=f(z,[["__scopeId","data-v-4b67edd8"]]),y=t=>(g("data-v-95b08b70"),t=t(),M(),t),F=y(()=>d("strong",null,"few minutes",-1)),T=y(()=>d("h2",{class:"text-center"},`
          Let’s get started:
        `,-1)),D={class:"item-status-list-wrapper"},P={class:"item-status-list"},R={class:"circle mr-2"},U=_({__name:"WelcomeView",setup(t){const o=S(),u=b(()=>{const l=o.getters["config/getEnvironment"];return l.charAt(0).toUpperCase()+l.slice(1)}),c=b(()=>o.getters["config/getMulticlusterStatus"]),w=b(()=>[{name:`Run ${h} control plane`,status:!0},{name:"Learn about deployments",status:!1},{name:"Learn about configuration storage",status:!1},...c.value?[{name:"Add zones",status:!1}]:[],{name:"Create the mesh",status:!1},{name:"Add services",status:!1},{name:"Go to the dashboard",status:!1}]);return(l,J)=>(n(),r("div",null,[i(G,null,{header:s(()=>[i(W,null,{title:s(()=>[a(`
            Welcome to `+v(e(h)),1)]),description:s(()=>[d("p",null,[a(`
              Congratulations on downloading `+v(e(h))+"! You are just a ",1),F,a(` away from getting your service mesh fully online.
            `)]),a(),d("p",null,[a(`
              We have automatically detected that you are running on `),d("strong",null,v(e(u)),1),a(`.
            `)])]),_:1})]),content:s(()=>[T,a(),d("div",D,[d("ul",P,[(n(!0),r(C,null,L(e(w),p=>(n(),r("li",{key:p.name},[d("span",R,[p.status?(n(),A(e(N),{key:0,icon:"check",size:"14",color:"currentColor"})):O("",!0)]),a(" "+v(p.name),1)]))),128))])])]),navigation:s(()=>[i(H,{"next-step":"onboarding-deployment-types"})]),_:1}),a(),i(E,{longer:e(c)},null,8,["longer"])]))}});const K=f(U,[["__scopeId","data-v-95b08b70"]]);export{K as default};