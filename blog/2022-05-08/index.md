---
slug: 5月8日内容汇总
title: 5月8日内容汇总
authors: [garfield]
tags: []
---

📒 从零开始构建 JavaScript Bundler

Jest 作者的最新系列文章，并且配套视频，内容绝对硬核。

> https://cpojer.net/posts/building-a-javascript-bundler

📒 JavaScript 框架的四个时代

这篇文章作者以自身多年的开发经历还原了 JavaScript 框架的发展历程，并划分出了四个时代。

远古时代：无框架
框架初期：Backbone.js、Angular 1、Knockout.js、SproutCore、Ember.js、Meteor.js
以组件为中心的时代：React.js、Vue.js、Svelte、Polymer.js
全栈框架：Next.js、Nuxt.js、Remix、SvelteKit、Gastby 和 Astro

> https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks

📒 pnpm v7.0.0

pnpm 发布了 v7.0.0，带来了大量的更新。如：不再支持 Node.js 12、`pnpm run <script>` 脚本名称后的所有命令行参数都会传递给 argv 等等。

> https://github.com/pnpm/pnpm/releases/tag/v7.0.0

⭐️ 2022 年的前端行业，咋样啦

ESR（Edge Side Rendering，边缘渲染）是最近的一大热门趋势，可以直接在 CDN 级别实现按需渲染。Nuxt 3、Remix 以及 Sveltekit 等框架都在朝着这个方向发展，目测会在未来的一到两年会成为一大焦点。

