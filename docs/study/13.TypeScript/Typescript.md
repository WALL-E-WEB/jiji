# TypeScript

public 公共的

private 私有的

protected 受保护的

## TypeScript 数据类型

http://ts.xcatliu.com/advanced/string-literal-types.html

### 介绍

为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。

### 布尔值

最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做`boolean`（其它语言中也一样）。

```ts
let isDone: boolean = false;
```

### 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是`number`。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量。

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

### 字符串

```ts
let name: string = "bob";
name = "smith";
```

```ts
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'

使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种。
```

### 数组

```ts
let list: number[] = [1, 2, 3];
```

```ts
let list: Array<number> = [1, 2, 3];
let list: Array<Array<number>> = Array<Array<number>>(); // [[1,2],[1,2]]
```

### 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为`string`和`number`类型的元组。

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

当访问一个越界的元素，会使用联合类型替代：

```ts
x[3] = "world"; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

联合类型是高级主题，我们会在以后的章节里讨论它。

### 枚举

`enum`类型是对 JavaScript 标准数据类型的一个补充。 像 C###等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```ts
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

默认情况下，从`0`开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从`1`开始编号：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green;
```

或者，全部都采用手动赋值：

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c: Color = Color.Green;
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color[2];

alert(colorName); // 显示'Green'因为上面代码里它的值是2
```

### 任意值

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用`any`类型来标记这些变量：

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

在对现有代码进行改写的时候，`any`类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为`Object`有相似的作用，就像它在其它语言中那样。 但是`Object`类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

当你只知道一部分数据的类型时，`any`类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

###  空值

某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是`void`：

```ts
function warnUser(): void {
  alert("This is my warning message");
}
```

声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：

```ts
let unusable: void = undefined;
```

### Null 和 Undefined

TypeScript 里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和`void`相似，它们的本身的类型用处不是很大：

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把`null`和`undefined`赋值给`number`类型的变量。

然而，当你指定了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自。 这能避免*很多*常见的问题。 也许在某处你想传入一个`string`或`null`或`undefined`，你可以使用联合类型`string | null | undefined`。 再次说明，稍后我们会介绍联合类型。

> 注意：我们鼓励尽可能地使用`--strictNullChecks`，但在本手册里我们假设这个标记是关闭的。

### Never

`never`类型表示的是那些永不存在的值的类型。 例如，`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是`never`类型，当它们被永不为真的类型保护所约束时。

`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使`any`也不可以赋值给`never`。

下面是一些返回`never`类型的函数：

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

### Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的 API。例如：

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

###  类型断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过*类型断言*这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为`as`语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

```js
断言
function getLength(something: string | number) :number {
    if ((<string>something).length {
        return (<string>something).length
    }else{
        return something.toString().length;
}
}
```

### 联合类型

表示取值可以为多种类型中的一种。

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

function getString(something: string | number): string {
    return something.toString();
}
```



### 内置对象

```
http://ts.xcatliu.com/basics/built-in-objects.html
```



## 类

### 介绍

传统的 JavaScript 程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ECMAScript 6 开始，JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。

### 类

下面看一个使用类的例子：

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```



### 继承

在 TypeScript 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

看下面的例子：

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

`Dog`是一个*派生类*，

*Animal超类*。

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

这个例子展示了一些上面没有提到的特性。 这一次，我们使用`extends`关键字创建了`Animal`的两个子类：`Horse`和`Snake`。

与前一个例子的不同点是，派生类包含了一个构造函数，它*必须*调用`super()`，它会执行基类的构造函数。 而且，在构造函数里访问`this`的属性之前，我们*一定*要调用`super()`。 这个是 TypeScript 强制执行的一条重要规则。

这个例子演示了如何在子类里可以重写父类的方法。 `Snake`类和`Horse`类都创建了`move`方法，它们重写了从`Animal`继承来的`move`方法，使得`move`方法根据不同的类而具有不同的功能。 注意，即使`tom`被声明为`Animal`类型，但因为它的值是`Horse`，调用`tom.move(34)`时，它会调用`Horse`里重写的方法：

```text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```



### public

 在 TypeScript 里，成员都默认为`public`。

```ts
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

### private

当成员被标记成`private`时，它就不能在声明它的类的外部访问。比如：

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.
```



然而，当我们比较带有`private`或`protected`成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个`private`成员，那么只有当另外一个类型中也存在这样一个`private`成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于`protected`成员也使用这个规则。

下面来看一个例子，更好地说明了这一点：

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

