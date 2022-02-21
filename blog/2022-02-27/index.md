---
slug: 2月27日内容汇总
title: 2月27日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 QUIC——快速UDP网络连接协议

- QUIC 的Stream流基于Stream ID+Offset进行包确认，流量控制需要保证所发送的所有包offset小于 **最大绝对字节偏移量 （ maximum absolute byte offset ）**， 该值是基于当前 **已经提交的字节偏移量（offset of data consumed）** 而进行确定的，QUIC会把连续的已确认的offset数据向上层应用提交。QUIC支持乱序确认，但本身也是按序（offset顺序）发送数据包
- QUIC利用ack frame来进行数据包的确认，来保证可靠传输。一个ack frame只包含多个确认信息，没有正文
- 如果数据包N超时，发送端将超时数据包N重新设置编号M（即下一个顺序的数据包编号） 后发送给接收端
- 在一个数据包发生超时后，其余的已经发送的数据包依旧可以基于Offset得到确认，避免了TCP利用SACK才能解决的重传问题

:::tip

其实QUIC的乱序确认设计思想并不新鲜，大量网络视频流就是通过类似的基于UDP的RUDP、RTP、UDT等协议来实现快速可靠传输的。他们同样支持乱序确认，所以就会导致这样的观看体验：明明进度条显示还有一段缓存，但是画面就是卡着不动了，如果跳过的话视频又能够播放了

:::

[QUIC——快速UDP网络连接协议](https://juejin.cn/post/7066993430102016037)
