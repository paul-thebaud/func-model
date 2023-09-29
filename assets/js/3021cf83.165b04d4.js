"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2538],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5576:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496),o=n(5924);const r={tabItem:"tabItem_G3oa"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},3840:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(8028),o=n(9496),r=n(5924),i=n(1072),s=n(3442),l=n(7387),u=n(2091),c=n(7143);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=l??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var g=n(2764);const y={tabList:"tabList_w4t9",tabItem:"tabItem_GhOo"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(8028),o=(n(9496),n(9613)),r=n(4989),i=n(5576),s=n(3840);const l={sidebar_position:20,toc_max_heading_level:4},u="Getting started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"-   Creating your first model and using it through model instances",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/foscia/docs/getting-started",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,toc_max_heading_level:4},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/foscia/docs/installation"},next:{title:"Core concepts",permalink:"/foscia/docs/category/core-concepts"}},p={},m=[{value:"Your first model",id:"your-first-model",level:2},{value:"Defining a model",id:"defining-a-model",level:3},{value:"Using models classes",id:"using-models-classes",level:3},{value:"Your first actions",id:"your-first-actions",level:2},{value:"Action factory",id:"action-factory",level:3},{value:"With blueprints",id:"with-blueprints",level:4},{value:"Builder pattern syntax",id:"builder-pattern-syntax",level:4},{value:"Running simple actions",id:"running-simple-actions",level:3},{value:"Running HTTP custom actions",id:"running-http-custom-actions",level:3}],d={toc:m},f="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Creating your first model and using it through model instances"),(0,o.kt)("li",{parentName:"ul"},"Creating your action factory using blueprints"),(0,o.kt)("li",{parentName:"ul"},"Running basic actions on your models with your action factory"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Only here for a simple HTTP client? Check out\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/actions/http-client"},(0,o.kt)("strong",{parentName:"a"},"the simple HTTP client guide")),".")),(0,o.kt)("h2",{id:"your-first-model"},"Your first model"),(0,o.kt)("p",null,"Models represent the structure of your data and are used to simplify and\nget type safe interactions with your data source."),(0,o.kt)("h3",{id:"defining-a-model"},"Defining a model"),(0,o.kt)("p",null,"To declare a model, you just need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"makeModel")," function. This function\ntakes up to 2 arguments and returns an ES6 class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The model ",(0,o.kt)("inlineCode",{parentName:"li"},"type"),", which is used by other services to identify your model or\ninteract with a data source."),(0,o.kt)("li",{parentName:"ul"},"The model ",(0,o.kt)("inlineCode",{parentName:"li"},"definition"),", which contains your attributes/relations definitions\nand custom properties and methods.")),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="models/post.ts"',title:'"models/post.ts"'},"import { makeModel, attr, hasMany, toDate } from 'foscia/core';\nimport type Comment from './comment';\n\nexport default class Post extends makeModel('posts', {\n    title: attr<string>(),\n    description: attr<string>(),\n    publishedAt: attr<Date | undefined>(toDate()),\n    comments: hasMany<Comment>(),\n    get published() {\n        return !!this.publishedAt;\n    },\n}) {}\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="models/post.js"',title:'"models/post.js"'},"import { makeModel, attr, hasMany, toDate } from 'foscia/core';\n\nexport default class Post extends makeModel('posts', {\n    title: attr(),\n    description: attr(),\n    publishedAt: attr(toDate()),\n    comments: hasMany(),\n    get published() {\n        return !!this.publishedAt;\n    },\n}) {}\n")))),(0,o.kt)("h3",{id:"using-models-classes"},"Using models classes"),(0,o.kt)("p",null,"Model classes can be used like any ES6 class. It can be instantiated,\nmanipulated, etc. Properties will be defined on each instance from the model\ndefinition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const post = new Post();\npost.title = 'Hello World!';\npost.publishedAt = new Date();\nconsole.log(post.title); // \"Hello World!\"\nconsole.log(post.published); // true\nconsole.log(post.exists); // false\n")),(0,o.kt)(r.Z,{className:"button bg--primary",to:"/docs/core-concepts/models",mdxType:"Link"},"Read the full guide on models"),(0,o.kt)("h2",{id:"your-first-actions"},"Your first actions"),(0,o.kt)("h3",{id:"action-factory"},"Action factory"),(0,o.kt)("h4",{id:"with-blueprints"},"With blueprints"),(0,o.kt)("p",null,"Once your models are set up, you will probably want to interact with a data\nsource, such as an API. For this, you will need an action factory which\ninitialize a preconfigured context for all your future actions. Running actions\nusing this action factory will be seen in the\n",(0,o.kt)("a",{parentName:"p",href:"#running-simple-actions"},"next part of this guide"),"."),(0,o.kt)("p",null,"Blueprints provide a quick initialization of your action factory for different\ncommon use cases. Blueprints will also preconfigure registered models for those\nuse cases."),(0,o.kt)("p",null,"Currently, you may choose between the two available blueprints:\n",(0,o.kt)("a",{parentName:"p",href:"https://jsonapi.org"},"JSON:API")," or REST."),(0,o.kt)(s.Z,{groupId:"implementation",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"jsonapi",label:"JSON:API",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"makeJsonApi")," is a blueprint to quickly initiate an action factory to interact\nwith a normalized ",(0,o.kt)("a",{parentName:"p",href:"https://jsonapi.org"},"JSON:API backend"),". It provides all the\navailable tooling, such as a model registry, an instance cache, a serializer and\ndeserializer and an adapter."),(0,o.kt)("p",null,"You can read more details on the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/implementations/jsonapi"},"JSON:API implementation page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import { makeJsonApi } from 'foscia/blueprints';\nimport Comment from './models/comment';\nimport Post from './models/post';\n\nconst { action, registry } = makeJsonApi({\n    baseURL: 'https://example.com/api/v1',\n});\n\n// We need to register the models to allow the deserializer to know\n// to which model it should deserialize from an API record.\nregistry.register(Comment, Post);\n\nexport default action;\n"))),(0,o.kt)(i.Z,{value:"jsonrest",label:"JSON REST",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"makeJsonRest")," is a blueprint to quickly initiate an action factory to interact\nwith a normalized REST backend exchanging JSON.\nIt provides all the available tooling, such as a model registry, an instance\ncache, a serializer and deserializer and an adapter."),(0,o.kt)("p",null,"You can read more details on the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/implementations/rest"},"REST implementation page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import { makeJsonRest } from 'foscia/blueprints';\nimport Comment from './models/comment';\nimport Post from './models/post';\n\nconst { action, registry } = makeJsonRest({\n    baseURL: 'https://example.com/api',\n});\n\n// We need to register the models to allow the deserializer to know\n// to which model it should deserialize from an API record.\nregistry.register(Comment, Post);\n\nexport default action;\n"))),(0,o.kt)(i.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,o.kt)("p",null,"For the moment, there is no other official implementation available besides\nJSON:API and REST. You should therefore either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Implement your own action's dependencies"),", you should inspire from existing\nimplementations to build your own."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paul-thebaud/foscia/issues"},(0,o.kt)("strong",{parentName:"a"},"Open an issue or a pull request")),"\nto suggest a new implementation.")))),(0,o.kt)("admonition",{title:"Notice on blueprints",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Using blueprints is a simple and quick way to set up an action factory. However,\nit may have some downsides:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Only some implementations are available for now, so you may not find\nsomething which fits your needs"),(0,o.kt)("li",{parentName:"ul"},"Some dependencies (e.g. serializer in a readonly context) may be imported\neven if you don't use them, and it may increase your production bundle size"),(0,o.kt)("li",{parentName:"ul"},"Some behaviors may not be configurable")),(0,o.kt)("p",{parentName:"admonition"},"You may configure the behavior or implementation in two ways:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/actions/action-factory-configuration"},(0,o.kt)("strong",{parentName:"a"},"Configure your action factory"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/actions/custom-action-factory"},(0,o.kt)("strong",{parentName:"a"},"Implement custom action factory"))))),(0,o.kt)("h4",{id:"builder-pattern-syntax"},"Builder pattern syntax"),(0,o.kt)("p",null,"If you want to use the builder pattern syntax (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"action().forModel(Post)"),"\ninstead of ",(0,o.kt)("inlineCode",{parentName:"p"},"action().use(forModel(Post))"),"), you must provide the extensions\nyou want to use during your action factory creation."),(0,o.kt)(s.Z,{groupId:"implementation",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"jsonapi",label:"JSON:API",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeJsonApi, jsonApiStarterExtensions } from 'foscia/blueprints';\n\nconst { action, registry } = makeJsonApi({\n    extensions: jsonApiStarterExtensions,\n});\n"))),(0,o.kt)(i.Z,{value:"jsonrest",label:"JSON REST",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeJsonRest, jsonRestStarterExtensions } from 'foscia/blueprints';\n\nconst { action, registry } = makeJsonRest({\n    extensions: jsonRestStarterExtensions,\n});\n")))),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/actions#extensions"},"learn more about extensions"),",\ncheck the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/actions-extensions"},"available extensions packs")," or\nimport manually enhancers and runners extensions using the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { forModel, include, all } from 'foscia/core';\nimport { makeJsonApi, hooksExtensions } from 'foscia/blueprints';\n\nconst { action, registry } = makeJsonApi({\n    extensions: {\n        ...hooksExtensions,\n        ...forModel.extension,\n        ...include.extension,\n        ...all.extension,\n    },\n});\n")),(0,o.kt)("h3",{id:"running-simple-actions"},"Running simple actions"),(0,o.kt)("p",null,"To run an action, you can initialize a new action instance by calling your\nfactory. With this instance, you can call ",(0,o.kt)("strong",{parentName:"p"},"context enhancers")," through ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," to\nmodify the action context. When you are ready, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," the action with a\ngiven ",(0,o.kt)("strong",{parentName:"p"},"context runner"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { all, forModel } from 'foscia/core';\nimport Post from './models/post';\nimport action from './action';\n\nconst posts = await action().use(forModel(Post)).run(all());\n")),(0,o.kt)("p",null,"In Foscia, the context enhancers are doing the majority of work to\ncustomize the action you will run. Context runners only exists to tell how you\nwish to run the action and retrieve the result (raw result, model instance,\netc.)."),(0,o.kt)("p",null,"A great example of this is when finding a model using its ID. You'll not use a\n",(0,o.kt)("inlineCode",{parentName:"p"},"find")," context runner. Instead, you will need to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," context enhancer\nand a ",(0,o.kt)("inlineCode",{parentName:"p"},"oneOrFail")," context runner. This way, you are able to do a find query and\nretrieve a raw result when needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { find, oneOrFail } from 'foscia/core';\nimport Post from './models/post';\nimport action from './action';\n\nconst post = await action().use(find(Post, 'abc-123')).run(oneOrFail());\n")),(0,o.kt)("p",null,"This works the same to send write operations through actions. In the following\nexample, we are retrieving a raw adapter response instead of model instances."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { create, fill, oneOrCurrent } from 'foscia/core';\nimport Post from './models/post';\nimport action from './action';\n\nconst post = fill(new Post(), {\n    title: 'Hello World!',\n    description: 'Your first post',\n});\n\nconst response = await action().use(create(post)).run(oneOrCurrent());\n")),(0,o.kt)(r.Z,{className:"button bg--primary",to:"/docs/core-concepts/actions",mdxType:"Link"},"Read the full guide on actions"),(0,o.kt)("h3",{id:"running-http-custom-actions"},"Running HTTP custom actions"),(0,o.kt)("p",null,"Using JSON:API or REST blueprints, you can also use Foscia to\nmake non-standard API calls."),(0,o.kt)("p",null,"This way, you can standardize all API calls across your application, even when\nthose are non JSON:API/REST related."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { forInstance, raw } from 'foscia/core';\nimport { makePost } from 'foscia/http';\nimport Comment from './comment';\nimport action from './action';\n\nconst comment = await action().use(find(Comment, 'abc-123')).run(oneOrFail());\n\n// Make a POST call to \"https://example.com/api/v1/services/comments/1/publish\"\nconst response = await action()\n    .use(forInstance(comment))\n    .use(\n        makePost('publish', {\n            data: { publishedAt: new Date() },\n        }),\n    )\n    .run(raw());\n\n// This is a raw `fetch` Response object.\nconsole.log(response.status);\n")))}h.isMDXComponent=!0}}]);