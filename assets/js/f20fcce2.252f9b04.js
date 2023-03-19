"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1880],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5153:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(9496),o=t(5924);const r={tabItem:"tabItem_oaqp"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:t},n)}},9407:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(1163),o=t(9496),r=t(5924),i=t(3642),s=t(3442),l=t(5506),u=t(2487),c=t(9473);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function d(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,u]=h({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),k=(()=>{const e=l??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=t(1517);const g={tabList:"tabList_PUic",tabItem:"tabItem_TlgZ"};function y(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(y,(0,a.Z)({},e,n)),o.createElement(b,(0,a.Z)({},e,n)))}function N(e){const n=(0,k.Z)();return o.createElement(v,(0,a.Z)({key:String(n)},e))}},1867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(1163),o=(t(9496),t(9613)),r=(t(5153),t(9407),t(5973));const i={sidebar_position:200,description:"Build actions, registering hooks, discover enhancers and runners."},s="Actions",l={unversionedId:"core-concepts/actions",id:"core-concepts/actions",title:"Actions",description:"Build actions, registering hooks, discover enhancers and runners.",source:"@site/docs/core-concepts/actions.mdx",sourceDirName:"core-concepts",slug:"/core-concepts/actions",permalink:"/foscia/docs/core-concepts/actions",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/core-concepts/actions.mdx",tags:[],version:"current",lastUpdatedAt:1679234370,formattedLastUpdatedAt:"Mar 19, 2023",sidebarPosition:200,frontMatter:{sidebar_position:200,description:"Build actions, registering hooks, discover enhancers and runners."},sidebar:"docsSidebar",previous:{title:"Models",permalink:"/foscia/docs/core-concepts/models"},next:{title:"Guides",permalink:"/foscia/docs/category/guides"}},u={},c=[{value:"Instantiation",id:"instantiation",level:2},{value:"Enhancements",id:"enhancements",level:2},{value:"Run",id:"run",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Conditionals",id:"conditionals",level:2},{value:"Hooks",id:"hooks",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions"},"Actions"),(0,o.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Enhancing actions"),(0,o.kt)("li",{parentName:"ul"},"Running actions"),(0,o.kt)("li",{parentName:"ul"},"Extending actions for builder pattern calls"),(0,o.kt)("li",{parentName:"ul"},"Conditionally enhancing and running"),(0,o.kt)("li",{parentName:"ul"},"Registering hooks on actions"))),(0,o.kt)("admonition",{title:"Before reading this guide",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide is only about using actions. You can read more about action factories\nto set up your environment easily:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started#action-factory"},(0,o.kt)("strong",{parentName:"a"},"Make your first action factory"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/action-factory-configuration"},(0,o.kt)("strong",{parentName:"a"},"Configure your action factory"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/custom-action-factory"},(0,o.kt)("strong",{parentName:"a"},"Implement custom action factory"))))),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("p",null,"As stated in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#running-simple-actions"},"getting started guide"),",\nactions are instantiated through your action factory. In this guide, we'll admit\nyou have a setup action factory."),(0,o.kt)("h2",{id:"enhancements"},"Enhancements"),(0,o.kt)("p",null,"An action instance may receive none to many enhancements, which will provide an\nappropriate context to run a request through data source."),(0,o.kt)("p",null,"Each enhancer can be applied using the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," action method. Note that those\nenhancers are not instantly applied to the action context, but during the action\nrun step (or context computation)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"action()\n    // Enhance the action.\n    .use(forModel(Post))\n    .use(include('comments'));\n")),(0,o.kt)(r.Z,{className:"button bg--primary",to:"/docs/reference/actions-enhancers",mdxType:"Link"},"Available enhancers API guide"),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"An action instance can be run using the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method. The runner may use\nenhancers or runners internally."),(0,o.kt)("p",null,"When an action run, it does 3 things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dequeue all enhancers since the action instantiation and build context"),(0,o.kt)("li",{parentName:"ul"},"Execute the runner and each of its internal enhancers/runners (this may\nupdate the context)"),(0,o.kt)("li",{parentName:"ul"},"Return the runner's result (might be any value, including void or an error\nthrowing)")),(0,o.kt)("p",null,"Internally, action running will also trigger ",(0,o.kt)("a",{parentName:"p",href:"#hooks"},"actions hooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"action()\n    .use(forModel(Post))\n    .use(include('comments'))\n    // Run the action.\n    .run(all());\n")),(0,o.kt)(r.Z,{className:"button bg--primary",to:"/docs/reference/actions-runners",mdxType:"Link"},"Available runners API guide"),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"Sometimes, functional programming can be frustrating, because you must always\nrewrite the same words (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"use"),") to keep a builder pattern styled code."),(0,o.kt)("p",null,"Extensions provide a set of properties or methods which will be added\nto your actions' instances. As an action, extensions can avoid you writing\n",(0,o.kt)("inlineCode",{parentName:"p"},"use")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," by adding enhancers/runners methods on you action."),(0,o.kt)("p",null,"The first step to use one or many extensions is to update your action factory\nin which you should provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"extension")," configuration option.\nIf you are using a custom action factory, you should check the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/custom-action-factory"},"custom action factory guide"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="action.js"',title:'"action.js"'},"import { forModel, include, all } from 'foscia/core';\nimport { makeJsonApi, hooksExtensions } from 'foscia/blueprints';\n\nconst { action, registry } = makeJsonApi({\n    extensions: {\n        // Spread any extensions you want to use here...\n        ...hooksExtensions,\n        ...forModel.extension,\n        ...include.extension,\n        ...all.extension,\n    },\n});\n")),(0,o.kt)("p",null,"You can now use the extended enhancers and runners without calling ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"run"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import action from './action';\n\nawait action().forModel(Post).include('tags').all();\n")),(0,o.kt)("p",null,"Every enhancers and runners of Foscia provide a ",(0,o.kt)("inlineCode",{parentName:"p"},".extension")," property\nwhich is extendable by an action instance."),(0,o.kt)("p",null,"You may extend your action with any enhancers or runners extensions manually.\nOtherwise, you may also use ",(0,o.kt)("strong",{parentName:"p"},"prebuild extensions packs"),". Those provide\nmultiple extensions in one exported object allowing you to extend multiple\nextensions at one time!"),(0,o.kt)(r.Z,{className:"button bg--primary margin-bottom--lg",to:"/docs/reference/actions-extensions",mdxType:"Link"},"Available extensions packs API guide"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that using extensions will avoid tree-shaking the extended\nenhancers or runners functions (even when those are unused in your codebase),\nbecause those are imported by their extensions.")),(0,o.kt)("h2",{id:"conditionals"},"Conditionals"),(0,o.kt)("p",null,"Sometimes, you may need to conditionally apply an enhancer or run an action. As\nan example, you may want to sort results differently based on the user's defined\nsort's direction. This can be done easily using the ",(0,o.kt)("inlineCode",{parentName:"p"},"when")," helper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { when } from 'foscia/core';\nimport { sortByDesc } from 'foscia/jsonapi';\n\naction()\n    .use(forModel(Post))\n    .use(when(displayLatestFirst, sortByDesc('createdAt')));\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"when")," returns a new enhancer or runner based on the given value's\n",(0,o.kt)("em",{parentName:"p"},"truthiness"),". It will execute the first enhancer/runner only if its value is\n",(0,o.kt)("em",{parentName:"p"},"truthy"),". You may pass the value as a factory function returning the value,\nand even a promise value. You may also pass a second enhancer/runner which\nwill only execute if the value is ",(0,o.kt)("em",{parentName:"p"},"falsy"),".\nEach callback arguments will receive the action as their first argument\nand the value as their second argument. Each callback may also be async,\nas any enhancers and runners."),(0,o.kt)("p",null,"Here are further examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { changed, create, oneOrFail, when } from 'foscia/core';\n\nconst post = fill(new Post(), userInputData);\n\naction()\n    .use(create(post))\n    .use(when(\n        () => /* compute a special value */,\n        (a, specialTruthyValue) => /* do something */,\n        (a, specialFalsyValue) => /* do something */,\n    ))\n    .run(when(\n        changed(post),\n        oneOrFail(),\n        () => post,\n    ));\n")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"You may hook on multiple events which occurs on action instance using the hook\nregistration function:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onPreparing"),": before context computation through enhancers dequeueing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onRunning"),": after context computation, before context runner execution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onSuccess"),": after context runner successful execution (no error thrown)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onError"),": after context runner failed execution (error thrown)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onFinally"),": after context runner successful or failed execution.")),(0,o.kt)("p",null,"To register a hook callback, you must use the registration enhancer on your\nbuilding action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n    onPreparing,\n    onRunning,\n    onSuccess,\n    onError,\n    onFinally,\n} from 'foscia/core';\n\naction().use(onPreparing(() => /* ... */));\naction().use(onRunning(({ context }) => /* ... */));\naction().use(onSuccess(({ context, result }) => /* ... */));\naction().use(onError(({ context, error }) => /* ... */));\naction().use(onFinally(({ context }) => /* ... */));\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Hooks callback may be async and will be ran sequentially (one by one, not\nparallelized).")),(0,o.kt)("p",null,"You can disable hook execution on a given action instance by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"withoutHooks")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withoutHooks } from 'foscia/core';\n\n// Retrieve a list of User instances without action hooks running.\nconst users = await withoutHooks(action(), async (a) => {\n    return await a.use(forModel(User)).run(all());\n});\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Foscia may also register hooks internally when using some enhancers. Those\nprovide some library features\n(",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/models#hooks"},(0,o.kt)("strong",{parentName:"a"},"models hooks")),", etc.). Be careful running\nactions without hooks, as those hooks will also be disable.")))}m.isMDXComponent=!0}}]);