---
slug: 4月14日内容汇总
title: 4月14日内容汇总
authors: [garfield]
tags: []
---

![alt text](image.png)

封面图：Go语言的TIOBE排名创历史新高

## 🌟 AI 相关

[《干货 | 如何系统性地评价RAG系统》](https://mp.weixin.qq.com/s/kw8IZE7yy2QO66iPmQVhqA)。这篇文章是对《LLM-auto-eval-best-practices-RAG》的翻译和解读，重点讨论了如何系统性地评价检索增强生成（RAG）系统。文章探讨了使用大型语言模型（LLM）作为RAG系统自动化评估工具的最佳实践，包括评分的一致性、通过少量示例来提高评估准确性、选择合适的评分尺度以简化解释过程、以及评估指标的通用性。作者通过一系列实验，提出应使用低精度评分，如0至3分或1至5分，定制RAG基准，并建议特定用例评估，以准确衡量模型性能。

[《PromptKD: 基于Prompt的视觉语言模型蒸馏》](https://mp.weixin.qq.com/s/Eub9QELtA91bdYNkzaZfIQ)。本文介绍了一个使用无监督Prompt蒸馏（PromptKD）方法，针对视觉-语言模型（VLMs），在prompt learning的11个基准数据集上达到了最佳状态（SOTA）。PromptKD通过引入一个更大的CLIP模型作为教师模型，通过三个主要步骤以提高模型效能：重用教师模型产生的文本特征用于学生模型的训练和推理，确保高质量文本特征的同时显著减少计算量；对齐学生和教师的logits，让大模型为小模型提供更准确的监督信号；使用大量无标签的域数据让学生模型学习更广泛的领域知识。实验结果表明，PromptKD在多个基准测试中均展示出卓越的性能，显示出这种方法在提高VLMs的表现上的有效性。

[《大模型应用开发之业务架构和技术架构(从AI Embedded 到 Copilot,再到Agent)》](https://mp.weixin.qq.com/s/su_NCl9WQtPGP3pcDgnQ8A)。本文分析了大型语言模型（LLM）在应用开发中的业务架构和技术架构，讲述了从AI Embedded模式、AI Copilot模式到AI Agent模式的演变。AI Embedded指在某些传统应用环节中集成LLM，而AI Copilot代表广泛应用LLM进行串联集成的模式。AI Agent模式则更进一步，用户只需提出需求，AI则自动完成任务。文章还讨论了单Agent模式和多智能体系统（Multi-Agent）的定义，展示了这些体系的应用如何分解复杂任务、通过对话促进个体间的信息交流和协作。提出了基于大模型的Agent需要能够进行对话，接收和响应消息。最后，文章介绍了单Agent和Multi-Agent的应用开发框架，如LangChain和Autogen，并讨论了选择技术方案的思路。

[《TensorRT-LLM初探(二)简析了结构，用的更明白》](https://mp.weixin.qq.com/s/So1Swe4E99xi_SEyxFadsw)。文章深入探讨了TensorRT-LLM（一个深度学习优化推理库）的结构及其使用方法。介绍了TensorRT-LLM是基于FasterTransformer和TensorRT进行构建，用于优化大模型推理性能。文章概述了trt-llm的两个分支：Release branch和Dev branch。重点强调了trt-llm的多卡支持，包括Tensor Parallelism和Pipeline Parallelism。进一步探讨了In-flight Batching与动态KV Cache以及量化技术，比如INT8 weight-only、SmoothQuant、GPTQ和AWQ，用于提高效能。最后总结LTR-LLM在kernel性能及调度方面的优势及部分闭源代码限制。

[《LLM微调技术指南:Prompt-Tuning，P-Tuning，Prefix-Tuning、Lora， IA3》](https://mp.weixin.qq.com/s/KaSM29hUEkme8TjxlbCDag)。本文细致审视了大型语言模型（LLM）的多种参数效率微调（PEFT）技术，包括Prompt-Tuning、P-Tuning、Prefix-Tuning、LoRA和IA3。介绍了微调的概念及其在LLM中的重要性，尤其是当模型规模与复杂度日益增长时。文章还详细探讨了迁移学习和各种PEFT策略的工作机制，强调这些技术如何帮助提高LLM在特定任务上的性能，同时降低了训练成本。通过具体实例和详尽分析，文章展示了如何有效地微调模型，以适应迅速变化的数据和业务需求，并充分利用机器学习应用程序的潜力。

[《纯C语言手搓GPT-2，前OpenAI、特斯拉高管新项目火了》](https://mp.weixin.qq.com/s/YMuq9Jo9Nibl1QFbLNxazg)。本文介绍了Andrej Karpathy发布的项目“llm.c”，这是一个使用不到1000行纯C语言代码即可实现在CPU/fp32环境下训练GPT-2模型的项目。它旨在简化大模型训练流程，去除对大型机器学习库的依赖。文中提到项目目前已完成几层核心代码的CUDA移植，以提高效率。而未来工作的方向包括实现更多新型架构支持、SIMD指令优化和更直接的CUDA实现。实验结果显示，尽管该方法仅用极少代码，依然能够与PyTorch实现相媲美，社区反响热烈。

[《一键更改LoRA初始化!LoRA吃了披萨，效果起飞?》](https://mp.weixin.qq.com/s/EQgaHqNyNT2gvp5q4ro1xQ)。文章提出了一种新型参数效率的微调方法PiSSA，该方法利用预训练模型权重的本质低秩性质，通过奇异值分解来构建适配器，实现少量参数的高效调整，而冻结大部分参数以保持模型原有能力，显著降低了训练成本。PiSSA与已知的LoRA方法在架构上一致，差别在于初始化技术，使PiSSA在多项模型训练任务中优于LoRA。本文还探讨了快速奇异值分解技术，以减少PiSSA初始化的计算成本。

[《RAG中，无关信息的影响有多大?》](https://mp.weixin.qq.com/s/FTsvYFY63cQIm7XWbNMgjA)。论文《How Easily do Irrelevant Inputs Skew the Responses of Large Language Models?》探讨了大型语言模型（LLMs）在处理相关但无关信息时的鲁棒性问题。研究构建了多种质量的无关信息，分析了LLMs在答案生成时的易受干扰性，并测试了不同模型对无关信息的处理能力。发现模型容易受到语义相关无关信息的误导，无关信息数量增加会减弱模型的判别能力，并指出问题格式显著影响模型鲁棒性。研究揭示了现有应对策略的局限，提供了提高LLMs处理无关信息鲁棒性的指导。

[《Agent四大范式 | CRITIC:吴恩达力推Agent设计范式》](https://mp.weixin.qq.com/s/RhjmsehDXOj5KRY2gQ4wzw)。文章概述了CRITIC框架，它的目的是通过与外部工具交互，提高大型语言模型（LLMs）的效能和准确性。CRITIC作为一种交互式验证机制，可使模型像人类一样利用搜索引擎等工具进行自我修正，并提升模型的自我完善能力。研究结果表明，CRITIC能显著提高LLMs在问答、程序合成和内容安全性方面的性能，而且强调了持续外部反馈对于模型自我完善的重要性。文章还探讨了CRITIC的实用性和潜在局限性，强调了将这一范式应用于更广泛场景的可能性。

[《Qwen1.5开源32B模型-将开源进行到底》](https://mp.weixin.qq.com/s/WOiyQYSs5XZzSsn6hdb_Ww)。刘聪NLP介绍阿里巴巴开源的Qwen1.5机器学习模型，突出了其32B参数规模和支持长达32k长度的特点。该模型弥补了以往工作中30B规模模型的空缺，并且作为中间大小的模型，它在易用性和计算成本上相对于更大模型更为实用，同时在多任务评测指标上仍显示出色的性能。Qwen1.5-32B支持多语言，并在精确度和多样性方面具有竞争力，有助于推动机器学习领域的开源进程。

[《剑桥团队开源:赋能多模态大模型RAG应用，首个预训练通用多模态后期交互知识检索器》](https://mp.weixin.qq.com/s/F4wwoATw4HAXxGArbbLKdA)。剑桥大学人工智能实验室开发并完整开源了PreFLMR模型，这是一个预训练的通用多模态知识检索器，旨在为多模态RAG（Retrieval-Augmented Generation）应用提供支持。PreFLMR基于NeurIPS 2023发表的FLMR（Fine-grained Late-interaction Multi-modal Retriever）框架改进，通过大规模多模态数据预训练，优化了知识检索性能。它支持多种检索任务，如文文、图文和知识检索，能从大规模知识库中高效提取相关信息，显著提升多模态大模型在专业知识问答任务上的表现。此外，项目还贡献了M2KR数据集，供通用知识检索器训练和评估使用。

## ⭐️ Go & 云原生 & Rust 相关

[\[并发专题\] Golang 基于令牌桶算法实现简单的限速器](https://mp.weixin.qq.com/s/bRvCdXGauJnHb9aAQhTLLQ)

[Golang 构建时的 ldflags 有什么作用](https://mp.weixin.qq.com/s/InF_TxdieBg0b8q-4numpg)

[Go 工具链已经开始收集和上报使用数据！](https://mp.weixin.qq.com/s/1xFt6GIrf2qvqVyABwG7rw)

[RocketMQ 事件驱动：云时代的事件驱动有啥不同](https://mp.weixin.qq.com/s/fXUfmNeIXWr7utbn_f4Jjg)

[Etcd 概述及运维实践](https://mp.weixin.qq.com/s/KdT-Qo3dB3sWARAhWGeurA)

[选择正确的Go Module Path](https://mp.weixin.qq.com/s/IYe82j3oY3-TuY2lTE0KJA)

[基于Golang的高性能游戏服务器框架](https://mp.weixin.qq.com/s/ymd5O6dXHuYlALU_VF5ieg)

[100 K8s Mistakes and How to Avoid Them - 上](https://mp.weixin.qq.com/s/8noQvux5O5ATdzdx4EHWjQ)

[类型安全的Pool](https://mp.weixin.qq.com/s/TW0IoOOwcSIeMK33L8Bx_w)

[Go 标准库中的一个设计败笔：哨兵错误](https://mp.weixin.qq.com/s/SG58FiEgs-9Q1jHxpDSx9Q)

[深度解析消息队列服务｜从 AWS SQS 到阿里云 MNS](https://mp.weixin.qq.com/s/-cvD5F8fcge6DyiaEKhXWw)

[当AWS账单超出预算时，如何自动化处理资源实例](https://mp.weixin.qq.com/s/zAMuQ29Xp7DnDE74RqffnQ)

[微服务架构下的配置管理：Go 语言与 yaml 的完美结合](https://mp.weixin.qq.com/s/s7hlKBr7fZXmkK9v7PmYPQ)

[Select + Channels 实现定时任务与高效调度](https://mp.weixin.qq.com/s/itHsebcV7a2G5Wy87bW63A)

[使用 Select +Timer 时如何避免内存泄露](https://mp.weixin.qq.com/s/tCeC6uHI2py9_qq9h7pkcw)

[快速了解 Golang Rune 及其避坑指南](https://mp.weixin.qq.com/s/2RNu9ahoLE0O7PR9ZmUWgg)

[一文掌握 Golang Empty Struct 的所有用法](https://mp.weixin.qq.com/s/S0BpYUvHtd5zf-Z_SOnTwQ)

[Golang 应用发布生产后想睡个好觉？推荐提前用 nilaway 扫雷！](https://mp.weixin.qq.com/s/VbZcx7zilS4gLfbJe76EJA)

[Kubernetes中的事件收集以及监控告警](https://mp.weixin.qq.com/s/y8bQ1Ze3pG6PWNDlppS-2w)

[All in One：Prometheus 多实例数据统一管理最佳实践](https://mp.weixin.qq.com/s/SSEXh7n0ZEfcvKTAL4s4sA)

[Go 哪里没有做好？Rob Pike 深刻反思了](https://mp.weixin.qq.com/s/yER9DXSQa-YQuE3Dbu0JDQ)

## 📒 后端相关

[微服务架构中10个常用的设计模式，建议收藏！](https://mp.weixin.qq.com/s/gBwUVRMqoFWaBgxZGfDhJQ)

[如何优雅地记录操作日志？看看美团是怎么做的](https://mp.weixin.qq.com/s/b0T_ZXap_pJ1qW_6KQIfqQ)

[两万字详解！InnoDB锁专题！](https://mp.weixin.qq.com/s/YHft80D_-PUmiGuaz_4Q0A)

[阿里终面：每天100w次登陆请求, 8G 内存该如何设置JVM参数](https://mp.weixin.qq.com/s/sdSXTvZx0hCiWjBERxBk8A)

[微服务难点剖析 | 服务拆的挺爽，问题是日志该怎么串联起来呢](https://mp.weixin.qq.com/s/M2jNnLkYaearwyRERnt0tA)

[引入缓存竟然会带来这么多问题？？！](https://mp.weixin.qq.com/s/XoJzptTiZwVyjcog2Z0g1g)

## 📒 前端相关

[MDH Weekly 125 - 《小丑牌》](https://mp.weixin.qq.com/s/WHrMwVajYKt1NwTSCKyOcw)
