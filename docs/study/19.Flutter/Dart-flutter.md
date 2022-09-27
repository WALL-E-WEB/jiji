# Dart

## 基本语法

### 变量

```js
var name = 1  //可重复赋值

final name = new Date.now() //不可重复赋值,可为表达式

const name = 1 //不可重复赋值,常量
final a = const [] //创建常量值端构造函数

String name = '1' //指定类型
```

### 数据类型

```dart
Number 
    int doulbe	 // 类型 num
String	
Boolean
List (也被称为 Array)
Map //对象
Set	//无序数组 唯一值
Rune (用于在字符串中表示 Unicode 字符)
Symbol
```

- int

  ```
  移位<< >>  按位与^ 按位或|
  assert((3 << 1) == 6); // 0011 << 1 == 0110
  assert((3 >> 1) == 1); // 0011 >> 1 == 0001
  assert((3 | 4) == 7); // 0011 | 0100 == 0111
  ```

- String

  ```dart
  https://www.cnblogs.com/lxlx1798/p/11280106.html
  
  $表达式
  var name = 'walle'
  print('abc$name'); // abcwalle
  
  + 拼接
  ''' ''', """ """ 保持换行空格样式;
  
  ```

- Boolean

  ```dart
  // 检查空字符串。
  var fullName = '';
  assert(fullName.isEmpty);
  
  // 检查 0 值。
  var hitPoints = 0;
  assert(hitPoints <= 0);
  
  // 检查 null 值。
  var unicorn;
  assert(unicorn == null);
  
  // 检查 NaN 。
  var iMeantToDoThis = 0 / 0;
  assert(iMeantToDoThis.isNaN);
  ```

- Set

  ```dart
  var names = <String>{};
  // Set<String> names = {}; // 这样也是可以的。
  // var names = {}; // 这样会创建一个 Map ，而不是 Set 。
  ```

- Map

  ```dart
  var gifts = Map();
  var gifts =new Map(); //new 可选
  gifts['first'] = 'partridge';
  常量声明
  final constantMap = const {
    2: 'helium',
    10: 'neon',
    18: 'argon',
  };
  ```

  ## Map
  
  创建
  
  ```dart
  创建Map: var map1 = {"first":"Dart",1:true,true:"2"};
  创建不可变Map: var map2 = const{"first":"Dart",1:true,true:"2"};
  
  构造创建：var map3 = new Map();
  ```
  
  
  
  ```dart
  	常用属性：
          keys            获取所有的key值
          values          获取所有的value值
          isEmpty         是否为空
          isNotEmpty      是否不为空
      常用方法:
          remove(key)     删除指定key的数据
          addAll({...})   合并映射  给映射内增加属性
          containsValue   查看映射内的值  返回true/false
          forEach   
          map
          where
          any
          every
       常用操作   
          [],length,keys,values,
          containsKey,
          containsValue,
          remove,forEach 
  ```
  
  

### 数据转换

```dart
String --> int
var one = int.parse('1')

String --> double
var one = double.parse('1')

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

### 函数

```dart
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}

isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}

bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

- 参数

  ```dart
  可选参数
  String say(String from, String msg, [String device]) {
    var result = '$from says $msg';
    if (device != null) {
      result = '$result with a $device';
    }
    return result;
  }
  ```

  ```dart
  默认参数
  void enableFlags({bool bold = false, bool hidden = false}) {...}
  ```

  ```dart
  list map 默认参数
  void doStuff(
      {List<int> list = const [1, 2, 3],
      Map<String, String> gifts = const {
        'first': 'paper',
        'second': 'cotton',
        'third': 'leather'
      }}) {
    print('list:  $list');
    print('gifts: $gifts');
  }
  ```

  

### String

```
https://www.cnblogs.com/lxlx1798/p/11280106.html
```



### List

```
https://api.dart.dev/stable/2.12.3/dart-core/List-class.html
```

常用属性

