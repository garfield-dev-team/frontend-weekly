---
slug: 7月3日内容汇总
title: 7月3日内容汇总
authors: [garfield]
tags: []
---

📒 前端四种序列化

**1. JSON 序列化**

使用 `JSON.stringify()` 进行序列化，对应的 Content-Type 是 `application/json`。

**2. Query String 序列化**

使用 `new URLSearchParams()` 进行序列化，对应的 Content-Type 是 `application/x-www-form-urlencoded`。

> 注意 URL query string 与 body 发送的 query string 略有不同，特别是对空格的处理

**3. FormData 序列化**

使用 `new FormData()` 创建，对应的 Content-Type 是 `multipart/form-data`。

**4. XML 序列化**

使用 `new XMLSerializer()` 进行序列化，一般用于 DOM 对象。

📒 React 18 新特性

- Selective Hydration
- Offscreen

📒 [Vue 2.7 正式发布，代号为 Naruto](https://juejin.cn/post/7115361618774622216)

📒 [线上服务器老是卡，该如何优化](https://mp.weixin.qq.com/s/AyEb4fDsTvvfOG1Lgb1bzw)

📒 [【第2657期】前端JS攻防对抗](https://mp.weixin.qq.com/s/PGghgQfJTGIyoz8Bz8MD9A)

📒 [Redis 唯快不破的秘密](https://mp.weixin.qq.com/s/XCgZ5tOxyMKpOqvNvRDFQA)

📒 新一代 npm 包构建工具 father 4 RC 发布

father 4 支持 Bundless 和 Bundle 两种构建模式。

- Bundless 指把所有源码文件单独编译、平行输出做发布。在 father 4 中，输出 ESModule 及 CommonJS 产物时会使用 Bundless 构建模式
- Bundle 指把源码按 entry 打包成 1 个或多个文件做发布，也就是 Webpack 的打包模式。在 father 4 中，输出 UMD 及依赖预打包产物时会使用 Bundle 构建模式

依赖预打包

- 一是 NPM 包发布后安装体积更小、速度更快
- 二是不担心三方依赖更新引起 Bug
- 三是NPM 包发布后安装 0 warning

不过，由于依赖中可能存在 `dynamic require/import` 等复杂的情况，现阶段不一定每个依赖都能顺利打包，father 4 会在 RC 阶段持续优化，将这项功能变得更加好用。

[新一代 npm 包构建工具 father 4 RC 发布](https://mp.weixin.qq.com/s/zaFwGY-CztDUYTbIuaef1A)

📒 [【第2656期】使用 React Testing Library 的 15 个常见错误](https://mp.weixin.qq.com/s/gssYOb7xgSx2HsAeRGTgxA)

📒 [【第2655期】携程基于 GraphQL 的前端 BFF 服务开发实践](https://mp.weixin.qq.com/s/q05JeUZ0mfjhhCshhhPNtw)

📒 [聊聊 Vue 的双端 diff 算法](https://juejin.cn/post/7114177684434845727)

📒 [面试官：Vue的KeepAlive怎么实现的？我：这有啥好问的](https://mp.weixin.qq.com/s/aPMJK-YYgsgUlm2x4uG3NQ)

📒 [如何优雅的写 Controller 层代码](https://mp.weixin.qq.com/s/Y_vtD5AlIry4anyy19Fhgw)

📒 [这些 hook 更优雅的管理你的状态](https://mp.weixin.qq.com/s/yluex5ufeJQ3eVyW9hD1-g)

📒 [干货 | Trip.com APP QUIC应用和优化实践](https://mp.weixin.qq.com/s/-JtbeS01HEFhNCKYGExodg)

📒 [基于 qiankun 的微前端实践](https://juejin.cn/post/7113871265848360997)

📒 [\[科普文\] 浅谈 Function Programing 编程范式](https://mp.weixin.qq.com/s/A1LM8bWlcI8_fgUuCISU8w)

📒 Taze - 一个让你的依赖保鲜的现代 cli 工具，支持定制、支持 monorepo

> https://github.com/antfu/taze

📒 如何利用 Why、What、How 框架更好地写作

做项目时，要写三种类型的文档，单页文档、设计文档和 Review 文档，见图1，分别是写于启动前、实施前和完成后。单页文档写给老板看，介绍问题、预期结果、建议的解决方案和其他高层次的点；设计文档程序员可以理解为 RFC，写给同行或下属看，包含方法论、系统设计、实验结果等；Review 文档用于 Review 成功和失败的点。

文档怎么写？用「Why、What、How」的框架。听起来很简单，小学一年级老师也这么教，但作者的大部分文档都是用这个框架。Why 是让听众理解问题和背景，注意站在听众的角度，比如不要对着老板聊技术的 Why，也不要对着技术同学聊规划的 Why；What 讲解决方案是什么样子，以及可以做什么；How 讲如何实现 Why 和 What。

其中「Why」部分可以用 5 Why（https://en.wikipedia.org/wiki/Five_whys）的方法，连续问 5 个 Why，以便找出问题的根本原因。

此外还要注意「Who」，即你的听众是谁。为老板和为工程师写的文档差异会很大，因为不同人关注的点不同，前者更关心客户痛点、商业成果、投资回报率，后者更关心技术要求、设计选择、API 规范。

不同文档类型应用上述框架的例子见图 2。

文章内还有个金句，「Writing docs is expensive, but cheap.」文档很贵，需要花时间写、Review 和迭代，这些时间本可以花在写代码上。文档又很便宜，通过文档可以避免建立不靠谱的兔子洞项目，不靠谱的项目就算做出来也没人用，这个浪费是巨大的。所以，不要做「问题模糊、解决方案有争议」的项目。

> https://eugeneyan.com/writing/writing-docs-why-what-how/

⭐️ [看懂 Lighthouse 中 Performance 核心指标](https://juejin.cn/post/7113803250037424158)

📒 [前端抢饭碗系列之Docker容器编排](https://juejin.cn/post/7113712658850775048)

📒 [为什么 2022 年 ESM 又被发布了一次](https://mp.weixin.qq.com/s/_RmAH6p2lyzkhqLWw8cIKw)

📒 [漫谈 CSS 方法论](https://juejin.cn/post/7113732818663899166)

📒 [HTTP 新增的 103 状态码，这次终于派上用场了！](https://juejin.cn/post/7113864980344078343)

📒 [买啥高并发课程，白嫖不香么？（包括 PDF）](https://mp.weixin.qq.com/s/v3lQpHBAIxhDmJ80w4CBcA)

📒 [小程序长列表优化实践](https://juejin.cn/post/7113711538359238692)

📒 [前端食堂技术周刊第 42 期：Vue 2.7 Beta、TS 4.8 Beta、React 开源奖、ECMAScript 2022](https://juejin.cn/post/7113586663741194247)

📒 [封装一个管理 url 状态的 hook](https://mp.weixin.qq.com/s/4r1lFV1j7I0K0l5Ww3jj0g)
