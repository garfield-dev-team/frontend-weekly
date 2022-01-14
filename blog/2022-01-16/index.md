---
slug: 1月16日内容汇总
title: 1月16日内容汇总
authors: [garfield]
tags: [Babel, Rollup, VS Code]
---

📒 实现一个 WebAssembily 版本的 Python 解释器

- wasm 可以把代码编译出来，但是能否执行
- 如果 Python 代码涉及系统调用，例如代码中经常需要进行文件 IO，这种情况下 wasm 能否实现

> https://github.com/pyodide/pyodide

📒 Webpack5 配置了 `devServer.hot = true` 是否会自动配置 `HotModuleReplacementPlugin`

📒 看下 axios 源码，响应拦截中第一个回调 `reject` 能否进入第二个回调

📒 Webpack 中 loader 处理流程

有点像责任链模式，上一个函数的返回值会作为参数传入下一个函数。需要注意使用 `call` 方法让每个 loader 内部可以获取到 loaderAPI：

```js
import { readFileSync } from 'node:fs';

const loaders = [];
const raw = readFileSync('xxx');

const loaderAPI = {
  emitFile: () => {},
}

const parsed = loaders.reduce(
  (accu, cur) => cur.call(loaderAPI, accu),
  raw
);
```

📒 字体文件的 hash 是如何生成的，`file-loader` 中如何处理的

[webpack 源码解析:file-loader 和 url-loader](https://www.cnblogs.com/shiyunfront/articles/8944940.html)
[file-loader - GitHub](https://github.com/webpack-contrib/file-loader/blob/master/src/index.js)
[loader-utils - GitHub](https://github.com/webpack/loader-utils/blob/master/lib/interpolateName.js)

📒 Golang 中的 `struct`

注意 `struct` 与 `array`、`map` 不同，下面这个操作实际上是完整 copy 了一个对象，内存开销较大：

```go {15}
package main

import (
  "fmt"
)

type Doctor struct {
  name string
}

func main() {
  aDoctor := Doctor{
    name: "John Pertwee"
  }
  anotherDoctor := aDoctor
  anotherDoctor.name = "Tom Baker"
  fmt.Println(aDoctor) // {John Pertwee}
  fmt.Println(anotherDoctor) // {Tom Baker}
}
```

可以使用 `&` 操作符拿到对象的指针进行赋值，这时候两边就是联动的：

```go {5}
func main() {
  aDoctor := Doctor{
    name: "John Pertwee"
  }
  anotherDoctor := &aDoctor
  anotherDoctor.name = "Tom Baker"
  fmt.Println(aDoctor) // {Tom Baker}
  fmt.Println(anotherDoctor) // &{Tom Baker}
}
```

⭐️ [2022年如何成为一名优秀的大前端Leader？](https://juejin.cn/post/7034419410706104356)

📒 GitHub 定时任务

下面的代码中，`on` 字段指定了两种触发条件，一个是代码 `push` 进仓库，另一种是定时任务，每天在国际标准时间21点（北京时间早上5点）运行。

```yaml
on:
  push:
  schedule:
    - cron: '0 21 * * *'
```

定时任务配置参考：

> https://github.com/lxchuan12/juejin-actions

另外推荐一个项目，可以使用 `curl wttr.in` 命令获取天气预报：

> https://github.com/chubin/wttr.in

📒 如何开发一个 CLI 工具

参考下尤大的项目：

```js
const templateDir = path.join(__dirname, `template-${template}`)

const write = (file, content) => {
  const targetPath = renameFiles[file]
    ? path.join(root, renameFiles[file])
    : path.join(root, file)
  if (content) {
    fs.writeFileSync(targetPath, content)
  } else {
    copy(path.join(templateDir, file), targetPath)
  }
}

const files = fs.readdirSync(templateDir)
for (const file of files.filter((f) => f !== 'package.json')) {
  write(file)
}
```

注意这里有两个文件要处理下，一个是给 `package.json` 修改包名：

```js
const pkg = require(path.join(templateDir, `package.json`))

pkg.name = packageName || targetDir

write('package.json', JSON.stringify(pkg, null, 2))
```

还有是 `.gitignore` 修改文件名：

```js
const renameFiles = {
  _gitignore: '.gitignore'
}
```

> https://github.com/vitejs/vite/blob/main/packages/create-vite/index.js

📒 命令行工具开发技术栈

- `chalk/kolorist`
- `inquirer/prompts`
- `ora`
- `semver`
- `pkg-install`
- `ncp`
- `commander/yargs`
- `execa`（个人觉得 Node 原生 `child_process` 的 `exec` 就够用了）

:::tip

网上一些文章也都实现了递归拷贝文件，但是是否考虑到了跨平台，可以看下 `ncp` 的实现

https://github.com/AvianFlu/ncp

Node.js 原生的 `child_process.exec` 也可以执行命令，看下 `execa` 是如何支持 Promise 的

https://github.com/sindresorhus/execa

:::

现在开发已经不需要自己组装 pick 了，`common-bin`、`oclif` 这两个，约定式路由。

另外脚手架工具，可以看看 `plop`和 `yeoman`，一个是基于 `action` 和 `inquirer` 的生态，一个是内核加自定义模板项目。

其实最简单的脚手架，不是通过cli界面选择模板，然后到 github 上去下载对应的模板文件，而是 `start-kit` 。

> https://github.com/digipolisantwerp/starter-kit-ui_app_nodejs

📒 [「前端基建」探索不同项目场景下Babel最佳实践方案](https://juejin.cn/post/7051355444341637128)

📒 [说不清rollup能输出哪6种格式😥差点被鄙视](https://juejin.cn/post/7051236803344334862)

📒 [【手把手】学会VS Code"任务"神技，成为项目组最靓的崽！](https://juejin.cn/post/7035448197883363359)
