"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7350],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return r?a.createElement(u,l(l({ref:t},d),{},{components:r})):a.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(1163),n=(r(9496),r(9613));const i={id:"core.MapRegistry",title:"Class: MapRegistry",sidebar_label:"MapRegistry",custom_edit_url:null},l=void 0,s={unversionedId:"reference/api/classes/core.MapRegistry",id:"reference/api/classes/core.MapRegistry",title:"Class: MapRegistry",description:"core.MapRegistry",source:"@site/docs/reference/api/classes/core.MapRegistry.md",sourceDirName:"reference/api/classes",slug:"/reference/api/classes/core.MapRegistry",permalink:"/foscia/docs/reference/api/classes/core.MapRegistry",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.MapRegistry",title:"Class: MapRegistry",sidebar_label:"MapRegistry",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"KeyNormalizer",permalink:"/foscia/docs/reference/api/classes/core.KeyNormalizer"},next:{title:"RefsCache",permalink:"/foscia/docs/reference/api/classes/core.RefsCache"}},o={},p=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"models",id:"models",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"modelFor",id:"modelfor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"register",id:"register",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"registerAsync",id:"registerasync",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"registerSync",id:"registersync",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core"},"core"),".MapRegistry"),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/foscia/docs/reference/api/modules/core#registryi"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistryI")))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new MapRegistry"),"()"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/registry/mapRegistry.ts#L10"},"src/core/registry/mapRegistry.ts:10")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"models"},"models"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"models"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", () => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">",">",">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/registry/mapRegistry.ts#L8"},"src/core/registry/mapRegistry.ts:8")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"modelfor"},"modelFor"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"modelFor"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"type"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"RegistryI.modelFor"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/registry/mapRegistry.ts#L14"},"src/core/registry/mapRegistry.ts:14")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"register"},"register"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"register"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"...models"),"): ",(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.MapRegistry"},(0,n.kt)("inlineCode",{parentName:"a"},"MapRegistry"))),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"...models")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ArrayableVariadic"),"<",(0,n.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">",">"," ","|"," [",(0,n.kt)("inlineCode",{parentName:"td"},"Dictionary"),"<() => ",(0,n.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,n.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">",">",">","]")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.MapRegistry"},(0,n.kt)("inlineCode",{parentName:"a"},"MapRegistry"))),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/registry/mapRegistry.ts#L27"},"src/core/registry/mapRegistry.ts:27")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"registerasync"},"registerAsync"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"registerAsync"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"models"),"): ",(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.MapRegistry"},(0,n.kt)("inlineCode",{parentName:"a"},"MapRegistry"))),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"models")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Dictionary"),"<() => ",(0,n.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,n.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">",">",">")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.MapRegistry"},(0,n.kt)("inlineCode",{parentName:"a"},"MapRegistry"))),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/registry/mapRegistry.ts#L43"},"src/core/registry/mapRegistry.ts:43")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"registersync"},"registerSync"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"registerSync"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"...models"),"): ",(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.MapRegistry"},(0,n.kt)("inlineCode",{parentName:"a"},"MapRegistry"))),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"...models")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ArrayableVariadic"),"<",(0,n.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/core#model"},(0,n.kt)("inlineCode",{parentName:"a"},"Model")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">",">")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.MapRegistry"},(0,n.kt)("inlineCode",{parentName:"a"},"MapRegistry"))),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/registry/mapRegistry.ts#L35"},"src/core/registry/mapRegistry.ts:35")))}m.isMDXComponent=!0}}]);