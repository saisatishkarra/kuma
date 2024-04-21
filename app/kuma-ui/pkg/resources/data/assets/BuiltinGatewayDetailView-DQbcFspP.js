import{d as T,D as S,a as R,o as t,c as a,b as $,w as d,e as p,r as I,f as e,q as u,m as s,p as f,K as H,t as l,_ as L,F as c,C as m,s as K,v as N,l as V,n as E,Y as F}from"./index-e3QTo5dz.js";import{T as q}from"./TagList-CZPBfbeC.js";import{R as j}from"./RuleMatchers-qivhoUk6.js";const A="data:image/svg+xml,%3csvg%20width='11'%20height='12'%20viewBox='0%200%2011%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.66661%202.66667C5.8555%202.66667%206.01384%202.60278%206.14161%202.475C6.26939%202.34722%206.33328%202.18889%206.33328%202C6.33328%201.81111%206.26939%201.65278%206.14161%201.525C6.01384%201.39722%205.8555%201.33333%205.66661%201.33333C5.47773%201.33333%205.31939%201.39722%205.19161%201.525C5.06384%201.65278%204.99995%201.81111%204.99995%202C4.99995%202.18889%205.06384%202.34722%205.19161%202.475C5.31939%202.60278%205.47773%202.66667%205.66661%202.66667ZM7.54995%202.66667H8.71661C9.04995%202.66667%209.33884%202.77778%209.58328%203C9.82773%203.22222%209.97773%203.49444%2010.0333%203.81667L10.9833%2010.4833C11.0388%2010.8833%2010.9361%2011.2361%2010.6749%2011.5417C10.4138%2011.8472%2010.0777%2012%209.66661%2012H1.66661C1.2555%2012%200.919392%2011.8472%200.65828%2011.5417C0.397169%2011.2361%200.294391%2010.8833%200.349947%2010.4833L1.29995%203.81667C1.3555%203.49444%201.5055%203.22222%201.74995%203C1.99439%202.77778%202.28328%202.66667%202.61661%202.66667H3.78328C3.74995%202.55556%203.72217%202.44722%203.69995%202.34167C3.67772%202.23611%203.66661%202.12222%203.66661%202C3.66661%201.44444%203.86106%200.972222%204.24995%200.583333C4.63884%200.194444%205.11106%200%205.66661%200C6.22217%200%206.69439%200.194444%207.08328%200.583333C7.47217%200.972222%207.66661%201.44444%207.66661%202C7.66661%202.12222%207.6555%202.23611%207.63328%202.34167C7.61106%202.44722%207.58328%202.55556%207.54995%202.66667Z'%20fill='%236c7489'/%3e%3c/svg%3e",D={class:"target-ref"},G={key:3,class:"weight"},z=["width"],Z=T({__name:"TargetRef",props:{targetRef:{}},setup(y){const n=y,_=S(()=>{if(!n.targetRef.name)return null;switch(n.targetRef.kind){case"MeshService":case"MeshServiceSubset":return{name:"service-detail-view",params:{service:n.targetRef.name}};case"MeshGateway":return{name:"builtin-gateway-detail-view",params:{gateway:n.targetRef.name}};default:throw new Error(`Unsupported targetRef ${n.targetRef.kind}.`)}});return(k,v)=>{const r=R("KBadge"),i=R("RouterLink");return t(),a("span",D,[_.value!==null?(t(),$(i,{key:0,to:_.value},{default:d(()=>[p(r,null,{default:d(()=>[I(k.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["to"])):(t(),$(r,{key:1},{default:d(()=>[I(k.$slots,"default",{},void 0,!0)]),_:3})),e(),n.targetRef.kind==="MeshServiceSubset"&&n.targetRef.tags?(t(),$(q,{key:2,tags:n.targetRef.tags},null,8,["tags"])):u("",!0),e(),n.targetRef.weight!==void 0&&n.targetRef.weight!==1?(t(),a("span",G,[s("img",{src:A,alt:"Weight",width:f(H)},null,8,z),e(" "+l(n.targetRef.weight),1)])):u("",!0)])}}}),P=L(Z,[["__scopeId","data-v-d9c911dc"]]),O={class:"filter"},U={key:0,class:"list"},Q={class:"text-neutral"},W={key:1,class:"list"},Y={class:"text-neutral"},J={key:3,class:"list"},X={class:"text-neutral"},ee={key:4,class:"list"},te={class:"text-neutral"},se=T({__name:"RuleFilter",props:{filter:{}},setup(y){const n=y;return(_,k)=>{const v=R("KBadge");return t(),a("div",O,[p(v,{appearance:"neutral"},{default:d(()=>[e(l(n.filter.type),1)]),_:1}),e(),s("div",null,[n.filter.type==="RequestHeaderModifier"?(t(),a("div",U,[(t(!0),a(c,null,m(n.filter.requestHeaderModifier,(r,i)=>(t(),a(c,{key:i},[r?(t(!0),a(c,{key:0},m(r,(h,w)=>(t(),a("span",{key:w},[s("span",Q,l(i)+`:
                `,1),e(" "+l(typeof h=="string"?h:`${h.name}:${h.value}`),1)]))),128)):u("",!0)],64))),128))])):n.filter.type==="ResponseHeaderModifier"?(t(),a("div",W,[(t(!0),a(c,null,m(n.filter.responseHeaderModifier,(r,i)=>(t(),a(c,{key:i},[r?(t(!0),a(c,{key:0},m(r,(h,w)=>(t(),a("span",{key:w},[s("span",Y,l(i)+`:
                `,1),e(" "+l(typeof h=="string"?h:`${h.name}:${h.value}`),1)]))),128)):u("",!0)],64))),128))])):n.filter.type==="RequestMirror"?(t(),a(c,{key:2},[p(P,{"target-ref":n.filter.requestMirror.backendRef},{default:d(()=>[e(l(n.filter.requestMirror.backendRef.name),1)]),_:1},8,["target-ref"]),e(),n.filter.requestMirror.percentage?(t(),a(c,{key:0},[e(`
          (`+l(n.filter.requestMirror.percentage)+`%)
        `,1)],64)):u("",!0)],64)):n.filter.type==="RequestRedirect"?(t(),a("div",J,[(t(!0),a(c,null,m(n.filter.requestRedirect,(r,i)=>(t(),a("div",{key:i},[r?(t(),a(c,{key:0},[s("span",X,l(i)+`:
              `,1),e(),typeof r=="object"?(t(),a(c,{key:0},[e(l(r.type==="ReplaceFullPath"?r.replaceFullPath:r.replacePrefixMatch),1)],64)):(t(),a(c,{key:1},[e(l(r),1)],64))],64)):u("",!0)]))),128))])):(t(),a("div",ee,[(t(!0),a(c,null,m(n.filter.urlRewrite,(r,i)=>(t(),a("div",{key:i},[r?(t(),a(c,{key:0},[s("span",te,l(i)+`:
              `,1),e(),typeof r=="object"?(t(),a(c,{key:0},[e(l(r.type==="ReplaceFullPath"?r.replaceFullPath:r.replacePrefixMatch),1)],64)):(t(),a(c,{key:1},[e(l(r),1)],64))],64)):u("",!0)]))),128))]))])])}}}),ae=L(se,[["__scopeId","data-v-2f06ac55"]]),B=y=>(K("data-v-fee24663"),y=y(),N(),y),ne={class:"stack-small"},le={key:0,class:"match"},re={key:1,class:"match"},ie=B(()=>s("span",{class:"text-neutral"},"type:",-1)),ce={class:"match"},oe={class:"list"},de=B(()=>s("span",{class:"text-neutral"},"type:",-1)),ue={class:"list"},_e=B(()=>s("span",{class:"text-neutral"},"type:",-1)),he={key:0},pe=T({__name:"RuleMatch",props:{match:{}},setup(y){const n=y;return(_,k)=>{const v=R("KBadge");return t(),a("dl",ne,[n.match.method?(t(),a("div",le,[s("dt",null,[p(v,{appearance:"neutral"},{default:d(()=>[e(`
            Method
          `)]),_:1})]),e(),s("dd",null,[p(v,null,{default:d(()=>[e(l(n.match.method),1)]),_:1})])])):u("",!0),e(),n.match.path?(t(),a("div",re,[s("dt",null,[p(v,{appearance:"neutral"},{default:d(()=>[e(`
            Path
          `)]),_:1})]),e(),s("dd",null,[s("span",null,[ie,e(" "+l(n.match.path.type),1)]),e(),s("code",null,l(n.match.path.value),1)])])):u("",!0),e(),n.match.queryParams&&n.match.queryParams.length>0?(t(!0),a(c,{key:2},m(n.match.queryParams,(r,i)=>(t(),a("div",{key:i},[s("div",ce,[s("dt",null,[p(v,{appearance:"neutral"},{default:d(()=>[e(`
              QueryParameter
            `)]),_:1})]),e(),s("dd",null,[s("div",oe,[s("span",null,[de,e(" "+l(r.type),1)]),e(),s("span",null,l(r.name)+":"+l(r.value),1)])])])]))),128)):u("",!0),e(),n.match.headers&&n.match.headers.length>0?(t(!0),a(c,{key:3},m(n.match.headers,(r,i)=>(t(),a("div",{key:i,class:"match"},[s("dt",null,[p(v,{appearance:"neutral"},{default:d(()=>[e(`
            Header
          `)]),_:1})]),e(),s("dd",null,[s("div",ue,[s("span",null,[_e,e(" "+l(r.type??"Exact"),1)]),e(),s("span",null,[e(l(r.name),1),r.value?(t(),a("span",he,":"+l(r.value),1)):u("",!0)])])])]))),128)):u("",!0)])}}}),fe=L(pe,[["__scopeId","data-v-fee24663"]]);function me(y,n){for(const _ of n)if(_.not&&y[_.key]===_.value||!_.not&&y[_.key]!==_.value)return!1;return!0}const ye={class:"listener-routes-card"},ge={class:"listener-routes"},ve={class:"column"},ke={class:"header"},we={class:"title"},$e={class:"count"},Re={class:"content"},be={class:"listener-list"},Ce={class:"listener-card-header"},xe={key:0,class:"definition-list definition-list--horizontal mt-2"},Me={key:0},Te={class:"text-neutral"},Le={key:1},Pe={class:"text-neutral"},Be={class:"column"},Ie={class:"header"},Se={class:"title"},qe={class:"count"},He={class:"content"},Ke={class:"to-rule-list"},Ne={class:"stack-with-borders"},Ve={class:"definition-list definition-list--horizontal mt-2"},Ee={class:"text-neutral visually-hidden"},Fe={key:0},je={class:"text-neutral"},Ae={class:"text-neutral"},De={key:1},Ge={class:"text-neutral"},ze={class:"list"},Ze={key:0},Oe={class:"stack-small mt-2"},Ue={class:"stack-small mt-2"},Qe={key:0},We={class:"stack-small mt-2"},Ye={key:1},Je={class:"stack-small mt-2"},Xe={key:1},et={key:0,class:"stack-small mt-2"},tt={class:"rule stack-small"},st={class:"stack-small mt-2"},at=T({__name:"ListenerRoutes",props:{meshGateway:{},selectedListenerIndex:{},policyTypesByName:{},inspectRules:{}},setup(y){const{t:n}=V(),_=y,k=S(()=>{const r=_.meshGateway.conf.listeners[_.selectedListenerIndex];return r?_.inspectRules.filter(i=>!!(i.ruleType==="to"&&me(r.tags??{},i.matchers)&&(i.type==="MeshHTTPRoute"&&["HTTP","HTTPS"].includes(r.protocol)||i.type==="MeshTCPRoute"&&["TCP","TLS"].includes(r.protocol)))):[]});function v(r){if(r.isTrusted){const i=r.currentTarget.querySelector("[data-action]");i instanceof HTMLElement&&typeof i.click=="function"&&i.click()}}return(r,i)=>{const h=R("KBadge"),w=R("RouterLink");return t(),a("div",ye,[s("div",ge,[s("div",ve,[s("div",ke,[s("h2",we,l(f(n)("builtin-gateways.detail.listeners")),1),e(),s("p",$e,l(r.meshGateway.conf.listeners.length),1)]),e(),s("div",Re,[s("div",be,[(t(!0),a(c,null,m(r.meshGateway.conf.listeners,(o,b)=>(t(),a("div",{key:b,class:E(["card listener-card",{active:b===_.selectedListenerIndex}]),"data-testid":"listener-card",onClick:v},[s("div",Ce,[p(h,{appearance:"info"},{default:d(()=>[e(l(f(n)(`http.api.value.${o.protocol}`)),1)]),_:2},1024),e(),p(w,{to:{name:"builtin-gateway-detail-view",query:{listener:b}},class:"listener-hostname","data-action":""},{default:d(()=>[e(l(o.hostname)+":"+l(o.port),1)]),_:2},1032,["to"])]),e(),o.tags||o.tls?(t(),a("dl",xe,[o.tags?(t(),a("div",Me,[s("dt",Te,l(f(n)("builtin-gateways.detail.tags"))+`:
                    `,1),e(),s("dd",null,[p(q,{tags:o.tags},null,8,["tags"])])])):u("",!0),e(),o.tls?(t(),a("div",Le,[s("dt",Pe,l(f(n)("http.api.property.tls"))+`:
                    `,1),e(),s("dd",null,l(o.tls.mode??"TERMINATE"),1)])):u("",!0)])):u("",!0)],2))),128))])])]),e(),s("div",Be,[s("div",Ie,[s("h2",Se,l(f(n)("builtin-gateways.detail.routes")),1),e(),s("p",qe,l(k.value.length),1)]),e(),s("div",He,[s("div",Ke,[k.value.length===0?(t(),$(F,{key:0},{title:d(()=>[e(l(f(n)("builtin-gateways.detail.no_rules",{listener:_.selectedListenerIndex+1})),1)]),_:1})):(t(!0),a(c,{key:1},m(k.value,(o,b)=>(t(),a("div",{key:b,class:"card route-card","data-testid":"route-card"},[s("div",Ne,[s("dl",Ve,[s("div",null,[s("dt",Ee,l(f(n)("builtin-gateways.detail.type"))+`:
                        `,1),e(),s("dd",null,[p(h,null,{default:d(()=>[e(l(o.type),1)]),_:2},1024)])]),e(),o.config.hostnames.includes("*")?u("",!0):(t(),a("div",Fe,[s("dt",je,l(f(n)("builtin-gateways.detail.hostnames"))+`:
                          `,1),e(),s("dd",null,l(o.config.hostnames.join(", ")),1)])),e(),s("div",null,[s("dt",Ae,l(f(n)("builtin-gateways.detail.matchers"))+`:
                        `,1),e(),s("dd",null,[o.matchers.length>0?(t(),$(j,{key:0,items:o.matchers},null,8,["items"])):(t(),a("code",De,"*"))])]),e(),s("div",null,[s("dt",Ge,l(f(n)("builtin-gateways.detail.origins"))+`:
                        `,1),e(),s("dd",null,[s("div",ze,[(t(!0),a(c,null,m(o.origins,(g,C)=>(t(),$(h,{key:C},{default:d(()=>[p(w,{to:{name:"policy-detail-view",params:{mesh:g.mesh,policyPath:_.policyTypesByName[g.type].path,policy:g.name}}},{default:d(()=>[e(l(g.name),1)]),_:2},1032,["to"])]),_:2},1024))),128))])])])]),e(),o.config.rules.length>0?(t(),a("div",Ze,[s("b",null,l(f(n)("builtin-gateways.detail.rules")),1),e(`:

                      `),s("div",Oe,[(t(!0),a(c,null,m(o.config.rules,(g,C)=>(t(),a("div",{key:C,class:"rule stack-small"},[s("div",null,[e(l(f(n)("builtin-gateways.detail.matches"))+`:

                            `,1),s("div",Ue,[(t(!0),a(c,null,m(g.matches,(x,M)=>(t(),$(fe,{key:M,match:x},null,8,["match"]))),128))])]),e(),g.default.filters.length>0?(t(),a("div",Qe,[e(l(f(n)("builtin-gateways.detail.filters"))+`:

                            `,1),s("div",We,[(t(!0),a(c,null,m(g.default.filters,(x,M)=>(t(),$(ae,{key:M,filter:x},null,8,["filter"]))),128))])])):u("",!0),e(),g.default.backendRefs.length>0?(t(),a("div",Ye,[e(l(f(n)("builtin-gateways.detail.services"))+`:

                            `,1),s("div",Je,[(t(!0),a(c,null,m(g.default.backendRefs,(x,M)=>(t(),a("div",{key:M},[p(P,{"target-ref":x},{default:d(()=>[e(l(x.name),1)]),_:2},1032,["target-ref"])]))),128))])])):u("",!0)]))),128))])])):u("",!0),e(),o.config.default?(t(),a("div",Xe,[s("b",null,l(f(n)("builtin-gateways.detail.default")),1),e(`:

                      `),o.config.default.backendRefs&&o.config.default.backendRefs.length>0?(t(),a("div",et,[s("div",tt,[s("div",null,[e(l(f(n)("builtin-gateways.detail.services"))+`:

                            `,1),s("div",st,[(t(!0),a(c,null,m(o.config.default.backendRefs,(g,C)=>(t(),a("div",{key:C},[p(P,{"target-ref":g},{default:d(()=>[e(l(g.name),1)]),_:2},1032,["target-ref"])]))),128))])])])])):u("",!0)])):u("",!0)])]))),128))])])])])])}}}),nt=L(at,[["__scopeId","data-v-139832f0"]]),ct=T({__name:"BuiltinGatewayDetailView",setup(y){return(n,_)=>{const k=R("DataLoader"),v=R("DataSource"),r=R("AppView"),i=R("RouteView");return t(),$(i,{name:"builtin-gateway-detail-view",params:{mesh:"",gateway:"",listener:"0"}},{default:d(({route:h})=>[p(r,null,{default:d(()=>[p(v,{src:`/meshes/${h.params.mesh}/mesh-gateways/${h.params.gateway}`},{default:d(({data:w,error:o})=>[p(v,{src:"/policy-types"},{default:d(({data:b,error:g})=>[p(k,{src:`/meshes/${h.params.mesh}/mesh-gateways/${h.params.gateway}/rules`,data:[w,b],errors:[o,g]},{default:d(({data:C})=>[w&&C&&b?(t(),$(nt,{key:0,"mesh-gateway":w,"selected-listener-index":Number(h.params.listener),"policy-types-by-name":b.policies.reduce((x,M)=>Object.assign(x,{[M.name]:M}),{}),"inspect-rules":C.rules},null,8,["mesh-gateway","selected-listener-index","policy-types-by-name","inspect-rules"])):u("",!0)]),_:2},1032,["src","data","errors"])]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{ct as default};
