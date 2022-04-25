---
slug: 5月1日内容汇总
title: 5月1日内容汇总
authors: [garfield]
tags: []
---

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
