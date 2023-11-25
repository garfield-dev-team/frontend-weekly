"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[6920],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,h=u["".concat(s,".").concat(k)]||u[k]||c[k]||p;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(64778),a=(n(59496),n(49613));const p={slug:"11\u670826\u65e5\u5185\u5bb9\u6c47\u603b",title:"11\u670826\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,i={permalink:"/frontend-weekly/2023/11\u670826\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2023/2023-11-26/index.md",source:"@site/blogs/2023/2023-11-26/index.md",title:"11\u670826\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83c\udf1f AI \u76f8\u5173",date:"2023-11-26T00:00:00.000Z",formattedDate:"November 26, 2023",tags:[],readingTime:11.08,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"11\u670826\u65e5\u5185\u5bb9\u6c47\u603b",title:"11\u670826\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/2023/welcome"},nextItem:{title:"11\u670819\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2023/11\u670819\u65e5\u5185\u5bb9\u6c47\u603b"}},s={authorsImageUrls:[void 0]},l=[{value:"\ud83c\udf1f AI \u76f8\u5173",id:"-ai-\u76f8\u5173",level:2},{value:"\u2b50\ufe0f Golang \u76f8\u5173",id:"\ufe0f-golang-\u76f8\u5173",level:2},{value:"\ud83d\udcd2 \u524d\u7aef\u76f8\u5173",id:"-\u524d\u7aef\u76f8\u5173",level:2}],m={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-ai-\u76f8\u5173"},"\ud83c\udf1f AI \u76f8\u5173"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/_WStiyaAk7G-w2j6SVe4CA"},"\u90e8\u7f72\u5fc5\u5907\u2014triton-inference-server\u7684backend\uff08\u4e00\uff09\u2014\u2014\u5173\u4e8e\u63a8\u7406\u6846\u67b6\u7684\u4e00\u4e9b\u8ba8\u8bba")),(0,a.kt)("h2",{id:"\ufe0f-golang-\u76f8\u5173"},"\u2b50\ufe0f Golang \u76f8\u5173"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/6VH5uZ1l-EgnVAJQ7MMqbg"},"\u4e00\u6587\u641e\u61c2Go gRPC\u670d\u52a1Handler\u5355\u5143\u6d4b\u8bd5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/_yITia5dAN_1uBCbN1wn0A"},"TCP \u91cd\u4f20\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u6d41\u91cf\u63a7\u5236\u3001\u62e5\u585e\u63a7\u597d\u96be\uff1f\u770b\u5b8c\u56fe\u89e3\u5c31\u4e0d\u6101\u4e86\uff08\u91cd\u5236\uff09")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/FMDWD-w_EjPgDy20uQz3zQ"},"\u63ed\u79d8 Go \u4e2d\u7684\u6a21\u677f\uff1a\u4e00\u4efd\u5168\u9762\u800c\u5e7f\u6cdb\u7684\u6307\u5357")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/dbv_kolzCtN4l-bpzwrGQQ"},"Kubernetes Pod \u8bbe\u8ba1\u4e0e\u5b9e\u73b0 - \u521b\u5efa\u6d41\u7a0b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/sF3ZSEH4yQe70lwk8VPLhg"},"2023\u5e74\u6700\u65b0Docker\u7f51\u7edc\u8bb2\u89e3\u4fdd\u59c6\u7ea7\u6559\u7a0b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/TC-wnNQxsUAs6ekSMV8sGQ"},"Go\u8bed\u8a00\u9879\u76ee\u547d\u540d\u89c4\u8303\uff082023\u5e74\u6700\u65b0\u7248\uff09")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/8blLwTDT5lGqD2BYqaNlmg"},"\u4e91\u97f3\u4e50RPC\u7a33\u5b9a\u6027\u5efa\u8bbe\u4e0e\u5b9e\u8df5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/zkFE-YTfInlN615YR7Hd9w"},"\u5b8c\u4e86\uff0c\u53c8\u88ab\u817e\u8baf\u9762\u8bd5\u5b98\u62f7\u6253\u4e86 \u3002\u3002\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/d0ltqt2lkabphMjcQlNOgQ"},"1.5\u4e07\u5b57+30\u5f20\u56fe\u76d8\u70b9\u7d22\u5f15\u5e38\u89c1\u768411\u4e2a\u77e5\u8bc6\u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/k5kLELoYly1U6lFcHzbCyg"},"Go \u547d\u540d\u89c4\u8303\uff1a\u5168\u9762\u6307\u5357")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/VOrh6zYR1C25sZgCj2lWvw"},"10\u4e2a\u4ee4\u4eba\u60ca\u53f9\u7684Go\u8bed\u8a00\u6280\u5de7\uff0c\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u52a0\u4f18\u96c5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/9GHPeJpTXlFCWQB5ISYLGg"},"Go \u5185\u5b58\u5206\u914d\uff1a\u7ed3\u6784\u4f53\u4e2d\u7684\u4f18\u5316\u6280\u5de7")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/pLQzSYlPTNbE4AXx2yNtyw"},"\u6ce8\u89e3\u65b9\u5f0f\u4f18\u96c5\u7684\u5b9e\u73b0 Redisson \u5206\u5e03\u5f0f\u9501")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/IeiEFaNRCGoSs-s6w5AGbQ"},"Git \u63d0\u4ea4\u7adf\u7136\u8fd8\u80fd\u8fd9\u4e48\u7528")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/dWRaJbtZ1C91WbfaONl1dA"},"Go\u600e\u4e48\u8ba9\u534f\u7a0b\u8dd1\u4e00\u534a\u5c31\u9000\u51fa")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/UbojQloiOyYT5yJeIRJNig"},"\u4ece\u817e\u8baf\u89c6\u9891\u67b6\u6784\u91cd\u6784\uff0c\u770bDDD\u7684\u6982\u5ff5\u4e0e\u65b9\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/FDDQFMXn5NKADZSNd5ywOw"},"\u4e0d\u5c11\u4eba\u9762\u8bd5\u90fd\u6302\u5728\u8fd9\u9053\u9898\u4e86\uff01")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/mQfISozifHt89Gu11AYkPg"},"99%\u7684\u7a0b\u5e8f\u5458\u5bb9\u6613\u5ffd\u89c6\u7684\u201c\u7cfb\u7edf\u201d\u5065\u5eb7\u95ee\u9898")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Cv_dk44E-OA196cfcdrKcQ"},"Kubernetes \u63a2\u9488\u8bbe\u8ba1\u4e0e\u5b9e\u73b0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/RFkyPG4qWrr6USjPKTXE4g"},"Prometheus Go client library \u8be6\u89e3")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/yVU5XMEpEwT4-I2RoaVwGA"},"\u5237\u5230\u4e00\u4e2a\u6bd4\u8f83\u9a9a\u7684 Go \u9519\u8bef\u5904\u7406\u65b0\u63d0\u6848\u3002\u3002\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/lA_NfIjBHioumWA-VClnaQ"},"Go \u6bcf\u65e5\u4e00\u5e93\u4e4b goose \u2014 \u6570\u636e\u5e93\u7248\u672c\u7ba1\u7406\u5de5\u5177")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/vz1rDT1MHe792QvqDI6xVA"},"\u542cGPT \u8bb2Rust\u6e90\u4ee3\u7801--library/core/src(8)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/mOWCfb35tnLqwSBRKc9hfA"},"\u6211\u4eec\u516c\u53f8\u90fd\u7528\u54ea\u4e9b\u8f6f\u4ef6\uff1f\u5f3a\u70c8\u63a8\u8350\u8fd9\u4e9b\uff01")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/GrqKxrn0U3p1OZKKWOEwhw"},"\u5fae\u670d\u52a1\u57fa\u672c\u529f\uff1a\u589e\u52a0\u4fbf\u5229\u7684\u76d1\u63a7\u670d\u52a1\u6307\u6807")),(0,a.kt)("h2",{id:"-\u524d\u7aef\u76f8\u5173"},"\ud83d\udcd2 \u524d\u7aef\u76f8\u5173"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/4gDJ7OeIyKLCPx5Lal7efA"},"\u7406\u89e3\u4e86Event Loop\u5c31\u7406\u89e3\u4e86\u524d\u7aef")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/48Jy1CXQNzRLUAYDzA0Xbg"},"\u5fae\u524d\u7aef\u65f6\u4ee3\uff1a\u6253\u9020\u9ad8\u6548\u3001\u7075\u6d3b\u7684\u524d\u7aef\u5f00\u53d1\u4f53\u7cfb")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/GJBuhJf9imXsKnL4r-rjww"},"\u51fd\u6570\u7ec4\u4ef6 \u548c \u51fd\u6570\u5f0f\u7f16\u7a0b \u6709\u5173\u7cfb\u4e48")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/P6OjL9jMvuOnLTEiPzT8tw"},"\u300cReact \u8fdb\u9636\u300dReact \u4f18\u96c5\u7684\u6355\u83b7\u5e76\u5904\u7406\u6e32\u67d3\u5f02\u5e38")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/5e1GCRdX6Zwa8KZgU34mww"},"\u300a\u522b\u4eba\u4e0d\u4f1a\u544a\u8bc9\u4f60\u7684 10 \u4e2a\u7a0b\u5e8f\u5458\u5de5\u4f5c\u7684\u771f\u76f8\u300b"),'\u3002\u5982\u4f55\u505a\u5408\u7406\u7684\u6392\u671f\u3002\u4f8b\u5982\uff0c\u5f53\u9879\u76ee\u7ecf\u7406\u8981\u6c42\u4f60\u5728\u5468\u4e94\u4e4b\u524d\u5b9e\u73b0 X \u529f\u80fd\u65f6\uff0c\u4f60\u4e0d\u4f1a\u8bf4 "\u54e6\uff0c\u6211\u53ef\u4ee5\u5728\u5468\u4e8c\u4e4b\u524d\u5b8c\u6210"\u3002\u76f8\u53cd\uff0c\u4f60\u4f1a\u8bf4"\u5f53\u7136\uff0c\u6ca1\u95ee\u9898"\u3002\u4e3a\u4ec0\u4e48\uff1f\u56e0\u4e3a\u5982\u679c\u4f60\u627f\u8bfa\u5728\u5468\u4e8c\u4e4b\u524d\u5b8c\u6210\uff0c\u4f46\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u4f60\u5c31\u65e0\u6cd5\u5151\u73b0\u627f\u8bfa\u3002\u76f8\u53cd\uff0c\u5982\u679c\u4f60\u63a5\u53d7\u5468\u4e94\u4e3a\u6700\u540e\u671f\u9650\uff0c\u5e76\u5728\u5468\u4e09\u4e4b\u524d\u5b8c\u6210\uff0c\u4f60\u5c31\u53ef\u4ee5\u63d0\u524d\u4e24\u5929\u4ea4\u4ed8\u3002\u5173\u4e8e\u5982\u4f55\u8fdb\u884c\u4f30\u7b97\uff0c\u6709\u5f88\u591a\u516c\u5f0f\uff0c\u6bcf\u4e2a\u4eba\u90fd\u6709\u81ea\u5df1\u7684\u89c4\u5219\u3002\u6211\u4e5f\u6709\u81ea\u5df1\u7684\u89c4\u5219\u3002\u5982\u679c\u6211\u9700\u8981\u4ea4\u4ed8\u67d0\u4e2a\u529f\u80fd\uff0c\u800c\u6211\u8ba4\u4e3a\u9700\u8981 2 \u5929\u65f6\u95f4\uff0c\u4e3a\u4e86\u5b89\u5168\u8d77\u89c1\uff0c\u6211\u4f1a ',(0,a.kt)("strong",{parentName:"p"},"\u591a\u52a0\u5927\u7ea6 40% \u7684\u65f6\u95f4"),"\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9884\u8ba1\u65f6\u95f4\u662f 3 \u5929\u3002\u4e4b\u540e\uff0c\u5982\u679c\u6211\u5728 2 \u5929\u5185\u5b8c\u6210\u4e86\uff0c\u6211\u5c31\u53ef\u4ee5\u63d0\u524d\u4ea4\u4ed8\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@patrickkoss/building-an-enterprise-grade-rest-api-in-rust-1ac693f47452"},"\u300a\u7528 Rust \u6784\u5efa\u4f01\u4e1a\u7ea7 REST API\u300b"),"\u3002 \u672c\u6587\u8be6\u7ec6\u8bb2\u89e3\u4e86\u4f7f\u7528 Rust\u3001Actix \u7f51\u7edc\u6846\u67b6\u548c\u5173\u7cfb\u6570\u636e\u5e93\u5f00\u53d1\u4f01\u4e1a\u7ea7 REST API \u7684\u8fc7\u7a0b\u3002\u6587\u7ae0\u4ece\u67b6\u6784\u539f\u5219\u5165\u624b\uff0c\u5206\u6790\u4e86 API \u7684\u5206\u5c42\u7ed3\u6784\uff0c\u7740\u91cd\u89e3\u91ca\u4e86\u4e09\u4e2a\u6838\u5fc3\u5c42\u7ea7\uff1a\u57fa\u7840\u8bbe\u65bd\u5c42\u3001\u670d\u52a1\u5c42\u548c\u5b58\u50a8 / \u6570\u636e\u5c42\u3002\u5b83\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u4f7f\u7528\u5404\u79cd\u6d41\u884c\u7684 Rust \u63d2\u4ef6\u548c\u6a21\u5f0f\u5982\u4f55\u521b\u5efa\u53ef\u6d4b\u8bd5\u548c\u53ef\u7ef4\u62a4\u7684\u4f01\u4e1a\u5e94\u7528\u7a0b\u5e8f\u3002\u8bb2\u89e3\u4e86\u5982\u4f55\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u6bcf\u4e2a\u5c42\u7684\u53ef\u9760\u6027\uff0c\u5e76\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u4ee3\u7801\u793a\u4f8b\u3002\u540c\u65f6\uff0c\u6587\u7ae0\u6307\u51fa\u8bbe\u8ba1\u4e2d\u5b58\u5728\u7684\u95ee\u9898\uff0c\u5e76\u8ba8\u8bba\u4e86\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848\u3002\u6700\u540e\u5f3a\u8c03\u4e86\u6d4b\u8bd5\u5bfc\u5411\u7684\u5f00\u53d1\u65b9\u5f0f\u548c\u8fd0\u7528 OpenAPI \u89c4\u8303\u8fdb\u884c API \u6587\u6863\u5316\u7684\u91cd\u8981\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.devgenius.io/working-with-asynchronous-streams-in-rust-c32a538b88f1"},"\u300a\u5728 Rust \u4e2d\u4f7f\u7528\u5f02\u6b65\u6d41\u300b"),"\u3002 \u5f02\u6b65\u7f16\u7a0b\u5728\u5904\u7406\u968f\u65f6\u95f4\u4ea7\u751f\u7684\u6570\u636e\uff08\u5982\u7f51\u7edc\u54cd\u5e94\u6216\u6587\u4ef6\u6d41\uff09\u7b49\u7a0b\u5e8f\u6027\u80fd\u63d0\u5347\u65b9\u9762\u975e\u5e38\u6709\u7528\u3002\u5728 Rust \u4e2d\uff0c\u64cd\u4f5c\u901a\u5e38\u662f\u540c\u6b65\u7684\uff0c\u5373\u5b83\u4eec\u4f1a\u963b\u585e\u7ebf\u7a0b\u76f4\u5230\u5b8c\u6210\u3002\u800c\u5f02\u6b65\u64cd\u4f5c\u5141\u8bb8\u5728\u7b49\u5f85\u64cd\u4f5c\u5b8c\u6210\u65f6\u8fd0\u884c\u5176\u4ed6\u4efb\u52a1\uff0c\u7279\u522b\u9002\u7528\u4e8e IO \u7ed1\u5b9a\u4efb\u52a1\uff08\u5982\u7f51\u7edc\u6216\u6587\u4ef6\u64cd\u4f5c\uff09\u3002Rust \u7684\u6d41\u53ef\u4ee5\u88ab\u89c6\u4e3a\u8fed\u4ee3\u5668\u7684\u5f02\u6b65\u7248\u672c\uff0c\u53ef\u4ee5\u5728\u6574\u4e2a\u5e8f\u5217\u51c6\u5907\u5c31\u7eea\u524d\uff0c\u6309\u7167\u9879\u76ee\u53ef\u7528\u7684\u987a\u5e8f\u8fdb\u884c\u5904\u7406\u3002Rust \u7684\u5f02\u6b65\u6d41\u4e3b\u8981\u901a\u8fc7 futures \u548c tokio crates \u5b9e\u73b0\u3002\u5f53\u5904\u7406\u5927\u91cf\u968f\u65f6\u95f4\u4ea7\u751f\u7684\u6570\u636e\uff0c\u6216\u65e0\u9650\u5e8f\u5217\uff08\u5982\u80a1\u5e02\u62a5\u4ef7\uff09\u65f6\uff0c\u5f02\u6b65\u6d41\u662f\u7406\u60f3\u4e4b\u9009\u3002\u5728\u5e94\u7528\u7a0b\u5e8f\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u5728\u7b49\u5f85 IO \u64cd\u4f5c\u7684\u573a\u666f\u4e0b\uff0c\u5f02\u6b65\u6d41\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u541e\u5410\u91cf\u3002\u5bf9\u4e8e\u9700\u8981\u5b9e\u65f6\u5904\u7406\u6570\u636e\u7684\u5e94\u7528\u7a0b\u5e8f\u800c\u8a00\uff0c\u5982\u804a\u5929\u5e94\u7528\uff0c\u5b9e\u65f6\u5206\u6790\uff0c\u6216\u76f4\u64ad\uff0c\u5f02\u6b65\u6d41\u4e5f\u5341\u5206\u6709\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.devgenius.io/functional-programming-patterns-in-rust-bc14f3fe9626"},"\u300aRust \u4e2d\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u6a21\u5f0f\u300b"),"\u3002 Rust \u7f16\u7a0b\u8bed\u8a00\u4ee5\u5185\u5b58\u5b89\u5168\u548c\u5e76\u53d1\u7f16\u7a0b\u800c\u95fb\u540d\uff0c\u4f46\u8fd9\u5e76\u4e0d\u662f\u5168\u90e8\u3002\u5b9e\u9645\u4e0a\uff0cRust \u5728\u51fd\u6570\u7f16\u7a0b\u6a21\u5f0f\u65b9\u9762\u4e5f\u6709\u5f88\u5f3a\u5927\u7684\u529f\u80fd\u3002\u5c3d\u7ba1 Rust \u4e0d\u662f\u7eaf\u51fd\u6570\u5f0f\u8bed\u8a00\uff0c\u4f46\u5b83\u501f\u9274\u4e86\u5f88\u591a\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u8303\u4f8b\uff0c\u4f7f\u4f60\u80fd\u7f16\u5199\u51fa\u6e05\u6670\u6613\u7ef4\u62a4\u7684\u4ee3\u7801\u3002\u51fd\u6570\u5f0f\u7f16\u7a0b\u5c06\u8ba1\u7b97\u89c6\u4e3a\u6570\u5b66\u51fd\u6570\u7684\u6c42\u503c\u8fc7\u7a0b\uff0c\u5e76\u907f\u514d\u6539\u53d8\u72b6\u6001\u548c\u53ef\u53d8\u6570\u636e\u3002\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff08OOP\uff09\u56f4\u7ed5\u5c01\u88c5\u4e86\u72b6\u6001\uff08\u6570\u636e\uff09\u548c\u884c\u4e3a\uff08\u65b9\u6cd5\uff09\u7684\u5bf9\u8c61\u6765\u5c55\u5f00\uff0c\u4f9d\u8d56\u7c7b\u7684\u6982\u5ff5\u4f5c\u4e3a\u5bf9\u8c61\u7684\u84dd\u56fe\uff0c\u5e76\u5e38\u5e38\u4f7f\u7528\u7ee7\u627f\u6765\u5728\u7c7b\u4e4b\u95f4\u5171\u4eab\u548c\u6269\u5c55\u884c\u4e3a\u3002\u800c\u51fd\u6570\u5f0f\u7f16\u7a0b\uff08FP\uff09\u4fa7\u91cd\u4e8e\u6ca1\u6709\u72b6\u6001\u7684\u51fd\u6570\uff0c\u5b83\u4eec\u64cd\u4f5c\u4e0d\u53ef\u53d8\u6570\u636e\uff0c\u51fd\u6570\u5145\u5f53\u4e00\u7b49\u516c\u6c11\uff0c\u88ab\u7528\u4e8e\u62bd\u8c61\u3001\u5c01\u88c5\u548c\u7ec4\u5408\uff0c\u8fed\u4ee3\u8fc7\u7a0b\u901a\u5e38\u901a\u8fc7\u9012\u5f52\u6765\u8868\u8fbe\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dev.to/odigos/the-fastest-way-to-deploy-your-javascript-app-to-kubernetes-2j33"},"\u300a\u5c06 Javascript \u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5230 Kubernetes \u7684\u6700\u5feb\u65b9\u6cd5\u300b"),"\u3002 \u8fd9\u7bc7\u6587\u7ae0\u6559\u4f60\u5982\u4f55\u5c06\u4f60\u7684\u7b2c\u4e00\u4e2a JavaScript \u5e94\u7528\u90e8\u7f72\u5230 Kubernetes\uff08\u4e00\u4e2a\u5bb9\u5668\u7f16\u6392\u5e73\u53f0\uff09\u4e0a\u3002\u6211\u4eec\u5c06\u4f7f\u7528 Minikube \u5728\u672c\u5730\u90e8\u7f72\u4e00\u4e2a\u8fd4\u56de\u6837\u672c JSON \u5bf9\u8c61\u7684\u7b80\u5355 Express \u670d\u52a1\u5668\u3002\u9996\u5148\uff0c\u6211\u4eec\u901a\u8fc7 npm \u521d\u59cb\u5316\u9879\u76ee\uff0c\u5e76\u5728 package.json \u4e2d\u5b89\u88c5 Express.js \u6846\u67b6\u3002\u7136\u540e\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u5e76\u4f7f\u7528 npm \u8fd0\u884c\u5b83\uff0c\u786e\u4fdd\u5b83\u80fd\u591f\u6b63\u786e\u54cd\u5e94 GET \u8bf7\u6c42\u3002\u63a5\u7740\uff0c\u6211\u4eec\u7f16\u5199 Dockerfile \u5e76\u7528 Docker \u6784\u5efa\u548c\u8fd0\u884c\u5bb9\u5668\u3002\u6700\u540e\uff0c\u6211\u4eec\u5f00\u542f Minikube\uff0c\u5e76\u4f7f\u7528 kubectl \u6267\u884c\u90e8\u7f72 yaml \u6587\u4ef6\uff0c\u6210\u529f\u5c06 Express \u670d\u52a1\u5668\u90e8\u7f72\u5230\u672c\u5730 Kubernetes \u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://without.boats/blog/a-four-year-plan/"},"\u300aasync Rust \u7684\u56db\u5e74\u8ba1\u5212\u300b"),"\u3002 \u672c\u6587\u4f5c\u8005\u8ba8\u8bba\u4e86\u56db\u5e74\u524d Rust \u53d1\u5e03\u7684 async/await \u7279\u6027\uff0c\u5e76\u6307\u51fa Rust \u9879\u76ee\u5728\u6b64\u529f\u80fd\u4e0a\u51e0\u4e4e\u6ca1\u6709\u6269\u5c55\u3002\u4f5c\u8005\u8ba4\u4e3a\u8fd9\u662f async Rust \u83b7\u5f97\u8d1f\u9762\u8bc4\u4ef7\u7684\u4e3b\u8981\u539f\u56e0\u3002\u6587\u7ae0\u4e2d\uff0c\u4f5c\u8005\u5217\u51fa\u4e86\u4ed6\u8ba4\u4e3a async Rust \u9700\u8981\u7684\u4e00\u4e9b\u529f\u80fd\uff0c\u5305\u62ec\u77ed\u671f\u3001\u4e2d\u671f\u548c\u957f\u671f\u7684\u529f\u80fd\u3002\u77ed\u671f\u529f\u80fd\u4e3b\u8981\u5305\u62ec AsyncIterator \u548c async generators\uff1b\u4e2d\u671f\u529f\u80fd\u5305\u62ec Objective-safe coroutine \u65b9\u6cd5\u548c Async destructors\uff1b\u957f\u671f\u529f\u80fd\u5305\u62ec\u6539\u53d8 Rust \u7684\u4e00\u4e9b\u57fa\u672c\u89c4\u5219\u3002\u4ed6\u5efa\u8bae Rust \u9879\u76ee\u5e94\u6709\u66f4\u6e05\u6670\u7684\u5f00\u53d1\u65b9\u5411\u548c\u4e0e\u793e\u533a\u7684\u4ea4\u6d41\uff0c\u5e76\u611f\u8c22\u90a3\u4e9b\u5728\u8bbe\u8ba1\u95ee\u9898\u4e0a\u4e0e\u4ed6\u4ea4\u6d41\u7684\u9879\u76ee\u6210\u5458\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/react-router-complete-guide/"},"\u300aReact Router v6\uff1a\u65b0\u624b\u6307\u5357\u300b"),"\u3002 React Router \u662f React \u7684\u6807\u51c6\u8def\u7531\u5e93\uff0c\u80fd\u591f\u7ba1\u7406\u5177\u6709\u591a\u4e2a\u89c6\u56fe\u7684 React \u5e94\u7528\u7684 URL\u3002\u672c\u6559\u7a0b\u4ecb\u7ecd\u4e86 React Router v6 \u53ca\u5176\u7528\u6cd5\uff0c\u5305\u62ec\u57fa\u7840\u5bfc\u822a\u8def\u7531\u3001\u5d4c\u5957\u8def\u7531\u3001\u5e26\u8def\u5f84\u53c2\u6570\u7684\u5d4c\u5957\u8def\u7531\u548c\u4fdd\u62a4\u8def\u7531\u3002\u5728 React Router v6 \u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Routes>")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," \u7ec4\u4ef6\u8fdb\u884c\u8def\u7531\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Routes>")," \u7ec4\u4ef6\u4e2d\u5d4c\u5957 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Route>")," \u7ec4\u4ef6\u4ee5\u65b9\u4fbf\u5b9e\u73b0\u5d4c\u5957\u8def\u7531\u3002\u8fd8\u53ef\u4ee5\u4f7f\u7528 useParams \u94a9\u5b50\u8bbf\u95ee URL \u53c2\u6570\uff0cuseNavigate \u94a9\u5b50\u8fdb\u884c\u7a0b\u5e8f\u5316\u5bfc\u822a\u3002\u6b64\u5916\u63d0\u4f9b\u4e86\u7528\u4e8e\u5b9e\u73b0\u8def\u7531\u4fdd\u62a4\u7684\u81ea\u5b9a\u4e49\u8def\u7531\u3002React Router v6.4 \u7248\u672c\u5f15\u5165\u4e86\u7531 Remix \u542f\u53d1\u7684\u65b0\u7279\u6027\uff0c\u5305\u62ec\u6570\u636e\u52a0\u8f7d\u5668\u548c create BrowserRouter\uff0c\u4ee5\u6539\u8fdb\u6570\u636e\u83b7\u53d6\u548c\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://voskan.host/2023/11/08/svg-animations-in-react-with-framer-motion/"},"\u300a\u638c\u63e1\u5728 React \u4e2d\u4f7f\u7528 Framer Motion \u8fdb\u884c SVG \u52a8\u753b\u300b"),"\u3002 \u672c\u6307\u5357\u63a2\u8ba8\u4e86\u5982\u4f55\u5728 React \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 Framer Motion \u52a8\u753b\u5e93\u6765\u521b\u5efa SVG \u52a8\u753b\u3002\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728 React \u9879\u76ee\u4e2d\u5b89\u88c5 Framer Motion \u5e76\u4e3a\u52a8\u753b\u51c6\u5907 SVG\u3002\u7136\u540e\u4e86\u89e3 Framer Motion \u7684\u52a8\u753b\u539f\u7406\uff0c\u5305\u62ec motion \u7ec4\u4ef6\u548c animate \u5c5e\u6027\u7684\u4f7f\u7528\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u521b\u5efa\u7b80\u5355\u548c\u590d\u6742\u7684 SVG \u8def\u5f84\u52a8\u753b\u3002\u8fdb\u4e00\u6b65\u8bb2\u89e3\u4e86\u5982\u4f55\u4e3a\u5e38\u89c1\u7684 SVG \u5f62\u72b6\u6dfb\u52a0\u52a8\u753b\uff0c\u5982\u4f55\u4f7f\u7528\u952e\u76d8\u4e8b\u4ef6\u7b49\u7528\u6237\u4ea4\u4e92\u4e8b\u4ef6\u8fdb\u884c\u4ea4\u4e92\u6027\u52a8\u753b\u8bbe\u8ba1\uff0c\u4ee5\u53ca\u5982\u4f55\u4f18\u5316\u52a8\u753b\u6027\u80fd\u3002\u65e0\u8bba\u662f\u521b\u5efa\u7b80\u5355\u7684\u60ac\u505c\u6548\u679c\u8fd8\u662f\u590d\u6742\u7684\u5165\u573a\u52a8\u753b\uff0cFramer Motion \u90fd\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u521b\u610f\u5de5\u5177\uff0c\u4f7f SVG \u52a8\u753b\u7684\u7f29\u653e\u548c\u6027\u80fd\u4f18\u52bf\u5f97\u4ee5\u5145\u5206\u53d1\u6325\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mdhweekly.com/weekly/issue-0114"},"MDH \u524d\u7aef\u5468\u520a\u7b2c 114 \u671f\uff1aVite 5\u3001Prettier 3.1\u3001\u6076\u610f\u8f6f\u4ef6\u3001FramerMotion SVG \u52a8\u753b\u3001\u6876\u6587\u4ef6")))}c.isMDXComponent=!0}}]);