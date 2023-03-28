---
slug: 4月2日内容汇总
title: 4月2日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i1/O1CN01JI9isW1Ldyow2M3FG_!!6000000001323-2-tps-1344-896.png)

题图：Landscape illustration, Hayao Miyazaki, in the sea of flowers, clouds, fantastic sky, warm colors, simple composition。

📒 chatgpt逐字逐行回答的效果是如何实现的

一句话总结：通过 `Content-Type: text/event-stream` 做流式响应。

[chatgpt逐字逐行回答的效果是如何实现的](https://juejin.cn/post/7213653429415673911)

📒 [可视化搭建 - keepAlive 模式](https://mp.weixin.qq.com/s/1fYO__dfUy2MIjHi3IJrmg)

⭐️ [Go 语言实现创建型设计模式 - 工厂模式](https://mp.weixin.qq.com/s/HIHQXJSdu8d8q7fKAVlUTg)

⭐️ [为什么 Go 不支持 \[\]T 转换为 \[\]interface](https://mp.weixin.qq.com/s/lG-sswO8i6w_6sMztvyOjw)

⭐️ [Go设计模式-迭代器到底是不是一个多此一举的模式](https://mp.weixin.qq.com/s/sABibBRsC2kknbAH18oatA)

📒 MDH 前端周刊第 93 期：npm、sharp images、React Labs、fzf、手写 Signals

《从 ts-node 迁移到 Bun》。本文介绍了如何将一个使用 ts-node 编写的控制台应用程序迁移到 Bun，以及在迁移过程中遇到的一些问题和解决方案。作者发现 Bun 比 ts-node 快 50%，并且迁移过程相对容易。他认为这让他对 Bun 充满信心，并期待未来更多地使用它。

> https://johnnyreilly.com/migrating-from-ts-node-to-bun

《加速 JavaScript 生态系统 - npm 脚本》。本文介绍了如何优化 JavaScript 中常用的 “npm scripts”，以减少其约 400 毫秒的开销。作者通过分析 npm CLI 的代码结构，发现大部分时间都花费在加载组成 npm CLI 的模块上。作者通过惰性加载、减小模块图等方式，将运行 npm scripts 的时间从 400 毫秒降至 22 毫秒。作者指出，JavaScript 工具中普遍存在的问题是没有简便的方法来缩短模块图，因此可以考虑在发布时将代码打包，以减少加载时间。

个人理解再总结一下：

1）如何检测 npm scripts。`which npm` 命令可以拿到 npm 解释器路径，因此可以通过 `node --cpu-prof $(which npm) run myscript` 运行脚本、生成 profile；

2）惰性加载。通过 profile 可以发现，npm cli 运行大部分时间其实都在加载模块。我们知道，Node 具有 JIT 特性，因此 `require` 实际上是非常昂贵的（回顾一下 `require` 加载机制）。建议按需 `require`，将 `require` 推迟到要用的时候再去加载，例如放在条件判断里面，可以显著提升 cli 启动性能（例如 Babel 插件、Webpack loader 支持配置字符串而不是传递实例，实际上也是延迟加载）；

3）减小模块图。解释器在遇到 top level `import` or `require` 语句时，就会加载、解析模块（还是回顾一下 `require` 加载机制），引起大量文件 IO。与 Web 工程不同，Node 工程可以将所有代码打包到一个单文件中（`target: "node"`、禁用 Webpack 默认分包规则 `optimization.splitChunks.cacheGroups.default: false`），这样避免了模块加载开销，可以显著提升 cli 应用启动性能。需要注意的是，如果一次性投喂代码太多，还是会影响性能，解法是和上面提到的惰性加载结合用（也就是 Node 不需要 bundle-splitting 分包，但可以用 code-splitting 做异步懒加载）。

> https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-4/

《如何获得一个酷炫的 NPM 包名？》。本文介绍了如何通过 NPM 的争议政策来申请将占位包的所有权转移给自己。对于长期没有更新或仅仅是占位的包，NPM 工作人员会在 4 周后自动将包的 owner 设置为申请者的用户名。申请者需要发送邮件至包的所有者并抄送 support@npmjs.com，并说明申请转移的原因、包名以及自己的 npm username。

> https://unix.bio/posts/how-to-get-npm-package-name

《您可能不需要的 Hooks》。本文介绍了 React Hooks 中一些不太常用的 Hook。

> https://reacttraining.com/blog/hooks-you-probably-dont-need

《React Labs：我们正在进行的工作》。React Labs 发布了最新的研究进展，包括 React Server Components、Asset Loading、Document Metadata、React Optimizing Compiler、Offscreen Rendering 和 Transition Tracing 等。其中，React Server Components 是由 React 团队设计的一种新的应用架构，提供了一种新的组件类型 —— Server Components，它们可以在构建期间运行，也可以在服务器上运行，让您无需构建 API 即可访问数据层。另外，React Labs 还在开发 Suspense、Transition Tracing 等功能，以提高 React 的性能和用户体验。

> https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023

《GitHub Copilot X：AI 动力的开发者体验 | GitHub 博客》。GitHub Copilot X 是 GitHub 的新一代 AI 辅助开发工具，它将 AI 引入整个开发生命周期中。除了自动完成注释和代码外，Copilot X 还支持聊天和语音交互，并在 pull requests、命令行和文档中提供 AI 支持。Copilot X 基于 OpenAI 的 GPT-4 模型，可以为开发人员生成单元测试、修复错误等。此外，Copilot X 还支持针对文档的 ChatGPT 接口，让开发人员能够快速获取关于 React、Azure Docs 和 MDN 等文档的答案。

> https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/

《如何在 2023 年开始一个 React 项目》。本文介绍了几种新 React 项目的起始套件，包括 React with Vite、React with Next、React with Astro 等。作者对每种套件的优缺点、开发者所需技能水平以及针对 React 开发者提供的特性进行了分析，并给出了不同需求的三种解决方案。最后，文章总结了一些关于 React 起始项目的思考和建议。

> https://www.robinwieruch.de/react-starter/

《使用 useImperativeHandle 进行细调 refs》。本文介绍了在 React 中使用 refs 和 useImperativeHandle 的方法。Refs 是一种用于在组件之间传递数据的机制，可以让你访问 DOM 节点并使用原生 JavaScript DOM API 对其进行操作。useImperativeHandle 允许你自定义要公开的 ref 处理程序，以便只公开子组件的特定方法。然而，需要注意的是，在 React 中，最好不要使用 refs 来实现可以通过 props 实现的命令式行为，因为这违反了 React 的核心原则。

> https://prateeksurana.me/blog/fine-tuning-refs-with-useimperativehandle/

Umi 例行每周四发一版，我觉得有趣的功能包括，1）基于 Rust 实现类 es-module-lexer 解析器用于 prepare 阶段采集 import 数据，2）配置校验陆续从 joi 迁移到 zod，3）新增 umi? 命令，这是框架结合 openai 的第一个尝试，4）MFSU 支持 WASM。

📒 Golang 相关文章

The one-and-only, must-have, eternal Go project layout

> https://appliedgo.com/blog/go-project-layout

OpenAI 的 Golang SDK，包括 ChatGPT、GPT-3、GPT-4 等。

> https://github.com/sashabaranov/go-openai

一个检测结构体是否可以占用更少内存的工具。

> https://github.com/dkorunic/betteralign

基于 Docker 的热重载开发。

> https://github.com/dkfbasel/hot-reload

📒 [Go语言爱好者周刊：第 182 期 —— GPT Go SDK](https://mp.weixin.qq.com/s/rR3HAM_o3mXfzkGx7FkiEQ)
