(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(164)),c={title:"useSetRecoilState(state)",sidebar_label:"useSetRecoilState()"},i={id:"api-reference/core/useSetRecoilState",title:"useSetRecoilState(state)",description:"Returns a setter function for updating the value of writeable Recoil state.",source:"@site/docs/api-reference/core/useSetRecoilState.md",permalink:"/docs/api-reference/core/useSetRecoilState",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useSetRecoilState.md",sidebar_label:"useSetRecoilState()",sidebar:"someSidebar",previous:{title:"useRecoilValue(state)",permalink:"/docs/api-reference/core/useRecoilValue"},next:{title:"useResetRecoilState(state)",permalink:"/docs/api-reference/core/useResetRecoilState"}},l=[{value:"Example",id:"example",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a setter function for updating the value of writeable Recoil state."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function useSetRecoilState<T>(state: RecoilState<T>): SetterOrUpdater<T>;\n\ntype SetterOrUpdater<T> = (T | (T => T)) => void;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": writeable Recoil state (an ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/atom"}),Object(o.b)("inlineCode",{parentName:"a"},"atom"))," or a ",Object(o.b)("em",{parentName:"li"},"writeable")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/selector"}),Object(o.b)("inlineCode",{parentName:"a"},"selector")),")")),Object(o.b)("p",null,"Returns a setter function which can be used asynchronously to change the state.  The setter may either be passed a new value or an updater function which receives the previous value as an argument."),Object(o.b)("hr",null),Object(o.b)("p",null,"This is the recommended hook to use when a component intends to write to state without reading it. If a component used the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/useRecoilState"}),Object(o.b)("inlineCode",{parentName:"a"},"useRecoilState()"))," hook to get the setter, it would also subscribe to updates and re-render when the atom or selector updated. Using ",Object(o.b)("inlineCode",{parentName:"p"},"useSetRecoilState()")," allows a component to set the value without re-rendering when the value changes."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, useSetRecoilState} from 'recoil';\n\nconst namesState = atom({\n  key: 'namesState',\n  default: ['Ella', 'Chris', 'Paul'],\n});\n\nfunction NameInput() {\n  const [name, setName] = useState('');\n  const setNamesState = useSetRecoilState(namesState);\n\n  const addName = () => {\n    setNamesState(existingNames => [...existingNames, name]);\n  };\n\n  const onChange = (e) => {\n    setName(e.target.value);\n  };\n\n  return (\n    <>\n      <input type=\"text\" value={name} onChange={onChange} />\n      <button onClick={addName}>Add Name</button>\n    </>\n  );\n}\n")))}u.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);