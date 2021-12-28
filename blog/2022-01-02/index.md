---
slug: 1月2日内容汇总
title: 1月2日内容汇总
authors: [garfield]
tags: [NPM, Webpack, React]
---

📒 [老板：你来弄一个团队代码规范！？](https://juejin.cn/post/7033210664844066853)

📒 前端工程化系列文章

> https://shanyue.tech/frontend-engineering/npm-install.html#%E4%BD%BF%E7%94%A8-npm-ci-%E6%9B%BF%E4%BB%A3-npm-i

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
