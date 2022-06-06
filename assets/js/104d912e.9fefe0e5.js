"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[1718],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],p={slug:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",title:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},c=void 0,l={permalink:"/frontend-weekly/blog/6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-06-12/index.md",source:"@site/blog/2022-06-12/index.md",title:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 NPM \u53d1\u5305\u811a\u672c\u52a0\u4e0a\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801",date:"2022-06-12T00:00:00.000Z",formattedDate:"June 12, 2022",tags:[],readingTime:.785,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",title:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"6\u67085\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/6\u67085\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcd2 NPM \u53d1\u5305\u811a\u672c\u52a0\u4e0a\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const npmPublish = async () => {\n  const scripts = [\n    "npm set-script postinstall \\"\\"",\n    "npm publish",\n    "npm set-script postinstall \\"patch-package\\"",\n  ];\n  await scripts.reduce(\n    (prev, script) => prev.then(() => runScript(script)),\n    Promise.resolve()\n  );\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"reduce()")," \u786e\u4fdd\u4e86 Promise \u6309\u987a\u5e8f\u8c03\u7528\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all()")," \u5e76\u53d1\u6267\u884c\u4e0d\u4fdd\u8bc1\u987a\u5e8f")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/LMSveysC0re7A0sbvvImuw"},"\u3010\u7b2c2632\u671f\u3011\u5fae\u524d\u7aef\u6846\u67b6 Satum \u7684\u6027\u80fd\u4f18\u5316\u7b56\u7565")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/lApEUTzOsdbvMeRUXcTneg"},"\u5927\u5bb6\u90fd\u80fd\u770b\u5f97\u61c2\u7684\u6e90\u7801\uff08\u4e00\uff09ahooks \u6574\u4f53\u67b6\u6784\u7bc7")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/h7GiH_s8e8wM0CDS_tF_3w"},"React\u65b0\u6587\u6863\uff1a\u4e0d\u8981\u6ee5\u7528effect\u54e6")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7103165205483356168"},"\u4f60\u8fd8\u4e0d\u4f1a\u5199 vite \u63d2\u4ef6\u5417\uff1f\u6ca1\u5173\u7cfb\uff0c\u6211\u6559\u4f60\u554a")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Gl94ISY5N4BYyYmVT9-QFQ"},"\u7528 Node.js \u624b\u5199\u4e00\u4e2a DNS \u670d\u52a1\u5668")))}f.isMDXComponent=!0}}]);