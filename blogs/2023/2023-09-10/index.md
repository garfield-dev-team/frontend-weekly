---
slug: 9月10日内容汇总
title: 9月10日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关



## ⭐️ Golang 相关

[降本增效 - 应用优化 (一)](https://mp.weixin.qq.com/s/eQnd8ky9LvCzOi4QibR04w)

[【面试高频题】二叉树"神级遍历"入门](https://mp.weixin.qq.com/s/ppVzFbcFB-PFWtyvPSpkVQ)

ELK Stack生产实践

在云原生微服务架构模式下，应用程序通常被设计成无状态（stateless）的，即应用程序不依赖于特定的运行环境状态。这种设计理念使得应用程序可以更加灵活地部署和扩展。

在 Kubernetes 中，容器的标准输出流（stdout）和标准错误流（stderr）默认被重定向到 Pod 的 stdout 和 stderr。这样，应用程序在容器中的日志输出将被重定向到 Pod 的 stdout，可以通过 Kubernetes 日志收集器（如 Fluentd、ELK Stack 等）将这些日志收集并发送到日志存储或分析系统中。

通过将日志输出到 Pod 的 stdout，可以实现以下好处：

- 简化日志收集：无需在应用程序中实现特定的日志收集逻辑，只需将日志输出到 stdout 即可，由 Kubernetes 的日志收集器负责收集和处理。
- 可移植性：无论应用程序在何种环境中运行（如本地开发环境、云平台等），日志输出都可以保持一致，不需要修改代码。
- 可扩展性：由于容器是可以水平扩展的，多个容器实例共享同一个 stdout，可以方便地集中管理和处理日志。

[ELK Stack生产实践——Docker部署ELK8.8与日志采集](https://mp.weixin.qq.com/s/n6ULJJBvfJ4_Sgxdh2WBgA)

[ELK Stack生产实践——ES索引策略配置与管理](https://mp.weixin.qq.com/s/UmEv4e6GCNe6xpnCWabxBA)

[ELK Stack生产实践——数据查询与数据可视化(Kibana)](https://mp.weixin.qq.com/s/4rmcPcyVMxrAwQjt49BITQ)

[ELK Stack生产实践——数据查询与数据可视化(Grafana)](https://mp.weixin.qq.com/s/_8g4wt2cc3pp8rgTbJkIZg)

[ELK Stack生产实践——ELK监控与告警(Kibana)](https://mp.weixin.qq.com/s/cHLofMk6SL6lmdmzkvPXrA)

[ELK Stack生产实践——ELK监控与告警(Prometheus)](https://mp.weixin.qq.com/s/k50ht3S_Wui_qdhuYedyKw)

[ELK Stack生产实践——pod日志采集（Elastic Agent方案）](https://mp.weixin.qq.com/s/OU9hJYciHrw6fO2avZj5WA)

[Linux防火墙Iptables原来这么简单（图文并茂）](https://mp.weixin.qq.com/s/9IFFcaJUGjdRSB-cpsf2BQ)

[Go 1.21 是不是还没用上？新版又来了](https://mp.weixin.qq.com/s/bOvXuDl-h1YTa4i1LlHqWQ)

[00 后架构师，那可能么](https://mp.weixin.qq.com/s/8X-4tFJ7vYjFLTwFwCu2jg)

[一文带你了解Docker与Containerd的区别](https://mp.weixin.qq.com/s/3ogn_Bkw4sj1KpAok-61ng)

[Ingress企业实战：实现GRPC与WebSocket服务访问](https://mp.weixin.qq.com/s/MhbwVmFQpTOpt0mcHVLhgw)

[Kubernetes 应用最佳实践 - 资源请求和限制](https://mp.weixin.qq.com/s/oa9LbDqmC6DGfmbsWQIGGA)

[Traefik 企业实战：TraefikService篇](https://mp.weixin.qq.com/s/MtyG7vxYKo3o9AHrbU1uQQ)

[探索 Go1.21 中的 slices 包：原理，特点和示例](https://mp.weixin.qq.com/s/2tFBe6LH84dZnOcfkgX32w)

[「GoCN酷Go推荐」协程池ants介绍](https://mp.weixin.qq.com/s/wGqwfX8lEifeD_VGcITmHw)

[「GoCN酷Go推荐」使用 cmux 实现服务端连接多路复用](https://mp.weixin.qq.com/s/2cERDCRKlmfHKv8gY324Hg)

[MySQL连环炮，你扛得住嘛](https://mp.weixin.qq.com/s/wrKHFRVgn1aSFYIZ6deVnQ)

[深入剖析 Golang 程序启动原理 - 从 ELF 入口点到GMP初始化到执行 main！](https://mp.weixin.qq.com/s/tgBqY3xYbk5IBzViL9eaiA)

[Prometheus-Operator：告警排班功能实现](https://mp.weixin.qq.com/s/e8s5fWMTDdb-fWlmOPUcNA)

[slog实战：文件日志、轮转与kafka集成](https://mp.weixin.qq.com/s/7jS6E6d578QQIxvWKSux1Q)

[电脑用GoLand太卡，记录下自己把VsCode定制成Go IDE的步骤和过程](https://mp.weixin.qq.com/s/gNQETEVBMOH0US42M0uODg)

[Go语言爱好者周刊：第 199 期 —— 一图掌握 Go1.21 的新特性](https://mp.weixin.qq.com/s/F2t7AFgiHyQbnvWr9Ds9DA)

## 📒 前端相关

[/[通明境 · React架构/]通俗地讲React，优雅地理解React](https://mp.weixin.qq.com/s/ganW_F5GhQV-8s9N2y7jaw)

[React-Router 6.10+KeepAlive的约定式路由最佳实践](https://mp.weixin.qq.com/s/daHYuCfstHYqAtscn5T4WQ)

[干货！我是如何在一线大厂实践webpack优化的](https://mp.weixin.qq.com/s/MWf07S5avWzK7vdzhpFsoA)

[构建高性能 React Native 跨端应用—图片与内存](https://mp.weixin.qq.com/s/FMDx36cPxgeLkCMIneV6vg)

[MDH 前端周刊第 104 期：Astro 3、Npm 10、Biome、State of CSS 2023](https://mdhweekly.com/weekly/issue-0104)
