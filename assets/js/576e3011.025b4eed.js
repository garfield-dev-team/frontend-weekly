"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[3535],{46949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>k,toc:()=>m});var a=n(64778),p=(n(59496),n(49613)),r=n(11983),l=n(75707),s=n(43257),o=n(73004);const i={slug:"1\u67089\u65e5\u5185\u5bb9\u6c47\u603b",title:"1\u67089\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["\u5de5\u7a0b\u5316\u65b9\u6848","TypeScript","monorepo","QUIC","CRA","\u61d2\u52a0\u8f7d","IDEA","\u9759\u6001\u9875\u9762\u90e8\u7f72","Webpack HMR","Diff","Vue","React","\u5e74\u5ea6\u9ad8\u8d5e\u6587\u7ae0","VS Code","\u9ed1\u6697\u6a21\u5f0f\u9002\u914d","PostCSS","NextJS","\u524d\u7aef\u6280\u672f\u65b9\u5411"]},c=void 0,k={permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/1\u67089\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2022/2022-01-09/index.md",source:"@site/blogs/2022/2022-01-09/index.md",title:"1\u67089\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 Golang \u6a21\u62df JS \u7684 Promise",date:"2022-01-09T00:00:00.000Z",formattedDate:"January 9, 2022",tags:[{label:"\u5de5\u7a0b\u5316\u65b9\u6848",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/\u5de5\u7a0b\u5316\u65b9\u6848"},{label:"TypeScript",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/type-script"},{label:"monorepo",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/monorepo"},{label:"QUIC",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/quic"},{label:"CRA",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/cra"},{label:"\u61d2\u52a0\u8f7d",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/\u61d2\u52a0\u8f7d"},{label:"IDEA",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/idea"},{label:"\u9759\u6001\u9875\u9762\u90e8\u7f72",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/\u9759\u6001\u9875\u9762\u90e8\u7f72"},{label:"Webpack HMR",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/webpack-hmr"},{label:"Diff",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/diff"},{label:"Vue",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/vue"},{label:"React",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/react"},{label:"\u5e74\u5ea6\u9ad8\u8d5e\u6587\u7ae0",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/\u5e74\u5ea6\u9ad8\u8d5e\u6587\u7ae0"},{label:"VS Code",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/vs-code"},{label:"\u9ed1\u6697\u6a21\u5f0f\u9002\u914d",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/\u9ed1\u6697\u6a21\u5f0f\u9002\u914d"},{label:"PostCSS",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/post-css"},{label:"NextJS",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/next-js"},{label:"\u524d\u7aef\u6280\u672f\u65b9\u5411",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/tags/\u524d\u7aef\u6280\u672f\u65b9\u5411"}],readingTime:9.835,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"1\u67089\u65e5\u5185\u5bb9\u6c47\u603b",title:"1\u67089\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["\u5de5\u7a0b\u5316\u65b9\u6848","TypeScript","monorepo","QUIC","CRA","\u61d2\u52a0\u8f7d","IDEA","\u9759\u6001\u9875\u9762\u90e8\u7f72","Webpack HMR","Diff","Vue","React","\u5e74\u5ea6\u9ad8\u8d5e\u6587\u7ae0","VS Code","\u9ed1\u6697\u6a21\u5f0f\u9002\u914d","PostCSS","NextJS","\u524d\u7aef\u6280\u672f\u65b9\u5411"]},prevItem:{title:"1\u670816\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/1\u670816\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"1\u67082\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/1\u67082\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},m=[],h={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,p.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ud83d\udcd2 Golang \u6a21\u62df JS \u7684 Promise"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV11v411h7t5"},"https://www.bilibili.com/video/BV11v411h7t5")),(0,p.kt)("p",null,"\ud83d\udcd2 Golang \u5982\u4f55\u901a\u8fc7 WebAssembly \u8c03\u7528 JS API"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/elliotforbes/go-webassembly-framework"},"https://github.com/elliotforbes/go-webassembly-framework")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7039850183244382216"},"\u300c\u76ee\u524d\u5168\u7f51\u552f\u4e00&2\u4e07\u5b57\u957f\u6587\u300d\u4eceJS\u4e0a\u4e0b\u6587\u5230Chromium\u6e90\u7801\u7684\u6781\u9650\u62c9\u626f\uff01!\u5144\u5f1f\u59d0\u59b9\u4eec\u63a5\u597d\u4e86\uff01\uff01")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6932367804108800007"},"\u6d45\u8c08 Vite 2.0 \u539f\u7406\uff0c\u4f9d\u8d56\u9884\u7f16\u8bd1\uff0c\u63d2\u4ef6\u673a\u5236\u662f\u5982\u4f55\u517c\u5bb9 Rollup \u7684\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 JS \u4e24\u4e2a\u6ce8\u610f\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u67d0\u5c5e\u6027\uff0c\u901a\u5e38\u90fd\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty.call()"),"\u3002\u6709\u540c\u5b66\u95ee\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u76f4\u63a5 ",(0,p.kt)("inlineCode",{parentName:"p"},"obj.hasOwnProperty()")," \u53bb\u5224\u65ad\uff0c\u56e0\u4e3a\u6709\u4e9b\u5bf9\u8c61\u662f\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"Object.create(null)")," \u521b\u5efa\u7684\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u539f\u578b\u4e0a\u5c31\u8bbf\u95ee\u4e0d\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"hasOwnProperty"),"\uff0c\u5fc5\u987b\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"Object.prototype.hasOwnProperty.call()"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"ES2016 \u65b0\u589e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," \u53ef\u4ee5\u8bc6\u522b ",(0,p.kt)("inlineCode",{parentName:"p"},"NaN"),"\uff0c\u800c ",(0,p.kt)("inlineCode",{parentName:"p"},"Array.prototype.indexOf()")," \u4e0d\u80fd\u8bc6\u522b\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const arr = ['es6', 'es7', NaN, 'es8'];\narr.includes(NaN); // true\narr.indexOf(NaN); // -1\n")))),(0,p.kt)("p",null,"\ud83d\udcd2 \u4eca\u5e74\u6700\u53d7\u6b22\u8fce\u7684\u9879\u76ee\uff1a\u8c37\u6b4c\u7684 ",(0,p.kt)("strong",{parentName:"p"},"zx")),(0,p.kt)("p",null,"\u4f7f\u7528 zx \u53ef\u4ee5\u7f16\u5199\u7b80\u5355\u7684\u547d\u4ee4\u884c\u811a\u672c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env zx\n\nawait $`cat package.json | grep name`\n\nlet branch = await $`git branch --show-current`\nawait $`dep deploy --branch=${branch}`\n\nawait Promise.all([\n  $`sleep 1; echo 1`,\n  $`sleep 2; echo 2`,\n  $`sleep 3; echo 3`,\n])\n\nlet name = 'foo bar'\nawait $`mkdir /tmp/${name}`\n")),(0,p.kt)("p",null,"zx \u6db5\u76d6\u4e86\u591a\u4e2a\u8f6f\u4ef6\u5305\u63d0\u4f9b\u7684\u529f\u80fd\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"node-fetch"),"\uff1a\u4f7f\u7528\u4e0e\u6d4f\u89c8\u5668\u4e2d\u76f8\u540c\u7684 API \u53d1\u51fa HTTP \u8bf7\u6c42"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"fs-extra"),"\uff1a\u8fd0\u884c\u6587\u4ef6\u7cfb\u7edf")),(0,p.kt)("p",null,"\u8fd9\u5757\u6e90\u7801\u4e0d\u662f\u5f88\u591a\uff0c\u63a8\u8350\u770b\u4e00\u4e0b\uff1a"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/google/zx"},"https://github.com/google/zx")),(0,p.kt)("p",null,"\ud83d\udcd2 \u5de5\u7a0b\u5316\u65b9\u6848\u603b\u7ed3\u4e0b"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/403970666"},"2021 \u5e74 TypeScript + React \u5de5\u7a0b\u5316\u6307\u5357")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7017710911443959839"},"2021 \u5e74\u5f53\u6211\u4eec\u804a\u524d\u7aef\u90e8\u7f72\u65f6\uff0c\u6211\u4eec\u5728\u804a\u4ec0\u4e48")),(0,p.kt)("p",null,"\ud83d\udcd2 TypeScript \u7c7b\u578b\u4f53\u64cd"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-x8iVK-hlQd3-OZDC04A5A"},"TypeScript \u7c7b\u578b\u7f16\u7a0b: \u4ece\u57fa\u7840\u5230\u7f16\u8bd1\u5668\u5b9e\u6218")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7050099282317148174"},"\u77e5\u5176\u7136\uff0c\u77e5\u5176\u6240\u4ee5\u7136\uff1aTypeScript \u4e2d\u7684\u534f\u53d8\u4e0e\u9006\u53d8")),(0,p.kt)("p",null,"\ud83d\udcd2 monorepo \u9879\u76ee"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7043998041786810398"},"One For All\uff1a\u57fa\u4e8epnpm + lerna + typescript\u7684\u6700\u4f73\u9879\u76ee\u5b9e\u8df5 - \u7406\u8bba\u7bc7")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Yo-W7CbkOrBMSfK75qrAhg"},"\u6f2b\u753b\u56fe\u89e3 Chrome \u6d4f\u89c8\u5668\u4ece\u8f93\u5165\u5230\u6e32\u67d3\u7684\u539f\u7406\uff087000 \u5b57\uff09")),(0,p.kt)("p",null,"\ud83d\udcd2 QUIC \u534f\u8bae"),(0,p.kt)("p",null,"\u63a8\u8350\u770b\u770b QUIC 101 \u89c6\u9891\u4ee5\u53ca ",(0,p.kt)("a",{parentName:"p",href:"https://courses.cs.washington.edu/courses/cse550/20au/papers/CSE550.quic.pdf"},"The QUIC transport protocol: design and Internet-scale deployment")," \u8bba\u6587"),(0,p.kt)("p",null,"\ud83d\udcd2 ES2015+ \u7684\u4ee3\u7801\u8981\u4e0d\u8981\u8f6c\u4e3a ES5"),(0,p.kt)("p",null,"Babel \u4e3b\u8981\u505a\u4e86\u4e24\u4ef6\u4e8b\uff0c\u4e00\u662f\u8bed\u6cd5\u8f6c\u6362\uff0c\u4e8c\u662f api \u517c\u5bb9\uff0c\u5176\u4e2d api \u517c\u5bb9\u662f\u901a\u8fc7\u5f15\u5165 core-js \u7684 polyfill \u5b9e\u73b0\u7684\u3002\u4e00\u822c\u6765\u8bf4\u8f6c\u6362\u4e4b\u540e\u4f53\u79ef\u80af\u5b9a\u4f1a\u589e\u5927\uff0c\u5e76\u4e14\u5f88\u591a\u8bed\u6cd5\u8f6c\u6362\u7684\u65f6\u5019\u4f1a\u5f15\u5165 helper \u51fd\u6570\uff0c\u8fd9\u5c31\u4ea7\u751f\u4e86\u526f\u4f5c\u7528\uff0c\u5bfc\u81f4\u65e0\u6cd5 Tree-Shaking\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7049696761858195486"},"ES6 \u4ee5\u4e0a\u7248\u672c\u4ee3\u7801\u8981\u4e0d\u8981\u8f6c\u7801\u6210 ES5?")),(0,p.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u8986\u76d6 CRA \u9ed8\u8ba4 webpack \u914d\u7f6e"),(0,p.kt)("details",null,(0,p.kt)("summary",null,"\u67e5\u770b\u8be6\u60c5"),(0,p.kt)("p",null,"\u5728 CRA \u521b\u5efa\u7684\u9879\u76ee\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u4fee\u6539\u9ed8\u8ba4 webpack \u914d\u7f6e\u3002\u4f46\u662f CRA \u4e0d\u50cf Vue-cli \u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49 webpack \u914d\u7f6e\uff0c\u800c ",(0,p.kt)("inlineCode",{parentName:"p"},"eject")," \u53c8\u4f1a\u628a\u5168\u90e8\u914d\u7f6e\u66b4\u9732\u51fa\u6765\uff0c\u5f88\u9ebb\u70e6\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"react-app-rewired")," \u8fd9\u4e2a\u5e93\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add react-app-rewired -D\n")),(0,p.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," \u6587\u4ef6\uff0c\u6dfb\u52a0\u81ea\u5b9a\u4e49 webpack \u914d\u7f6e\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"/* config-overrides.js */\n\nmodule.exports = function override(config, env) {\n  //do stuff with the webpack config...\n  return config;\n}\n")),(0,p.kt)("p",null,"\u6700\u540e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u4fee\u6539 npm scripts\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json",metastring:"{5,7,9}","{5,7,9}":!0},'/* package.json */\n\n  "scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test",\n    "eject": "react-scripts eject"\n}\n')),(0,p.kt)("p",null,"\u8fd9\u4e2a\u5e93\u6e90\u7801\u4e0d\u662f\u5f88\u591a\uff0c\u63a8\u8350\u770b\u4e00\u4e0b\uff1a"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"https://github.com/timarney/react-app-rewired")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u901a\u5e38 ",(0,p.kt)("inlineCode",{parentName:"p"},"react-app-rewired")," \u4f1a\u642d\u914d ",(0,p.kt)("inlineCode",{parentName:"p"},"customize-cra")," \u8fd9\u4e2a\u5e93\u4e00\u8d77\u7528\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add customize-cra react-app-rewired -D\n")),(0,p.kt)("p",{parentName:"admonition"},"\u652f\u6301\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," \u4e2d\u7f16\u5199\u51fd\u6570\u5f0f\u7684 API \u53bb\u4fee\u6539 webpack \u914d\u7f6e\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},'const {\n  override,\n  addDecoratorsLegacy,\n  disableEsLint,\n  addWebpackAlias\n} = require("customize-cra");\nconst path = require("path");\n\nmodule.exports = override(\n  // enable legacy decorators babel plugin\n  addDecoratorsLegacy(),\n\n  // disable eslint in webpack\n  disableEsLint(),\n\n  // add an alias for "ag-grid-react" imports\n  addWebpackAlias({\n    ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")\n  }),\n);\n')),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/arackaf/customize-cra"},"https://github.com/arackaf/customize-cra")))),(0,p.kt)("p",null,"\ud83d\udcd2 React \u7ec4\u4ef6\u61d2\u52a0\u8f7d\u5b9e\u73b0\u601d\u8def"),(0,p.kt)("p",null,"\u9879\u76ee\u4e2d\u7ecf\u5e38\u9700\u8981\u957f\u5217\u8868\u6e32\u67d3\uff0c\u4e00\u822c\u90fd\u4f7f\u7528\u61d2\u52a0\u8f7d\uff0c\u6eda\u52a8\u5230\u5e95\u90e8\u65f6\u6e32\u67d3\u4e0b\u4e00\u5c4f\u6570\u636e\uff0c\u9700\u8981\u5224\u65ad\u5143\u7d20\u662f\u5426\u5728 viewport \u5185\u3002\u8fc7\u53bb\u901a\u5e38\u4f1a\u76d1\u542c\u6eda\u52a8\u4e8b\u4ef6\uff0c\u7136\u540e\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Element.getBoundingClientRect()")," \u65b9\u6cd5\u4ee5\u83b7\u53d6\u5143\u7d20\u7684\u8fb9\u754c\u4fe1\u606f\u3002\u7531\u4e8e\u6eda\u52a8\u4e8b\u4ef6\u89e6\u53d1\u975e\u5e38\u9891\u7e41\uff0c\u9891\u7e41\u8c03\u7528\u4f1a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u3002"),(0,p.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Intersection Observer API"),"\uff0c\u4ec5\u5728\u88ab\u76d1\u542c\u5143\u7d20\u8fdb\u5165\u6216\u8005\u9000\u51fa viewport \u65f6\u89e6\u53d1\u56de\u8c03\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u5927\u91cf\u5360\u7528\u4e3b\u7ebf\u7a0b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"let observer = new IntersectionObserver(callback, options);\nlet target = document.querySelector('#listItem');\nobserver.observe(target);\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u5728 React \u9879\u76ee\u4e2d\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"react-intersection-observer")," \u8fd9\u4e2a\u5e93\u3002"),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-intersection-observer/v/8.28.3"},"react-intersection-observer - npm"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API - MDN")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6955287500311150605"},"\u61d2\u52a0\u8f7d React \u957f\u9875\u9762 - \u52a8\u6001\u6e32\u67d3\u7ec4\u4ef6")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/RCBHBtAFaeR6wqsyuGI_hQ"},"\u5982\u4f55\u907f\u514d React \u7ec4\u4ef6\u91cd\u590d\u6e32\u67d3")),(0,p.kt)("p",null,"\ud83d\udcd2 React 16 \u67b6\u6784"),(0,p.kt)("p",null,"React16\u67b6\u6784\u53ef\u4ee5\u5206\u4e3a\u4e09\u5c42\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Scheduler\uff08\u8c03\u5ea6\u5668\uff09\u2014\u2014 \u6838\u5fc3\u804c\u8d23\u53ea\u6709 1 \u4e2a, \u5c31\u662f\u6267\u884c\u56de\u8c03\u3002\u628areact-reconciler\u63d0\u4f9b\u7684\u56de\u8c03\u51fd\u6570, \u5305\u88c5\u5230\u4e00\u4e2a\u4efb\u52a1\u5bf9\u8c61\u4e2d.\u5728\u5185\u90e8\u7ef4\u62a4\u4e00\u4e2a\u4efb\u52a1\u961f\u5217, \u4f18\u5148\u7ea7\u9ad8\u7684\u6392\u5728\u6700\u524d\u9762\u3002\u5faa\u73af\u6d88\u8d39\u4efb\u52a1\u961f\u5217, \u76f4\u5230\u961f\u5217\u6e05\u7a7a"),(0,p.kt)("li",{parentName:"ul"},"Reconciler\uff08\u534f\u8c03\u5668\uff09\u2014\u2014 \u8d1f\u8d23\u627e\u51fa\u53d8\u5316\u7684\u7ec4\u4ef6\uff0c16\u7248\u672c\u4e3b\u8981\u662fFiber\uff0c15\u7248\u672c\u662fstack\u3002\u533a\u522b\u5728\u4e8e\u589e\u52a0\u4e86\u4f18\u5148\u7ea7\u7cfb\u7edf\uff0c\u901a\u8fc7\u904d\u5386\u7684\u65b9\u5f0f\u5b9e\u73b0\u53ef\u4e2d\u65ad\u7684\u9012\u5f52\uff0c\u5c06fiber\u6811\u7684\u6784\u9020\u8fc7\u7a0b\u5305\u88c5\u5728\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d, \u5e76\u5c06\u6b64\u56de\u8c03\u51fd\u6570\u4f20\u5165\u5230scheduler\u5305\u7b49\u5f85\u8c03\u5ea6"),(0,p.kt)("li",{parentName:"ul"},"Renderer\uff08\u6e32\u67d3\u5668\uff09\u2014\u2014 \u8d1f\u8d23\u5c06\u53d8\u5316\u7684\u7ec4\u4ef6\u6e32\u67d3\u5230\u9875\u9762\u4e0a\uff0c\u80fd\u591f\u5c06react-reconciler\u5305\u6784\u9020\u51fa\u6765\u7684fiber\u6811\u8868\u73b0\u51fa\u6765, \u751f\u6210 dom \u8282\u70b9(\u6d4f\u89c8\u5668\u4e2d), \u751f\u6210\u5b57\u7b26\u4e32(ssr)\uff0c\u6bd4\u5982\u8bf4react-dom\u3001react-native\u3002\n\u6240\u4ee5react-native\u7684\u4f5c\u7528\u4e3b\u8981\u662f\u5c06react\u63d0\u4f9b\u7684\u8282\u70b9\uff0c\u6e32\u67d3\u5230app\u9875\u9762\u4e0a")),(0,p.kt)("p",null,"\u6211\u4eec\u4e66\u5199\u7684react-native\u7ec4\u4ef6\uff0c\u6bd4\u5982\u8bf4View\u3001Text\u7b49\uff0c\u9700\u8981\u901a\u8fc7react-native-web\u6765\u53d8\u6210react-dom\u53ef\u4ee5\u8bc6\u522b\u7684\u8282\u70b9"),(0,p.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u5728 JB \u5168\u5bb6\u6876\u4e2d\u4f7f\u7528 VS Code \u7684\u5feb\u6377\u952e"),(0,p.kt)("details",null,(0,p.kt)("summary",null,"\u67e5\u770b\u8be6\u60c5"),(0,p.kt)("p",null,"JB \u5168\u5bb6\u6876\uff0c\u4f8b\u5982 IDEA\u3001WebStorm\u3001GoLand \u7b49\u652f\u6301\u591a\u79cd keymap\uff0c\u5982\u8981\u4f7f\u7528 VS Code \u7684\u5feb\u6377\u952e\uff0c\u53ea\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684 Keymap \u5373\u53ef\uff1a"),(0,p.kt)(r.Z,{src:l.Z,mdxType:"Illustration"}),(0,p.kt)("p",null,"\u5b89\u88c5\u540e\u5e94\u7528\u5373\u53ef\uff1a"),(0,p.kt)(r.Z,{src:s.Z,mdxType:"Illustration"}),(0,p.kt)("p",null,"\u540c\u7406\u4e3b\u9898\u4e5f\u53ef\u4ee5\u5b89\u88c5\uff0c\u5728 JB \u5168\u5bb6\u6876\u4e2d\u63a8\u8350\u4f7f\u7528 One Dark Theme\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u70b9\u51fb apply \u5373\u53ef\uff1a"),(0,p.kt)(r.Z,{src:o.Z,mdxType:"Illustration"})),(0,p.kt)("p",null,"\ud83d\udcd2 \u9759\u6001\u9875\u9762\u90e8\u7f72\u65b9\u6848"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7041870446576271368"},"\u4e00\u7bc7\u6559\u4f60\u4ee3\u7801\u540c\u6b65 Github \u548c Gitee")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/rfyqQgpylFT7slukkbi6rw"},"\u6559\u4f60\u5982\u4f55\u4f7f\u7528vercel\u670d\u52a1\u514d\u8d39\u90e8\u7f72\u524d\u7aef\u9879\u76ee\u548cserverless api")),(0,p.kt)("p",null,"\ud83d\udcd2 webpack \u70ed\u6a21\u5757\u66ff\u6362\u770b\u4e0b\u6e90\u7801"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7049608872553611301"},"webpack\u6a21\u5757\u70ed\u66f4\u65b0\u539f\u7406")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7021729340945596424"},"Webpack \u539f\u7406\u7cfb\u5217\u5341\uff1aHMR \u539f\u7406\u5168\u89e3\u6790")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903942074138637"},"\u804a\u4e00\u804a\u524d\u7aef\u7b97\u6cd5\u9762\u8bd5\u2014\u2014\u9012\u5f52")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7049293284883038238"},"\u524d\u7aef\u5355\u5143\u6d4b\u8bd5\u5165\u95e8\u4e0e\u6700\u4f73\u5b9e\u8df5")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7049335008917454855"},"\u6dd8\u5b9d\u5e97\u94fa\u7684 TypeScript ESLint \u89c4\u5219\u96c6\u8003\u91cf")),(0,p.kt)("p",null,"\ud83d\udcd2 \u81ea\u52a8\u53d1\u5e03\u811a\u672c"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/release-it/release-it"},"https://github.com/release-it/release-it")),(0,p.kt)("p",null,"\ud83d\udcd2 diff \u7b97\u6cd5\u76f8\u5173"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/snabbdom/snabbdom"},"https://github.com/snabbdom/snabbdom")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7000266544181674014"},"DIff\u7b97\u6cd5\u770b\u4e0d\u61c2\u5c31\u4e00\u8d77\u6765\u780d\u6211(\u5e26\u56fe)")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7048253632055083022"},"\u5982\u4f55\u76d8\u70b9\u51fa\u6398\u91d1\u7684\u5e74\u5ea6\u9ad8\u8d5e\u6587\u7ae0\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7047705995534925832"},"\u76d8\u70b9\u6398\u91d1 2021 \u9ad8\u8d5e Vue \u6587\u7ae0")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7047690546417565733"},"\u76d8\u70b9\u6398\u91d1 2021 \u9ad8\u8d5e React \u6587\u7ae0")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7047153016771706916"},"\u76d8\u70b9\u6398\u91d1 2021 \u70b9\u8d5e\u9ad8\u8fbe 6000\uff0c\u6536\u85cf\u8fc7\u4e07\u7684\u6587\u7ae0")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7036318575165964325"},"\u5982\u4f55\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1 React \u7ec4\u4ef6\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7030250953215311908"},"\u4e00\u8d77\u6765\u5199 VS Code \u63d2\u4ef6:\u4e3a\u4f60\u7684\u56e2\u961f\u63d0\u4f9b\u5e38\u7528\u4ee3\u7801\u7247\u6bb5")),(0,p.kt)("p",null,"\ud83d\udcd2 \u9ed1\u6697\u6a21\u5f0f\u5e38\u7528\u6362\u80a4\u65b9\u6848"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"CSS Variables")),(0,p.kt)("p",null,"css variables \u662f Web \u6807\u51c6\u5b9e\u73b0\u4e86\u5bf9\u6df1\u8272\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u4ee5\u4e0b\u4ee3\u7801\u901a\u8fc7 CSS \u5a92\u4f53\u67e5\u8be2\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  color-scheme: light dark;\n  --nav-bg-color: #F7F7F7;\n  --content-bg-color: #FFFFFF;\n  --font-color: rgba(0,0,0,.9);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --nav-bg-color: #2F2F2F;\n    --content-bg-color: #2C2C2C;\n    --font-color: rgba(255, 255, 255, .8);\n  }\n}\n\n:root {\n  color: var(--font-color);\n}\n\n.header {\n  background-color: var(--nav-bg-color);\n}\n\n.content {\n  background-color: var(--content-bg-color);\n}\n")),(0,p.kt)("p",null,"\u4f18\u70b9\uff1a\u4ee3\u7801\u91cf\u6700\u5c11\uff0c\u5b9e\u73b0\u8d77\u6765\u65b9\u4fbf"),(0,p.kt)("p",null,"\u7f3a\u70b9\uff1a\u5b58\u5728\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\uff0c\u9700\u8981 edge16+ \u624d\u652f\u6301"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6253\u5305\u591a\u4efd css")),(0,p.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u624b\u52a8\u6253\u5305 2 \u4efd CSS \u6837\u5f0f\uff0c\u901a\u8fc7\u52a8\u6001\u5f15\u5165\u6837\u5f0f\u6587\u4ef6\u8fdb\u884c\u5207\u6362\u3002\u8fd9\u79cd\u65b9\u5f0f\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u5f53\u70b9\u51fb\u5207\u6362\u7684\u65f6\u5019\u4f1a\u5f15\u8d77\u6574\u4e2a\u9875\u9762\u91cd\u6392\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5355\u72ec\u6253\u5305\u51fa\u53ea\u5305\u542b\u989c\u8272\u7684\u6837\u5f0f\u6587\u4ef6\u3002\u4ece\u8fd9\u4e2a\u601d\u8def\u51fa\u53d1\uff0c\u6211\u4eec\u5c31\u63a5\u89e6\u5230\u4e86 PostCSS\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7019580413110648863"},"\u4f7f\u7528 PostCSS \u63d2\u4ef6\u8ba9\u4f60\u7684\u7f51\u7ad9\u652f\u6301\u6697\u9ed1\u6a21\u5f0f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6984267680324780040"},"\u4f7f\u7528 NextJS \u548c TailwindCSS \u91cd\u6784\u6211\u7684\u535a\u5ba2")),(0,p.kt)("p",null,"\u2b50\ufe0f ",(0,p.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/493891614/answer/2269197391"},"2022 \u524d\u7aef\u6280\u672f\u9886\u57df\u4f1a\u6709\u54ea\u4e9b\u65b0\u7684\u53d8\u5316\uff1f")))}g.isMDXComponent=!0},11983:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(98503),p=(n(8362),n(59496)),r=n(72231);const l=e=>{let{src:t,width:n,alt:l}=e;const[s,o]=p.useState(),[i,c,k]=(0,r.YD)({triggerOnce:!0});return p.useEffect((()=>{c&&o(t)}),[c]),p.createElement("div",{className:"image-wrapper",ref:i},p.createElement(a.Z,{width:n,src:s,alt:l}))}},43257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply_keymap-40b46d582fa63e4579a55785e4c5d775.png"},73004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/one_dark_theme-84aa4f6703b6672794e2f40e82f2cc40.png"},75707:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vs_code_keymap-f839465f64e220a5cbaa772915024fe7.png"}}]);