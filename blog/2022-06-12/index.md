---
slug: 6月12日内容汇总
title: 6月12日内容汇总
authors: [garfield]
tags: []
---

📒 [【第2638期】前端安全之 CSRF 攻击原理和防护方法](https://mp.weixin.qq.com/s/MSK1f6qEAB75iiYzHWhlgA)

📒 何时发起 fetch 请求？试试在 React Router 中吧

这是一则近期在 Reactathon 中的演讲。Remix 创始人之一的 Ryan Florence 极力推荐了在 React Router 中去做 fetch 请求。

> https://www.youtube.com/watch?v=95B8mnhzoCM

📒 React Route v6.4 版本已进入预发布阶段

> https://github.com/remix-run/react-router/releases/tag/v6.4.0-pre.2

📒 最新一期的 20minJS 请来了 Mark Erikson，主要讨论了 状态管理以及 Redux Toolkit

> https://podcast.20minjs.com/1952066/10665172-episode-12-redux-toolkit-and-state-management-in-react-with-mark-erikson

📒 Storybook v6.5 版发布：旨在提升生产力的新工作流

这款流行的组件开发工具库本次发布了许多新功能，包括在浏览器中验证用户行为的交互测试，一个将 story 和 variant 连结起来的 Figma 插件以及引入了 Webpack 5 的惰性编译用来提高启动速度等。

> https://storybook.js.org/blog/storybook-6-5/

📒 Glide Data Grid v4.0 版发布：一款高效的 React 数据网格库 

它自称是一款“毫不妥协，速度飞快的数据网格”。它支持高达百万条数据的多样化渲染，且支持 TypeScript。主页上还有一个简洁的 Demo，它支持 MIT 许可证。详情请看 GitHub 仓库。

> https://grid.glideapps.com/

📒 [开发一个浏览器插件从未如此简单](https://mp.weixin.qq.com/s/Q2Dx45dOnqrwthllOEahDg)

📒 [深入浅出 npm & yarn & pnpm 包管理机制](https://mp.weixin.qq.com/s/dVD22v_phrk4Xl2GQH_-yw)

📒 pkg.land：发现 npm 包的替代品的方式

> https://pkg.land/

📒 [平时的工作如何体现一个人的技术深度？](https://juejin.cn/post/7073001183123603470)

📒 [关于前端大管家 package.json，你知道多少？](https://mp.weixin.qq.com/s/fxX4oPHURDpvFvCIZUd7VA)

📒 [【第2636期】从"微前端"到“微模块”](https://mp.weixin.qq.com/s/bR7vDw_ii4VPL4f8YVIWEg)

📒 [你还在直接用 localStorage 么？该提升下逼格了](https://juejin.cn/post/7104301566857445412)

📒 [ahooks 中那些控制“时机”的hook都是怎么实现的？](https://mp.weixin.qq.com/s/Roca8dPlP5H8z1JIaCGuHA)

📒 [实现一个实时预览的 json 编辑器组件（react 版）](https://mp.weixin.qq.com/s/pS-pLnG4RLMtodvvqmzEUw)

📒 [微信团队分享：微信后台在海量并发请求下是如何做到不崩溃的](https://zhuanlan.zhihu.com/p/524973511)

📒 [使用 `-force` 被认为是有害的；了解 Git 的 `-force-with-lease` 命令](https://juejin.cn/post/6844903489970126856)

📒 [使用 Three.js 实现"雪糕"地球，让地球也凉爽一夏](https://juejin.cn/post/7105993870185332766)

📒 [从0到1带你用webpack 5构建monorepo项目——上篇](https://mp.weixin.qq.com/s/cOTxpimRvv18HIiLaneuEQ)

📒 content-visibility 再探究，完美替代 Lazyload？

直接看结论：

- 在一些需要被频繁切换显示、隐藏状态的元素上，使用 `content-visibility: hidden`，用户代理无需重头开始渲染它和它的子元素，能有效地提升切换时的渲染性能；
- `content-visibility: auto` 的作用更加类似于虚拟列表，使用它能极大地提升长列表、长文本页面的渲染性能；
- 合理使用 `contain-intrinsic-size` 预估设置了 `content-visibility: auto` 元素的高宽，可以有效避免滚动条在滚动过程中的抖动；
- `content-visibility: auto` 无法直接替代 LazyLoad，设置了 `content-visibility: auto` 的元素在可视区外只是未被渲染，但是其中的静态资源仍旧会在页面初始化的时候被全部加载；
- 即便存在设置了 `content-visibility: auto` 的未被渲染的元素，也并不会影响全局的搜索功能。

[content-visibility 再探究，完美替代 Lazyload？](https://mp.weixin.qq.com/s/bZ6edmEoVXLWloQssiQxRg)

📒 [冷知识！使用 display: contents 实现幽灵节点？](https://mp.weixin.qq.com/s/DhkQNO8Hv1zZP9Fu7uSw-g)

📒 [基于 Vue3 和 TypeScript 项目大量实践后的思考](https://mp.weixin.qq.com/s/JxrCUN8PQ_xG_AkfV-G5FQ)

📒 [ahooks 是怎么解决用户多次提交问题？](https://mp.weixin.qq.com/s/t3nBYybInY_AXVpbeKi6Jw)

📒 [这还是我最熟悉的package.json吗？](https://juejin.cn/post/6953867408096362503)

📒 [npm init @vitejs/app的背后，仅是npm CLI的冰山一角](https://juejin.cn/post/6950817077670182943)

📒 [不到 100 行代码，实现 React Router 核心逻辑](https://mp.weixin.qq.com/s/QZ49KF-k14NamqlF_hBT9A)

📒 [ahooks 是怎么解决 React 的闭包问题的？](https://mp.weixin.qq.com/s/z6rWffzjeww5GRZVh6hK8Q)

📒 [如何使用插件化机制优雅的封装你的请求hook](https://mp.weixin.qq.com/s/k2LYtZ6lU5CH1_grlKQT0Q)

📒 [【第2633期】JavaScript运行时环境和标准](https://mp.weixin.qq.com/s/_lKKAvzVQPTQ5FeKBF6hRA)

📒 [TS 的 esModuleInterop 与 allowSyntheticDefaultImports 配置](https://mp.weixin.qq.com/s/9TnD_oXnjiU8aoQJBzLbsA)

📒 NPM 发包脚本加上下面这段代码

```js
const npmPublish = async () => {
  const scripts = [
    "npm set-script postinstall \"\"",
    "npm publish",
    "npm set-script postinstall \"patch-package\"",
  ];
  await scripts.reduce(
    (prev, script) => prev.then(() => runScript(script)),
    Promise.resolve()
  );
}
```

> 这里的 `reduce()` 确保了 Promise 按顺序调用，而 `Promise.all()` 并发执行不保证顺序

📒 [【第2632期】微前端框架 Satum 的性能优化策略](https://mp.weixin.qq.com/s/LMSveysC0re7A0sbvvImuw)

📒 [大家都能看得懂的源码（一）ahooks 整体架构篇](https://mp.weixin.qq.com/s/lApEUTzOsdbvMeRUXcTneg)

📒 [React新文档：不要滥用effect哦](https://mp.weixin.qq.com/s/h7GiH_s8e8wM0CDS_tF_3w)

📒 [你还不会写 vite 插件吗？没关系，我教你啊](https://juejin.cn/post/7103165205483356168)

📒 [用 Node.js 手写一个 DNS 服务器](https://mp.weixin.qq.com/s/Gl94ISY5N4BYyYmVT9-QFQ)
