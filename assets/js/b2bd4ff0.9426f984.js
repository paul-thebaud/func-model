"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3846],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return t?n.createElement(m,s(s({ref:r},d),{},{components:t})):n.createElement(m,s({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6093:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(1163),a=(t(9496),t(9613));const i={id:"http.UnauthorizedError",title:"Class: UnauthorizedError",sidebar_label:"UnauthorizedError",custom_edit_url:null},s=void 0,o={unversionedId:"reference/api/classes/http.UnauthorizedError",id:"reference/api/classes/http.UnauthorizedError",title:"Class: UnauthorizedError",description:"http.UnauthorizedError",source:"@site/docs/reference/api/classes/http.UnauthorizedError.md",sourceDirName:"reference/api/classes",slug:"/reference/api/classes/http.UnauthorizedError",permalink:"/foscia/docs/reference/api/classes/http.UnauthorizedError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.UnauthorizedError",title:"Class: UnauthorizedError",sidebar_label:"UnauthorizedError",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"TooManyRequestsError",permalink:"/foscia/docs/reference/api/classes/http.TooManyRequestsError"},next:{title:"JsonApiDeserializer",permalink:"/foscia/docs/reference/api/classes/jsonapi.JsonApiDeserializer"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"request",id:"request",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"response",id:"response",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:p},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http"},"http"),".UnauthorizedError"),(0,a.kt)("p",null,"Extendable error class used inside Foscia."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},(0,a.kt)("inlineCode",{parentName:"a"},"InvalidRequestError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UnauthorizedError"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new UnauthorizedError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"response"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/http#httprequest"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"response")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Response"))))),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#constructor"},"constructor")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/4071f929/src/http/errors/responseError.ts#L7"},"src/http/errors/responseError.ts:7")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#cause"},"cause")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es2022.error.d.ts:26"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#message"},"message")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1054"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#name"},"name")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1053"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request"},"request"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"request"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http#httprequest"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#request"},"request")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/4071f929/src/http/errors/httpAdapterError.ts#L5"},"src/http/errors/httpAdapterError.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"response"},"response"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"response"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#response"},"response")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/4071f929/src/http/errors/responseError.ts#L5"},"src/http/errors/responseError.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError"},"InvalidRequestError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.InvalidRequestError#stack"},"stack")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1055"))}u.isMDXComponent=!0}}]);