这个例子中有`Animal`和`Rhino`两个类，`Rhino`是`Animal`类的子类。 还有一个`Employee`类，其类型看上去与`Animal`是相同的。 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。 因为`Animal`和`Rhino`共享了来自`Animal`里的私有成员定义`private name: string`，因此它们是兼容的。 然而`Employee`却不是这样。当把`Employee`赋值给`Animal`的时候，得到一个错误，说它们的类型不兼容。 尽管`Employee`里也有一个私有成员`name`，但它明显不是`Animal`里面定义的那个。

### protected

`protected`修饰符与`private`修饰符的行为很相似，但有一点不同，`protected`成员在派生类中仍然可以访问。例如：

```ts
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

注意，我们不能在`Person`类外使用`name`，但是我们仍然可以通过`Employee`类的实例方法访问，因为`Employee`是由`Person`派生而来的。

构造函数也可以被标记成`protected`。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

### readonly 修饰符

你可以使用`readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```ts
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

### 参数属性

在上面的例子中，我们不得不定义一个受保护的成员`name`和一个构造函数参数`theName`在`Person`类里，并且立刻将`theName`的值赋给`name`。 这种情况经常会遇到。*参数属性*可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前`Animal`类的修改版，使用了参数属性：

```ts
class Animal {
  constructor(private name: string) {}
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

注意看我们是如何舍弃了`theName`，仅在构造函数里使用`private name: string`参数来创建和初始化`name`成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数添加一个访问限定符来声明。 使用`private`限定一个参数属性会声明并初始化一个私有成员；对于`public`和`protected`来说也是一样。

###  存取器

