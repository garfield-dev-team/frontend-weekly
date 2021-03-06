---
slug: 1月2日内容汇总
title: 1月2日内容汇总
authors: [garfield]
tags: [Next.js, ESNext, React, Vue, Node.js, Performance, VS Code, Git, Yarn2, Code Review]
---

import Illustration from "@site/src/components/MDXComponents/Illustration";
import performanceImg from "./performance.png";
import performance2Img from "./performance2.png";
import renderingImg from "./rendering.png"

📒 [clsx：classnames 的替代方案](https://github.com/lukeed/clsx)

📒 TS 类型系统实现大数相加

一位数相加，总共只有 100 种情况，为了提高性能，可以选择 **打表** 。

[用 TS 类型系统实现大数加法](https://juejin.cn/post/7020663312393764871)

📒 [盘点那些让开发效率翻倍的React Hook](https://juejin.cn/post/7046566841522585636#heading-3)

⭐️ [ESM 与 CJS 的 Interop 来世今生](https://mp.weixin.qq.com/s/3TKcUeoyzXvH3MGVI6Dj9A)

📒 浏览器渲染中的合成层与 `will-change`

合成就是将页面的各个部分分成多个层、单独 `光栅化`（浏览器根据文档的结构、每个元素的样式、页面的几何形状和绘制顺序转换为屏幕上的像素的过程）它们并在合成器线程中合成为一个页面的技术。

一般来说，拥有一些特定属性的渲染层，会被浏览器自动提升为合成层。合成层拥有单独的图层（GraphicsLayer），和其他图层之间无不影响。而其它不是合成层的渲染层，则和第一个拥有图层的父层共用一个，也就是普通文档流中的内容，我们看一些常见的提升为合成层的属性。

- 设置 `transform: translateZ(0)`
- `backface-visibility: hidden` 指定当元素背面朝向观察者时是否可见
- `will-change` 该属性告诉浏览器该元素会有哪些变化，这样浏览器可以提前做好对应的优化准备工作
- `video`、`canvas`、`iframe` 等元素

:::tip

**使用 transform 和 opacity 来实现动画**

在开发中经常会实现一些动画，有时候我们可能会选择改变 top/left 去实现，那么这个节点的渲染会发生在普通文档流中。而使用 `transform` 和 `opacity` 实现动画能够让节点被放置到一个独立合成层中进行渲染绘制，动画不会影响其他图层，并且 GPU 渲染相比 CPU 能够更快，这会让你的动画变的更加流畅。

按照下面的操作打开查看帧率的界面：

<Illustration src={renderingImg} />

通过 `transform` 来实现动画，页面的 `fps` 能够稳定在 60 左右，而通过 `left` 来实现存在波动，`fps` 大概稳定在 30 左右，这会影响你的用户体验指标。

:::

[浏览器渲染魔法之合成层](https://juejin.cn/post/7047006440623439880)

⭐️ [前端 Code Review 不完全指北(万字长文，50+case)](https://zhuanlan.zhihu.com/p/396010993)

📒 Node.js 相关

Node.js 适合 IO 密集型任务，例如处理网络请求、文件 IO 等等；

Node.js 不适合 CPU 密集型任务，例如 MD5、SHA 加密算法等；

📒 [升级Yarn 2，摆脱node_modules](https://segmentfault.com/a/1190000040520326)

📒 什么是 `inode`

`inode` (index nodes) 是操作系统中重要的概念，是一种文件数据结构，用于存储有关除名称和数据之外的任何 Linux 文件的信息。

[软链接&硬链接在前端中的应用](https://juejin.cn/post/7047429181021356062)

📒 [gitlab上代码回滚把自己坑了后, 陷入思考🤔"bug是谁"?](https://segmentfault.com/a/1190000041182817)

⭐️ 提交代码的时候使用 rebase

一般提交代码都是先本地 `commit`，然后执行 `git pull` 将仓库的代码拉取到本地 merge，然后再 `push` 到仓库。这样会导致时间线很不干净，提交记录中混杂很多 merge 分支的无用记录。

在拉取仓库代码的时候，我们可以不进行合并，而是使用 rebase（变基），直接把我们原先的基础变掉，变成以别人修改过后的新代码为基础，把我们的修改在这个新的基础之上重新进行。使用变基之后，就可以使我们的时间线变得非常干净。

[两条命令让你的git自动变基](https://segmentfault.com/a/1190000040712052)

📒 如何使用 VS Code 任务

开发经典模式：从主仓库 fork => 从个人仓库提 Merge Request

[【手把手】学会VS Code"任务"神技，成为项目组最靓的崽！](https://juejin.cn/post/7035448197883363359)

📒 如何分析每行代码的执行耗时

首先使用 Performance 工具分析页面性能。

> 在分析性能的时候，为排除插件的影响，需要启用无痕模式

在火焰图中找到长任务，点击顶部 Task，点击 Button-Up，这时候可以看到根据耗时列出的调用栈：

<Illustration src={performanceImg} />

找到那个执行耗时最长的，然后点击右侧源码地址，可以跳到 source 对应的源码：

<Illustration src={performance2Img} />

📒 关于数组遍历方法的比较

- 相比 `forEach`，`map` 性能略差一些，因为需要创建新数组
- 数据量大的时候，手写 `for` 循环性能明显优于 `forEach` 和 `map`
  - 倒序 `for` 循环性能最好，因为只访问了一次 `array.length`
    ```js
    // 正序
    for (let i=0; i<arr.length; i++)
    // 倒序
    for (let i=arr.length-1; i>=0; i--)
    ```
  - 如果想提升正序遍历性能，可以这样写
    ```js
    for (let i=0, len=arr.length-1; i<len; i++)
    ```
  - 无论遍历数组还是对象，都尽量少用 `for...in` 循环，性能比较烂
- 无论 `new Array()` 还是 `Array.from()` 性能都不如写一个 `for` 循环往空数组里面 `push`
- 另外不推荐使用 `[].fill()` 方法，TS 无法推导类型，建议使用 `Array.from({length: 10}, () => 1)` 的方式

📒 如何指定一个项目所需的 node 最小版本

指定一个项目所需的 node 最小版本，这属于一个项目的质量工程。我们可以在 `package.json` 中的 `engines` 字段中指定 Node 版本号：

```json
{
  "engines": {
    "node": ">=14.0.0"
  }
}
```

如果本地运行的 Node 版本不匹配，yarn 将会报错，npm 则会打印警告信息。`engines` 字段不仅可以用于前端项目，也可用于第三方库。

:::tip

如果项目的 `package.json` 中没用 `engines` 字段，可查看 Dockerfile 中 node 镜像确定项目所需的 node 版本号。

:::

📒 Vue SFC playground

https://sfc.vuejs.org/

> 研究下插槽的实现

📒 写一个 Vue3 自定义指令

Vue 自定义指令的范式：

```js
const lazyPlugin = {
  install (app, options) {
    app.directive('lazy', {
      // install 方法的第一个参数可以拿到 Vue 构造器
      // 这块可以参考 Vue.use 源码
    })
  }
}

export default lazyPlugin
```

在项目中使用如下：

```js
import { createApp } from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'

createApp(App).use(lazyPlugin, {
  // 添加一些配置参数
})
```

[手把手带你写一个 Vue3 的自定义指令](https://juejin.cn/post/7035916879092776968)

📒 [揭秘 Vue.js 九个性能优化技巧](https://juejin.cn/post/6922641008106668045)

📒 [2020最新React Hooks+TS项目最佳实践](https://juejin.cn/post/6898865634982297613)

📒 [「react进阶」一文吃透react-hooks原理](https://juejin.cn/post/6944863057000529933)

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
