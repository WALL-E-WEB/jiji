import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"swift","description":"","frontmatter":{},"headers":[],"relativePath":"study/21.Ios/ios.md","filePath":"study/21.Ios/ios.md","lastUpdated":1692205004000}'),p={name:"study/21.Ios/ios.md"},e=l(`<h1 id="my-anchor" tabindex="-1">swift <a class="header-anchor" href="#my-anchor" aria-label="Permalink to &quot;swift&quot;">​</a></h1><p>Swift</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">https://developer.apple.com/documentation/swift/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">语言指南：</span></span>
<span class="line"><span style="color:#A6ACCD;">https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">状体管理：</span></span>
<span class="line"><span style="color:#A6ACCD;">https://developer.apple.com/documentation/swiftui/managing-user-interface-state</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><a href="https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html" target="_blank" rel="noreferrer">https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html</a></p><p><a href="https://developer.apple.com/documentation/swift/" target="_blank" rel="noreferrer">swift</a></p><p><a href="https://swiftgg.gitbook.io/swift/" target="_blank" rel="noreferrer">swift 中文</a></p><p><a href="https://developer.apple.com/documentation/foundation/" target="_blank" rel="noreferrer">API</a></p><p><a href="https://developer.apple.com/documentation/swiftui" target="_blank" rel="noreferrer">swiftui</a></p><h2 id="my-anchor-1" tabindex="-1">遍历 <a class="header-anchor" href="#my-anchor-1" aria-label="Permalink to &quot;遍历&quot;">​</a></h2><h3 id="my-anchor-2" tabindex="-1">for in <a class="header-anchor" href="#my-anchor-2" aria-label="Permalink to &quot;for in&quot;">​</a></h3><div class="language-swift line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> index </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">...</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">\\(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">let</span><span style="color:#A6ACCD;"> names </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Anna</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alex</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Brian</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Jack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#F78C6C;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> names.count</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">..&lt;</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">\\(</span><span style="color:#A6ACCD;">names</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">])</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> names</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">...]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> names</span><span style="color:#89DDFF;">[...</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> names</span><span style="color:#89DDFF;">[..&lt;</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h1 id="my-anchor-3" tabindex="-1">Swift UI <a class="header-anchor" href="#my-anchor-3" aria-label="Permalink to &quot;Swift UI&quot;">​</a></h1><p>Text</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://developer.apple.com/documentation/swiftui/text</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),o=[e];function t(r,c,i,D,y,F){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
