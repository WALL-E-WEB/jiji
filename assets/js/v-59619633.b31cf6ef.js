"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8322],{1575:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-59619633",path:"/study/16.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD/%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87.html",title:"前端性能指标",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"性能体系建立",slug:"性能体系建立",children:[]},{level:2,title:"用户角度的性能标准",slug:"用户角度的性能标准",children:[]},{level:2,title:"网站性能指标",slug:"网站性能指标",children:[]},{level:2,title:"监测工具",slug:"监测工具",children:[{level:3,title:"Web Vitals",slug:"web-vitals",children:[]},{level:3,title:"Performance API",slug:"performance-api",children:[]},{level:3,title:"lighthouse",slug:"lighthouse",children:[]}]}],filePathRelative:"study/16.前端性能/性能指标.md",git:{updatedTime:1642158751e3}}},2454:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="前端性能指标" tabindex="-1"><a class="header-anchor" href="#前端性能指标" aria-hidden="true">#</a> 前端性能指标</h1><h2 id="性能体系建立" tabindex="-1"><a class="header-anchor" href="#性能体系建立" aria-hidden="true">#</a> 性能体系建立</h2><ol><li>现状评估</li><li>建立指标</li><li>技术方案 <ul><li>缓存</li><li>降低请求成本</li><li>减少请求数量</li><li>减少传输体积</li></ul></li><li>执行 <ul><li>管理</li><li>制度化</li><li>自动化</li></ul></li><li>结果评估和监控</li></ol><h2 id="用户角度的性能标准" tabindex="-1"><a class="header-anchor" href="#用户角度的性能标准" aria-hidden="true">#</a> 用户角度的性能标准</h2><p>通用2-5-8原则：</p><ul><li>小于2s：优秀；</li><li>2s-5s：良好；</li><li>5s-8s：速度很慢；</li><li>大于8s：极差；</li></ul><h2 id="网站性能指标" tabindex="-1"><a class="header-anchor" href="#网站性能指标" aria-hidden="true">#</a> 网站性能指标</h2><ol><li><p><strong>FP 白屏（First Paint Time ）</strong>：第一帧；</p></li><li><p><strong>FCP 首屏（first contentful paint ）</strong>：从页面开始加载到页面内容的任何部分呈现在屏幕上的时间。 （关注的焦点是内容，这个度量可以知道用户什么时候收到有用的信息）</p></li><li><p><strong>LCP（Largest Contentful Paint ）</strong>：LCP 指标代表的是<strong>视窗最大可见图片或者文本块的渲染时间</strong>，用于衡量SPA。</p></li><li><p><strong>TTI （Time To Internative）</strong>：从页面开始到它的主要子资源加载到能够快速地响应用户输入的时间。（没有耗时长任务</p></li><li><p><strong>首次输入延时 FID （first Input Delay）</strong>：从用户第一次与页面交互到浏览器实际能够开始处理事件的时间。（点击，输入，按键）；</p></li><li><p><strong>DCL （DOMContentLoaded）</strong>：当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式，图像和子框架的完成加载。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 对应事件</span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> ready<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ready&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><strong>L（onLoaded）</strong>：当依赖的资源，全部加载完毕之后才会触发；</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h2 id="监测工具" tabindex="-1"><a class="header-anchor" href="#监测工具" aria-hidden="true">#</a> 监测工具</h2><h3 id="web-vitals" tabindex="-1"><a class="header-anchor" href="#web-vitals" aria-hidden="true">#</a> Web Vitals</h3><p>https://zhuanlan.zhihu.com/p/149662237</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>什么是 Web Vitals ？\n\tGoogle 给的定义是一个良好网站的基本指标 (Essential metrics for a healthy site)，\n为什么还要再定义一个新的指标集？\n\t原因是过去要衡量一个好的网站，需要使用的指标太多，推出 Web Vitals 是简化这个学习的曲线，站主只要观注 Web Vitals 指标表现即可。\n\n而在 Web Vitals 指标中，Core Web Vitals 是其中最重要的核心，目前包含三个指标：\n\nLCP 显示最大内容元素所需时间 (衡量网站初次载入速度)\nFID 首次输入延迟时间 (衡量网站互动顺畅程度)\nCLS 累计版面配置移转 (衡量网页元件视觉稳定性)\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="performance-api" tabindex="-1"><a class="header-anchor" href="#performance-api" aria-hidden="true">#</a> Performance API</h3><p>https://developer.mozilla.org/en-US/docs/Web/API/Performance</p><p><code>Performance</code> 是一个浏览器全局对象，提供了一组 API 用于编程式地获取程序在某些节点的性能数据。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 获取 performance 数据</span>\n<span class="token keyword">var</span> performance <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// memory 是非标准属性，只在 Chrome 有</span>\n    <span class="token comment">// 我有多少内存</span>\n    memory<span class="token operator">:</span> <span class="token punctuation">{</span>\n        usedJSHeapSize<span class="token operator">:</span>  <span class="token number">16100000</span><span class="token punctuation">,</span> <span class="token comment">// JS 对象（包括V8引擎内部对象）占用的内存，一定小于 totalJSHeapSize</span>\n        totalJSHeapSize<span class="token operator">:</span> <span class="token number">35100000</span><span class="token punctuation">,</span> <span class="token comment">// 可使用的内存</span>\n        jsHeapSizeLimit<span class="token operator">:</span> <span class="token number">793000000</span> <span class="token comment">// 内存大小限制</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 我从哪里来？</span>\n    navigation<span class="token operator">:</span> <span class="token punctuation">{</span>\n        redirectCount<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 如果有重定向的话，页面通过几次重定向跳转而来</span>\n        type<span class="token operator">:</span> <span class="token number">0</span>           <span class="token comment">// 0   即 TYPE_NAVIGATENEXT 正常进入的页面（非刷新、非重定向等）</span>\n                          <span class="token comment">// 1   即 TYPE_RELOAD       通过 window.location.reload() 刷新的页面</span>\n                          <span class="token comment">// 2   即 TYPE_BACK_FORWARD 通过浏览器的前进后退按钮进入的页面（历史记录）</span>\n                          <span class="token comment">// 255 即 TYPE_UNDEFINED    非以上方式进入的页面</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token comment">//  核心时间相关</span>\n    timing<span class="token operator">:</span> <span class="token punctuation">{</span>\n<span class="token comment">// 在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload ，则与 fetchStart 值相等</span>\n        navigationStart<span class="token operator">:</span> <span class="token number">1441112691935</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 前一个网页（与当前页面同域）unload 的时间戳，如果无前一个网页 unload 或者前一个网页与当前页面不同域，则值为 0</span>\n        unloadEventStart<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 和 unloadEventStart 相对应，返回前一个网页 unload 事件绑定的回调函数执行完毕的时间戳</span>\n        unloadEventEnd<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0</span>\n        redirectStart<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0</span>\n        redirectEnd<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前</span>\n        fetchStart<span class="token operator">:</span> <span class="token number">1441112692155</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等</span>\n        domainLookupStart<span class="token operator">:</span> <span class="token number">1441112692155</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等</span>\n        domainLookupEnd<span class="token operator">:</span> <span class="token number">1441112692155</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等</span>\n        <span class="token comment">// 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间</span>\n        connectStart<span class="token operator">:</span> <span class="token number">1441112692155</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等</span>\n        <span class="token comment">// 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间</span>\n        <span class="token comment">// 注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过</span>\n        connectEnd<span class="token operator">:</span> <span class="token number">1441112692155</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// HTTPS 连接开始的时间，如果不是安全连接，则值为 0</span>\n        secureConnectionStart<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存</span>\n        <span class="token comment">// 连接错误重连时，这里显示的也是新建立连接的时间</span>\n        requestStart<span class="token operator">:</span> <span class="token number">1441112692158</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存</span>\n        responseStart<span class="token operator">:</span> <span class="token number">1441112692686</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存</span>\n        responseEnd<span class="token operator">:</span> <span class="token number">1441112692687</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件</span>\n        domLoading<span class="token operator">:</span> <span class="token number">1441112692690</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// 完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件</span>\n        <span class="token comment">// 注意只是 DOM 树解析完成，这时候并没有开始加载网页内的资源</span>\n        domInteractive<span class="token operator">:</span> <span class="token number">1441112693093</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// DOM 解析完成后，网页内资源加载开始的时间</span>\n        <span class="token comment">// 在 DOMContentLoaded 事件抛出前发生</span>\n        domContentLoadedEventStart<span class="token operator">:</span> <span class="token number">1441112693093</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕）</span>\n        domContentLoadedEventEnd<span class="token operator">:</span> <span class="token number">1441112693101</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// DOM 树解析完成，且资源也准备就绪的时间，Document.readyState 变为 complete，并将抛出 readystatechange 相关事件</span>\n        domComplete<span class="token operator">:</span> <span class="token number">1441112693214</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// load 事件发送给文档，也即 load 回调函数开始执行的时间</span>\n        <span class="token comment">// 注意如果没有绑定 load 事件，值为 0</span>\n        loadEventStart<span class="token operator">:</span> <span class="token number">1441112693214</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// load 事件的回调函数执行完毕的时间</span>\n        loadEventEnd<span class="token operator">:</span> <span class="token number">1441112693215</span>\n\n        <span class="token comment">// 按照字母排序</span>\n        <span class="token comment">// connectEnd: 1441112692155,</span>\n        <span class="token comment">// connectStart: 1441112692155,</span>\n        <span class="token comment">// domComplete: 1441112693214,</span>\n        <span class="token comment">// domContentLoadedEventEnd: 1441112693101,</span>\n        <span class="token comment">// domContentLoadedEventStart: 1441112693093,</span>\n        <span class="token comment">// domInteractive: 1441112693093,</span>\n        <span class="token comment">// domLoading: 1441112692690,</span>\n        <span class="token comment">// domainLookupEnd: 1441112692155,</span>\n        <span class="token comment">// domainLookupStart: 1441112692155,</span>\n        <span class="token comment">// fetchStart: 1441112692155,</span>\n        <span class="token comment">// loadEventEnd: 1441112693215,</span>\n        <span class="token comment">// loadEventStart: 1441112693214,</span>\n        <span class="token comment">// navigationStart: 1441112691935,</span>\n        <span class="token comment">// redirectEnd: 0,</span>\n        <span class="token comment">// redirectStart: 0,</span>\n        <span class="token comment">// requestStart: 1441112692158,</span>\n        <span class="token comment">// responseEnd: 1441112692687,</span>\n        <span class="token comment">// responseStart: 1441112692686,</span>\n        <span class="token comment">// secureConnectionStart: 0,</span>\n        <span class="token comment">// unloadEventEnd: 0,</span>\n        <span class="token comment">// unloadEventStart: 0</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br></div></div><h3 id="lighthouse" tabindex="-1"><a class="header-anchor" href="#lighthouse" aria-hidden="true">#</a> lighthouse</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lighthouse\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',18),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);