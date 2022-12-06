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



## 第四章 字符串的拓展

### 字符串新增方法

#### 方法

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

### 标签模版

```javascript
function tag(s,v1,v2){
	console.log(s[0]);
	console.log(s[1]);
	console.log(s[2]);
	console.log(v1);
	console.log(v2);
}

tag `Hello ${10} world ${20}`;
// "Hello "
// " world "
// ""
// 10
// 20
```



## 第五章 正则的拓展

### RegExp第二个参数

```javascript
let regex = new RegExp(/xyz/g,'i'); // 第二个参数会覆盖修饰符 
```

### 方法：

```javascript
match：
replace：
search：
split：
```

### y修饰符

```javascript
var s = 'aaa_aa_a';
var r = /a+_/y;

r.exec(s) // ["aaa_"]
r.exec(s) // ["aa_"]
```



### 具名匹配

```javascript
const re =  /(\d{4})-(\d{2})-(\d{2})/;

const match = re('2022-01-02'); // [2022,01,02];

```

### 解构赋值和替换 

```javascript
let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
one  // foo
two  // bar


let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
'2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// '02/01/2015'
```



## 第六章 数值的拓展

### 二进制和八进制表示法 

```javascript
0b111110111 === 503 // true
0o767 === 503 // true

// 转换 10 进制
Number('0b111')  // 7
Number('0o10')  // 8
```

### 数值分隔符

[ES2021](https://github.com/tc39/proposal-numeric-separator)，允许 JavaScript 的数值使用下划线（`_`）作为分隔符。分隔符不影响数值比较；

```javascript
12345_00 === 123_4500 
```

数值分隔符有几个使用注意点。

- 不能放在数值的最前面（leading）或最后面（trailing）。
- 不能两个或两个以上的分隔符连在一起。
- 小数点的前后不能有分隔符。
- 科学计数法里面，表示指数的`e`或`E`前后不能有分隔符。

### Math 的拓展

#### trunc

移除一个数的小数部分

```javascript
Math.trunc(4.1) // 4
Math.trunc('4.1') // 4
```

#### sing

`Math.sign`方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

它会返回五种值。

- 参数为正数，返回`+1`；
- 参数为负数，返回`-1`；
- 参数为 0，返回`0`；
- 参数为-0，返回`-0`;
- 其他值，返回`NaN`。

```javascript

```

#### cbrt

`Math.cbrt()`方法用于计算一个数的立方根;

```
Math.cbrt('8') // 2
```

#### hypot

`Math.hypot`方法返回所有参数的平方和的平方根

```
Math.hypot(3, 4); 
```

#### 双曲函数方法

ES6 新增了 6 个双曲函数方法。

- `Math.sinh(x)` 返回`x`的双曲正弦（hyperbolic sine）
- `Math.cosh(x)` 返回`x`的双曲余弦（hyperbolic cosine）
- `Math.tanh(x)` 返回`x`的双曲正切（hyperbolic tangent）
- `Math.asinh(x)` 返回`x`的反双曲正弦（inverse hyperbolic sine）
- `Math.acosh(x)` 返回`x`的反双曲余弦（inverse hyperbolic cosine）
- `Math.atanh(x)` 返回`x`的反双曲正切（inverse hyperbolic tangent）



## 第七章 函数的拓展

### 函数默认参数

```javascript
function log(x, y = 'World') {
  console.log(x, y);
}

function foo({x, y = 5}) {
  console.log(x, y);
}
```

### 必填参数应用

```javascript
function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

foo()

// 可以将参数默认值设为undefined，表明这个参数是可以省略的。
function foo(optional = undefined) { ··· }
```

### rest参数

ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```javascript
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

```javascript
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3)
```

### 箭头函数

**特点：**

（1）箭头函数没有自己的`this`对象（详见下文）。

（2）不可以当作构造函数，也就是说，不可以对箭头函数使用`new`命令，否则会抛出一个错误。

（3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

```javascript
ar f = v => v;

