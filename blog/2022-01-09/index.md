---
slug: 1月9日内容汇总
title: 1月9日内容汇总
authors: [garfield]
tags: [Vue, React, 年度高赞文章, VS Code, PostCSS, NextJS, 前端技术方向]
---

📒 今年最受欢迎的项目：谷歌的 **zx**

使用 zx 可以编写简单的命令行脚本：

```js
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`

await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`,
  $`sleep 3; echo 3`,
])

let name = 'foo bar'
await $`mkdir /tmp/${name}`
```

zx 涵盖了多个软件包提供的功能：

- `node-fetch`：使用与浏览器中相同的 API 发出 HTTP 请求
- `fs-extra`：运行文件系统

这块源码不是很多，推荐看一下：

https://github.com/google/zx

📒 工程化方案总结下

[2021 年 TypeScript + React 工程化指南](https://zhuanlan.zhihu.com/p/403970666)

[2021 年当我们聊前端部署时，我们在聊什么](https://juejin.cn/post/7017710911443959839)

📒 TypeScript 类型体操

[TypeScript 类型编程: 从基础到编译器实战](https://mp.weixin.qq.com/s/-x8iVK-hlQd3-OZDC04A5A)

[知其然，知其所以然：TypeScript 中的协变与逆变](https://juejin.cn/post/7050099282317148174)

📒 monorepo 项目

[One For All：基于pnpm + lerna + typescript的最佳项目实践 - 理论篇](https://juejin.cn/post/7043998041786810398)

📒 [漫画图解 Chrome 浏览器从输入到渲染的原理（7000 字）](https://mp.weixin.qq.com/s/Yo-W7CbkOrBMSfK75qrAhg)

📒 QUIC 协议

推荐看看 QUIC 101 视频以及 [The QUIC transport protocol: design and Internet-scale deployment](https://courses.cs.washington.edu/courses/cse550/20au/papers/CSE550.quic.pdf) 论文

📒 [ES6 以上版本代码要不要转码成 ES5?](https://mp.weixin.qq.com/s/fSRpl25Pi0ladeWRXHLGZA)

📒 React 组件懒加载实现思路

项目中经常需要长列表渲染，一般都使用懒加载，滚动到底部时渲染下一屏数据，需要判断元素是否在 viewport 内。过去通常会监听滚动事件，然后调用 `Element.getBoundingClientRect()` 方法以获取元素的边界信息。由于滚动事件触发非常频繁，频繁调用会导致性能问题。

这种情况下可以使用 `Intersection Observer API`，仅在被监听元素进入或者退出 viewport 时触发回调，这样就不会大量占用主线程。

```js
let observer = new IntersectionObserver(callback, options);
let target = document.querySelector('#listItem');
observer.observe(target);
```

:::tip

在 React 项目中，还可以使用 `react-intersection-observer` 这个库。

[react-intersection-observer - npm](https://www.npmjs.com/package/react-intersection-observer/v/8.28.3)

:::

[Intersection Observer API - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

[懒加载 React 长页面 - 动态渲染组件](https://juejin.cn/post/6955287500311150605)

📒 [如何避免 React 组件重复渲染](https://mp.weixin.qq.com/s/RCBHBtAFaeR6wqsyuGI_hQ)

📒 React 16 架构

React16架构可以分为三层：
- Scheduler（调度器）—— 核心职责只有 1 个, 就是执行回调。把react-reconciler提供的回调函数, 包装到一个任务对象中.在内部维护一个任务队列, 优先级高的排在最前面。循环消费任务队列, 直到队列清空
- Reconciler（协调器）—— 负责找出变化的组件，16版本主要是Fiber，15版本是stack。区别在于增加了优先级系统，通过遍历的方式实现可中断的递归，将fiber树的构造过程包装在一个回调函数中, 并将此回调函数传入到scheduler包等待调度
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上，能够将react-reconciler包构造出来的fiber树表现出来, 生成 dom 节点(浏览器中), 生成字符串(ssr)，比如说react-dom、react-native。
所以react-native的作用主要是将react提供的节点，渲染到app页面上

我们书写的react-native组件，比如说View、Text等，需要通过react-native-web来变成react-dom可以识别的节点

📒 如何在 JB 全家桶中使用 VS Code 的快捷键

JB 全家桶，例如 IDEA、WebStorm、GoLand 等支持多种 keymap，如要使用 VS Code 的快捷键，只需要安装对应的 Keymap 即可：

![image](./vs_code_keymap.png)

安装后应用即可：

![image](./apply_keymap.png)

同理主题也可以安装，在 JB 全家桶中推荐使用 One Dark Theme，安装完成后点击 apply 即可：

![image](./one_dark_theme.png)

📒 静态页面部署方案

[一篇教你代码同步 Github 和 Gitee](https://juejin.cn/post/7041870446576271368)

[教你如何使用vercel服务免费部署前端项目和serverless api](https://mp.weixin.qq.com/s/rfyqQgpylFT7slukkbi6rw)

📒 webpack 热模块替换看下源码

[webpack模块热更新原理](https://juejin.cn/post/7049608872553611301)

[Webpack 原理系列十：HMR 原理全解析](https://juejin.cn/post/7021729340945596424)

📒 [聊一聊前端算法面试——递归](https://juejin.cn/post/6844903942074138637)

📒 [前端单元测试入门与最佳实践](https://juejin.cn/post/7049293284883038238)

📒 [淘宝店铺的 TypeScript ESLint 规则集考量](https://juejin.cn/post/7049335008917454855)

📒 自动发布脚本

https://github.com/release-it/release-it

📒 diff 算法相关

https://github.com/snabbdom/snabbdom

[DIff算法看不懂就一起来砍我(带图)](https://juejin.cn/post/7000266544181674014)

📒 [如何盘点出掘金的年度高赞文章？](https://juejin.cn/post/7048253632055083022)

📒 [盘点掘金 2021 高赞 Vue 文章](https://juejin.cn/post/7047705995534925832)

📒 [盘点掘金 2021 高赞 React 文章](https://juejin.cn/post/7047690546417565733)

📒 [盘点掘金 2021 点赞高达 6000，收藏过万的文章](https://juejin.cn/post/7047153016771706916)

📒 [如何测试驱动开发 React 组件？](https://juejin.cn/post/7036318575165964325)

📒 [一起来写 VS Code 插件:为你的团队提供常用代码片段](https://juejin.cn/post/7030250953215311908)

📒 黑暗模式常用换肤方案

**CSS Variables**

css variables 是 Web 标准实现了对深色模式的支持，以下代码通过 CSS 媒体查询：

```css
:root {
  color-scheme: light dark;
  --nav-bg-color: #F7F7F7;
  --content-bg-color: #FFFFFF;
  --font-color: rgba(0,0,0,.9);
}

@media (prefers-color-scheme: dark) {
  :root {
    --nav-bg-color: #2F2F2F;
    --content-bg-color: #2C2C2C;
    --font-color: rgba(255, 255, 255, .8);
  }
}

:root {
  color: var(--font-color);
}

.header {
  background-color: var(--nav-bg-color);
}

.content {
  background-color: var(--content-bg-color);
}
```

优点：代码量最少，实现起来方便

缺点：存在浏览器兼容性，需要 edge16+ 才支持

**打包多份 css**

当然也可以手动打包 2 份 CSS 样式，通过动态引入样式文件进行切换。这种方式存在一个问题，当点击切换的时候会引起整个页面重排，因此我们需要单独打包出只包含颜色的样式文件。从这个思路出发，我们就接触到了 PostCSS。

[使用 PostCSS 插件让你的网站支持暗黑模式](https://juejin.cn/post/7019580413110648863)

📒 [使用 NextJS 和 TailwindCSS 重构我的博客](https://juejin.cn/post/6984267680324780040)

⭐️ [2022 前端技术领域会有哪些新的变化？](https://www.zhihu.com/question/493891614/answer/2269197391)
