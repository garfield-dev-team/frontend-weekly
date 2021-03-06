---
slug: 3月27日内容汇总
title: 3月27日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 [从 React 源码的类型定义中，我学到了什么？](https://juejin.cn/post/7079449083919728671)

📒 [前端单测为什么不要测代码实现细节？](https://juejin.cn/post/7079232962025226277)

📒 [React+Ts，这样学起来确实简单！！！](https://mp.weixin.qq.com/s/7LXeQomcHK4zcuRqB32JDg)

📒 [高频 LeetCode 面试题分类](https://mp.weixin.qq.com/s/IKmCWwH1LjJ-FrcbbOtj3w)

📒 如何在常数时间插入、删除数组中的元素

之前看到过一个用数组实现队列的方案，移除元素使用 `shift`，导致时间复杂度为 `O(n)`，后来改为使用双向链表实现队列，插入删除时间复杂度都为 `O(1)`。如果使用链表的话，如何在常数时间内查找元素呢，可以使用 `Map` 存储链表节点指针，从而实现哈希链表的结构。

话说回来，如果使用数组的方案，如何实现常数时间插入、删除数组元素呢？可以做到！对数组尾部进行插入和删除操作不会涉及数据搬移，时间复杂度是 `O(1)`。
**所以，如果我们想在 `O(1)` 的时间删除数组中的某一个元素 `val`，可以先把这个元素交换到数组的尾部，然后再 `pop` 掉**。

📒 [Typeit：轻量级代码录制回放](https://github.com/alexmacarthur/typeit)

📒 [React 18 超全升级指南](https://mp.weixin.qq.com/s/byD6xm3O6MzX8kksjBmqpA)

📒 [「多图详解」NodeJs中EventLoop与浏览器下的差异性](https://juejin.cn/post/7077122129107353636)

📒 [超爽！VSCode 实现自动原子化 CSS 样式](https://juejin.cn/post/7077814044152823838)

📒 [云计算时代，你还不会 Docker ？ 一万字总结（建议收藏）](https://mp.weixin.qq.com/s/f581rfvKWE3KGgWfZDJ2cA)

📒 腾讯云后端15连问

三数之和，可以先对数组进行排序，然后使用左右指针

[腾讯云后端15连问！](https://mp.weixin.qq.com/s/aMYJODhtWsBt9CTJxySQEQ)

📒 [十道腾讯算法真题解析！](https://mp.weixin.qq.com/s/dg4WI2eJzh6b3OAzHN0q3A)

📒 [\[科普文\] Vue3 到底更新了什么？](https://mp.weixin.qq.com/s/66sos7nML5rA0ZZGJ5qFIQ)

📒 [基于 TypeScript 理解程序设计的 SOLID 原则](https://mp.weixin.qq.com/s/mz5S1iiRWkk-KKJg5lOOJQ)

📒 [晋升，如何减少 50%+ 的答辩材料准备时间、调整心态（个人经验总结）](https://mp.weixin.qq.com/s/usMxG3cAowUtO3Lvn9VjsQ)

📒 [【Anthony Fu】写个聪明的打字机！直播录像](https://www.bilibili.com/video/BV1bZ4y167gz)

📒 https://github.com/unjs

📒 如何理解 partition 函数

利用左右指针，其实有点类似反转数组，只不过反转数组对每个元素都交换一下，而 partition 只有在特定条件下进行交换：

- 左指针向右移动，直到 `nums[i] > pivot` 停止移动，此时再移动右指针，接下来会有两种情况
  - 右指针遇到 `nums[j] <= pivot` 时停止移动，此时进行元素交换
  - 左指针右侧的元素都大于 `pivot`，没有元素需要交换，最终两个指针重合，停止操作
- 不断重复上述步骤，直到交换结束，此时 `nums[j]` 为较小值，将 `pivot` 与 `nums[j]` 交换

```ts
const partition = (nums: number[], lo: number, hi: number) => {
  const pivot = nums[lo];
  let i = lo + 1,
    j = hi;
  while (true) {
    while (i < hi && nums[i] <= pivot) {
      i++;
    }
    while (j > lo && nums[j] > pivot) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
  }
  swap(nums, lo, j);
  return j;
};

const swap = (nums: number[], i: number, j: number) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
```

📒 [在项目中用ts封装axios，一次封装整个团队受益😁](https://juejin.cn/post/7071518211392405541)

📒 阿里三面：灵魂拷问——有react fiber，为什么不需要vue fiber呢

为什么递归遍历 vdom 树不能中断

这种遍历有一个特点，必须一次性完成。假设遍历发生了中断，虽然可以保留当下进行中节点的索引，下次继续时，我们的确可以继续遍历该节点下面的所有子节点，但是没有办法找到其父节点——因为每个节点只有其子节点的指向。断点没有办法恢复，只能从头再来一遍。

在新的架构中，每个节点有三个指针：分别指向第一个子节点、下一个兄弟节点、父节点。这种数据结构就是fiber，它的遍历规则如下：

1. 从根节点开始，依次遍历该节点的子节点、兄弟节点，如果两者都遍历了，则回到它的父节点；
2. 当一个节点的所有子节点遍历完成，才认为该节点遍历完成；

提出问题：render 阶段 vdom 转 fiber 还是通过递归的方式，那么 fiber 链表可中断遍历是在哪一步

[阿里三面：灵魂拷问——有react fiber，为什么不需要vue fiber呢](https://juejin.cn/post/7077545184807878692)

[React 技术揭秘](https://react.iamkasong.com/process/reconciler.html)

📒 [Vue组件库设计 | Vue3组件在线交互解释器](https://juejin.cn/post/7064864648729722887)

📒 React 类组件注意事项

**1. 为了避免组件不必要的 rerender，建议继承 `PureComponent`**

```jsx
class MyCompoment extends React.PureComponent {
  // ...
}
```

> `PureComponent` 相当于函数组件使用 `React.memo`

**2. 在构造方法中如要使用 `this`，则必须先调用 `super()`**

```jsx
class MyCompoment extends React.Component {
  constructor(props) {
    // 如果想在构造方法中使用 this，则必须先调用 super()
    // super 实际上就是父类构造方法，类似盗用构造函数继承
    // 下面是一个声明 state 的例子
    super(props);
    this.state = {
      // ...
    }
  }
}
```

如果使用 ES2022 Class Properties 语法，则可以直接干掉构造方法，更加简洁：

```jsx
class MyCompoment extends React.Component {
  // 使用 ES2022 Class Properties 语法
  state = {
    // ...
  }
}
```

**3. 状态更新可能是异步的**

React 可能会对多次 `setState()` 调用进行批处理，使组件只更新一次，因此 `this.props` 和 `this.state` 可能会异步更新。所以不能依赖 `this.state` 计算下一个状态，这种情况下，可以使用函数式更新：

```jsx
this.setState((prevState, prevProps) => ({
  counter: prevState.counter + prevProps.increment
}));
```

**4 类组件中需要注意事件处理函数的 `this` 绑定问题**

```jsx
class MyCompoment extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('===点击事件');
  }

  render() {
    return (
      <button onClick={this.handleClick}>点击</button>
    )
  }
}
```

如果使用 ES2022 Class Properties 语法，也可以让语法更简洁：

```jsx
class MyCompoment extends React.Component {
  handleClick = () => {
    console.log('===点击事件');
  }

  render() {
    return (
      <button onClick={this.handleClick}>点击</button>
    )
  }
}
```

📒 箭头函数两个注意点

<details>
  <summary>查看详情</summary>

**1. 箭头函数中 `this` 指向能否改变**

以下引用阮一峰 ES6 教程：

> 箭头函数没有自己的 `this` 对象，内部的 `this` 就是定义时上层作用域中的 `this`。也就是说，箭头函数内部的 `this` 指向是固定的，相比之下，普通函数的 `this` 指向是可变的

看了上面这段描述，很多同学可能都认为，箭头函数的 `this` 是无法改变的，但实际上箭头函数的 `this` 是跟着上层作用域走的，只要上层作用域的 `this` 改变，箭头函数中的 `this` 也会相应改变：

```js
function foo() {
  const bar = () => {
    // 箭头函数的 this 来自 foo 函数
    console.log(this.name);
  }
  bar();
}

const o1 = { name: "2333" };
const o2 = { name: "666" };

foo.bind(o1)(); // 2333
foo.bind(o2)(); // 666
```

如果将上述代码编译为 ES5 就能很容易理解上述过程：

```js
function foo() {
  var _this = this;
  var bar = function() {
    console.log(_this.name);
  }
  bar();
}
```

**2. 为什么“类方法”可以使用箭头函数**

在博客中看到有这样的代码：

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  getName = () => {
    console.log(this.name);
  }
}
```

咋一看好像没有问题，但是仔细一想发现不对，原型对象在所有实例之间是共享的，因此类方法的 `this` 必须要动态绑定，而箭头函数的 `this` 是静态的，这样不就有 bug 了，但是试验发现并没有问题：

```js
const p1 = new Person("2333");
p1.getName(); // 2333
const p2 = new Person("666");
p2.getName(); // 666
```

这是因为，`getName` 实际并不是类方法，而是 ES2022 中类属性的写法，`getName` 实际上是一个对象的自有属性，可以使用下面的代码证明：

```js
Object.prototype.hasOwnProperty.call(p1, "getName"); // true
```

这一点在 React 文档事件处理函数 `this` 绑定中也有说明：

```jsx
class Foo extends Component {
  // Note: this syntax is experimental and not standardized yet.
  handleClick = () => {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

> https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance

而类方法有且仅有下面这种写法：

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}
```

使用箭头函数作为类属性时，绑定 `this` 的过程如下：

```js
function Person(name) {
  this.name = name;
  this.getName = () => {
    console.log(this.name);
  }
}

const o = {};
Person.bind(o)("2333");
o.getName(); // 2333
```

> 在 `new` 调用过程中，`Person` 函数的 `this` 会绑定到实例对象上，箭头函数的 `this` 就是 `Person` 函数的 `this`，因此箭头函数的 `this` 会指向实例对象，并且由于箭头函数作为类的自有属性，会在每次 `new` 的时候重新生成，因此不同实例之间不会影响

</details>

📒 [我的第一次webpack优化，首屏渲染从9s到1s](https://zhuanlan.zhihu.com/p/476712416)

📒 [几个一看就会的 TypeScript 小技巧](https://juejin.cn/post/7077536309804859428)

📒 [Next.js 官方发布全新教程](https://nextjs.org/learn/foundations/about-nextjs)
