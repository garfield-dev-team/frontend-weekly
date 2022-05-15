---
slug: 5月15日内容汇总
title: 5月15日内容汇总
authors: [garfield]
tags: []
---

📒 解决 Vite 打包 React 组件库无法排除 peerDependencies 的问题

[轮子系列：使用vite从零开发React组件库](https://zhuanlan.zhihu.com/p/354572830)

[如何使用Rollup打包React组件库](https://zhuanlan.zhihu.com/p/500883016)

使用 dumi 实现组件库文档自动化

https://d.umijs.org/zh-CN/guide/advanced#%E7%BB%84%E4%BB%B6-api-%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90

📒 [NodeJs进阶开发、性能优化指南](https://juejin.cn/post/7095354780079357966)

📒 使用 `URLSearchParams` 注意事项

很多同学都会用 `URLSearchParams` 解析、拼接 query 参数，非常方便，而且还能自动进行参数编码、解码。但是在使用的时候，有几个注意事项：

```js
const p = new URLSearchParams();

// 1. 当某个 value 为 undefined 时，会直接转为字符串拼接到 URL 上
p.set("dby", undefined);
p.set("dm", 2333);
p.toString(); // 'dby=undefined&dm=2333'

// 解决方案，使用逻辑或操作
p.set("dby", undefined || "");
p.toString(); // 'dby=&dm=2333'

// 2. get 一个不存在的值，返回的是 null，因此 TS 会推导为联合类型
const foo = p.get("foo"); // string | null

// 解决方案，使用逻辑或操作，实现类型守卫
const foo = p.get("foo") || ""; // string
```

📒 [写给前端的手动内存管理基础入门（一）返璞归真：从引用类型到裸指针](https://juejin.cn/post/6938201650012094495)

📒 [React如何原生实现防抖](https://juejin.cn/post/7097406514360483877)

📒 [你想知道vite核心原理吗，我来手写告诉你（80行源代码）](https://juejin.cn/post/7096070620105932813)

📒 [Rust 入门 - 资源与生命周期](https://juejin.cn/post/7094909263847358472)

📒 [The Ultimate Guide To Software Engineering](https://dev.to/wiseai/the-ultimate-guide-to-software-engineering-545e)

📒 Tree shaking问题排查指南来啦

Tree shaking在不同工具里的意义不太统一，为了统一后续讨论，我们规范各个术语：

- minify：编译优化手段，指在不影响代码语义的情况下，尽可能的减小程序的体积，常见的 minify 工具如 terser、uglify，swc 和 esbuid 也自带 minify 功能
- Dead code elimination(DCE)：即死代码优化，一种编译器优化手段，用于移除不影响程序结果的代码，实现DCE的手段有很多种，如 const folding (常量折叠)、Control flow analysis、也包括下面的 LTO
- Link Time Optimization：指 link 期优化的手段，可以进行跨模块的分析优化，如可以分析模块之间的引用关系，删掉其他模块未使用的导出变量，也可以进行跨模块对符号进行 mangle http://johanengelen.github.io/ldc/2016/11/10/Link-Time-Optimization-LDC.html
- Tree shaking：一种在 Javascript 社区流行的一个术语，是一种死代码优化手段，其依赖于 ES2015 的模块语法，由 rollup 引入。这里的 tree shaking 通常指的是基于 module 的跨模块死代码删除技术，即基于 LTO 的 DCE，其区别于一般的 DCE 在于，其只进行 top-level 和跨模块引用分析，并不会去尝试优化如函数里的实现的 DCE

> Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, i.e. import and export. The name and concept have been popularized by the ES2015 module bundler rollup.   
> 
> https://webpack.js.org/guides/tree-shaking/

- mangle：即符号压缩，将变量名以更短的变量名进行替换
- 副作用：对程序状态造成影响，死代码优化一般不能删除副作用代码，即使副作用代码的结果在其他地方没用到
- 模块内部副作用：副作用影响范围仅限于当前模块，如果外部模块不依赖当前模块，那么该副作用代码可以跟随当前模块一起被删除，如果外部模块依赖了当前模块，则该副作用代码不能被删除

![image](./tree_shaking.png)

因此我们的后续讨论，所说的 tree shaking 均是指基于 LTO 的 DCE，而 DCE 指的是不包含 tree shaking 的其他 DCE 部分。

> 简单来说即是，tree shaking 负责移除未引用的 top-level 语句，而 DCE 删除无用的语句

[Tree shaking问题排查指南来啦](https://mp.weixin.qq.com/s/P3mzw_vmOR6K_Mj-963o3g)

📒 \[科普\] JS中Object的keys是无序的吗

**1. `Object.keys()` 返回类型始终为 `string[]`**

因为 JS 对象 key 的类型只有三种：`number`、`string`、`Symbol`，需要注意 `number` 类型底层也是按 `string` 进行存储，而 `Symbol` 类型不可枚举。

**2. ES2015 之后 `Object.keys()` 输出顺序是可以预测的**

我们说普通对象的 Key 是无序的，不可靠的，指的是不能正确维护插入顺序，与之相对的是 Map 实例会维护键值对的插入顺序。

在 ES2015 之后，普通对象 Key 顺序是可预测的。先按照自然数升序进行排序，然后按照非数字的 String 的加入时间排序，然后按照 Symbol 的时间顺序进行排序。也就是说他们会先按照上述的分类进行拆分，先按照自然数、非自然数、Symbol 的顺序进行排序，然后根据上述三种类型下内部的顺序进行排序。

> 使用 `Object.keys()` 只会输出对象自身可枚举属性的 key，不含 `Symbol` 类型的 key。如果要输出 `Symbol` 类型 key，可以使用 `Reflect.ownKeys()`

[\[科普\] JS中Object的keys是无序的吗](https://mp.weixin.qq.com/s/qyyrQNC6q6p496OdZIQ6ew)

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
