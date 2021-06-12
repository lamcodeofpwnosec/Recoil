(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{151:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||a;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(151)),c={title:"useRecoilSnapshot()",sidebar_label:"useRecoilSnapshot()"},i={unversionedId:"api-reference/core/useRecoilSnapshot",id:"api-reference/core/useRecoilSnapshot",isDocsHomePage:!1,title:"useRecoilSnapshot()",description:"\u6b64\u94a9\u5b50\u51fd\u6570\u5728\u6e32\u67d3\u671f\u95f4\u540c\u6b65\u8fd4\u56de\u4e00\u4e2a Snapshot \u5bf9\u8c61\uff0c\u5e76\u4e3a\u6240\u6709 Recoil \u72b6\u6001\u66f4\u6539\u8ba2\u9605\u8c03\u7528\u7ec4\u4ef6\u3002\u4f60\u6216\u8bb8\u4f1a\u60f3\u5c06\u6b64\u94a9\u5b50\u51fd\u6570\u7528\u4e8e\u8c03\u8bd5\u5de5\u5177\uff0c\u6216\u8005\u7528\u4e8e\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u56e0\u4e3a\u5728\u521d\u59cb\u6e32\u67d3\u671f\u95f4\uff0c\u6709\u9700\u8981\u62e5\u6709\u540c\u6b65\u72b6\u6001\u7684\u5730\u65b9\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilSnapshot.md",slug:"/api-reference/core/useRecoilSnapshot",permalink:"/zh-hans/docs/api-reference/core/useRecoilSnapshot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilSnapshot.md",version:"current",sidebar_label:"useRecoilSnapshot()",sidebar:"docs",previous:{title:"useRecoilTransactionObserver_UNSTABLE(callback)",permalink:"/zh-hans/docs/api-reference/core/useRecoilTransactionObserver"},next:{title:"useGotoRecoilSnapshot(snapshot)",permalink:"/zh-hans/docs/api-reference/core/useGotoRecoilSnapshot"}},p=[{value:"Link \u793a\u4f8b",id:"link-\u793a\u4f8b",children:[]}],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6b64\u94a9\u5b50\u51fd\u6570\u5728\u6e32\u67d3\u671f\u95f4\u540c\u6b65\u8fd4\u56de\u4e00\u4e2a ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(a.b)("inlineCode",{parentName:"a"},"Snapshot"))," \u5bf9\u8c61\uff0c\u5e76\u4e3a\u6240\u6709 Recoil \u72b6\u6001\u66f4\u6539\u8ba2\u9605\u8c03\u7528\u7ec4\u4ef6\u3002\u4f60\u6216\u8bb8\u4f1a\u60f3\u5c06\u6b64\u94a9\u5b50\u51fd\u6570\u7528\u4e8e\u8c03\u8bd5\u5de5\u5177\uff0c\u6216\u8005\u7528\u4e8e\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u56e0\u4e3a\u5728\u521d\u59cb\u6e32\u67d3\u671f\u95f4\uff0c\u6709\u9700\u8981\u62e5\u6709\u540c\u6b65\u72b6\u6001\u7684\u5730\u65b9\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilSnapshot(): Snapshot\n")),Object(a.b)("p",null,"\u8bf7\u614e\u91cd\u4f7f\u7528\u6b64\u94a9\u5b50\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3 ",Object(a.b)("em",{parentName:"p"},"\u6240\u6709")," \u7684 Recoil \u72b6\u6001\u53d8\u5316\u3002\u672a\u6765\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u4e3a\u63d0\u5347\u6027\u80fd\u63d0\u4f9b\u9632\u6296\u80fd\u529b\u3002"),Object(a.b)("h3",{id:"link-\u793a\u4f8b"},"Link \u793a\u4f8b"),Object(a.b)("p",null,"\u5b9a\u4e49\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"<LinkToNewView>")," \u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u6839\u636e\u5f53\u524d\u5df2\u6539\u53d8\u7684\u72b6\u6001\u6e32\u67d3\u4e00\u4e2a\u5e26\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"href")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"<a>")," \u3002\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d ",Object(a.b)("inlineCode",{parentName:"p"},"uriFromSnapshot()")," \u662f\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u7684\u51fd\u6570\uff0c\u5b83\u4f1a\u5bf9 URI \u4e2d\u7684\u5f53\u524d\u72b6\u6001\u8fdb\u884c\u7f16\u7801\uff0c\u5f53\u518d\u6b21\u52a0\u8f7d\u9875\u9762\u65f6\u53ef\u4ee5\u8fd8\u539f\u8fd9\u4e2a\u72b6\u6001\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function LinkToNewView() {\n  const snapshot = useRecoilSnapshot();\n  const newSnapshot = snapshot.map(({set}) => set(viewState, 'New View'));\n  return <a href={uriFromSnapshot(newSnapshot)}>Click Me!</a>;\n}\n")),Object(a.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002\u6211\u4eec\u5373\u5c06\u63d0\u4f9b\u4e00\u4e2a\u7c7b\u4f3c\u8fd9\u6837\u7684 helper \u65b9\u6cd5\uff0c\u7528\u4e8e\u5728\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u6301\u4e45\u5316\u5e93\u4e2d\u751f\u6210\u94fe\u63a5\uff0c\u5176\u66f4\u5177\u6269\u5c55\u6027\u4e14\u4f18\u5316\u66f4\u597d\u3002\u4f8b\u5982\uff0c\u5b83\u5c06\u52ab\u6301\u70b9\u51fb\u5904\u7406\u7a0b\u5e8f\u6765\u66f4\u65b0\u672c\u5730\u72b6\u6001\u4ee5\u66ff\u6362\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u3002"))}l.isMDXComponent=!0}}]);