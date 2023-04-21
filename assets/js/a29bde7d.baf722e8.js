"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[2487],{49613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(64778),a=(r(59496),r(49613));const l={slug:"welcome",title:"\u7f6e\u9876\u5185\u5bb9",authors:["garfield"],tags:["TypeScript","\u524d\u7aef\u6846\u67b6","Webpack","\u6e90\u7801\u7cfb\u5217","\u4e1a\u52a1\u6210\u957f","\u6027\u80fd\u4f18\u5316","\u7ec4\u4ef6\u5e93\u5b9e\u6218","\u7f51\u7edc\u76f8\u5173","\u673a\u5668\u5b66\u4e60","Java","Golang"]},o=void 0,i={permalink:"/frontend-weekly/2023/welcome",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2023/2023-12-12-welcome/index.md",source:"@site/blogs/2023/2023-12-12-welcome/index.md",title:"\u7f6e\u9876\u5185\u5bb9",description:"\u2b50\ufe0f \u6bcf\u5468\u66f4\u65b0\u4f18\u8d28\u6280\u672f\u6587\u7ae0\uff0c\u6b22\u8fce\u70b9\u8d5e\u5173\u6ce8\uff01",date:"2023-12-12T00:00:00.000Z",formattedDate:"December 12, 2023",tags:[{label:"TypeScript",permalink:"/frontend-weekly/2023/tags/type-script"},{label:"\u524d\u7aef\u6846\u67b6",permalink:"/frontend-weekly/2023/tags/\u524d\u7aef\u6846\u67b6"},{label:"Webpack",permalink:"/frontend-weekly/2023/tags/webpack"},{label:"\u6e90\u7801\u7cfb\u5217",permalink:"/frontend-weekly/2023/tags/\u6e90\u7801\u7cfb\u5217"},{label:"\u4e1a\u52a1\u6210\u957f",permalink:"/frontend-weekly/2023/tags/\u4e1a\u52a1\u6210\u957f"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/frontend-weekly/2023/tags/\u6027\u80fd\u4f18\u5316"},{label:"\u7ec4\u4ef6\u5e93\u5b9e\u6218",permalink:"/frontend-weekly/2023/tags/\u7ec4\u4ef6\u5e93\u5b9e\u6218"},{label:"\u7f51\u7edc\u76f8\u5173",permalink:"/frontend-weekly/2023/tags/\u7f51\u7edc\u76f8\u5173"},{label:"\u673a\u5668\u5b66\u4e60",permalink:"/frontend-weekly/2023/tags/\u673a\u5668\u5b66\u4e60"},{label:"Java",permalink:"/frontend-weekly/2023/tags/java"},{label:"Golang",permalink:"/frontend-weekly/2023/tags/golang"}],readingTime:118.555,hasTruncateMarker:!0,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"welcome",title:"\u7f6e\u9876\u5185\u5bb9",authors:["garfield"],tags:["TypeScript","\u524d\u7aef\u6846\u67b6","Webpack","\u6e90\u7801\u7cfb\u5217","\u4e1a\u52a1\u6210\u957f","\u6027\u80fd\u4f18\u5316","\u7ec4\u4ef6\u5e93\u5b9e\u6218","\u7f51\u7edc\u76f8\u5173","\u673a\u5668\u5b66\u4e60","Java","Golang"]},nextItem:{title:"4\u670823\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2023/4\u670823\u65e5\u5185\u5bb9\u6c47\u603b"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u2b50\ufe0f \u6bcf\u5468\u66f4\u65b0\u4f18\u8d28\u6280\u672f\u6587\u7ae0\uff0c\u6b22\u8fce\u70b9\u8d5e\u5173\u6ce8\uff01"))}u.isMDXComponent=!0}}]);