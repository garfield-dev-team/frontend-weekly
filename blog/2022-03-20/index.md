---
slug: 3月20日内容汇总
title: 3月20日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 如何实现双向链表

在项目中遇到一个问题，源码中使用数组模拟队列，添加使用 `unshift`，移除使用 `pop`，导致添加元素的时间复杂度为 `O(n)`。这里使用双向链表模拟队列，两端均可添加、删除元素，且时间复杂度均为 `O(1)`：

```ts
/**
 * 链表节点
 */
class ListNode<T> {
  public next: ListNode<T> = null;
  public prev: ListNode<T> = null;
  public val: T = undefined;

  constructor(val: T) {
    this.val = val;
  }
}

/**
 * 实现双向链表
 */
class LinkedList<T> {
  private head: ListNode<T> = null;
  private end: ListNode<T> = null;
  private _size: number = 0;

  /**
   * add() 相当于 addLast()
   * @param val 
   * @returns 
   */
  public add(val: T): boolean {
    const node = new ListNode<T>(val);
    if (this.head == null) {
      // 初始化 head 指针
      this.head = node;
    }
    if (this.end == null) {
      // 初始化 end 指针
      this.end = node;
    } else {
      // 把新节点挂到链表最后
      this.end.next = node;
      // 新节点 prev 指向前一节点
      node.prev = this.end;
      // end 指针后移一位
      this.end = node;
    }
    // 维护 size
    this._size++;
    return true;
  }

  /**
   * addFirst() 在链表头部添加
   * @param val 
   * @returns 
   */
  public addFirst(val: T): boolean {
    const node = new ListNode<T>(val);
    if (this.head == null) {
      // 初始化 head 指针
      this.head = node;
    } else {
      // 把新节点挂到链表头部
      this.head.prev = node;
      // 新节点 next 指向下一节点
      node.next = this.head;
      // head 指针前移一位
      this.head = node;
    }
    if (this.end == null) {
      // 初始化 end 指针
      this.end = node;
    }
    // 维护 size
    this._size++;
    return true;
  }

  /**
   * poll() 相当于 pollFirst()
   * @returns 
   */
  public poll(): T {
    // 缓存需要删除的节点
    const node = this.head;
    // head 指向下一节点
    this.head = this.head.next;
    // 切断与前一节点的联系
    this.head.prev = null;
    // 维护 size
    this._size--;
    return node.val;
  }

  /**
   * pollLast() 移除链表尾部元素
   * @returns 
   */
  public pollLast(): T {
    // 缓存需要删除的节点
    const node = this.end;
    // end 指向前一节点
    this.end = this.end.prev;
    // 切断与后一节点的联系
    this.end.next = null;
    // 维护 size
    this._size--;
    return node.val;
  }

  /**
   * 获取链表长度
   * @returns 
   */
  public size(): number {
    return this._size;
  }

  /**
   * 序列化为字符串
   * @returns 
   */
  public toString(): string {
    let res: T[] = [];
    let list = this.head;
    while (list != null) {
      res.push(list.val);
      list = list.next;
    }
    return `[ ${res.join(" ")} ]`;
  }
}
```

