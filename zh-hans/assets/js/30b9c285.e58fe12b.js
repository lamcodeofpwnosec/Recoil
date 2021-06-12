(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return h})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return y}));var o=n(3),r=n(8),a=n(0),c=n.n(a),s=n(151),i=n(218);const u=Object(i.atom)({key:"textState",default:""}),l=Object(i.selector)({key:"charCountState",get:({get:e})=>e(u).length});function d(){return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement(p,null))}function p(){const e=Object(i.useRecoilValue)(l);return c.a.createElement(c.a.Fragment,null,"Character Count: ",e)}function f(){const[e,t]=Object(i.useRecoilState)(u);return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:e,onChange:e=>{t(e.target.value)}}),c.a.createElement("br",null),"Echo: ",e)}var b=function(){return c.a.createElement(i.RecoilRoot,null,c.a.createElement(d,null))},m={title:"\u5feb\u901f\u4e0a\u624b"},h={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u4e0a\u624b",description:"Create React App",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",slug:"/introduction/getting-started",permalink:"/zh-hans/docs/introduction/getting-started",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",version:"current",sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/zh-hans/docs/introduction/installation"},next:{title:"\u7b80\u4ecb",permalink:"/zh-hans/docs/basic-tutorial/intro"}},g=[{value:"Create React App",id:"create-react-app",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"RecoilRoot",id:"recoilroot",children:[]},{value:"Atom",id:"atom",children:[]},{value:"Selector",id:"selector",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],S={toc:g};function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"create-react-app"},"Create React App"),Object(s.b)("p",null,"Recoil \u662f React \u7684\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u5728 React \u5de5\u7a0b\u4e2d\u5b89\u88c5\u5e76\u4f7f\u7528 Recoil\u3002\u521b\u5efa React \u9879\u76ee\u6700\u4e3a\u63a8\u8350\u7684\u65b9\u5f0f\u662f\u4f7f\u7528 ",Object(s.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app#creating-an-app"},"Create React App"),"\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},Object(s.b)("inlineCode",{parentName:"a"},"npx"))," \u662f npm 5.2 \u7248\u672c\u4e4b\u540e\u652f\u6301\u7684 package \u8fd0\u884c\u5de5\u5177\uff0c\u8bf7\u53c2\u9605 ",Object(s.b)("a",{parentName:"p",href:"https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"},"npm \u76f8\u5173\u6587\u6863\u7684\u4ecb\u7ecd"),"\u3002")),Object(s.b)("p",null,"\u6709\u5f88\u591a\u79cd\u65b9\u5f0f\u5b89\u88c5 Create React App\uff0c\u5177\u4f53\u53c2\u89c1",Object(s.b)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app#creating-an-app"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),Object(s.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(s.b)("p",null,"\u4f7f\u7528 ",Object(s.b)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm")," \u5b89\u88c5 Recoil \u7684\u6700\u65b0\u7248\u672c\u3002\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"npm install recoil\n")),Object(s.b)("p",null,"\u6216\u8005\u4f7f\u7528 ",Object(s.b)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),"\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"yarn add recoil\n")),Object(s.b)("p",null,"\u6216\u8005\u4f7f\u7528 ",Object(s.b)("a",{href:"https://cloud.google.com/community/tutorials/install-bower-dependencies-on-google-app-engine",target:"_blank"},"bower"),"\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"bower install --save recoil\n")),Object(s.b)("h2",{id:"recoilroot"},"RecoilRoot"),Object(s.b)("p",null,"\u5982\u9700\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Recoil\uff0c\u5219\u53ef\u4ee5\u5c06 ",Object(s.b)("inlineCode",{parentName:"p"},"RecoilRoot")," \u653e\u7f6e\u5728\u7236\u7ec4\u4ef6\u7684\u67d0\u4e2a\u4f4d\u7f6e\u3002\u5c06\u4ed6\u8bbe\u4e3a\u6839\u7ec4\u4ef6\u4e3a\u6700\u4f73\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {\n  RecoilRoot,\n  atom,\n  selector,\n  useRecoilState,\n  useRecoilValue,\n} from 'recoil';\n\nfunction App() {\n  return (\n    <RecoilRoot>\n      <CharacterCounter />\n    </RecoilRoot>\n  );\n}\n")),Object(s.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5b9e\u73b0 ",Object(s.b)("inlineCode",{parentName:"p"},"CharacterCounter")," \u7ec4\u4ef6\u3002"),Object(s.b)("h2",{id:"atom"},"Atom"),Object(s.b)("p",null,"\u4e00\u4e2a ",Object(s.b)("strong",{parentName:"p"},"atom")," \u4ee3\u8868\u4e00\u4e2a",Object(s.b)("strong",{parentName:"p"},"\u72b6\u6001"),"\u3002Atom \u53ef\u5728\u4efb\u610f\u7ec4\u4ef6\u4e2d\u8fdb\u884c\u8bfb\u5199\u3002\u8bfb\u53d6 atom \u503c\u7684\u7ec4\u4ef6\u9690\u5f0f\u8ba2\u9605\u4e86\u8be5 atom\uff0c\u56e0\u6b64\u4efb\u4f55 atom \u7684\u66f4\u65b0\u90fd\u5c06\u81f4\u4f7f\u4f7f\u7528\u5bf9\u5e94 atom \u7684\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const textState = atom({\n  key: 'textState', // unique ID (with respect to other atoms/selectors)\n  default: '', // default value (aka initial value)\n});\n")),Object(s.b)("p",null,"\u5728\u9700\u8981\u4f7f\u7528\u7684\u7ec4\u4ef6\u4e2d\uff0c\u4f60\u5e94\u8be5\u5f15\u5165\u5e76\u4f7f\u7528 ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilState()"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'function CharacterCounter() {\n  return (\n    <div>\n      <TextInput />\n      <CharacterCount />\n    </div>\n  );\n}\n\nfunction TextInput() {\n  const [text, setText] = useRecoilState(textState);\n\n  const onChange = (event) => {\n    setText(event.target.value);\n  };\n\n  return (\n    <div>\n      <input type="text" value={text} onChange={onChange} />\n      <br />\n      Echo: {text}\n    </div>\n  );\n}\n')),Object(s.b)("h2",{id:"selector"},"Selector"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"selector")," \u4ee3\u8868\u4e00\u4e2a",Object(s.b)("strong",{parentName:"p"},"\u6d3e\u751f\u72b6\u6001"),"\uff0c\u6d3e\u751f\u72b6\u6001\u662f\u72b6\u6001\u7684",Object(s.b)("strong",{parentName:"p"},"\u8f6c\u6362"),"\u3002\u4f60\u53ef\u4ee5\u5c06\u6d3e\u751f\u72b6\u6001\u89c6\u4e3a\u5c06\u72b6\u6001\u4f20\u9012\u7ed9\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4fee\u6539\u7ed9\u5b9a\u72b6\u6001\u7684\u7eaf\u51fd\u6570\u7684\u8f93\u51fa\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"const charCountState = selector({\n  key: 'charCountState', // unique ID (with respect to other atoms/selectors)\n  get: ({get}) => {\n    const text = get(textState);\n\n    return text.length;\n  },\n});\n")),Object(s.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," \u7684 hook\uff0c\u6765\u8bfb\u53d6 ",Object(s.b)("inlineCode",{parentName:"p"},"charCountState")," \u7684\u503c\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function CharacterCount() {\n  const count = useRecoilValue(charCountState);\n\n  return <>Character Count: {count}</>;\n}\n")),Object(s.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(s.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5b8c\u6574\u9879\u76ee\u793a\u4f8b\u3002"),Object(s.b)(b,{mdxType:"GettingStarted"}))}y.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.a.createElement(b,s(s({ref:t},u),{},{components:n})):r.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(0)),a=o(n(26)),c={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}},s=function(e){return!!e&&"function"==typeof e.then},i=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!s(e)}(t)){Object.freeze(t);for(const n in t)t.hasOwnProperty(n)&&e(t[n]);Object.seal(t)}},u=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")};const l={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return s(t)?f(t):d(t)}catch(r){return s(r)?f(r.next((()=>e(this.contents)))):p(r)}if("loading"===this.state)return f(this.contents.then(e).catch((t=>{if(s(t))return t.then((()=>e(this.contents)));throw t})));throw new Error("Invalid Loadable state")}};function d(e){return Object.freeze({state:"hasValue",contents:e,...l})}function p(e){return Object.freeze({state:"hasError",contents:e,...l})}function f(e){return Object.freeze({state:"loading",contents:e,...l})}var b={loadableWithValue:d,loadableWithError:p,loadableWithPromise:f,loadableLoading:function(){return f(new Promise((()=>{})))},loadableAll:function(e){return e.every((e=>"hasValue"===e.state))?d(e.map((e=>e.contents))):e.some((e=>"hasError"===e.state))?p(u(e.find((e=>"hasError"===e.state)),"Invalid loadable passed to loadableAll").contents):f(Promise.all(e.map((e=>e.contents))))}};class m{constructor(e){var t;t=void 0,"key"in this?Object.defineProperty(this,"key",{value:t,enumerable:!0,configurable:!0,writable:!0}):this.key=t,this.key=e}}var h=m,g=class extends m{},S=class extends m{},y=Object.freeze({__proto__:null,AbstractRecoilValue:h,RecoilState:g,RecoilValueReadOnly:S});class R{}const v=new R;class w extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const O=new Map;class T extends Error{}var A={nodes:O,registerNode:function(e){return O.has(e.key)&&e.key,O.set(e.key,e),null==e.set?new y.RecoilValueReadOnly(e.key):new y.RecoilState(e.key)},getNode:function(e){const t=O.get(e);if(null==t)throw new T(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:T,DefaultValue:R,DEFAULT_VALUE:v,RecoilValueNotReady:w},E=function(e,t,n){return n()},V=function(e){return e};const{mapByDeletingFromMap:j,mapBySettingInMap:N,mapByUpdatingInMap:k,setByAddingToSet:C}=c,{getNode:M}=A,_=Object.freeze(new Map),L=Object.freeze(new Set);class x extends Error{}function U(e,t,n){return M(n).get(e,t)}let B=0;var D={getNodeLoadable:U,peekNodeLoadable:function(e,t,n){return U(e,t,n)[1]},setNodeValue:function(e,t,n,o){const r=M(n);if(null==r.set)throw new x("Attempt to set read-only RecoilValue: "+n);const[a,c]=r.set(e,t,o);return[a,c]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:j(e.atomValues,t),nonvalidatedAtoms:N(e.nonvalidatedAtoms,t,n),dirtyAtoms:C(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=B++;return[{...e,nodeToComponentSubscriptions:k(e.nodeToComponentSubscriptions,t,(e=>N(null!=e?e:_,o,["TODO debug name",n])))},function(e){return{...e,nodeToComponentSubscriptions:k(e.nodeToComponentSubscriptions,t,(e=>j(null!=e?e:_,o)))}}]},fireNodeSubscriptions:function(e,t,n){var o;const r="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,a=function(e,t){const n=new Set,o=new Set,r=Array.from(t);for(let c=r.pop();c;c=r.pop()){var a;n.add(c),o.add(c);const t=null!==(a=e.nodeToNodeSubscriptions.get(c))&&void 0!==a?a:L;for(const e of t)o.has(e)||r.push(e)}return n}(r,t);for(const s of a){var c;(null!==(c=r.nodeToComponentSubscriptions.get(s))&&void 0!==c?c:[]).forEach((([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(r)}))}E("value became available, waking components",Array.from(t).join(", "),(()=>{const t=e.getState().suspendedComponentResolvers;t.forEach((e=>e())),t.clear()}))},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],r=t.nodeToNodeSubscriptions.get(o);if(!(null==r?void 0:r.size))return;const a=n[0];if(r.has(a))throw new Error("Recoil selector has circular dependencies: "+[...n,a].reverse().join(" \u2192 "));for(const c of r)e(t,[...n,c])}};const{getNodeLoadable:P,peekNodeLoadable:I,setNodeValue:z,setUnvalidatedAtomValue:q,subscribeComponentToNode:F}=D,{RecoilValue:W,AbstractRecoilValue:$,RecoilValueReadOnly:X,RecoilState:G}=y;var J={AbstractRecoilValue:$,RecoilState:G,peekRecoilValueAsLoadable:function(e,{key:t}){const n=e.getState().currentTree;return I(e,n,t)},getRecoilValueAsLoadable:function(e,{key:t}){let n;return E("get RecoilValue",t,(()=>e.replaceState(V((o=>{const[r,a]=P(e,o,t);return n=a,r}))))),n},setRecoilValue:function(e,{key:t},n){E("set RecoilValue",t,(()=>e.replaceState(V((o=>{const[r,a]=z(e,o,t,n);return e.fireNodeSubscriptions(a,"enqueue"),r})))))},setUnvalidatedRecoilValue:function(e,{key:t},n){E("set unvalidated persisted atom",t,(()=>e.replaceState(V((o=>{const r=q(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),r})))))},subscribeToRecoilValue:function(e,{key:t},n){let o,r;return E("subscribe component to RecoilValue",t,(()=>e.replaceState(V((e=>([o,r]=F(e,t,n),o)))))),{release:e=>e.replaceState(r)}},isRecoilValue:function(e){return e instanceof G||e instanceof X}};const{mapByDeletingFromMap:K,mapBySettingInMap:H,setByAddingToSet:Y}=c,{loadableWithValue:Q}=b,{DEFAULT_VALUE:Z,DefaultValue:ee,registerNode:te}=A,{isRecoilValue:ne}=J;var oe=function e(t){const{default:n,...o}=t;return ne(n)||s(n)?function(t){const n=e({...t,default:Z,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof ee?e:u(t.persistence_UNSTABLE).validator(e,Z)}});return selector({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof ee?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return te({key:t,options:e,get:(o,r)=>{if(r.atomValues.has(t))return[r,u(r.atomValues.get(t))];if(r.nonvalidatedAtoms.has(t)){if(null==n)return[r,Q(e.default)];const o=r.nonvalidatedAtoms.get(t),a=n.validator(o,Z);return a instanceof ee?[{...r,nonvalidatedAtoms:K(r.nonvalidatedAtoms,t)},Q(e.default)]:[{...r,atomValues:H(r.atomValues,t,Q(a)),nonvalidatedAtoms:K(r.nonvalidatedAtoms,t)},Q(a)]}return[r,Q(e.default)]},set:(n,o,r)=>(!0!==e.dangerouslyAllowMutability&&i(r),[{...o,dirtyAtoms:Y(o.dirtyAtoms,t),atomValues:r instanceof ee?K(o.atomValues,t):H(o.atomValues,t,Q(r)),nonvalidatedAtoms:K(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},re=function(e,t){t()};const{useContext:ae,useEffect:ce,useRef:se,useState:ie}=r,{fireNodeSubscriptions:ue,setNodeValue:le,setUnvalidatedAtomValue:de}=D;function pe(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const fe=Object.freeze({getState:pe,replaceState:pe,subscribeToTransactions:pe,addTransactionMetadata:pe,fireNodeSubscriptions:pe});function be(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const me=r.createContext({current:fe}),he=()=>ae(me);function ge(e){const t=he(),[n,o]=ie([]);return e.setNotifyBatcherOfChange((()=>o({}))),ce((()=>{re("Batcher",(()=>{const e=t.current.getState(),{currentTree:n,nextTree:o}=e;null!==o&&(o.dirtyAtoms.size&&e.transactionSubscriptions.forEach((e=>e(t.current,n))),e.queuedComponentCallbacks.forEach((e=>e(o))),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=o,e.nextTree=null)}))})),null}let Se=0;var ye={useStoreRef:he,RecoilRoot:function({initializeState:e,children:t}){let n;const o=se(null),a={getState:()=>n.current,replaceState:e=>{const t=c.current.getState();be(t);const n=u(t.nextTree),r=e(n);r!==n&&(t.nextTree=r,u(o.current)())},subscribeToTransactions:e=>{const t=Se++;return c.current.getState().transactionSubscriptions.set(t,e),{release:()=>{c.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{be(c.current.getState());for(const t of Object.keys(e))u(c.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){ue(c.current,e,t)}},c=se(a);return n=se(function(e,t){const n={currentTree:{isSnapshot:!1,transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map},nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set};return t&&t({set:(t,o)=>{n.currentTree=le(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach(((e,t)=>{n.currentTree=de(n.currentTree,t,e)}))}}),n}(a,e)),r.createElement(me.Provider,{value:c},r.createElement(ge,{setNotifyBatcherOfChange:function(e){o.current=e}}),t)}},Re=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n},ve=function(e,t){const n=new Map;return e.forEach(((e,o)=>{n.set(o,t(e,o))})),n};const{useCallback:we,useEffect:Oe,useMemo:Te,useRef:Ae,useState:Ee}=r,{setByAddingToSet:Ve}=c,{getNodeLoadable:je,peekNodeLoadable:Ne,setNodeValue:ke}=D,{DEFAULT_VALUE:Ce,RecoilValueNotReady:Me,getNode:_e,nodes:Le}=A,{useStoreRef:xe}=ye,{AbstractRecoilValue:Ue,getRecoilValueAsLoadable:Be,setRecoilValue:De,setUnvalidatedRecoilValue:Pe,subscribeToRecoilValue:Ie}=J;function ze(e,t){return{isSnapshot:t.isSnapshot,transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:ve(e.nodeToNodeSubscriptions,(e=>new Set(e))),nodeToComponentSubscriptions:ve(e.nodeToComponentSubscriptions,(e=>new Map(e)))}}function qe(e,t,n,o){if("function"==typeof o){const r=Ne(e,t,n.key);if("loading"===r.state)throw new Me(n.key);if("hasError"===r.state)throw r.contents;return o(r.contents)}return o}function Fe(){const e=xe(),[t,n]=Ee([]),o=Ae(new Set);o.current=new Set;const r=Ae(new Set),a=Ae(new Map),c=we((t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))}),[e,a]);return Oe((()=>{const t=e.current;function s(e,t){a.current.has(t)&&n([])}Re(o.current,r.current).forEach((e=>{if(a.current.has(e))return;const n=Ie(t,new Ue(e),(t=>{E("RecoilValue subscription fired",e,(()=>{s(0,e)}))}));a.current.set(e,n),E("initial update on subscribing",e,(()=>{s(t.getState(),e)}))})),Re(r.current,o.current).forEach((e=>{c(e)})),r.current=o.current})),Oe((()=>{const e=a.current;return()=>e.forEach(((e,t)=>c(t)))}),[c]),Te((()=>{function t(t){return n=>{var o;const r=e.current.getState(),a=qe(e.current,null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,t,n);De(e.current,t,a)}}function n(t){return o.current.has(t.key)||(o.current=Ve(o.current,t.key)),Be(e.current,t)}function r(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise((e=>{n.current.getState().suspendedComponentResolvers.add(e)}));throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>De(e.current,t,Ce)}}}),[o,e])}function We(e){const t=xe();Oe((()=>t.current.subscribeToTransactions(e).release),[e,t])}function $e(e){const t=e.atomValues,n=ve(function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n}(t,((e,t)=>{var n;const o=null===(n=_e(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state})),(e=>e.contents));return function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t}(e.nonvalidatedAtoms,n)}class Xe{}const Ge=new Xe;var Je={useRecoilCallback:function(e,t){const n=xe();return we(((...t)=>{let o=ze(n.current.getState().currentTree,{isSnapshot:!0});function r(e){let t;return[o,t]=je(n.current,o,e.key),t}function c(e){return r(e).toPromise()}function s(e,t){const r=qe(n.current,o,e,t);De(n.current,e,r)}function i(e){De(n.current,e,Ce)}let u=Ge;return a.unstable_batchedUpdates((()=>{u=e({getPromise:c,getLoadable:r,set:s,reset:i},...t)})),function(e,t){if(!e)throw new Error(t)}(!(u instanceof Xe),"unstable_batchedUpdates should return immediately"),u}),null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return Fe().getRecoilValue(e)},useRecoilValueLoadable:function(e){return Fe().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=Fe(),[n]=t.getRecoilState(e);return[n,we(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=Fe(),[n]=t.getRecoilStateLoadable(e);return[n,we(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return we(Fe().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return we(Fe().getResetRecoilState(e),[e])},useRecoilInterface:Fe,useTransactionSubscription:We,useSnapshotWithStateChange:function(e){const t=xe();let n=function(){const[e,t]=Ee(0);return We(we((()=>t((e=>e+1))),[])),ze(xe().current.getState().currentTree,{isSnapshot:!0})}();e((({key:e},o)=>{[n]=ke(t.current,n,e,Ne(t.current,n,e).map(o))}));const o=ve(n.atomValues,(e=>e.contents)),r=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:r}},useTransactionObservation:function(e){We(we(((t,n)=>{let o=t.getState().nextTree;o||(o=t.getState().currentTree);const r=$e(o),a=$e(n),c=ve(Le,(e=>{var t,n,o,r,a,c;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(r=null===(a=e.options)||void 0===a||null===(c=a.persistence_UNSTABLE)||void 0===c?void 0:c.backButton)&&void 0!==r&&r}}})),s=new Set(o.dirtyAtoms);e({atomValues:r,previousAtomValues:a,atomInfo:c,modifiedAtoms:s,transactionMetadata:{...o.transactionMetadata}})}),[e]))},useGoToSnapshot:function(){const e=xe();return t=>{a.unstable_batchedUpdates((()=>{t.updatedAtoms.forEach((n=>{De(e.current,new Ue(n),t.atomValues.get(n))}))}))}},useSetUnvalidatedAtomValues:function(){const e=xe();return(t,n={})=>{a.unstable_batchedUpdates((()=>{e.current.addTransactionMetadata(n),t.forEach(((t,n)=>Pe(e.current,new Ue(n),t)))}))}}};const Ke=Symbol("ArrayKeyedMap"),He=new Map;class Ye{constructor(e){if(this._base=new Map,e instanceof Ye)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach((e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:He})),void 0===n?void 0:n.get(Ke)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach((e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r})),r.set(Ke,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach((e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o})),o.delete(Ke),this}entries(){const e=[];return function t(n,o){n.forEach(((n,r)=>{r===Ke?e.push([o,n]):t(n,o.concat(r))}))}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var Qe=Ye;Object.freeze(new Set);const{mapBySettingInMap:Ze,mapByUpdatingInMap:et,setByAddingToSet:tt,setByDeletingFromSet:nt}=c,{detectCircularDependencies:ot,getNodeLoadable:rt,setNodeValue:at}=D,{loadableWithError:ct,loadableWithPromise:st,loadableWithValue:it}=b,{DEFAULT_VALUE:ut,RecoilValueNotReady:lt,registerNode:dt}=A,{startPerfBlock:pt}={startPerfBlock:function(e){return()=>{}}},{isRecoilValue:ft}=J,bt=Object.freeze(new Set);function mt(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=u(e.get(n));t.push(n),t.push(o.contents)}return t}const{useRecoilCallback:ht,useRecoilState:gt,useRecoilStateLoadable:St,useRecoilValue:yt,useRecoilValueLoadable:Rt,useResetRecoilState:vt,useSetRecoilState:wt,useSetUnvalidatedAtomValues:Ot,useTransactionObservation:Tt,useTransactionSubscription:At}=Je,{DefaultValue:Et}=A,{RecoilRoot:Vt}=ye,{isRecoilValue:jt}=J;var Nt={DefaultValue:Et,RecoilRoot:Vt,atom:oe,selector:function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!=o?o:new Qe;function c(o,r){var u;let l=r;const d=null!==(u=r.nodeDeps.get(t))&&void 0!==u?u:bt,p=mt(new Map(Array.from(d).sort().map((e=>{const[t,n]=rt(o,l,e);return l=t,[e,n]})))),f=a.get(p);if(null!=f)return[l,f];const[b,m,h]=function(e,o){var r;const[a,i,u]=function(e,o){const r=pt(t);let a=o;const i=new Map;function u({key:t}){let n;if([a,n]=rt(e,o,t),i.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:u}),t=ft(e)?u(e):e,o=s(t)?st(t.finally(r)):(r(),it(t));return[a,o,i]}catch(t){const o=s(t)?st(t.then((()=>{let t=ct(new Error("Internal Recoil Selector Error"));if(e.replaceState((n=>{let o;return[o,t]=c(e,n),o})),"hasError"===t.state)throw t.contents;return t.contents})).finally(r)):(r(),ct(t));return[a,o,i]}}(e,o);let l=a;const d=null!==(r=o.nodeDeps.get(t))&&void 0!==r?r:bt,p=new Set(u.keys());l=function(e,t){return e.size===t.size&&function(e,t,n){const o=e.entries();let r=o.next();for(;!r.done;){const a=r.value;if(!t.call(n,a[1],a[0],e))return!1;r=o.next()}return!0}(e,(e=>t.has(e)))}(d,p)?l:{...l,nodeDeps:Ze(l.nodeDeps,t,p)};const f=Re(p,d),b=Re(d,p);for(const n of f)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,n,(e=>tt(null!=e?e:bt,t)))};for(const n of b)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,n,(e=>nt(null!=e?e:bt,t)))};return[l,i,u]}(o,l);l=b;const g=mt(h);return function(n,o,r){"loading"!==r.state?1==!e.dangerouslyAllowMutability&&i(r.contents):r.contents.then((r=>(1==!e.dangerouslyAllowMutability&&i(r),a=a.set(o,it(r)),n.fireNodeSubscriptions(new Set([t]),"now"),r))).catch((r=>(s(r)||(1==!e.dangerouslyAllowMutability&&i(r),a=a.set(o,ct(r)),n.fireNodeSubscriptions(new Set([t]),"now")),r))),a=a.set(o,r)}(o,g,m),[l,m]}function u(e,t){return c(e,t)}return dt(null!=r?{key:t,options:e,get:u,set:function(e,t,n){let o=t;const a=new Set;function c({key:t}){const[n,r]=rt(e,o,t);if(o=n,"hasValue"===r.state)return r.contents;throw"loading"===r.state?new lt(t):r.contents}function s(t,n){const r="function"==typeof n?n(c(t)):n;let s;[o,s]=at(e,o,t.key,r),s.forEach((e=>a.add(e)))}return r({set:s,get:c,reset:function(e){s(e,ut)}},n),[o,a]}}:{key:t,options:e,get:u})},useRecoilValue:yt,useRecoilValueLoadable:Rt,useRecoilState:gt,useRecoilStateLoadable:St,useSetRecoilState:wt,useResetRecoilState:vt,useRecoilCallback:ht,useTransactionObservation_UNSTABLE:Tt,useTransactionSubscription_UNSTABLE:At,useSetUnvalidatedAtomValues_UNSTABLE:Ot,isRecoilValue:jt},kt=Nt.DefaultValue,Ct=Nt.RecoilRoot,Mt=Nt.atom,_t=Nt.selector,Lt=Nt.useRecoilValue,xt=Nt.useRecoilValueLoadable,Ut=Nt.useRecoilState,Bt=Nt.useRecoilStateLoadable,Dt=Nt.useSetRecoilState,Pt=Nt.useResetRecoilState,It=Nt.useRecoilCallback,zt=Nt.useTransactionObservation_UNSTABLE,qt=Nt.useTransactionSubscription_UNSTABLE,Ft=Nt.useSetUnvalidatedAtomValues_UNSTABLE,Wt=Nt.isRecoilValue;t.DefaultValue=kt,t.RecoilRoot=Ct,t.atom=Mt,t.default=Nt,t.isRecoilValue=Wt,t.selector=_t,t.useRecoilCallback=It,t.useRecoilState=Ut,t.useRecoilStateLoadable=Bt,t.useRecoilValue=Lt,t.useRecoilValueLoadable=xt,t.useResetRecoilState=Pt,t.useSetRecoilState=Dt,t.useSetUnvalidatedAtomValues_UNSTABLE=Ft,t.useTransactionObservation_UNSTABLE=zt,t.useTransactionSubscription_UNSTABLE=qt}}]);