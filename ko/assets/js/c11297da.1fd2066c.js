(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return i}));var t=r(3),s=r(8),o=(r(0),r(151)),a={title:"\ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucffc\ub9ac",sidebar_label:"\ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucffc\ub9ac"},u={unversionedId:"guides/asynchronous-data-queries",id:"guides/asynchronous-data-queries",isDocsHomePage:!1,title:"\ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucffc\ub9ac",description:"Recoil\uc740 \ub370\uc774\ud130 \ud50c\ub85c\uc6b0 \uadf8\ub798\ud504\ub97c \ud1b5\ud574 \uc0c1\ud0dc\ub97c \ub9e4\ud551\ud558\ub294 \ubc29\ubc95\uacfc \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub97c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uac15\ub825\ud55c \uc810\uc740 graph\uc5d0 \uc18d\ud55c \ud568\uc218\ub4e4\ub3c4 \ube44\ub3d9\uae30\uac00 \ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \ube44\ub3d9\uae30 \ud568\uc218\ub4e4\uc744 \ub3d9\uae30 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354 \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc27d\uac8c \ud574\uc90d\ub2c8\ub2e4. Recoil\uc740 \ub3d9\uae30\uc640 \ube44\ub3d9\uae30 \ud568\uc218\ub4e4\uc744 selector\uc758 \ub370\uc774\ud130 \ud50c\ub85c\uc6b0 \uadf8\ub798\ud504\uc5d0\uc11c \uade0\uc77c\ud558\uac8c \ud63c\ud569\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4. Selector get\ucf5c\ubc31\uc5d0\uc11c \ub098\uc628 \uac12 \uadf8 \uc790\uccb4 \ub300\uc2e0 \ud504\ub85c\ubbf8\uc2a4\ub97c \ub9ac\ud134\ud558\uba74 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uc815\ud655\ud558\uac8c \uadf8\ub300\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4. \uc774\ub4e4\uc740 Selector\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\ub978 selector\ub4e4\uc5d0 \uc758\uc874\ud558\uc5ec \ub370\uc774\ud130\ub97c \ucd94\uac00\ub85c \ubcc0\ud658 \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/asynchronous-data-queries.md",slug:"/guides/asynchronous-data-queries",permalink:"/ko/docs/guides/asynchronous-data-queries",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/guides/asynchronous-data-queries.md",version:"current",sidebar_label:"\ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucffc\ub9ac",sidebar:"docs",previous:{title:"Selectors",permalink:"/ko/docs/basic-tutorial/selectors"},next:{title:"Atom Effects",permalink:"/ko/docs/guides/atom-effects"}},c=[{value:"Synchronous Example (\ub3d9\uae30 \uc608\uc81c)",id:"synchronous-example-\ub3d9\uae30-\uc608\uc81c",children:[]},{value:"Asynchronous Example (\ube44\ub3d9\uae30 \uc608\uc81c)",id:"asynchronous-example-\ube44\ub3d9\uae30-\uc608\uc81c",children:[]},{value:"Error Handling (\uc5d0\ub7ec \ucc98\ub9ac\ud558\uae30)",id:"error-handling-\uc5d0\ub7ec-\ucc98\ub9ac\ud558\uae30",children:[]},{value:"Queries with Parameters (\ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\ub294 \ucffc\ub9ac)",id:"queries-with-parameters-\ub9e4\uac1c\ubcc0\uc218\uac00-\uc788\ub294-\ucffc\ub9ac",children:[]},{value:"Data-Flow Graph",id:"data-flow-graph",children:[]},{value:"Concurrent Requests (\ub3d9\uc2dc \uc694\uccad)",id:"concurrent-requests-\ub3d9\uc2dc-\uc694\uccad",children:[]},{value:"Pre-Fetching (\ubbf8\ub9ac \uac00\uc838\uc624\uae30)",id:"pre-fetching-\ubbf8\ub9ac-\uac00\uc838\uc624\uae30",children:[]},{value:"Query Default Atom Values (\uae30\ubcf8 Atom \uac12 \ucffc\ub9ac)",id:"query-default-atom-values-\uae30\ubcf8-atom-\uac12-\ucffc\ub9ac",children:[]},{value:"Async Queries Without React Suspense (React Suspense\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 \ube44\ub3d9\uae30 \ucffc\ub9ac)",id:"async-queries-without-react-suspense-react-suspense\ub97c-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\uc740-\ube44\ub3d9\uae30-\ucffc\ub9ac",children:[]},{value:"Query Refresh (\ucffc\ub9ac \uc0c8\ub85c\uace0\uce68)",id:"query-refresh-\ucffc\ub9ac-\uc0c8\ub85c\uace0\uce68",children:[{value:"Use a Request ID (\uc694\uccad ID \uc0ac\uc6a9\ud558\uae30)",id:"use-a-request-id-\uc694\uccad-id-\uc0ac\uc6a9\ud558\uae30",children:[]},{value:"Use an Atom (Atom \uc0ac\uc6a9\ud558\uae30)",id:"use-an-atom-atom-\uc0ac\uc6a9\ud558\uae30",children:[]}]}],l={toc:c};function i(e){var n=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Recoil\uc740 \ub370\uc774\ud130 \ud50c\ub85c\uc6b0 \uadf8\ub798\ud504\ub97c \ud1b5\ud574 \uc0c1\ud0dc\ub97c \ub9e4\ud551\ud558\ub294 \ubc29\ubc95\uacfc \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub97c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uac15\ub825\ud55c \uc810\uc740 graph\uc5d0 \uc18d\ud55c \ud568\uc218\ub4e4\ub3c4 \ube44\ub3d9\uae30\uac00 \ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \ube44\ub3d9\uae30 \ud568\uc218\ub4e4\uc744 \ub3d9\uae30 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354 \ud568\uc218\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc27d\uac8c \ud574\uc90d\ub2c8\ub2e4. Recoil\uc740 \ub3d9\uae30\uc640 \ube44\ub3d9\uae30 \ud568\uc218\ub4e4\uc744 selector\uc758 \ub370\uc774\ud130 \ud50c\ub85c\uc6b0 \uadf8\ub798\ud504\uc5d0\uc11c \uade0\uc77c\ud558\uac8c \ud63c\ud569\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4. Selector ",Object(o.b)("inlineCode",{parentName:"p"},"get"),"\ucf5c\ubc31\uc5d0\uc11c \ub098\uc628 \uac12 \uadf8 \uc790\uccb4 \ub300\uc2e0 \ud504\ub85c\ubbf8\uc2a4\ub97c \ub9ac\ud134\ud558\uba74 \uc778\ud130\ud398\uc774\uc2a4\ub294 \uc815\ud655\ud558\uac8c \uadf8\ub300\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4. \uc774\ub4e4\uc740 Selector\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\ub978 selector\ub4e4\uc5d0 \uc758\uc874\ud558\uc5ec \ub370\uc774\ud130\ub97c \ucd94\uac00\ub85c \ubcc0\ud658 \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("p",null,'Selector\ub294 \ube44\ub3d9\uae30 \ub370\uc774\ud130\ub97c Recoil\uc758 \ub370\uc774\ud130 \ud50c\ub85c\uc6b0 \uadf8\ub798\ud504\ub85c \ud3ec\ud568\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Selector\ub294 "idempotent" \ud568\uc218\ub97c \ub300\ud45c\ud55c\ub2e4\ub294 \uac83\uc744 \uc219\uc9c0\ud558\uace0 \uc788\uc5b4\uc57c\ud569\ub2c8\ub2e4: \uc8fc\uc5b4\uc9c4 \uc778\ud48b\ub4e4\ub85c \ud56d\uc0c1 \uac19\uc740 \uacb0\uacfc\ub97c \ub9cc\ub4e4\uc5b4\ub0c5\ub2c8\ub2e4.(\uc801\uc5b4\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0dd\uba85\uc8fc\uae30\ub3d9\uc548\uc740 \ub9d0\uc774\uc8e0). \uc774\uac83\uc740 selector \ud3c9\uac00\uac00 \uce90\uc2dc\ub418\uac70\ub098, \uc7ac\uc2dc\uc791\ub418\uac70\ub098, \ud639\uc740 \uc218\ucc28\ub840\uc5d0 \uac78\uccd0\uc11c \uc2e4\ud589\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \uc911\uc694\ud569\ub2c8\ub2e4. selector\uac00 \ubcf4\ud1b5 \uc77d\uae30 \uc804\uc6a9 DB \ucffc\ub9ac\ub97c \ubaa8\ub378\ub9c1\ud558\ub294\ub370\uc5d0 \uc88b\uc740 \ubc29\ubc95\uc774\ub77c\uace0 \ud558\ub294 \uc774\uc720\ub3c4 \uc774 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ubcc0\uacbd \uac00\ub2a5\ud55c \ub370\uc774\ud130\uc758 \uacbd\uc6b0, ',Object(o.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/guides/asynchronous-data-queries#query-refresh"},"Query Refresh"),"\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 \ubcc0\uacbd\uac00\ub2a5\ud55c \uc0c1\ud0dc\ub97c \ub3d9\uae30\ud654\ud558\uac70\ub098 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uac70\ub098 \ud639\uc740 \ub2e4\ub978 \ubd80\uc218\ud6a8\uacfc\uc5d0 \ub300\ud574\uc11c \uc2e4\ud5d8\uc801\uc778 ",Object(o.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/guides/atom-effects"},"Atom Effects")," API\ub97c \uc0dd\uac01\ud574\ubcfc\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h2",{id:"synchronous-example-\ub3d9\uae30-\uc608\uc81c"},"Synchronous Example (\ub3d9\uae30 \uc608\uc81c)"),Object(o.b)("p",null,"\uc5ec\uae30 user \uc774\ub984\uc744 \uc5bb\uae30\uc704\ud55c \uac04\ub2e8\ud55c \ub3d9\uae30 atom \uacfc selector\ub97c \uc608\ub85c \ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n});\n\nconst currentUserNameState = selector({\n  key: 'CurrentUserName',\n  get: ({get}) => {\n    return tableOfUsers[get(currentUserIDState)].name;\n  },\n});\n\nfunction CurrentUserInfo() {\n  const userName = useRecoilValue(currentUserNameState);\n  return <div>{userName}</div>;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <CurrentUserInfo />\n    </RecoilRoot>\n  );\n}\n")),Object(o.b)("h2",{id:"asynchronous-example-\ube44\ub3d9\uae30-\uc608\uc81c"},"Asynchronous Example (\ube44\ub3d9\uae30 \uc608\uc81c)"),Object(o.b)("p",null,"\ub9cc\uc57d user\uc758 \uc774\ub984\uc774 \ucffc\ub9ac \ud574\uc57c\ud558\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\uc5c8\ub2e4\uba74, ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),"\ub97c \ub9ac\ud134\ud558\uac70\ub098 \ud639\uc740 ",Object(o.b)("inlineCode",{parentName:"p"},"async")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. \uc758\uc874\uc131\uc5d0 \ud558\ub098\ub77c\ub3c4 \ubcc0\uacbd\uc810\uc774 \uc0dd\uae34\ub2e4\uba74, selector\ub294 \uc0c8\ub85c\uc6b4 \ucffc\ub9ac\ub97c \uc7ac\ud3c9\uac00\ud558\uace0 \ub2e4\uc2dc \uc2e4\ud589\uc2dc\ud0ac\uac81\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uacb0\uacfc\ub294 \ucffc\ub9ac\uac00 \uc720\ub2c8\ud06c\ud55c \uc778\ud48b\uc774 \uc788\uc744 \ub54c\uc5d0\ub9cc \uc2e4\ud589\ub418\ub3c4\ub85d \uce90\uc2dc\ub429\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const currentUserNameQuery = selector({\n  key: 'CurrentUserName',\n  get: async ({get}) => {\n    const response = await myDBQuery({\n      userID: get(currentUserIDState),\n    });\n    return response.name;\n  },\n});\n\nfunction CurrentUserInfo() {\n  const userName = useRecoilValue(currentUserNameQuery);\n  return <div>{userName}</div>;\n}\n")),Object(o.b)("p",null,"Selector\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub294 \ub3d9\uc77c\ud558\ubbc0\ub85c \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 selector\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \ub3d9\uae30 atom \uc0c1\ud0dc\ub098 \ud30c\uc0dd\ub41c selector \uc0c1\ud0dc, \ud639\uc740 \ube44\ub3d9\uae30 \ucffc\ub9ac\ub97c \uc9c0\uc6d0\ud558\ub294\uc9c0 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc544\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4!"),Object(o.b)("p",null,"\ud558\uc9c0\ub9cc, React \ub80c\ub354 \ud568\uc218\uac00 \ub3d9\uae30\uc778\ub370 promise\uac00 resolve \ub418\uae30 \uc804\uc5d0 \ubb34\uc5c7\uc744 \ub80c\ub354 \ud560 \uc218 \uc788\uc744\uae4c\uc694? Recoil\uc740 \ubcf4\ub958\uc911\uc778 \ub370\uc774\ud130\ub97c \ub2e4\ub8e8\uae30 \uc704\ud574 ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),"\uc640 \ud568\uaed8 \ub3d9\uc791\ud558\ub3c4\ub85d \ub514\uc790\uc778\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub97c Suspense\uc758 \uacbd\uacc4\ub85c \uac10\uc2f8\ub294 \uac83\uc73c\ub85c \uc544\uc9c1 \ubcf4\ub958\uc911\uc778 \ud558\uc704 \ud56d\ubaa9\ub4e4\uc744 \uc7a1\uc544\ub0b4\uace0 \ub300\uccb4\ud558\uae30 \uc704\ud55c UI\ub97c \ub80c\ub354\ud569\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function MyApp() {\n  return (\n    <RecoilRoot>\n      <React.Suspense fallback={<div>Loading...</div>}>\n        <CurrentUserInfo />\n      </React.Suspense>\n    </RecoilRoot>\n  );\n}\n")),Object(o.b)("h2",{id:"error-handling-\uc5d0\ub7ec-\ucc98\ub9ac\ud558\uae30"},"Error Handling (\uc5d0\ub7ec \ucc98\ub9ac\ud558\uae30)"),Object(o.b)("p",null,"\ub9cc\uc57d \uc694\uccad\uc5d0 \uc5d0\ub7ec\uac00 \uc788\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694? Recoil selector\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud2b9\uc815 \uac12\uc744 \uc0ac\uc6a9\ud558\ub824\uace0 \ud560 \ub54c\uc5d0 \uc5b4\ub5a4 \uc5d0\ub7ec\uac00 \uc0dd\uae38\uc9c0\uc5d0 \ub300\ud55c \uc5d0\ub7ec\ub97c \ub358\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 React ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},Object(o.b)("inlineCode",{parentName:"a"},"<ErrorBoundary>")),"\ub85c \uc7a1\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc790\uba74:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const currentUserNameQuery = selector({\n  key: 'CurrentUserName',\n  get: async ({get}) => {\n    const response = await myDBQuery({\n      userID: get(currentUserIDState),\n    });\n    if (response.error) {\n      throw response.error;\n    }\n    return response.name;\n  },\n});\n\nfunction CurrentUserInfo() {\n  const userName = useRecoilValue(currentUserNameQuery);\n  return <div>{userName}</div>;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <ErrorBoundary>\n        <React.Suspense fallback={<div>Loading...</div>}>\n          <CurrentUserInfo />\n        </React.Suspense>\n      </ErrorBoundary>\n    </RecoilRoot>\n  );\n}\n")),Object(o.b)("h2",{id:"queries-with-parameters-\ub9e4\uac1c\ubcc0\uc218\uac00-\uc788\ub294-\ucffc\ub9ac"},"Queries with Parameters (\ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\ub294 \ucffc\ub9ac)"),Object(o.b)("p",null,"\uac00\ub054 \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub9cc\uc774 \uc544\ub2cc \ub9e4\uac1c\ubcc0\uc218\ub97c \uae30\ubc18\uc73c\ub85c \ucffc\ub9ac\ub97c \ud558\uace0\uc2f6\uc744 \ub54c\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ucef4\ud3ec\ub10c\ud2b8 props\ub97c \uae30\ubc18\uc73c\ub85c \ucffc\ub9ac\ub97c \ud558\uace0 \uc2f6\ub2e4\uace0 \ud574\ubd05\uc2dc\ub2e4. \uc774 \ub54c ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},Object(o.b)("strong",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"strong"},"selectorFamily")))," helper\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const userNameQuery = selectorFamily({\n  key: 'UserName',\n  get: (userID) => async () => {\n    const response = await myDBQuery({userID});\n    if (response.error) {\n      throw response.error;\n    }\n    return response.name;\n  },\n});\n\nfunction UserInfo({userID}) {\n  const userName = useRecoilValue(userNameQuery(userID));\n  return <div>{userName}</div>;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <ErrorBoundary>\n        <React.Suspense fallback={<div>Loading...</div>}>\n          <UserInfo userID={1} />\n          <UserInfo userID={2} />\n          <UserInfo userID={3} />\n        </React.Suspense>\n      </ErrorBoundary>\n    </RecoilRoot>\n  );\n}\n")),Object(o.b)("h2",{id:"data-flow-graph"},"Data-Flow Graph"),Object(o.b)("p",null,"\ucffc\ub9ac\ub97c selector\ub85c \ubaa8\ub378\ub9c1\ud558\uba74 \uc0c1\ud0dc\uc640 \ud30c\uc0dd\ub41c \uc0c1\ud0dc, \uadf8\ub9ac\uace0 \ucffc\ub9ac\ub97c \ud63c\ud569\ud55c \ub370\uc774\ud130 \ud50c\ub85c\uc6b0 \uadf8\ub798\ud504\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4! \uc774 \uadf8\ub798\ud504\ub294 \uc0c1\ud0dc\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uba74 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ub9ac\ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\ub2e4\uc74c \uc608\uc2dc\ub294 \ucd5c\uadfc \uc720\uc800\uc758 \uc774\ub984\uacfc \uadf8\ub4e4\uc758 \uce5c\uad6c \ub9ac\uc2a4\ud2b8\ub97c \ub80c\ub354\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uce5c\uad6c\uc758 \uc774\ub984\uc774 \ud074\ub9ad\ub418\uba70, \uadf8 \uc774\ub984\uc774 \ucd5c\uadfc \uc720\uc800\uac00 \ub418\uba70 \uc774\ub984\uacfc \ub9ac\uc2a4\ud2b8\ub294 \uc790\ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub420\uac81\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: null,\n});\n\nconst userInfoQuery = selectorFamily({\n  key: 'UserInfoQuery',\n  get: (userID) => async () => {\n    const response = await myDBQuery({userID});\n    if (response.error) {\n      throw response.error;\n    }\n    return response;\n  },\n});\n\nconst currentUserInfoQuery = selector({\n  key: 'CurrentUserInfoQuery',\n  get: ({get}) => get(userInfoQuery(get(currentUserIDState))),\n});\n\nconst friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    return friendList.map((friendID) => get(userInfoQuery(friendID)));\n  },\n});\n\nfunction CurrentUserInfo() {\n  const currentUser = useRecoilValue(currentUserInfoQuery);\n  const friends = useRecoilValue(friendsInfoQuery);\n  const setCurrentUserID = useSetRecoilState(currentUserIDState);\n  return (\n    <div>\n      <h1>{currentUser.name}</h1>\n      <ul>\n        {friends.map((friend) => (\n          <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>\n            {friend.name}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <ErrorBoundary>\n        <React.Suspense fallback={<div>Loading...</div>}>\n          <CurrentUserInfo />\n        </React.Suspense>\n      </ErrorBoundary>\n    </RecoilRoot>\n  );\n}\n")),Object(o.b)("h2",{id:"concurrent-requests-\ub3d9\uc2dc-\uc694\uccad"},"Concurrent Requests (\ub3d9\uc2dc \uc694\uccad)"),Object(o.b)("p",null,"\uc704\uc758 \uc608\uc2dc\uc5d0\uc11c \ub208\uce58\ucc44\uc168\ub294\uc9c0 \ubaa8\ub974\uaca0\uc9c0\ub9cc, ",Object(o.b)("inlineCode",{parentName:"p"},"friendsInfoQuery")," \ub294 \ucffc\ub9ac\ub97c \uc774\uc6a9\ud558\uc5ec \uac01 \uce5c\uad6c\uc5d0 \ub300\ud55c \uc790\ub8cc\ub97c \ubc1b\uc544\uc635\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub97c \ub8e8\ud504\ud558\ub294 \uac83\uc73c\ub85c \uae30\ubcf8\uc801\uc73c\ub85c \uc9c1\ub82c\ud654\ub429\ub2c8\ub2e4. \uac80\uc0c9\uc774 \ube60\ub974\ub2e4\uba74 \uadf8\uac83\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. \uc790\uc6d0\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",Object(o.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/utils/waitForAll/"},Object(o.b)("inlineCode",{parentName:"a"},"waitForAll")),"\uacfc \uac19\uc740 concurrent helper\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcd1\ub82c\ub85c \ub3cc\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 helper\ub294 \ubc30\uc5f4\uacfc \uc758\uc874\uc131\uc774 \ub2f4\uae34 \ub124\uc784\ub4dc \uac1d\uccb4\ub97c \ud5c8\uc6a9\ud569\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friends = get(\n      waitForAll(friendList.map((friendID) => userInfoQuery(friendID))),\n    );\n    return friends;\n  },\n});\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},Object(o.b)("inlineCode",{parentName:"a"},"waitForNone")),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc77c\ubd80 \ub370\uc774\ud130\ub85c \ucd94\uac00\uc801\uc778 UI \uc5c5\ub370\uc774\ud2b8\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friendLoadables = get(\n      waitForNone(friendList.map((friendID) => userInfoQuery(friendID))),\n    );\n    return friendLoadables\n      .filter(({state}) => state === 'hasValue')\n      .map(({contents}) => contents);\n  },\n});\n")),Object(o.b)("h2",{id:"pre-fetching-\ubbf8\ub9ac-\uac00\uc838\uc624\uae30"},"Pre-Fetching (\ubbf8\ub9ac \uac00\uc838\uc624\uae30)"),Object(o.b)("p",null,"\uc131\ub2a5 \ubb38\uc81c\ub85c \ub80c\ub354\ub9c1 \uc774\uc804\uc5d0 \ubc1b\uc544\uc624\uae30\ub97c \uc2dc\uc791\ud558\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ubc29\ubc95\uc740 \ub80c\ub354\ub9c1\uc744 \ud558\uba74\uc11c \ucffc\ub9ac\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. React docs\uc5d0\uc11c \uba87 \uac00\uc9c0 \uc608\uc2dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud328\ud134\uc740 Recoil\uc5d0\uc11c\ub3c4 \ub3d9\uc791\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\uc704\uc758 \uc608\uc2dc\ub97c \ubc14\uafd4 \uc0ac\uc6a9\uc790\uac00 \uc720\uc800\uacc4\uc815\uc744 \ubc14\uafb8\uae30 \uc704\ud574\uc11c \ubc84\ud2bc\uc744 \ub204\ub974\uc790\ub9c8\uc790 \ub2e4\uc74c \uc720\uc800 \uc815\ubcf4\ub97c \ubc1b\uc544\uc624\uae30 \uc2dc\uc791\ud558\ub294 \ud615\ud0dc\ub85c \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function CurrentUserInfo() {\n  const currentUser = useRecoilValue(currentUserInfoQuery);\n  const friends = useRecoilValue(friendsInfoQuery);\n\n  const changeUser = useRecoilCallback(({snapshot, set}) => (userID) => {\n    snapshot.getLoadable(userInfoQuery(userID)); // pre-fetch user info\n    set(currentUserIDState, userID); // change current user to start new render\n  });\n\n  return (\n    <div>\n      <h1>{currentUser.name}</h1>\n      <ul>\n        {friends.map((friend) => (\n          <li key={friend.id} onClick={() => changeUser(friend.id)}>\n            {friend.name}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n")),Object(o.b)("h2",{id:"query-default-atom-values-\uae30\ubcf8-atom-\uac12-\ucffc\ub9ac"},"Query Default Atom Values (\uae30\ubcf8 Atom \uac12 \ucffc\ub9ac)"),Object(o.b)("p",null,"Atom\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubcc0\uacbd \uac00\ub2a5\ud55c \ub85c\uceec \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\uc9c0\ub9cc, selector\ub97c \uc0ac\uc6a9\ud558\uc5ec \uae30\ubcf8\uac12\uc744 \ucffc\ub9ac\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc778 \ud328\ud134\uc785\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: selector({\n    key: 'CurrentUserID/Default',\n    get: () => myFetchCurrentUserID(),\n  }),\n});\n")),Object(o.b)("p",null,"\ub9cc\uc57d \uc591\ubc29\ud5a5 \ub370\uc774\ud130 \ub3d9\uae30\ud654\ub97c \uc6d0\ud55c\ub2e4\uba74 ",Object(o.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/guides/atom-effects"},"atom effects"),"\ub97c \uace0\ub824\ud574\ubcf4\ub294 \uac83\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),Object(o.b)("h2",{id:"async-queries-without-react-suspense-react-suspense\ub97c-\uc0ac\uc6a9\ud558\uc9c0-\uc54a\uc740-\ube44\ub3d9\uae30-\ucffc\ub9ac"},"Async Queries Without React Suspense (React Suspense\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 \ube44\ub3d9\uae30 \ucffc\ub9ac)"),Object(o.b)("p",null,"\ubcf4\ub958\uc911\uc778 \ube44\ub3d9\uae30 selector\ub97c \ub2e4\ub8e8\uae30 \uc704\ud574\uc11c React Suspense\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ud544\uc218\ub294 \uc544\ub2d9\ub2c8\ub2e4. ",Object(o.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/useRecoilValueLoadable"},Object(o.b)("inlineCode",{parentName:"a"},"useRecoilValueLoadable()"))," hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub80c\ub354\ub9c1 \uc911 \uc0c1\ud0dc(status)\ub97c \ud655\uc778\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")),Object(o.b)("h2",{id:"query-refresh-\ucffc\ub9ac-\uc0c8\ub85c\uace0\uce68"},"Query Refresh (\ucffc\ub9ac \uc0c8\ub85c\uace0\uce68)"),Object(o.b)("p",null,"selector\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130 \ucffc\ub9ac\ub97c \ubaa8\ub378\ub9c1 \ud560 \ub54c, selector \ud3c9\uac00\uac00 \ud56d\uc0c1 \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ub300\ud574\uc11c \uc77c\uad00\uc801\uc778 \uac12\uc744 \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \uae30\uc5b5\ud574\uc57c \ud569\ub2c8\ub2e4. Selector\ub294 \ub2e4\ub978 atom\uacfc selector \uc0c1\ud0dc\ub4e4\uc5d0\uc11c \ud30c\uc0dd\ub418\ub294 \uc0c1\ud0dc\ub4e4\uc744 \ub300\ud45c\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c selector \ud3c9\uac00 \ud568\uc218\ub4e4\uc740 \uc8fc\uc5b4\uc9c4 \uc778\ud48b\uc5d0 \uad00\ud574\uc11c \uc5ec\ub7ec\ubc88 \uce90\uc2dc\ub418\uace0 \uc2e4\ud589\ub418\ub354\ub77c\ub3c4 idempotent(\uba71\ub4f1)\ud574\uc57c \ud569\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \ub2e8\uc77c selector\ub294 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0dd\uba85\uc8fc\uae30 \ub3d9\uc548 \uacb0\uacfc\uacfc \ub2e4\uc591\ud558\uac8c \ub098\uc62c\uac70\ub77c \uc608\uc0c1\ud558\ub294 \ucffc\ub9ac\uc5d0 \uc0ac\uc6a9\ub418\uba74 \uc548\ub428\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),Object(o.b)("p",null,"\ubcc0\uacbd\uac00\ub2a5\ud55c \ub370\uc774\ud130\ub97c \ub2e4\ub8e8\uae30\uc704\ud574\uc11c \uba87 \uac00\uc9c0 \ud328\ud134\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"use-a-request-id-\uc694\uccad-id-\uc0ac\uc6a9\ud558\uae30"},"Use a Request ID (\uc694\uccad ID \uc0ac\uc6a9\ud558\uae30)"),Object(o.b)("p",null,"Selector \ud3c9\uac00\ub294 \uc778\ud48b\uc744 \ubc14\ud0d5\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \uc77c\uad00\ub41c \uac12\uc744 \uc81c\uacf5\ud574\uc57c\ud569\ub2c8\ub2e4(\uc885\uc18d\ub41c \uc0c1\ud0dc, \ud639\uc740 \ud328\ubc00\ub9ac \ub9e4\uac1c\ubcc0\uc218). \ub530\ub77c\uc11c \uc694\uccad ID\ub97c \ud328\ubc00\ub9ac \ub9e4\uac1c\ubcc0\uc218 \ud639\uc740 \ucffc\ub9ac\uc5d0 \ub300\ud55c \uc885\uc18d\uc131\uc73c\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const userInfoQueryRequestIDState = atomFamily({\n  key: 'UserInfoQueryRequestID',\n  default: 0,\n});\n\nconst userInfoQuery = selectorFamily({\n  key: 'UserInfoQuery',\n  get: (userID) => async ({get}) => {\n    get(userInfoQueryRequestIDState(userID)); // Add request ID as a dependency\n    const response = await myDBQuery({userID});\n    if (response.error) {\n      throw response.error;\n    }\n    return response;\n  },\n});\n\nfunction useRefreshUserInfo(userID) {\n  setUserInfoQueryRequestID = useSetRecoilState(\n    userInfoQueryRequestIDState(userID),\n  );\n  return () => {\n    setUserInfoQueryRequestID((requestID) => requestID + 1);\n  };\n}\n\nfunction CurrentUserInfo() {\n  const currentUserID = useRecoilValue(currentUserIDState);\n  const currentUserInfo = useRecoilValue(userInfoQuery(currentUserID));\n  const refreshUserInfo = useRefreshUserInfo(currentUserID);\n\n  return (\n    <div>\n      <h1>{currentUser.name}</h1>\n      <button onClick={refreshUserInfo}>Refresh</button>\n    </div>\n  );\n}\n")),Object(o.b)("h3",{id:"use-an-atom-atom-\uc0ac\uc6a9\ud558\uae30"},"Use an Atom (Atom \uc0ac\uc6a9\ud558\uae30)"),Object(o.b)("p",null,"\ub610 \ub2e4\ub978 \ubc29\ubc95\uc740 selector \ub300\uc2e0 atom\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucffc\ub9ac \uacb0\uacfc\ub97c \ubaa8\ub378\ub9c1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. Atom \uc0c1\ud0dc\ub97c \uc0c8\ub85c\uc6b4 \ucffc\ub9ac \uacb0\uacfc\ub97c \ub3c5\uc790\uc801\uc778 \uc0c8\ub85c\uace0\uce68 \ubc29\uce68\uc5d0 \ub9de\ucd94\uc5b4 \uba85\ub839\uc801\uc73c\ub85c(imperatively) \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: (userID) => fetch(userInfoURL(userID)),\n});\n\n// React component to refresh query\nfunction RefreshUserInfo({userID}) {\n  const refreshUserInfo = useRecoilCallback(\n    ({set}) => async (id) => {\n      const userInfo = await myDBQuery({userID});\n      set(userInfoState(userID), userInfo);\n    },\n    [userID],\n  );\n\n  // Refresh user info every second\n  useEffect(() => {\n    const intervalID = setInterval(refreshUserInfo, 1000);\n    return () => clearInterval(intervalID);\n  }, [refreshUserInfo]);\n\n  return null;\n}\n")),Object(o.b)("p",null,"\uc774 \uc811\uadfc \ubc29\ubc95\uc5d0\ub294 \ud55c\uac00\uc9c0 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. Atom\uc774 \ud604\uc7ac \uc6d0\ud558\ub294 \ub3d9\uc791\uc77c \uacbd\uc6b0, \ucffc\ub9ac \uc0c8\ub85c\uace0\uce68\uc774 \ubcf4\ub958\uc911\uc778 \ub3d9\uc548 React Suspense\ub97c \uc790\ub3d9\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\uae30 \uc704\ud574\uc11c Promise\ub97c \uc0c8 \uac12\uc73c\ub85c \ubc1b\uc544\ub4e4\uc774\ub294 \uac83\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc6d0\ud55c\ub2e4\uba74 \ub85c\ub529 \uc0c1\ud0dc\uc640 \uacb0\uacfc\ub97c \uc218\ub3d9\uc73c\ub85c \uc778\ucf54\ub529 \ud558\ub294 \uac1d\uccb4\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("p",null,"Atom\uc758 \ucffc\ub9ac \ub3d9\uae30\ud654\ub97c \uc704\ud574\uc11c ",Object(o.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/guides/atom-effects"},"atom effects"),"\ub3c4 \uace0\ub824\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}i.isMDXComponent=!0},151:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),s=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=s.a.createContext({}),i=function(e){var n=s.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=i(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},f=s.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=i(r),f=t,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return r?s.a.createElement(b,u(u({ref:n},l),{},{components:r})):s.a.createElement(b,u({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);