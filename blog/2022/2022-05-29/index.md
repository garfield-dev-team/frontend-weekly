---
slug: 5月29日内容汇总
title: 5月29日内容汇总
authors: [garfield]
tags: []
---

📒 [前端多线程编程探索](https://juejin.cn/post/7101608088100143118)

📒 [精妙的配合！文字轮播与图片轮播？CSS 不在话下](https://mp.weixin.qq.com/s/pSoSpuLXfeghfMvEfl38WA)

📒 [并发渲染优化：让文件树的渲染又快又稳](https://mp.weixin.qq.com/s/3yy9V5HMDWPFwEf1cyL-lw)

📒 [UMI3源码解析系列之构建原理](https://mp.weixin.qq.com/s/2MsgPh9AZtUoJpsLLdOynQ)

📒 [看了9个开源的 Vue3 组件库，发现了这些前端的流行趋势](https://juejin.cn/post/7092766235380678687)

📒 [Node.js Web 框架 Midway 入门实战](https://mp.weixin.qq.com/s/yxsiWiZi08B5tC3Ab7DKWg)

📒 [肝了一个月的 DDD，一文带你掌握](https://mp.weixin.qq.com/s/jU0awhez7QzN_nKrm4BNwg)

📒 使用 rollup 构建第三方库包括哪些过程

- 浏览器不兼容的语法转换
  - Vue 文件处理：`rollup-plugin-vue`
  - JSX、TS 语法编译：`rollup-plugin-babel`
  - 支持 CSS 加载、添加前缀、压缩、scss/less 预编译：`rollup-plugin-postcss`
- 编译兼容
  - 仅限语法转换，不建议 polyfill：`rollup-plugin-babel`
- 混淆压缩
  - 对应：`rollup-plugin-terser`
- 打包为一份文件（注意 `peerDependencies` 外部化），多种打包格式，生成类型声明文件等
- 工程质量保障，例如 ESLint、TS 类型检查、单元测试等

:::tip

前面两步可以避免业务项目的 `babel-loader` 处理 `node_modules` 下的模块，提升构建效率。

:::

📒 如何实现主题切换

关键看场景，如果需要在运行环境动态切换，就需要打包两套样式，然后通过媒体查询之类的方式进行切换。如果不需要动态切换，可以在构建的时候进行变量注入。

自己开发的组件库是否有必要设置主题？样式都不打包，less 变量注入肯定没用的；如果搞个 `theme-reset.less`，肯定会污染到全局。最好还是在业务工程里面设置主题。

📒 如何做首屏性能优化

**1. 路由懒加载**

首先想到的就是解决资源冗余问题，我们可以按需投喂 JS 资源，只把渲染当前页面需要的资源投喂给浏览器，对应的方案是路由懒加载。

**2. 分包优化**

在按需投喂 JS 资源的基础上，对于一些不需频繁修改、体积又很大的依赖进行拆包处理，例如 `react`、`react-dom`，单独分包设置强缓存。

**3. 服务端渲染**

如果按需投喂 JS 资源还是太慢，可以考虑服务端渲染（SSR），在服务端直接把当前页面的 HTML 丢给浏览器，可以理解为按需投喂 HTML 页面。

**4. 静态生成 && 混合渲染**

服务端渲染可以理解为在服务端调接口渲染出 HTML 丢给浏览器，但是这个过程还是存在性能开销。对于一些不需要动态数据的页面，例如文档、博客等，可以考虑静态生成（SSG），即在构建的时候就渲染出 HTML，可以极大提升首屏性能，当然更多时候是 SSG 和 SSR 混合渲染。

📒 [深入理解 Linux CPU 上下文切换](https://mp.weixin.qq.com/s/KwmNzTdjMB-ljQ0ysEGalg)

📒 [中后台 CSS Modules 最佳实践](https://mp.weixin.qq.com/s/qUiiUkKOyW-QnBz1WEOTwQ)

📒 [在 React 中实现条件渲染的 7 种方法](https://mp.weixin.qq.com/s/5UHSGnnAr1-j37AgJ6t0eQ)

⭐️ [2022年值得使用的 Node.js 框架](https://mp.weixin.qq.com/s/PhuFfNAhvXAqW4eSbUqpKQ)

📒 解决 Vite 无法全局启用 css module 的问题

在这里打个断点看看：

```ts title="packages/vite/src/node/plugins/css.ts:688"
const {
  modules: modulesOptions,
  preprocessorOptions,
  devSourcemap
} = config.css || {}
const isModule = modulesOptions !== false && cssModuleRE.test(id)
```

📒 `useRef` 在列表渲染场景需要特别注意

在列表渲染的时候，不能对列表的每一项使用 `ref`，否则会出现 bug。这种情况下，应该将列表的每一项封装为组件，在组件内部使用 `ref`：

```tsx
type IProps = {
  questionList: string[];
}

const App: React.FC<IProps> = ({ questionList }) => {
  const ref = React.useRef();

  return (
    <>
      {questionList.map((item, index) => (
        <div
          classNames="list-item"
          key={index}
          ref={ref}
        >
          {item}
        </div>
      ))}
    </>
  )
}
```

📒 100 行代码实现 React 路由

> https://github.com/ashok-khanna/react-snippets/blob/main/Router.js

> [精读《react-snippets - Router 源码》](https://juejin.cn/post/7100736564979826695)

📒 如何实现多行文本省略

这个功能不需要自己实现，自己实现还可能存在兼容性问题。只需要使用 antd 的 `Typography` 组件就可以了：

```tsx
import * as React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const App: React.FC<{}> = () => {
  return (
    <Paragraph
      ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
    >
      ...
    </Paragraph>
  )
}
```

📒 [HTTP 的缓存为什么这么设计](https://juejin.cn/post/7100747501338099749)

📒 [vscode插件原理浅析与实战](https://mp.weixin.qq.com/s/4MmBSD-d-9T5-kFhcWNlTA)
