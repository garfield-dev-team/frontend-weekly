---
slug: 9月24日内容汇总
title: 9月24日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关



## ⭐️ Golang 相关

[基于 RPC 和 TypeScript 的 BFF 设计与实践](https://mp.weixin.qq.com/s/g-5ySYLgutEfBXfXxVUdGw)

[硬核！美团秋招一面](https://mp.weixin.qq.com/s/DgeLtTdtA0nETFfb_KbqcA)

[Grafana 开源了一款 eBPF 采集器 Beyla](https://mp.weixin.qq.com/s/Oj4kvUy_5LaRz4kUbBwo5Q)

[Go 语言如何获取 CPU 利用率](https://mp.weixin.qq.com/s/yLVBm9IU7VY2kltUhoj8wg)

[使用Singleflight优化Go代码](https://mp.weixin.qq.com/s/j9Obe6Na25388AzeSL1dRA)

结合 pprof 分析了启用 PGO 前后性能差异。比较意思的点，启用 PGO 之后性能提升最明显的竟然是 GC（`runtime.scanobject`）。为啥可以提升 GC 性能，因为 PGO 可以分析 hot function 调用，让这些函数内联（正常编译器不一定会内联），原本一个函数返回结构体指针，会逃逸到堆内存，内联之后就分配到栈内存了，因此可以减少堆内存分配，进而减少 GC 压力。相比之下，业务代码的性能反而会略微下降。

[Profile-guided optimization in Go 1.21](https://go.dev/blog/pgo)

[Perfectly Reproducible, Verified Go Toolchains](https://go.dev/blog/rebuild)

[SpringBoot 玩一玩代码混淆，防止反编译代码泄露](https://mp.weixin.qq.com/s/-1RFns_jor8kbPZ90FkgOg)

[Go 项目必备：深入浅出 Wire 依赖注入工具](https://mp.weixin.qq.com/s/gC4D9CqeYAd-jPotKgIV4g)

[Golang channel 三大坑，你踩过了嘛](https://mp.weixin.qq.com/s/7vDklpTsbRdRDvB0-yvB5g)

[长达 1.7 万字的 explain 关键字指南！](https://mp.weixin.qq.com/s/XeqdXwBQ2BPXBtrXXvMAlg)

[从内核世界透视 mmap 内存映射的本质（原理篇）](https://mp.weixin.qq.com/s/AUsgFOaePwVsPozC3F6Wjw)

[做好这四步，服务端轻松成为全栈化人才](https://mp.weixin.qq.com/s/q69gpYcICbBTkVwGS6W8Wg)

[如何在Kubernetes中使用Init Container](https://mp.weixin.qq.com/s/4jXJL8ajZmzx1g38_Mr9Qg)

[Go 官方新玩具：漏洞管理和扫描，看看自己项目有没有坑](https://mp.weixin.qq.com/s/xO_w3FvNN8OeiuEYFarwGQ)

## 📒 前端相关

[前端食堂技术周刊第 99 期：Remix 2.0、v0、2023 组件库盘点、TS Config 备忘录、Hello 算法](https://juejin.cn/post/7280007126000795700)

[MDH 前端周刊第 106 期：v0、Remix 2、TSConfig、Bun](https://mdhweekly.com/weekly/issue-0106)
