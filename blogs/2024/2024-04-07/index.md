---
slug: 4月7日内容汇总
title: 4月7日内容汇总
authors: [garfield]
tags: []
---

![alt text](image.png)

封面图：Go 1.22.2 刚刚已发布，修复 http2 多个 header 导致的连接关闭

## 🌟 AI 相关

[《人工智能机器学习算法总结--2.逻辑回归算法》](https://mp.weixin.qq.com/s/C00sLxto2f5cxsmuva9VsA)。这篇文章详细介绍了逻辑回归算法，这是一种处理二分类问题的机器学习算法。文章概括了逻辑回归的定义、目标及应用，并解释了其与线性回归的不同之处。底层结构清晰地描述了逻辑回归包括的组成部分，如输入层、权重、线性组合、激活函数（Sigmoid函数）、输出层、损失函数（如交叉熵损失函数）及优化算法（如梯度下降法）。文章还阐述了数据准备、代价函数、梯度计算与模型评价的完整过程，包括特征映射、判定边界的绘制等，并提出防止过拟合的正则化技巧。

[《CMAT: 与GPT3.5相媲美的1.8B Agent模型和框架》](https://mp.weixin.qq.com/s/srCgwrjlggVlSwtOzU6iQw)。本文主要介绍了一种与 GPT3.5 性能相匹那的1.8B Agent 模型和框架。提出了 TinyAgent 模型和多代理合作调整 (CMAT) 框架，通过环境反馈驱动的权重调整，增强了语言代理的能力。尤其突出了 TinyAgent-7B模型，虽然参数量不多，但是其性能达到了与 GPT-3.5 相当的水平，显示出大型语言模型在精效方面的巨大进步。同时，文章还详解了 CMAT 框架的运行机制和优势，利用高质量数据集进行训练和 LoRA 方法进行优化，显著提升了模型的性能和应用创新。

[《谷歌更新Transformer架构，更节省计算资源!50%性能提升》](https://mp.weixin.qq.com/s/Xqnv2L9X4KRkfpTaw7B0SA)。Google更新了Transformer架构，发布了Mixture-of-Depths（MoD），它通过动态分配计算资源来跳过不必要的计算，大幅提高了模型的训练效率和推理速度。论文展示了使用MoD的模型在减少每次向前传播所需的FLOPs的同时，步进速度可提高50%。这种方法不仅节约了资源，更在提升性能方面展现出巨大潜力，特别是在大模型的训练和推理中，使得计算资源的分配更为精确和高效。这项研究由DeepMind和麦吉尔大学共同开展，主要贡献者是David Raposo和Adam Santoro。

[《人工智能机器学习算法总结--1.线性回归算法(单变量及多变量)》](https://mp.weixin.qq.com/s/XMrbHWIUDELs8NqOEqR-aA)。本文作者深入介绍了线性回归算法的原理和步骤，从数据准备、模型假设、模型建立、模型评估到预测，涵盖单变量和多变量线性回归。详述了如何通过特征缩放、增加假设函数中的截距项、以及梯度下降法等技术来优化回归模型。同时，探讨了代价函数的计算和模型参数的优化过程，包括正规方程和梯度下降法的对比以及正则化的应用，以提高模型泛化能力，防止过拟合。

[《RAG实践中的关键模块解析》](https://zhuanlan.zhihu.com/p/682253496)。文章细致解析了在检索增强生成（RAG）的实践中关键的模块和技术，包括挑战分析和系统架构讨论。论文深入探讨了在复杂查询的理解、检索模型的挑战与架构、生成模型的策略和技术、以及如何通过RAG改进语言模型（LM）的查询响应质量。同时，分析了如何通过改写查询、分解问题、重构查询和其他技术来处理特定挑战，诸如用户输入的复杂性、语义歧义和模型在生成回答时的过度依赖检索内容等。还讨论了基于演示检索的上下文学习的插件，以及评估RAG系统性能的方法。

[《用扣子/Coze 揭秘吴恩达的4种 AI Agent 设计模式》](https://mp.weixin.qq.com/s/OtdncYNt9KDE6YzDJeexFg)。本文作者在介绍了吴恩达教授提出的四种AI Agent设计模式：Reflection（反思修正输出）、Tool Use（使用工具执行操作）、Planning（任务分解执行）和Multiagent Collaboration（多个Agent协作）。文章利用扣子/Coze 特性来说明如何应用这些模式，结合具体案例如汽车行业调研助手和旅行规划助手，阐述了如何快捷实施这些模式以及相应的工作流和效果。这些设计模式旨在提升AI Agent的自主性，效率和协同工作能力，为未来AI应用提供更为精准和灵活的操作方式。

[《国内首个AI程序员入职阿里云:专属工号AI001，KPI是一人写完公司20%代码》](https://mp.weixin.qq.com/s/t_OJu1JGrzk7q8A2GAfA0g)。在这篇文章中，讲述了“通义灵码”作为国内首个AI程序员入职阿里云的故事。AI001拥有过万亿量级代码训练出的能力，精通200多种编程语言。它不仅大大提高了编写、测试和维护代码的效率，甚至在API测试开发中实现了大幅度的时间缩短。AI技术的不断成熟似乎预示了行业的转型，而通义灵码的入职体现了AI在编程领域的实际应用和效能，标志着AI和人类程序员将共同推动软件开发的未来。

[《2024年大模型的发力点:大模型Agent，分享6篇最新LLM Agent研究成果》](https://mp.weixin.qq.com/s/AQTfg4vr3ZMIMsf4v-zLeQ)。本文详细介绍了六篇关于大型语言模型（LLM）Agent的研究成果。涵盖了数据科学、复杂规划和推理、3D场景生成、GitHub代码仓库互动、动作迭代学习及代码文档自动生成等多个方面的创新应用。这些研究表明，大模型Agent在处理复杂任务和提升自身能力方面具有显著潜力和广泛应用前景，例如DS-Agent在数据科学领域的自主操作，以及LearnAct框架在动作学习上的进步。文章还讨论了LLMs的局限性和未来的发展方向，指出构建能力强大的Agent是大模型技术发展的关键所在。

[《每日论文速递 | InsCL: Data-efficient 持续指令学习》](https://mp.weixin.qq.com/s/g75XpnQ7fnvY9PgFLdIf_A)。文章介绍了InsCL（基于指令的持续学习）新模式，重点在于提升大型语言模型（LLMs）在持续学习中的数据效率和减少灾难性遗忘。InsCL采用任务相似性动态重放前数据，使用Wasserstein距离计算任务间相似度来指导选择重放内容。引入指令信息度量（InsInfo）定量指令复杂性和多样性，并基于此优化数据重放质量。丰富的实验表明，InsCL相对随机重放和无重放分别实现了3.0和27.96的性能增益，显著改善了持续学习能力。

[《基于LLM的多Agent框架在金融市场数据的应用》](https://mp.weixin.qq.com/s/l8KZGyPzP2z6TfhpiMgakg)。论文提出了一个基于大型语言模型(LLM)的多智能体框架，专门用于金融市场数据的异常检测。通过建立一个AI智能体的协作网络，涵盖数据转换、深度专家分析、知识应用及报告整合等，框架可实现财务数据异常的全自动验证和解读。运用标准普尔500指数数据展示了框架的有效性，证明它可以提高市场监控的效率、准确性，并减少人力需求，是金融市场监控支持领域的有力工具。

[《Python实现 8 个概率分布公式及可视化》](https://mp.weixin.qq.com/s/g2Gy2FmG4jRywNyjXbN96w)。文章介绍了序列化在 Python 中实现并可视化八种概率分布：均匀分布、高斯分布、对数正态分布、泊松分布、指数分布、二项分布、学生t分布和卡方分布。分布分别关联不同类型的随机过程和数据集。使用如 NumPy、matplotlib、SciPy 等库提供数学计算和可视化支持，这对于数据科学和机器学习中统计学与概率的应用至关重要。

[《今日arXiv最热NLP大模型论文:Github万星!北航发布零代码大模型微调平台LlamaFactory》](https://mp.weixin.qq.com/s/jJ5hItGNz91TiaDrdfYwUg)。北航发布了LlamaFactory，一个零代码、可对100多种语言模型进行微调的平台。该平台提供模型加载、数据处理、模型训练等模块，支持高效微调技术，并通过Web界面简化用户操作。LlamaFactory旨在降低微调大模型的技术要求，并提高训练效率。论文在GitHub获超过13,000星，实验证明了其在任务适应性和训练效率上的有效性。

[《大模型记忆可以不使用向量数据库实现吗?图数据库是一个候选》](https://mp.weixin.qq.com/s/tXEWPPNEqhd6dwASiJO0pw)。Brandon Kynoch、Hugo Latapie 和 Dwane van der Sluis提出了一种脱离传统使用向量数据库的大型语言模型(LLM)长期记忆机制。他们的研究通过构建知识图谱来存储信息，使用指定的数据结构、Cypher查询语句以及NLP工具来自动更新知识图谱。该论文详细介绍了如何更新和扩展知识图谱，并且还展示了如何使用知识图谱执行推理和长期记忆功能。尽管有局限性，如缺乏指代消解能力，该工作对于理解和实施LLM的长期记忆功能是一个重要的步骤。

[《Ollama 本地开源大模型聊天应用》](https://mp.weixin.qq.com/s/aERkT93iUB8pH1m-FCESWg)。文章详述如何使用Ollama在本地部署和运行开源大模型以及如何通过API调用。介绍了Ollama为前端开发者提供的Python和JS开发包，并且介绍了一些基本的使用场景和指令。以及就如何结合Streamlit这个Web框架与Ollama来快速开发一个类似ChatGPT的聊天应用，提供了嵌入式代码示例和操作步骤。总结了Ollama部署大模型的可靠性和便捷性，同时强调了结合Streamlit快速搭建Web的能力。

## ⭐️ Go & 云原生 & Rust 相关

[《探索 Go 的 Fan-Out/Fan-In 模式:让并发更 easy》](https://mp.weixin.qq.com/s/ceM2RWiVtq6HJml5Y1y9lA)。本文来自 Go Official Blog，目的在于引导读者理解如何在 Go 中利用扇出（Fan-Out）和扇入（Fan-In）模式简化并发操作。扇出是指单个 goroutine 将任务分发给多个工作 goroutine；扇入则是多个工作 goroutine 完成任务后，将结果汇总到一个通道。文章解释了这种模式的优势，包括提升程序性能、简化任务管理，并使并发更易于维护。同时，文章通过代码示例展示了在 Go 应用程序中如何实施 Fan-Out/Fan-In 并发模式。

[《Go 是社区驱动吗?哪种模式更好》](https://mp.weixin.qq.com/s/l4vUCYmo-kz5wdiORYKU7A)。作者煎鱼对 Go 语言是否为社区驱动的模式进行了深入探讨。文章基于 Chris Siebenmann 的观点，讨论了 Go 的发展受 Google 影响较大，且社区的声音在关键决策中并不占主导地位。举例说明了 Go Module 的引入过程如何背离社区开发的依赖管理系统。同时文章讨论了社区驱动与企业所有的开发模式差异，及其对开源项目命运的影响，指出虽然许多顶尖的开源项目背后有企业影子，但实际上可能没有一种模式是绝对优于另一种的。

[《Rust 多线程开发:scoped thread》](https://juejin.cn/post/7325441612402098195)。本文由Pomelo_刘金撰写，讨论了Rust语言中scoped thread的概念和优势。Scoped thread是一种生命周期和创建它的作用域绑定的线程，与标准的`std::thread::spawn`函数创建的线程相反，不需要将数据拥有权移至线程中，允许更安全地共享父作用域的数据。文章比较了普通线程和scoped thread的特点和生命周期管理，并通过代码示例展示如何在Rust中创建和用scoped thread安全地并发处理数据。这种线程是处理Rust并发时非常有价值的模式，尤其是在多个线程间安全共享数据时。

[《Rust 解码 Protobuf 数据比 Go 慢五倍?记一次性能调优之旅》](https://mp.weixin.qq.com/s/ktOGySi9HJ31G2-IOfxHZw)。文章作者v0y4g3r总结了如何通过性能调优把Rust在解析Protobuf数据时的速度从原先比Go慢五倍提升到仅慢33.3%。作者首先利用池化技术减少内存分配释放的耗时，再尝试用`Bytes`数据类型来实现零拷贝，但遇到了性能退步。通过火焰图分析，确定了性能瓶颈：`BytesAdapter`和`Buf`的转换开销和`Bytes::slice`的内存安全开销。最后，作者通过一些`unsafe`操作优化了`slice`和类型特化，获得了显著的性能提升。文章强调Rust的内存安全机制和底层实现对性能调优的影响，同时提醒重点关注代码热点路径的底层开销。

[《Go 1.22.2 刚刚已发布，修复 http2 多个 header 导致的连接关闭》](https://mp.weixin.qq.com/s/aNImZ1DCzka6PXXmaEnnQQ)。文章作者详细报道了Go语言最新版1.22.2的发布情况，主要介绍了此版修复的关键安全问题。Go 1.22.2修复了影响http2协议的安全漏洞CVE-2023-45288，该漏洞允许攻击者在不影响服务器性能的情况下发送大量header数据，从而导致连接的关闭。此补丁通过添加额外的安全检查和连接关闭逻辑来防止此类攻击，并修复了其他一些已知问题。发布说明强调此次更新的重要性以及Go社区对安全性的持续承诺。

[《分布式系统编程 - 多数投票(Majority Quorum)》](https://mp.weixin.qq.com/s/snyiunUcS4lrGo3mMhxLaQ)。文章作者介绍了分布式系统中多数投票（Majority Quorum）的概念和其在一致性中的作用。多数投票是确保分布式系统在服务器崩溃后仍能提供结果可用性的一种机制，通过在集群中复制结果来实现。文章讨论了如何确定法定数量（quorum），这是集群节点多数确认更新的数量，以确保系统的活性和安全性。通常，一个节点数为n的集群，法定数量为n/2+1。介绍了法定数量在数据更新和领导者选举中的应用，并对比了与比特币中基于工作量证明的共识机制不同的处理方式。最后指出，在一些特定场景下，系统可能采用拜占庭容错算法以增强一致性和容错能力。

[《分布式系统模式 - 心跳(HeartBeat)》](https://mp.weixin.qq.com/s/GdeqBRJ0uGphpeBXQFUPcQ)。文章作者探讨了在分布式系统中，心跳机制如何作为一种关键措施来确保服务器集群的服务连续性和及时故障检测。心跳能帮助监控每个服务器的状态，确保集群中每一台机器都按预期工作。文中详述了设置合理的超时时间和心跳间隔的重要性，以及如何通过共识算法和八卦协议等不同策略在不同规模的集群中实施心跳监控。举例说明了如etcd集群使用Raft算法维持节点状态同步的心跳实现，以及TCP keepalive在保持TCP连接活性方面的作用。

[《可以不需要第三方路由了:Go1.22 的路由增强功能》](https://mp.weixin.qq.com/s/_yWuCXw9ECSlWIPn0fCJqA)。文章作者详细介绍了Go语言在1.22版本中对net/http路由功能的增强，新增了方法匹配和通配符功能。现在用模式表达常见路由比以前更简单，无需编写Go代码。作者讨论了优化多模式匹配规则的挑战，以及如何采取优先级规则以处理模式冲突问题。新的路由机制考虑到了向后兼容，减少了对第三方Web框架的依赖，但复杂路由需求仍可选用第三方框架。这些变化显示了Go社区对简化开发者工作并促进语言自身改善的承诺。

[《推荐 10 个非常有用的 Golang Libraries》](https://mp.weixin.qq.com/s/QbPcY0CSXSAk0YBU6FJOYA)。作者分享了10个有用的Go语言库，包括用于增强测试比较的cmp、协议缓冲区实现的protobuf、跨平台文件系统通知的fsnotify等。文章提供了每个库的简介和示例，解释了它们的优势和应用场景。例如，cmp库能强力替换reflect.DeepEqual进行更安全的值比较；fsnotify适用于文件系统变更监测。介绍中强调了这些库在特定情况下编程实践中的高效性和便利性。

[《分布式系统模式 - 主从复制模式(Leader and Followers)》](https://mp.weixin.qq.com/s/y0JIjsHZnttDYhGb0IwI0A)。本文作者讲解了分布式系统中的主从复制（Leader and Followers）模式，即如何在服务器集群中复制数据以达到容错目的，并保证客户端数据的一致性。文章详述了Leader选举机制，及其在小型和大型集群中的应用，包括如何避免选举时的分裂投票（split vote）。主从复制决定了整个集群的决策及其传播，保证了系统在领导者存在时才处理请求，从而提高了数据一致性和集群决策的质量。文中对Zab和Raft这两个共识算法的选举过程进行了比较，解释了“最新状态”服务器选举为Leader的标准和流程。

[《Go 1.22 标准库 slices 新增函数和一些旧函数增加新特性》](https://mp.weixin.qq.com/s/83KTsLUioRaLU0m8znGkNg)。这篇由frank撰写的文章介绍了在Go 1.22版本中对slices包的更新。新增了`Concat`函数以更优雅的方式链接多个切片，同时对既有函数如`Delete`, `DeleteFunc`, `Compact`, `CompactFunc`, `Replace` 和 `Insert`实施了性能优化。重点改进了将不再使用的切片元素设置为零值，以及增强了边界检查，当索引超界时会触发panic，这些变化旨在提高Go语言的稳定性和开发效率。

## 📒 后端相关

[《三种方式模拟两个线程抢票》](https://mp.weixin.qq.com/s/-jRhRMLiWW6NlZeCNomMPg)。本篇文章作者介绍了如何在Java中模拟两个线程竞争抢票的场景，详细阐述了三种并发控制策略：`Synchronized`、`ReentrantLock`和`Semaphore`。通过具体代码示例展示了每种方法的实现和优缺点。`Synchronized`通过关键字实现同步，一次只允许一个线程访问资源；`ReentrantLock`提供了比`Synchronized`更加灵活的锁定机制；而`Semaphore`则是通过信号量控制资源的并发访问。文章还演示了利用抽象工厂模式优化线程安全的代码创建过程，提升代码的维护性和可扩展性。最终，根据具体场景选择最适合的策略来保证程序的正确运行。

[《https安全性 带给im 消息加密的启发》](https://mp.weixin.qq.com/s/HHFPI4AzsLvw-oj3BclOQQ)。文章作者探讨了https安全性对即时通讯(IM)消息加密的启发。详细阐述了TLS1.2和TLS1.3协议的手握过程和安全特性，特别是数字证书的验证原理以及通过ECDHE算法实现前向安全性的密钥交换。随后，提出了应用于IM系统的加密和防篡改方案，包含采用对称加密（如AES）保护信息，使用消息摘要算法（如md5、sha256）检测篡改，以及设计hmac算法进行消息认证。作者强调，在IM消息系统中，与https使用数字证书不同，可以设计私有密钥实施hmac认证，以确保消息来自可信客户端。

[《支付系统的心脏:简洁而精妙的状态机设计与核心代码实现》](https://mp.weixin.qq.com/s/H7WmhhacPNeBcDHI4oKbGw)。文章作者介绍了状态机在支付系统中的重要性，并提供了详细的状态机设计原则、常见错误及最佳实践。作者阐明了状态机（Finite State Machine, FSM）是行为建模的一种方式，对于支付系统来说，它能确保交易的生命周期按照正确的流程进行管理，提升系统的鲁棒性和交易处理的效率。文章还详细讲述了怎样用Java实现状态机，包括如何定义状态和事件、如何通过事件驱动状态变化以及如何记录状态转换，最后讨论了在并发环境中维护状态幂等性的方法。

[《遇到个MySQL索引长度限制的问题》](https://mp.weixin.qq.com/s/wA_6F3nqsB-3I8iDglwxrQ)。本文作者探讨了MySQL中索引长度限制的问题，分析了在不同MySQL版本和存储引擎下索引长度的限制规则。文章详细介绍了MyISAM和InnoDB两种存储引擎对单列索引和联合索引长度的限制，并解释了如何通过开启`innodb_large_prefix`参数或使用前缀索引来解决超出长度限制的问题。作者还讨论了字符集对索引长度的影响，尤其是`utf8`和`utf8mb4`编码在不同行格式下对索引长度的限定。最后给出了一些解决MySQL索引长度限制问题的建议，如调整字段的字符长度或考虑前缀索引的使用。

## 📒 前端相关

[《NPM 依赖管理的复杂性》](https://mp.weixin.qq.com/s/kNp-y4YHzoD2Y8DLig44Ng)。文章深入讨论了开源环境下NPM依赖管理的挑战及对软件工程的影响，指出依赖管理在开发过程中的重要性，并探讨了依赖的概念、NPM的自动化依赖处理、合理依赖版本选择等核心议题。详解了多级依赖结构带来的问题如幽灵依赖、依赖冲突、循环依赖等，并提出了策略性的处理建议，包括依赖审查、定期清理无用依赖和使用新型包管理器等，最后给出了几个管理最佳实践，以助于开发者更好地管理和维护NPM包依赖。
