"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4617],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(u,o(o({ref:t},l),{},{components:n})):r.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(1163),a=(n(9496),n(9613));const i={sidebar_position:110,description:"Specificities of the REST implementation and available configuration."},o="REST",c={unversionedId:"advanced/implementations/rest",id:"advanced/implementations/rest",title:"REST",description:"Specificities of the REST implementation and available configuration.",source:"@site/docs/advanced/implementations/rest.md",sourceDirName:"advanced/implementations",slug:"/advanced/implementations/rest",permalink:"/foscia/docs/advanced/implementations/rest",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/advanced/implementations/rest.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,description:"Specificities of the REST implementation and available configuration."},sidebar:"docsSidebar",previous:{title:"JSON:API",permalink:"/foscia/docs/advanced/implementations/jsonapi"},next:{title:"Examples",permalink:"/foscia/docs/category/examples"}},s={},p=[],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rest"},"REST"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"REST implementation is an extended version of the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/implementations/http"},(0,a.kt)("strong",{parentName:"a"},"HTTP adapter"))," and\n",(0,a.kt)("a",{parentName:"p",href:"docs/advanced/implementations/object"},(0,a.kt)("strong",{parentName:"a"},"JSON (de)serializer")),". You may check\nout those implementations to known about common behavior and configuration\noptions.")),(0,a.kt)("span",{className:"chip chip--primary"},"Work in progress"))}d.isMDXComponent=!0}}]);