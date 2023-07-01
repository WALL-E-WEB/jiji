# 图解 HTTP

## 第一章 了解 web 及网络基础

### TCP/IP 的分层

- 应用层

  应用层决定了向用户提供应用服务时通信的活动；

  FTP（File Transfer Protocol，文件传输协议）和 DNS（Domain Name System，域 名系统）服务就是其中两类。 HTTP 协议也处于该层。

- 传输层

  传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据 传输。

  TCP（Transmission Control Protocol，传输控制协议）和 UDP（User Data Protocol，用户数据报 协议）。

- 网络层

  网络层用来处理在网络上流动的数据包。

- 链路层

  用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱 动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等 物理可见部分（还包括连接器等一切传输媒介）。

### HTTP 关系密切的协议：IP、TCP、DNS

- IP 协议：作用是把各种数据包传送给对方。

- IP 地址：指明节点被分配到的地址，MAC 地址是指网卡所属的固定地址。

- TCP：位于传输层，提供可靠的字节流服务

  字节流服务：为了方便传输，将大块数据分割成报文段(segment）进行传输。

  可靠：通过三次握手策略，保证通信的可靠。

- DNS：负责域名的 DNS 服务；位于应用层；提供域名到 IP 地址之间的解析。



### URI 与 URL

- URI：由某个协议方案表示的资源的定位标识符；http、ftp、mailto、telnet、file等协议。
- URL：正常理解的 web 浏览器访问的地址；url 是 uri 的子集。

```
http://abc.com:80/home/index.html?a=one&b=two#boom
```

1. http 协议类型：http、ftp、mailto、telnet、file。
2. abc.com 服务器地址
3. 80 端口号
4. /home/index.html/ 文件路径
5. ?a=one&b=two 查询字符串
6. #boom 片段标识符：一般用来定位网页上的内容，还有前端的单页应用。



## 第二章 简单的 HTTP 协议





## 第四章 HTTP 状态码

|      | 类别                          | 原因短语                   |
| ---- | ----------------------------- | -------------------------- |
| 1XX  | informational 信息性状态码    | 接收的请求正在处理         |
| 2XX  | Success 成功状态码            | 请求正常处理完毕3          |
| 3XX  | Redirection 重定向状态码      | 需要进行附加操作以完成请求 |
| 4XX  | Client Error 客户端错误状态码 | 服务器无法处理             |
| 5XX  | Server Error 服务器错误状态码 | 服务器处理请求出错         |



## 第五章 与 HTTP 协作的 Web 服务器

### 代理

服务器与客户端转发的中间人；使用缓存，或修改报文。

缓存代理：会保存副本

透明代理：转发是不对报文进行任何加工的代理

### 网关

能使通信路上的服务器提供非 HTTP 协议服务

### 隧道



## 第六章 首部
