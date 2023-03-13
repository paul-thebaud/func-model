"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8717],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5153:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(9496),r=t(5924);const o={tabItem:"tabItem_oaqp"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},9407:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(1163),r=t(9496),o=t(5924),i=t(3642),s=t(3442),l=t(5506),c=t(2487),u=t(9473);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,c]=f({queryString:t,groupId:a}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var g=t(1517);const b={tabList:"tabList_PUic",tabItem:"tabItem_TlgZ"};function y(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==s&&(d(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function k(e){const n=(0,g.Z)();return r.createElement(x,(0,a.Z)({key:String(n)},e))}},7535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(1163),r=(t(9496),t(9613)),o=t(5153),i=t(9407);const s={sidebar_position:50,description:"Defining your own action enhancers and their associated extension."},l="Custom action enhancers",c={unversionedId:"advanced/custom-action-enhancers",id:"advanced/custom-action-enhancers",title:"Custom action enhancers",description:"Defining your own action enhancers and their associated extension.",source:"@site/docs/advanced/custom-action-enhancers.mdx",sourceDirName:"advanced",slug:"/advanced/custom-action-enhancers",permalink:"/foscia/docs/advanced/custom-action-enhancers",draft:!1,editUrl:"https://github.com/paul-thebaud/foscia/tree/main/website/docs/advanced/custom-action-enhancers.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,description:"Defining your own action enhancers and their associated extension."},sidebar:"docsSidebar",previous:{title:"Action factory configuration",permalink:"/foscia/docs/advanced/action-factory-configuration"},next:{title:"Custom action runners",permalink:"/foscia/docs/advanced/custom-action-runners"}},u={},d=[{value:"Goal",id:"goal",level:2},{value:"Defining the function",id:"defining-the-function",level:2},{value:"Using the function",id:"using-the-function",level:2},{value:"Defining the extension",id:"defining-the-extension",level:2},{value:"Transforming it to a runner",id:"transforming-it-to-a-runner",level:2}],p={toc:d},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-action-enhancers"},"Custom action enhancers"),(0,r.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Defining a custom action enhancer"),(0,r.kt)("li",{parentName:"ul"},"Providing an extension property to your enhancer"))),(0,r.kt)("p",null,"Foscia tries to be agnostic of your data source, so sometimes you may\nrequire a custom enhancer to avoid code duplication."),(0,r.kt)("p",null,"This is a simple guide on defining a custom enhancer, but you may also inspire\nfrom any existing Foscia enhancers."),(0,r.kt)("h2",{id:"goal"},"Goal"),(0,r.kt)("p",null,"Since Foscia is pagination agnostic, providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," enhancer is\nnot possible. Here is what we want our new ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," enhancer to do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the model just like the ",(0,r.kt)("inlineCode",{parentName:"li"},"find")," enhancer, but not a record ID"),(0,r.kt)("li",{parentName:"ul"},"Limit the pagination to the first page and one record only")),(0,r.kt)("p",null,"In this example, we will admit a JSON:API is used with the following query\nparameters working:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page[number]")," describes the number of the page to fetch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page[size]")," describes the count of records to fetch (aka. limit)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide is an enhancer version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," runner described in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-action-runners"},(0,r.kt)("strong",{parentName:"a"},"custom runners guide")),".")),(0,r.kt)("h2",{id:"defining-the-function"},"Defining the function"),(0,r.kt)("p",null,"Our implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," will target the model and paginate the context."),(0,r.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="action/enhancers/first.ts"',title:'"action/enhancers/first.ts"'},"import { Action, Model, ModelInstance, forModel } from 'foscia/core';\nimport { paginate } from 'foscia/jsonapi';\n\nexport default function first<\n    Context extends {},\n    ContextDefinition extends {},\n    ContextInstance extends ModelInstance<ContextDefinition>,\n    ContextModel extends Model<ContextDefinition, ContextInstance>,\n>(model: ContextModel) {\n    return (action: Action<Context>) =>\n        action.use(forModel(model)).use(paginate({ number: 1, size: 1 }));\n}\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="action/enhancers/first.ts"',title:'"action/enhancers/first.ts"'},"import { forModel } from 'foscia/core';\nimport { paginate } from 'foscia/jsonapi';\n\nexport default function first(model) {\n    return (action) =>\n        action.use(forModel(model)).use(paginate({ number: 1, size: 1 }));\n}\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that when defining custom enhancers or runners, you should always\ncorrectly define generic types. This is very important as it will allow the\ncontext propagation through other enhancers and runners.")),(0,r.kt)("h2",{id:"using-the-function"},"Using the function"),(0,r.kt)("p",null,"Once your enhancer is ready, you may use it like any other Foscia enhancer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { one } from 'foscia/core';\nimport action from './action';\nimport first from './action/enhancers/first';\nimport Post from './models/post';\n\nconst post = await action()\n  .use(first(Post))\n  .run(one());\n")),(0,r.kt)("h2",{id:"defining-the-extension"},"Defining the extension"),(0,r.kt)("p",null,"Our current enhancer can only be used through an import and the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," method\nof our action. To make it available for the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/actions#extensions"},"builder pattern style calls"),", we must define an\nextension for it."),(0,r.kt)("p",null,"There is currently a limitation of the TypeScript language (Higher Order types\nare not available for now) which forces us to declare each extension manually.\nThe goal of an extension definition is to strongly type the feature provided\nto our action (and so provide autocomplete, context propagation, etc.)."),(0,r.kt)("p",null,"Once your enhancer extension is ready, you will be able to use it\n",(0,r.kt)("a",{parentName:"p",href:"/docs/actions#extensions"},"as any other enhancers of Foscia"),"."),(0,r.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="action/enhancers/first.ts"',title:'"action/enhancers/first.ts"'},"import {\n    Action,\n    ActionParsedExtension,\n    ConsumeId,\n    ConsumeModel,\n    forModel,\n    makeEnhancersExtension,\n    Model,\n    ModelInstance,\n} from 'foscia/core';\nimport { paginate } from 'foscia/jsonapi';\n\n// Our previous enhancer code.\nexport default function first<\n    Context extends {},\n    ContextDefinition extends {},\n    ContextInstance extends ModelInstance<ContextDefinition>,\n    ContextModel extends Model<ContextDefinition, ContextInstance>,\n>(model: ContextModel) {\n    return (action: Action<Context>) =>\n        action.use(forModel(model)).use(paginate({ number: 1, size: 1 }));\n}\n\n// The extension typing.\ntype FirstEnhancerExtension = ActionParsedExtension<{\n    first<Context extends {}, Extension extends {}, ContextModel extends Model>(\n        this: Action<Context, Extension>,\n        model: ContextModel,\n    ): Action<Context & ConsumeModel<ContextModel> & ConsumeId, Extension>;\n}>;\n\n// The extension value.\nfirst.extension = makeEnhancersExtension({ first }) as FirstEnhancerExtension;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="action/enhancers/first.ts"',title:'"action/enhancers/first.ts"'},"import { forModel, makeEnhancersExtension } from 'foscia/core';\nimport { paginate } from 'foscia/jsonapi';\n\n// Our previous enhancer code.\nexport default function first(model) {\n    return (action) =>\n        action.use(forModel(model)).use(paginate({ number: 1, size: 1 }));\n}\n\n// The extension value.\nfirst.extension = makeEnhancersExtension({ first });\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Here again, correctly typing our enhancer extension is really important to get\ncontext and action's extension propagation.")),(0,r.kt)("h2",{id:"transforming-it-to-a-runner"},"Transforming it to a runner"),(0,r.kt)("p",null,"Wish ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," was not selecting a model but directly running the action\nand fetching a result?"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-action-runners"},"the custom runner guide")," which\ndescribe how to code a ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," action runner."))}f.isMDXComponent=!0}}]);