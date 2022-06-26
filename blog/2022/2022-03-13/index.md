---
slug: 3月13日内容汇总
title: 3月13日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 React 18 RC 版本发布啦，生产环境用起来！

安装最新的 React 18 RC 版本（Release Candidate候选版本）：

```bash
$ yarn add react@rc react-dom@rc
```

注意在 React 18 中新增了 `concurrent Mode` 模式，通过新增的 `createRoot` API 开启：

```jsx
import ReactDOM from 'react-dom'

// 通过 createRoot 创建 root
const root =  ReactDOM.createRoot(document.getElementById('app'))
// 调用 root 的 render 方法
root.render(<App/>)
```

> `startTransition` 特性依赖 `concurrent Mode` 模式运行

如果使用传统 legacy 模式，会按 React 17 的方式运行：

```jsx
import ReactDOM from 'react-dom'

// 通过 ReactDOM.render
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
```

React 18 主要是对自动批处理进行优化。在 React 18 之前实际上已经有批处理机制，但是只针对同步代码，如果放在 `Promise`、`setTimeout` 等异步回调中，自动批处理会失效。

```jsx
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    // 自动批处理更新
    // 注意此时 setState 是异步的
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);   
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);   

    setTimeout(() => {
      // 自动批处理失效
      // 此时 setState 是同步的
      this.setState({val: this.state.val + 1});
      console.log(this.state.val); 
      this.setState({val: this.state.val + 1};
      console.log(this.state.val);  
    }, 0);
  }
};
```

在 React 18 版本之前，上面代码的打印顺序是 0、0、2、3

React 18 版本解决了这个问题，在异步回调中更新状态也能触发自动批处理，打印的顺序是 0、0、1、1

总结一下主要有以下几个新特性：

- 新的 `ReactDOM.createRoot()` API（替换 `ReactDOM.render()`）
- 新的 `startTransition` API（用于非紧急状态更新）
- 渲染的自动批处理优化（主要解决异步回调中无法批处理的问题）
- 支持 `React.lazy` 的 全新 SSR 架构（支持 `<Suspense>` 组件）

