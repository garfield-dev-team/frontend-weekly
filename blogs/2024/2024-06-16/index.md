---
slug: 6月16日内容汇总
title: 6月16日内容汇总
authors: [garfield]
tags: []
---

![alt text](maxresdefault.jpg)

封面图：Safe by construction - Roberto Clapis

## 🌟 AI 相关

[《LLaMA Factory 实战——单卡 3 小时训练专属大模型 Agent》](https://mp.weixin.qq.com/s/tW6lQPugUeUR1ye3LUgtzw)。本文作者介绍了如何使用LLaMA Factory的Agent Tuning功能，在单张GPU上仅用3小时训练出一个定制的LLM Agent。通过任务分解、工具调用、多智能体协作等，LLM Agent可以突破传统语言模型的局限，从外部工具获取实时知识，减少生成幻觉现象。文章详细讲解了训练过程，包括环境准备、数据集选择、模型微调和部署步骤。微调后的Yi-6B模型展示了出色的工具使用能力，显著提升了任务解决能力，并可部署为本地API服务。

[《关键点检测——HRNet源码解析篇》](https://mp.weixin.qq.com/s/TOXkGpfhBx6Xv-5LZS5IaA)。本文作者小苏详细解析了HRNet（High-Resolution Network）在关键点检测任务中的实现细节。文章通过源码解析，分多个部分深入讲解了HRNet的构建，包括数据集的预处理、数据增强、模型架构、训练流程和预测步骤。文中重点介绍了关键点数据集构建方法，在线数据增强技术（如HalfBody、仿射变换、水平翻转及热力图生成）以及仿射变换和高斯核的具体实现。同时，文章也对网络的训练策略和预测方法进行了详尽的说明，帮助读者更好地理解和应用HRNet进行关键点检测。

[《ToolBench指标提升8.25%!魔搭社区让Qwen2 成为你的智能体好帮手》](https://mp.weixin.qq.com/s/09awsKgaF9T1AMFzLzSIGA)。本文介绍了Qwen2模型经过魔搭社区的优化后，在ToolBench所有评测指标上平均提升了8.25个百分点，证明了在垂直场景中针对LLM的特定调优有较大提升。文章详尽介绍了数据集准备、训练、评测和部署的全链路能力。通过使用MSAgent-Pro数据集及引入loss_scale技术，进一步提升了训练效果。文中还演示了如何基于模型生态进行评测，以及使用ModelScope-Agent框架进行部署和应用。该文章为开发者提供了实际操作指南，帮助其在特定场景下实现智能体的高效部署。

[《万字综述大模型高效推理:无问芯穹与清华、上交最新联合研究全面解析大模型推理优化》](https://mp.weixin.qq.com/s/7LKfamTnCyFih6_grf9m3A)。这篇由周紫轩撰写的文章介绍了大语言模型（LLM）高效推理的最新研究进展。通过分析Transformer 架构、KV缓存技术等，文章系统总结了影响LLM推理效率的瓶颈，并对数据层、模型层和系统层的优化技术进行了全面综述。文章还探讨了自动化推理技术、模型压缩和全新替代架构的设计与应用，重点分析了提示词压缩、并行输出、注意力机制优化等技术。未来研究方向包括长文本处理、边缘部署和智能体协同优化，以期为高效推理领域提供新的思路和改进途径。

[《ACL 2024 | 构建超关系知识图谱(KG)，增强大模型多跳/Multi-hop QA问答能力!》](https://mp.weixin.qq.com/s/g9r2MsPri67ylWVPE2zejQ)。本文作者详细介绍了如何通过构建一个上下文感知的超关系知识图谱（KG）来增强大模型在多跳问答（Multi-hop QA）中的表现。该方法称为HOLMES，通过从查询中识别实体并生成增强的知识图谱，然后精简为最相关的信息作为模型输入，有效减少了无关信息的干扰。实验表明，与传统方法相比，HOLMES在Token消耗上节约了67%，并在多个测试集上取得了一致性提升，显著提高了复杂问题的回答性能。

[《LLM推理后端性能大比拼，来自BentoML团队的深度评估!》](https://mp.weixin.qq.com/s/WyVqI1drIpmPmkg1r4WmNQ)。这篇文章翻译自BentoML工程团队，全面评估了多个大型语言模型（LLM）推理后端的性能，包括vLLM、LMDeploy、MLC-LLM、TensorRT-LLM和Hugging Face TGI。文章对比了各后端在首token延时（TTFT）和token生成率两个关键指标上的表现，尤其是在不同并发用户负载下的性能。LMDeploy在多个用户负载下都展示了最低的TTFT和最高的token生成速率，适合高吞吐量应用。此外，还探讨了开发者体验，包括文档质量、模型编译和部署难度，提供了对选择合适推理后端的建议。

[[《Karpathy最新四小时视频教程:从零复现GPT-2，通宵运行即搞定》](https://mp.weixin.qq.com/s/BI8EdDyTEk8meL_FhX-ftw)。本文介绍了AI专家Andrej Karpathy的一段长达四小时的视频教程，该视频详细讲解了如何从零开始复现GPT-2模型（1.24亿参数）。教程内容包括网络构建、优化训练、超参数设置和模型评估等多个关键步骤。Karpathy在视频中展示了如何通过wiki和GPT-3论文优化配置，实现快速训练并最终生成高质量的模型。教程分四大部分，涵盖了从基本实现到高级优化的全过程，最后还提供了相关的GitHub存储库“build-nanogpt”，以方便大家参考和学习。

[《视觉语言模型导论:这篇论文能成为你进军VLM的第一步》](https://mp.weixin.qq.com/s/gdT0q5HJ9Fw5QrbBihI1vA)。本文翻译自Meta和蒙特利尔大学等多所研究机构的论文，全面介绍了视觉语言模型（VLM）的发展和现状。文章详细说明了不同VLM的训练方法，包括对比训练、掩码策略、生成模型及预训练骨干网络等。同时，文章还介绍了VLM的训练指南、评估方法以及提升定基和对齐能力的技巧。对于刚入门VLM的学生或AI领域从业者，这篇导论是一份非常实用的参考资料。

[《详解LLM参数高效微调:从Adpter、PrefixTuning到LoRA》](https://mp.weixin.qq.com/s/-UAKKKxA7I_qkNm5ck5R0Q)。这篇文章详细介绍了多种大型语言模型（LLM）参数高效微调的方法，包括Adapter Tuning、Prompt Tuning、Prefix Tuning和LoRA。文章首先概述了Transformer的结构和指令微调的背景，接着总结了多种参数高效微调（PEFT）方法，如仅微调偏置项的BitFit、使用低秩矩阵分解的LoRA等。重点介绍了LoRA方法，其通过对增量参数矩阵进行低秩近似，大幅减少了微调过程中需要训练的参数数量，为LLM的微调提供了一种高效的解决方案。文章最后也描述了这些微调方法在实际中的适用范围和性能。

[《干货|解锁产品迭代新速度:A/B测试在AI大模型时代的应用》](https://mp.weixin.qq.com/s/T5-z6J6nDNdTETmEQHtlug)。这篇文章介绍了火山引擎数智平台VeDI旗下DataTester如何在AI大模型时代应用A/B测试，帮助企业在业务增长、用户转化、产品迭代等环节科学决策。通过A/B测试，企业能够快速上线、快速体验和回滚产品，在真实用户环境中验证产品效果。文章还讲述了如何利用A/B测试优化高效调优模型参数，提升产品质量和用户体验。这种数据驱动的精细化运营方法使得产品在激烈竞争中保持领先，提高产品竞争力。

[《港大&腾讯 | 提出SELF-TUNING学习框架，让LLM自学获取新知识，表现出色!》](https://mp.weixin.qq.com/s/-FTbJYMbCyiQXyTZ6BHjaA)。本文介绍了由香港大学和腾讯共同提出的SELF-TUNING学习框架，这个框架旨在通过自学方式让大型语言模型（LLM）获取最新的知识。SELF-TUNING包括记忆、理解和自我反思三个关键方面，通过自我教学策略提高模型的知识获取和记忆能力。文中详细说明了框架的三个学习阶段及其如何使用Wiki-Newpages-2023-QA数据集测试和评估模型性能，结果显示框架在知识记忆、提取和推理方面效果显著，可避免灾难性遗忘并有效内化新知识。

[《Multi-Agent实践第8期:轻松拖拽搭建多智能体应用》](https://mp.weixin.qq.com/s/Jj5dclm7qqzp6pR4YM3lsw)。这篇文章介绍了如何使用AgentScope Workstation，一个基于拖拽式构建多智能体应用的零代码开发平台。用户无需编程经验，只需从工具栏选择并拖拽组件，就能自由组合出创意独特的多智能体应用。文章详细描述了操作步骤，包括选择大模型和智能体、设置配置以及运行应用等。此外，还介绍了AgentScope的高级功能，使用户能够创建复杂工作流并实现包括代码运行、文件读写和网络搜索在内的多种任务。文章鼓励读者探索更多可能，支持AgentScope社区的发展。

[《用 KV 缓存量化解锁长文本生成》](https://mp.weixin.qq.com/s/Iqr7UMVk9vW6tMuRK6AIOg)。这篇文章由Raushan Turganbay介绍了Hugging Face的新功能——KV缓存量化。本文详细解释了键值缓存（KV Cache）和量化的工作原理，以及它们如何在大语言模型（LLM）生成长文本时提高速度和内存效率。通过量化KV缓存，模型能在几乎不损失生成质量的前提下显著减少内存占用，从而支持更长文本的生成。研究表明，这一方法在多种基准测试数据集上的效果良好。文中还提供了KV缓存量化在具体操作步骤和代码示例，展示了如何实现这一优化。

[《图解 Transformer [译]》](https://juejin.cn/post/7320082701212844044)。这篇文章由The Random Transformer编写并在掘金上翻译和发布，重点介绍了Transformer模型。Transformer利用自注意力机制显著提升了模型训练速度，适合并行处理，并在某些任务上超过传统的神经机器翻译模型。文章深入解释了Transformer的工作原理，包括编码器和解码器组件、自注意机制、多头注意力机制以及位置编码等重要概念。通过图解和简单的描述，使读者能够更轻松地理解复杂的技术细节。

[《LlamaFactory 一键式LLM训练、微调工具介绍与实践》](https://mp.weixin.qq.com/s/zT4CwkZJkExuvivgG_h_EQ)。本文介绍了LlamaFactory工具，一个封装完善的LLM微调工具。作者详细描述了LlamaFactory的架构和主要特性，强调其通过Trainer类实现训练流程，支持各种模型和多种训练方法，包括全参数微调、LoRA微调和QLoRA微调等。LlamaFactory结合先进算法如GaLore和Unsloth，大幅降低了显存占用。文章还探讨了数据准备和使用自定义数据集的步骤，并分享了工具的安装依赖和WEB-UI训练界面。LlamaFactory凭借集成化设计，提供便捷且高效的LLM微调解决方案，适合快速上手和复杂训练任务，但需用户详细了解配置参数以优化使用。

[《分享几个有趣的大模型(LLMs)应用场景，涉及金融分析、物联网、招聘、战术分析等》](https://mp.weixin.qq.com/s/gI7qXG7qzIFsfgFjD82yDA)。本文作者盘点了一些大模型（LLMs）在不同领域的应用案例。具体包括：利用MockLLM进行在线招聘面试，通过模拟面试过程提升人职匹配质量；ResearchAgent系统生成论文idea，优化科研思路；TacicAI在足球战术分析中的应用，高效提升角球战术效果；代码精细化，通过迭代改进源代码；CibyGPT处理物联网时空数据；finRobot进行高级金融分析；FactAgent用于假新闻检测和信息核查；以及基于信息检索系统的QA问答。这些案例展示了大模型在不同场景中的创新应用和潜在影响。

[《苹果智能炸裂登场:直接GPT-4o加持，全家桶都上生成式AI，Siri脱胎换骨》](https://mp.weixin.qq.com/s/sCD2DKx9-rroCoTh1bSvBQ)。这篇文章介绍了苹果在WWDC 2024发布的一系列生成式AI功能，由Apple Intelligence系统驱动，集成了GPT-4o和本地大模型加云端的混合策略。Siri更新与大模型结合，增强自然语言理解。Apple Intelligence系统应用广泛，覆盖语言和图像生成，以及系统级整合功能，如文档生成和图像处理。苹果还首次引入了iPhone通话录音和iPad计算器功能。这标志着苹果在AI技术领域迈出的重要一步。

[《效果远超LoRA和QLoRA!PiSSA微调LLaMA-3》](https://mp.weixin.qq.com/s/kpdkS1BeOwmnUiOcXxvfwA)。本文作者孟繁续详细介绍了如何使用PiSSA微调LLaMA-3模型。PiSSA通过不同的初始化方式，仍保持与LoRA和QLoRA相同的结构，但显著减少量化误差，提升了模型收敛速度和最终效果，并且适用于4bit量化场景。文中提供了具体的代码示例和步骤指南，展示了PiSSA的快速收敛和高效性能。作者还强调未来将在Huggingface平台上逐步共享更多模型和配置，方便用户使用和定制。PiSSA微调LLaMA-3使训练更高效，效果更优。

## ⭐️ Go & 云原生 & Rust 相关

[Creating a chess.com/lichess clone using Go and Vue](https://dev.to/alvaronaschez/creating-a-chesscomlichess-clone-using-go-and-vue-1om)

[Secure Randomness in Go 1.22](https://mp.weixin.qq.com/s/e5as8u4aklbm9Aukw66KwA)

[使用一键脚本搭建自己的镜像加速仓库](https://mp.weixin.qq.com/s/RRigOLC_bQjOLh47gEVd-A)

[Rust项目中使用 Lettre 进行发送邮件](https://mp.weixin.qq.com/s/EW1OUZSgtGSff5R8eg9fhg)

[使用 Gin 快速开发高性能的 Web 应用](https://mp.weixin.qq.com/s/QqgwkNQ-qRo4Aa3HPZ9uhw)

[在 Go 中如何优雅的使用 wire 依赖注入工具提高开发效率？上篇](https://mp.weixin.qq.com/s/cSs_4xP6aIztSoZIfvVnsw)

[探索Rust在AI领域的应用](https://mp.weixin.qq.com/s/UAdVpZ_UvfdGdDMWmGRp2w)

[Gopher的Rust第一课：Rust代码组织](https://mp.weixin.qq.com/s/aJ2ywxRvEIzKU9gUlG0NOw)

[Go必知必会：数组和切片详解](https://mp.weixin.qq.com/s/G1gXrl9C4knrXN93a-M4vw)

[分享最近学到的 5 个 Golang 小技巧](https://mp.weixin.qq.com/s/wUn2TyI66GbzfMLCYHB6yg)

[Docker镜像加速器被毙了？试下这种免费的方式吧！](https://mp.weixin.qq.com/s/eHoZI-VUDCxJq6wc3zNZSA)

[Go 面试中的隐藏陷阱：SliceHeader 问题解析](https://mp.weixin.qq.com/s/LxFntxCigGlUa1bcipKhZg)

[Golang sql 标准库源码解析](https://mp.weixin.qq.com/s/mCZ9Fn3twf6dLzqyXxRpGA)

[Go-Zero实战之docker开发环境部署（六）](https://mp.weixin.qq.com/s/YY6Y-rpYASL6s6OMJCm20g)

[使用 Nginx Ingress 实现金丝雀发布](https://mp.weixin.qq.com/s/IM4yRYjZmQ2AGWhv87h2gA)

[Go即时通信：Goim 源码](https://mp.weixin.qq.com/s/XEZADreCOhWCizJeUInl1A)

[Go 朝着错误的方向发展](https://mp.weixin.qq.com/s/85CIMowIm9oon3m9Lzr8wg)

[大厂开始选择使用 Rust 做微服务应用开发了](https://mp.weixin.qq.com/s/qrobTHebMnxsaQUuljxAMw)

[Go 夜读第 155 期：带你从零到一实现 TCC 分布式事务框架](https://mp.weixin.qq.com/s/WdLEIXnwmxpU25D7Yknpmg)

[Go与神经网络：线性回归](https://mp.weixin.qq.com/s/pnMkTwons7Tsg19HBhCsTg)

[Rob Pike的编程哲学](https://mp.weixin.qq.com/s/v9_9PGqsmqnQjT7f9soO6A)

[快速吃透 Golang Channels 使用技巧](https://mp.weixin.qq.com/s/3MFTD5_FG80fSyHSeZhMuw)

[Go 中空结构体的用法，我帮你总结全了！](https://mp.weixin.qq.com/s/o3-yPO-OfdVlXvEtVPIzRw)

## 📒 后端相关

[网关系统就该这么设计（万能通用），稳的一批！](https://mp.weixin.qq.com/s/aXaYZQdhbnWV6q3oiTs6Zw)

[领导撒事不干，凭什么工资比我高](https://mp.weixin.qq.com/s/kZGJR3e9BbsTRJUCD8FMMQ)

## 📒 前端相关

[VSCode无限画布模式（可能会惊艳到你的一个小功能）](https://mp.weixin.qq.com/s/cFzOOqknRyvwGxMLw5DNLw)

[Next.js v15 要来了，有哪些更新？附升级指南](https://juejin.cn/post/7375858343179255862)

[Next.js 项目接入 AI 的利器 —— Vercel AI SDK](https://mp.weixin.qq.com/s/bdjBt0GcoS1jwqqBE3Lvkw)
