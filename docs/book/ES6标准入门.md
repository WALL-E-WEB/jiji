# ES6 标准入门（第3 版）

阮一峰 著

- 在线书籍：https://es6.ruanyifeng.com/

- ES6 兼容查询：https://caniuse.com/?search=es6
- 浏览器兼容：http://kangax.github.io/compat-table/es6/

## 第二章 let 和 const 命令

### let

#### 基本用法与var区别

```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

```javascript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

#### 不存在变量提升

```javascript
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

#### 暂时性死区（快级作用域）

```javascript
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

#### 不允许重复声明

`let`不允许在相同作用域内，重复声明同一个变量。

```javascript
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```

### 块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域；

ES6 新增块级作用域；

```javascript
function f1() {
  let n = 5;
  if (true) {
    /// 这里是块级作用域
    let n = 10;
  }
  console.log(n); // 5
}
```

### const

#### 基本用法

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。

const 本质是保存变量指向的内存地址；

```javascript
const PI = 3.1415;
PI // 3.1415

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only


/// 如果真的想将对象冻结，应该使用Object.freeze方法。
const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

### ES6 声明变量的六种方法

1. var
2. function
3. let
4. const
5. import
6. class

### 顶层对象

顶层对象的属性与全局变量是等价的。

环境全局对象：

- 浏览器：window；
- node：global；
- Web Worker：self

```javascript
window.a = 1;
a // 1

var a = 1;
window.a // 1

/// ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。

let b = 1;
window.b // undefined
```

var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；`

`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。



## 第三章 变量的解构赋值

### 数组的解构赋值

#### 基本使用：

```javascript
/// 一一对应结构域
let [a, b, c] = [1, 2, 3];
```

模式匹配：

```javascript
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
```

#### 解构默认值：

```javascript
let [x = 1, y = 2] = [];  
```

```javascript
// 严格等于 undefined 才会赋值默认值
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
```

### 对象的解构

#### 基本使用

```javascript
let {  bar, foo} = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined

/// 解构并重新赋值
/// 此时 foo 是模式；baz 才是变量
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined
```

```javascript
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]
```

#### 默认值：

```javascript
var {x = 3} = {};
x // 3

var {x: y = 3} = {x: 5};
y // 5
```

已声明变量解构：

```javascript
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error


// 正确的写法
let x;
({x} = {x: 1});
```

数组对象解构：

```javascript
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
last // 3
```

### 字符串解构

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

let {length : len} = 'hello';
len // 5
```

### 函数参数解构

```javascript
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3

function move({x = 0, y = 0} = {}) {
  return [x, y];
}
```

**案例：**

交换变量的值：

```javascript
let x = 1;
let y = 2;

[x, y] = [y, x];
```

从函数返回多个值：

```javascript
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

### 字符串新增方法

- includes：
- startsWith：
- endsWith:
- repeat：重复原字符 n 次

```javascript
let s = 'hello world';

s.startsWith('hello', 0); // true 第二个参数表示开始搜索的位置
s.includes('o'); // true

s.endsWith('world',0); // true 第二个参数表示搜索 结束位置

s.repeat(2)// 'hello worldhello world'
```

