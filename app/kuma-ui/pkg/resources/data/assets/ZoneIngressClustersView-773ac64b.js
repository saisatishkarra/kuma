import{d as o,o as i,a as l,w as e,h as s,i as u,b as t,g as c,l as m}from"./index-5e3b827e.js";import{h as p,A as d,_}from"./RouteView.vue_vue_type_script_setup_true_lang-1f1cfc32.js";import{_ as f}from"./RouteTitle.vue_vue_type_script_setup_true_lang-d7eeef45.js";import{E as g}from"./EnvoyData-b3619d04.js";import{e as h}from"./dataplane-e7ae9fed.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-80c02e96.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-fcd8532f.js";const C=o({__name:"ZoneIngressClustersView",props:{data:{}},setup(r){const a=r,{t:n}=p();return(w,z)=>(i(),l(_,{name:"zone-ingress-clusters-view","data-testid":"zone-ingress-clusters-view"},{default:e(()=>[s(d,null,{title:e(()=>[u("h2",null,[s(f,{title:t(n)("zone-ingresses.routes.item.navigation.zone-ingress-clusters-view"),render:!0},null,8,["title"])])]),default:e(()=>[c(),s(t(m),null,{body:e(()=>[s(g,{status:t(h)(a.data.zoneIngressInsight),resource:"Zone",src:`/zone-ingresses/${a.data.name}/data-path/clusters`,"query-key":"envoy-data-clusters-zone-ingress"},null,8,["status","src"])]),_:1})]),_:1})]),_:1}))}});export{C as default};