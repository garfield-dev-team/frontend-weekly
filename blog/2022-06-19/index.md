---
slug: 6月19日内容汇总
title: 6月19日内容汇总
authors: [garfield]
tags: []
---

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
