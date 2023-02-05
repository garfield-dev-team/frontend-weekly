"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[1957],{90841:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(59496),n=a(45924),r=a(5012),i=a(84389),o=a(68785),s=a(82685);const c={sidebar:"sidebar_sHKB",sidebarItemTitle:"sidebarItemTitle_lenv",sidebarItemList:"sidebarItemList_zeQ0",sidebarItem:"sidebarItem_htMz",sidebarItemLink:"sidebarItemLink_mC08",sidebarItemLinkActive:"sidebarItemLinkActive_t322"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(86189);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return l.createElement(r.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},9793:(e,t,a)=>{a.d(t,{Z:()=>D});var l=a(59496),n=a(45924),r=a(53487),i=a(55095);function o(e){let{children:t,className:a}=e;const{frontMatter:n,assets:o}=(0,r.C)(),{withBaseUrl:s}=(0,i.C)(),c=o.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),t)}var s=a(68785);const c={title:"title_mLTw"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:o,title:m}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(c.title,t),itemProp:"headline"},i?m:l.createElement(s.Z,{itemProp:"url",to:o},m))}var u=a(82685),d=a(28443);const g={container:"container_S5kt"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:o,readingTime:s}=a;return l.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",t)},l.createElement(p,{date:i,formattedDate:o}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(f,null),l.createElement(h,{readingTime:s})))}function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:o,imageURL:s,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},s&&l.createElement(b,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const _={authorCol:"authorCol_kQda",imageOnlyAuthorRow:"imageOnlyAuthorRow_iRhI",imageOnlyAuthorCol:"imageOnlyAuthorCol_LFEs"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?_.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!o&&"col col--6",o?_.imageOnlyAuthorCol:_.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function P(){return l.createElement("header",null,l.createElement(m,null),l.createElement(E,null),l.createElement(N,null))}var k=a(19869),Z=a(47585);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return l.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(Z.Z,null,t))}var T=a(89693),y=a(64778);const I={iconEdit:"iconEdit_rssB"};function w(e){let{className:t,...a}=e;return l.createElement("svg",(0,y.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(I.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:T.k.common.editThisPage},l.createElement(w,null),l.createElement(u.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var F=a(53610);const M={tags:"tags__Zuh",tag:"tag_G1J1"};function B(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(M.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:M.tag},l.createElement(F.Z,{label:t,permalink:a}))}))))}function R(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function A(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.Z,(0,y.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(R,null))}const x={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Mtl9"};function O(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||o?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&x.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},l.createElement(B,{tags:a})),t&&o&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(L,{editUrl:o})),c&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},l.createElement(A,{blogPostTitle:i,to:e.permalink}))):null}function D(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o,{className:(0,n.Z)(i,a)},l.createElement(P,null),l.createElement(C,null,t),l.createElement(O,null))}},45855:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(59496),n=a(45924),r=a(68785);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&l.createElement("div",{className:"pagination-nav__sublabel"},i),l.createElement("div",{className:"pagination-nav__label"},a))}},53610:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(59496),n=a(45924),r=a(68785);const i={tag:"tag_lVyf",tagRegular:"tagRegular_MP1R",tagWithCount:"tagWithCount_lUm3"};function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(i.tag,o?i.tagWithCount:i.tagRegular)},a,o&&l.createElement("span",null,o))}},53487:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var l=a(59496),n=a(71497);const r=l.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:i},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},28443:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(59496),n=a(74624);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}},71975:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:l}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[n]=e.split(/[#?]/),r="/"===n||n===l?n:(i=n,a?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(n,r)}},19869:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var n=a(71975);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return l(n).default}})}}]);