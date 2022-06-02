---
slug: 6月5日内容汇总
title: 6月5日内容汇总
authors: [garfield]
tags: []
---

📒 VS Code 如何快速定位到问题代码

在 TS 项目中，经常会因为类型问题出现报错，因此需要快速定位到问题代码。

在 VS Code 中可以使用 `Ctrl + Shift + M` 快捷键打开问题面板，可以看到当前文件中所有的 errors 和 warnings。此时，按 `F8` 可以依次跳转查看当前文件中的问题。

📒 JS 清空数组的方式

以下两种清空数组的方式有何区别：

```js
let arr = [...];

// 这种是 immutable 的方式
// 即创建一个空数组，用该空数组指针替换原数组的指针
// 不影响其他引用原数组内存地址的变量
arr = [];

// 这种是 mutable 的方式
// 即直接修改原数组，不创建新数组，仍然是原数组指针
// 会影响其他引用原数组内存地址的变量
arr.length = 0;
```

📒 [【零基础】充分理解WebGL（三）](https://mp.weixin.qq.com/s/ULY-_Vq-Jgb8aCbhyfqYHw)

📒 [Go Error 处理最佳实践](https://mp.weixin.qq.com/s/EvkMQCPwg-B0fZonpwXodg)

📒 Map 对象小技巧

Map 对象可以记住键值对插入顺序，那么如何获取顺序呢？答案是通过迭代器接口。然后迭代器接口可以直接遍历，也可以转为数组，这样就变成获取数组第一个元素了。

> 按照这个思路，实际上也可以用 Map 实现队列

📒 [Web3.0开发入门](https://mp.weixin.qq.com/s/ROwTG6AC2pK5UN1dzY5x8w)

📒 [从源码中来，到业务中去，React性能优化终极指南](https://mp.weixin.qq.com/s/DswfPb6J1w2B_MWj1TjyOg)

📒 [剖析React核心设计原理—Virtual Dom](https://mp.weixin.qq.com/s/l19wbHNIrhjyD0HwJwuvmQ)

📒 [前端工程化：保姆级教学 Jenkins 部署前端项目](https://juejin.cn/post/7102360505313918983)

📒 [正则表达式完整指南](https://juejin.cn/post/7104152252180332581)

📒 [【第2630期】javascript中的依赖注入](https://mp.weixin.qq.com/s/b15cyyg53lVKQ_TtR8hugQ)

📒 [【前端部署附录一】写给前端的 docker 使用指南](https://mp.weixin.qq.com/s/sEvP3nLUOBwbSHP9mmT__A)

📒 Chrome 如何调试移动端 H5 页面

> chrome://inspect/#devices

📒 支付宝体验科技 Umi 系列文章

[Umi 4 特性 05：稳定白盒性能好的 ESLint](https://www.yuque.com/antfe/featured/uf1bok)

📒 如何回滚 Git 分支代码

```bash
# 找到需要回滚的版本哈希，执行 git reset
$ git reset --hard HEAD^
# 然后强制 push
$ git push -f -u origin pre
```

[拜托，不要再问我Git如何回滚代码](https://zhuanlan.zhihu.com/p/137856034)

📒 [如何华丽的实现一套脚手架 - 以umicli和转转zzcli为例](https://mp.weixin.qq.com/s/Sz8u6lzkL1nnpRxGrdbYJg)

📒 [深入浅出 npm & yarn & pnpm 包管理机制](https://mp.weixin.qq.com/s/ZTI-8RI0l314Ki9oBxqRWw)

📒 [一文带你进入微前端世界](https://mp.weixin.qq.com/s/LL6VZj36PKftbwaybBFmXg)

📒 [你还在手动部署埋点吗？从0到1开发Babel埋点自动植入插件](https://mp.weixin.qq.com/s/R6Xr8SoJicZB8-P4H2SSPA)

📒 一个三小时的 React Native 速成课 

> https://www.youtube.com/watch?v=VozPNrt-LfE

📒 使用 Three.js：一款流行的 3D JavaScript 库

> https://betterprogramming.pub/working-with-three-js-the-popular-3d-javascript-library-bd2e9b03c95a?gi=8c31e429644f

📒 Next.js 后续规划的 RFC：即将到来的重大变化

> https://nextjs.org/blog/layouts-rfc

📒 2022 年 React 状态管理库综述

React 的优势在于它可以灵活地适应不同的开发方式，其中也包括状态管理方面。这篇文章总结了几个流行的状态管理库，包括 Zustand、Recoil（来自 Facebook）、XState，当然还有 Redux。

> https://www.albertgao.xyz/2022/02/19/react-state-management-libraries-2022/

📒 [深入浅出前端做控制反转与依赖注入](https://www.yuque.com/surfacew/fe/qg0uev)

<!-- 📒 [动态表单（2）—— 复杂表单 DSL 设计（上）](https://zhuanlan.zhihu.com/p/515168073) -->

⭐️ ⭐️ 现代 Monorepo 工程技术选型，聊聊我的思考

总结一下：

- 使用 PNPM 作为 monorepo 项目的包管理工具
- 使用 Changesets 作为 monorepo 项目的发包工具
- 使用 Turborepo 作为 monorepo 项目多包任务执行工具

[现代 Monorepo 工程技术选型，聊聊我的思考](https://mp.weixin.qq.com/s/99nozy-vtFMGcBTxYvumWA)

📒 [MySQL 主从，6 分钟带你掌握](https://mp.weixin.qq.com/s/T5vXADH4nXqAxyDcKWE64Q)

📒 [【第2628期】基于设计稿识别的可视化低代码系统实践](https://mp.weixin.qq.com/s/1HyQLZcnZN6I27p_hbfUPg)

📒 [前端配置化真香～上班又多了60%的摸🐟时间](https://juejin.cn/post/7098211898990002207)
