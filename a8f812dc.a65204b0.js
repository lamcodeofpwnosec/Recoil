(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),o=(n(0),n(164)),i={},l={permalink:"/blog/2020/05/30/0.0.8-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-05-30-0.0.8-released.md",source:"@site/blog/2020-05-30-0.0.8-released.md",description:"# Recoil 0.0.8",date:"2020-05-30T00:00:00.000Z",tags:[],title:"0.0.8-released",readingTime:3.085,truncated:!1,prevItem:{title:"0.0.10-released",permalink:"/blog/2020/06/18/0.0.10-released"}},c=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Features",id:"features",children:[{value:"TypeScript support",id:"typescript-support",children:[]},{value:"<code>atomFamily</code> and <code>selectorFamily</code>",id:"atomfamily-and-selectorfamily",children:[]},{value:"Concurrency helpers",id:"concurrency-helpers",children:[]},{value:"<code>constSelector</code> and <code>errorSelector</code>",id:"constselector-and-errorselector",children:[]},{value:"readOnlySelector",id:"readonlyselector",children:[]}]},{value:"What&#39;s Next",id:"whats-next",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"recoil-008"},"Recoil 0.0.8"),Object(o.b)("p",null,"Today we are releasing Recoil 0.0.8. It contains bug fixes and new features. Thanks so much to everyone who contributed to this release! It's been amazing to see so many people contribute."),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fixed a bug where atoms that stored self-referential structures would cause an infinite loop. (@n3tr in #153)"),Object(o.b)("li",{parentName:"ul"},"Fixed bugs affecting Server-Side Rendering. (@sbaudray in #53)"),Object(o.b)("li",{parentName:"ul"},"Fixed build system and repository syncing problems. Many people contributed to this, especially @mondaychen and including\n@claudiopro, @dustinsoftware, @jacques-blom, @jaredpalmer, @kentcdodds, @leushkin, and @tony-go. It remains to get Jest and Flow to behave the same between internal and OSS.")),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("h3",{id:"typescript-support"},"TypeScript support"),Object(o.b)("p",null,"TypeScript definitions are now available via the ",Object(o.b)("inlineCode",{parentName:"p"},"DefinitelyTyped")," repository."),Object(o.b)("h3",{id:"atomfamily-and-selectorfamily"},Object(o.b)("inlineCode",{parentName:"h3"},"atomFamily")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"selectorFamily")),Object(o.b)("p",null,"These utilities help you create collections of related atoms or selectors, one for each value of some parameter. Instaed of manually creating a memoized function that returns an atom or selector, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," and ",Object(o.b)("inlineCode",{parentName:"p"},"selectorFamily"),". In the future, these utilities will also help with memory management."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"atomFamily")," function returns a function from some parameter to an atom, creating a new atom for each value of the parameter that is passed in. For example, suppose you wanted to store a set of coordinates ",Object(o.b)("inlineCode",{parentName:"p"},"{x: number, y: number}")," for every member of a collection identified by some ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),". Then you could write:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"const coordinatesForID = atomFamily<{x: number, y: number}, ID>({\n    key: 'coordinatesForID',\n    default: {x: 0, y: 0},\n});\n")),Object(o.b)("p",null,"and then access that state as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"function MyComponent({id}) {\n    const [coordinates, setCoordinates] = useRecoilState(\n        coordinatesForID(id)\n    );\n    ...\n}\n")),Object(o.b)("p",null,"Each ",Object(o.b)("inlineCode",{parentName:"p"},"ID")," passed to ",Object(o.b)("inlineCode",{parentName:"p"},"coordinatesForID")," will get its own independent atom containing the coordinates. Each of these atoms has its own subscriptions, so a component that uses the state for a single ID will only be subscribed to changes to that one ID."),Object(o.b)("p",null,"Similarly, ",Object(o.b)("inlineCode",{parentName:"p"},"selectorFamily")," lets you create a different selector for each value of some parameter. For example, suppose you wanted to take each of those coordinates and rotate them by 180 degrees:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"const rotatedCoordinatesForID = selectorFamily<{x: number, y: number}, ID>({\n    key: 'rotatedCoordinatesForID',\n    get: id => ({get}) => {\n        const coordinates = get(coordinatesForID(id));\n        return {\n            x: -coordinates.x,\n            y: -coordinates.y,\n        };\n    }\n});\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"get")," property of a selector family is a function that takes the parameter (in this case ID) and returns a function with a signature identical to the ",Object(o.b)("inlineCode",{parentName:"p"},"get")," property of a single selector. In general, this is how all of the options for atom families and selector families work."),Object(o.b)("h3",{id:"concurrency-helpers"},"Concurrency helpers"),Object(o.b)("p",null,"We've introduced selector families for controlling concurrency in async selectors:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"waitForAll"),": requests all dependencies in parallel and waits for all of them to become available."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"waitForAny"),": requests all dependencies in parallel and waits for any one of them to become available."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"waitForNone"),": requests all dependencies in parallel but doesn't wait for any of them."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"noWait")," requests a single dependency but doesn't wait for it to become available.")),Object(o.b)("p",null,"These can be used to retireve multiple dependencies in parallel and to write logic conditional on the status of an upstream dependency. For example, you can write a selector that conditionally provides a default value while an async process is in flight instead of propagating that loading state down to components."),Object(o.b)("h3",{id:"constselector-and-errorselector"},Object(o.b)("inlineCode",{parentName:"h3"},"constSelector")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"errorSelector")),Object(o.b)("p",null,"These selector families simply return a constant value or always throw a given error, respectively."),Object(o.b)("h3",{id:"readonlyselector"},"readOnlySelector"),Object(o.b)("p",null,"This simply wraps a read-write ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," in a read-only interface."),Object(o.b)("h2",{id:"whats-next"},"What's Next"),Object(o.b)("p",null,"We're working on improvements to the observation and persistence APIs, improved speed and memory management, and support for Concurrent Mode. Thanks so much for trying Recoil, we hope you'll stick around and see what it becomes!"))}d.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);