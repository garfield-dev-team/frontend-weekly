---
slug: 5月8日内容汇总
title: 5月8日内容汇总
authors: [garfield]
tags: []
---

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

