---
slug: 12月5日内容汇总
title: 12月5日内容汇总
authors: [garfield]
tags: [Vue3, Chrome, CommonJS]
---

📒 Vue 3 技术栈

- Vue3.2：核心库
- Vite2.6：官方推出的基于 ESM 的构建工具
- vue-router-next：Vue3 官方路由
- pinia：官方推出的状态管理库
- TypeScript：静态类型检查
- Volar：Vue3 的 vscode 插件

📒 Chrome 调试小技巧

在断点位置按 F9，可以一步一步往下执行，调试源码的时候查看调用栈特别有用。当然很多时候调用栈比较复杂，这时候通过 Performance 面板的火焰图看比较直观，火焰图的宽度代表执行耗时，火焰图的高度代表调用栈的深度。

📒 CommonJS 中的模块导出

CommonJS 规范中只有一种模块导出：`module.exports` ，而 `exports` 仅仅只是 `module.exports` 的引用而已

📒 推荐两个网站

- `caniuse`：查询 api 兼容性
- `codeif`：变量命名