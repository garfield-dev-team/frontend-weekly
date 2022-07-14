---
slug: 7月17日内容汇总
title: 7月17日内容汇总
authors: [garfield]
tags: []
---

📒 Vite 3.0 正式版发布

> https://vitejs.dev/blog/announcing-vite3.html#dev-improvements

⭐️ [Webpack5 核心原理与应用实践](https://juejin.cn/book/7115598540721618944)

📒 Webpack 特有的优化策略

由于 Webpack 出现的时候，还没有 ESM 规范，所以 Webpack 底层根据 CJS 规范实现 `__webpack_require__` 加载模块，这就导致 Webpack 打包会出现大量模板代码，增加打包后体积。相比之下，Rollup 基于 ESM 规范打包，产物代码就很干净。

**1. Scope Hoisting**

即 `作用域提升`，个人觉得这个应该是参考了 Rollup，但是 Webpack 的模块合并还是非常有限，必须是只引用了一次的模块才能合并，否则会造成模块冗余问题。

默认 `optimization.concatenateModules` 在生产环境下会启用：

```js
module.exports = {
  //...
  optimization: {
    concatenateModules: true,
  },
};
```

> https://webpack.docschina.org/plugins/module-concatenation-plugin/

**2. 确定性模块 ID**

生产环境下，Webpack 的模块 ID 默认按模块解析顺序自增，即使源码没有修改，但是有时模块 ID 会发生变化，导致哈希改变，文件缓存失效。通过配置 `moduleIds: 'deterministic'` 有利于持久化缓存：

```js
module.exports = {
  //...
  optimization: {
    moduleIds: 'deterministic',
  },
};
```

> https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids

**3. Runtime Chunk**

运行时代码单独分包，一般 SPA 应用问题不大，多页应用打包，运行时代码单独分包可以配置持久化缓存。配置 `runtimeChunk: 'multiple'` 会为每一个 Initial Chunk 添加一个 Runtime Chunk，配置 `runtimeChunk: 'single'` 则会创建一个所有 Initial Chunk 共享的 Runtime Chunk：

```js
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
  },
};
```

> https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk

📒 [MySQL Redo Log 深入探索](https://mp.weixin.qq.com/s/X1aL0qC3cslkwhThS6XidA)

⭐️ [详解 Vite 依赖预构建流程](https://mp.weixin.qq.com/s/UD0-7rWtOAxMuDpOR77gug)

⭐️ [VueUse scripts，他们都模仿过的脚本](https://mp.weixin.qq.com/s/5dXLp7NjlpVsexOGTjbJ8A)

⭐️ [【第2669期】前端开发中的流程自动化与提效实践](https://mp.weixin.qq.com/s/bRlG5tc244ZVmPdb4mjbGQ)

📒 [隔离并修复 Node 应用程序中的内存泄漏](https://www.useanvil.com/blog/engineering/isolating-memory-leak-in-node/)

📒 [硬件加速中的“层”和层叠上下文中的“层”，是一个东西吗](https://juejin.cn/post/7119136400465330184)

📒 [《Go学习路线图》带你少走弯路，Let's Go ！](https://juejin.cn/post/7119123646471208968)

📒 [前端原型链污染漏洞竟可以拿下服务器shell](https://mp.weixin.qq.com/s/zVSDbYFrRASnJCr2dJycDQ)

📒 [我在 Shopee 工作这两年](https://juejin.cn/post/7116448560568074270)

📒 [五个 React-Query 和 SWR 的小技巧](https://www.youtube.com/watch?v=JaM2rExmmqs)

⭐️ ⭐️ [「React 进阶」 React 全部 Hooks 使用大全 （包含 React v18 版本 ）](https://juejin.cn/post/7118937685653192735)

📒 [React 状态管理的新浪潮](https://frontendmastery.com/posts/the-new-wave-of-react-state-management/)

⭐️ ⭐️ [函数式编程术语](https://github.com/shfshanyue/fp-jargon-zh)
