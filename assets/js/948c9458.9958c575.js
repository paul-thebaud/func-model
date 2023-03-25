"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3198],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(t),u=a,m=c["".concat(p,".").concat(u)]||c[u]||f[u]||s;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1681:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(1163),a=(t(9496),t(9613));const s={id:"http.InvalidRequestError",title:"Class: InvalidRequestError",sidebar_label:"InvalidRequestError",custom_edit_url:null},i=void 0,o={unversionedId:"reference/api/classes/http.InvalidRequestError",id:"reference/api/classes/http.InvalidRequestError",title:"Class: InvalidRequestError",description:"http.InvalidRequestError",source:"@site/docs/reference/api/classes/http.InvalidRequestError.md",sourceDirName:"reference/api/classes",slug:"/reference/api/classes/http.InvalidRequestError",permalink:"/foscia/docs/reference/api/classes/http.InvalidRequestError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.InvalidRequestError",title:"Class: InvalidRequestError",sidebar_label:"InvalidRequestError",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"InterruptedError",permalink:"/foscia/docs/reference/api/classes/http.InterruptedError"},next:{title:"NotFoundError",permalink:"/foscia/docs/reference/api/classes/http.NotFoundError"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"request",id:"request",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"response",id:"response",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:l},c="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http"},"http"),".InvalidRequestError"),(0,a.kt)("p",null,"Extendable error class used inside Foscia."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},(0,a.kt)("inlineCode",{parentName:"a"},"ResponseError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"InvalidRequestError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.UnauthorizedError"},(0,a.kt)("inlineCode",{parentName:"a"},"UnauthorizedError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ForbiddenError"},(0,a.kt)("inlineCode",{parentName:"a"},"ForbiddenError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.NotFoundError"},(0,a.kt)("inlineCode",{parentName:"a"},"NotFoundError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ConflictError"},(0,a.kt)("inlineCode",{parentName:"a"},"ConflictError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.TooManyRequestsError"},(0,a.kt)("inlineCode",{parentName:"a"},"TooManyRequestsError"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new InvalidRequestError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"response"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/foscia/docs/reference/api/modules/http#httprequest"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"response")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Response"))))),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#constructor"},"constructor")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/334120d9/src/http/errors/responseError.ts#L7"},"src/http/errors/responseError.ts:7")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#cause"},"cause")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es2022.error.d.ts:26"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#message"},"message")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1054"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#name"},"name")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1053"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request"},"request"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"request"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http#httprequest"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#request"},"request")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/334120d9/src/http/errors/httpAdapterError.ts#L5"},"src/http/errors/httpAdapterError.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"response"},"response"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"response"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#response"},"response")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/334120d9/src/http/errors/responseError.ts#L5"},"src/http/errors/responseError.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError"},"ResponseError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/http.ResponseError#stack"},"stack")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1055"))}f.isMDXComponent=!0}}]);