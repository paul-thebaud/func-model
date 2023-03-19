"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1171],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||i;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(1163),a=(t(9496),t(9613));const i={id:"jsonapi.sortBy",title:"Namespace: sortBy",sidebar_label:"sortBy",custom_edit_url:null},o=void 0,s={unversionedId:"reference/api/namespaces/jsonapi.sortBy",id:"reference/api/namespaces/jsonapi.sortBy",title:"Namespace: sortBy",description:"jsonapi.sortBy",source:"@site/docs/reference/api/namespaces/jsonapi.sortBy.md",sourceDirName:"reference/api/namespaces",slug:"/reference/api/namespaces/jsonapi.sortBy",permalink:"/foscia/docs/reference/api/namespaces/jsonapi.sortBy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"jsonapi.sortBy",title:"Namespace: sortBy",sidebar_label:"sortBy",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"paginate",permalink:"/foscia/docs/reference/api/namespaces/jsonapi.paginate"},next:{title:"sortByDesc",permalink:"/foscia/docs/reference/api/namespaces/jsonapi.sortByDesc"}},p={},c=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:c},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/jsonapi"},"jsonapi"),".sortBy"),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"extension"},"extension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"extension"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#actionparsedextension"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"sortBy"),": <C, E",">","(",(0,a.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[], ",(0,a.kt)("inlineCode",{parentName:"p"},"direction?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"asc"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"desc"'),") => ",(0,a.kt)("a",{parentName:"p",href:"/foscia/docs/reference/api/modules/core#action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">","  }",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/foscia/blob/1e405ac/src/jsonapi/actions/context/enhancers/sortBy.ts#L35"},"src/jsonapi/actions/context/enhancers/sortBy.ts:35")))}f.isMDXComponent=!0}}]);