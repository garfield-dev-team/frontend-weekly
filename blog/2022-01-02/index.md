---
slug: 1月2日内容汇总
title: 1月2日内容汇总
authors: [garfield]
tags: [NPM, Webpack, React]
---

📒 ES 新语法 `Array.prototype.groupBy`

一个专门用来做数据分组的提案 `Array.prototype.groupBy` 已经到达 `Stage 3`：

```js
const array = [1, 2, 3, 4, 5];

// groupBy groups items by arbitrary key.
// In this case, we're grouping by even/odd keys
array.groupBy((num, index, array) => {
  return num % 2 === 0 ? 'even': 'odd';
});

// =>  { odd: [1, 3, 5], even: [2, 4] }
```

> https://github.com/tc39/proposal-array-grouping

📒 [基于 Next.js 的 SSR/SSG 方案了解一下？](https://juejin.cn/post/7046204235226021901)