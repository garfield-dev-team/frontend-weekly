---
slug: 8月14日内容汇总
title: 8月14日内容汇总
authors: [garfield]
tags: []
---

📒 [将微前端做到极致-无界方案](https://mp.weixin.qq.com/s/hRR_sp3w_dgnUbdNXMuL7w)

📒 [【第2701期】技术Leader如何创造业务价值](https://mp.weixin.qq.com/s/9eZxW9qihgQlbBP0D0ZMQQ)

📒 [Monorepo 下的模块包设计实践](https://zhuanlan.zhihu.com/p/456483953)

📒 [【TypeScript】never 和 unknown 的优雅之道](https://mp.weixin.qq.com/s/rZ96wy8xUrx4T1qG5OKS0w)

📒 [Bundle-less 的思考和实践分享](https://mp.weixin.qq.com/s/nk5SN8AKwyFkUTEOiLCBdQ)

📒 [React Fiber架构原理剖析](https://segmentfault.com/a/1190000042271919)

📒 [【万字】优化Webpack？肘，跟我进屋聊聊](https://juejin.cn/post/7129747165794009101)

📒 [字节的前端监控 SDK 是怎样设计的](https://mp.weixin.qq.com/s/-eEMSn2WpDiMbNSBgY3-pg)

📒 [别再乱打日志了，这份 Java 日志规范，应有尽有，建议收藏！](https://mp.weixin.qq.com/s/ioDYZjdSii3WUvL9xqc_Sg)

📒 [explain | 索引优化的这把绝世好剑，你真的会用吗](https://mp.weixin.qq.com/s/l3jJHIcqMzCcezbpboqyvQ)

📒 [这11条接口性能优化技巧，利好每日睡眠](https://mp.weixin.qq.com/s/3jrf1GKBBbVzcvJxqYnx9Q)

📒 [顺丰快递：请签收MySQL灵魂十连](https://mp.weixin.qq.com/s/Y1Mh-99cgQWuCQ53wAxkUQ)

📒 [Go Mod小知识：伪版本](https://mp.weixin.qq.com/s/UL5d3P6sjT36njR4RYMFkQ)

📒 [Go ORM 单元测试全流程讲解](https://mp.weixin.qq.com/s/XPPwHd7eDUjvzsnuFwgbyw)

📒 [超全总结：Go语言如何操作文件](https://mp.weixin.qq.com/s/r30z2i_sSuRfEnM_23wFlg)

📒 React 服务端渲染遇到的问题

在服务端渲染场景下，不能使用 `style-loader`，需要用 `isomorphic-style-loader` 注入样式。

> `style-loader` 内部使用了 dom API 把样式注入到 `style` 标签中，在 Node 环境下会报错

React 期望在服务端和客户端渲染的内容是相同的，客户端渲染会默认复用服务端渲染的 dom。如果需要在服务端和客户端上渲染不同的内容，可以设置一个 `isClient` 变量：

```jsx
class MyComponent extends React.PureComponent {
  state = {
    isClient: false,
  }
  
  componentDidMount() {
    // 这里在客户端 hydrate 的时候执行
    this.setState({ isClient: true });
  }
  
  render() {
    const { isClient } = this.state;
    
    if (!isClient) {
      // 当需要渲染的组件需要访问浏览器 API，在 Node 环境会报错
      // 这里可以渲染 fallback 的内容
      return ...
    }
    
    // 在客户端可以正常渲染组件
    return ...
  }
}
```

:::tip

当需要渲染的组件需要访问浏览器 API（例如 `window`、`document`、`location`），在 Node 环境会报错。在服务端渲染的时候，可以先渲染 fallback 内容，在客户端 hydrate 的时候，再渲染正常组件。

另外有一些 SDK，内部可能也访问了浏览器 API，这种情况下不能直接在构造器中初始化实例，可以在 `componentDidMount` 钩子中延迟初始化。

:::

> https://17.reactjs.org/docs/react-dom.html#hydrate

📒 vite 代码压缩遇到的问题

vite 默认使用 esbuild 压缩，esbuild 不仅会做常规的压缩，而且还会在 `target` 配置允许的范围内做一些语法转换，进一步减小 bundle 体积。

例如在业务中有下面一段代码：

```js
try {
  // ...
} catch (err) {
  // 这边没有用到 err 参数
  return false;
}
```

经过 esbuild 压缩之后，`try...catch` 后面的括号直接不见了（这实际上是 ES2019 中的 `optional-catch-binding` 语法），在一个老业务工程构建的时候，Babel 无法识别这种语法，直接报错了：

```js
try {
  // ...
} catch {
  return false;
}
```

有两种解决方案：

- 一种是使用 terser 压缩，设置 `minify: "terser"`
- 另一种继续使用 esbuild，但是手动设置 `target: "es2015"`

> https://vitejs.dev/config/build-options.html#build-target

:::tip

在一般前端项目中，`target` 配置是针对 Babel 的，即最终的产物兼容性由 Babel 决定。

但是在 Vite 中，Babel 只参与部分 esbuild 尚不支持的提案阶段的语法转换，并不决定最终产物兼容性，最终的兼容性由 esbuild 决定。注意 esbuild 默认的 target 值为 `"esnest"`，即 esbuild 认为环境支持最新的 JS 语法特性。但是在 Vite 中，`build.target` 默认为一个特殊值 `"modules"`（即支持原生 ES Module、动态导入语法和 `import.meta` 语法，对应 Chrome >=87），最低可以支持 `"es2015"`。

注意 Vite 默认只做语法转换，并不会引入 polyfill（适合第三方库开发，由业务工程 `@babel/preset-env` 配置 `useBuiltIns: "entry"` 统一引入 polyfill）。如果产物需要直接在浏览器中运行，则需要 `@vitejs/plugin-legacy` 插件。该插件会对最终 bundle 中每个 chunk，使用 `@babel/preset-env` 转换生成对应的 legacy chunk，同时根据 `target` 配置的目标浏览器兼容性和实际用到的 API，生成一个 polyfill chunk。

https://vitejs.dev/guide/build.html#browser-compatibility

:::

📒 Golang 标准库 strings

重点看一下 `strings.Builder` 的用法。

[Go 学习之 strings.Builder 篇](https://blog.csdn.net/qq_24433609/article/details/124500115)

[Go 字符串拼接6种，最快的方式 -- strings.builder](https://www.cnblogs.com/cheyunhua/p/15769717.html)

[Go拼接字串的三种方法 Go1.10中的strings.Builder](https://blog.csdn.net/qq_41035588/article/details/108289761)

https://pkg.go.dev/strings@go1.19

📒 [你需要知道的TypeScript高级类型](https://mp.weixin.qq.com/s/usDh1-Wzxrf4BftfWhwduA)

📒 [Go 的时间转换和时区校对总记不住？给你一份备忘单](https://mp.weixin.qq.com/s/HaF9qieEJWNUoyY9qTvnKw)

📒 [两个真实线上升级故障让你彻底搞懂package.json中的脱字符(^)](https://juejin.cn/post/7121520457760653349)

📒 [【第2696期】React 状态管理的新浪潮](https://mp.weixin.qq.com/s/6Er2IQEXXNc8Sb5vVJZZOQ)

📒 [Go 创始人教你如何处理错误](https://mp.weixin.qq.com/s/X60eIQcEAJz8tvNz5qArxg)

⭐️ [总监又来了，人狠话不多，这篇 gRPC，小弟佩服！](https://mp.weixin.qq.com/s/4Sxal7N-uZ8gvphC8XWo8A)

<!--
📒 React Native Boilerplate

一款 RN 应用的初始模板

> https://github.com/thecodingmachine/react-native-boilerplate
-->

📒 React 性能优化, 从 500 毫秒到 1.7 毫秒

> https://orizens.com/blog/500ms-to-1-7ms-in-react-a-journey-and-a%20checklist/

📒 [UMD 的包如何导出 TS 类型](https://juejin.cn/post/7129520818232492040)

📒 [为什么 React 的 Diff 算法不采用 Vue 的双端对比算法](https://juejin.cn/post/7116141318853623839)

📒 [🚀Turborepo：发布当月就激增 3.8k Star，这款超神的新兴 Monorepo 方案，你不打算尝试下吗](https://juejin.cn/post/7129267782515949575)

📒 [搞清楚 Go Mod的版本和伪版本，下次别乱用了](https://mp.weixin.qq.com/s/ptJK7CDHCr6P4JCdsUXKdg)

📒 [掌握 TypeScript 中的映射类型](https://mp.weixin.qq.com/s/Nu4XCuF4d_BaAkmwRr3f4A)

📒 React Re-render 指南

什么是 re-render？什么是必要的 re-render 和不必要的 re-render？如果你对这些问题还模模糊糊的，在这篇文章中可以找到答案。

有四个原因可以让一个组件重新渲染自己：状态变化、父级（或子级）重新渲染、上下文变化和 hooks 变化。

通过 composition（组合）可以避免 re-render。有几种方式，1）把状态下移，避免上层组件 re-render，让 re-render 保持在一个很小的范围之内，2）children as props，作为 props，子组件不会受 state 变更的影响，3）component as props，避免 component re-render。

通过 React.memo 可以避免 re-render，被 memo 的组件只在 props 变更时会 re-render。有几种方式，1）对于带 props 的 component，需对非原始值的 props 做 memo，2）components as props or children，对子组件做 memo 而不要对父组件做 memo。

什么时候应该用 useMemo/useCallback？1）React.memo 过的组件的 props 应该用，因为他们只有 props 变更时才会 re-render，所以反之非 React.memo 过的组件的 props 无需使用，因为都会 re-render，用了也白用，2）useEffect、useMemo、useCallback 中非原始值的依赖应该用，3）重消耗（比如生成渲染树）的部分应该用，反之轻消耗不要用，因为 useMemo/useCallback 本身也有消耗。

如何防止 Context 引起的 re-render？1）memo context value，避免父级组件 re-render 导致 value 变更从而让依赖 context 的地方全部 re-render，2）拆分 data 和 API（getter 和 setter），这样 getter 变更时依赖 setter 的部分不会 re-render，3）把数据拆小，4）使用 context selector 比如 use-context-selector。

> https://www.developerway.com/posts/react-re-renders-guide

📒 [明明加了唯一索引，为什么还是产生重复数据](https://mp.weixin.qq.com/s/vRI-bFB4_IEaoCCQcMqZjw)

📒 [现代前端测试框架 Vitest 的一些落地实践感悟](https://mp.weixin.qq.com/s/0Jn1CHAVyX1U8RD2OUJENQ)

📒 [如何用 Project Reference 优化 tsc 编译性能](https://juejin.cn/post/7129130418657296421)
