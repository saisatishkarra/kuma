import{H as r}from"./kongponents.es-130f96bb.js";import{P as f}from"./production-7bbeb92b.js";import{u as g}from"./store-d9c38acd.js";import{c as v,d as b}from"./index-d7aedc79.js";import{O as y,a as h,b as V}from"./OnboardingPage-f26eb21f.js";import{d as z,r as x,c as M,i as S,a as i,w as e,o as m,e as n,f as t,g as d,t as D,u as s,m as G}from"./runtime-dom.esm-bundler-062436f2.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-0228babc.js";import"./DoughnutChart-aae5390b.js";import"./datadogLogEvents-302eea7b.js";const N={class:"graph-list mb-6"},O={class:"radio-button-group"},T=z({__name:"DeploymentTypes",setup(w){const p=v(),u={standalone:b(),"multi-zone":p},c=g(),o=x("standalone"),_=M(()=>u[o.value]);return S(function(){o.value=c.getters["config/getMulticlusterStatus"]?"multi-zone":"standalone"}),(B,a)=>(m(),i(y,{"with-image":""},{header:e(()=>[n(h,null,{title:e(()=>[t(`
          Learn about deployments
        `)]),description:e(()=>[d("p",null,D(s(f))+" can be deployed in standalone or multi-zone mode.",1)]),_:1})]),content:e(()=>[d("div",N,[(m(),i(G(s(_))))]),t(),d("div",O,[n(s(r),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l),name:"mode","selected-value":"standalone","data-testid":"onboarding-standalone-radio-button"},{default:e(()=>[t(`
          Standalone deployment
        `)]),_:1},8,["modelValue"]),t(),n(s(r),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),name:"mode","selected-value":"multi-zone","data-testid":"onboarding-multi-zone-radio-button"},{default:e(()=>[t(`
          Multi-zone deployment
        `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[n(V,{"next-step":"onboarding-configuration-types","previous-step":"onboarding-welcome"})]),_:1}))}});const F=C(T,[["__scopeId","data-v-c10fc7b5"]]);export{F as default};