(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),c=(n(0),n(151)),o={title:"useRecoilCallback(callback, deps)",sidebar_label:"useRecoilCallback()"},l={unversionedId:"api-reference/core/useRecoilCallback",id:"api-reference/core/useRecoilCallback",isDocsHomePage:!1,title:"useRecoilCallback(callback, deps)",description:"\u8fd9\u4e2a\u94a9\u5b50\u7c7b\u4f3c\u4e8e useCallback()\uff0c\u4f46\u5c06\u4e3a\u4f60\u7684\u56de\u8c03\u63d0\u4f9b\u4e00\u4e2a API\uff0c\u4ee5\u4fbf\u4e0e Recoil \u72b6\u6001\u4e00\u8d77\u5de5\u4f5c\u3002\u8fd9\u4e2a\u94a9\u5b50\u53ef\u4ee5\u7528\u6765\u6784\u9020\u4e00\u4e2a\u56de\u8c03\uff0c\u8fd9\u4e2a\u56de\u8c03\u53ef\u4ee5\u8bbf\u95ee Recoil \u72b6\u6001\u7684\u53ea\u8bfb Snapshot\uff0c\u5e76\u4e14\u80fd\u591f\u5f02\u6b65\u66f4\u65b0\u5f53\u524d\u7684 Recoil \u72b6\u6001\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilCallback.md",slug:"/api-reference/core/useRecoilCallback",permalink:"/zh-hans/docs/api-reference/core/useRecoilCallback",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilCallback.md",version:"current",sidebar_label:"useRecoilCallback()",sidebar:"docs",previous:{title:"isRecoilValue(value)",permalink:"/zh-hans/docs/api-reference/core/isRecoilValue"},next:{title:"atomFamily(options)",permalink:"/zh-hans/docs/api-reference/utils/atomFamily"}},i=[{value:"\u61d2\u8bfb\u53d6\u793a\u4f8b",id:"\u61d2\u8bfb\u53d6\u793a\u4f8b",children:[]}],b={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8fd9\u4e2a\u94a9\u5b50\u7c7b\u4f3c\u4e8e ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(c.b)("em",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"em"},"useCallback()"))),"\uff0c\u4f46\u5c06\u4e3a\u4f60\u7684\u56de\u8c03\u63d0\u4f9b\u4e00\u4e2a API\uff0c\u4ee5\u4fbf\u4e0e Recoil \u72b6\u6001\u4e00\u8d77\u5de5\u4f5c\u3002\u8fd9\u4e2a\u94a9\u5b50\u53ef\u4ee5\u7528\u6765\u6784\u9020\u4e00\u4e2a\u56de\u8c03\uff0c\u8fd9\u4e2a\u56de\u8c03\u53ef\u4ee5\u8bbf\u95ee Recoil \u72b6\u6001\u7684\u53ea\u8bfb ",Object(c.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(c.b)("inlineCode",{parentName:"a"},"Snapshot")),"\uff0c\u5e76\u4e14\u80fd\u591f\u5f02\u6b65\u66f4\u65b0\u5f53\u524d\u7684 Recoil \u72b6\u6001\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u8fd9\u79cd\u94a9\u5b50\u7684\u4e00\u4e9b\u60c5\u51b5\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5f02\u6b65\u8bfb\u53d6 Recoil \u72b6\u6001\uff0c\u800c\u65e0\u9700\u8ba2\u9605 React \u7ec4\u4ef6\u5728\u539f\u5b50\u6216\u9009\u62e9\u5668\u66f4\u65b0\u65f6\u91cd\u65b0\u6e32\u67d3\u3002"),Object(c.b)("li",{parentName:"ul"},"\u628a\u6602\u8d35\u7684\u67e5\u8be2\u5ef6\u8fdf\u5230\u4e00\u4e2a\u4f60\u4e0d\u60f3\u5728\u6e32\u67d3\u65f6\u6267\u884c\u7684\u5f02\u6b65\u64cd\u4f5c\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5728\u4f60\u60f3\u8bfb\u53d6\u6216\u5199\u5165 Recoil \u72b6\u6001\u7684\u5730\u65b9\u6267\u884c\u526f\u4f5c\u7528\u3002"),Object(c.b)("li",{parentName:"ul"},"\u52a8\u6001\u66f4\u65b0\u4e00\u4e2a\u539f\u5b50\u6216\u9009\u62e9\u5668\uff0c\u6211\u4eec\u53ef\u80fd\u4e0d\u77e5\u9053\u5728\u6e32\u67d3\u65f6\u8981\u66f4\u65b0\u54ea\u4e2a\u539f\u5b50\u6216\u9009\u62e9\u5668\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528 ",Object(c.b)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},Object(c.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),"\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/guides/asynchronous-data-queries#pre-fetching"},"Pre-fetching")," \u6e32\u67d3\u524d\u7684\u6570\u636e\u3002")),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"type CallbackInterface = {\n  snapshot: Snapshot,\n  gotoSnapshot: Snapshot => void,\n  set: <T>(RecoilState<T>, (T => T) | T) => void,\n  reset: <T>(RecoilState<T>) => void,\n};\n\nfunction useRecoilCallback<Args, ReturnValue>(\n  callback: CallbackInterface => (...Args) => ReturnValue,\n  deps?: $ReadOnlyArray<mixed>,\n): (...Args) => ReturnValue\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"callback"))," - \u7528\u6237\u56de\u8c03\u51fd\u6570\uff0c\u6709\u4e00\u4e2a\u63d0\u4f9b\u56de\u8c03\u63a5\u53e3\u7684\u5305\u88c5\u51fd\u6570\u3002\u6539\u53d8\u72b6\u6001\u7684\u56de\u8c03\u5c06\u88ab\u6392\u961f\uff0c\u4ee5\u5f02\u6b65\u66f4\u65b0\u5f53\u524d\u7684 Recoil \u72b6\u6001\u3002\u5c01\u88c5\u51fd\u6570\u7684\u7c7b\u578b\u7b7e\u540d\u4e0e\u8fd4\u56de\u7684\u56de\u8c03\u51fd\u6570\u7684\u7c7b\u578b\u7b7e\u540d\u76f8\u5339\u914d\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"deps"))," - \u7528\u4e8e\u8bb0\u5fc6\u56de\u8c03\u7684\u4e00\u7ec4\u53ef\u9009\u7684\u4f9d\u8d56\u9879\u3002\u548c ",Object(c.b)("inlineCode",{parentName:"li"},"useCallback()")," \u4e00\u6837\uff0c\u4ea7\u751f\u7684\u56de\u8c03\u9ed8\u8ba4\u4e0d\u4f1a\u88ab\u5907\u5fd8\uff0c\u6bcf\u6b21\u6e32\u67d3\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002\u4f60\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u7a7a\u6570\u7ec4\uff0c\u4ee5\u59cb\u7ec8\u8fd4\u56de\u76f8\u540c\u7684\u51fd\u6570\u5b9e\u4f8b\u3002\u5982\u679c\u4f60\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"deps")," \u6570\u7ec4\u4e2d\u4f20\u9012\u6570\u503c\uff0c\u5982\u679c\u4efb\u4f55\u5bf9 dep \u7684\u5f15\u7528\u5e73\u7b49\u6027\u53d1\u751f\u53d8\u5316\uff0c\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u5c06\u88ab\u4f7f\u7528\u3002\u7136\u540e\uff0c\u8fd9\u4e9b\u503c\u53ef\u4ee5\u5728\u4f60\u7684\u56de\u8c03\u4e3b\u4f53\u4e2d\u4f7f\u7528\u800c\u4e0d\u4f1a\u53d8\u8d28\u3002\u53c2\u89c1 ",Object(c.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(c.b)("inlineCode",{parentName:"a"},"useCallback"))," \u4f60\u53ef\u4ee5 ",Object(c.b)("a",{parentName:"li",href:"/docs/introduction/installation#eslint"},"\u66f4\u65b0 eslint")," \u6765\u5e2e\u52a9\u786e\u4fdd\u8fd9\u4e00\u70b9\u88ab\u6b63\u786e\u4f7f\u7528\u3002")),Object(c.b)("p",null,"\u56de\u8c03\u63a5\u53e3\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"snapshot"))," - ",Object(c.b)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot"},Object(c.b)("inlineCode",{parentName:"a"},"Snapshot"))," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ea\u8bfb\u7684 Recoil \u539f\u5b50\u72b6\u6001\uff0c\u5f53\u56de\u8c03\u7684\u5f53\u524d\u4e8b\u52a1\u5f00\u59cb\u65f6\uff0c\u5b83\u4e0e React \u6279\u6b21\u4e00\u8d77\u63d0\u4ea4\u3002 \u867d\u7136\u539f\u5b50\u503c\u662f\u9759\u6001\u7684\uff0c\u4f46\u5f02\u6b65\u9009\u62e9\u5668\u53ef\u80fd\u4ecd\u5728\u7b49\u5f85\u6216\u89e3\u51b3\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"gotoSnapshot"))," - Enqueue \u66f4\u65b0\u5168\u5c40\u72b6\u6001\u4ee5\u5339\u914d\u63d0\u4f9b\u7684 ",Object(c.b)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot"},Object(c.b)("inlineCode",{parentName:"a"},"Snapshot")),"\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"set"))," - Enqueue \u8bbe\u7f6e\u539f\u5b50\u6216\u9009\u62e9\u5668\u7684\u503c\u3002\u50cf\u5176\u4ed6\u5730\u65b9\u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u63d0\u4f9b\u65b0\u7684\u503c\uff0c\u6216\u8005\u63d0\u4f9b\u4e00\u4e2a\u8fd4\u56de\u65b0\u503c\u5e76\u5c06\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u7684\u66f4\u65b0\u5668\u51fd\u6570\u3002\u5f53\u524d\u503c\u4ee3\u8868\u5f53\u524d\u4e8b\u52a1\u4e2d\u8fc4\u4eca\u4e3a\u6b62\u6240\u6709\u5176\u4ed6\u6392\u961f\u7684\u72b6\u6001\u53d8\u5316\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"reset"))," - \u5c06\u539f\u5b50\u6216\u9009\u62e9\u5668\u7684\u503c\u91cd\u7f6e\u4e3a\u5176\u9ed8\u8ba4\u503c\u3002")),Object(c.b)("h3",{id:"\u61d2\u8bfb\u53d6\u793a\u4f8b"},"\u61d2\u8bfb\u53d6\u793a\u4f8b"),Object(c.b)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"useRecoilCallback()"))," \u6765\u61d2\u8bfb\u53d6 Recoil \u72b6\u6001\uff0c\u800c\u4e0d\u8ba2\u9605\u7ec4\u4ef6\u4ee5\u5728\u72b6\u6001\u66f4\u6539\u65f6\u91cd\u65b0\u5448\u73b0\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilCallback} from 'recoil';\n\nconst itemsInCart = atom({\n  key: 'itemsInCart',\n  default: 0,\n});\n\nfunction CartInfoDebug() {\n  const logCartItems = useRecoilCallback(({snapshot}) => async () => {\n    const numItemsInCart = await snapshot.getPromise(itemsInCart);\n    console.log('\u8d2d\u7269\u8f66\u4e2d\u5185\u5bb9\uff1a', numItemsInCart);\n  });\n\n  return (\n    <div>\n      <button onClick={logCartItems}>\u8bb0\u5f55\u8d2d\u7269\u8f66\u5185\u5bb9</button>\n    </div>\n  );\n}\n")))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);