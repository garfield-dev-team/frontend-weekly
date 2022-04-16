---
slug: 4月17日内容汇总
title: 4月17日内容汇总
authors: [garfield]
tags: []
---

📒 [我是如何带领团队从零到一建立前端规范的](https://juejin.cn/post/7085257325165936648)

📒 [血泪教训之请不要再轻视Git —— 我在工作中是如何使用 Git 的](https://zhuanlan.zhihu.com/p/250493093)

📒 https://nextjs.org/learn/basics/create-nextjs-app

📒 https://nextjs.org/docs

📒 [手把手教你用神器nextjs一键导出你的github博客文章生成静态html](https://juejin.cn/post/6844903944343273485)

📒 Golang 手写数组方法

```go
package main

import (
    "fmt"
)

func ForEach(nums []int, fn func(int, int)) {
    for index, item := range nums {
        fn(item, index)
    }
}

func Map(nums []int, fn func(int, int) int) []int {
    res := make([]int, 0)
    for index, item := range nums {
        res = append(res, fn(item, index))
    }
    return res;
}

func Filter(nums []int, fn func(int, int) bool) []int {
    res := make([]int, 0)
    for index, item := range nums {
        if fn(item, index) {
            res = append(res, item)
        }
    }
    return res
}

func Reduce(nums []int, fn func(int, int, int) int, initValue int) int {
    res := initValue
    for index, item := range nums {
        res = fn(res, item, index)
    }
    return res
}

func main() {
    s := []int{1, 2, 3, 4}
    ForEach(s, func(item, index int) {
        fmt.Println("===forEach", item, index)
    })
    mapped := Map(s, func(item, index int) int {
        return item * 2
    })
    fmt.Println(mapped)
    filtered := Filter(s, func(item, index int) bool {
        return item % 2 == 0
    })
    fmt.Println(filtered)
    reduced := Reduce(s, func(accu, cur, index int) int {
        return accu + cur
    }, 0)
    fmt.Println(reduced)
}
```

📒 [选择第三方 NPM 包时的 5 条最佳实践](https://mp.weixin.qq.com/s/kGMsNmIXlT25NfRrifjnTQ)

📒 [Vue3.2 vDOM diff流程分析之一：diff算法](https://juejin.cn/post/7072321805792313357)

📒 [从零到一，我们来一起造个 JS 的编译器](https://mp.weixin.qq.com/s/pNossFUtJrDHshXbWLb4vA)

⭐️ [2022 年的 React 生态](https://juejin.cn/post/7085542534943883301)

📒 [linux后台开发具备能力集锦](https://zhuanlan.zhihu.com/p/163481957)

📒 [Linux下C++后台服务器开发](https://zhuanlan.zhihu.com/p/439279854)

📒 [Go 语言与并发编程](https://zhuanlan.zhihu.com/p/471317280)

📒 [打造轻量级 WebIDE，看这一篇文章就够啦](https://juejin.cn/post/7085224136980561927)

📒 developer-roadmap

developer-roadmap 是一个开发人员路线图，包含了前端路线图、后端路线图、DevOps 路线图、React 路线图、Angular 路线图、Android 路线图、Python 路线图、Go 路线图、Java 路线图、DBA 路线图。

> https://github.com/kamranahmedse/developer-roadmap

📒 [pkg: 把 Node.js 项目打包为可执行文件](https://github.com/vercel/pkg)
