---
slug: 9月11日内容汇总
title: 9月11日内容汇总
authors: [garfield]
tags: []
---

📒 前端相关文章汇总

https://medium.com/@bytefer

https://medium.com/pixel-and-ink/a-peek-at-userequest-hook-ba960cbddbf8

https://javascript.plainenglish.io/15-utility-types-that-every-typescript-developer-should-know-6cf121d4047c

https://blog.bitsrc.io/6-best-ways-to-create-a-new-react-application-57b17e5d331a

📒 Golang 技术方案

https://kms.netease.com/topics/topic/612/item/14727

https://kms.netease.com/article/27452#%E9%80%89%E5%9E%8B

https://github.com/NetEase-Media/ngo

📒 Git 如何打标签

Git tag 其实也是一种分支，但是这个分支是只读的（它只是某个特定提交的引用）。Git tag 主要用来对某个分支进行归档。

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。

附注标签：

```bash
$ git tag -a v1.4 -m "my version 1.4"
```

通过使用 git show 命令可以看到标签信息和与之对应的提交信息：

```bash
$ git show v1.4
```

轻量标签：

```bash
$ git tag v1.4-lw
```

这时，如果在标签上运行 git show，你不会看到额外的标签信息。 命令只会显示出提交信息：

```bash
$ git show v1.4-lw
```

列出标签：

```bash
$ git tag
```

注意，tag 与普通分支不一样，直接 `git push` 不会被提交到远程仓库，需要手动指定参数：

```bash
$ git push origin <tag_name>
# or
$ git push --tags
```

> https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE

