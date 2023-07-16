---
slug: 7月16日内容汇总
title: 7月16日内容汇总
authors: [garfield]
tags: []
---

⭐️ [服务架构：大数据架构](https://mp.weixin.qq.com/s/Ane5iRMqYrtQMnC3TWlrwA)

⭐️ [使用testify包辅助Go测试指南](https://mp.weixin.qq.com/s/LppX2mvbkgsLKkqqudehQA)

⭐️ [另一种视角：我为什么放弃 Go 语言](https://mp.weixin.qq.com/s/xjjnE5hcspbNRGHP-I869A)

⭐️ [Go进阶面试题详解 | 文末送书](https://mp.weixin.qq.com/s/ldn5APfp0UooWbh4cmcM4A)

⭐️ [HTTP Router 算法演进](https://mp.weixin.qq.com/s/Vnb5akB5b5kuOt7ZrZX-EQ)

⭐️ [Go语言开发者的Apache Arrow使用指南：数据操作](https://mp.weixin.qq.com/s/Lxxfeqn70rfmnrGvgrxevA)

📒 [一个新的React概念：Effect Event](https://mp.weixin.qq.com/s/wpn1ujDvVp_VBM0_pK1-GA)

📒 [干货 | 携程商旅大前端 React Streaming 的探索之路](https://mp.weixin.qq.com/s/HUJTU5Du6318LJ7RfQNN2g)

⭐️ [go channel应用系列之控制协程数量](https://mp.weixin.qq.com/s/CUQaiZp4BrulnXvLd9ogZQ)

⭐️ [24 张图搞定 ICMP ：最常用的网络命令 ping 和 tracert](https://mp.weixin.qq.com/s/N_4ku0xYJKWtVCHhDRb9cw)

📒 [“Rust难学”只是一个谎言](https://mp.weixin.qq.com/s/_8iBshLq-3fQOD14EtNQMg)

⭐️ [Go实战：开发一个简单的gRPC Demo](https://mp.weixin.qq.com/s/rxPAcU5zhWCtRQLbh9uxKw)

⭐️ [你用过 httpguts 包吗？通过 Go 1.20.6 和 Go 1.19.11 安全更新即可了解](https://mp.weixin.qq.com/s/F6vesem86riCwZhqfD1_gQ)

⭐️ [微服务最重要的10个设计模式](https://mp.weixin.qq.com/s/HMKcGle4DwiKdOo0mRTa0Q)

⭐️ [Docker 制作容器镜像的时候， 一定不能 All in One 吗](https://mp.weixin.qq.com/s/oNoTfHwI0X9e3nk9iNCJ0Q)

⭐️ [Go defer 去掉闭包函数，靠谱吗](https://mp.weixin.qq.com/s/4vpgxwTEn-xjdmXF5Hj7Kw)

⭐️ [布谷鸟过滤器](https://mp.weixin.qq.com/s/pmx73QJx5bGMRkBn122Afw)

⭐️ Go 语言泛型

[# 跟着 Go 作者学泛型](https://polarisxu.studygolang.com/posts/go/generics/gophercon2021-generics/)

[# Go 泛型入门教程](https://polarisxu.studygolang.com/posts/go/generics/generics-tutorial/)

[# Go泛型系列：maps 包讲解](https://polarisxu.studygolang.com/posts/go/generics/generics-maps/)

[# Go 1.18 中的 any 是什么](https://polarisxu.studygolang.com/posts/go/dynamic/go1.18-any/)

[# Go泛型系列：slices 包讲解](https://polarisxu.studygolang.com/posts/go/generics/generics-slices/)

[# Go泛型系列：Go1.18 类型约束那些事](https://polarisxu.studygolang.com/posts/go/generics/generics-constraints/)

⭐️ 泛型版 singleflight

singleflight.Group 是一个结构体类型，没有导出任何字段，它代表一类工作并形成一个命名空间，在该命名空间中可以抑制工作单元的重复执行。

该类型有三个方法，它们的功能见注释：

```go
// 执行并返回给定函数的结果，确保对于给定的键，fn 函数只会执行一次。
// 如果有重复的进来，重复的调用者会等待最原始的调用完成并收到相同的结果。
// 返回值 shared 指示是否将 v 提供给多个调用者。
// 返回值 v 是 fn 的执行结果
// 返回值 err 是 fn 返回的 err
func (g *Group) Do(key string, fn func() (interface{}, error)) (v interface{}, err error, shared bool)
// 和 Do 类似，但返回一个 channel（只能接收），用来接收结果。Result 是一个结构体，有三个字段，即 Do 返回的那三个。
func (g *Group) DoChan(key string, fn func() (interface{}, error)) <-chan Result
func (g *Group) Forget(key string)
```

[泛型版 singleflight：Go 中如何防止缓存击穿](https://polarisxu.studygolang.com/posts/go/pkg/singleflight-generic/)

⭐️ Gin 框架 `Bind` 函数如何实现参数绑定

[gin 源码阅读(4) - 友好的请求参数处理](https://mp.weixin.qq.com/s/2OI9vh_LGPxtGkhF-AnWDA)

[「Go 框架」bind 函数：gin 框架中是如何绑定请求数据的](https://juejin.cn/post/7213022785366097975)

📒 [nginx反向代理https域名时，请求报错502问题排查](https://mp.weixin.qq.com/s/S7EGoOoR2hbIDNwobakd4A)

📒 [【第2994期】如意设计助手：Figma Dev Mode下生成React代码](https://mp.weixin.qq.com/s/WmkdNWyV6MHJtmlvtbDipA)

⭐️ [Google SRE 创始人讲解 SRE 方法论](https://mp.weixin.qq.com/s/JVvuRIl4Dq7qRrD9q2Uj4Q)

⭐️ [Docker 多架构镜像介绍和最佳实践](https://mp.weixin.qq.com/s/yx4NNA904xGEOFUhqtBZTw)

⭐️ [基于Redis实现一个简单的固定窗口限流器](https://mp.weixin.qq.com/s/6aicpVC3qjRpf1ILI4V4lA)

⭐️ [Go语言爱好者周刊：第 194 期 — 开销从20%下降到不到1%](https://mp.weixin.qq.com/s/JOzfYKaKF_LzL6kc_yNGGg)
