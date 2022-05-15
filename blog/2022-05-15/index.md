---
slug: 5月15日内容汇总
title: 5月15日内容汇总
authors: [garfield]
tags: []
---

📒 [React如何原生实现防抖](https://juejin.cn/post/7097406514360483877)

📒 [你想知道vite核心原理吗，我来手写告诉你（80行源代码）](https://juejin.cn/post/7096070620105932813)

📒 [Rust 入门 - 资源与生命周期](https://juejin.cn/post/7094909263847358472)

📒 [The Ultimate Guide To Software Engineering](https://dev.to/wiseai/the-ultimate-guide-to-software-engineering-545e)

📒 [Tree shaking问题排查指南来啦](https://mp.weixin.qq.com/s/P3mzw_vmOR6K_Mj-963o3g)

📒 [\[科普\] JS中Object的keys是无序的吗](https://mp.weixin.qq.com/s/qyyrQNC6q6p496OdZIQ6ew)

📒 [如何设计更优雅的 React 组件](https://mp.weixin.qq.com/s/FPupefVg4zphOfIERZOvHQ)

📒 代码覆盖率在性能优化上的一种可行应用

由于 JS 资源需要通过网络加载，代码的体积直接影响页面加载性能。很多时候我们“喂”给浏览器的代码，并不会全部执行，因此我们可以做分包优化，即 code-spliting，只“喂”给浏览器渲染当前页面所需的资源。

注意区分以下两个概念：

- Dead code
  
  也叫无用代码，这个概念应是在编译时静态分析出的对执行无影响的代码。通常我们用 Tree Shaking 在编译时移除这些 dead code 以减小代码体积。

- 冗余代码

  代码覆盖率中的概念，适用于运行时，而 Dead code 适用于编译时。Dead code 是任何情况下都不会执行的代码，所以可以在编译阶段将其剔除。冗余代码是某些特定的业务逻辑之下并不会执行到这些代码逻辑（比如：在首屏加载时，某个前端组件完全不会加载，那么对于“首屏”这个业务逻辑用例来讲，该前端代码就是冗余的）。

如何进行合理分包呢？这就需要统计代码覆盖率。代码覆盖率（Code coverage）是软件测试中的一种度量指标。即描述测试过程中（运行时）被执行的源代码占全部源代码的比例。

如何统计代码覆盖率：

**1. Chrome 浏览器 Dev Tools**

chrome 浏览器的 DevTools 给我们提供了度量页面代码（JS、CSS）覆盖率的工具 Coverage。使用方式：Dev tools —— More tools —— Coverage

由于一般都会对 JS、CSS 资源进行混淆压缩，因此建议导入 Source Map 以便查看源代码的覆盖率。

**2. Istanbul（NYC）**

Istanbul或者 NYC(New York City，基于 istanbul 实现) 是度量 JavaScript 程序的代码覆盖率工具，目前绝大多数的node代码测试框架使用该工具来获得测试报告，其有四个测量维度：

- line coverage（行覆盖率）：每一行是否都执行了 【一般我们关注这个信息】
- function coverage（函数覆盖率）：每个函数是否都调用了
- branch coverage（分支覆盖率）：是否每个 if 代码块都执行了
- statement coverage（语句覆盖率）：是否每个语句都执行了

缺点：目前使用 istanbul 度量网页前端JS代码覆盖率没有非侵入的方案，采用的是在编译构建时修改构建结果的方式埋入统计代码，再在运行时进行统计展示。

我们可以使用 babel-plugin-istanbul 插件在对源代码在 AST 级别进行包装重写，这种编译方式也叫 代码插桩 / 插桩构建（instrument）。

[代码覆盖率在性能优化上的一种可行应用](https://mp.weixin.qq.com/s/VQq3Ly3ZEAFpYVIvV3Uhiw)

📒 使用 DefinePlugin 遇到的问题

在开发一个组件库，需要区分运行环境，根据环境打包相应的模块代码。根据 Webpack 代码优化（生产环境默认启用）的时候，terser 会做 DCE（无用代码移除）处理，进而优化打包体积：

```js
// 在 Webpack 代码优化的时候
// terser 会识别出“业务2”的代码为无用代码，进而移除掉
// 只保留“业务1”的代码

if (true) {
  // 业务 1
}

if (false) {
  // 业务 2
}
```

原先的方式在一个模块中定义常量，然后其他模块引入常量进行判断。这里要注意一个问题，在 Webpack 代码优化的时候，terser 并不会做程序流分析，也就是说访问不到模块的上下文信息。这种情况下，terser 可能还是会将模块导出的常量当做变量处理，从而导致 DCE 失效。这种情况下，我们不能通过模块方式引入常量，而是要用 `DefinePlugin` 直接把变量替换为对应的字面量。

📒 [治理项目模块依赖关系，试试这艘「依赖巡洋舰」](https://mp.weixin.qq.com/s/y0QGSI-VZcy9CCe_cHezlw)

📒 【前端部署十二篇】使用 CI 中的缓存进行 Pipeline 优化

当我们使用 webpack 5 进行构建时，如果使用了 `filesystem cache`，因为在磁盘中含有缓存 (node_modules/.cache)，二次构建往往比一次构建快速十几倍。

而在 CICD 中，这些都失去了意义，因为 CICD 每次 Job 都相当于新建了一个目录，「每次构建都相当于是首次构建」。

但是，CI 提供了一些缓存机制，可以将一些资源进行缓存。如果每次可以将缓存取出来，则大大加速了前端部署的速度。

[【前端部署十二篇】使用 CI 中的缓存进行 Pipeline 优化](https://mp.weixin.qq.com/s/7300HTz9nOOuCq_xTwXHhg)

📒 [UMI3源码解析系列之核心service类初始化](https://mp.weixin.qq.com/s/f8mYoozpLrnSfWcRHTMa7A)

📒 [【第2610期】JavaScript Containers](https://mp.weixin.qq.com/s/fPcdVCqWvkPqAdVK7JHacg)

📒 【前端部署十一篇】通过 CICD 实践 Lint、Test、Performance 等前端质量保障工程

在 CI 操作保障代码质量的环节中，可确定以下时机:

```yaml
# 1. 当功能分支代码 push 到远程仓库后，进行 CI
on:
  push:
    branches:    
      - 'feature/**'

# 2. 当功能分支代码 push 到远程仓库以及是 Pull Request 后，进行 CI
on:
  pull_request:
    types:
      # 当新建了一个 PR 时
      - opened
      # 当提交 PR 的分支，未合并前并拥有新的 Commit 时
      - synchronize
    branches:    
      - 'feature/**'
```

CRA 内部使用 `ESLint Plugin` 进行代码检查，而非命令的方式。当 ESLint 存在问题时，CRA 如果判断当前是 CI 环境，则直接报错并退出进程，导致打包失败：

```js
new ESLintPlugin({
  // Plugin options
  // ...
  failOnError: !(isEnvDevelopment && emitErrorsAsWarnings),
})
```

Lint 和 Test 仅是 CI 中最常见的阶段。为了保障我们的前端代码质量，还可以添加以下阶段：

- Audit: 使用 npm audit 或者 snyk 检查依赖的安全风险
- Quality: 使用 SonarQube 检查代码质量
- Container Image: 使用 trivy 扫描容器镜像安全风险
- End to End: 使用 Playwright 进行 UI 自动化测试
- Bundle Chunk Size Limit: 使用 size-limit 限制打包体积，打包体积过大则无法通过合并
- Performance (Lighthouse CI): 使用 lighthouse CI 为每次 PR 通过 Lighthouse 打分，如打分过低则无法通过合并

有些细心并知识面广泛的同学可能注意到了，某些 CI 工作也可在 Git Hooks 完成，确实如此。

它们的最大的区别在于一个是客户端检查，一个是服务端检查。而客户端检查是天生不可信任的。

而针对 `git hooks` 而言，很容易通过 `git commit --no-verify` 而跳过。

[【前端部署十一篇】通过 CICD 实践 Lint、Test、Performance 等前端质量保障工程](https://mp.weixin.qq.com/s/D7nXxYUMdMuo1du6fHnT-g)

📒 [【第2609期】Javascript之迪米特法则](https://mp.weixin.qq.com/s/fhSMz8BEIyjFGVnJtcVrKg)

📒 [React 并发渲染的前世今生](https://mp.weixin.qq.com/s/01sTK6w4BFUzoRc2NKCs1w)

📒 如何优雅实现轮询

- 初级：使用定时器（`setInterval`）
- 中级：使用基于事件循环的递归（`setTimeout` 递归调用）
- 高级：使用轮询调度器

📒 npm 包的入口点

注意 `exports` 字段优先级最高，当提供 `exports` 字段后，`main`、`module` 字段会被覆盖。

`exports` 可以更容易地控制子目录的访问路径，不在 `exports` 字段中的模块，即使直接访问路径，也无法引用！

[工程化知识卡片 014: 发包篇之 package.json 中 main、export、module 的区别何在](https://juejin.cn/post/7025809061660590087)

http://nodejs.cn/api/packages.html#main-entry-point-export

📒 使用 Next.js 和 MDX 构建你自己的博客

> https://www.freecodecamp.org/news/how-to-build-your-own-blog-with-next-js-and-mdx/

📒 React Concurrent 的故事

> https://www.youtube.com/watch?v=NZoRlVi3MjQ

⭐️ [TCP 重传、滑动窗口、流量控制、拥塞控好难？看完图解就不愁了](https://mp.weixin.qq.com/s/toQUgqJHeUbFZMtxfzFCxw)

⭐️ [TCP 就没什么缺陷吗？](https://mp.weixin.qq.com/s/9kHoRk6QIYOFUR_PCmHY6g)

📒 [React Server Components：我们即将和 API 告别？](https://mp.weixin.qq.com/s/b9Ye4iShgTSAcm0ce6m_9Q)
