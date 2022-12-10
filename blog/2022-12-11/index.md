---
slug: 12月11日内容汇总
title: 12月11日内容汇总
authors: [garfield]
tags: []
---

📒 [【VueConf 2022】尤雨溪：Vue的进化历程](https://juejin.cn/post/7175444694917185591)

📒 Nodejs 的 stream 操作

```ts
import { Readable } from "node:stream";
import fs from "node:fs";

const readable = new Readable();
readable.push("测试内容");
readable.push(null); // no more data

// 将可读流复制到标准输出
readable.pipe(process.stdout);

// 将可读流复制到文件
const writable = fs.createWriteStream("/xxx");
readable.pipe(writable);
```

📒 [Vite 4.0 正式发布！](https://mp.weixin.qq.com/s/0zDIPKUqPslj1EvowDXigA)

📒 [Go1.20 将禁止匿名接口循环导入！这是一次打破 Go1 兼容性承诺的真实案例](https://mp.weixin.qq.com/s/1d4XUoW5e45jYeEJEWoXeQ)

📒 [【第2806期】从Lint工具窥探前端的clean-code](https://mp.weixin.qq.com/s/8JwAlMU6DUWTxzFYKxTH3A)

📒 [Go1.20 继续优化 errors 库](https://mp.weixin.qq.com/s/w5guASrl7G6yl09HkPd5LQ)

📒 [《MiniReact》带你循环渐进了解React原理](https://juejin.cn/post/7145703734230646792)

📒 [从0.5到1用golang上线一个web项目](https://mp.weixin.qq.com/s/iemuo3gR4yU17ymSwTnoGQ)

📒 [从0到0.5用golang写一个web项目](https://mp.weixin.qq.com/s/abxUanLzPnU8PxFqN6IjjQ)

📒 [我们是如何追逐元宇宙、XR等“概念股”浪潮的](https://mp.weixin.qq.com/s/Q9VNdOXGlsA4OXRUc5_-xw)

⭐️ [\[译\]Uber 的 Go语言开发规范](https://mp.weixin.qq.com/s/UQwOJVqm5gnQPMgSE3MW9w)

📒 [【第2805期】React 数据获取与性能优化](https://mp.weixin.qq.com/s/vufI24NCasCT32UQG3A_UQ)

📒 [就在刚刚 Go 1.20 rc 1 发布啦!](https://mp.weixin.qq.com/s/6UPhAlu-IklPW3SKJCEurA)

📒 CSS 小技巧

`background` 有哪些属性：

- `background-color`
- `background-image`
- `background-position`
- `background-size`
- `background-repeat`

常见用法：

```css
background-image: url(xxx);

/** 背景图片填充，适配短边，两个属性通常一起用 */
background-size: contain;
background-repeat: no-repeat;

/** 背景图片填充，适配长边 */
background-size: contain;

/** 自定义背景图片大小，同时自定义布局 */
background-size: 58px 48px;
background-position: top 0 left 6px;
```

`transition` 动画可以配合 `will-change` 属性一起用：

```css
background: transparent;
will-change: background;
transition: background 0.3s ease;
```

📒 [React Streaming SSR 原理解析](https://mp.weixin.qq.com/s/GVts2QW3H_aTrB9anGwl5g)

⭐️ [Nest.js进阶系列四：Node.js中使用Redis原来这么简单！](https://mp.weixin.qq.com/s/yKm_U9Veh_1twIoXzM8Prw)

⭐️ [Redis学习-入门篇](https://mp.weixin.qq.com/s/TmCtsbhjexZNCdvUSXdNCw)

📒 [【面试高频题】难度 2/5，回溯算法经典运用](https://mp.weixin.qq.com/s/c9i2dhBf6P_zrhGF2FUpzA)

📒 [【第2804期】Islands 架构原理和实践](https://mp.weixin.qq.com/s/hLDtOz2AEbLCdRVBHkb3MQ)

📒 [Go 1.19.4 和 Go 1.18.9 发布安全更新，涉及 os http 以及 http2 header 缓存等问题](https://mp.weixin.qq.com/s/XzI4eXkj2xH_XxRAt2QISw)

⭐️ [源码深度解析之 Spring IOC](https://mp.weixin.qq.com/s/29xlEK2N_Wptl4TBMg1ZPQ)

📒 [前端食堂技术周刊第 62 期：11 月登陆浏览器的新特性、VueConf 2022、第 93 次 TC39 会议、TS 挑战](https://juejin.cn/post/7174027619984867341)

📒 [还在用HttpUtil？SpringBoot 3.0全新HTTP客户端工具来了，用起来够优雅！](https://mp.weixin.qq.com/s/SG9sNmMu9acB1xTODkG00Q)

📒 [历时8个月，10w字！前端知识体系+大厂面试总结（基础知识篇）](https://mp.weixin.qq.com/s/yvDkQUQtI-6BvlylC1Q7Ig)

📒 [你也是业务开发？提前用这个设计模式预防产品加需求吧](https://mp.weixin.qq.com/s/zCh12E10JM24EGTyFS7hPQ)

📒 [美团二面：TCP 四次挥手，可以变成三次吗](https://mp.weixin.qq.com/s/JDquIbunGuFHIgo2Clp3iw)

📒 [Go1.20 继续小修小补 errors 库](https://mp.weixin.qq.com/s/gfUM4EjE1av_YBeUBFyKtA)

📒 MDH 前端周刊第 78 期：技术文档框架、CSS Architecture、Tailwind 抽象泄漏、调试战术

原文链接：

> https://www.yuque.com/chencheng/mdh-weekly/hdwfxidpn4u2bboo

[MDH 前端周刊第 78 期：技术文档框架、CSS Architecture、Tailwind 抽象泄漏、调试战术](https://mp.weixin.qq.com/s/iPbUVSWIyfz1o1aISua9sg)

📒 [【面试高频题】难度 3/5，状态压缩 DP 及其优化](https://mp.weixin.qq.com/s/ZUe4t589ECmYpipph38nuw)

📒 [面试官：net/http库知道吗？能说说优缺点吗](https://mp.weixin.qq.com/s/IelVDnMzGtT5y7hGSb_OxA)

📒 [Go语言中常见100问题-#23 Not properly checking if a slice is empty](https://mp.weixin.qq.com/s/WsFGv9tcdRLP9K-NQSqimA)

📒 [【第2802期】Islands Architecture（孤岛架构）在携程新版首页的实践](https://mp.weixin.qq.com/s/AR4schTcEkc0lOObZA-jRQ)

📒 [Go 语言代码风格规范-指南篇](https://mp.weixin.qq.com/s/rOtR8FfMpfBZrIkyRrNsfQ)

📒 [Redis 7.0 源码调试环境搭建与源码导读技巧](https://mp.weixin.qq.com/s/pXqtEiRWt1nou7T2AueHtw)
