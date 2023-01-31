---
slug: 11月27日内容汇总
title: 11月27日内容汇总
authors: [garfield]
tags: []
---

📒 相关文章推荐

重构 React 代码：减少 43% 代码并且数据结构更加清晰

> https://profy.dev/article/react-junior-code-review-and-refactoring-1

使用 TypeScript 编写 React 组件

> https://www.robinwieruch.de/typescript-react-component/

What and Why：Next.js 13 中的 React Server Components

> https://thetombomb.com/posts/react-server-components-nextjs

Twix: 使用 Tailwind CSS 实现 React 组件样式

> https://github.com/Idered/twix

Deno v1.28 发布：现在有 130 万个新模块。Deno 现在正式支持以“稳定”的方式使用 npm 模块，并且不需要涉及 `node_modules`、`package.json` 或 `npm install` 这些出现在 Node 中的内容

> https://deno.com/blog/v1.28

> https://www.youtube.com/watch?v=X2qxpDriWjY

Wireit：升级 npm 脚本，使它们更智能、更高效

> https://github.com/google/wireit

使用 WebAssembly 增强 Node.js

> https://www.youtube.com/watch?v=bYCrCKNJBW8

函数式编程到底有什么优点 — 本篇文章是由即将出版的 《Skeptic’s Guide to Functional Programming with JavaScript》的作者 James 以一种更容易理解的方式书写的函数式编程思想的文章，相信你读完本篇文章会大有收获

> https://jrsinclair.com/articles/2022/whats-so-great-about-functional-programming-anyway/

用 Storyboook 和 Nightwatch 实践组件驱动开发

> https://pineview.io/supercharge-your-storybook-with-nightwatch-testing/

tslog v4.0：支持 JS、TS 的日志输出库— 功能丰富，类型齐全，可以通过本机 V8 进行堆栈跟踪 API、显示代码框架等。现在支持 Node 和浏览器

> https://tslog.js.org/

