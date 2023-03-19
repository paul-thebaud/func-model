"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3513],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(1163),r=(n(9496),n(9613));const o={id:"http.makePost",title:"Namespace: makePost",sidebar_label:"makePost",custom_edit_url:null},i=void 0,p={unversionedId:"reference/api/namespaces/http.makePost",id:"reference/api/namespaces/http.makePost",title:"Namespace: makePost",description:"http.makePost",source:"@site/docs/reference/api/namespaces/http.makePost.md",sourceDirName:"reference/api/namespaces",slug:"/reference/api/namespaces/http.makePost",permalink:"/foscia/docs/reference/api/namespaces/http.makePost",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"http.makePost",title:"Namespace: makePost",sidebar_label:"makePost",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"makePatch",permalink:"/foscia/docs/reference/api/namespaces/http.makePatch"},next:{title:"makePut",permalink:"/foscia/docs/reference/api/namespaces/http.makePut"}},s={},c=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http"},"http"),".makePost"),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"extension"},"extension"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"extension"),": ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#actionparsedextension"},(0,r.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"makePost"),": <C, E",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathOrBaseURL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"body?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/http#httprequestconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequestConfig")),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"body"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"method"'),">",") => ",(0,r.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,r.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/http/actions/context/enhancers/makePost.ts#L35"},"src/http/actions/context/enhancers/makePost.ts:35")))}d.isMDXComponent=!0}}]);