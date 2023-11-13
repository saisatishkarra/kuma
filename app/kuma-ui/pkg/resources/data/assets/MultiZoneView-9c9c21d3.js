import{L as Z}from"./LoadingBox-62b282c4.js";import{O as z,a as T,b as I}from"./OnboardingPage-f51d63c9.js";import{d as k,u as O,m as d,V as A,a as p,o as a,b as N,w as i,e as c,f as e,p as n,c as l,v as C,B,C as L,_ as R}from"./index-dc1529df.js";const S=u=>(B("data-v-052795d6"),u=u(),L(),u),M=S(()=>n("p",{class:"mb-4 text-center"},`
            A zone requires both the zone control plane and zone ingress. On Kubernetes, you run a single command to create both resources. On Universal, you must create them separately.
          `,-1)),D={class:"mb-4 text-center"},E=["href"],G={class:"status-box mt-4"},K={key:0,class:"status--is-connected","data-testid":"zone-connected"},P={key:1,class:"status--is-disconnected","data-testid":"zone-disconnected"},U={class:"status-box mt-4"},q={key:0,class:"status--is-connected","data-testid":"zone-ingress-connected"},H={key:1,class:"status--is-disconnected","data-testid":"zone-ingress-disconnected"},j={key:0,class:"status-loading-box mt-4"},b=1e3,F=k({__name:"MultiZoneView",setup(u){const m=O(),o=d(!1),s=d(!1),r=d(null),_=d(null);A(function(){g(),h()}),v(),f();async function v(){try{const{total:t}=await m.getZones();o.value=t>0}catch(t){o.value=!1,console.error(t)}finally{o.value||(g(),r.value=window.setTimeout(v,b))}}async function f(){try{const{total:t}=await m.getAllZoneIngressOverviews();s.value=t>0}catch(t){s.value=!1,console.error(t)}finally{s.value||(h(),_.value=window.setTimeout(f,b))}}function g(){r.value!==null&&window.clearTimeout(r.value)}function h(){_.value!==null&&window.clearTimeout(_.value)}return(t,J)=>{const y=p("RouteTitle"),x=p("AppView"),V=p("RouteView");return a(),N(V,{name:"onboarding-multi-zone"},{default:i(({t:w})=>[c(y,{title:w("onboarding.routes.multizone.title")},null,8,["title"]),e(),c(x,null,{default:i(()=>[c(z,null,{header:i(()=>[c(T,null,{title:i(()=>[e(`
              Add zones
            `)]),_:1})]),content:i(()=>[M,e(),n("p",D,[n("b",null,[e("See "),n("a",{href:w("onboarding.href.docs.install"),target:"_blank"},"the documentation for options to install",8,E),e(".")])]),e(),n("div",null,[n("p",G,[e(`
              Zone status:

              `),o.value?(a(),l("span",K,"Connected")):(a(),l("span",P,"Disconnected"))]),e(),n("p",U,[e(`
              Zone ingress status:

              `),s.value?(a(),l("span",q,"Connected")):(a(),l("span",H,"Disconnected"))]),e(),!s.value||!o.value?(a(),l("div",j,[c(Z)])):C("",!0)])]),navigation:i(()=>[c(I,{"next-step":"onboarding-create-mesh","previous-step":"onboarding-configuration-types","should-allow-next":o.value&&s.value},null,8,["should-allow-next"])]),_:2},1024)]),_:2},1024)]),_:1})}}});const Y=R(F,[["__scopeId","data-v-052795d6"]]);export{Y as default};