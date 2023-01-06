"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2598],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},208:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),l=n(5924);const r="tabItem_IPoj";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},4210:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4250),l=n(9496),r=n(5924),i=n(4375),o=n(4436),s=n(7883),c=n(4930);const u="tabList_xr86",d="tabItem_r4_W";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:f,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,s.U)(),[x,C]=(0,l.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==x&&(w(t),C(a),null!=f&&b(f,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:A,onClick:T},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},5834:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9496);function l(e){let{children:t,color:n}=e;return a.createElement("span",{className:`chip ${n&&`chip--${n}`}`},t)}},7063:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),l=n(5834);function r(e){let{children:t,version:n,only:r,requires:i,provides:o}=e;return a.createElement("div",{style:{marginBottom:"12px"}},n&&a.createElement(l.Z,null,n),r&&a.createElement(l.Z,{color:"primary"},"only: ",r),i&&a.createElement(l.Z,{color:"danger"},"requires: ",i),o&&a.createElement(l.Z,{color:"success"},"provides: ",o),t)}},3970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(4250),l=(n(9496),n(9613)),r=(n(208),n(4210),n(5834)),i=n(7063);const o={sidebar_position:2,description:"Available actions enhancers."},s="Actions enhancers",c={unversionedId:"api/actions-enhancers",id:"api/actions-enhancers",title:"Actions enhancers",description:"Available actions enhancers.",source:"@site/docs/api/actions-enhancers.mdx",sourceDirName:"api",slug:"/api/actions-enhancers",permalink:"/func-client/docs/api/actions-enhancers",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/api/actions-enhancers.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Available actions enhancers."},sidebar:"tutorialSidebar",previous:{title:"Models utilities",permalink:"/func-client/docs/api/models-utilities"},next:{title:"Actions runners",permalink:"/func-client/docs/api/actions-runners"}},u={},d=[{value:"Note",id:"note",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"Example",id:"example",level:4},{value:"Arguments",id:"arguments",level:4},{value:"<code>target</code>",id:"target",level:3},{value:"Example",id:"example-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"<code>model</code>",id:"model",level:3},{value:"Example",id:"example-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"<code>include</code>",id:"include",level:3},{value:"Example",id:"example-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"<code>fields</code>",id:"fields",level:3},{value:"Example",id:"example-4",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"<code>fieldsFor</code>",id:"fieldsfor",level:3},{value:"Example",id:"example-5",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"<code>sortBy</code>",id:"sortby",level:3},{value:"Example",id:"example-6",level:4},{value:"Arguments",id:"arguments-6",level:4},{value:"<code>sortByDesc</code>",id:"sortbydesc",level:3},{value:"Example",id:"example-7",level:4},{value:"Arguments",id:"arguments-7",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"actions-enhancers"},"Actions enhancers"),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("p",null,"Many actions enhancers are available. Each may:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(r.Z,{mdxType:"Chip"},"depend")," on a minimal package version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(r.Z,{color:"primary",mdxType:"Chip"},"only")," be available in a given use case (JSON:API, REST, HTTP, etc.)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(r.Z,{color:"success",mdxType:"Chip"},"provide")," a given context to next enhancers or runners"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(r.Z,{color:"danger",mdxType:"Chip"},"require")," a given context from previous enhancers or runners")),(0,l.kt)("p",null,"Examples of this guide will omit imports of your action factories or models to\nprovide shorter examples."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"context"},(0,l.kt)("inlineCode",{parentName:"h3"},"context")),(0,l.kt)("p",null,"Merge the given context into the action's current context.\n",(0,l.kt)("strong",{parentName:"p"},"The context is not deeply merged.")),(0,l.kt)("p",null,"This is the most basic context enhancer. It is used by a lot of FuncClient\nenhancers."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { context } from 'func-client/core';\n\naction().use(context({ /* additional context */ }));\n")),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#actioncontext"},(0,l.kt)("inlineCode",{parentName:"a"},"{Partial<ActionContext>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"contextToMerge"),"\nthe context to merge into the action's current context")),(0,l.kt)("h3",{id:"target"},(0,l.kt)("inlineCode",{parentName:"h3"},"target")),(0,l.kt)(i.Z,{provides:"Model",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,"Only target the given model."),(0,l.kt)("p",null,'This should only be used in special actions cases where we do not want to\nuse the model type and base URL (understand "endpoint" in case of an API).'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"In most case, you should an alternative (",(0,l.kt)("a",{parentName:"strong",href:"#model"},(0,l.kt)("inlineCode",{parentName:"a"},"model")),", ",(0,l.kt)("a",{parentName:"strong",href:"#find"},(0,l.kt)("inlineCode",{parentName:"a"},"find")),",\n",(0,l.kt)("a",{parentName:"strong",href:"#update"},(0,l.kt)("inlineCode",{parentName:"a"},"update")),", etc.) instead.")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { target } from 'func-client/core';\n\naction().use(target(Post));\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#model"},(0,l.kt)("inlineCode",{parentName:"a"},"{M extends Model}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"modelToUse")," the model class to use")),(0,l.kt)("h3",{id:"model"},(0,l.kt)("inlineCode",{parentName:"h3"},"model")),(0,l.kt)(i.Z,{provides:"Model",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,"Target the given model and use its type and base URL (if defined)."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { model } from 'func-client/core';\n\naction().use(model(Post));\n")),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#model"},(0,l.kt)("inlineCode",{parentName:"a"},"{M extends Model}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"modelToUse")," the model class to use")),(0,l.kt)("h3",{id:"include"},(0,l.kt)("inlineCode",{parentName:"h3"},"include")),(0,l.kt)(i.Z,{requires:"Model",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,"Eager load the given relations for the current model definition. It accepts\ndeep relations through dot notation. The new relations will be merged with the\nprevious ones."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { include } from 'func-client/core';\n\naction().use(include('author'));\naction().use(include('author', 'comments', 'comments.reactions'));\naction().use(include(['author', 'comments', 'comments.reactions']));\n")),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#modelrelationdotkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelRelationDotKey<M>>}")),(0,l.kt)("inlineCode",{parentName:"li"},"relations")," a relation or a set of relation to eager load")),(0,l.kt)("h3",{id:"fields"},(0,l.kt)("inlineCode",{parentName:"h3"},"fields")),(0,l.kt)(i.Z,{only:"JSON:API",requires:"Model",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,"Select the given\n",(0,l.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sparse-fieldsets"},"JSON:API fieldsets"),"\nfor the current context's model. The new fieldsets will be merged with the\nprevious ones."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { fields } from 'func-client/jsonapi';\n\naction().use(fields('title'));\naction().use(fields('title', 'description'));\naction().use(fields(['title', 'description']));\n")),(0,l.kt)("h4",{id:"arguments-4"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<M>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"fieldset")," a\nfield or a set of field to select for the current context's model")),(0,l.kt)("h3",{id:"fieldsfor"},(0,l.kt)("inlineCode",{parentName:"h3"},"fieldsFor")),(0,l.kt)(i.Z,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,"Select the given\n",(0,l.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sparse-fieldsets"},"JSON:API fieldsets"),"\nfor the given model. The new fieldsets will be merged with the\nprevious ones."),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { fieldsFor } from 'func-client/jsonapi';\n\n\naction().use(fieldsFor(Post, 'title'));\naction().use(fieldsFor(Post, 'title', 'description'));\naction().use(fieldsFor(Post, ['title', 'description']));\n")),(0,l.kt)("h4",{id:"arguments-5"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#modelclass"},(0,l.kt)("inlineCode",{parentName:"a"},"{M extends ModelClass<D>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"model")," the model\nto select the fieldsets for"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/func-client/modules/core#modelkey"},(0,l.kt)("inlineCode",{parentName:"a"},"{ArrayableVariadic<ModelKey<M>>}"))," ",(0,l.kt)("inlineCode",{parentName:"li"},"fieldset")," a\nfield or a set of field to select for the given model")),(0,l.kt)("h3",{id:"sortby"},(0,l.kt)("inlineCode",{parentName:"h3"},"sortBy")),(0,l.kt)(i.Z,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sorting"},"Sort the JSON:API resource"),"\nby the given key and direction. The new sort will be merged with the\nprevious ones. ",(0,l.kt)("strong",{parentName:"p"},"Sorts priority are kept"),"."),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { sortBy } from 'func-client/jsonapi';\n\naction().use(sortBy('createdAt'));\n")),(0,l.kt)("h4",{id:"arguments-6"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{string}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," the key for the sort"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{'asc' | 'desc' = 'asc'}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"direction")," the direction for the sort")),(0,l.kt)("h3",{id:"sortbydesc"},(0,l.kt)("inlineCode",{parentName:"h3"},"sortByDesc")),(0,l.kt)(i.Z,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,l.kt)("p",null,"Shortcut for the ",(0,l.kt)("a",{parentName:"p",href:"#sortby"},(0,l.kt)("inlineCode",{parentName:"a"},"sortBy")," function")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"desc")," direction."),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { sortByDesc } from 'func-client/jsonapi';\n\naction().use(sortByDesc('createdAt'));\n")),(0,l.kt)("h4",{id:"arguments-7"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{string}")," ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," the key for the sort")))}m.isMDXComponent=!0}}]);