📒 [开源低代码表单方案 Formily 的核心设计思路](https://mp.weixin.qq.com/s/2My8UeAgH9PXRJ5iDAkQJA)

📒 [微前端场景下的代码共享](https://mp.weixin.qq.com/s/OSqCRM3gU9QfAVJOaQyS-Q)

📒 相关文章推荐

[How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)

[How to Build a Rust CLI Tool to Generate Typescript Types from Rust](https://dev.to/alexeagleson/how-to-build-a-rust-cli-tool-to-generate-typescript-types-from-rust-20cm)

[Build Micro frontends in NextJS and ReactJS with Webpack 5 Module Federation](https://medium.com/a-layman/build-micro-frontends-in-nextjs-and-reactjs-with-webpack-5-module-federation-e142ad76f48c)

[Building React App with Module Federation and NextJS/React](https://dev.to/omher/building-react-app-with-module-federation-and-nextjsreact-1pkh)

📒 Next.js 相关内容

[使用 Next.js 搭建 Monorepo 组件库文档](https://juejin.cn/post/7168885699507126303)

[理解 Next.js 中的 CSR、SSR、SSG、ISR 以及 Streaming](https://juejin.cn/post/7162775935828115469)

Next.js 13 新增特性：

- 启用实验性 `app` 目录实现约定式路由，路由每个片段必须要有一个目录承载，内部包含一个 `page.tsx` 作为主页面，还可以包含 `layout.tsx` 作为该路由的公共导航，切换路由时，不会刷新
- `app` 目录下的组件默认启用 Server Component（当然也可用于 SSG 渲染），与传统的 SSR 不同，优点是拥有 **流式 HTML 和选择性注水**
- React Suspense API 解锁了 React 18 中的两个主要 SSR 功能：
  - 在服务器上流式传输 HTML
    要实现这个功能，需要从原来的方法切换 `renderToString` 切换到新 `renderToPipeableStream` 方法
  - 客户端的选择性注水作用
    使用 `hydrateRoot` 代替 `createRoot` 方法
- 区分服务端组件和客户端组件
  - Next.js 12 在 `useEffect`、 `onChange` 等回调函数可以在客户端执行（一般针对浏览器和 Node API 判断）
  - 在 Next13 中 ， 在 `app` 目录下由于启用了 Server Component，无法使用 client-only 特性（例如 `useState`、`useEffect `、`createContext`），因此判断环境非常重要。如要使用 `useState` 等状态管理的 hook，那么该组件只在客户端执行，需要在首行加入 `'use client'` 指令
- 数据请求。Next.js 13 的 `app` 目录不再需要 `getStaticProps`、`getServerSideProps`，而是默认启用了 Static Rendering（相当于 SSG），如果需要切换渲染模式，只需要修改 `fetch` 的缓存策略：

  ```tsx
  fetch('https://...'); // 默认 'force-cache'，相当于 `getStaticProps`

  fetch('https://...', { next: { revalidate: 10 } }); // 请求被缓存 10s，相当于 `getStaticProps` 加上 `revalidate` 参数

  fetch('https://...', { cache: 'no-store' }); // 每次刷新都会重新请求，相当于 `getServerSideProps`
  ```

  > 获取数据之后可以直接用 `use()` 在服务端消费，渲染 UI。注意 `app` 目录下的 Server Component 不能用 `useState`（虽然可以加上 `'use client'` 改为客户端组件），Next.js 13 建议都在服务端调接口获取数据

- 此外在 SSG 渲染中常用的 `getStaticPaths` 改为了 `generateStaticParams`

参考：

https://beta.nextjs.org/docs/rendering/server-and-client-components#when-to-use-server-vs-client-components

https://beta.nextjs.org/docs/rendering/static-and-dynamic-rendering

https://beta.nextjs.org/docs/data-fetching/fetching

https://beta.nextjs.org/docs/upgrade-guide#dynamic-paths-getstaticpaths

一个 Next.js 13 的演示教程，里面讲了一个 use 导致的无限循环 bug

> https://www.youtube.com/watch?v=zwQs4wXr9Bg

[你好，Next.js 13](https://juejin.cn/post/7160084572942630926#heading-13)

📒 React-query 相关文章

[React Query 原理与设计](https://juejin.cn/post/7169515109172609032)

[用react-query解决你一半的状态管理问题](https://juejin.cn/post/6930542093840416776)

📒 [适合团队和个人项目的 Golang 编码规范](https://juejin.cn/post/7157594175846744071)

📒 [优化 CSS 代码的12个小技巧](https://mp.weixin.qq.com/s/CctmY6NS2zQY8d7l7O2dpg)

📒 [推荐一款SQL自动检查神器，再也不用担心SQL出错了！](https://mp.weixin.qq.com/s/3yHSh7djpeeYZkajkTGFKg)

📒 [【第2791期】可扩展 CSS 的演变](https://mp.weixin.qq.com/s/2tcAHWQTI75UjBZLieY7FQ)

📒 [接口502了，运维和研发谁的锅](https://mp.weixin.qq.com/s/UEzprqAEeTrdJt1NxTT49A)

📒 [Element Plus 组件库相关技术揭秘：7. 组件实现的基本流程及 Icon 组件的实现](https://juejin.cn/post/7168835045984043022)

📒 [突破 etcd 限制！字节自研 K8s 存储 KubeBrain](https://mp.weixin.qq.com/s/osJfi_oOfhEmQJNVqKel3Q)

📒 [有趣的 Go HttpClient 超时机制](https://mp.weixin.qq.com/s/HPzoclfCB3UxLScXm4J83w)

📒 [【综合笔试题】难度 3.5/5，常见序列 DP 题目及其优化思路](https://mp.weixin.qq.com/s/F0fpJLcNmiMlS18S0iP3CQ)

📒 [socket是并发安全的吗](https://mp.weixin.qq.com/s/rNfBHtpFLxwY7-CiBvkQ5A)

📒 [PGO 是啥，咋就让 Go 更快更猛了](https://mp.weixin.qq.com/s/7uobN6DmpIYqG34pOpvvlA)

📒 [前端食堂技术周刊第 60 期：TypeScript 4.9、Ant Design 5.0、用 vanilla-extract 编写高性能的 CSS](https://juejin.cn/post/7168433475404922910)

📒 [MDH 前端周刊第 77 期：布局动画、Arrow JS、vanilla-extract、antd 5、dumi 2](https://mp.weixin.qq.com/s/dI_gqBOSybThJUb-GNVKyw)

📒 [三种获取Go项目根目录的方式，让你做架构，选哪种](https://mp.weixin.qq.com/s/ws0fcHi-DzCN5PrJNDNKog)

📒 [【第2788期】去哪儿低代码平台跨端渲染方案及落地](https://mp.weixin.qq.com/s/mJj3qUw1sPjuX8dVZxvBwA)

📒 [Gophers如何准备面试](https://mp.weixin.qq.com/s/Elq7SWRpH08KmhX7auboOA)

📒 [一步一图带你深入理解 Linux 物理内存管理](https://mp.weixin.qq.com/s/Cn-oX0W5DrI2PivaWLDpPw)

📒 [「每周译Go」理解 Go 中包的可见性](https://mp.weixin.qq.com/s/NDC5tEG4GlGTDH_OcJLtfw)

📒 [Go语言中常见100问题-#21 Inefficient slice initialization](https://mp.weixin.qq.com/s/us3NddiVMUADMRU7v-aXKg)

📒 Go Time 第 256 期

https://changelog.com/gotime/256

📒 Google Go 风格指南

https://google.github.io/styleguide/go/index

📒 [Go语言爱好者周刊：第 168 期 — GoLand 2022.3 RC 发布](https://mp.weixin.qq.com/s/VXT6XUoxkZL3LwaN--SUXw)
