---
slug: 7月9日内容汇总
title: 7月9日内容汇总
authors: [garfield]
tags: []
---

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

⭐️ [Go语言爱好者周刊：第 193 期 —— Go1.21 RC 发布](https://mp.weixin.qq.com/s/W5g7HdR1cQ-c1m05Z8umeg)
