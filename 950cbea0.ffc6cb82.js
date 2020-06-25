(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(164)),i={title:"atomFamily(options)",sidebar_label:"atomFamily()"},l={id:"api-reference/utils/atomFamily",title:"atomFamily(options)",description:"Returns a function that returns a writeable `RecoilState` [atom](/docs/api-reference/core/atom).",source:"@site/docs/api-reference/utils/atomFamily.md",permalink:"/docs/api-reference/utils/atomFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/atomFamily.md",sidebar_label:"atomFamily()",sidebar:"someSidebar",previous:{title:"useGotoRecoilSnapshot(snapshot)",permalink:"/docs/api-reference/core/useGotoRecoilSnapshot"},next:{title:"selectorFamily(options)",permalink:"/docs/api-reference/utils/selectorFamily"}},s=[{value:"Example",id:"example",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]},{value:"Persistence",id:"persistence",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a function that returns a writeable ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/atom"}),"atom"),"."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function atomFamily<T, Parameter>({\n  key: string,\n\n  default:\n    | RecoilValue<T>\n    | Promise<T>\n    | T\n    | (Parameter => T | RecoilValue<T> | Promise<T>),\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"default")," - The initial value of the atom. It may either be a value directly, a ",Object(o.b)("inlineCode",{parentName:"li"},"RecoilValue")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," that represents the default value, or a function to get the default value. The callback function is passed a copy of the parameter used when the ",Object(o.b)("inlineCode",{parentName:"li"},"atomFamily")," function is called.")),Object(o.b)("hr",null),Object(o.b)("p",null,"An ",Object(o.b)("inlineCode",{parentName:"p"},"atom")," represents a piece of state with ",Object(o.b)("em",{parentName:"p"},"Recoil"),". An atom is created and registered per ",Object(o.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," by your app. But, what if your state isn\u2019t global? What if your state is associated with a particular instance of a control, or with a particular element? For example, maybe your app is a UI prototyping tool where the user can dynamically add elements and each element has state, such as its position. Ideally, each element would get its own atom of state. You could implement this yourself via a memoization pattern. But, ",Object(o.b)("em",{parentName:"p"},"Recoil")," provides this pattern for you with the ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," utility. An Atom Family represents a collection of atoms. When you call ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," it will return a function which provides the ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," atom based on the parameters you pass in."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," essentially provides a map from the parameter to a atom.  You only need to provide a single key for the ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," and it will generate a unique key for each underlying atom.  These atom keys can be used for persistence, and so must be stable across application executions.  The parameters may also be generated at different callsites and we want equivalent parameters to use the same underlying atom.  Therefore, value-equality is used instead of reference-equality for ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," parameters.  This imposes restrictions on the types which can be used for the parameter.  ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," accepts primitive types, or arrays or objects which can contain arrays, objects, or primitive types."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const elementPositionStateFamily = atomFamily({\n  key: 'ElementPosition',\n  default: [0, 0],\n});\n\nfunction ElementListItem({elementID}) {\n  const position = useRecoilValue(elementPositionStateFamily(elementID));\n  return (\n    <div>\n      Element: {elementID}\n      Position: {position}\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"An ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily()")," takes almost the same options as a simple ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/atom"}),Object(o.b)("inlineCode",{parentName:"a"},"atom()")),".  However, the default value can also be parameterized. That means you could provide a function which takes the parameter value and returns the actual default value.  For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: param => defaultBasedOnParam(param),\n});\n")),Object(o.b)("p",null,"or using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/utils/selectorFamily"}),Object(o.b)("inlineCode",{parentName:"a"},"selectorFamily"))," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"selector"),", you can also access the parameter value in a ",Object(o.b)("inlineCode",{parentName:"p"},"default")," selector as well."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: selectorFamily({\n    key: 'MyAtom/Default',\n    get: param => ({get}) => {\n      return computeDefaultUsingParam(param);\n    },\n  }),\n});\n")),Object(o.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(o.b)("p",null,"One advantage of using this pattern for separate atoms for each element over trying to store a single atom with a map of state for all elements is that they all maintain their own individual subscriptions. So, updating the value for one element will only cause React components that have subscribed to just that atom to update."),Object(o.b)("h2",{id:"persistence"},"Persistence"),Object(o.b)("p",null,"Persistence observers will persist the state for each parameter value as a distinct atom with a unique key based on serialization of the parameter value used. Therefore, it is important to only use parameters which are primitives or simple compound objects containing primitives. Custom classes or functions are not allowed."),Object(o.b)("p",null,"It is allowed to \u201cupgrade\u201d a simple ",Object(o.b)("inlineCode",{parentName:"p"},"atom")," to be an ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," in a newer version of your app based on the same key. If you do this, then any persisted values with the old simple key can still be read and all parameter values of the new ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," will default to the persisted state of the simple atom. If you change the format of the parameter in an ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily"),", however, it will not automatically read the previous values that were persisted before the change. However, you can add logic in a default selector or validator to lookup values based on previous parameter formats. We hope to help automate this pattern in the future."))}p.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),b=n,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return a?r.a.createElement(d,l({ref:t},c,{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);