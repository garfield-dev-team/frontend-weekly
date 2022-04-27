---
slug: 5月1日内容汇总
title: 5月1日内容汇总
authors: [garfield]
tags: []
---

📒 [实现一个 Codepen：（二）在 Next.js 中使用 Monaco Editor](https://juejin.cn/post/7091177467498463239)

📒 [【架构师（第十八篇）】脚手架之项目模板的安装](https://juejin.cn/post/7091079487592333349)

📒 [【前端部署第二篇】基于 docker/compose 部署一个最简单的前端项目](https://juejin.cn/post/7091103648100384804)

📒 7 段小代码，玩转Java程序常见的崩溃场景

如何排查 CPU 飙升问题，获取问题代码通常可以使用下面的方法：

1. 使用 top 命令，查找到使用 CPU 最多的某个进程，记录它的 pid。使用 Shift + P 快捷键可以按 CPU 的使用率进行排序
2. 再次使用 top 命令，加 -H 参数，查看某个进程中使用 CPU 最多的某个线程，记录线程的 ID
3. 使用 printf 函数，将十进制的 tid 转化成十六进制
4. 使用 jstack 命令，查看 Java 进程的线程栈
5. 使用 less 命令查看生成的文件，并查找刚才转化的十六进制 tid，找到发生问题的线程上下文

[7 段小代码，玩转Java程序常见的崩溃场景](https://mp.weixin.qq.com/s/YcyC1Jm4H7uGvSg3rCkDig)

📒 [看完这篇你一定能掌握Linux](https://mp.weixin.qq.com/s/ZralWEfG2WJfZ-G-x9biow)

📒 [ObjectMapper，别再像个二货一样一直new了](https://mp.weixin.qq.com/s/SHbt1jmgGaHQs1eeyJQ-qA)

📒 [\[科普\] Service Worker 入门指南](https://mp.weixin.qq.com/s/bYtTRjqQylYKO9D1jbadSA)

📒 [百行代码带你实现通过872条Promise/A+用例的Promise](https://juejin.cn/post/7065693195799265287)

📒 [前端历史项目的 Vite 迁移实践总结](https://mp.weixin.qq.com/s/kpi82Rb66bUQuA_G0hrqBw)

📒 [手写 css-modules 来深入理解它的原理](https://juejin.cn/post/7090686619253997599)

📒 在 Webpack 5 中开启懒编译（Lazy Compilation）

Webpack 5 的实验特性，可以针对多入口（Initial Chunk）和动态加载（Async Chunk）进行懒编译。开启懒编译之后，可以实现按需编译，提升启动速度，若再配合 Webpack 5 持久化缓存，则可以直接秒杀 Vite。

```js
module.exports = {
  // …
  experiments: {
    lazyCompilation: {
      imports: true,
      entries: true,
    },
  },
};
```

> 由于实验特性具有相对宽松的语义版本，可能会有重大的变更，所以你需要锁定 Webpack 的小版本号，例如 `"webpack": "~5.4.3"`，或者锁定版本号

[在 Webpack 5 中开启懒编译（Lazy Compilation）](https://juejin.cn/post/7090372816784064526)

📒 [浅谈文档的实时协同编辑](https://mp.weixin.qq.com/s/Ba-3fMQXNXqIzVTjVUrWtQ)

📒 [深入理解 Promise 之手把手教你写一版](https://mp.weixin.qq.com/s/_gDIO6YCswAS2dICllMG0A)

📒 [2022 年 JavaScript 开发工具的生态](https://mp.weixin.qq.com/s/ckskF06PD43KHpKAGaYmRA)

📒 [自动化生成骨架屏的技术方案设计与落地](https://mp.weixin.qq.com/s/-WHafu5z-Ap4tjrbWesnmA)
