"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[3799],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=k(n),c=p,d=s["".concat(o,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function c(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var k=2;k<r;k++)l[k]=n[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return m}});var a=n(3117),p=n(102),r=(n(7294),n(3905)),l=["components"],i={slug:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,k={permalink:"/frontend-weekly/blog/5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-05-01/index.md",source:"@site/blog/2022-05-01/index.md",title:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 ESBuild & SWC\u6d45\u8c08: \u65b0\u4e00\u4ee3\u6784\u5efa\u5de5\u5177",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[],readingTime:9.695,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"4\u670824\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/4\u670824\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},m=[],s={toc:m};function c(e){var t=e.components,n=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/9VaUq9FOm2_nKNCGaH-7rw"},"ESBuild & SWC\u6d45\u8c08: \u65b0\u4e00\u4ee3\u6784\u5efa\u5de5\u5177")),(0,r.kt)("p",null,"\ud83d\udcd2 InnoDB\u539f\u7406\u7bc7\uff1a\u5982\u4f55\u7528\u597d\u7d22\u5f15"),(0,r.kt)("p",null,"\u6211\u4eec\u90fd\u77e5\u9053 InnoDB \u7d22\u5f15\u7ed3\u6784\u662f B+ \u6811\u7ec4\u7ec7\u7684\uff0c\u4f46\u662f\u6839\u636e ",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5b58\u50a8\u5f62\u5f0f\u4e0d\u540c")," \u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff0c\u5206\u522b\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u805a\u7c07\u7d22\u5f15")," \u4e0e ",(0,r.kt)("strong",{parentName:"p"},"\u4e8c\u7ea7\u7d22\u5f15"),"\u3002"),(0,r.kt)("p",null,"\u5176\u5b9e\u805a\u7c07\u7d22\u5f15\u7684\u672c\u8d28\u5c31\u662f\u4e3b\u952e\u7d22\u5f15\u3002\u56e0\u4e3a\u6bcf\u5f20\u8868\u53ea\u80fd\u62e5\u6709\u4e00\u4e2a\u4e3b\u952e\u5b57\u6bb5\uff0c\u6240\u4ee5\u6bcf\u5f20\u8868\u53ea\u6709\u4e00\u4e2a\u805a\u7c07\u7d22\u5f15\u3002\u53e6\u5916\u805a\u7c07\u7d22\u5f15\u8fd8\u6709\u4e00\u4e2a\u7279\u70b9\uff0c\u8868\u7684\u6570\u636e\u548c\u4e3b\u952e\u662f\u4e00\u8d77\u5b58\u50a8\u7684\uff0c\u5b83\u7684\u53f6\u5b50\u8282\u70b9\u5b58\u653e\u7684\u662f\u6574\u5f20\u8868\u7684\u884c\u6570\u636e\uff08\u6811\u7684\u6700\u540e\u4e00\u5c42\uff09\uff0c\u53f6\u5b50\u8282\u70b9\u53c8\u79f0\u4e3a\u6570\u636e\u9875\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f88\u7b80\u5355\u8bb0\u4f4f\u4e00\u53e5\u8bdd\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u627e\u5230\u4e86\u7d22\u5f15\u5c31\u627e\u5230\u4e86\u884c\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7d22\u5f15\u5c31\u662f\u805a\u7c07\u7d22\u5f15"))),(0,r.kt)("p",null,"\u77e5\u9053\u4e86\u805a\u7c07\u7d22\u5f15\uff0c\u518d\u6765\u770b\u770b\u4e8c\u7ea7\u7d22\u5f15\u662f\u4ec0\u4e48\uff0c\u7b80\u5355\u6982\u62ec\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9664\u4e3b\u952e\u7d22\u5f15\u4ee5\u5916\u7684\u7d22\u5f15\uff0c\u90fd\u662f\u4e8c\u7ea7\u7d22\u5f15"),"\uff0c\u50cf\u6211\u4eec\u5e73\u65f6\u5efa\u7acb\u7684\u8054\u5408\u7d22\u5f15\u3001\u524d\u7f00\u7d22\u5f15\u3001\u552f\u4e00\u7d22\u5f15\u7b49\u3002"),(0,r.kt)("p",null,"\u4e8c\u7ea7\u7d22\u5f15\u7684\u53f6\u5b50\u8282\u70b9\u5b58\u50a8\u7684\u662f\u7d22\u5f15\u503c + \u4e3b\u952e ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u3002\u6240\u4ee5\u4e8c\u7ea7\u7d22\u5f15\u4e0e\u805a\u7c07\u7d22\u5f15\u7684\u533a\u522b\u5728\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u53f6\u5b50\u8282\u70b9\u662f\u5426\u5b58\u653e\u6574\u884c\u8bb0\u5f55"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u4ec5\u4ec5\u9760\u4e8c\u7ea7\u7d22\u5f15\u65e0\u6cd5\u62ff\u5230\u5b8c\u6574\u884c\u6570\u636e\uff0c\u53ea\u80fd\u62ff\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u4fe1\u606f")),(0,r.kt)("p",null,"\u5047\u8bbe\uff0c\u6211\u4eec\u6709\u4e00\u4e2a\u4e3b\u952e\u5217\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u7684\u8868\uff0c\u8868\u4e2d\u6709\u5b57\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e0a\u6709\u7d22\u5f15\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u6267\u884c\u4e00\u6761\u4e3b\u952e\u67e5\u8be2\u8bed\u53e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"select * from T where id = 100"),"\uff0c\u53ea\u9700\u8981\u641c\u7d22 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u805a\u7c07\u7d22\u5f15\u6811\u5c31\u80fd\u67e5\u8be2\u6574\u884c\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u63a5\u7740\u518d\u6267\u884c\u4e00\u6761 ",(0,r.kt)("inlineCode",{parentName:"p"},"select * from T where k = 1"),"\uff0c\u6b64\u65f6\u8981\u641c\u7d22 ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u7684\u4e8c\u7ea7\u7d22\u5f15\u6811\uff0c\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," \u7d22\u5f15\u6811\u4e0a\u627e ",(0,r.kt)("inlineCode",{parentName:"li"},"k = 1")," \u7684\u8bb0\u5f55\uff0c\u53d6\u5f97 ",(0,r.kt)("inlineCode",{parentName:"li"},"id = 100")),(0,r.kt)("li",{parentName:"ul"},"\u518d\u5230\u805a\u7c07\u7d22\u5f15\u6811\u67e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"id = 100")," \u5bf9\u5e94\u7684\u884c\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," \u7d22\u5f15\u6811\u53d6\u4e0b\u4e00\u4e2a\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"k = 2"),"\uff0c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5faa\u73af\u7ed3\u675f")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u8fc7\u7a0b\u4e2d\uff0c\u56de\u5230\u805a\u7c07\u7d22\u5f15\u6811\u641c\u7d22\u7684\u8fc7\u7a0b\uff0c\u6211\u4eec\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u56de\u8868"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e5f\u5c31\u662f\u8bf4\uff0c\u57fa\u4e8e\u4e8c\u7ea7\u7d22\u5f15\u7684\u67e5\u8be2\u9700\u8981\u591a\u626b\u63cf\u4e00\u68f5\u805a\u7c07\u7d22\u5f15\u6811\uff0c\u56e0\u6b64\u5728\u5f00\u53d1\u4e2d\u5c3d\u91cf\u4f7f\u7528\u4e3b\u952e\u67e5\u8be2")),(0,r.kt)("p",null,"\u53ef\u662f\u6709\u65f6\u5019\u6211\u4eec\u786e\u5b9e\u9700\u8981\u4f7f\u7528\u4e8c\u7ea7\u7d22\u5f15\u67e5\u8be2\uff0c\u6709\u6ca1\u6709\u529e\u6cd5\u907f\u514d\u56de\u8868\u5462\uff1f"),(0,r.kt)("p",null,"\u529e\u6cd5\u662f\u6709\u7684\uff0c\u4f46\u9700\u8981\u7ed3\u5408\u4e1a\u52a1\u573a\u666f\u6765\u4f7f\u7528\uff0c\u6bd4\u5982\u672c\u6b21\u67e5\u8be2\u53ea\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u503c\uff0c\u67e5\u8be2\u8bed\u53e5\u53ef\u4ee5\u8fd9\u6837\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"select id from T where k = 1"),"\uff0c\u8fc7\u7a0b\u5982\u4e0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," \u7d22\u5f15\u6811\u4e0a\u627e ",(0,r.kt)("inlineCode",{parentName:"li"},"k = 1")," \u7684\u8bb0\u5f55\uff0c\u53d6\u5f97 ",(0,r.kt)("inlineCode",{parentName:"li"},"id = 100")),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u503c"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"k")," \u7d22\u5f15\u6811\u53d6\u4e0b\u4e00\u4e2a\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"k = 2"),"\uff0c\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u5faa\u73af\u7ed3\u675f")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u67e5\u8be2\u4e2d\uff0c\u7d22\u5f15 ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u5df2\u7ecf\u8986\u76d6\u4e86\u6211\u4eec\u7684\u67e5\u8be2\u9700\u6c42\uff0c\u4e0d\u9700\u8981\u56de\u8868\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u8986\u76d6\u7d22\u5f15"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u8986\u76d6\u7d22\u5f15\u53ef\u4ee5\u51cf\u5c11\u6811\u7684\u641c\u7d22\u6b21\u6570\uff0c\u663e\u8457\u63d0\u5347\u67e5\u8be2\u6027\u80fd\uff0c\u6240\u4ee5\u4f7f\u7528\u8986\u76d6\u7d22\u5f15\u662f\u4e00\u4e2a\u5e38\u7528\u7684\u6027\u80fd\u4f18\u5316\u624b\u6bb5")),(0,r.kt)("p",null,"\u5047\u8bbe\u73b0\u5728\u6709\u4e00\u4e2a\u9ad8\u9891\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u67e5\u8be2\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u7d22\u5f15\u53d8\u66f4\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u7684\u8054\u5408\u7d22\u5f15\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/yaza2iQ93BCvOW-uduS-yw"},"InnoDB\u539f\u7406\u7bc7\uff1a\u5982\u4f55\u7528\u597d\u7d22\u5f15")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzAwMDg2OTAxNg==&mid=2652055534&idx=1&sn=6bce05f55b7a290a16e71d3885bfbaf0&scene=21#wechat_redirect"},"InnoDB\u539f\u7406\u7bc7\uff1a\u804a\u804a\u6570\u636e\u9875\u53d8\u6210\u7d22\u5f15\u8fd9\u4ef6\u4e8b")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4e00\u5206\u949f\u770b\u61c2TCP\u7c98\u5305\u62c6\u5305"),(0,r.kt)("p",null,"TCP \u662f\u4e00\u4e2a\u9762\u5411\u300c\u6d41\u300d\u7684\u534f\u8bae\uff0c\u6240\u8c13\u6d41\u5c31\u662f\u6ca1\u6709\u754c\u9650\u7684\u4e00\u957f\u4e32\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u5728\u5b9e\u9645\u7684\u4f20\u8f93\u8fc7\u7a0b\u4e2d\uff0cTCP \u4f1a\u6839\u636e\u7f51\u7edc\u60c5\u51b5\u5c06\u6570\u636e\u5305\u8fdb\u884c\u62c6\u5206\u6216\u8005\u62fc\u88c5\uff0c\u5982\u679c\u4e1a\u52a1\u6ca1\u6709\u5b9a\u4e49\u4e00\u4e2a\u660e\u786e\u7684\u754c\u9650\u89c4\u5219\uff0c\u5728\u5e94\u7528\u5c42\u7684\u4e1a\u52a1\u4e0a\u5c31\u4f1a\u51fa\u73b0\u7c98\u5305\u62c6\u5305\u7684\u73b0\u8c61\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9 TCP \u7c98\u5305\u62c6\u5305\u7684\u73b0\u8c61\uff0c\u5e38\u89c1\u7684\u89e3\u51b3\u601d\u8def\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u7aef\u7ed9\u6bcf\u4e2a\u6570\u636e\u5305 ",(0,r.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5305\u9996\u90e8"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u7aef\u5c06\u6bcf\u4e2a\u6570\u636e\u5305 ",(0,r.kt)("strong",{parentName:"li"},"\u5c01\u88c5\u4e3a\u56fa\u5b9a\u957f\u5ea6"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5728\u6570\u636e\u5305\u4e4b\u95f4 ",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e\u8fb9\u754c"),"\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u7c98\u5305\u62c6\u5305\uff0cNetty \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u5f88\u591a\u5f00\u7bb1\u5373\u7528\u7684\u7f16\u89e3\u7801\u5668\uff0c\u6781\u5927\u7b80\u5316\u7f51\u7edc\u7f16\u7a0b\u89e3\u51b3\u6b64\u7c7b\u95ee\u9898\u7684\u96be\u5ea6\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/5lfw37ElEwG8aTeJvPbdeg"},"\u4e00\u5206\u949f\u770b\u61c2TCP\u7c98\u5305\u62c6\u5305")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7091486488201805861"},"\u4ec0\u4e48\u662f\u6709\u533a\u5206\u5ea6\u7684\u597d\u7684\u9762\u8bd5\u95ee\u9898\uff0c\u6765\u770b\u770b\u5b57\u8282\u8df3\u52a8\u8fd9\u9053\u5b9e\u73b0\u5f02\u6b65 sum \u7684\u95ee\u9898")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7091492741678366734"},"\u3010\u524d\u7aef\u90e8\u7f72\u7b2c\u4e09\u7bc7\u3011\u901a\u8fc7 docker \u5b66\u4e60 nginx \u914d\u7f6e\uff0c\u53ca\u57fa\u4e8e nginx \u90e8\u7f72\u6700\u7b80\u524d\u7aef\u9879\u76ee")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4f7f\u7528 CRA \u642d\u5efa React + TS \u9879\u76ee"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7087811040591675428"},"\u90fd 2022 \u5e74\u4e86\uff0c\u624b\u52a8\u642d\u5efa React \u5f00\u53d1\u73af\u5883\u5f88\u96be\u5417")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7039583726375796749"},"\u4f1a\u5199 TypeScript \u4f46\u4f60\u771f\u7684\u4f1a TS \u7f16\u8bd1\u914d\u7f6e\u5417")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7071066976830881823"},"\u7528 Redux \u505a\u72b6\u6001\u7ba1\u7406\uff0c\u771f\u7684\u5f88\u7b80\u5355\ud83e\udd86")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7069555976717729805"},"\u300cReact\u8fdb\u9636\u300dreact-router v6 \u901a\u5173\u6307\u5357")),(0,r.kt)("p",null,"\ud83d\udcd2 Usage With TypeScript - Redux Toolkit"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/usage-with-typescript"},"https://redux-toolkit.js.org/usage/usage-with-typescript")),(0,r.kt)("p",null,"\ud83d\udcd2 \u5168\u5c40\u72b6\u6001\u548c\u72b6\u6001\u7ba1\u7406\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u5168\u5c40\u72b6\u6001\u53ef\u4ee5\u5f88\u7b80\u5355\uff0c\u4f8b\u5982\u53ea\u8981\u4e00\u4e2a JS \u5bf9\u8c61 ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," \u5c31\u53ef\u4ee5\u5b9e\u73b0\uff0c\u4f46\u662f\u5982\u679c\u5c1d\u8bd5\u4fee\u6539\u5168\u5c40\u72b6\u6001\u7684\u503c\uff0c\u65e0\u6cd5\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u72b6\u6001\u7ba1\u7406\uff0c\u9664\u4e86\u5177\u6709\u5168\u5c40\u72b6\u6001\u7684\u529f\u80fd\uff0c\u8fd8\u63d0\u4f9b\u4e86\u4e00\u5957\u53d1\u5e03\u8ba2\u9605\u673a\u5236\uff0c\u5373\u72b6\u6001\u6539\u53d8\u7684\u65f6\u5019\u901a\u77e5\u5bf9\u5e94\u7ec4\u4ef6\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"Redux \u672c\u8eab\u5176\u5b9e\u5c31\u662f\u5168\u5c40\u72b6\u6001\uff0c\u4e3a\u4e86\u5b9e\u73b0\u72b6\u6001\u6539\u53d8\u901a\u77e5\u7ec4\u4ef6\u66f4\u65b0\uff0c\u8fd8\u9700\u8981\u4e00\u4e2a UI-binding\uff0c\u5373 React-redux\u3002"),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/m_znGU_NaxveZi0Q5LSvyA"},"\u6d45\u8c08V8\u5783\u573e\u56de\u6536\u673a\u5236")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/5HqfRGqPyAhFt0krPgMHOQ"},"\u6253\u9020 Go \u8bed\u8a00\u6700\u5feb\u7684\u6392\u5e8f\u7b97\u6cd5")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7091177467498463239"},"\u5b9e\u73b0\u4e00\u4e2a Codepen\uff1a\uff08\u4e8c\uff09\u5728 Next.js \u4e2d\u4f7f\u7528 Monaco Editor")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7091079487592333349"},"\u3010\u67b6\u6784\u5e08\uff08\u7b2c\u5341\u516b\u7bc7\uff09\u3011\u811a\u624b\u67b6\u4e4b\u9879\u76ee\u6a21\u677f\u7684\u5b89\u88c5")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7091103648100384804"},"\u3010\u524d\u7aef\u90e8\u7f72\u7b2c\u4e8c\u7bc7\u3011\u57fa\u4e8e docker/compose \u90e8\u7f72\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u524d\u7aef\u9879\u76ee")),(0,r.kt)("p",null,"\ud83d\udcd2 7 \u6bb5\u5c0f\u4ee3\u7801\uff0c\u73a9\u8f6cJava\u7a0b\u5e8f\u5e38\u89c1\u7684\u5d29\u6e83\u573a\u666f"),(0,r.kt)("p",null,"\u5982\u4f55\u6392\u67e5 CPU \u98d9\u5347\u95ee\u9898\uff0c\u83b7\u53d6\u95ee\u9898\u4ee3\u7801\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 top \u547d\u4ee4\uff0c\u67e5\u627e\u5230\u4f7f\u7528 CPU \u6700\u591a\u7684\u67d0\u4e2a\u8fdb\u7a0b\uff0c\u8bb0\u5f55\u5b83\u7684 pid\u3002\u4f7f\u7528 Shift + P \u5feb\u6377\u952e\u53ef\u4ee5\u6309 CPU \u7684\u4f7f\u7528\u7387\u8fdb\u884c\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ol"},"\u518d\u6b21\u4f7f\u7528 top \u547d\u4ee4\uff0c\u52a0 -H \u53c2\u6570\uff0c\u67e5\u770b\u67d0\u4e2a\u8fdb\u7a0b\u4e2d\u4f7f\u7528 CPU \u6700\u591a\u7684\u67d0\u4e2a\u7ebf\u7a0b\uff0c\u8bb0\u5f55\u7ebf\u7a0b\u7684 ID"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 printf \u51fd\u6570\uff0c\u5c06\u5341\u8fdb\u5236\u7684 tid \u8f6c\u5316\u6210\u5341\u516d\u8fdb\u5236"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 jstack \u547d\u4ee4\uff0c\u67e5\u770b Java \u8fdb\u7a0b\u7684\u7ebf\u7a0b\u6808"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 less \u547d\u4ee4\u67e5\u770b\u751f\u6210\u7684\u6587\u4ef6\uff0c\u5e76\u67e5\u627e\u521a\u624d\u8f6c\u5316\u7684\u5341\u516d\u8fdb\u5236 tid\uff0c\u627e\u5230\u53d1\u751f\u95ee\u9898\u7684\u7ebf\u7a0b\u4e0a\u4e0b\u6587")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/YcyC1Jm4H7uGvSg3rCkDig"},"7 \u6bb5\u5c0f\u4ee3\u7801\uff0c\u73a9\u8f6cJava\u7a0b\u5e8f\u5e38\u89c1\u7684\u5d29\u6e83\u573a\u666f")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ZralWEfG2WJfZ-G-x9biow"},"\u770b\u5b8c\u8fd9\u7bc7\u4f60\u4e00\u5b9a\u80fd\u638c\u63e1Linux")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/SHbt1jmgGaHQs1eeyJQ-qA"},"ObjectMapper\uff0c\u522b\u518d\u50cf\u4e2a\u4e8c\u8d27\u4e00\u6837\u4e00\u76f4new\u4e86")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/bYtTRjqQylYKO9D1jbadSA"},"[","\u79d1\u666e","]"," Service Worker \u5165\u95e8\u6307\u5357")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7065693195799265287"},"\u767e\u884c\u4ee3\u7801\u5e26\u4f60\u5b9e\u73b0\u901a\u8fc7872\u6761Promise/A+\u7528\u4f8b\u7684Promise")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/kpi82Rb66bUQuA_G0hrqBw"},"\u524d\u7aef\u5386\u53f2\u9879\u76ee\u7684 Vite \u8fc1\u79fb\u5b9e\u8df5\u603b\u7ed3")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7090686619253997599"},"\u624b\u5199 css-modules \u6765\u6df1\u5165\u7406\u89e3\u5b83\u7684\u539f\u7406")),(0,r.kt)("p",null,"\ud83d\udcd2 \u5728 Webpack 5 \u4e2d\u5f00\u542f\u61d2\u7f16\u8bd1\uff08Lazy Compilation\uff09"),(0,r.kt)("p",null,"Webpack 5 \u7684\u5b9e\u9a8c\u7279\u6027\uff0c\u53ef\u4ee5\u9488\u5bf9\u591a\u5165\u53e3\uff08Initial Chunk\uff09\u548c\u52a8\u6001\u52a0\u8f7d\uff08Async Chunk\uff09\u8fdb\u884c\u61d2\u7f16\u8bd1\u3002\u5f00\u542f\u61d2\u7f16\u8bd1\u4e4b\u540e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6309\u9700\u7f16\u8bd1\uff0c\u63d0\u5347\u542f\u52a8\u901f\u5ea6\uff0c\u82e5\u518d\u914d\u5408 Webpack 5 \u6301\u4e45\u5316\u7f13\u5b58\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u79d2\u6740 Vite\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // \u2026\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u5b9e\u9a8c\u7279\u6027\u5177\u6709\u76f8\u5bf9\u5bbd\u677e\u7684\u8bed\u4e49\u7248\u672c\uff0c\u53ef\u80fd\u4f1a\u6709\u91cd\u5927\u7684\u53d8\u66f4\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u9501\u5b9a Webpack \u7684\u5c0f\u7248\u672c\u53f7\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},'"webpack": "~5.4.3"'),"\uff0c\u6216\u8005\u9501\u5b9a\u7248\u672c\u53f7")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7090372816784064526"},"\u5728 Webpack 5 \u4e2d\u5f00\u542f\u61d2\u7f16\u8bd1\uff08Lazy Compilation\uff09")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Ba-3fMQXNXqIzVTjVUrWtQ"},"\u6d45\u8c08\u6587\u6863\u7684\u5b9e\u65f6\u534f\u540c\u7f16\u8f91")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/_gDIO6YCswAS2dICllMG0A"},"\u6df1\u5165\u7406\u89e3 Promise \u4e4b\u624b\u628a\u624b\u6559\u4f60\u5199\u4e00\u7248")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ckskF06PD43KHpKAGaYmRA"},"2022 \u5e74 JavaScript \u5f00\u53d1\u5de5\u5177\u7684\u751f\u6001")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-WHafu5z-Ap4tjrbWesnmA"},"\u81ea\u52a8\u5316\u751f\u6210\u9aa8\u67b6\u5c4f\u7684\u6280\u672f\u65b9\u6848\u8bbe\u8ba1\u4e0e\u843d\u5730")))}c.isMDXComponent=!0}}]);