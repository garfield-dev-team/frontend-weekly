---
slug: 9月18日内容汇总
title: 9月18日内容汇总
authors: [garfield]
tags: []
---

📒 [一起来实现一个Antd Form](https://juejin.cn/post/7127161983622725639)

📒 [如何检测 JavaScript 原生函数是否被打过 "猴子补丁"](https://mp.weixin.qq.com/s/vzSbdOFrwpA2U0JpMx_nsw)

📒 [鹅厂后台大佬教你Go内存管理！](https://mp.weixin.qq.com/s/56tth8PSquB1eR5-1XaDWA)

📒 [Plasmo Framework：次世代的浏览器插件开发框架](https://mp.weixin.qq.com/s/VKpHtRVIJh669SLz2nUJuQ)

⭐️ [不得不知道的Golang之sync.Map解读！](https://mp.weixin.qq.com/s/NkSyv7iDSZsLhMUgAi-r4w)

📒 [前端食堂技术周刊第 52 期：Babel 7.19.0、Fresh 1.1、React为什么重新渲染、新的 Web 性能指标](https://mp.weixin.qq.com/s/_sZiClAyq1MDrh7XoIgSBQ)

📒 [我被骂了，但我学会了如何构造高性能的树状结构](https://mp.weixin.qq.com/s/kn7cHvZvjR93V0CW06e0NQ)

📒 [「Go工具箱」一个将非负整数转换成唯一、无序ID的工具：hashids](https://mp.weixin.qq.com/s/tfZ5zHo8FG_Rc1JteLBS7g)

📒 [【图书】程序员的底层思维](https://mp.weixin.qq.com/s/URJC9ERPrcniiFinUsIJkg)

📒 [作为大厂面试官，原来这种学生最吃香！](https://mp.weixin.qq.com/s/iTFj1Sn5vPTgkAT2Q9YC0w)

📒 Why Storybook in 2022

> https://storybook.js.org/blog/why-storybook-in-2022/

📒 [如何像gitlab-runner那样将Go应用安装为系统服务](https://mp.weixin.qq.com/s/59x3uElLaSZVf77itv8B3Q)

📒 [React Router v6 完全指南](https://mp.weixin.qq.com/s/8JPj9Rz5xyrnAloeno0RNA)

📒 [【第2726期】开发模式 "Development Mode" 是如何工作的](https://mp.weixin.qq.com/s/81L1RRiCdqGMJmk-iUZldg)

📒 [你信吗？Go 泛型竟然已经被迅速采用](https://mp.weixin.qq.com/s/FdCl0BZT_v_pjBZKcTUnoQ)

📒 [做一个不崩溃的核酸系统到底有多难](https://mp.weixin.qq.com/s/jzCfXs6jz820XOHksZzBDA)

📒 [写给前端仔的自动化测试入门小作文](https://juejin.cn/post/7142371499255529509)

📒 [「Go工具箱」一个兼具单机和集群模式的轻量级限流器：throttled](https://mp.weixin.qq.com/s/MN4wsITSVYHNMPoFRpRZFQ)

📒 CSR 最佳实践

随着 Next.js 和 Remix 的流行，SSR 看似已成为 React 社区的首选。但如果你用 SSR 是为了性能和 SEO，那可能可以重新考虑下，因为 CSR 也能做到。

关于性能。

1、减少尺寸。1）少用依赖，2）选择轻量级的依赖，比如用 day.js 代替 moment，用 zustand 代替 redux toolkit。

2、缓存。利用 webpack 的 cacheGroups 设置，提取依赖，当依赖没有变更时，hash 值不变，提高缓存利用率。推荐配置如下，让每个依赖拥有单独的文件和 hash，这样单个依赖变更时不会影响其他依赖。

```js
optimization: {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'initial',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        // 加这句可以避免异步 chunk 的 vendor 重复问题，比如 a 和 b 都依赖 moment，不加这句 moment 会被打两遍而不是被提取出来
        chunk: 'all',
        // 让每个依赖拥有单独的文件和 hash
        name: ({ context }) => (context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) || [])[1]
      }
    }
  }
}
```

3、Code Splitting。通常有两种，1）基于路由的 Code Splitting，当用户访问页面 A 时无需加载页面 B、C、D 的脚本，2）大依赖 Code Splitting，让整体页面更快出来，让大依赖的部分不影响页面渲染速度。

4、预加载异步 Chunk。主要避免出现下图中最后一个资源文件的瀑布流现象，思路是生成和路由对应的 assets 表，然后在 HTML 最前面加入「匹配路由生成 link preload 标签」的脚本。

5、生成静态数据。在 build 阶段从 CMD 或服务器上把数据拉下来，存成 json 或其他格式，用户请求时就只需从本地读取即可，访问本地或就近的 CDN 肯定比访问远程服务器更快。如果要重新生成数据，重新跑 build 或者重新执行脚本就好。

6、预加载数据。这和「4」类似，4 预加载的是 JS，这里需要预加载数据。做法也和「4」类似，把数据请求和路由做关联，然后运行时「匹配路由生成针对数据请求的 link preload 标签」。

7、预加载其他页面的数据。当 hover（desktop）或进入 viewport（mobile）时，做的对应 Link 的 preload as fetch。

8、避免序列化的渲染。比如一个应用有 Nav 导航 + 主内容，是应该先出导航再出主内容，还是应该导航和主内容都好了之后一起出？作者觉得应该是后者，实现方法是通过调整 Suspense 元素的位置。这一点其实我是有疑问的，我觉得前一种渲染方式也挺好，避免长时间的白屏。

9、Transition 切换页面（依赖 React 18）。当我们切换页面时，有两个选择。1）切过去，等 loading，渲染；2）等 loading，切过去+渲染。基于 React 18 的 useTransition 可以实现后者，代码如下。

```js
const n = useNavigate();
startTransition(() => n(to));
```

10、预加载异步页面。作者介绍了个方法，把 React.lazy 封一下，在 window load 事件之后延迟自动执行。

```js
const lazyPrefetch = chunk => {
  window.addEventListener('load', () => {
    setTimeout(chunk, 200)
  }, { once: true });
  return React.lazy(chunk);
}
```

11、Module Federation。

https://github.com/theninthsky/client-side-rendering

📒 人手 10x 工程师

先看两种 10x 工程师。1）写 10x 代码的工程师，但这类工程师对于负责 Review 他代码的同学会很有挑战，2）能评估复杂问题，站在技术前沿，先人一步拿出优雅解决方案的工程师，这类工程师一个团队通常没有几个。

你可能会觉得这两种都比较遥远，别灰心，还有一种 10x 工程师。他关注开发体验（dx）和团队健康，关注小但有倍增效应的事。比如添加缓存以加快持续集成，比如定期修复项目 setup 说明，比如增加 precommit 或加快自动化测试后让故障发生在本地而不是 CI 环境。这些变化随着时间推移所产生的累积效应，虽然不是你自己做了 10x 的工作，但通过提高一群工程师的生产力也能达到 10x 提效。

https://typeofnan.dev/10x-engineering-for-the-rest-of-us/

📒 开源相关

- Next.js 发布 12.3，Fast Refresh 支持 .env 和 tsconfig.json，检测到 ts 或 tsx 文件自动完成 TypeScript 配置、SWC Minifier Stable
- Meta 开源 shumai，基于 Bun + Flashlight 的 JavaScript 机器学习库
- module-federation/nextjs-mf，让 Next.js 支持 Module Federation，目前 CSR Only
- gradejs/gradejs，GradeJS 无需源码即可分析生产阶段的 webpack 产物构成，包括潜在问题，依赖了哪些包，等等

📒 [Go语言爱好者周刊：第 159 期 — 这道题目有点意思](https://mp.weixin.qq.com/s/rPDGgAlzNrTqZX74zzqDsA)