// 等同于
var f = function (v) {
  return v;
};

// 箭头函数写法
[1,2,3].map(x => x * x);

// 箭头函数写法
var result = values.sort((a, b) => a - b);
```

this 的指向

```javascript
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
```

### 尾调用优化

减少调用帧

只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”

```javascript
// 等同于
function f() {
  return g(3);
}
f();
```

### 尾递归

```javascript
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
```

### catch 命令的参数省略

```javascript
try {
  // ...
} catch (err) {
  // 处理错误
}

try {
  // ...
} catch {
  // ...
}
```



## 第八章 数组的扩展

### 拓展运算符

```javascript
console.log(...[1, 2, 3])
// 1 2 3

const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

```

### Array.from

类对象转为真正的数组

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5 的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6 的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']
```

### Array.of

`Array.of()`方法用于将一组值，转换为数组。

```javascript
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]
```

### find

```javascript
[1, 4, -5, 10].find((n) => n < 0)
// -5

[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

const array = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 }
];

array.findLast(n => n.value % 2 === 1); // { value: 3 }
array.findLastIndex(n => n.value % 2 === 1); // 2
```

### fill

`fill`方法使用给定值，填充一个数组。

```javascript
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]


['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```

### entries、keys、values

```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

### includes

```javascript
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false

/// 第二个参数表示搜索的起始位置
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

### flat

```javascript
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]


// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

### at

```javascript
const arr = [5, 12, 8, 130, 44];
arr.at(2) // 8
arr.at(-2) // 130
```



## 第九章 对象的扩展

### 属性的简洁表示法 

```javascript
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}


let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

### 属性

```javascript
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true, // 可枚举性
//    configurable: true
//  }
```

### 新增方法

#### Object.is

比较两个值是否相等

```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

#### Object.assign

对象的合并

注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```javascript
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

```javascript
const source = {
  get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
// { foo: 1 }
```



##### 为对象添加属性

```javascript
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
```

##### **为对象添加方法**

```javascript
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
SomeClass.prototype.anotherMethod = function () {
  ···
};
```

##### **克隆对象**

```javascript
function clone(origin) {
  return Object.assign({}, origin);
}

/// 保持继承链
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
```

##### **为属性指定默认值**

```javascript
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}
```

### Object.keys values entries

```javascript
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
```

### fromEntries

用于将一个键值对数组转为对象。

```javascript
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```

```javascript
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```

### hasOwn

```javascript
const foo = Object.create({ a: 123 });
foo.b = 456;

Object.hasOwn(foo, 'a') // false
Object.hasOwn(foo, 'b') // true


const obj = Object.create(null);

obj.hasOwnProperty('foo') // 报错
Object.hasOwn(obj, 'foo') // false
```

### 链判断运算符 

```javascript
const firstName = message?.body?.user?.firstName || 'default';

const fooValue = myForm.querySelector('input[name=foo]')?.value;

iterator.return?.()
```

## 第十章 Symbol

### 遍历

#### getOwnPropertySymbols

```javascript
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
```

#### Reflect.ownKeys

```javascript
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```



### Symbol.for()

`Symbol.for()`与`Symbol()`这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。`Symbol.for()`不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的`key`是否已经存在，如果不存在才会新建一个值。

```javascript
Symbol.for("bar") === Symbol.for("bar")
// true

Symbol("bar") === Symbol("bar")
// false

```

### Symbol.keyFor()

方法返回一个已登记的 Symbol 类型值的`key`。

```javascript
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) //
```

### Singleton 模式

```javascript
const FOO_KEY = Symbol.for('foo');
const FOO_KEY = Symbol('foo');

function A() {
  this.foo = 'hello';
}

if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}

module.exports = global[FOO_KEY];
```

## 第十一章 Set 和 Map 数据结构

WeakSet

### Set

