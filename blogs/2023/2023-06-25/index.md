---
slug: 6月25日内容汇总
title: 6月25日内容汇总
authors: [garfield]
tags: []
---

⭐️ Go 语言日志库

[Go 每日一库之 logrus](https://zhuanlan.zhihu.com/p/105759117)

[Awesome Logging in Go With Logrus](https://betterprogramming.pub/awesome-logging-in-go-with-logrus-70606a49f285)

[Zap Logger](https://www.topgoer.com/%E9%A1%B9%E7%9B%AE/log/ZapLogger.html)

[一文告诉你如何用好uber开源的zap日志库](https://tonybai.com/2021/07/14/uber-zap-advanced-usage/)

⭐️ Go Concurrency Patterns

https://go.dev/talks/2012/concurrency.slide#1

https://go.dev/talks/2013/advconc.slide#1

⭐️ 泛型版 slice、map

[Go1.21 速览：新内置函数 clear、min、max 和新标准库包 cmp！](https://mp.weixin.qq.com/s/MorBUrzpKFhssiZWLt4o6g)

[Go1.21 速览：过了一年半，slices、maps 泛型库终于要加入标准库](https://mp.weixin.qq.com/s/1NuBnk8_lxmTi9N0biLa2g)

⭐️ [手写K8S的YAML很痛苦，看完这篇让你信手拈来](https://juejin.cn/post/7247012543939657787)

⭐️ [Go 项目分层下的最佳 error 处理方式](https://mp.weixin.qq.com/s/SnaurQfXDVidrl_ihBQtDA)

⭐️ [Go 将引入标准库 v2 版本，首个动手的是：math/rand/v2！](https://mp.weixin.qq.com/s/b_TYBRIZ3-EORFYq1xRjyQ)

⭐️ [瞬间高并发，goroutine执行结束后的资源占用问题](https://mp.weixin.qq.com/s/iBo-j4990paKb3Pb7Xk-2w)

⭐️ [Go语言中常见100问题-#37 Inaccurate string iteration](https://mp.weixin.qq.com/s/m0WyJyd2JwQfX1SP2H-jrA)

📒 [超越所有开源模型，击败 Claude、Bard，专门用于编程任务的大模型来了](https://mp.weixin.qq.com/s/WGv0geWzSdO7p0LWOvVZnw)

⭐️ [死锁、活锁、饥饿、自旋锁](https://mp.weixin.qq.com/s/G2flIpgksqLVJUMTYj2l8Q)

⭐️ [一个悄然崛起的AI开源项目 ！！](https://mp.weixin.qq.com/s/y1PUDUaQjHqKQxI5K8vGmA)

📒 [前端食堂技术周刊第 87 期：2023 Stackoverflow、Bun v0.6.9、React 是否迎来了 Angular.js 时刻、Vercel AI](https://juejin.cn/post/7246224746005463096)

⭐️ Introducing the Vercel AI SDK

Vercel 推出了全新的工具来改善 AI 体验：

- Vercel AI SDK：轻松地从 AI 模型中获取 API 响应；
- Chat & Prompt Playground：探索来自 OpenAI、Hugging Face 等的模型；
- AI Chatbot：使用 Next.js 构建的开源 AI 聊天应用模板。

Vercel AI SDK 是一个开源库，旨在帮助开发者在 JavaScript 和 TypeScript 中构建 AI 流式聊天应用。该 SDK 支持 React/Next.js、Svelte/SvelteKit，即将支持 Nuxt/Vue。

可以在终端中输入以下命令来安装此 SDK：

```bash
$ npm install ai
```

Vercel 的 AI SDK 支持互操作性，并为 OpenAI、LangChain 和 Hugging Face Inference 提供一流的支持。这意味着无论首选的 AI 模型提供商是哪个，都可以利用 Vercel AI SDK 创建前沿的流式 UI 体验。

```tsx
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

// 创建一个 OpenAI API 客户端
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

// 将运行时设置为 edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // 从请求正文中提取 messages
  const { messages } = await req.json()

  // 根据提示要求 OpenAI 完成流式聊天
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  // 将响应转换为友好的文本流
  const stream = OpenAIStream(response)
  // 响应流
  return new StreamingTextResponse(stream)
}
```

Vercel AI SDK 包括用于数据获取和渲染流式文本响应的 React 和 Svelte 钩子。这些钩子使得应用能够实时、动态地渲染数据，为用户提供沉浸式和交互式的体验。

现在，借助 `useChat` 和 `useCompletion`，构建丰富的聊天或完成接口只需要几行代码：

```tsx
'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
```

参考：

https://vercel.com/blog/introducing-the-vercel-ai-sdk

📒 [Vercel 推出 AI SDK、AI 应用模板，快速构建 AI 应用！](https://mp.weixin.qq.com/s/syV0qUsfEPWzcGlxPhN4OQ)

📒 [芜湖，埋点还可以这么做？这也太简单了](https://mp.weixin.qq.com/s/UcnPwawFAd85wdKwO4XSVA)

⭐️ [\[代码附录\] SIMD能力初体验](https://mp.weixin.qq.com/s/q-keuybJ2d-QMXWoPpSbPA)

📒 [【第2976期】前端构建工具的未来](https://mp.weixin.qq.com/s/Mcr_kYVIEmpdm_NzpC4ZcA)

⭐️ [Go语言包设计指南](https://mp.weixin.qq.com/s/_xA6bhKTm543i3QV8EZMSg)

📒 相关文章汇总

Node.js 安全版本已发布 —— Node.js 16.x、18.x 和 20.x 系列都发布了新版本以修复各种中高危安全问题，也包括一些与 OpenSSL 相关的安全更新。如果你想尽快升级，请留意这篇文章。

> https://nodejs.org/en/blog/vulnerability/june-2023-security-releases

2023 年可以在何处托管 Remix 应用

> https://www.jacobparis.com/content/where-to-host-remix

Toad Scheduler：Node.js 内存和浏览器任务调度程序 —— 提供了比 setTimeout 或 setInterval 多一点的结构，也支持 cron 风格的调度。

> https://github.com/kibertoad/toad-scheduler

openGraphScraper：Open Graph 和 Twitter Card 元数据抓取器 —— 很多网页都包含元数据，以帮助像 Facebook 和 Twitter 这样的社交网络创建更有吸引力的链接——这个库可以让你更容易挖掘这些信息。

> https://github.com/jshemas/openGraphScraper

Chrome for Testing 是一个全新的官方 Chrome“版本”，专门针对 Web 测试和自动化用例。你已可以使用 Puppeteer。

> https://developer.chrome.com/blog/chrome-for-testing/

在你的下一个前端 Pull Request 之前，请使用 Checklist —— 使用 Checklist 避免 Pull Request 中的常见错误，文章的内容涵盖了最小化包大小、确保可访问性、使用语义化标记，以及保持代码整洁等领域。

> https://evilmartians.com/chronicles/before-your-next-frontend-pull-request-use-this-checklist

Million.js：以性能为重点的 React VDOM 替代方案 — 两年前 Million 诞生时是一个不依赖任何库的，轻量的虚拟 DOM 实现。最近，它又作为 React 性能提升的一种方式出现：「想象一下 React 组件能以原生 JavaScript 的速度运行。」不过，要想达到这个目标也需要做出一些妥协，官方的 快速入门文档 演示了 React 集成 Million 的示例。

> https://million.dev/

为什么使用了 React 服务端组件，客户端组件仍然可以被 SSR 成 HTML？ — 当理解服务器组件时不要恐慌，它并不会改变你原有对 React 工作原理的理解。你可以在心智模型上开辟一块新的空间来接纳这个知识点。为了避免混淆，请将概念分为 “React 服务器”和 “React 客户端”，而不是更容易混淆的“服务器”和“客户端”。这将有助于更好地理解 React 在不同环境下的工作方式。

> https://github.com/reactwg/server-components/discussions/4

React Redux v8.1 已经发布，增加了针对常见错误的开发模式安全检查，以及修复了 React-Redux hook 被 React 服务器组件引用时的问题。

> https://github.com/reduxjs/react-redux/releases/tag/v8.1.0

⭐️ [Go语言爱好者周刊：第 191 期 —— 父亲节快乐](https://mp.weixin.qq.com/s/NCe4KP1JiA8whcg2w_Vgxw)
