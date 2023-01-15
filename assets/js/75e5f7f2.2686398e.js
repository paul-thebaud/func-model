"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9878],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4116:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(4250),i=(t(9496),t(9613));const a={id:"core.DeserializerError",title:"Class: DeserializerError",sidebar_label:"DeserializerError",custom_edit_url:null},l=void 0,c={unversionedId:"api/func-client/classes/core.DeserializerError",id:"api/func-client/classes/core.DeserializerError",title:"Class: DeserializerError",description:"core.DeserializerError",source:"@site/docs/api/func-client/classes/core.DeserializerError.md",sourceDirName:"api/func-client/classes",slug:"/api/func-client/classes/core.DeserializerError",permalink:"/func-client/docs/api/func-client/classes/core.DeserializerError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.DeserializerError",title:"Class: DeserializerError",sidebar_label:"DeserializerError",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"AdapterError",permalink:"/func-client/docs/api/func-client/classes/core.AdapterError"},next:{title:"ExpectedRunFailureError",permalink:"/func-client/docs/api/func-client/classes/core.ExpectedRunFailureError"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core"},"core"),".DeserializerError"),(0,i.kt)("p",null,"Error which occurs during deserialization."),(0,i.kt)("p",null,"It should be thrown when encountering a deserializer configuration error\nor a data source's data format mismatch."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError"},(0,i.kt)("inlineCode",{parentName:"a"},"FuncClientError"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DeserializerError"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new DeserializerError"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"message"),")"),(0,i.kt)("p",null,'Construct a new FuncClientError. Prefix the given message with "',"[func-client]",'".'),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError"},"FuncClientError"),".",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/5e8684e/src/core/errors/funcClientError.ts#L10"},"src/core/errors/funcClientError.ts:10")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cause"},"cause"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cause"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError"},"FuncClientError"),".",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError#cause"},"cause")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"website/node_modules/.pnpm/",(0,i.kt)("a",{parentName:"p",href:"mailto:typescript@4.8.4"},"typescript@4.8.4"),"/node_modules/typescript/lib/lib.es2022.error.d.ts:26"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"message"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError"},"FuncClientError"),".",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError#message"},"message")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"website/node_modules/.pnpm/",(0,i.kt)("a",{parentName:"p",href:"mailto:typescript@4.8.4"},"typescript@4.8.4"),"/node_modules/typescript/lib/lib.es5.d.ts:1041"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError"},"FuncClientError"),".",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError#name"},"name")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"website/node_modules/.pnpm/",(0,i.kt)("a",{parentName:"p",href:"mailto:typescript@4.8.4"},"typescript@4.8.4"),"/node_modules/typescript/lib/lib.es5.d.ts:1040"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stack"},"stack"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stack"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError"},"FuncClientError"),".",(0,i.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.FuncClientError#stack"},"stack")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"website/node_modules/.pnpm/",(0,i.kt)("a",{parentName:"p",href:"mailto:typescript@4.8.4"},"typescript@4.8.4"),"/node_modules/typescript/lib/lib.es5.d.ts:1042"))}u.isMDXComponent=!0}}]);