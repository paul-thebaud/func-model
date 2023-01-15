"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8076],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(4250),i=(t(9496),t(9613));const a={id:"core.onRunning",title:"Namespace: onRunning",sidebar_label:"onRunning",custom_edit_url:null},o=void 0,c={unversionedId:"api/func-client/namespaces/core.onRunning",id:"api/func-client/namespaces/core.onRunning",title:"Namespace: onRunning",description:"core.onRunning",source:"@site/docs/api/func-client/namespaces/core.onRunning.md",sourceDirName:"api/func-client/namespaces",slug:"/api/func-client/namespaces/core.onRunning",permalink:"/func-client/docs/api/func-client/namespaces/core.onRunning",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.onRunning",title:"Namespace: onRunning",sidebar_label:"onRunning",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"onPreparing",permalink:"/func-client/docs/api/func-client/namespaces/core.onPreparing"},next:{title:"onSuccess",permalink:"/func-client/docs/api/func-client/namespaces/core.onSuccess"}},l={},p=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core"},"core"),".onRunning"),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"extension"},"extension"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"extension"),": ",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#actionparsedextension"},(0,i.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"onRunning"),": <C, A",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"C"),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"event"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),"  }) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",") => ",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.Action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"C"),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"  }",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/5e8684e/src/core/actions/context/enhancers/hooks/onRunning.ts#L22"},"src/core/actions/context/enhancers/hooks/onRunning.ts:22")))}u.isMDXComponent=!0}}]);