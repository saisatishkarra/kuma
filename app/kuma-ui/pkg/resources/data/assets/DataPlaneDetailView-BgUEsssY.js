import{_ as R,a as g,o,b as y,w as a,m as s,r as N,f as t,d as Y,l as at,q as T,e as d,t as i,p as r,c as u,F as f,G as w,n as nt,B as st,J as ot,R as Z,W as B,Y as it,Z as dt,K as H,T as lt,$ as rt,a0 as X,a1 as ct,z as ut,a2 as pt,D as _t,v as mt,x as ft}from"./index-BLP5TKFr.js";import{S as yt}from"./StatusBadge-CBm-1aUH.js";import{S as vt}from"./SummaryView-9S4nmcw9.js";import{T as tt}from"./TagList-DLZa7tVZ.js";import{_ as gt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-C-6UG6Mg.js";import"./AccordionList-BNehdm5G.js";const ht=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],bt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],kt=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],xt=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],J=(c,n,e)=>{let x=c;return typeof n=="string"||Array.isArray(n)?x=c.toLocaleString(n,e):(n===!0||e!==void 0)&&(x=c.toLocaleString(void 0,e)),x};function G(c,n){if(!Number.isFinite(c))throw new TypeError(`Expected a finite number, got ${typeof c}: ${c}`);n={bits:!1,binary:!1,space:!0,...n};const e=n.bits?n.binary?xt:kt:n.binary?bt:ht,x=n.space?" ":"";if(n.signed&&c===0)return` 0${x}${e[0]}`;const C=c<0,K=C?"-":n.signed?"+":"";C&&(c=-c);let h;if(n.minimumFractionDigits!==void 0&&(h={minimumFractionDigits:n.minimumFractionDigits}),n.maximumFractionDigits!==void 0&&(h={maximumFractionDigits:n.maximumFractionDigits,...h}),c<1){const V=J(c,n.locale,h);return K+V+x+e[0]}const $=Math.min(Math.floor(n.binary?Math.log(c)/Math.log(1024):Math.log10(c)/3),e.length-1);c/=(n.binary?1024:1e3)**$,h||(c=c.toPrecision(3));const I=J(Number(c),n.locale,h),E=e[$];return K+I+x+E}const $t={},wt={class:"card"},Bt={class:"title"},Ct={class:"body"};function Tt(c,n){const e=g("KCard");return o(),y(e,{class:"data-card"},{default:a(()=>[s("dl",null,[s("div",wt,[s("dt",Bt,[N(c.$slots,"title",{},void 0,!0)]),t(),s("dd",Ct,[N(c.$slots,"default",{},void 0,!0)])])])]),_:3})}const et=R($t,[["render",Tt],["__scopeId","data-v-3f9a3cf3"]]),It={class:"title"},St={key:0},Dt={"data-testid":"grpc-success"},Kt={"data-testid":"grpc-failure"},Nt={"data-testid":"rq-2xx"},Et={"data-testid":"rq-4xx"},Vt={"data-testid":"rq-5xx"},qt={"data-testid":"connections-total"},Rt={key:0,"data-testid":"bytes-received"},Mt={key:1,"data-testid":"bytes-sent"},Pt=Y({__name:"ConnectionCard",props:{protocol:{},service:{default:""},traffic:{default:void 0},direction:{default:"downstream"}},setup(c){const{t:n}=at(),e=c,x=C=>{const K=C.target;if(C.isTrusted&&K.nodeName.toLowerCase()!=="a"){const h=K.closest(".service-traffic-card, a");if(h){const $=h.nodeName.toLowerCase()==="a"?h:h.querySelector("[data-action]");$!==null&&"click"in $&&typeof $.click=="function"&&$.click()}}};return(C,K)=>{const h=g("KBadge"),$=g("KSkeletonBox");return o(),y(et,{class:"service-traffic-card",onClick:x},{title:a(()=>[e.service.length>0?(o(),y(tt,{key:0,tags:[{label:"kuma.io/service",value:e.service}]},null,8,["tags"])):T("",!0),t(),s("div",It,[d(h,{class:"protocol",appearance:e.protocol==="passthrough"?"success":"info"},{default:a(()=>[t(i(r(n)(`data-planes.components.service_traffic_card.protocol.${e.protocol}`,{},{defaultMessage:r(n)(`http.api.value.${e.protocol}`)})),1)]),_:1},8,["appearance"]),t(),N(C.$slots,"default",{},void 0,!0)])]),default:a(()=>{var I,E,V,M,P,L,A,U,z,F,b,m;return[t(),e.traffic?(o(),u("dl",St,[e.protocol==="passthrough"?(o(!0),u(f,{key:0},w([["http","tcp"].reduce((p,S)=>{var l;const O=e.direction;return Object.entries(((l=e.traffic)==null?void 0:l[S])||{}).reduce((_,[k,v])=>[`${O}_cx_tx_bytes_total`,`${O}_cx_rx_bytes_total`].includes(k)?{..._,[k]:v+(_[k]??0)}:_,p)},{})],(p,S)=>(o(),u(f,{key:S},[s("div",null,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(r(G)(p.downstream_cx_rx_bytes_total??0)),1)]),t(),s("div",null,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(r(G)(p.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):e.protocol==="grpc"?(o(),u(f,{key:1},[s("div",Dt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.grpc_success")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:(I=e.traffic.grpc)==null?void 0:I.success})),1)]),t(),s("div",Kt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.grpc_failure")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:(E=e.traffic.grpc)==null?void 0:E.failure})),1)])],64)):e.protocol.startsWith("http")?(o(),u(f,{key:2},[(o(!0),u(f,null,w([((V=e.traffic.http)==null?void 0:V[`${e.direction}_rq_1xx`])??0].filter(p=>p!==0),p=>(o(),u("div",{key:p,"data-testid":"rq-1xx"},[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.1xx")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:p})),1)]))),128)),t(),s("div",Nt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.2xx")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:(M=e.traffic.http)==null?void 0:M[`${e.direction}_rq_2xx`]})),1)]),t(),(o(!0),u(f,null,w([((P=e.traffic.http)==null?void 0:P[`${e.direction}_rq_3xx`])??0].filter(p=>p!==0),p=>(o(),u("div",{key:p,"data-testid":"rq-3xx"},[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.3xx")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:p})),1)]))),128)),t(),s("div",Et,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.4xx")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:(L=e.traffic.http)==null?void 0:L[`${e.direction}_rq_4xx`]})),1)]),t(),s("div",Vt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.5xx")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:(A=e.traffic.http)==null?void 0:A[`${e.direction}_rq_5xx`]})),1)])],64)):(o(),u(f,{key:3},[s("div",qt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.cx")),1),t(),s("dd",null,i(r(n)("common.formats.integer",{value:(U=e.traffic.tcp)==null?void 0:U[`${e.direction}_cx_total`]})),1)]),t(),typeof((z=e.traffic.tcp)==null?void 0:z[`${e.direction}_cx_tx_bytes_total`])<"u"?(o(),u("div",Rt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(r(G)((F=e.traffic.tcp)==null?void 0:F[`${e.direction}_cx_tx_bytes_total`])),1)])):T("",!0),t(),typeof((b=e.traffic.tcp)==null?void 0:b[`${e.direction}_cx_rx_bytes_total`])<"u"?(o(),u("div",Mt,[s("dt",null,i(r(n)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(r(G)((m=e.traffic.tcp)==null?void 0:m[`${e.direction}_cx_rx_bytes_total`])),1)])):T("",!0)],64))])):(o(),y($,{key:1,width:"10"}))]}),_:3})}}}),j=R(Pt,[["__scopeId","data-v-f7ef7711"]]),Lt={class:"body"},At=Y({__name:"ConnectionGroup",props:{type:{}},setup(c){const n=c;return(e,x)=>{const C=g("KCard");return o(),y(C,{class:nt(["service-traffic-group",`type-${n.type}`])},{default:a(()=>[s("div",Lt,[N(e.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),W=R(At,[["__scopeId","data-v-9402d5d1"]]),Ut={class:"service-traffic"},zt={class:"actions"},Ft=Y({__name:"ConnectionTraffic",setup(c){return(n,e)=>(o(),u("div",Ut,[s("div",zt,[N(n.$slots,"actions",{},void 0,!0)]),t(),d(et,{class:"header"},{title:a(()=>[N(n.$slots,"title",{},void 0,!0)]),_:3}),t(),N(n.$slots,"default",{},void 0,!0)]))}}),Q=R(Ft,[["__scopeId","data-v-e6bd176c"]]),Ot=c=>(mt("data-v-dde94dd0"),c=c(),ft(),c),Gt={"data-testid":"dataplane-warnings"},Yt=["data-testid","innerHTML"],Zt={key:0,"data-testid":"warning-stats-loading"},Ht={class:"stack","data-testid":"dataplane-details"},jt={class:"columns"},Wt={class:"status-with-reason"},Xt={class:"columns"},Jt=Ot(()=>s("span",null,"Outbounds",-1)),Qt={"data-testid":"dataplane-mtls"},te={class:"columns"},ee=["innerHTML"],ae={key:0,"data-testid":"dataplane-subscriptions"},ne=Y({__name:"DataPlaneDetailView",props:{data:{}},setup(c){const n=st(),e=c,x=ot(()=>e.data.warnings.concat(...e.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(C,K)=>{const h=g("KTooltip"),$=g("DataCollection"),I=g("KCard"),E=g("XAction"),V=g("KInputSwitch"),M=g("KButton"),P=g("RouterLink"),L=g("RouterView"),A=g("KAlert"),U=g("AppView"),z=g("DataSource"),F=g("RouteView");return o(),y(F,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:a(({route:b,t:m})=>[d(z,{src:`/meshes/${b.params.mesh}/dataplanes/${b.params.dataPlane}/stats/${e.data.dataplane.networking.inboundAddress}`},{default:a(({data:p,error:S,refresh:O})=>[d(U,null,Z({default:a(()=>[t(),s("div",Ht,[d(I,null,{default:a(()=>[s("div",jt,[d(B,null,{title:a(()=>[t(i(m("http.api.property.status")),1)]),body:a(()=>[s("div",Wt,[d(yt,{status:e.data.status},null,8,["status"]),t(),e.data.dataplaneType==="standard"?(o(),y($,{key:0,items:e.data.dataplane.networking.inbounds,predicate:l=>!l.health.ready,empty:!1},{default:a(({items:l})=>[d(h,{class:"reason-tooltip"},{content:a(()=>[s("ul",null,[(o(!0),u(f,null,w(l,_=>(o(),u("li",{key:`${_.service}:${_.port}`},i(m("data-planes.routes.item.unhealthy_inbound",{service:_.service,port:_.port})),1))),128))])]),default:a(()=>[d(r(it),{color:r(dt),size:r(H)},null,8,["color","size"]),t()]),_:2},1024)]),_:2},1032,["items","predicate"])):T("",!0)])]),_:2},1024),t(),d(B,null,{title:a(()=>[t(`
                  Type
                `)]),body:a(()=>[t(i(m(`data-planes.type.${e.data.dataplaneType}`)),1)]),_:2},1024),t(),e.data.namespace.length>0?(o(),y(B,{key:0},{title:a(()=>[t(`
                  Namespace
                `)]),body:a(()=>[t(i(e.data.namespace),1)]),_:1})):T("",!0),t(),d(B,null,{title:a(()=>[t(i(m("data-planes.routes.item.last_updated")),1)]),body:a(()=>[t(i(m("common.formats.datetime",{value:Date.parse(e.data.modificationTime)})),1)]),_:2},1024),t(),e.data.dataplane.networking.gateway?(o(),u(f,{key:1},[d(B,null,{title:a(()=>[t(i(m("http.api.property.tags")),1)]),body:a(()=>[d(tt,{tags:e.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),t(),d(B,null,{title:a(()=>[t(i(m("http.api.property.address")),1)]),body:a(()=>[d(lt,{text:`${e.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)],64)):T("",!0)])]),_:2},1024),t(),d(I,{class:"traffic","data-testid":"dataplane-traffic"},{default:a(()=>[s("div",Xt,[d(Q,null,{title:a(()=>[d(r(rt),{display:"inline-block",decorative:"",size:r(H)},null,8,["size"]),t(`
                  Inbounds
                `)]),default:a(()=>[t(),d(W,{type:"inbound","data-testid":"dataplane-inbounds"},{default:a(()=>[(o(!0),u(f,null,w([e.data.dataplane.networking.type==="gateway"?Object.entries((p==null?void 0:p.inbounds)??{}).reduce((l,[_,k])=>{var D;const v=_.split("_").at(-1);return v===(((D=e.data.dataplane.networking.admin)==null?void 0:D.port)??"9901")?l:l.concat([{...e.data.dataplane.networking.inbounds[0],name:_,port:Number(v),protocol:["http","tcp"].find(q=>typeof k[q]<"u")??"tcp",addressPort:`${e.data.dataplane.networking.inbounds[0].address}:${v}`}])},[]):e.data.dataplane.networking.inbounds],l=>(o(),y($,{key:l,items:l},Z({default:a(()=>[(o(!0),u(f,null,w(l,_=>(o(),u(f,{key:`${_.name}`},[(o(!0),u(f,null,w([p==null?void 0:p.inbounds[_.name]],k=>(o(),y(j,{key:k,"data-testid":"dataplane-inbound",protocol:_.protocol,service:_.tags["kuma.io/service"],traffic:typeof S>"u"?k:{name:"",protocol:_.protocol,port:`${_.port}`}},{default:a(()=>[d(E,{"data-action":"",to:{name:(v=>v.includes("bound")?v.replace("-outbound-","-inbound-"):"connection-inbound-summary-overview-view")(String(r(n).name)),params:{connection:_.name},query:{inactive:b.params.inactive}}},{default:a(()=>[t(i(_.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","traffic"]))),128))],64))),128))]),_:2},[e.data.dataplaneType==="delegated"?{name:"empty",fn:a(()=>[d(X,null,{default:a(()=>[t(`
                          This proxy is a delegated gateway therefore `+i(m("common.product.name"))+` does not have any visibility into inbounds for this gateway
                        `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items"]))),128))]),_:2},1024)]),_:2},1024),t(),d(Q,null,Z({title:a(()=>[d(r(ct),{display:"inline-block",decorative:"",size:r(H)},null,8,["size"]),t(),Jt]),default:a(()=>[t(),t(),typeof S>"u"?(o(),u(f,{key:0},[typeof p>"u"?(o(),y(ut,{key:0})):(o(),u(f,{key:1},w(["upstream"],l=>(o(),u(f,{key:l},[d(W,{type:"passthrough"},{default:a(()=>[d(j,{protocol:"passthrough",traffic:p.passthrough},{default:a(()=>[t(`
                          Non mesh traffic
                        `)]),_:2},1032,["traffic"])]),_:2},1024),t(),d($,{predicate:b.params.inactive?void 0:([_,k])=>{var v,D;return((typeof k.tcp<"u"?(v=k.tcp)==null?void 0:v[`${l}_cx_rx_bytes_total`]:(D=k.http)==null?void 0:D[`${l}_rq_total`])??0)>0},items:Object.entries(p.outbounds)},{default:a(({items:_})=>[_.length>0?(o(),y(W,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:a(()=>[(o(),u(f,null,w([/-([a-f0-9]){16}$/],k=>(o(),u(f,{key:k},[(o(!0),u(f,null,w(_,([v,D])=>(o(),y(j,{key:`${v}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(q=>typeof D[q]<"u")??"tcp",traffic:D,service:v.replace(k,""),direction:l},{default:a(()=>[d(P,{"data-action":"",to:{name:(q=>q.includes("bound")?q.replace("-inbound-","-outbound-"):"connection-outbound-summary-overview-view")(String(r(n).name)),params:{connection:v},query:{inactive:b.params.inactive?null:void 0}}},{default:a(()=>[t(i(v),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))],64))),64))]),_:2},1024)):T("",!0)]),_:2},1032,["predicate","items"])],64))),64))],64)):(o(),y(X,{key:1}))]),_:2},[p?{name:"actions",fn:a(()=>[d(V,{modelValue:b.params.inactive,"onUpdate:modelValue":l=>b.params.inactive=l,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:a(()=>[t(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(),d(M,{appearance:"primary",onClick:O},{default:a(()=>[d(r(pt)),t(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024),t(),d(L,null,{default:a(l=>[l.route.name!==b.name?(o(),y(vt,{key:0,width:"670px",onClose:function(_){b.replace({name:"data-plane-detail-view",params:{mesh:b.params.mesh,dataPlane:b.params.dataPlane},query:{inactive:b.params.inactive?null:void 0}})}},{default:a(()=>[(o(),y(_t(l.Component),{data:l.route.name.includes("-inbound-")?e.data.dataplane.networking.inbounds:(p==null?void 0:p.outbounds)||{},"dataplane-overview":e.data},null,8,["data","dataplane-overview"]))]),_:2},1032,["onClose"])):T("",!0)]),_:2},1024),t(),s("div",Qt,[s("h2",null,i(m("data-planes.routes.item.mtls.title")),1),t(),e.data.dataplaneInsight.mTLS?(o(!0),u(f,{key:0},w([e.data.dataplaneInsight.mTLS],l=>(o(),y(I,{key:l,class:"mt-4"},{default:a(()=>[s("div",te,[d(B,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:a(()=>[t(i(m("common.formats.datetime",{value:Date.parse(l.certificateExpirationTime)})),1)]),_:2},1024),t(),d(B,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.generation_time.title")),1)]),body:a(()=>[t(i(m("common.formats.datetime",{value:Date.parse(l.lastCertificateRegeneration)})),1)]),_:2},1024),t(),d(B,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.regenerations.title")),1)]),body:a(()=>[t(i(m("common.formats.integer",{value:l.certificateRegenerations})),1)]),_:2},1024),t(),d(B,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:a(()=>[t(i(l.issuedBackend),1)]),_:2},1024),t(),d(B,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:a(()=>[s("ul",null,[(o(!0),u(f,null,w(l.supportedBackends,_=>(o(),u("li",{key:_},i(_),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(o(),y(A,{key:1,class:"mt-4",appearance:"warning"},{default:a(()=>[s("div",{innerHTML:m("data-planes.routes.item.mtls.disabled")},null,8,ee)]),_:2},1024))]),t(),e.data.dataplaneInsight.subscriptions.length>0?(o(),u("div",ae,[s("h2",null,i(m("data-planes.routes.item.subscriptions.title")),1),t(),d(I,{class:"mt-4"},{default:a(()=>[d(gt,{subscriptions:e.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):T("",!0)])]),_:2},[x.value.length>0||S?{name:"notifications",fn:a(()=>[s("ul",Gt,[(o(!0),u(f,null,w(x.value,l=>(o(),u("li",{key:l.kind,"data-testid":`warning-${l.kind}`,innerHTML:m(`common.warnings.${l.kind}`,l.payload)},null,8,Yt))),128)),t(),S?(o(),u("li",Zt,[t(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,i(S.toString()),1),t(`)
            `)])):T("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),ce=R(ne,[["__scopeId","data-v-dde94dd0"]]);export{ce as default};