"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[7121],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),s=a,d=f["".concat(u,".").concat(s)]||f[s]||m[s]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={slug:"4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",title:"4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},u=void 0,p={permalink:"/frontend-weekly/blog/4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-04-10/index.md",source:"@site/blog/2022-04-10/index.md",title:"4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 2022 \u5e74\uff0cBabel vs TypeScript\uff0c\u8c01\u66f4\u9002\u5408\u4ee3\u7801\u7f16\u8bd1",date:"2022-04-10T00:00:00.000Z",formattedDate:"April 10, 2022",tags:[],readingTime:1.145,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",title:"4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"4\u67083\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/4\u67083\u65e5\u5185\u5bb9\u6c47\u603b"}},c={authorsImageUrls:[void 0]},m=[],f={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/JCIyV-_VfQ9iScd_xOuP8g"},"2022 \u5e74\uff0cBabel vs TypeScript\uff0c\u8c01\u66f4\u9002\u5408\u4ee3\u7801\u7f16\u8bd1")),(0,l.kt)("p",null,"\ud83d\udcd2 React \u5e38\u7528\u72b6\u6001\u7ba1\u7406\u5e93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Redux"),(0,l.kt)("li",{parentName:"ul"},"Mobx"),(0,l.kt)("li",{parentName:"ul"},"Recoil"),(0,l.kt)("li",{parentName:"ul"},"Hookstate"),(0,l.kt)("li",{parentName:"ul"},"Rematch"),(0,l.kt)("li",{parentName:"ul"},"Jotai"),(0,l.kt)("li",{parentName:"ul"},"Zustand")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7083230365027926053"},"\u4ece\u6e90\u7801\u7406\u6e05 useEffect \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u600e\u4e48\u5904\u7406\u7684")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7081539471585312805"},"\u817e\u8baf\u4e00\u9762\uff1aCORS\u4e3a\u4ec0\u4e48\u80fd\u4fdd\u969c\u5b89\u5168\uff1f\u4e3a\u4ec0\u4e48\u53ea\u5bf9\u590d\u6742\u8bf7\u6c42\u505a\u9884\u68c0\uff1f")),(0,l.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u5728 Node \u73af\u5883\u4f7f\u7528 ESM \u6a21\u5757\u89c4\u8303"),(0,l.kt)("p",null,"\u9996\u5148\u660e\u786e\u4e00\u70b9\uff0cNode \u73af\u5883\u5e76\u975e\u4e0d\u652f\u6301 ESM \u89c4\u8303\uff0c\u53ea\u662f\u6ca1\u6709\u542f\u7528\u800c\u5df2\uff0c\u9ed8\u8ba4\u4f7f\u7528 CJS \u89c4\u8303\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u542f\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u4f7f\u7528 ESM \u89c4\u8303\uff0c\u53ef\u4ee5\u5c06\u8be5\u6587\u4ef6\u540e\u7f00\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},".mjs"),"\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6574\u4e2a\u5de5\u7a0b\u4f7f\u7528 ESM \u89c4\u8303\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},'"type": "module"'),"\uff1b")),(0,l.kt)("p",null,"\u5047\u5982\u4e0d\u60f3\u901a\u8fc7\u4e0a\u8ff0\u65b9\u5f0f\u542f\u7528\uff0c\u8fd8\u6709\u4e00\u4e9b\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Webpack \u7b49\u6253\u5305\u5de5\u5177\u652f\u6301 ESM \u6a21\u5757\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"ts-node")," \u652f\u6301 ESM \u6a21\u5757\uff08\u5185\u90e8\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"tsc")," \u8fdb\u884c\u7f16\u8bd1\uff09\uff1b")))}s.isMDXComponent=!0}}]);