---
slug: 1月23日内容汇总
title: 1月23日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 Golang 如何根据指针访问对应的值

原始类型需要手动使用 `*` 操作符，复杂对象会自动解除指针引用：

```go
num := &42
fmt.Println(num) // 打印的是内存地址
fmt.Println(*num) // 42

ms := &myStruct{foo: 42}
(*ms).foo = 17
fmt.Println((*ms).foo) // 17
// 对于复杂对象，直接操作就行
ms.foo = 17
fmt.Println(ms.foo) // 17
```

📒 Golang 创建对象指针的三种方式

Golang 中所有的赋值操作都是 copy，例如原始类型、`array`、`struct`，有两种例外：`map` 和 `slice`，它们具有内部指针，在赋值的时候传递指针类型。

```go
// 第一种：对已有的值类型使用 `&` 操作符
ms := myStruct{foo: 42}
p := &ms

// 第二种：在初始化的时候使用 `&` 操作符
p := &myStruct{foo: 42}

// 第三种：使用 `new` 关键字，这种方法不能在初始化的时候进行赋值
var ms *myStruct = new(myStruct)
```

📒 如何打印 26 个字母的字符串

一行代码搞定：

```js
String.fromCharCode(...Array.from({ length: 26 }, (_, index) => 97 + index));
// 'abcdefghijklmnopqrstuvwxyz'
```

📒 [能用js实现的最终用js实现，Shell脚本也不例外](https://juejin.cn/post/7054034318594850823)

📒 [heapify：最快的 JavaScript 优先级队列库](https://github.com/luciopaiva/heapify)

📒 [easyjson：Golang 中的序列化库，比 `encoding/json` 快 4-5 倍](https://github.com/mailru/easyjson)

📒 [fast-json-stringify：比 `JSON.stringify` 快两倍](https://github.com/fastify/fast-json-stringify)

📒 [六千字详解！vue3 响应式是如何实现的？](https://juejin.cn/post/7048970987500470279)

📒 方法重载与参数默认值

为了支持可变参数，在 Java 中通过 **方法重载** 实现，通过定义多个方法签名，根据实际调用传递的参数去匹配签名。在 TypeScript 中也提供了方法重载特性，但在开发中很少用到，一般都通过 **参数默认值** 实现可变参数：

```ts
type showToast = (message, ?time=1000) => void
```

📒 项目常用工具库

- `dayjs`：与 `moment` 的 API 设计保持一样，但体积仅有 2KB；
- `qs`：解析 URL query 参数的库；
- `js-cookie`：简单、轻量的处理 cookie 的库；
- `flv.js`：bilibili 开源的 HTML5 flash 播放器，使浏览器在不借助 flash 插件的情况下可以播放 flv；
- `vConsole`：一个轻量、可拓展、针对手机网页的前端开发者调试面板；
- `animate.css`：一个跨浏览器的 css3 动画库，内置了很多典型的 css3 动画，兼容性好，使用方便；
- `lodash`：一个一致性、模块化、高性能的 JavaScript 实用工具库；

⭐️ [elf: 使用 RxJs 的响应式状态管理](https://github.com/ngneat/elf)

📒 如何防止 CSS 样式污染

- 使用命名约定
- CSS Modules
- CSS in JS

其中命名约定最流行的方式是 BEM 101。它代表了 `Block`、`Element`、`Modifier` 方法。

```css
[block]__[element]--[modifier]
/* Example */
.menu__link--blue {
  ...
}
```

📒 [现代配置指南——YAML 比 JSON 高级在哪？](https://juejin.cn/post/7040849488998563848)

📒 [前端架构师神技，三招统一团队代码风格](https://juejin.cn/post/7029512357428592648)

📒 [前端架构师的 git 功力，你有几成火候？](https://juejin.cn/post/7024043015794589727)
