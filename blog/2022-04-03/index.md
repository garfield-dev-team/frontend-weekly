---
slug: 4月3日内容汇总
title: 4月3日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 Git 如何变基拉取代码

在本地 commit 之后，下一步一般会执行 `git pull` 合并远程分支代码。我们知道 `git pull` 相当于 `git fetch && git merge`，通过 `merge` 方式合并代码，缺点就是会导致时间线比较混乱，出现大量没用的 commit 记录，给 Code Review 带来不便。另一种方式是变基拉取：

```bash
$ git pull --rebase
```

在变基操作的时候，我们不去合并别人的代码，而是直接把我们原先的基础变掉，变成以别人修改过后的新代码为基础，把我们的修改在这个新的基础之上重新进行。变基的好处之一是可以使我们的时间线变得非常干净。

变基操作的时候，会创建一个临时的 rebasing branch，如有冲突，合并完冲突的文件，添加到暂存区后，执行:

```bash
$ git rebase --continue
```

此时会进入 commit message 编辑界面，输入 `:q` 就会提交 commit，后续只要推送远程仓库即可。

如果不想继续变基操作，执行：

```bash
$ git rebase --abort
```

📒 Git 操作之 `git push -f`

在开发一个项目的时候，本人将自己的 `feature` 分支合并到公共 `test` 分支，并且在测试环境部署成功。

几天后再去看的时候，发现测试环境提交的代码都不见了，本人在 `test` 分支的提交记录也都没了，只有另外一个同事留下的提交记录。最后重新将 `feature` 分支合到 `test`，再次部署到测试环境。

这个事情虽然影响不是很大，毕竟只是部署测试环境的分支，没有影响到 `feature` 分支，但是后来一直在想，究竟什么操作可以覆盖别人的提交记录。想来想去，应该只有下面几种情况：

- `git reset`：回退版本，实际上就是向后移动 `HEAD` 指针，该操作不会产生 commit 记录
- `git revert`：撤销某次操作，用一次新的 commit 来回滚之前的 commit，`HEAD` 继续前进，该操作之前和之后的 commit 和 history 都会保留
- `git push -f`：将自己本地的代码强制推送到远程仓库。当使用 `git push` 推送报错时，除了耐心解决冲突再提交之外，还可以使用这个命令强制推送，但通常会造成严重后果，例如覆盖别人的提交记录

由于开发一般都在自己的 `feature` 分支上，只有在需要测试的时候才会合并 `test` 分支，因此使用 `git reset` 可能性不大。`git revert` 更不可能，不仅不会修改 history，同时还会创建一条新的 commit 记录。因此可能性最大的就是 `git push -f` 了。

一般我们推送代码之前都会习惯性执行 `git pull`，就算不执行 `git pull`，直接推送，只要有人在你之前推送过也会报错：

```bash
$ git push -u origin main

error: failed to push some refs to 'https://github.com/Jiacheng787/git-operate-demo.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

在这种情况下，常规做法是执行 `git pull` 更新本地提交记录，如有冲突则解决冲突，然后再次推送。另一种做法就是强制推送：

```bash
$ git push -f origin main
```

可以看到就算没有事先 `git pull` 也不会报错，但是这样会导致远程仓库的提交记录被覆盖，远程仓库的提交记录变成了你本地的记录，你上次同步代码之后别人的提交记录都丢失了。

**如何删除所有 commit 记录**

找到最开始 Initial commit 的 id，执行 `git reset` 实现本地回退：

```bash
$ git reset --hard <commit id>
```

下一步强制推送到远程仓库即可：

```bash
$ git push -f origin main
```

📒 Docker 容器如何实现持久化

Docker 容器本身是无状态的，无法持久化存储，在 Docker 容器中构建前端项目，如何缓存 node_modules 从而提升构建效率？可以给 Docker 容器挂载外部数据卷，映射到本地文件系统，就可以实现持久化存储。

📒 [复盘 Node 项目中遇到的13+常见问题和解决方案](https://mp.weixin.qq.com/s/YeOTUw7CiR-rREexcPDHqA)

📒 [GitHub 最受欢迎的Top 20 JavaScript 项目](https://mp.weixin.qq.com/s/exmChOjKQ1l76LXkuMfzog)

📒 [保护自己 - 深入链路探究网络安全](https://juejin.cn/post/7081583211427397669)

📒 [50 多个提高前端人效率的工具、网站和书籍整理](https://juejin.cn/post/7079447275755274254)

📒 [如何成为一个优秀的复制粘贴工程师](https://juejin.cn/post/7080032725477883917)

📒 [原创精选荟萃（2022.03.14）](https://mp.weixin.qq.com/s/14geIwh6BkvaifOIAvz7hw)

📒 [只会用传统开发模式？10分钟教你玩转敏捷！](https://mp.weixin.qq.com/s/g9F05SRnQBTzzfx_2CKqhg)

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
