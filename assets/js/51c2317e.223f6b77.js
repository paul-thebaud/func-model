"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[702],{9613:(e,n,i)=>{i.d(n,{Zo:()=>s,kt:()=>K});var t=i(9496);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var f=t.createContext({}),a=function(e){var n=t.useContext(f),i=n;return e&&(i="function"==typeof e?e(n):d(d({},n),e)),i},s=function(e){var n=a(e.components);return t.createElement(f.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,r=e.originalType,f=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=a(i),K=o,M=m["".concat(f,".").concat(K)]||m[K]||c[K]||r;return i?t.createElement(M,d(d({ref:n},s),{},{components:i})):t.createElement(M,d({ref:n},s))}));function K(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=i.length,d=new Array(r);d[0]=m;var l={};for(var f in n)hasOwnProperty.call(n,f)&&(l[f]=n[f]);l.originalType=e,l.mdxType="string"==typeof e?e:o,d[1]=l;for(var a=2;a<r;a++)d[a]=i[a];return t.createElement.apply(null,d)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3200:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(4250),o=(i(9496),i(9613));const r={id:"core.include",title:"Namespace: include",sidebar_label:"include",custom_edit_url:null},d=void 0,l={unversionedId:"api/func-client/namespaces/core.include",id:"api/func-client/namespaces/core.include",title:"Namespace: include",description:"core.include",source:"@site/docs/api/func-client/namespaces/core.include.md",sourceDirName:"api/func-client/namespaces",slug:"/api/func-client/namespaces/core.include",permalink:"/func-client/docs/api/func-client/namespaces/core.include",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core.include",title:"Namespace: include",sidebar_label:"include",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"forId",permalink:"/func-client/docs/api/func-client/namespaces/core.forId"},next:{title:"instance",permalink:"/func-client/docs/api/func-client/namespaces/core.instance"}},f={},a=[{value:"Variables",id:"variables",level:2},{value:"extension",id:"extension",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:a};function c(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core"},"core"),".include"),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"extension"},"extension"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"extension"),": ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#actionparsedextension"},(0,o.kt)("inlineCode",{parentName:"a"},"ActionParsedExtension")),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"include"),": <C, A, M",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"this"),": ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.Action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"C")," & ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#consumemodel"},(0,o.kt)("inlineCode",{parentName:"a"},"ConsumeModel")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"M"),">",">"," & ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", ...",(0,o.kt)("inlineCode",{parentName:"p"},"relations"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayableVariadic"),"<keyof ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelinferdefinition"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInferDefinition")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"M"),">"," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"K")," ? ",(0,o.kt)("inlineCode",{parentName:"p"},"K")," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"K")," & keyof ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelinferdefinition"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInferDefinition")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"M"),">"," ? ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelschema"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelSchema")),"<",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelinferdefinition"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInferDefinition")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"M"),">",">","[",(0,o.kt)("inlineCode",{parentName:"p"},"K"),"]"," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," ? ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," : ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelschema"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelSchema")),"<",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelinferdefinition"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelInferDefinition")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"M"),">",">","[",(0,o.kt)("inlineCode",{parentName:"p"},"K"),"]"," extends ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/modules/core#modelrelation"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelRelation")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"T"),">"," ? ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"[] ? ",(0,o.kt)("inlineCode",{parentName:"p"},"K")," ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : never : never : never}","`"," : never : never : never}","`"," : ",(0,o.kt)("inlineCode",{parentName:"p"},"K")," ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K ","|"," ","`","${K}.${keyof ModelInferDefinition<T","[number]",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T","[number]",">"," ? ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T","[number]",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : K ","|"," ","`","${K}.${keyof ModelInferDefinition<T",">"," extends K ? K extends string & K & keyof ModelInferDefinition<T",">"," ? ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends never ? never : ModelSchema<ModelInferDefinition<T",">",">","[K]"," extends ModelRelation<T",">"," ? T extends any[] ? K : K : never : never : never}","`"," : never : never : never}","`"," : never : never : never}","`"," : never : never : never}","`"," : ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"never"),">",") => ",(0,o.kt)("a",{parentName:"p",href:"/func-client/docs/api/func-client/classes/core.Action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"C"),">"," & ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"  }",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paul-thebaud/func-client/blob/5e8684e/src/core/actions/context/enhancers/include.ts#L29"},"src/core/actions/context/enhancers/include.ts:29")))}c.isMDXComponent=!0}}]);