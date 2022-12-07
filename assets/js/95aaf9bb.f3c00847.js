"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[637],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},208:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(9496),r=t(5924);const o="tabItem_IPoj";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},4210:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(4250),r=t(9496),o=t(5924),l=t(4375),i=t(4436),s=t(7883),c=t(4930);const u="tabList_xr86",d="tabItem_r4_W";function p(e){var n;const{lazy:t,block:l,defaultValue:p,values:m,groupId:h,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,i.l)(f,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,s.U)(),[b,w]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=N[h];null!=e&&e!==b&&f.some((n=>n.value===e))&&w(e)}const A=e=>{const n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==b&&(E(n),w(a),null!=h&&x(h,String(a)))},T=e=>{var n;let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:e=>C.push(e),onKeyDown:T,onClick:A},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":b===n})}),t??n)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})))))}function m(e){const n=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},1048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(4250),r=t(9496),o=t(9613);t(208),t(4210);function l(e){let{children:n,color:t}=e;return r.createElement("span",{className:`chip ${t&&`chip--${t}`}`},n)}function i(e){let{children:n,version:t,only:a,requires:o,provides:i}=e;return r.createElement("div",{style:{marginBottom:"12px"}},t&&r.createElement(l,null,t),a&&r.createElement(l,{color:"primary"},"only: ",a),o&&r.createElement(l,{color:"danger"},"requires: ",o),i&&r.createElement(l,{color:"success"},"provides: ",i),n)}const s={sidebar_position:3,description:"Build actions, discover enhancers and runners."},c="Actions",u={unversionedId:"essentials/actions",id:"essentials/actions",title:"Actions",description:"Build actions, discover enhancers and runners.",source:"@site/docs/essentials/actions.mdx",sourceDirName:"essentials",slug:"/essentials/actions",permalink:"/func-model/docs/essentials/actions",draft:!1,editUrl:"https://github.com/paul-thebaud/func-model/tree/main/website/docs/essentials/actions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Build actions, discover enhancers and runners."},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/func-model/docs/essentials/models"},next:{title:"Advanced",permalink:"/func-model/docs/category/advanced"}},d={},p=[{value:"Enhancing and running",id:"enhancing-and-running",level:3},{value:"Hooks",id:"hooks",level:3},{value:"Note on enhancers and runners",id:"note-on-enhancers-and-runners",level:2},{value:'<Chip color="primary">Work in progress</Chip> Available enhancers',id:"work-in-progress-available-enhancers",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"Example",id:"example",level:4},{value:"Arguments",id:"arguments",level:4},{value:"<code>model</code>",id:"model",level:3},{value:"Example",id:"example-1",level:4},{value:"Arguments",id:"arguments-1",level:4},{value:"<code>include</code>",id:"include",level:3},{value:"Example",id:"example-2",level:4},{value:"Arguments",id:"arguments-2",level:4},{value:"<code>fields</code>",id:"fields",level:3},{value:"Example",id:"example-3",level:4},{value:"Arguments",id:"arguments-3",level:4},{value:"<code>fieldsFor</code>",id:"fieldsfor",level:3},{value:"Example",id:"example-4",level:4},{value:"Arguments",id:"arguments-4",level:4},{value:"<code>sortBy</code>",id:"sortby",level:3},{value:"Example",id:"example-5",level:4},{value:"Arguments",id:"arguments-5",level:4},{value:"<code>sortByDesc</code>",id:"sortbydesc",level:3},{value:"Example",id:"example-6",level:4},{value:"Arguments",id:"arguments-6",level:4},{value:'<Chip color="primary">Work in progress</Chip>  Available runners',id:"work-in-progress--available-runners",level:2},{value:"<code>none</code>",id:"none",level:3},{value:"Example",id:"example-7",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>all</code>",id:"all",level:3},{value:"Example",id:"example-8",level:4},{value:"Returns",id:"returns-1",level:4}],m={toc:p};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions"},"Actions"),(0,o.kt)("admonition",{title:"What you'll learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Building actions"),(0,o.kt)("li",{parentName:"ul"},"Placing hooks on actions"),(0,o.kt)("li",{parentName:"ul"},"Available context enhancers"),(0,o.kt)("li",{parentName:"ul"},"Available context runners"))),(0,o.kt)("admonition",{title:"Requirements",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before reading this guide, you should have a working action factory. You can\nread the ",(0,o.kt)("a",{parentName:"p",href:"/docs/essentials/getting-started#your-first-actions"},(0,o.kt)("strong",{parentName:"a"},"getting started guide")),"\nto quickly create your own action factory.")),(0,o.kt)("h3",{id:"enhancing-and-running"},"Enhancing and running"),(0,o.kt)("p",null,"As stated in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/discover#concept"},"discover guide"),", actions are\ninstantiated through your action factory, evolved with context enhancers and\nran by context runners."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const posts = await action()\n  .use(model(Post))\n  .use(include('comments'))\n  .run(all());\n")),(0,o.kt)("p",null,"In the example above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"action()")," is your action factory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"model(Post)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"include('comments')")," are context enhancers which we ",(0,o.kt)("inlineCode",{parentName:"li"},"use")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"all()")," is a context runner which we ",(0,o.kt)("inlineCode",{parentName:"li"},"run"))),(0,o.kt)("p",null,"When you instantiate a new action, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," multiple context enhancers.\nThose enhancers will be queued until the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," call."),(0,o.kt)("p",null,"An enhancer take the action with a given context and enhancer its context. It\nmight use other enhancers. An enhancer may return an instance of an action\nor void."),(0,o.kt)("p",null,"A runner take the action with its context and use it to return a result. It\nmight use other enhancers and runners. A runner may return any result (\nincluding void, throwing error, etc.)."),(0,o.kt)("h3",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"Every action will trigger hooks when running. There are 4 hooks available.\nYou may register any hooks you want to use. The ",(0,o.kt)("inlineCode",{parentName:"p"},"hook")," method will\nregister an additional hook, whereas the ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," method will replace all\nexisting hooks by the given ones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"action()\n  .hook('onRunning', ({ context }) => /* ... */)\n  .hook('onSuccess', ({ context, result }) => /* ... */)\n  .hook('onError', ({ context, error }) => /* ... */)\n  .hook('onFinally', ({ context }) => /* ... */);\n")),(0,o.kt)("p",null,"You can also disable or enable an action instance hooks execution at any time.\nThis will also prevent any FuncModel hooks from executing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const myAction = action();\n// Disable hooks execution.\nmyAction.withoutHooks();\n// Re-enable hooks execution.\nmyAction.withHooks();\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"FuncModel will also register hooks when using some enhancers. Those will\nprovide some library features (models hooks, etc.).")),(0,o.kt)("h2",{id:"note-on-enhancers-and-runners"},"Note on enhancers and runners"),(0,o.kt)("p",null,"Any context enhancers or runners in this guide may:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l,{mdxType:"Chip"},"depend")," on a minimal package version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l,{color:"primary",mdxType:"Chip"},"only")," be available in a given use case (JSON:API, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l,{color:"success",mdxType:"Chip"},"provide")," a given context to next enhancers or runners"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(l,{color:"danger",mdxType:"Chip"},"require")," a given context from previous enhancers or runners")),(0,o.kt)("p",null,"Most runners will execute an action through the adapter."),(0,o.kt)("p",null,"The examples will omit imports of your action factories or models to\nprovide shorter examples."),(0,o.kt)("h2",{id:"work-in-progress-available-enhancers"},(0,o.kt)(l,{color:"primary",mdxType:"Chip"},"Work in progress")," Available enhancers"),(0,o.kt)("h3",{id:"context"},(0,o.kt)("inlineCode",{parentName:"h3"},"context")),(0,o.kt)("p",null,"Merge the given context into the action's current context.\n",(0,o.kt)("strong",{parentName:"p"},"The context is not deeply merged.")),(0,o.kt)("p",null,"This is the most basic context enhancer. It is used by a lot of FuncModel\nenhancers."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { context } from 'func-model/core';\n\naction().use(context({ method: 'GET', path: 'hello-world' }));\n")),(0,o.kt)("h4",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#actioncontext"},(0,o.kt)("inlineCode",{parentName:"a"},"{Partial<ActionContext>}"))," ",(0,o.kt)("inlineCode",{parentName:"li"},"contextToMerge"),"\nthe context to merge into the action's current context")),(0,o.kt)("h3",{id:"model"},(0,o.kt)("inlineCode",{parentName:"h3"},"model")),(0,o.kt)(i,{provides:"Definition, Model",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Target the given model.\nRegister the given model and its definition onto the action's current context."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { model } from 'func-model/core';\n\naction().use(model(Post));\n")),(0,o.kt)("h4",{id:"arguments-1"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#modeld-i"},(0,o.kt)("inlineCode",{parentName:"a"},"{Model<D, I>}"))," ",(0,o.kt)("inlineCode",{parentName:"li"},"modelToUse")," the model class to use")),(0,o.kt)("h3",{id:"include"},(0,o.kt)("inlineCode",{parentName:"h3"},"include")),(0,o.kt)(i,{requires:"Definition",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Eager load the given relations for the current model definition. It accepts\ndeep relations through dot notation. The new relations will be merged with the\nprevious ones."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { include } from 'func-model/core';\n\naction().use(include(['author', 'comments', 'comments.reactions']));\n")),(0,o.kt)("h4",{id:"arguments-2"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#modelrelationdotkeyd"},(0,o.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelRelationDotKey<D>>}")),(0,o.kt)("inlineCode",{parentName:"li"},"relations")," a relation or a set of relation to eager load")),(0,o.kt)("h3",{id:"fields"},(0,o.kt)("inlineCode",{parentName:"h3"},"fields")),(0,o.kt)(i,{only:"JSON:API",requires:"Model",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Select the given\n",(0,o.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sparse-fieldsets"},"JSON:API fieldsets"),"\nfor the current context's model. The new fieldsets will be merged with the\nprevious ones."),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { fields } from 'func-model/json-api';\n\naction().use(fields(['title', 'description']));\n")),(0,o.kt)("h4",{id:"arguments-3"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#modelvaluesd"},(0,o.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelKey<D>>}"))," ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldset")," a\nfield or a set of field to select for the current context's model")),(0,o.kt)("h3",{id:"fieldsfor"},(0,o.kt)("inlineCode",{parentName:"h3"},"fieldsFor")),(0,o.kt)(i,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Select the given\n",(0,o.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sparse-fieldsets"},"JSON:API fieldsets"),"\nfor the given model. The new fieldsets will be merged with the\nprevious ones."),(0,o.kt)("h4",{id:"example-4"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { fieldsFor } from 'func-model/json-api';\n\naction().use(fieldsFor(Post, ['title', 'description']));\n")),(0,o.kt)("h4",{id:"arguments-4"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#modelclassd"},(0,o.kt)("inlineCode",{parentName:"a"},"{ModelClass<D>}"))," ",(0,o.kt)("inlineCode",{parentName:"li"},"model")," the model\nto select the fieldsets for"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#modelvaluesd"},(0,o.kt)("inlineCode",{parentName:"a"},"{Arrayable<ModelKey<D>>}"))," ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldset")," a\nfield or a set of field to select for the given model")),(0,o.kt)("h3",{id:"sortby"},(0,o.kt)("inlineCode",{parentName:"h3"},"sortBy")),(0,o.kt)(i,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#fetching-sorting"},"Sort the JSON:API resource"),"\nby the given key and direction. The new sort will be merged with the\nprevious ones. ",(0,o.kt)("strong",{parentName:"p"},"Sorts priority are kept"),"."),(0,o.kt)("h4",{id:"example-5"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { sortBy } from 'func-model/json-api';\n\naction().use(sortBy('createdAt'));\n")),(0,o.kt)("h4",{id:"arguments-5"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string}")," ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," the key for the sort"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{'asc' | 'desc' = 'asc'}")," ",(0,o.kt)("inlineCode",{parentName:"li"},"direction")," the direction for the sort")),(0,o.kt)("h3",{id:"sortbydesc"},(0,o.kt)("inlineCode",{parentName:"h3"},"sortByDesc")),(0,o.kt)(i,{only:"JSON:API",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Shortcut for the ",(0,o.kt)("a",{parentName:"p",href:"#sortby"},(0,o.kt)("inlineCode",{parentName:"a"},"sortBy")," function")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"desc")," direction."),(0,o.kt)("h4",{id:"example-6"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { sortByDesc } from 'func-model/json-api';\n\naction().use(sortByDesc('createdAt'));\n")),(0,o.kt)("h4",{id:"arguments-6"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string}")," ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," the key for the sort")),(0,o.kt)("h2",{id:"work-in-progress--available-runners"},(0,o.kt)(l,{color:"primary",mdxType:"Chip"},"Work in progress"),"  Available runners"),(0,o.kt)("h3",{id:"none"},(0,o.kt)("inlineCode",{parentName:"h3"},"none")),(0,o.kt)(i,{requires:"Adapter",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Run the action and ignore the content of the result.\nAdapter errors are not caught and so may be thrown."),(0,o.kt)("h4",{id:"example-7"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { none } from 'func-model/core';\n\nawait action().run(none());\n")),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{Promise<void>}")),(0,o.kt)("h3",{id:"all"},(0,o.kt)("inlineCode",{parentName:"h3"},"all")),(0,o.kt)(i,{requires:"Adapter, Deserializer, Model",mdxType:"FunctionInfo"}),(0,o.kt)("p",null,"Run the action and deserialize an array of model's instance."),(0,o.kt)("h4",{id:"example-8"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { all } from 'func-model/core';\n\nconst posts = await action().run(all());\n")),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{Promise<I[]>}")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"I")," is an instance of the targeted model."))}h.isMDXComponent=!0}}]);