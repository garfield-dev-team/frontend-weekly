---
slug: 10月9日内容汇总
title: 10月9日内容汇总
authors: [garfield]
tags: []
---

📒 [Go：符号表是什么？如何使用？](https://mp.weixin.qq.com/s/nH0v9wYe64--1HT_QJcKag)

📒 Dracula UI

刚开源，特点如下。

1、**为黑暗模式而建**。大多数模板都是使用浅色的，后来才改成深色的。深色主题不应该是一个事后的想法，它们应该是一个首要任务。

2、**设计师友好**。通过使用一个高度可配置的设计系统，加快原型设计阶段。通过利用精心制作的Figma文件，轻松进行合作。

3、**友好的开发者体验**。不用担心类名，只需使用 Visual Studio 的代码片段。你可以利用自动完成的优势，也可以从你的代码编辑器中直接访问整个文档。

https://ui.draculatheme.com/

📒 React 18 快在哪

主要是 3 点。

1、由于 React 18 有 Automatic Batching，多个 setState 只会触发一次渲染，而在 18 之前，setState 几次就会渲染几次
2、React 18 引入了新的服务器渲染架构，会带来显著的性能提升，请检查你的框架是否支持
3、React 18 引入了用于把状态更新标记为可终端的 startTransition，虽然不能让页面变快，但如果用户在可中断的状态更新中点击，会让你的应用更具有响应性

https://www.reddit.com/r/reactjs/comments/xmr9tg/comment/ippsuin/

📒 再见 useEvent

useEvent 原计划解两个问题，1）渲染优化，2）useEffect 重新触发问题。但是发现没办法一下子做两件事。于是 useEvent RFC 废弃，这两个问题会拆开了来解。渲染优化问题倾向用 React Forgot 解，useEffect 重新触发问题会通过另一个专门解此问题的 RFC 来解，命名上应该不再会用 useEvent。

https://github.com/reactjs/rfcs/pull/220#issuecomment-1259938816

📒 Umi x Valtio

Umi 在 4.0.23 中加入了 Valtio 插件。这是在大量调研之后，基于中台项目的场景做的决定，使用 Valtio 作为下一代的数据流。

为啥是 valtio？

valtio 的特点是外部多 Store + 基于 Proxy。1）个人用不惯 jotai 和 recoil 这种 react 内部原子化的数据流方案，感觉和被 redux 培养起来的心智模型有冲突，所以会更倾向于外部 Store 一些，2）由于场景是中后台，对于兼容性的容忍度比较高，比如不用兼容 IE11，所以完全可以用基于 Proxy 的数据流方案，这类数据流方案在更新数据和读取数据时都更简单。

为啥不是 zustand？

1、zustand 和 valtio 是同一个作者写的，功能覆盖上其实比较类似，最大的区别是 valtio 基于 proxy 而 zustand 不是。个人有几个方面的考虑，1）更新数据，2）读取数据，3）类型提示。

2、更新数据的方式更符合人性，比如可以直接 `state.todos['321'].completed = true`，而不用 `setState(todos => ({ …todos, 321: { …todos['321'], completed: true } }))`。当然，这一点非 proxy 方案可基于 immer 实现和 proxy 方案类似的操作。

3、读取数据默认高性能，无需 selector。非 proxy 方案比如 react-redux 和 zustand 为了性能优化，避免不必要的 re-render，通常会通过 selector 选择 store 的一部分，这会带来不必要的心智负担。基于 Proxy 的方案是响应式的，无需 selector，默认高性能。

4、类型提示的差异主要在扩展上。valtio 用的是组合式，zustand 用的是 middleware。没具体试过 zustand 的 middleware，但个人理解，理论上 middleware 的类型提示没有 valtio 友好。比如 valtio 的 proxyWithHistory 会把数据结构改成 `{ value, history, redo, undo, … }` 这种，在类型提示上可以完美衔接。

https://umijs.org/docs/max/valtio
