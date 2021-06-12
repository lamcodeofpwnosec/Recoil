(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(8),c=(r(0),r(151)),a={title:"isRecoilValue(value)",sidebar_label:"isRecoilValue()"},i={unversionedId:"api-reference/core/isRecoilValue",id:"api-reference/core/isRecoilValue",isDocsHomePage:!1,title:"isRecoilValue(value)",description:"Retourne true si value est soit un atome soit un s\xe9lecteur ou false sinon.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/isRecoilValue.md",slug:"/api-reference/core/isRecoilValue",permalink:"/fr/docs/api-reference/core/isRecoilValue",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/isRecoilValue.md",version:"current",sidebar_label:"isRecoilValue()",sidebar:"docs",previous:{title:"useGetRecoilValueInfo_UNSTABLE()",permalink:"/fr/docs/api-reference/core/useGetRecoilValueInfo"},next:{title:"useRecoilCallback(callback, deps)",permalink:"/fr/docs/api-reference/core/useRecoilCallback"}},l=[{value:"Example",id:"example",children:[]}],u={toc:l};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Retourne ",Object(c.b)("inlineCode",{parentName:"p"},"true")," si ",Object(c.b)("inlineCode",{parentName:"p"},"value")," est soit un atome soit un s\xe9lecteur ou ",Object(c.b)("inlineCode",{parentName:"p"},"false")," sinon."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function isRecoilValue(value: mixed): boolean\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, isRecoilValue} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nconst strCounter = selector({\n  key: 'myCounterStr',\n  get: ({get}) => String(get(counter)),\n});\n\nisRecoilValue(counter); // true\nisRecoilValue(strCounter); // true\n\nisRecoilValue(5); // false\nisRecoilValue({}); // false\n")))}s.isMDXComponent=!0},151:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=t,m=p["".concat(a,".").concat(b)]||p[b]||f[b]||c;return r?o.a.createElement(m,i(i({ref:n},u),{},{components:r})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);