```
length
reversed
isEmpty
isNotEmpty
```

常用方法

```dart
add:
addAll:
indexOf:
remove(value):
removeAt(index):

insert(index,value):
insert(index,list):

toList():
join():
split():
map: 返回return值
where: 返回符合条件的value

```

遍历

```dart
for

for in

forEach
```



### Set

```
Set set = Set.from([1,2,3]);
```

常用属性

```dart
first:
last:
length:

```

常用方法

```dart
add:
addAll:
add:
addAll:

contains:
containsAll:

elementAt(index):返回索引value

remove(value):
removeAll([1,2]):

clear:
```

遍历

```dart
for in

set.toList().forEach()
```

### Map

常用属性

```
keys:
values:

```

常用方法

```dart
addAll:
containsKey:
containsValue:

remove(key):
clear:
```

遍历

```dart
forEach

for in
```



### 枚举类型

- 枚举不能被子类化，混合或实现。
- 枚举不能被显式实例化。

```dart
enum color {
	red,
	green,
}

color.red

Color.red.index == 0

 List<Color> colors = Color.values;
 // [Color.red, Color.green, Color.blue]


```

### extension

实现类似 .sh 方法

```dart
/// Widget 为 Text('Extended Text') 中的类型
extension ExtendedText on Widget {
  addContainer(){
    return Container(
      padding: const EdgeInsets.all(16),
      margin: const EdgeInsets.all(16),
      color: Colors.yellow,
      child: this,
    );
  }
}

使用 Text('Extended Text').addContainer();
```

### 生成器

```dart
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}
// 等同
Iterable<int> genList2({int max = 10}) {
  var list = <int>[];
  var i = 0;
  while (i < max) {
    list.add(i);
    i++;
  }
  return list.map((i) => i);
}

Stream<int> asynchronousnNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}
// 如果yield后面跟着的本身就是一个generator，那么需要使用y
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}

void main() async {
  for (var v in naturalsTo(3)) {
    print(v);
  }
   await for (var v in asynchronousnNaturalsTo(3)) {
    print(v);
  }
}
```

#### 结合 sync*

```dart
main(List<String> arguments) {
  var r = naturalsDownFrom(10);
  print(r); //(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)

  r = naturalsDownWithNormal(10);
  print(r); //(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
}

Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}

Iterable<int> naturalsDownWithNormal(int n) {
  var list = <int>[];
  if (n > 0) {
    list.add(n);
    var r = naturalsDownWithNormal(n - 1);
    list.addAll(r);
  }
  return list.map((v) => v);
}

```

#### 结合 async*

```dart
main(List<String> arguments){
  naturalsStreamDownFrom(10).listen((data) {
    print("data = $data");
  });

}

Stream<int> naturalsStreamDownFrom(int n) async* {
  if (n > 0) {
    yield n;
    yield* naturalsStreamDownFrom(n - 1);
  }
}

```



## 类

顺序：自身方法 with extends implements

封装 继承 多态

```dart
class Person {
  // 变量
  String name = 'walle';
  int age = 13;
  // new 时传入参数
  Person(this.name, this.age); //与初始化二存一
  // 命名构造函数 且传入参数
  Person.now(a, b) {
    this.age = a;
    this.name = b;
  }
  // 初始化
  // Person()
  //     : age = 18,
  //       name = "walle" {
  //   print(age);
  // }
  // 私有属性,方法 为文件时有效
  int _flag;
  void _run() {
    print(this._flag);
  }
  // 静态
  static int age2 = 200; //调用 静态不用 this ;age2外部可访问
  static void func(){} //无法访问非静态方法和属性
  // get 类似计算属性
  String get reutnName {
    return this.name;
  }

  // set
  set setAge(num b) {
    this.age = b;
  }

  void fun(a) {
    print("${age}:${this.name}+$a");
  }
}

main() {
  var p1 = new Person('w', 10);
  var age2 = Person.age2; //访问静态
  var func = Person.func(); //访问静态方法
  var p2 = new Person.now(1, 's');
  p1.fun(22);
  print(p1.name);
}

```

