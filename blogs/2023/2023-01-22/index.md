---
slug: 1月22日内容汇总
title: 1月22日内容汇总
authors: [garfield]
tags: []
---

![image](image.png)

封面图：卷饼兔。

⭐️ 装了啥 2023

- 编辑器主 WebStorm 开发项目，辅 VSCode 临时编辑项目，再辅 CotEditor 临时打开文件（注：如果是 Rust 项目，会用 VSCode）
- WebStorm 插件只装了两个，Github Copilot、Inspection Lens，前者大幅提升编码效率，后者大幅提升编码体验
- 编程字体用 Monolisa、Dank Mono 和 Operator Mono，一个用久了看腻了切另一个
- Terminal 工具是 iTerm2 + zsh + oh-my-zsh 的组合，zsh 额外装了 zsh-autosuggestions 和 fast-syntax-highlighting 插件

[装了啥 2023](https://mp.weixin.qq.com/s/m2HhDuFefiLt-eSB9Ux55g)

📒 Golang 相关文章

[Golang实现一个linux命令ls命令（命令行工具构建）](https://mp.weixin.qq.com/s/GMhYFPwAaH90gQvsTvzN_Q)

[GO并发之好用的sync包](https://mp.weixin.qq.com/s/aYt-q5hsvOQYq99TnQCoCw)

[Go语言原子操作](https://mp.weixin.qq.com/s/-HIQtprVGs1G5Bd3DMYQig)

[Go 并发安全与锁](https://mp.weixin.qq.com/s/_xU2A4b6JvVCus7tYV3YQQ)

[Go定时器的三种实现方式](https://mp.weixin.qq.com/s/GHJAUM3hiCEyi6z5KnVfMg)

[10秒改struct性能直接提升15%，产品姐姐都夸我好棒](https://mp.weixin.qq.com/s/WOfwayOu5UwsZJTYLTfOuA)

📒 相关文章推荐

关于未捕获 Promise 异常状态的问题 — 你可能会无感知地遇到 promise 的异常问题，Jake 就解决了这么一个关于 promise 报 unhandled promise rejection 错误的问题。

> https://jakearchibald.com/2023/unhandled-rejections/

关于 React 'Concurrent Mode' 的所有内容都在这 — 本文对 Concurrent Mode 进行深入的、以实例为导向的探索(并发模式已经是整合到 React 18 中的一组功能，而不是一个独特的"模式")。

> https://blog.codeminer42.com/everything-you-need-to-know-about-concurrent-react-with-a-little-bit-of-suspense/

使用 GitHub Copilot 编写单元测试? — 即使你觉得像 Copilot 这样的 AI 工具在编写生产代码上不太靠谱，但它可能在快速编写单元测试上有一定的作用。

> https://www.strictmode.io/articles/using-github-copilot-for-testing

类型安全的 React Query —— 一切都与信任有关 — 类型定义应该是值得信赖的。如果他们不是，他们“成为一个纯粹的建议”断言这篇文章建议可以做些什么来使他们成为这样。

> https://tkdodo.eu/blog/type-safe-react-query

Zustand vs Signals：对比 React 状态管理库 — 将最时髦的状态管理库之一——zustand 与 Signals 进行比较，后者是 Preact 团队最新发布的一个状态管理库。

> https://medium.com/@kevinschaffter/zustand-vs-signals-e664bff2ce4a

⭐️ [掌握了这篇 Dockerfile 中的 ARG 作用域， 就算 Build 镜像 CI 入门了 【文末抽奖】](https://mp.weixin.qq.com/s/i3n0hoHRaYoDMWcC5DSQ3w)

⭐️ [「Go语言进阶」并发编程详解 | 文末抽奖](https://mp.weixin.qq.com/s/irp0uBR-nJ87tZ_elMWPnA)

📒 [前端食堂技术周刊第 67 期：2022 State of JS、ESLint 2022、pnpm 2022、大淘宝 Web 端技术概览](https://juejin.cn/post/7189217535839961148)

📒 MDH 前端周刊第 83 期：React Query、CSS 3D、JavaScript Wrapped 2022、React 新文档

《Type-safe React Query》，Dominik 的每篇文章都值得深入阅读。React Query 的类型可以定义在哪？1）`useQuery<Todos>`，2）`const queryFn: Promise<Todos>`，3）`axios.get<Todos>`，4）`res.data as Todos`，5）不定义。不定义怎么有类型？用 zod，然后定义 schema，schema 不仅可用于校验后端数据，还会返回类型。

> https://tkdodo.eu/blog/type-safe-react-query

《Data binding in React: how to work with forms in React》，johnwcomeau 的每篇文章也值得阅读，这篇比较新手向，深入解答了面试必问问题「受控和不受控」。

> https://www.joshwcomeau.com/react/data-binding/

《Clever Code Considered Harmful》，johnwcomeau 这周的另一篇文章。判断代码好不好的一个标准是，一个初级开发人员，一个职业生涯刚刚起步的人，会不会在理解这段代码时遇到困难？

> https://www.joshwcomeau.com/career/clever-code-considered-harmful/

《React JS Best Practices From The New Docs》，Sebastian Carlos 阅读完 React 新官网文档后总结的 160 条笔记。我帮我节省了大量时间，我读完他的笔记后记了 20 多条笔记。但如果有空，还是应该完整阅读 React 的新文档。

> https://sebastiancarlos.medium.com/react-js-best-practices-from-the-new-docs-1c65570e785d

《JavaScript Wrapped 2022》，作者整理了 TypeScript、React、Angular、Vue、SSR、Node|Deno|Bun 的 2022 发展和 2023 展望，建议熟读。

> https://vived.io/javascript-wrapped-2022-frontend-weekly-vol-119/

《3D in CSS》，交互式的 3D CSS 教程。主要是 4 个 CSS 属性，包括 perspective、perspectiveOrigin、translateZ 和 rotate3d。

> https://garden.bradwoods.io/notes/css/3d

《Building a fast, animated image gallery with Next.js》，Vercel 把 Next.js Conf 2022 的照片搬上网，同时把这套代码开源。技术栈包括 Cloudinary、Next.js 图像组件、imagemin、Framer Motion、以及用 ai 生成 alt 文本等。

> https://vercel.com/blog/building-a-fast-animated-image-gallery-with-next-js

《Our top Core Web Vitals recommendations for 2023》，本文 Google DevRel 团队认为在 2023 年提高 Core Web Vitals 性能的最有效方法的最佳实践集合。涉及的性能指标包括 LCP、TTFB、CLS、FID 和 INP，同时给出了每个指标提升的注意点和可执行操作。

> https://web.dev/top-cwv-2023/

《The hardest part of web dev》，关于 timing 的知识。其中 react 中，1）渲染函数在React更新DOM之前运行，2）useInsertionEffect回调在React更新DOM后运行，但在浏览器重新计算页面布局之前，3）useLayoutEffect回调在浏览器重新计算页面布局后运行（考虑到useInsertionEffect回调注入的任何CSS），但在浏览器重新绘制之前，4）useEffect回调在浏览器完成重绘后运行。

> https://alexvipond.dev/blog/the-hardest-part-of-web-dev

[MDH 前端周刊第 83 期：React Query、CSS 3D、JavaScript Wrapped 2022、React 新文档](https://www.yuque.com/chencheng/mdh-weekly/tyvzbo1venhyi7l4)

📒 [自从项目上了SkyWalking，睡觉真香！](https://mp.weixin.qq.com/s/72UbwZTxo36eJVqGq8HBgw)

⭐️ [Go 语言 Web 应用怎么使用 Nginx 部署](https://mp.weixin.qq.com/s/Rrz-UEx2SwYmyWC5rKh4Wg)

⭐️ [发现conc并发库一个有趣的问题](https://mp.weixin.qq.com/s/G8mEAKRYbaae_rFBVJqdeg)

⭐️ [醒醒吧，未来不会有 Go2 了！](https://juejin.cn/post/7189102074825539640)

⭐️ [Go语言中常见100问题-#27 Inefficient map initialization](https://mp.weixin.qq.com/s/9pfznxXKHCv-QEZBqHw1YQ)

⭐️ [「每周译Go」了解 Go 中的 init](https://mp.weixin.qq.com/s/g4_HWOzL3NNFvyOHseLE6Q)

⭐️ [Go 设计模式｜组合，一个对数据结构算法和职场都有提升的设计模式](https://mp.weixin.qq.com/s/JKWbyr4Yt7A6l1nFsANUcQ)

📒 [八个 Web Components 前端框架，一定有一个你用得上](https://mp.weixin.qq.com/s/alDla5kp0XXFJSExYZPWEA)

📒 [Go语言爱好者周刊：第 174 期](https://mp.weixin.qq.com/s/E5LM05OzLj0VNxPIiu6O1g)
