import{d as b,r as v,e as y,o as s,i as n,c,F as h,I as u,z as B,j as d,a as f,J as T,n as k,w as _,u as l,v as E,L as S,E as w,G as q,B as C,C as I,D as L}from"./index.b0409b43.js";import{E as V}from"./ErrorBlock.2d64b0cd.js";import{_ as W}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.5ea0e82e.js";const $=e=>(C("data-v-63d131fa"),e=e(),I(),e),x={class:"tab-container","data-testid":"tab-container"},A={key:0,class:"tab__header"},N={class:"tab__content-container"},H={class:"flex items-center with-warnings"},O=$(()=>d("span",null,"Warnings",-1)),z=b({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(e,{emit:p}){const o=e,i=v(o.initialTabOverride&&`#${o.initialTabOverride}`),m=y(()=>o.tabs.map(a=>a.hash.replace("#","")));function g(a){w.logger.info(q.TABS_TAB_CHANGE,{data:{newTab:a}}),p("on-tab-change",a)}return(a,r)=>(s(),n("div",x,[e.isLoading?(s(),c(W,{key:0})):e.error!==null?(s(),c(V,{key:1,error:e.error},null,8,["error"])):(s(),n(h,{key:2},[a.$slots.tabHeader?(s(),n("header",A,[u(a.$slots,"tabHeader",{},void 0,!0)])):B("",!0),d("div",N,[f(l(S),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=t=>i.value=t),tabs:e.tabs,onChanged:r[1]||(r[1]=t=>g(t))},T({"warnings-anchor":_(()=>[d("span",H,[f(l(E),{class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"16"}),O])]),_:2},[k(l(m),t=>({name:t,fn:_(()=>[u(a.$slots,t,{},void 0,!0)])}))]),1032,["modelValue","tabs"])])],64))]))}});const D=L(z,[["__scopeId","data-v-63d131fa"]]);export{D as T};