 getters/setters 来截取对对象成员的访问。

```ts
class Employee {
  fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
```

我们可以随意的设置`fullName`，这是非常方便的，但是这也可能会带来麻烦。

下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。 我们把对`fullName`的直接访问改成了可以检查密码的`set`方法。 我们也加了一个`get`方法，让上面的例子仍然可以工作。

```ts
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}
```

首先，存取器要求你将编译器设置为输出 ECMAScript 5 或更高。 不支持降级到 ECMAScript 3。 其次，只带有`get`不带有`set`的存取器自动被推断为`readonly`。

### static

```typescript
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

### abstract 抽象类

抽象类做为其它派生类的基类使用：约束子类的定义；

定义内部成员；

不能被实例；



```typescript
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```



##  interface-接口

作用：定义契约

```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

### 可选属性

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

### 只读属性

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

你可以通过赋值一个对象字面量来构造一个`Point`。 赋值后，`x`和`y`再也不能被改变了。

```ts
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

### 额外的属性检查

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
}
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
```

绕开额外的属性检查。 最简便的方法是使用类型断言：

```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

### 任意属性

可以有任意数量的属性

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量： 因为`squareOptions`不会经过额外属性检查，所以编译器不会报错。

```ts
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

要留意，在像上面一样的简单代码里，你可能不应该去绕开这些检查。

###  函数类型

接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

```ts
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：

```ts
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript 的类型系统会推断出参数类型，因为函数直接赋值给了`SearchFunc`类型变量。 函数的返回值类型是通过其返回值推断出来的（此例是`false`和`true`）。 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与`SearchFunc`接口中的定义不匹配。

```ts
let mySearch: SearchFunc;
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};
```

### 类类型

###### [#](#实现接口) 实现接口

与 C#或 Java 里接口的基本作用一样，TypeScript 也能够用它来明确的强制一个类去符合某种契约。

```ts
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
```

你也可以在接口中描述一个方法，在类里实现它，如同下面的`setTime`方法一样：

```ts
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```

接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

### 继承接口

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```ts
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

一个接口可以继承多个接口，创建出多个接口的合成接口。

```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### 接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的 private 和 protected 成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 除了继承自基类，子类之间不必相关联。 例：

```ts
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
  select() {}
}

class Location {}
```

在上面的例子里，`SelectableControl`包含了`Control`的所有成员，包括私有成员`state`。 因为`state`是私有成员，所以只能够是`Control`的子类们才能实现`SelectableControl`接口。 因为只有`Control`的子类才能够拥有一个声明于`Control`的私有成员`state`，这对私有成员的兼容性是必需的。

在`Control`类内部，是允许通过`SelectableControl`的实例来访问私有成员`state`的。 实际上，`SelectableControl`就像`Control`一样，并拥有一个`select`方法。 `Button`和`TextBox`类是`SelectableControl`的子类（因为它们都继承自`Control`并有`select`方法），但`Image`和`Location`类并不是这样的。

### implements

```ts
interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```

### 接口继承

```ts
interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
```

### 接口继承类

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

```ts
class Point {
    /** 静态属性，坐标系原点 */
    static origin = new Point(0, 0);
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p: Point) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例属性，x 轴的值 */
    x: number;
    /** 实例属性，y 轴的值 */
    y: number;
    /** 构造函数 */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    /** 实例方法，打印此点 */
    printPoint() {
        console.log(this.x, this.y);
    }
}

interface PointInstanceType {
    x: number;
    y: number;
    printPoint(): void;
}

let p1: Point;
let p2: PointInstanceType;

上例中最后的类型 Point 和类型 PointInstanceType 是等价的。
```



## 函数

```js
let myAdd = function(x: number, y: number): number { 
					return x + y; 
			};

let myAdd: (baseValue: number, increment: number) => number 
  				= function(x, y) { return x + y; };
```

### 可选参数

```js
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
```

### 默认参数

```js
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
```

### 剩余参数

```js
function buildName(firstName: string, ...restOfName: string[]) {
    
  return firstName + " " + restOfName.join(" ");
}

buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

### 函数重载

```js
概念:
函数根据传参 个数,类型,顺序 的不同, 执行不同的同名函数, 返回不同的结果;

声明
function  add(age: string, name: string): string;
function  add(age: number, name: number): number;
具体业务实现
function  add(age: any, name: any): any {
	return age + name
};
```

### 内部构造函数声明

```typescript
type SomeCst<T> = {
  new (num: number) : T ;
}

function fn<T>(cst:SomeCst<T>,n: number){
  return new cst(n);
}

const arr = fn<Array<String>>(Array,100);
```

### 函数泛型

```typescript
function fn<T>(arr:T[]):T {
 return arr[0];
}
```

### 函数接口

```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

## 断言

as

```typescript
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}

总之，若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
同理，若 B 兼容 A，那么 A 能够被断言为 B，B 也能被断言为 A。
```



## 泛型

概念:动态指定类型;类型作为调用时传入

```js
function identity<T>(arg: T): T {
    return arg;
}

//调用时指定
let output = identity<string>("myString");

//编译器自动识别
let output = identity("myString");
```

### 泛型约束

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

## 类型操作符

### typeof

用于检查变量类型的

```typescript
const str = "s";

const obj = { name: "s" };

const nullVar = null;
const undefinedVar = undefined;

const func = (input: string) => {
  return input.length > 10;
}

type Str = typeof str; // "s"
type Obj = typeof obj; // { name: string; }
type Null = typeof nullVar; // null
type Undefined = typeof undefined; // undefined
type Func = typeof func; // (input: string) => boolean
```

类型标注中使用 typeof

```typescript
const func = (input: string) => {
  return input.length > 10;
}

const func2: typeof func = (name: string) => {
  return name === 'linbudu'
}
```

### ReturnType

```typescript
const func = (input: string) => {
  return input.length > 10;
}

// boolean
type FuncReturnType = ReturnType<typeof func>
```



### is

```typescript
function isString(input: unknown): input is number {
  return typeof input === "string";
}

function foo(input: string | number) {
  if (isString(input)) {
    // 报错，在这里变成了 number 类型
    (input).replace("linbudu", "linbudu599")
  }
  if (typeof input === 'number') { }
  // ...
}
```

```typescript
export type Falsy = false | "" | 0 | null | undefined;

export const isFalsy = (val: unknown): val is Falsy => !val;

// 不包括不常用的 symbol 和 bigint
export type Primitive = string | number | boolean | undefined

export const isPrimitive = (val: unknown): val is Primitive => ['string', 'number', 'boolean' , 'undefined'].includes(typeof val);
```

### in

```typescript
interface Foo {
  foo: string;
  fooOnly: boolean;
  shared: number;
}

interface Bar {
  bar: string;
  barOnly: boolean;
  shared: number;
}

function handle(input: Foo | Bar) {
/// 判断'foo' 是否属于input 的key
  if ('foo' in input) {
    input.fooOnly;
  } else {
    input.barOnly;
  }
}
```

### instanceof

```typescript
class FooBase {}

class BarBase {}

class Foo extends FooBase {
  fooOnly() {}
}
class Bar extends BarBase {
  barOnly() {}
}

function handle(input: Foo | Bar) {
  if (input instanceof FooBase) {
    input.fooOnly();
  } else {
    input.barOnly();
  }
}
```

### assert

```typescript
import assert from 'assert';

let name: any = 'linbudu';

/// 不为ture则报错；该句以下则不执行
assert(typeof name === 'number');

// number 类型
name.toFixed();
```



## 工具类型 

https://www.cnblogs.com/cxyqts/p/14742210.html

https://zhuanlan.zhihu.com/p/103846208

### 范型type

```typescript
type Factory<T> = T | number | string;
/// 默认参数
type Factory<T = boolean> = T | number | string;

type ResStatus<ResCode extends number> = ResCode extends 10000 | 10001 | 10002
  ? 'success'
  : 'failure';
type ResStatus<ResCode extends number = 10000> = ResCode extends 10000 | 10001 | 10002
  ? 'success'
  : 'failure';

// "success"
type Res4 = ResStatus;

const foo: Factory<boolean> = true;

ype MaybeArray<T> = T | T[];

function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}
```

多泛型关联

```typescript
type Conditional<Type, Condition, TruthyResult, FalsyResult> =
  Type extends Condition ? TruthyResult : FalsyResult;

//  "passed!"
type Result1 = Conditional<'linbudu', string, 'passed!', 'rejected!'>;

// "rejected!"
type Result2 = Conditional<'linbudu', boolean, 'passed!', 'rejected!'>;
```

对象类型中的泛型

```typescript
interface IRes<TData = unknown> {
  code: number;
  error?: string;
  data: TData;
}
```

函数泛型

```typescript
function handle<T>(input: T): T {}
const handle = <T>(input: T): T => {}
```

class 泛型

```typescript

```



### 联合类型｜与交叉类型 &

联合类型的符号是`|`：如`A | B`，只需要实现 A 或 B 即可；

交叉类型`&`:A & B，**需要同时满足 A 与 B 两个类型**才行；

```typescript
interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

type ProfileStruct = NameStruct & AgeStruct;

const profile: ProfileStruct = {
  name: "linbudu",
  age: 18
}

type StrAndNum = string & number; // never
```

### 索引类型 keyof

**索引签名类型**

```typescript
interface AllStringTypes {
  [key: string]: string;
}
```

**keyof 索引类型查询**

```typescript
interface Foo {
  a: 1,
  b: 2
}
/// FooKeys = "a" | "b"
type FooKeys = keyof Foo; // "b" | "a"
```

**索引类型访问**

```typescript
// 通过 类型访问 获取 类型
interface Foo {
  propA: number;
  propB: boolean;
}

type PropAType = Foo['propA']; // number
type PropBType = Foo['propB']; // boolean
```

### 映射类型 in keyof

从一个联合类型依次映射到其内部的每一个类型

```typescript
type Stringify<T> = {
  [K in keyof T]: string;
};

type Clone<T> = {
  [K in keyof T]: T[K];
};


```

```typescript
// 案例
interface Foo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type StringifiedFoo = Stringify<Foo>;

// 等价于
interface StringifiedFoo {
  prop1: string;
  prop2: string;
  prop3: string;
  prop4: string;
}
```

## 内置工具类型

### Partial

1、Partial\<T\>： 快速把某个接口类型中定义的属性变成可选

```ts
interface Person {
    name: string;
    age: number;
    sex?: string;
}
/**
* type PersonOptions = {
*   name?: string;
*   age?: number;
*   sex?: string;
* }
*/
type PersonOptions = Partial<Person>;

// 实现原理
type Partial<T> = {
    [P in keyof T]?: T[P]
}
```

### Required

2、Required\<T\>：把所有可选属性变成必选属性

```ts
interface Person {
    name: string;
    age: number;
    sex?: string;
}
/**
* type PersonOptions = {
*   name: string;
*   age: number;
*   sex: string;
* }
*/
type PersonRequired = Required<Person>;

// 实现原理
type Required<T> = {
    [P in keyof T]-?: T[P]
}
```

### IsEqual

```typescript
type IsEqual<T> = T extends true ? 1 : 2;

type A = IsEqual<true>; // 1
type B = IsEqual<false>; // 2
type C = IsEqual<'linbudu'>; // 2
```



## 声明文件

### 新语法索引[§](http://ts.xcatliu.com/basics/declaration-files.html#新语法索引)

由于本章涉及大量新语法，故在本章开头列出新语法的索引，方便大家在使用这些新语法时能快速查找到对应的讲解：

- [`declare var`](http://ts.xcatliu.com/basics/declaration-files.html#declare-var) 声明全局变量
- [`declare function`](http://ts.xcatliu.com/basics/declaration-files.html#declare-function) 声明全局方法
- [`declare class`](http://ts.xcatliu.com/basics/declaration-files.html#declare-class) 声明全局类
- [`declare enum`](http://ts.xcatliu.com/basics/declaration-files.html#declare-enum) 声明全局枚举类型
- [`declare namespace`](http://ts.xcatliu.com/basics/declaration-files.html#declare-namespace) 声明（含有子属性的）全局对象
- [`interface` 和 `type`](http://ts.xcatliu.com/basics/declaration-files.html#interface-和-type) 声明全局类型
- [`export`](http://ts.xcatliu.com/basics/declaration-files.html#export) 导出变量
- [`export namespace`](http://ts.xcatliu.com/basics/declaration-files.html#export-namespace) 导出（含有子属性的）对象
- [`export default`](http://ts.xcatliu.com/basics/declaration-files.html#export-default) ES6 默认导出
- [`export =`](http://ts.xcatliu.com/basics/declaration-files.html#export-1) commonjs 导出模块
- [`export as namespace`](http://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace) UMD 库声明全局变量
- [`declare global`](http://ts.xcatliu.com/basics/declaration-files.html#declare-global) 扩展全局变量
- [`declare module`](http://ts.xcatliu.com/basics/declaration-files.html#declare-module) 扩展模块
- [`/// `](http://ts.xcatliu.com/basics/declaration-files.html#san-xie-xian-zhi-ling) 三斜线指令

### .d.ts

声明文件必需以 `.d.ts` 为后缀。

```ts
declare var jQuery: (selector: string) => any;

jQuery('#foo');

declare function jQuery(selector: string): any;

declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}

declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
```



# tsconfig

[官网配置]( https://www.typescriptlang.org/tsconfig)

[参考文章](https://juejin.cn/post/7039583726375796749)

### include

​	指定要包含在程序中的文件名

### exclude

`include`并`exclude`支持通配符来制作 glob 模式：

- `*`匹配零个或多个字符（不包括目录分隔符）
- `?`匹配任何一个字符（不包括目录分隔符）
- `**/`匹配任何嵌套到任何级别的目录



###  baseUrl & paths

```json
{
  "compilerOptions": {
    // 注意：baseUrl 必选，与 paths 成对出现，以 tsconfig.json 文件所在目录开始
    "baseUrl": ".", 
    "paths": {
      // 映射列表
      "@/*": [
        "src/*"
      ],
      "moduleA": [
        "src/libs/moduleA"
      ]
    }
  }
}

// 代码里这么写
import Toast from '@/components/Toast.ts' // 模块实际位置: src/components/Toast.ts
import TestModule from 'moduleA/index.js' // 模块实际位置: src/libs/moduleA/index.js
```

### compilerOptions

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es6", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017'，'ES2018', or 'ESNEXT'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "declarationDir": "./dist/types", // 生成的 '.d.ts' 文件保存文件夹
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./dist", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基础目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。
    "esModuleInterop": true, // 支持合成模块的默认导入
  
    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  },
  /* 指定编译文件或排除指定编译文件 */
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"],
  "files": ["index.ts", "test.ts"],
  // 从另一个配置文件里继承配置
  "extends": "@tsconfig/recommended",
  // 让 IDE 在保存文件的时候根据 tsconfig.json 重新生成文件
  "compileOnSave": true // 支持这个特性需要Visual Studio 2015， TypeScript 1.8.4 以上并且安装 atom-typescript 插件
}
```

### json

```json
{
  "files": ["main.ts", "supplemental.ts"],
  "include": ["src/**/*", "tests/**/*"],
  "extends": "./configs/base",
  
  
}
```

```json
{
   // 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
   "include": ["./test.ts"],
   // 指定需要编译文件 否则默认当前目录下除了exclude之外的所有.ts, .d.ts,.tsx 文件
   "files": ["./src/**/*"],
   // 不编译某些文件
   "exclude": ["test.ts"],
   "compilerOptions": {
       // 只编译修改过的文件,这个时候会生成tsconfig.tsbuildinfo,下次编译的时候会进行对比只编译修改过的文件 
       "incremental": true,
       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
       "target": "es5",
       // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
       "module": "commonjs",
       /* 注意：如果未指定--lib，则会注入默认的librares列表。注入的默认库为：
       对于 --target ES5: DOM,ES5,ScriptHost
       对于 --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
       TS 绝不会在您的代码中注入polyfill,所以需要你自己制定编译lib */
       "lib": ["es5", "dom", "ScriptHost", "es2015.promise"],
       // 允许编译JS
       "allowJs": true,
       /* 是否检测JS的语法,例如下面的语法编辑器会报错
       let name = 'paul';
       console.log(name.a.b) */
       "checkJs": true,
       // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
       "jsx": preserve,
       /* 如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件,
       declaration和allowJs不能同时设为true */
       "declaration": true
       // 值为true或false，指定是否为声明文件.d.ts生成map文件
       "declarationMap": true
       // 用来指定编译时是否生成.map文件
       "sourceMap": true,
       // 当module设置为 'amd' and 'system'的时候可以使用此命令,这样可以将ts文件打包到一个目录下
       "outFile":"./",
       //  outDir 编译后的文件存到到哪个目录下,默认是每一个ts文件的当前目录,,下面的配置就是把ts编译到build目录下
       "outDir": './build',
       // 下面单独介绍
       "rootDir": "./src",
       // 是否编译构建引用项目,很复杂后面介绍
       "composite": true,
       // 指定文件用来存储增量编译信息,默认是tsconfig.tsbuildinfo
       "tsBuildInfoFile": "./",
       // 编译的时候删除注释
       "removeComments": true,
       // 不生成编译文件，这个一般比较少用,这个build目录下将没有任何文件,但是会进行编译,有错误会抛出
       "noEmit": true,
       // 是否引入npm包tslib中的辅助函数,__extends等 
       "importHelpers": true,
       // 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持
       "downlevelIteration": true,
       // isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定
       // 不是很理解,将每一个文件作为单独模块
       "isolatedModules": true,
       /* Strict Type-Checking Options */
       // 严格模式将会打开下面的几个选项
       "strict": false, 
       /* 不允许变量或函数参数具有隐式any类型,例如
       function(name) {
           return name;
       } */
       "noImplicitAny": true,
       // null类型检测,const teacher: string = null;会报错
       "strictNullChecks": true,
       // 对函数参数进行严格逆变比较
       "strictFunctionTypes": true,
       // 严格检查bind call apply
       "strictBindCallApply": true,
       // 此规则将验证构造函数内部初始化前后已定义的属性。
       "strictPropertyInitialization": true,
       // 检测this是否隐式指定
       "noImplicitThis": true,
       // 使用js的严格模式,在每一个文件上部声明 use strict
       "alwaysStrict": true,
       /* Additional Checks */
       // 默认false,是否检测定义了但是没使用的变量
       "noUnusedLocals": true,
       // 用于检查是否有在函数体中没有使用的参数
       "noUnusedParameters": true,
       // 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示
       "noImplicitReturns": true,
       // 用于检查switch中是否有case没有使用break跳出switch
       "noFallthroughCasesInSwitch": true,
       /* Module Resolution Options */
       // 用于选择模块解析策略，有'node'和'classic'两种类型
       "moduleResolution": "node",
       // 复杂的很 下面单独介绍这三个模块
       "baseUrl": './'
       "paths": {},                   
       "rootDirs": [],
       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
       typeRoots: [],
       // types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来
       types:[],
       // 用来指定允许从没有默认导出的模块中默认导入 
       "allowSyntheticDefaultImports": true, 
       // 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
       "esModuleInterop": true ,
       // 不把符号链接解析为真实路径，具体可以了解下webpack和node.js的symlink相关知识
       "preserveSymlinks": true,
       "allowUmdGlobalAccess": true,
       
       // sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件的位置，这个值会被写进.map文件里
       "sourceRoot": '',
       // mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性
       "mapRoot",
       // inlineSourceMap指定是否将map文件内容和js文件编译在一个同一个js文件中，如果设为true,则map的内容会以//#soureMappingURL=开头，然后接base64字符串的形式插入在js文件底部
       "inlineSourceMap": true,
       // inlineSources用于指定是否进一步将ts文件的内容也包含到输出文件中
       "inlineSources": true,
       
       // experimentalDecorators用于指定是否启用实验性的装饰器特性
       "experimentalDecorators": true,
       
       // emitDecoratorMetadata用于指定是否为装上去提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引用ES2015.Reflect这个库
       "emitDecoratorMetadata": true,
       // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
       "compileOnSave": true,
       // 很复杂 下面介绍
       "references":[]",
   }
}
```

### babel 编译 typescript 

```json
https://mp.weixin.qq.com/s/N5xVhQzBDy-Dj2ccFVru6Q
```

