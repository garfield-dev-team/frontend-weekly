---
slug: 11月12日内容汇总
title: 11月12日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关



## ⭐️ Golang 相关

[Fourteen Years of Go](https://go.dev/blog/14years)

[Go 团队发布 Go 14 周年回顾！附加更完整新特性脑图！](https://mp.weixin.qq.com/s/5jKjVbyF2R5ux0cVd8XScw)

[米哈游大数据云原生实践](https://mp.weixin.qq.com/s/VTV9J6J1J-KZlYO79M_J4g)

[没用过微服务？别慌，丐版架构图，让你轻松拿捏面试官](https://mp.weixin.qq.com/s/R-w5_FCVBmesVpLNFxWNhw)

[并发编程巅峰对决：Go vs Rust](https://mp.weixin.qq.com/s/K5URjtOJLKVJd8XVKoK5UQ)

[Sentinel为什么这么强，我扒了扒背后的实现原理](https://mp.weixin.qq.com/s/FewOTrevjiCfooVIVwo4Xg)

[写给go开发者的gRPC教程-gRPC Gateway](https://mp.weixin.qq.com/s/F132eyy08YRuA1i8wy73AQ)

Rust 中的异步编程模型

Rust 作为一门现代的系统级编程语言，旨在提供高效、安全和可靠的异步编程能力。Rust 异步编程的目标是实现高性能、无安全漏洞的异步应用程序，同时提供简洁的语法和丰富的异步库。

由于并发编程在现代社会非常重要，因此每个主流语言都对自己的并发模型进行过权衡取舍和精心设计，Rust 语言也不例外。下面的列表可以帮助大家理解不同并发模型的取舍:

- **OS 线程**, 它最简单，也无需改变任何编程模型(业务/代码逻辑)，因此非常适合作为语言的原生并发模型，我们在多线程章节[3]也提到过，Rust 就选择了原生支持线程级的并发编程。但是，这种模型也有缺点，例如线程间的同步将变得更加困难，线程间的上下文切换损耗较大。使用线程池在一定程度上可以提升性能，但是对于 IO 密集的场景来说，线程池还是不够看。
- **事件驱动(Event driven)**, 这个名词你可能比较陌生，如果说事件驱动常常跟回调( Callback )一起使用，相信大家就恍然大悟了。这种模型性能相当的好，但最大的问题就是存在回调地狱的风险：非线性的控制流和结果处理导致了数据流向和错误传播变得难以掌控，还会导致代码可维护性和可读性的大幅降低，大名鼎鼎的 JS 曾经就存在回调地狱。
- **协程(Coroutines)**  可能是目前最火的并发模型，Go  语言的协程设计就非常优秀，这也是  Go  语言能够迅速火遍全球的杀手锏之一。协程跟线程类似，无需改变编程模型，同时，它也跟  async  类似，可以支持大量的任务并发运行。但协程抽象层次过高，导致用户无法接触到底层的细节，这对于系统编程语言和自定义异步运行时是难以接受的
- **actor 模型**是 erlang 的杀手锏之一，它将所有并发计算分割成一个一个单元，这些单元被称为  actor , 单元之间通过消息传递的方式进行通信和数据传递，跟分布式系统的设计理念非常相像。由于  actor  模型跟现实很贴近，因此它相对来说更容易实现，但是一旦遇到流控制、失败重试等场景时，就会变得不太好用
- **async/await**， 该模型性能高，还能支持底层编程，同时又像线程和协程那样无需过多的改变编程模型，但有得必有失，async  模型的问题就是内部实现机制过于复杂，对于用户来说，理解和使用起来也没有线程和协程简单，好在前者的复杂性开发者们已经帮我们封装好，而理解和使用起来不够简单，正是本章试图解决的问题。

[Rust并发编程 - 第三章 async/await 异步编程](https://mp.weixin.qq.com/s/hnKNjqlYrdtI8ZLpJx5ufg)

[只改一个参数让Golang GC耗时暴降到1/30！](https://mp.weixin.qq.com/s/EEDNuhEr0G4SbTzDhVBjbg)

[不想引入mq？试试debezium](https://mp.weixin.qq.com/s/cF-OkAmAdSLkgGrxTr181w)

[考考你，给32位系统的电脑插个8G的内存条会发生什么](https://mp.weixin.qq.com/s/-fPOGnp8RkHbS7Zxj1Ot5Q)

Redis 消息队列和 Kafka 有啥区别

Kafka 消息会落盘，会持久化，但是 Redis 是基于内存的消息队列，如果实例重启会导致数据丢失。Redis 如何实现高可用，有两种方式，1）生产环境会用 Redis 集群模式，有多个副本，读写操作都是针对主节点，会异步复制给从节点，保证最终一致性。假如主节点挂了，则会在从节点中选举一个新的主节点，2）Redis 也支持持久化。

此外，Kafka 相对于 Redis 消息队列在吞吐量和延迟方面更为优秀（同一个 Topic 下可以有多个 Partition），可以处理更高的消息流量，并且具备较低的延迟。

RPC 调用和浏览器 HTTP 请求有啥区别

RPC 也称为内部调用，client 启动的时候会创建一个连接池，提前建立 tcp 链接，后续调用都复用 tcp 链接，避免频繁的 tcp 三次握手，提升性能。此外 RPC 调用还有一套服务发现机制（类似 DNS），可以直接用服务名的方式调用。由于内部调用不经过网关，因此需要在调用方实现负载均衡，比如 OpenFeign 底层基于 Ribbon 实现负载均衡。

浏览器发送 HTTP 请求则需要在发送请求的时候实现 DNS 解析、TCP 三次握手等操作，一定程度上会影响性能。之前写过一个 Node 服务，在 Node 环境用 http 模块去调用其他接口，实际上会带来一定的性能开销。如果在程序频繁执行到的关键路径上，改用微服务 RPC 调用方式可以提升性能。

[Apache RocketMQ，构建云原生统一消息引擎](https://mp.weixin.qq.com/s/cQAE6wjdq8ceBOGPfjMnqQ)

[25张图盘点 RocketMQ 11 种消息类型！](https://mp.weixin.qq.com/s/2SIHvNQ9vRBEE4QK-66wXg)

[聊聊如何在Java应用中发送短信](https://mp.weixin.qq.com/s/hwMRHrBe4WxgxPkNXixIvg)

[Go1.21.4 发布了：官方图片竟然用的 loong64](https://mp.weixin.qq.com/s/uTnb9QQrFfs5jdmFmFzd7Q)

[Golang面试题从浅入深高频必刷「2023版」| 文末送书](https://mp.weixin.qq.com/s/zEEheI-1UFT6DZAKbEtxIw)

[盘点golang中的开发神器](https://mp.weixin.qq.com/s/gkv96bC9FLkI6jLduWlBag)

[Go 透明文件夹的特性，有没有必要加](https://mp.weixin.qq.com/s/pYgV9F0qMTcSKXlgTzfSKw)

[24 个 Docker 常见问题处理技巧](https://mp.weixin.qq.com/s/3Dbv6mLdit2z49yn4Ir5Jw)

[烂大街的 RPC 项目，如何和字节面试官聊出花儿来](https://juejin.cn/post/7256425827330474042)

[一次 Netty 代码不健壮导致的大量 CLOSE_WAIT 连接原因分析](https://juejin.cn/post/7171236509683548197)

[应用容器化后为什么性能下降这么多](https://juejin.cn/post/7268663683881828413)

[只改一行语句，锁这么多](https://mp.weixin.qq.com/s/0GDk_4b4JUPBmKWDdEbp1A)

[Rust并发编程番外篇: Mutex内部实现](https://mp.weixin.qq.com/s/ieIeEN6kwhwFEagk2bK39Q)

## 📒 前端相关

[2023云栖大会的新鲜事](https://juejin.cn/post/7298347391165218843)

[不是吧？async/await异常捕获你还在用try-catch～](https://mp.weixin.qq.com/s/5wd4JhZyLXL9uC4lYBgnoA)

[Why You Want React Query](https://tkdodo.eu/blog/why-you-want-react-query)

[Rspack 的设计背景和探索之路](https://mp.weixin.qq.com/s/jgchwpeOl5Q-fwPkndrjSg)

[ECMAScript 2023：为JavaScript带来新的数组复制方法](https://mp.weixin.qq.com/s/iUmEeR8kUMHYg8KOg0ZAkw)

[Antd Procomponent 之 proForm - 高级表单](https://mp.weixin.qq.com/s/ohUlwznu3HrmTE_zLX976w)

[Guide to React Suspense: From Code Splitting to Data Fetching](https://hackernoon.com/the-evolution-of-react-suspense-from-code-splitting-to-data-fetching)

[MDH 前端周刊第 112 期：Docusaurus 3、Remix & Vite、D2、React Forget](https://mdhweekly.com/weekly/issue-0112)
