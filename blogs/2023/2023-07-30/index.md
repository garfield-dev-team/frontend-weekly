---
slug: 7月30日内容汇总
title: 7月30日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关

[基于 Docker 的深度学习环境：Windows 篇](https://mp.weixin.qq.com/s/U15ur0zaUaXybc_zacg78g)

[使用 Docker 快速上手 Stability AI 的 SDXL 1.0 正式版](https://mp.weixin.qq.com/s/0KeNTsbsciOQCflu-yVuvg)

Colab 在线运行 llama-2：

https://github.com/camenduru/text-generation-webui-colab

[OpenAI Code Interpreter 的开源实现：GPT Code UI](https://mp.weixin.qq.com/s/6EfShSyYfPzSAnNg4duQFw)

[构建能够使用 CPU 运行的 MetaAI LLaMA2 中文大模型](https://mp.weixin.qq.com/s/1ceo6oxBGjhvGwdU4qJRdQ)

## ⭐️ Golang 相关

[5000字，10张图，完全掌握 MySQL 事务隔离级别](https://mp.weixin.qq.com/s/Wln851vw5eqYVRGz23zcjQ)

[服务架构：分层架构](https://mp.weixin.qq.com/s/CUCHUQa6lYuPhvEALdIQQg)

本地开发如何用 Dev Container，前端工程配置参考：

```yml
version: '3'
services:
  node-app:
    image: node:18-alpine
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      # 表示将当前工作目录挂载到容器内的 `/app` 目录
      - .:/app
      # 当容器被重新启动时，`node_modules` 目录不会被重新构建，从而加快了容器的启动速度。
      - node_modules:/app/node_modules
    working_dir: /app
    command: pnpm run dev
# 将 Docker 容器内的 `/node_modules` 目录挂载到卷上
# 在容器重新启动时，该目录中的依赖项不会被重新构建，从而加快容器的启动速度
volumes:
  node_modules:
```

然后运行下面命令启动容器：

```bash
$ docker-compose up
```

Golang 工程配置参考：

```yml
version: '3'
services:
  go-app:
    image: golang:latest
    ports:
      - "8080:8080"
    environment:
      - GOPATH=/go
      - PATH=$GOPATH/bin:/usr/local/go/bin:$PATH
    volumes:
      - .:/go/src/app
    working_dir: /go/src/app
    command: go run main.go
```

[go channel应用系列二：协程间信息同步](https://mp.weixin.qq.com/s/ibBh9hCIXlINBh4UvH-RvA)

[超越 MyBatis-Plus？来领略一下 MyBatis-Flex 的优雅魅力！](https://mp.weixin.qq.com/s/cxRcRFgKMWs9MXmo0Lbw-A)

[WebStorm 2023.2 正式发布](https://mp.weixin.qq.com/s/BP7IdAEkoCuvUf8dmVf-uw)

[Go可用性(七) 总结: 一张图串联可用性知识点](https://mp.weixin.qq.com/s/OXopl6FpwtE6P-k0GEP9qA)

[Go 工程化(十) 如何在整洁架构中使用事务](https://mp.weixin.qq.com/s/MSwUlVGPDRBjdR-xh5cNfA)

[Go 工程化(十一) 如何优雅的写出 repo 层代码](https://mp.weixin.qq.com/s/pb0P_y34N3uOhMu0SDqC2A)

一个小技巧，如何用 openssl 生成密码：

```bash
$ openssl rand -base64 [password length]
```

[全面解读！Golang中泛型的使用](https://mp.weixin.qq.com/s/QBZ1dp0XIqMo24vVFYf1fA)

[Go 1.19 中的原子指针](https://mp.weixin.qq.com/s/EGMKbpPxrtO1HToYVOYwzw)

[服务治理到底治什么，10张图告诉你答案](https://mp.weixin.qq.com/s/iwUYtS_oRcNf3QMiowUYuw)

[Go 语言的安全守护者：你用了吗](https://mp.weixin.qq.com/s/MLO7vTLOM-h9v-CgYpmqwg)

[关于Dockerfile的最佳实践技巧](https://mp.weixin.qq.com/s/VxkHe3GI8Z-NqjDDdGuzWg)

[\[Go开源工具\] go-optioner：轻松生成函数选项模式代码](https://mp.weixin.qq.com/s/_enXW8Pk4okosAgDo_aYSw)

[支付宝：多线程事务怎么回滚？说用 @Transactional 可以回去等通知了！](https://mp.weixin.qq.com/s/3aGmM5gkEP-VqX-ejYJLBg)

[白皮书：事件 OnCall 中心建设方法](https://mp.weixin.qq.com/s/imIgUQDyLhPK7oHmP0L_Ig)

[微服务中的熔断算法](https://mp.weixin.qq.com/s/TMgMzLrlpI_nx8OzAw8O9w)

[Nacos 配置管理最佳实践](https://mp.weixin.qq.com/s/SRWjgZOwuANJ0KQbJzuhlw)

[「必知必会」 Nacos 的面试题和详解](https://mp.weixin.qq.com/s/C_KpYoul8ko5yrVLMe_uQg)

[谈谈Kubernetes的存储设计理念](https://mp.weixin.qq.com/s/N4XrXqpTYqiy0YAW6zSsbQ)

[Go语言爱好者周刊：第 196 期](https://mp.weixin.qq.com/s/X_Z3YIL_iqwkg2ZKYKkT1g)

## 📒 前端相关

[用Rust生成Ant-Design Table Columns | 京东云技术团队](https://juejin.cn/post/7260144602472382519)

[前端简洁架构](https://mp.weixin.qq.com/s/M87FLnkeF0aYeYlz0jDYxA)

[How React 18 Improves Application Performance](https://vercel.com/blog/how-react-18-improves-application-performance)
