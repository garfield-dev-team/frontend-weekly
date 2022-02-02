---
slug: 2月6日内容汇总
title: 2月6日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 [How To Process Images in Node.js With Sharp](https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp#step-3-resizing-changing-image-format-and-compressing-images)

📒 字节跳动开源项目

- [IconPark - 支持多种主题、跨平台的图标库](https://github.com/bytedance/IconPark)
- [xgplayer - HTML5 视频播放器](https://github.com/bytedance/xgplayer)
- [sonic - 基于 JIT 技术的开源全场景高性能 JSON 库](https://github.com/bytedance/sonic)
- [bytemd - 字节出品的 markdown 编辑器](https://github.com/bytedance/bytemd)

📒 前端项目 babel 配置

编译一个前端项目，一般需要安装如下依赖：

- `@babel/core`：核心库
- `babel-loader`：配合 Webpack 打包场景使用
- `@babel/preset-env`：语法转换的预设插件集，同时支持 api 兼容
- `@babel/preset-react`：编译 React 的 JSX 语法
- `@babel/preset-typescript`：可选，编译 TypeScript 语法

:::tip

`@babel/core` 是核心库，里面包含：

- `@babel/parser`：一个 ast 解析器，之前叫 Babylon，基于 acorn 魔改而来，负责解析生成 ast
- `@babel/traverse`：负责通过访问者模式遍历并操作 ast 节点
- `@babel/generator`：负责根据 ast 生成代码

`babel-loader` 用于配合 Webpack 打包场景使用，如果想通过命令行的方式使用，则需要安装 `@babel/cli`

`@babel/preset-env` 的 api 兼容是通过引入 `core-js` polyfill 实现的。`core-js` 引入有多种方式，可以配置 `entry`，即在入口文件处根据根据 browserslist 配置需要适配的目标环境全量引入 polyfill，也可以配置 `usage`，根据 browserslist 配置和实际用的 api 按需引入 polyfill。`@babel/preset-env` 是通过全局污染的形式引入的，一般在前端项目中没问题，但是作为第三方库就不合适了，这时候需要使用 `@babel/plugin-transform-runtime` 通过沙箱机制引入 polyfill，这种引入方式有个缺点，无法根据 browserslist 配置动态调整引入的 polyfill。

`@babel/preset-typescript` 实际上就是简单删除掉类型注解。因为 Babel 是单文件处理，不可能进行类型检查，类型检查可以交给 VSCode 插件，或者 `ForkTsCheckerWebpackPlugin` 单独起一个进程进行类型检查，这时候 tsc 的作用就是类型检查器，需要配置 `"noEmit": true`。

:::

📒 写文章集合

- Redux 在完善下，增加 UI-binding
- 深入源码分析 Koa 中间件与洋葱圈模型
- 前端项目的 env 文件是如何被加载的
- Webpack 打包的图片和字体的哈希是如何生成的 - file-loader 源码分析
