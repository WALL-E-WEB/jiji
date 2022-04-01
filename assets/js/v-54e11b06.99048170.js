"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5894],{521:(s,n,a)=>{a.r(n),a.d(n,{data:()=>p});const p={key:"v-54e11b06",path:"/study/10.Vue/nuxt.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"中间件",slug:"中间件",children:[{level:3,title:"1.路由中间件",slug:"_1-路由中间件",children:[]},{level:3,title:"2.指定中间件",slug:"_2-指定中间件",children:[]},{level:3,title:"3.匿名",slug:"_3-匿名",children:[]}]}],filePathRelative:"study/10.Vue/nuxt.md",git:{updatedTime:1639555747e3}}},8980:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const p=(0,a(6252).uE)('<p>https://www.nuxtjs.cn/</p><p>https://zh.nuxtjs.org/examples</p><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><h3 id="_1-路由中间件" tabindex="-1"><a class="header-anchor" href="#_1-路由中间件" aria-hidden="true">#</a> 1.路由中间件</h3><ol><li>middleware中创建js文件；</li><li>nuxt.config.js注册中间件；</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>nuxt<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  router<span class="token operator">:</span> <span class="token punctuation">{</span>\n    middleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>middleware<span class="token operator">/</span><span class="token keyword">class</span><span class="token punctuation">.</span>js\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;class/SetClass&#39;</span><span class="token punctuation">,</span> route<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-指定中间件" tabindex="-1"><a class="header-anchor" href="#_2-指定中间件" aria-hidden="true">#</a> 2.指定中间件</h3><ol><li>middleware中创建js文件；</li><li>组件中引入；</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// middleware/class.js</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;class/SetClass&#39;</span><span class="token punctuation">,</span> route<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// home.vue</span>\n\n<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  middleware<span class="token operator">:</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-匿名" tabindex="-1"><a class="header-anchor" href="#_3-匿名" aria-hidden="true">#</a> 3.匿名</h3><ol><li>组件中直接使用；</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;analytics/increment&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',14),e={},t=(0,a(3744).Z)(e,[["render",function(s,n){return p}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,p]of n)a[s]=p;return a}}}]);