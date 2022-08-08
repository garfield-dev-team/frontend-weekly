---
slug: 8月14日内容汇总
title: 8月14日内容汇总
authors: [garfield]
tags: []
---

📒 [为什么 React 的 Diff 算法不采用 Vue 的双端对比算法](https://juejin.cn/post/7116141318853623839)

📒 [🚀Turborepo：发布当月就激增 3.8k Star，这款超神的新兴 Monorepo 方案，你不打算尝试下吗](https://juejin.cn/post/7129267782515949575)

📒 [搞清楚 Go Mod的版本和伪版本，下次别乱用了](https://mp.weixin.qq.com/s/ptJK7CDHCr6P4JCdsUXKdg)

📒 [掌握 TypeScript 中的映射类型](https://mp.weixin.qq.com/s/Nu4XCuF4d_BaAkmwRr3f4A)

📒 React Re-render 指南

什么是 re-render？什么是必要的 re-render 和不必要的 re-render？如果你对这些问题还模模糊糊的，在这篇文章中可以找到答案。

有四个原因可以让一个组件重新渲染自己：状态变化、父级（或子级）重新渲染、上下文变化和 hooks 变化。

通过 composition（组合）可以避免 re-render。有几种方式，1）把状态下移，避免上层组件 re-render，让 re-render 保持在一个很小的范围之内，2）children as props，作为 props，子组件不会受 state 变更的影响，3）component as props，避免 component re-render。

通过 React.memo 可以避免 re-render，被 memo 的组件只在 props 变更时会 re-render。有几种方式，1）对于带 props 的 component，需对非原始值的 props 做 memo，2）components as props or children，对子组件做 memo 而不要对父组件做 memo。

什么时候应该用 useMemo/useCallback？1）React.memo 过的组件的 props 应该用，因为他们只有 props 变更时才会 re-render，所以反之非 React.memo 过的组件的 props 无需使用，因为都会 re-render，用了也白用，2）useEffect、useMemo、useCallback 中非原始值的依赖应该用，3）重消耗（比如生成渲染树）的部分应该用，反之轻消耗不要用，因为 useMemo/useCallback 本身也有消耗。

如何防止 Context 引起的 re-render？1）memo context value，避免父级组件 re-render 导致 value 变更从而让依赖 context 的地方全部 re-render，2）拆分 data 和 API（getter 和 setter），这样 getter 变更时依赖 setter 的部分不会 re-render，3）把数据拆小，4）使用 context selector 比如 use-context-selector。

> https://www.developerway.com/posts/react-re-renders-guide

📒 [明明加了唯一索引，为什么还是产生重复数据](https://mp.weixin.qq.com/s/vRI-bFB4_IEaoCCQcMqZjw)

📒 [现代前端测试框架 Vitest 的一些落地实践感悟](https://mp.weixin.qq.com/s/0Jn1CHAVyX1U8RD2OUJENQ)

📒 [如何用 Project Reference 优化 tsc 编译性能](https://juejin.cn/post/7129130418657296421)