```dart
? 	条件运算符 //判断类属性,方法是否为空 安全操作
as	类型转换  //(p as className).name
is	类型判断  //
..	级联操作
	Person p1 new Person()
	p1..name="walle"
	  ..age=30;
```

### 继承

- 子类使用extends关键词来继承父类
- 子类会继承父类里面可见的属性和方法 但是不会继承构造函数
- 子类能复写父类的方法 getter和setter
- 子类重写超类的方法，要用@override
- 子类调用超类的方法，要用super
- 子类可以继承父类的非私有变量 

```dart
class Web extends Person{
   String sex;
  // 给Person 传参数
  //Web(String name, int age) : super(name, age);
Web(String name, int age, String sex) : super(name, age){
    this.sex = sex;
  }
  //重写父类属性
  @override
  void fun(a){
    super.age; //调用父类属性 方法
  }
}
```

### 多态

```dart
多态:
	每个子类有不同的表现;

//子类必须定义抽象方法;
abstract class Doer { //抽象类 不能实例化,只有子类可以实例化
  // 定义实例变量和方法 ...

  void doSomething(); // 定义一个抽象方法。
  void func(){
      //抽象类的方法
  }
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // 提供方法实现，所以这里的方法就不是抽象方法了...
  }
}
```

### 抽象类 abstract

 抽象类不能实例化

```dart
//子类必须定义抽象方法;
abstract class Doer { //抽象类 不能实例化,只有子类可以实例化
  // 定义实例变量和方法 ...

  void doSomething(); // 定义一个抽象方法。
  void func(){
      //抽象类的方法
  }
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // 提供方法实现，所以这里的方法就不是抽象方法了...
  }
}
```

隐式接口

每个类都隐式的定义了一个接口，接口包含了该类所有的实例成员及其实现的接口。 

### 接口 implements

- 当class被当做interface用时，class中的方法就是接口的方法，需要在子类里重新实现，在子类实现的时候要加@override
- 当class被当做interface用时，class中的成员变量也需要在子类里重新实现。在成员变量前加@override

```dart
class Impostor implements Person {
  get _name => '';
	
  String greet(String who) => 'Hi $who. Do you know who I am?';
}
```

------

### Mixin with

- (1) 作为**mixins**的类只能继承自Object，不能继承其他类
- (2) 作为**mixins**的类不能有构造函数
- (3) 一个类可以**mixins**多个**mixins**类
- (4) **mixins**绝不是继承，也不是接口，而是一种全新的特性

```dart
可用常规类
abstract class MixinName{
// 防止实例化
	MixinName._() => null;
}


mixin MixinName{
    
}
```

执行顺序：自身类方法 》with 后面会覆盖前面 > extends 》 implements

### 单例

https://flutter.cn/community/tutorials/singleton-pattern-in-flutter-n-dart

#### 	工厂模式

```dart
class Manager {
  // 工厂模式
  factory Manager() =>_getInstance()
  static Manager get instance => _getInstance();
  static Manager _instance;
  Manager._internal() {
    // 初始化
  }
  static Manager _getInstance() {
    if (_instance == null) {
      _instance = new Manager._internal();
    }
    return _instance;
  }
}

class Singleton {
  static Singleton _instance;
  
  Singleton._internal();
  
  // 工厂构造函数
  factory Singleton() {
    if (_instance == null) {
      _instance = Singleton._internal();
    }
    
    return _instance;
  }
}

// 无论如何初始化，取到的都是同一个对象
Manager manager = new Manager();
Manager manager2 = Manager.instance;
```

#### 静态变量 

Static field with getter

