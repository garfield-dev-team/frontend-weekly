---
slug: 11月14日内容汇总
title: 11月14日内容汇总
authors: [garfield]
tags: [箭头函数, Promise, 代码规范, 构建工具]
---

📒 构建提效

- 打包工具：webpack -> rollup
- 生成 AST ：babel -> acorn
- 语法转换：babel -> swc
- 代码压缩：terser -> esbuild

📒 代码规范相关

- ESLint 用于代码规范检查，在开发阶段提前规避问题，提升代码健壮性
- Prettier 用于代码风格校验，统一团队编码风格

> 实际上编写文档、单元测试、类型声明、tsconfig.json 、ESLint 、Prettier 、lint-staged 、husky 这些对实现功能上来说没有任何作用，但是可以保障代码交付质量

📒 生成自增 ID ：

看到一个通过 generator 函数生成自增 ID 的方法：

```javascript
function *customIdGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
```

看了下其实还可以通过闭包实现：

```javascript
function customIdGenerator() {
  let i = 0;
  return {
    next() {
      return i++;
    }
  }
}

const IDGenerator = customIdGenerator();
IDGenerator.next(); // 0
IDGenerator.next(); // 1
IDGenerator.next(); // 2
IDGenerator.next(); // 3
IDGenerator.next(); // 4
IDGenerator.next(); // 5
```

:::tip

注意：

`++i` 是先加再作为表达式的值去赋值，相当于 `(i = i + 1)`

`i++` 是先把原来的值作为表达式的值赋值再加

:::

📒 专业名词

缓存命中
规则命中
增量构建

📒 Promise 四种常用工具方法

- `Promise.all()` ：接收一个 `Promise` 数组，如果所有 `Promise` 都 `fulfilled` 则返回结果数组，只要有一个 `Promise` 变为 `rejected` ，则返回最先 rejected 的 `Promise` ，通常**用于并发请求**；
- `Promise.race()` ：接收一个 `Promise` 数组，race 意思就是比谁快，返回状态最先改变的 `Promise` ，不管成功还是失败，通常**用于请求超时处理**；
- `Promise.any()` ：接收一个 `Promise` 数组，返回最先 `fulfilled` 的 `Promise` ，如果没有 `Promise` 状态转为 `fulfilled` ，则抛出一个 `AggregateError` ；
- `Promise.allSettled()` ：接收一个 `Promise` 数组，在所有 `Promise` 状态改变（`fulfilled` 或者 `rejected`）之后返回结果数组。`Promise.allSettled` 适用于异步任务互相不依赖，`Promise.all` 适用于异步任务互相之间需要依赖其他任务的结果；

📒 什么时候不能使用箭头函数

- 需要函数提升时（箭头函数只能写成表达式形式）；
- 需要使用函数的 `this` 、`arguments` 、`prototype` 时；
- 需要使用命名函数时（箭头函数是匿名的）；
- 需要作为构造函数时（箭头函数不能作为构造函数）；
- 需要在对象方法中访问当前对象时;
  

```javascript
let obj = {
  a: 1,
  fn1: () => {
    console.log(this)
  },
  fn2: function() {
    console.log(this)
  }
}
obj.fn1(); // Window
obj.fn2(); // {a: 1, fn1: ƒ, fn2: ƒ} ，这是 this 的隐式绑定

const f1 = obj.fn1;
const f2 = obj.fn2;
f1(); // Window
f2(); // Window ，隐式绑定取决于谁来调用，谁调用就指向谁
```

使用箭头函数之所以会指向 `Window` 是因为箭头函数等价于下面的代码：

```javascript
var that = this; // 直接使用闭包缓存 this
let obj = {
  a: 1,
  fn1: function() {
		console.log(that);
	}
}
```

在对象方法（例如 Vue Options API）的异步回调中经常会遇到 `this` 丢失的情况，一般会使用闭包进行缓存：

```javascript
// 使用 _this 变量进行缓存
const _this = this;
api.get("/api/xxx", function(res) {
	_this.tableData = res;
})

// 除了使用闭包缓存 this ，还可以使用箭头函数
api.get("/api/xxx", (res) => {
	this.tableData = res;
})
```

> 总结一下：箭头函数没有自己的 `this` ，没有 `argument` 对象，没有 `prototype` ，不能作为构造函数（用 new 调用会报错）。箭头函数会自动捕获上级词法作用域的 `this` ，并且箭头函数的 `this` 在声明的时候就已经确定了，不能通过 `call` 或者 `apply` 修改
