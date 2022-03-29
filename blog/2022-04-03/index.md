---
slug: 4月3日内容汇总
title: 4月3日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 Golang 指针几点注意

- Golang 中赋值操作、函数参数、函数返回值都是 copy
- 基本类型、slice、map 直接传递就行，对于 struct、array 需要特别注意，建议一律传递指针类型

📒 Dum：Rust 编写的 npm 脚本运行器

延续了使用不是 JavaScript 来构建 JavaScript 工具的趋势。这个奇怪的名字 “Dum”，旨在取代 `npm run` 和 `npx` 来减少任务启动时间的毫秒数。

> https://github.com/egoist/dum

📒 Node 之道：关于设计、架构与最佳实践

> https://alexkondov.com/tao-of-node/

📒 Hooks 的 ”危害性“

作者声称“每周都能找到十几个与 hooks 相关的问题”，并利用这段经历给出了一些例子和解决方法，以避免“API 的不足之处”。

> https://labs.factorialhr.com/posts/hooks-considered-harmful

📒 Dockerfile 配置

```dockerfile
# 两段式构建
# 第一段构建源码镜像
ARG PROJECT_DIR=/project
ARG BB_ENV=prod
FROM harbor.hiktest.com/public/vue:2.5-node10 as src
ARG PROJECT_DIR
ARG BB_ENV


COPY . ${PROJECT_DIR}/
WORKDIR ${PROJECT_DIR}/

RUN npm install && npm run build:${BB_ENV}


# 第二段从源码镜像中拷贝出编译的dist，做成目标镜像
FROM harbor.hiktest.com/hikvision/nginx:1.12
ARG PROJECT_DIR

ENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=src ${PROJECT_DIR}/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
```

📒 [万字长文助你上手软件领域驱动设计 DDD](https://mp.weixin.qq.com/s/BIYp9DNd_9sw5O2daiHmlA)

📒 [TypeScript 终极初学者指南](https://mp.weixin.qq.com/s/6DAyXFHIMW95FS0f3GyHpA)
