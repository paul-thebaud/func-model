"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5343],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?a.createElement(p,l(l({ref:n},m),{},{components:t})):a.createElement(p,l({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6223:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(8028),r=t(9496),i=t(5924),l=t(6477),o=t(6129),c=t(4989);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_J8e2",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_SwAu"};function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===n||!t)return r.createElement(n,(0,a.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:t});return r.createElement(n,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:t}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${t}`,"aria-label":u,title:u},"\u200b"))}},982:(e,n,t)=>{t.d(n,{Z:()=>z});var a=t(9496),r=t(9613),i=t(8028),l=t(1577);var o=t(49);var c=t(4989);var s=t(5924),m=t(2764),d=t(5647);const u={details:"details_JcEy",isBrowser:"isBrowser_k0yV",collapsibleContent:"collapsibleContent_CNSP"};function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function h(e){let{summary:n,children:t,...r}=e;const l=(0,m.Z)(),o=(0,a.useRef)(null),{collapsed:c,setCollapsed:h}=(0,d.u)({initialState:!r.open}),[v,g]=(0,a.useState)(r.open),E=a.isValidElement(n)?n:a.createElement("summary",null,n??"Details");return a.createElement("details",(0,i.Z)({},r,{ref:o,open:v,"data-collapsed":c,className:(0,s.Z)(u.details,l&&u.isBrowser,r.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&p(n,o.current)&&(e.preventDefault(),c?(h(!1),g(!0)):h(!0))}}),E,a.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{h(e),g(!e)}},a.createElement("div",{className:u.collapsibleContent},t)))}const v={details:"details_rT3W"},g="alert alert--info";function E(e){let{...n}=e;return a.createElement(h,(0,i.Z)({},n,{className:(0,s.Z)(g,v.details,n.className)}))}var b=t(6223);function y(e){return a.createElement(b.Z,e)}const C={containsTaskList:"containsTaskList_BTIw"};const N={img:"img_ABpA"};var O=t(2466),Z=t(6477);const L="admonition_l04S",k="admonitionHeading_giW_",x="admonitionIcon_JA_F",T="admonitionContent_YxFr";const H={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(Z.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},w={secondary:"note",important:"info",success:"tip",warning:"danger"};function _(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:r}}(e.children);return{...e,title:e.title??n,children:t}}const S={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(l.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(E,(0,i.Z)({},e,{summary:t}),r)},ul:function(e){return a.createElement("ul",(0,i.Z)({},e,{className:(n=e.className,(0,s.Z)(n,n?.includes("contains-task-list")&&C.containsTaskList))}));var n},img:function(e){return a.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,N.img))}));var n},h1:e=>a.createElement(y,(0,i.Z)({as:"h1"},e)),h2:e=>a.createElement(y,(0,i.Z)({as:"h2"},e)),h3:e=>a.createElement(y,(0,i.Z)({as:"h3"},e)),h4:e=>a.createElement(y,(0,i.Z)({as:"h4"},e)),h5:e=>a.createElement(y,(0,i.Z)({as:"h5"},e)),h6:e=>a.createElement(y,(0,i.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:r,icon:i}=_(e),l=function(e){const n=w[e]??e,t=H[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),H.info)}(t),o=r??l.label,{iconComponent:c}=l,m=i??a.createElement(c,null);return a.createElement("div",{className:(0,s.Z)(O.k.common.admonition,O.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,L)},a.createElement("div",{className:k},a.createElement("span",{className:x},m),o),a.createElement("div",{className:T},n))},mermaid:()=>null};function z(e){let{children:n}=e;return a.createElement(r.Zo,{components:S},n)}},3437:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(8028),r=t(9496),i=t(5924),l=t(5216);const o={tableOfContents:"tableOfContents_Clu8",docItemContainer:"docItemContainer_cSzX"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return r.createElement("div",{className:(0,i.Z)(o.tableOfContents,"thin-scrollbar",n)},r.createElement(l.Z,(0,a.Z)({},t,{linkClassName:c,linkActiveClassName:s})))}},5216:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(8028),r=t(9496),i=t(6129);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):a.push(r)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,r.useRef)(void 0),t=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let r=n;r<=t;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=s(o,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?r.createElement("ul",{className:i?void 0:t},n.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=r.memo(u);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...p}=e;const h=(0,i.L)(),v=m??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,r.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:g}}),[c,s,v,g])),r.createElement(f,(0,a.Z)({toc:E,className:t,linkClassName:c},p))}}}]);