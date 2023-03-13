"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5781],{9613:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(1163),r=(a(9496),a(9613));const i={id:"http.param",title:"Namespace: param",sidebar_label:"param",custom_edit_url:null},o=void 0,p={unversionedId:"api/foscia/namespaces/http.param",id:"api/foscia/namespaces/http.param",title:"Namespace: param",description:"http.param",source:"@site/docs/api/foscia/namespaces/http.param.md",sourceDirName:"api/foscia/namespaces",slug:"/api/foscia/namespaces/http.param",permalink:"/foscia/docs/api/foscia/namespaces/http.param",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.param",title:"Namespace: param",sidebar_label:"param",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"makeRequest",permalink:"/foscia/docs/api/foscia/namespaces/http.makeRequest"},next:{title:"fields",permalink:"/foscia/docs/api/foscia/namespaces/jsonapi.fields"}},c={},s=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/api/foscia/modules/http"},"http"),".param"),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"extension"},"extension"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"extension"),": ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/api/foscia/modules/core#actionparsedextension"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"param"),": <C, E",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/api/foscia/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"value?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),") => ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/api/foscia/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/9a4d416/src/http/actions/context/enhancers/param.ts#L31"},"src/http/actions/context/enhancers/param.ts:31")))}d.isMDXComponent=!0}}]);