(self["webpackChunkkuma_gui"]=self["webpackChunkkuma_gui"]||[]).push([[144],{73570:function(e,t,n){var i=n(49237),r="  ";function a(e){var t=typeof e;return e instanceof Array?"array":"string"==t?"string":"boolean"==t?"boolean":"number"==t?"number":"undefined"==t||null===e?"null":"hash"}function s(e,t){var n=a(e);switch(n){case"array":o(e,t);break;case"hash":l(e,t);break;case"string":d(e,t);break;case"null":t.push("null");break;case"number":t.push(e.toString());break;case"boolean":t.push(e?"true":"false");break}}function o(e,t){for(var n=0;n<e.length;n++){var i=e[n],a=[];s(i,a);for(var o=0;o<a.length;o++)t.push((0==o?"- ":r)+a[o])}}function l(e,t){for(var n in e){var i=[];if(e.hasOwnProperty(n)){var o=e[n];s(o,i);var l=a(o);if("string"==l||"null"==l||"number"==l||"boolean"==l)t.push(c(n)+": "+i[0]);else{t.push(c(n)+": ");for(var d=0;d<i.length;d++)t.push(r+i[d])}}}}function c(e){return e.match(/^[\w]+$/)?e:i.requiresDoubleQuoting(e)?i.escapeWithDoubleQuotes(e):i.requiresSingleQuoting(e)?i.escapeWithSingleQuotes(e):e}function d(e,t){t.push(c(e))}var u=function(e){"string"==typeof e&&(e=JSON.parse(e));var t=[];return s(e,t),t.join("\n")};e.exports=u},70878:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});const i={PAGINATION_PREVIOUS_BUTTON_CLICKED:"pagination-previous-button-clicked",PAGINATION_NEXT_BUTTON_CLICKED:"pagination-next-button-clicked",SIDEBAR_ITEM_CLICKED:"sidebar-item-clicked",TABLE_REFRESH_BUTTON_CLICKED:"table-refresh-button-clicked",TABS_TAB_CHANGE:"tabs-tab-change",CREATE_MESH_CLICKED:"create-mesh-clicked",CREATE_DATA_PLANE_PROXY_CLICKED:"create-data-plane-proxy-clicked"}},71551:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(70821);const r=e=>((0,i.dD)("data-v-1de71d65"),e=e(),(0,i.Cn)(),e),a={class:"code-view"},s={key:0,class:"code-view-content"},o=r((()=>(0,i._)("div",null,[(0,i._)("p",null,"Entity copied to clipboard!")],-1))),l={key:1},c={class:"card-icon mb-3"},d=(0,i.Uk)(" Data Loading... "),u={class:"card-icon mb-3"},p=(0,i.Uk)(" There is no data to display. "),h={class:"card-icon mb-3"},g=(0,i.Uk)(" An error has occurred while trying to load this data. ");function _(e,t,n,r,_,f){const y=(0,i.up)("CodeBlock"),v=(0,i.up)("KButton"),m=(0,i.up)("KPop"),b=(0,i.up)("KClipboardProvider"),w=(0,i.up)("KCard"),k=(0,i.up)("KIcon"),E=(0,i.up)("KEmptyState");return(0,i.wg)(),(0,i.iD)("div",a,[f.isReady?((0,i.wg)(),(0,i.iD)("div",s,[n.isLoading||n.isEmpty?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(w,{key:0,title:n.title,"border-variant":"noBorder"},{body:(0,i.w5)((()=>[(0,i.Wm)(y,{language:n.lang,code:f.codeContent},null,8,["language","code"])])),actions:(0,i.w5)((()=>[n.content?((0,i.wg)(),(0,i.j4)(b,{key:0},{default:(0,i.w5)((({copyToClipboard:e})=>[(0,i.Wm)(m,{placement:"bottom"},{content:(0,i.w5)((()=>[o])),default:(0,i.w5)((()=>[(0,i.Wm)(v,{appearance:"primary",onClick:()=>{e(f.codeContent)}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,i.zw)(n.copyButtonText),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})):(0,i.kq)("",!0)])),_:1},8,["title"]))])):(0,i.kq)("",!0),!0===n.loaders?((0,i.wg)(),(0,i.iD)("div",l,[n.isLoading?((0,i.wg)(),(0,i.j4)(E,{key:0,"cta-is-hidden":""},{title:(0,i.w5)((()=>[(0,i._)("div",c,[(0,i.Wm)(k,{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"})]),d])),_:1})):(0,i.kq)("",!0),n.isEmpty&&!n.isLoading?((0,i.wg)(),(0,i.j4)(E,{key:1,"cta-is-hidden":""},{title:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i.Wm)(k,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),p])),_:1})):(0,i.kq)("",!0),n.hasError?((0,i.wg)(),(0,i.j4)(E,{key:2,"cta-is-hidden":""},{title:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i.Wm)(k,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),g])),_:1})):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])}var f=n(21743),y={name:"CodeView",components:{CodeBlock:f.Z},props:{lang:{type:String,required:!0},copyButtonText:{type:String,default:"Copy to Clipboard"},title:{type:String,default:null},content:{type:String,default:null},loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},computed:{isReady(){return!this.isEmpty&&!this.hasError&&!this.isLoading},codeContent(){const e=this.content;return e}}},v=n(83744);const m=(0,v.Z)(y,[["render",_],["__scopeId","data-v-1de71d65"]]);var b=m},34707:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var i=n(70821);const r=e=>((0,i.dD)("data-v-c582ce70"),e=e(),(0,i.Cn)(),e),a={class:"tab-container","data-testid":"tab-container"},s={key:0,class:"tab__header"},o={class:"tab__content-container"},l={class:"flex items-center with-warnings"},c=r((()=>(0,i._)("span",null," Warnings ",-1))),d={key:1},u={class:"card-icon mb-3"},p=(0,i.Uk)(" Data Loading... "),h={class:"card-icon mb-3"},g=(0,i.Uk)(" An error has occurred while trying to load this data. ");function _(e,t,n,r,_,f){const y=(0,i.up)("KIcon"),v=(0,i.up)("KTabs"),m=(0,i.up)("KEmptyState");return(0,i.wg)(),(0,i.iD)("div",a,[e.$slots.tabHeader&&f.isReady?((0,i.wg)(),(0,i.iD)("header",s,[(0,i.WI)(e.$slots,"tabHeader",{},void 0,!0)])):(0,i.kq)("",!0),(0,i._)("div",o,[f.isReady?((0,i.wg)(),(0,i.j4)(v,{key:0,modelValue:_.tabState,"onUpdate:modelValue":t[0]||(t[0]=e=>_.tabState=e),tabs:n.tabs,onChanged:t[1]||(t[1]=e=>f.switchTab(e))},(0,i.Nv)({"warnings-anchor":(0,i.w5)((()=>[(0,i._)("span",l,[(0,i.Wm)(y,{class:"mr-1",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"16"}),c])])),_:2},[(0,i.Ko)(f.tabsSlots,(t=>({name:t,fn:(0,i.w5)((()=>[(0,i.WI)(e.$slots,t,{},void 0,!0)]))})))]),1032,["modelValue","tabs"])):(0,i.kq)("",!0),!0===n.loaders?((0,i.wg)(),(0,i.iD)("div",d,[n.isLoading?((0,i.wg)(),(0,i.j4)(m,{key:0,"cta-is-hidden":""},{title:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i.Wm)(y,{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"})]),p])),_:1})):(0,i.kq)("",!0),n.hasError?((0,i.wg)(),(0,i.j4)(m,{key:1,"cta-is-hidden":""},{title:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i.Wm)(y,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),g])),_:1})):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])])}var f=n(62519),y=n(51991),v=n(70878),m={name:"TabsWidget",components:{KEmptyState:f.KB},props:{loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},tabs:{type:Array,required:!0},hasBorder:{type:Boolean,default:!1},initialTabOverride:{type:String,default:null}},emits:["on-tab-change"],data(){return{tabState:this.initialTabOverride&&`#${this.initialTabOverride}`}},computed:{tabsSlots(){return this.tabs.map((e=>e.hash.replace("#","")))},isReady(){return!1===this.loaders||!this.isEmpty&&!this.hasError&&!this.isLoading}},methods:{switchTab(e){y.fy.logger.info(v.T.TABS_TAB_CHANGE,{data:{newTab:e}}),this.$emit("on-tab-change",e)}}},b=n(83744);const w=(0,b.Z)(m,[["render",_],["__scopeId","data-v-c582ce70"]]);var k=w},5129:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(70821);const r={key:0,class:"scanner"},a={class:"scanner-content"},s={key:0,class:"card-icon mb-3"},o={key:1,class:"card-icon mb-3"},l={key:3},c={key:1};function d(e,t,n,d,u,p){const h=(0,i.up)("KIcon"),g=(0,i.up)("IconSuccess"),_=(0,i.up)("KEmptyState");return n.shouldStart?((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",a,[(0,i.Wm)(_,{"cta-is-hidden":""},{title:(0,i.w5)((()=>[u.isRunning?((0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(h,{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"})])):(0,i.kq)("",!0),u.isComplete&&!1===n.hasError&&!1===u.isRunning?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(g)])):(0,i.kq)("",!0),u.isRunning?(0,i.WI)(e.$slots,"loading-title",{key:2},void 0,!0):(0,i.kq)("",!0),!1===u.isRunning?((0,i.wg)(),(0,i.iD)("div",l,[n.hasError?(0,i.WI)(e.$slots,"error-title",{key:0},void 0,!0):(0,i.kq)("",!0),u.isComplete&&!1===n.hasError?(0,i.WI)(e.$slots,"complete-title",{key:1},void 0,!0):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),message:(0,i.w5)((()=>[u.isRunning?(0,i.WI)(e.$slots,"loading-content",{key:0},void 0,!0):(0,i.kq)("",!0),!1===u.isRunning?((0,i.wg)(),(0,i.iD)("div",c,[n.hasError?(0,i.WI)(e.$slots,"error-content",{key:0},void 0,!0):(0,i.kq)("",!0),u.isComplete&&!1===n.hasError?(0,i.WI)(e.$slots,"complete-content",{key:1},void 0,!0):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),_:3})])])):(0,i.kq)("",!0)}const u={class:"card-icon icon-success mb-3",role:"img"};function p(e,t,n,r,a,s){return(0,i.wg)(),(0,i.iD)("i",u," ✓ ")}var h={},g=n(83744);const _=(0,g.Z)(h,[["render",p],["__scopeId","data-v-38718532"]]);var f=_,y={name:"EntityScanner",components:{IconSuccess:f},props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},shouldStart:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},emits:["hide-siblings"],data(){return{i:0,isRunning:!1,isComplete:!1,intervalId:null}},watch:{shouldStart(e,t){e!==t&&!0===e&&this.runScanner()}},mounted(){!0===this.shouldStart&&this.runScanner()},beforeUnmount(){clearInterval(this.intervalId)},methods:{runScanner(){this.isRunning=!0,this.isComplete=!1,this.intervalId=setInterval((()=>{this.i++,this.loaderFunction(),this.i!==this.retries&&!0!==this.canComplete||(clearInterval(this.intervalId),this.isRunning=!1,this.isComplete=!0,this.$emit("hide-siblings",!0))}),this.interval)}}};const v=(0,g.Z)(y,[["render",d],["__scopeId","data-v-7552b228"]]);var m=v},93897:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(70821);const r={class:"form-line-wrapper"},a={key:0,class:"form-line__col"},s=["for"];function o(e,t,n,o,l,c){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",{class:(0,i.C_)(["form-line",{"has-equal-cols":n.equalCols}])},[n.hideLabelCol?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("label",{for:n.forAttr,class:"k-input-label"},(0,i.zw)(n.title)+": ",9,s)])),(0,i._)("div",{class:(0,i.C_)(["form-line__col",{"is-inline":n.allInline,"is-shifted-right":n.shiftRight}])},[(0,i.WI)(e.$slots,"default")],2)],2)])}var l={name:"FormFragment",props:{title:{type:String,required:!1,default:null},forAttr:{type:String,required:!1,default:null},allInline:{type:Boolean,default:!1},hideLabelCol:{type:Boolean,default:!1},equalCols:{type:Boolean,default:!1},shiftRight:{type:Boolean,default:!1}}},c=n(83744);const d=(0,c.Z)(l,[["render",o],["__scopeId","data-v-09c6c1f9"]]);var u=d},76262:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(70821);const r={class:"wizard-steps"},a={class:"wizard-steps__content-wrapper"},s={class:"wizard-steps__indicator"},o={class:"wizard-steps__indicator__controls",role:"tablist","aria-label":"steptabs"},l=["aria-selected","aria-controls"],c={class:"wizard-steps__content"},d={ref:"wizardForm",autocomplete:"off"},u=["id","aria-labelledby"],p={key:0,class:"wizard-steps__footer"},h=(0,i.Uk)(" ‹ Previous "),g=(0,i.Uk)(" Next › "),_={class:"wizard-steps__sidebar"},f={class:"wizard-steps__sidebar__content"};function y(e,t,n,y,v,m){const b=(0,i.up)("KButton");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",a,[(0,i._)("header",s,[(0,i._)("ul",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.steps,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:e.slug,"aria-selected":m.step===e.slug?"true":"false","aria-controls":`wizard-steps__content__item--${t}`,class:(0,i.C_)([{"is-complete":t<=v.start},"wizard-steps__indicator__item"])},[(0,i._)("span",null,(0,i.zw)(e.label),1)],10,l)))),128))])]),(0,i._)("div",c,[(0,i._)("form",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.steps,((t,n)=>((0,i.wg)(),(0,i.iD)("div",{id:`wizard-steps__content__item--${n}`,key:t.slug,"aria-labelledby":`wizard-steps__content__item--${n}`,role:"tabpanel",tabindex:"0",class:"wizard-steps__content__item"},[m.step===t.slug?(0,i.WI)(e.$slots,t.slug,{key:0},void 0,!0):(0,i.kq)("",!0)],8,u)))),128))],512)]),n.footerEnabled?((0,i.wg)(),(0,i.iD)("footer",p,[(0,i.wy)((0,i.Wm)(b,{appearance:"outline",onClick:m.goToPrevStep},{default:(0,i.w5)((()=>[h])),_:1},8,["onClick"]),[[i.F8,!m.indexCanReverse]]),(0,i.wy)((0,i.Wm)(b,{disabled:n.nextDisabled,appearance:"primary",onClick:m.goToNextStep},{default:(0,i.w5)((()=>[g])),_:1},8,["disabled","onClick"]),[[i.F8,!m.indexCanAdvance]])])):(0,i.kq)("",!0)]),(0,i._)("aside",_,[(0,i._)("div",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.sidebarContent,((t,n)=>((0,i.wg)(),(0,i.iD)("div",{key:t.name,class:(0,i.C_)(["wizard-steps__sidebar__item",`wizard-steps__sidebar__item--${n}`])},[(0,i.WI)(e.$slots,t.name,{},void 0,!0)],2)))),128))])])])}var v={props:{steps:{type:Array,default:()=>{}},sidebarContent:{type:Array,required:!0,default:()=>{}},footerEnabled:{type:Boolean,default:!0},nextDisabled:{type:Boolean,default:!0}},emits:["goToNextStep","goToStep","goToPrevStep"],data(){return{start:0}},computed:{step:{get(){return this.steps[this.start].slug},set(e){return this.steps[e].slug}},indexCanAdvance(){return this.start>=this.steps.length-1},indexCanReverse(){return this.start<=0}},watch:{"$route.query.step"(e=0){this.start!==e&&(this.start=e,this.$emit("goToNextStep",e))}},mounted(){this.resetProcess(),this.setStartingStep()},methods:{goToStep(e){this.start=e,this.updateQuery("step",e),this.$emit("goToStep",this.step)},goToNextStep(){this.start++,this.updateQuery("step",this.start),this.$emit("goToNextStep",this.step)},goToPrevStep(){this.start--,this.updateQuery("step",this.start),this.$emit("goToPrevStep",this.step)},updateQuery(e,t){const n=this.$router,i=this.$route;i.query?n.push({query:Object.assign({},i.query,{[e]:t})}).catch((()=>{})):n.push({query:{[e]:t}}).catch((()=>{}))},setStartingStep(){const e=this.$route.query.step;this.start=e||0},resetProcess(){this.start=0,this.goToStep(0),localStorage.removeItem("storedFormData");const e=this.$refs.wizardForm.querySelectorAll('input[type="text"]');e.forEach((e=>{e.setAttribute("value","")}))}}},m=n(83744);const b=(0,m.Z)(v,[["render",y],["__scopeId","data-v-1a7be44a"]]);var w=b},49237:function(e,t,n){var i,r;r=n(11665),i=function(){var e;function t(){}return t.LIST_ESCAPEES=["\\","\\\\",'\\"','"',"\0","","","","","","","","\b","\t","\n","\v","\f","\r","","","","","","","","","","","","","","","","","","",(e=String.fromCharCode)(133),e(160),e(8232),e(8233)],t.LIST_ESCAPED=["\\\\",'\\"','\\"','\\"',"\\0","\\x01","\\x02","\\x03","\\x04","\\x05","\\x06","\\a","\\b","\\t","\\n","\\v","\\f","\\r","\\x0e","\\x0f","\\x10","\\x11","\\x12","\\x13","\\x14","\\x15","\\x16","\\x17","\\x18","\\x19","\\x1a","\\e","\\x1c","\\x1d","\\x1e","\\x1f","\\N","\\_","\\L","\\P"],t.MAPPING_ESCAPEES_TO_ESCAPED=function(){var e,n,i,r;for(i={},e=n=0,r=t.LIST_ESCAPEES.length;0<=r?n<r:n>r;e=0<=r?++n:--n)i[t.LIST_ESCAPEES[e]]=t.LIST_ESCAPED[e];return i}(),t.PATTERN_CHARACTERS_TO_ESCAPE=new r("[\\x00-\\x1f]|Â|Â |â¨|â©"),t.PATTERN_MAPPING_ESCAPEES=new r(t.LIST_ESCAPEES.join("|").split("\\").join("\\\\")),t.PATTERN_SINGLE_QUOTING=new r("[\\s'\":{}[\\],&*#?]|^[-?|<>=!%@`]"),t.requiresDoubleQuoting=function(e){return this.PATTERN_CHARACTERS_TO_ESCAPE.test(e)},t.escapeWithDoubleQuotes=function(e){var t;return t=this.PATTERN_MAPPING_ESCAPEES.replace(e,function(e){return function(t){return e.MAPPING_ESCAPEES_TO_ESCAPED[t]}}(this)),'"'+t+'"'},t.requiresSingleQuoting=function(e){return this.PATTERN_SINGLE_QUOTING.test(e)},t.escapeWithSingleQuotes=function(e){return"'"+e.replace(/'/g,"''")+"'"},t}(),e.exports=i},11665:function(e){var t;t=function(){function e(e,t){var n,i,r,a,s,o,l,c,d;null==t&&(t=""),r="",s=e.length,o=null,i=0,a=0;while(a<s){if(n=e.charAt(a),"\\"===n)r+=e.slice(a,+(a+1)+1||9e9),a++;else if("("===n)if(a<s-2)if(c=e.slice(a,+(a+2)+1||9e9),"(?:"===c)a+=2,r+=c;else if("(?<"===c){i++,a+=2,l="";while(a+1<s){if(d=e.charAt(a+1),">"===d){r+="(",a++,l.length>0&&(null==o&&(o={}),o[l]=i);break}l+=d,a++}}else r+=n,i++;else r+=n;else r+=n;a++}this.rawRegex=e,this.cleanedRegex=r,this.regex=new RegExp(this.cleanedRegex,"g"+t.replace("g","")),this.mapping=o}return e.prototype.regex=null,e.prototype.rawRegex=null,e.prototype.cleanedRegex=null,e.prototype.mapping=null,e.prototype.exec=function(e){var t,n,i,r;if(this.regex.lastIndex=0,n=this.regex.exec(e),null==n)return null;if(null!=this.mapping)for(i in r=this.mapping,r)t=r[i],n[i]=n[t];return n},e.prototype.test=function(e){return this.regex.lastIndex=0,this.regex.test(e)},e.prototype.replace=function(e,t){return this.regex.lastIndex=0,e.replace(this.regex,t)},e.prototype.replaceAll=function(e,t,n){var i;null==n&&(n=0),this.regex.lastIndex=0,i=0;while(this.regex.test(e)&&(0===n||i<n))this.regex.lastIndex=0,e=e.replace(this.regex,t),i++;return[e,i]},e}(),e.exports=t}}]);