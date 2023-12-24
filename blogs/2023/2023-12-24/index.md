---
slug: 12月24日内容汇总
title: 12月24日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关

[多模态融合：基于机器学习的文本图像关联分析](https://mp.weixin.qq.com/s/rwip_JpRXy8L2oHLXf-Hcw)

## ⭐️ Go & 云原生 & Rust 相关

[用Rust刷LeetCode之58 最后一个单词的长度](https://mp.weixin.qq.com/s/e4PRZkKojI7VTHPSxoy8VA)

```rs
fn main() {
    let len = length_of_last_word(" hello world ".to_owned());
    println!("最后一个单词的长度为：{:?}", len);
}

pub fn length_of_last_word(s: String) -> usize {
    let s = s.trim();

    let v: Vec<&str> = s.split(' ').collect();

    v.iter().for_each(|x| println!("{}", x));

    v.last().unwrap().len()
}
```

[Golang优雅实现按比例切分流量](https://juejin.cn/post/7274046488752750651)

[AIOps在美团的探索与实践——事件管理篇](https://juejin.cn/post/7314975854171291683)

[通过实例理解OpenID身份认证](https://mp.weixin.qq.com/s/c4cqVU49bNLFQkHOvlhTDw)

[Rust中peekable的使用](https://mp.weixin.qq.com/s/FCK0wFAfL1BWym4XDeLGQg)

[Nacos 在云原生架构下的演进](https://mp.weixin.qq.com/s/jD2tGpEmxBdKwl1V1ocdMQ)

[智能化运维：KoPylot为k8S带来AI监控诊断](https://mp.weixin.qq.com/s/TWxj_VPxcOtLlJQW1OJ_QQ)

[Kubernetes EndPoint 设计与实现](https://mp.weixin.qq.com/s/2b9Plr798loCqAvkrTvx2A)

[Kubefirst：新手也能轻松快速打造生产就绪K8S平台](https://mp.weixin.qq.com/s/pfjKfl112QT59Rn4UCFQ7g)

[轻松提升Golang日志性能：无需修改代码的异步写入解决方案](https://mp.weixin.qq.com/s/-SHiG2PeltqB1jOMpi1P2A)

[10个令人惊叹的Go语言技巧，让你的代码更加优雅](https://mp.weixin.qq.com/s/VOrh6zYR1C25sZgCj2lWvw)

[Go 1.22 RC1 发布新特性：for range, math/rand/v2](https://mp.weixin.qq.com/s/_-zUCsHe0BTSkhRHsshjUg)

[Kubernetes Informer 设计与实现 (下篇)](https://mp.weixin.qq.com/s/HEAP8Y-bpSiS0kgJz8BX8g)

[鲜有人了解的同步原语Phaser，和Barrier有啥区别](https://mp.weixin.qq.com/s/---5fWMq4HKsXFL8JIlTeQ)

[当 OpenTelemetry 遇上阿里云 Prometheus](https://mp.weixin.qq.com/s/qIYX6npns4AmHegGIP7LHg)

[Go Context 到底放第一个参数传，还是放结构体里](https://mp.weixin.qq.com/s/DZl_lIueSHpdjfWJU9RrHg)

[Kubernetes Informer 设计与实现 (上篇)](https://mp.weixin.qq.com/s/88rlnYqhvS8tXp03NE4IKA)

[为大模型工程提效，基于阿里云 ACK 的云原生 AI 工程化实践](https://mp.weixin.qq.com/s/sg6s35GGIHI53UOU-pfC7g)

[Go 语言为什么很少使用数组](https://mp.weixin.qq.com/s/bhR9vTr3n3wthfkbHHD0_A)

[每个Go程序员必犯之错](https://mp.weixin.qq.com/s/ReAUdcByet0_hfKYGEKUwA)

[Go语言爱好者周刊：第 205 期](https://mp.weixin.qq.com/s/XYWXSY_aE92nj4GKbcLHxQ)

## 📒 后端相关

[腾讯工作13年之所思所想，那些优秀程序员的共性特征](https://mp.weixin.qq.com/s/XwcmvBbEFfpYUe-GL5FV-A)

[半年下云省千万：DHH下云FAQ答疑](https://mp.weixin.qq.com/s/xaa079P4DRCz0hzNovGoOA)

[用ElasticSearch时，必须先搞明白这几个基础](https://mp.weixin.qq.com/s/L8_lXuodCpObokybX6xtlw)

[一文详解 Java 限流接口实现](https://mp.weixin.qq.com/s/_xQmIkW0EmWtJ6P69rNa3g)

[什么时候都用微服务，只会害了你](https://mp.weixin.qq.com/s/jvmsa5PElt3f2sZVnAhMYQ)

[对抗复杂度的圣杯战争：软件架构究竟该如何设计](https://mp.weixin.qq.com/s/9lWFt-Uv74psPU-PTxUlJA)

[如何应对 RocketMQ 消息堆积](https://mp.weixin.qq.com/s/FBBJGsMevCOg22q0psXh9A)

[年底了，应该如何做汇报](https://mp.weixin.qq.com/s/Ppsqva_1l0CSZUx4BOjaeg)

[从腾讯视频架构重构，看DDD的概念与方法](https://mp.weixin.qq.com/s/UbojQloiOyYT5yJeIRJNig)

[DDD架构下的防御式编程：5大关卡共同保障业务数据的有效性](https://mp.weixin.qq.com/s/EBECJP0-Lpq16Wj_cXs5wg)

[银行软开，不难！](https://mp.weixin.qq.com/s/3SVnDdXPfmcxN4DbwzLxXg)

[每天精心Coding 8小时，3个月后你将得到一座……“屎山”](https://mp.weixin.qq.com/s/lEvCiGT9ee0gkD_1sm5T5w)

[欺上瞒下：什么是信息差创造价值](https://mp.weixin.qq.com/s/n5qLYvU3Dg-w768gMRdRSQ)

[TLA+ 入门教程（4）：两阶段提交](https://mp.weixin.qq.com/s/aRN0LuZmIY8SOpvhtrlgYw)

[TLA+ 入门教程（5）：Paxos](https://mp.weixin.qq.com/s/zeKYBpbgUCvc1wVeKRLaYg)

[TLA+ 入门教程（6）：Raft](https://mp.weixin.qq.com/s/gMvZvTee48h3HB_DHkZHmw)

[Paxos vs. Raft：共识算法的相同点和不同点](https://mp.weixin.qq.com/s/nDbVe3jEhDqWVtEPUffymg)

[ZooKeeper 设计原理](https://mp.weixin.qq.com/s/Qk23ADoyCyHijgZi45Haug)

[主从复制(Primary/Backup Replication)](https://mp.weixin.qq.com/s/pnJbd46gEPTpZLF1QYF-mg)

[分布式数据库是怎么实现的](https://mp.weixin.qq.com/s/r0tJ8GgWg_EcCZYDYuIPbQ)

[分布式存储系统在大数据处理中扮演着怎样的角色](https://mp.weixin.qq.com/s/CYSay56AnuwBrIst0usC4Q)

[30张图，搞懂分布式追踪系统](https://mp.weixin.qq.com/s/BQNbgQCbi7F_3rC1_1_WgQ)

[理解本质：从经济学角度看管理](https://mp.weixin.qq.com/s/p3UmyZTizEA1k51OgVcabg)

[8000字+22张图探秘SpringCloud配置中心的核心原理](https://mp.weixin.qq.com/s/xNDk8l8FzBW2B88uK65n1A)

[MySQL高级进阶：索引优化](https://mp.weixin.qq.com/s/2sssv-VB4-TYZe-9FZRGtA)

[技术人必修课：利用金字塔原理高效思考与表达](https://mp.weixin.qq.com/s/zhANMc-o31syX7l3KwtLrA)

[MySQL 单表可以放多少数据，最多 2000 万](https://mp.weixin.qq.com/s/G2Hj6YrL5LGPXe1H_lzAlw)

[Redis数据已经删除了，为什么内存占用还是很高](https://mp.weixin.qq.com/s/h5Dp-14sg0pqJPsJOkE_Mg)

[4 个维度搞懂 Nacos 注册中心](https://mp.weixin.qq.com/s/AVwerd3bkYCuzBITkmYLsg)

[Redis 性能优化 13 条军规](https://mp.weixin.qq.com/s/z3Lmv9Af3iSdhyoqeXdzsA)

## 📒 前端相关

[网易云音乐大前端监控体系（Corona）建设实践-开篇](https://juejin.cn/post/7243451555931521061)

[字节前端监控实践](https://juejin.cn/post/7195496297150709821)

[依枫在蚂蚁的四周年](https://mp.weixin.qq.com/s/jCOmuTy7yZGTaMHyuZmYMg)

[How React 18 Improves Application Performance](https://vercel.com/blog/how-react-18-improves-application-performance)

[重新思考 React 最佳实践](https://frontendmastery.com/posts/rethinking-react-best-practices/)

[React Libraries for 2023](https://www.robinwieruch.de/react-libraries/)

[v0：AI 驱动的组件创造器正式开放](https://v0.dev/)

[7个Js async/await高级用法](https://mp.weixin.qq.com/s/XQHcCZD8qKt9ulpYjthz4g)

[前端性能优化就是这么简单，你会了吗](https://mp.weixin.qq.com/s/lDnM9vzoOhpGMvyQ4XbBoA)

[《A 1-hour introduction to Next.js and React》](https://www.youtube.com/watch?v=h2BcitZPMn4)。 本教程是一份关于如何使用 Next.js 14、React、Prisma、Tailwind 以及 MySQL 搭建 Twitch 克隆应用的全套课程，是 2023 年最新版本的第一部分。在课程中，学员将了解到如何使用 JavaScript 和 SQL 语言以及其他现代编程技术和工具，步步为营地创建出一个功能完整，外观现代的线上视频游戏直播平台。该实战课程为初级到中级开发者设计，旨在提升学员记录写代码、解决问题和探索新技术的能力，最后成功搭建出 Twitch 样式的应用。

[《React Suspense 和 use Hook 使用指南》](https://sinja.io/blog/guide-to-react-suspense)。 React 的 Suspense 在 React 18 的版本中得到了重要的升级，包括对服务端渲染流和局部 hydration 的支持，并且最近在新版的 React 文档中记录了一个名为 use 的新钩子，这能大大简化 Suspense 在数据获取环节的使用。然而，Suspense 在数据获取环节上的功能并未被 React 团队认为是足够成熟且适合在生产中使用的，因此并未推荐在生产环境中使用。此外，尽管进行了新增并进行了升级，但是 use 钩子并没有被作为 React 稳定版本的一部分对外发布，要想尝试使用它，您需要使用 canary 或 experimental 的 React 渠道。Suspense 目前的使用场景包括错误隔离与数据获取等。而有趣的是，use 钩子可以在条件和循环等特殊场景下使用，扩大了 Suspense 的实际使用场景。

[《开始使用 Axum - Rust 最受欢迎的 Web 框架》](https://www.shuttle.rs/blog/2023/12/06/using-axum-rust)。 本文详细介绍了 Rust 后端框架 Axum 的使用方法，包括路由设置、连接数据库、实现 App 状态、使用 Extractors 等。Axum 对 REST 风格的 API 和 Express 风格的 API 都有很好的支持，可以通过 handler 函数轻松设置路由。在数据库设置中，可以通过 Shuttle 来进行简化操作。对于 App 状态的设置，通常是使用 struct，并需要实现 Clone。对于 HTML 识别，我们可以使用 axum::Json 来将 HTTP 请求转为 json 格式。并且，axum 与 tower 有很好的兼容性，可以直接使用 tower 中的 middleware。还介绍了如何通过 Axum 来服务静态文件，如何部署 Axum 等问题。总的来说，Axum 是一个有强大团队支持且与 Rust Web 生态系统高度兼容的框架，现在是开始编写 Rust Rest API 的好时机。

[《常见的 Rust 生命周期误解》](https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md)。 在 Rust 中，泛型 T 包括所有可能的类型，包括 &T 和 &mut T，且不能直接指定某种数据类型。另外，生命周期'static 指的不是变量数据所存在的全部时间，它包括所有 &'static T 以及所有拥有类型，比如 String，Vec 等。同时要清楚，几乎所有的 Rust 代码都是泛型代码。此外，生命周期不能在运行时变化，生命周期都是在编译时静态验证的，生命周期不能在运行时增长或缩小或以任何方式改变。Rust 的生命周期推断规则并不总是正确的，Rust 并不比你更了解你程序的语义。由于 Rust 可以隐式地重新借用 mut ref，所以你可能在意识到这个问题之前很容易碰到这个问题。这些都是对于 Rust 中的生命周期的误解。

[《用 Rust 编写操作系统》](https://os.phil-opp.com/zh-CN/)。 这份博客系列从零开始用 Rust 编程语言写一个操作系统，由浅入深地演示和讲解了用 Rust 编写操作系统的全部过程。包括最基础的内核构建、异常处理、硬件中断、内存管理以及异步等关键部分，以及操作系统设计的各种常见问题和解决办法，不仅提供了完整的教程，同时也在 Github 上公开了所有相关的源代码。

[《从零开始用 Rust 编写文件系统》](https://blog.carlosgaldino.com/writing-a-file-system-from-scratch-in-rust.html)。 本文详细阐述了文件系统 (File System) 的工作原理和各部分组成，包括数据在硬盘或 SSD 上的结构、超级块和位图、i 节点、索引节点、数据块及其用途，以及多层次索引等概念。文章也解释了如何通过文件系统构建和管理磁盘的不同部分，以及文件和目录在文件系统中是如何表示的。最后，作者通过一个名为 GotenksFS 的项目，展示了如何用 Rust 语言编写自己的文件系统，并在其中实现了一些 ext4 的技术。

[《Non-lexical lifetimes: introduction》](https://smallcultfollowing.com/babysteps/blog/2016/04/27/non-lexical-lifetimes-introduction/)。 这篇文章探讨的是 Rust 的借用检查器和对生命周期的理论，在 Rust 中，借用检查器确保在值被借用期间，不能对其进行移动或修改。这是通过为每次创建的借用分配生命周期去实现的。文章分别详述了生命周期和范围的概念，并通过实例阐释了它们之间的关系。接着给出了几个在实际编程中遇到的问题案例，再就这几个案例，作者展示了如何通过调整代码结构的方式绕过 Rust 现有的编译检查。作者表示这样的做法并不理想，并提出了通过改进编译器来解决这个问题的计划。

[《2024 年的 React 状态管理》](https://dev.to/nguyenhongphat0/react-state-management-in-2024-5e7l)。 本文作者从三个角度对 React 状态管理库进行了分类：基于 reducer 的，如 Redux 和 Zustand；基于 atom 的，如 Recoil 和 Jotai；基于 mutable 的，如 MobX 和 Valtio。每种方法都有其优势和劣势。Reducer 的优势在于其强大的状态机和时间机制，对于开发者工具的支持最好，但是需要编写大量的模板代码，学习曲线陡峭。Atom 的优势在于对 React 特性的充分利用，具有简单和可扩展性，但对开发者工具的支持较弱，不能在组件外使用状态。Mutable 往往提供最简单的 API，并具有高度的灵活性和反应性，但 “自动反应” 也可能带来问题，可能导致数据竞争和异步更新问题。作者个人更偏向于使用 Jotai，因为它没有键的要求，更加高效。

[《介绍 Waku》](https://waku.gg/blog/introducing-waku)。 Waku 是一款 React 的微型框架，它支持探究 React 服务器组件（RSC）的核心功能，并独立于传统的静态站点生成（SSG）和服务器端渲染（SSR）策略来发现 RSC 最佳实践。Waku 基于 Vite，并尽可能依赖其 API 和生态系统。其服务器入口 API 使用名为 entries.tsx 的文件，该文件位于 src 文件夹的根目录，并返回一个包含 JSX 元素的对象。客户端会向服务器发送初始请求，得到服务器的响应并通过 Slot 组件进行渲染。为了使 Waku 支持在 Vercel 上部署，利用了其构建输出 API，通过自定义 “content-type” 头部并以函数方式定义 Waku 服务器，实现了客户端发送请求到服务器并返回 RSC 负载的功能。

[MDH 前端周刊第 118 期：Electron 28、Safa 17.2、SvelteKit 2、状态管理、Waku](https://mdhweekly.com/weekly/issue-0118)