不重复的值的集合

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]

// 去除数组的重复成员
[...new Set(array)]
```

#### 实例属性

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

#### 遍历操作

Set 结构的实例有四个遍历方法，可以用于遍历成员。

- `Set.prototype.keys()`：返回键名的遍历器 与 values 一样
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```

### Map

本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```

```javascript
/// 对象转为 Map
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));

/// 数组 转为 Map
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
]);

/// Map 转为数组
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
```

遍历：

```javascript
const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```



## 第十二章 Proxy

```javascript
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
```

## 第十三章 Reflect

https://es6.ruanyifeng.com/#docs/reflect

## 第十四章 Promise

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

### Promise.all

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
p.then(res=>{
  /// [p1,p2,p3]
}).catch(e => console.log(e)); /// 如果 p1、、中有自定 catch 则此处捕抓不到
```

`p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

### Promise.allSettled

```
所有对象都发生状态变更（不管是fulfilled还是rejected），返回的 Promise 对象才会发生状态变更。
```



### Promise.race

```javascript
const p = Promise.race([p1, p2, p3]);

/// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变
```

### Promise.any

```javascript
/// Promise.any()跟Promise.race()方法很像，只有一点不同，就是Promise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束。

/// 其中只要有一个变成fulfilled，Promise.any()返回的 Promise 对象就变成fulfilled。如果所有三个操作都变成rejected，那么await命令就会抛出错误。
```



## 第十五章 Iterator 和 for...of 循环

### for in

会遍历原型链

`for...in`循环有几个缺点。

- 数组的键名是数字，但是`for...in`循环是以字符串作为键名“0”、“1”、“2”等等。
- `for...in`循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
- 某些情况下，`for...in`循环会以任意顺序遍历键名。

```javascript
let obj = {
    name:1,
    sex:2,
}

for (const key in obj) {
   console.log(key) // name sex
}

Object.prototype.a = 3;

for (const key in obj) {
    console.log('-',key) // name sex a
 }
```

### for of 遍历对象

- 不同于`forEach`方法，它可以与`break`、`continue`和`return`配合使用。

```javascript
for (var key of Object.keys(someObject)) {
  console.log(key + ': ' + someObject[key]);
}
```



## 第十六章 Generator 函数的语法



```javascript
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

`for...of`循环可以自动遍历 Generator 函数运行时生成的`Iterator`对象，且此时不再需要调用`next`方法。

```javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5


/// 
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

```

### return

函数返回的遍历器对象，还有一个`return()`方法，可以返回给定的值，并且终结遍历 Generator 函数。

```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()     // { value: undefined, done: true }

g.return() // { value: undefined, done: true }
```

## 第十七章 Generator 函数的异步应用



## 第十八章 async 函数

是 Generator 函数的语法糖

```javascript
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
```



## 第十九章 Class 的基本语法

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /// 私有属性
  #brand;

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
  
  /// get set
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
  
  /// 静态方法
  static a(){}
}
let inst = new Point();
inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```



## 第二十章 Class 的继承

写法比 ES5 的原型链继承，要清晰和方便很多

```javascript
class Point {
}

class ColorPoint extends Point {
}
```

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B
```



## 第二十一章 修饰器 



## 第二十二章 Module

### export

```javascript
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 正确
export function f() {};

// 正确
function f() {}
export {f};
```

### import

```javascript
import { firstName, lastName, year } from './profile.js';

/// 重命名
import { lastName as surname } from './profile.js';

import 'lodash';

/// 整体导出
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

/// 导出整体与多个
import _, { each, forEach } from 'lodash';
```

### default

```javascript
export default function () {
  console.log('foo');
}

function foo() {
  console.log('foo');
}
export default foo;

// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

## ES6 模块与 CommonJS 模块的差异

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的`require()`是同步加载模块，ES6 模块的`import`命令是异步加载，有一个独立的模块依赖的解析阶段。
