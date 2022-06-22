---
slug: 6月26日内容汇总
title: 6月26日内容汇总
authors: [garfield]
tags: []
---

📒 React 性能优化策略

引起组件更新的因素：

- props（包括父组件 rerender 引起子组件 rerender）
- state（在组件内部 `setState` 触发调度更新）
- context（全局状态改变，通知订阅状态的组件更新）

在不做任何优化的情况下，即使 props 没有改变，但是如果父组件 rerender，会导致子组件 props 对象重新生成，由于 React 默认的性能优化策略是 props **严格相等比较**，所以不可避免地导致子组件以及所有的子孙组件 rerender。

> **严格相等比较** 高效但是难命中，只有当前组件没有 rerender 才能保证后续组件树都不 rerender

使用了 `React.memo` 之后，会改为对 props 进行 **浅比较**，这样可以避免一些不必要的 rerender。

> **浅比较** 容易命中但是有一定性能开销，因为需要遍历对象

📒 [如何封装 cookie/localStorage/sessionStorage hook](https://mp.weixin.qq.com/s/C5yeK40_PTz0Q-eLeyMvfQ)

📒 [【第2648期】如何在 Vue 项目中，通过点击 DOM 自动定位VSCode中的代码行](https://mp.weixin.qq.com/s/uXJfgG52zGRedsy9bOqYYg)

📒 [HTTP史记 - 从HTTP/1到HTTP/3](https://juejin.cn/post/7111507179881889800)

📒 [Umi 4 发布啦！](https://mp.weixin.qq.com/s/UG4TlbADwQ5L9qxcS03x0Q)

📒 [记录第一次给开源项目提 PR](https://mp.weixin.qq.com/s/kTKBlpuWCC6T1xuiQSulsw)

📒 [Redis 高可用原理](https://mp.weixin.qq.com/s/qG4MDeYGQJkZU4qSLj3JiA)

📒 [如何移除你项目中99%的JS代码](https://juejin.cn/post/7111485285652758535)

📒 [浅谈前端项目里如何用 Logger 做好日志管理](https://juejin.cn/post/7111201034264903688)

📒 [如何让定时器在页面最小化的时候不执行](https://mp.weixin.qq.com/s/HjhkNP2eIWLxpLekPcSG8A)

📒 [一道有挑战性的 React Hook 场景题，考考你的功底](https://juejin.cn/post/7111120700768780301)

📒 [TypeScript 深水区：3 种类型来源和 3 种模块语法](https://juejin.cn/post/7111112135903543332)

📒 [我为 Netty 贡献源码 | 且看 Netty 如何应对 TCP 连接的正常关闭，异常关闭，半关闭场景](https://mp.weixin.qq.com/s/lfV-7drnRjjNq65KxiT0gg)
