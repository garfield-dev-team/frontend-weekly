---
slug: 6月12日内容汇总
title: 6月12日内容汇总
authors: [garfield]
tags: []
---

📒 [如何使用插件化机制优雅的封装你的请求hook](https://mp.weixin.qq.com/s/k2LYtZ6lU5CH1_grlKQT0Q)

📒 [【第2633期】JavaScript运行时环境和标准](https://mp.weixin.qq.com/s/_lKKAvzVQPTQ5FeKBF6hRA)

📒 [TS 的 esModuleInterop 与 allowSyntheticDefaultImports 配置](https://mp.weixin.qq.com/s/9TnD_oXnjiU8aoQJBzLbsA)

📒 NPM 发包脚本加上下面这段代码

```js
const npmPublish = async () => {
  const scripts = [
    "npm set-script postinstall \"\"",
    "npm publish",
    "npm set-script postinstall \"patch-package\"",
  ];
  await scripts.reduce(
    (prev, script) => prev.then(() => runScript(script)),
    Promise.resolve()
  );
}
```

> 这里的 `reduce()` 确保了 Promise 按顺序调用，而 `Promise.all()` 并发执行不保证顺序

📒 [【第2632期】微前端框架 Satum 的性能优化策略](https://mp.weixin.qq.com/s/LMSveysC0re7A0sbvvImuw)

📒 [大家都能看得懂的源码（一）ahooks 整体架构篇](https://mp.weixin.qq.com/s/lApEUTzOsdbvMeRUXcTneg)

📒 [React新文档：不要滥用effect哦](https://mp.weixin.qq.com/s/h7GiH_s8e8wM0CDS_tF_3w)

📒 [你还不会写 vite 插件吗？没关系，我教你啊](https://juejin.cn/post/7103165205483356168)

📒 [用 Node.js 手写一个 DNS 服务器](https://mp.weixin.qq.com/s/Gl94ISY5N4BYyYmVT9-QFQ)
