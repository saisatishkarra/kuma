import{s as Q,x as Z,V as F,Z as W,v as j}from"./kongponents.es-7e482eb5.js";import{d as C,o as g,b as N,w as p,g as h,e as t,h as u,u as G,a as Y,r as c,c as _,v as H,j as J,i as m,f as x,N as L,t as X,L as V,p as ee,m as ae}from"./index-987a13b5.js";import{_ as te}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-470735c4.js";import{D as se}from"./DataOverview-1215d4c8.js";import{u as oe}from"./store-b4114847.js";import{a as le,u as ne}from"./index-6dab244f.js";import{Q as B}from"./QueryParameter-70743f73.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-c94f127a.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-846e8989.js";import"./ErrorBlock-e418ef19.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-9d99661c.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-0bdd142f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-2144e5ca.js";import"./TextWithCopyButton-d256feea.js";import"./toYaml-4e00099e.js";import"./TabsWidget-89c9f343.js";import"./TagList-90109e97.js";import"./StatusBadge-46dec4fd.js";const re=C({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(s){const a=s;return(b,S)=>(g(),N(t(Z),{class:"docs-link",appearance:"outline",target:"_blank",to:a.href},{default:p(()=>[h(t(Q),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),u(`

    Documentation
  `)]),_:1},8,["to"]))}}),ce=s=>(ee("data-v-69a7cd6f"),s=s(),ae(),s),pe={class:"kcard-stack"},ue={class:"kcard-border"},me=ce(()=>m("p",null,[m("strong",null,"Warning"),u(` This policy is experimental. If you encountered any problem please open an
                  `),m("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),de=C({__name:"PolicyListView",props:{selectedPolicyName:{type:[String,null],required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(s){const a=s,b=le(),S=ne(),o=G(),I=Y(),l=oe(),P=c(!0),k=c(null),D=c(null),A=c(a.offset),f=c(a.selectedPolicyName),d=c({headers:[{label:"Name",key:"entity"},{label:"Type",key:"type"}],data:[]}),M=_(()=>o.params.mesh),n=_(()=>l.state.policyTypesByPath[a.policyPath]),U=_(()=>l.state.policyTypes.map(e=>({label:e.name,value:e.path,selected:e.path===a.policyPath}))),R=_(()=>l.state.policyTypes.filter(e=>(l.state.sidebar.insights.mesh.policies[e.name]??0)===0).map(e=>e.name));H(()=>o.params.mesh,function(){o.name===a.policyPath&&T(0)}),$();async function $(){const e=l.state.policyTypesByPath[a.policyPath];e!==void 0&&(await l.dispatch("updatePageTitle",""),await l.dispatch("updatePageTitle",e.name)),T(a.offset)}async function T(e){var v;A.value=e,B.set("offset",e>0?e:null),P.value=!0,k.value=null;const i=o.params.mesh,r=o.params.policyPath,w=V;try{const{items:y,next:O}=await S.getAllPolicyEntitiesFromMesh({mesh:i,path:r},{size:w,offset:e});D.value=O,d.value.data=q(y??[]),E({name:a.selectedPolicyName??((v=d.value.data[0])==null?void 0:v.entity.name)})}catch(y){d.value.data=[],y instanceof Error?k.value=y:console.error(y)}finally{P.value=!1}}function q(e){return e.map(i=>{const{type:r,name:w}=i,v={name:"policy-detail-view",params:{mesh:i.mesh,policyPath:o.params.policyPath,policy:w}};return{entity:i,detailViewRoute:v,type:r}})}function z(e){E({name:e.name})}function E({name:e}){f.value=e??null,B.set("policy",e??null)}function K(e){I.push({name:"policies-list-view",params:{...o.params,policyPath:e.value}})}return(e,i)=>n.value?(g(),J("div",{key:0,class:L(["relative",n.value.path])},[m("div",pe,[m("div",ue,[n.value.isExperimental?(g(),N(t(W),{key:0,"border-variant":"noBorder",class:"mb-4"},{body:p(()=>[h(t(F),{appearance:"warning"},{alertMessage:p(()=>[me]),_:1})]),_:1})):x("",!0),u(),h(se,{"selected-entity-name":f.value??void 0,"page-size":t(V),error:k.value,"is-loading":P.value,"empty-state":{title:"No Data",message:`There are no ${n.value.name} policies present.`},"table-data":d.value,"table-data-is-empty":d.value.data.length===0,next:D.value,"page-offset":A.value,onTableAction:z,onLoadData:T},{additionalControls:p(()=>[h(t(j),{label:"Policies",items:U.value,"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:K},{"item-template":p(({item:r})=>[m("span",{class:L({"policy-type-empty":R.value.includes(r.label)})},X(r.label),3)]),_:1},8,["items"]),u(),h(re,{href:`${t(b)("KUMA_DOCS_URL")}/policies/${n.value.path}/?${t(b)("KUMA_UTM_QUERY_PARAMS")}`,"data-testid":"policy-documentation-link"},null,8,["href"])]),default:p(()=>[u(`
          >
          `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"])]),u(),f.value!==null?(g(),N(te,{key:0,name:f.value,mesh:M.value,path:n.value.path,type:n.value.name},null,8,["name","mesh","path","type"])):x("",!0)])],2)):x("",!0)}});const Be=ie(de,[["__scopeId","data-v-69a7cd6f"]]);export{Be as default};