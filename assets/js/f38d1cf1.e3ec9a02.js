"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1214],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(1163),r=(n(9496),n(9613));const i={id:"http.abortSignal",title:"Namespace: abortSignal",sidebar_label:"abortSignal",custom_edit_url:null},o=void 0,l={unversionedId:"api/func-client/namespaces/http.abortSignal",id:"api/func-client/namespaces/http.abortSignal",title:"Namespace: abortSignal",description:"http.abortSignal",source:"@site/docs/api/func-client/namespaces/http.abortSignal.md",sourceDirName:"api/func-client/namespaces",slug:"/api/func-client/namespaces/http.abortSignal",permalink:"/func-client/docs/api/func-client/namespaces/http.abortSignal",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.abortSignal",title:"Namespace: abortSignal",sidebar_label:"abortSignal",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"when",permalink:"/func-client/docs/api/func-client/namespaces/core.when"},next:{title:"makeDelete",permalink:"/func-client/docs/api/func-client/namespaces/http.makeDelete"}},c={},p=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/http"},"http"),".abortSignal"),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"extension"},"extension"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"extension"),": ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#actionparsedextension"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"abortSignal"),": <C, E",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"controllerOrSignal?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"AbortController")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortSignal"),">",") => ",(0,r.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/a3f87be/src/http/actions/context/enhancers/abortSignal.ts#L30"},"src/http/actions/context/enhancers/abortSignal.ts:30")))}d.isMDXComponent=!0}}]);