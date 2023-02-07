---
slug: 2月12日内容汇总
title: 2月12日内容汇总
authors: [garfield]
tags: []
---

![image](image.jpg)

题图：dannyhowe @ unsplash。

⭐️ [Go 陷阱 - 错误处理三剑客](https://mp.weixin.qq.com/s/E_8ovfaAKSjHFsK85iOChA)

🌟 上次给 UMI 的文档提了两个 PR 被合并，成了 UMI contributor：

![image](./Screen%20Shot%202023-02-06%20at%2011.24.37%20AM.png)

> https://github.com/umijs/umi/releases/tag/v4.0.48

📒 [「每周译Go」了解 Go 中的指针](https://mp.weixin.qq.com/s/RjLq4wUMvh5WMl8BcUmk0g)

📒 [【面试高频题】难度 1/5，简单二叉树寻值问题](https://mp.weixin.qq.com/s/hBFrHtEYRnk8P9QWmpUMIA)

📒 [TypeScript 5.0 将支持全新的装饰器写法！](https://mp.weixin.qq.com/s/QnWez2sEWuL8j8GVDmBNTA)

⭐️ [Go异步任务处理解决方案：Asynq](https://juejin.cn/post/7196907808225738811)

📒 MDH 前端周刊第 86 期：CRA 未来、吐槽 React、React 清依赖小技巧、Darkmode

《The Future of Create React App and Why It Exists》。Dan 写了篇长文梳理了 CRA 的问题和规划。一些问题包括，1）脚手架的困境，一旦 clone 就很难再更新，然后你的项目配置会逐渐变得陈旧，要么放弃，要么需要花大量精力换新，2）因为是 CSR 所以有空 HTML 的问题，但 Dan 也并不喜欢 MPA，比如 astro，混用多种技术影响 DX，完整的页面刷新让客户端状态失效影响 UX，3）请求瀑布问题，比较好的解法是让数据获取和路由结合，这就需要元框架，4）懒加载（await import）问题，引入额外的请求瀑布，解法是数据获取+路由+构建工具，一样也需要元框架。Dan 期望 CRA 具备 SSG and SSR, automatic code splitting, no client-server waterfalls, route prefetching, navigation preserving client UI state 等功能，然后考虑多 CRA 的多条路，决定不做了，把 CRA 变成一个社区方案的启动器。

> https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741

《React I Love You, But You're Bringing Me Down》。骂得好，哈哈，爱之深，责之切啊。如果你想吐槽 React，照着念就完了。1）表单没有稳定官方方案，一路用社区库过来，目前相对好的是 Formik 和 React-hook-form，看看人家 Svelte，2）Context 太敏感，一碰就 re-render，为了性能而拆大量的 Provider 瀑布流组件，太难看了，提供一个 useContextSelector 有那么难吗？3）关于 DOM 和 ref，React.forwardRef + TypeScript 写通用组件太难了，同时 ref 不仅仅是 关于 dom，每次用 ref 都是因为 useEffect API 太奇怪，换句话说，refs 是对 react 创造的问题的一种解决方案，4）关于 useEffect，需要阅读一篇 61 页 的论文才能用好也太难了，看看人家 Solid.js，5）关于 Hooks 规则，Rules of Hooks 不容易记住，6）关于老父亲 Facebook，略。那作者为啥还留下？因为「It's the ecosystem, stupid.」

> https://marmelab.com/blog/2022/09/20/react-i-love-you.html

《Little React Things: Cleaning up dependencies - Zeke Hernandez》。Zeke Hernandez 介绍了一个减少列表项 rerender 的小技巧，虽然对用户来说性能提升不明显，但至少打开 react devtool 的「Highlight Updates」时会看起来很爽，这就够了。方法是，event handler 用 useCallback 包一下，同时清空依赖，没有依赖就不会触发 event handler 生成新的了。那依赖怎么清？1） setState 无需写入依赖，2）setState 用 function 的形式。

> https://www.zekehernandez.com/posts/cleaning-up-dependencies

《4 Common Mistakes Made by Node.js Developers》。文章介绍了 4 个 Node 开发的常见错题。1）没有明确定义的日志级别，可尝试 winston, pino, morgan 等库，2）无脑选择 Docker 基础镜像，又大又耗性能，比如 node:18 300M+，选 slim 或 alpine 就够了，slim 70M，alpine 50M，3）签署 JWT 时不使用非对称加密，对称加密不够安全，4）Storing passwords without unique salting。

> https://amplication.com/blog/4-common-mistakes-made-by-nodejs-developers

[MDH 前端周刊第 86 期：CRA 未来、吐槽 React、React 清依赖小技巧、Darkmode](https://mdhweekly.com/weekly/issue-0086)

⭐️ [Go 陷阱 - nil != nil](https://mp.weixin.qq.com/s/X5YnYY3Y2vTk6KROlcHKDQ)

⭐️ [Go1.20 那些事：错误处理优化、编译速度提高、PGO 提效等新特性，你知道多少](https://juejin.cn/post/7196869752257773623)

📒 [Go语言爱好者周刊：第 175 期 — Go 2023 调查问卷](https://mp.weixin.qq.com/s/Indl6reHcVt6higxbQxFeA)
