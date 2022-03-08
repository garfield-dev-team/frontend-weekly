---
slug: 3月13日内容汇总
title: 3月13日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 10 React Antipatterns to Avoid - Code This, Not That!

> https://www.youtube.com/watch?v=b0IZo2Aho9Y

📒 markdown 编辑器滚动如何实现联动

```js
const ScrollTarget = {
  NONE: "NONE",
  EDITOR: "EDITOR",
  RENDER: "RENDER",
};

let curTarget = ScrollTarget.NONE;
let timer = null;

const scrollManager = (handler) => (target) => {
  if ((curTarget = ScrollTarget.NONE)) {
    curTarget = target;
  }
  if (curTarget === target) {
    handler(target);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      curTarget = ScrollTarget.NONE;
    }, 100);
  }
};

const scrollFn = scrollManager(handleScroll);
```

📒 Webpack 的模块规范

Webpack 基于 CJS 和 ESM 规范实现了模块机制，但也不是完全基于，而是在这些模块规范基础上扩展了一套自己的 api，用于增强功能，例如：

- `require.context`
- 使用 `import` 加载 `.json` 模块

> 在 ESM 规范中 `import` 只能用于加载 JS 模块，只有 `require` 可以加载 json 模块

📒 如何将对象序列化为查询字符串

```js
const aaa = {a: 1, b: 2, c: "2333"}
```

第一种手动拼接，简单直接，一行代码搞定：

```js
const _stringify =
  (obj) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join("&");
```

还可以使用 `URLSearchParams` 对象进行拼接：

```js
const _stringify = obj => Object.entries(obj).reduce((accu, [key, val]) => {
  accu.append(key, val);
  return accu;
}, new URLSearchParams)
```

📒 「深入浅出」主流前端框架更新批处理方式

浏览器环境下，宏任务的执行并不会影响到浏览器的渲染和响应，即宏任务优先级低于页面渲染。

```js
function run(){
  setTimeout(() => {
    console.log('----宏任务执行----')
    run()
  }, 0)
}
// 通过递归调用 run 函数，让 setTimeout 宏任务反复执行
// 这种情况下 setTimeout 执行并不影响页面渲染和交互事件
run()
```

微任务会在当前 event loop 中执行完毕，会阻塞浏览器的渲染和响应，即微任务优先级高于页面渲染。

```js
function run(){
  Promise.resolve().then(() => {
    run()
  })
}
// 在这种情况下，页面直接卡死了，没有响应
run()
```

这里主要就是理解关键渲染路径，即浏览器渲染一帧会先执行脚本，再页面布局，绘制渲染。如果是宏任务，浏览器会把每一次事件回调放在下一帧渲染前执行，这样可以确保浏览器每一帧都能正常渲染。如果是微任务，浏览器在执行渲染之前会清空微任务队列，会导致一直停留在当前 event loop，相当于脚本一直在执行，如果长时间不把控制权交还给浏览器，就会影响下一帧的渲染，导致页面出现卡顿和事件响应不及时。

[「深入浅出」主流前端框架更新批处理方式](https://juejin.cn/post/7072156913789566989)