[2022 年的前端行业，咋样啦](https://mp.weixin.qq.com/s/SLi0MQru1bh539ricvQCew)

📒 [docker-node - Node.js 官方 Docker 镜像](https://github.com/nodejs/docker-node#create-a-dockerfile-in-your-nodejs-app-project)

📒 JS 新的日期 API：Temporal

这项特性提案时间为 2021 年 7 月，不到一年的时间已经进展到 stage-3 阶段，目前组委会已经在在做它的功能实现，有望在下个版本推出。

:::tip

该项提案的初衷来自这篇文章，因为 JavaScript 最初关于日期的实现是照搬的 Java 方案，但由于各种限制和问题，Java 早在 1997 年就实现 Calendar 做了功能改进，而 JavaScript 时至今日用的还是老旧方案，改进优化实在是迫在眉睫。

https://maggiepint.com/2017/04/09/fixing-javascript-date-getting-started/

:::

官方文档（打开控制台就可以体验 Polyfill）：

> https://tc39.es/proposal-temporal/docs/

或者在 RunKit 上体验（浏览器端运行 node 模块）：

> https://npm.runkit.com/proposal-temporal

📒 [【工程化】探索webpack5中的Module Federation](https://mp.weixin.qq.com/s/zt7x2KjMT_cWvLVVa2-Hww)

📒 [我们如何使用 Webpack 将启动时间减少 80%](https://mp.weixin.qq.com/s/xd6hjcxCm5dpRF95QawmxA)

📒 [React官方团队出手，补齐原生Hook短板](https://juejin.cn/post/7094424941541457933)

📒 [你可能并没有理解的 babel 配置的原理](https://juejin.cn/post/7094296981001994277)

📒 [前端抢饭碗系列之Docker进阶部署](https://juejin.cn/post/7083009375387779085)

📒 [前端抢饭碗系列之初识Docker容器化部署](https://juejin.cn/post/7069609959985512484)

📒 [从零开始发布自己的NPM包](https://juejin.cn/post/7052307032971411463)

⭐️ [Umi 4 特性合集，比 Vite 还要快？](https://mp.weixin.qq.com/s/-B5M7pjIWZzFNvq-hyr1Mw)

📒 [HTTP分块传输 如何在 React18 中应用](https://mp.weixin.qq.com/s/1QZ37jf_6av1i_ESTPvfaQ)

📒 [下集」React性能优化，你需要知道的一切](https://www.bilibili.com/video/BV1j44y1g74m)

📒 htmlparser2 8.0：快速且高容错的 HTML 和 XML 解析器

> https://github.com/fb55/htmlparser2

📒 Node v18 test 模块

注意 Node v18 test 模块是第一个 Prefix-Only Core Modules，也就是说加载该模块必须带上 `node:` 前缀：

```js
import test from 'node:test';  // Uses the node: prefix. Loads from core.
import assert from 'assert';  // Does not use the node: prefix. Loads from core.
```

:::tip

假如没有带上 `node:` 前缀，则会尝试从用户空间加载 `test` 模块。但是对于 Node 其他内置模块来说，加不加 `node:` 前缀都是一样的。

> https://fusebit.io/blog/node-18-prefix-only-modules/

:::

📒 Node v16.15.0 (LTS) 发布

现在 Node v16 可以使用实验性支持的 Fetch API 了

> https://nodejs.org/en/blog/release/v16.15.0/

📒 升级到 React 18 所对应的 TypeScript 类型定义的改动

> https://blog.logrocket.com/upgrading-react-18-typescript/

📒 如何理解 React Hooks 的闭包陷阱

函数组件更新，实际上就是函数重新执行，生成一个新的执行上下文，所有变量、函数重新创建，hooks 重新执行。

一般来说，当函数执行完毕，内部的变量就会销毁、被垃圾回收机制回收。当然也有例外情况，在下面的代码中，函数 `baz` 依赖了 `bar` 内部的变量 `a`，并且 `baz` 作为返回值传递给了 `foo`，因此 `a` 并不会被垃圾回收机制回收，而是会作为闭包缓存下来。只要 `foo` 的引用不解除，`a` 就会一直缓存：

```js
function bar() {
  const a = 1;
  return function baz() {
    console.log(a);
  }
}

const foo = bar();
```

再来看这个场景：`useEffect` 的回调函数依赖了 state 变量，而我们知道这个回调函数在下次 rerender 之前都是缓存在 fiber 节点上的，这样一来就创建了闭包，即使函数组件已经执行完毕，但是 state 变量仍会被缓存下来。

当组件更新的时候，会生成一个新的执行上下文，state 变量也会重新生成，但是 `useEffect` 回调函数仍然引用了旧的闭包。但是为什么 `useEffect` 依赖项变化、回调函数执行的时候，总是可以获取到新的值呢？这是因为每次函数组件重新渲染，`useEffect` 都会重新执行，回调函数也会重新生成（但不一定都会执行），在 `updateEffectImpl` 内部用重新生成的函数替换了 fiber 节点缓存的函数，这样一来，回调函数执行的时候，始终都能获取到最新的值了。

你可能会觉得这样没什么问题，但是如果在 `useEffect` 中使用定时器，大概率都会遇到闭包陷阱。

另一个会遇到闭包陷阱的是 `useCallback`。很多同学觉得 `useCallback` 依赖项似乎没什么用，习惯性传递空数组，这就会导致函数一直被缓存，假如内部依赖了 state 变量，则始终会缓存旧的闭包。正确做法应该是把 state 变量添加到依赖项数组中，在 state 改变的时候重新生成函数，这样就可以获取到最新的值。

:::tip

函数组件 rerender 过程中，缓存状态的 fiber 节点（相当于组件实例）并不会销毁，但函数组件是重新执行了，会生成一个新的上下文环境，如果 useEffect 回调依赖了 state 变量，则会一直缓存旧的闭包。所以要避免闭包陷阱，只需要 **保证每次渲染的时候，函数都重新生成** 就行。

:::

📒 TypeScript 小技巧：常量断言

在讲常量断言之前，先提一下，TS 会区别对待可修改和不可修改的值的类型推断：

```ts
// 推断成单值类型 'dbydm'
const immutable = 'dbydm';

// 推断成通用的 string 类型
let mutable = 'dn';

// 由于对象的属性都具有可修改性，TS 都会对它们「从宽」类型推断
// 例如下面的 prop 的类型被推断为 string
const obj = { prop: 'foo' }
```

再来看下面的代码，例如我们实现了一个用 ref 维护状态的 hook：

```ts
import * as React from "react";

const useRenderlessState = <T>(initialState: T) => {
  const stateRef = React.useRef(initialState);

  const setState = (nextState: T) => stateRef.current = nextState;

  return [stateRef.current, setState];
}
```

此时我们会发现上面 hook 的返回值的类型被推导成了如下的数组类型：

```ts
(T | ((nextState: T) => T))[]
```

这就导致我们在使用的时候无法对它进行准确的解构：

```ts
const [value, setValue] = useRenderlessState(0);
```

一般来说我们可以 **显示声明返回类型** 或者 **对返回值做类型断言**，告诉 TS 返回值类型是元组而不是数组：

```ts
// 显示声明返回类型
const useRenderlessState = <T>(initialState: T): [T, (nextValue: T) => T] => {/*...*/}

// 对返回值对类型断言
const useRenderlessState = <T>(initialState: T) => {
  // ...
  return [state, setState] as [typeof value, typeof setValue];
}
```

上面的两种写法都各有冗余成分，算不上优雅。

其实从语义层面来分析，TS 之所以没能将返回值推断为元组类型是因为它认为该返回值仍有可能被 push 值，被修改。所以我们真正需要做的是告诉 TS，这个返回值是一个 final，其本身和属性都是不可篡改的，而这正是常量断言所做的事。

常量断言可以把一个值标记为一个不可篡改的常量，从而让 TS 以最严格的策略来进行类型推断：

```ts
const useRenderlessState = <T>(initialState: T) => {
  // ...
  return [state, setState] as const
}
```

这下 `useRenderlessState` 的返回类型就被推断成了如下的 readonly 值：

```ts
readonly [T, (nextState: T) => T]
```

:::tip

`as const` 与 ES6 `const` 常量声明的区别：

- `const` 常量声明是 ES6 的语法，对 TS 而言，它只能反映该常量本身是不可被重新赋值的，它的子属性仍然可以被修改，故 TS 只会对它们做松散的类型推断
- `as const` 是 TS 的语法，它告诉 TS 它所断言的值以及该值的所有层级的子属性都是不可篡改的，故对每一级子属性都会做最严格的类型推断（所有的字面量都会被推断为单值类型）

常量断言可以让我们不需要 `enum` 关键字就能定义枚举对象：

```ts
const EnvEnum = {
  DEV: "development",
  PROD: "production",
  TEST: "test",
} as const;
```

:::

[TypeScript 夜点心：常量断言](https://zhuanlan.zhihu.com/p/121558249)

📒 了解 `Symbol.toStringTag` 的用法吗

`Symbol.toStringTag` 是一个内置 symbol，它通常作为对象的属性键使用，对应的值是字符串类型，用来表示该对象的自定义类型标签。通常只有内置的 `Object.prototype.toString()` 方法会去读取这个标签并把它包含在自己的返回值里。

```js
const foo = {};
const bar = {
  [Symbol.toStringTag]: "测试内容"
}

foo.toString(); // '[object Object]'
bar.toString(); // '[object 测试内容]'
```

[Symbol.toStringTag - MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)

📒 函数组合中的 `compose`、`flow`、`pipe`

`compose` 实现如下，注意调用顺序是反过来的：

```js
const compose = (...fns) => x0 => fns.reduceRight(
    (x, f) => f(x),
    x0
);

// 接受参数后，返回一个待执行函数
// 需要再接受一个初始值才开始执行
const processComment = compose(
    linkify,
    imagify,
    emphasize,
    headalize
);
```

`flow` 实现如下，注意这里调用顺序是从左到右：

```js
const flow = (...fns) => x0 => fns.reduce(
    (x, f) => f(x),
    x0
);

// 注意这里仍然是返回一个待执行函数
const processComment = flow(
    headalize,
    emphasize,
    imagify,
    linkify,
    codify
);
```

`pipe` 实现如下，调用顺序也是从左到右：

```js
// 注意 pipe 直接执行所有的函数，返回一个值
// 而 flow 返回一个待执行函数，需要再接受一个初始值才开始执行
const pipe = (x0, ...fns) => fns.reduce(
    (x, f) => f(x),
    x0
);

const map    = f => arr => arr.map(f);
const filter = p => arr => arr.filter(p);
const take   = n => arr => arr.slice(0, n);
const join   = s => arr => arr.join(s);

const comments = pipe(commentStrs,
    filter(noNazi),
    take(10),
    map(emphasize),
    map(itemize),
    join('\n'),
);
```

[什么是 JavaScript 的函数组合](https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/)

📒 基于依赖倒置原则实现插件机制

依赖倒置原则（DIP）

> 核心思想：依赖一个抽象的服务接口，而不是去依赖一个具体的服务执行者，从依赖具体实现转向到依赖抽象接口，倒置过来

例如在 Webpack 中包含一套插件机制：

```js
module.exports = {
  // ...
  plugins: [
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      title: "React App",
      filename: "index.html",
    })
  ]
}
```

Webpack 插件需要实现一个统一的接口，即：

```ts
interface IPlugin {
  apply(compiler: ICompiler): void;
}

class MyPlugin implements IPlugin {
  constructor() {
    // 构造器可以在初始化的时候接受配置参数
  }

  @Override
  apply(compiler) {
    // ...
  }
}
```

这样 Webpack 只需要遍历 `plugins` 数组，顺次调用每个插件上的 `apply` 方法，传入 `compiler` 对象即可：

```ts
plugins.forEach(plugin => plugin.apply(compiler));
```

顺便提一下，有同学会问，为啥插件要写成 class 的形式，直接用一个对象可以吗，例如：

```ts
const MyPlugin = {
  apply(compiler) {
    // ...
  }
}
```

> 直接用一个对象也是可以的，但是用 class 显然更灵活，可以在初始化的时候接受配置参数

📒 浏览器 JavaScript 和 Node.js 的区别

- API 区别：浏览器 JavaScript 是面向浏览器编程，调用浏览器的 API，例如 `document`、`window`。而 Node.js 是面向操作系统编程，没有浏览器 API，相反可以调用 Node 提供的标准库，与操作系统进行交互
- 运行环境区别：浏览器 JavaScript 的特殊性（JS 代码需要经过网络请求，在客户端下载并执行），因此无法选择运行环境，需要考虑语法、API 兼容性问题，需要使用 Babel 处理。而 Node.js 通常在本地开发环境、CI 环境、服务端运行，可以控制运行环境，无需考虑兼容性问题
- 模块规范区别：浏览器原本没有模块机制，但可以自行实现模块命名空间机制（例如 `browserify`、`webpack`），从 Chrome 61 开始支持 `<script type="module">`，即浏览器原生支持 `import` 命令加载模块（需要注意这种方式也是要经过网络请求）。而 Node.js 自带了一套 CommonJS 模块机制，在 Node 14 之后支持 ES Module 规范（注意 CommonJS 仍然是默认启用的模块规范）

