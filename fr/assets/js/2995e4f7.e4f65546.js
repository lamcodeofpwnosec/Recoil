(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(151)),l={title:"waitForAllSettled(dependencies)",sidebar_label:"waitForAllSettled()"},i={unversionedId:"api-reference/utils/waitForAllSettled",id:"api-reference/utils/waitForAllSettled",isDocsHomePage:!1,title:"waitForAllSettled(dependencies)",description:"Un assistant de concurrence qui renvoie un ensemble de Loadables pour l'\xe9tat actuel des d\xe9pendances demand\xe9es. Il attend que toutes les d\xe9pendances soient soit une valeur ou une erreur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAllSettled.md",slug:"/api-reference/utils/waitForAllSettled",permalink:"/fr/docs/api-reference/utils/waitForAllSettled",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAllSettled.md",version:"current",sidebar_label:"waitForAllSettled()",sidebar:"docs",previous:{title:"waitForAll(dependencies)",permalink:"/fr/docs/api-reference/utils/waitForAll"},next:{title:"waitForNone(dependencies)",permalink:"/fr/docs/api-reference/utils/waitForNone"}},c=[],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un assistant de concurrence qui renvoie un ensemble de ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},Object(o.b)("inlineCode",{parentName:"a"},"Loadable"),"s")," pour l'\xe9tat actuel des d\xe9pendances demand\xe9es. Il attend que toutes les d\xe9pendances soient soit une valeur ou une erreur."),Object(o.b)("p",null,"Les d\xe9pendances peuvent \xeatre fournies sous forme de tableau de tuples ou de d\xe9pendances nomm\xe9es dans un objet."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAllSettled(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAllSettled(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"waitForAllSettled()")," est similaire \xe0 ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},Object(o.b)("inlineCode",{parentName:"a"},"waitForNone()")),", sauf qu'il attend qu'au moins une d\xe9pendance ait une valeur (ou une erreur) disponible au lieu de retourner imm\xe9diatement. "))}s.isMDXComponent=!0}}]);