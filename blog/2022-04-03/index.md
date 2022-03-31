---
slug: 4月3日内容汇总
title: 4月3日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 如何提升 GitHub Page 访问速度

**打包构建**

使用 GitHub Action 作为 CI 环境，使用 Docker 进行构建，充分利用缓存，如 `package.json` 没变就不重复装包。

**部署**

打包之后将静态资源上传至阿里云 OSS（需要配置 Webpack 的 `output.publicPath`），提升页面加载速度。

HTML 页面暂时可以不上传，使用 GitHub Page 托管，这样访问速度可以保证，但是不能解决 GitHub Page 偶尔会挂的问题。还是要将 HTML 页面上传（`Cache-Control:no-cache`），此时整个网站完全托管在阿里云 OSS 上面，需要域名备案。

:::tip

如果页面需要后端服务，也可以不用服务器，直接使用 **云数据库** + **云存储** + **Serverless 云函数**，免去运维成本。

:::

📒 Golang 算法

> https://github.com/fangbinwei/algorithm-practice

📒 Golang 项目参考

> https://github.com/fangbinwei/aliyun-oss-website-action

📒 [你知道的前端优化手段](https://juejin.cn/post/6966857691381645325)

📒 函数式编程（FP）

lodash 中的 FP

在lodash的官网上，我们很容易找到一个 [function program guide](https://github.com/lodash/lodash/wiki/FP-Guide) 。在 lodash / fp 模块中提供了实用的对函数式编程友好的方法。里面的方式有以下的特性：

- 不可变
- 已柯里化（auto-curried）
- 迭代前置（iteratee-first）
- 数据后置（data-last）

假如需要将字符串进行如下转换，该如何实现呢？

> 例如：`CAN YOU FEEL MY WORLD` -> `can-you-feel-my-world`

```js
import _ from 'lodash';

const str = "CAN YOU FEEL MY WORLD";

const split = _.curry((sep, str) => _.split(str, sep));
const join = _.curry((sep, arr) => _.join(arr, sep));
const map = _.curry((fn, arr) => _.map(arr, fn));

const f = _.flow(split(' '), map(_.toLower), join('-'));

f(str); // 'can-you-feel-my-world'
```

我们在使用 lodash 时，做能很多额外的转化动作，那我们试试 fp 模块吧。

```js
import fp from 'lodash/fp';

const str = "CAN YOU FEEL MY WORLD";
const f = fp.flow(fp.split(' '), fp.map(fp.toLower), fp.join('-'));

f(str); // 'can-you-feel-my-world'
```

这种编程方式我们称之为 PointFree，它有 3 个特点：

- 不需要指明处理的数据
- 只需要合成运算过程
- 需要定义一些辅助的基本运算函数

> 注意：FP 中的 map 方法和 lodash 中的 map 方法参数的个数是不同的，FP 中的 map 方法回调函数只接受一个参数

[函数式编程（FP）](https://juejin.cn/post/7065093131233919006)

📒 [一文颠覆大众对闭包的认知](https://juejin.cn/post/7079995358624874509)

📒 [React v18 正式版发布](https://github.com/facebook/react/releases/tag/v18.0.0)

📒 [答好这5个问题，就入门Docker了](https://mp.weixin.qq.com/s/P74IVf1lOoT4n5UJNm2Bfg)

📒 手写 Webpack

[手写webpack核心原理，再也不怕面试官问我webpack原理](https://juejin.cn/post/6854573217336541192)

[100行代码实现一个组件引用次数统计插件](https://juejin.cn/post/7077484559893266439)

📒 Golang 指针几点注意

- Golang 中赋值操作、函数参数、函数返回值都是 copy
- 基本类型、slice、map 直接传递就行，对于 struct、array 需要特别注意，建议一律传递指针类型

📒 Dum：Rust 编写的 npm 脚本运行器

延续了使用不是 JavaScript 来构建 JavaScript 工具的趋势。这个奇怪的名字 “Dum”，旨在取代 `npm run` 和 `npx` 来减少任务启动时间的毫秒数。

> https://github.com/egoist/dum

📒 Node 之道：关于设计、架构与最佳实践

> https://alexkondov.com/tao-of-node/

📒 Hooks 的 ”危害性“

作者声称“每周都能找到十几个与 hooks 相关的问题”，并利用这段经历给出了一些例子和解决方法，以避免“API 的不足之处”。

> https://labs.factorialhr.com/posts/hooks-considered-harmful

📒 Dockerfile 配置

```dockerfile
# 两段式构建
# 第一段构建源码镜像
ARG PROJECT_DIR=/project
ARG BB_ENV=prod
FROM harbor.hiktest.com/public/vue:2.5-node10 as src
ARG PROJECT_DIR
ARG BB_ENV


COPY . ${PROJECT_DIR}/
WORKDIR ${PROJECT_DIR}/

RUN npm install && npm run build:${BB_ENV}


# 第二段从源码镜像中拷贝出编译的dist，做成目标镜像
FROM harbor.hiktest.com/hikvision/nginx:1.12
ARG PROJECT_DIR

ENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=src ${PROJECT_DIR}/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
```

📒 [万字长文助你上手软件领域驱动设计 DDD](https://mp.weixin.qq.com/s/BIYp9DNd_9sw5O2daiHmlA)

📒 [TypeScript 终极初学者指南](https://mp.weixin.qq.com/s/6DAyXFHIMW95FS0f3GyHpA)
