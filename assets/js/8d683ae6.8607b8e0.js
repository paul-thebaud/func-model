"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8664],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(v,o(o({ref:n},c),{},{components:t})):r.createElement(v,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},208:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(9496),a=t(5924);const l="tabItem_IPoj";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4210:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(4250),a=t(9496),l=t(5924),o=t(4375),i=t(4436),s=t(7883),u=t(4930);const c="tabList_xr86",p="tabItem_r4_W";function d(e){var n;const{lazy:t,block:o,defaultValue:d,values:m,groupId:v,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,i.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[x,N]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=g[v];null!=e&&e!==x&&k.some((n=>n.value===e))&&N(e)}const O=e=>{const n=e.currentTarget,t=E.indexOf(n),r=k[t].value;r!==x&&(T(n),N(r),null!=v&&w(v,String(r)))},C=e=>{var n;let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>E.push(e),onKeyDown:C,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===n})}),t??n)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},5834:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(9496);function a(e){let{children:n,color:t}=e;return r.createElement("span",{className:`chip ${t&&`chip--${t}`}`},n)}},7063:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(9496),a=t(5834);function l(e){let{children:n,version:t,only:l,requires:o,provides:i}=e;return r.createElement("div",{style:{marginBottom:"12px"}},t&&r.createElement(a.Z,null,t),l&&r.createElement(a.Z,{color:"primary"},"only: ",l),o&&r.createElement(a.Z,{color:"danger"},"requires: ",o),i&&r.createElement(a.Z,{color:"success"},"provides: ",i),n)}},3770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=t(4250),a=(t(9496),t(9613)),l=(t(208),t(4210),t(5834)),o=t(7063);const i={sidebar_position:3,description:"Available actions runners."},s="Actions runners",u={unversionedId:"api/actions-runners",id:"api/actions-runners",title:"Actions runners",description:"Available actions runners.",source:"@site/docs/api/actions-runners.mdx",sourceDirName:"api",slug:"/api/actions-runners",permalink:"/func-client/docs/api/actions-runners",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/api/actions-runners.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Available actions runners."},sidebar:"tutorialSidebar",previous:{title:"Actions extensions",permalink:"/func-client/docs/api/actions-extensions"},next:{title:"Table of Contents",permalink:"/func-client/docs/api/func-client/"}},c={},p=[{value:"Note",id:"note",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>none</code>",id:"none",level:3},{value:"Example",id:"example",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>raw</code>",id:"raw",level:3},{value:"Example",id:"example-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>rawJson</code>",id:"rawjson",level:3},{value:"Example",id:"example-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>all</code>",id:"all",level:3},{value:"Example",id:"example-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>allDocument</code>",id:"alldocument",level:3},{value:"Example",id:"example-4",level:4},{value:"Returns",id:"returns-4",level:4}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"actions-runners"},"Actions runners"),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,"Many actions runners are available. Each may:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(l.Z,{mdxType:"Chip"},"depend")," on a minimal package version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(l.Z,{color:"primary",mdxType:"Chip"},"only")," be available in a given use case (JSON:API, REST, HTTP, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(l.Z,{color:"success",mdxType:"Chip"},"provide")," a given context to next enhancers or runners"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(l.Z,{color:"danger",mdxType:"Chip"},"require")," a given context from previous enhancers or runners")),(0,a.kt)("p",null,"Examples of this guide will omit imports of your action factories or models to\nprovide shorter examples."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"none"},(0,a.kt)("inlineCode",{parentName:"h3"},"none")),(0,a.kt)(o.Z,{requires:"Adapter",mdxType:"FunctionInfo"}),(0,a.kt)("p",null,"Run the action and ignore the content of the result.\nAdapter errors are not caught and so may be thrown."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { none } from 'func-client/core';\n\nawait action().run(none());\n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<void>}")),(0,a.kt)("h3",{id:"raw"},(0,a.kt)("inlineCode",{parentName:"h3"},"raw")),(0,a.kt)(o.Z,{requires:"Adapter",mdxType:"FunctionInfo"}),(0,a.kt)("p",null,"Run the action and retrieve the raw adapter's data."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { raw } from 'func-client/core';\n\nconst response = await action().run(raw());\n")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<AD>}")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"AD")," is your adapter's data (e.g. a fetch Response\nobject)."),(0,a.kt)("h3",{id:"rawjson"},(0,a.kt)("inlineCode",{parentName:"h3"},"rawJson")),(0,a.kt)(o.Z,{requires:"Adapter",only:"HTTP",mdxType:"FunctionInfo"}),(0,a.kt)("p",null,"Run the action and retrieve the response JSON parsed data."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { rawJson } from 'func-client/http';\n\nconst data = await action().run(rawJson());\n")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<T>}")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," is the generic type passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"rawJson"),"\n(defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),")."),(0,a.kt)("h3",{id:"all"},(0,a.kt)("inlineCode",{parentName:"h3"},"all")),(0,a.kt)(o.Z,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,a.kt)("p",null,"Run the action and deserialize an array of model's instance."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { all } from 'func-client/core';\n\nconst posts = await action().run(all());\n")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<I[]>}")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."),(0,a.kt)("h3",{id:"alldocument"},(0,a.kt)("inlineCode",{parentName:"h3"},"allDocument")),(0,a.kt)(o.Z,{requires:"Adapter, Deserializer, Model",only:"JSON:API",mdxType:"FunctionInfo"}),(0,a.kt)("p",null,"Run the action and deserialize an array of model's instance.\nAlso returns the JSON:API document meta."),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { allDocument } from 'func-client/jsonapi';\n\nconst { instances, meta } = await action().run(allDocument());\n")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<{ instances: I[]; meta: JsonApiMeta; }>}")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."))}m.isMDXComponent=!0}}]);