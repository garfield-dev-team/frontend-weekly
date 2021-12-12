---
slug: 12月12日内容汇总
title: 12月12日内容汇总
authors: [garfield]
tags: [TypeScript, React, Node.js, CSS in JS]
---

📒 优雅获取 `package.json` 文件

这里需要注意一个问题，在 ES module 规范下无法直接引入 JSON 文件，只能通过 `require` 获取：

```javascript
// ES module 模块
import React from "react";
import { debounce } from "lodash-es";
// JSON 模块只能通过 CJS 方式加载
const package = require("package.json");
```

`import` 命令目前只能用于加载 ES 模块，现在有一个提案，允许加载 JSON 模块。`import` 命令能够直接加载 JSON 模块以后，就可以像下面这样写:

```javascript
import configData from './config.json' assert { type: "json" };
console.log(configData.appName);
```

> `import` 命令导入 JSON 模块时，命令结尾的 `assert {type: "json"}` 不可缺少。这叫做导入断言，用来告诉 JavaScript 引擎，现在加载的是 JSON 模块

除此之外，还可以使用第三方库 `read-pkg` 获取，原理是通过 `fs` 模块读取 `package.json` 文件，然后反序列化为 JS 对象：

```javascript
import process from 'node:process';
import fs, {promises as fsPromises} from 'node:fs';
import path from 'node:path';
import parseJson from 'parse-json';
import normalizePackageData from 'normalize-package-data';

export async function readPackage({cwd = process.cwd(), normalize = true} = {}) {
	const filePath = path.resolve(cwd, 'package.json');
	const json = parseJson(await fsPromises.readFile(filePath, 'utf8'));

	if (normalize) {
		normalizePackageData(json);
	}

	return json;
}
```

📒 如何覆盖某些元素的浏览器默认样式

很多元素，例如 `<button>`、`<input type="text" />`、`<input type="checkbox" />` 具有浏览器默认样式，有时候需要自己指定样式，如何覆盖浏览器默认样式，只需要下面一行代码：

```css
input {
	-webkit-appearance: none;
}
```

📒 如何让 div 按比例缩放

有时希望 div 自适应页面宽度的时候，可以按比例缩放，这种情况下可以使用 `aspect-ratio` 属性：

```css
div {
	aspect-ratio: auto 1 / 1;
}
```

推荐在 `ratio` 前面加 `auto` ，对于 input 等具有固有宽高比的替换元素将使用默认宽高比，否则就使用指定的宽高比。

> 注意 `aspect-ratio` 兼容 Chrome > 87 ，所有的 IE 浏览器都不兼容

[aspect-ratio - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio)

📒 [如何维护一个大型的 Next.js 应用](https://www.smashingmagazine.com/2021/11/maintain-large-nextjs-application/)

📒 Goober：CSS-in-JS 方案

这是一个 1 KB 大小的 CSS-in-JS 方案，可以替代 23 KB 的 styled-components 和 emotion 组合。而且如果你可以减少 goober 库 gzip 后的体积，他们还会奖励你美元。

> https://github.com/cristianbote/goober

📒 使用支持 Tree Shaking 的包

如果可以的话，应尽量使用支持 Tree Shaking 的 npm 包，例如：

- 使用 `lodash-es` 替代 `lodash` ，或者使用 `babel-plugin-lodash` 实现类似效果

📒 win10 安装 nvm-windows

下载地址：

> https://github.com/coreybutler/nvm-windows/releases

用法跟 mac 上的 nvm 类似：

```bash
# 安装 nodejs v16.13.1
$ nvm install 16.13.1

# 查看已安装的 nodejs 版本
$ nvm list

# 使用指定版本的 nodejs
$ nvm use 16.13.1

# 卸载某个版本的 nodejs
$ nvm uninstall 16.13.1
```

> 个人猜测是通过修改环境变量实现 node 版本切换

在使用的时候遇到两个问题：

1. 安装老版本 nodejs  的时候，node 安装成功，但是 npm 安装失败；
2. 使用 `nvm use` 切换 node 版本的时候报错；

第一个问题，给 nvm 配置淘宝镜像即可解决。找到 nvm 安装目录下的 `settings.txt` 文件，添加配置：

```bash
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

第二个问题，首先检查 nvm 安装路径没有中文、没有空格，然后如果问题还在，那就是权限问题，使用管理员权限打开 cmd 即可正常切换。

📒 获取 worker 线程最大并发数

通过下面的只读属性获取用户计算机的逻辑内核数：

```javascript
logicalProcessors = window.navigator.hardwareConcurrency
```

下面的代码中，为每一个逻辑内核创建一个 worker 线程，充分利用 CPU 资源：

```javascript
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker('cpuworker.js'),
    inUse: false
  };
  workerList.push(newWorker);
}
```

[Navigator.hardwareConcurrency - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency)

📒 [TypeScript类型中的逆变协变](https://juejin.cn/post/7039315081150087181)

📒 如何优雅引入 node 内置模块

在引用 node 内置模块的时候可以加 `node:` 前缀，比如：

```javascript
import util from 'node:util';
import { promisify } from 'node:util';
import { spawn, exec } from 'node:child_process';
```

通过增加前缀，可以将 node 内置模块与其他第三方模块区分开：

```javascript
import process from 'node:process';
import fs, {promises as fsPromises} from 'node:fs';
import path from 'node:path';
import parseJson from 'parse-json';
import normalizePackageData from 'normalize-package-data';
```

看到这边有同学会问，为啥 node 中可以使用 ES module，实际上现在 node 已经支持了 ES module ，只需要在 `package.json` 中设置如下字段即可：

```javascript
{
	name: "xxx",
	version: "1.0.0"
	type: "module", // 默认 commonjs
}
```

[从 vue-cli 源码中，我发现27行读取 json 文件有趣的 npm 包](https://juejin.cn/post/7037270522236764167)

📒 gradient-string: 在终端中输出漂亮的渐变色
![请添加图片描述](https://img-blog.csdnimg.cn/abe2bb16f3494809badaaa6fe3075a2a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5aSp54yr57K-54G1OTk4,size_20,color_FFFFFF,t_70,g_se,x_16)
> https://github.com/bokub/gradient-string

📒 [手写系列-实现一个铂金段位的 React](https://juejin.cn/post/6978654109893132318)
