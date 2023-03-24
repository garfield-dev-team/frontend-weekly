---
slug: 3月26日内容汇总
title: 3月26日内容汇总
authors: [garfield]
tags: []
---

⭐️ [Go 内存模型](https://mp.weixin.qq.com/s/PG-3jJaoCIEccnJ3QtPXug)

📒 [ChatGPT推出插件功能：可联网、可执行代码](https://mp.weixin.qq.com/s/s6wCRc_UqKf28Gc4RtZZPQ)

📒 [【webpack核心库】耗时7个小时，用近50张图来学习enhance-resolve中的数据流动和插件调度机制](https://mp.weixin.qq.com/s/QcQlOscF9R0aF2x3Oe6doQ)

📒 [Go每日一库之Pie ：一个高性能、类型安全的slice操作库](https://mp.weixin.qq.com/s/vdVZYEy5LznQSHI6klaCIg)

📒 基于 openai 开发 CLI 工具

https://platform.openai.com/docs/guides/completion/introduction

https://platform.openai.com/docs/api-reference/authentication

https://github.com/sashabaranov/go-openai

⭐️ [源码阅读 - 切片扩容过程](https://mp.weixin.qq.com/s/k0zwlJNFssMRh1NHA6rGcA)

⭐️ [聊聊Go语言的全局变量](https://mp.weixin.qq.com/s/MI9x4YOAhbtS-xQtOS-K_A)

⭐️ [「高频必考」Go并发编程面试题和答案](https://mp.weixin.qq.com/s/soaxFUjo6hEe2KSnle_LkQ)

📒 [ECMAScript 2023 有哪些更新](https://mp.weixin.qq.com/s/SFMSlRafJZPljJ6cNnKVFg)

⭐️ [「从0实现React18系列」Reconciler架构的双缓存树实现原理](https://juejin.cn/post/7213362704781852730)

📒 monorepo 相关文章

[monorepo工作流基础之changesets打开与进阶](https://blog.csdn.net/qq_21567385/article/details/122361591)

https://sakina.blog.csdn.net/?type=blog

https://modernjs.dev/guides/topic-detail/changesets/release-pre.html

⭐️ [Lazy Loading Routes in React Router 6.4+](https://remix.run/blog/lazy-loading-routes)

📒 [如何规范地发布一个现代化的 NPM 包](https://mp.weixin.qq.com/s/Vy2pEKrG-N27TYVRlTvwaw)

⭐️ [「Go框架」bind函数：gin框架中是如何将请求数据映射到结构体的](https://mp.weixin.qq.com/s/ldqBkRYaaXqthoC9sbOVaw)

⭐️ [基于性能分析的优化预览](https://mp.weixin.qq.com/s/elsHIqDQ0yABUZXNVpjwMg)

📒 [做量化交易发愁写代码？一招教你白嫖GPT-4智能编程神器](https://mp.weixin.qq.com/s/e2MnalUKgve6BRxBP2IOrA)

⭐️ [Go 语言并发模式代码模板](https://mp.weixin.qq.com/s/431YMKwRjaStanqA6juePA)

⭐️ [「从0实现React18系列」Fiber架构的实现原理](https://juejin.cn/post/7212603037667786813)

⭐️ [「从0实现React18系列」自己动手实现一个JSX转换](https://juejin.cn/post/7212235580104917053)

⭐️ [Go 错误处理：100+ 提案全部被拒绝，为何现阶段仍用 if err != nil](https://mp.weixin.qq.com/s/xiUPLOTkDCX2i2jTOSNgCQ)

⭐️ [如何做好表结构设计](https://mp.weixin.qq.com/s/SYQTlvbLvbsSwFi2Q_kI1Q)

📒 [React 中文周刊 #132 - Vite 简介以及为什么使用它来替代 Create React App](https://mp.weixin.qq.com/s/mktyKyzV1wsyBrX-HW6Ggw)

📒 [TypeScript 5.0 已发布！看看增加了什么新功能](https://juejin.cn/post/7212529038875426875)

📒 [Chrome 101：fetchpriority](https://juejin.cn/post/7212500870763053114)

⭐️ [Go Slice 扩容的这些坑你踩过吗](https://juejin.cn/post/7212466685451042874)

📒 [Three.js 进阶之旅：物理效果-碰撞和声音 💥](https://juejin.cn/post/7200039970575941693)

📒 [Three.js 进阶之旅：新春特典-Rabbit craft go 🐇](https://juejin.cn/post/7191415427350659129)

⭐️ [Go 语言自带设计模式](https://mp.weixin.qq.com/s/qTYlHqozkWHkhF9OKfaAMQ)

⭐️ [「每周译Go」在不同的操作系统和架构编译 Go 应用](https://mp.weixin.qq.com/s/-xfpP08BQDbJc6ukhGRtnA)

📒 你可能不知道的 async、await 细节

async函数在抛出返回值时，会根据返回值类型开启不同数目的微任务

- return 结果值：非 `thenable`、非 `promise`（不等待）
- return 结果值：`thenable`（等待 1个 `then` 的时间）
- return 结果值：`promise`（等待 2个 `then` 的时间）

await右值类型区别

- 接非 `thenable` 类型，会立即向微任务队列添加一个微任务 `then`，但不需等待
- 接 `thenable` 类型，需要等待一个 `then` 的时间之后执行
- 接 `Promise` 类型(有确定的返回值)，会立即向微任务队列添加一个微任务 `then`，但不需等待

[你可能不知道的 async、await 细节](https://mp.weixin.qq.com/s/aLQVpglTRA0bJGyCpXOD8Q)

⭐️ [Go语言中常见100问题-#30 Ignoring the fact that elements are copied](https://mp.weixin.qq.com/s/71wpR1kz5PgzVNBgpN855g)

⭐️ [Go 语言实现创建型设计模式 - 单例模式](https://mp.weixin.qq.com/s/ixTP1qythuJyhf3b9kIRaA)

⭐️ [聊聊godoc、go doc与pkgsite](https://mp.weixin.qq.com/s/ypK-2wGHGj9_n4o8y-clXg)

📒 [把React新文档投喂给 GPT-4 后](https://mp.weixin.qq.com/s/F7Z-JQimZ3p6BfLLCE0pHw)

📒 MDH 前端周刊第 92 期：react.dev、npm 安全、Execa 7、Reactivity、React Query

《介绍 react.dev》。React 官方文档网站已经更新，现在的网址是 react.dev。新网站教授使用函数组件和 Hooks 的现代 React，并包括了图表、插图、挑战和 600 多个交互式示例。旧版 React 文档网站已移至 legacy.reactjs.org。新网站分为 “学习 React” 和 “API 参考” 两个主要部分，前者是一个自定进度的课程，后者提供每个 React API 的详细信息和用法示例。新网站还添加了很多沙盒，让用户可以快速玩转 React API、探索想法并检查理解。

> https://react.dev/blog/2023/03/16/introducing-react-dev

《介绍 “安全 npm”，一个 Socket npm 包装器 - Socket》。Socket 推出了一款名为 “safe npm” 的 CLI 工具，用于保护开发人员在使用 npm install 时免受恶意软件、拼写错误、安装脚本、抗议软件和遥测等方面的影响。该工具透明地包装了 npm 命令，并在安装过程中保护开发人员免受恶意软件、拼写错误、安装脚本、抗议软件、遥测等 11 种问题的影响。

> https://socket.dev/blog/introducing-safe-npm

《GitHub - gajus/turbowatch：Node.js 的极速文件变更检测器和任务编排工具。》。Turbowatch 是一个用于 Node.js 的极快文件更改检测器和任务编排器。它可用于自动化响应文件更改的任何操作，例如运行（并自动重新启动）长时间运行的进程（如您的 Node.js 应用程序）或构建资产（如 Docker 镜像）。

> https://github.com/gajus/turbowatch/

《JulesBlom.com - React API 地图》。这篇文章介绍了一种学习 React API 的方法，即通过将其组织成一个空间地图来帮助理解。作者将 React 的不同部分联系在一起，形成了一个可供探索的结构，并在 “推荐阅读” 部分中添加了一些经过筛选的优质博客文章链接，以便更好地理解 React API。

> https://julesblom.com/writing/map-of-react-api

《发布 v6.9.0・remix-run/react-router》。React Router 发布了 6.9.0 版本，支持使用 React 组件定义路由元素和错误元素字段。此外，还引入了 Lazy Route Modules，以保持应用程序包的小巧和支持代码分割路由。此功能通过 lazy () 路由属性实现，是一个异步函数，解析路由定义的非匹配部分。

> https://github.com/remix-run/react-router/releases/tag/react-router%406.9.0

《Execa 7 的无 Shell 脚本 | ITNEXT》。Execa 7 提供了类似于 zx 的模式，但采用更简单的纯 JavaScript 方法。使用 Execa，不需要记忆任何 shell 语法，几乎所有特定于 shell 的功能都可以在 JavaScript 中表达。

> https://itnext.io/shell-free-scripts-with-execa-7-885fb3b42f83

《2023 年每个前端开发人员都应该知道的 6 个 CSS 片段》。本文介绍了六个有用的 CSS 技巧，包括使用容器查询、创建滚动吸附效果、避免使用 grid 的 position: absolute、快速制作圆形、使用层叠样式表（cascade layers）控制变体和使用逻辑属性（logical properties）来减少代码量。

> https://web.dev/6-css-snippets-every-front-end-developer-should-know-in-2023/

《Nuxt 3.3》。Nuxt.js 发布了新版本，增加了本地模块开发、自动重启服务器和性能优化等功能。该版本还提供了一些新的组件和可组合函数，包括错误处理组件 `<NuxtClientFallback>` 和处理不受信任用户输入的 useHeadSafe 可组合函数。此外，该版本还改进了类型定义和 Nitro 引擎，支持自定义配置模式，并且有更好的 Chrome DevTools 支持。

> https://nuxt.com/blog/v3-3

《深入探究 TanStack 查询中的突变》。TanStack Query 有三个主要概念：查询、变异和查询失效。本文将重点介绍变异，包括变异的副作用、失效和并行实现。通过使用 useMutation Hook，可以轻松地处理所有更新、创建和删除请求。同时，乐观更新是使用 TanStack Query 变异的关键优势之一。

> https://blog.logrocket.com/deep-dive-mutations-tanstack-query/

《React Hooks 是一个错误吗？| jakelazaroff.com》。本文探讨了 React 编程模型的不同之处，以及为什么有些人更喜欢使用 signal-based components。作者认为，人们对组件的心理模型与 React 中的函数组件和 hooks 的工作方式不匹配。与类组件相比，signal-based components 更加相似。文章还介绍了 Solid 等信号驱动框架，并讨论了它们与 React hooks 之间的区别和权衡。最后，作者总结说，现在的框架似乎正在尝试在 hooks 的可组合性和类的稳定性之间取得平衡。

> https://jakelazaroff.com/words/were-react-hooks-a-mistake/

《基于 React Query 的请求防抖》。React Query 不支持 deboucing，因此需要将其包装在一个简单的抽象中。作者提出了一种方法来扩展 React Query 以添加新功能，代码行数少于 40 行。通过动画演示，展示了防抖的实际效果，使用防抖后，应用程序只触发了 1 个请求并交换了 294 B 的数据，请求减少了 91％，传输的数据减少了 99％。

> https://rafaelcamargo.com/blog/deboucing-requests-with-react-query/

《零配置类型安全》。SvelteKit 现在可以自动生成类型注释，无需手动添加。通过在 SvelteKit 应用程序中添加类型注释，可以实现网络全面的类型安全性。现在，SvelteKit 框架可以为我们类型化 load 和 data，这是计算机所擅长的 —— 让我们专注于创造性的工作。使用 VSCode 的用户只需升级到最新版本的 Svelte 扩展即可，其他编辑器的扩展也可以使用此功能，只要它们支持 Language Server Protocol 和 TypeScript 插件。

> https://svelte.dev/blog/zero-config-type-safety

[MDH 前端周刊第 92 期：react.dev、npm 安全、Execa 7、Reactivity、React Query](https://mdhweekly.com/weekly/issue-0092)

📒 [Go语言爱好者周刊：第 181 期 —— ChatGPT + Golang](https://mp.weixin.qq.com/s/6pXEtzFRPg1XsnbNxIBuxA)
