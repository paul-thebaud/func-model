"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4166],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},208:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9496),a=r(5924);const o="tabItem_IPoj";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},4210:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(4250),a=r(9496),o=r(5924),l=r(4375),i=r(4436),s=r(7883),c=r(4930);const u="tabList_xr86",p="tabItem_r4_W";function m(e){var t;const{lazy:r,block:l,defaultValue:m,values:d,groupId:f,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,s.U)(),[x,E]=(0,a.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=O[f];null!=e&&e!==x&&h.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,r=k.indexOf(t),n=h[r].value;n!==x&&(T(t),E(n),null!=f&&w(f,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=k.indexOf(e.currentTarget)+1;r=k[t]??k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;r=k[t]??k[k.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>k.push(e),onKeyDown:C,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},5834:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(9496);function a(e){let{children:t,color:r}=e;return n.createElement("span",{className:`chip ${r&&`chip--${r}`}`},t)}},6674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(4250),a=(r(9496),r(9613)),o=(r(208),r(4210),r(5834));const l={sidebar_position:1,description:"Common enhancers, runners or other utilities receipts."},i="Common receipts",s={unversionedId:"examples/common-receipts",id:"examples/common-receipts",title:"Common receipts",description:"Common enhancers, runners or other utilities receipts.",source:"@site/docs/examples/common-receipts.mdx",sourceDirName:"examples",slug:"/examples/common-receipts",permalink:"/func-client/docs/examples/common-receipts",draft:!1,editUrl:"https://github.com/paul-thebaud/func-client/tree/main/website/docs/examples/common-receipts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Common enhancers, runners or other utilities receipts."},sidebar:"docsSidebar",previous:{title:"Examples",permalink:"/func-client/docs/category/examples"},next:{title:"JSON:API blog CRUD",permalink:"/func-client/docs/examples/jsonapi-blog"}},c={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-receipts"},"Common receipts"),(0,a.kt)(o.Z,{color:"primary",mdxType:"Chip"},"Work in progress"))}m.isMDXComponent=!0}}]);