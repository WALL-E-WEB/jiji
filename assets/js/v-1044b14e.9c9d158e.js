"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2725],{7956:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-1044b14e",path:"/study/2.CSS/less.html",title:"less",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"选择器插值",slug:"选择器插值",children:[]},{level:2,title:"字符串插值",slug:"字符串插值",children:[]},{level:2,title:"less递归",slug:"less递归",children:[]},{level:2,title:"拼接类名",slug:"拼接类名",children:[]},{level:2,title:"mixin",slug:"mixin",children:[]},{level:2,title:"导出变量",slug:"导出变量",children:[]}],filePathRelative:"study/2.CSS/less.md",git:{updatedTime:1645414541e3}}},4151:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h1><p>https://www.cnblogs.com/MrZhujl/p/12073771.html</p><p>https://blog.csdn.net/weixin_42708208/article/details/90260827</p><h2 id="选择器插值" tabindex="-1"><a class="header-anchor" href="#选择器插值" aria-hidden="true">#</a> 选择器插值</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">//Less</span>\n<span class="token variable">@name<span class="token punctuation">:</span></span> blocked<span class="token punctuation">;</span>\n<span class="token selector">.@{name}</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//输出css</span>\n<span class="token selector">.blocked</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="字符串插值" tabindex="-1"><a class="header-anchor" href="#字符串插值" aria-hidden="true">#</a> 字符串插值</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@base-url<span class="token punctuation">:</span></span> <span class="token string">&quot;http://baidu.com&quot;</span><span class="token punctuation">;</span>\n<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;@{base-url}/images/bg.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="less递归" tabindex="-1"><a class="header-anchor" href="#less递归" aria-hidden="true">#</a> less递归</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>.<span class="token function">wmixin</span><span class="token punctuation">(</span>24<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//声明 .wmixin为命名 而不是 class</span>\n<span class="token selector">.wmixin(<span class="token variable">@n</span>, <span class="token variable">@i</span>: 1) when (<span class="token variable">@i</span> =&lt; <span class="token variable">@n</span>)</span> <span class="token punctuation">{</span> <span class="token comment">// if</span>\n  <span class="token selector">&amp;.w-col-span-@{i}</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@i</span> <span class="token operator">/</span> 24 <span class="token operator">*</span> 100%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  .<span class="token function">wmixin</span><span class="token punctuation">(</span><span class="token variable">@n</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">@i</span> <span class="token operator">+</span> 1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//递归</span>\n<span class="token punctuation">}</span>\n\n.<span class="token function">generate-col</span><span class="token punctuation">(</span>30<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token selector">.generate-col(<span class="token variable">@n</span>, <span class="token variable">@i</span>: 2) when (<span class="token variable">@i</span> =&lt; <span class="token variable">@n</span>)</span> <span class="token punctuation">{</span>\n  <span class="token selector">.p_@{i}</span> <span class="token punctuation">{</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span><span class="token variable">@i</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.p_l_@{i}</span> <span class="token punctuation">{</span>\n    <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token variable">@i</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.p_r_@{i}</span> <span class="token punctuation">{</span>\n    <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token variable">@i</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.p_b_@{i}</span> <span class="token punctuation">{</span>\n    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token variable">@i</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.p_t_@{i}</span> <span class="token punctuation">{</span>\n    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token variable">@i</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  .<span class="token function">generate-col</span><span class="token punctuation">(</span><span class="token variable">@n</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">@i</span><span class="token operator">+</span>2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token selector">.wh(<span class="token variable">@number</span>,<span class="token variable">@min</span>) when ( <span class="token variable">@number</span> &gt; <span class="token variable">@min</span>)</span>  <span class="token punctuation">{</span>\n  <span class="token selector">.zj_w_@{number}</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span>  ~<span class="token string">&#39;@{number}px&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.zj_h_@{number}</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> ~<span class="token string">&#39;@{number}px&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n .<span class="token function">wh</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token variable">@number</span> <span class="token operator">-</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">@min</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n.<span class="token function">wh</span><span class="token punctuation">(</span>200<span class="token punctuation">,</span>30<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="拼接类名" tabindex="-1"><a class="header-anchor" href="#拼接类名" aria-hidden="true">#</a> 拼接类名</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>\n  <span class="token selector">&amp;_a</span><span class="token punctuation">{</span>\n \t<span class="token property">height</span><span class="token punctuation">:</span>10px \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token selector">----\n\n.box_a</span><span class="token punctuation">{</span>\n\t<span class="token property">height</span><span class="token punctuation">:</span>10px \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> mixin</h2><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.hairline-common()</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.hairline</span><span class="token punctuation">{</span>\n  <span class="token mixin-usage function">.hairline-common</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>\n  <span class="token property">right</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>\n  <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="导出变量" tabindex="-1"><a class="header-anchor" href="#导出变量" aria-hidden="true">#</a> 导出变量</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>导出变量 js使用\n@number:58;\n:export {\n  number:@number\n\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',15),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);