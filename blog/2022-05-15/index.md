---
slug: 5月15日内容汇总
title: 5月15日内容汇总
authors: [garfield]
tags: []
---

📒 如何优雅实现轮询

- 初级：使用定时器（`setInterval`）
- 中级：使用基于事件循环的递归（`setTimeout` 递归调用）
- 高级：使用轮询调度器

📒 npm 包的入口点

注意 `exports` 字段优先级最高，当提供 `exports` 字段后，`main`、`module` 字段会被覆盖。

`exports` 可以更容易地控制子目录的访问路径，不在 `exports` 字段中的模块，即使直接访问路径，也无法引用！

[工程化知识卡片 014: 发包篇之 package.json 中 main、export、module 的区别何在](https://juejin.cn/post/7025809061660590087)

http://nodejs.cn/api/packages.html#main-entry-point-export

📒 使用 Next.js 和 MDX 构建你自己的博客

> https://www.freecodecamp.org/news/how-to-build-your-own-blog-with-next-js-and-mdx/

📒 React Concurrent 的故事

> https://www.youtube.com/watch?v=NZoRlVi3MjQ

⭐️ [TCP 重传、滑动窗口、流量控制、拥塞控好难？看完图解就不愁了](https://mp.weixin.qq.com/s/toQUgqJHeUbFZMtxfzFCxw)

⭐️ [TCP 就没什么缺陷吗？](https://mp.weixin.qq.com/s/9kHoRk6QIYOFUR_PCmHY6g)

📒 [React Server Components：我们即将和 API 告别？](https://mp.weixin.qq.com/s/b9Ye4iShgTSAcm0ce6m_9Q)