[React 18 RC 版本发布啦，生产环境用起来！](https://mp.weixin.qq.com/s/pXlouBy7JcH8ImtQ6e-FCA)

📒 [CSS TreeShaking 原理揭秘： 手写一个 PurgeCss](https://juejin.cn/post/7040792659153125413)

📒 [「源码解析」一文吃透react-redux源码（useMemo经典源码级案例）](https://juejin.cn/user/1425383933618990)

📒 [Recoil实现原理浅析-异步请求](https://zhuanlan.zhihu.com/p/473970384)

📒 WebSocket 基础与应用系列（一）—— 抓个 WebSocket 的包

HTTP 和 WebSocket 都属于应用层协议，都是基于 TCP 来传输数据的，可以理解为对 TCP 的封装，都要遵循 TCP 的三次握手和四次挥手，只是在连接之后发送的内容（报文格式）不同，或者是断开的时间不同。

如何使用 Wireshark 抓包：

- 在 Capture 中选择本机回环网络
- 在 filter 中写入过滤条件 tcp.port == 3000

[WebSocket 基础与应用系列（一）—— 抓个 WebSocket 的包](https://mp.weixin.qq.com/s/f96Da8kCluNwv7cxW39gzg)

📒 [CSS 代码优化的12个小技巧](https://mp.weixin.qq.com/s/_g9NZnSBjGFmLaU0Y6u9aA)

📒 [JS 框架解决了什么问题](https://juejin.cn/post/7073424271904768014)

📒 [反向操作，用 Object.defineProperty 重写 @vue/reactivity](https://segmentfault.com/a/1190000041112360)

📒 antfu 大佬的 eslint 配置

> https://github.com/antfu/eslint-config

📒 antfu 大佬的 vscode 配置

> https://github.com/antfu/vscode-settings

📒 使用 tsdoc 编写规范的注释

> https://tsdoc.org/

📒 npm 包发布工具

> https://github.com/JS-DevTools/version-bump-prompt

📒 使用 pnpm 作为包管理工具

基本用法：

- `pnpm add <pkg>`：安装依赖
- `pnpm add -D <pkg>`：安装依赖到 devDependencies
- `pnpm install`：安装所有依赖
- `pnpm -r update`：递归更新每个包的依赖
- `pnpm -r update typescript@latest`：将每个包的 typescript 更新为最新版本
- `pnpm remove`：移除依赖

如何支持 monorepo 项目：https://pnpm.io/zh/workspaces

`pnpm -r` 带一个参数 `-r` 表示进行递归操作。

[pnpm 官方文档](https://pnpm.io/zh/)

[为什么 vue 源码以及生态仓库要迁移 pnpm?](https://juejin.cn/post/7038192011882528776)

📒 推荐两个打包工具

- [tsup](https://github.com/egoist/tsup)
- [unbuild](https://github.com/unjs/unbuild)

📒 seedrandom：JS 种子随机数生成器

种子随机数生成器，生成是随机的，但是每次调用生成的值是固定的：

```js
const seedrandom = require('seedrandom');
const rng = seedrandom('hello.');

console.log(rng()); // 第一次调用总是 0.9282578795792454
console.log(rng()); // 第二次调用总是 0.3752569768646784
```

> https://github.com/davidbau/seedrandom

<!-- 📒 为何给 class 继承 EventEmitter

看了一个 lsp 工程的源码，里面有个用法，`LspWsConnection` 继承了 `EventEmitter`：

```ts
class LspWsConnection extends events.EventEmitter implements ILspConnection {
  constructor() {
    super();
    // ...
  }
  
  public connect(socket: WebSocket): this {
    rpc.listen({
      webSocket: this.socket,
      logger: new ConsoleLogger(),
      onConnection: (connection: rpc.MessageConnection) => {
        // ...
        this.connection.onError((e) => {
          this.emit('error', e);
        });
      }
    });
    return this;
  }
  
  // ...
}
```

之前刚好看过 Koa 源码，里面也有类似的用法。上面的代码中，`emit` 方法并没有被定义，但却可以直接通过 `this` 访问到，这是因为 `emit` 是来自 `EventEmitter`。只要继承了 `EventEmitter`，就可以直接在当前类中访问父类定义的方法，同样还可以在实例上访问 `on` 方法用于监听事件。

此外，`connect` 方法最后返回了 `this`，返回自身实例，这是为了实现链式调用。 -->

📒 [深入Node.js的模块加载机制，手写require函数](https://juejin.cn/post/6866973719634542606)

📒 [require加载器实现原理](https://juejin.cn/post/6949385808755294245)

📒 [聊一聊前端算法面试——递归](https://juejin.cn/post/6844903942074138637)

📒 [589. N 叉树的前序遍历 :「递归」&「非递归」&「通用非递归」](https://juejin.cn/post/7073286650364690439)

📒 Million v1.5：一种快速虚拟 DOM 的实现

专注于性能和大小，压缩后小于 1KB，如果您想要一个抽象的 VDOM 实现，Million 是你构建自己的框架或库时理想的选择

> https://millionjs.org/

📒 200 行代码使用 React 实现俄罗斯方块

> https://blog.ag-grid.com/tetris-to-learn-react/

📒 [真实案例说明 TypeScript 类型体操的意义](https://juejin.cn/post/7073070819219505166)

📒 [「React 进阶」 学好这些 React 设计模式，能让你的 React 项目飞起来🛫️](https://juejin.cn/post/7007214462813863950)

📒 [「1.9W字总结」一份通俗易懂的 TS 教程，入门 + 实战！](https://juejin.cn/post/7068081327857205261)

📒 Oclif v2.5：Heroku 开源的 CLI 框架

一个用于构建 CLI 脚手架的成熟框架，无论是简单的参数解析还是很多功能指令都可以驾驭。

> https://github.com/oclif/oclif

📒 使用 Rust 与 WebAssembly 重新实现了 Node 的 URL 解析器

> https://www.yagiz.co/implementing-node-js-url-parser-in-webassembly-with-rust/

📒 PDF：从 JavaScript 到 Rust：新书免费发布

> https://github.com/vinodotdev/node-to-rust/releases/download/v1/from-javascript-to-rust.pdf

📒 Red Hat 和 IBM 团队的 Node.js “架构参考”

> https://github.com/nodeshift/nodejs-reference-architecture

📒 在 Node 环境下使用 `execa` 运行命令

> https://blog.logrocket.com/running-commands-with-execa-in-node-js/

📒 [万字长文详解从零搭建企业级 vue3 + vite2+ ts4 框架全过程](https://juejin.cn/post/7069315908597973023)

📒 [从 Linux 源码的角度解释进程](https://mp.weixin.qq.com/s/KIXV81MGIpkJUBIsBkqrgA)

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
