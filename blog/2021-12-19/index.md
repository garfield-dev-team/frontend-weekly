---
slug: 12月19日内容汇总
title: 12月19日内容汇总
authors: [garfield]
tags: [Webpack, Golang, NPM, React]
---

⭐️ Webpack 分包最佳实践

SplitChunksPlugin 进行分包的三要素:

1. `minChunks`: 一个模块是否最少被 minChunks 个 chunk 所引用
2. `maxInitialRequests/maxAsyncRequests`: 最多只能有 maxInitialRequests/maxAsyncRequests 个 chunk 需要同时加载 (如一个 Chunk 依赖 VendorChunk 才可正常工作，此时同时加载 chunk 数为 2)
3. `minSize/maxSize`: chunk 的体积必须介于 (minSize, maxSize) 之间

哪些应该单独分包：

1. Webpack 运行时
2. React Framework 运行时，包括 React/React-DOM 及它们所有的依赖
3. 大型库，体积特别大的库
4. 公共库，至少被 4 个 Chunk 所引用的公共模块

:::tip

Webpack 配置最佳实践，除了 Vue-cli 和 CRA 源码，还可以参考 `next.js` 源码：

https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts

:::

[Webpack 性能系列四：分包优化](https://mp.weixin.qq.com/s/LrASIdA19iwIwng29G5HpA)

📒 [【内部分享】看向未来 - 近期 TC39 提案汇总](https://mp.weixin.qq.com/s/AxwT588VKRxnlkBlXICMpQ)

📒 WebRTC 录屏技术

WebRTC 是一套基于音视轨的实时数据流传播的技术方案。通过浏览器原生 API `navigator.mediaDevices.getDisplayMedia` 方法实现提示用户选择和授权捕获展示的窗口，进而获取 stream (录制的屏幕音视流)。我们可以对 stream 进行转化处理，转成相对应的媒体数据，并将其数据存储。

```js
var promise = navigator.mediaDevices.getDisplayMedia(constraints);
```

> https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia

- [浅析Web录屏技术方案与实现](https://juejin.cn/post/7028723258019020836)
- [从0到1打造一个 WebRTC 应用](https://juejin.cn/post/6896045087659130894)
- [浅聊WebRTC视频通话](https://juejin.cn/post/7010954456548245541)

📒 Go 1.18 Beta 1 已经正支持泛型

- [Go 1.18 Beta 1 is available, with generics](https://go.dev/blog/go1.18beta1)
- [Why Generics?](https://go.dev/blog/why-generics)
- [The Go Playground](https://go.dev/play/?v=gotip)

📒 [使用Golang、Gin和React、esbuild开发的Blog](https://juejin.cn/post/7041846339189080101)

📒 使用 patch-package 修复 npm 库的紧急问题

如果使用的 npm 库有 bug，可以使用 patch-package 创建一个补丁包。

[工程化知识卡片 022: 质量保障篇之如何优雅某个 npm 库的紧急问题](https://juejin.cn/post/7029310620952428558)

📒 [5 种有趣的 useEffect 无限循环类型](https://mp.weixin.qq.com/s/WWQa4kJXAblBkZS5zx3HBw)

📒 [用 CSS 来代替 JS 的实现](https://github.com/you-dont-need/You-Dont-Need-JavaScript)

📒 [React18 新特性：transition](https://juejin.cn/post/7027995169211285512)

📒 [「2021」我给Vue.js生态贡献代码的这一年](https://juejin.cn/post/7038370502926139399)

⭐️ ⭐️ fiber：受到 Express 启发的 Web 应用框架，使用 Go 开发，与 Express 的 API 非常接近

```go
package main

import "github.com/gofiber/fiber/v2"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) error {
    return c.SendString("Hello, World 👋!")
  })

  app.Listen(":3000")
}
```

> https://github.com/gofiber/fiber

