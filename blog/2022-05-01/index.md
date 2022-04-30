---
slug: 5月1日内容汇总
title: 5月1日内容汇总
authors: [garfield]
tags: []
---

📒 [实现一个 Code Pen：（三）10 行代码实现代码格式化](https://juejin.cn/post/7092283403277434893)

📒 [写给前端的 K8S 上手指南](https://zhuanlan.zhihu.com/p/445217118)

📒 [Web页面全链路性能优化指南](https://mp.weixin.qq.com/s/wJxj5QbOHwH9cKmqU5eSQw)

📒 [系统困境与软件复杂度，为什么我们的系统会如此复杂](https://mp.weixin.qq.com/s/3PSFMt9cQ1ZCoYQrdOCM6Q)

📒 [【第2602期】设置 NPM Registry 的 4 种姿势](https://mp.weixin.qq.com/s/MYLi4mSgoi5KXj4-_OgT3A)

📒 [前端算法系统练习: 栈和队列篇](https://mp.weixin.qq.com/s/tWbeOTx0JpiZOD0YaC1P2A)

📒 [怎么解决MySQL死锁问题的](https://juejin.cn/post/6974262139062059045)

📒 [【第2598期】ServiceWorker 缓存与 HTTP 缓存](https://mp.weixin.qq.com/s/OlOMm20cSRaQESiZ_DC7mQ)

📒 [Monorepo 的过去、现在、和未来](https://mp.weixin.qq.com/s/U00My70CqPtmCE1MbSNdFA)

📒 [【第2597期】如何用JavaScript实现一门编程语言 - AST](https://mp.weixin.qq.com/s/JMl8LOsNYlttxO-KyVK-Vw)

📒 [TS 类型体操：索引类型的映射再映射](https://mp.weixin.qq.com/s/n6kjr2IFn1fb-_-DFUnD1Q)

📒 [ESBuild & SWC浅谈: 新一代构建工具](https://mp.weixin.qq.com/s/9VaUq9FOm2_nKNCGaH-7rw)

📒 InnoDB原理篇：如何用好索引

我们都知道 InnoDB 索引结构是 B+ 树组织的，但是根据 **数据存储形式不同** 可以分为两类，分别是 **聚簇索引** 与 **二级索引**。

其实聚簇索引的本质就是主键索引。因为每张表只能拥有一个主键字段，所以每张表只有一个聚簇索引。另外聚簇索引还有一个特点，表的数据和主键是一起存储的，它的叶子节点存放的是整张表的行数据（树的最后一层），叶子节点又称为数据页。

> 很简单记住一句话：**找到了索引就找到了行数据，那么这个索引就是聚簇索引**

知道了聚簇索引，再来看看二级索引是什么，简单概括，**除主键索引以外的索引，都是二级索引**，像我们平时建立的联合索引、前缀索引、唯一索引等。

二级索引的叶子节点存储的是索引值 + 主键 `id`。所以二级索引与聚簇索引的区别在于 **叶子节点是否存放整行记录**。

> 也就意味着，仅仅靠二级索引无法拿到完整行数据，只能拿到 `id` 信息

假设，我们有一个主键列为 `id` 的表，表中有字段 `k`，`k` 上有索引。

我们执行一条主键查询语句 `select * from T where id = 100`，只需要搜索 `id` 聚簇索引树就能查询整行数据。

接着再执行一条 `select * from T where k = 1`，此时要搜索 `k` 的二级索引树，具体过程如下：

- 在 `k` 索引树上找 `k = 1` 的记录，取得 `id = 100`
- 再到聚簇索引树查 `id = 100` 对应的行数据
- 回到 `k` 索引树取下一个值 `k = 2`，不满足条件，循环结束

上述过程中，回到聚簇索引树搜索的过程，我们称为 **回表**。

> 也就是说，基于二级索引的查询需要多扫描一棵聚簇索引树，因此在开发中尽量使用主键查询

可是有时候我们确实需要使用二级索引查询，有没有办法避免回表呢？

办法是有的，但需要结合业务场景来使用，比如本次查询只返回 `id` 值，查询语句可以这样写 `select id from T where k = 1`，过程如下

- 在 `k` 索引树上找 `k = 1` 的记录，取得 `id = 100`
- 返回 `id` 值
- 回到 `k` 索引树取下一个值 `k = 2`，不满足条件，循环结束

在这个查询中，索引 `k` 已经覆盖了我们的查询需求，不需要回表，这个操作称为**覆盖索引**。

> 由于覆盖索引可以减少树的搜索次数，显著提升查询性能，所以使用覆盖索引是一个常用的性能优化手段

假设现在有一个高频的业务场景，根据 `k` 查询，返回 `name`，我们可以把 `k` 索引变更成 `k` 与 `name` 的联合索引。

[InnoDB原理篇：如何用好索引](https://mp.weixin.qq.com/s/yaza2iQ93BCvOW-uduS-yw)

[InnoDB原理篇：聊聊数据页变成索引这件事](https://mp.weixin.qq.com/s?__biz=MzAwMDg2OTAxNg==&mid=2652055534&idx=1&sn=6bce05f55b7a290a16e71d3885bfbaf0&scene=21#wechat_redirect)

📒 一分钟看懂TCP粘包拆包

TCP 是一个面向「流」的协议，所谓流就是没有界限的一长串二进制数据。在实际的传输过程中，TCP 会根据网络情况将数据包进行拆分或者拼装，如果业务没有定义一个明确的界限规则，在应用层的业务上就会出现粘包拆包的现象。

针对 TCP 粘包拆包的现象，常见的解决思路如下：

1. 发送端给每个数据包 **添加包首部**。
2. 发送端将每个数据包 **封装为固定长度**。
3. 可以在数据包之间 **设置边界**。

为了解决粘包拆包，Netty 框架也提供了很多开箱即用的编解码器，极大简化网络编程解决此类问题的难度。

[一分钟看懂TCP粘包拆包](https://mp.weixin.qq.com/s/5lfw37ElEwG8aTeJvPbdeg)

📒 [什么是有区分度的好的面试问题，来看看字节跳动这道实现异步 sum 的问题](https://juejin.cn/post/7091486488201805861)

📒 [【前端部署第三篇】通过 docker 学习 nginx 配置，及基于 nginx 部署最简前端项目](https://juejin.cn/post/7091492741678366734)

📒 使用 CRA 搭建 React + TS 项目

[都 2022 年了，手动搭建 React 开发环境很难吗](https://juejin.cn/post/7087811040591675428)

[会写 TypeScript 但你真的会 TS 编译配置吗](https://juejin.cn/post/7039583726375796749)

[用 Redux 做状态管理，真的很简单🦆](https://juejin.cn/post/7071066976830881823)

[「React进阶」react-router v6 通关指南](https://juejin.cn/post/7069555976717729805)

📒 Usage With TypeScript - Redux Toolkit

https://redux-toolkit.js.org/usage/usage-with-typescript

📒 全局状态和状态管理的区别

全局状态可以很简单，例如只要一个 JS 对象 `{}` 就可以实现，但是如果尝试修改全局状态的值，无法触发组件更新。

状态管理，除了具有全局状态的功能，还提供了一套发布订阅机制，即状态改变的时候通知对应组件更新。

Redux 本身其实就是全局状态，为了实现状态改变通知组件更新，还需要一个 UI-binding，即 React-redux。

📒 [浅谈V8垃圾回收机制](https://mp.weixin.qq.com/s/m_znGU_NaxveZi0Q5LSvyA)

📒 [打造 Go 语言最快的排序算法](https://mp.weixin.qq.com/s/5HqfRGqPyAhFt0krPgMHOQ)

📒 [实现一个 Codepen：（二）在 Next.js 中使用 Monaco Editor](https://juejin.cn/post/7091177467498463239)

📒 [【架构师（第十八篇）】脚手架之项目模板的安装](https://juejin.cn/post/7091079487592333349)

📒 [【前端部署第二篇】基于 docker/compose 部署一个最简单的前端项目](https://juejin.cn/post/7091103648100384804)

📒 7 段小代码，玩转Java程序常见的崩溃场景

如何排查 CPU 飙升问题，获取问题代码通常可以使用下面的方法：

1. 使用 top 命令，查找到使用 CPU 最多的某个进程，记录它的 pid。使用 Shift + P 快捷键可以按 CPU 的使用率进行排序
2. 再次使用 top 命令，加 -H 参数，查看某个进程中使用 CPU 最多的某个线程，记录线程的 ID
3. 使用 printf 函数，将十进制的 tid 转化成十六进制
4. 使用 jstack 命令，查看 Java 进程的线程栈
5. 使用 less 命令查看生成的文件，并查找刚才转化的十六进制 tid，找到发生问题的线程上下文

[7 段小代码，玩转Java程序常见的崩溃场景](https://mp.weixin.qq.com/s/YcyC1Jm4H7uGvSg3rCkDig)

📒 [看完这篇你一定能掌握Linux](https://mp.weixin.qq.com/s/ZralWEfG2WJfZ-G-x9biow)

📒 [ObjectMapper，别再像个二货一样一直new了](https://mp.weixin.qq.com/s/SHbt1jmgGaHQs1eeyJQ-qA)

📒 [\[科普\] Service Worker 入门指南](https://mp.weixin.qq.com/s/bYtTRjqQylYKO9D1jbadSA)

📒 [百行代码带你实现通过872条Promise/A+用例的Promise](https://juejin.cn/post/7065693195799265287)

📒 [前端历史项目的 Vite 迁移实践总结](https://mp.weixin.qq.com/s/kpi82Rb66bUQuA_G0hrqBw)

📒 [手写 css-modules 来深入理解它的原理](https://juejin.cn/post/7090686619253997599)

📒 在 Webpack 5 中开启懒编译（Lazy Compilation）

Webpack 5 的实验特性，可以针对多入口（Initial Chunk）和动态加载（Async Chunk）进行懒编译。开启懒编译之后，可以实现按需编译，提升启动速度，若再配合 Webpack 5 持久化缓存，则可以直接秒杀 Vite。

```js
module.exports = {
  // …
  experiments: {
    lazyCompilation: {
      imports: true,
      entries: true,
    },
  },
};
```

> 由于实验特性具有相对宽松的语义版本，可能会有重大的变更，所以你需要锁定 Webpack 的小版本号，例如 `"webpack": "~5.4.3"`，或者锁定版本号

[在 Webpack 5 中开启懒编译（Lazy Compilation）](https://juejin.cn/post/7090372816784064526)

📒 [浅谈文档的实时协同编辑](https://mp.weixin.qq.com/s/Ba-3fMQXNXqIzVTjVUrWtQ)

📒 腾讯一面：CORS为什么能保障安全？为什么只对复杂请求做预检

首先为什么要有同源策略？浏览器需要记住用户的登录状态（即登录凭证），这样用户下次访问页面就无需重复登录。这样的话，就需要有一些安全策略，否则很容易出现 CSRF 攻击等问题。如果是其他的 http client 则没有同源策略。

> CORS策略的心智模型是：所有跨域请求都是不安全的，浏览器要带上来源给服务器检验

同源策略会限制哪些行为：

- 跨域情况下获取 DOM 元素（例如跨域的 `iframe`）、localStorage、Cookie 等
- 跨域情况下发送 ajax 请求，浏览器会拒绝解析响应报文

> 注意，浏览器默认的表单提交不受同源策略限制

CORS 即跨域资源共享，这里注意 CORS 的目的不是拦截请求，反倒是为了让其能正常请求。CORS 的诞生背景就是同源策略，这是一个相当严苛的规定，它禁止了跨域的AJAX请求。但实际的开发中又有这样的需求，于是开一个口子——只要配置了CORS的对应规则，跨域请求就能正常进行。

如何配置 CORS？前端在发送请求的时候，浏览器会在请求头添加 `Origin` 字段，这样后端就能知道请求的来源，然后后端在响应头添加 `Access-Control-Allow-Origin`，这个值就是前端发送的来源地址（或者直接加 `*` 表示允许所有地址）。

跨域请求的流程，CORS把请求分成简单请求和复杂请求，划分的依据是“是否会产生副作用”。同时满足下面这两个条件的是 **简单请求**，否则就是 **非简单请求**：

- 请求方法是 HEAD/GET/POST
- 请求体的 Conent-Type 只能是 `form-urlencoded`、`form-data`、`text/plain`

对于简单请求，流程如下：

1. 浏览器发起请求，并且自动加上请求的来源 `origin` 给服务器检查；
2. 服务器返回数据，并返回检查结果，配置CORS响应头；
3. 浏览器检查CORS响应头，如果包含了当前的源则放行，反之拦截；

> 这里需要注意，浏览器是拦截响应，而不是拦截请求，跨域请求是发出去的，并且服务端做了响应，只是浏览器拦截了下来

对于复杂请求，流程如下：

1. 浏览器发起预检请求，带上请求的来源 `origin`，不包含请求体；
2. 服务器返回检查结果，配置CORS头；
3. 浏览器发起真正请求；
4. 浏览器返回数据；

> 浏览器会检查第2步中拿到的CORS头，如果没有包含当前的源，后续的第3、4步都不会进行，也就是不会发起真正请求

为什么只对复杂请求做预检？上文提到，划分简单请求和复杂请求的依据是“是否产生副作用”。这里的副作用指对 **数据库做出修改**：使用GET请求获取新闻列表，数据库中的记录不会做出改变，而使用PUT请求去修改一条记录，数据库中的记录就发生了改变。

假设网站被CSRF攻击了——黑客网站向银行的服务器发起跨域请求，并且这个银行的安全意识很弱，只要有登录凭证cookie就可以成功响应，考虑下面两种情况：

- 黑客网站发起一个GET请求，目的是查看受害用户本月的账单。银行的服务器会返回正确的数据，不过影响并不大，而且由于浏览器的拦截，最后黑客也没有拿到这份数据；
- 黑客网站发起一个PUT请求，目的是把受害用户的账户余额清零。浏览器会首先做一次预检，发现收到的响应并没有带上CORS响应头，于是真正的PUT请求不会发出；

幸好有预检机制，否则PUT请求一旦发出，黑客的攻击就成功了。

> 这种情况下，后端也需要遵循 RESTful 规范，否则要么面临攻击风险，要么会多发一次预检请求

[腾讯一面：CORS为什么能保障安全？为什么只对复杂请求做预检](https://juejin.cn/post/7081539471585312805)

[腾讯三面：Cookie的SameSite了解吧，那SameParty呢](https://juejin.cn/post/7087206796351242248)

📒 Axios 三个优点

- Promisify
- 责任链（拦截器机制）
- 适配器（同时支持浏览器和 node 环境）

📒 [深入理解 Promise 之手把手教你写一版](https://mp.weixin.qq.com/s/_gDIO6YCswAS2dICllMG0A)

📒 [2022 年 JavaScript 开发工具的生态](https://mp.weixin.qq.com/s/ckskF06PD43KHpKAGaYmRA)

📒 [自动化生成骨架屏的技术方案设计与落地](https://mp.weixin.qq.com/s/-WHafu5z-Ap4tjrbWesnmA)
