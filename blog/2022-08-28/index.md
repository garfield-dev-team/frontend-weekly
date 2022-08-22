---
slug: 8月28日内容汇总
title: 8月28日内容汇总
authors: [garfield]
tags: []
---

📒 [Go语言从0到1实现最简单的数据库！](https://mp.weixin.qq.com/s/VFS4TWi3OpeAegScZ4cJRw)

📒 [一文读懂TypeScript类型兼容性](https://mp.weixin.qq.com/s/IRGAN0e9tbL5hwG4hx1kxQ)

📒 Communicating Effectively As A Tech Lead

Addy Osmani 的新作，从 Simplify、Be concise and on point、Communicating with executives、Listen、Be proactive、Be thorough 和 Take notes 7 个维度介绍作为 TL 时如何高效沟通。

https://addyosmani.com/blog/communication-tech-lead/

📒 React Re-Renders

通过这篇文章，我学到了「两个误解」、「一个比喻」和「一个技巧」。

两个误解是，1）state 变更会让整个 app re-render？不是，state 变更只会让当前组件及其子组件 re-render，2）组件 re-render 是因为 props 变更？也不是，props 往上可以追溯到 state 变更，是 state 变更导致了子组件 re-render，而不是由 props 变更引起。

上述误解 2 的一个例外是 React.memo，应用 React.memo 后的组件只有 props 变更才会触发 re-render。你可能会想：为什么这不是默认行为？因为作为开发者，我们往往高估了重新渲染的成本。对于 props 很多且没有很多子组件的组件来说，相比 re-render，检查 props 是否变更带来的消耗可能更大。因此，如果对每个组件都进行 React.memo，可能会产生反效果。

一个比喻是，每次渲染都是由照相机拍摄的快照，React 通过玩「找不同」的游戏找出两张照片之间的差异，然后决定是否 re-render。而 React.memo 则是懒惰的摄影师，如果你要求他为完全相同的东西拍 5 张照片，它会拍 1 张照片并给你 5 份。只有当你的指令改变时，他才会拍下一张新的照片。

一个技巧是，借助 React Devtools Chrome 插件，在「设置 > Profiler」里开启「Record why each component rendered while profiling」，再通过录制的方式排查，就能知道每个 re-render 的原因。

原文链接：

https://www.joshwcomeau.com/react/why-react-re-renders/

中文翻译：

[【第2709期】一份详尽的 React re-render 指南](https://mp.weixin.qq.com/s/SH7N2f5ZhUhysQ7_G2s9rQ)

📒 深入解读新一代全栈框架 Fresh

从定位上来看，Fresh 属于 **Web 全栈开发框架**，相比 Next.js 和 Remix， Fresh 有哪些值得一提的亮点：

- Fresh 基于 Deno 运行时，由 Deno 原班人马开发，享有 Deno 一系列工具链和生态的优势，比如内置的测试工具、支持 http import 等等
- 渲染性能方面，Fresh 整体采用 Islands SSR 架构(之前介绍的 Astro 也是类似)，实现了客户端按需 Hydration，有一定的渲染性能优势
- 还有一个比较出色的点是构建层做到了 Bundle-less，即应用代码不需要打包即可直接部署上线
- 最后，不同于 Next.js 和 Remix，Fresh 的前端渲染层由 Preact 完成，包括 Islands 架构的实现也是基于 Preact，且不支持其它前端框架

开发者并不需要手写路由文件，Fresh 可以自动地生成服务端的路由到文件的映射关系。很明显 Fresh 实现了 **约定式路由** 的功能，跟 Next.js 类似。

[深入解读新一代全栈框架 Fresh](https://mp.weixin.qq.com/s/8qNI4a-3P2KId9WRAnz2dw)

