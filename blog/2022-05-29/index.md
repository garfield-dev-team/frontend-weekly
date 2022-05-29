---
slug: 5月29日内容汇总
title: 5月29日内容汇总
authors: [garfield]
tags: []
---

📒 如何将数组转为对象

之前在业务中遇到一个场景，配置 Webpack alias 的时候，会出现很多模板代码：

```js
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@foo": path.resolve(__dirname, "src/foo"),
      "@bar": path.resolve(__dirname, "src/bar"),
    }
  }
}
```

那么其实是可以通过数组的方式干掉模板代码：

```ts
function constructAlias(arr: string[]): Record<string, string> {
  return Object.fromEntries(
    arr.map(item => [
      item,
      path.resolve(cwd, item.replace(/^\@(.*?)$/, '$1'))
    ])
  );
}

const config = ['@', '@foo', '@bar'];

const res = constructAlias(config);
console.log(res);
```

> 使用数组的 `map` 方法映射出一个 entry 数组，可以表示为形如 `[key, value][]` 的结构，然后使用 `Object.fromEntries` 将 entry 数组转为对象

这里需要注意，`Object.fromEntries` 是 ES2019 语法，支持 Chrome >= 73 和 Node.js >= 12.0.0。浏览器环境问题不大，一般都会配置 Babel polyfill 兼容，但是 Node.js 环境就会出一些问题，例如一些 CI 环境的 Node.js 版本很老，就会报错进而导致构建失败。因此通常开发的话，我们应该尽量用数组的 `reduce` 替代：

```ts
function constructAlias(arr: string[]): Record<string, string> {
  return arr.reduce((accu, cur) => {
    accu[cur] = path.resolve(cwd, cur.replace(/^\@(.*?)$/, '$1'));
    return accu;
  }, {});
}
```

📒 An introductory guide to Contiuous Integration and Delivery/Deployment (CI/CD) for Frontend Develope

> https://blog.tegadev.xyz/an-introductory-guide-to-ci-cd-for-frontend-developers

📒 [基于设计稿识别的可视化低代码系统实践](https://mp.weixin.qq.com/s/JUXz9TOKbkO1oAzHjVfwnQ)

📒 [被diss性能差，Dan连夜优化React新文档](https://juejin.cn/post/7102328973820067877)

📒 [Node.js 调试一路走来经历了什么](https://juejin.cn/post/7102233142567632933)

📒 如何解决组件库打包条件引入

由于 `import` 语句必须放在顶层，不能放在条件判断中。如果同时保留两个 `import` 语句则会导致两个包都被打包进去。所以解决的方案就是在构建阶段动态修改 `import` 语句，但是需要注意两个问题：

- 要注意修改时机，假如打包工具依赖分析已经完成，这时候再修改就太迟了
- 另外还要注意不同打包工具的兼容性，如果开发 rollup 插件，可能导致 webpack、vite 等工具不兼容

因此选择开发 babel 插件，可以兼容各种打包工具。

📒 [UMI3源码解析系列之运行时插件机制](https://mp.weixin.qq.com/s/4cZ3rJz4P5bSRSeXDbFoMQ)

📒 [推荐一个前端技术选型神器](https://mp.weixin.qq.com/s/g1fr1fnGspi7SETyP9B6rA)

📒 Webpack 模块构建缓存

模块构建缓存，推荐使用 Webpack5 的 `filesystem cache`，技术更成熟，可以参考 CRA 的 Webpack 配置：

```js
module.exports = {
  cache: {
    type: 'filesystem',
    version: createEnvironmentHash(env.raw),
    cacheDirectory: paths.appWebpackCache,
    store: 'pack',
    buildDependencies: {
      defaultWebpack: ['webpack/lib/'],
      config: [__filename],
      tsconfig: [paths.appTsConfig, paths.appJsConfig].filter(f =>
        fs.existsSync(f)
      ),
    },
  },
}
```

关于持久化缓存，有两个地方需要注意：

- 默认缓存的路径是 `node_modules/.cache/webpack`，也就是说，只要删除 `node_modules`，相当于缓存也被清空了
- 本地和 CI 环境的缓存是相互独立的，本地的缓存无法在 CI 环境使用。在 CI 环境中需要使用 CI 的缓存机制

> https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js

📒 [最高性能的包管理器-pnpm](https://mp.weixin.qq.com/s/2OXIGB5qQFc2isIxhm33bg)

📒 [【第2624期】Fastify 如何实现更快的 JSON 序列化](https://mp.weixin.qq.com/s/dtmYRsThI3o_a7AWnxFkDw)

📒 如何设置 npm 私有源

在项目根目录建一个 `.yarnrc` 文件，配置如下：

```bash
# 淘宝源
registry=https://registry.npmmirror.com
# 私有源
@myscope:registry=https://mycustomregistry.example.org
```

这样的话，`package.json` 中带有 `@myscope` 前缀的依赖，例如 `@myscope/design-system` 都会从私有源下载。

📒 [前端多线程编程探索](https://juejin.cn/post/7101608088100143118)

📒 [精妙的配合！文字轮播与图片轮播？CSS 不在话下](https://mp.weixin.qq.com/s/pSoSpuLXfeghfMvEfl38WA)

📒 [并发渲染优化：让文件树的渲染又快又稳](https://mp.weixin.qq.com/s/3yy9V5HMDWPFwEf1cyL-lw)

📒 [UMI3源码解析系列之构建原理](https://mp.weixin.qq.com/s/2MsgPh9AZtUoJpsLLdOynQ)

⭐️ 看了9个开源的 Vue3 组件库，发现了这些前端的流行趋势

对包管理器的总结非常好，推荐看一下。

**npm@v3 之前**

- 嵌套结构（nest），会出现大量重复装包的问题
- 因为是树型结构，`node_modules` 嵌套层级过深，导致文件路径过长
- 模块实例不能共享，例如在两个不同包引入的 React 不是同一个模块实例

**npm@v3 / yarn**

- 分身依赖：npm@v3 使用扁平化（flat）的方式安装依赖，一定程度上解决了重复装包的问题，但是注意并没有完全解决，例如 A 和 B 依赖了不同版本的 C，会导致 C 被安装两次
- 幽灵依赖：由于使用扁平化方式安装，`package.json` 里并没有写入的包竟然也可以在项目中使用了
- 平铺减少安装没有减省时间，因为扁平化算法比较复杂，时间居然还增加了

**npm@v5 / yarn**

该版本引入了一个 `lock` 文件，以解决 `node_modules` 安装中的不确定因素。这使得无论你安装多少次，都能有一个一样结构的`node_modules`。

然而，平铺式的算法的复杂性，幽灵依赖之类的问题还是没有解决。

[看了9个开源的 Vue3 组件库，发现了这些前端的流行趋势](https://juejin.cn/post/7092766235380678687)

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
