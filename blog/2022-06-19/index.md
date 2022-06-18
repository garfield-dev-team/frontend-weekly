---
slug: 6月19日内容汇总
title: 6月19日内容汇总
authors: [garfield]
tags: []
---

📒 如何做好一个技术分享

最近有同事做了技术分享，发现了一些问题，在这里总结一下。

做技术分享也跟写文章一样，是有条理的，例如：

- 先讲项目背景，现有方案存在哪些痛点（重点，技术不能为了用而用）
- 然后再讲讲怎么做技术选型的，有哪些竞品，各自优缺点，可以简单介绍实现原理（有自己的思考，而不是上级让你做 xx 预研就直接做了）
- 再讲团队中是如何落地的，实践过程中遇到哪些问题，是如何解决的，存量工程迁移方案（重点，节省其他同事的时间，避免重复踩坑）
- 最后可以总结一下，该方案落地相比现有方案提升的点，此外还存在哪些问题，在选型的时候需要重点考虑

需要避免的几个点：

- 避免开门见山，可以做一些必要的铺垫，以防有同事对相关技术不了解，为了理解你的内容，还得自己查资料
- 避免长篇大论都在讲底层架构、底层原理，没多少人会感兴趣，还不如多讲一下自己在实践过程中遇到哪些问题、怎么解决，有哪些心得体会，这样对别人帮助更大
- 避免内容空洞，例如讲了一大堆新特性，但都没有自己实践过，亦或是说各种性能好、各种优化，但没有实际的数据支撑，没有可以量化的指标、没有与竞品对比等等
- 搞清楚技术分享的目的，不是给其他同事上课，而是重在分享经验。可以是自己实践过程中踩了哪些坑，或者自己搭建了一套项目模板，可以直接开箱即用

📒 执行 `yarn create` 命令背后做了哪些

执行 `yarn create <starter-kit-package>`，会先全局安装 `create-<starter-kit-package>`，如果已安装则会更新到最新版本，然后会执行 `bin` 字段中定义的脚本。

例如，`yarn create react-app my-app` 相当于：

```bash
$ yarn global add create-react-app
$ create-react-app my-app
```

📒 [HTTP/3发布了，我们来谈谈HTTP/3](https://mp.weixin.qq.com/s/nRHlwYsr0MaadmaFWEIblQ)

📒 [GitHub中文排行榜](https://github.com/GrowingGit/GitHub-Chinese-Top-Charts)

📒 [80%的Linux都不懂的内存问题](https://mp.weixin.qq.com/s/I1fHrRqZnZ7CdudFAmiNog)

📒 [十分钟带你入门 Web Components](https://mp.weixin.qq.com/s/QTP98PfkMg-C5OWXuQH4rg)

📒 [前端开发技术与业务的思考](https://mp.weixin.qq.com/s/l4z2fcNaCdoOHKKm0xqQYw)

📒 [【第2642期】基于 Serverless 的业务轻研发模式探索](https://mp.weixin.qq.com/s/egs426Y8x00BLhUdrcAOnw)

📒 [React新文档：不要滥用Ref哦](https://mp.weixin.qq.com/s/bI3rohCePnay2JVsQvdtfg)

📒 `async` 函数注意事项

在 `async` 函数中，当有一个 `await` 后面的 Promise 状态变为 rejected，整个 `async` 函数执行就中断了。

这个在串行请求中非常有用。在很多场景下，我们需要将上一个请求返回的结果，作为参数进行下一次请求。假如上一个请求报错，那么结果自然获取不到，如果此时还进行下一个请求，这个逻辑显然有问题。因此，借助 `async` 函数的特性，在上一个请求报错的情况下，整个函数执行就断掉了，后续不会再发请求，无需手动进行异常处理。

📒 [我与Go的故事、我为什么推荐你学Go以及我的学习路线](https://mp.weixin.qq.com/s/JkHur9_vKEVIg1hmp4yo0Q)

📒 [CDN 为什么这么设计](https://juejin.cn/post/7108719346947457054)

📒 [Vue3.0 响应性原理](https://mp.weixin.qq.com/s/7JnXUPmYRCYlWZoxop01ZA)

📒 [一文读懂 TypeScript 泛型及应用](https://mp.weixin.qq.com/s/QmPwaX3xuMe6PA3o8VwI0A)

📒 [记录一次切换包管理器引发的血案](https://mp.weixin.qq.com/s/qeWNgqhAxb0_wA4Sqx3HKw)

📒 [数据库表结构设计一点心得和经验](https://juejin.cn/post/7108525565157589005)

📒 2021-2022，我在大厂的前端最佳实践

monorepo 工具除了最基本的代码共享能力外，还应当至少具备三种能力，即：

- 依赖管理能力。随着依赖数量的增加，依旧能够保持依赖结构的正确性、稳定性以及安装效率
- 任务编排能力。能够以最大的效率以及正确的顺序执行 Monorepo 内项目的任务（可以狭义理解为 npm scripts，如 build、test 以及 lint 等），且复杂度不会随着 Monorepo 内项目增多而增加
- 版本发布能力。能够基于改动的项目，结合项目依赖关系，正确地进行版本号变更、CHANGELOG 生成以及项目发布

[2021-2022，我在大厂的前端最佳实践](https://mp.weixin.qq.com/s/AQ8tTMIbxkG98xiMPuttPw)

📒 [Ramda 哪些让人困惑的函数签名规则](https://mp.weixin.qq.com/s/I8WurtOeS_u2d5RAO4dukg)

📒 [Github上8个很棒的React项目](https://mp.weixin.qq.com/s/Iu7PotYFwjXyFPka-So6Qw)

📒 [全网最强 JVM 来袭](https://mp.weixin.qq.com/s/B-HkMjn6dKKw4JFjANjUxQ)

📒 [useEffect 怎么支持 async...await](https://mp.weixin.qq.com/s/iGtIW7Sz9IiX-c7oBWdFEg)
