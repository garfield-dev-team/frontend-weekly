---
slug: 10月9日内容汇总
title: 10月9日内容汇总
authors: [garfield]
tags: []
---

📒 [看了 web.dev 的 631 篇博客，我总结了这些内容](https://mp.weixin.qq.com/s/tft9YCVBlrEdsmfsihaRxA)

📒 [Go开源库、大项目的公共包，是这么用建造者模式的](https://mp.weixin.qq.com/s/Uu3EAWpRO9pSbg1F1DLa_w)

📒 [【第2747期】Islands Architecture（上）](https://mp.weixin.qq.com/s/Npid7nvqo5u9Jch83I4V1w)

📒 [Go语言中常见100问题-#13 Creating utility packages](https://mp.weixin.qq.com/s/W6JFmMx3qAVShwgt4F2iEA)

📒 [快速在你的vue/react应用中实现ssr(服务端渲染)](https://mp.weixin.qq.com/s/XLEIcEywjald9Df0hJYwYw)

📒 [探究 Go 源码中 panic & recover 有哪些坑](https://mp.weixin.qq.com/s/dN9G4Tnt9HgVqlNh73HNUQ)

📒 [抖音二面：为什么模块循环依赖不会死循环？CommonJS和ES Module的处理不同](https://mp.weixin.qq.com/s/t-TUAzL0q0oK7HsDVQRNMw)

📒 [Go语言中常见100问题-#12 Project misorganization](https://mp.weixin.qq.com/s/epK_0yn_EPIWJjz9xmddcA)

📒 [Go 的 IO 流怎么并发？小技巧分享](https://mp.weixin.qq.com/s/wNBkC-X1FMPuHBX1P_DXbQ)

📒 [构建 webpack5 知识体系【近万字总结】](https://mp.weixin.qq.com/s/Vhd2xO4SqU9BxmTUO-2Gcg)

📒 如何实现卡片滚动效果

实现一个横向卡片滚动的效果，有两个需求：

- 需要有滚动条，这样可以支持有触摸板的设备（即不能通过 `overflow: hidden;` 加上 `transform: translateX();` 或者相对定位偏移实现）
- 还要提供左右切换的按钮，这样便于鼠标操作，同时点击需要过渡动画

根据第一点就可以确定，滚动的实现是父容器设置 `overflow-x: auto;` 实现的。那怎么实现第二个需求呢？

观察一下 ahooks 的 `useInfiniteScroll` 源码，控制滚动的核心就是 `scrollTop`、`scrollHeight`、`clientHeight` 这几个参数：

```tsx title="packages/hooks/src/useInfiniteScroll/index.tsx:81"
// 滚动触发的回调函数
const scrollMethod = () => {
  const el = getTargetElement(target);
  if (!el) {
    return;
  }

  const scrollTop = getScrollTop(el);       // 滚动的距离，该参数值可以动态修改
  const scrollHeight = getScrollHeight(el); // 滚动内容实际的高度，该参数值只读
  const clientHeight = getClientHeight(el); // 外部滚动容器的高度，该参数值只读

  if (scrollHeight - scrollTop <= clientHeight + threshold) {
    loadMore();
  }
};

// 绑定滚动事件监听器
useEventListener(
  'scroll',
  () => {
    if (loading || loadingMore) {
      return;
    }
    scrollMethod();
  },
  { target },
);
```

> https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useInfiniteScroll/index.tsx

那么在卡片滚动的需求中，对应的参数值为 `scrollLeft`、`scrollWidth`、`clientWidth`。只要 `scrollLeft + clientWidth < scrollWidth`，就可以继续向右滚动：

```ts
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMemorizedFn } from "ahooks";

export const useCarouselScroll = <T extends HTMLElement>({
  target,
  customWidth,
}: {
  target: React.MutableRefObject<T>;
  customWidth?: number;
}) => {
  const [enablePrev, setEnablePrev] = useState(false);
  const [enableNext, setEnableNext] = useState(false);

  const { scrollLeft, clientWidth, scrollWidth } = target.current;
  const threshold = customWidth || clientWidth; // 一次滚动的距离

  useEffect(() => {
    setEnablePrev(scrollLeft > 0);
    setEnableNext(scrollLeft + clientWidth < scrollWidth);
  }, []);

  const prev = () => {
    if (enablePrev) {
      if (threshold < scrollLeft) {
        // 可以滚动一屏的距离
        target.current.scrollLeft -= threshold;
      } else {
        // 滚动不足一屏距离
        target.current.scrollLeft -= scrollLeft;
        setEnablePrev(false);
      }

      setEnableNext(true);
    }
  };

  const next = () => {
    if (enableNext) {
      if (scrollLeft + clientWidth + threshold < scrollWidth) {
        // 可以滚动一屏的距离
        target.current.scrollLeft += threshold;
      } else {
        // 滚动不足一屏距离
        target.current.scrollLeft += (scrollWidth - scrollLeft - clientWidth);
        setEnableNext(false);
      }

      setEnablePrev(true);
    }
  };

  return {
    enablePrev,
    enableNext,
    prev: useMemorizedFn(prev),
    next: useMemorizedFn(next),
  };
};
```

过渡动画的实现就很简单了，一行 CSS 代码搞定：

```css
scroll-behavior: smooth;
```

📒 Next.js prefetch 策略

很多全栈框架，例如 Next.js 都会做 prefetch 预加载 chunk。Next.js 提供了一个 `<Link />` 组件，可以实现 client-side route transitions，同时这个 `<Link />` 还具有 prefetch 功能：

> Any `<Link />` that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using Static Generation will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.

参考一下 `<Link />` 源码实现：

https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx#L205

📒 [【一库】yalc: 可能是最好的前端link调试方案（已经非常谦虚了）](https://juejin.cn/post/7033400734746066957)

📒 [使用antv/G2生态半年有感](https://juejin.cn/post/7043068238539784206)

📒 [Go：符号表是什么？如何使用？](https://mp.weixin.qq.com/s/nH0v9wYe64--1HT_QJcKag)

📒 Dracula UI

刚开源，特点如下。

1、**为黑暗模式而建**。大多数模板都是使用浅色的，后来才改成深色的。深色主题不应该是一个事后的想法，它们应该是一个首要任务。

2、**设计师友好**。通过使用一个高度可配置的设计系统，加快原型设计阶段。通过利用精心制作的Figma文件，轻松进行合作。

3、**友好的开发者体验**。不用担心类名，只需使用 Visual Studio 的代码片段。你可以利用自动完成的优势，也可以从你的代码编辑器中直接访问整个文档。

https://ui.draculatheme.com/

📒 React 18 快在哪

主要是 3 点。

1、由于 React 18 有 Automatic Batching，多个 setState 只会触发一次渲染，而在 18 之前，setState 几次就会渲染几次
2、React 18 引入了新的服务器渲染架构，会带来显著的性能提升，请检查你的框架是否支持
3、React 18 引入了用于把状态更新标记为可终端的 startTransition，虽然不能让页面变快，但如果用户在可中断的状态更新中点击，会让你的应用更具有响应性

https://www.reddit.com/r/reactjs/comments/xmr9tg/comment/ippsuin/

📒 再见 useEvent

useEvent 原计划解两个问题，1）渲染优化，2）useEffect 重新触发问题。但是发现没办法一下子做两件事。于是 useEvent RFC 废弃，这两个问题会拆开了来解。渲染优化问题倾向用 React Forgot 解，useEffect 重新触发问题会通过另一个专门解此问题的 RFC 来解，命名上应该不再会用 useEvent。

https://github.com/reactjs/rfcs/pull/220#issuecomment-1259938816

📒 Umi x Valtio

Umi 在 4.0.23 中加入了 Valtio 插件。这是在大量调研之后，基于中台项目的场景做的决定，使用 Valtio 作为下一代的数据流。

为啥是 valtio？

valtio 的特点是外部多 Store + 基于 Proxy。1）个人用不惯 jotai 和 recoil 这种 react 内部原子化的数据流方案，感觉和被 redux 培养起来的心智模型有冲突，所以会更倾向于外部 Store 一些，2）由于场景是中后台，对于兼容性的容忍度比较高，比如不用兼容 IE11，所以完全可以用基于 Proxy 的数据流方案，这类数据流方案在更新数据和读取数据时都更简单。

为啥不是 zustand？

1、zustand 和 valtio 是同一个作者写的，功能覆盖上其实比较类似，最大的区别是 valtio 基于 proxy 而 zustand 不是。个人有几个方面的考虑，1）更新数据，2）读取数据，3）类型提示。

2、更新数据的方式更符合人性，比如可以直接 `state.todos['321'].completed = true`，而不用 `setState(todos => ({ …todos, 321: { …todos['321'], completed: true } }))`。当然，这一点非 proxy 方案可基于 immer 实现和 proxy 方案类似的操作。

3、读取数据默认高性能，无需 selector。非 proxy 方案比如 react-redux 和 zustand 为了性能优化，避免不必要的 re-render，通常会通过 selector 选择 store 的一部分，这会带来不必要的心智负担。基于 Proxy 的方案是响应式的，无需 selector，默认高性能。

4、类型提示的差异主要在扩展上。valtio 用的是组合式，zustand 用的是 middleware。没具体试过 zustand 的 middleware，但个人理解，理论上 middleware 的类型提示没有 valtio 友好。比如 valtio 的 proxyWithHistory 会把数据结构改成 `{ value, history, redo, undo, … }` 这种，在类型提示上可以完美衔接。

https://umijs.org/docs/max/valtio
