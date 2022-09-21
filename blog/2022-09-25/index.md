---
slug: 9月25日内容汇总
title: 9月25日内容汇总
authors: [garfield]
tags: []
---

⭐️ [如何保障 MySQL 和 Redis 的数据一致性](https://mp.weixin.qq.com/s/WzAVtmFmEMhY-MiNEgQ0fw)

📒 [electron-vite：新一代 Electron 开发利器，带你轻松玩转 Electron](https://mp.weixin.qq.com/s/C4WNRM3fY2ezpE1qzjNhvA)

📒 [create-vite 原理揭秘](https://mp.weixin.qq.com/s/eqIcLlh3a4TUwx3lk2qLYA)

📒 [字节二面：Redis 的大 Key 对持久化有什么影响](https://mp.weixin.qq.com/s/EMiEoq9HYTHi8TLEs7N8EQ)

📒 [美团三面：一直追问我， MySQL 幻读被彻底解决了吗](https://mp.weixin.qq.com/s/VWEKgnOWVnufz5pfvRjUWw)

⭐️ [Go学设计模式--原型模式的考查点和使用推荐](https://mp.weixin.qq.com/s/y1qHsQNR7EWeDU5g60Loqg)

📒 [使用viper实现yaml配置文件的合并](https://mp.weixin.qq.com/s/sqq8PNBvhPDmD8T5W4h65g)

📒 [「Go工具箱」一个简单、易用、安全的类型转换工具](https://mp.weixin.qq.com/s/p_Ne6m5TC4oQCZ5_tZDWKA)

📒 [探索组件在线预览和调试](https://mp.weixin.qq.com/s/ydbuD9y8Uo-MZgOlxRZB0Q)

📒 Golang 面试相关

LeetCode 刷题指南

https://www.yuque.com/go-interview/set/xq5788

面试题库收集

https://www.yuque.com/go-interview/set/interview-index

📒 [已入字节的大佬各厂三年Go面经](https://mp.weixin.qq.com/s/VKPSqS50Un29x30KIgB0tA)

📒 [掌握了这一招，Go的多版本管理不用愁](https://mp.weixin.qq.com/s/Vl__2DCW7NBRf21y-FdNZw)

📒 [react-spring 如何用旁路设计赋能前端交互](https://mp.weixin.qq.com/s/QOxT81kOwJL2MPy1M1rbYw)

📒 [解读 State of CSS 2022，让你早点下班的新特性](https://mp.weixin.qq.com/s/ACP5BQIsJnBfno3O5eaK1g)

📒 [从useEffect看React、Vue设计理念的不同](https://mp.weixin.qq.com/s/jHBbKUmF6Ka9nQwr5kqOAQ)

📒 [前端食堂技术周刊第 53 期：React Router 6.4、VS Code August 2022、2022 Google 谷歌开发者大会、Meta 开源](https://juejin.cn/post/7145061375994724389)

📒 [语雀桌面端技术架构实践](https://mp.weixin.qq.com/s/Up9rUP6BW2BVCrksi52GDw)

📒 [package.json 配置完全解读](https://mp.weixin.qq.com/s/vg1hZo8lwIyhkoLSJ80uqg)

📒 函数组合

函数组合有很多场景，这篇文章介绍了如何把他用在 React 项目中，换一种代码组织方式，让代码更简洁、优雅和可扩展。

假如你有一个项目，项目里有这样的需求，1）检查用户登录状态，2）特性检测按需渲染，3）埋点日志需求，4）layout 渲染。你可能会这么写。

```tsx
const App = () => {
  useEffect(() => {
    if (!user.isLogin) signIn() 
  }, []);

  useEffect(() => {
    log({ pageName, uid })
  }, []);

  return user.isAdmin
    ? <AdminComponent />
    : <>{ features.includes('foo') && <Foo /> }<Conent /></>;
}
```

这里的 问题是，如果有多个组件都需要类似的逻辑，你可能就要复制粘贴了。解是用 Provider + HOC + Composition + Currying。

```tsx
const App = withProviders({ showFooter: false })(() => {
  return <Content />;
});
```

withProviders 如下。

```tsx
const withProviders = (options) =>
  compose(
    withUser,
    withFeatures,
    withLogger,
    withLayout(options)
  );
```

withLogger 如下。

```tsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => { log({ pageName, uid }) }, []);
    return <WrappedComponent {...props} />;
  };
}
```

https://medium.com/javascript-scene/why-every-react-developer-should-learn-function-composition-23f41d4db3b1

📒 初级程序员 vs. 高级程序员

要分别初级程序员和高级程序员，其中一点是看他们关注的是「软件」还是「系统」。

初级工程师关心编写软件的问题。 他们重视代码质量，采用最佳实践，努力采用最先进的技术。他们在学习新技术方面投入了大量时间。对他们来说，最终的目标是创建优雅的、可执行的、可维护的软件。

高级工程师关心的是建立系统。 对他们来说，创建软件只是其中的一个步骤。首先，他们会质疑这个软件是否需要被建造。他们会问它能解决什么问题，为什么要解决这些问题。他们询问谁将会使用这个软件，在什么规模上使用。他们考虑软件将在哪里运行，以及他们将如何监测它是否正常工作。他们还决定如何衡量该软件是否真正解决了它应该解决的问题。

https://codewithstyle.info/software-vs-systems/

📒 React Router 6.4

React Router 发布 6.4，大量新功能，包括数据加载/突变/重新验证、错误/中断/竞争条件处理以及支持 Suspense 的加载/骨架 UI 等。

1、路由创建方式变更，之前用 BrowserRouter + Routes，现在改用 createBrowserRouter 创建路由和 RouterProvider 渲染路由。

```tsx
<RouterProvider router={createBrowserRouter([
  { path: '/', element: <Root /> }
])} />
```

2、路由级的数据流，基于 loader + action + Form，在路由配置中声明 loader 和 action，然后如下使用即可。

处理数据加载。

```tsx
// 声明数据
export async function loader() {}
// 使用数据
useLoaderData();
```

处理数据提交。

```tsx
// 使用定制表单元素
<Form />
// 处理表单提交
export async function action() {}
```

3、延迟数据加载方案，基于 defer + useAsyncValue/Await。由于考虑到 CLS（Content Layout Shift），默认没有做延迟数据加载，开发者可以手动开启。用哪种方式其实是需要权衡的，各有利弊。

```tsx
// 1、loader 里延迟返回
export async function loader() {
  return defer({ count: 0 });
}

// 2、渲染时用 Await 延迟渲染，不阻塞 Suspense 的瀑布流
<Await resolve={data.count} errorElement={<p>error load count</p>}>
  {(count) => <p>{count}</p>}
</Await>
```

4、ScrollRestoration 可以模拟浏览器在加载器完成后位置变化时的滚动恢复，以确保滚动位置恢复到正确的位置，甚至跨域。

```tsx
<ScrollRestoration />
```

📒 [Go 代码风格没人喜欢？不对，Gofmt 是所有人的最爱...](https://mp.weixin.qq.com/s/XqFh2K3KXVu-845MPmKrTg)

⭐️ [程序里对象很深很大，可以用这个设计模式缓解一下](https://mp.weixin.qq.com/s/MgOyG99mUvOTlsxQVQZGUw)

📒 [「Go工具箱」推荐一个变量调试神器：go-spew](https://mp.weixin.qq.com/s/kd-8GT5zDU1OrqncPyD1cw)

📒 [【第2734期】JavaScript & Node.js 的测试最佳实践 - 第二章：后端测试](https://mp.weixin.qq.com/s/2OYeWCCCkJWR4eIedU9s7Q)

📒 [Go语言爱好者周刊：第 160 期 — 竟然这么多人不理解 map 的 make 含义](https://mp.weixin.qq.com/s/wcuW0wsJ00La_3Q1dgDLqw)

📒 [简单的 redis get 为什么也会有秒级的延迟](https://mp.weixin.qq.com/s/3XEYWsK1TcvYvMYDzbMETA)

📒 [golang net/url 路径穿越漏洞](https://mp.weixin.qq.com/s/LZVYsjY5Wbg5m4JhOjtfoQ)
