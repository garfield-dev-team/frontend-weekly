---
slug: 5月22日内容汇总
title: 5月22日内容汇总
authors: [garfield]
tags: []
---

📒 大牛书单 | 学习 Golang 资料

- Golang 入门：https://go.dev/learn/
- Golang 进阶：https://github.com/golang/go/wiki#learning-more-about-go

📒 [解决前端常见问题：竞态条件](https://mp.weixin.qq.com/s/GryL1QVARtMB8-WIzd7xQQ)

📒 React Router v6 新手指南

> https://www.youtube.com/watch?v=59IXY5IDrBA

📒 React 团队提出一款新的基础 hook：`useEvent`，现处于 RFC 阶段

useEvent 会将一个函数「持久化」，同时可以保证函数内部的变量引用永远是最新的。如果你用过 ahooks 的 `useMemoizedFn`，实现的效果是几乎一致的。再强调下 `useEvent` 的两个特性：

- 函数地址永远是不变的
- 函数内引用的变量永远是最新的

通过 `useEvent` 代替 `useCallback` 后，不用写 `deps` 函数了，并且函数地址永远是固定的，内部的 state 变量也永远是最新的。

useEvent 的实现原理比较简单：

```js
function useEvent(handler) {
  const handlerRef = useRef(null);

  // 用于确保函数内引用的变量永远是最新的
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  // 用于确保返回的函数地址永远不变
  return useCallback((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}
```

📒 [\[调研报告\] 新一代前端构建工具汇总](https://mp.weixin.qq.com/s/jCNcAD8y3IElZN6OPv1Qfw)

📒 [Google 最新的性能优化方案，LCP 提升30%！](https://mp.weixin.qq.com/s/3v54arsDRRw6agyr3MtPRg)

📒 [React useEvent：砖家说的没问题](https://mp.weixin.qq.com/s/-6bQKIjH6WPcfuiCFtsjng)

📒 为什么用 Vite 打包 React 组件库

- 生产环境 rollup 打包 + 开发环境 devServer
- 开发环境支持 fast-refresh
- 生产环境默认使用 esbuild 代码压缩
- esbuild 在语法转换这块尚不完善，但是组件库打包不用考虑兼容性问题，兼容性问题交给业务项目解决
