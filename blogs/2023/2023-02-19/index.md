---
slug: 2月19日内容汇总
title: 2月19日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i1/O1CN01B3wSrC28JI5bpyIii_!!6000000007911-2-tps-1536-1024.png_1200x1200.jpg)

题图：Bigfish x 情人节。

📒 云原生运维相关文章

[Linux 命令行工具之 jq 最佳实践](https://mp.weixin.qq.com/s/Ys4A9nGPx1T2se_eoFxVSA)

[2022年 SRE、DevOps技能图谱](https://mp.weixin.qq.com/s/NarTVKrCu4KvSL3sT4YXWg)

[Linux 命令工具之 grep](https://mp.weixin.qq.com/s/9_Mt2_Mg_92ObWENjchrsQ)

[Linux 命令工具之 awk](https://mp.weixin.qq.com/s/OFjy_EIJKCLwF7rwAaeOFw)

[Golang中的逃逸分析](https://mp.weixin.qq.com/s/QtWqnS5dCvXCYvHzIk-BrQ)

[据说成功人士都是这样管理时间的](https://mp.weixin.qq.com/s/gh7ys7d9Dr52TIulhkoTMg)

📒 [【面试高频题】难度 4/5，单调栈的热门运用](https://juejin.cn/post/7200408830051336248)

📒 [【第2858期】React 纪录片心得 — 重新思考最佳实践](https://mp.weixin.qq.com/s/x1HGf4MNPoifIJIaLEg9uQ)

⭐️ [Go 陷阱 - 缓冲区内容不输出](https://mp.weixin.qq.com/s/ntIuk0HTEfxRqZQNv0_9gA)

⭐️ [百里挑 15 个 Git 技巧](https://mp.weixin.qq.com/s/5Mmd51cpGKxmm7WULNvUyw)

📒 [组件库实战——按需加载工程化](https://juejin.cn/post/7199591833522176058)

📒 Go 也要过情人节，并发布了安全更新 Go 1.20.1 和 Go 1.19.6

[Go 1.20.1 发布了](https://mp.weixin.qq.com/s/enYkz_1aYZlbASFpliBpcA)

[Go 也要过情人节，并发布了安全更新 Go 1.20.1 和 Go 1.19.6](https://mp.weixin.qq.com/s/9ucVNxf9L7xX4Q6EUM7gnA)

📒 [前端食堂技术周刊第 70 期：Volar 的新开端、Lighthouse 10、良好的组件设计、React 纪录片、2022 大前端总结](https://juejin.cn/post/7199933874306089021)

⭐️ [聊聊 Ant Design V5 的主题（上）：CSSinJS 动态主题的花活](https://juejin.cn/post/7199832444836593725)

⭐️ [Go 高性能 - 字符串拼接 1000+ 倍优化](https://mp.weixin.qq.com/s/HgXLFFTpXbxKPNmIgdhmXA)

📒 [技术角度告诉你ChatGPT是什么？和一些深度思考](https://juejin.cn/post/7199537072301228089)

📒 [闲鱼大终端UI组件库——FishUI建设之路](https://juejin.cn/post/7199508018374033445)

📒 ChatGPT 相关

https://platform.openai.com/docs/api-reference/completions/create#completions/create-prompt

https://huggingface.co/datasets/fka/awesome-chatgpt-prompts

https://github.com/f/awesome-chatgpt-prompts

https://github.com/lencx/ChatGPT

📒 [细说 Vue 响应式原理的 10 个细节！](https://mp.weixin.qq.com/s/wRc1x4TP3PlleikL8f6rng)

📒 MDH 前端周刊第 87 期：re-render、Resumable React、ESLint 性能、监控

《React recursively re-renders child components, but there is a nuance》。Alex Sidorenko 的 React 可视化渲染系列文章 +1。通过可视化的方式告诉你为啥通过 children 渲染子组件，能避免 state 变更时子组件 re-render。

> https://alexsidorenko.com/blog/react-render-children-prop/

《Resumable React: How To Use React Inside Qwik》。关于如何在 Qwik 内使用 React，你可以建立 React 应用程序，而无需在用户的浏览器中加载 React。当然，在你需要交互的时候，还是需要动态加载 React（感觉不一定是件好事，没解决问题，只是把问题转移了，可能在交互时会卡一下）。

> https://www.builder.io/blog/resumable-react-how-to-use-react-inside-qwik

《Speeding up the JavaScript ecosystem - eslint》。Speeding up 系列的第三篇。1）检测方法是 --cpu-prof + Speedscope（通常还可以用上 hyperfine 跑多次做 benchmark），2）解析器从 @typescript-eslint/parser 换成 @babel/eslint-parser + @babel/preset-typescript 可以节省不少时间，从 2.1s 到 0.6s，缺点是不支持 type-aware 的 linting 规则（我们通常也不会用他们），3）rslint 值得关注。

> https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-3/

《Vite with ESLint》。手把手教你如何在 Vite 项目中加上和 Vite 集成的 ESLint，基于 vite-plugin-eslint。但个人感觉 ESLint 不应该集成（因为会影响构建速度），而应该单独用，同时编辑器里也有提示了，所以在提交和 CI 里做校验就够了。

> https://www.robinwieruch.de/vite-eslint/

《Custom React Hooks and When to Use Them》。关于自定义 Hooks，是什么、可复用的提取、不可复用的提取、提取数量等，最后还是要注意抽象的代价，抽象不是免费的，有时适当重复反而更好，推荐下 Dan 的 The Wet Codebase 分享。

> https://thoughtbot.com/blog/custom-react-hooks

《2022大前端总结和2023就业分析》。来自狼叔的年度大作，推荐。

> https://mp.weixin.qq.com/s/SicYTABGjXcJJTqYEbL5dQ

《字节前端监控实践》。感觉含金量挺高的，摘录其中错误报警的部分。1）sourcemap 结果可以用 mozila 的 sourcemap 库进行反解，2）为了保密，sourcemap 不会传到公网，而是传给后端存在内部，Sentry 有类似工具（注：sourcemap 构建慢怎么办？并发多跑一次带 sourcemap 的），3）要做堆栈聚合，合并同类错误，4）通过记录 commit + git blame 可以直接分配报错信息到人。

> https://juejin.cn/post/7195496297150709821

[MDH 前端周刊第 87 期：re-render、Resumable React、ESLint 性能、监控](https://mdhweekly.com/weekly/issue-0087)

📒 [「每周译Go」在 Go 中定义结构体](https://mp.weixin.qq.com/s/J7w8IN5Gw94AzOZlnYxvow)

📒 [leader要我三天时间搭一套react-cli出来，我答应了](https://mp.weixin.qq.com/s/WLyl15SmnZmbdnzr2RfqGQ)

⭐️ [Go for range 一不小心就掉坑里了](https://mp.weixin.qq.com/s/jdKIuPmb-Y0TGROdX97AQA)

📒 [Go 工具链想主动上报使用数据，你愿意吗](https://mp.weixin.qq.com/s/HcK9xTT5xl9sztjSxGlkIA)

📒 [Go语言爱好者周刊：第 176 期 —— 题目来了](https://mp.weixin.qq.com/s/UzTPjFKzNv6NobYQP7fOfg)
