(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(a),m=r,u=b["".concat(c,".").concat(m)]||b[m]||h[m]||o;return a?n.a.createElement(u,i(i({ref:t},s),{},{components:a})):n.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},156:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var r=a(16),n=a(159);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},159:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(8),o=(a(0),a(151)),c=a(156),i={title:"Recoil 0.0.11"},p={permalink:"/blog/2020/09/15/0.0.11-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-09-15-0.0.11-released.mdx",source:"@site/blog/2020-09-15-0.0.11-released.mdx",description:"Today we are releasing Recoil 0.0.11. It contains bug fixes, new features, better performance, and experimental compatibility with Concurrent Mode. Thank you so much to everyone who contributed to this release!",date:"2020-09-15T00:00:00.000Z",formattedDate:"September 14, 2020",tags:[],title:"Recoil 0.0.11",readingTime:5.15,truncated:!0,prevItem:{title:"Recoil 0.1.1",permalink:"/blog/2020/10/30/0.1.1-released"},nextItem:{title:"Recoil 0.0.10",permalink:"/blog/2020/06/18/0.0.10-released"}},s=[{value:"Experimental Concurrent Mode Support",id:"experimental-concurrent-mode-support",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Types and Packaging",id:"types-and-packaging",children:[]},{value:"Support for Multiple React Roots",id:"support-for-multiple-react-roots",children:[]},{value:"Developer Tool APIs",id:"developer-tool-apis",children:[]},{value:"Other New APIs",id:"other-new-apis",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Future Work",id:"future-work",children:[]}],l={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today we are releasing Recoil 0.0.11. It contains bug fixes, new features, better performance, and experimental compatibility with Concurrent Mode. Thank you so much to everyone who contributed to this release!"),Object(o.b)("h2",{id:"experimental-concurrent-mode-support"},"Experimental Concurrent Mode Support"),Object(o.b)("p",null,"Recoil now supports ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode")," when used with the ",Object(o.b)("inlineCode",{parentName:"p"},"experimental")," release of React. Please try this out and report any problems!"),Object(o.b)("p",null,"Concurrent Mode, which enables smoother, more consistent user experiences, is the future of React. But up until now it's been incompatible with any kind of external state. This is because, in Concurrent Mode, renders can be spread out over time: React can pause the rendering of components, then later pick up where it left off, starting from the partial component tree that it already built:"),Object(o.b)("img",{alt:"React pauses while rendering a tree of components. Some components are rendered before the pause while others are rendered after the pause.",src:Object(c.a)("img/blog/2020-09-02-0.0.11-released/concurrent2.png")}),Object(o.b)("p",null,"This presents a problem with external state. Since React now relinquishes control flow, anything could happen between the time when rendering starts and when it is completed. If the external state changes during this time, it will result in an inconsistent UI, as the earlier-rendered components will observe the older state, while the later-rendered components will observe the new state:"),Object(o.b)("img",{alt:"If components depend on some external state, and that state changes while rendering is paused, then components rendered before the pause will observe the old state, while components rendered after the pause will observe the new state.",src:Object(c.a)("img/blog/2020-09-02-0.0.11-released/concurrent3.png")}),Object(o.b)("p",null,"This inconsistency could cause problems up to crashing the app."),Object(o.b)("p",null,"Recoil now takes advantage of experimental APIs in React to handle this situation by restarting with a fresh tree when Recoil state has changed during a render. These APIs also make Recoil more efficient and remove the need to re-render components when they're first mounted."),Object(o.b)("p",null,"Avoid using React experimental releases in production.  And, no matter what release of React or state management library you use, ",Object(o.b)("a",{parentName:"p",href:"https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f"},"avoid bugs by always keeping side-effects in a ",Object(o.b)("inlineCode",{parentName:"a"},"useEffect()")," hook, not during render"),"!  (",Object(o.b)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/bvaughn"},"@bvaughn"),")"),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"Several changes improve Recoil's performance. Previously, Recoil sometimes had to re-render components in certain circumstances: when reading from selectors that had unknown dependencies and when reading from atoms that had been initialized from external storage. Now, Recoil never has to perform a second render in response to reading an atom or selector. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),Object(o.b)("p",null,"Secondly, when used with the ",Object(o.b)("inlineCode",{parentName:"p"},"experimental")," release of React, Recoil no longer has to perform a second render when components are initially mounted. Recoil also no longer has to do any work to look up atom or selector values when it re-renders for reasons other than that atom or selector changing. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/bvaughn"},"@bvaughn"),")."),Object(o.b)("p",null,"The basic hooks such as ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilState()")," have been optimized and are now about 8","\xd7"," faster. They now typically take less than 2","\xd7"," as long as ",Object(o.b)("inlineCode",{parentName:"p"},"useState()")," to execute. This improves the performance of apps that use a large number of atoms in many components. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),Object(o.b)("p",null,"Recoil recursively freezes the contents of atoms and selectors. This prevents bugs, but can be slow with large objects. It now happens only in the development build. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/361"},"#361")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),Object(o.b)("p",null,"Recoil now avoids re-rendering components or re-evaluating selectors if you set an atom to its already-set value or reset it when it is already reset (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/399"},"#399"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/386"},"#386")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")."),Object(o.b)("p",null,"Finally, this release also fixes a memory leak introduced in the previous release. If you've been experiencing poor performance in apps that frequently update atoms, this was likely the cause. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/471"},"#471")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),Object(o.b)("h2",{id:"types-and-packaging"},"Types and Packaging"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://flow.org/"},"Flow types")," are now exported with the package in addition to TypeScript. Flow is the type system used at Facebook and that Recoil is actually written in. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/338"},"#338"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/468"},"#468"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/541"},"#541")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Brianzchen"},"@Brianzchen"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Komalov"},"@Komalov"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),")"),Object(o.b)("p",null,"TypeScript typing is also improved (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/492"},"#492"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/545"},"#545"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/548"},"#548"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/568"},"#568"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/575"},"#575")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/csantos42"},"@csantos42"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SergeyVolynkin"},"@SergeyVolynkin"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/hachibeeDI"},"@hachibeeDI"),")."),Object(o.b)("p",null,"In addition to NPM packages, we now provide ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction/installation#cdn"},"Common JS and UMD modules via CDN")," (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/413"},"#413")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pocket7878"},"@pocket7878"),")."),Object(o.b)("h2",{id:"support-for-multiple-react-roots"},"Support for Multiple React Roots"),Object(o.b)("p",null,"You can now ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilBridgeAcrossReactRoots"},"share state between multiple React roots"),".  For example, if your app uses both React DOM and another renderer such as ThreeJS, you can now share Recoil state between them. As always when using multiple React roots, they may be momentarily out of sync. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/298"},"#298"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/516"},"#516")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/inlet"},"@inlet"),")"),Object(o.b)("h2",{id:"developer-tool-apis"},"Developer Tool APIs"),Object(o.b)("p",null,"This release includes ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#developer-tools"},"experimental APIs")," intended for developer tools. We are creating a set of developer tools internally and there are also multiple open-source projects underway. We are releasing these APIs to help validate their design. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),Object(o.b)("h2",{id:"other-new-apis"},"Other New APIs"),Object(o.b)("p",null,"You can now use a Promise as the default value of an atom. When read it will behave like an async selector. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("p",null,"This update has many fixes related to test infrastructure and differences between the open-source and Facebook-internal environments. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/368"},"#368"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/360"},"#360"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/362"},"#362"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/363"},"#363"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/392"},"#392"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/431"},"#431"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/402"},"#402"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/538"},"#538"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/539"},"#539"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/549"},"#549"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/561"},"#561"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/576"},"#576")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/aaronabramov"},"@aaronabramov"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Komalov"},"@Komalov"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jacques-blom"},"@jacques-blom"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dsainati1"},"@dsainati1"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/csantos42"},"@csantos42"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/behnammodi"},"@behnammodi"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/habond"},"@habond"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/benhalverson"},"@benhalverson"),")."),Object(o.b)("p",null,"It also fixes bugs when using multiple ",Object(o.b)("inlineCode",{parentName:"p"},"<RecoilRoot>"),"s or pre-loading selectors in a snapshot (",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/534"},"#534")," ","\u2014"," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/davemccabe"},"@davemccabe"),")."),Object(o.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("p",null,"This update may break certain tests that don't use the ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/test-utils.html#act"},Object(o.b)("inlineCode",{parentName:"a"},"act()")," function from ",Object(o.b)("inlineCode",{parentName:"a"},"react-test-utils"))," to perform actions affecting React components. These tests sometimes worked anyway due to Recoil's extra renders. Use ",Object(o.b)("inlineCode",{parentName:"p"},"act()")," to fix any such tests."),Object(o.b)("p",null,"Recoil will now throw an exception if a state updater function provided to Recoil causes another atom update within its own execution. State updater functions are supposed to be pure, so this has always been against the API contract. But it happened to work in some cases before, and now it doesn't. Code that does this can be changed to perform the effects with ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilCallback()"),"."),Object(o.b)("h2",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"In a future release, Recoil will automatically free the memory used by atoms and selectors that are no longer used, and will perform better with larger numbers of atoms. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),Object(o.b)("p",null,"We are also working on APIs for synchronizing Recoil atoms with external data sources such as the URL, local storage, or a server. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),Object(o.b)("p",null,"Developer tools are in development. (",Object(o.b)("a",{parentName:"p",href:"https://github.com/maxijb"},"@maxijb"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/habond"},"@habond"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),")"),Object(o.b)("p",null,"Thanks for reading this far and for using Recoil! More releases are coming soon."))}b.isMDXComponent=!0}}]);