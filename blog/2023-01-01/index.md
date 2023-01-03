---
slug: 1月1日内容汇总
title: 1月1日内容汇总
authors: [garfield]
tags: []
---

📒 Golang 相关文章

[Go 1.18 新增三大功能之一“模糊测试”使用方式](https://mp.weixin.qq.com/s/S2InTxuwg0G-wPSy1Q34PQ)

[Go 1.18 新增三大功能之一“泛型”怎么使用](https://mp.weixin.qq.com/s/0JKH-Bo8n9I9zT683ZA-iw)

[Go 语言开源项目使用的函数选项模式](https://mp.weixin.qq.com/s/2jzg2PIK_esjTxSFMkp02A)

[Go 语言 context 最佳实践](https://mp.weixin.qq.com/s/DxEeLUS8hotYh8Js5FyR5w)

[Go 语言 errgroup 库的使用方式和实现原理](https://mp.weixin.qq.com/s/R8f_-cl98th7ZiSVxaeUAQ)

[Go 语言一次性定时器使用方式和实现原理](https://mp.weixin.qq.com/s/NXbYTX96hFfwYuh6gACAHg)

[Go 语言为什么建议定义零值可用的结构体](https://mp.weixin.qq.com/s/8Eh7e9-pX6OqFNrDqugxaA)

总结一下，短变量声明在同一作用域内重复使用，只是重新赋值，不会重新创建变量（即指针还是同一个），但是如果在不同作用域（例如 `if` 语句块），就会创建一个新的变量（内存地址与之前不同）。

[Go 语言怎么解决编译器错误“err is shadowed during return”](https://mp.weixin.qq.com/s/kGC1X5DQ7eQAdn70ZhElNw)

[Go 语言怎么处理三方接口返回数据](https://mp.weixin.qq.com/s/QyWuOsPUFq7XqvIbnBJP_A)

[Go 语言使用 goroutine 运行闭包的“坑”](https://mp.weixin.qq.com/s/h__5zKCKUkxUTmBjbKsA2w)

[Go 语言内存逃逸案例](https://mp.weixin.qq.com/s/iACaQ8vsxEvUVsDJ5QO6UA)

[Go 语言逃逸分析](https://mp.weixin.qq.com/s/34cmyuPOjlhAQm6zYhBIsg)

[Go 语言怎么使用变长参数函数](https://mp.weixin.qq.com/s/fhqtRTGgVu6aSC581luvCg)

[Go 语言错误处理为什么更推荐使用 pkg/errors 三方库](https://mp.weixin.qq.com/s/nL5uIGCXYON5doGGeHchAQ)

[Go 项目使用 Makefile](https://mp.weixin.qq.com/s/teOYvNOQ_e5z7iyiiAkNPw)

[Go 应用程序设计标准](https://mp.weixin.qq.com/s/q6mFgLYt3hpBhXnyEcaXzQ)

[Go 语言整洁架构实践](https://mp.weixin.qq.com/s/7uwuHeKjQNACl17-PYrpUw)

[Go 语言怎么使用 Docker 部署项目](https://mp.weixin.qq.com/s/nbyhaomyLII-U9lEB5Cv8w)

[Golang 语言怎么打印结构体指针类型字段的值](https://mp.weixin.qq.com/s/5B-sPyk4qgFsplsJ9mMD_Q)

[Golang 语言怎么避免空指针引发的 panic](https://mp.weixin.qq.com/s/9s6YXJsZcXyfgWDYG-WZOQ)

[Golang 语言该用命名返回值吗](https://mp.weixin.qq.com/s/NbTzlvubUVUBakwKKNbcVw)

[深入理解 go reflect - 反射基本原理](https://juejin.cn/post/7183132625580605498)

[go interface 设计与实现](https://juejin.cn/post/7173965896656879630)

[go Context 设计与实现](https://juejin.cn/post/7174576400391733284)

[深入理解 go unsafe](https://juejin.cn/post/7174963221294481445)

📒 [天呐！我用 go 从零开始写了一个 k8s 应用管理工具（附完整代码和开发过程）](https://mp.weixin.qq.com/s/MFd1R5VeEW0eLk-A4BqSQQ)

⭐️ [没想到在 Docker 容器中设置时区这么简单](https://mp.weixin.qq.com/s/10Ll8ipVGWg4HU4hjwILsQ)

📒 [先聊聊「内存分配」，再聊聊Go的「逃逸分析」](https://mp.weixin.qq.com/s/xmml8gmz88G5zjgvxlKb_A)

📒 [字节一面：服务端挂了，客户端的 TCP 连接还在吗](https://mp.weixin.qq.com/s/6vk-oYh7kuVK2zcDU2bICw)

📒 [详解全网最快Go泛型跳表【内附源码】](https://mp.weixin.qq.com/s/9Zqe2pDWOT2qIt39xqOD7w)

📒 [2022年Go语言盘点：泛型落地，无趣很好，稳定为王](https://mp.weixin.qq.com/s/MRBEJHZBMS9s0w7UhseQWA)

📒 [【第2824期】图解浏览器的多进程渲染机制](https://mp.weixin.qq.com/s/tz9wyjKHDC6GNB8fFfgtUw)

📒 在 Docker build 环境持久化 `node_modules` 目录

想在 docker build 环境中持久化 `node_modules` 需要使用到 `BuildKit` 的 `mount` 功能，该功能有几个前置条件：

- docker 版本必须高于 18.09
- `BuildKit` 需要手工启用，可在 docker build 命令前添加环境变量 `DOCKER_BUILDKIT=1` 启用
- 如果前两个条件不满足，则需要具备 Jenkins 和构建机的读写权限，以调整构建环境参数
- 修改 Dockerfile，使用 `RUN --mount=type=cache` 运行 `npm install` 和 `npm run build` 指令（`--mount=type=cache`）

> 开启 BuildKit 还有其他特性，比如输出日志更友好，基本每一步都会输出耗时，就这一条，值了！

实际操作分为 2 步：

修改 Jenkins 配置，在 docker build 命令前加上环境变量。修改后镜像构建命令长这样：

```bash
$  DOCKER_BUILDKIT=1 docker build .
```

修改 Dockerfile，将 `RUN npm install` 和 `RUN npm run build` 指令前面加上 `RUN --mount=type=cache npm xxx`：

```dockerfile
FROM node:alpine as builder

WORKDIR /app

COPY package.json /app/

RUN --mount=type=cache,target=/app/node_modules,id=my_app_npm_module,sharing=locked \
    --mount=type=cache,target=/root/.npm,id=npm_cache \
    npm i --registry=https://registry.npmmirror.com/

COPY src /app/src

RUN --mount=type=cache,target=/app/node_modules,id=my_app_npm_module,sharing=locked \
    npm run build
```

参考：

[加3行代码减少80%构建时间](https://juejin.cn/post/7135756687134162980)

[Docker 从入门到实践 - 使用 BuildKit 构建镜像](https://vuepress.mirror.docker-practice.com/buildx/buildkit/#)

https://docs.docker.com/build/buildkit/

📒 [Monorepo 下 Git 工作流的最佳实践](https://mp.weixin.qq.com/s/tNs5CVdmj4DepYmELWjdzA)

📒 [Prometheus 数据存储那些事儿](https://mp.weixin.qq.com/s/qVsgXaehJ-LhWQLe-dxSRw)

📒 [Go1.20 一次打破 Go1 兼容性承诺的真实案例](https://mp.weixin.qq.com/s/bxIIGV9n1f-SbA2Qu7naDQ)

📒 [基于 GraphQL 的云音乐 BFF 建设实践](https://juejin.cn/post/7182019663004434488)

⭐️ [【第2823期】打包JavaScript库的现代化指南](https://mp.weixin.qq.com/s/m-i_Et6YqkZ0aj537vN2_A)

⭐️ [通过分析gin、beego源码，读懂web框架对http请求处理流程的本质](https://mp.weixin.qq.com/s/2FVYnKHXFoj18W62pob_jw)

📒 [极端情况下Go的Map也会发生内存泄漏](https://mp.weixin.qq.com/s/x2sFAwR0MGucIHGH85gU4A)

📒 [这两个特性将在 Go1.20 中被弃用，受影响最大的居然是国内的面试官](https://mp.weixin.qq.com/s/r_n7cZi2sDO0EiBF12tkYw)

📒 [Go：讲一个故事说明使用汇编语言的必要性](https://mp.weixin.qq.com/s/2_xALNnPcHgZD7smWxzPcA)

📒 [Go学设计模式--怕把核心代码改乱，记得用代理模式](https://mp.weixin.qq.com/s/FTXkgxkUzsHMIspCK60G4w)

📒 [Go语言中常见100问题-#25 Unexpected side effects using slice append](https://mp.weixin.qq.com/s/lAIB0l666R6Zh9NAdV809g)
