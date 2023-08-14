import{d as h,c as b,r as x,o as a,a as i,w as e,h as s,b as n,G as u,q as f,g as o,t as m,e as O,F as B,s as S}from"./index-d41bec2a.js";import{a as A,A as D,S as $,b as q}from"./SubscriptionHeader-f9304799.js";import{g as w,D as p,S as T,A as C,o as E,q as V,E as L,r as F,_ as N}from"./RouteView.vue_vue_type_script_setup_true_lang-b7b12c2d.js";import{E as v}from"./EnvoyData-c7322a7c.js";import{T as R}from"./TabsWidget-8d71781f.js";import{T as W}from"./TextWithCopyButton-281457d0.js";import{g as Z}from"./dataplane-30467516.js";import{_ as j}from"./RouteTitle.vue_vue_type_script_setup_true_lang-77c32268.js";import"./DefinitionListItem-a6b8c274.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-65482a4a.js";import"./CopyButton-aa3318d3.js";const G={class:"variable-columns"},H=h({__name:"ZoneIngressDetails",props:{zoneIngressOverview:{type:Object,required:!0}},setup(_){const t=_,{t:r}=w(),z=[{hash:"#overview",title:r("zone-ingresses.routes.item.tabs.overview")},{hash:"#insights",title:r("zone-ingresses.routes.item.tabs.insights")},{hash:"#xds-configuration",title:r("zone-ingresses.routes.item.tabs.xds_configuration")},{hash:"#envoy-stats",title:r("zone-ingresses.routes.item.tabs.stats")},{hash:"#envoy-clusters",title:r("zone-ingresses.routes.item.tabs.clusters")}],c=b(()=>Z(t.zoneIngressOverview.zoneIngressInsight)),d=b(()=>{var l;const g=((l=t.zoneIngressOverview.zoneIngressInsight)==null?void 0:l.subscriptions)??[];return Array.from(g).reverse()});return(g,l)=>{const I=x("RouterLink");return a(),i(R,{tabs:z},{overview:e(()=>[s(n(u),null,{body:e(()=>[f("div",G,[s(p,null,{title:e(()=>[o(m(n(r)("http.api.property.status")),1)]),body:e(()=>[s(T,{status:c.value},null,8,["status"])]),_:1}),o(),s(p,null,{title:e(()=>[o(m(n(r)("http.api.property.name")),1)]),body:e(()=>[s(W,{text:t.zoneIngressOverview.name},{default:e(()=>[s(I,{to:{name:"zone-ingress-detail-view",params:{zoneIngress:t.zoneIngressOverview.name}}},{default:e(()=>[o(m(t.zoneIngressOverview.name),1)]),_:1},8,["to"])]),_:1},8,["text"])]),_:1}),o(),s(p,null,{title:e(()=>[o(m(n(r)("http.api.property.type")),1)]),body:e(()=>[o(m(t.zoneIngressOverview.type),1)]),_:1})])]),_:1})]),insights:e(()=>[s(n(u),null,{body:e(()=>[s(A,{"initially-open":0},{default:e(()=>[(a(!0),O(B,null,S(d.value,(y,k)=>(a(),i(D,{key:k},{"accordion-header":e(()=>[s($,{details:y},null,8,["details"])]),"accordion-content":e(()=>[s(q,{details:y,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":e(()=>[s(n(u),null,{body:e(()=>[s(v,{"data-path":"xds","zone-ingress-name":t.zoneIngressOverview.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1})]),"envoy-stats":e(()=>[s(n(u),null,{body:e(()=>[s(v,{"data-path":"stats","zone-ingress-name":t.zoneIngressOverview.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1})]),"envoy-clusters":e(()=>[s(n(u),null,{body:e(()=>[s(v,{"data-path":"clusters","zone-ingress-name":t.zoneIngressOverview.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1})]),_:1})}}}),ne=h({__name:"ZoneIngressDetailView",setup(_){const{t}=w();return(r,z)=>(a(),i(N,{name:"zone-ingress-detail-view","data-testid":"zone-ingress-detail-view"},{default:e(({route:c})=>[s(C,{breadcrumbs:[{to:{name:"zone-ingress-list-view"},text:n(t)("zone-ingresses.routes.item.breadcrumbs")}]},{title:e(()=>[f("h1",null,[s(j,{title:n(t)("zone-ingresses.routes.item.title",{name:c.params.zoneIngress}),render:!0},null,8,["title"])])]),default:e(()=>[o(),s(E,{src:`/zone-ingresses/${c.params.zoneIngress}`},{default:e(({data:d,isLoading:g,error:l})=>[g?(a(),i(V,{key:0})):l!==void 0?(a(),i(L,{key:1,error:l},null,8,["error"])):d===void 0?(a(),i(F,{key:2})):(a(),i(H,{key:3,"zone-ingress-overview":d,"data-testid":"detail-view-details"},null,8,["zone-ingress-overview"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{ne as default};