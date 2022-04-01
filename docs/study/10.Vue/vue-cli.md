# Vue-cli

## 获取默认配置

```
1. npx vue-cli-service inspect --mode development >> webpack.conf.dev.js  （webpack.conf.dev.js为输出文件名）；
2. node_modules/@vue/cli-service/lib/options.js 查看源码配置；
```



```js
运行nodejs:node -v
安装:npm install -g @vue/cli
创建项目: vue create 文件名
运行:npm run serve

查看webpack配置：
npx vue-cli-service serve [options] [entry]

//查看production配置，并输出到webpack.config.production.js 文件
//加入module.exports ={ }包住，index后加“：”格式化即可无报错。
npx vue-cli-service inspect --mode production >> webpack.config.production.js
npx vue-cli-service inspect --mode development //查看development环境下cli的webpack配置
npx vue-cli-service help serve  //帮助
```

## build

### 1.分析：

```json
"build": "cross-env FILE_NAME=ui vue-cli-service build --report",

packagejson中设置命令行 添加 --report

dist生成report,html打开即可。
```

### 2.打包优化

```json
productionSourceMap: false， //取消生成map文件
productionGzip：true， //开启gzip压缩
```

# vue开发环境与生产环境 跨域

```
https://segmentfault.com/a/1190000017905030?utm_source=tag-newest
https://github.com/chimurai/http-proxy-middleware#proxycontext-config
```

  /config /index.js

```js
//自行复制黏贴
proxyTable: {
  '/apis':{
    target: 'http://10.1.63.26:19080/',  // 后台api
    changeOrigin: true,  //是否跨域
    // secure: true,
    pathRewrite: {
      '^/apis': ''   //需要rewrite的,
    }
  }
}
```

/config /api.config.js 

```js
//判断是否是生产环境
var isPro = process.env.NODE_ENV === 'production' //process.env.NODE_ENV用于区分是生产环境还是开发环境
//根据环境不同导出不同的baseURL
module.exports = {
    baseURL: isPro ? 'http://sbsb.com:8888/' : '/apis'
}
```

main.js

```js
import Vue from 'vue'
import axios from 'axios'
import apiConfig from '../config/api.config.js'
axios.defaults.baseURL=apiConfig.baseURL
```

 encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。 

## vue-cli3.0+

```js
根目录中创建vue.config.js文件:
module.exports = {
devServer : {
        proxy : {
            '/index' : {
                target : 'http://localhost/index',
                // ws : true,
                changeOrigin : true,
                pathRewrite : {
                    '^/index' : ''
                }
            }
        }
    }
}

axios.defaults.baseURL = '/index'
链接：https://juejin.im/post/5d1cc073f265da1bcb4f486d

build后 基地在为运行时的地址


```

```js
import axios from 'axios'
var baseUrl = ''

// 环境判断
if (process.env.NODE_ENV === 'development') {
   baseUrl = '/index'
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'test'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'www.prodction.com'
}

axios.defaults.baseURL = baseUrl

build后 基地址为 production 的地址
	如:www.prodction.com/user

```



```js
第二种:无需配置axios.defaults.baseURL
module.exports = {
devServer : {
      proxy: "http://localhost:3000",
      port: 8080
}
    
build后 基地在为运行时的地址;
    如:生产环境地址为www.baidu.com
    	请求接口地址为:www.baidu.com/user;
    	而不是http://localhost:3000/user
```

## vue-cli3.0+ 配置文件+命令行跨域解决方案

1. 在package.json同级目录下创建 环境配置文件 .env.xxx (xxx一般为:dev / pro /test )
2. package.json配置 命令行
3. 配置axios.defaults.baseURL
4. vue.config.js配置跨域

