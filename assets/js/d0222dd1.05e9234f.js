"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4935],{9613:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>u});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,u=d["".concat(p,".").concat(f)]||d[f]||m[f]||a;return n?t.createElement(u,i(i({ref:r},s),{},{components:n})):t.createElement(u,i({ref:r},s))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4522:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(1163),o=(n(9496),n(9613));const a={id:"core.onError",title:"Namespace: onError",sidebar_label:"onError",custom_edit_url:null},i=void 0,c={unversionedId:"reference/api/namespaces/core.onError",id:"reference/api/namespaces/core.onError",title:"Namespace: onError",description:"core.onError",source:"@site/docs/reference/api/namespaces/core.onError.md",sourceDirName:"reference/api/namespaces",slug:"/reference/api/namespaces/core.onError",permalink:"/foscia/docs/reference/api/namespaces/core.onError",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.onError",title:"Namespace: onError",sidebar_label:"onError",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"none",permalink:"/foscia/docs/reference/api/namespaces/core.none"},next:{title:"onFinally",permalink:"/foscia/docs/reference/api/namespaces/core.onFinally"}},p={},l=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:l},d="wrapper";function m(e){let{components:r,...n}=e;return(0,o.kt)(d,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core"},"core"),".onError"),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"extension"},"extension"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"extension"),": ",(0,o.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#actionparsedextension"},(0,o.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"onError"),": <C, E",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,o.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"callback"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"event"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),"  }) => ",(0,o.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">",") => ",(0,o.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/core/actions/context/enhancers/hooks/onError.ts#L29"},"src/core/actions/context/enhancers/hooks/onError.ts:29")))}m.isMDXComponent=!0}}]);