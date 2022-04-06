---
slug: 4月10日内容汇总
title: 4月10日内容汇总
authors: [garfield]
tags: []
---

📒 [2022 年，Babel vs TypeScript，谁更适合代码编译](https://mp.weixin.qq.com/s/JCIyV-_VfQ9iScd_xOuP8g)

📒 React 常用状态管理库

- Redux
- Mobx
- Recoil
- Hookstate
- Rematch
- Jotai
- Zustand

📒 [从源码理清 useEffect 第二个参数是怎么处理的](https://juejin.cn/post/7083230365027926053)

📒 [腾讯一面：CORS为什么能保障安全？为什么只对复杂请求做预检？](https://juejin.cn/post/7081539471585312805)

📒 如何在 Node 环境使用 ESM 模块规范

首先明确一点，Node 环境并非不支持 ESM 规范，只是没有启用而已，默认使用 CJS 规范，可通过如下方式启用：

- 单文件使用 ESM 规范，可以将该文件后缀改为 `.mjs`；
- 整个工程使用 ESM 规范，可以在 `package.json` 中配置 `"type": "module"`；

假如不想通过上述方式启用，还有一些方法：

- 通过 Webpack 等打包工具支持 ESM 模块；
- 还可以使用 `ts-node` 支持 ESM 模块（内部使用 `tsc` 进行编译）；
