---
slug: 11月12日内容汇总
title: 11月12日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关



## ⭐️ Golang 相关

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

[不是吧？async/await异常捕获你还在用try-catch～](https://mp.weixin.qq.com/s/5wd4JhZyLXL9uC4lYBgnoA)

[Why You Want React Query](https://tkdodo.eu/blog/why-you-want-react-query)

[Rspack 的设计背景和探索之路](https://mp.weixin.qq.com/s/jgchwpeOl5Q-fwPkndrjSg)

[ECMAScript 2023：为JavaScript带来新的数组复制方法](https://mp.weixin.qq.com/s/iUmEeR8kUMHYg8KOg0ZAkw)

[Antd Procomponent 之 proForm - 高级表单](https://mp.weixin.qq.com/s/ohUlwznu3HrmTE_zLX976w)

[Guide to React Suspense: From Code Splitting to Data Fetching](https://hackernoon.com/the-evolution-of-react-suspense-from-code-splitting-to-data-fetching)

[MDH 前端周刊第 112 期：Docusaurus 3、Remix & Vite、D2、React Forget](https://mdhweekly.com/weekly/issue-0112)
