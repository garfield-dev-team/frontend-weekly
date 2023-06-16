---
slug: 6月18日内容汇总
title: 6月18日内容汇总
authors: [garfield]
tags: []
---

⭐️ [【第2973期】携程Web组件在跨端场景的实践](https://mp.weixin.qq.com/s/2Dy5RsviZlo7SPA648Mj3g)

⭐️ [sync.Pool 高性能设计之集大成者](https://mp.weixin.qq.com/s/dLzWAqM9lCln83jhkvmtMw)

⭐️ [Go 1.21.0 带来了什么新特性？min 和 max 内置函数解析](https://mp.weixin.qq.com/s/pecIdGmfMPSl9p74zkZB0g)

⭐️ [K8S资源限制实战：优化性能与资源管理](https://mp.weixin.qq.com/s/_UXAFif7Ij89bB0c5S-M2A)

📒 [如何优雅的使用 React Context](https://juejin.cn/post/7244838033454727227)

⭐️ [聊聊为什么 IDL 只能扩展字段而非修改](https://mp.weixin.qq.com/s/6Y40fr2qGvOxl8xX5HBCjg)

📒 [【第2972期】Wukong 动态化组件能力实践](https://mp.weixin.qq.com/s/jx-ozy6lY57qmdgCG-Gu8A)

⭐️ [Gin 框架是如何处理 panic 的](https://mp.weixin.qq.com/s/dUqK0-1RYtZTadHWf0s3sw)

⭐️ [深入解析go channel各状态下的操作结果](https://mp.weixin.qq.com/s/fz-o9yWj1qPhdCNXSqTMtg)

📒 [React Server Component 从理念到原理](https://juejin.cn/post/7244452476190752829)

⭐️ [一文实战K8S中的服务发现和负载均衡](https://mp.weixin.qq.com/s/cP_EsQZZ4PFpwhMbt5Ld2g)

⭐️ Go 语言 GC 相关

Go GC 使用三色标记法，在 GC 压力大时用户态 goroutine 是要 assit 协助标记对象的，每个业务goroutine都有机会参与到GC标记工作中来！并且，这种标记辅助采用的是一种补偿机制，即该业务goroutine分配的内存越多，它要辅助标记的内存就越多。

如何优化 GC 的开销：
- 减少GC次数来间接减少STW次数，缺点是以整个程序的内存开销增大为代价的，稍有不慎可能就会触发OMM killed。
- 减少堆内存的分配和释放。GC开销大的根源在于heap object多，Go的每轮GC都是FullGC，每轮都要将所有heap object标记(mark)一遍，即便大多数heap object都是长期alive的，因此，一个直观的降低GC开销的方法就是减少heap object的数量，即减少alloc。

[Go GC：了解便利背后的开销](https://mp.weixin.qq.com/s/ZLT8TBB5ibKQ4ahDEj2FHA)

[真实环境下大内存 Go 服务性能优化一例](https://mp.weixin.qq.com/s/jGGCccMOx4s5asG2IXWNMQ)

⭐️ [Go 内存管理概述](https://mp.weixin.qq.com/s/mhZtToQR9sdT5G5x1da2nA)

📒 [或许，你根本不需要全局状态管理](https://mp.weixin.qq.com/s/pUPBYM2GxeDp6b8vHwVs9Q)

📒 [项目规范：让你的代码更上一层楼](https://mp.weixin.qq.com/s/Za3FE5cpDpy5ygfrVL9TOQ)

📒 [Vue和React权限控制的那些事](https://juejin.cn/post/7242677017034915899)

⭐️ Go fasthttp 相关文章

[fasthttp 为什么比标准库快 10 倍](https://mp.weixin.qq.com/s/aFdRLWAziAb_4aUdHYUipg)

[fasthttp：比net/http快十倍的Go框架(server 篇)](https://cloud.tencent.com/developer/article/1839675)

[Go标准库http与fasthttp服务端性能比较](https://mp.weixin.qq.com/s/aX9_ZAXfDQZQZrkq-6DZew)

[Golang fasthttp实践](https://mp.weixin.qq.com/s/SxDigwsicUsy8vZHPoCMMA)

⭐️ [「有问必答」Gopher如何优雅的对时间进行格式化](https://mp.weixin.qq.com/s/SLiiRbg9zMGQ6dZLRQAmuw)

📒 [揭秘 JavaScript 代码整洁技巧，让你的项目更出众](https://mp.weixin.qq.com/s/yBIPU7Jm3W2mHPifW-fPCg)

📒 [技术派中ES集成的实现姿势](https://mp.weixin.qq.com/s/WVGacMS9xqrNY1_ko1aP3Q)

⭐️ [Go1.21 速览：go.mod 的 Go 版本号将会约束 Go 程序构建，要特别注意了！](https://mp.weixin.qq.com/s/s13EBwOExsVz_vwNEm0fvQ)

⭐️ [基于 Docker 的深度学习环境：入门篇](https://mp.weixin.qq.com/s/6Ae6SgEws5gndQwmZqkcUg)

📒 [网易云音乐大前端监控体系（Corona）建设实践-开篇](https://juejin.cn/post/7243451555931521061)

⭐️ [Go 配置管理库 Viper 怎么读取结构体嵌套的配置信息](https://mp.weixin.qq.com/s/BxKoRUTMzowo6bJ3LeRSNA)

📒 [如何基于 napi-rs 打造 Rust 前端工具链](https://juejin.cn/post/7243413934765408315)

📒 [深入理解Render阶段Fiber树的初始化与更新](https://mp.weixin.qq.com/s/RX8R-5o6RgPCgm9jsIzuGg)

📒 [虚拟滚动的3种实现方式~学完直接写简历亮点上！](https://mp.weixin.qq.com/s/WB-a7W4FGXM1kypnTMEmFw)

📒 [【第2969期】FormRender 2.0 开箱即用表单方案](https://mp.weixin.qq.com/s/rcPsbKyM-rPz_rJIEE1NHA)

⭐️ [The State Of Go 2023](https://mp.weixin.qq.com/s/-EAH8jjj4uy1LCr_9C1ghg)

⭐️ [Go协程池(1): 线程vs协程](https://mp.weixin.qq.com/s/rgecHCCgBEpSC3lOQMn9Lg)

⭐️ [Go语言爱好者周刊：第 190 期 —— GopherChina 2023 PPT 下载](https://mp.weixin.qq.com/s/r-QE41YEmycvOldt9oaUrg)
