import{d as o,k as l,o as _,f as c,g as a,t,q as i,n as r,e as p}from"./index.d0c2efa7.js";const u={class:"entity-tag"},d={class:"entity-tag__value"},g=o({__name:"EntityTag",props:{tag:{type:Object,required:!0}},setup(e){const s=e,n=l(()=>s.tag.label.toLowerCase().includes("kuma.io/"));return(m,y)=>(_(),c("span",u,[a("span",{class:i(["entity-tag__label",{"entity-tag__label--is-kuma-io-label":r(n)}])},t(e.tag.label),3),a("span",d,t(e.tag.value),1)]))}});const f=p(g,[["__scopeId","data-v-d4e000a4"]]);export{f as E};