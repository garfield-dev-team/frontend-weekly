---
slug: 5月5日内容汇总
title: 5月5日内容汇总
authors: [garfield]
tags: []
---

![alt text](maxresdefault.jpg)

封面图：Safe by construction - Roberto Clapis

## 🌟 AI 相关

[《LLM 安全 | 大语言模型应用安全入门》](https://juejin.cn/post/7361253974051602441)。本文由无恒实验室撰写，系统地介绍了大型语言模型（LLM）的基础知识、工作原理、训练过程以及面临的挑战和安全问题。文章首先概述了 LLM 的兴起背景和应用领域，随后深入解释了模型如何通过词向量和 Transformer 架构处理和生成文本数据。文章还详细讨论了 GPT 模型的预训练和微调过程，解析了模型在训练数据、生成可靠输出方面的挑战，并探讨了模型幻觉、逆转诅咒和遗忘中间等已知缺陷。此外，还对 LLM 的应用安全风险进行了分析，包括提示词注入和越狱行为，以及如何通过监管和技术手段降低这些风险。文章的核心在于强调了对于 LLM 安全性的关注，以及在技术进步与安全防护之间寻求平衡的重要性。

[《谈谈我对 AIGC 趋势下软件工程重塑的理解》](https://mp.weixin.qq.com/s/UFMxQB9sUC5I0y86nfzKjw)。本文探讨了 AIGC 趋势对软件工程领域产生的影响以及软件研发智能化的实践策略。文章首先指出，AI 已成为软件研发的必选项，特别是在代码生成和逻辑推理方面的应用，如 GitHub Copilot 等工具已极大提高了开发效率。随后，文章分析了软件研发面临的挑战和智能化带来的机遇，重点讨论了企业落地智能化研发的策略与路径，包括初步引入、长期效率提升及全链路智能化升级三个阶段。最后，提出了落地软件研发智能化工具的具体实例和建议，强调在大模型时代，软件研发流程和范式将发生颠覆性变化，AI将在提高个体效率、优化协作、改善开发体验和提升数字资产管理等方面扮演关键角色。

[《神秘模型gpt2-chatbot实力被赞超越GPT-4: sam亲自确认，或是OpenAI全新模型》](https://mp.weixin.qq.com/s/zwigN1hXa6SeXCdLjXwwYQ)。本文讨论了一个名为gpt2-chatbot的新型AI模型，它在特定能力上展现出了超越GPT-4的潜力。模型在ASCII图像处理能力上尤为突出，有猜测它可能是OpenAI即将发布的GPT-4.5或全新AI系统。OpenAI的sam altman已经确认了对GPT2的支持，但模型的具体定位尚不清楚。一些推测认为gpt2-chatbot可能是四年前GPT-2模型的进阶版，这表明GPT-2的预训练质量至今仍然领先。尽管有些用户报告相似的弱点，但gpt2-chatbot的独特之处在于它的长处和改进潜力，引发了关于其身份和OpenAI未来产品的广泛讨论和期待。

[《白话NLP技术的演进发展》](https://mp.weixin.qq.com/s/lmEtzutVawQ1EB4BWsVcag)。本文详尽介绍了自然语言处理（NLP）技术的发展历程和核心技术，从最初的one-hot encoding到word2vec等词嵌入技术的提出，以及深度学习技术如RNN、LSTM、Transformer等序列模型的应用。文中还讨论了预训练语言模型如BERT、GPT系列的革命性影响，以及大模型如GPT-3和LLaMA带来的NLP技术和应用的飞跃。这些模型不仅极大地提高了机器理解和生成自然语言的能力，而且推动了人机交互、知识获取、内容创作、编程辅助等多个领域的创新。同时，文章也提出了大模型存在的局限和潜在风险，展望了NLP的未来发展方向。

[《大模型炼丹经验:大Batch训练LLM探索，及如何与RL一起变化?》](https://mp.weixin.qq.com/s/5IxWr8Mbq_oTx8b1J5avMQ)。这篇文章详细分析了大规模语言模型（Large Language Models, LLMs）在大Batch训练中的效率和学习率（LR）的调整问题。文章指出提高数据并行度并不总能提高训练效率，尤其是当Batch大小过大时。它进一步讨论了OpenAI如何使用梯度噪声尺度与Batch大小和LR之间的关系设置最优Batch大小，并指出这种设置与模型大小、任务类型关系不大但与LR的设定方式关系密切。还观察到当Batch大小达到一定临界值时，模型性能可能会受到Batch增大的负面影响。此外，文章引用了OpenAI和Google的研究，提示存在一个数据并行的临界点，至关重要的是找到这个点以平衡训练效率和模型质量，并探讨了批大小与学习率的实验结论，提供了未来大模型训练的洞见。

[《社区供稿 | 中文llama3模型哪家强?llama3汉化版微调模型大比拼》](https://mp.weixin.qq.com/s/T2pQ3acodCihvAkx0hi3rQ)。文章对比了几款流行的汉化版llama3大语言模型的性能。在多个基准上进行了测试，包括英文知识推理(ARC)、中文学科考试(C-Eval)、数理逻辑(GSM8K)。结果显示，各个模型在英文数据集上的“遗忘”程度不一。中文版模型在C-Eval上的表现轻微下降，而在英文数理逻辑测试中表现下降更明显。其中, Llama3-Chinese-8B-Instruct-Agent-v1在增强中文Agent能力方面有所提升。此外，使用AlignBench对其多维度中文对齐性能进行了评估，得出不同程度中文能力下降的结论，暗示数据覆盖、配比以及训练参数设置等方面仍需改进。

[《精通 RAG:如何构建企业 RAG 系统》](https://mp.weixin.qq.com/s/_j7z7k3w84BVoq3VBGgV8Q)。本文提供了构建企业级RAG系统的全面指南，概述了常见故障点和最佳构建实践。作者分析了身份验证的重要性，输入护栏避免有害输入，查询重写器提高查询质量等关键组件。还探讨了选择文本编码器、处理文档摄取、文档索引和数据存储的因素，以及如何实现高效语义搜索。此外，介绍了提高检索效率、监控系统表现、利用缓存降低成本和多租户实现数据隔离等高级技术。文章强调了系统监控、反馈循环的重要性以及持续优化系统性能的方法。

[《有了Chain of Thought Prompting，大模型能做逻辑推理吗?》](https://mp.weixin.qq.com/s/2RkA2GTl8akv4VwSp3OyeQ)。文章探讨了Chain of Thought (CoT) Prompting对提升大型语言模型在逻辑推理任务上的表现。CoT通过在提示中加入解题的中间步骤，而不仅仅是终极答案，从而帮助模型更好地理解和执行复杂的逻辑推理任务。文章通过数学题、常识推理等例子展示了CoT的有效性，同时引入了Zero-shot CoT，即在零样本情况下通过增加步骤解释来提高模型推理能力，并通过实验结果显示出显著的改善。此外，还讨论了Least-to-Most Prompting，它进一步将复杂问题分解成一系列简单问题，通过逐步解决这些简单问题来解决原始的复杂问题，显著提升了模型处理复杂逻辑推理任务的能力。文章证明了CoT和相关方法在促使大型语言模型执行复杂逻辑推理方面的潜力。

## ⭐️ Go & 云原生 & Rust 相关

[《Secure Randomness in Go 1.22》](https://go.dev/blog/chacha8rand)。Go 1.22 版本通过在 `math/rand` 包中引入基于密码学的随机数生成源，实现了统计随机性与密码学随机性的更紧密结合。这一改进显著提高了随机数的质量，并减少了当开发者错误使用 `math/rand` 替代 `crypto/rand` 时可能带来的安全风险。文章详细地比较了统计随机性和密码学随机性，并介绍了新的随机数生成器——ChaCha8Rand，该生成器在继承了ChaCha流密码的基础上做了轻量级修改，提供了更加安全、高效的随机数生成能力。此外，Go 1.22 还优化了随机数生成器的性能，尽管相比旧版本和PCG生成器有所减慢，但提升的安全性值得这种牺牲。这一改进无需代码更改，即可让Go程序更加安全。

[《Evolving the Go Standard Library with math/rand/v2》](https://go.dev/blog/randv2)。Go 语言团队在 Go 1.22 中新增了一个 `math/rand/v2` 包，这是 Go 标准库中第一次出现采用带版本号路径的方式进行兼容性更新的实例。新版本的包重写了随机数生成器的 API，包括使用全新的生成器算法 PCG 和 ChaCha8 替换原有 Go 1 生成器，并引入了一些 API 断点变更来修复 `math/rand` 中历史上的问题。文章详述了更新的具体动机，并反思了未来包版本迭代将遵循的一般原则。这些原则包括：使用带版本号的导入路径以允许旧新版本的共存，尊重现有用户及其用法，尽可能避免不必要的变动，以及确保不会遗弃旧版本的用户。通过这些更新，Go 团队期望为今后对标准库的升级树立标杆并确立持续改进的原则。

[Rust Tokio 任务取消模式](https://mp.weixin.qq.com/s/GD95hqKcHY-ynAa42jxmSA)

[LangChainGo + Ollama, OpenAI, Mistral 快速构建大模型应用](https://mp.weixin.qq.com/s/_Qi5aPjdxdYLWjKXemCLzQ)

[看了Kubernetes源码后，我更喜欢写Golang的单元测试了](https://juejin.cn/post/7363235196144074803)

[Rust：新特性GAT，允许使用泛型的关联类型](https://juejin.cn/post/7302308334202863653)

[太优雅了！Rust 200 行代码实现表达式解析](https://mp.weixin.qq.com/s/Kpz9pRVgk_-2Chx6GvS_0A)

[Go Heap Profile 怎么了](https://mp.weixin.qq.com/s/TlYXFXid5JVxUNAWsugnwQ)

[Google 孵化了 3 个 Go 安全库，推荐使用！](https://mp.weixin.qq.com/s/IOe036O20y7OW9cSeL-5UQ)

## 📒 后端相关

[我在淘宝写SQL｜ODPS SQL 优化总结](https://mp.weixin.qq.com/s/VKccZmx9Gd6RgsyDEBbBQA)

## 📒 前端相关

[没有前端能抵抗住的酷炫效果，带你用Three.js Shader一步步实现](https://mp.weixin.qq.com/s/msRPuhYlPrjZJonJj5-mpQ)

[TypeScript 5.5 beta 发布：类型守卫推导、控制流分析优化、独立类型声明等](https://mp.weixin.qq.com/s/56a_mZbFRXKtecywlwwb2Q)

[Rspack 作者揭秘，你的 Tree Shaking 真的起作用了吗](https://mp.weixin.qq.com/s/Qu7jiQp9HPkyTy85EGYdMQ)

[JSR Is Not Another Package Manager](https://deno.com/blog/jsr-is-not-another-package-manager)

[灵魂画手有救了！字节开放模型 Hyper-SD，最快 1 步生成 SOTA 级图片（有demo 来试试](https://mp.weixin.qq.com/s/un0VywUZOMMVlnT-nlDlqQ)

[这些年做管理的一些感悟](https://juejin.cn/post/7327107254603759643)
