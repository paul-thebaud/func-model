"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2270],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(1163),a=(t(9496),t(9613));const i={id:"core.ExpectedRunFailureError",title:"Class: ExpectedRunFailureError",sidebar_label:"ExpectedRunFailureError",custom_edit_url:null},o=void 0,s={unversionedId:"reference/api/classes/core.ExpectedRunFailureError",id:"reference/api/classes/core.ExpectedRunFailureError",title:"Class: ExpectedRunFailureError",description:"core.ExpectedRunFailureError",source:"@site/docs/reference/api/classes/core.ExpectedRunFailureError.md",sourceDirName:"reference/api/classes",slug:"/reference/api/classes/core.ExpectedRunFailureError",permalink:"/foscia/docs/reference/api/classes/core.ExpectedRunFailureError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.ExpectedRunFailureError",title:"Class: ExpectedRunFailureError",sidebar_label:"ExpectedRunFailureError",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"DeserializerError",permalink:"/foscia/docs/reference/api/classes/core.DeserializerError"},next:{title:"FosciaError",permalink:"/foscia/docs/reference/api/classes/core.FosciaError"}},l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core"},"core"),".ExpectedRunFailureError"),(0,a.kt)("p",null,'Error which occurs on "xxxOrFail" runners.'),(0,a.kt)("p",null,"It can be handled globally by the underlying application\n(e.g. to display a 404 Not Found page)."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError"},(0,a.kt)("inlineCode",{parentName:"a"},"FosciaError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ExpectedRunFailureError"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ExpectedRunFailureError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"message"),")"),(0,a.kt)("p",null,'Construct a new FosciaError. Prefix the given message with "',"[foscia]",'".'),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError"},"FosciaError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError#constructor"},"constructor")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/4071f929/src/core/errors/fosciaError.ts#L10"},"src/core/errors/fosciaError.ts:10")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError"},"FosciaError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError#cause"},"cause")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es2022.error.d.ts:26"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError"},"FosciaError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError#message"},"message")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1054"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError"},"FosciaError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError#name"},"name")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1053"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError"},"FosciaError"),".",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/classes/core.FosciaError#stack"},"stack")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"website/node_modules/.pnpm/",(0,a.kt)("a",{parentName:"p",href:"mailto:typescript@4.9.5"},"typescript@4.9.5"),"/node_modules/typescript/lib/lib.es5.d.ts:1055"))}u.isMDXComponent=!0}}]);