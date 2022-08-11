"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1737],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),y=o,f=m["".concat(l,".").concat(y)]||m[y]||s[y]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1250:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"EnvironmentKey",sidebar_label:"EnvironmentKey"},l=void 0,p={unversionedId:"recoil-relay/api/EnvironmentKey",id:"recoil-relay/api/EnvironmentKey",title:"EnvironmentKey",description:"An EnvironmentKey is class that can be used to match up a Relay Environment registered with ` in your ` with a GraphQL selector or atom effect that uses it to query.",source:"@site/docs/recoil-relay/api/EnvironmentKey.md",sourceDirName:"recoil-relay/api",slug:"/recoil-relay/api/EnvironmentKey",permalink:"/ko/docs/recoil-relay/api/EnvironmentKey",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/recoil-relay/api/EnvironmentKey.md",tags:[],version:"current",frontMatter:{title:"EnvironmentKey",sidebar_label:"EnvironmentKey"},sidebar:"recoil-relay",previous:{title:"GraphQL Atom Effects",permalink:"/ko/docs/recoil-relay/graphql-effects"},next:{title:"<RecoilRelayEnvironment>",permalink:"/ko/docs/recoil-relay/api/RecoilRelayEnvironment"}},u=[],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentKey")," is class that can be used to match up a Relay Environment registered with ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/RecoilRelayEnvironment"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilRelayEnvironment>"))," in your ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/RecoilRoot"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilRoot>"))," with a GraphQL ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-queries"},"selector")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-effects"},"atom effect")," that uses it to query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const myEnvironmentKey = new EnvironmentKey('My Environment');\n")),(0,i.kt)("p",null,"Using an ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentKey")," to register Relay Environments instead of just specifying the Relay Environment direclty in the query can be useful if the environment is only known at render time."))}m.isMDXComponent=!0}}]);