---
slug: 1月30日内容汇总
title: 1月30日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

⭐️ [编译技术在前端的实践（二）—— Antlr 及其应用](https://juejin.cn/post/7057354419888717855)

⭐️ [编译技术在前端的实践（一）—— 编译原理基础](https://juejin.cn/post/6989509925844041742)

📒 [从零实现husky](https://juejin.cn/post/7057345959402930183)

📒 为什么 React Hook 底层使用链表而不是数组

[React Hooks 核心实现](https://juejin.cn/post/6976903535191392270)

[深入浅出 React](https://www.yuque.com/liangxinchao/react/qimukg)

[React 技术揭秘](https://react.iamkasong.com/process/fiber-mental.html#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%A3%E6%95%B0%E6%95%88%E5%BA%94)

📒 数组的 `flatMap` 方法

数组的 `[].map()` 可以实现一对一的映射，映射后的数组长度与原数组相同。有时候需要过滤掉一些元素，或者实现一对多的映射，这时候只用 `map` 就无法实现了。这种情况下就可以使用 `flatMap`：

```js
// 需要过滤掉 0，并且使其余各元素的值翻倍
const numbers = [0, 3, 6];

// 常规方法是 map 和 filter 搭配
const doubled = numbers
  .filter(n => n !== 0)
  .map(n => n * 2)

// 使用 flatMap 实现
const doubled = numbers.flatMap(number => {
  return number === 0 ? [] : [2 * number];
})
```

此外还可以实现一对多的映射：

```js
const numbers = [1, 4];
const trippled = numbers.flatMap(number => {
  return [number, 2 * number, 3 * number];
})
console.log(trippled); // [1, 2, 3, 4, 8, 12]
```

:::tip

`flatMap` 实际上是先 `map` 再 `flat`，理解了这一点就能掌握了

:::

📒 [如何用 TypeScript 配置一个 Node 项目](https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html)

📒 [Remix vs Next.js](https://remix.run/blog/remix-vs-next)

📒 [你应该知道的三个 React 组件设计模式](https://blog.openreplay.com/3-react-component-design-patterns-you-should-know-about/)

📒 [V8 Promise源码全面解读，其实你对Promise一无所知](https://juejin.cn/post/7055202073511460895)

⭐️ [60+ 实用 React 工具库，助力你高效开发！](https://juejin.cn/post/7036162494573838367)

⭐️ [写好 JSX 条件语句的几个建议](https://mp.weixin.qq.com/s/1BX5xK0wpUDBSininJbYHw)

📒 [Node.js 十大设计缺陷 - Ryan Dahl - JSConf EU](https://juejin.cn/post/7056753455074902053)

📒 [为什么说 WebAssembly 是 Web 的未来？](https://juejin.cn/post/7056612950412361741)

📒 [浅析TypeScript Compiler 原理](https://juejin.cn/post/7047329886502912030)

📒 [TypeScript 4.6 beta 发布：递归类型检查增强、参数的控制流分析支持、索引访问的类型推导](https://juejin.cn/post/7056018952098414605)
