---
slug: 8月21日内容汇总
title: 8月21日内容汇总
authors: [garfield]
tags: []
---

📒 Golang 依赖注入相关文章

https://dev.to/dryrainbow/dependency-injection-in-golang-35oa

https://medium.com/avenue-tech/dependency-injection-in-go-35293ef7b6

https://medium.com/thirdfort/go-best-practices-how-to-code-comfortably-60118a27def8

https://levelup.gitconnected.com/better-error-handling-in-golang-theory-and-practical-tips-758b90d3f6b4

📒 [【第2704期】网易严选多端组件库OSSA正式开源](https://mp.weixin.qq.com/s/cKC8u_43Ewqq0GAgErQO0w)

📒 Golang 相关文章

[Go 语言 Web 编程](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNTY5MzU2MA==&action=getalbum&album_id=1323498303014780929&scene=21&from_msgid=2247484112&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

[Go 语言并发编程](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNTY5MzU2MA==&action=getalbum&album_id=1325302744319737858&scene=21&from_msgid=2247484375&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

[Go 微服务实战](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUzNTY5MzU2MA==&action=getalbum&album_id=1809543596702777345&scene=21&from_msgid=2247492061&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

📒 React 18 新特性：Selective Hydration

https://github.com/reactwg/react-18/discussions/37

📒 [一个简洁、强大、可扩展的前端项目架构是什么样的](https://juejin.cn/post/7122636487555809311)

📒 [大家都能看得懂的源码之ahooks useInfiniteScroll](https://mp.weixin.qq.com/s/fxEKYW5cIKM5tec3VWwgSw)

📒 [esModuleInterop 是如何影响 tsc 的](https://mp.weixin.qq.com/s/37DtrXeRioq-xSKayIJbCg)

📒 [【第2703期】软件架构手册](https://mp.weixin.qq.com/s/1h6yqCWyzYLM8WPGlGdtVA)

📒 [如何在 Web 上构建一个插件系统](https://juejin.cn/post/6844903956263501838)

📒 [Go 的常量为什么只支持数字、字符串这样的基础类型](https://mp.weixin.qq.com/s/XX3Y1tKU-_oeNGsXfgcNQg)

📒 [两万字详解！InnoDB锁专题！](https://mp.weixin.qq.com/s/DZbAq9fpPxElhfJCkY53GA)

📒 [细数线程池的10个坑](https://mp.weixin.qq.com/s/cDCHV08x1rPiZVZMRFjWBg)

📒 [Chrome DevTools 远程调试安卓网页的原理](https://juejin.cn/post/7132077894922141726)

📒 [Windows 滚动条如何美化成 macOS 那样](https://mp.weixin.qq.com/s/RSSQymhS48pFXI2Z9JX6TA)

📒 [Go逃逸分析详解](https://juejin.cn/post/7131947887398748196)

📒 [GO面试必知必会面试题](https://juejin.cn/post/7131717990558466062)

📒 [最简单的单例模式，Go版本的实现你写对了吗](https://mp.weixin.qq.com/s/1ZuhUA9Lt2uLFlamIY6fLQ)

📒 [伙计，Go项目怎么使用枚举](https://mp.weixin.qq.com/s/zyvO_hhUo1TRm6kMPcaFFQ)

📒 [Astro 1.0 正式发布，给前端带来了什么](https://juejin.cn/post/7131928500373553160)

📒 gum

迷人的 shell 脚本工具库，基于 go。

> https://github.com/charmbracelet/gum

📒 React Query 转 RTK

本文是作者和 React Query 斗争了一年之后，最终弃 React Query 投 RTK 的故事。

React Query 处理了复杂的缓存，并根据需要重新加载数据。用户使用 useQuery 调用 API 时，数据被存储在 React Query 的缓存中。缓存的数据可通过 getQueryData 读取。如果要更新数据，使用 useMutation 会更新服务群上的数据，同时在 onSuccess 或 onMutate 中更新 React Query 缓存中的数据。更新的最简单方法是调用 invalidateQueries。而缓存失效正是作者觉得 React Query 难以驾驭的主要原因。

然后作者在对比之后选择了 Redux + Redux Toolkit（RTK）。作者希望选择全局 store 的数据流，同时还对比了竞品比如 Valtio（见上图）。Redux 的优点是社区、文档、明确的数据结构，缺点是更多脚手架代码、需要用 reselect 或其他来做渲染优化、尺寸比较大（18K）。

编者注：如果我是作者，在需要全局 store 的前提下，会更倾向于选择 valtio 或 zustand。1）脚手架代码少，这一点对外来说很关键，2）性能更好（valtio 基于使用决定 re-render），3）redux 的单 store 在未来可能成为瓶颈，比如要做组件提取时，多 store 会更灵活一些。

> https://www.basedash.com/blog/why-we-had-to-move-away-from-react-query

📒 Suspense

作者在一年前写了第一篇，这是第二篇。时隔一年，这篇是他几个月的研究成果。

这段时间发生了什么？1）React 团队创建 React 18 工作小组讨论区，提供更多深入的信息，同时用于收集反馈，2）React 18 稳定版发布，3）一篇 React Labs 的帖子，介绍 React 团队正在探索的内容。

React 18 有啥新特性？1）没有并发模式，取而代之的是并发功能，仅在子树中启用，原因是为了向后兼容，2）Transition 允许将不紧急的更新标记为过渡（未来可能成为默认行为），3）基于 Suspense 的 Streaming SSR 允许在所有 HTML 被渲染之前进行流化，并且在 HTML 被完全流化之前就可以开始水化（目前需搭配 React.lazy 使用），4）选择性水化，5）新 Hooks，比如 useId 可用来生成在客户端和服务端稳定的 ID，6）自动批处理 让多个 setState 只导致单一渲染。

React 下一步做什么？1）Cache 组件，允许请求库做与 Suspense + 并发渲染兼容的数据缓存，这是 Suspense 目前缺的一环，2）React Server Component，3）用于 Assets 资源加载的 Suspense，比如字体、CSS 和字体等会在加载时导致布局偏移和混乱，4）React 编译器优化，React 慢的原因之一是因为有大量不必要的 re-render，自动插入 memo hook 可以提升性能，这在 React Conf 2021 中有过介绍，5）SuspenseList，在处理 Suspense 列表时有用，比如文章、评论或消息，允许协调子节点，决定他们显示的顺序，6）Offscreen API，允许保留 unmount 组件的状态，或者预先渲染用户可能会执行的 transition，比如做基于路由的预渲染。

跳出 React 从整体社区角度看。1）流式服务端渲染是为了提高响应速度，所以尽可能早地 flush，MarkoJS 在 2014 年开始支持，更早一些 Facebook 在 2009 年也有一门叫 BigPipe 的技术，2）SSR 在网络方面会更快，但同步水化依旧会成为大型项目的性能瓶颈，Islands architecture(群岛架构） 可以解这个问题，3）细粒度响应式，「React 虽然叫 react，但实际上不是 react」，响应式是框架中很流行的一种优化方法，比如 SolidJS，React 团队也有考虑过这个问题，但选择不追求，Dan 早在 2019 年就写过这个话题，4）Transition API 不算新技术，谷歌地图也有类似实现，同时 Scheduling（调度）问题正在通过标准的方式解决，5）SRC（服务端渲染组件）也不是新想法，2018 年就有 Phoenix LiveView 的实现，通过服务端状态和渲染实现 0 JS 的交互功能。

最后，作者还发现，React 项目内部子项目代号均是以 F 开头。比如 Fiber 是实现了异步渲染的重写的核心代号；Fizz 是新的服务器端渲染架构的代号、Flight 是服务器组件的代号、Fire、Flare 等。

> https://blog.6nok.org/the-suspense-is-killing-me:-part-2/

📒 React TypeScript 备忘录

一份很全面的 React TypeScript 备忘录。

> https://react-typescript-cheatsheet.netlify.app/

📒 React re-render 指南

关于 React 重渲染的系列指南，图文并茂，同时提供了代码示例和扩展资料。

> https://www.developerway.com/posts/react-re-renders-guide

📒 ESLint 推出新的配置系统

回顾当前的 eslintrc 配置系统演进史，每一步的演化在当时来看都是不错的选择，比如 extends、Personal configs、多种配置文件格式、可共享的配置和依赖项(npm 背锅)、root、overrides、添加 extends 到 overrides 等等。

然而时至今日，随着 JavaScript 项目越来越庞大，从整体上再来看这些配置就太复杂了。为了简化配置，ESLint 团队经过 18 个月的修订和讨论，决定着手构建一个全新的配置系统 flat config，现在可以在 ESLint v8.21.0 中通过 API 使用。

> https://eslint.org/blog/2022/08/new-config-system-part-1/

> https://eslint.org/blog/2022/08/new-config-system-part-2/

> https://eslint.org/blog/2022/08/new-config-system-part-3/

📒 [字节一面：TCP 和 UDP 可以使用同一个端口吗](https://mp.weixin.qq.com/s/3fMZN_LidCi5fiD16nNWWA)
