---
slug: 2月27日内容汇总
title: 2月27日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

⭐️ [浅析 Snabbdom 中 vnode 和 diff 算法](https://mp.weixin.qq.com/s/K5apaEp1LuLEnrBKB47Csw)

📒 HTTP 缓存最佳实践

在配置 nginx 的时候，可以配置合理的缓存策略，例如：

- html 文件配置协商缓存
- js、css、图片、字体等文件由于带有哈希，可以配置一年强缓存

这样配置缓存之后，可以极大提升资源二次加载速度，进而提升用户体验。以上这些是从性能角度考虑的，从安全角度考虑，推荐如下配置：

- 为了防止中介缓存，建议设置 `Cache-Control: private`，这可以禁用掉所有 `Public Cache`（比如代理），这就减少了攻击者跨界访问到公共内存的可能性
- 默认情况下，浏览器使用 **URL** 和 **请求方法** 作为缓存 key，这意味着，如果一个网站需要登录，不同用户的请求由于它们的请求URL和方法相同，数据会被缓存到一块内存里。如果我们请求的响应是跟请求的 `Cookie` 相关的，建议设置 `Vary: Cookie` 作为二级缓存 key

[HTTP 缓存别再乱用了！推荐一个缓存设置的最佳姿势！](https://mp.weixin.qq.com/s/43pa04szJ2zU_IyVP4LraQ)

📒 如何监听系统黑暗模式

在 CSS 中可以通过 `prefers-color-scheme` 媒体查询实现：

```css
body {
  color: black;
  background: white;
}
@media (prefers-color-scheme: dark) {
  body {
    color: white;
    background: black;
  }
}
```

在 JS 中可以使用 `window.matchMedia` 媒体查询：

```ts
import React from "react";

export type ThemeName = "light" | "dark";

function useTheme() {
  const [themeName, setThemeName] = React.useState<ThemeName>("light");

  React.useEffect(() => {
    // 设置初始皮肤
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
    
    // 监听系统颜色切换
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          setThemeName("dark");
        } else {
          setThemeName("light");
        }
      });
  }, []);

  return {
    themeName,
    isDarkMode: themeName === "dark",
    isLightMode: themeName === "light",
  }
}
```

> https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia

> 自定义 hook 实际上就是 mixin，把一段可复用的逻辑抽离出来

📒 搜索 JS、Go、Java、Python 的第三方库

https://openbase.com/

例如搜索 Redux 的替代方案：

https://openbase.com/js/redux/alternatives

⭐️ [React hooks 状态管理方案解析](https://juejin.cn/post/7065875157268561957)

📒 深入理解 React Native 的新架构

照 React Native 团队去年发表的一篇 博客 的说法，他们会在今年发布新的架构。本文将会详细介绍新架构的相关内容。

> https://medium.com/coox-tech/deep-dive-into-react-natives-new-architecture-fb67ae615ccd

📒 QUIC——快速UDP网络连接协议

- QUIC 的Stream流基于Stream ID+Offset进行包确认，流量控制需要保证所发送的所有包offset小于 **最大绝对字节偏移量 （ maximum absolute byte offset ）**， 该值是基于当前 **已经提交的字节偏移量（offset of data consumed）** 而进行确定的，QUIC会把连续的已确认的offset数据向上层应用提交。QUIC支持乱序确认，但本身也是按序（offset顺序）发送数据包
- QUIC利用ack frame来进行数据包的确认，来保证可靠传输。一个ack frame只包含多个确认信息，没有正文
- 如果数据包N超时，发送端将超时数据包N重新设置编号M（即下一个顺序的数据包编号） 后发送给接收端
- 在一个数据包发生超时后，其余的已经发送的数据包依旧可以基于Offset得到确认，避免了TCP利用SACK才能解决的重传问题

:::tip

其实QUIC的乱序确认设计思想并不新鲜，大量网络视频流就是通过类似的基于UDP的RUDP、RTP、UDT等协议来实现快速可靠传输的。他们同样支持乱序确认，所以就会导致这样的观看体验：明明进度条显示还有一段缓存，但是画面就是卡着不动了，如果跳过的话视频又能够播放了

:::

[QUIC——快速UDP网络连接协议](https://juejin.cn/post/7066993430102016037)
