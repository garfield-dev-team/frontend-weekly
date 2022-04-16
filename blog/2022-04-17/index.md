---
slug: 4月17日内容汇总
title: 4月17日内容汇总
authors: [garfield]
tags: []
---

📒 JS 相关技巧

```ts
// 1. 数组转对象
const dict: Record<number, boolean> = Object.fromEntries(
    array.map(i => [i, true])
)

// 2. 使用 Array.from 初始化数组
const digits = Array.from({ length: 10 }, (_, i) => i);

// 3. 字符串转数组，然后用数组方法遍历
// 常规方法是用 split()
String(num).split("").reduce(...)
// 由于字符串实现了 iterator 接口，因此可以使用扩展运算符展开到数组中
[...String(num)].reduce(...)
```

📒 [用Rust锈化Vue Compiler](https://zhuanlan.zhihu.com/p/417534662)

📒 TS 类型体操性能分析

```bash
$ tsc index.ts –-diagnostics
```

📒 前端动画实现方案

- CSS 方案：`transition`、`animation`
- JS 方案：`setTimeout`、`requestAnimationFrame`

一个实验性 API `Element.animate()`，可以在渲染进程的时候就执行，性能更好。

> https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate

📒 [我是如何带领团队从零到一建立前端规范的](https://juejin.cn/post/7085257325165936648)

📒 [血泪教训之请不要再轻视Git —— 我在工作中是如何使用 Git 的](https://zhuanlan.zhihu.com/p/250493093)

📒 https://nextjs.org/learn/basics/create-nextjs-app

📒 https://nextjs.org/docs

📒 [手把手教你用神器nextjs一键导出你的github博客文章生成静态html](https://juejin.cn/post/6844903944343273485)

📒 Golang 三数之和

```go
package algorithm

import (
	"sort"
)

func ThreeSum(nums []int) [][]int {
	ans := make([][]int, 0)
	// 数组元素个数小于 3，直接返回
	if len(nums) < 3 {
		return ans
	}
	// 排序
	sort.Ints(nums)
	// 遍历到倒数第二个，因为是三个数总和
	for i := 0; i < len(nums) - 2; i++ {
		// 规定 nums[i] < nums[left] < nums[right]
		// 如果 nums[i] > 0 则不存在另外两个值使得相加等于 0
		// 大于 0 可以直接跳出循环了
		if nums[i] > 0 {
			break
		}
		// 过滤 nums[i] 重复
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		// 先确定一个值 nums[i]
		// 再去找另外两个值 nums[left] 和 nums[right]
		// 需要满足 nums[i] < nums[left] < nums[right]
		target := -nums[i]
		left, right := i + 1, len(nums) - 1

		// 使用双指针法确定剩下两个值
		for left < right {
			sum := nums[left] + nums[right]
			if sum < target {
				left++
			} else if sum > target {
				right--
			} else if sum == target {
				ans = append(ans, []int{nums[i], nums[left], nums[right]})
				// 找到目标值，左右指针分别移动一位
				left++
				right--
				// 过滤 nums[left] 重复
				for left < right && nums[left] == nums[left-1] {
					left++
				}
				// 过滤 nums[right] 重复
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			}
		}
	}
	return ans
}
```

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
