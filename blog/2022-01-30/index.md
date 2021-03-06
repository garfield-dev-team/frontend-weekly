---
slug: 1月30日内容汇总
title: 1月30日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 推荐使用 stylus

推荐使用 stylus，所有的 `{}`、`:` 以及 `;` 都是可省略的：

```stylus
.page
  padding-bottom 2rem
  display block

.content-lock
  display none
  text-align center
  padding 2rem
  font-size 1em
```

> 这就类似为什么建议使用 `yaml` 替代 `json`，在 `yaml` 中不需要引号，简单省事

📒 页面性能优化技巧

分析代码执行耗时可以通过 **火焰图**，分析内存占用情况可以通过 **堆快照**。

⭐️ [react-use - 一个 React Hooks 库](https://github.com/streamich/react-use)

📒 Next.js 提供的渲染方式

- SSR: Server-side rendering (服务端渲染)
- SSG: Static-site generation (静态站点生成)
- CSR: Client-side rendering (客户端渲染)
- Dynamic routing (动态路由)
- ISR: Incremental Static Regeneration (增量静态再生)

:::tip

CSR、SSR、SSG 的区别？

CSR 是在用户浏览器端调接口请求数据进行渲染；SSR 是在用户请求页面的时候，服务器端请求数据并进行渲染；SSG 是直接在构建阶段就进行渲染，一般用于文档网站。

:::

📒 [Node 案发现场揭秘 —— 未定义 “window” 对象引发的 SSR 内存泄露](https://zhuanlan.zhihu.com/p/461945753)

📒 [从头开始，彻底理解服务端渲染原理(8千字汇总长文)](https://juejin.cn/post/6844903881390964744)

📒 [【7000字】一晚上爆肝浏览器从输入到渲染完毕原理](https://juejin.cn/post/7039036362653171742)

📒 [爆肝三天，学习Scss-看这篇就够了](https://juejin.cn/post/7055101823442485255)

⭐️ [编译技术在前端的实践（二）—— Antlr 及其应用](https://juejin.cn/post/7057354419888717855)

⭐️ [编译技术在前端的实践（一）—— 编译原理基础](https://juejin.cn/post/6989509925844041742)

📒 如何实从零实现 husky

看下如何做 **测试驱动开发**

[从零实现husky](https://juejin.cn/post/7057345959402930183)

📒 如何让一个构造函数只能用 `new` 调用

使用 ES6 class 会检查是否通过 `new` 调用，而普通构造函数不会检查是否通过 `new` 调用，这种情况下需要手动进行判断，通常都会这样做：

```js
function MyClass() {
  if (!(this instanceof MyClass)) {
    throw new Error("MyClass must call with new");
  }
  // ...
}
```

这样的话，如果不通过 `new` 调用，就会抛出异常。其实更好的方案是进行兼容处理，即不使用 `new` 调用，自动改用 `new` 调用：

```js
function MyClass() {
  if (!(this instanceof MyClass)) {
    // 如果没有使用 `new` 调用，自动改用 `new` 调用
    // 通过 `return` 中断函数执行，并返回创建的实例
    return new MyClass();
  }
  // ...
}
```

📒 为什么 React Hook 底层使用链表而不是数组

[React Hooks 核心实现](https://juejin.cn/post/6976903535191392270)

[深入浅出 React](https://www.yuque.com/liangxinchao/react/qimukg)

[React 技术揭秘](https://react.iamkasong.com/process/fiber-mental.html#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%A3%E6%95%B0%E6%95%88%E5%BA%94)

📒 React 17 架构

[图解 React 原理系列](https://github.com/7kms/react-illustration-series/tree/v17.0.1)

[React16架构](https://react.iamkasong.com/preparation/newConstructure.html)

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

⭐️ 如何编写更好的 JSX 语句

<details>

<summary>查看详情</summary>

列表不为空的时候进行渲染：

```jsx
// 注意这种写法有 bug
// 如果 data 数组为空，则会直接渲染 `0` 到页面上
{data.length && <div>{data.map((d) => d)}</div>}

// 使用 && 的时候需要手动转换布尔值
data.length > 0 && jsx
!!data.length && jsx
Boolean(data.length) && jsx
```

不要使用 `props` 传递的 React 元素作为判断条件:

```jsx
// 这样的判断不准确
// props.children 可能是一个空数组 []
// 使用 children.length 也不严谨，因为 children 也可能是单个元素
// 使用 React.Children.count(props.children) 支持单个和多个 children
// 但是对于存在多个无效节点，例如 false 无法准确判断
// 使用 React.Children.toArray(props.children) 可以删除无效节点
// 但是对于一个空片段，例如 <></> 又会被识别为有效的元素
// 所以为了避免出错，建议不要这样判断
const Wrap = (props) => {
  if (!props.children) return null;
  return <div>{props.children}</div>
};
```

重新挂载还是更新：

```jsx
// 使用三元运算符分支编写的 JSX 看上去就像完全独立的代码
{hasItem ? <Item id={1} /> : <Item id={2} />}

// 但实际上 hasItem 切换时，React 仍然会保留挂载的实例，然后更新 props
// 因此上面的代码实际上等价于下面这样
<Item id={hasItem ? 1 : 2} />

// 一般来讲不会有什么问题，但是对于非受控组件，就可能导致 bug
// 例如 mode 属性变化，会发现之前输入的信息还在
{mode === 'name'
    ? <input placeholder="name" />
    : <input placeholder="phone" />}

// 由于 React 会尽可能复用组件实例
// 因此我们可以传递 key，告诉 React 这是两个完全不一样的元素，让 React 强制重新渲染
{mode === 'name'
    ? <input placeholder="name" key="name" />
    : <input placeholder="phone" key="phone" />}

// 或者使用 && 替代三元运算符
{mode === 'name' && < input  placeholder = "name" /> } 
{mode !== 'name' && < input  placeholder = "phone" /> }

// 相反，如果在同一个元素上的逻辑条件不太一样
// 可以试着将条件拆分为两个单独的 JSX 提高可读性
<Button
  aria-busy={loading}
  onClick={loading ? null : submit}
>
  {loading ? <Spinner /> : 'submit'}
</Button>

// 可以改为下面这样
{loading
  ? <Button aria-busy><Spinner /></Button>
  : <Button onClick={submit}>submit</Button>}

// 或者使用 &&
{loading && <Button key="submit" aria-busy><Spinner /></Button>}
{!loading && <Button key="submit" onClick={submit}>submit</Button>}
```

[写好 JSX 条件语句的几个建议](https://mp.weixin.qq.com/s/1BX5xK0wpUDBSininJbYHw)

</details>

📒 [Node.js 十大设计缺陷 - Ryan Dahl - JSConf EU](https://www.youtube.com/watch?v=M3BM9TB-8yA)

📒 [为什么说 WebAssembly 是 Web 的未来？](https://juejin.cn/post/7056612950412361741)

📒 [浅析TypeScript Compiler 原理](https://juejin.cn/post/7047329886502912030)

📒 [TypeScript 4.6 beta 发布：递归类型检查增强、参数的控制流分析支持、索引访问的类型推导](https://juejin.cn/post/7056018952098414605)
