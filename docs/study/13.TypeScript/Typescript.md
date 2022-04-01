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



## 工具类型 

https://www.cnblogs.com/cxyqts/p/14742210.html

https://zhuanlan.zhihu.com/p/103846208

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







# Vue2-TS

```js
<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import draggable from "vuedraggable";
@Component({
    components: { draggable }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!:string;
  @Prop(Number) msg2!: string;
  @Prop({type:Number,default:1}) msg3!: number;
  mesage: number = 1;
  private created() {
    console.log(222);
  }
  btn(): void {
    this.mesage++;
  }
  // changemsg():void{
  //   console.log('bbb')
  // };
  get computedMSG() {
    return this.mesage + "123344";
  }
  @Watch("mesage")
  changemsg() {
    console.log("bbb");
  }
  @Watch("msg2")
  changemsg2() {
    console.log("ccc");
  }
}
</script>
```



```js
<script lang="ts">
import {
    Prop, 
    PropSync, 
    Model, 
    Watch, 
    Provide, 
    Inject,
    ProvideReactive, 
    InjectReactive, 
    Emit, 
    Ref,   
    Component, 
    Mixins, 
    State
    Vue} from "vue-property-decorator";
<script>
```

@Prop

```js
@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
 	@Prop() age!: number
```

@PropSync

```js
<HelloWorld :name.sync="name" /> //父组件
```

```js
<template>
	<input type="text" v-model="syncedName" />
    <div>{{name}}</div>    
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, PropSync } from "vue-property-decorator";
export default class HelloWorld extends Vue {
    @PropSync("name", { type: String }) syncedName!: string;
}
</script>
```

@Model

子父双向绑定

```js
<HelloWorld @change="onchange" v-model="checked" />
    <div>{{checked}}</div>

onchange(e) {
   console.log(e);
 }
```

```js
 <input type="checkbox"
      @change="changed"
      :checked="checked">
      
@Model("change", { type: Boolean }) checked!: boolean;

changed(ev: any) {
    console.log(ev);
    this.$emit("change", ev.target.checked);
  }
```

### @Watch

```js
@Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch('person')
  onPersonChanged2(val: Person, oldVal: Person) {}
```

### @Provide

```js
@Provide() foo = 'foo'
@Provide('bar') baz = 'bar'
```

@Inject

```js
@Inject() readonly foo!: string
@Inject('bar') readonly bar!: string
@Inject({ from: 'optional', default: 'default' }) readonly optional!: string
@Inject(symbol) readonly baz!: string
```

### @ProvideReactive

```js
父级变化 子也会变化
const key = Symbol()
@Component
class ParentComponent extends Vue {
  @ProvideReactive() one = 'value'
  @ProvideReactive(key) two = 'value'
}

@Component@Component
class ChildComponent extends Vue {
  @InjectReactive() one!: string
  @InjectReactive(key) two!: string
}

```

@Emit

```js
  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  onInputChange(e) {
    return e.target.value
  }
    @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
```

```js
methods: {
    addToCount(n) {
      this.count += n
      this.$emit('add-to-count', n)
    },
    resetCount() {
      this.count = 0
      this.$emit('reset')
    },
    returnValue() {
      this.$emit('return-value', 10)
    },
    onInputChange(e) {
      this.$emit('on-input-change', e.target.value, e)
    },
    promise() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      })

      promise.then(value => {
        this.$emit('promise', value)
      })
    }
  }
```

@Ref

```js
<div ref="getdom">two:{{two}}</div>
  
@Ref("getdom") readonly button: any;
   
     mounted() {
     console.log("button", this.button);
     }
```

vue  @State

```js
@State (state=> state.storekey) stateKey!:number
```