📒 [美团二面：考我幻读，结果答的不好](https://mp.weixin.qq.com/s/b805ZIO7-IabjStlAs7Wow)

📒 码住！Golang并发安全与引用传递总结

先看一个在Go中关于Map类型并发读写的经典例子：

```go
var testMap  = map[string]string{}
func main() {
  go func() {
    for{
      _ = testMap["bar"]
    }
  }()
  go func() {
    for  {
      testMap["bar"] = "foo"
    }
  }()
  select{}
}
```

以上例子会引发一个Fatal error：

> fatal error: concurrent map read and map write

产生这个错误的原因就是在Go中Map类型并不是并发安全的，出于安全的考虑，此时会引发一个致命错误以保证程序不出现数据的混乱。

Golang 如何检测 Map 并发异常？

对于查询操作，大致检查并发错误的流程如下：在查询前检查并发flag是否存在，如果存在就抛出异常。

```go
if h.flags&hashWriting != 0 {
  throw("concurrent map read and map write")
}
```

对于修改操作则如下：

- 写入前检查一次标记位，通过后打上标记
- 写入完成再次检查标记位，通过后还原标记

```go
 //各类前置操作
....
if h.flags&amp;hashWriting != 0 {
  //检查是否存在并发
  throw("concurrent map writes")
}

//赋值标记位
h.flags ^= hashWriting
....
//后续操作
done:
//完成修改后，再次检查标记位
if h.flags&hashWriting == 0 {
  throw("concurrent map writes")
}
//还原标记位取消hashWriting标记
h.flags &^= hashWriting
```

如何避免 Map 的并发问题？

go官方认为因为Map并发的问题在实际开发中并不常见，如果把Map原生设计成并发安全的会带来巨大的性能开销。因此需要使用额外方式来实现。

1. 自行使用锁和map来解决并发问题

```go
type cocurrentMap = struct {
  sync.RWMutex
  m map[string]string
}

func main() {
  var testMap = &cocurrentMap{m:make(map[string]string)}
  //写
  testMap.Lock()
  testMap.m["a"] = "foo"
  testMap.Unlock()
  //读
  testMap.RLock()
  fmt.Println(testMap.m["a"])
  testMap.RUnlock()
}
```

> 这个方法存在问题就是并发量巨大的时候，锁的竞争也会带来巨量消耗，性能一般

2. 使用sync.Map

sync.Map通过巧妙的设计来提高并发安全下Map的性能，其设计思路是通过空间换时间来实现的，同时维护2份数据，read&dirty。read主要用来避免读写冲突。

其数据结构如下：

```go
type Map struct {
  mu Mutex //锁
  read atomic.Value //readOnly
  dirty map[interface{}]*entry //*entry
  misses int
}

type readOnly struct {
  m       map[interface{}]*entry
  amended bool // true if the dirty map contains some key not in m.
}

type entry struct {
  p unsafe.Pointer // *interface{}
}
```

使用示例如下：

```go
var m sync.Map
// 写
m.Store("test", 1)
m.Store(1, true)

// 读
val1, _ := m.Load("test")
val2, _ := m.Load(1)
fmt.Println(val1.(int))
fmt.Println(val2.(bool))

//遍历
m.Range(func(key, value interface{}) bool {
   //....
   return true
})

//删除
m.Delete("test")

//读取或写入
m.LoadOrStore("test", 1)
```

这里对sync.Map的原理不做深入展开，只提几点特性：

- read和dirty是共享内存的，尽量减少冗余内存的开销
- read是原子性的，可以并发读，写需要加锁
- 读的时候先read中取，如果没有则会尝试去dirty中读取（需要有标记位readOnly.amended配合）
- dirty就是原生Map类型，需要配合各类锁读写
- 当read中miss次数等于dirty长度时，dirty会提升为read，并且清理已经删除的k-v（延迟更新，具体如何清理需要enrty中的p标记位配合）
- 双检查（在加锁后会再次对值检查一遍是否依然符合条件）
- sync.Map适用于读多写少的场景
- sync.Map没有提供获取长度size的方法，需要通过遍历来计算

切片类型 Slice 是并发安全的吗

与Map一样，Slice也不是并发安全的。但是在切片中并不会引发panic，如果程序无意中对切片使用了并发读写，严重的话会导致获取的数据和之后存储的数据错乱，所以这里要格外小心，可以通过加锁来避免。

切片除了并发有问题外，还有几点注意：

- Go只会对基础值类型在传参中使用深拷贝，实际上对于Slice和Map类型，使用的是浅拷贝，Slice作为传参，其指向的内存地址依然是原数据
- Slice扩容机制的影响：向Slice中添加元素超出容量的时候，我们知道会触发扩容机制，而扩容机制会创建一份新的【原数据】此时，它与浅拷贝获取到的变量是没有任何关联的

[码住！Golang并发安全与引用传递总结](https://mp.weixin.qq.com/s/dZIcI_3b8N8a2_nzJ7fNOA)

📒 [ES6你用过哪些惊艳的写法](https://mp.weixin.qq.com/s/U6FjIdGZ3n13-pS2J7nvLQ)

📒 [用代码画时序图！YYDS](https://mp.weixin.qq.com/s/rJN14WFRTKjhoy8oWPulWw)

📒 [面试官：mysql查询 limit 1000,10 和limit 10 速度一样快吗](https://mp.weixin.qq.com/s/VQsKA1nQ6leh60d_JXJg_g)

📒 [10 best practices to build a Java container with Docker](https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/)

📒 [How to create a systemd service in Linux](https://linuxhandbook.com/create-systemd-services/)

📒 [Go 1.19.1 和 Go 1.18.6 终究还是来了](https://mp.weixin.qq.com/s/r2_eSoM11nZPYp_1aNatBQ)

📒 [5分钟自建数据库可视化平台，在线管理数据库也太方便了！](https://mp.weixin.qq.com/s/oVr9ojK6A8d8DIiIVdHwpQ)

📒 [匿名 iframe：COEP 的福音！](https://mp.weixin.qq.com/s/tVASa1trXkJR9nK_isTbmw)

📒 [这些强大的 JS 操作符，你都知道吗](https://mp.weixin.qq.com/s/nzpJPMVs1JznYotZXb4tbQ)

📒 [「Go工具箱」一个基于双向链表实现的LRU缓存工具](https://mp.weixin.qq.com/s/605zrHjHFsjJvRq7_xFP_Q)

📒 [这个 Go 开发的网络抓包工具，不仅好用还支持ES检索](https://mp.weixin.qq.com/s/mNjLiEBnHIZhOTrDwNkmvA)

📒 [一道简单又有意思的 JavaScript 手写题 — 异步加法 asyncAdd](https://juejin.cn/post/7134583899597832200)

📒 [高并发下的网络 IO 模型设计](https://mp.weixin.qq.com/s/naGheZq_z5d8pyB_i9hY7g)

📒 [qiankun微前端改造实战（架构设计+代码实现）-超级详细vue代码干货篇！（伸手党福利）](https://juejin.cn/post/7096047543447978014)

📒 [Go语言中常见100问题-#8 any says nothing](https://mp.weixin.qq.com/s/FE8WgfINZ0hSWldkXVGo9g)

📒 [读 Node.js 源码深入理解 cjs 模块系统](https://juejin.cn/post/7140549209735823373)

📒 [前端食堂技术周刊第 51 期：pnpm v7.10.0、8 月登陆网络平台的新内容、重新思考流行的 Node.js 模式和工具、打包 JavaScript 库的](https://juejin.cn/post/7140216695834017822)

📒 [从Vuex到Pinia](https://mp.weixin.qq.com/s/1tUkWA1Df6k1lX8q5PW17g)

📒 [程序员有很厉害，不外传的代码吗？可以运行，但不能动的那种！](https://mp.weixin.qq.com/s/-PGp9meVMBGlkss7dXqDXA)

📒 [你想知道的前后端协作规范都在这了](https://mp.weixin.qq.com/s/NjX2be78BlHrXF5hlKlA8A)

📒 [1.3w字，一文详解死锁！](https://mp.weixin.qq.com/s/hZiRxXUrQwWEwT9JBkllTg)

📒 [【第2724期】前后端数据接口协作提效实践](https://mp.weixin.qq.com/s/rAwplRSzwZne_KaCAJ2omA)

📒 [去字节面试，直接让人出门左拐：Bean 生命周期都不知道！](https://mp.weixin.qq.com/s/Rn4QjAmi581R0WkDxyTLjQ)

📒 [聊聊数据库建表的15个小技巧](https://mp.weixin.qq.com/s/q7xK94mOphCO9PWVhsBIQQ)

📒 [如何优化你的 Node.js API](https://mp.weixin.qq.com/s/nDg3NGAoeLdHkm54kb5bWw)

📒 [金九银十Go面试题进阶知识点：select和channel](https://juejin.cn/post/7139768397423706126)

📒 禁用 Cookie 后会怎样

会报错！解法很简单也很粗暴，就是加 try…catch。

https://blog.tomayac.com/2022/08/30/things-not-available-when-someone-blocks-all-cookies/

📒 现代 JS 库打包

这是一篇关于如何打包 JavaScript 库的现代化指南，介绍了维护 JavaScript 库的一些基础知识和最佳实践，推荐作为入门阅读。

https://github.com/frehner/modern-guide-to-packaging-js-library

📒 Error Boundary 指南

虽然理想情况下是在生产之前捕获错误，但有些错误是会躲过测试的，比如网络错误，而如果没有正确处理，这些错误会导致 React 声明周期崩溃，导致白屏，并最终影响你的用户。正确的方式是提供适当的视觉反馈和潜在的行动指引（例如：重试机制）来优雅的处理这些错误。

你可能会有几个疑问。1）为啥会白屏？因为从 React 16 开始，没有被捕获的错误将导致整个 React 组件树的卸载。2）为啥 try.catch 不行？因为 React Hooks 执行是异步的，捕获不了。

解法当然就是用 React 官方提供的 Error Boundary 了，通过 Error Boundary 把组件包起来，可以想象成是包了一层 try…catch，组件报错会到此为止，不会再往上报。一个简单的 ErrorBoundary 如下。

```js
class ErrorBoundarySimple extends React.Component {
  state = { hasError: false };
  componentDidCatch(error: unknown) {
    // report the error to your favorite Error Tracking tool (ex: Sentry, Bugsnag)
    console.error(error);
  }
  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) { return <p>Failed to fetch users.</p>; }
    return this.props.children;
  }
}
```

但是官方的 Error Boundary 其实有缺陷，他不支持以下场景的报错，包括 Event handlers、异步代码比如 setTimeout 或 requestAnimationFrame 回调、SSR、Error Boundary 自己抛的错。同时，我们可能还需要提供重试机制等行动指南。解法是用 react-error-boundary 这个库。

react-error-boundary 如何支持重试？他提供的 ErrorBoundary 组件可以配置 FallbackComponent 组件，而这个组件有 error 和 resetErrorBoundary 两个 props，后者用于重试。

```js
import { ErrorBoundary } from 'react-error-boundary';
function ErrorFallback({ error, resetErrorBoundary }) {
  return <>
    <pre>error.message</pre>
    <button onClick={resetErrorBoundary}>retry</button>
  </>
}
export default function App() {
  return <ErrorBoundary FallbackComponent={ErrorFallback}><Users /><ErrorBoundary>;
}
```

react-error-boundary 如何捕获 React 生命周期外的错误？比如 Event Handler 和异步代码。react-error-boundary 提供 useErrorHander hook，他会返回处理错误的函数。

```js
import { useErrorHandler } from 'react-error-boundary';
export default App() {
  const handleError = useErrorHandler();
  function handleSubmit(event) {
    fetch(xxx).then(...).catch(e => handleError(e));
  }
  // do render
}
```

https://meticulous.ai/blog/react-error-boundaries-complete-guide/

📒 10 个 React 新手陷阱

React 是 unopinionated 的，同样的问题会存在许多不同的解法，这给开发者留下了大量的空间来用自己愚蠢的想法把事情搞砸。在今天的文章中，我们将看看 React 中的 10 个陷阱（反模式），以及改进我们代码的技巧和窍门，同时也可以为前端技术面试做准备。

1、巨型组件。就是一个组件内很大，通常是因为不知道如何组织代码，或者不想把时间浪费在组织代码上。这样的组件很难理解、重构和测试。通过 WebStorm 的「Refactor - Move」或者 VSCode 的 Glean 插件快速提速代码到文件，可以节省你不少时间。

2、嵌套陷阱。不要在组件内定义子组件，比如 `function Parent() { const Child = () => <div>Child</div>; return <><Child /></> }`，解法是把 Child 定义提到外面。

3、没有用 useMemo/useCallback。遇到重计算的点，每次 re-render 会重新执行导致性能消耗严重，比如 `const total = expensiveCal(count)`。解法是用 useMemo 避免重复计算，比如 `const total = useMemo(() => expensiveCal(count), [count])`。如果遇到函数，记得切换到 useCallback。

4、无意义的 div 元素。React 组件只能由一个根组件，当需要渲染多个相邻的元素时，你可能会引入 div 元素。但这不是必要的，不必要的 div 元素可能导致可访问性和 CSS 样式问题。更好的做法是用 Fragment 组件，比如 `<><Foo /><Bar /></>`。

5、混乱的文件。随着组件越来越多，在一个文件中导出多个组件是「诱人」的。但是这样，也会很快让事情变得复杂。更好的做法是有一套自己的文件组织规范，比如一个组件一个文件，或者一个组件一个文件夹，同时在文件夹下可能还会有自己的测试文件等。

6、巨大的 Bundle 产物。大型复杂应用的最大问题之一就是产物很大，这会让页面加载变慢，因为浏览器需要很长时间来下载、解析和执行 JavaScript Bundle 产物。解法是应用内置了 code splitting 功能的框架，或者使用 Suepense + React.lazy + import()。

7、Prop Drilling。当上层组件中持有 state，而一个深度嵌套的组件需要使用这个 state 时，一种做法是用 props 透过中间组件一层层往下传，而实际上中间组件并不需要他们，这就是 Prop Drilling。解法是用 Redux 或其他数据流工具，或者使用 Context。

剩下 3 个是 Prop Plowing、Try Some Curry 和 Code Smarter，感觉不太重要，是为了凑 10 个加的，我就不介绍了，有兴趣的可以查看原文。

https://medium.com/@imranfarooq0306/10-react-traps-to-avoid-as-react-developer-5570808e346b

📒 useMemo + useCallback

这是一篇很好的 useMemo 和 useCallback 入门文章，但没有引入啥新知识，我就不展开了。

https://www.joshwcomeau.com/react/usememo-and-usecallback/

📒 React 18 SSR 流式渲染

React 18 SSR 流式渲染可基于 Suspense + Lazy、renderToPipeableStream 和 hydrateRoot 实现。Suspense + Lazy 在客户端用于代码拆分和懒加载，在服务端则用于流式渲染，renderToPipeableStream 用于流式返回数据，hydrateRoot 用于在流式返回后就开始注水而无需等到全部内容都返回。

以上完成了流式渲染，但还有个问题需要解，即「数据怎么获得」？并且需要同时考虑服务端和客户端。作者给的解是还处于实验阶段的 Data Fetching API。

```js
const resource = fetchProfileData();

function Posts() {
  const posts = resource.posts.read();
  // render with posts
}
```

目前要支持 Data Fetching API，可将 Promise 包装成 Data Fetching API。

```js
function wrapPromise(p) {
  let status = 'pending';
  let result;
  let suspensder = p.then(r => {
    status = 'success';
    result = r;
  }).catch(e => {
      status = 'error';
      result = e;
  });
  return {
    read() {
      if (status === 'pending') throw suspensder;
      else if (status === 'error') throw result;
      else if (status === 'success') return result;
    }
  }
}
```

Suspense 识别 Data Fetching 的 loading 状态是基于 read 方法的返回值。如果 throw promise 即还在 loading，如果 throw error 则出错，如果返回数据则完成 loading。

[在 React 18 下，如何实现产品级的 SSR 和流式渲染](https://juejin.cn/post/7137976587047141407)

📒 开源推荐

**1. clean-pkg-json**

NPM 发包时不需要的 package.json 字段

https://github.com/privatenumber/clean-pkg-json

**2. ts-prune**

用于找到 TypeScript 项目未使用的 export 信息，消除 dead code

https://github.com/nadeesha/ts-prune

**3. module-federation/typescript**

Typescript Types Support For Module Federation

https://github.com/module-federation/typescript

**4. React Router 6.4 将于下周发布**

📒 Go 眼中的文件系统是什么？ io.FS

Go 理解的文件系统，只要能实现一个 Open 方法，返回一个 File 的 interface ，这个 File 只需要实现 Stat，Read，Close 方法即可。

```go
// 文件系统的接口
type FS interface {
  Open(name string) (File, error)
}

// 文件的接口
type File interface {
  Stat() (FileInfo, error)
  Read([]byte) (int, error)
  Close() error
}
```

有没有发现，OS 的 FS 已经满足了条件。所以，Go 的 FS 可以是 OS 的 FS ，自然也可以是其他的实现。

Go 在此 io.FS 的基础上，再去扩展接口，增加文件系统的功能。比如，加个 ReadDir 就是一个有读目录的文件系统 ReadDirFS ：

```go
type ReadDirFS interface {
  FS
  // 读目录
  ReadDir(name string) ([]DirEntry, error)
}
```

:::tip

以上是 Golang 接口继承的写法，`ReadDirFS` 接口继承了 `FS` 接口，同时扩展了 `ReadDir` 方法。注意，Golang 是不支持面向对象的。

:::

加个 Glob 方法，就成为一个具备路径通配符查询的文件系统：

```go
type GlobFS interface {
  FS
  // 路径通配符的功能
  Glob(pattern string) ([]string, error)
}
```

加个 Stat ，就变成一个路径查询的文件系统：

```go
type StatFS interface {
  FS
  // 查询某个路径的文件信息
  Stat(name string) (FileInfo, error)
}
```

这些非常经典的文件系统的定义 Go 在 io/fs 里面已经做好了。

我们的目标是实现一个 Go 的 FS ，这个定义已经在 io.FS 有了。我们只需要写一个结构体，实现它的方法，那么你就可以说这是一个 FS 了。

这里其实就可以有非常多的想象空间，比如，可以是 OS 的 FS，也可以是 memory FS ，hash FS 等等。网上有不少例子。但其实标准库已经有一个最好的例子，那就是 embed FS 。

我们来看下 embed 怎么实现一个内嵌的文件系统。embed 的实现在 embed/embed.go 这个文件中，非常精简。

首先，在 embed package 里定义了一个结构体 FS ，这个结构体将是 io.FS 的具体实现。

```go
// 作为具体 FS 的实现
type FS struct {
  files *[]file
}

// 代表一个内嵌文件
type file struct {
  name string
  data string  // 文件的数据全在内存里
  hash [16]byte // truncated SHA256 hash
}
```

embed 里面的 FS 结构体只需要实现 Open 这个方法即可：

```go
// Open 的具体实现
func (f FS) Open(name string) (fs.File, error) {
  // 通过名字匹配查找到 file 对象
  file := f.lookup(name)
  // 如果没找到
  if file == nil {
      return nil, &fs.PathError{Op: "open", Path: name, Err: fs.ErrNotExist}
  }
  // 如果是目录结构
  if file.IsDir() {
      return &openDir{file, f.readDir(name), 0}, nil
  }
  // 找到了就封装成 openFile 结构体
  return &openFile{file, 0}, nil
}
```

上面的 Open ，如果是文件的化，返回的是一个 openFile 的结构体 ，作为 io.File 接口的具体实现：

```go
// 代表一个文件的实现
type openFile struct {
  f *file // the file itself
  offset int64 // current read offset
}
func (f *openFile) Close() error               { return nil }
func (f *openFile) Stat() (fs.FileInfo, error) { return f.f, nil }
func (f *openFile) Read(b []byte) (int, error) {
  // 判断偏移是否符合预期
  if f.offset >= int64(len(f.f.data)) {
      return 0, io.EOF
  }
  if f.offset < 0 {
      return 0, &fs.PathError{Op: "read", Path: f.f.name, Err: fs.ErrInvalid}
  }
  // 从内存拷贝数据
  n := copy(b, f.f.data[f.offset:])
  f.offset += int64(n)
  return n, nil
}
```

如上，只需要实现 Read，Stat，Close 方法即可。这就是一个完整的、Go 层面的 FS 的实现。

:::tip

Go 的 FS 封装有啥用呢

- 单测方便了，可以直接对应用进行测试，不必依赖底层实现
- 封装出一个 io.FS 的抽象，意图和 OS 的 FS 解耦，类似 embed FS 这种非 OS 文件系统的需求，可以有方法扩展了

:::

[Go 眼中的文件系统是什么？ io.FS](https://mp.weixin.qq.com/s/bZO6kfhfdMaOkYZuGjOl_Q)

📒 [对 Go2 错误处理提案的批判](https://mp.weixin.qq.com/s/5CFjXV8dI_Pczl5g2z95jA)

📒 [微服务配置中心， 这个方案 Go 里用起来不输 SpringCloud](https://mp.weixin.qq.com/s/n2zLsJun0go4dR3g1Pi84Q)

📒 [Go语言爱好者周刊：第 158 期](https://mp.weixin.qq.com/s/lo59WvtOoqdA87dn9DiraQ)
