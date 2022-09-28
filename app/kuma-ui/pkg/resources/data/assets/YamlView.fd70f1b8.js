import{_ as K,q as V,E as j,G as w,I as x,k as L,o as l,f as v,b as h,w as o,d as a,e as C,r as c,C as Y,D as O,h as b}from"./index.b4c50a9a.js";import{j as B}from"./index.58caa11d.js";import{C as P,_ as T}from"./CodeBlock.250aca45.js";import{_ as I,E as N}from"./ErrorBlock.63ee7be4.js";const S={name:"YamlView",components:{CodeBlock:P,EmptyBlock:I,ErrorBlock:N,LoadingBlock:T,KButton:V,KClipboardProvider:j,KPop:w,KTabs:x},props:{content:{type:Object,default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},data(){return{tabs:[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}]}},computed:{...L({environment:"config/getEnvironment"}),activeTab:{get(){const e=this.environment?this.environment:this.tabs[0].hash.substring(1);return{hash:`#${e}`,nohash:e}},set(e){return{hash:`#${e}`,nohash:e}}},yamlContent(){const e=this.content,r=()=>{const s={},m=Object.assign({},this.content),{name:t,mesh:y,type:f}=m,p=()=>{const n=Object.assign({},this.content);return delete n.type,delete n.mesh,delete n.name,n&&Object.entries(n).length>0?n:!1};if(s.apiVersion="kuma.io/v1alpha1",s.kind=f,y!==void 0&&(s.mesh=m.mesh),t!=null&&t.includes(".")){const n=t.split("."),_=n.pop(),u=n.join(".");s.metadata={name:u,namespace:_}}else s.metadata={name:t};return p()&&(s.spec=p()),s};return{universal:B(e),kubernetes:B(r())}}}},g=e=>(Y("data-v-f515b813"),e=e(),O(),e),U={class:"yaml-view"},z={key:3,class:"yaml-view-content"},A=C(" Copy Universal YAML "),G=g(()=>b("div",null,[b("p",null,"Entity copied to clipboard!")],-1)),M=C(" Copy Kubernetes YAML "),q=g(()=>b("div",null,[b("p",null,"Entity copied to clipboard!")],-1));function D(e,r,d,s,m,t){const y=c("LoadingBlock"),f=c("ErrorBlock"),p=c("EmptyBlock"),n=c("KButton"),_=c("KPop"),u=c("KClipboardProvider"),k=c("CodeBlock"),E=c("KTabs");return l(),v("div",U,[d.isLoading?(l(),h(y,{key:0})):d.hasError?(l(),h(f,{key:1})):d.isEmpty?(l(),h(p,{key:2})):(l(),v("div",z,[(l(),h(E,{key:e.environment,modelValue:t.activeTab.hash,"onUpdate:modelValue":r[0]||(r[0]=i=>t.activeTab.hash=i),tabs:m.tabs},{universal:o(()=>[a(u,null,{default:o(({copyToClipboard:i})=>[a(_,{placement:"bottom"},{content:o(()=>[G]),default:o(()=>[a(n,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{i(t.yamlContent.universal)}},{default:o(()=>[A]),_:2},1032,["onClick"])]),_:2},1024)]),_:1}),a(k,{language:"yaml",code:t.yamlContent.universal},null,8,["code"])]),kubernetes:o(()=>[a(u,null,{default:o(({copyToClipboard:i})=>[a(_,{placement:"bottom"},{content:o(()=>[q]),default:o(()=>[a(n,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{i(t.yamlContent.kubernetes)}},{default:o(()=>[M]),_:2},1032,["onClick"])]),_:2},1024)]),_:1}),a(k,{language:"yaml",code:t.yamlContent.kubernetes},null,8,["code"])]),_:1},8,["modelValue","tabs"]))]))])}const R=K(S,[["render",D],["__scopeId","data-v-f515b813"]]);export{R as Y};