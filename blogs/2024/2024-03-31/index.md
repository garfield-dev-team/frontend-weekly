---
slug: 3月31日内容汇总
title: 3月31日内容汇总
authors: [garfield]
tags: []
---

![alt text](maxresdefault.jpg)

封面图：Safe by construction - Roberto Clapis

## 🌟 AI 相关

[《面向业务开发的 Coze 使用指南》](https://mp.weixin.qq.com/s/ZY8zwaGdR6dq1OL_XQ2iTQ)。文章作者详细介绍了 Coze，一个一站式 AI Bot 开发平台，强调了它的易用性与功能强大，适合各类问答 Bot 的开发和部署至社交平台。通过举例说明如何使用 Coze 迅速搭建 AI 智能体和 RAG 问答系统，展示其插件库丰富性和沟通插件的效果。文章还讨论了 Coze 长期记忆的实用性，通过对话创建数据库并进行 CRUD 操作，以及如何实现长期记忆。最后，作者分析了 Coze 与其他 AI 开发工具的差异和适用场景，为读者提供了一个 Coze 实现原理和使用方式的深入指南。

[《Qwen1.5-MoE模型:2.7B的激活参数量达到7B模型的性能》](https://mp.weixin.qq.com/s/FTd9L6HzpV-5AoT20V8YyQ)。文章介绍了阿里巴巴开源的 Qwen1.5-MoE模型，它在总参数量14.3B的基础上，每次激活8个专家，激活参数量仅为2.7B，并且与7B模型性能相当。突破性的是实现了约75%的训练成本降低和1.74倍推理速度提升。作者描述了模型的结构改进，例如细粒度专家细分、模型初始化优化，以及共享路由机制。此外，文章还评估了模型在不同领域如MMLU、GSM8K、HumanEval和多语言领域的任务表现，并与7B模型进行对比。通过这些测试表明，即使在较低的激活参数量下，Qwen1.5-MoE-A2.7B模型也获得了卓越的性能，有效降低了训练与推理成本。

[《港大 | 提出高效大模型微调方法:LISA，性能碾压LoRA，甚至可超全参数微调!》](https://mp.weixin.qq.com/s/Y_Xbpaat3ClZ6LIUkUzg9A)。这篇文章讨论了港大研究者提出的新型大模型微调方法：LISA。该方法通过分层重要性采样（Layerwise Importance Sampled Adam）优化少数关键层，进而以更少的GPU内存消耗实现了性能超越低秩适应（LoRA）的微调，并有潜力超越全参数微调。LISA 方法在微调大规模语言模型上显著降低了资源消耗，在多种下游任务表现突出，优于传统微调，解决资源限制下的大模型训练挑战，对提升大模型训练的可行性和效率具有重大意义。

[《LLM训练要不要过采样/训多个epoch?》](https://mp.weixin.qq.com/s/NEf1TwwKd69_l_qsZsMlhw)。本文作者探讨了在数据资源紧缺的情况下，循环使用数据（即过采样或多次epoch训练）对大型语言模型（LLM）训练的影响。通过实验发现，重复使用数据会导致模型性能下降和过拟合风险。文章讨论了几个主要问题：重复训练（repeat）导致得分降低、即便少量重复也存在过度拟合的风险、以及LLM在不同个体的数据下受重复影响的程度不同。分析显示，重复会让模型在生成响应时更依赖早期输出而非指令与输入。文章最后提及，数据量和质量对缓解过拟合的影响，以及如何通过适当策略（例如使用dropout）对抗过拟合现象。

[《视频生成新玩家:Sora 原理探索与效果对比》](https://mp.weixin.qq.com/s/3KkgskOpqL7fJ5w9fpQm7g)。文章由支付宝算法工程师杰凡撰写，介绍了 OpenAI 提出的视频生成模型 Sora 和其它主要视频生成玩家的比较。Sora 能够根据文本提示词，生成长达一分钟且质量极高的视频，而其他模型生成的视频时间要短得多。文章探究了 Sora 视频生成的原理，包括其视觉编码器/解码器结构、扩散模型等，并讨论了 Sora 生成的视频如何实现三维一致性、长序列连贯性以及与世界的互动。文章总结了 Sora 的技术特性并略提其局限性，指出 AIGC 竞赛不仅在模型结构上，还在大规模高质量训练数据、工程优化、训练技巧和经验上展开竞争。

[《聊聊 MOE + LoRA 微调新方式》](https://mp.weixin.qq.com/s/6AM39RXaahpwniZ0wL-Yfg)。这篇文章讨论了 MOE（Mixture-of-Experts）与 LoRA（Low-Rank Adaptation）相结合的新型微调方式。该方法利用 LoRA 技术只微调参数的一部分，并保持大语言模型（LLMs）的预训练参数不变。文章中详细介绍了 LLaVA-MoLE 模式，在此模式下，通过在 Transformer 层内为 MLP 层创建专门用于 LoRA 的专家组，使用 MoE 概念并根据路由函数自适应选择不同领域的输入令牌。实验显示，这种微调方法解决了多任务数据冲突问题，在保持计算成本相似的同时，提高了微调的效果和性能。

[《32K上下文，Mistral 7B v0.2 基模型突然开源了》](https://mp.weixin.qq.com/s/R56Ob5dZjMh1alhMin8DZw)。本文介绍了 Mistral AI 最新开源的 Mistral 7B v0.2 Base Model。这个模型的更新包括扩展上下文限制至 32K、调整Rope Theta参数至1e6，以及去除了滑动窗口技术。这些改进使得 Mistral 7B 成为同规模模型中性能最好的之一，并为开发者提供了按需微调模型的可能。此外，文章还提到 Mistral AI 的未来目标是与 OpenAI 比肩，并已与微软 Azure 创建战略合作。最新的 Mistral Large 模型则直接针对 GPT-4 竞争，展现了 Mistral AI 从开源模式到优化商业模式的战略转变。

[《原创 | 一文读懂K均值(K-Means)聚类算法》](https://mp.weixin.qq.com/s/XS1_NAZ65P-1aLqwWm2hbg)。本文详细介绍了K-Means聚类算法，一个广泛使用的无监督学习算法，它适用于聚集数据并发现数据内在的分布结构。文章解释了K-Means算法的基本原理，其中簇的数量K是预先确定的，且簇的中心或质心是通过算法迭代计算得出。算法过程包括随机选择初始质心、分配数据点到最近的质心、重新计算质心，并重复这个过程直到质心稳定。作者提供了一个手工计算的例子来说明K-Means如何工作，并详述了如何通过总簇内平方和的最小化来评估聚类效果。此外，文中对算法的时间复杂度、初始化问题以及优缺点都进行了讨论。

[《大语言模型时代的聚类怎么做?哪种embedding算法和聚类算法最有效?》](https://mp.weixin.qq.com/s/8wHkjPlEIfzjHCU6SS5fPA)。本文研究在大语言模型(LLM)时代文本聚类的有效方法，对比各种文本嵌入方法及聚类算法。研究显示，LLM嵌入在抓取结构化语言特征上表现突出，特别是BERT在轻量级嵌入中卓越。使用多种验证指标（如F1分数、调整兰德指数等），结果推荐在正规文本聚类中配合k-means算法使用OpenAI嵌入方法。实验发现，在优化聚类质量时，应平衡嵌入维度、摘要技术等因素，避免一味追求维度增大。BERT由于较低维度和上下文理解力，在开源模型中效果最佳；而在LLM嵌入之间，Falcon-7b因混合语料库训练在多数数据集上超越LLaMA-2-7b。

[《从长期记忆的角度谈Agent》](https://mp.weixin.qq.com/s/W3zbcdrOo4M07Os16UD9Ow)。本文探讨了在构建自主智能体（Autonomous Agents）和智能体模拟器（Agent Simulations）时，长期记忆这一核心能力的重要性和实现。作者说明了大语言模型（LLM）在长期记忆上的局限性，并讨论了如何通过外部存储来辅助LLM的记忆。同时，介绍了几个流行的自主智能体项目，如Langchain、Visual-ChatGPT与HuggingGPT，并详细解析了如何结合短期和长期记忆管理，以及通过文档检索来增强LLM在处理增强记忆任务时的性能。此外，文中还讨论了如何使用向量搜索改进传统搜索，以及基于LLM的高阶逻辑链技术的潜力。

[《从啥也不会到GPT-3和InstructGPT》](https://mp.weixin.qq.com/s/GFUG3IVRpe-TbDM0DimshA)。作者详细记录了从基本的机器学习原理起步，逐步学习NLP和大型语言模型（LLM）的心得。强调了深度递归学习方法，即遇到不懂的概念就立刻搜索学习的重要性。文章详细列出了学习大模型的顺序，包括预处理、分词、模型优化等，一直至对GPT-3和InstructGPT的理解。每一部分都有推荐文献和关键点说明，使读者可以按顺序阅读文档逐步理解。涉及多种模型的细节，像Transformer、BERT、T5和GPT系列，并且讨论了各种模型的原理和应用。

[《ChainLM: CoTGenius 框架，专门用于自动生成高品质的 CoT 提示》](https://mp.weixin.qq.com/s/WHgnP2aJM37Q5jjNVyu_iA)。文章介绍了CoTGenius框架，它是设计来自动生成高品质Chain-of-Thought (CoT)提示的系统。通过三种策略（复杂化、多样化、具体化）和筛选机制（进化成功评判、正确性验证），它能生成更有挑战性和具体性的CoT问题。此外，文中提出“步级辩论法”，多个角色对推理步骤逐一讨论以确保正确性，增强了模型在复杂推理任务上的表现。相关数据集和代码也公开分享以进一步的社区研究和应用。

[《Token预测的未来:大型语言模型的预训练后操作》](https://mp.weixin.qq.com/s/5-W0Dt676qNhKZkLaNEcwQ)。文章详细探讨了大型语言模型在预测单个Token功能之外的能力，如理解上下文、创造连贯文本和解决问题。强调了从基础预训练到指令微调和对齐的多层训练方法的重要性。开篇介绍了语言模型的基础组件和Transformers的token预测。之后，分析了OpenAI的InstructGPT如何创新非任务特定微调，提高模型对细腻指令的响应力。最后说明了精心设计的交互提示的重要性，以及如何使这些高度复杂的模型与人类指令和价值观更好地对齐。

## ⭐️ Go & 云原生 & Rust 相关

[《分布式系统模式 - 低水位标记(Low-Water Mark)》](https://mp.weixin.qq.com/s/nnxQjzPRnRUApbIMuhTU8g)。文章介绍了分布式系统中低水位标记(Low-Water Mark)机制，重点是如何管理日志文件的大小和保留时间以优化存储。探讨了两种低水位标记策略：基于快照的低水位标记和基于时间戳的低水位标记。文中以ZooKeeper和etcd为例，描述了周期性快照帮助确定可丢弃日志的边界，而Kafka则使用时间戳决定日志保留期。文章还深入讨论了etcd中快照和写前日志(WAL)如何结合使用以确保状态一致性，并对Kafka日志清理的基于时间和大小的策略进行了阐释。

[《Go 1.22引入的包级变量初始化次序问题》](https://mp.weixin.qq.com/s/dPWImK8knB36ZUnueMdoEA)。文章详述了Go 1.22版本对包级变量初始化顺序的改变。由于Go 1.22未在官方Release Note中提及变化，作者发现变量初始化顺序与文档描述相悖。经过详细分析和测试，作者推测Go 1.22将常量误视为未初始化变量，导致初始化次序变动。此问题被提交至Go官方GitHub(issue #66575)，并获确认，修复计划已纳入Go 1.23版本。文章还讨论了Go语言规范与实际编译器行为的一致性问题。

[《分布式系统模式 - 分段日志(Segmented Log)》](https://mp.weixin.qq.com/s/MlS0rp5wM02z2WfDb7IgZw)。文章着重讲述了日志分割技术对于处理大体量日志的重要性，并介绍了如何通过日志分割来映射日志偏移量，优化读写性能。文中详细举例了Kafka、etcd和MySQL的实际应用案例，说明分割日志和维护索引如何帮助它们高效地处理日志数据。特别指出Kafka如何通过分段和索引机制处理日志分段，详述了etcd中的分段日志管理，以及MySQL二进制日志的组成和查询方式，体现了分段日志模式在现代分布式系统中的实践价值。

[《Go singleflight 源码剖析》](https://mp.weixin.qq.com/s/zq5V6zkVrAx-j8obm6YcIA)。本文深入分析了 Go 语言中singleflight包的源码，讲解其如何通过Group和call结构体来防止缓存击穿，保障相同资源的请求在同一时刻只执行一次。详细解释了其中的核心机制，包括请求的合并和结果的共享等。文章还探讨了如何通过Do、DoChan和Forget方法来处理请求，确保函数调用的唯一性及结果的正确分发。通过对Result和panicError结构体的剖析，作者清晰展示了singleflight提供的错误处理和结果传递功能。

[《分布式系统模式 - Write-Ahead Log》](https://mp.weixin.qq.com/s/3qTPyg17i7n1IiJuIYBOrA)。本文探讨了Write-Ahead Log (WAL)在分布式系统中的关键作用，尤其在保证数据一致性和服务持续性方面的应用。作者解释了WAL用于节点间复制数据、容错和状态机复制技术，以保障数据不因服务器故障而丢失。同时，文章讨论了刷新操作的性能考量，日志数据的校验和纠错机制，以及利用幂等操作处理可能的重复记录。特别指出etcd项目如何运用WAL进行数据持久化，证实了WAL技术的实际效益和在集群同步中的作用，进而强调了复制日志在提高系统复原力和可靠性方面的价值。

[《Go 创始人 Rob Pike:我们做对了什么?》](https://mp.weixin.qq.com/s/sCDRt8ziRk4PmFr9YyTyMA)。文章由煎鱼撰写，回顾了Go语言创始人Rob Pike对Go的成功因素的思考。文章着重介绍了Go语言的设计理念，是为了提供一种更好的编写软件的方法，而不仅仅是一种新的编程语言。Rob Pike突出了Go的可爱吉祥物、强大的规范定义、出色的可移植性和兼容性、标准化的代码格式化工具Gofmt，以及强大的工具链等成功要素。文章还讨论了Go社区标准库的统一，以及多种编译器实现的可能性，这些因素共同促进了其现代编程环境的构建和业务发展。

[《最具研读价值的 Go 源码之一:context 包》](https://mp.weixin.qq.com/s/NKSKbIO2dV0-s5ix_DI2Ig)。这篇文章详细剖析了 Go 的 context 包源码，阐释了 Context 的回溯链和树形结构如何协同工作来实现级联取消操作。文章解读了 context 包如何在 Go 语言中为并发控制和超时控制等提供标准化做法，并展示了通过接口和几个关键结构体实现上下文管理。特别强调了 context 的四个主要方法：Deadline, Done, Err, Value 的实现以及使用场景，详细解说了使用 WithCancel, WithDeadline, WithTimeout, WithValue 方法创建和管理不同类型的 Context 对象，为理解并发请求管理提供了宝贵的视角。

[《Go 负责人 rsc 翻车，决定追加 godebug 行》](https://mp.weixin.qq.com/s/IckcTUDixrYocyM4liKP_w)。煎鱼撰写的文章讨论了 Go 核心团队负责人 Russ Cox 提出的新提案，即从 go.mod 中分离 GODEBUG 默认设置的变更。新提案应对了 Go 语言兼容性机制导致的一些问题，例如 GODEBUG 设置在依赖项更新时造成的冲突。提案引入了新的设置 `default=go1.X`，让基础设置和 `go 1.X` 行分离，从而允许在 go.mod 和 go.work 文件中设置模块级别的 GODEBUG。这变更确保了使用不同 Go 版本的同时可以保持不同版本的 GODEBUG 语义，提升了灵活性和兼容性。预计从 Go1.23 版本开始这一变更将正式生效。

[《抽象的艺术:Go 语言中的编程哲学》](https://mp.weixin.qq.com/s/lg0uHTk0VjXC_RS5bMa8Hw)。文章深入探讨了在 Go 语言编程中抽象的概念和实践。抽象被描述为不仅仅是隐藏细节的技术，更是提升代码质量和理解性的哲学。文章通过一个将比赛胜者计算器程序作为例子，展示了如何通过合理的函数组织提高代码的抽象层次。这使得逻辑更清晰、代码更易于理解，并且每个函数都有明确的目的。文章最终强调，良好的抽象是找到简洁与表现力之间的平衡，是编程艺术中的核心。

[《\[\]byte与string的两种转换方式和底层实现》](https://mp.weixin.qq.com/s/D8vmIyQFhW8pC6okOSfjAA)。小许在文章中深入探讨了 Go 语言中 \[\]byte 与 string 数据类型的转换方式及其底层实现机制。文章首先介绍了两种数据类型的基础知识，随后解析了两种常见的转换方式：一种是标准库方法，另一种是使用 unsafe 和 reflect 包的强转换方法。重点解释了强转换是如何通过指针操作避免内存分配来提升性能（零拷贝），并且指出这种方法虽然更高效，但需要小心处理可能的安全隐患。最后，提供了对 fasthttp 使用优化转换方式的分析，说明这种情况下的应用场景和益处。

[《图文讲透Golang标准库 net/http实现原理 -- 服务端》](https://mp.weixin.qq.com/s/pTdymwNrhLCosw-ZCHcHeg)。本篇文章详细介绍了Go语言标准库net/http在服务端的实现原理。通过代码示例和流程图解析，作者阐释如何在Go语言中启动HTTP服务并处理接收的请求。重点包括`http.HandleFunc`和`http.ListenAndServe`的使用，以及`Server`与`ServeMux`结构体的内部工作原理。文章详细解释了如何注册和匹配路由，以及如何通过Server的ServeHTTP方法处理客户端请求，达到理解Go语言http服务端核心处理流程和思路的目的。

[《goroutine调度器揭秘 2》](https://mp.weixin.qq.com/s/2k8hoOEny7rQJD5otz-H9A)。本文是对Go语言goroutine调度器的深入解析，内容继续之前文章的讨论，对Go的调度器在运行时的各个阶段进行了详细的剖析。作者参考了Go 1.21.1版本，讲解了schedule函数的工作机制，包括其如何永不返回地循环调用和所涉及的“栈切换”技术。文中还详述了调度器的核心函数findRunnable的实现逻辑，包括它是如何寻找可执行的goroutine的，以及多种场景下可能会调用schedule函数的过程。作者通过解释不同的调用函数和它们的使用场景，帮助读者理解Go调度器的工作原理。最后，文章承诺补充内容关于抢占式调度，并引导读者关注公众号以获取最新文章。

## 📒 后端相关

[这些年背过的面试题——Netty篇](https://mp.weixin.qq.com/s/JZE22Ndvo0tWC2P-MD0ROg)

[云原生最佳实践系列 4：基于 MSE 和 SAE 的微服务部署与压测](https://mp.weixin.qq.com/s/v1P1vlqw-C2TxCpbNBDcmw)

[技术领导力之路 - 正反馈](https://mp.weixin.qq.com/s/VhpfORlmIlTMX5KFwXK0Dg)

[深度 | 一条查询SQL的前世今生 —— ClickHouse 源码阅读](https://mp.weixin.qq.com/s/l4Y-L78DV_NokkggobWIdQ)

[看一遍就理解：IO模型详解](https://mp.weixin.qq.com/s/XfTcUH02Ut-vPPWHiuprpA)

[工作多年，如何从 CRUD Boy 转型为分布式系统架构师？解锁分布式系统的艺术：从零开始理解分布式系统架构与设计原理！](https://mp.weixin.qq.com/s/O-auGP-1H3MO74kcTrC7Tw)

## 📒 前端相关

[前端要学会自己写shell脚本，让你的项目看起来更优秀！](https://mp.weixin.qq.com/s/2ejZrvHuvmoqf8_QMBqCTw)

[扩展你的前端知识库，毫无废话！【下】](https://mp.weixin.qq.com/s/SxZK5dKph-g-nbwAThOsZg)

[从流程上讲，如何用AI为前端开发提效](https://mp.weixin.qq.com/s/2bbbZ6jBWHmObHcL-lLNFQ)

[如何使用 Router 为你页面带来更快的加载速度](https://mp.weixin.qq.com/s/i2MRvAicXCDZkHjO9gbgYQ)

[GPT自动投简历，一周斩获三offer，开源分享！](https://juejin.cn/post/7320949203542409231)

[一次给社区知名项目 Astro 的PR，如何点燃了我的开源之路](https://mp.weixin.qq.com/s/DlvS7faM0H1a8NWzOBdWgw)

[MDH Weekly 124 - 《Code Like a Pro》](https://mp.weixin.qq.com/s/y35QawST3An1olCgQy0z0g)