```dart
class Singleton{

  Singleton._privateConstructor();

  static final Singleton _instance = Singleton._privateConstructor();

  static Singleton get instance { return _instance;}

}

class Singleton {
  static Singleton _instance;
  static get instance {
    if (_instance == null) {
      _instance = Singleton._internal();
    }
    
    return _instance;
  }
  
  Singleton._internal();
}

void main() {
	Singleton s = Singleton.instance;
}
```

#### 静态变量Static field

```dart
class Singleton {

  Singleton._privateConstructor();

  static final Singleton instance = Singleton._privateConstructor();

}

void main() {
	Singleton s = Singleton.instance;
}
```

#### 常量和工厂构造

```dart
class Singleton {
  factory Singleton() =>
    const Singleton._internal_();
  const Singleton._internal_();
}

class Singleton {
  Singleton._internal();
  
  factory Singleton() => _instance;
  
  static late final Singleton _instance = Singleton._internal();
}


void main() {
  print(new Singleton() == new Singleton());
  print(identical(new Singleton() , new Singleton()));
}
```





### 构造方法

#### 构造函数

```dart
class Point {
  num x, y;

  Point(num x, num y) {
    // 还有更好的方式来实现下面代码，敬请关注。
    this.x = x;
    this.y = y;
  }
}

// 简写

class Point {
  num x, y;
  // 在构造函数体执行前，
  // 语法糖已经设置了变量 x 和 y。
  Point(this.x, this.y);
}
```

#### 命名构造函数

```dart
class Point {
  num x, y;

  Point(this.x, this.y);

  // 命名构造函数
  Point.origin() {
    x = 0;
    y = 0;
  }
}




```

调用父类

```dart
class Employee extends Person {
  Employee() : super.fromJson(getDefaultData());
  // ···
}
```

初始化实例变量

```dart

Point.fromJson(Map<String, num> json)
    : x = json['x'],
      y = json['y'] {
  print('In Point.fromJson(): ($x, $y)');
}
```

验证

```dart
Point.withAssert(this.x, this.y) : assert(x >= 0) {
  print('In Point.withAssert(): ($x, $y)');
}
```

#### 重定向构造函数

```dart
class Point {
  num x, y;

  // 类的主构造函数。
  Point(this.x, this.y);

  // 指向主构造函数
  Point.alongXAxis(num x) : this(x, 0);
}
```

#### 常量构造函数

如果该类生成的对象是固定不变的， 那么就可以把这些对象定义为编译时常量。 为此，需要定义一个 `const` 构造函数， 并且声明所有实例变量为 `final`。

```dart
class ImmutablePoint {
  static final ImmutablePoint origin =
      const ImmutablePoint(0, 0);

  final num x, y;

  const ImmutablePoint(this.x, this.y);
}
```

#### 工厂构造函数

```dart
class Logger {
  final String name;
  bool mute = false;

  // 从命名的 _ 可以知，
  // _cache 是私有属性。
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```



## 错误

```dart
try {
  breedMoreLlamas();
} on Exception catch (e) {
  // 其他任何异常
  print('Unknown exception: $e');
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```

rethrow

```dart
rethrow 'ddd';

重新抛出错误;
```



## 定时器

```dart
import 'dart:async';

 Timer timeoutId;


const timeout = const Duration(seconds: 5);
print('currentTime='+DateTime.now().toString()); // 当前时间
timeoutId = Timer(timeout, () { //callback function
  print('afterTimer='+DateTime.now().toString()); // 5s之后
});

const timeout = const Duration(seconds: 1);
timeoutId = Timer.periodic(timeout, (timer) { //callback function
  //1s 回调一次
  print('afterTimer='+DateTime.now().toString());
  
  timer.cancel();  // 取消定时器
}
               
               
```

清除定时器

```
 
 @override
 void dispose() {
  super.dispose();
  timeoutId.cancel();
 }
```

## 遍历

https://www.cnblogs.com/lxlx1798/p/11104618.html

### for

```dart
 for (var i = 0; i < MyList.length; i++) {
    print(MyList[i]);
  }
```

### for in

