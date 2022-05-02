---
slug: 5月8日内容汇总
title: 5月8日内容汇总
authors: [garfield]
tags: []
---

📒 浏览器 JavaScript 和 Node.js 的区别

- API 区别：浏览器 JavaScript 是面向浏览器编程，调用浏览器的 API，例如 `document`、`window`。而 Node.js 是面向操作系统编程，没有浏览器 API，相反可以调用 Node 提供的标准库，与操作系统进行交互
- 运行环境区别：浏览器 JavaScript 的特殊性（JS 代码需要经过网络请求，在客户端下载并执行），因此无法选择运行环境，需要考虑语法、API 兼容性问题，需要使用 Babel 处理。而 Node.js 通常在本地开发环境、CI 环境、服务端运行，可以控制运行环境，无需考虑兼容性问题
- 模块规范区别：浏览器原本没有模块机制，但可以自行实现模块命名空间机制（例如 `browserify`、`webpack`），从 Chrome 61 开始支持 `<script type="module">`，即浏览器原生支持 `import` 命令加载模块（需要注意这种方式也是要经过网络请求）。而 Node.js 自带了一套 CommonJS 模块机制，在 Node 14 之后支持 ES Module 规范（注意 CommonJS 仍然是默认启用的模块规范）

