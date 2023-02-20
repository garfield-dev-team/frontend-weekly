---
slug: 2月26日内容汇总
title: 2月26日内容汇总
authors: [garfield]
tags: []
---

![image](./image.png)

📒 [前端食堂技术周刊第 71 期：LightningCSS、State of React Native、Sandpack 2.0、ChatGPT 与前端、2023](https://juejin.cn/post/7202164243613073464)

📒 [「每周译Go」在 Go 中定义方法](https://mp.weixin.qq.com/s/2pw6Rix1tDqdsrwSLEQsoQ)

📒 [「读源码」为什么注册路由时没有传入上下文，在接口方法中却能取到](https://mp.weixin.qq.com/s/HRQfrG4qqXtEMTezg53a-g)

⭐️ [一文告诉你如何判断Go接口变量是否相等](https://mp.weixin.qq.com/s/6_ygmyd64LP7rlkrOh-kRQ)

📒 [PHP vs Go，为什么 Go 不支持命名参数调用函数](https://juejin.cn/post/7202066150938902587)

📒 MDH 前端周刊第 88 期：错误处理、CSS 嵌套、应用模块化、useWorker

React 实现了下发服务器端函数的引用，类似 RPC 。

> https://twitter.com/wongmjane/status/1625166863062958081

React Native 年度报告显示 Turborepo 是最受欢迎的 monorepo 工具。

> https://results.stateofreactnative.com/monorepo-tools/

Nextjs 新增了 Api routes 的替代品 route handler 。

> https://beta.nextjs.org/docs/routing/route-handlers

React Hook Form 支持跨框架使用了，建议更名为 @tanstack/hook-form，哈哈。

> https://github.com/react-hook-form/core

《How to handle errors in React: full guide》。直接 `try…catch` 会有不少限制，但使用 React 官方的 ErrorBoundary 也有不少限制。这个限制是，React生命周期之外的错误不捕获，比如 resolved promises, async code with setTimeout, various callbacks and event handlers。怎么解？dan 给了个 [Hack 方案](https://github.com/facebook/react/issues/14981#issuecomment-468460187)，简单说就是 `try {} catch(e) { setState(() => throw e) }`。基于此，我们可以稍微封装下，比如 `useThrowAsyncError` 或 `useCallbackWithErrorHandling`，这样就不需要每次声明一个新的 setState 了。同时也可以考虑用 [bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary) 。

> https://www.developerway.com/posts/how-to-handle-errors-in-react

《TypeScript Brand type with Zod》。Brand Type 可以用来创建一个新类型，比如把 string 包装成 Email。然后结合 Type Guards，即可确保类型安全，又能做数据校验。Type Guards 的部分可以用 zod 。

> https://linux-china.davao.page/blog/2023-02-16-ts-brand-with-zod/

《Modularizing React Applications with Established UI Patterns》。好文，作者通过案例教你如何用成熟的 UI 模式把 React 应用模块化。说人话就是，把大组件拆小。几个思路，1）提取子组件以拆分视图，2）提取非视图逻辑到 hooks，3）提取领域模型以封装逻辑。但是也要注意别过度优化。

> https://martinfowler.com/articles/modularizing-react-apps.html

《React Component Composition》。图解 Composition。

> https://punits.dev/jargon-free-intros/react-component-composition/

Umi 例行每周四发一版，我觉得有趣的功能包括，1）基于 @clack/prompts [优化 create-umi 界面](https://github.com/umijs/umi/pull/10508)，2）优化命令行执行速度，该 lazyImport 的 lazyImport，同时优化了 @ant-design/icons 集合的读取方式，3）新增 legacy 模式支持做产物的 es5 校验，4）升级 Vite 到 4.1。

Umi 新增 [Roadmap 2023](https://github.com/umijs/umi/issues/10423)，是 Umi 团队每周迭代的一部分，每周四更新，有兴趣共享的同学欢迎直接回 issue 认领。一个非 docs PR 即可加入 Umi Contributor 群。

Umi 团队新增一条规则，每人每周需共享 1-2 个想法，每周三开 Discussion 征集，这是试运行第一周的 [Discussion 链接](https://github.com/umijs/umi/discussions/10516)。

[MDH 前端周刊第 88 期：错误处理、CSS 嵌套、应用模块化、useWorker](https://mdhweekly.com/weekly/issue-0088)

⭐️ [Vue3 是如何通过编译优化提升框架性能的](https://juejin.cn/post/7199994978976759868)

⭐️ [我是如何优化弹窗拖拽卡顿的？内附排查和优化过程](https://juejin.cn/post/7197411581927882807)

📒 [Golang 语言标准库 io 详解](https://mp.weixin.qq.com/s/ApHdIvEcki4LxLheBoB2ew)

📒 [Go语言爱好者周刊：第 177 期 — Go 版 ElasticSearch](https://mp.weixin.qq.com/s/ioW72PZV3Vx0UiiKFyXcBA)
