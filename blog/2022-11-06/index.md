---
slug: 11月6日内容汇总
title: 11月6日内容汇总
authors: [garfield]
tags: []
---

⭐️ [极致编译速度，一文搞定webpack5升级](https://juejin.cn/post/7161303856943464455)

📒 [Element Plus 组件库核心技术揭秘：5. 从终端命令解析器说起谈谈 npm 包管理工具的运行原理](https://juejin.cn/post/7161063570594070559)

📒 [一文吃透 React 和 Vue 的多节点 diff 原理](https://juejin.cn/post/7161063643105198093)

📒 [看 Go 中的 struct 如何被优化，还有小插曲](https://mp.weixin.qq.com/s/tc0amzQ5HDRTfORdq11RBg)

📒 [Go for 循环有时候真的很坑](https://mp.weixin.qq.com/s/Pcp2FjcXk7Q7sV0Z-bEUNw)

📒 [用Go学设计模式-提炼流程，减少重复开发就靠它了!](https://mp.weixin.qq.com/s/-Ysho1jI9MfrAIrplzj7UQ)

📒 [vue中动态引入图片为什么要是require， 你不知道的那些事](https://mp.weixin.qq.com/s/aERKozDPGPdrePl21mN9JA)

⭐️ [聊一聊常见的构建工具关于插件机制的那些通用套路](https://juejin.cn/post/7157902763534319624)

📒 [Chrome 最近带来了哪些有意思的新东西](https://mp.weixin.qq.com/s/6Rr1UfMTa-Y6H7_VAtv0aw)

📒 [深入剖析容器技术基础](https://mp.weixin.qq.com/s/JbmA1NK4CWOiD0gOTXa_AA)

📒 [前端食堂技术周刊第 57 期：Turbopack、Next.js13、Chrome107、Vite3.2、图解 TLS 1.3](https://mp.weixin.qq.com/s/1bUGWcOfvdBR1vLDp_T6Qw)

📒 [Go 语言终极搜索插件](https://mp.weixin.qq.com/s/025-MLMAbdT38kWI--AoYg)

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
