---
slug: 2月6日内容汇总
title: 2月6日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 [很多人上来就删除的 package.json，还有这么多你不知道的](https://segmentfault.com/a/1190000039684460)

📒 React hooks 使用注意事项

惰性初始化 State：

```jsx
// React hook 会在每次组件重新渲染的时候调用
const [count, setCount] = React.useState(ExpensiveCal());

// 如果 useState 的初始值需要通过复杂计算获取，可以传入一个函数惰性初始化
// 这个函数只会在组件挂载的时候执行一次，后续更新都不会执行
const [count, setCount] = React.useState(() => ExpensiveCal());
```

不需要视图渲染的变量，不要用 `useState`：

```tsx
const App: React.FC<{}> = () => {
	// count 与视图渲染无关
	// 如果使用 useState，每次 count 变化都会触发组件重新渲染
	const [count, setCount] = React.useState(0);
	// 这里推荐使用 useRef
	const count = React.useRef(0);

	const handleClick = () => setCount(c => c + 1);

	return (
		<button onClick={handleClick}>Counter</button>
	)
}
```

函数式更新：

```jsx
const [count, setCount] = React.useState(0);

// 下面这样虽然调用了两次
// 但由于一次渲染中获取的 count 都是闭包中老的值
// 因此最终 count 还是 1
setCount(count + 1);
setCount(count + 1);

// 如果要获取到上一次更新的值，可以使用函数式更新
// 最终 count 为 2
setCount(c => c + 1);
setCount(c => c + 1);
```

`useEffect` 清除副作用：

```jsx
React.useEffect(() => {
	// ...
	return () => {
		// useEffect 的回调函数中可以返回一个函数
		// 这个函数会在组件卸载的时候执行
		// 用于清理各种事件监听器、定时器等
	}
}, []);
```

`React.useCallback` 需要配合 `React.memo` 使用，其中任意一个单独使用是没用的。

:::tip

`React.useCallback` 使用的一个场景是：

- 一个父组件中有一个复杂的自定义组件，需要传入事件处理函数作为 prop，为避免父组件渲染导致该子组件重新渲染，使用 `React.memo` 包裹一下；
- 包裹之后发现父组件重新渲染，该子组件还是会重新渲染，这是因为事件处理函数在父组件每次渲染的时候都重新生成，因而传入子组件的 prop 变化导致 `React.memo` 失效；
- 将事件处理函数用 `React.useCallback` 包裹一下，对事件处理函数进行缓存，避免每次父组件渲染都重新生成，这样父组件重新渲染就不会导致子组件重新渲染；
- 需要注意 `React.useCallback` 缓存本身也是有性能开销的，因此只有在子组件渲染比较昂贵的时候，才进行缓存处理；

:::

📒 Golang 中的包管理机制

Golang 中的包管理使用 `go.mod` 文件，可以使用下面的命令在项目根目录初始化一个 `go.mod`：

```bash
# 初始化一个 v0 或者 v1 的包
$ go mod init example.com/m
# 初始化指定版本的包
$ go mod init example.com/m/v2
```

安装依赖：

```bash
$ go get -u github.com/gin-gonic/gin
```

> `-u` 安装全局变量类似 `npm i -g cobra`

如果直接下载请求超时，可以设置镜像源：

```bash
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct
```

> 类似 `npm config set registry`

安装之后就可以看到 `go.mod` 里面多了些东西：

```go
module github.com/Jiacheng787/goexample

go 1.17

require (
	github.com/gin-gonic/gin v1.7.7
)
```

下载项目依赖：

```bash
$ go get ./...
```

[三分钟掌握Go mod常用与高级操作](https://zhuanlan.zhihu.com/p/103534192/)

📒 如何解决 CSS 兼容性问题

对于 JS 的兼容性，我们可以使用 Babel 进行语法转换以及对 API 进行 polyfill。那么对于 CSS 的兼容性如何适配呢？可以使用 PostCSS，最完善的 CSS 工程化解决方案：

- `autoprefixer`：根据 Can I Use 的数据给 CSS 属性添加厂商前缀
- `postcss-preset-env`：允许使用一些提案阶段的特性

此外还提供各种插件：

- `postcss-modules`：CSS 模块化
- `postcss-initial`：重置默认样式
- `sugarss`：支持缩进语法编写 CSS 样式

> https://github.com/postcss/postcss

📒 [How To Process Images in Node.js With Sharp](https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp#step-3-resizing-changing-image-format-and-compressing-images)

📒 字节跳动开源项目

- [IconPark - 支持多种主题、跨平台的图标库](https://github.com/bytedance/IconPark)
- [xgplayer - HTML5 视频播放器](https://github.com/bytedance/xgplayer)
- [sonic - 基于 JIT 技术的开源全场景高性能 JSON 库](https://github.com/bytedance/sonic)
- [bytemd - 字节出品的 markdown 编辑器](https://github.com/bytedance/bytemd)

📒 前端项目 babel 配置

编译一个前端项目，一般需要安装如下依赖：

- `@babel/core`：核心库
- `babel-loader`：配合 Webpack 打包场景使用
- `@babel/preset-env`：语法转换的预设插件集，同时支持 api 兼容
- `@babel/preset-react`：编译 React 的 JSX 语法
- `@babel/preset-typescript`：可选，编译 TypeScript 语法

:::tip

`@babel/core` 是核心库，里面包含：

- `@babel/parser`：一个 ast 解析器，之前叫 Babylon，基于 acorn 魔改而来，负责解析生成 ast
- `@babel/traverse`：负责通过访问者模式遍历并操作 ast 节点
- `@babel/generator`：负责根据 ast 生成代码

`babel-loader` 用于配合 Webpack 打包场景使用，如果想通过命令行的方式使用，则需要安装 `@babel/cli`

`@babel/preset-env` 的 api 兼容是通过引入 `core-js` polyfill 实现的。`core-js` 引入有多种方式，可以配置 `entry`，即在入口文件处根据根据 browserslist 配置需要适配的目标环境全量引入 polyfill，也可以配置 `usage`，根据 browserslist 配置和实际用的 api 按需引入 polyfill。`@babel/preset-env` 是通过全局污染的形式引入的，一般在前端项目中没问题，但是作为第三方库就不合适了，这时候需要使用 `@babel/plugin-transform-runtime` 通过沙箱机制引入 polyfill，这种引入方式有个缺点，无法根据 browserslist 配置动态调整引入的 polyfill。

`@babel/preset-typescript` 实际上就是简单删除掉类型注解。因为 Babel 是单文件处理，不可能进行类型检查，类型检查可以交给 VSCode 插件，或者 `ForkTsCheckerWebpackPlugin` 单独起一个进程进行类型检查，这时候 tsc 的作用就是类型检查器，需要配置 `"noEmit": true`。

:::

📒 写文章集合

- Redux 在完善下，增加 UI-binding
- 深入源码分析 Koa 中间件与洋葱圈模型
- 前端项目的 env 文件是如何被加载的
- Webpack 打包的图片和字体的哈希是如何生成的 - file-loader 源码分析
