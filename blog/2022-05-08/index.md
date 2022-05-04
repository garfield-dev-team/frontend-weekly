---
slug: 5月8日内容汇总
title: 5月8日内容汇总
authors: [garfield]
tags: []
---

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

