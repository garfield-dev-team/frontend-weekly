---
slug: 1月14日内容汇总
title: 1月14日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关

[中信建投 | AI前沿系列（一）：混合专家模型技术（MoE）](https://mp.weixin.qq.com/s/KpRT1MCq7ewJw_Heb5-ZrA)

[《开源大模型食用指南》发布，7个小时，一杯奶茶速通大模型！](https://mp.weixin.qq.com/s/78mSLefUmZOagwZ5dMUyTg)

[Stable Diffusion XL Turbo 文生图和图生图实践](https://mp.weixin.qq.com/s/0rS1qX37M-4FQT-d2DIsPw)

[在 Nvidia Docker 容器编译构建显存优化加速组件 xFormers](https://mp.weixin.qq.com/s/3TgTDsUHCs8tcNLcabqukg)

[Amazing OpenAI API：把非 OpenAI 模型都按 OpenAI API 调用](https://mp.weixin.qq.com/s/Tw8Yr_illbY6MQO4sAMO7g)

[节省时间：AI 模型靠谱下载方案汇总](https://mp.weixin.qq.com/s/5wiz-IaGhGFlbHmRdf1TUA)

[修复 OpenCV 依赖错误的小工具：OpenCV Fixer](https://mp.weixin.qq.com/s/PEHW4XJv0D2IN0W92CAi3A)

## ⭐️ Go & 云原生 & Rust 相关

[Go 发布了一个非安全补丁的 Go 1.21.6](https://mp.weixin.qq.com/s/qeEO2zK7mz9JUYocHetBHA)

[Go1.22 新特性：新的 math/rand/v2 库，更快更标准！](https://mp.weixin.qq.com/s/BsZeSDxHwwSzjLjfjUIgIA)

[每秒百万数据点 Go 应用监控系统演进](https://mp.weixin.qq.com/s/ezG3VQLgE2e0AWSxsoBHRg)

[别再用GDB了，一文掌握Go最好用的调试器Delve](https://mp.weixin.qq.com/s/Ed39t5I0k0ynfPch-ex7Ag)

[Kubernetes CronJob 设计与实现](https://mp.weixin.qq.com/s/ZNojELz-zTGybcpGgCtfng)

[\[go 面试\] 实现服务高可用的策略和实践](https://mp.weixin.qq.com/s/-JBLJhU47kocCKXvBe-4uA)

[我是如何实现Go性能5倍提升的](https://mp.weixin.qq.com/s/HZCqoRgBcT3ZNAlnlChS-Q)

[深入理解Go标准库-ServeMux的使用与模式匹配](https://mp.weixin.qq.com/s/TU9FL2SVe5TW7Uq5I0o_Sg)

[深入理解Go标准库-http server的启动](https://mp.weixin.qq.com/s/s3BWg6iiCcDZRFh7oZJj5Q)

[使用 Grafana 和 Loki 监控传说中的武当纵云梯](https://mp.weixin.qq.com/s/fKFSOA0ZoFLN4dedlRp-HA)

[Grafana 教程 - 构建你的第一个仪表盘](https://mp.weixin.qq.com/s/ivK0UmZjvtrJ_WyonwxN2w)

[成本更低、更可控，云原生可观测新计费模式正式上线](https://mp.weixin.qq.com/s/AbggxNJXCMSAfmuIQ59E8A)

[Kubernetes Job 设计与实现](https://mp.weixin.qq.com/s/FTf4VK1CV-hgf_LgB0T8fA)

[依赖Kafka的Go单元测试例解](https://mp.weixin.qq.com/s/M_lV7FaIMxZGd6pZ9dDaAw)

[Go1.22 新特性：for 循环不再共享循环变量，且支持整数范围](https://mp.weixin.qq.com/s/OnvniPEvDz6k5LLKGH1MFA)

[Go运行时的并发原语](https://mp.weixin.qq.com/s/Lhw_VFL8UHD9edfbKt_QjQ)

[Go语言中常见100问题-#94 Not being aware of data alignment](https://mp.weixin.qq.com/s/yHWzh89g6Naz0xRmo5FdGw)

[Go 语言中 defer 使用时有哪些陷阱](https://mp.weixin.qq.com/s/g6ohhBBQd0u4PzD1KhnKCA)

[Go语言之父的反思：我们做对了什么，做错了什么](https://mp.weixin.qq.com/s/1BTdUMMPIMDobh1ZJ_gXAQ)

[学习C++20, 为Go的atomic类型插上一双翅膀](https://mp.weixin.qq.com/s/Nbc_V5v5QruZsd1PVsDQnA)

## 📒 后端相关

[这些年背过的面试题 — 架构设计篇](https://mp.weixin.qq.com/s/Qwj4S4r9Mayy5_HG3ubw7w)

[这些年背过的面试题——Spring篇](https://mp.weixin.qq.com/s/faEtlyaNHW9AWE6LMTs4Ng)

mysql 的 binlog、redolog、undolog 是啥：

- Binlog（二进制日志）：
  - 用于复制：在主从复制中，从数据库会重放主数据库中存储的 binlog，以实现主从同步。
  - 数据库恢复：binlog 可以用于数据库的按时间点还原。
- Redo log（重做日志）：
  - 确保事务的持久性：在事务提交前，redo log 会将事务的修改操作记录下来，以确保在系统崩溃或重启时，可以重新执行这些操作。
  - 防止脏页写入：在系统崩溃时，redo log 可以防止脏页（未提交的数据页）被写入磁盘。
- Undo log（撤销日志）：
  - 用于事务的回滚：在事务执行过程中，undo log 记录了事务修改前的数据版本，以便在事务回滚时恢复数据。
  - 多版本并发控制（MVCC）：undo log 支持数据库的多版本并发控制机制，允许事务在不加锁的情况下读取一致的数据。

这些日志文件在 MySQL 中扮演着不同的角色，确保了数据库的一致性、持久性和并发控制。

[使用懒加载 + 零拷贝后，程序的秒开率提升至99.99%](https://mp.weixin.qq.com/s/kaogMK5qz5vkfs9-BYu0Mg)

[万字+20张图探秘Nacos注册中心核心实现原理](https://mp.weixin.qq.com/s/NYH6jgDOp1MwnAUyUHM5yg)

[7000字+30张图看懂分布式追踪系统原理](https://mp.weixin.qq.com/s/8CYXOML5LvRlFRpNFOQCjw)

[拒绝用复杂度自慰：下云高可用的秘诀](https://mp.weixin.qq.com/s/yIVal-9U6_TXX-dZpVtjBg)

[公司为什么要使用OKR，目的是什么](https://mp.weixin.qq.com/s/L-pb5GgWSVJsJa_nnWMVQQ)

[阿里面试：说说Rocketmq推模式、拉模式](https://mp.weixin.qq.com/s/gnRiDUhAvTgjXaQiROB66A)

[分布式事务概述与项目实战](https://mp.weixin.qq.com/s/0Io-X0S9AY-s0HeRb_jbag)

[分布式锁最终解决方案是RedLock吗？为什么](https://mp.weixin.qq.com/s/lbSJAv8zJ7NG4G3beNExUA)

[刷了四百道算法题，我在项目里用过几道呢](https://mp.weixin.qq.com/s/Xna4EDDPvg3vmMUgmsNewQ)

[烂大街的缓存穿透、缓存击穿和缓存雪崩，你真的懂了](https://mp.weixin.qq.com/s/MsU0eNt4k7WqpBOQ8CAotA)

[抖音提前批二面：为啥不推荐使用外键](https://mp.weixin.qq.com/s/4Q7FzxgkqYCb5fGOARhvDg)

[增加索引 + 异步 + 不落地后，从 12h 优化到 15 min](https://mp.weixin.qq.com/s/V2p_p-KoDowlZxLN2by2Sg)

## 📒 前端相关

[有了它 Antd 样式覆盖不要太爽](https://mp.weixin.qq.com/s/0Tr3tNwl2wwZ3mVqB97mQg)

[一文带你从0到1做性能优化——国际化业务中台性能优化实践（上）](https://mp.weixin.qq.com/s/SZ-PHb5Mi3KnaEo3yNjR7g)

Bun 如何设置 npm registry，有时会用到 bunx 命令，会自动下载 npm 包，因此需要配置 npm registry：

```bash
# 在根目录建一个 `.bunfig.toml` 配置文件
$ vi $HOME/.bunfig.toml
```

写入如下内容：

```toml
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"
```

> 参考：https://bun.sh/docs/install/registries

[两个 React](https://mp.weixin.qq.com/s/AKdqtR6DWxB-c4CCmz594g)

[2024 年前端预测](https://mp.weixin.qq.com/s/BO29XPm7c9VKcQT_v9lOGw)

[业务中后台用户体验优化方法论总结（体验篇）](https://mp.weixin.qq.com/s/vXQR_eTKAYI3_ylXxQJTLA)

[分享4 个你可能感兴趣的 TikTok 前端面试题](https://mp.weixin.qq.com/s/0bzsHVqxoyl9uth3iymp0A)

[Chrome 三方 Cookie 禁用已正式开始！](https://mp.weixin.qq.com/s/9O7D5mugTmnUuMinQmaEOw)

[使用 Taro 开发鸿蒙原生应用 —— 快速上手，鸿蒙应用开发指南](https://mp.weixin.qq.com/s/FcQocQdxeaQijAA6oUjAZg)
