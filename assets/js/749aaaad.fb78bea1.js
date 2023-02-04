"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[6059],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,k=c["".concat(i,".").concat(f)]||c[f]||m[f]||p;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<p;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(64778),a=(n(59496),n(49613));const p={slug:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,l={permalink:"/frontend-weekly/2022/7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2022/2022-07-10/index.md",source:"@site/blogs/2022/2022-07-10/index.md",title:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u4e3a\u4ec0\u4e48 React \u7684 Diff \u7b97\u6cd5\u4e0d\u91c7\u7528 Vue \u7684\u53cc\u7aef\u5bf9\u6bd4\u7b97\u6cd5",date:"2022-07-10T00:00:00.000Z",formattedDate:"July 10, 2022",tags:[],readingTime:2.975,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/7\u670817\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/7\u67083\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7116141318853623839"},"\u4e3a\u4ec0\u4e48 React \u7684 Diff \u7b97\u6cd5\u4e0d\u91c7\u7528 Vue \u7684\u53cc\u7aef\u5bf9\u6bd4\u7b97\u6cd5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/pT_tugg_EvE5pnMCaUqliw"},"Module Federation\u6700\u4f73\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7117512204059934733"},"react18\u65b0\u7279\u6027\u53ca\u5b9e\u8df5\u603b\u7ed3")),(0,a.kt)("p",null,"\ud83d\udcd2 \u6a21\u5757\u52a0\u8f7d\u673a\u5236"),(0,a.kt)("p",null,"commonjs \u52a0\u8f7d\u4e00\u4e2a module"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"webpack_require")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.runInContext")),(0,a.kt)("p",null,"\ud83d\udcd2 Nodejs Module Wrapper"),(0,a.kt)("p",null,"Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"(function(exports, require, module, __filename, __dirname) {\n// Module code actually lives in here\n});\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#the-module-wrapper"},"https://nodejs.org/api/modules.html#the-module-wrapper")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/umijs/qiankun"},"\u5fae\u524d\u7aef/qiankun")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7089809919251054628"},"\u5982\u4f55\u8fdb\u9636TypeScript\u529f\u5e95\uff1f\u4e00\u6587\u5e26\u4f60\u7406\u89e3TS\u4e2d\u5404\u79cd\u9ad8\u7ea7\u8bed\u6cd5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/B5Y_6fI94UItDkOj4gj9WA"},"\u3010\u7b2c2662\u671f\u3011\u4f4e\u4ee3\u7801\u5e73\u53f0\u67b6\u6784\u6df1\u5ea6\u5256\u6790")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/fLHJ9AzcVbxXAZjQvIbvqQ"},"\u90a3\u4e9b\u5173\u4e8eDOM\u7684\u5e38\u89c1Hook\u5c01\u88c5\uff08\u4e8c\uff09")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/F4BotNoasCUnb-yWiB12sg"},"antd mobile \u4f5c\u8005\u6559\u4f60\u5199 React \u53d7\u63a7\u7ec4\u4ef6\u548c\u975e\u53d7\u63a7\u7ec4\u4ef6")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7117051812540055588"},"\u6211\u5bf9 React \u5b9e\u73b0\u539f\u7406\u7684\u7406\u89e3")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/hHNnVlBCvnn19ciYRYNFAw"},"WebAssembly\u751f\u6001\u53ca\u5173\u952e\u6280\u672f\u7efc\u8ff0")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Eovk2GT_noEOsH5BUwdlkA"},"HTTP3 RFC\u6807\u51c6\u6b63\u5f0f\u53d1\u5e03\uff0cQUIC\u4f1a\u6210\u4e3a\u4f20\u8f93\u6280\u672f\u7684\u65b0\u4e00\u4ee3\u98a0\u8986\u8005\u5417")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/XvX6b3i9D197s3voXRcemQ"},"\u5982\u4f55\u5c06\u4f20\u7edf Web \u6846\u67b6\u90e8\u7f72\u5230 Serverless")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/pxHGM-hOJISEoBHGZch5Ag"},"\u65b0\u6765\u4e2a\u6280\u672f\u603b\u76d1\uff0c\u628a RabbitMQ \u8bb2\u7684\u90a3\u53eb\u4e00\u4e2a\u900f\u5f7b\uff0c\u4f69\u670d\uff01")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/0xTZcE3MPezRl3LILR8a_w"},"\u5173\u4e8e\u524d\u7aef\u4e3b\u9898\u5207\u6362\u7684\u601d\u8003\u548c\u73b0\u4ee3\u524d\u7aef\u6837\u5f0f\u7684\u89e3\u51b3\u65b9\u6848\u843d\u5730")),(0,a.kt)("p",null,"\u2b50\ufe0f Data Flow in Remix"),(0,a.kt)("p",null,"React \u7b2c\u4e00\u6b21\u548c\u5927\u5bb6\u89c1\u9762\u65f6\uff0c\u6700\u5f15\u4eba\u6ce8\u76ee\u7684\u7279\u70b9\u4e4b\u4e00\u662f\u4ed6\u7684\u300c\u5355\u5411\u6570\u636e\u6d41\u300d\u3002\u8fd9\u5728\u5b98\u65b9\u6587\u6863 Thinking in React \u91cc\u4ecd\u6709\u4ecb\u7ecd\u3002\u7528\u4e00\u53e5\u8bdd\u6982\u51b5\u5373\uff1aUI \u662f\u72b6\u6001\u7684\u51fd\u6570\uff0c\u6216\u8005\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"ui=fn(state)"),"\u3002"),(0,a.kt)("p",null,"\u800c\u540e\u6709\u4e0d\u5c11\u9075\u4ece\u8fd9\u79cd\u601d\u60f3\u7684\u6570\u636e\u6d41\u65b9\u6848\uff0c\u6bd4\u5982 Redux\u3001MobX \u7b49\uff0c\u4ee5 View -> Action -> State \u8fd9\u79cd\u5faa\u73af\u7684\u5355\u5411\u6570\u636e\u6d41\u65b9\u5f0f\u8fdb\u884c\u3002\u4ed6\u4eec\u7684\u7f3a\u70b9\u662f\u8fd9\u4e2a\u6570\u636e\u6d41\u53ea\u5728\u5ba2\u6237\u7aef\u8fd0\u8f6c\uff0c\u800c\u4e00\u4e2a\u5e94\u7528\u901a\u5e38\u8fd8\u9700\u8981\u6301\u4e45\u5316\u6570\u636e\u548c\u540c\u6b65\u6570\u636e\uff0c\u8fd9\u610f\u5473\u7740\u8fd8\u8981\u6709\u53e6\u4e00\u6761\u6570\u636e\u6d41\u6765\u548c\u670d\u52a1\u7aef\u505a\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u90a3\u6709\u6ca1\u6709\u8d2f\u7a7f\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u5355\u5411\u6570\u636e\u6d41\uff1fRemix\uff01\u54c8\u54c8\u3002Remix \u5c06\u8fd9\u4e00\u7406\u5ff5\u5ef6\u4f38\u5230\u6301\u4e45\u5316\u6570\u636e\u7684 API \u5c42\uff0c\u901a\u8fc7 Loader \u548c Action \u628a\u6570\u636e\u6d41\u4e32\u4e86\u8d77\u6765\uff0c\u5f62\u6210 Loader > Component > Action \u7684\u5355\u5411\u6570\u636e\u6d41\u3002\u6240\u4ee5\u5728 Remix \u4e2d\uff0c\u5f00\u53d1\u8005\u4e5f\u65e0\u9700\u4f7f\u7528 Redux \u7b49\u5176\u4ed6\u6570\u636e\u6d41\u65b9\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.run/blog/remix-data-flow"},"Data Flow in Remix")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/fGaE_pGiC2BKKVKO0Fdj_g"},"MDH \u524d\u7aef\u5468\u520a\u7b2c 60 \u671f\uff1aFresh 1\u3001SPA\u3001\u6846\u67b6\u6d41\u884c\u5ea6\u30011X \u5de5\u7a0b\u5e08\u3001Father 4 RC")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/sqxRB63edItCT3vEzyJojA"},"\u5de8\u77f3\u74e6\u89e3\uff01\u6211\u628aVue3\u5de8\u77f3\u9879\u76ee\u62c6\u6210\u4e86\u5341\u51e0\u4e2a\u5fae\u5e94\u7528")))}m.isMDXComponent=!0}}]);