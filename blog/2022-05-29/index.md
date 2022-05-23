---
slug: 5月29日内容汇总
title: 5月29日内容汇总
authors: [garfield]
tags: []
---

📒 解决 Vite 无法全局启用 css module 的问题

在这里打个断点看看：

```ts title="packages/vite/src/node/plugins/css.ts:688"
const {
  modules: modulesOptions,
  preprocessorOptions,
  devSourcemap
} = config.css || {}
const isModule = modulesOptions !== false && cssModuleRE.test(id)
```

📒 `useRef` 在列表渲染场景需要特别注意

在列表渲染的时候，不能对列表的每一项使用 `ref`，否则会出现 bug。这种情况下，应该将列表的每一项封装为组件，在组件内部使用 `ref`：

```tsx
type IProps = {
  questionList: string[];
}

const App: React.FC<IProps> = ({ questionList }) => {
  const ref = React.useRef();

  return (
    <>
      {questionList.map((item, index) => (
        <div
          classNames="list-item"
          key={index}
          ref={ref}
        >
          {item}
        </div>
      ))}
    </>
  )
}
```

📒 100 行代码实现 React 路由

> https://github.com/ashok-khanna/react-snippets/blob/main/Router.js

> [精读《react-snippets - Router 源码》](https://juejin.cn/post/7100736564979826695)

📒 如何实现多行文本省略

这个功能不需要自己实现，自己实现还可能存在兼容性问题。只需要使用 antd 的 `Typography` 组件就可以了：

```tsx
import * as React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const App: React.FC<{}> = () => {
  return (
    <Paragraph
      ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
    >
      ...
    </Paragraph>
  )
}
```

📒 [HTTP 的缓存为什么这么设计](https://juejin.cn/post/7100747501338099749)

📒 [vscode插件原理浅析与实战](https://mp.weixin.qq.com/s/4MmBSD-d-9T5-kFhcWNlTA)
