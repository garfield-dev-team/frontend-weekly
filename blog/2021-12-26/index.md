---
slug: 12月26日内容汇总
title: 12月26日内容汇总
authors: [garfield]
tags: [Webpack, Golang, NPM, React]
---

📒 看火焰图分析调用栈的时候，看到一个 `asyncGeneratorStep` 的函数，一直没搞清楚这个在哪里用到了

![image](./POPO20211223-201441.png)

事后才想到这是 babel 语法转换引入的 helper 函数

![image](./POPO20211223-113701.png)

📒 使用 webpack-chain 对 vue-cli 默认配置进行修改

> https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans

📒 如何对 webpack 打包产物进行分析

经常需要分析打包产物的体积，看哪个包体积过大，做针对性优化。可以使用 Webpack Bundle Analyzer：

```bash
$ yarn add webpack-bundle-analyzer -D
```

在 `webpack.config.js` 中添加如下配置：

```js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

然后执行打包构建命令：

```bash
$ yarn build --report
```

> https://github.com/webpack-contrib/webpack-bundle-analyzer

📒 create-react-app 发布 5.0 版本

本次的 5.0 版本优化了快速刷新(Fast Refresh)，支持了 Tailwind，并更新了不少内部依赖库，如 Webpack 5、Jest 27 和 EsLint 8 等。

> https://github.com/facebook/create-react-app/releases/tag/v5.0.0

📒 处理你应用中的内存泄漏

作者 Stoyan 提到：“任何大小合理的应用中，都会存在一定程度的内存泄漏”。因此知道如何处理泄漏是一件很有用的事。在本文中，作者举了一个 React 中的例子，不过它的基本理念却可以运用在任何地方。

> https://calendar.perfplanet.com/2021/plugging-memory-leaks-in-your-app/

📒 kalidokit：人体动作表情解读同步

效果还是和牛逼的，真人测试。

> https://github.com/yeemachine/kalidokit

📒 xterm：把命令行搬到浏览器

> https://xtermjs.org/

📒 microdiff：轻量快速的对比库

> https://github.com/AsyncBanana/microdiff


