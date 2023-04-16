---
slug: 4月16日内容汇总
title: 4月16日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i4/O1CN01oVK5W11FifB6TjCaM_!!6000000000521-2-tps-1456-816.png_1200x1200.jpg)

题图：an asian city, in the style of japanese traditional art influence。

⭐️ [Go 1.20.3 又是一堆安全问题，我们还是抽空更新一下吧](https://mp.weixin.qq.com/s/OKcnpx5YIeMP90dTCAd3OA)

⭐️ [技术文章配图指南](https://mp.weixin.qq.com/s/dUVqudV1qei3uyiYxL9CLw)

📒 2023 年如何搭建新的 React 项目

1、`create-next-app`

```bash
$ pnpm create next-app@latest nextjs-app
```

2、`create-t3-app`

了解了下 [T3 App 架构](https://create.t3.gg/)。T3 App 是一套全栈的技术栈，一个脚手架，包含客户端的 Next.js、Tailwind，服务端的 Prisma、Next Auth，API 侧的 tRPC。主打类型安全，所以 T3 的 T 即 Typed（类型安全）。3 个 T 分别是 React 前端、数据库客户端和 API 调用端的类型安全。

![image](https://image-1256177414.cos.ap-shanghai.myqcloud.com/picgo/20221124211445.png)

T3 App 的 3 个理念值得学习。1）解决问题，不添加「所有」东西，只加能解决问题的技术，2）负责任的做技术革新，在风险小的地方使用风险大的技术，3）类型安全不是可用可无，因为可以提高生产力和减少错误发生。

全栈技术栈除了 T3 App，还有其他选择，见下图。图中有个变化是 Bison 也将切换 GraphQL 到 tRPC，他们还写了文章介绍他们《为啥舍弃 GraphQL 而选择 tRPC》（Why we ditched GraphQL for tRPC），主要原因是，1）可以少写一半的样板代码，2）避免不必要的代码生成，tRPC 基于类型推导，3）Client 包尺寸，GraphQL 是 tRPC 的 3.5 倍，4）tRPC 可结合 React Query 使用，Apollo 搞不太好的缓存啥的都属于基础功能。

![image](https://image-1256177414.cos.ap-shanghai.myqcloud.com/picgo/20221124211544.png)

tRPC [发布 10](https://trpc.io/blog/announcing-trpc-10)，似乎正在成为越来越多人的选择，不仅是 T3 App 技术栈的选择，同时 Bison 团队也写了文章介绍他们[《为啥舍弃 GraphQL 而选择 tRPC》](https://echobind.com/post/why-we-ditched-graphql-for-trpc)。

Tailwind 其实不是类型安全的，需要借助编辑器辅助。比如 VSCode 要装 Tailwind CSS IntelliSense，WebStorm 则是内置支持。

NextAuth 内置的是 Discord 登录，因为配置最简单，只要在 .env 里提供 token 即可，也可稍做配置切换到 github、twitter、google 等登录方式。

部署时可以把数据库部署到 Railway 或 PlanetScale，然后把其余部分部署到 Vercel、Railway、Render 或 Fly。Vercel 虽然部署起来简单，但缺点也很明显，问题是在 Lambda 函数里跑 Prisma 会有明显的冷启动时间，性能不太好。

本地实操跑了个 Blog 的 CURD + 部署流程，部署到 Railway 的 postgresql 数据库和 Vercel 的前端，一切顺利。

文档中的「其他推荐」也值得一看，包括数据流、组件库、动画、部署和基础设施、统计等维度的推荐。

```bash
$ pnpm create t3-app@latest
```

参考：

[Create T3 App](https://create.t3.gg/ "Create T3 App")

[GitHub - t3-oss/create-t3-app: The best way to sta...](https://github.com/t3-oss/create-t3-app "GitHub - t3-oss/create-t3-app: The best way to sta...")

[https://dev.to/ajcwebdev/a-first-look-at-create-t3...](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f "https://dev.to/ajcwebdev/a-first-look-at-create-t3...")

[Prisma | Next-generation ORM for Node.js & TypeScr...](https://www.prisma.io/ "Prisma | Next-generation ORM for Node.js & TypeScr...")

[Railway](https://railway.app/ "Railway")

[Why we ditched GraphQL for tRPC](https://echobind.com/post/why-we-ditched-graphql-for-trpc "Why we ditched GraphQL for tRPC")

📒 [webpack核心模块tapable源码解析](https://mp.weixin.qq.com/s/TuxhXlPxA81vtaU1y-aKcw)

📒 [速度提高几百倍，记一次数据结构在实际工作中的运用](https://mp.weixin.qq.com/s/q5YDEmohyrtQ_teS0Ws7Fg)

📒 如何终止某个端口运行的进程

发现 VS Code 有个 bug，终端结束 Next.js 服务（在 3000 端口运行）之后再启动，此时发现 3000 端口被占用了，自动改成 3001 端口，说明原先 Next.js 进程还在继续跑。

可以用 `lsof -i` 命令查看某个端口正在运行的进程 ID：

```bash
$ lsof -i :3000

COMMAND   PID       USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    61440   garfield   21u  IPv6 0x44c3c99e2d153375      0t0  TCP *:hbci (LISTEN)
```

找到 PID 之后，用 `kill` 命令终止进程：

```bash
$ kill 61440
```

📒 [我问了鹅厂程序员：你们工作中怎么用ChatGPT？如何高效Prompt](https://mp.weixin.qq.com/s/L-P-QTReyijbU33ARo-BbA)

📒 `sync.Once` 总结一下

单例模式有两种写法，1）提前把实例创建出来，2）等到要用的时候再创建实例。用 `init` 函数可以实现第一种，借助 `sync.Once` 则可以实现第二种。

```go
package main

import (
  "fmt"
  "sync"
)

type Singleton struct{}

var (
  instance *Singleton
  once     sync.Once
)

func GetInstance() *Singleton {
  once.Do(func() {
    instance = &Singleton{}
  })
  return instance
}

func main() {
  var wg sync.WaitGroup

  for i := 0; i < 5; i++ {
    wg.Add(1)
    go func() {
      defer wg.Done()
      s := GetInstance()
      fmt.Printf("Singleton instance address: %p\n", s)
    }()
  }

  wg.Wait()
}
```

两点注意：

- 在 `doSlow` 方法中，由于已经加锁，因此可以直接 `o.done` 访问，无需再用原子操作；
- 在 `doSlow` 方法中，修改 `done` 的值用的是 `atomic.StoreUint32()` 原子操作，是为了让 `done` 的值修改对其他 goroutine 可见（因为 `Do` 方法访问是用 `atomic.LoadUint32()` 原子操作，不需要加锁），可以在大多数情况下避免锁竞争，提高性能。

[Go sync.Once：简约而不简单的并发利器](https://juejin.cn/post/7220797267716358199)

[简洁而不简单的 sync.Once](https://mp.weixin.qq.com/s/S-v_A7gMoDvSDaryovb-zA)

⭐️ [singleflight 设计与实现](https://mp.weixin.qq.com/s/WayT3afVbzngdNGyvsBZyQ)

📒 [🤩 如何解决 SVG 图片中字体失效的问题](https://mp.weixin.qq.com/s/urciRQ06n-hLvAF4j5DAVw)

⭐️ [Go sync.Once：简约而不简单的并发利器](https://juejin.cn/post/7220797267716358199)

📒 [React 中文周刊 #135 - Dan Abramov 探索 React 服务端组件](https://mp.weixin.qq.com/s/gAJc3zFYAbPmGsqXMfKAZA)

⭐️ [Go 环境变量 - GODEBUG 详解](https://mp.weixin.qq.com/s/AunOvSWc0g-y5DgkxwP2AQ)

📒 [2023再谈前端状态管理](https://mp.weixin.qq.com/s/VGpgoMs1XAxhXPsadH1cwA)

📒 [Vite 4.3 性能大幅提升！](https://mp.weixin.qq.com/s/c9yQEliLF9LR8troo0EkIw)

📒 [前端食堂技术周刊第 78 期：WebGPU、Astro 2.2、Node.js 事件循环可视化指南、实用 Web API 规范](https://mp.weixin.qq.com/s/MVTqK4qS8Y8RSh0s6Ms0qA)

📒 [useState与useReducer性能居然有区别](https://mp.weixin.qq.com/s/KOnUkaTwmPJ1IlfJ_r2jeg)

⭐️ [Go语言中常见100问题-#32 Ignoring the impact of using pointer ...](https://mp.weixin.qq.com/s/58EVYGZ02xPfGYrprk7dRw)

📒 [mysql的varchar字段最大长度真的是65535吗？](https://mp.weixin.qq.com/s/RPTalBoELQuJNNzOu1OA3w)

📒 [几个你不知道却非常实用的JavaScript APIs](https://mp.weixin.qq.com/s/m0Ey3wu1-FQEuxz6IoZebw)

⭐️ [Go设计模式--访客模式](https://mp.weixin.qq.com/s/qsw89qI8DOXyb4C1XI5QtA)

⭐️ [Go 语言 15 个内置函数详解](https://mp.weixin.qq.com/s/FKp1nAX2FOeBMgchJOe4ag)

⭐️ [GoLand 2023.1 正式发布，看有哪些新功能](https://mp.weixin.qq.com/s/SVMj-PvI1l-oSlxI4zaNcw)

📒 MDH 前端周刊第 95 期：-10x 工程师、Next.js、WebGPU、Chakra UI、写作

- Vercel [Edge Config](https://vercel.com/blog/vercel-edge-config-is-now-generally-available) 已普遍可用。
- Nextjs [v13.3](https://nextjs.org/blog/next-13-3) 发布，新路由约定等。
- Vite [v4.3](https://twitter.com/sapphi_red/status/1644647019661893633) 比 Turbopack 启动快。

《如何成为一名 -10x 工程师》。本文指出，虽然 “10 倍工程师” 可能是神话，但确实存在 “-10 倍工程师”。为了成为一名 “-10 倍工程师”，可以采用以下策略：使 10 个工程师的输出无效；尽可能在开发过程中更改需求以避免责任；创建 400 小时的忙碌工作；让团队执行类似于工作的任务；创建毫无意义的仪式等。此外，还可以浪费 400 小时的编译 / 构建时间，编写毫无意义的测试，将 10 个工程师困在技术讨论中等等。

> https://taylor.town/-10x

《程序员被打断：中断和上下文切换的真正成本》。编程中的中断和上下文切换是直接影响程序员日常生产力的两个最昂贵因素。虽然没有永久避免它们的方法，但有一些有趣的策略可以最小化它们的影响。根据各种科学研究，经过中断后需要至少 10-15 分钟才能重新进入 “区域”（Parnin:10，vanSolingen:98）。基于任务的复杂性和你的精神能量，肯定需要更多的时间。当你有很多未完成的代码时，中断发生时，返回到流状态可能会更具挑战性。

> https://contextkeeper.io/blog/the-real-cost-of-an-interruption-and-context-switching/

《Next.js 13.3》。Next.js 13.3 发布，新增了社区请求的流行功能，包括：基于文件的元数据 API、动态 Open Graph 图像、应用程序路由器的静态导出、并行路由和拦截等。其中，基于文件的元数据 API 可以方便地自定义页面以改善 SEO 和 Web 共享；动态 Open Graph 图像可以使用 JSX、HTML 和 CSS 生成 OG 图像；应用程序路由器的静态导出支持完全静态导出，可避免在客户端加载不必要的 JavaScript 代码，减小捆绑大小并实现更快的页面加载；并行路由和拦截可以同时在同一视图中呈现一个或多个页面，如复杂的仪表板或模态框。

> https://nextjs.org/blog/next-13-3

《从 Webpack 迁移到 Remix》。Remix 宣布推出基于 Webpack 的编译器和开发服务器，以帮助使用 Webpack 的应用程序逐步迁移到 Remix。这个版本可以让用户从第一天开始使用所有的 Webpack 加载器和插件，并逐渐将每个路由迁移到 Remix。Remix 还提供了一个迁移指南，以帮助 Webpack 用户更容易地进行迁移。

> https://remix.run/blog/migrate-from-webpack

[MDH 前端周刊第 95 期：-10x 工程师、Next.js、WebGPU、Chakra UI、写作](https://mdhweekly.com/weekly/issue-0095)
