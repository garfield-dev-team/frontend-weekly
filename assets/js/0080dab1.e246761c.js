"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[4892],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||p;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93999:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var n=r(83117),o=r(80102),p=(r(67294),r(3905)),a=["components"],l={slug:"8\u670814\u65e5\u5185\u5bb9\u6c47\u603b",title:"8\u670814\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},s=void 0,i={permalink:"/frontend-weekly/blog/8\u670814\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-08-14/index.md",source:"@site/blog/2022-08-14/index.md",title:"8\u670814\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 vite \u6253\u5305\u9047\u5230\u7684\u95ee\u9898",date:"2022-08-14T00:00:00.000Z",formattedDate:"August 14, 2022",tags:[],readingTime:4.305,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"8\u670814\u65e5\u5185\u5bb9\u6c47\u603b",title:"8\u670814\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"8\u67087\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/8\u67087\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ud83d\udcd2 vite \u6253\u5305\u9047\u5230\u7684\u95ee\u9898"),(0,p.kt)("p",null,"vite \u9ed8\u8ba4\u4f7f\u7528 esbuild \u538b\u7f29\uff0cesbuild \u4e0d\u4ec5\u4f1a\u505a\u538b\u7f29\uff0c\u800c\u4e14\u8fd8\u4f1a\u5728 target \u914d\u7f6e\u5141\u8bb8\u7684\u8303\u56f4\u5185\u505a\u4e00\u4e9b\u8bed\u6cd5\u8f6c\u6362\uff0c\u5c3d\u53ef\u80fd\u51cf\u5c0f bundle \u4f53\u79ef\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982 esbuild \u538b\u7f29\u4f1a\u628a ",(0,p.kt)("inlineCode",{parentName:"p"},"try...catch")," \u540e\u9762\u7684\u62ec\u53f7\u53bb\u6389\uff0c\u8fd9\u662f ES2019 \u4e2d\u7684\u8bed\u6cd5\uff0c\u5728\u8001\u5de5\u7a0b\u6784\u5efa\u4f1a\u62a5\u9519\u3002"),(0,p.kt)("p",null,"\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528 terser \u538b\u7f29\uff0c\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},'minify: "terser"'),"\uff0c\u53e6\u4e00\u79cd\u65b9\u6848\u7ee7\u7eed\u4f7f\u7528 esbuild \u4f46\u662f\u624b\u52a8\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},'target: "es2015"'),"\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://vitejs.dev/config/build-options.html#build-target"},"https://vitejs.dev/config/build-options.html#build-target"))),(0,p.kt)("p",null,"\ud83d\udcd2 Golang \u6807\u51c6\u5e93 strings"),(0,p.kt)("p",null,"\u91cd\u70b9\u770b\u4e00\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"strings.Builder")," \u7684\u7528\u6cd5\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_24433609/article/details/124500115"},"Go \u5b66\u4e60\u4e4b strings.Builder \u7bc7")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/cheyunhua/p/15769717.html"},"Go \u5b57\u7b26\u4e32\u62fc\u63a56\u79cd\uff0c\u6700\u5feb\u7684\u65b9\u5f0f -- strings.builder")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_41035588/article/details/108289761"},"Go\u62fc\u63a5\u5b57\u4e32\u7684\u4e09\u79cd\u65b9\u6cd5 Go1.10\u4e2d\u7684strings.Builder")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://pkg.go.dev/strings@go1.19"},"https://pkg.go.dev/strings@go1.19")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/usDh1-Wzxrf4BftfWhwduA"},"\u4f60\u9700\u8981\u77e5\u9053\u7684TypeScript\u9ad8\u7ea7\u7c7b\u578b")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/HaF9qieEJWNUoyY9qTvnKw"},"Go \u7684\u65f6\u95f4\u8f6c\u6362\u548c\u65f6\u533a\u6821\u5bf9\u603b\u8bb0\u4e0d\u4f4f\uff1f\u7ed9\u4f60\u4e00\u4efd\u5907\u5fd8\u5355")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7121520457760653349"},"\u4e24\u4e2a\u771f\u5b9e\u7ebf\u4e0a\u5347\u7ea7\u6545\u969c\u8ba9\u4f60\u5f7b\u5e95\u641e\u61c2package.json\u4e2d\u7684\u8131\u5b57\u7b26(^)")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/6Er2IQEXXNc8Sb5vVJZZOQ"},"\u3010\u7b2c2696\u671f\u3011React \u72b6\u6001\u7ba1\u7406\u7684\u65b0\u6d6a\u6f6e")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/X60eIQcEAJz8tvNz5qArxg"},"Go \u521b\u59cb\u4eba\u6559\u4f60\u5982\u4f55\u5904\u7406\u9519\u8bef")),(0,p.kt)("p",null,"\u2b50\ufe0f ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/4Sxal7N-uZ8gvphC8XWo8A"},"\u603b\u76d1\u53c8\u6765\u4e86\uff0c\u4eba\u72e0\u8bdd\u4e0d\u591a\uff0c\u8fd9\u7bc7 gRPC\uff0c\u5c0f\u5f1f\u4f69\u670d\uff01")),(0,p.kt)("p",null,"\ud83d\udcd2 React \u6027\u80fd\u4f18\u5316, \u4ece 500 \u6beb\u79d2\u5230 1.7 \u6beb\u79d2"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://orizens.com/blog/500ms-to-1-7ms-in-react-a-journey-and-a%20checklist/"},"https://orizens.com/blog/500ms-to-1-7ms-in-react-a-journey-and-a%20checklist/"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7129520818232492040"},"UMD \u7684\u5305\u5982\u4f55\u5bfc\u51fa TS \u7c7b\u578b")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7116141318853623839"},"\u4e3a\u4ec0\u4e48 React \u7684 Diff \u7b97\u6cd5\u4e0d\u91c7\u7528 Vue \u7684\u53cc\u7aef\u5bf9\u6bd4\u7b97\u6cd5")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7129267782515949575"},"\ud83d\ude80Turborepo\uff1a\u53d1\u5e03\u5f53\u6708\u5c31\u6fc0\u589e 3.8k Star\uff0c\u8fd9\u6b3e\u8d85\u795e\u7684\u65b0\u5174 Monorepo \u65b9\u6848\uff0c\u4f60\u4e0d\u6253\u7b97\u5c1d\u8bd5\u4e0b\u5417")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ptJK7CDHCr6P4JCdsUXKdg"},"\u641e\u6e05\u695a Go Mod\u7684\u7248\u672c\u548c\u4f2a\u7248\u672c\uff0c\u4e0b\u6b21\u522b\u4e71\u7528\u4e86")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Nu4XCuF4d_BaAkmwRr3f4A"},"\u638c\u63e1 TypeScript \u4e2d\u7684\u6620\u5c04\u7c7b\u578b")),(0,p.kt)("p",null,"\ud83d\udcd2 React Re-render \u6307\u5357"),(0,p.kt)("p",null,"\u4ec0\u4e48\u662f re-render\uff1f\u4ec0\u4e48\u662f\u5fc5\u8981\u7684 re-render \u548c\u4e0d\u5fc5\u8981\u7684 re-render\uff1f\u5982\u679c\u4f60\u5bf9\u8fd9\u4e9b\u95ee\u9898\u8fd8\u6a21\u6a21\u7cca\u7cca\u7684\uff0c\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u53ef\u4ee5\u627e\u5230\u7b54\u6848\u3002"),(0,p.kt)("p",null,"\u6709\u56db\u4e2a\u539f\u56e0\u53ef\u4ee5\u8ba9\u4e00\u4e2a\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u81ea\u5df1\uff1a\u72b6\u6001\u53d8\u5316\u3001\u7236\u7ea7\uff08\u6216\u5b50\u7ea7\uff09\u91cd\u65b0\u6e32\u67d3\u3001\u4e0a\u4e0b\u6587\u53d8\u5316\u548c hooks \u53d8\u5316\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7 composition\uff08\u7ec4\u5408\uff09\u53ef\u4ee5\u907f\u514d re-render\u3002\u6709\u51e0\u79cd\u65b9\u5f0f\uff0c1\uff09\u628a\u72b6\u6001\u4e0b\u79fb\uff0c\u907f\u514d\u4e0a\u5c42\u7ec4\u4ef6 re-render\uff0c\u8ba9 re-render \u4fdd\u6301\u5728\u4e00\u4e2a\u5f88\u5c0f\u7684\u8303\u56f4\u4e4b\u5185\uff0c2\uff09children as props\uff0c\u4f5c\u4e3a props\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u4f1a\u53d7 state \u53d8\u66f4\u7684\u5f71\u54cd\uff0c3\uff09component as props\uff0c\u907f\u514d component re-render\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7 React.memo \u53ef\u4ee5\u907f\u514d re-render\uff0c\u88ab memo \u7684\u7ec4\u4ef6\u53ea\u5728 props \u53d8\u66f4\u65f6\u4f1a re-render\u3002\u6709\u51e0\u79cd\u65b9\u5f0f\uff0c1\uff09\u5bf9\u4e8e\u5e26 props \u7684 component\uff0c\u9700\u5bf9\u975e\u539f\u59cb\u503c\u7684 props \u505a memo\uff0c2\uff09components as props or children\uff0c\u5bf9\u5b50\u7ec4\u4ef6\u505a memo \u800c\u4e0d\u8981\u5bf9\u7236\u7ec4\u4ef6\u505a memo\u3002"),(0,p.kt)("p",null,"\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u7528 useMemo/useCallback\uff1f1\uff09React.memo \u8fc7\u7684\u7ec4\u4ef6\u7684 props \u5e94\u8be5\u7528\uff0c\u56e0\u4e3a\u4ed6\u4eec\u53ea\u6709 props \u53d8\u66f4\u65f6\u624d\u4f1a re-render\uff0c\u6240\u4ee5\u53cd\u4e4b\u975e React.memo \u8fc7\u7684\u7ec4\u4ef6\u7684 props \u65e0\u9700\u4f7f\u7528\uff0c\u56e0\u4e3a\u90fd\u4f1a re-render\uff0c\u7528\u4e86\u4e5f\u767d\u7528\uff0c2\uff09useEffect\u3001useMemo\u3001useCallback \u4e2d\u975e\u539f\u59cb\u503c\u7684\u4f9d\u8d56\u5e94\u8be5\u7528\uff0c3\uff09\u91cd\u6d88\u8017\uff08\u6bd4\u5982\u751f\u6210\u6e32\u67d3\u6811\uff09\u7684\u90e8\u5206\u5e94\u8be5\u7528\uff0c\u53cd\u4e4b\u8f7b\u6d88\u8017\u4e0d\u8981\u7528\uff0c\u56e0\u4e3a useMemo/useCallback \u672c\u8eab\u4e5f\u6709\u6d88\u8017\u3002"),(0,p.kt)("p",null,"\u5982\u4f55\u9632\u6b62 Context \u5f15\u8d77\u7684 re-render\uff1f1\uff09memo context value\uff0c\u907f\u514d\u7236\u7ea7\u7ec4\u4ef6 re-render \u5bfc\u81f4 value \u53d8\u66f4\u4ece\u800c\u8ba9\u4f9d\u8d56 context \u7684\u5730\u65b9\u5168\u90e8 re-render\uff0c2\uff09\u62c6\u5206 data \u548c API\uff08getter \u548c setter\uff09\uff0c\u8fd9\u6837 getter \u53d8\u66f4\u65f6\u4f9d\u8d56 setter \u7684\u90e8\u5206\u4e0d\u4f1a re-render\uff0c3\uff09\u628a\u6570\u636e\u62c6\u5c0f\uff0c4\uff09\u4f7f\u7528 context selector \u6bd4\u5982 use-context-selector\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://www.developerway.com/posts/react-re-renders-guide"},"https://www.developerway.com/posts/react-re-renders-guide"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/vRI-bFB4_IEaoCCQcMqZjw"},"\u660e\u660e\u52a0\u4e86\u552f\u4e00\u7d22\u5f15\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u662f\u4ea7\u751f\u91cd\u590d\u6570\u636e")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/0Jn1CHAVyX1U8RD2OUJENQ"},"\u73b0\u4ee3\u524d\u7aef\u6d4b\u8bd5\u6846\u67b6 Vitest \u7684\u4e00\u4e9b\u843d\u5730\u5b9e\u8df5\u611f\u609f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7129130418657296421"},"\u5982\u4f55\u7528 Project Reference \u4f18\u5316 tsc \u7f16\u8bd1\u6027\u80fd")))}d.isMDXComponent=!0}}]);