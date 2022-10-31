---
slug: 11月6日内容汇总
title: 11月6日内容汇总
authors: [garfield]
tags: []
---

📒 [压缩 70% 下载流量 - 记一次店铺优化专项](https://mp.weixin.qq.com/s/cFwqrnpww-kNL7-JRoydBA)

📒 我们如何用 Next.js 提高 70% 的 React 加载时间

通过用 Next.js 替换 Create React App，商业计划平台 Causal 通过减少加载时间显著改善了用户体验。怎么做到的？一点 SSR 就能帮你很多。

https://www.causal.app/blog/next-js

📒 “为什么我们要放弃 CSS-in-JS”

Emotion 是一个用 JavaScript 编写 CSS 的流行库，但它的一位贡献者讲述了为什么他的团队总体上放弃了 CSS-in-JS 的想法。

https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b

📒 在 React 中使用 `use` - 一个新的 Hook 即将到来

上周我们在一个叫做 use 的新 Hook 后面介绍了 RFC —— 这里有一个更容易理解的介绍。“这个不起眼的发明可能永远改变我们将数据输入应用程序的方式。”

https://vived.io/new-hook-is-coming-to-react-frontend-weekly-vol-109/

📒 [程序员应该遵守的编程原则(不止Gopher哦)](https://mp.weixin.qq.com/s/94thx36Ao2PYQ-8Cbto-wQ)

📒 [前端工程化基建探索：从内部机制和核心原理了解npm](https://mp.weixin.qq.com/s/mL1pv2kPKvtaHalr7PXKow)

📒 [哈啰下一代跨技术栈前端组件库 Quark Design 正式开源！](https://mp.weixin.qq.com/s/f1N7FhlNshEP30s9ph_R8Q)

📒 [深入浅出JavaScript异步编程](https://mp.weixin.qq.com/s/6EdUBn3Dk_F9BgBQfLwpRQ)

📒 [深度解密Go语言之关于 interface 的 10 个问题](https://mp.weixin.qq.com/s/6KxJRG3lKUDY734t4EzAaA)

📒 [手撸源码系列 - cache2go](https://mp.weixin.qq.com/s/qyEiEACuUd8SsyqCDLUjXA)

📒 《 关于我用拓展运算符把项目搞崩这件事 》

注意函数调用不能接受过长的参数：

```ts
const items = [];
const newItems=new Array(1000000)

// ❎ 以下两种情况，如果 newItems 很长容易导致爆栈问题
items.push(...newItems);
items.push.apply(items, newItems);

// ✅ 合理做法
items.concat(newItems);
items = [...items, ...newItems];
```

[《 关于我用拓展运算符把项目搞崩这件事 》](https://mp.weixin.qq.com/s/vmlVUwM05PEZj15doanLaA)

📒 [前端性能优化到底该怎么做（下）- 直捣黄龙](https://mp.weixin.qq.com/s/EcShs5E7lH7jdQGMttFmYA)

📒 [Go语言爱好者周刊：第 165 期 —— 基于 fyne 实现一个简单计算器](https://mp.weixin.qq.com/s/0h9pGl04-9AsbF_OTF8TSg)