```dart
  for (var item in MyList) {
    print(item); //item表示每一项的内容哈
  }
```

### forEach

```dart
 MyList.forEach((value) {
    print(value);
  });
```

### map

 // map主要用于修改原数组；对原数组进行一些操作(对原数组进行修改)

```dart
 var newList = MyList.map((value) {
    return value * 2;
  });
```

### where

 // where查找符合条件的数组 (主要用于筛选)

```dart
List MyList = [1, 2, 4, 5, 7, 10];
  var newList = MyList.where((value) {
    return value > 5;
  });
  print(newList);//(7, 10)
```

### whereType<String\>

返回指定类型的项目

```
  var testWhereType = testList6.whereType<String>();
  // （2）
```

### firstWhere

```dart
//满足条件的第一个元素
//从源码可以看出，firstWhere方法会首先从列表中查找有没有满足条件的item，如果没有找到，会判断有没有
//传入第二个参数，如果第二个参数不为空，就执行第二个参数的方法，如果第二个参数为空，就直接出错。
var testFirstWhere = testList6.firstWhere((item) => checkExitHa(item),orElse: getHi);
print("满足条件的第一个元素：$testFirstWhere");
```

### lastIndexWhere

```
lastIndexWhere
```

### singleWhere

```dart
有条件的查询满足条件的元素是否只出现了一次

//有条件的查询满足条件的元素是否只出现了一次
//第二个参数是可选参数，用于当第一个条件不满足时执行的操作
//具体执行的逻辑如下：
//在List中查找满足条件的元素
//如果没有找到满足条件的元素，查看orElse是否设置，如果设置，就执行orElse设置的函数
//如果找到了满足条件的元素，并且满足条件的元素只有一个，输出这个元素的值
//如果找到了满足条件的元素，但是满足条件元素的数量大于一个，就会抛出too many elements 异常，此时程序会直接crash,不会执行orElse设置的函数
testList6.add(1);
var testSingleWhere = testList6.singleWhere((item) => item.toString().length == 1,orElse: getHi);
print("\ntestSingleWhere ${testSingleWhere}, type is ${testSingleWhere.runtimeType} \n");
```

### take

```
//取出前面多少个元素放在新的list中
var testTake = testList6.take(3);

/返回List中满足条件的元素的惰性迭代
//从第一个元素开始查找符合条件的元素，一直查找到不符合条件的元素结束
//注意这里是惰性迭代，也就是说如果满足条件的元素并不是按顺序排列的，分布在列表的任何位置，那么
//这个方法查找只会查找处前面符合条件的元素，中间发现有元素不符合条件就会停止查找，即使后面还有符合条件的元素也不会再去查找了
print(testList6);
var testTakeWhile = testList6.takeWhile((item) => item.toString().length == 3);
```

### takeWhile

发现不符合就会停止

```
var testtake = testList6.takeWhile((item) => int.parse(item.toString()) > 2);

// （）
```



### any

// 判断数组中是否有满足条件的数据  返回的是布尔值

```dart
  List myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var f = myList.any((value) {
    return value > 9; //只要集合中有满足条件的就会true
  });
  print(f); //true
```

### every

  // 判断数组中是每一个值是否满足条件   返回的是布尔值 

```dart
 List myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var f = myList.every((element) => element > 7);
  print(f);
```

## Future

### Future

```

```



### Completer

```dart
  Future<bool> create() {
    final com = Completer<bool>();
    final _future = com.future;

    overlayState = Overlay.of(_context)!;

    overlayEntry = OverlayEntry(builder: (context) {
      return _cupertinoAlertDialog(context, (b) {
        if (b) {
          com.complete(b);
        }
      });
    });
    overlayState!.insert(overlayEntry!);
    return _future;
  }

```

### compute

```dart
import 'package:flutter/foundation.dart';

function callback( val ){
  ...
  return res
}
/// `callback` 必须是顶级方法或者是类的静态方法
var res = await compute( callback , val );
```

