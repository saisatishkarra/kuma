import{_ as C}from"./NavTabs.vue_vue_type_script_setup_true_lang-C5JIWMxS.js";import{d as O,a as t,o as l,b as m,w as e,e as o,m as R,t as p,f as c,O as b,C as y,B as h}from"./index-BoWPjB7y.js";const N=O({__name:"ConnectionOutboundSummaryView",props:{data:{},dataplaneOverview:{}},setup(u){const s=u;return(k,x)=>{const d=t("RouterLink"),_=t("DataCollection"),v=t("RouterView"),f=t("AppView"),w=t("RouteView");return l(),m(w,{name:"connection-outbound-summary-view",params:{connection:"",inactive:!1}},{default:e(({route:a,t:V})=>[o(f,null,{title:e(()=>[R("h2",null,`
          Outbound `+p(a.params.connection),1)]),default:e(()=>{var r;return[c(),o(C,{"active-route-name":(r=a.active)==null?void 0:r.name},b({_:2},[y(a.children,n=>({name:`${n.name}`,fn:e(()=>[o(d,{to:{name:n.name,query:{inactive:a.params.inactive?null:void 0}}},{default:e(()=>[c(p(V(`connections.routes.item.navigation.${n.name.split("-")[3]}`)),1)]),_:2},1032,["to"])])}))]),1032,["active-route-name"]),c(),o(v,null,{default:e(({Component:n})=>[o(_,{items:Object.entries(s.data),predicate:([i,B])=>i===a.params.connection,find:!0},{default:e(({items:i})=>[(l(),m(h(n),{data:i[0][1],"dataplane-overview":s.dataplaneOverview},null,8,["data","dataplane-overview"]))]),_:2},1032,["items","predicate"])]),_:2},1024)]}),_:2},1024)]),_:1})}}});export{N as default};