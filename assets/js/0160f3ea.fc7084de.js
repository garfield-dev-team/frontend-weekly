"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[9557],{49613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},91980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(64778),r=(t(59496),t(49613));const l={slug:"11\u670814\u65e5\u5185\u5bb9\u6c47\u603b",title:"11\u670814\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["\u7bad\u5934\u51fd\u6570","Promise","\u4ee3\u7801\u89c4\u8303","\u6784\u5efa\u5de5\u5177"]},i=void 0,o={permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2021/11\u670814\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2021/2021-11-14/index.md",source:"@site/blogs/2021/2021-11-14/index.md",title:"11\u670814\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u6784\u5efa\u63d0\u6548",date:"2021-11-14T00:00:00.000Z",formattedDate:"November 14, 2021",tags:[{label:"\u7bad\u5934\u51fd\u6570",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2021/tags/\u7bad\u5934\u51fd\u6570"},{label:"Promise",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2021/tags/promise"},{label:"\u4ee3\u7801\u89c4\u8303",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2021/tags/\u4ee3\u7801\u89c4\u8303"},{label:"\u6784\u5efa\u5de5\u5177",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2021/tags/\u6784\u5efa\u5de5\u5177"}],readingTime:4.5,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"11\u670814\u65e5\u5185\u5bb9\u6c47\u603b",title:"11\u670814\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["\u7bad\u5934\u51fd\u6570","Promise","\u4ee3\u7801\u89c4\u8303","\u6784\u5efa\u5de5\u5177"]},prevItem:{title:"11\u670821\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2021/11\u670821\u65e5\u5185\u5bb9\u6c47\u603b"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcd2 \u6784\u5efa\u63d0\u6548"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5305\u5de5\u5177\uff1awebpack -> rollup"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210 AST \uff1ababel -> acorn"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u8f6c\u6362\uff1ababel -> swc"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u538b\u7f29\uff1aterser -> esbuild")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4ee3\u7801\u89c4\u8303\u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESLint \u7528\u4e8e\u4ee3\u7801\u89c4\u8303\u68c0\u67e5\uff0c\u5728\u5f00\u53d1\u9636\u6bb5\u63d0\u524d\u89c4\u907f\u95ee\u9898\uff0c\u63d0\u5347\u4ee3\u7801\u5065\u58ee\u6027"),(0,r.kt)("li",{parentName:"ul"},"Prettier \u7528\u4e8e\u4ee3\u7801\u98ce\u683c\u6821\u9a8c\uff0c\u7edf\u4e00\u56e2\u961f\u7f16\u7801\u98ce\u683c")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b9e\u9645\u4e0a\u7f16\u5199\u6587\u6863\u3001\u5355\u5143\u6d4b\u8bd5\u3001\u7c7b\u578b\u58f0\u660e\u3001tsconfig.json \u3001ESLint \u3001Prettier \u3001lint-staged \u3001husky \u8fd9\u4e9b\u5bf9\u5b9e\u73b0\u529f\u80fd\u4e0a\u6765\u8bf4\u6ca1\u6709\u4efb\u4f55\u4f5c\u7528\uff0c\u4f46\u662f\u53ef\u4ee5\u4fdd\u969c\u4ee3\u7801\u4ea4\u4ed8\u8d28\u91cf")),(0,r.kt)("p",null,"\ud83d\udcd2 \u751f\u6210\u81ea\u589e ID \uff1a"),(0,r.kt)("p",null,"\u770b\u5230\u4e00\u4e2a\u901a\u8fc7 generator \u51fd\u6570\u751f\u6210\u81ea\u589e ID \u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function *customIdGenerator() {\n  let i = 0;\n  while (true) {\n    yield i++;\n  }\n}\n")),(0,r.kt)("p",null,"\u770b\u4e86\u4e0b\u5176\u5b9e\u8fd8\u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function customIdGenerator() {\n  let i = 0;\n  return {\n    next() {\n      return i++;\n    }\n  }\n}\n\nconst IDGenerator = customIdGenerator();\nIDGenerator.next(); // 0\nIDGenerator.next(); // 1\nIDGenerator.next(); // 2\nIDGenerator.next(); // 3\nIDGenerator.next(); // 4\nIDGenerator.next(); // 5\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"++i")," \u662f\u5148\u52a0\u518d\u4f5c\u4e3a\u8868\u8fbe\u5f0f\u7684\u503c\u53bb\u8d4b\u503c\uff0c\u76f8\u5f53\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"(i = i + 1)")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"i++")," \u662f\u5148\u628a\u539f\u6765\u7684\u503c\u4f5c\u4e3a\u8868\u8fbe\u5f0f\u7684\u503c\u8d4b\u503c\u518d\u52a0")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4e13\u4e1a\u540d\u8bcd"),(0,r.kt)("p",null,"\u7f13\u5b58\u547d\u4e2d\n\u89c4\u5219\u547d\u4e2d\n\u589e\u91cf\u6784\u5efa"),(0,r.kt)("p",null,"\ud83d\udcd2 Promise \u56db\u79cd\u5e38\u7528\u5de5\u5177\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise.all()")," \uff1a\u63a5\u6536\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u6570\u7ec4\uff0c\u5982\u679c\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u90fd ",(0,r.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u5219\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\uff0c\u53ea\u8981\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"rejected")," \uff0c\u5219\u8fd4\u56de\u6700\u5148 rejected \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \uff0c\u901a\u5e38",(0,r.kt)("strong",{parentName:"li"},"\u7528\u4e8e\u5e76\u53d1\u8bf7\u6c42"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise.race()")," \uff1a\u63a5\u6536\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u6570\u7ec4\uff0crace \u610f\u601d\u5c31\u662f\u6bd4\u8c01\u5feb\uff0c\u8fd4\u56de\u72b6\u6001\u6700\u5148\u6539\u53d8\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \uff0c\u4e0d\u7ba1\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0c\u901a\u5e38",(0,r.kt)("strong",{parentName:"li"},"\u7528\u4e8e\u8bf7\u6c42\u8d85\u65f6\u5904\u7406"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise.any()")," \uff1a\u63a5\u6536\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u6570\u7ec4\uff0c\u8fd4\u56de\u6700\u5148 ",(0,r.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \uff0c\u5982\u679c\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u72b6\u6001\u8f6c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"fulfilled")," \uff0c\u5219\u629b\u51fa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"AggregateError")," \uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise.allSettled()")," \uff1a\u63a5\u6536\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u6570\u7ec4\uff0c\u5728\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u72b6\u6001\u6539\u53d8\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"rejected"),"\uff09\u4e4b\u540e\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"Promise.allSettled")," \u9002\u7528\u4e8e\u5f02\u6b65\u4efb\u52a1\u4e92\u76f8\u4e0d\u4f9d\u8d56\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Promise.all")," \u9002\u7528\u4e8e\u5f02\u6b65\u4efb\u52a1\u4e92\u76f8\u4e4b\u95f4\u9700\u8981\u4f9d\u8d56\u5176\u4ed6\u4efb\u52a1\u7684\u7ed3\u679c\uff1b")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4ec0\u4e48\u65f6\u5019\u4e0d\u80fd\u4f7f\u7528\u7bad\u5934\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u51fd\u6570\u63d0\u5347\u65f6\uff08\u7bad\u5934\u51fd\u6570\u53ea\u80fd\u5199\u6210\u8868\u8fbe\u5f0f\u5f62\u5f0f\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f7f\u7528\u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u3001",(0,r.kt)("inlineCode",{parentName:"li"},"arguments")," \u3001",(0,r.kt)("inlineCode",{parentName:"li"},"prototype")," \u65f6\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f7f\u7528\u547d\u540d\u51fd\u6570\u65f6\uff08\u7bad\u5934\u51fd\u6570\u662f\u533f\u540d\u7684\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u65f6\uff08\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u5bf9\u8c61\u65b9\u6cd5\u4e2d\u8bbf\u95ee\u5f53\u524d\u5bf9\u8c61\u65f6;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let obj = {\n  a: 1,\n  fn1: () => {\n    console.log(this)\n  },\n  fn2: function() {\n    console.log(this)\n  }\n}\nobj.fn1(); // Window\nobj.fn2(); // {a: 1, fn1: \u0192, fn2: \u0192} \uff0c\u8fd9\u662f this \u7684\u9690\u5f0f\u7ed1\u5b9a\n\nconst f1 = obj.fn1;\nconst f2 = obj.fn2;\nf1(); // Window\nf2(); // Window \uff0c\u9690\u5f0f\u7ed1\u5b9a\u53d6\u51b3\u4e8e\u8c01\u6765\u8c03\u7528\uff0c\u8c01\u8c03\u7528\u5c31\u6307\u5411\u8c01\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u4e4b\u6240\u4ee5\u4f1a\u6307\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"Window")," \u662f\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var that = this; // \u76f4\u63a5\u4f7f\u7528\u95ed\u5305\u7f13\u5b58 this\nlet obj = {\n  a: 1,\n  fn1: function() {\n        console.log(that);\n    }\n}\n")),(0,r.kt)("p",null,"\u5728\u5bf9\u8c61\u65b9\u6cd5\uff08\u4f8b\u5982 Vue Options API\uff09\u7684\u5f02\u6b65\u56de\u8c03\u4e2d\u7ecf\u5e38\u4f1a\u9047\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u4e22\u5931\u7684\u60c5\u51b5\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528\u95ed\u5305\u8fdb\u884c\u7f13\u5b58\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u4f7f\u7528 _this \u53d8\u91cf\u8fdb\u884c\u7f13\u5b58\nconst _this = this;\napi.get("/api/xxx", function(res) {\n    _this.tableData = res;\n})\n\n// \u9664\u4e86\u4f7f\u7528\u95ed\u5305\u7f13\u5b58 this \uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7bad\u5934\u51fd\u6570\napi.get("/api/xxx", (res) => {\n    this.tableData = res;\n})\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u603b\u7ed3\u4e00\u4e0b\uff1a\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \uff0c\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"argument")," \u5bf9\u8c61\uff0c\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype")," \uff0c\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\uff08\u7528 new \u8c03\u7528\u4f1a\u62a5\u9519\uff09\u3002\u7bad\u5934\u51fd\u6570\u4f1a\u81ea\u52a8\u6355\u83b7\u4e0a\u7ea7\u8bcd\u6cd5\u4f5c\u7528\u57df\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \uff0c\u5e76\u4e14\u7bad\u5934\u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u5728\u58f0\u660e\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\uff0c\u4e0d\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"apply")," \u4fee\u6539")))}c.isMDXComponent=!0}}]);