📒 [Nest.js 的 AOP 架构的好处，你感受到了么？](https://juejin.cn/post/7076431946834214925)

📒 React Hooks 源码分析

React 函数组件通过 `renderWithHooks` 函数进行渲染，里面有个 `workingInProgress` 的对象就是当前的 fiber 节点，fiber 节点的 `memorizedState` 就是保存 hooks 数据的地方。它是一个通过 `next` 串联的链表。

这个 `memorizedState` 链表是什么时候创建的呢？确实有个链表创建的过程，也就是 mountXxx。链表只需要创建一次，后面只需要 update。所以第一次调用 `useState` 会执行 `mountState`，后面再调用 `useState` 会执行 `updateState`。

每个 Hook 的 `memorizedState` 链表节点是通过 `mountWorkInProgressHook` 函数创建的：

```js
function mountWorkInProgressHook(): Hook {
  const hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };

  if (workInProgressHook === null) {
    // This is the first hook in the list
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
  } else {
    // Append to the end of the list
    workInProgressHook = workInProgressHook.next = hook;
  }
  return workInProgressHook;
}
```

> 函数组件本身是没有挂载、更新的概念的，每次 rerender 就是执行这个函数，但是挂载、更新的逻辑体现在 Hooks 里面，首次执行的时候调用 `mountWorkInProgressHook` 创建链表节点，后续执行的时候调用 `updateWorkInProgressHook` 访问并更新链表节点

[React Hooks 的原理，有的简单有的不简单](https://juejin.cn/post/7075701341997236261)

[React 进阶实战指南 - 原理篇：Hooks 原理](https://juejin.cn/book/6945998773818490884/section/6959872072906440743)

📒 前端工程师如何快速使用一个NLP模型

2017年谷歌提出了Transformer架构模型，2018年底，基于Transformer架构，谷歌推出了bert模型，bert模型一诞生，便在各大11项NLP基础任务中展现出了卓越的性能，现在很多模型都是基于或参考Bert模型进行改造。

:::tip

如果想了解 Transformer 和 bert，可以看这个视频

https://www.bilibili.com/video/BV1P4411F77q

https://www.bilibili.com/video/BV1Mt411J734

:::

[前端工程师如何快速使用一个NLP模型](https://juejin.cn/post/7075518863814869005)

📒 [Lerna 运行流程剖析](https://juejin.cn/post/7075493514510860318)

⭐️ [Git不要只会pull和push，试试这5条提高效率的命令](https://juejin.cn/post/7071780876501123085)

📒 [React内部的性能优化没有达到极致？](https://juejin.cn/post/7073692220313829407)

📒 reduce 方法注意事项

|          | 初始值非空                                    | 初始值为空                                        |
| -------- | --------------------------------------------- | ------------------------------------------------- |
| 数组非空 | 首次执行回调，accu 为初始值，cur 为数组第一项 | 首次执行回调，accu 为数组第一项，cur 为数组第二项 |
| 数组为空 | 不执行回调，直接返回初始值                    | 报错（建议任何情况下都传递初始值）                |

📒 npm 安装依赖默认添加 `^` 前缀，当再次执行 npm install 命令时，会自动安装这个包在此大版本下的最新版本。如果想要修改这个功能，可以执行以下命令：

```bash
$ npm config set save-prefix='~'
```

> 执行完该命令之后，就会把 `^` 符号改为 `~` 符号。当再次安装新模块时，就从只允许小版本的升级变成了只允许补丁包的升级

如果想要锁定当前的版本，可以执行以下命令：

```bash
$ npm config set save-exact true
```

> 这样每次 `npm install xxx --save` 时就会锁定依赖的版本号，相当于加了 `--save-exact` 参数。建议线上的应用都采用这种锁定版本号的方式

既然可以锁定依赖版本，为什么还需要 lcok-file 呢，个人理解锁定依赖只能锁定当前项目中的依赖版本，但是还存在间接依赖，即依赖还有依赖，直接锁定依赖版本无法解决间接依赖的问题，间接依赖版本还是不受控制，需要借助 lock-file 锁定间接依赖的版本。

📒 函数式编程三种形式：

- 函数赋值给变量
  - 可作为数组的元素，进而实现 compose 函数组合，或者管道操作
- 函数作为参数
  - 常见的有 `forEach` 、`Promise` 、`setTimeout` 等，React 技术栈也有很多 API
- 函数作为返回值

📒 [GitLab CI 打造一条自己的流水线](https://juejin.cn/post/7074780794459258917)

📒 type-challenges

type-challenges 是一个 TypeScript 类型体操姿势合集。本项目意在于让你更好的了解 TS 的类型系统，编写你自己的类型工具，或者只是单纯的享受挑战的乐趣！

> https://github.com/type-challenges/type-challenges
