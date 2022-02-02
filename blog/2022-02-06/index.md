---
slug: 2月6日内容汇总
title: 2月6日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

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

`babel-loader` 用于配合 Webpack 打包场景使用，如果想通过命令行的方式使用，则需要安装 `@babel/cli`

`@babel/core` 是核心库，里面包含：

- `@babel/parser`：一个 ast 解析器，负责解析生成 ast
- `@babel/traverser`：负责通过访问者模式遍历 ast 节点
- `@babel/generator`：负责根据 ast 生成代码

:::

📒 写文章集合

- Redux 在完善下，增加 UI-binding
- 深入源码分析 Koa 中间件与洋葱圈模型
- 前端项目的 env 文件是如何被加载的
- Webpack 打包的图片和字体的哈希是如何生成的 - file-loader 源码分析
