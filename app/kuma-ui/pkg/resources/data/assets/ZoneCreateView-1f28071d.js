import{f as G,c as W,K as H,g as me}from"./index-fce48c05.js";import{d as x,l as B,C as j,M as C,o as l,c,p as o,f as n,t as s,q as e,e as a,u as _e,m as v,a5 as A,a as m,b as K,w as r,F as k,s as y,I as pe,J as fe,a8 as J,B as ve,ax as be,ay as ze,_ as ke}from"./index-1ce19661.js";import{_ as g}from"./CodeBlock.vue_vue_type_style_index_0_lang-bf441bc4.js";const ge={class:"form-step-title"},he=o("span",{class:"form-step-number"},"1",-1),ye={class:"instruction-list"},Ce={href:"https://helm.sh/docs/intro/install/"},Ee={class:"form-step-title"},Ke=o("span",{class:"form-step-number"},"2",-1),Ve=o("p",null,"On your local machine, create a namespace in your Kubernetes cluster and pull down the kong Helm repo.",-1),$e={class:"instruction-list"},Ie={class:"form-step-title"},we=o("span",{class:"form-step-number"},"3",-1),Ne={class:"form-step-title"},Te=o("span",{class:"form-step-number"},"4",-1),Se={class:"field-group-label mt-4"},Ze={class:"mt-4"},Le=x({__name:"ZoneCreateKubernetesInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},zoneIngressEnabled:{type:Boolean,required:!0},zoneEgressEnabled:{type:Boolean,required:!0},token:{type:String,required:!0},base64EncodedToken:{type:String,required:!0}},setup(N){const{t}=B(),h=j(),_=N,V=C(()=>t("zones.form.kubernetes.secret.createSecretCommand",{token:_.base64EncodedToken}).trim()),b=C(()=>{const p={zoneName:_.zoneName,globalKdsAddress:_.globalKdsAddress,zoneIngressEnabled:String(_.zoneIngressEnabled),zoneEgressEnabled:String(_.zoneEgressEnabled)};return typeof h.params.virtualControlPlaneId=="string"&&(p.controlPlaneId=h.params.virtualControlPlaneId),t("zones.form.kubernetes.connectZone.config",p).trim()});return(p,$)=>(l(),c("div",null,[o("h3",ge,[he,n(" "+s(e(t)("zones.form.kubernetes.prerequisites.title")),1)]),n(),o("ul",ye,[o("li",null,[o("b",null,s(e(t)("zones.form.kubernetes.prerequisites.step1Label"))+s(_.zoneIngressEnabled?" "+e(t)("zones.form.kubernetes.prerequisites.step1LabelAddendum"):""),1),n(`:
        `+s(e(t)("zones.form.kubernetes.prerequisites.step1Description",{productName:e(t)("common.product.name")})),1)]),n(),o("li",null,[o("b",null,s(e(t)("zones.form.kubernetes.prerequisites.step2Label")),1),n(`:
        `+s(e(t)("zones.form.kubernetes.prerequisites.step2Description")),1)]),n(),o("li",null,[o("a",Ce,s(e(t)("zones.form.kubernetes.prerequisites.step3LinkTitle")),1),n(" "+s(e(t)("zones.form.kubernetes.prerequisites.step3Tail")),1)])]),n(),o("h3",Ee,[Ke,n(" "+s(e(t)("zones.form.kubernetes.helm.title")),1)]),n(),Ve,n(),o("ol",$e,[o("li",null,[o("b",null,s(e(t)("zones.form.kubernetes.helm.step1Description")),1),n(),a(g,{id:"zone-kubernetes-create-namespace",class:"mt-2",code:e(t)("zones.form.kubernetes.helm.step1Command"),language:"bash"},null,8,["code"])]),n(),o("li",null,[o("b",null,s(e(t)("zones.form.kubernetes.helm.step2Description")),1),n(),a(g,{id:"zone-kubernetes-add-charts-repo",class:"mt-2",code:e(t)("zones.form.kubernetes.helm.step2Command"),language:"bash"},null,8,["code"])]),n(),o("li",null,[o("b",null,s(e(t)("zones.form.kubernetes.helm.step3Description")),1),n(),a(g,{id:"zone-kubernetes-repo-update",class:"mt-2",code:e(t)("zones.form.kubernetes.helm.step3Command"),language:"bash"},null,8,["code"])])]),n(),o("h3",Ie,[we,n(" "+s(e(t)("zones.form.kubernetes.secret.title")),1)]),n(),o("p",null,s(e(t)("zones.form.kubernetes.secret.createSecretDescription")),1),n(),a(g,{id:"zone-kubernetes-create-secret",class:"mt-4",code:V.value,language:"bash"},null,8,["code"]),n(),o("h3",Ne,[Te,n(" "+s(e(t)("zones.form.kubernetes.connectZone.title")),1)]),n(),o("p",null,s(e(t)("zones.form.kubernetes.connectZone.configDescription")),1),n(),o("span",Se,s(e(t)("zones.form.kubernetes.connectZone.configFileName")),1),n(),a(g,{id:"zone-kubernetes-config-code-block","data-testid":"zone-kubernetes-config",code:b.value,language:"yaml"},null,8,["code"]),n(),o("p",Ze,s(e(t)("zones.form.kubernetes.connectZone.connectDescription")),1),n(),a(g,{id:"zone-kubernetes-command-code-block",class:"mt-4",code:e(t)("zones.form.kubernetes.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}}),qe={class:"form-step-title"},De=o("span",{class:"form-step-number"},"1",-1),Ae={class:"form-step-title"},xe=o("span",{class:"form-step-number"},"2",-1),Be={class:"field-group-label mt-4"},Re={class:"mt-4"},Ue=x({__name:"ZoneCreateUniversalInstructions",props:{zoneName:{type:String,required:!0},globalKdsAddress:{type:String,required:!0},token:{type:String,required:!0}},setup(N){const{t}=B(),h=j(),_=N,V=C(()=>t("zones.form.universal.saveToken.saveTokenCommand",{token:_.token}).trim()),b=C(()=>{const p={zoneName:_.zoneName,globalKdsAddress:_.globalKdsAddress};return typeof h.params.virtualControlPlaneId=="string"&&(p.controlPlaneId=h.params.virtualControlPlaneId),t("zones.form.universal.connectZone.config",p).trim()});return(p,$)=>(l(),c("div",null,[o("h3",qe,[De,n(" "+s(e(t)("zones.form.universal.saveToken.title")),1)]),n(),o("p",null,s(e(t)("zones.form.universal.saveToken.saveTokenDescription")),1),n(),a(g,{id:"zone-kubernetes-token",class:"mt-4",code:V.value,language:"bash"},null,8,["code"]),n(),o("h3",Ae,[xe,n(" "+s(e(t)("zones.form.universal.connectZone.title")),1)]),n(),o("p",null,s(e(t)("zones.form.universal.connectZone.configDescription")),1),n(),o("span",Be,s(e(t)("zones.form.universal.connectZone.configFileName")),1),n(),a(g,{id:"zone-universal-config-code-block","data-testid":"zone-universal-config",class:"mt-4",code:b.value,language:"yaml"},null,8,["code"]),n(),o("p",Re,s(e(t)("zones.form.universal.connectZone.connectDescription")),1),n(),a(g,{id:"zone-universal-connect-command-code-block",class:"mt-4",code:e(t)("zones.form.universal.connectZone.connectCommand").trim(),language:"bash"},null,8,["code"])]))}}),Pe={class:"form-wrapper"},Oe={key:1},Me={key:2},Fe={class:"form"},Xe={class:"form-header"},Ge={class:"form-title"},We={class:"text-gradient"},He={key:0},Je={key:0},je={class:"fact-list"},Qe={class:"form-section"},Ye={class:"form-section__header"},en={class:"form-section-title"},nn={class:"form-section__content"},on={class:"form-section","data-testid":"connect-zone-instructions"},tn={class:"form-section__header"},sn={class:"form-section-title"},an={class:"form-section__content"},ln={class:"field-group-list"},rn={class:"field-group"},cn={class:"field-group-label"},un={class:"radio-button-group"},dn={class:"field-group"},mn={class:"field-group-label"},_n={class:"radio-button-group"},pn={class:"field-group"},fn={class:"field-group-label"},vn={class:"radio-button-group"},bn={class:"form-section"},zn={class:"form-section__header"},kn={class:"form-section-title"},gn={class:"form-section__content"},hn={class:"form-section"},yn={key:0,class:"form-section__header"},Cn={class:"form-section-title"},En={class:"form-section__content"},Kn={key:0},Vn={class:"mt-2"},$n=x({__name:"ZoneCreateView",setup(N){const{t,tm:h}=B(),_=_e(),V=/^(?![-0-9])[a-z0-9-]{1,63}$/,b=v(null),p=v(!1),$=v(!1),f=v(null),T=v(null),Z=v(""),R=v(!1),Q=v(new Date),d=v(""),E=v("kubernetes"),L=v(!0),q=v(!0),I=C(()=>b.value!==null&&b.value.token?b.value.token:""),Y=C(()=>I.value!==""?window.btoa(I.value):""),ee=C(()=>d.value===""||p.value||b.value!==null),D=C(()=>{if(T.value!==null)return T.value;if(f.value instanceof A){const z=f.value.invalidParameters.find(u=>u.field==="name");if(z!==void 0)return z.reason}return null});async function ne(){p.value=!0,f.value=null,Z.value="";try{if(!U(d.value))return;b.value=await _.createZone({name:d.value})}catch(z){z instanceof Error?(Z.value=d.value,f.value=z):console.error(z)}finally{p.value=!1}}function U(z){const u=V.test(z);return u?T.value=null:T.value=t("zones.create.invalidNameError"),u}function P(){$.value=!$.value}function oe(){R.value=!0}return(z,u)=>{const te=m("RouteTitle"),S=m("KButton"),se=m("KAlert"),ae=m("KLabel"),le=m("KInput"),O=m("KRadio"),M=m("KInputSwitch"),F=m("DataSource"),re=m("KEmptyState"),ie=m("KCard"),ce=m("KModal"),ue=m("AppView"),de=m("RouteView");return l(),K(de,{name:"zone-create-view",attrs:{class:"is-fullscreen"}},{default:r(({route:X})=>[a(ue,{fullscreen:!0,breadcrumbs:[]},{title:r(()=>[o("h1",null,[a(te,{title:e(t)("zones.routes.create.title")},null,8,["title"])])]),actions:r(()=>[a(S,{appearance:"tertiary","data-testid":"exit-button",onClick:()=>{I.value===""||R.value?X.back({name:"zone-cp-list-view"}):P()}},{default:r(()=>[n(s(e(t)("zones.form.exit")),1)]),_:2},1032,["onClick"])]),default:r(()=>[n(),n(),o("div",Pe,[f.value!==null?(l(),K(se,{key:0,appearance:"danger",class:"mb-4","dismiss-type":"icon","data-testid":"create-zone-error"},{alertMessage:r(()=>[f.value instanceof e(A)&&[409,500].includes(f.value.status)?(l(),c(k,{key:0},[o("p",null,s(e(t)(`zones.create.status_error.${f.value.status}.title`,{name:Z.value})),1),n(),o("p",null,s(e(t)(`zones.create.status_error.${f.value.status}.description`)),1)],64)):f.value instanceof e(A)?(l(),c("p",Oe,s(e(t)("common.error_state.api_error",{status:f.value.status,title:f.value.detail})),1)):(l(),c("p",Me,s(e(t)("common.error_state.default_error")),1))]),_:1})):y("",!0),n(),a(ie,{class:"form-card"},{default:r(()=>[o("div",Fe,[o("div",Xe,[o("div",null,[o("h1",Ge,[o("span",We,s(e(t)("zones.form.title")),1)]),n(),e(t)("zones.form.description")!==" "?(l(),c("p",He,s(e(t)("zones.form.description")),1)):y("",!0)]),n(),e(h)("zones.form.facts").length>0?(l(),c("div",Je,[o("ul",je,[(l(!0),c(k,null,pe(e(h)("zones.form.facts"),(i,w)=>(l(),c("li",{key:w,class:"fact-list__item"},[a(e(fe),{color:e(G)},null,8,["color"]),n(" "+s(i),1)]))),128))])])):y("",!0)]),n(),o("div",Qe,[o("div",Ye,[o("h2",en,s(e(t)("zones.form.section.name.title")),1),n(),o("p",null,s(e(t)("zones.form.section.name.description")),1)]),n(),o("div",nn,[o("div",null,[a(ae,{for:"zone-name",required:"","tooltip-attributes":{placement:"right"}},{tooltip:r(()=>[n(s(e(t)("zones.form.name_tooltip")),1)]),default:r(()=>[n(s(e(t)("zones.form.nameLabel"))+" ",1)]),_:1}),n(),a(le,{id:"zone-name",modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=i=>d.value=i),type:"text",name:"zone-name","data-testid":"name-input","data-test-error-type":D.value!==null?"invalid-dns-name":void 0,error:D.value!==null,"error-message":D.value??void 0,disabled:b.value!==null,onBlur:u[1]||(u[1]=i=>U(d.value))},null,8,["modelValue","data-test-error-type","error","error-message","disabled"])]),n(),a(S,{appearance:"primary",class:"mt-4",disabled:ee.value,"data-testid":"create-zone-button",onClick:ne},{default:r(()=>[p.value?(l(),K(e(J),{key:0,color:e(W),size:e(H)},null,8,["color","size"])):(l(),K(e(ve),{key:1,size:e(H)},null,8,["size"])),n(" "+s(e(t)("zones.form.createZoneButtonLabel")),1)]),_:1},8,["disabled"])])]),n(),b.value!==null?(l(),c(k,{key:0},[o("div",on,[o("div",tn,[o("h2",sn,s(e(t)("zones.form.section.configuration.title")),1),n(),o("p",null,s(e(t)("zones.form.section.configuration.description")),1)]),n(),o("div",an,[o("div",ln,[o("div",rn,[o("span",cn,s(e(t)("zones.form.environmentLabel"))+` *
                      `,1),n(),o("div",un,[a(O,{id:"zone-environment-universal",modelValue:E.value,"onUpdate:modelValue":u[2]||(u[2]=i=>E.value=i),"selected-value":"universal",name:"zone-environment","data-testid":"environment-universal-radio-button"},{default:r(()=>[n(s(e(t)("zones.form.universalLabel")),1)]),_:1},8,["modelValue"]),n(),a(O,{id:"zone-environment-kubernetes",modelValue:E.value,"onUpdate:modelValue":u[3]||(u[3]=i=>E.value=i),"selected-value":"kubernetes",name:"zone-environment","data-testid":"environment-kubernetes-radio-button"},{default:r(()=>[n(s(e(t)("zones.form.kubernetesLabel")),1)]),_:1},8,["modelValue"])])]),n(),E.value==="kubernetes"?(l(),c(k,{key:0},[o("div",dn,[o("span",mn,s(e(t)("zones.form.zoneIngressLabel"))+` *
                        `,1),n(),o("div",_n,[a(M,{id:"zone-ingress-enabled",modelValue:L.value,"onUpdate:modelValue":u[4]||(u[4]=i=>L.value=i),"data-testid":"ingress-input-switch"},{label:r(()=>[n(s(e(t)("zones.form.zoneIngressEnabledLabel")),1)]),_:1},8,["modelValue"])])]),n(),o("div",pn,[o("span",fn,s(e(t)("zones.form.zoneEgressLabel"))+` *
                        `,1),n(),o("div",vn,[a(M,{id:"zone-egress-enabled",modelValue:q.value,"onUpdate:modelValue":u[5]||(u[5]=i=>q.value=i),"data-testid":"egress-input-switch"},{label:r(()=>[n(s(e(t)("zones.form.zoneEgressEnabledLabel")),1)]),_:1},8,["modelValue"])])])],64)):y("",!0)])])]),n(),o("div",bn,[o("div",zn,[o("h2",kn,s(e(t)("zones.form.section.connect_zone.title")),1),n(),o("p",null,s(e(t)("zones.form.section.connect_zone.description")),1)]),n(),o("div",gn,[a(F,{src:"/control-plane/addresses"},{default:r(({data:i})=>[typeof i<"u"?(l(),c(k,{key:0},[E.value==="universal"?(l(),K(Ue,{key:0,"zone-name":d.value,token:I.value,"global-kds-address":i.kds},null,8,["zone-name","token","global-kds-address"])):(l(),K(Le,{key:1,"zone-name":d.value,"zone-ingress-enabled":L.value,"zone-egress-enabled":q.value,token:I.value,"base64-encoded-token":Y.value,"global-kds-address":i.kds},null,8,["zone-name","zone-ingress-enabled","zone-egress-enabled","token","base64-encoded-token","global-kds-address"]))],64)):y("",!0)]),_:1})])]),n(),o("div",hn,[a(F,{src:`/zone-cps/online/${d.value}?no-cache=${Q.value}`,onChange:oe},{default:r(({data:i,error:w})=>[w?y("",!0):(l(),c("div",yn,[o("h2",Cn,s(e(t)("zones.form.section.scanner.title")),1),n(),o("p",null,s(e(t)("zones.form.section.scanner.description")),1)])),n(),o("div",En,[a(re,{"cta-is-hidden":""},{title:r(()=>[w?(l(),c(k,{key:0},[a(e(be),{"data-testid":"error",display:"inline-block",color:e(me)},null,8,["color"]),n(),o("h3",null,s(e(t)("zones.form.scan.errorTitle")),1)],64)):typeof i>"u"?(l(),c(k,{key:1},[a(e(J),{"data-testid":"waiting",display:"inline-block",color:e(W)},null,8,["color"]),n(" "+s(e(t)("zones.form.scan.waitTitle")),1)],64)):(l(),c(k,{key:2},[a(e(ze),{"data-testid":"connected",display:"inline-block",color:e(G)},null,8,["color"]),n(" "+s(e(t)("zones.form.scan.completeTitle")),1)],64))]),message:r(()=>[w?(l(),c("p",Kn,s(e(t)("zones.form.scan.errorDescription")),1)):typeof i<"u"?(l(),c(k,{key:1},[o("p",null,s(e(t)("zones.form.scan.completeDescription",{name:d.value})),1),n(),o("p",Vn,[a(S,{appearance:"primary",to:{name:"zone-cp-detail-view",params:{zone:d.value}}},{default:r(()=>[n(s(e(t)("zones.form.scan.completeButtonLabel",{name:d.value})),1)]),_:1},8,["to"])])],64)):y("",!0)]),_:2},1024)])]),_:1},8,["src"])])],64)):y("",!0)])]),_:1})]),n(),a(ce,{"is-visible":$.value,title:e(t)("zones.form.confirm_modal.title"),"data-testid":"confirm-exit-modal",onCanceled:P,onProceed:i=>X.replace({name:"zone-cp-list-view"})},{"header-content":r(()=>[n(s(e(t)("zones.form.confirm_modal.title")),1)]),"body-content":r(()=>[n(s(e(t)("zones.form.confirm_modal.body")),1)]),"action-buttons":r(()=>[a(S,{appearance:"primary",to:{name:"zone-cp-list-view"},"data-testid":"confirm-exit-button"},{default:r(()=>[n(s(e(t)("zones.form.confirm_modal.action_button")),1)]),_:1})]),_:2},1032,["is-visible","title","onProceed"])]),_:2},1024)]),_:1})}}});const Tn=ke($n,[["__scopeId","data-v-6aa788ad"]]);export{Tn as default};