---
slug: 1月2日内容汇总
title: 1月2日内容汇总
authors: [garfield]
tags: [NPM, Webpack, React]
---

📒 `useCallback` 使用场景

在 React 中经常需要将父组件定义的方法传入子组件（即事件钩子，也可以看作子组件状态提升到父组件），例如：

```jsx
const Parent = () => {
  const handleSearch = (val) => {
    console.log("搜索结果：", val);
  }
  
  return <Input onSearch={handleSearch} />
}

const Input = React.memo(({ onSearch }) => {
  return (
    <form onSubmit={(e) => {
      const submitData = Array.from(
        e.target.childNodes,
        item => ({ name: item.name, value: item.value })
      );
      onSearch(submitData);
    }}>
      <input type="text" name="search" />
    </form>
  )
})
```

在上面的代码中，如果父组件重新渲染，则会导致 `handleSearch` 方法重新生成，进而导致 `onSearch` prop 改变，即使子组件用了 `React.memo`，子组件还是会重新渲染。在这种情况下，就可以使用 `useCallback` 缓存函数，避免函数重复生成，进而避免子组件重复渲染，提高性能：

```jsx
const Parent = () => {
  const handleSearch = React.useCallback((val) => {
    console.log("搜索结果：", val);
  }, []);
  
  return <Input onSearch={handleSearch} />
}
```

:::tip

注意 `useCallback` 需要和 `React.memo` 一起使用。如果不用 `React.memo`，只要父组件重新渲染，即使 prop 没有改变，子组件还是会重新渲染

[React Hooks 详解 【近 1W 字】+ 项目实战](https://juejin.cn/post/6844903985338400782)

:::

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
