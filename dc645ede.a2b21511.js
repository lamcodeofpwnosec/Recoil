(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{154:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(1),o=t(6),c=(t(0),t(164)),a={title:"errorSelector(message)",sidebar_label:"errorSelector()"},i={id:"api-reference/utils/errorSelector",title:"errorSelector(message)",description:"A [selector](/docs/api-reference/core/selector) which always throws the provided error",source:"@site/docs/api-reference/utils/errorSelector.md",permalink:"/docs/api-reference/utils/errorSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/errorSelector.md",sidebar_label:"errorSelector()",sidebar:"someSidebar",previous:{title:"constSelector(constant)",permalink:"/docs/api-reference/utils/constSelector"},next:{title:"waitForAll(dependencies)",permalink:"/docs/api-reference/utils/waitForAll"}},l=[{value:"Example",id:"example",children:[]}],p={rightToc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/selector"}),"selector")," which always throws the provided error"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function errorSelector(message: string): RecoilValueReadOnly\n")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const myAtom = atom({\n  key: 'My Atom',\n  default: errorSelector('Attempt to use Atom before initialization'),\n});\n")))}s.isMDXComponent=!0},164:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},u=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||c;return t?o.a.createElement(d,i({ref:r},p,{components:t})):o.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);