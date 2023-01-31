---
slug: 5月22日内容汇总
title: 5月22日内容汇总
authors: [garfield]
tags: []
---

📒 PNPM 源码结构 - 前端包管理工具具有哪些功能

首先 pnpm 整个项目的主入口包文件为 `packages/pnpm` 这个包里面，这个包名称也直接叫做 `pnpm `，其中 `main.ts` 文件是其入口文件，这个文件会处理掉用户传进来的一些参数，然后根据处理后的不同的参数对各命令做一个下发执行工作，下发后的命令参数再到各个包里面去，从而执行里面对应的逻辑。

处理参数用到的包为 `@pnpm/parse-cli-args` ，它会接收到用户传递进来的命令行参数，然后将其处理成一个 pnpm 内部的统一格式，例如用户输入如下命令:

```bash
$ pnpm add -D axios
```

这里传进来的一些参数都会被 `parseCliArgs` 这个方法处理:

例如 `add` 会被处理给 `cmd` 字段，一些裸的参数例如 `axios` 会被放进 `cliParams` 这个数组中，`-D` 这个参数在 `cliOptions` 里面去。处理后的这些变量以及参数用于主入口文件后续代码执行逻辑的判断。具体的判断逻辑可以在调试的时候遇到了，再去看对应的入口逻辑判断调试即可，这里不做具体的介绍。

在 `main.ts` 中会通过调用当前包下面的 `cmd` 目录下面的方法(`pnpmCmds`)，来完成各命令的分发。

- 依赖管理：如果 cmd 值为 `add` 、`install` 、`update` 等这些涉及和依赖安装相关的包，则会走 `@pnpm/plugin-commands-installation` 这个包里面对应的子命令逻辑(基本上 pnpm 所有的核心模块都围绕依赖安装这一块展开)
- 打包发布：如果 cmd 值为 `pack` 、`publish` 这一类涉及到打包发布的包，则会走 `@pnpm/plugin-commands-publishing` 这个包的逻辑
- 命令执行：如果 cmd 值为 `run` 、`exec` 、 `dlx` 等这些和命令执行相关的方法，则会走 `@pnpm/plugin-commands-script-runners` 这个包的逻辑

📒 学习 swr 获取数据的思路

最近遇到很多列表渲染的场景，例如根据筛选项和分页参数获取列表数据。在代码中看到虽然用了 React Hooks，但是获取数据依旧是 jQuery 时代的 **命令式** 写法。

我们知道，前端框架都是数据驱动、声明式渲染的，即渲染视图不需要命令式地操作 DOM，而是声明式地修改数据就行。因此，获取数据也可以使用 **声明式** 写法，这样代码更容易维护。

```jsx
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

> https://swr.vercel.app/docs/getting-started

📒 [【第2618期】手把手教你定制一套适合团队的微前端体系](https://mp.weixin.qq.com/s/ovwjufnPmCoYNLMkv5xv2g)

📒 Vite 相关 issue 梳理

https://github.com/vitejs/vite/discussions/8232

📒 Chrome debugger 小技巧

在 Chrome 浏览器中打断点调试，此时切到控制台，可以访问断点位置上下文信息，也就是说可以访问、甚至修改变量。

⭐️ [前端必学的动画实现思路，高逼格的效果老板看了都会大声称赞](https://juejin.cn/post/7099402445989609479)

📒 [【第2617期】React 组件库 CSS 样式方案分析](https://mp.weixin.qq.com/s/LSlgpazCwtceQWjHsMPCAg)

📒 [【第2616期】解释JavaScript的内存管理](https://mp.weixin.qq.com/s/X4ni2i9bvolHGfCdf3SzIA)

📒 UMI3源码解析系列之插件化架构核心

插件机制实现的方式：

- umi：基于 tapable 的发布订阅模式，在路由、生成文件、构建打包、HTML 操作、命令等方面提供能力
- babel：基于 visitor 的访问者模式，对于 AST 的操作等
- rollup：基于 hook 的回调模式，定制构建和打包阶段的能力
- webpack：基于 tapable 的发布订阅模式，loader 不能实现的都靠它
- vue-cli：基于 hook 的回调模式，在生成项目、项目运行和 vue ui 阶段提供能力

[UMI3源码解析系列之插件化架构核心](https://mp.weixin.qq.com/s/y-6Uf1hNBF19MabHEtqnJA)

📒 [写了一个基于 MacOS + iTerm2 自动执行化执行工具](https://mp.weixin.qq.com/s/OVCWcqpMw09T7ml-mn-OcA)

📒 介绍全新的 JSX 转换

由于浏览器无法识别 JSX 语法，所以我们需要通过 Babel、TypeScript 等工具将 JSX 编译为浏览器能识别的 render 函数。在 React 17 之前，JSX 会转换为 `React.createElement(...)` 调用：

```js
import React from 'react';

