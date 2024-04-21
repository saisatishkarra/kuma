import{_ as D}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-BWmWq_-N.js";import{d as P,a as p,o as c,b as m,w as e,e as r,Y as T,f as o,t as n,m as i,c as d,F as R,C as $,R as k,q as _,_ as M}from"./index-e3QTo5dz.js";import"./CodeBlock-YMSbYN5D.js";import"./toYaml-DB9FPXFY.js";const N={class:"stack"},q={key:0},L={class:"mt-4 stack"},z={key:0},A={class:"mt-4"},K=P({__name:"PolicySummaryView",props:{items:{},policyType:{}},setup(C){const y=C;return(Q,I)=>{const v=p("RouteTitle"),x=p("RouterLink"),w=p("KBadge"),V=p("DataSource"),E=p("AppView"),S=p("DataCollection"),F=p("RouteView");return c(),m(F,{name:"policy-summary-view",params:{mesh:"",policyPath:"",policy:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({route:a,t:l})=>[r(S,{items:y.items,predicate:u=>u.id===a.params.policy,find:!0},{empty:e(()=>[r(T,null,{title:e(()=>[o(n(l("common.collection.summary.empty_title",{type:y.policyType.name})),1)]),default:e(()=>[o(),i("p",null,n(l("common.collection.summary.empty_message",{type:y.policyType.name})),1)]),_:2},1024)]),default:e(({items:u})=>[(c(!0),d(R,null,$([u[0]],s=>(c(),m(E,{key:s.id},{title:e(()=>[i("h2",null,[r(x,{to:{name:"policy-detail-view",params:{mesh:a.params.mesh,policyPath:a.params.policyPath,policy:a.params.policy}}},{default:e(()=>[r(v,{title:l("policies.routes.item.title",{name:s.name})},null,8,["title"])]),_:2},1032,["to"])])]),default:e(()=>{var f;return[o(),i("div",N,[(f=s.spec)!=null&&f.targetRef?(c(),d("div",q,[i("h3",null,n(l("policies.routes.item.overview")),1),o(),i("div",L,[r(k,{layout:"horizontal"},{title:e(()=>[o(n(l("http.api.property.targetRef")),1)]),body:e(()=>{var t;return[(t=s.spec)!=null&&t.targetRef?(c(),m(w,{key:0,appearance:"neutral"},{default:e(()=>[o(n(s.spec.targetRef.kind),1),s.spec.targetRef.name?(c(),d("span",z,[o(":"),i("b",null,n(s.spec.targetRef.name),1)])):_("",!0)]),_:2},1024)):(c(),d(R,{key:1},[o(n(l("common.detail.none")),1)],64))]}),_:2},1024),o(),s.namespace.length>0?(c(),m(k,{key:0,layout:"horizontal"},{title:e(()=>[o(n(l("data-planes.routes.item.namespace")),1)]),body:e(()=>[o(n(s.namespace),1)]),_:2},1024)):_("",!0)])])):_("",!0),o(),i("div",null,[i("h3",null,n(l("policies.routes.item.config")),1),o(),i("div",A,[r(D,{resource:s.config,"is-searchable":"",query:a.params.codeSearch,"is-filter-mode":a.params.codeFilter,"is-reg-exp-mode":a.params.codeRegExp,onQueryChange:t=>a.update({codeSearch:t}),onFilterModeChange:t=>a.update({codeFilter:t}),onRegExpModeChange:t=>a.update({codeRegExp:t})},{default:e(({copy:t,copying:b})=>[b?(c(),m(V,{key:0,src:`/meshes/${a.params.mesh}/policy-path/${a.params.policyPath}/policy/${a.params.policy}/as/kubernetes?no-store`,onChange:h=>{t(g=>g(h))},onError:h=>{t((g,B)=>B(h))}},null,8,["src","onChange","onError"])):_("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])])]}),_:2},1024))),128))]),_:2},1032,["items","predicate"])]),_:1})}}}),J=M(K,[["__scopeId","data-v-89e15902"]]);export{J as default};
