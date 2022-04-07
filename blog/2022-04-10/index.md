---
slug: 4月10日内容汇总
title: 4月10日内容汇总
authors: [garfield]
tags: []
---

📒 [如何在项目中用好 TypeScript](https://juejin.cn/post/7058868160706904078)

📒 Golang 和 JS 创建对象方式对比

Golang 与 JS 创建对象非常类似，Golang 在创建对象的时候需要定义 schema 进行类型约束：

```go
type Person struct {
  Name    string
  Age     int
  Sex     bool
}

person := Person{
  Name: "dbydm",
  Age: 12,
  Sex: true,
}
```

而 JS 不需要 schema 约束：

```js
const person = {
  name: "dbydm",
  age: 12,
  sex: true
}
```

Golang 创建对象数组：

```go
list := []*Person{
  &Person{
    Name: "dbydm",
    Age: 12,
    Sex: true,
  },
  &Person{
    Name: "dm",
    Age: 2333,
    Sex: false,
  },
}
```

JS 创建对象数组：

```js
const list = [
  {
    name: "dbydm",
    age: 12,
    sex: true
  },
  {
    name: "dm",
    age: 2333,
    sex: false
  }
]
```

📒 Node.js 常见的系统信号

- SIGHUP：不通过 ctrl+c 停止进程，而是直接关闭命令行终端，会触发该信号
- SIGINT：按下 ctrl+c 停止进程时触发；pm2 重启或者停止子进程时，也会向子进程发送该信号
- SIGTERM：一般用于通知进程优雅退出，如 k8s 删除 pod 时，就会向 pod 发送 SIGTERM 信号，pod 可以在超时时间内（默认 30s）做一些退出清理动作
- SIGBREAK：在 window 系统上，按下 ctrl+break 会触发该信号
- SIGKILL：强制退出进程，进程无法做任何清理动作，执行命令 kill -9 pid，进程会收到该信号。k8s 删除 pod 时，如果超过 30s，pod 还没退出，k8s 会向 pod 发送 SIGKILL 信号，立即退出 pod 进程；pm2 在重启或者停止进程时，如果超过 1.6s，进程还没退出，也会发送 SIGKILL 信号

📒 [2022 年，Babel vs TypeScript，谁更适合代码编译](https://mp.weixin.qq.com/s/JCIyV-_VfQ9iScd_xOuP8g)

📒 React 常用状态管理库

- Redux
- Mobx
- Recoil
- Hookstate
- Rematch
- Jotai
- Zustand

📒 [从源码理清 useEffect 第二个参数是怎么处理的](https://juejin.cn/post/7083230365027926053)

📒 [腾讯一面：CORS为什么能保障安全？为什么只对复杂请求做预检？](https://juejin.cn/post/7081539471585312805)

📒 如何在 Node 环境使用 ESM 模块规范

首先明确一点，Node 环境并非不支持 ESM 规范，只是没有启用而已，默认使用 CJS 规范，可通过如下方式启用：

- 单文件使用 ESM 规范，可以将该文件后缀改为 `.mjs`；
- 整个工程使用 ESM 规范，可以在 `package.json` 中配置 `"type": "module"`；

假如不想通过上述方式启用，还有一些方法：

- 通过 Webpack 等打包工具支持 ESM 模块（Webpack 默认使用 `web` 环境构建，需要配置 `target: "node"` 避免打包 Node 内置模块）；
- 还可以使用 `ts-node`、`jiti` 等 runtime 支持 ESM 模块（内部使用 `tsc` 或者 `babel` 进行编译）；


📒 如何生成随机 ID

一种是直接使用 `Math.random()`：

```js
const randomId = () => Math.random().toString().slice(2, 8);
```

另一种是使用查表的方式：

```js
// 生成 [0..9] 的数组
const nums = Array.from({ length: 10 }, (_, index) => index);

// 从 nums 数组中随机选取元素
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomId = () => Array.from({ length: 6 }, () => sample(nums)).join("");
```

📒 跨域如何携带 Cookie

- 如果通过网关层代理（例如 nginx）则不用担心，对于浏览器来说实际上并没有跨域，可正常携带 Cookie
- 如果通过 CORS 跨域，浏览器默认不会携带 Cookie，此时有两种方案：
  - 在请求头中添加 `Authorization` 字段发送 Cookie（在 axios 中配置请求拦截添加）
  - 后端响应头添加 `Access-Control-Allow-Credentials`，前端发送请求时配置 `xhr.withCredentials = true`
