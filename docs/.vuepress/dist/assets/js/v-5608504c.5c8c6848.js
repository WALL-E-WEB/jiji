"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[700],{6428:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5608504c",path:"/study/7.Git/git.html",title:"git",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"git init",slug:"git-init",children:[]},{level:3,title:"git add .",slug:"git-add",children:[]},{level:3,title:"git status",slug:"git-status",children:[]},{level:3,title:"git commit",slug:"git-commit",children:[]},{level:3,title:"git log",slug:"git-log",children:[]},{level:3,title:"git diff",slug:"git-diff",children:[]},{level:3,title:"git reset",slug:"git-reset",children:[]},{level:3,title:"git忽视文件",slug:"git忽视文件",children:[]},{level:3,title:"git pull",slug:"git-pull",children:[]},{level:3,title:"git 忽略文件",slug:"git-忽略文件",children:[]},{level:3,title:"查看设置邮箱和用户",slug:"查看设置邮箱和用户",children:[]},{level:3,title:"git branch",slug:"git-branch",children:[]},{level:2,title:"git stash -u 存档",slug:"git-stash-u-存档",children:[{level:3,title:"本地同步至githab",slug:"本地同步至githab",children:[]},{level:3,title:"git clone",slug:"git-clone",children:[]},{level:3,title:"git commit 常用",slug:"git-commit-常用",children:[]}]},{level:2,title:"提交规范",slug:"提交规范",children:[]}],filePathRelative:"study/7.Git/git.md",git:{updatedTime:1641463522e3}}},3661:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});const e=(0,a(6252).uE)('<p><img src="/image/git/git回顾.png" alt="git回顾"></p><p>git push 报错问题</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ipconfig /flushdns\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1><p>是版本管理软件</p><p>版本管理</p><p>查看绑定地址</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>作用：初始化git仓库，想要使用git对某个项目进行管理，需要<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">git init</span><span class="token template-punctuation string">`</span></span>进行初始化\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add .</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># 将index<span class="token punctuation">.</span>html添加到暂存区\ngit add index<span class="token punctuation">.</span>html\n\n# 将css目录下所有的文件添加到暂存区\ngit add css\n\n# 将当前目录下所有的js文件添加到暂存区\ngit add <span class="token operator">*</span><span class="token punctuation">.</span>js\n\n# 添加当前目录下所有的文件\ngit add <span class="token punctuation">.</span>\ngit add <span class="token operator">-</span><span class="token constant">A</span>\ngit add <span class="token operator">--</span>all\n\n注意点：空的文件夹是会被忽略掉的，如果想要提交这个文件夹，一般会在该目录下创建一个<span class="token punctuation">.</span>gitkeep文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status" aria-hidden="true">#</a> git status</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>查看提交状态\n<span class="token operator">-</span> 红色表示工作区中的文件需要提交\n<span class="token operator">-</span> 绿色表示暂存区中的文件需要提交\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># 将文件从暂存区提交到仓库\ngit commit <span class="token operator">-</span>m <span class="token string">&quot;提交说明&quot;</span>\n\n# 如果不写提交说明，会进入vi编辑器，没有写提交说明，是提交不成功的。\ngit commit   # 需要使用vi输入内容\n\n# 如果是一个已经暂存过的文件，可以快速提交，如果是未追踪的文件，那么命令将不生效。\ngit commit <span class="token operator">-</span>a <span class="token operator">-</span>m <span class="token string">&#39;提交说明&#39;</span>\n\n# 修改最近的一次提交说明， 如果提交说明不小心输错了，可以使用这个命令\ngit commit <span class="token operator">--</span>amend <span class="token operator">-</span>m <span class="token string">&quot;提交说明&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">-</span> 作用：查看提交日志\ngit log查看提交的日志 \ngit log <span class="token operator">--</span>oneline   \ngit reflog 查看全部\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="/image/git/git01.png" alt="git01"></p><h3 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff" aria-hidden="true">#</a> git diff</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># 查看工作区与暂存区的不同\ngit diff\n\n# 查看暂存区与仓库区的不同\ngit diff <span class="token operator">--</span>cached\n\n# 查看工作区与仓库区的不同，<span class="token constant">HEAD</span>表示最新的那次提交\ngit diff <span class="token constant">HEAD</span>\n\n# 查看两个版本之间的不同\ngit diff c265262 de4845b\n\n# 查看pull下来的和上一次提交的差别\ngit diff <span class="token constant">HEAD</span><span class="token operator">^</span><span class="token number">1</span>\n\n# 比当前提交新<span class="token number">2</span>个的提交的比较：\ngit diff <span class="token constant">HEAD</span><span class="token operator">~</span><span class="token number">2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><img src="/image/git/git02.png" alt="git02"></p><h3 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>作用：版本回退，将代码恢复到已经提交的某一个版本中。\n\ngit reset <span class="token operator">--</span>hard 版本号\n\ngit reset <span class="token operator">--</span>hard head<span class="token operator">~</span><span class="token number">1</span>`将版本回退到上一次提交\n<span class="token operator">-</span> <span class="token operator">~</span><span class="token number">1</span><span class="token operator">:</span>上一次提交\n<span class="token operator">-</span> <span class="token operator">~</span><span class="token number">2</span><span class="token operator">:</span>上上次提交\n<span class="token operator">-</span> <span class="token operator">~</span><span class="token number">0</span><span class="token operator">:</span>当前提交\n\ngit reflog 查看所有版本信息\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="git忽视文件" tabindex="-1"><a class="header-anchor" href="#git忽视文件" aria-hidden="true">#</a> git忽视文件</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>在仓库的根目录创建一个<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.gitignore</span><span class="token template-punctuation string">`</span></span>的文件，文件名是固定的。\n\n将不需要被git管理的文件路径添加到<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.gitignore</span><span class="token template-punctuation string">`</span></span>中<span class="token punctuation">.</span>\n# 忽视idea<span class="token punctuation">.</span>txt文件\nidea<span class="token punctuation">.</span>txt\n\n# 忽视css下的index<span class="token punctuation">.</span>js文件\ncss<span class="token operator">/</span>index<span class="token punctuation">.</span>js\n\n# 忽视css下的所有的js文件\ncss<span class="token comment">/*.js\n\n# 忽视css下的所有文件\ncss/*.*\n# 忽视css文件夹\ncss\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>拉 同步最新代码\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="git-忽略文件" tabindex="-1"><a class="header-anchor" href="#git-忽略文件" aria-hidden="true">#</a> git 忽略文件</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> touch <span class="token punctuation">.</span>gitignore，生成<span class="token punctuation">.</span>gitignore文件\n<span class="token number">2.</span> 在生成的<span class="token punctuation">.</span>gitignore文件里输入你要忽略\n\n如<span class="token operator">:</span>\nnode_modules<span class="token operator">/</span>\ndist<span class="token operator">/</span>\n\n配置规则：\n\n以斜杠“<span class="token operator">/</span>”开头表示目录；\n以星号“<span class="token operator">*</span>”通配多个字符；\n以问号“<span class="token operator">?</span>”通配单个字符；\n以方括号“<span class="token punctuation">[</span><span class="token punctuation">]</span>”包含单个字符的匹配列表；\n以叹号“<span class="token operator">!</span><span class="token function">”表示不忽略</span><span class="token punctuation">(</span>跟踪<span class="token punctuation">)</span>匹配到的文件或目录；\n\n 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="查看设置邮箱和用户" tabindex="-1"><a class="header-anchor" href="#查看设置邮箱和用户" aria-hidden="true">#</a> 查看设置邮箱和用户</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\tgit config user<span class="token punctuation">.</span>email\n\tgit config user<span class="token punctuation">.</span>name\n\n##### 修改用户邮箱和用户名<span class="token operator">:</span>\n\n第一种办法<span class="token operator">:</span>  直接重新再设置一下<span class="token punctuation">,</span>他就会覆盖<span class="token punctuation">.</span>\n\ngit config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">&quot;you@example.com&quot;</span>\ngit config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">&quot;Your Name&quot;</span> \n\n第二种办法<span class="token operator">:</span>  退出再登录\n\n\t退出<span class="token operator">:</span>\ngit  config  <span class="token operator">--</span>global   <span class="token operator">--</span>unset  user<span class="token punctuation">.</span>email\ngit  config  <span class="token operator">--</span>global   <span class="token operator">--</span>unset  user<span class="token punctuation">.</span>name\n推荐大家使用 github注册的邮箱和用户名来登录<span class="token punctuation">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>新建分支<span class="token operator">:</span> git branch 分支名\n切换分支<span class="token operator">:</span> git checkout 分支名\n合并分支<span class="token operator">:</span> git merge 分支名 <span class="token comment">//回到主分支合并</span>\n删除分支<span class="token operator">:</span> git branch <span class="token operator">-</span>d 分支名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="git-stash-u-存档" tabindex="-1"><a class="header-anchor" href="#git-stash-u-存档" aria-hidden="true">#</a> git stash -u 存档</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git stash -u 存档\ngit stash pop\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="本地同步至githab" tabindex="-1"><a class="header-anchor" href="#本地同步至githab" aria-hidden="true">#</a> 本地同步至githab</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git remote rm origin  <span class="token comment">//清除</span>\n\ngit remote add origin https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>\n\ngit push <span class="token operator">-</span>u origin master\n# 给远程仓库设置一个别名\ngit remote add 仓库别名 仓库地址\ngit remote add autumnFish git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>autumnFish<span class="token operator">/</span>test<span class="token punctuation">.</span>git\n\n# autumnFish\ngit remote remove autumnFish\n\n# git clone的仓库默认有一个origin的别名\n\n\n修改远程仓库地址\ngit remote set<span class="token operator">-</span>url origin <span class="token punctuation">[</span>url<span class="token punctuation">]</span>\ngit push origin master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>\n\ngit push \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="git-commit-常用" tabindex="-1"><a class="header-anchor" href="#git-commit-常用" aria-hidden="true">#</a> git commit 常用</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>feat： 新增 feature\nfix<span class="token operator">:</span> 修复 bug\ndocs<span class="token operator">:</span> 仅仅修改了文档，比如 <span class="token constant">README</span><span class="token punctuation">,</span> <span class="token constant">CHANGELOG</span><span class="token punctuation">,</span> <span class="token constant">CONTRIBUTE</span>等等\nstyle<span class="token operator">:</span> 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑\nrefactor<span class="token operator">:</span> 代码重构，没有加新功能或者修复 bug\nperf<span class="token operator">:</span> 优化相关，比如提升性能、体验\ntest<span class="token operator">:</span> 测试用例，包括单元测试、集成测试等\nchore<span class="token operator">:</span> 改变构建流程、或者增加依赖库、工具等\nrevert<span class="token operator">:</span> 回滚到上一个版本\n\nupdata\n<span class="token keyword">delete</span>\nadd\nfix\nperf\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>廖雪峰讲git:</p><p>https://www.liaoxuefeng.com/wiki/896043488029600/896067008724000</p><p>https://www.liaoxuefeng.com/wiki/1022910821149312</p><p>http://www.ruanyifeng.com/blog/2015/07/flex-examples.html</p><p>http://es6.ruanyifeng.com/</p><p>​</p><h2 id="提交规范" tabindex="-1"><a class="header-anchor" href="#提交规范" aria-hidden="true">#</a> 提交规范</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>feat： 增加新功能\nfix： 修复问题<span class="token operator">/</span>BUG\nstyle： 代码风格相关无影响运行结果的\nperf： 优化<span class="token operator">/</span>性能提升\nrefactor： 重构\nrevert： 撤销修改\ntest： 测试相关\ndocs： 文档<span class="token operator">/</span>注释\nchore： 依赖更新<span class="token operator">/</span>脚手架配置修改等\nworkflow： 工作流改进\nci： 持续集成\ntypes： 类型定义文件更改\nwip： 开发中\nmod： 不确定分类的修改\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',50),p={},r=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);