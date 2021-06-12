(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(151)),i={title:"atomFamily(options)",sidebar_label:"atomFamily()"},l={unversionedId:"api-reference/utils/atomFamily",id:"api-reference/utils/atomFamily",isDocsHomePage:!1,title:"atomFamily(options)",description:"\u8fd4\u56de\u4e00\u4e2a\u8fd4\u56de\u53ef\u5199\u7684 RecoilState atom \u51fd\u6570\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/atomFamily.md",slug:"/api-reference/utils/atomFamily",permalink:"/zh-hans/docs/api-reference/utils/atomFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/atomFamily.md",version:"current",sidebar_label:"atomFamily()",sidebar:"docs",previous:{title:"useRecoilCallback(callback, deps)",permalink:"/zh-hans/docs/api-reference/core/useRecoilCallback"},next:{title:"selectorFamily(options)",permalink:"/zh-hans/docs/api-reference/utils/selectorFamily"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u8ba2\u9605",id:"\u8ba2\u9605",children:[]},{value:"\u6301\u4e45\u6027",id:"\u6301\u4e45\u6027",children:[]}],m={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u8fd4\u56de\u53ef\u5199\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atom")," \u51fd\u6570\u3002"),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function atomFamily<T, Parameter>({\n  key: string,\n\n  default:\n    | RecoilValue<T>\n    | Promise<T>\n    | T\n    | (Parameter => T | RecoilValue<T> | Promise<T>),\n\n  effects_UNSTABLE?:\n    | $ReadOnlyArray<AtomEffect<T>>\n    | (P => $ReadOnlyArray<AtomEffect<T>>),\n\n  dangerouslyAllowMutability?: boolean,\n}): Parameter => RecoilState<T>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," \u2014\u2014 \u4e00\u4e2a\u5728\u5185\u90e8\u7528\u6765\u6807\u8bc6 atom \u7684\u552f\u4e00\u5b57\u7b26\u4e32\u3002\u5728\u6574\u4e2a\u5e94\u7528\u4e2d\uff0c\u8be5\u5b57\u7b26\u4e32\u5fc5\u987b\u76f8\u5bf9\u4e8e\u5176\u4ed6 atom \u548c selector \u4fdd\u6301\u552f\u4e00\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"default")," \u2014\u2014 atom \u7684\u521d\u59cb\u503c\u3002\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a\u76f4\u63a5\u7684\u503c\uff0c\u4e00\u4e2a\u4ee3\u8868\u9ed8\u8ba4\u503c\u7684",Object(o.b)("inlineCode",{parentName:"li"},"RecoilValue")," \u6216 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise"),"\uff0c\u6216\u8005\u4e00\u4e2a\u83b7\u5f97\u9ed8\u8ba4\u503c\u7684\u51fd\u6570\u3002\u56de\u8c03\u51fd\u6570\u88ab\u4f20\u9012\u7ed9 ",Object(o.b)("inlineCode",{parentName:"li"},"atomFamily")," \u51fd\u6570\u88ab\u8c03\u7528\u65f6\u4f7f\u7528\u7684\u53c2\u6570\u7684\u526f\u672c\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"effects_UNSTABLE")," \u2014\u2014 \u4e00\u4e2a\u53ef\u9009\u7684\u6570\u7ec4\uff0c\u6216\u56de\u8c03\u51fd\u6570\uff0c\u7528\u4e8e\u6839\u636e ",Object(o.b)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects")," \u7684\u65cf\u53c2\u6570\u83b7\u53d6\u6570\u7ec4\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," \u2014\u2014 Recoil \u4f9d\u8d56 atom \u72b6\u6001\u7684\u53d8\u5316\u6765\u77e5\u9053\u4f55\u65f6\u901a\u77e5\u4f7f\u7528\u539f atom \u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002\u5982\u679c\u4e00\u4e2a atom \u7684\u503c\u53d1\u751f\u4e86\u53d8\u5f02\uff0c\u5b83\u53ef\u80fd\u4f1a\u7ed5\u8fc7\u8fd9\u4e2a\uff0c\u5e76\u5bfc\u81f4\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u800c\u4e0d\u6b63\u786e\u5730\u901a\u77e5\u8ba2\u9605\u7ec4\u4ef6\u3002\u4e3a\u4e86\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\uff0c\u6240\u6709\u5b58\u50a8\u7684\u503c\u90fd\u88ab\u51bb\u7ed3\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528\u8fd9\u4e2a\u9009\u9879\u6765\u8986\u76d6\u8fd9\u4e00\u70b9\u3002")),Object(o.b)("hr",null),Object(o.b)("p",null,"\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"atom")," \u662f\u4e00\u4e2a\u6709 ",Object(o.b)("em",{parentName:"p"},"Recoil")," \u7684\u72b6\u6001\u3002\u4e00\u4e2a atom \u662f\u7531\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u6bcf\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," \u521b\u5efa\u548c\u6ce8\u518c\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u7684\u72b6\u6001\u4e0d\u662f\u5168\u5c40\u7684\u5462\uff1f\u5982\u679c\u4f60\u7684\u72b6\u6001\u662f\u4e0e\u4e00\u4e2a\u63a7\u4ef6\u7684\u7279\u5b9a\u5b9e\u4f8b\uff0c\u6216\u4e0e\u4e00\u4e2a\u7279\u5b9a\u7684\u5143\u7d20\u76f8\u5173\u8054\u5462\uff1f\u4f8b\u5982\uff0c\u4e5f\u8bb8\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u662f\u4e00\u4e2a UI \u539f\u578b\u8bbe\u8ba1\u5de5\u5177\uff0c\u7528\u6237\u53ef\u4ee5\u52a8\u6001\u5730\u6dfb\u52a0\u5143\u7d20\uff0c\u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u72b6\u6001\uff0c\u6bd4\u5982\u8bf4\u5b83\u7684\u4f4d\u7f6e\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u5143\u7d20\u90fd\u4f1a\u6709\u81ea\u5df1\u7684\u72b6\u6001 atom\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5907\u5fd8\u5f55\u6a21\u5f0f\u81ea\u5df1\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u4f46\u662f\uff0c ",Object(o.b)("em",{parentName:"p"},"Recoil")," \u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u4e3a\u4f60\u63d0\u4f9b\u4e86\u8fd9\u79cd\u6a21\u5f0f\u3002\u4e00\u4e2a atom \u5bb6\u65cf\u4ee3\u8868\u4e00\u4e2a atom \u7684\u96c6\u5408\u3002\u5f53\u4f60\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u65f6\uff0c\u5b83\u5c06\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u6839\u636e\u4f60\u4f20\u5165\u7684\u53c2\u6570\u63d0\u4f9b ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," atom\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u672c\u8d28\u4e0a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4ece\u53c2\u6570\u5230 atom \u7684\u6620\u5c04\u3002\u4f60\u53ea\u9700\u8981\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u63d0\u4f9b\u4e00\u4e2a key\uff0c\u5b83\u5c06\u4e3a\u6bcf\u4e2a\u5e95\u5c42 atom \u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684 key\u3002\u8fd9\u4e9b atom \u7684 key \u53ef\u7528\u4e8e\u6301\u4e45\u5316\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u4e0d\u540c\u7684\u5e94\u7528\u6267\u884c\u4e2d\u4fdd\u6301\u7a33\u5b9a\u3002\u53c2\u6570\u4e5f\u53ef\u80fd\u5728\u4e0d\u540c\u7684\u8c03\u7528\u7ad9\u751f\u6210\uff0c\u6211\u4eec\u5e0c\u671b\u540c\u7b49\u7684\u53c2\u6570\u4f7f\u7528\u76f8\u540c\u7684\u5e95\u5c42 atom\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u53c2\u6570\uff0c\u6211\u4eec\u4f7f\u7528\u503c\u7b49\u4ef7\u6cd5\u800c\u4e0d\u662f\u5f15\u7528\u7b49\u4ef7\u6cd5\u3002\u8fd9\u5bf9\u53ef\u7528\u4e8e\u53c2\u6570\u7684\u7c7b\u578b\u8fdb\u884c\u4e86\u9650\u5236\u3002",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u63a5\u53d7\u539f\u59cb\u7c7b\u578b\uff0c\u6216\u6570\u7ec4\u6216\u5bf9\u8c61\uff0c\u5b83\u4eec\u53ef\u4ee5\u5305\u542b\u6570\u7ec4\u3001\u5bf9\u8c61\u6216\u539f\u59cb\u7c7b\u578b\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const elementPositionStateFamily = atomFamily({\n  key: 'ElementPosition',\n  default: [0, 0],\n});\n\nfunction ElementListItem({elementID}) {\n  const position = useRecoilValue(elementPositionStateFamily(elementID));\n  return (\n    <div>\n      Element: {elementID}\n      Position: {position}\n    </div>\n  );\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"atomFamily()")," \u4e0e\u7b80\u5355\u7684 ","[",Object(o.b)("inlineCode",{parentName:"p"},"atom()"),"]","\uff08/docs/api-reference/core/atom\uff09\u7684\u9009\u9879\u51e0\u4e4e\u76f8\u540c\u3002\u7136\u800c\uff0c\u9ed8\u8ba4\u503c\u4e5f\u53ef\u4ee5\u88ab\u53c2\u6570\u5316\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u53c2\u6570\u503c\u5e76\u8fd4\u56de\u5b9e\u9645\u7684\u9ed8\u8ba4\u503c\u3002\u6bd4\u5982\u8bf4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: param => defaultBasedOnParam(param),\n});\n")),Object(o.b)("p",null,"\u6216\u4f7f\u7528 ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},Object(o.b)("inlineCode",{parentName:"a"},"selectorFamily"))," \u4ee3\u66ff ",Object(o.b)("inlineCode",{parentName:"p"},"selector"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"default")," selector \u4e2d\u8bbf\u95ee\u53c2\u6570\u503c\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: selectorFamily({\n    key: 'MyAtom/Default',\n    get: param => ({get}) => {\n      return computeDefaultUsingParam(param);\n    },\n  }),\n});\n")),Object(o.b)("h2",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),Object(o.b)("p",null,"\u4e0e\u8bd5\u56fe\u7528\u6240\u6709\u5143\u7d20\u7684\u72b6\u6001\u56fe\u6765\u5b58\u50a8\u4e00\u4e2a\u5355\u72ec\u7684 atom \u76f8\u6bd4\uff0c\u4e3a\u6bcf\u4e2a\u5143\u7d20\u4f7f\u7528\u8fd9\u79cd\u6a21\u5f0f\u7684\u4e00\u4e2a\u597d\u5904\u662f\uff0c\u5b83\u4eec\u90fd\u4fdd\u6301\u7740\u5404\u81ea\u7684\u8ba2\u9605\u3002\u56e0\u6b64\uff0c\u66f4\u65b0\u4e00\u4e2a\u5143\u7d20\u7684\u503c\u5c06\u53ea\u5bfc\u81f4\u8ba2\u9605\u4e86\u8be5 atom \u7684 React \u7ec4\u4ef6\u66f4\u65b0\u3002"),Object(o.b)("h2",{id:"\u6301\u4e45\u6027"},"\u6301\u4e45\u6027"),Object(o.b)("p",null,"\u6301\u4e45 observer \u5c06\u628a\u6bcf\u4e2a\u53c2\u6570\u503c\u7684\u72b6\u6001\u6301\u4e45\u5316\u4e3a\u4e00\u4e2a\u72ec\u7279\u7684 atom\uff0c\u5e76\u6839\u636e\u6240\u4f7f\u7528\u7684\u53c2\u6570\u503c\u7684\u5e8f\u5217\u5316\u800c\u6709\u4e00\u4e2a\u72ec\u7279\u7684 key\u3002\u56e0\u6b64\uff0c\u53ea\u4f7f\u7528\u57fa\u5143\u6216\u5305\u542b\u57fa\u5143\u7684\u7b80\u5355\u590d\u5408\u5bf9\u8c61\u7684\u53c2\u6570\u662f\u5f88\u91cd\u8981\u7684\uff1b\u81ea\u5b9a\u4e49\u7c7b\u6216\u51fd\u6570\u662f\u4e0d\u5141\u8bb8\u7684\u3002"),Object(o.b)("p",null,"\u5141\u8bb8\u628a\u4e00\u4e2a\u7b80\u5355\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"atom"),' "\u5347\u7ea7" \u5230 ',Object(o.b)("inlineCode",{parentName:"p"},"atomFamily"),"\uff0c\u5e76\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u8f83\u65b0\u7248\u672c\u4e2d\u57fa\u4e8e\u76f8\u540c\u7684 key\u3002\u5982\u679c\u4f60\u8fd9\u6837\u505a\uff0c\u90a3\u4e48\u4efb\u4f55\u5e26\u6709\u65e7\u7684\u7b80\u5355 key \u7684\u6301\u4e45\u503c\u4ecd\u7136\u53ef\u4ee5\u88ab\u8bfb\u53d6\uff0c\u65b0\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u7684\u6240\u6709\u53c2\u6570\u503c\u5c06\u9ed8\u8ba4\u4e3a\u7b80\u5355 atom \u7684\u6301\u4e45\u72b6\u6001\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u6539\u53d8\u4e86\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," \u4e2d\u7684\u53c2\u6570\u683c\u5f0f\uff0c\u5b83\u5c06\u4e0d\u4f1a\u81ea\u52a8\u8bfb\u53d6\u6539\u53d8\u524d\u6301\u4e45\u5316\u7684\u5148\u524d\u7684\u503c\u3002\u7136\u800c\uff0c\u4f60\u53ef\u4ee5\u5728\u9ed8\u8ba4\u7684 selector \u6216\u9a8c\u8bc1\u5668\u4e2d\u6dfb\u52a0\u903b\u8f91\uff0c\u6839\u636e\u4ee5\u524d\u7684\u53c2\u6570\u683c\u5f0f\u67e5\u8be2\u6570\u503c\u3002\u6211\u4eec\u5e0c\u671b\u5728\u672a\u6765\u80fd\u5e2e\u52a9\u5b9e\u73b0\u8fd9\u79cd\u6a21\u5f0f\u7684\u81ea\u52a8\u5316\u3002"))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),p=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,d=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return n?r.a.createElement(d,l(l({ref:t},m),{},{components:n})):r.a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);