>1.在package.json同级目录下创建 环境配置文件
>
>![image-20200305161012418](D:\walle笔记\-notes-\8、VUE\VUE.assets\image-20200305161012418-1583633264842.png)
>
>```js
>文件内容格式如下:按需
>NODE_ENV="development"                            //环境名
>VUE_APP_BASE_URL="http://xxx.xxx.xxx"             //服务器地址
>VUE_APP_BASE_API="http://xxx.xxx.xxx:port"        //接口地址
>VUE_APP_DIR_NAME="xxx"                            //打包名
>
>注意:
>	1.必须以VUE_APP开头
>2.上面地址引号后不可有空格
>3.设置跨域后VUE_APP_BASE_API接上vue.config.js文件中proxy设置的'/api'
>	如:VUE_APP_BASE_API="http://xxx.xxx.xxx:port/api"
>```
>
>2.package.json配置 命令行
>
>```json
>{
>"name": "qywx",
>"version": "0.1.0",
>"private": true,
>"scripts": {
>"serve": "vue-cli-service serve",
>"build": "vue-cli-service build",
> //'development'为.env.xxx文件中NODE_ENV对应
> // --mode 后制定执行的文件
>"serve:dev": "vue-cli-service serve --mode development",
>"build:pro": "vue-cli-service build --mode production"
>},
>} 
>
>命令窗口运行:npm run serve:dev 开发模式
>命令窗口运行:npm run build:pro 打包生产模式
>```
>
>3.配置axios.defaults.baseURL
>
>```js
>import axios from 'axios'
>axios.defaults.baseURL = process.env.VUE_APP_BASE_API
>```
>
>4.vue.config.js中devserver配置跨域;
>
>```js
>let env = process.env.NODE_ENV;
>// npm i compression-webpack-plugin -D
>const CompressionWebpackPlugin = require("compression-webpack-plugin");
>module.exports = {
>// 如果是hash模式
>publicPath: env === 'production' ? './' : '/',
>
>// 如果是history模式
>// publicPath: env === 'production' ? '/' : '/',
>outputDir: 'dist/c',
>filenameHashing: false,
>productionSourceMap: false,
>
>// 输出文件目录默认'dist
>outputDir: "dist",
>
>runtimeCompiler: false,
>
>// 静态资源目录 (js, css, img, fonts)
>
>assetsDir: "assets",
>//设置打包之后是否打包.map文件
>productionSourceMap: env !== "development" ? false : true,
>
>// 所有 webpack-dev-server 的选项都支持
>devServer: {
>   port: 8083,
>   host: "0.0.0.0",
>   hot: true,
>   open: false,
>   disableHostCheck: true,
>   proxy: {
>       // axios.defaults.baseURL = '/api'
>       //或axios.defaults.baseURL = 'http://xxxxx/api'
>       '/api': {
>           target: "http://localhost:3000",
>           // ws: true,
>           changeOrigin: true,
>           pathRewrite: {
>               '^/api': ''
>           }
>       },
>   }
>   // proxy: "http://localhost:3000",
>
>},
>configureWebpack: config => {
>   if (env !== "development") {
>       // 配置打包 压缩js
>       config.plugins.push(
>           new CompressionWebpackPlugin({
>               algorithm: "gzip",
>               test: /\.js$|\.html$|.\css/, //匹配文件名
>               threshold: 10240, //对超过10k的数据压缩
>               deleteOriginalAssets: false, //不删除源文件
>               minRatio: 0.8
>           })
>       );
>   }
>}
>}
>```
>
>





# 拓展内容

```js
[Vue.delete](https://cn.vuejs.org/v2/api/#Vue-directive)
[vue原理剖析](https://juejin.im/user/59ee29a36fb9a0451c3990e5/posts)
[es6,7,8,9,10新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2)
[iView-基于Vue的ui框架](https://www.iviewui.com/)
[Cube-ui-移动端Vue组件库](https://didi.github.io/cube-ui/#/zh-CN/example)
[Mint-ui -饿了么团队开发的移动端Vue组件库](http://mint-ui.github.io/#!/zh-cn)
[Vux-未适配vue-cli3.x的移动端ui库](https://doc.vux.li/zh-CN/)
[mui  HBuilder团队开发的移动端框架](http://dev.dcloud.net.cn/mui/)
[D2-admin 现成的后台管理界面](https://d2admin.fairyever.com)
[iView-admin 基于iView搭建的后台管理页面](http://admin.iviewui.com/login)
[Element - admin 基于Elementui实现的后台管理页面](https://panjiachen.github.io/vue-element-admin-site/zh/)
[vue-resource（早期结合Vue的网络请求库）](https://github.com/pagekit/vue-resource)
[为什么不在推荐vue-resource](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4#.2rkai1shx)

[vue-i18n国际化](https://github.com/kazupon/vue-i18n)
              

```

# 
