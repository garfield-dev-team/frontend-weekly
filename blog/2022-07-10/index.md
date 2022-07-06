---
slug: 7月10日内容汇总
title: 7月10日内容汇总
authors: [garfield]
tags: []
---

📒 [【第2662期】低代码平台架构深度剖析](https://mp.weixin.qq.com/s/B5Y_6fI94UItDkOj4gj9WA)

📒 [那些关于DOM的常见Hook封装（二）](https://mp.weixin.qq.com/s/fLHJ9AzcVbxXAZjQvIbvqQ)

📒 [antd mobile 作者教你写 React 受控组件和非受控组件](https://mp.weixin.qq.com/s/F4BotNoasCUnb-yWiB12sg)

📒 [我对 React 实现原理的理解](https://juejin.cn/post/7117051812540055588)

📒 [WebAssembly生态及关键技术综述](https://mp.weixin.qq.com/s/hHNnVlBCvnn19ciYRYNFAw)

📒 [HTTP3 RFC标准正式发布，QUIC会成为传输技术的新一代颠覆者吗](https://mp.weixin.qq.com/s/Eovk2GT_noEOsH5BUwdlkA)

📒 [如何将传统 Web 框架部署到 Serverless](https://mp.weixin.qq.com/s/XvX6b3i9D197s3voXRcemQ)

📒 [新来个技术总监，把 RabbitMQ 讲的那叫一个透彻，佩服！](https://mp.weixin.qq.com/s/pxHGM-hOJISEoBHGZch5Ag)

📒 [关于前端主题切换的思考和现代前端样式的解决方案落地](https://mp.weixin.qq.com/s/0xTZcE3MPezRl3LILR8a_w)

⭐️ Data Flow in Remix

React 第一次和大家见面时，最引人注目的特点之一是他的「单向数据流」。这在官方文档 Thinking in React 里仍有介绍。用一句话概况即：UI 是状态的函数，或者叫 `ui=fn(state)`。

而后有不少遵从这种思想的数据流方案，比如 Redux、MobX 等，以 View -> Action -> State 这种循环的单向数据流方式进行。他们的缺点是这个数据流只在客户端运转，而一个应用通常还需要持久化数据和同步数据，这意味着还要有另一条数据流来和服务端做交互。

那有没有贯穿服务端和客户端的单向数据流？Remix！哈哈。Remix 将这一理念延伸到持久化数据的 API 层，通过 Loader 和 Action 把数据流串了起来，形成 Loader > Component > Action 的单向数据流。所以在 Remix 中，开发者也无需使用 Redux 等其他数据流方案。

[Data Flow in Remix](https://remix.run/blog/remix-data-flow)

[MDH 前端周刊第 60 期：Fresh 1、SPA、框架流行度、1X 工程师、Father 4 RC](https://mp.weixin.qq.com/s/fGaE_pGiC2BKKVKO0Fdj_g)

📒 [巨石瓦解！我把Vue3巨石项目拆成了十几个微应用](https://mp.weixin.qq.com/s/sqxRB63edItCT3vEzyJojA)
