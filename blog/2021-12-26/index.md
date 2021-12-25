---
slug: 12月26日内容汇总
title: 12月26日内容汇总
authors: [garfield]
tags: [Webpack, Golang, NPM, React]
---

🐛 生产环境如何 debug

- 定位错误是前端还是后端接口返回的
  - 前端代码全局搜索关键字（vscode 或者 chorme devtools 中搜索）
  - 翻阅 network 面板中的请求，使用 `⌘ + F` 打开 network search 面板进行搜索
- 如何调试混淆压缩后的 JS
  - 使用 source 面板中的 pretty-print 选项
  - 这样还是存在问题，例如很多变量名、方法名都被混淆压缩了，然后 babel 会将 ES2015+ 语法进行语法转换，代码可读性降低
- 如何在生产环境中使用 sourceMap 调试
  - 打开混淆压缩的代码，右键选择 Add source map
  - 这里需要添加一个 source map URL，可以将本地项目添加到 source 面板中的 Filesystem 中，或者启用静态资源服务
  - 添加之后就可以直接搜索项目中的源文件了
- 如何在 chrome 中修改代码并调试
  - chrome devtools 提供了 local overrides 能力，指定修改后的文件的本地保存目录，当修改完代码保存的时候，就会将修改后的文件保存到你指定的目录目录下，当再次加载页面的时候，对应的文件不再读取网络上的文件，而是读取存储在本地修改过的文件
  - 打开 sources 下的 overrides 面板，点击 select folder overrides 选择修改后的文件件存储地址，我们就可以打开文件修改，修改完成后保存，重新刷新页面后，修改后的代码就被执行到了

> [前端工程师生产环境 debugger 技巧](https://juejin.cn/post/7044678301926817806)

📒 如何在 React 中优雅使用 ECharts

初始化 ECharts 的时候不要使用 id，否则无法渲染多个组件实例：

```jsx {5,8,15}
import * as React from "react";
import * as echarts from "echarts";

const LineChart = (props) => {
  const chartRef = React.useRef();

  React.useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      // ...
    }
    chart.setOptions(option);
  }, [props])
  
  return <div ref={chartRef} className="chart"></div>
}

export default React.memo(LineChart);
```

如何让 ECharts 实现自适应，可以在窗口尺寸变化的时候，调用 chart 实例上的 `resize` 方法：

```jsx {8-10,13,17}
React.useEffect(() => {
  const chart = echarts.init(chartRef.current);
  const option = {
    // ...
  }
  chart.setOptions(option);

  const handleResize = () => {
    chart.resize();
  }

  // 绑定 resize 事件监听器
  window.addEventListener("resize", handleResize);

  return () => {
    // 组件更新或者卸载时移除监听
    window.removeEventListener("resize", handleResize);
  }
}, [props])
```

> 推荐使用 `addEventListener` 绑定事件，可以多次绑定，但是要注意及时 remove，不然会导致内存泄漏

📒 看火焰图分析调用栈的时候，看到一个 `asyncGeneratorStep` 的函数，一直没搞清楚这个在哪里用到了

![image](./POPO20211223-201441.png)

事后才想到这是 babel 语法转换引入的 helper 函数

![image](./POPO20211223-113701.png)

📒 使用 webpack-chain 对 vue-cli 默认配置进行修改

> https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans

📒 如何对 webpack 打包产物进行分析

经常需要分析打包产物的体积，看哪个包体积过大，做针对性优化。可以使用 Webpack Bundle Analyzer：

```bash
$ yarn add webpack-bundle-analyzer -D
```

在 `webpack.config.js` 中添加如下配置：

```js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

然后执行打包构建命令：

```bash
$ yarn build --report
```

> https://github.com/webpack-contrib/webpack-bundle-analyzer

📒 create-react-app 发布 5.0 版本

本次的 5.0 版本优化了快速刷新(Fast Refresh)，支持了 Tailwind，并更新了不少内部依赖库，如 Webpack 5、Jest 27 和 EsLint 8 等。

> https://github.com/facebook/create-react-app/releases/tag/v5.0.0

📒 处理你应用中的内存泄漏

作者 Stoyan 提到：“任何大小合理的应用中，都会存在一定程度的内存泄漏”。因此知道如何处理泄漏是一件很有用的事。在本文中，作者举了一个 React 中的例子，不过它的基本理念却可以运用在任何地方。

> https://calendar.perfplanet.com/2021/plugging-memory-leaks-in-your-app/

📒 kalidokit：人体动作表情解读同步

效果还是和牛逼的，真人测试。

> https://github.com/yeemachine/kalidokit

📒 xterm：把命令行搬到浏览器

> https://xtermjs.org/

📒 microdiff：轻量快速的对比库

> https://github.com/AsyncBanana/microdiff


