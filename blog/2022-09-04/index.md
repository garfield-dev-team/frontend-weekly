---
slug: 9月4日内容汇总
title: 9月4日内容汇总
authors: [garfield]
tags: []
---

⭐️ [工厂模式有三个Level，你能用Go写到第几层](https://mp.weixin.qq.com/s/MlC6-TDf06LGpF8hxcSV_w)

📒 [TypeScript 4.8 发布！重点新特性解读](https://mp.weixin.qq.com/s/tu5bBNn3UJ5r3Z7K5eqwJw)

📒 React + TypeScript 最小知识集

```tsx
import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface HelloProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

const Hello: React.FC<PropsWithChildren<HelloProps>> = ({
  name,
  children,
  ...rest
}) => {
  return (
    <div>
      <div {...rest}>{`Hello, ${name}!`}</div>
      {children}
    </div>
  );
};
```

- `React.FC` 表示 Function Component 函数式组件
- `PropsWithChildren` 让 `props.children` 带类型
- `HTMLAttributes<HTMLDivElement>` 让 `props` 可以使用 html 属性比如 `className`

https://ente.io/blog/tech/typescript-for-react/

📒 Tauri vs. Electron

作者分别用 Tauri 和 Electron 实现了 Authme，然后从打包、启动时间、性能、后端、应用渲染、安全、自动更新、开发体验共 8 个维度进行了对比。

1、「打包」Tauri 完胜。1）尺寸上 Tauri 2.5M vs. Electron 85M，2）Tauri 的产物是二进制的，反编译解码逻辑所需成本相比 Electron 会高很多。

2、「启动时间」Tauri 胜。Tauri 2s vs. Electron 4s。

3、「性能」Tauri 完胜。

4、「后端」Electron 胜。因为 Electron 后端基于 Node，而 Tauri 基于 Rust。当然如果你会 Rust 则是另一回事。另外，Tauri 的 Roadmap 里有支持其他后端绑定的计划，比如 Deno，届时就又可以用 JavaScript/TypeScript 写后端了。

5、「应用渲染」Electron 胜。Electron 使用 Chromium，所以你的用户在 Windows、Linux 和 macOS 上看到的东西是一样的。Tauri 使用系统的 WebView，Windows 上使用 Edge Webview2（Chromium），Linux 上使用 WebKitGTK，macOS 上使用 WebKit。这里的问题是 Webkit 的支持总是落后一点，所以你可能会需要额外的补丁。

6、「安全」Tauri 胜。Tauri 内置大量安全功能，可以明确启用或禁用某些 API。Electron 中则可以完全访问 Node 的 API，所以相比来说更容易被黑客利用。

7、「自动更新」Electron 胜。Tauri 和 Electron 都内置了自动更新器，而 Tauri 的相对简单，同时需要维护依赖并手动更新 JSON，而 Electron 可基于 electron-updater 并直接从 Github 发布的二进制文件中提取，要方便很多。

8、「开发体验」Tauri 胜。基于 Tauri CLI 就会包含热重载、为所有平台构建你的应用程序、生成应用程序图标等全部功能，而 Electron 啥都没有提供，只有框架本身。

https://www.levminer.com/blog/tauri-vs-electron

📒 father 4 正式发布

father 4 的具备如下核心特性：

- **双模式构建**： 支持 Bundless 及 Bundle 两种构建模式，ESModule 及 CommonJS 产物使用 Bundless 模式，UMD 产物使用 Bundle 模式
- **多构建核心**： Bundle 模式使用 Webpack 作为构建核心，Bundless 模式使用 esbuild 及 Babel 两种构建核心，可通过配置自由切换
- **类型生成**： 无论是源码构建还是依赖预打包，都支持为 TypeScript 模块生成 .d.ts 类型定义
- **项目体检**： 对 NPM 包研发常见误区做检查，让每一次发布都更加稳健
- **微生成器**： 为项目追加生成常见的工程化能力，例如使用 jest 编写测试
- **依赖预打包**： 开箱即用的依赖预打包能力，帮助 Node.js 框架/库提升稳定性、不受上游依赖更新影响（实验性）

📒 [3种方式！Go Error处理最佳实践](https://mp.weixin.qq.com/s/Zb5zGOy_mdalUQ_Qy0HngQ)

📒 [超大体量项目，微前端落地方案，看完后悔来找我](https://juejin.cn/post/7121244973558661150)

📒 [快速搭建 SpringCloud Alibaba Nacos 配置中心！](https://mp.weixin.qq.com/s/mxGv7IdQ_KcYqja5ffhmcQ)

📒 [k8s下微前端如何做金丝雀发布](https://mp.weixin.qq.com/s/xqhMG-bB71MoIQ9R_I48gw)
