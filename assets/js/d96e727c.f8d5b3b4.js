"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[2320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=i(n),m=a,b=k["".concat(c,".").concat(m)]||k[m]||s[m]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],p={slug:"12\u670826\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670826\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["Webpack","Golang","NPM","React"]},c=void 0,i={permalink:"/frontend-weekly/blog/12\u670826\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-26/index.md",source:"@site/blog/2021-12-26/index.md",title:"12\u670826\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udc1b \u751f\u4ea7\u73af\u5883\u5982\u4f55 debug",date:"2021-12-26T00:00:00.000Z",formattedDate:"December 26, 2021",tags:[{label:"Webpack",permalink:"/frontend-weekly/blog/tags/webpack"},{label:"Golang",permalink:"/frontend-weekly/blog/tags/golang"},{label:"NPM",permalink:"/frontend-weekly/blog/tags/npm"},{label:"React",permalink:"/frontend-weekly/blog/tags/react"}],readingTime:4.86,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/12\u670819\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},s=[],k={toc:s};function m(e){var t=e.components,p=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udc1b \u751f\u4ea7\u73af\u5883\u5982\u4f55 debug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u9519\u8bef\u662f\u524d\u7aef\u8fd8\u662f\u540e\u7aef\u63a5\u53e3\u8fd4\u56de\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u4ee3\u7801\u5168\u5c40\u641c\u7d22\u5173\u952e\u5b57\uff08vscode \u6216\u8005 chorme devtools \u4e2d\u641c\u7d22\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7ffb\u9605 network \u9762\u677f\u4e2d\u7684\u8bf7\u6c42\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u2318 + F")," \u6253\u5f00 network search \u9762\u677f\u8fdb\u884c\u641c\u7d22"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u8c03\u8bd5\u6df7\u6dc6\u538b\u7f29\u540e\u7684 JS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 source \u9762\u677f\u4e2d\u7684 pretty-print \u9009\u9879"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u6837\u8fd8\u662f\u5b58\u5728\u95ee\u9898\uff0c\u4f8b\u5982\u5f88\u591a\u53d8\u91cf\u540d\u3001\u65b9\u6cd5\u540d\u90fd\u88ab\u6df7\u6dc6\u538b\u7f29\u4e86\uff0c\u7136\u540e babel \u4f1a\u5c06 ES2015+ \u8bed\u6cd5\u8fdb\u884c\u8bed\u6cd5\u8f6c\u6362\uff0c\u4ee3\u7801\u53ef\u8bfb\u6027\u964d\u4f4e"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 sourceMap \u8c03\u8bd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6df7\u6dc6\u538b\u7f29\u7684\u4ee3\u7801\uff0c\u53f3\u952e\u9009\u62e9 Add source map"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a source map URL\uff0c\u53ef\u4ee5\u5c06\u672c\u5730\u9879\u76ee\u6dfb\u52a0\u5230 source \u9762\u677f\u4e2d\u7684 Filesystem \u4e2d\uff0c\u6216\u8005\u542f\u7528\u9759\u6001\u8d44\u6e90\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u641c\u7d22\u9879\u76ee\u4e2d\u7684\u6e90\u6587\u4ef6\u4e86"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728 chrome \u4e2d\u4fee\u6539\u4ee3\u7801\u5e76\u8c03\u8bd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"chrome devtools \u63d0\u4f9b\u4e86 local overrides \u80fd\u529b\uff0c\u6307\u5b9a\u4fee\u6539\u540e\u7684\u6587\u4ef6\u7684\u672c\u5730\u4fdd\u5b58\u76ee\u5f55\uff0c\u5f53\u4fee\u6539\u5b8c\u4ee3\u7801\u4fdd\u5b58\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u5c06\u4fee\u6539\u540e\u7684\u6587\u4ef6\u4fdd\u5b58\u5230\u4f60\u6307\u5b9a\u7684\u76ee\u5f55\u76ee\u5f55\u4e0b\uff0c\u5f53\u518d\u6b21\u52a0\u8f7d\u9875\u9762\u7684\u65f6\u5019\uff0c\u5bf9\u5e94\u7684\u6587\u4ef6\u4e0d\u518d\u8bfb\u53d6\u7f51\u7edc\u4e0a\u7684\u6587\u4ef6\uff0c\u800c\u662f\u8bfb\u53d6\u5b58\u50a8\u5728\u672c\u5730\u4fee\u6539\u8fc7\u7684\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00 sources \u4e0b\u7684 overrides \u9762\u677f\uff0c\u70b9\u51fb select folder overrides \u9009\u62e9\u4fee\u6539\u540e\u7684\u6587\u4ef6\u4ef6\u5b58\u50a8\u5730\u5740\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u6253\u5f00\u6587\u4ef6\u4fee\u6539\uff0c\u4fee\u6539\u5b8c\u6210\u540e\u4fdd\u5b58\uff0c\u91cd\u65b0\u5237\u65b0\u9875\u9762\u540e\uff0c\u4fee\u6539\u540e\u7684\u4ee3\u7801\u5c31\u88ab\u6267\u884c\u5230\u4e86")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7044678301926817806"},"\u524d\u7aef\u5de5\u7a0b\u5e08\u751f\u4ea7\u73af\u5883 debugger \u6280\u5de7"))),(0,l.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u5728 React \u4e2d\u4f18\u96c5\u4f7f\u7528 ECharts"),(0,l.kt)("p",null,"\u521d\u59cb\u5316 ECharts \u7684\u65f6\u5019\u4e0d\u8981\u4f7f\u7528 id\uff0c\u5426\u5219\u65e0\u6cd5\u6e32\u67d3\u591a\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5,8,15}","{5,8,15}":!0},'import * as React from "react";\nimport * as echarts from "echarts";\n\nconst LineChart = (props) => {\n  const chartRef = React.useRef();\n\n  React.useEffect(() => {\n    const chart = echarts.init(chartRef.current);\n    const option = {\n      // ...\n    }\n    chart.setOptions(option);\n  }, [props])\n  \n  return <div ref={chartRef} className="chart"></div>\n}\n\nexport default React.memo(LineChart);\n')),(0,l.kt)("p",null,"\u5982\u4f55\u8ba9 ECharts \u5b9e\u73b0\u81ea\u9002\u5e94\uff0c\u53ef\u4ee5\u5728\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316\u7684\u65f6\u5019\uff0c\u8c03\u7528 chart \u5b9e\u4f8b\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"resize")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8-10,13,17}","{8-10,13,17}":!0},'React.useEffect(() => {\n  const chart = echarts.init(chartRef.current);\n  const option = {\n    // ...\n  }\n  chart.setOptions(option);\n\n  const handleResize = () => {\n    chart.resize();\n  }\n\n  // \u7ed1\u5b9a resize \u4e8b\u4ef6\u76d1\u542c\u5668\n  window.addEventListener("resize", handleResize);\n\n  return () => {\n    // \u7ec4\u4ef6\u66f4\u65b0\u6216\u8005\u5378\u8f7d\u65f6\u79fb\u9664\u76d1\u542c\n    window.removeEventListener("resize", handleResize);\n  }\n}, [props])\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"addEventListener")," \u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u591a\u6b21\u7ed1\u5b9a\uff0c\u4f46\u662f\u8981\u6ce8\u610f\u53ca\u65f6 remove\uff0c\u4e0d\u7136\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f")),(0,l.kt)("p",null,"\ud83d\udcd2 \u770b\u706b\u7130\u56fe\u5206\u6790\u8c03\u7528\u6808\u7684\u65f6\u5019\uff0c\u770b\u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"asyncGeneratorStep")," \u7684\u51fd\u6570\uff0c\u4e00\u76f4\u6ca1\u641e\u6e05\u695a\u8fd9\u4e2a\u5728\u54ea\u91cc\u7528\u5230\u4e86"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(5593).Z})),(0,l.kt)("p",null,"\u4e8b\u540e\u624d\u60f3\u5230\u8fd9\u662f babel \u8bed\u6cd5\u8f6c\u6362\u5f15\u5165\u7684 helper \u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(329).Z})),(0,l.kt)("p",null,"\ud83d\udcd2 \u4f7f\u7528 webpack-chain \u5bf9 vue-cli \u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u4fee\u6539"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans"},"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans"))),(0,l.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u5bf9 webpack \u6253\u5305\u4ea7\u7269\u8fdb\u884c\u5206\u6790"),(0,l.kt)("p",null,"\u7ecf\u5e38\u9700\u8981\u5206\u6790\u6253\u5305\u4ea7\u7269\u7684\u4f53\u79ef\uff0c\u770b\u54ea\u4e2a\u5305\u4f53\u79ef\u8fc7\u5927\uff0c\u505a\u9488\u5bf9\u6027\u4f18\u5316\u3002\u53ef\u4ee5\u4f7f\u7528 Webpack Bundle Analyzer\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add webpack-bundle-analyzer -D\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');\n\nmodule.exports = {\n  plugins: [\n    new BundleAnalyzerPlugin()\n  ]\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u6267\u884c\u6253\u5305\u6784\u5efa\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn build --report\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"https://github.com/webpack-contrib/webpack-bundle-analyzer"))),(0,l.kt)("p",null,"\ud83d\udcd2 create-react-app \u53d1\u5e03 5.0 \u7248\u672c"),(0,l.kt)("p",null,"\u672c\u6b21\u7684 5.0 \u7248\u672c\u4f18\u5316\u4e86\u5feb\u901f\u5237\u65b0(Fast Refresh)\uff0c\u652f\u6301\u4e86 Tailwind\uff0c\u5e76\u66f4\u65b0\u4e86\u4e0d\u5c11\u5185\u90e8\u4f9d\u8d56\u5e93\uff0c\u5982 Webpack 5\u3001Jest 27 \u548c EsLint 8 \u7b49\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/releases/tag/v5.0.0"},"https://github.com/facebook/create-react-app/releases/tag/v5.0.0"))),(0,l.kt)("p",null,"\ud83d\udcd2 \u5904\u7406\u4f60\u5e94\u7528\u4e2d\u7684\u5185\u5b58\u6cc4\u6f0f"),(0,l.kt)("p",null,"\u4f5c\u8005 Stoyan \u63d0\u5230\uff1a\u201c\u4efb\u4f55\u5927\u5c0f\u5408\u7406\u7684\u5e94\u7528\u4e2d\uff0c\u90fd\u4f1a\u5b58\u5728\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5185\u5b58\u6cc4\u6f0f\u201d\u3002\u56e0\u6b64\u77e5\u9053\u5982\u4f55\u5904\u7406\u6cc4\u6f0f\u662f\u4e00\u4ef6\u5f88\u6709\u7528\u7684\u4e8b\u3002\u5728\u672c\u6587\u4e2d\uff0c\u4f5c\u8005\u4e3e\u4e86\u4e00\u4e2a React \u4e2d\u7684\u4f8b\u5b50\uff0c\u4e0d\u8fc7\u5b83\u7684\u57fa\u672c\u7406\u5ff5\u5374\u53ef\u4ee5\u8fd0\u7528\u5728\u4efb\u4f55\u5730\u65b9\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://calendar.perfplanet.com/2021/plugging-memory-leaks-in-your-app/"},"https://calendar.perfplanet.com/2021/plugging-memory-leaks-in-your-app/"))),(0,l.kt)("p",null,"\ud83d\udcd2 kalidokit\uff1a\u4eba\u4f53\u52a8\u4f5c\u8868\u60c5\u89e3\u8bfb\u540c\u6b65"),(0,l.kt)("p",null,"\u6548\u679c\u8fd8\u662f\u548c\u725b\u903c\u7684\uff0c\u771f\u4eba\u6d4b\u8bd5\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/yeemachine/kalidokit"},"https://github.com/yeemachine/kalidokit"))),(0,l.kt)("p",null,"\ud83d\udcd2 xterm\uff1a\u628a\u547d\u4ee4\u884c\u642c\u5230\u6d4f\u89c8\u5668"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://xtermjs.org/"},"https://xtermjs.org/"))),(0,l.kt)("p",null,"\ud83d\udcd2 microdiff\uff1a\u8f7b\u91cf\u5feb\u901f\u7684\u5bf9\u6bd4\u5e93"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/AsyncBanana/microdiff"},"https://github.com/AsyncBanana/microdiff"))))}m.isMDXComponent=!0},329:function(e,t,n){t.Z=n.p+"assets/images/POPO20211223-113701-448e8c132c42660b20a27e7b042c842c.png"},5593:function(e,t,n){t.Z=n.p+"assets/images/POPO20211223-201441-122de3603033cf65e1e4f16174c4c523.png"}}]);