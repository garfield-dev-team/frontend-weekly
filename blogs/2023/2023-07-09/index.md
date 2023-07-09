---
slug: 7月9日内容汇总
title: 7月9日内容汇总
authors: [garfield]
tags: []
---

⭐️ [Google 工作 10+ 年的感悟，有看到 Go 核心团队的影子吗](https://mp.weixin.qq.com/s/Z8kMDwuv9ZlmqvdrOu5SEQ)

⭐️ [万字长文说透分布式锁](https://mp.weixin.qq.com/s/Fkga3KaU0fBv5zXM-b8JhA)

⭐️ [服务架构简介](https://mp.weixin.qq.com/s/1kuLtd8rxC1xP628FgAwqw)

⭐️ [使用 Linux 网络虚拟化技术探究容器网络原理](https://mp.weixin.qq.com/s/aXotIih1RkpyDTaokJjGPw)

⭐️ [Go语言开发者的Apache Arrow使用指南：高级数据结构](https://mp.weixin.qq.com/s/WgeTzhP4T0AAjFssHz36UA)

⭐️ 字节跳动开源 Go HTTP 框架 Hertz 设计实践

[字节跳动开源 Go HTTP 框架 Hertz 设计实践](https://mp.weixin.qq.com/s/1rBn8yAT0FvgmcuxnSdTPg)

[「字节开源」基于Hertz和Kitex的Go微服务开源项目 | 文末福利](https://mp.weixin.qq.com/s/LvGmmaM12nikVcb4lL5nsQ)

📒 [【第2991期】从自研走向开源的 TinyVue 组件库](https://mp.weixin.qq.com/s/Lbl1fS0VVy0WEqAWa9NLtA)

⭐️ [我如何用两行代码节省了30%的CPU](https://mp.weixin.qq.com/s/2V3VSsAJH5haWqdvVJ9e8g)

📒 [第二次重写个人网站，分享一些感想](https://mp.weixin.qq.com/s/O-26RdM_R7e43YrDOia_BA)

⭐️ [fastcache 高性能设计与实现](https://mp.weixin.qq.com/s/-cOeplKT67b-paZZKD6DFg)

📒 [找不到好用的 gRPC 调试工具？Apifox 表示我可以！](https://mp.weixin.qq.com/s/Kt69BhGFaqYo466R0P7HZQ)

⭐️ [一句话搞定数据分析，浙大全新大模型数据助手，连搜集都省了](https://mp.weixin.qq.com/s/OKhUSu-iZshuYath1s4SwA)

📒 [干货 | 瘦身50%-70%，携程 Taro 小程序样式 Size 缩减方案](https://mp.weixin.qq.com/s/rpHb5ZhUTOTfbVPEZJFklg)

📒 [【第2990】如意设计助手× TDesign：产品设计的绝佳搭档](https://mp.weixin.qq.com/s/lAzMfqfTkLbTB5fhSwilcQ)

📒 [如何方便的检测React项目的性能](https://mp.weixin.qq.com/s/WKGqodCLumBWkOY_knNo4A)

⭐️ [Go 团队将修改 for 循环变量的语义，Go1.21 新版本即可体验！](https://mp.weixin.qq.com/s/VO0VlfGbuvZst9yD73-VDQ)

⭐️ 如何基于 IDL 生成 Go 项目模板

https://dev.to/justlorain/high-performance-go-http-framework-tasting-25li

https://www.cloudwego.io/docs/hertz/tutorials/toolkit/usage/usage-thrift/

⭐️ nginx 配置 HTTP/2

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name www.example.com;
    return 301 https://$host$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name www.example.com;

  ssl_certificate /etc/letsencrypt/live/www.example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/www.example.com/privkey.pem;

  # Specify SSL config if using a shared one.
  #include conf.d/ssl/ssl.conf;

  # Allow large attachments
  client_max_body_size 128M;

  location / {
    proxy_pass http://127.0.0.1:10020;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  location /notifications/hub {
    proxy_pass http://127.0.0.1:3012;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
   }

  location /notifications/hub/negotiate {
    proxy_pass http://127.0.0.1:10020;
  }
}
```

⭐️ [不藏着了，构建并减少Docker镜像容量的优化技巧都分享给你们！](https://mp.weixin.qq.com/s/XM5oya9WdvSxeDveTaWlkg)

📒 [团队把图标方案从iconfont换成iconify了，说说我们的思考](https://mp.weixin.qq.com/s/7ddDYUrtUBSHlEzVm1_INw)

📒 前端食堂技术周刊第 89 期：ES 2023、MDN Playground、TS 5.2 Beta、逆向分析 GitHub Copilot

[逆向分析 GitHub Copilot](https://zhuanlan.zhihu.com/p/639993637)

- 对于编辑器输入的边界判断，包括太少、太多、取消等等很多场景齐全的考虑；
- 缓存思想，利用多级缓存策略保护后台，模型运算本身就是一件昂贵的事情；
- prompt 的设计，不仅仅包含了上下文代码，在文件解析、编辑器打开的相关代码上还做了很多；
- 利用简单的 Jaccard 算法计算分词后的文本相似度，能够快速决策出当前上下文相关的 snippet；
- 实验特性，在 Copilot 中，大量的参数、优先级、设置字段都是通过实验来控制的，有一套完整的监控上报体系，帮助 Copilot 去调整这些参数，以达到更好的效果。

[字节跳动的前端工程化实践](https://zhuanlan.zhihu.com/p/640021617)

- 自研 Monorepo 工具，用于降低多项目的维护成本；
- 对原有的微前端框架进行升级，进一步降低多人开发的协作成本；
- 开发 Bundler 和 Build System，来加快巨型应用的构建速度；
- 提供诊断工具，来有效地防止应用劣化。

[前端食堂技术周刊第 89 期：ES 2023、MDN Playground、TS 5.2 Beta、逆向分析 Copilot](https://mp.weixin.qq.com/s/Yfh6V8luWqS8hY3LK_3XxA)

📒 [不用 React 框架，同事就要打架！](https://mp.weixin.qq.com/s/tFaE96Iysx1mt_QIQqw7Xw)

⭐️ [Go中这么多创建error的方式，你真的了解它们各自的应用场景吗](https://mp.weixin.qq.com/s/GXAvaFvXR3HYI7qU4lL4lA)

⭐️ [ants Code Reading](https://mp.weixin.qq.com/s/LanponUabu9dBTx9qb-L1w)

⭐️ [How to Deploy Cross-Platform Rust Binaries with GitHub Actions](https://dzfrias.dev/blog/deploy-rust-cross-platform-github-actions)

⭐️ Go 语言 Context 用法

[3W 解析 Golang Context：用法、源码](https://mp.weixin.qq.com/s/Faa6wa4s-1ggE56_trO6VA)

[Go组件：context学习笔记！](https://mp.weixin.qq.com/s/OCpVRwtiphFRZgu9zdae5g)

[Go 语言 context 都能做什么](https://mp.weixin.qq.com/s/7IliODEUt3JpEuzL8K_sOg)

[Go Context 怎么用，原理是啥，看完这篇就清晰了](https://mp.weixin.qq.com/s/mFmZD98KPsNk9JHm3wq2og)

⭐️ [分享6个Linux必备的安全设置，建议收藏！](https://mp.weixin.qq.com/s/H9_BYLQIewIyycJkMxo6LA)

📒 [企业级 React API 调用架构设计](https://mp.weixin.qq.com/s/X7vffwDcz1Otevr0OP7gOQ)

⭐️ [Go 语言使用 XORM 操作 MySQL 的陷阱](https://mp.weixin.qq.com/s/zbvUzoa1K7AIQK-p3v-WQQ)

⭐️ [C++/Go 调用约定的原理](https://mp.weixin.qq.com/s/xYnzVz2FDX-rNCgfKwOgAQ)

⭐️ [Go 语言 iota 的神奇力量](https://mp.weixin.qq.com/s/xjkY6hJnUq5btDyJuSOZrg)

📒 相关文章汇总

聊聊 Redux 的下一个计划 — 这位 React YouTuber 之王暂时离开他通常的屏幕演示形式，与 Redux 维护者 Mark Erikson 坐下来讨论 Redux 和 Redux Toolkit 的当前状态和未来状态，两者都离重大新版本不远了。

> https://www.youtube.com/watch?v=n5FK8_EXcbs

在 Next.js 13 中为服务器组件配置使用基于 cookie 的身份验证 — 这篇教程非常有意义，尤其是对 Supabase Auth 用户来说。

> https://www.youtube.com/watch?v=ywvXGW6P4Gs

你知道 React 可以 在渲染过程中更新状态 吗？Markd Erikson 提供了关于此的 更多信息。

> https://swizec.com/blog/react-can-update-state-during-render/

HouseForm：简单易用的基于字段的 React 表单验证 — 基于 Zod 构建，适用于任何支持 React 的环境。相比于类似的解决方案，HouseForm 验证速度更快。

> https://houseform.dev/

shadcn/ui：可复制粘贴的 Tailwind CSS 组件 — 如果你经常使用 Tailwind CSS，这些组件将非常适合你。正如创建者所说：“这不是一个组件库。它是一系列可以复制粘贴到你的应用程序中的可重用组件。”

> https://ui.shadcn.com/

TypeScript v5.2 现已进入 beta 阶段

> https://devblogs.microsoft.com/typescript/announcing-typescript-5-2-beta/

CommonJS 正在损伤 JavaScript —— 这是关于 Node 默认模块系统的有趣观点，文章涵盖了它的历史、缺点以及同时管理 CommonJS 和 ES 模块的复杂性。毫不奇怪，Andy 希望我们尽快加入 ESM 阵营，而将 CommonJS 留在历史中。

> https://deno.com/blog/commonjs-is-hurting-javascript

npm 生态系统的一个严重 Bug —— 作者曾在 npm CLI 团队工作，认为这是一个大问题。我们不在此剧透太多，但简言之，包映射表和实际的包内容可能不匹配，这可以被人利用，甚至可能会混淆审计工具。

> https://blog.vlt.sh/blog/the-massive-hole-in-the-npm-ecosystem

Next.js 应用路由更新— Next.js v13+ 中的 应用路由 为组织 Next.js 应用提供了一种新的方法，并推荐在未来的项目中使用（在上个月的 Next.js v13.4 中已经稳定）。这篇文章提供了关于该功能如何发展以及团队如何继续与 React 整体进行集成。

> https://nextjs.org/blog/june-2023-update

从零开始实现 React Server Components: 视频版 — 最近，Dan Abramov 发布了一个关于 从零开始重新实现 React Server Components（RSC）教程。他在 Twitter 上询问是否有人可以用视频形式记录这篇文章，Jesse 则为其增添了 “戏剧性朗读” 的效果。

> https://www.youtube.com/watch?v=8aD58kGBJYc

关于 Next.js 的 Image 组件的一些你可能不知道的事情 — Next.js 的 Image 组件具有许多有用的功能，你可能不知道。

> https://dev.to/alex_barashkov/things-you-might-not-know-about-next-image-5go8

⭐️ [Go语言爱好者周刊：第 193 期 —— Go1.21 RC 发布](https://mp.weixin.qq.com/s/W5g7HdR1cQ-c1m05Z8umeg)
