---
slug: 3月19日内容汇总
title: 3月19日内容汇总
authors: [garfield]
tags: []
---

📒 小技巧集合

新学到一个省时间的技巧，随机分支，再也不需要为分支名发愁了！我写了个自定义脚本，会随机 checkout 到名为「sorrycc-xxxx」的分支。脚本大致逻辑是这样，`const length = 4;const id = (Math.random() * 1e20).toString(36).substring(0, length);await $反引号git checkout -b sorrycc-${id}反引号;`

gh 命令可以在命令行里操作 github，比如提 PR、绑定 ssh key 等，相见恨晚。

> https://github.com/cli/cli

利用 openai 帮你写 commit 信息，可以省去部分重复劳动，适用于对 commit 信息要求不高的业务项目。

> https://goonlinetools.com/snapshot/code/#42rshrrrk3gq5h171lxiu

在「Privacy & Security > Developer Tools」里[把 Terminal 等开发者工具加上](https://t.me/yqtalk/249)，绕开系统的安全策略，据说可以让请求和编译更快。

习惯用 [Purrple Cat](https://www.youtube.com/watch?v=bJUO1WnjXQY) 作为工作背景音。

查 IP 或运营商数据可在命令行中输入「curl cip.cc」。

换了个 VSCode 主题「Nako」，红色系，挺好看。

📒 [dynamicgo 开源 ：基于原始字节流的高性能+动态化 Go 数据处理](https://mp.weixin.qq.com/s/Cm7CXxhxRfACf4djhinDew)

⭐️ [Go语言中嵌入类型的一些重要规则，你知道多少](https://mp.weixin.qq.com/s/UUfvnzXcAgI6Hflfb5lXXg)

⭐️ [Go 高性能 - channel 缓冲区](https://mp.weixin.qq.com/s/mXsJePekUs8uSMNaJHd6Pg)

⭐️ [Go 高性能 - singleflight 防止缓存击穿](https://mp.weixin.qq.com/s/8hDHO83po_6qFLWWj9VxAA)

📒 [开源工作者福音，用 ChatGPT 评审 Pull Request，解决双手又能多提交两个commit了](https://mp.weixin.qq.com/s/jDOZqkmxwsDf13b9AJeI7A)

📒 [【webpack核心库】耗时7个小时，用近50张图来学习enhance-resolve中的数据流动和插件调度机制](https://mp.weixin.qq.com/s/LL9VytDK8w9_qiRiRivtmw)

⭐️ [并发编程--协同等待WaitGroup的最佳实践](https://mp.weixin.qq.com/s/ijmUmqy-Q_mDdUjGZKcLfw)

⭐️ [一文搞懂Go subtest](https://mp.weixin.qq.com/s/5zoNwCWnNNunrDtu6cokqg)

📒 [Webpack 最近的任意代码漏洞是怎么回事](https://mp.weixin.qq.com/s/2t45ZwYxYCLZtdUcvAUeKg)

⭐️ [Go语言中部分实现的接口(技巧)](https://mp.weixin.qq.com/s/S0tGeQJ4iC_dZA9EHW5GZA)

⭐️ [别乱用了，用新的。Go SliceHeader 和 StringHeader 将会被废弃！](https://mp.weixin.qq.com/s/yQVWbBQQO1yuGJLOYzPuTQ)

📒 [拒绝搬运文档，从实际出发介绍几个开发中用得上的TypeScript技巧](https://mp.weixin.qq.com/s/MkU1J_wAs2PEzirnfCPoGA)

⭐️ [Go 高性能 - timer 内存优化到 0 分配](https://mp.weixin.qq.com/s/TmpiDZo1y61-LfWNl5-Nrw)

⭐️ [Go 高性能 - defer 优化](https://mp.weixin.qq.com/s/i8ocH69cDHvjKBecpENxKA)

📒 [.vue 怎么变成 .js，我们来试一试！看完会更懂 Vue 吗](https://mp.weixin.qq.com/s/okdRokwt_xDi65GxyhVnXw)

⭐️ [Go 高性能 - 对象池](https://mp.weixin.qq.com/s/daF6fquIWiJ5pdaVDf0k2w)

⭐️ [Go 高性能 - 切片过滤器](https://mp.weixin.qq.com/s/dUjX-H4iTHjE47vtirSbxA)

⭐️ [【译】该如何使用合理 Go 语言的 struct](https://mp.weixin.qq.com/s/A_n45ZIZphyOkSfiB1kDDA)

⭐️ [【译】Go语言：使用 Singleflight 优化你的代码](https://mp.weixin.qq.com/s/fqQeTXsTvKdQY0JBa-_-hw)

⭐️ [【Go官方博文】Go 切片：用法和内部结构](https://mp.weixin.qq.com/s/GbsItVO0m3jIL1NwBITVPQ)

⭐️ [【译】Go语言：深入探究 array 与 slice](https://mp.weixin.qq.com/s/uTdhLMfXG-AF21PhKqTpww)

⭐️ [Go 中的性能分析和执行跟踪](https://mp.weixin.qq.com/s/7_b1NnoLxyE-kp7mnfXj4w)

⭐️ [Go 语言中接口嵌入接口](https://mp.weixin.qq.com/s/6yE_yNTJjsOBB2r2mhZiAA)

📒 [2个奇怪的React写法](https://mp.weixin.qq.com/s/fhX_npH4OwWMPkbN6ha13g)

⭐️ Go 开源库推荐

[Generic goroutine pool: Submit, Map, Async](https://github.com/txaty/gool)

⭐️ Learn Go with tests

https://studygolang.gitbook.io/learn-go-with-tests

https://quii.gitbook.io/learn-go-with-tests/

📒 [React 中文周刊 #131 - React hooks 是一个错误吗](https://mp.weixin.qq.com/s/FeyRhHCAvAhL6YalmYt1_Q)

⭐️ [Go 高性能 - 互斥锁和读写锁](https://mp.weixin.qq.com/s/_NHd4sl1GVXl6maIN74U2Q)

⭐️ [Go是一门面向对象编程语言吗](https://mp.weixin.qq.com/s/r5gIVtyBWtD7UQncK_JPNQ)

⭐️ [「每周译Go」如何在 Go 使用 interface](https://mp.weixin.qq.com/s/BSLwPZ_yw7rWjSBPo_m-Jg)

⭐️ [Go设计模式--桥接模式，让代码既能多维度扩展又不会臃肿](https://mp.weixin.qq.com/s/O8shSU46TcgFPx3h7NGFAA)

⭐️ [Go语言中常见100问题-#29 Comparing values incorrectly](https://mp.weixin.qq.com/s/fpHMk37QGLQCXrPAdxXC_w)

📒 [深入理解Render阶段Fiber树的初始化与更新](https://mp.weixin.qq.com/s/c0uS2pFbNsaTS1vY_2DkkQ)

📒 [你不知道的 async、await 魔鬼细节](https://mp.weixin.qq.com/s/X1-DRaZ_9cAfl-q9UwhJGA)

📒 [2023 年 Web 框架性能报告](https://mp.weixin.qq.com/s/b6RzjnE3GpgP9kedVg22hg)

⭐️ [Go 语言各个版本支持 Go Modules 的演进史](https://mp.weixin.qq.com/s/wVUVcppCZ89o7ViMNyTHfw)

📒 MDH 前端周刊第 91 期：代码提取、Turborepo、Farm、React 常见错误、tRPC、技术债

pnpm v8.0.0-beta.0 发布，默认去除重复对等依赖项等。

- `auto-install-peers` is `true` by default
- `dedupe-peer-dependents` is `true` by default
- The registry field is removed from the `resolution` object in `pnpm-lock.yaml`
- `save-workspace-protocol` is `rolling` by default
- `resolve-peers-from-workspace-root` is `true` by default

> https://github.com/pnpm/pnpm/releases/tag/v8.0.0-beta.0

《WTF 是代码提取？》。本文介绍了一种新的开发方式 —— 代码共存（code collocation），即将服务器端和客户端代码放在同一个文件中。作者认为这种方式可以提高开发效率，因为大部分代码都在两个位置上运行，没有必要将它们分开成不同的文件。然而，由于服务器端和客户端有不同的限制，需要将它们分开并创建代码包。文章介绍了三种策略：导出抽取、函数抽取和闭包抽取，并详细解释了如何使用这些策略来实现代码共存。最后，作者还介绍了一种称为 “标记函数” 的方法，可以让开发者自定义标记以及相应的转换过程。（编者注：元框架开发必备技能）

> https://www.builder.io/blog/wtf-is-code-extraction

《为什么 Turborepo 从 Go 迁移到 Rust - Vercel》。Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。该系统通过增量构建、并行执行和远程缓存来避免重复工作。随着使用量的增加和产品需求的变化，Turborepo 决定从 Go 逐步迁移到 Rust。该迁移主要基于 Rust 的正确性、强大的生态系统以及开发人员的愉悦度等因素。Turborepo 正在采取渐进式的迁移方式，目前已经实现了 “Rust-Go-Rust Sandwich” 的状态，即 Rust 是入口点，可以选择使用 Rust 或 Go 来实现特定命令的功能。

> https://vercel.com/blog/turborepo-migration-go-rust

《如何为你完全不了解的项目做出贡献？》。本文介绍了一个名为 Bun 的 JavaScript/TypeScript 运行时，它与 Deno/Node 类似，但具有更快的启动时间。作者通过编写测试套件来测试 Bun 的性能，并在测试过程中遇到了问题。作者分享了自己处理问题的方法，包括询问前任维护者、规范功能 / 问题、运行测试、编写测试用例并更改代码等步骤。

> https://grifel.dev/how-to-contribute-without-knowledge

《比 Vite 快 5 倍？2ms HMR？Farm：基于 Rust 的极速构建引擎！》。Farm 是一个使用 Rust 编写的构建引擎，比 Webpack 快 10 倍以上，比 Vite 快 5 倍。它支持 HTML、CSS、JavaScript、静态资源等模块的编译能力，并且采用按需编译，在加载时编译除首屏需要的模块外的其他模块，理论上对任意规模的项目都能支持秒启动。所有能力都由插件实现，支持 Rust 和 Js 插件。

> https://zhuanlan.zhihu.com/p/611603260

《React 初学者常见错误》。这篇文章介绍了 React 开发中常见的 9 种陷阱，包括：使用零进行条件判断、直接修改状态、未生成 key、缺少空格、在更改状态后访问它、返回多个元素、从不受控制到受控制的转换、缺少样式括号和异步效果函数。对于每种陷阱，文章都提供了解决方法，并给出了示例代码。

> https://www.joshwcomeau.com/react/common-beginner-mistakes/

《@githubnext/github-copilot-cli》。GitHub Copilot CLI 是一个命令行体验，可以让 GitHub Copilot 在命令行中帮助你。它将自然语言转换为 shell 命令，并具有不同领域的模式。安装后，您可以使用以下三个命令：??：将自然语言翻译为任意 shell 命令；git?：将自然语言翻译为 Git 命令；gh?：将自然语言翻译为 GitHub CLI 命令。（编者注：装完再也没用过，因为 git 命令已成肌肉记忆）

> https://www.npmjs.com/package/@githubnext/github-copilot-cli#whats-the-point-of-the-eval-and-alias-stuff

《使用 tRPC 和 React 的全栈 TypeScript》。tRPC 是一种使用 TypeScript 在全栈应用程序中创建完全类型安全 API 的方法。 tRPC 服务器应用程序生成具有类型安全函数的类型安全路由器（例如 CRUD 操作：创建用户，按标识符获取用户，获取所有用户），客户端应用程序可以直接调用这些函数。 在幕后，仍然使用 HTTP 在客户端和服务器之间通信。相比 GraphQL 和 REST，tRPC 主要用于较小的项目，其中不需要协调许多服务（例如 GraphQL），或者我们不一定按照标准化的 RESTful 方法工作。但是，随时可以从 tRPC 迁移到 GraphQL / REST，因为 tRPC 最终只是服务器上的函数，可以直接在 REST 路由器或 GraphQL 解析器中使用。

> https://www.robinwieruch.de/react-trpc/

《优秀工程师和卓越工程师的区别》。Intercom 的 CTO DARRAGH CURRAN 概述了造就杰出工程师的六个特征。其中包括野心和决心，习惯性简化，快速调试任何东西的能力，愿意帮助别人成为伟大的人，知道什么是有价值的，以及有创造力和积极性。Kotlyar说，工程文化是由被雇用的人、他们采取的行动以及被奖励和赞美的特质所塑造的。

> https://www.intercom.com/blog/traits-of-exceptional-engineers/

monorepo 项目用 `pnpm publish` 可以自动替换 Workspace Protocol 为实际的版本号，可以让发布省不少事。

> https://github.com/umijs/umi/pull/10719

[MDH 前端周刊第 91 期：代码提取、Turborepo、Farm、React 常见错误、tRPC、技术债](https://mdhweekly.com/weekly/issue-0091)

📒 [Go语言爱好者周刊：第 180 期 —— 通用 goroutine 池](https://mp.weixin.qq.com/s/KP52S9Z0tt9fQY4B2IeKhA)