function App() {
  return React.createElement('h1', null, 'Hello world');
}
```

> 正是因为 JSX 会转换为 `React.createElement(...)`，所以每个组件顶部必须导入 `React`

在 React 17 版本，React 的 package 中引入了两个新入口，这些入口只会被 Babel 和 TypeScript 等编译器使用。新的 JSX 转换不会将 JSX 转换为 React.createElement，而是自动从 React 的 package 中引入新的入口函数并调用。下方是新 JSX 被转换编译后的结果：

```js
// 由编译器引入（禁止自己引入！）
import { jsx as _jsx } from 'react/jsx-runtime';

function App() {
  return _jsx('h1', { children: 'Hello world' });
}
```

> 注意，此时源代码无需引入 React 即可使用 JSX 了！（但是如果使用 React 提供的 Hook 或其他导出，这种情况下仍需引入 React）

新的 JSX 转换对应的配置是 `runtime: "automatic"`：

```js
// babel.config.js

module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        // 新的 JSX 转换 -> automatic
        // 旧的 JSX 转换 -> classic
        runtime: "automatic"
      }
    ]
  ]
}
```

:::tip

可以直接在 Babel Playground 看编译结果：

https://babeljs.io/repl

官方文档表示，新的 JSX 转换会略微优化包体积，个人认为优化还是比较有限。虽说 `React.createElement()` 变成了更短的调用，但是又多出来一段运行时代码。

https://react.docschina.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

:::

📒 [从 Turborepo 看 Monorepo 工具的任务编排能力](https://mp.weixin.qq.com/s/OrekHmMrn8UlisTrvt3MNA)

📒 大牛书单 | 学习 Golang 资料

- Golang 入门：https://go.dev/learn/
- Golang 进阶：https://github.com/golang/go/wiki#learning-more-about-go

📒 [解决前端常见问题：竞态条件](https://mp.weixin.qq.com/s/GryL1QVARtMB8-WIzd7xQQ)

📒 React Router v6 新手指南

> https://www.youtube.com/watch?v=59IXY5IDrBA

📒 [\[调研报告\] 新一代前端构建工具汇总](https://mp.weixin.qq.com/s/jCNcAD8y3IElZN6OPv1Qfw)

📒 [Google 最新的性能优化方案，LCP 提升30%！](https://mp.weixin.qq.com/s/3v54arsDRRw6agyr3MtPRg)

📒 React useEvent：砖家说的没问题

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

[React useEvent：砖家说的没问题](https://mp.weixin.qq.com/s/-6bQKIjH6WPcfuiCFtsjng)

📒 为什么用 Vite 打包 React 组件库

- 生产环境 rollup 打包 + 开发环境 devServer
- 开发环境可以通过 `@vitejs/plugin-react` 插件支持 fast-refresh
- 生产环境默认使用 esbuild 代码压缩，效率是 terser 的 20-40 倍
- esbuild 在语法转换这块尚不完善，但是组件库打包不用考虑兼容性问题，兼容性问题交给业务项目解决
- Vite 提供了很多 esbuild 尚不支持的特性（例如 CSS 模块化等）
- 开发环境和生产环境几乎可以复用一套配置（Vite 抹平了 esbulid 和 rollup 配置差异）
