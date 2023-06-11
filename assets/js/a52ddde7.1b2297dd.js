"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4381],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(1163),a=(t(9496),t(9613));const o={id:"core.onRunning",title:"Namespace: onRunning",sidebar_label:"onRunning",custom_edit_url:null},i=void 0,c={unversionedId:"reference/api/namespaces/core.onRunning",id:"reference/api/namespaces/core.onRunning",title:"Namespace: onRunning",description:"core.onRunning",source:"@site/docs/reference/api/namespaces/core.onRunning.md",sourceDirName:"reference/api/namespaces",slug:"/reference/api/namespaces/core.onRunning",permalink:"/foscia/docs/reference/api/namespaces/core.onRunning",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.onRunning",title:"Namespace: onRunning",sidebar_label:"onRunning",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"onPreparing",permalink:"/foscia/docs/reference/api/namespaces/core.onPreparing"},next:{title:"onSuccess",permalink:"/foscia/docs/reference/api/namespaces/core.onSuccess"}},p={},s=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core"},"core"),".onRunning"),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#actionparsedextension"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"onRunning"),": <C, E",">","(",(0,a.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"event"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"runner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),"  }) => ",(0,a.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",") => ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/067d2b83/src/core/actions/context/enhancers/hooks/onRunning.ts#L29"},"src/core/actions/context/enhancers/hooks/onRunning.ts:29")))}d.isMDXComponent=!0}}]);