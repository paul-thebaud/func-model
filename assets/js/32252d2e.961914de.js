"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3876],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(1163),a=(n(9496),n(9613));const r={sidebar_position:1,description:"Quick introduction on available implementations for Foscia."},o="Presentation",l={unversionedId:"advanced/implementations/presentation",id:"advanced/implementations/presentation",title:"Presentation",description:"Quick introduction on available implementations for Foscia.",source:"@site/docs/advanced/implementations/presentation.md",sourceDirName:"advanced/implementations",slug:"/advanced/implementations/presentation",permalink:"/foscia/docs/advanced/implementations/presentation",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/advanced/implementations/presentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Quick introduction on available implementations for Foscia."},sidebar:"docsSidebar",previous:{title:"Implementations",permalink:"/foscia/docs/category/implementations"},next:{title:"Cache",permalink:"/foscia/docs/advanced/implementations/cache"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Core implementation",id:"core-implementation",level:2},{value:"JSON:API implementation",id:"jsonapi-implementation",level:2},{value:"JSON REST implementation",id:"json-rest-implementation",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"presentation"},"Presentation"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Foscia actions might require one or many dependencies to work:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cache")," will store already fetched models instances. It will avoid\nmultiple instances of the same record coexisting and allows you to retrieve\nalready fetched record without making further requests to your data source."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Registry")," is a map of types and associated model. It is used by\ndeserializer to identify which models should map to which types."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Serializer")," will serialize instances to the data source format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deserializer")," will deserialize records to instances. It might use the\ncache and registry internally."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Adapter")," create the exchange between your actions' built context and your\ndata source. As an example, it will ",(0,a.kt)("em",{parentName:"li"},"translate")," the context to an HTTP\nrequest when using JSON:API or JSON REST implementations.")),(0,a.kt)("p",null,"Some dependencies have a common implementation through the core and some may\nhave a specific implementation (HTTP, JSON:API, etc.)."),(0,a.kt)("h2",{id:"core-implementation"},"Core implementation"),(0,a.kt)("p",null,"Foscia propose core implementation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Registry")," actions'\ndependencies. Both classes are available through ",(0,a.kt)("inlineCode",{parentName:"p"},"foscia/core")," namespace\nand both factory are available through ",(0,a.kt)("inlineCode",{parentName:"p"},"foscia/blueprints"),"."),(0,a.kt)("p",null,"Those dependencies may be used with any implementations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/advanced/implementations/cache"},"Cache through ",(0,a.kt)("inlineCode",{parentName:"a"},"RefsCache"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/advanced/implementations/registry"},"Registry through ",(0,a.kt)("inlineCode",{parentName:"a"},"MapRegistry")))),(0,a.kt)("h2",{id:"jsonapi-implementation"},"JSON:API implementation"),(0,a.kt)("p",null,"The JSON:API implementation is built on a common base for HTTP interaction and\nJSON (de)serialization. It is described in depth inside the\n",(0,a.kt)("a",{parentName:"p",href:"docs/advanced/implementations/jsonapi"},"JSON:API implementation guide"),"."),(0,a.kt)("h2",{id:"json-rest-implementation"},"JSON REST implementation"),(0,a.kt)("p",null,"The JSON REST implementation is built on a common base for HTTP interaction and\nJSON (de)serialization. It is described in depth inside the\n",(0,a.kt)("a",{parentName:"p",href:"docs/advanced/implementations/jsonrest"},"JSON REST implementation guide"),"."))}d.isMDXComponent=!0}}]);