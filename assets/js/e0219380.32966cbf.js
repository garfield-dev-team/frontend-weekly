"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[5963],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,h=m["".concat(i,".").concat(k)]||m[k]||s[k]||p;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<p;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),p=(n(67294),n(3905)),o=["components"],l={slug:"7\u670831\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u670831\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},i=void 0,u={permalink:"/frontend-weekly/blog/7\u670831\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-07-31/index.md",source:"@site/blog/2022-07-31/index.md",title:"7\u670831\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 Go\u8bed\u8a00\u4e2d\u5e38\u89c1100\u95ee\u9898-#86 Sleeping in unit tests",date:"2022-07-31T00:00:00.000Z",formattedDate:"July 31, 2022",tags:[],readingTime:3.675,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"7\u670831\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u670831\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"7\u670824\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/7\u670824\u65e5\u5185\u5bb9\u6c47\u603b"}},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/yUg-9H0GgzbavuxuU8Aahw"},"Go\u8bed\u8a00\u4e2d\u5e38\u89c1100\u95ee\u9898-#86 Sleeping in unit tests")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7125613440000851975"},"\u8d85\u5b9e\u7528\u7684Chrome DevTools\u8c03\u8bd5\u6280\u5de7")),(0,p.kt)("p",null,"\ud83d\udcd2 \u5f00\u6e90\u9879\u76ee\u63a8\u8350"),(0,p.kt)("p",null,"\u7528 Go \u5199\u7684 GUI gRPC \u5ba2\u6237\u7aef\u3002\u4f5c\u8005\u5728\u8c03\u8bd5 gPRC \u63a5\u53e3\u65f6\uff0c\u53d1\u73b0\u6ca1\u6709\u7c7b\u4f3c postman \u8d81\u624b\u7684 gPRC \u5ba2\u6237\u7aef\uff0c\u6240\u4ee5\u5c31\u81ea\u5df1\u52a8\u624b\u5199\u4e86\u4e00\u4e2a\u7136\u540e\u5f00\u6e90\u4e86\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/crossoverJie/ptg"},"https://github.com/crossoverJie/ptg"))),(0,p.kt)("p",null,"Go DDD \u793a\u4f8b\u9879\u76ee\u3002\u8be5\u9879\u76ee\u901a\u8fc7\u4e00\u4e2a\u9884\u7ea6\u7cfb\u7edf\u7684\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5728 Go \u9879\u76ee\u4e2d\u5b9e\u73b0\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1(DDD)\u548c\u8bfb\u5199\u5206\u79bb\u67b6\u6784(CQRS)\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThreeDotsLabs/wild-workouts-go-ddd-example"},"https://github.com/ThreeDotsLabs/wild-workouts-go-ddd-example"))),(0,p.kt)("p",null,"\u4e00\u6b3e\u9759\u6001\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u6d4b\u8bd5(SAST)\u5de5\u5177\u3002\u5b83\u53ef\u4ee5\u68c0\u6d4b\u9879\u76ee\u4e2d\u662f\u5426\u5305\u542b\u5bc6\u7801\u3001API Key\u3001token \u7b49\u4fe1\u606f\uff0c\u8fd8\u80fd\u591f\u8f7b\u677e\u6574\u5408\u5230 Git Hook \u548c GitHub Action\uff0c\u5b9e\u73b0\u63d0\u4ea4\u4ee3\u7801\u65f6\u81ea\u52a8\u68c0\u6d4b\uff0c\u901a\u8fc7\u544a\u8b66\u548c\u963b\u6b62 push \u7b49\u65b9\u5f0f\uff0c\u6709\u6548\u5730\u9632\u6b62\u654f\u611f\u4fe1\u606f\u6cc4\u6f0f\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/zricethezav/gitleaks"},"https://github.com/zricethezav/gitleaks"))),(0,p.kt)("p",null,"\u5728\u7ebf\u53ef\u89c6\u5316\u6b63\u5219\u7f16\u8f91\u5668\u3002\u8be5\u9879\u76ee\u53ef\u5c06\u8f93\u5165\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u7684\u53ef\u89c6\u5316\u56fe\u5f62\uff0c\u652f\u6301\u901a\u8fc7\u7f16\u8f91\u56fe\u5f62\u8282\u70b9\u4fee\u6539\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4ee5\u53ca\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u7b49\u529f\u80fd\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/Bowen7/regex-vis"},"https://github.com/Bowen7/regex-vis"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ORqdfZZ8qFyJdYTRwEULgQ"},"\u524d\u7aef\u6784\u5efa\u6548\u7387\u4f18\u5316\u4e4b\u8def")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/DuQzAumv_eB6Wc-YGVbe5g"},"Esbuild Bundler HMR")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/bHdzGYSKC9SNoA7dpVvNsw"},"\u9762\u8bd5\u7a81\u51fb69\uff1aTCP \u53ef\u9760\u5417\uff1f\u4e3a\u4ec0\u4e48")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/NUnaiVWADxzDOYPQdAwm6w"},"\u62db\u94f6\u7f51\u7edc\u4e00\u9762\uff1aAOP \u4e86\u89e3\u5417\uff1f\u6709\u4ec0\u4e48\u7528\uff1f\u5207\u9762\u6267\u884c\u987a\u5e8f\u5982\u4f55\u63a7\u5236")),(0,p.kt)("p",null,"\u2b50\ufe0f ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7125066863150628900"},"Nest \u7684\u5b9e\u73b0\u539f\u7406\uff1f\u7406\u89e3\u4e86 reflect metadata \u5c31\u61c2\u4e86")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7123969545387114509"},"\u803d\u8bef\u4f60\u5341\u5206\u949f\uff01\ud83c\udf83\u4f60\u53ef\u80fd\u7528\u5f97\u4e0a\u8fd9\u4e9bwebpack5\u65b0\u7279\u6027")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7118782372220567566"},"\u5165\u804c\u5373\u5dc5\u5cf0\uff1f\ud83e\udde8\u57fa\u5efa\u4f18\u5316\u9879\u76ee\u4f53\u79ef\u51cf\u5c1120%\uff01")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/XznUiQUq5vRWFLgbz2u8Dg"},"\u7b80\u5355\u597d\u7528\u7684\u524d\u7aef\u62d6\u62fd\u6392\u5e8f\u5e93")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7124601707702517797"},"\u4f60\u80fd\u7ed9\u524d\u7aef\u5de5\u7a0b\u5316\u4e0b\u4e2a\u5b9a\u4e49\u4e48")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/KsoSwA73PzGwYMqZOwUvNQ"},"\u4f60\u9700\u8981\u77e5\u9053\u7684ES6\u2014ES13\u5f00\u53d1\u6280\u5de7\uff01")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PL_uWkSTo12hxmxMmUKndw"},"\u3010\u7b2c2682\u671f\u3011\u524d\u7aef\u573a\u666f\u4e0b\u8bf7\u6c42\u7684Race Conditions")),(0,p.kt)("p",null,"\ud83d\udcd2 \u4ecb\u7ecd\u51e0\u4e2a\u76f8\u5bf9\u51b7\u95e8\u7684 React Hook"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://css-tricks.com/react-hooks-the-deep-cuts/"},"https://css-tricks.com/react-hooks-the-deep-cuts/"))),(0,p.kt)("p",null,"\ud83d\udcd2 Remix \u548c Next.js \u7684\u533a\u522b"),(0,p.kt)("p",null,"\u672c\u6587\u5bf9\u8fd9\u4e24\u4e2a\u57fa\u4e8e React \u7684\u6846\u67b6\u8fdb\u884c\u4e86\u9010\u4e2a\u7279\u6027\u7684\u6bd4\u8f83\uff0c\u5b83\u4eec\u6709\u5f88\u591a\u76f8\u4f3c\u4e4b\u5904\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u5173\u952e\u7684\u533a\u522b\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2022/07/look-remix-differences-next/"},"https://www.smashingmagazine.com/2022/07/look-remix-differences-next/"))),(0,p.kt)("p",null,"\ud83d\udcd2 \u9605\u8bfb\u6e90\u7801\u4e4b React \u7bc7"),(0,p.kt)("p",null,"\u672c\u6587\u5e76\u4e0d\u662f\u8981\u8be6\u5c3d\u5730\u63cf\u8ff0 React \u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u800c\u662f\u4e3b\u8981\u5173\u6ce8\u4e86 React \u7684\u8bbe\u8ba1\u548c React \u5f00\u53d1\u4eba\u5458\u591a\u5e74\u6765\u91c7\u7528\u7684\u5b9e\u8df5\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://alexkondov.com/readint-source-code-react/"},"https://alexkondov.com/readint-source-code-react/"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://www.bmpi.dev/dev/deep-in-program-language/how-to-implement-generics/"},"\u7f16\u7a0b\u8bed\u8a00\u662f\u5982\u4f55\u5b9e\u73b0\u6cdb\u578b\u7684")),(0,p.kt)("p",null,"\ud83d\udcd2 Vue \u7f16\u8bd1\u4e09\u90e8\u66f2"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/5GSrv0xV5a1VqkKuPGgTRw"},"Vue \u7f16\u8bd1\u4e09\u90e8\u66f2\uff1a\u5982\u4f55\u5c06 template \u7f16\u8bd1\u6210 AST")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-Wo1_GfMyVgDckpNnL42wQ"},"Vue \u7f16\u8bd1\u4e09\u90e8\u66f2\uff1a\u6a21\u578b\u6811\u4f18\u5316")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/K0za54kUIYXXpz3BS8XQkw"},"Vue \u7f16\u8bd1\u4e09\u90e8\u66f2\uff1a\u6700\u540e\u4e00\u66f2\uff0crender code \u751f\u6210")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/3fMZN_LidCi5fiD16nNWWA"},"\u5b57\u8282\u4e00\u9762\uff1aTCP \u548c UDP \u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u4e2a\u7aef\u53e3\u5417")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-z809aeSyvZsdKcWKSUrgA"},"\u5982\u4f55\u5728\u7e41\u91cd\u7684\u5de5\u4f5c\u4e2d\u7ba1\u7406\u597d\u81ea\u5df1\u7684\u65f6\u95f4\u548c\u7cbe\u529b")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7121378029682556958"},"\u300c\u4e07\u5b57\u603b\u7ed3\u300d\ud83c\udf52\u52a8\u753b + \u5927\u767d\u8bdd\u8bb2\u6e05\u695aReact\u6e32\u67d3\u539f\u7406")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-UOG3Pn9aNxRMBtncGjF-w"},"Go\u8bed\u8a00\u4e2d\u5e38\u89c1100\u95ee\u9898-#85 Not using table-driven tests")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/JmHNfU11kbHGOnHi4kCcmQ"},"\u5c0f\u7a0b\u5e8f\u4e0d\u8ba9\u7528 JS \u89e3\u91ca\u5668\uff1f\u90a3\u6211\u518d\u809b\u4e00\u6b21\u9e45\u5382")))}k.isMDXComponent=!0}}]);