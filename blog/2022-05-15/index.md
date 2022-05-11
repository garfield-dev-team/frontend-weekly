---
slug: 5月15日内容汇总
title: 5月15日内容汇总
authors: [garfield]
tags: []
---

📒 【前端部署十一篇】通过 CICD 实践 Lint、Test、Performance 等前端质量保障工程

在 CI 操作保障代码质量的环节中，可确定以下时机:

```yaml
# 1. 当功能分支代码 push 到远程仓库后，进行 CI
on:
  push:
    branches:    
      - 'feature/**'

# 2. 当功能分支代码 push 到远程仓库以及是 Pull Request 后，进行 CI
on:
  pull_request:
    types:
      # 当新建了一个 PR 时
      - opened
      # 当提交 PR 的分支，未合并前并拥有新的 Commit 时
      - synchronize
    branches:    
      - 'feature/**'
```

CRA 内部使用 `ESLint Plugin` 进行代码检查，而非命令的方式。当 ESLint 存在问题时，CRA 如果判断当前是 CI 环境，则直接报错并退出进程，导致打包失败：

```js
new ESLintPlugin({
  // Plugin options
  // ...
  failOnError: !(isEnvDevelopment && emitErrorsAsWarnings),
})
```

Lint 和 Test 仅是 CI 中最常见的阶段。为了保障我们的前端代码质量，还可以添加以下阶段：

- Audit: 使用 npm audit 或者 snyk 检查依赖的安全风险
- Quality: 使用 SonarQube 检查代码质量
- Container Image: 使用 trivy 扫描容器镜像安全风险
- End to End: 使用 Playwright 进行 UI 自动化测试
- Bundle Chunk Size Limit: 使用 size-limit 限制打包体积，打包体积过大则无法通过合并
- Performance (Lighthouse CI): 使用 lighthouse CI 为每次 PR 通过 Lighthouse 打分，如打分过低则无法通过合并

有些细心并知识面广泛的同学可能注意到了，某些 CI 工作也可在 Git Hooks 完成，确实如此。

它们的最大的区别在于一个是客户端检查，一个是服务端检查。而客户端检查是天生不可信任的。

而针对 `git hooks` 而言，很容易通过 `git commit --no-verify` 而跳过。

[【前端部署十一篇】通过 CICD 实践 Lint、Test、Performance 等前端质量保障工程](https://mp.weixin.qq.com/s/D7nXxYUMdMuo1du6fHnT-g)

📒 [【第2609期】Javascript之迪米特法则](https://mp.weixin.qq.com/s/fhSMz8BEIyjFGVnJtcVrKg)

📒 [React 并发渲染的前世今生](https://mp.weixin.qq.com/s/01sTK6w4BFUzoRc2NKCs1w)

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
