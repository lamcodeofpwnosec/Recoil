(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(151)),c={title:"useRecoilValue(state)",sidebar_label:"useRecoilValue()"},l={unversionedId:"api-reference/core/useRecoilValue",id:"api-reference/core/useRecoilValue",isDocsHomePage:!1,title:"useRecoilValue(state)",description:"Renvoie la valeur de l'\xe9tat Recoil donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValue.md",slug:"/api-reference/core/useRecoilValue",permalink:"/fr/docs/api-reference/core/useRecoilValue",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValue.md",version:"current",sidebar_label:"useRecoilValue()",sidebar:"docs",previous:{title:"useRecoilState(state)",permalink:"/fr/docs/api-reference/core/useRecoilState"},next:{title:"useSetRecoilState(state)",permalink:"/fr/docs/api-reference/core/useSetRecoilState"}},i=[{value:"Exemple",id:"exemple",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Renvoie la valeur de l'\xe9tat Recoil donn\xe9."),Object(o.b)("p",null,"Ce hook abonnera implicitement le composant \xe0 l'\xe9tat donn\xe9."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValue<T>(state: RecoilValue<T>): T;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": un ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},Object(o.b)("inlineCode",{parentName:"a"},"atome"))," ou ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},Object(o.b)("inlineCode",{parentName:"a"},"s\xe9lecteur")))),Object(o.b)("hr",null),Object(o.b)("p",null,"C'est le hook recommand\xe9 \xe0 utiliser lorsqu'un composant a l'intention de lire l'\xe9tat sans y \xe9crire, car ce hook fonctionne \xe0 la fois avec ",Object(o.b)("strong",{parentName:"p"},"l'\xe9tat en lecture seule")," et ",Object(o.b)("strong",{parentName:"p"},"l'\xe9tat inscriptible"),". Les atomes sont des \xe9tats inscriptibles tandis que les s\xe9lecteurs peuvent \xeatre en lecture seule ou en \xe9criture. Voir ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},Object(o.b)("inlineCode",{parentName:"a"},"selector()"))," pour plus d'informations."),Object(o.b)("p",null,"L'utilisation de ce hook dans un composant React abonnera le composant \xe0 restituer lorsque l'\xe9tat est mis \xe0 jour. Ce hook peut d\xe9clencher si l'\xe9tat a une erreur ou est en attente de r\xe9solution asynchrone. Veuillez consulter ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"ce guide"),"."),Object(o.b)("h3",{id:"exemple"},"Exemple"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilValue} from 'recoil';\n\nconst namesState = atom({\n  key: 'namesState',\n  default: ['', 'Ella', 'Chris', '', 'Paul'],\n});\n\nconst filteredNamesState = selector({\n  key: 'filteredNamesState',\n  get: ({get}) => get(namesState).filter((str) => str !== ''),\n});\n\nfunction NameDisplay() {\n  const names = useRecoilValue(namesState);\n  const filteredNames = useRecoilValue(filteredNamesState);\n\n  return (\n    <>\n      Original names: {names.join(',')}\n      <br />\n      Filtered names: {filteredNames.join(',')}\n    </>\n  );\n}\n")))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);