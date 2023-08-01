---
slug: 8月6日内容汇总
title: 8月6日内容汇总
authors: [garfield]
tags: []
---

## 🌟 AI 相关

[Stable Diffusion 硬核生存指南：WebUI 中的 VAE](https://mp.weixin.qq.com/s/7HJfEvxVhatqchs5Tr09UA)

## ⭐️ Golang 相关

如何用 Docker 容器运行单节点 Kafka 环境

```yml
version: '3'services:
  zookeeper:
    image: confluentinc/cp-zookeeper
    hostname: zookeeper
    container_name: zookeeper
    ports:
      - "2181:2181"
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
  kafka:
    image: confluentinc/cp-kafka
    depends_on:
      - zookeeper
    hostname: kafka
    container_name: kafka
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

运行以下命令启动 Kafka：

```bash
$ docker-compose up -d
```

使用以下命令进入 Kafka 容器并使用 Kafka 的命令行工具进行操作：

```bash
$ docker exec -it kafka /bin/bash
```

然后可以使用 Kafka 的命令行工具进行操作，例如：

```bash
$ kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
```

以上会创建一个名为 test 的主题。

`kafka-topics` 是 Kafka 提供的一个命令行工具，用于管理 Kafka 集群中的主题。

推荐 GoLand 提供的 Kafka 插件：

https://www.jetbrains.com/help/idea/2023.2/big-data-tools-kafka.html#connect_to_kafka_custom

[一文总结 MetaQ/RocketMQ 原理](https://mp.weixin.qq.com/s/EEkjBrVYQFwBiGQObrM_TQ)

[Go语言开发者的Apache Arrow使用指南：读写Parquet文件](https://mp.weixin.qq.com/s/PcNpQJcKuWpZgYrKmVvRLQ)

[使用Redis，你必须知道的21个注意要点](https://mp.weixin.qq.com/s/-DmnSIpO67ZlBtrsiZC6Ew)

[缓存的策略和模式](https://mp.weixin.qq.com/s/E4mQDfbkAO1lmNUZN_5CKg)

GoLand 2023.2 发布：有 AI 助手

https://www.jetbrains.com/go/whatsnew/#:~:text=GoLand%202023.2%20offers%20improved%20integration,integration%2C%20and%20the%20Kafka%20plugin.

[GoLand 2023.2 发布：有 AI 助手](https://mp.weixin.qq.com/s/cidtQEAfuFWuYveKFbFvKQ)

[Go语言中常见100问题-#41 substrings and memory leaks](https://mp.weixin.qq.com/s/Wdh2O4cnez95x0RBpMiDvQ)

[OpenKruise 中 OpenKruiseGame介绍](https://mp.weixin.qq.com/s/gQyny2PUwEacEWzdDznmew)

## 📒 前端相关

[JavaScript 中隐秘而强大的 compose 和 pipe](https://mp.weixin.qq.com/s/IO7qtDifVtDyKfXiUcxriw)

[一文吃透 React DSL 应用并从零到一实现](https://juejin.cn/post/7261604498924765221)

[从 antDesign 来窥探移动端“滚动穿透”行为](https://juejin.cn/post/7261493331188449341)
