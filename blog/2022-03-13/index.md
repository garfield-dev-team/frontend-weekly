---
slug: 3月13日内容汇总
title: 3月13日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 如何使用代理模式

开发环境下打印日志：

```js
const dev = process.env.NODE_ENV === 'development';
const createDevFn = (cb) => {
    return (...args) => dev && cb(...args);
};

const log = createDevFn(console.log);
log("23333"); // "2333"
```

异常捕获：

```js
class ExceptionsZone {
  static handle(exception) {
    console.log('Error：',exception.message, exception.stack);
  }

  static run(callback) {
    try {
      callback();
    } catch (e) {
      this.handle(e);
    }
  }
}

function createExceptionZone(target) {
  return (...args) => {
    let result;
    ExceptionsZone.run(() => {
      result = target(...args);
    });
    return result;
  };
}

const request = () => new Promise((resolve) => setTimeout(resolve, 2000));
const requestWithHandler = createExceptionZone(request);
requestWithHandler().then(res => console.log("请求结果：", res));
```

📒 如何将对象序列化为查询字符串

```js
const aaa = {a: 1, b: 2, c: "2333"}
```

第一种手动拼接，简单直接，一行代码搞定：

```js
const _stringify = (obj) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join("&");
```

还可以使用 `URLSearchParams` 对象进行拼接：

```js
const _stringify = obj => Object.entries(obj).reduce((accu, [key, val]) => {
    accu.append(key, val);
    return accu;
}, new URLSearchParams)
```

📒 [「深入浅出」主流前端框架更新批处理方式](https://juejin.cn/post/7072156913789566989)
