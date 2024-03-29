---
slug: 10月23日内容汇总
title: 10月23日内容汇总
authors: [garfield]
tags: []
---

📒 [React 服务端渲染在跨端领域中的新视界](https://juejin.cn/post/7156607920262610981)

📒 [学会这 20 个库，让你快速看懂 vue3 和 vite3 源码 🚀](https://juejin.cn/post/7124112069355372581)

📒 [面试官：你会看 Vite 源码吗](https://juejin.cn/post/7094984070999834655)

📒 [用 Go 程序打包和压缩文件，我们可以这么做](https://mp.weixin.qq.com/s/wz2cyouDMCwbc38S-qOsAg)

📒 [Go语言中常见100问题-#17 Creating confusion with octal literals](https://mp.weixin.qq.com/s/Jc30Ro4D9vD9kVwPG_VPIA)

📒 如何挑选最适合的 Node.js Docker 镜像

当你在编写 DockerFile 时会忽略 `FROM node` 的含义，作者分享了一些对于版本选择上的考虑。

https://snyk.io/blog/choosing-the-best-node-js-docker-image/

📒 Lerna Reborn：第六个版本更新了什么

使用 Nrwl 管理，面向 Lerna monorepo 的 JavaScript 构建系统并没有过时或弃用，它正在向前迈进一大步。v6 在默认情况下通过高效的任务调度和缓存、VS Code 扩展、Prettier 支持等获得了很大的速度。

https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c?gi=ba929beec06d

📒 Node v18.11.0 发布

Node 的最新版本虽然并没有更新很多功能，但却实验性的支持了 `--watch` 功能。当导入的文件发生变化时，会自动重新启动运行中的进程（这个功能让人想起了 `nodemon`） – 这个功能最近被 `详细讨论过`。

https://nodejs.org/en/blog/release/v18.11.0/

📒 [【综合笔试题】难度 4.5/5，扫描线的特殊运用（详尽答疑）](https://mp.weixin.qq.com/s/KA9Zvnkye6bIgzbP_MT6Iw)

📒 [复活了！ Lerna V6 带来了哪些新东西](https://mp.weixin.qq.com/s/6peafvVjmcF65PFSggSLYQ)

⭐️ [【第2757期】软件架构的23个基本原则](https://mp.weixin.qq.com/s/3MwRLM0jDmwv5l6gamFjcw)

⭐️ [【第2677期】如何在React中应用SOLID原则](https://mp.weixin.qq.com/s/iB23DV4hovPDdf5_4TCaOA)

📒 [前端架构带你 封装axios，一次封装终身受益「美团后端连连点赞」](https://juejin.cn/post/7124573626161954823)

📒 如何编写 CommonJS 模块，以便它们的导出可以从 ES 模块实现按照名称导入

如果你曾经在使用 CommonJS 和 ES 模块之间纠结过，那么这篇文章或许值得一读。Axel 博士在这里解决了一个关键的交叉兼容性问题。

https://2ality.com/2022/10/commonjs-named-exports.html

📒 njt：快速导航至 npm 包资源

如果你想要快速访问 npm 包的首页、仓库、issues，甚至包成本估算，那么 njt 将会是一个不错的选择。njt 提供了一个快速跳转到与 npm 包相关的各种资源目的地的方法。你可以在终端中安装并使用，也可以通过 LaunchX 扩展程序 将 njt 添加至 VS Code 的命令面板然后使用，或者在 Google 与 Firefox 浏览器进行配置然后搜索，亦或 直接在网页上使用它。如果你对此有兴趣，可以来看看 GitHub 仓库。

https://www.npmjs.com/package/njt

📒 [换一种方式对工程中的Api进行封装吧（fashion-axios）](https://juejin.cn/post/7142653628904701988)

📒 [Element Plus 组件库相关技术揭秘：3.ESLint 核心原理剖析](https://juejin.cn/post/7153659360177029150)

📒 [Element Plus 组件库相关技术揭秘：2. 组件库工程化实战之 Monorepo 架构搭建](https://juejin.cn/post/7146183222425518093)


📒 开源推荐

**lazygit**

git 命令的 terminal UI 工具，基于 Go 实现。

https://github.com/jesseduffield/lazygit

**knip**

又一个废代码检测工具，支持检测未使用的文件、依赖和 exports。

```bash
$ knip --reporter codeowners
--- UNUSED FILES (2)
@org/team src/chat/helpers.ts
@org/owner src/components/SideBar.tsx
--- UNUSED DEPENDENCIES (1)
@org/admin moment
--- UNLISTED DEPENDENCIES (1)
@org/owner src/components/Registration.tsx react
--- UNUSED EXPORTS (4)
@org/team src/common/src/string/index.ts: lowercaseFirstLetter
@org/owner src/components/Registration.tsx: RegistrationBox
@org/owner src/css.ts: clamp
@org/owner src/services/authentication.ts: restoreSession, PREFIX
--- UNUSED TYPES (3)
@org/owner src/components/Registration/registrationMachine.ts: RegistrationServices, RegistrationAction
@org/owner src/components/Registration.tsx: ComponentProps
@org/owner src/types/Product.ts: ProductDetail
--- DUPLICATE EXPORTS (2)
@org/owner src/components/Registration.tsx: Registration, default
@org/owner src/components/Products.tsx: ProductsList, default
```

https://github.com/webpro/knip

📒 手写 React 渲染器

由于有 react-reconciler，让自定义 React 渲染器变地相当简单。

```js
import ReactReconciler from "react-reconciler";

const reconciler = ReactReconciler({
  // ... configuration options ...
  // 启用突变模式
  // Reconciler 有两种不同的渲染模式，1）突变模式，2）持久模式
  supportsMutation: true,
  
  createInstance(type, props) {
      const element = document.createElement(type);
    Object.keys(props).forEach((prop) => {
      // Filter out non-HTML attributes like:
      if (!["children", "onClick", "key"].includes(prop)) {
        // Appends each html attribute to the element
        element[prop] = props[prop];
      }
    });
    // return the HTML element
    return element;
  },
  createTextInstance: (text) => {
    return document.createTextNode(text);
  },
  getRootHostContext: () => null,
  getChildHostContext: () => null,
  shouldSetTextContent: () => null,
  prepareForCommit: () => null,
  clearContainer: () => null,
  resetAfterCommit: () => null,
  appendInitialChild: () => null,
  appendChildToContainer: () => null,
  finalizeInitialChildren: () => null,
  removeChildFromContainer: () => null,
});

const render = (element, container) => {
  const root = reconciler.createContainer(container, false, false);
    reconciler.updateContainer(element, root, null, null);
};

export { render };
```

然后就可以拿这个 `render` 方法进行渲染了。

```js
render(<App />, document.getElementById('root'))
```

https://www.markcodes.dev/posts/build-react-custom-renderer-part-1

📒 最快前端模板

Jest 作者梳理了他认为最快的 2022 最快前端工具集以及与之配套的 github 仓库模板，结论是 Vite + tailwind + pnpm + eslint & prettier + TypeScript + React。我觉得这里的快有两个含义，1）速度快，2）用于快速启动项目的最小模板。

- Vite 无需多说
- Tailwind 也无需多说，但如果你有自己的 Design System，作者推荐用 emotion
- pnpm 除了快，对 monorepo 的支持也很好
- ESLint & prettier 有一些注意点，1）要分开用，别在 eslint 规则里加 prettier 规则，会慢，2）prettier 和 eslint 都有 --cache 参数，要开启，3）推荐用 @trivago/prettier-plugin-sort-imports 和 prettier-plugin-tailwindcss 对 import 和 tailwindcss 类进行排序，4）期待 rome 的 formatter 和 lint
- npm-run-all 用于并行执行多个命令
- NodeJS 脚本编写，基于 native esm，使用 ts-node + @swc/core + nodemon 的依赖组合实现，没有用基于 esbuild 方案比如 tsx，因为测下来在一些场景会莫名其妙地慢
- TypeScript 无需多说
- VSCode，作者推荐了 4 个插件

大家可能会好奇，作为 Jest 作者，测试工具他选的啥？虽然文章里没提，但从代码里可以看到，用的是 Vitest，哈哈。

https://cpojer.net/posts/fastest-frontend-tooling-in-2022

📒 [MDH 前端周刊第 73 期：TypeScript 10 年、最快前端模板、whyframe、template 元素](https://mp.weixin.qq.com/s/GaSo704nCAOba7d3XhwCzg)

📒 文章推荐

- [🗂 前端版本兼容问题的探索](https://supercodepower.com/fontend-target)
- [🗂 对 web.dev 所有 blog 的整理与归档](https://supercodepower.com/web-dev-blog)
- [🤯 没 2 年 React Native 开发经验，你都遇不到这些坑](https://supercodepower.com/react-native-tweet)

📒 Storybook 7.0 中 Vite 成为内置选项

https://storybook.js.org/blog/first-class-vite-support-in-storybook/

📒 用 Sandpack 打造世界级 Playground

CodeSandbox 开源了 Sandpack，本文教你使用 Sandpack 打造出一个功能齐全的 Playground。

https://www.joshwcomeau.com/react/next-level-playground/

📒 Resumable vs. Hydration

本文介绍了 Qwik 框架可恢复性的实现原理以及与常规补水相比具有的优势。

https://qwik.builder.io/docs/concepts/resumable/

📒 [TypeScript 十年，不忘初心](https://devblogs.microsoft.com/typescript/ten-years-of-typescript/)

📒 Rollup v3.0.0

Rollup 发布 v3.0.0，带来了大量更新。其中 Breaking Change 包括最低支持 Node 14.18.0、浏览器构建拆成单独的包 @rollup/browse、Node 构建使用 `node:` 前缀导入内置模块、移除一些以前被废弃的功能，使用时提示警告等。还有包括 Options 配置、插件 API、以及一系列的新特性。

> Rollup 3.0 意味着 Vite 即将发布大版本

https://github.com/rollup/rollup/releases/tag/v3.0.0

📒 [前端食堂技术周刊第 55 期：Rollup v3.0.0、Volar 1.0 Nika、TypeScript 十年](https://juejin.cn/post/7155435611619328036)

📒 如何使用 React、SSR 和 Tailwind CSS 构建 SVG 折线图

关于如何在基于 Next.js 或 Gatsby 的服务器端渲染 React 应用程序中创建你自己的基于 SVG 的折线图的教程。

https://thenewstack.io/how-to-build-svg-line-charts-with-react-ssr-and-tailwind-css/

📒 React 渲染的未来

首先回顾当前的渲染模式 (CSR/SSR)然后转向一些新的渲染模式，例如流式 SSR 和服务器组件。这也是在 React Bangalore 的 最近访谈 中的话题。

https://prateeksurana.me/blog/future-of-rendering-in-react/

📒 React Table：一个 “几乎无头” 的表格组件

https://react-table-library.com/

📒 [Islands 架构原理和实践](https://juejin.cn/post/7155300194773860382)

📒 [你不需要Next.js（和SSR）](https://mp.weixin.qq.com/s/BAOrH_-UWliOOc0pFGct-w)

📒 [【面试高频题】难度 1.5/5，常规滑动窗口运用题](https://mp.weixin.qq.com/s/vRiqSVSQOVsShnblV_fDfw)

⭐️ [精读《Headless 组件用法与原理》](https://mp.weixin.qq.com/s/-PSUUDk0JtYRYH7g0viTZg)

📒 [学习了！GoMap 会内存泄露](https://mp.weixin.qq.com/s/TcYo3VWpM3uDpya1XXrX3w)

📒 [如何让 Go 反射变快](https://mp.weixin.qq.com/s/MSGH09uUjSquxGlxnBIUBg)

⭐️ [Go Gin框架请求自动验证和数据绑定，看完这篇就会用了](https://mp.weixin.qq.com/s/cAwc6ZhdUwxkI5VT8LY9Hg)

📒 [一文搞懂Go内联优化](https://mp.weixin.qq.com/s/WfjnwzZvBsymk_DyhAV_6g)

⭐️ [Go常见错误集锦之函数式选项模式](https://mp.weixin.qq.com/s/nc4s289ULpQkGlQuaFbZlQ)

📒 [Go语言爱好者周刊：第 163 期 —— 错误处理新提案](https://mp.weixin.qq.com/s/fVSi3-J7tnaP2AqunW9fWw)
