---
slug: 10月2日内容汇总
title: 10月2日内容汇总
authors: [garfield]
tags: []
---

📒 [前端食堂技术周刊第 54 期：TS 4.9 Beta、Monorepo Handbook、第 92 次 TC39 会议、将 StoryBook Stories](https://juejin.cn/post/7147660762519961631)

📒 [HTTPS 就一定安全？我不信](https://mp.weixin.qq.com/s/nS1bMy2TejmGwEfCHPXy5A)

📒 tauri 快速上手

快速上手 3 命令。

```bash
$ npm create tauri-app
$ npm run tauri dev
$ npm run tauri build
```

> https://blog.logrocket.com/tauri-electron-comparison-migration-guide/

📒 新一波 JavaScript 框架

作者从 Web 之初、CGI、PHP 开始讲起，讲 JavaScript 历史画卷一幅幅展开，既有 Ajax、jQuery、Backbone、YUI 等一代代的 JavaScript 库前辈，又有 Astro、Fresh、Remix 等新一波的 JavaScript 框架。推荐阅读，从中可以了解为什么会有这些库和框架，以及他们都是为了解什么而生的？

所以，既然每个框架都会被历史所代替，前端开发者应该如何保持竞争力？

> https://frontendmastery.com/posts/the-new-wave-of-javascript-web-frameworks/

📒 TypeScript 4.9 satisfies

satisfies 是 TypeScript 4.9 新引入的操作符，用于只做校验但不改变表达式的类型结果。通常用于 Object 声明，因为既需要保留每个属性的类型，又需要做 key 值校验。

比如，

```ts
type Colors = 'red' | 'green' | 'blue';
const foo = {
  red: [1],
  green: true,
  blue: 'ok',
  black: {},
//~~~~~~~~~~ 既校验了 key，要求满足 Colors，这里的 black 会抛错
} satisfies Record<Colors, unknown>;

// 又让每个属性拥有完整类型
foo.red.at(0);
foo.blue.startsWith('o');
```

> https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#the-satisfies-operator

📒 [Go语言中常见100问题-#11 Not using the functional options pattern](https://mp.weixin.qq.com/s/E4YJiDQbTapQGEfM8V0vJQ)

📒 [Go语言爱好者周刊：第 161 期](https://mp.weixin.qq.com/s/QBNSh2yn0RA1lZBdHcgz8w)
