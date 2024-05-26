---
slug: 5月26日内容汇总
title: 5月26日内容汇总
authors: [garfield]
tags: []
---

![alt text](maxresdefault.jpg)

封面图：Safe by construction - Roberto Clapis

## 🌟 AI 相关

[《训练你自己的多模态大模型》](https://mp.weixin.qq.com/s/8UG_NKD4F7xW6QeU76x4sA)。作者介绍了如何根据官方教程训练LLaVA v1.5多模态模型。文章首先说明训练包括特征对齐阶段和视觉指令微调阶段。特征对齐阶段训练MLP连接器，使用LAION-CC-SBU数据集的558K子集；视觉指令微调阶段则通过GPT-4生成的150K条数据及515K条VQA数据进行训练。作者详细描述了数据准备和下载过程，并提供了各阶段训练脚本以及所需资源。文章为研究者和开发者提供了完整的操作指南，帮助实现多模态模型的自主训练。

[《Anthropic | 数百万个特征，带你深入理解大模型的「思维」!》](https://mp.weixin.qq.com/s/f-_GOiwbXOvsE-UzSh0lSg)。本文作者介绍了Anthropic在理解大模型内部运作机制方面的最新进展。团队通过在Claude Sonnet模型中提取数百万个特征，揭示了GPT等AI模型的内部表征。这些特征涉及人物、地点、科学概念和情感等，展示了模型的复杂思维过程。研究还发现了特定欺诈和偏见特征，提出了可能的安全性改进方法。这项工作为AI可解释性和安全性研究提供了重要见解和前景。

[《麻省理工(MIT) | 提出跨层Attention，减少Transformer大模型键值(KV)缓存，加快LLM推理!》](https://mp.weixin.qq.com/s/pfSc3Rr8BBo0Lwa2Kb_rzw)。本文作者介绍了一种新的Attention设计方法——跨层注意力（Cross-Layer Attention, CLA），用于减少Transformer大模型的键值（KV）缓存。CLA通过在不同层之间共享KV头，显著削减KV缓存大小，与现有方法相比在保证准确性的同时将KV缓存大小缩小了2倍。作者详细分析了CLA与多头注意力（MHA）、多查询注意力（MQA）和分组查询注意力（GQA）的对比，展示了实验结果和在关键指标上的影响，证明了CLA在降低内存占用和解码延迟方面的有效性。文章为优化大模型推理性能提供了新思路。

[《用 Coze(扣子) 打造 "最强" 浏览器书签助手(上)》](https://mp.weixin.qq.com/s/4RH6C-M7zzd_6-34lhMwfQ)。作者细讲解了如何利用Coze平台构建一个功能强大的浏览器书签助手。文章首先介绍了Coze新功能的速览，包括多Agents模式、记忆-变量、记忆-长期记忆等。接着，作者逐步展示了文件上传、书签提取、数据清洗、简单分类、生成书签文件以及AI书签检索的具体操作步骤，并结合实际代码示例进行说明。整篇文章为开发者提供了一个完整的实现路径，帮助实现书签管理自动化。

[《手把手拆解:从零实现Llama3大模型(Python)》](https://mp.weixin.qq.com/s/PADxs5gW5AQU8dAsHXJhQw)。本文参考Meta发布的开源LLama3系列模型，由开发者Nishant Aklecha详细介绍如何从零开始实现Llama3模型，包括跨多个头的注意力矩阵乘法、位置编码和每个层的细节解析。教程包括特征对齐（使用Andrej Karpathy的分词器实现）和神经网络训练、注意力机制实现、嵌入归一化步骤，并提供了训练脚本和所需资源下载链接。作者逐步拆解了从模型加载到生成Token的过程，为开发者们提供了具体实现路径和参考。项目在GitHub上开源并获得了大量关注，有助于提高对大模型的理解和应用。

[《大模型精度(FP16，FP32，BF16)详解与实践》](https://mp.weixin.qq.com/s/95CUl1bGN-fSvmAbH0O-DA)。本文作者王明对三种浮点数精度类型——FP16、FP32和BF16进行了详细介绍，解释了其表示方法及计算过程。文章通过对比这三种精度在机器学习模型训练中的表现，分析各自的优劣，FP16具备较高计算效率，FP32精度更高，BF16在兼顾精度和计算效率方面表现出色。文中还提供了具体的实践代码，帮助读者更好地理解不同精度浮点数的实际应用。

[《模型调优(RLHF/DPO/ORPO)终极指南》](https://mp.weixin.qq.com/s/T5efQNYfd0807mBcO9lgEg)。本文由张伟撰写，详细解读了三种模型调优方法：RLHF（基于人类反馈的强化学习），DPO（直接偏好优化）和ORPO（优势比偏好优化）。文章全面剖析了各方法的优缺点及其在训练效率和计算性能上的差异，RLHF复杂且资源密集，DPO通过解析映射提高效率，而ORPO则通过调整损失函数直接优化偏好，减少计算负担，适合资源有限的情况。

[《今日arXiv最热大模型论文: Agent也疯狂! FoA方法对智能体做树结构搜索，超越ToT》](https://mp.weixin.qq.com/s/3C4OuqPLUp7_psReAMhIOQ)。这篇文章介绍了由最新论文提出的“Fleet of Agents”（FoA）框架，通过将遗传粒子过滤概念应用于动态树搜索，有效解决了传统树搜索算法在不确定环境中的局限性。FoA通过独立agents的多步探索和重采样优化，实现了对24点游戏和小型填字游戏的显著性能提升和成本降低，较Tree of Thoughts (ToT)更具优势。

[《GPT模型的前世今生》](https://mp.weixin.qq.com/s/srdS8qltf8r9pAEgqKPoVg)。李媛媛撰写的这篇文章详细介绍了GPT模型的概念、架构及进化历程。文章逐步讲解了GPT-1至GPT-4各版本的改进优化，并讨论了其在自然语言处理中的应用，尤其是多模态处理能力的提升。此外，文章探讨了GPT模型的核心技术，包括Transformer架构、自注意力机制和残差连接等，以及未来可能发布的GPT-5的特性展望。总结了GPT系列在人工智能领域的重大影响及其应用前景。

## ⭐️ Go & 云原生 & Rust 相关

[Rust 大项目结构如何组织？参考官方标准，给你最清晰的回答](https://juejin.cn/post/7371239685701730342)

[基于go语言gin框架的web项目骨架](https://juejin.cn/post/7281601361985241088)

[Rust中打印语句为什么使用宏实现](https://juejin.cn/post/7334103408196927529)

[从源码搞懂 kube-scheduler Pod绑定Node全流程](https://mp.weixin.qq.com/s/bAQg0pZXrG9gEcmT7JGZ9Q)

[Go Goroutine 究竟可以开多少](https://mp.weixin.qq.com/s/BrkVDKXGYstQrCyeYG__Rw)

[Rust 练手项目—实现 MVCC 多版本并发控制](https://mp.weixin.qq.com/s/NhfrDsk-54Se8ts6JMIWSw)

[使用Rust捕获和解析网络包](https://mp.weixin.qq.com/s/AhD4t9DT_ecdG1MVJJMtwg)

[xgo: 一款新鲜出炉的 Go 代码测试利器](https://mp.weixin.qq.com/s/S23_NsOuGsDCfTJL_wniKw)

[Go 语言中 database/sql 是如何设计的](https://mp.weixin.qq.com/s/PBJAS-vbuYZfQuRrn3Roxw)

[如何使用 database/sql 来操作数据库](https://mp.weixin.qq.com/s/SkVwege0EcLAegQFUw-81g)

[万字长文：Go 语言流行 ORM 框架 GORM 使用详解](https://mp.weixin.qq.com/s/ZrYYMsuqrzWubh0zpIp17g)

[Skywalking通关指南](https://mp.weixin.qq.com/s/bztqsCEXGaiNiaEjz2lWoA)

[弹性容器实例：基于 Argo Workflows 和 Serverless Kubernetes 搭建精细化用云工作流](https://mp.weixin.qq.com/s/Cy01y5Xs04OdyzeBOHnaRQ)

[这30道K8S面试题你能答出来几个](https://mp.weixin.qq.com/s/05IQZjcUKXM1i51p98oI0A)

[使用Go语言实现 pping](https://mp.weixin.qq.com/s/lE50bcosCyi-5P98QMwRVw)

[一文搞懂Kubernetes Service 网络](https://mp.weixin.qq.com/s/2t1ABjI-2IL8DMaVinikGw)

[Go 夜读第 152 期：从汇编角度理解 Go 语言](https://mp.weixin.qq.com/s/rMhoj7KxhpPwUwgTkr1qtA)

[Go团队：Go是什么](https://mp.weixin.qq.com/s/dxBnBLbUKC9GTyi6NPDdTQ)

## 📒 后端相关

[什么是MySQL锁？有哪些锁类型](https://mp.weixin.qq.com/s/JchVvLMz2a0eQnzJs1oK-g)

[Jenkins Pipeline用户权限管理新技巧：打造安全高效的流水线！](https://mp.weixin.qq.com/s/_DIWInIddfcsdggDCGOCyA)

[这些年背过的面试题——架构设计篇](https://mp.weixin.qq.com/s/Wp6ErsgUKOYOjry7eRczEQ)

[RocketMQ 是什么？它的架构是怎么样的？和 Kafka 又有什么区别](https://mp.weixin.qq.com/s/oje7PLWHz_7bKWn8M72LUw)

[揭开管理的秘密：耗时半年精心打磨，一线管理者不可不读的终极指南！](https://mp.weixin.qq.com/s/Eluy6hc3jUHdZfdjEEJWpA)

[10 亿级短 URL 生成方案，拿去可以直接重写短 URL 系统了](https://mp.weixin.qq.com/s/hC3TFKLFFEfC7Ietobkypw)

[字节面试：百亿级存储，怎么设计？只是分库分表](https://mp.weixin.qq.com/s/xGYM0pXAHfaLMpTxBJvLBg)

[一个淘宝服务端工程师的年度总结](https://mp.weixin.qq.com/s/1puGCULSwfJdLD7onhrDtw)

[【视觉笔记】｜领导力21法则](https://mp.weixin.qq.com/s/gnjTj1Kw53iF_4Gr5RUxLQ)

[【消息队列】 一文搞懂 Kafka](https://mp.weixin.qq.com/s/CFJWv0NLL97jhHvvveS5KQ)

## 📒 前端相关

[node.js+AIGC：对输入的评论进行情感分析](https://mp.weixin.qq.com/s/7H6J9aH3pRHXD4nxEUwJaQ)

[我使用coze做了一个云顶之弈助手，帮助我上分](https://mp.weixin.qq.com/s/4MZhKf_p4JIHOmRqAf3AuQ)

[autolog.js：一个小而美的toast插件](https://mp.weixin.qq.com/s/uP-n-AknzWSOZ95LGOdVfQ)

[VSCode深度配置 - settings.json](https://mp.weixin.qq.com/s/o-h3JU7NRvgKGowaPpyK_A)

[苦等三年，React Compiler 终于能用了](https://mp.weixin.qq.com/s/VKtrNihMFGgo6RhlVgURXg)
