import{_ as s,v as n,b as a,R as l}from"./chunks/framework.caa0fbaf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/10.移动端/uniapp.md","filePath":"study/10.移动端/uniapp.md","lastUpdated":1692205004000}'),p={name:"study/10.移动端/uniapp.md"},o=l(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> _canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createOffscreenCanvas</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _w</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _h </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 创建一个图片</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> image </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createImage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 等待图片加载</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">loadResolve</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loadResolve</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#A6ACCD;">image</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 要加载的图片 url</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (error) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image.onload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _w</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _h)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">drawImage</span><span style="color:#A6ACCD;">(image</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _w</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _h)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">/// 水印</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> fontSize </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _w </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.02</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">font </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">normal bold </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">fontSize</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">px sans-serif</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#FFFFFF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowBlur </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(0, 0, 0, 0.5)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> _time </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> L3DateHandler</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDateStringToSec</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillText</span><span style="color:#A6ACCD;">(_time</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontSize</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _h</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fontSize</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fontSize</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(_props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillText</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">_props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fontSize</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_h</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fontSize</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ctx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _canvas)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 获取base64图像</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b64Data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toDataURL</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> time </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> filePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/temp_image_</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.png</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// base64格式的图片要去除逗号前面的部分才能正确解码</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> buffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">base64ToArrayBuffer</span><span style="color:#A6ACCD;">(b64Data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(b64Data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 写入临时文件</span></span>
<span class="line"><span style="color:#A6ACCD;">                uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    filePath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> buffer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">保存图片：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">filePath</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">filePath</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,1),e=[o];function c(r,t,D,F,y,A){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{i as __pageData,b as default};
