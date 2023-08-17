"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[8871],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(59496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=p,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:p,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(64778),p=(n(59496),n(49613));const r={slug:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},l=void 0,o={permalink:"/frontend-weekly/2022/5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2022/2022-05-08/index.md",source:"@site/blogs/2022/2022-05-08/index.md",title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u4ece\u96f6\u5f00\u59cb\u6784\u5efa JavaScript Bundler",date:"2022-05-08T00:00:00.000Z",formattedDate:"May 8, 2022",tags:[],readingTime:15.725,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/5\u670815\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/5\u67081\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,p.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ud83d\udcd2 \u4ece\u96f6\u5f00\u59cb\u6784\u5efa JavaScript Bundler"),(0,p.kt)("p",null,"Jest \u4f5c\u8005\u7684\u6700\u65b0\u7cfb\u5217\u6587\u7ae0\uff0c\u5e76\u4e14\u914d\u5957\u89c6\u9891\uff0c\u5185\u5bb9\u7edd\u5bf9\u786c\u6838\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://cpojer.net/posts/building-a-javascript-bundler"},"https://cpojer.net/posts/building-a-javascript-bundler"))),(0,p.kt)("p",null,"\ud83d\udcd2 JavaScript \u6846\u67b6\u7684\u56db\u4e2a\u65f6\u4ee3"),(0,p.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4f5c\u8005\u4ee5\u81ea\u8eab\u591a\u5e74\u7684\u5f00\u53d1\u7ecf\u5386\u8fd8\u539f\u4e86 JavaScript \u6846\u67b6\u7684\u53d1\u5c55\u5386\u7a0b\uff0c\u5e76\u5212\u5206\u51fa\u4e86\u56db\u4e2a\u65f6\u4ee3\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u8fdc\u53e4\u65f6\u4ee3\uff1a\u65e0\u6846\u67b6"),(0,p.kt)("li",{parentName:"ul"},"\u6846\u67b6\u521d\u671f\uff1aBackbone.js\u3001Angular 1\u3001Knockout.js\u3001SproutCore\u3001Ember.js\u3001Meteor.js"),(0,p.kt)("li",{parentName:"ul"},"\u4ee5\u7ec4\u4ef6\u4e3a\u4e2d\u5fc3\u7684\u65f6\u4ee3\uff1aReact.js\u3001Vue.js\u3001Svelte\u3001Polymer.js"),(0,p.kt)("li",{parentName:"ul"},"\u5168\u6808\u6846\u67b6\uff1aNext.js\u3001Nuxt.js\u3001Remix\u3001SvelteKit\u3001Gastby \u548c Astro")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks"},"https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks"))),(0,p.kt)("p",null,"\ud83d\udcd2 pnpm v7.0.0"),(0,p.kt)("p",null,"pnpm \u53d1\u5e03\u4e86 v7.0.0\uff0c\u5e26\u6765\u4e86\u5927\u91cf\u7684\u66f4\u65b0\u3002\u5982\uff1a\u4e0d\u518d\u652f\u6301 Node.js 12\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run <script>")," \u811a\u672c\u540d\u79f0\u540e\u7684\u6240\u6709\u547d\u4ee4\u884c\u53c2\u6570\u90fd\u4f1a\u4f20\u9012\u7ed9 argv \u7b49\u7b49\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/tag/v7.0.0"},"https://github.com/pnpm/pnpm/releases/tag/v7.0.0"))),(0,p.kt)("p",null,"\u2b50\ufe0f 2022 \u5e74\u7684\u524d\u7aef\u884c\u4e1a\uff0c\u548b\u6837\u5566"),(0,p.kt)("p",null,"ESR\uff08Edge Side Rendering\uff0c\u8fb9\u7f18\u6e32\u67d3\uff09\u662f\u6700\u8fd1\u7684\u4e00\u5927\u70ed\u95e8\u8d8b\u52bf\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 CDN \u7ea7\u522b\u5b9e\u73b0\u6309\u9700\u6e32\u67d3\u3002Nuxt 3\u3001Remix \u4ee5\u53ca Sveltekit \u7b49\u6846\u67b6\u90fd\u5728\u671d\u7740\u8fd9\u4e2a\u65b9\u5411\u53d1\u5c55\uff0c\u76ee\u6d4b\u4f1a\u5728\u672a\u6765\u7684\u4e00\u5230\u4e24\u5e74\u4f1a\u6210\u4e3a\u4e00\u5927\u7126\u70b9\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/SLi0MQru1bh539ricvQCew"},"2022 \u5e74\u7684\u524d\u7aef\u884c\u4e1a\uff0c\u548b\u6837\u5566")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/docker-node#create-a-dockerfile-in-your-nodejs-app-project"},"docker-node - Node.js \u5b98\u65b9 Docker \u955c\u50cf")),(0,p.kt)("p",null,"\ud83d\udcd2 JS \u65b0\u7684\u65e5\u671f API\uff1aTemporal"),(0,p.kt)("p",null,"\u8fd9\u9879\u7279\u6027\u63d0\u6848\u65f6\u95f4\u4e3a 2021 \u5e74 7 \u6708\uff0c\u4e0d\u5230\u4e00\u5e74\u7684\u65f6\u95f4\u5df2\u7ecf\u8fdb\u5c55\u5230 stage-3 \u9636\u6bb5\uff0c\u76ee\u524d\u7ec4\u59d4\u4f1a\u5df2\u7ecf\u5728\u5728\u505a\u5b83\u7684\u529f\u80fd\u5b9e\u73b0\uff0c\u6709\u671b\u5728\u4e0b\u4e2a\u7248\u672c\u63a8\u51fa\u3002"),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u8be5\u9879\u63d0\u6848\u7684\u521d\u8877\u6765\u81ea\u8fd9\u7bc7\u6587\u7ae0\uff0c\u56e0\u4e3a JavaScript \u6700\u521d\u5173\u4e8e\u65e5\u671f\u7684\u5b9e\u73b0\u662f\u7167\u642c\u7684 Java \u65b9\u6848\uff0c\u4f46\u7531\u4e8e\u5404\u79cd\u9650\u5236\u548c\u95ee\u9898\uff0cJava \u65e9\u5728 1997 \u5e74\u5c31\u5b9e\u73b0 Calendar \u505a\u4e86\u529f\u80fd\u6539\u8fdb\uff0c\u800c JavaScript \u65f6\u81f3\u4eca\u65e5\u7528\u7684\u8fd8\u662f\u8001\u65e7\u65b9\u6848\uff0c\u6539\u8fdb\u4f18\u5316\u5b9e\u5728\u662f\u8feb\u5728\u7709\u776b\u3002"),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("a",{parentName:"p",href:"https://maggiepint.com/2017/04/09/fixing-javascript-date-getting-started/"},"https://maggiepint.com/2017/04/09/fixing-javascript-date-getting-started/"))),(0,p.kt)("p",null,"\u5b98\u65b9\u6587\u6863\uff08\u6253\u5f00\u63a7\u5236\u53f0\u5c31\u53ef\u4ee5\u4f53\u9a8c Polyfill\uff09\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://tc39.es/proposal-temporal/docs/"},"https://tc39.es/proposal-temporal/docs/"))),(0,p.kt)("p",null,"\u6216\u8005\u5728 RunKit \u4e0a\u4f53\u9a8c\uff08\u6d4f\u89c8\u5668\u7aef\u8fd0\u884c node \u6a21\u5757\uff09\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://npm.runkit.com/proposal-temporal"},"https://npm.runkit.com/proposal-temporal"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/zt7x2KjMT_cWvLVVa2-Hww"},"\u3010\u5de5\u7a0b\u5316\u3011\u63a2\u7d22webpack5\u4e2d\u7684Module Federation")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/xd6hjcxCm5dpRF95QawmxA"},"\u6211\u4eec\u5982\u4f55\u4f7f\u7528 Webpack \u5c06\u542f\u52a8\u65f6\u95f4\u51cf\u5c11 80%")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7094424941541457933"},"React\u5b98\u65b9\u56e2\u961f\u51fa\u624b\uff0c\u8865\u9f50\u539f\u751fHook\u77ed\u677f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7094296981001994277"},"\u4f60\u53ef\u80fd\u5e76\u6ca1\u6709\u7406\u89e3\u7684 babel \u914d\u7f6e\u7684\u539f\u7406")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7083009375387779085"},"\u524d\u7aef\u62a2\u996d\u7897\u7cfb\u5217\u4e4bDocker\u8fdb\u9636\u90e8\u7f72")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7069609959985512484"},"\u524d\u7aef\u62a2\u996d\u7897\u7cfb\u5217\u4e4b\u521d\u8bc6Docker\u5bb9\u5668\u5316\u90e8\u7f72")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7052307032971411463"},"\u4ece\u96f6\u5f00\u59cb\u53d1\u5e03\u81ea\u5df1\u7684NPM\u5305")),(0,p.kt)("p",null,"\u2b50\ufe0f ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-B5M7pjIWZzFNvq-hyr1Mw"},"Umi 4 \u7279\u6027\u5408\u96c6\uff0c\u6bd4 Vite \u8fd8\u8981\u5feb\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/1QZ37jf_6av1i_ESTPvfaQ"},"HTTP\u5206\u5757\u4f20\u8f93 \u5982\u4f55\u5728 React18 \u4e2d\u5e94\u7528")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1j44y1g74m"},"\u4e0b\u96c6\u300dReact\u6027\u80fd\u4f18\u5316\uff0c\u4f60\u9700\u8981\u77e5\u9053\u7684\u4e00\u5207")),(0,p.kt)("p",null,"\ud83d\udcd2 htmlparser2 8.0\uff1a\u5feb\u901f\u4e14\u9ad8\u5bb9\u9519\u7684 HTML \u548c XML \u89e3\u6790\u5668"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/fb55/htmlparser2"},"https://github.com/fb55/htmlparser2"))),(0,p.kt)("p",null,"\ud83d\udcd2 Node v18 test \u6a21\u5757"),(0,p.kt)("p",null,"\u6ce8\u610f Node v18 test \u6a21\u5757\u662f\u7b2c\u4e00\u4e2a Prefix-Only Core Modules\uff0c\u4e5f\u5c31\u662f\u8bf4\u52a0\u8f7d\u8be5\u6a21\u5757\u5fc5\u987b\u5e26\u4e0a ",(0,p.kt)("inlineCode",{parentName:"p"},"node:")," \u524d\u7f00\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import test from 'node:test';  // Uses the node: prefix. Loads from core.\nimport assert from 'assert';  // Does not use the node: prefix. Loads from core.\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u5047\u5982\u6ca1\u6709\u5e26\u4e0a ",(0,p.kt)("inlineCode",{parentName:"p"},"node:")," \u524d\u7f00\uff0c\u5219\u4f1a\u5c1d\u8bd5\u4ece\u7528\u6237\u7a7a\u95f4\u52a0\u8f7d ",(0,p.kt)("inlineCode",{parentName:"p"},"test")," \u6a21\u5757\u3002\u4f46\u662f\u5bf9\u4e8e Node \u5176\u4ed6\u5185\u7f6e\u6a21\u5757\u6765\u8bf4\uff0c\u52a0\u4e0d\u52a0 ",(0,p.kt)("inlineCode",{parentName:"p"},"node:")," \u524d\u7f00\u90fd\u662f\u4e00\u6837\u7684\u3002"),(0,p.kt)("blockquote",{parentName:"admonition"},(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://fusebit.io/blog/node-18-prefix-only-modules/"},"https://fusebit.io/blog/node-18-prefix-only-modules/")))),(0,p.kt)("p",null,"\ud83d\udcd2 Node v16.15.0 (LTS) \u53d1\u5e03"),(0,p.kt)("p",null,"\u73b0\u5728 Node v16 \u53ef\u4ee5\u4f7f\u7528\u5b9e\u9a8c\u6027\u652f\u6301\u7684 Fetch API \u4e86"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/release/v16.15.0/"},"https://nodejs.org/en/blog/release/v16.15.0/"))),(0,p.kt)("p",null,"\ud83d\udcd2 \u5347\u7ea7\u5230 React 18 \u6240\u5bf9\u5e94\u7684 TypeScript \u7c7b\u578b\u5b9a\u4e49\u7684\u6539\u52a8"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/upgrading-react-18-typescript/"},"https://blog.logrocket.com/upgrading-react-18-typescript/"))),(0,p.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u7406\u89e3 React Hooks \u7684\u95ed\u5305\u9677\u9631"),(0,p.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6\u66f4\u65b0\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u51fd\u6570\u91cd\u65b0\u6267\u884c\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u6240\u6709\u53d8\u91cf\u3001\u51fd\u6570\u91cd\u65b0\u521b\u5efa\uff0chooks \u91cd\u65b0\u6267\u884c\u3002"),(0,p.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u5f53\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\uff0c\u5185\u90e8\u7684\u53d8\u91cf\u5c31\u4f1a\u9500\u6bc1\u3001\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u56de\u6536\u3002\u5f53\u7136\u4e5f\u6709\u4f8b\u5916\u60c5\u51b5\uff0c\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u51fd\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"baz")," \u4f9d\u8d56\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"bar")," \u5185\u90e8\u7684\u53d8\u91cf ",(0,p.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u5e76\u4e14 ",(0,p.kt)("inlineCode",{parentName:"p"},"baz")," \u4f5c\u4e3a\u8fd4\u56de\u503c\u4f20\u9012\u7ed9\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo"),"\uff0c\u56e0\u6b64 ",(0,p.kt)("inlineCode",{parentName:"p"},"a")," \u5e76\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u56de\u6536\uff0c\u800c\u662f\u4f1a\u4f5c\u4e3a\u95ed\u5305\u7f13\u5b58\u4e0b\u6765\u3002\u53ea\u8981 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5f15\u7528\u4e0d\u89e3\u9664\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"a")," \u5c31\u4f1a\u4e00\u76f4\u7f13\u5b58\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function bar() {\n  const a = 1;\n  return function baz() {\n    console.log(a);\n  }\n}\n\nconst foo = bar();\n")),(0,p.kt)("p",null,"\u518d\u6765\u770b\u8fd9\u4e2a\u573a\u666f\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7684\u56de\u8c03\u51fd\u6570\u4f9d\u8d56\u4e86 state \u53d8\u91cf\uff0c\u800c\u6211\u4eec\u77e5\u9053\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u5728\u4e0b\u6b21 rerender \u4e4b\u524d\u90fd\u662f\u7f13\u5b58\u5728 fiber \u8282\u70b9\u4e0a\u7684\uff0c\u8fd9\u6837\u4e00\u6765\u5c31\u521b\u5efa\u4e86\u95ed\u5305\uff0c\u5373\u4f7f\u51fd\u6570\u7ec4\u4ef6\u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5\uff0c\u4f46\u662f state \u53d8\u91cf\u4ecd\u4f1a\u88ab\u7f13\u5b58\u4e0b\u6765\u3002"),(0,p.kt)("p",null,"\u5f53\u7ec4\u4ef6\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0cstate \u53d8\u91cf\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\uff0c\u4f46\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"useEffect")," \u56de\u8c03\u51fd\u6570\u4ecd\u7136\u5f15\u7528\u4e86\u65e7\u7684\u95ed\u5305\u3002\u4f46\u662f\u4e3a\u4ec0\u4e48 ",(0,p.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f9d\u8d56\u9879\u53d8\u5316\u3001\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u65f6\u5019\uff0c\u603b\u662f\u53ef\u4ee5\u83b7\u53d6\u5230\u65b0\u7684\u503c\u5462\uff1f\u8fd9\u662f\u56e0\u4e3a\u6bcf\u6b21\u51fd\u6570\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"useEffect")," \u90fd\u4f1a\u91cd\u65b0\u6267\u884c\uff0c\u56de\u8c03\u51fd\u6570\u4e5f\u4f1a\u91cd\u65b0\u751f\u6210\uff08\u4f46\u4e0d\u4e00\u5b9a\u90fd\u4f1a\u6267\u884c\uff09\uff0c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"updateEffectImpl")," \u5185\u90e8\u7528\u91cd\u65b0\u751f\u6210\u7684\u51fd\u6570\u66ff\u6362\u4e86 fiber \u8282\u70b9\u7f13\u5b58\u7684\u51fd\u6570\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u65f6\u5019\uff0c\u59cb\u7ec8\u90fd\u80fd\u83b7\u53d6\u5230\u6700\u65b0\u7684\u503c\u4e86\u3002"),(0,p.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u89c9\u5f97\u8fd9\u6837\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u5982\u679c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4e2d\u4f7f\u7528\u5b9a\u65f6\u5668\uff0c\u5927\u6982\u7387\u90fd\u4f1a\u9047\u5230\u95ed\u5305\u9677\u9631\u3002"),(0,p.kt)("p",null,"\u53e6\u4e00\u4e2a\u4f1a\u9047\u5230\u95ed\u5305\u9677\u9631\u7684\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u3002\u5f88\u591a\u540c\u5b66\u89c9\u5f97 ",(0,p.kt)("inlineCode",{parentName:"p"},"useCallback")," \u4f9d\u8d56\u9879\u4f3c\u4e4e\u6ca1\u4ec0\u4e48\u7528\uff0c\u4e60\u60ef\u6027\u4f20\u9012\u7a7a\u6570\u7ec4\uff0c\u8fd9\u5c31\u4f1a\u5bfc\u81f4\u51fd\u6570\u4e00\u76f4\u88ab\u7f13\u5b58\uff0c\u5047\u5982\u5185\u90e8\u4f9d\u8d56\u4e86 state \u53d8\u91cf\uff0c\u5219\u59cb\u7ec8\u4f1a\u7f13\u5b58\u65e7\u7684\u95ed\u5305\u3002\u6b63\u786e\u505a\u6cd5\u5e94\u8be5\u662f\u628a state \u53d8\u91cf\u6dfb\u52a0\u5230\u4f9d\u8d56\u9879\u6570\u7ec4\u4e2d\uff0c\u5728 state \u6539\u53d8\u7684\u65f6\u5019\u91cd\u65b0\u751f\u6210\u51fd\u6570\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u6700\u65b0\u7684\u503c\u3002"),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u51fd\u6570\u7ec4\u4ef6 rerender \u8fc7\u7a0b\u4e2d\uff0c\u7f13\u5b58\u72b6\u6001\u7684 fiber \u8282\u70b9\uff08\u76f8\u5f53\u4e8e\u7ec4\u4ef6\u5b9e\u4f8b\uff09\u5e76\u4e0d\u4f1a\u9500\u6bc1\uff0c\u4f46\u51fd\u6570\u7ec4\u4ef6\u662f\u91cd\u65b0\u6267\u884c\u4e86\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4e0a\u4e0b\u6587\u73af\u5883\uff0c\u5982\u679c useEffect \u56de\u8c03\u4f9d\u8d56\u4e86 state \u53d8\u91cf\uff0c\u5219\u4f1a\u4e00\u76f4\u7f13\u5b58\u65e7\u7684\u95ed\u5305\u3002\u6240\u4ee5\u8981\u907f\u514d\u95ed\u5305\u9677\u9631\uff0c\u53ea\u9700\u8981 ",(0,p.kt)("strong",{parentName:"p"},"\u4fdd\u8bc1\u6bcf\u6b21\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u51fd\u6570\u90fd\u91cd\u65b0\u751f\u6210")," \u5c31\u884c\u3002")),(0,p.kt)("p",null,"\ud83d\udcd2 TypeScript \u5c0f\u6280\u5de7\uff1a\u5e38\u91cf\u65ad\u8a00"),(0,p.kt)("p",null,"\u5728\u8bb2\u5e38\u91cf\u65ad\u8a00\u4e4b\u524d\uff0c\u5148\u63d0\u4e00\u4e0b\uff0cTS \u4f1a\u533a\u522b\u5bf9\u5f85\u53ef\u4fee\u6539\u548c\u4e0d\u53ef\u4fee\u6539\u7684\u503c\u7684\u7c7b\u578b\u63a8\u65ad\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"// \u63a8\u65ad\u6210\u5355\u503c\u7c7b\u578b 'dbydm'\nconst immutable = 'dbydm';\n\n// \u63a8\u65ad\u6210\u901a\u7528\u7684 string \u7c7b\u578b\nlet mutable = 'dn';\n\n// \u7531\u4e8e\u5bf9\u8c61\u7684\u5c5e\u6027\u90fd\u5177\u6709\u53ef\u4fee\u6539\u6027\uff0cTS \u90fd\u4f1a\u5bf9\u5b83\u4eec\u300c\u4ece\u5bbd\u300d\u7c7b\u578b\u63a8\u65ad\n// \u4f8b\u5982\u4e0b\u9762\u7684 prop \u7684\u7c7b\u578b\u88ab\u63a8\u65ad\u4e3a string\nconst obj = { prop: 'foo' }\n")),(0,p.kt)("p",null,"\u518d\u6765\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u4f8b\u5982\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7528 ref \u7ef4\u62a4\u72b6\u6001\u7684 hook\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\n\nconst useRenderlessState = <T>(initialState: T) => {\n  const stateRef = React.useRef(initialState);\n\n  const setState = (nextState: T) => stateRef.current = nextState;\n\n  return [stateRef.current, setState];\n}\n')),(0,p.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u4f1a\u53d1\u73b0\u4e0a\u9762 hook \u7684\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u88ab\u63a8\u5bfc\u6210\u4e86\u5982\u4e0b\u7684\u6570\u7ec4\u7c7b\u578b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"(T | ((nextState: T) => T))[]\n")),(0,p.kt)("p",null,"\u8fd9\u5c31\u5bfc\u81f4\u6211\u4eec\u5728\u4f7f\u7528\u7684\u65f6\u5019\u65e0\u6cd5\u5bf9\u5b83\u8fdb\u884c\u51c6\u786e\u7684\u89e3\u6784\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const [value, setValue] = useRenderlessState(0);\n")),(0,p.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u6211\u4eec\u53ef\u4ee5 ",(0,p.kt)("strong",{parentName:"p"},"\u663e\u793a\u58f0\u660e\u8fd4\u56de\u7c7b\u578b")," \u6216\u8005 ",(0,p.kt)("strong",{parentName:"p"},"\u5bf9\u8fd4\u56de\u503c\u505a\u7c7b\u578b\u65ad\u8a00"),"\uff0c\u544a\u8bc9 TS \u8fd4\u56de\u503c\u7c7b\u578b\u662f\u5143\u7ec4\u800c\u4e0d\u662f\u6570\u7ec4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"// \u663e\u793a\u58f0\u660e\u8fd4\u56de\u7c7b\u578b\nconst useRenderlessState = <T>(initialState: T): [T, (nextValue: T) => T] => {/*...*/}\n\n// \u5bf9\u8fd4\u56de\u503c\u5bf9\u7c7b\u578b\u65ad\u8a00\nconst useRenderlessState = <T>(initialState: T) => {\n  // ...\n  return [state, setState] as [typeof value, typeof setValue];\n}\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u7684\u4e24\u79cd\u5199\u6cd5\u90fd\u5404\u6709\u5197\u4f59\u6210\u5206\uff0c\u7b97\u4e0d\u4e0a\u4f18\u96c5\u3002"),(0,p.kt)("p",null,"\u5176\u5b9e\u4ece\u8bed\u4e49\u5c42\u9762\u6765\u5206\u6790\uff0cTS \u4e4b\u6240\u4ee5\u6ca1\u80fd\u5c06\u8fd4\u56de\u503c\u63a8\u65ad\u4e3a\u5143\u7ec4\u7c7b\u578b\u662f\u56e0\u4e3a\u5b83\u8ba4\u4e3a\u8be5\u8fd4\u56de\u503c\u4ecd\u6709\u53ef\u80fd\u88ab push \u503c\uff0c\u88ab\u4fee\u6539\u3002\u6240\u4ee5\u6211\u4eec\u771f\u6b63\u9700\u8981\u505a\u7684\u662f\u544a\u8bc9 TS\uff0c\u8fd9\u4e2a\u8fd4\u56de\u503c\u662f\u4e00\u4e2a final\uff0c\u5176\u672c\u8eab\u548c\u5c5e\u6027\u90fd\u662f\u4e0d\u53ef\u7be1\u6539\u7684\uff0c\u800c\u8fd9\u6b63\u662f\u5e38\u91cf\u65ad\u8a00\u6240\u505a\u7684\u4e8b\u3002"),(0,p.kt)("p",null,"\u5e38\u91cf\u65ad\u8a00\u53ef\u4ee5\u628a\u4e00\u4e2a\u503c\u6807\u8bb0\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u7be1\u6539\u7684\u5e38\u91cf\uff0c\u4ece\u800c\u8ba9 TS \u4ee5\u6700\u4e25\u683c\u7684\u7b56\u7565\u6765\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const useRenderlessState = <T>(initialState: T) => {\n  // ...\n  return [state, setState] as const\n}\n")),(0,p.kt)("p",null,"\u8fd9\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"useRenderlessState")," \u7684\u8fd4\u56de\u7c7b\u578b\u5c31\u88ab\u63a8\u65ad\u6210\u4e86\u5982\u4e0b\u7684 readonly \u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"readonly [T, (nextState: T) => T]\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("inlineCode",{parentName:"p"},"as const")," \u4e0e ES6 ",(0,p.kt)("inlineCode",{parentName:"p"},"const")," \u5e38\u91cf\u58f0\u660e\u7684\u533a\u522b\uff1a"),(0,p.kt)("ul",{parentName:"admonition"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"const")," \u5e38\u91cf\u58f0\u660e\u662f ES6 \u7684\u8bed\u6cd5\uff0c\u5bf9 TS \u800c\u8a00\uff0c\u5b83\u53ea\u80fd\u53cd\u6620\u8be5\u5e38\u91cf\u672c\u8eab\u662f\u4e0d\u53ef\u88ab\u91cd\u65b0\u8d4b\u503c\u7684\uff0c\u5b83\u7684\u5b50\u5c5e\u6027\u4ecd\u7136\u53ef\u4ee5\u88ab\u4fee\u6539\uff0c\u6545 TS \u53ea\u4f1a\u5bf9\u5b83\u4eec\u505a\u677e\u6563\u7684\u7c7b\u578b\u63a8\u65ad"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"as const")," \u662f TS \u7684\u8bed\u6cd5\uff0c\u5b83\u544a\u8bc9 TS \u5b83\u6240\u65ad\u8a00\u7684\u503c\u4ee5\u53ca\u8be5\u503c\u7684\u6240\u6709\u5c42\u7ea7\u7684\u5b50\u5c5e\u6027\u90fd\u662f\u4e0d\u53ef\u7be1\u6539\u7684\uff0c\u6545\u5bf9\u6bcf\u4e00\u7ea7\u5b50\u5c5e\u6027\u90fd\u4f1a\u505a\u6700\u4e25\u683c\u7684\u7c7b\u578b\u63a8\u65ad\uff08\u6240\u6709\u7684\u5b57\u9762\u91cf\u90fd\u4f1a\u88ab\u63a8\u65ad\u4e3a\u5355\u503c\u7c7b\u578b\uff09")),(0,p.kt)("p",{parentName:"admonition"},"\u5e38\u91cf\u65ad\u8a00\u53ef\u4ee5\u8ba9\u6211\u4eec\u4e0d\u9700\u8981 ",(0,p.kt)("inlineCode",{parentName:"p"},"enum")," \u5173\u952e\u5b57\u5c31\u80fd\u5b9a\u4e49\u679a\u4e3e\u5bf9\u8c61\uff1a"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'const EnvEnum = {\n  DEV: "development",\n  PROD: "production",\n  TEST: "test",\n} as const;\n'))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/121558249"},"TypeScript \u591c\u70b9\u5fc3\uff1a\u5e38\u91cf\u65ad\u8a00")),(0,p.kt)("p",null,"\ud83d\udcd2 \u4e86\u89e3 ",(0,p.kt)("inlineCode",{parentName:"p"},"Symbol.toStringTag")," \u7684\u7528\u6cd5\u5417"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Symbol.toStringTag")," \u662f\u4e00\u4e2a\u5185\u7f6e symbol\uff0c\u5b83\u901a\u5e38\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u952e\u4f7f\u7528\uff0c\u5bf9\u5e94\u7684\u503c\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u7528\u6765\u8868\u793a\u8be5\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\u6807\u7b7e\u3002\u901a\u5e38\u53ea\u6709\u5185\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString()")," \u65b9\u6cd5\u4f1a\u53bb\u8bfb\u53d6\u8fd9\u4e2a\u6807\u7b7e\u5e76\u628a\u5b83\u5305\u542b\u5728\u81ea\u5df1\u7684\u8fd4\u56de\u503c\u91cc\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const foo = {};\nconst bar = {\n  [Symbol.toStringTag]: \"\u6d4b\u8bd5\u5185\u5bb9\"\n}\n\nfoo.toString(); // '[object Object]'\nbar.toString(); // '[object \u6d4b\u8bd5\u5185\u5bb9]'\n")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag"},"Symbol.toStringTag - MDN \u6587\u6863")),(0,p.kt)("p",null,"\ud83d\udcd2 \u51fd\u6570\u7ec4\u5408\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"compose"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"flow"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pipe")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"compose")," \u5b9e\u73b0\u5982\u4e0b\uff0c\u6ce8\u610f\u8c03\u7528\u987a\u5e8f\u662f\u53cd\u8fc7\u6765\u7684\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const compose = (...fns) => x0 => fns.reduceRight(\n    (x, f) => f(x),\n    x0\n);\n\n// \u63a5\u53d7\u53c2\u6570\u540e\uff0c\u8fd4\u56de\u4e00\u4e2a\u5f85\u6267\u884c\u51fd\u6570\n// \u9700\u8981\u518d\u63a5\u53d7\u4e00\u4e2a\u521d\u59cb\u503c\u624d\u5f00\u59cb\u6267\u884c\nconst processComment = compose(\n    linkify,\n    imagify,\n    emphasize,\n    headalize\n);\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"flow")," \u5b9e\u73b0\u5982\u4e0b\uff0c\u6ce8\u610f\u8fd9\u91cc\u8c03\u7528\u987a\u5e8f\u662f\u4ece\u5de6\u5230\u53f3\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const flow = (...fns) => x0 => fns.reduce(\n    (x, f) => f(x),\n    x0\n);\n\n// \u6ce8\u610f\u8fd9\u91cc\u4ecd\u7136\u662f\u8fd4\u56de\u4e00\u4e2a\u5f85\u6267\u884c\u51fd\u6570\nconst processComment = flow(\n    headalize,\n    emphasize,\n    imagify,\n    linkify,\n    codify\n);\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pipe")," \u5b9e\u73b0\u5982\u4e0b\uff0c\u8c03\u7528\u987a\u5e8f\u4e5f\u662f\u4ece\u5de6\u5230\u53f3\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// \u6ce8\u610f pipe \u76f4\u63a5\u6267\u884c\u6240\u6709\u7684\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u503c\n// \u800c flow \u8fd4\u56de\u4e00\u4e2a\u5f85\u6267\u884c\u51fd\u6570\uff0c\u9700\u8981\u518d\u63a5\u53d7\u4e00\u4e2a\u521d\u59cb\u503c\u624d\u5f00\u59cb\u6267\u884c\nconst pipe = (x0, ...fns) => fns.reduce(\n    (x, f) => f(x),\n    x0\n);\n\nconst map    = f => arr => arr.map(f);\nconst filter = p => arr => arr.filter(p);\nconst take   = n => arr => arr.slice(0, n);\nconst join   = s => arr => arr.join(s);\n\nconst comments = pipe(commentStrs,\n    filter(noNazi),\n    take(10),\n    map(emphasize),\n    map(itemize),\n    join('\\n'),\n);\n")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/"},"\u4ec0\u4e48\u662f JavaScript \u7684\u51fd\u6570\u7ec4\u5408")),(0,p.kt)("p",null,"\ud83d\udcd2 \u57fa\u4e8e\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\u5b9e\u73b0\u63d2\u4ef6\u673a\u5236"),(0,p.kt)("p",null,"\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\uff08DIP\uff09"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6838\u5fc3\u601d\u60f3\uff1a\u4f9d\u8d56\u4e00\u4e2a\u62bd\u8c61\u7684\u670d\u52a1\u63a5\u53e3\uff0c\u800c\u4e0d\u662f\u53bb\u4f9d\u8d56\u4e00\u4e2a\u5177\u4f53\u7684\u670d\u52a1\u6267\u884c\u8005\uff0c\u4ece\u4f9d\u8d56\u5177\u4f53\u5b9e\u73b0\u8f6c\u5411\u5230\u4f9d\u8d56\u62bd\u8c61\u63a5\u53e3\uff0c\u5012\u7f6e\u8fc7\u6765")),(0,p.kt)("p",null,"\u4f8b\u5982\u5728 Webpack \u4e2d\u5305\u542b\u4e00\u5957\u63d2\u4ef6\u673a\u5236\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  plugins: [\n    new WebpackBar(),\n    new webpack.HotModuleReplacementPlugin(),\n    new MiniCssExtractPlugin({\n      filename: 'css/[name].[contenthash:8].css',\n      chunkFilename: '[id].css'\n    }),\n    new HtmlWebpackPlugin({\n      template: path.join(__dirname, '../public/index.html'),\n      title: \"React App\",\n      filename: \"index.html\",\n    })\n  ]\n}\n")),(0,p.kt)("p",null,"Webpack \u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u7edf\u4e00\u7684\u63a5\u53e3\uff0c\u5373\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPlugin {\n  apply(compiler: ICompiler): void;\n}\n\nclass MyPlugin implements IPlugin {\n  constructor() {\n    // \u6784\u9020\u5668\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u63a5\u53d7\u914d\u7f6e\u53c2\u6570\n  }\n\n  @Override\n  apply(compiler) {\n    // ...\n  }\n}\n")),(0,p.kt)("p",null,"\u8fd9\u6837 Webpack \u53ea\u9700\u8981\u904d\u5386 ",(0,p.kt)("inlineCode",{parentName:"p"},"plugins")," \u6570\u7ec4\uff0c\u987a\u6b21\u8c03\u7528\u6bcf\u4e2a\u63d2\u4ef6\u4e0a\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"apply")," \u65b9\u6cd5\uff0c\u4f20\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"compiler")," \u5bf9\u8c61\u5373\u53ef\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"plugins.forEach(plugin => plugin.apply(compiler));\n")),(0,p.kt)("p",null,"\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u6709\u540c\u5b66\u4f1a\u95ee\uff0c\u4e3a\u5565\u63d2\u4ef6\u8981\u5199\u6210 class \u7684\u5f62\u5f0f\uff0c\u76f4\u63a5\u7528\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u5417\uff0c\u4f8b\u5982\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const MyPlugin = {\n  apply(compiler) {\n    // ...\n  }\n}\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u76f4\u63a5\u7528\u4e00\u4e2a\u5bf9\u8c61\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u7528 class \u663e\u7136\u66f4\u7075\u6d3b\uff0c\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u63a5\u53d7\u914d\u7f6e\u53c2\u6570")),(0,p.kt)("p",null,"\ud83d\udcd2 \u6d4f\u89c8\u5668 JavaScript \u548c Node.js \u7684\u533a\u522b"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"API \u533a\u522b\uff1a\u6d4f\u89c8\u5668 JavaScript \u662f\u9762\u5411\u6d4f\u89c8\u5668\u7f16\u7a0b\uff0c\u8c03\u7528\u6d4f\u89c8\u5668\u7684 API\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"li"},"document"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"window"),"\u3002\u800c Node.js \u662f\u9762\u5411\u64cd\u4f5c\u7cfb\u7edf\u7f16\u7a0b\uff0c\u6ca1\u6709\u6d4f\u89c8\u5668 API\uff0c\u76f8\u53cd\u53ef\u4ee5\u8c03\u7528 Node \u63d0\u4f9b\u7684\u6807\u51c6\u5e93\uff0c\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92"),(0,p.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883\u533a\u522b\uff1a\u6d4f\u89c8\u5668 JavaScript \u7684\u7279\u6b8a\u6027\uff08JS \u4ee3\u7801\u9700\u8981\u7ecf\u8fc7\u7f51\u7edc\u8bf7\u6c42\uff0c\u5728\u5ba2\u6237\u7aef\u4e0b\u8f7d\u5e76\u6267\u884c\uff09\uff0c\u56e0\u6b64\u65e0\u6cd5\u9009\u62e9\u8fd0\u884c\u73af\u5883\uff0c\u9700\u8981\u8003\u8651\u8bed\u6cd5\u3001API \u517c\u5bb9\u6027\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u7528 Babel \u5904\u7406\u3002\u800c Node.js \u901a\u5e38\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u3001CI \u73af\u5883\u3001\u670d\u52a1\u7aef\u8fd0\u884c\uff0c\u53ef\u4ee5\u63a7\u5236\u8fd0\u884c\u73af\u5883\uff0c\u65e0\u9700\u8003\u8651\u517c\u5bb9\u6027\u95ee\u9898"),(0,p.kt)("li",{parentName:"ul"},"\u6a21\u5757\u89c4\u8303\u533a\u522b\uff1a\u6d4f\u89c8\u5668\u539f\u672c\u6ca1\u6709\u6a21\u5757\u673a\u5236\uff0c\u4f46\u53ef\u4ee5\u81ea\u884c\u5b9e\u73b0\u6a21\u5757\u547d\u540d\u7a7a\u95f4\u673a\u5236\uff08\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"li"},"browserify"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"webpack"),"\uff09\uff0c\u4ece Chrome 61 \u5f00\u59cb\u652f\u6301 ",(0,p.kt)("inlineCode",{parentName:"li"},'<script type="module">'),"\uff0c\u5373\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301 ",(0,p.kt)("inlineCode",{parentName:"li"},"import")," \u547d\u4ee4\u52a0\u8f7d\u6a21\u5757\uff08\u9700\u8981\u6ce8\u610f\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u662f\u8981\u7ecf\u8fc7\u7f51\u7edc\u8bf7\u6c42\uff09\u3002\u800c Node.js \u81ea\u5e26\u4e86\u4e00\u5957 CommonJS \u6a21\u5757\u673a\u5236\uff0c\u5728 Node 14 \u4e4b\u540e\u652f\u6301 ES Module \u89c4\u8303\uff08\u6ce8\u610f CommonJS \u4ecd\u7136\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u6a21\u5757\u89c4\u8303\uff09")))}u.isMDXComponent=!0}}]);