工具

```
DoKit For Flutter
```



## flutter

https://www.raywenderlich.com/books/flutter-apprentice/v2.0/chapters/4-understanding-widgets

hello world

```dart
import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Welcome to Flutter',
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('Welcome to Flutter'),
        ),
        body: new Center(
          child: new Text('Hello World'),
        ),
      ),
    );
  }
}
```

命令

```
flutter ctrate 项目名称  // 创建项目


flutter packages get // 类似 npm i
flutter pub get

dart pub upgrade 包名 //升级

flutter run			// 运行
```

## 生命周期



![img](https://upload-images.jianshu.io/upload_images/1996162-b1e223789c7b9b75.png?imageMogr2/auto-orient/strip|imageView2/2/w/912/format/webp)

![image-20211117163403527](/image/flutter/image-20211117163403527.png)

```dart

https://www.jianshu.com/p/7f663d7198e2

initState： 插入到渲染树时调用，只执行一次。

didChangeDependencies: 
	1、在初始化initState后执行； 2、显示/关闭其它widget。 3、可执行多次；
    InheritedWidget 中 updateShouldNotify 为true时 时会触发；
        
didUpdateWidget:
	上级节点rebuild widget时， 即上级组件状态发生变化时会触发子widget执行
   
build
    
deative:
	打开新的Widget或回到这个widget时会执行； 可执行多次；
        
dispose：
	Navigator.pop后会调用该办法， 表示组件已销毁；
        
reassemble：
	hot reload。 release版本不会执行该函数。
        
        


```



```
上图就是 State 的生命周期图。

StatefulWidget.createState()

Framework 调用会通过调用 StatefulWidget.createState() 来创建一个 State。

initState()

新创建的 State 会和一个 BuildContext 产生关联，此时认为 State 已经被安装好了，initState() 函数将会被调用。

通常，我们可以重写这个函数，进行初始化操作。

didChangeDependencies()

在 initState() 调用结束后，这个函数会被调用。

事实上，当 State 对象的依赖关系发生变化时，这个函数总会被 Framework 调用。

build()

经过以上步骤，系统认为一个 State 已经准备好了，就会调用 build() 来构建视图。

我们需要在这个函数中，返回一个 Widget。

deactivate()

当 State 被暂时从视图树中移除时，会调用这个函数。

页面切换时，也会调用它，因为此时 State 在视图树中的位置发生了变化，需要先暂时移除后添加。

⚠️注意，重写的时候必须要调用 super.deactivate()。

dispose()

当 State 被永久的从视图树中移除，Framework 会调用该函数。

在销毁前触发，我们可以在这里进行最终的资源释放。

在调用这个函数之前，总会先调用 deactivate()。

⚠️注意，重写的时候必须要调用 super.dispose()。

didUpdateWidget(covariant T oldWidget)

当 widget 的配置发生变化时，会调用这个函数。

比如，Hot-reload 的时候就会调用这个函数。

这个函数调用后，会调用 build()。

setState()

当我需要更新 State 的视图时，需要手动调用这个函数，它会触发 build() 。
```

## 启动流程

```
https://www.jianshu.com/p/8b782b8da96e

https://blog.csdn.net/lcl130/article/details/114924678
```



## WidgetsBindingObserver 



### 方法

```dart
// Accessibility 相关特性回调
void didChangeAccessibilityFeatures() { }

// App 生命周期改变回调
void didChangeAppLifecycleState(AppLifecycleState state) {
	///  AppLifecycleState 的枚举类，
    ///  inactive：处在不活动状态，无法处理用户响应
    ///  paused：不可见且不能响应用户的输入，但在后台继续活动中
    ///  resumed：可见的，且能响应用户的输入
}

// 本地化语言改变回调
void didChangeLocales(List<Locale> locale) { }

// 系统窗口相关改变回调
void didChangeMetrics() { }

// 系统亮度改变回调
void didChangePlatformBrightness() { }

// 文本缩放系数改变回调
void didChangeTextScaleFactor() { }

// 内存不足警告回调
void didHaveMemoryPressure() { }

// 页面 pop
Future<bool> didPopRoute() => Future<bool>.value(false);

// 页面 push
Future<bool> didPushRoute(String route) => Future<bool>.value(false);
```

### 使用

```dart
class AppLifecycleReactor extends StatefulWidget {
  const AppLifecycleReactor({ Key key }) : super(key: key);

  @override
  _AppLifecycleReactorState createState() => _AppLifecycleReactorState();
}

class _AppLifecycleReactorState extends State<AppLifecycleReactor> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);// 注册监听器
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);// 移除监听器
    super.dispose();
  }

  AppLifecycleState _notification;

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    print("$state");
  }
}
```

### 帧绘制回调

```dart
单次 Frame 绘制回调：
WidgetsBinding.instance.addPostFrameCallback((_){
    print("addPostFrameCallback 绘制回调"); // 只回调一次
});

WidgetsBinding.instance.addPersistentFrameCallback((_){
    print("addPersistentFrameCallback 绘制回调"); // 每帧都回调
});
```



## 绘制流程

```dart
当开始渲染的时候，会先通过createElement()创建element，随后element会在其performRebuild()方法中调用widget的build方法创建widget，而widget继承自xxRenderObjectWidget(当然最高级的还是Widget)。进而在performRebuild()方法中调用创建的widget的createRenderObject（）创建对应的 renderObject并调用attachXXX()方法将它挂到renderObject树上，而后期在绘制的时候，则会调用renderObject的paint（）方法完成绘制。
  
  
1.widget：框架的公共 API 或蓝图。开发人员通常只处理组合小部件。
2.element：管理小部件和小部件的渲染对象。对于树中的每个小部件实例，都有一个对应的元素。
3.RenderObject：负责绘制和布局特定的小部件实例。还处理用户交互，如命中测试和手势。

```

### element类型

有两种类型的元素：

1. **ComponentElement**：一种由其他元素组成的元素。这对应于在其他小部件中组合小部件
2. **RenderObjectElement**：一种保存渲染对象的元素。

您可以将**ComponentElement**视为一组元素，将**RenderObjectElement**视为单个元素。请记住，每个元素都包含一个渲染对象来执行小部件绘制、布局和命中测试。



## InheritedWidget 

```dart
https://blog.csdn.net/gpf1320253667/article/details/112598506?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.control&spm=1001.2101.3001.4242


context.dependOnInheritedWidgetOfExactType  可以获取InheritedWidget的实例
```

```dart
 static FormWidgetState? of(BuildContext context) {
    final _FormScope? scope = context.dependOnInheritedWidgetOfExactType<_FormScope>();
    return scope?._formState;
  }
  
  
  class _FormScope extends InheritedWidget {
  const _FormScope({
    Key? key,
    required Widget child,
    required FormWidgetState formState,
    required int generation,
  })   : _formState = formState,
        _generation = generation,
        super(key: key, child: child);

  final FormWidgetState _formState;

  final int _generation;

  FormWidget get form => _formState.widget;

  @override
  bool updateShouldNotify(_FormScope old) => _generation != old._generation;
}
```



```dart
/// 声明
class ShareWidget extends InheritedWidget {

  // 需要共享的数据，可以是单个数据，也可以是多个数据
  // 多个数据建议封装成一个类来进行管理，如这里的DataState，里面可以根据实际需求添加更多的字段。
  // final int shareData;  // 单个值可以不用封装成类，直接定义，但实际需求往往更复杂，因此建议统一使用外部的管理类来管理
  final ShareData shareData; // 建议定义类来统一管理共享数据，一个或者多个数据。

  // 构造函数
  const ShareWidget({
    Key key,
    @required this.shareData,
    @required Widget child,
  }) : super(key: key, child: child);

  // 写法1:返回组件对象
  static ShareWidget of(BuildContext context) {
    // return context.inheritFromWidgetOfExactType(ShareWidget);
    // 上面的方法在v1.12.1之后被弃用，改为使用下面的dependOnInheritedWidgetOfExactType。
    return context.dependOnInheritedWidgetOfExactType<ShareWidget>();
  }

  // 写法2:直接返回共享数据
  static ShareData of(BuildContext context) {
    final ShareWidget shareWidget =
        context.dependOnInheritedWidgetOfExactType<ShareWidget>();
    return shareWidget.shareData;
  }

  //该回调决定当状态发生变化时，是否通知子树中依赖的该组件
  @override
  bool updateShouldNotify(ShareWidget oldWidget) {
    // 是否需要更新，返回true则更新
    // 当返回true时，如果在子child的build函数中有调用of获取该InheritedWidget，
    // 那么这个子widget的`state.didChangeDependencies`方法会被调用
    return this.shareData!= oldWidget.shareData;
  }
}


/// 使用
@override
  Widget build(BuildContext context) {
    // 此处的ShareWidget是InheritedWidget类型的组建
    return ShareWidget(
      shareData: ShareData(userName:"初始值"),
      child: MaterialApp(
        title: 'InheritedWidget的使用',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        /// 获取 共享 数据
        home: Text("${ShareWidget.of(context).shareData.userName}"),
      ),
    );
  }

```



## Notification

```dart
/// 声明
class TestNotification extends Notification {
TestNotification({
  @required this.count,
});

final int count;
}


/// 使用 触发
new RaisedButton(
       textColor: Colors.black,
       child: new Center(
         child: new Text('点击传递随机数给上层Widget'),
       ),
       onPressed: () {
         /// 修改内容 通知修改
         new TestNotification(count: new Random().nextInt(100)).dispatch(key.currentContext);
       })

  
  //// 监听
   @override
  Widget build(BuildContext context) {
    //监听通知  
    return NotificationListener<TestNotification>(
      onNotification: (TestNotification v) {
        setState(() {
          _msg+=v.msg+"  ";
        });
       return true;
      },
      child: Text('')
```



## 事件event

```dart

gesturedetector

点击:
	onTapDown: 		用户手指按下
    onTapUp: 		手指抬起
	onTap: 			点击完成
    onTapCancel: 	按下过程取消

双击:
	onDoubleTap: 	双击

长按:
	onLongPress:	在屏幕上保持一段时间

纵向拖拽:
	onVerticalDragStart: 	接触并开始纵向移动
    onVerticalDragUpdate:	移动
	onVerticalDragEnd:		结束


横向拖拽:
	onHorizontlDragStart: 	接触并开始纵向移动
    onHorizontlDragUpdate:	移动
	onHorizontlDragEnd:		结束
        
globalPosition  获取相对屏幕位置
localPosition	相对于Widget位置信息
```

```dart
body:Listener(
		onPointerDown:(event){
			event.position		// 屏幕中位置
			event.localPosition // 在组件中的位置
		}
	)
指针事件:
	onPointerDownEvent
    onPointerMoveEvent
    onPoiinterUpEvent 
    onPointerCancelEvent

```

```dart
Inkwell 和 GestureDetector区别

  new InkWell(
    child: new Text("Click me!"),
    onTap: () {
      // 单击
    },
    onDoubleTap: () {
      // 双击
    },
    onLongPress: () {
      // 长按
    }
  );
  
  
  GestureDetector: 
  		是无状态组件 
  		无水波纹

  Inkwell:
  		水波纹
  		widget
            
可自定义水波纹:
	Ink(
        highlightColor: Colors.purple[800], //颜色在最上层 会覆盖
    	splashColor:Color.red
    )
```

事件传递

```dart
event_bus //第三方库
```



## StatelessWidget

## StatefullWidget

```dart
StatelessWidget //无状态
StatefullWidget //可变状态
```

## MaterialApp

https://api.flutter.dev/flutter/material/MaterialApp-class.html

```dart
MaterialApp({
  Key key,
  this.title = '', // 设备用于为用户识别应用程序的单行描述
  this.home, // 应用程序默认路由的小部件,用来定义当前应用打开的时候，所显示的界面
  this.color, // 在操作系统界面中应用程序使用的主色。
  this.theme, // 应用程序小部件使用的颜色。
  this.routes = const <String, WidgetBuilder>{}, // 应用程序的顶级路由表
  this.navigatorKey, // 在构建导航器时使用的键。
  this.initialRoute, // 如果构建了导航器，则显示的第一个路由的名称
  this.onGenerateRoute, // 应用程序导航到指定路由时使用的路由生成器回调
  this.onUnknownRoute, // 当 onGenerateRoute 无法生成路由(initialRoute除外)时调用
  this.navigatorObservers = const <NavigatorObserver>[], // 为该应用程序创建的导航器的观察者列表
  this.builder, // 用于在导航器上面插入小部件，但在由WidgetsApp小部件创建的其他小部件下面插入小部件，或用于完全替换导航器
  this.onGenerateTitle, // 如果非空，则调用此回调函数来生成应用程序的标题字符串，否则使用标题。
  this.locale, // 此应用程序本地化小部件的初始区域设置基于此值。
  this.localizationsDelegates, // 这个应用程序本地化小部件的委托。
  this.localeListResolutionCallback, // 这个回调负责在应用程序启动时以及用户更改设备的区域设置时选择应用程序的区域设置。
  this.localeResolutionCallback, // 
  this.supportedLocales = const <Locale>[Locale('en', 'US')], // 此应用程序已本地化的地区列表 
  this.debugShowMaterialGrid = false, // 打开绘制基线网格材质应用程序的网格纸覆盖
  this.showPerformanceOverlay = false, // 打开性能叠加
  this.checkerboardRasterCacheImages = false, // 打开栅格缓存图像的棋盘格
  this.checkerboardOffscreenLayers = false, // 打开渲染到屏幕外位图的图层的棋盘格
  this.showSemanticsDebugger = false, // 打开显示框架报告的可访问性信息的覆盖
  this.debugShowCheckedModeBanner = true, // 在选中模式下打开一个小的“DEBUG”横幅，表示应用程序处于选中模式
}) 
```

```dart
import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Welcome to Flutter',
      theme:new ThemeData(
      	primaryColor: Colors.
      ),
    );
  }
}
```

| key   | type      | detail                       |
| ----- | --------- | ---------------------------- |
| title | String    | 为用户识别应用程序的单行描述 |
| theme | ThemeData |                              |
|       |           |                              |

ThemeData

```dart
factory ThemeData({
  Brightness brightness, // 应用整体主题的亮度。用于按钮之类的小部件，以确定在不使用主色或强调色时选择什么颜色。
  MaterialColor primarySwatch,// 定义一个单一的颜色以及十个色度的色块。
  Color primaryColor, // 应用程序主要部分的背景颜色(toolbars、tab bars 等)
  Brightness primaryColorBrightness, // primaryColor的亮度。用于确定文本的颜色和放置在主颜色之上的图标(例如工具栏文本)。
  Color primaryColorLight, // primaryColor的浅色版
  Color primaryColorDark, // primaryColor的深色版
  Color accentColor, // 小部件的前景色(旋钮、文本、覆盖边缘效果等)。
  Brightness accentColorBrightness, // accentColor的亮度。
  Color canvasColor, //  MaterialType.canvas 的默认颜色
  Color scaffoldBackgroundColor, // Scaffold的默认颜色。典型Material应用程序或应用程序内页面的背景颜色。
  Color bottomAppBarColor, // BottomAppBar的默认颜色
  Color cardColor, // Card的颜色
  Color dividerColor, // Divider和PopupMenuDivider的颜色，也用于ListTile之间、DataTable的行之间等。
  Color highlightColor, // 选中在泼墨动画期间使用的突出显示颜色，或用于指示菜单中的项。
  Color splashColor,  // 墨水飞溅的颜色。InkWell
  InteractiveInkFeatureFactory splashFactory, // 定义由InkWell和InkResponse反应产生的墨溅的外观。
  Color selectedRowColor, // 用于突出显示选定行的颜色。
  Color unselectedWidgetColor, // 用于处于非活动(但已启用)状态的小部件的颜色。例如，未选中的复选框。通常与accentColor形成对比。也看到disabledColor。
  Color disabledColor, // 禁用状态下部件的颜色，无论其当前状态如何。例如，一个禁用的复选框(可以选中或未选中)。
  Color buttonColor, // RaisedButton按钮中使用的Material 的默认填充颜色。
  ButtonThemeData buttonTheme, // 定义按钮部件的默认配置，如RaisedButton和FlatButton。
  Color secondaryHeaderColor, // 选定行时PaginatedDataTable标题的颜色。
  Color textSelectionColor, // 文本框中文本选择的颜色，如TextField
  Color cursorColor, // 文本框中光标的颜色，如TextField
  Color textSelectionHandleColor,  // 用于调整当前选定的文本部分的句柄的颜色。
  Color backgroundColor, // 与主色形成对比的颜色，例如用作进度条的剩余部分。
  Color dialogBackgroundColor, // Dialog 元素的背景颜色
  Color indicatorColor, // 选项卡中选定的选项卡指示器的颜色。
  Color hintColor, // 用于提示文本或占位符文本的颜色，例如在TextField中。
  Color errorColor, // 用于输入验证错误的颜色，例如在TextField中
  Color toggleableActiveColor, // 用于突出显示Switch、Radio和Checkbox等可切换小部件的活动状态的颜色。
  String fontFamily, // 文本字体
  TextTheme textTheme, // 文本的颜色与卡片和画布的颜色形成对比。
  TextTheme primaryTextTheme, // 与primaryColor形成对比的文本主题
  TextTheme accentTextTheme, // 与accentColor形成对比的文本主题。
  InputDecorationTheme inputDecorationTheme, // 基于这个主题的 InputDecorator、TextField和TextFormField的默认InputDecoration值。
  IconThemeData iconTheme, // 与卡片和画布颜色形成对比的图标主题
  IconThemeData primaryIconTheme, // 与primaryColor形成对比的图标主题
  IconThemeData accentIconTheme, // 与accentColor形成对比的图标主题。
  SliderThemeData sliderTheme,  // 用于呈现Slider的颜色和形状
  TabBarTheme tabBarTheme, // 用于自定义选项卡栏指示器的大小、形状和颜色的主题。
  CardTheme cardTheme, // Card的颜色和样式
  ChipThemeData chipTheme, // Chip的颜色和样式
  TargetPlatform platform, 
  MaterialTapTargetSize materialTapTargetSize, // 配置某些Material部件的命中测试大小
  PageTransitionsTheme pageTransitionsTheme, 
  AppBarTheme appBarTheme, // 用于自定义Appbar的颜色、高度、亮度、iconTheme和textTheme的主题。
  BottomAppBarTheme bottomAppBarTheme, // 自定义BottomAppBar的形状、高度和颜色的主题。
  ColorScheme colorScheme, // 拥有13种颜色，可用于配置大多数组件的颜色。
  DialogTheme dialogTheme, // 自定义Dialog的主题形状
  Typography typography, // 用于配置TextTheme、primaryTextTheme和accentTextTheme的颜色和几何TextTheme值。
  CupertinoThemeData cupertinoOverrideTheme 
})
```

AppBarTheme

```dart
  const AppBarTheme({
    this.brightness,
    this.color, 	// 背景颜色
    this.elevation, // 阴影辐射范围 default 4.0
    this.shadowColor,
    this.iconTheme,
    this.actionsIconTheme,
    this.textTheme,
    this.centerTitle,
  });
```



## Scaffold

![image-20200704124550478](/image/flutter/image-20200704124550478.png)

## appbar

```dart
AppBar({
    Key key,
    this.leading, //widget类型，即可任意设计样式，表示左侧leading区域，通常为icon，如返回icon
    this.automaticallyImplyLeading = true, // 如果leading!=null，该属性不生效；如果leading==null且为true，左侧leading区域留白；如果leading==null且为false，左侧leading区域扩展给title区域使用
    this.title,//widget类型，即可任意设计样式，表示中间title区域，通常为标题栏
    this.actions,// List<Widget>类型，即可任意设计样式，表示右侧actions区域，可放置多个widget，通常为icon，如搜索icon、菜单icon
    this.flexibleSpace,
    this.bottom, //PreferredSizeWidget类型，appbar底部区域，通常为Tab控件
    this.elevation, //阴影高度，默认为4
    this.shape,//ShapeBorder 类型，表示描边形状
    this.backgroundColor, //Color类型，背景色 
    this.brightness,//Brightness类型，表示当前appbar主题是亮或暗色调，有dark和light两个值，可影响系统状态栏的图标颜色
    this.iconTheme, //IconThemeData类型，可影响包括leading、title、actions中icon的颜色、透明度，及leading中的icon大小。
    this.actionsIconTheme,
    this.textTheme,// TextTheme类型，文本主题样式，可设置appbar中文本的许多样式，如字体大小、颜色、前景色、背景色等...
    this.primary = true,//true时，appBar会以系统状态栏高度为间距显示在下方；false时，会和状态栏重叠，相当于全屏显示。
    this.centerTitle, // boolean 类型，表示标题是否居中显示
    this.titleSpacing = NavigationToolbar.kMiddleSpacing,//title区域水平方向与leading和actions的间距(padding)
    this.toolbarOpacity = 1.0,//toolbar区域透明度
    this.bottomOpacity = 1.0,//bottom区域透明度
    // 防止背景图或者FloatingActionButton被顶上去 
    resizeToAvoidBottomInset: false,
  }
```



## 显示隐藏状态

```dart
import 'package:flutter/services.dart';

   //显示底部栏(隐藏顶部状态栏)
//    SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.bottom]);
    //显示顶部栏(隐藏底部栏)
//    SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.top]);
    //隐藏底部栏和顶部状态栏
    SystemChrome.setEnabledSystemUIOverlays([]);
```



## 底部导航栏

```dart

import 'package:flutter/material.dart';

class BottomBar extends StatefulWidget {
  @override
  BottomBarState createState() => BottomBarState();
}

class BottomBarState extends State<BottomBar> {
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      items: [
        BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              color: Colors.blue,
            ),
            title: Text('HOME', style: TextStyle(color: Colors.blue))),
        BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              color: Colors.blue,
            ),
            title: Text('HOME', style: TextStyle(color: Colors.blue)))
      ],
    );
  }
}

mixin StateBottomBar {}

```

```
import 'package:flutter/material.dart';

import './pages/main_BottomBar/main_BottomBar.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Welcome to Flutter',
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('Welcome to Flutster'),
        ),
        body: new Center(
          // child: new Text(
          //   'Hello Worlds',
          //   textDirection: TextDirection.ltr,
          //   style: TextStyle(
          //       fontSize: 14.0, color: Color.fromRGBO(255, 122, 122, .5)),
          // ),
          heightFactor: 1,
          widthFactor: 1,
          // child: new HomeContent(),
          // child: new ImageCom(),
          child: ListView(
            children: <Widget>[
              ListTile(
                title: Text('title'),
                subtitle: Text('data'),
                trailing: Text('trailing'),
                isThreeLine: true,
                dense: true,
                onLongPress: () {
                  print('222');
                },
              ),

              TextField(
                  decoration: InputDecoration(
                      hintText: 'dddd',
                      border: OutlineInputBorder(),
                      labelText: '用户')),
              SizedBox(height: 20),
              TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                      hintText: 'dddd',
                      border: OutlineInputBorder(),
                      labelText: '用户')),

              // MyInput()
            ],
          ),
          // child: new PaddingTestRoute(),
        ),
       bottomNavigationBar:BottomBar(),
      ),
    );
  }
}
```

## SliverAppBar

```dart
 const SliverAppBar({
    Key key,
    this.leading,//左侧的图标或文字，多为返回箭头
    this.automaticallyImplyLeading = true,//没有leading为true的时候，默认返回箭头，没有leading且为false，则显示title
    this.title,//标题
    this.actions,//标题右侧的操作
    this.flexibleSpace,//可以理解为SliverAppBar的背景内容区
    this.bottom,//SliverAppBar的底部区
    this.elevation,//阴影
    this.forceElevated = false,//是否显示阴影
    this.backgroundColor,//背景颜色
    this.brightness,//状态栏主题，默认Brightness.dark，可选参数light
    this.iconTheme,//SliverAppBar图标主题
    this.actionsIconTheme,//action图标主题
    this.textTheme,//文字主题
    this.primary = true,//是否显示在状态栏的下面,false就会占领状态栏的高度
    this.centerTitle,//标题是否居中显示
    this.titleSpacing = NavigationToolbar.kMiddleSpacing,//标题横向间距
    this.expandedHeight,//合并的高度，默认是状态栏的高度加AppBar的高度
    this.floating = false,//滑动时是否悬浮
    this.pinned = false,//标题栏是否固定
    this.snap = false,//配合floating使用
  })
```

滚动到指定位置

```dart
 onTap: () {
      _pageScroll.animateTo(
          _pageScroll.position.minScrollExtent, //滚动到顶部部
          duration: const Duration(milliseconds: 300),
                      curve: Curves.easeOut,
                    );
  },
```

## 下拉框

```
 DropdownButton(
                  value: dropdownValue,
                  hint: Text('快捷操作'),
                  isExpanded: true,
                  underline: Container(
                    height: 0.5,
                    color: ZjTheme.zj_border_fb,
                  ),
                  onChanged: (newValue) {
                    print('----$newValue');
                    setState(() {
                      dropdownValue = newValue;
                    });
                  },
                  items: [
                    DropdownMenuItem(
                      value: '1',
                      child: Text('1'),
                    ),
                    DropdownMenuItem(
                      value: '2',
                      child: Text('1'),
                    ),
                    DropdownMenuItem(
                      value: '3',
                      child: Text('1'),
                    ),
                  ],
                ),
```



## 弹窗

### Dialog

```dart
https://juejin.im/post/6844903822028963847
Future<T> showDialog<T>({
  @required BuildContext context,
  bool barrierDismissible = true,   // 点击 dialog 外部是否可消失
  barrierColor:Colors.black54, // 遮罩颜色
  useSafeArea:true,   // 屏幕“安全”区域
  WidgetBuilder builder,  // 构建 Dialog 视图 BuildContext context=> widget
})

    
    如果要更新 dialog中的视图
    科技加一层StatefulBuilder建立自身的 setstate；
```

```dart
showDialog<Future>(
      context: context,
      barrierDismissible: false,
      useRootNavigator: true,
      useSafeArea: true,
      builder: (BuildContext context) {
      	 BuildContext iscontext = context; // 父级的
         bool isShowPhone = true;
        return StatefulBuilder(builder: (context, state // 自己的setstate) {
        	return Widget
        }
      }

```

### AlertDialog

```dart
 const AlertDialog({
    Key? key,
    this.title,
    this.titlePadding,
    this.titleTextStyle,
    this.content,
    this.contentPadding = const EdgeInsets.fromLTRB(24.0, 20.0, 24.0, 24.0),
    this.contentTextStyle,
    this.actions,
    this.actionsPadding = EdgeInsets.zero,
    this.actionsOverflowDirection,
    this.actionsOverflowButtonSpacing,
    this.buttonPadding,
    this.backgroundColor,
    this.elevation,
    this.semanticLabel,
    this.insetPadding = _defaultInsetPadding,
    this.clipBehavior = Clip.none,
    this.shape,
    this.scrollable = false,
  }) : assert(contentPadding != null),
       assert(clipBehavior != null),
       super(key: key);
```



## Widget

## Text

```dart
 Text(
        "Text组件的使用",
        style: TextStyle(
            // 文字颜色
            color: Color(0xfff0000),
            // none 不显示装饰线条，underline 字体下方，overline 字体上方，lineThrough穿过文字
            decoration: TextDecoration.none,
            // solid 直线，double 双下划线，dotted 虚线，dashed 点下划线，wavy 波浪线
            decorationStyle: TextDecorationStyle.solid,
            // 装饰线的颜色
            decorationColor: Colors.red,
            // 文字大小
            fontSize: 15.0,
            // normal 正常，italic 斜体
            fontStyle: FontStyle.normal,
            // 字体的粗细
            fontWeight: FontWeight.bold,
            // 文字间的宽度
            letterSpacing: 1.0,
            // 文本行与行的高度，作为字体大小的倍数（取值1~2，如1.2）
            height: 1,
            //对齐文本的水平线:
            //TextBaseline.alphabetic：文本基线是标准的字母基线
            //TextBaseline.ideographic：文字基线是表意字基线；
            //如果字符本身超出了alphabetic 基线，那么ideograhpic基线位置在字符本身的底部。
            textBaseline: TextBaseline.alphabetic),
        // 段落的间距样式
        strutStyle: StrutStyle(
          fontFamily: 'serif',
          fontFamilyFallback: ['monospace', 'serif'],
          fontSize: 20,
          height: 2,
          leading: 2.0,
          fontWeight: FontWeight.w300,
          fontStyle: FontStyle.normal,
          forceStrutHeight: true,
          debugLabel: 'text demo',
        ),
        // 文字对齐方式
        textAlign: TextAlign.center,
        // 文字排列方向 ltr 左到右，rtl右到左
        textDirection: TextDirection.ltr,
        // 用于选择区域特定字形的语言环境
        locale: Locale('zh_CN'),
        // 软包裹 ，文字是否应该在软断行出断行
        softWrap: false,
        // 如何处理视觉溢出:clip 剪切溢出的文本以修复其容器。ellipsis 使用省略号表示文本已溢出。fade 将溢出的文本淡化为透明。
        overflow: TextOverflow.clip,
        // 文字的缩放比例
        textScaleFactor: 1.0,
        // 文本要跨越的可选最大行数,
        maxLines: 2,
        // 图像的语义描述，用于向Andoid上的TalkBack和iOS上的VoiceOver提供图像描述
        semanticsLabel: 'text demo',
        textWidthBasis: TextWidthBasis.longestLine,
      )
```

## Offstage

```
 控制child是否显示
 const Offstage({ Key key, this.offstage = true, Widget child })
```

## PreferredSize

```
   Scaffold( 
        appBar: PreferredSize(
        child: AppBar(
        ),
        preferredSize: Size.fromHeight(screenSize.height * 0.07))
);
```

## tabber

```dart
 Key key,
    @required this.tabs,
    this.controller,
    this.isScrollable = false, 				//是否可滚动
    this.indicatorColor,					//指示器颜色
    this.indicatorWeight = 2.0,				//指示器厚度
    this.indicatorPadding = EdgeInsets.zero,//底部指示器的Padding

    this.indicator,						//指示器decoration，例如边框等
    this.indicatorSize, //指示器大小计算方式
    this.labelColor,
    this.labelStyle,
    this.labelPadding,
    this.unselectedLabelColor,
    this.unselectedLabelStyle,
    this.dragStartBehavior = DragStartBehavior.start,
    this.mouseCursor,
    this.onTap,
    this.physics,
```

```dart
import 'package:flutter/material.dart';

class LoginTab extends StatefulWidget {
  @override
  _LoginTabState createState() => _LoginTabState();
}

class _LoginTabState extends State<LoginTab>
    with SingleTickerProviderStateMixin {
  TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = new TabController(length: 2, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          TabBar(
            controller: _tabController,
            tabs: [
              Tab(text: 'Tab1'),
              Tab(text: 'Tab1'),
            ],
          ),
          Container(
            height: 600,
            child: TabBarView(
              controller: _tabController,
              children: [
                Text('data'),
                Text('dat2'),
              ],
            ),
          )
        ],
      ),
    );
  }
}

```



## SliverAppBar

```dart
 const SliverAppBar({
    Key key,
    this.leading,//左侧的图标或文字，多为返回箭头
    this.automaticallyImplyLeading = true,//没有leading为true的时候，默认返回箭头，没有leading且为false，则显示title
    this.title,//标题
    this.actions,//标题右侧的操作
    this.flexibleSpace,//可以理解为SliverAppBar的背景内容区
    this.bottom,//SliverAppBar的底部区
    this.elevation,//阴影
    this.forceElevated = false,//是否显示阴影
    this.backgroundColor,//背景颜色
    this.brightness,//状态栏主题，默认Brightness.dark，可选参数light
    this.iconTheme,//SliverAppBar图标主题
    this.actionsIconTheme,//action图标主题
    this.textTheme,//文字主题
    this.primary = true,//是否显示在状态栏的下面,false就会占领状态栏的高度
    this.centerTitle,//标题是否居中显示
    this.titleSpacing = NavigationToolbar.kMiddleSpacing,//标题横向间距
    this.expandedHeight,//合并的高度，默认是状态栏的高度加AppBar的高度
    this.floating = false,//滑动时是否悬浮
    this.pinned = false,//标题栏是否固定
    this.snap = false,//配合floating使用
  })
```

```dart
      body: new CustomScrollView(
        slivers: <Widget>[
          new SliverAppBar(
            leading: GestureDetector(
              child: Icon(Icons.arrow_back),
              onTap: () => Navigator.pop(context),
            ), //左侧按钮
            /**
             * 如果没有leading，automaticallyImplyLeading为true，就会默认返回箭头
             * 如果 没有leading 且为false，空间留给title
             * 如果有leading，这个参数就无效了
             */
            automaticallyImplyLeading: true,
            // title: Text('大标题'), //标题
            centerTitle: true, //标题是否居中
            actions: [Icon(Icons.archive)], //右侧的内容和点击事件啥的
            elevation: 4, //阴影的高度
            forceElevated: false, //是否显示阴影
            backgroundColor: Colors.green, //背景颜色
            brightness: Brightness.dark, //黑底白字，lignt 白底黑字
            iconTheme: IconThemeData(
                color: Colors.red,
                size: 30,
                opacity: 1), //所有的icon的样式,不仅仅是左侧的，右侧的也会改变
            textTheme: TextTheme(), //字体样式
            primary: true, // appbar是否显示在屏幕的最上面，为false是显示在最上面，为true就显示在状态栏的下面
            titleSpacing: 16, //标题两边的空白区域
            expandedHeight: 200.0, //默认高度是状态栏和导航栏的高度，如果有滚动视差的话，要大于前两者的高度
            floating: false, //滑动到最上面，再滑动是否隐藏导航栏的文字和标题等的具体内容，为true是隐藏，为false是不隐藏
            pinned: true, //是否固定导航栏，为true是固定，为false是不固定，往上滑，导航栏可以隐藏
            snap:
                false, //只跟floating相对应，如果为true，floating必须为true，也就是向下滑动一点儿，整个大背景就会动画显示全部，网上滑动整个导航栏的内容就会消失
            flexibleSpace: new FlexibleSpaceBar(
              title: new Text("随内容一起滑动的头部"),
              centerTitle: true,
              collapseMode: CollapseMode.pin,
            ),
          ),
          new SliverFixedExtentList(
            itemExtent: 150.0,
            delegate:
                new SliverChildBuilderDelegate((context, index) => new ListTile(
                      title: new Text("List item $index"),
                    )),
          )
        ],
      ),
```



```dart
滚动 浮动
http://www.ptbird.cn/flutter-customscrollview-floating-appbar.html
```

示例

```dart
TabController _controller;

@override
  void initState() {
    super.initState();
    _controller = TabController(
      length: _tabValues.length,
      vsync: ScrollableState(),
    );
  }

Container(
            child: TabBar(
              tabs: _tabValues.map((f) {
                return Text(f);
              }).toList(),
              controller: _controller,
              indicatorColor: Colors.red,
              indicatorSize: TabBarIndicatorSize.tab,
              isScrollable: true,
              labelColor: Colors.red,
              unselectedLabelColor: Colors.black,
              indicatorWeight: 5.0,
              labelStyle: TextStyle(height: 2),
            ),
          ),

 Container(
            // width: 750,
            height: 600.0, // 非body时 需要指定高度
            child: TabBarView(
              controller: _controller,
              children: _tabValues.map((f) {
                return Center(
                  child: Text(f),
                );
              }).toList(),
            ),
          ),
```

## 主题ThemeData

```dart
factory ThemeData({
  Brightness brightness, // 应用整体主题的亮度。用于按钮之类的小部件，以确定在不使用主色或强调色时选择什么颜色。
  MaterialColor primarySwatch,// 定义一个单一的颜色以及十个色度的色块。
  Color primaryColor, // 应用程序主要部分的背景颜色(toolbars、tab bars 等)
  Brightness primaryColorBrightness, // primaryColor的亮度。用于确定文本的颜色和放置在主颜色之上的图标(例如工具栏文本)。
  Color primaryColorLight, // primaryColor的浅色版
  Color primaryColorDark, // primaryColor的深色版
  Color accentColor, // 小部件的前景色(旋钮、文本、覆盖边缘效果等)。
  Brightness accentColorBrightness, // accentColor的亮度。
  Color canvasColor, //  MaterialType.canvas 的默认颜色
  Color scaffoldBackgroundColor, // Scaffold的默认颜色。典型Material应用程序或应用程序内页面的背景颜色。
  Color bottomAppBarColor, // BottomAppBar的默认颜色
  Color cardColor, // Card的颜色
  Color dividerColor, // Divider和PopupMenuDivider的颜色，也用于ListTile之间、DataTable的行之间等。
  Color highlightColor, // 选中在泼墨动画期间使用的突出显示颜色，或用于指示菜单中的项。
  Color splashColor,  // 墨水飞溅的颜色。InkWell
  InteractiveInkFeatureFactory splashFactory, // 定义由InkWell和InkResponse反应产生的墨溅的外观。
  Color selectedRowColor, // 用于突出显示选定行的颜色。
  Color unselectedWidgetColor, // 用于处于非活动(但已启用)状态的小部件的颜色。例如，未选中的复选框。通常与accentColor形成对比。也看到disabledColor。
  Color disabledColor, // 禁用状态下部件的颜色，无论其当前状态如何。例如，一个禁用的复选框(可以选中或未选中)。
  Color buttonColor, // RaisedButton按钮中使用的Material 的默认填充颜色。
  ButtonThemeData buttonTheme, // 定义按钮部件的默认配置，如RaisedButton和FlatButton。
  Color secondaryHeaderColor, // 选定行时PaginatedDataTable标题的颜色。
  Color textSelectionColor, // 文本框中文本选择的颜色，如TextField
  Color cursorColor, // 文本框中光标的颜色，如TextField
  Color textSelectionHandleColor,  // 用于调整当前选定的文本部分的句柄的颜色。
  Color backgroundColor, // 与主色形成对比的颜色，例如用作进度条的剩余部分。
  Color dialogBackgroundColor, // Dialog 元素的背景颜色
  Color indicatorColor, // 选项卡中选定的选项卡指示器的颜色。
  Color hintColor, // 用于提示文本或占位符文本的颜色，例如在TextField中。
  Color errorColor, // 用于输入验证错误的颜色，例如在TextField中
  Color toggleableActiveColor, // 用于突出显示Switch、Radio和Checkbox等可切换小部件的活动状态的颜色。
  String fontFamily, // 文本字体
  TextTheme textTheme, // 文本的颜色与卡片和画布的颜色形成对比。
  TextTheme primaryTextTheme, // 与primaryColor形成对比的文本主题
  TextTheme accentTextTheme, // 与accentColor形成对比的文本主题。
  InputDecorationTheme inputDecorationTheme, // 基于这个主题的 InputDecorator、TextField和TextFormField的默认InputDecoration值。
  IconThemeData iconTheme, // 与卡片和画布颜色形成对比的图标主题
  IconThemeData primaryIconTheme, // 与primaryColor形成对比的图标主题
  IconThemeData accentIconTheme, // 与accentColor形成对比的图标主题。
  SliderThemeData sliderTheme,  // 用于呈现Slider的颜色和形状
  TabBarTheme tabBarTheme, // 用于自定义选项卡栏指示器的大小、形状和颜色的主题。
  CardTheme cardTheme, // Card的颜色和样式
  ChipThemeData chipTheme, // Chip的颜色和样式
  TargetPlatform platform, 
  MaterialTapTargetSize materialTapTargetSize, // 配置某些Material部件的命中测试大小
  PageTransitionsTheme pageTransitionsTheme, 
  AppBarTheme appBarTheme, // 用于自定义Appbar的颜色、高度、亮度、iconTheme和textTheme的主题。
  BottomAppBarTheme bottomAppBarTheme, // 自定义BottomAppBar的形状、高度和颜色的主题。
  ColorScheme colorScheme, // 拥有13种颜色，可用于配置大多数组件的颜色。
  DialogTheme dialogTheme, // 自定义Dialog的主题形状
  Typography typography, // 用于配置TextTheme、primaryTextTheme和accentTextTheme的颜色和几何TextTheme值。
  CupertinoThemeData cupertinoOverrideTheme 
})
```

## safearea

```
屏幕适配
```



## webview

```
插件
https://pub.dev/packages/webview_flutter
```

```dart
拦截返回
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class Case extends StatefulWidget {
  Case({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _CaseState createState() => _CaseState();
}

class _CaseState extends State<Case> {
  String url = 'https://m.jia.top/sz/design/index?hideLeftArrow=1';
  WebViewController _webViewController;
  Future<bool> _requestPop() {
    // Navigator.of(context).pop(100);

    ///弹出页面并传回int值100，用于上一个界面的回调
    // return new Future.value(false);
    Future canGoBack = _webViewController.canGoBack();
    canGoBack.then((str) {
      if (str) {
        _webViewController.goBack();
      } else {
        Navigator.of(context).pop();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      child: WebView(
        initialUrl: url,
        javascriptMode: JavascriptMode.unrestricted,
        onWebViewCreated: (WebViewController webViewController) {
          // 在WebView创建完成后会产生一个 webViewController
          _webViewController = webViewController;
        },
      ),
      onWillPop: _requestPop,
    );
  }
}

```



## 布局

### container

绘制顺序

1. transform
2. decoration
3. child
4. foregroundDecoration

```dart
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('ss'),
      height: 200.0,
      width: 300.0,
      padding:EdgeInsets.all(20.0),
      alignment:Alignment.centerRight,
      decoration: BoxDecoration(
          color: Colors.yellow,
          border: Border.all(
            width: 1.0,
            color: Colors.blue,
          )),
    );
  }
}
```

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |



### Align

```dart
const Align({
    Key key,
    this.alignment = Alignment.center,
    this.widthFactor,
    this.heightFactor,
    Widget child,
})
```

### IntrinsicHeight

```
IntrinsicHeight可以根据子控件的高度，智能调整自身高度
解决 row 》 column 》 Expanded 保存问题
IntrinsicHeight(
child:Row(
	children:[
		Column(
			children:[
				Expanded()
			]
		)
	]
)
);
```



### Row

```dart
Row({
    Key key,
    // 主轴 水平方向
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
    MainAxisSize mainAxisSize = MainAxisSize.max,
    // 主轴 垂直方向
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
    TextDirection textDirection,
    VerticalDirection verticalDirection = VerticalDirection.down,
    TextBaseline textBaseline,
    List<Widget> children = const <Widget>[],
  })
    
IntrinsicHeight  所有的子组件 大小 等于最大子组件
```

### Column

```dart
 Column({
    Key key,
     // 主轴 垂直方向
    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
     // 盒子 max=block min=aline
    MainAxisSize mainAxisSize = MainAxisSize.max,
     // 副轴	水平方向
    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
    TextDirection textDirection,
     // item 排序方式 
    VerticalDirection verticalDirection = VerticalDirection.down,
    TextBaseline textBaseline,
    List<Widget> children = const <Widget>[],
  })
```

### Expanded

```dart
body:Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: <Widget>[
    Center(child:Text('I am JSPang')),
      // 当前元素 最大占据
    Expanded(child:Center(child:Text('my website is jspang.com'))),
    Center(child:Text('I love coding'))
  ],
)
```

### CircleAvatar

```dart
  const CircleAvatar({
    Key key,
    this.child,
    this.backgroundColor,
    this.backgroundImage,
    this.onBackgroundImageError,
    this.foregroundColor,
    this.radius,
    this.minRadius,
    this.maxRadius,
  })
```

### Stack

```dart
 Stack({
    Key key,
    this.alignment = AlignmentDirectional.topStart,
    this.textDirection,
    this.fit = StackFit.loose,
    this.overflow = Overflow.clip,
    List<Widget> children = const <Widget>[],
  })
     
     
var stack = new Stack(

        children: <Widget>[
          new CircleAvatar(
            backgroundImage: new NetworkImage('http://jspang.com/static//myimg/blogtouxiang.jpg'),
            radius: 100.0,
          ),
          new Positioned(
            top:10.0,
            left:10.0,
            child: new Text('JSPang.com'),
          ),
          new Positioned( // 定位
            bottom:10.0,
            right:10.0,
            child: new Text('2'),
          )
        ],
      );
```

sliverList

sliverAppBar

pageview.builder 有懒加载



## Wrap

|                    |      |      |
| ------------------ | ---- | ---- |
| direction          | axis |      |
| alignment          |      |      |
| runSpacing         |      |      |
| runAlignment       |      |      |
| crossAxisAlignment |      |      |
| VerticalDirection  |      |      |
| textDirection      |      |      |
| children           |      |      |

```dart
 Wrap({
    Key key,
    this.direction = Axis.horizontal,   //排列方向，默认水平方向排列
    this.alignment = WrapAlignment.start,  //子控件在主轴上的对齐方式
    this.spacing = 0.0,  //主轴上子控件中间的间距
    this.runAlignment = WrapAlignment.start,  //子控件在交叉轴上的对齐方式
    this.runSpacing = 0.0,  //交叉轴上子控件之间的间距
    this.crossAxisAlignment = WrapCrossAlignment.start,   //交叉轴上子控件的对齐方式
    this.textDirection,   //textDirection水平方向上子控件的起始位置
    this.verticalDirection = VerticalDirection.down,  //垂直方向上子控件的其实位置
    List<Widget> children = const <Widget>[],   //要显示的子控件集合
  })
```



## 辅助布局

#### center

```

```

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |

#### SizeBox



#### AspectRatio



#### FractionallySizedBox

#### card

## Transform

```dart
Transform(
     origin: Offset(57.w / 2, 34.h / 2),
     transform: Matrix4.rotationZ(pi / 2),
     child: Image.asset(
            'images/next.png',
             width: 57.w,
             height: 34.h,
           ),
  ),
```

## 裁剪

```
ClipOval: 圆形裁剪
ClipRRect: 圆角矩形裁剪
ClipRect：矩形裁剪
ClipPath: 路径裁剪

none：不裁剪
hardEdge：裁剪但不应用抗锯齿
antiAlias：裁剪且应用抗锯齿，此方式看起来会更平滑，通常用于处理圆形和弧形裁剪
antiAliasWithSaveLayer：裁剪、应用抗锯齿且有一个缓冲区，此方式裁剪很慢。
```



## 辅助样式

color

```dart
Color _bottombarcolor = Color(0xFFF63515);
```

```cpp

```

### BoxShadow

```
  const BoxShadow({
    Color color = const Color(0xFF000000),//阴影默认颜色,不能与父容器同时设置color
    Offset offset = Offset.zero,//延伸的阴影，向右下偏移的距离
    double blurRadius = 0.0,//延伸距离,会有模糊效果
    this.spreadRadius = 0.0 //延伸距离,不会有模糊效果
    })
```



### padding

```dart
	用法:
Padding(
	padding: const EdgeInsets.all(10.0),
	child: Text("title")
)

    属性:
padding:
	EdgeInsets.all(10.0); //全部 padding:
	EdgeInsets.only(	//padding-top:
    	left:20.0,
        top:20.0,
        right:20.0,
        bottom:20.0,
    );
	EdgeInsets.symmetric(
    	vertical:100.0, //垂直方向 padding-top/bottom 100
        horizontal:100.0  //水平方向
    );
	EdgeInsets.fromLTRB(
    	left:10.0,
        top:10.0,
        right:10.0,
        bottom:10.0,
    )
```

### Alignment

```dart
const Align({
    Key key,
    this.alignment = Alignment.center,
    this.widthFactor,
    this.heightFactor,
    Widget child
  })
    


alignment: 
	Alignment.center,
	Alignment.topLeft,
	Alignment.topCenter,
	Alignment.topRight,
	Alignment.centerLeft,
	Alignment(x,y), //中心为(0,0) (1,1)为右下角
```

### textDirection

```dart
// 文字排列方式
textDirection:
	TextDirection.ltr;
	TextDirection.rtl;
```

### BoxFit

```dart
fit:
	BoxFit.fit 			//全图显示 充满父容器
	BoxFit.contain		//全图显示 显示原比例 可能会有空隙
	BoxFit.cover		//显示可能拉伸，可能裁切，充满
	BoxFit.fitWidth		//宽度充满 会拉伸
	BoxFit.fitHeight	//高度充满
	BoxFit.scaleDown	//不允许显示超过源图片大小，可小不可大
```

### Icon

```dart
Icon(
   Icons.search,
   color: Color(0xffcccccc),
   size:18.0,
),
```

BoxDecoration

```
gradient:LinearGradient() //.渐变
```



## image

- Image.asset 本地

  ```dart
   Image.asset(
      String name, {
      Key key,
      AssetBundle bundle,
      this.frameBuilder,
      this.errorBuilder,
      this.semanticLabel,
      this.excludeFromSemantics = false,
      double scale,
      this.width,
      this.height,
      this.color,
      this.colorBlendMode,
      this.fit,
          |-BoxFit.cover //不变形
      this.alignment = Alignment.center,
      this.repeat = ImageRepeat.noRepeat,
      this.centerSlice,
      this.matchTextDirection = false,
      this.gaplessPlayback = false,
      String package,
      this.filterQuality = FilterQuality.low,
      int cacheWidth,
      int cacheHeight,
    })
  ```

  ```dart
  lib同级目录下 创建images文件
  
  |-images
  	|-2.0x
  	|-3.0x
  	|-a.png
  	
  new Image.asset('images/logo.png')
      
  
  ```

  ```
   pubspec.yaml 
   
  flutter:
  
    # The following line ensures that the Material Icons font is
    # included with your application, so that you can use the icons in
    # the material Icons class.
    uses-material-design: true
    assets:
      - images/logo.png
      - images/2.0x/logo.png
      - images/3.0x/logo.png
  ```

  

- Image.network 网路

  ```dart
  new Image.network ('https://test.jpg'))
  ```

- Image.file

  ```dart
  加载本地图片
  new Image.file(new File('/storage/xxx/xxx/test.jpg'))
  ```

  

## form

```dart

class MyStatefulWidget extends StatefulWidget {
  MyStatefulWidget({Key key}) : super(key: key);
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  final _formKey = GlobalKey<FormState>();
  var userName = new TextEditingController(); // 声明

  @override
  void initState() {
    super.initState();
    userName.text = '22220';
  }
    var flag = true;
  @override
  Widget build(BuildContext context) {
    
    return Form(
        autovalidateMode: AutovalidateMode.onUserInteraction,
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          TextFormField(
            
            decoration: const InputDecoration(
              hintText: 'Enter your email',
            ),
            validator: (value) {
              if (value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
            controller: userName, //绑定
            onChanged: (value){
              print('$value');
              print(userName.text); // 双向绑定
            },
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 16.0),
            child: RaisedButton(
              onPressed: () {
                // 校验
                if (_formKey.currentState.validate()) {
                  // Process data.
                  print('sss');
                }
              },
              child: Text('Submit'),
            ),
          ),
             Checkbox(value:this.flag, onChanged: (value){
            setState(() {
              this.flag = value;
              print(!value);
            });
          })
        ],
      ),
    );
  }
}

```

### input

isCollapsed:true 去除外边框

```dart
const TextField({
    Key key,
    this.controller,    //编辑框的控制器，跟文本框的交互一般都通过该属性完成，如果不创建的话默认会自动创建
    this.focusNode,  //用于管理焦点
    this.decoration = const InputDecoration(),   //输入框的装饰器，用来修改外观
    TextInputType keyboardType,   //设置输入类型，不同的输入类型键盘不一样
    this.textInputAction,   //用于控制键盘动作（一般位于右下角，默认是完成）
    this.textCapitalization = TextCapitalization.none,
    this.style,    //输入的文本样式
    this.textAlign = TextAlign.start,   //输入的文本位置
    this.textDirection,    //输入的文字排列方向，一般不会修改这个属性
    this.autofocus = false,   //是否自动获取焦点
    this.obscureText = false,   //是否隐藏输入的文字，一般用在密码输入框中
    this.autocorrect = true,   //是否自动校验
    this.maxLines = 1,   //最大行
    this.maxLength,   //能输入的最大字符个数
    this.maxLengthEnforced = true,  //配合maxLength一起使用，在达到最大长度时是否阻止输入
    this.onChanged,  //输入文本发生变化时的回调
    this.onEditingComplete,   //点击键盘完成按钮时触发的回调，该回调没有参数，(){}
    this.onSubmitted,  //同样是点击键盘完成按钮时触发的回调，该回调有参数，参数即为当前输入框中的值。(String){}
    this.inputFormatters,   //对输入文本的校验
    this.enabled,    //输入框是否可用
    this.cursorWidth = 2.0,  //光标的宽度
    this.cursorRadius,  //光标的圆角
    this.cursorColor,  //光标的颜色
    this.keyboardAppearance,
    this.scrollPadding = const EdgeInsets.all(20.0),
    this.dragStartBehavior = DragStartBehavior.down,
    this.enableInteractiveSelection,
    this.onTap,    //点击输入框时的回调(){}
    this.buildCounter,
  })

```

### 表单验证

```
https://www.jianshu.com/p/3fb613ffac22
```

### 光标控制

```dart
_editingController.text = suggestion;
final length = suggestion.length;
_editingController.selection = TextSelection(baseOffset:length , extentOffset:length);

全选
  _editingController.selection = TextSelection(baseOffset:0 , extentOffset: text.length);
```



### TextFormField

```dart
TextFormField({
    Key key,
    controller,//常用于赋值和取值操作
    String initialValue,
    FocusNode focusNode,//用于监听焦点状态
    InputDecoration decoration = const InputDecoration(), //输入框的装饰器，用来修改外观
    TextInputType keyboardType,//设置输入类型，不同的输入类型键盘不一样
    TextCapitalization textCapitalization = TextCapitalization.none,//开启键盘选择大写或小写
        enum TextCapitalization {
          words,//默认为每个单词的第一个字母使用大写键盘。
          sentences,//默认为每个句子的第一个字母使用大写键盘。
          characters,//每个字符默认使用大写键盘。
          none,// 默认为小写键盘。
        }
    TextInputAction textInputAction, //用于控制键盘动作（一般位于右下角，默认是完成）
    TextStyle style,//输入的文本样式
    StrutStyle strutStyle,
    TextDirection textDirection,//输入的文字排列方向，一般不会修改这个属性
    TextAlign textAlign = TextAlign.start,  //输入的文本位置
    TextAlignVertical textAlignVertical,
    bool autofocus = false,//是否自动获取焦点
    bool readOnly = false,//文本是否可以更改。当设置为true时，文本不能通过任何快捷键或键盘操作进行修改。文本仍然是可选择的。
    ToolbarOptions toolbarOptions,//默认工具栏选项，当用户右键单击或长按EditableText时将显示该菜单。它包括几个选项：剪切，复制，粘贴和全选。
    bool showCursor,//是否显示光标
    bool obscureText = false,//是否隐藏正在编辑的文本 （密码）
    bool autocorrect = true,//是否启用自动效验
    bool enableSuggestions = true,//是否在输入时给出建议
    bool autovalidate = false,
    bool maxLengthEnforced = true,//配合maxLength一起使用，在达到最大长度时是否阻止输入
    int maxLines = 1,//输入文本最大显示行数
    int minLines,//输入文本最小显示行数
    bool expands = false,
    int maxLength,//输入文本可输入最长字符长度
    ValueChanged<String> onChanged,//输入文本发生变化时的回调
    GestureTapCallback onTap,//单击输入文本框时回调
    VoidCallback onEditingComplete,//点击键盘完成按钮时触发的回调，该回调没有参数，(){}
    ValueChanged<String> onFieldSubmitted,//当用户指示他们已完成字段中文本的编辑时调用。
    FormFieldSetter<String> onSaved,//配合Form使用由_formKey.currentState.save();触发保存数据，赋值操作。
    FormFieldValidator<String> validator,//配合Form使用由_formKey.currentState.validate();触发，常用检查否错误，并返回提示用户，返回内容赋值给 errorText
    List<TextInputFormatter> inputFormatters,//输入文本规则限制
              [
             FilteringTextInputFormatter.allow(RegExp),
                  FilteringTextInputFormatter.deny(RegExp)
              BlacklistingTextInputFormatter(RegExp("[a-z]")),除了小写的a-z都可以输入
              LengthLimitingTextInputFormatter(5)
              ]//限制输入字符长度
    bool enabled = true,
    double cursorWidth = 2.0,//光标的宽度
    Radius cursorRadius,//光标的圆角
    Color cursorColor, //光标的颜色
    Brightness keyboardAppearance,//键盘外观
    EdgeInsets scrollPadding = const EdgeInsets.all(20.0),
    bool enableInteractiveSelection = true,//如果为真，则长按此文本字段将选择文本并显示剪切/复制/粘贴菜单，而轻击将移动文本插入符号。[…]
    InputCounterWidgetBuilder buildCounter,
  })
InputDecoration({
    this.icon,    //位于装饰器外部和输入框前面的图片
    this.labelText,  //用于描述输入框，例如这个输入框是用来输入用户名还是密码的，当输入框获取焦点时默认会浮动到上方，
    this.labelStyle,  // 控制labelText的样式,接收一个TextStyle类型的值
    this.helperText, //辅助文本，位于输入框下方，如果errorText不为空的话，则helperText不会显示
    this.helperStyle, //helperText的样式
    this.hintText,  //提示文本，位于输入框内部
    this.hintStyle, //hintText的样式
    this.hintMaxLines, //提示信息最大行数
    this.errorText,  //错误信息提示
    this.errorStyle, //errorText的样式
    this.errorMaxLines,   //errorText最大行数
    this.hasFloatingPlaceholder = true,  //labelText是否浮动，默认为true，修改为false则labelText在输入框获取焦点时不会浮动且不显示
    this.isDense,   //改变输入框是否为密集型，默认为false，修改为true时，图标及间距会变小
    this.contentPadding, //内间距
    this.prefixIcon,  //位于输入框内部起始位置的图标。
    this.prefix,   //预先填充的Widget,跟prefixText同时只能出现一个
    this.prefixText,  //预填充的文本，例如手机号前面预先加上区号等
    this.prefixStyle,  //prefixText的样式
    this.suffixIcon, //位于输入框后面的图片,例如一般输入框后面会有个眼睛，控制输入内容是否明文
    this.suffix,  //位于输入框尾部的控件，同样的不能和suffixText同时使用
    this.suffixText,//位于尾部的填充文字
    this.suffixStyle,  //suffixText的样式
    this.counter,//位于输入框右下方的小控件，不能和counterText同时使用
    this.counterText,//位于右下方显示的文本，常用于显示输入的字符数量
    this.counterStyle, //counterText的样式
    this.filled,  //如果为true，则输入使用fillColor指定的颜色填充
    this.fillColor,  //相当于输入框的背景颜色
    this.errorBorder,   //errorText不为空，输入框没有焦点时要显示的边框
    this.focusedBorder,  //输入框有焦点时的边框,如果errorText不为空的话，该属性无效
    this.focusedErrorBorder,  //errorText不为空时，输入框有焦点时的边框
    this.disabledBorder,  //输入框禁用时显示的边框，如果errorText不为空的话，该属性无效
    this.enabledBorder,  //输入框可用时显示的边框，如果errorText不为空的话，该属性无效
    this.border, //正常情况下的border
    this.enabled = true,  //输入框是否可用
    this.semanticCounterText,
    this.alignLabelWithHint,
  })

```

### checkbox

```
RadioListTile(
              value: 1,
              onChanged: (v) {
                setState(() {
                  this.sex = v;
                });
              },
              groupValue: this.sex,
            ),
```

```
  RadioListTile(
            groupValue: this.sex,
            onChanged: (value) {
              print(value);
              setState(() {
                this.sex = value;
              });
            },
            value: 1,
            title: Text('sss'),
          ),
```

### TextField

```
https://www.cnblogs.com/joe235/p/11711653.html
```

```dart
 const TextField({
    Key key,
    this.controller,//控制器
    this.focusNode,//焦点
    this.decoration = const InputDecoration(),//装饰
    TextInputType keyboardType,//键盘类型，即输入类型
    this.textInputAction,//键盘按钮
    this.textCapitalization = TextCapitalization.none,//大小写
    this.style,//样式
    this.strutStyle,
    this.textAlign = TextAlign.start,//对齐方式
    this.textDirection,
    this.autofocus = false,//自动聚焦
    this.obscureText = false,//是否隐藏文本，即显示密码类型
    this.autocorrect = true,//自动更正
    this.maxLines = 1,//最多行数，高度与行数同步
    this.minLines,//最小行数
    this.expands = false,
    this.maxLength,//最多输入数，有值后右下角就会有一个计数器
    this.maxLengthEnforced = true,
    this.onChanged,//输入改变回调
    this.onEditingComplete,//输入完成时，配合TextInputAction.done使用
    this.onSubmitted,//提交时,配合TextInputAction
    this.inputFormatters,//输入校验
    this.enabled,//是否可用
    this.cursorWidth = 2.0,//光标宽度
    this.cursorRadius,//光标圆角
    this.cursorColor,//光标颜色
    this.keyboardAppearance,
    this.scrollPadding = const EdgeInsets.all(20.0),
    this.dragStartBehavior = DragStartBehavior.start,
    this.enableInteractiveSelection,
    this.onTap,//点击事件
    this.buildCounter,
    this.scrollPhysics,
  }) 
```

```dart
 const InputDecoration({
    this.icon,//左侧外的图标
    this.labelText,//悬浮提示，可代替hintText
    this.labelStyle,//悬浮提示文字的样式
    this.helperText,//帮助文字
    this.helperStyle,
    this.hintText,//输入提示
    this.hintStyle,
    this.hintMaxLines,
    this.errorText,//错误提示
    this.errorStyle,
    this.errorMaxLines,
    this.hasFloatingPlaceholder = true,//是否显示悬浮提示文字
    this.isDense,
    this.contentPadding,//内填充
    this.prefixIcon,//左侧内的图标
    this.prefix,
    this.prefixText,//左侧内的文字
    this.prefixStyle,
    this.suffixIcon,//右侧内图标
    this.suffix,
    this.suffixText,
    this.suffixStyle,
    this.counter,//自定义计数器
    this.counterText,//计数文字
    this.counterStyle,//计数样式
    this.filled,//是否填充
    this.fillColor,//填充颜色
    this.errorBorder, //失去焦点底部线样式
    this.focusedBorder, //失去焦点 样式
    this.focusedErrorBorder,
    this.disabledBorder,
    this.enabledBorder,
    this.border,//边框
    this.enabled = true,
    this.semanticCounterText,
    this.alignLabelWithHint,
  })
```

```dart
enabledBorder: UnderlineInputBorder(
borderSide:BorderSide(color: Color(0xFFE9E9E9),),
),
```

keyboardType

```dart
TextField(
    keyboardType: TextInputType.number,
),
TextInputType:
    text
    multiline
    number
    phone
    datetime
    emailAddress
    url
```

textInputAction

​	键盘右下角的按钮

```
TextField(
    textInputAction: TextInputAction.done,
),
TextInputAction:
        none
        unspecified
        done
        go
        search
        send
        next
        previous
        continueAction
        join
        route
        emergencyCall
        newline
```

#### 大小写

```
TextField(
    textCapitalization: TextCapitalization.none,
),
TextCapitalization:
    words：单词首字母大写
    sentences：句子的首字母大写
    characters：所有字母大写
    none：默认无
```

#### 光标

```
TextField(
     cursorColor: Colors.orange,
     cursorWidth: 15,
     cursorRadius: Radius.circular(15),
),

```

复制粘贴设置成中文

```
-pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_localizations:
    sdk: flutter
```

```dart
return MaterialApp(
  localizationsDelegates: [
    GlobalMaterialLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ],
  supportedLocales: [
    const Locale('zh', 'CN'),
    const Locale('en', 'US'),
  ]
}

```



```dart
 Key key,
    this.controller,                    // 控制正在编辑文本
    this.focusNode,                     // 获取键盘焦点
    this.decoration = const InputDecoration(),              // 边框装饰
    TextInputType keyboardType,         // 键盘类型
    this.textInputAction,               // 键盘的操作按钮类型
    this.textCapitalization = TextCapitalization.none,      // 配置大小写键盘
    this.style,                         // 输入文本样式
    this.textAlign = TextAlign.start,   // 对齐方式
    this.textDirection,                 // 文本方向
    this.autofocus = false,             // 是否自动对焦
    this.obscureText = false,           // 是否隐藏内容，例如密码格式
    this.autocorrect = true,            // 是否自动校正
    this.maxLines = 1,                  // 最大行数
    this.maxLength,                     // 允许输入的最大长度
    this.maxLengthEnforced = true,      // 是否允许超过输入最大长度
    this.onChanged,                     // 文本内容变更时回调
    this.onEditingComplete,             // 提交内容时回调
    this.onSubmitted,                   // 用户提示完成时回调
    this.inputFormatters,               // 验证及格式
    this.enabled,                       // 是否不可点击
    this.cursorWidth = 2.0,             // 光标宽度
    this.cursorRadius,                  // 光标圆角弧度
    this.cursorColor,                   // 光标颜色
    this.keyboardAppearance,            // 键盘亮度
    this.scrollPadding = const EdgeInsets.all(20.0),        // 滚动到视图中时，填充边距
    this.enableInteractiveSelection,    // 长按是否展示【剪切/复制/粘贴菜单LengthLimitingTextInputFormatter】
    this.onTap,  
```



```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

///整理
//TextField 输入文本 decoration 配置边框样式以及提示文本分析篇
class TextFeildHomePage5 extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return TextFeildHomePageState();
  }
}

class TextFeildHomePageState extends State {

  ///用来控制  TextField 焦点的获取与关闭
  FocusNode focusNode = new FocusNode();
  ///文本输入框是否可编辑
  bool isEnable = true;

  @override
  void initState() {
    super.initState();

    ///添加获取焦点与失去焦点的兼听
    focusNode.addListener((){
      ///当前兼听的 TextFeild 是否获取了输入焦点
      bool hasFocus = focusNode.hasFocus;
      ///当前 focusNode 是否添加了兼听
      bool hasListeners = focusNode.hasListeners;

      print("focusNode 兼听 hasFocus:$hasFocus  hasListeners:$hasListeners");
    });

    /// WidgetsBinding 它能监听到第一帧绘制完成，第一帧绘制完成标志着已经Build完成
    WidgetsBinding.instance.addPostFrameCallback((_) {
      ///获取输入框焦点
      FocusScope.of(context).requestFocus(focusNode);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          FlatButton(child: Text("获取焦点"),onPressed: (){
            FocusScope.of(context).requestFocus(focusNode);
          },),
          FlatButton(child: Text("失去焦点"),onPressed: (){
            focusNode.unfocus();
          },),
          FlatButton(child: Text("编辑"),onPressed: (){
            setState(() {
              isEnable = true;
            });
          },),
          FlatButton(child: Text("不可编辑"),onPressed: (){
            setState(() {
              isEnable = false;
            });
          },),
        ],
      ),
      body: Container(
        ///SizedBox 用来限制一个固定 width height 的空间
        child: SizedBox(
          width: 400,
          height: 130,
          child: Container(
            color: Colors.white24,
            ///距离顶部
            margin: EdgeInsets.only(top: 30),
            padding: EdgeInsets.all(10),
            ///Alignment 用来对齐 Widget
            alignment: Alignment(0, 0),
            ///文本输入框
            child: TextField(

              ///是否可编辑
              enabled: isEnable,
              ///焦点获取
              focusNode: focusNode,
              ///用来配置 TextField 的样式风格
              decoration: InputDecoration(
                ///设置输入文本框的提示文字
                ///输入框获取焦点时 并且没有输入文字时
                hintText: "请输入用户名",
                ///设置输入文本框的提示文字的样式
                hintStyle: TextStyle(color: Colors.grey,textBaseline: TextBaseline.ideographic,),
                ///输入框内的提示 输入框没有获取焦点时显示
                labelText: "用户名",
                labelStyle: TextStyle(color: Colors.blue),
                ///显示在输入框下面的文字
                helperText: "这里是帮助提示语",
                helperStyle: TextStyle(color: Colors.green),

                ///显示在输入框下面的文字
                ///会覆盖了 helperText 内容
                errorText: "这里是错误文本提示",
                errorStyle: TextStyle(color: Colors.red),

                ///输入框获取焦点时才会显示出来 输入文本的前面
                prefixText: "prefix",
                prefixStyle: TextStyle(color: Colors.deepPurple),
                ///输入框获取焦点时才会显示出来 输入文本的后面
                suffixText: "suf ",
                suffixStyle: TextStyle(color: Colors.black),

                ///文本输入框右下角显示的文本
                ///文字计数器默认使用
                counterText: "count",
                counterStyle:TextStyle(color: Colors.deepPurple[800]),

                ///输入文字前的小图标
                prefixIcon: Icon(Icons.phone),
                ///输入文字后面的小图标
                suffixIcon: Icon(Icons.close),

                ///与 prefixText 不能同时设置
//                prefix: Text("A") ,
                /// 与 suffixText 不能同时设置
//                suffix:  Text("B") ,
                ///设置边框
                ///   InputBorder.none 无下划线
                ///   OutlineInputBorder 上下左右 都有边框
                ///   UnderlineInputBorder 只有下边框  默认使用的就是下边框
                border: OutlineInputBorder(
                  ///设置边框四个角的弧度
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  ///用来配置边框的样式
                  borderSide: BorderSide(
                    ///设置边框的颜色
                    color: Colors.red,
                    ///设置边框的粗细
                    width: 2.0,
                  ),
                ),
                ///设置输入框可编辑时的边框样式
                enabledBorder: OutlineInputBorder(
                  ///设置边框四个角的弧度
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  ///用来配置边框的样式
                  borderSide: BorderSide(
                    ///设置边框的颜色
                    color: Colors.blue,
                    ///设置边框的粗细
                    width: 2.0,
                  ),
                ),
                disabledBorder: OutlineInputBorder(
                  ///设置边框四个角的弧度
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  ///用来配置边框的样式
                  borderSide: BorderSide(
                    ///设置边框的颜色
                    color: Colors.red,
                    ///设置边框的粗细
                    width: 2.0,
                  ),
                ),
                ///用来配置输入框获取焦点时的颜色
                focusedBorder: OutlineInputBorder(
                  ///设置边框四个角的弧度
                  borderRadius: BorderRadius.all(Radius.circular(20)),
                  ///用来配置边框的样式
                  borderSide: BorderSide(
                    ///设置边框的颜色
                    color: Colors.green,
                    ///设置边框的粗细
                    width: 2.0,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

### 失去焦点

```dart
 GestureDetector(
       behavior: HitTestBehavior.translucent,
       onTap: () {
          FocusScope.of(context).requestFocus(FocusNode());
  },
 ）
```

### VerificationBox

```
验证码输入框
```

### 限制输入

```dart
class PrecisionLimitFormatter extends TextInputFormatter {
  int _scale;

  PrecisionLimitFormatter(this._scale);

  RegExp exp = new RegExp("[0-9.]");
  static const String POINTER = ".";
  static const String DOUBLE_ZERO = "00";

  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    if (newValue.text.startsWith(POINTER) && newValue.text.length == 1) {
      //第一个不能输入小数点
      return oldValue;
    }

    ///输入完全删除
    if (newValue.text.isEmpty) {
      return TextEditingValue();
    }

    ///只允许输入小数
    if (!exp.hasMatch(newValue.text)) {
      return oldValue;
    }

    ///包含小数点的情况
    if (newValue.text.contains(POINTER)) {
      ///包含多个小数
      if (newValue.text.indexOf(POINTER) != newValue.text.lastIndexOf(POINTER)) {
        return oldValue;
      }
      String input = newValue.text;
      int index = input.indexOf(POINTER);

      ///小数点后位数
      int lengthAfterPointer = input.substring(index, input.length).length - 1;

      ///小数位大于精度
      if (lengthAfterPointer > _scale) {
        return oldValue;
      }
    } else if (newValue.text.startsWith(POINTER) || newValue.text.startsWith(DOUBLE_ZERO)) {
      ///不包含小数点,不能以“00”开头
      return oldValue;
    }
    return newValue;
  }
}

```

### 自定义封装校验

```dart
import 'package:flutter/material.dart';

class FormWidget extends StatefulWidget {
  final Widget child;
  const FormWidget({Key? key, required this.child}) : super(key: key);

  static FormWidgetState? of(BuildContext context) {
    final _FormScope? scope =
        context.dependOnInheritedWidgetOfExactType<_FormScope>();
    return scope?._formState;
  }

  @override
  FormWidgetState createState() => FormWidgetState();
}

class FormWidgetState extends State<FormWidget> {
  int _generation = 0;
  final Set<FormItemState> _fields = <FormItemState>{};

  void _forceRebuild() {
    setState(() {
      ++_generation;
    });
  }

  void _register(FormItemState field) {
    _fields.add(field);
  }

  bool validate() {
    return _validate();
  }

  bool _validate() {
    bool hasError = false;
    for (final FormItemState item in _fields)
      hasError = !item.validate() || hasError;
    return !hasError;
  }

  @override
  Widget build(BuildContext context) {
    return _FormScope(
      child: widget.child,
      formState: this,
      generation: ++_generation,
    );
  }
}

class _FormScope extends InheritedWidget {
  const _FormScope({
    Key? key,
    required Widget child,
    required FormWidgetState formState,
    required int generation,
  })   : _formState = formState,
        _generation = generation,
        super(key: key, child: child);

  final FormWidgetState _formState;

  final int _generation;

  FormWidget get form => _formState.widget;

  @override
  bool updateShouldNotify(_FormScope old) => _generation != old._generation;
}

class FormItem<T> extends StatefulWidget {
  final FormFieldValidator<T>? validator;
  final Widget? child;
  final Function()? onTap;
  final T? initValue;
  const FormItem({
    Key? key,
    required this.validator,
    this.child,
    this.onTap,
    this.initValue,
  }) : super(key: key);

  @override
  FormItemState<T> createState() => FormItemState<T>();
}

class FormItemState<T> extends State<FormItem<T>> {
  String? _errorText;

  T? _value;

  String? get errorText => _errorText;

  bool get hasError => _errorText != null;

  bool validate() {
    setState(() {
      _validate();
    });
    return !hasError;
  }

  void _validate() {
    if (widget.validator != null) _errorText = widget.validator!(_value);
  }

  @override
  void initState() {
    super.initState();
    _value = widget.initValue;
  }

  @override
  Widget build(BuildContext context) {
    FormWidget.of(context)?._register(this);
    return GestureDetector(
      onTap: widget.onTap,
      child: Container(child: widget.child),
    );
  }
}

```



## 数据刷新

## setState

```
setState 刷新 build
```

## ValueListenableBuilder

```dart
声明类似 vue3 ref（）；

class _MyHomePageState extends State<MyHomePage> {
  // 定义 ValueNotifier 对象 _counter
final ValueNotifier<int> _counter = ValueNotifier<int>(0);

  @override
  void dispose() {
    _counter.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar( title: Text(widget.title), ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text( 'You have pushed the button this many times:'),
            ValueListenableBuilder<int>(
              valueListenable: _counter, // 监听的值
              builder: (BuildContext context, int value, Widget child) {
   				return Text();
			  }，
              
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: Icon(Icons.add),
      ),
    );
  }
}

```

源码

```dart
class ValueListenableBuilder<T> extends StatefulWidget {
  const ValueListenableBuilder({
    Key key,
    @required this.valueListenable,
    @required this.builder,
    this.child,
  }) : assert(valueListenable != null),
       assert(builder != null),
       super(key: key);

  final ValueListenable<T> valueListenable;
  final ValueWidgetBuilder<T> builder;
  final Widget child;

  @override
  State<StatefulWidget> createState() => _ValueListenableBuilderState<T>();
}

typedef ValueWidgetBuilder<T> = Widget Function(BuildContext context, T value, Widget child);

class _ValueListenableBuilderState<T> extends State<ValueListenableBuilder<T>> {
  T value;

  @override
  void initState() {
    super.initState();
    value = widget.valueListenable.value;
    widget.valueListenable.addListener(_valueChanged);
  }

  @override
  void didUpdateWidget(ValueListenableBuilder<T> oldWidget) {
    if (oldWidget.valueListenable != widget.valueListenable) {
      oldWidget.valueListenable.removeListener(_valueChanged);
      value = widget.valueListenable.value;
      widget.valueListenable.addListener(_valueChanged);
    }
    super.didUpdateWidget(oldWidget);
  }

  @override
  void dispose() {
    widget.valueListenable.removeListener(_valueChanged);
    super.dispose();
  }

  void _valueChanged() {
    setState(() { value = widget.valueListenable.value; });
  }

  @override
  Widget build(BuildContext context) {
    return widget.builder(context, value, widget.child);
  }
}

```



## 点击事件

```dart
InkWell,GestureDetector,RaisedButton。
```

## GestureDetector

```dart
GestureDetector

behavior:
	HitTestBehavior.opaque  // 不透明 点击范围的空白部分可响应
    HitTestBehavior.deferToChild // 默认 child处理事件
	HitTestBehavior.translucent // 自己和child都可以响应事件
```



## redux

```dart
 redux: ^4.0.0+3

```

main.dart

```dart
import 'package:redux/redux.dart';

class MyApp extends StatelessWidget {
	final store = new Store<AppState>(
    appReducer,
  	);
	  MyApp();
	  ...
}
```

store/init.dart

```dart
import 'package:flutter/material.dart';
import 'package:redux/redux.dart';

class AppState {
  String token;
  ThemeData themeData;
  AppState({this.token, this.themeData});
}

AppState appReducer(state, action) {
  return AppState(
    token: UpdateToken(state.token, action),
    themeData: UpdateTheme(state.themeData, action),
  );
}

final UpdateToken =
    combineReducers<String>([TypedReducer<String, TokenAction>(_refToken)]);
final UpdateTheme = combineReducers<ThemeData>(
    [TypedReducer<ThemeData, ThenmeAction>(_refTheme)]);

// 更新
String _refToken(String token, action) {
  token = action.token;
  return token;
}

ThemeData _refTheme(ThemeData themeData, action) {
  themeData = action.themeData;
  return themeData;
}

// set new state
class TokenAction {
  final token;
  TokenAction(this.token);
}

class ThenmeAction {
  final themeData;
  ThenmeAction(this.themeData);
}

```

更新视图方法

```
flutter_redux: ^0.7.0
```

```dart
class MyApp extends StatelessWidget {
	final store = new Store<AppState>(
    	appReducer,
       	// 初始化
        initialState:AppState(
        	themeData:ThemeData(),
        ),
  	);
	  MyApp();
	  ...
	  
	@override
    Widget build(BuildContext context) {
      return Storeprovider(
        store:store,
        child:StoreBuilder<Appstate>(builder:(context,store){
            return MaterialApp(
            	theme:store.state.themeDate,
            );
        }),
      );
    }
}




```



## routes

```
https://www.it610.com/article/1228784957724397568.htm

https://blog.51cto.com/jdsjlzx/5512155
```

MaterialPageRoute

`MaterialPageRoute`继承自`PageRoute`类，`PageRoute`类是一个抽象类，表示占有整个屏幕空间的一个模态路由页面，它还定义了路由构建及切换时过渡动画的相关接口及属性。`MaterialPageRoute` 是Material组件库提供的组件，它可以针对不同平台，实现与平台页面切换动画风格一致的路由切换动画：

```
  MaterialPageRoute({
    WidgetBuilder builder,
    RouteSettings settings,
    bool maintainState = true,
    bool fullscreenDialog = false, //返回按键变X
  });
 
```

- `builder` 是一个WidgetBuilder类型的回调函数，它的作用是构建路由页面的具体内容，返回值是一个widget。我们通常要实现此回调，返回新路由的实例。
- `settings` 包含路由的配置信息，如路由名称、是否初始路由（首页）。
- `maintainState`：默认情况下，当入栈一个新路由时，原来的路由仍然会被保存在内存中，如果想在路由没用的时候释放其所占用的所有资源，可以设置`maintainState`为false。
- `fullscreenDialog`表示新的路由页面是否是一个全屏的模态对话框，在iOS中，如果`fullscreenDialog`为`true`，新页面将会从屏幕底部滑入（而不是水平方向）。

普通路由:

```dart
import '../home/HomeTest.dart';

//进入
navigattor.of(context).push(MaterialPageRoute(
	builder:(context){
		return HomeTest()
	}
))
//进入    
 Navigator.push(
          context,
          MaterialPageRoute(builder: (context) {
            return HomeTest();
          }),
        );
//返回
 Navigator.of(context).pop();

Navigator.of().pushNamed('/home') //命名路由
```

### 普通路由传值:

```dart
 Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return HomeTest(title:'wo');
            },
          ),
        ); // 传值

class HomeTest extends StatefulWidget {
  HomeTest({Key key, this.title}) : super(key: key);
  final String title; //接收
  @override
  _HomeTestState createState() => _HomeTestState();
}

class _HomeTestState extends State<HomeTest> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text(widget.title), // 赋值
      ),
      body: Text('data'),
    );
  }
}
```

### 命名路由:

```dart
申明:
main.dart
import 'package:flutter/material.dart';
import './routers/router.dart';
import './home/HomeTest.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes:{
        '/home':(context)=>HomeTest(), //申明 全局引用
      },
      initialRoute: "/",
      onGenerateRoute: onGenerateRoute,
    );
  }
};

页面调用:
  Navigator.pushNamed(context, '/home',);
```

### 动态图命名路由传值:

```dart
 Navigator.pushNamed(
 context, 
 '/HomeTest',
 arguments: {'title':'4444'}
 ); 传参数;
 
 // 接收
 @override
  Widget build(BuildContext context) {
    Map<String, String> args =
        ModalRoute.of(context).settings.arguments;
  } 
 
```

```dart
import 'package:flutter/material.dart';
import '../Tabs/Tabs.dart'; //配置路由
import '../home/HomeTest.dart';
动态路由配置:
final routes = {
  '/': (context) => Tabs(),
  '/HomeTest': (context, {arguments}) => HomeTest(arguments: arguments),
};


// ignore: top_level_function_literal_block
var onGenerateRoute = (RouteSettings settings) {
  // 统一处理
  final String name = settings.name;
  final Function pageContentBuilder = routes[name];

  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      print(name);
      final Route route = MaterialPageRoute(
          builder: (context) =>
              pageContentBuilder(context, arguments: settings.arguments));
      return route;
    } else {
      final Route route =
          MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
};

```

```dart
import 'package:flutter/material.dart';

class HomeTest extends StatefulWidget {
  final arguments; // 接收
  HomeTest({Key key, this.arguments}) : super(key: key);

  @override
  _HomeTestState createState() => _HomeTestState();
}

class _HomeTestState extends State<HomeTest> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.arguments['title']), //使用
      ),
      body: FloatingActionButton(
        child: Text('2'),
        onPressed: () {
          Navigator.of(context).pop();
        },
      ),
    );
  }
}

```

页面返回返回参数:

```dart
 Navigator.of(context).pop('返回'); // 传参

写法一:
Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) {
              return HomeTest(arguments:{'title':'mytitle'});
            },
            // fullscreenDialog: true,
          ),
        ).then((value){
          print('222222');
          print(value);
        });
写法二:
Future future = Navigator.pushNamed(
          context,
          '/HomeTest',
          arguments: {'title': '上个页面的title'},
        );
        future.then((value) {
          print('value--------');
          print(value);
        });
写法三:    
 Navigator.of(context).pushNamed(
          '/HomeTest',
          arguments: {'title': '上个页面的title'},
        ).then((value) {
          print(value);
          print('999');
        });

注:点击顶部返回,手机手势返回;不能捕获参数;

```

钩子

```
onGenerateRoute(settings)

onUnkonwnRoute  //不存在路由
```

例

```
routes:{
	'/home':(context)=>About()
},
initialRoute:'/', //默认路径
onGenerateRoute:(settings){
	if(settings.name == '/home'){
		return MaterialPageRoute(
			builder:(context)=>HOme(settings.arguments)
		);
	}
},
onUnkonwnRoute(){
	return MaterialPageRoute(
			builder:(context)=>Eer(settings.arguments)
		);
}

```

```dart
import 'package:flutter/material.dart';
import '../Tabs/Tabs.dart'; //配置路由

final routes = {
  '/': (context) => Tabs(),
}; //固定写法

var onGenerateRoute = (RouteSettings settings) {
  // 统一处理
  final String name = settings.name;
  final Function pageContentBuilder = routes[name];
  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      final Route route = MaterialPageRoute(
          builder: (context) =>
              pageContentBuilder(context, arguments: settings.arguments));
      return route;
    } else {
      final Route route =
          MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
};
```

### pushNamedAndRemoveUntil

```dart
//前进
  Navigator.of(context)
            .pushNamedAndRemoveUntil(
            “跳转路径”,
            ModalRoute.withName('/demo'),//清除旧栈需要保留的栈 不清除就不写这句
            arguments:{"data":“233”}//传值
        );

Navigator.of(context)
          .pushNamedAndRemoveUntil(
    		'/',  // new page
          	ModalRoute.withName('/Welcome') //当前页面 关闭页面
); 
 

Navigator.pushNamedAndRemoveUntil(
      context,
     "跳转路径", (route) => false,//true保留跳转的当前栈   false 不保留
    ); 
```

### pushReplacementNamed

```dart
替换当前页面
Navigator.of(context).pushReplacementNamed('/screen4');
Navigator.pushReplacementNamed(context, '/settings/brightness');
```



## fractionsizedbox

```
百分
```

## MediaQuery

```dart
 final double height = MediaQuery.of(context).size.height
```



## bottomNavigationBar

```dart
import 'package:flutter/material.dart';
import './Category.dart';
import './Home.dart';
import './My.dart';
import './User.dart';

class Tabs extends StatefulWidget {
  Tabs({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;

  List _TabsPages = [Home(), Category(), My(), User()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: _TabsPages[this._currentIndex],
      bottomNavigationBar: BottomNavigationBar(
          currentIndex: this._currentIndex,
          onTap: (index) {
            setState(() {
              this._currentIndex = index;
            });
          },
          type: BottomNavigationBarType.fixed, // 多个底部导航栏需要配置
          items: [
            BottomNavigationBarItem(
              title: Text("首页"),
              icon: Icon(Icons.home),
            ),
            BottomNavigationBarItem(
              title: Text("分类"),
              icon: Icon(Icons.category),
            ),
            BottomNavigationBarItem(
              title: Text("购物车"),
              icon: Icon(Icons.shopping_cart),
            ),
            BottomNavigationBarItem(
              title: Text("我的"),
              icon: Icon(Icons.people),
            ),
          ]),
    );
  }
}

```

```dart
main.dart

import 'package:flutter/material.dart';
import "./Tabs/Tabs.dart";
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.red,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Tabs(title: 'walle JD'),
    );
  }
}


```


## 点击

```
GestureDetector,InkResponse,InkWell
```



## 国际化

```
dependencies:
  flutter:
    sdk: flutter
  flutter_localizations: // ++
    sdk: flutter 		// ++
```

```
MaterialApp(
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
        ],
         supportedLocales: [
          const Locale('zh', 'CN'),
        ],
)

# ScrollView

## NestedScrollView

​```dart
class _MerchantState extends State<Merchant>
    with SingleTickerProviderStateMixin {
    
}


  @override
  void initState() {
    super.initState();
    _scrollViewController = ScrollController(initialScrollOffset: 0.0);
    _scrollViewController.addListener(() {
      if (_scrollViewController.position.maxScrollExtent ==
          _scrollViewController.position.pixels) {
        print("------------加载更多-------------");
      }
    });
  }

@override
  Widget build(BuildContext context) {
    return NestedScrollView(
      controller: _scrollViewController,
      headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
        return <Widget>[
          SliverAppBar(
            pinned: true,
            floating: true,
            expandedHeight: 280.w,
            flexibleSpace: FlexibleSpaceBar(
              collapseMode: CollapseMode.pin,
              background: Container(
                //头部整个背景颜色
                height: double.infinity,
                color: _bgColor,
                child: _topHd(),
              ),
            ),
            bottom: PreferredSize(
              preferredSize: Size.fromHeight(44.w),
              child: _Tabs(),
            ),
          )
        ];
      },
      body: ListView.builder(
        padding: EdgeInsets.all(10.w),
        itemCount: _newsList.length,
        itemBuilder: (context, index) {
          return _bodyFutureBuilder(index);
        },
      ),
    );
  }

```

## 框架

```
Provider
https://github.com/rrousselGit/provider/blob/master/resources/translations/zh-CN/README.md

bloc
```



## builder

### FutureBuilder

```dart
 FutureBuilder(
      future: _httpIndex(),
      initialData: Text('加载中...'),
      builder: (
          BuildContext context, AsyncSnapshot data) {
          ConnectionState connectionState = data.connectionState;
          if(connectionState.index == 3){
              return Text('builder${data.data.name}');
          }
          if(data.hasError){
              return Text('err');
          }
          return Text('加载中...');
                 
})
     
  // 注意类型
  Future<dynamic> _httpIndex() async {
    var res = await HttpMerchant.index();
    if (res == null) return;
    print(res);
    MerchantModel data = MerchantModel.fromJson(jsonDecode(res.toString()));
    if (data.returnCode == 0) {
      print(data.returnData);
      return data.returnData;
    }
  }
```

- AsyncSnapshot

  ```dart
  AsyncSnapshot.connectionState
  	- none  // 0 future 请求之前 为true 则  显示initialData
  	- waiting  // 1
      - active // 2
  	- done // 3 HTTP请求获取到 不为null 则返回future; 
  		   // 为null 则AsyncSnapshot.hasError = true
   connectionState.index //0 1 2 3
  ```

  

- 地方

### ListView.builder

```dart
ListView.builder(
     //设置physics属性总是可滚动
     physics: AlwaysScrollableScrollPhysics(),
    itemCount: _newsList.length,
    itemBuilder: (context, index) {
       return _bodyFutureBuilder(index);
	},
```

## 水波纹

1. **定义 NoSplashFactory**

```dart
import 'package:flutter/material.dart';

class NoSplashFactory extends InteractiveInkFeatureFactory {
  const NoSplashFactory();

  @override
  InteractiveInkFeature create({
    required MaterialInkController controller,
    required RenderBox referenceBox,
    required Offset position,
    required Color color,
    required TextDirection textDirection,
    bool containedInkWell = false,
    RectCallback? rectCallback,
    BorderRadius? borderRadius,
    ShapeBorder? customBorder,
    double? radius,
    VoidCallback? onRemoved,
  }) {
    return NoSplash(
      controller: controller,
      referenceBox: referenceBox,
      color: color,
      onRemoved: onRemoved,
    );
  }
}

/// 不显示水波纹效果
class NoSplash extends InteractiveInkFeature {
  NoSplash({
    required MaterialInkController controller,
    required RenderBox referenceBox,
    required Color color,
    VoidCallback? onRemoved,
  }) : super(
          controller: controller,
          referenceBox: referenceBox,
          color: color,
          onRemoved: onRemoved,
        ) {
    controller.addInkFeature(this);
  }

  @override
  void paintFeature(Canvas canvas, Matrix4 transform) {}
}
```

2.在构建 ThemeData`时使用

```dart
class MyApp extends State<MyAppState> {
  return MaterialApp(
    theme: Theme.of(context).copyWith(
      highlightColor: Colors.transparent,
      splashFactory: const NoSplashFactory(),
    ),
    ///..........///
  );
}
如果需要局部启用，可以应用InkSplash.splashFactory到splashFactory上。
```

### 去除滚动水波纹

```dart
class NoGlowScrollBehavior extends ScrollBehavior {
  const NoGlowScrollBehavior();

  @override
  Widget buildViewportChrome(
    BuildContext context,
    Widget child,
    AxisDirection axisDirection,
  ) =>
      child;
}


MaterialApp(
  builder: (_, Widget? w) => ScrollConfiguration(
    behavior: const NoGlowScrollBehavior(),
    child: w!,
  ),
);
```



## Dio

```dart
{
  /// 响应数据，可能已经被转换了类型, 详情请参考Options中的[ResponseType].
  T data;
  /// 响应头
  Headers headers;
  /// 本次请求信息
  Options request;
  /// Http status code.
  int statusCode;
  /// 是否重定向(Flutter Web不可用)
  bool isRedirect;
  /// 重定向信息(Flutter Web不可用)
  List<RedirectInfo> redirects ;
  /// 真正请求的url(重定向最终的uri)
  Uri realUri;
  /// 响应对象的自定义字段（可以在拦截器中设置它），调用方可以在`then`中获取.
  Map<String, dynamic> extra;
}
```

```
通过FormData上传多个文件:

FormData formData = new FormData.from({
   "name": "wendux",
   "age": 25,
   "file1": new UploadFileInfo(new File("./upload.txt"), "upload1.txt")
   "file2": new UploadFileInfo(new File("./upload.txt"), "upload2.txt")
});
response = await dio.post("/info", data: formData)

```



## 网络配置

```
1. android\app\src\main\res 目录下 新建 xml文件夹；
2.xml》新建network_security_config.xml文件
3.android\app\src\main\AndroidManifest.xml
```

```xml
network_security_config.xml

<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
      <trust-anchors>
        <certificates src="system" />
      </trust-anchors>
    </base-config>
</network-security-config>

```

```xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.example.zjmerchant">
     <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
<application
        android:label="zjmerchant"
        android:icon="@mipmap/ic_launcher"
       // + android:networkSecurityConfig="@xml/network_security_config"
        >
    ...
</manifest>
```

ios  info.plist 加入如下

```
 <key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

## 上传图片

```dart
avatarUpload(file) async {
    FormData formData = FormData.fromMap({
      "file": await MultipartFile.fromFile(file.path, filename: "xxx23.png")
    });
    var result = await requestApi.filesupload1(formData);
    if (result['code'] == 200) {
      setState(() {
        headimg = 'file' + result['data']['path'];
      });
      Fluttertoast.showToast(
        msg: '上传成功',
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.CENTER,
      );
    }
```



## 屏幕适配

```
https://github.com/OpenFlutter/flutter_screenutil/blob/master/README_CN.md
```

## 序列化工具

```
https://app.quicktype.io/
https://flutter.dev/docs/development/data-and-backend/json
```

## 平台判断

```dart
import 'package:flutter/foundation.dart';

defaultTargetPlatform == TargetPlatform.iOS  //ios
defaultTargetPlatform == TargetPlatform.android
  //ios
```

## 获取元素位置

```dart
   var object = globalKey?.currentContext?.findRenderObject();
    var translation = object?.getTransformTo(null)?.getTranslation();
    
     translation.y 
     
     
  RenderObject renderObject = element.currentContext!.findRenderObject() as RenderObject;
          tabItemWidgetList.add(renderObject.paintBounds.size.width);
```



## flutter默认字体

```dart
https://material.io/design/typography/the-type-system.html#type-scale

默认在 iOS 上：
中文字体：PingFang SC
英文字体：.SF UI Text 、.SF UI Display


默认在 Android 上：
中文字体：Source Han Sans / Noto
英文字体：Roboto
```



## 获取定位

1. 申请高德key；

2. 创建应用；

3. 获取sha1，获取包名；

4. ```
   keytool -list -v -keystore F:/androiddebugkey.jks
   ```
```

   

5. 声明权限；

```
参考：https://blog.csdn.net/qq_42772570/article/details/101671009
https://blog.csdn.net/Gemini_Kanon/article/details/104628500?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduend~default-4-104628500.nonecase&utm_term=flutter%20%E8%8E%B7%E5%8F%96%E4%BD%8D%E7%BD%AE%E4%BF%A1%E6%81%AF&spm=1000.2123.3001.4430
https://lbs.amap.com/faq/android/map-sdk/create-project/43112
```

参考：https://blog.csdn.net/qq_44749053/article/details/101102785

```
依赖：
  amap_location: ^0.2.0
  permission_handler: ^3.2.0 // 权限判断

引入：
import 'package:amap_location/amap_location.dart';
import 'package:permission_handler/permission_handler.dart'; //权限
```

​```dart
检查权限：
 //检测权限状态
  void checkPersmission() async {
    // 申请权限
    Map<PermissionGroup, PermissionStatus> permissions =
        await PermissionHandler()
            .requestPermissions([PermissionGroup.location]);
    // 申请结果
    PermissionStatus permission = await PermissionHandler()
        .checkPermissionStatus(PermissionGroup.location);
    if (permission == PermissionStatus.granted) {
      _getLocation();
    } else {
      print('定位权限申请被拒绝');
      bool isOpened = await PermissionHandler().openAppSettings(); //打开应用设置
    }
  }
```

```dart
监听：
void _getLocation() async {
    //先启动一下
    await AMapLocationClient.startup(new AMapLocationOption(
        desiredAccuracy: CLLocationAccuracy.kCLLocationAccuracyHundredMeters));

    //直接获取定位
    var result = await AMapLocationClient.getLocation(true);
    print('result--$result');
    print("""
    经度：${result.longitude}
    纬度：${result.latitude}
    """);
    var lat = result.latitude;
    var lng = result.longitude;
    if (lat.toString().isNotEmpty && lng.toString().isNotEmpty) {
    } else {
      print('获取位置失败，请检测GPS是否开启！');
    }
    // 关闭
    // AMapLocationClient.stopLocation();
    //停止定位

    //监听定位
    // AMapLocationClient.onLocationUpate.listen((AMapLocation loc) {
    //   if (!mounted) return;
    //   setState(() {
    //     print("""
    // 经度：${result.longitude}
    // 纬度：${result.latitude}
    // """);
    //   });
    // });
    // 开始监听
    // AMapLocationClient.startLocation();
  }
```

android下的 build.gradle

```dart
defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "com.example.myjd"
        minSdkVersion 16
        targetSdkVersion 28
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
        +manifestPlaceholders = [
                AMAP_KEY : "d7aba329530bff4dce38b06aed63db8d", /// 高德地图key
        ]
    }


dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
    +implementation 'com.amap.api:location:latest.integration' // 高德地图依赖
    +implementation 'androidx.appcompat:appcompat:1.0.0'
}
```

android下的>src>AndroidManifest.xml

```dart
 <application>
 ...
     +<meta-data android:name="com.amap.api.v2.apikey" android:value="d7aba329530bff4dce38b06aed--高德的key" />
	+<service android:name="com.amap.api.location.APSService"></service>
 </application>
```

android下的>src>main>profile>AndroidManifest.xml

```dart
 <!--用于访问GPS定位-->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"></uses-permission>
    <!--用于获取运营商信息，用于支持提供运营商信息相关的接口-->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses-permission>
    <!--用于访问wifi网络信息，wifi信息会用于进行网络定位-->
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"></uses-permission>
```



## 问题

'getAppBarWidget' can't be assigned to the parameter type 'PreferredSizeWidget'.

```dart
import 'package:flutter/material.dart';

class HomeAppBar extends StatelessWidget implements PreferredSizeWidget { //加入 接口PreferredSizeWidget
  @override
  Widget build(BuildContext context) {
    return PreferredSize(
      child: AppBar(
        title: Image.asset('images/jd.png'),
        backgroundColor: Colors.red,
        actions: <Widget>[
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Icon(Icons.crop_free),
              Text('扫一扫', style: TextStyle(fontSize: 6.0))
            ],
          ),
          Padding(padding: EdgeInsetsDirectional.fromSTEB(0, 0, 10, 0)),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Icon(Icons.sms),
              Text('消息', style: TextStyle(fontSize: 6.0))
            ],
          ),
          Padding(padding: EdgeInsetsDirectional.fromSTEB(0, 0, 20, 0))
        ],
      ),
      preferredSize: Size.fromHeight(44),
    );

    
  }
  // final String name;
  // HomeAppBar({Key key, @required this.name}) :super(key: key);
  @override
  // TODO: implement preferredSize
    Size get preferredSize => getSize();
    
      getSize() {
         return new Size(100.0, 44.0);
      }
}

```

## 去除顶部半透明

![360截图20200427015824935.png](/image/flutter/4158227332-5ea654ce483c9_articlex.png)

```kotlin
package com.example.helloflutter

import io.flutter.embedding.android.FlutterActivity
//---增加部分
import android.os.Build;
import android.os.Bundle;
//----end
class MainActivity: FlutterActivity() {
   //-----增加部分
    //设置状态栏沉浸式透明（修改flutter状态栏黑色半透明为全透明）
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState);
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        window.statusBarColor = 0
    }
}
//---- end
}
```

## flutter_swiper 裁剪border radius

```dart
外层加入:
PhysicalModel(
            color: Colors.transparent,
            borderRadius: BorderRadius.circular(12),
            clipBehavior: Clip.antiAlias,
)
```

## BottomNavigation切换保持

```dart
class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  List _TabsPages = [Home(), Category(), My(), User()];
  var _pageController = PageController(); // 一

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("flutter ZJ"),
      ),
      body: PageView.builder(  // 二
          physics: NeverScrollableScroll(),
          //禁止页面左右滑动切换
          controller: _pageController,
          onPageChanged: (int index) {
            if (index != _currentIndex) {
              setState(() {
                _currentIndex = index;
              });
            }
          },
          //回调函数
          itemCount: _TabsPages.length,
          itemBuilder: (context, index) => _TabsPages[index]),// 三

      bottomNavigationBar: BottomNavigationBar(
          currentIndex: this._currentIndex,
          onTap: (index) {
            setState(() {
              _pageController.jumpToPage(index);
            });
          },
          type: BottomNavigationBarType.fixed,
          items: [
            BottomNavigationBarItem(
              title: Text("首页"),
              icon: Icon(Icons.home),
            ),
           	//....
          ]),
    );
  }
}

```

```dart
子页面
class _HomeState extends State<Home> 
with AutomaticKeepAliveClientMixin { // AutomaticKeepAliveClientMixin

 @override
  bool get wantKeepAlive => true; // 
}
```

```
https://blog.csdn.net/qq_32687703/article/details/95645331?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v28-6-95645331.nonecase&utm_term=flutter%20%E5%BD%93%E5%89%8D%E9%A1%B5%E9%9D%A2%E6%98%AF%E5%90%A6%E5%8F%AF%E8%A7%81&spm=1000.2123.3001.4430
```

```
https://blog.csdn.net/c6e5uli1n/article/details/104666263
```

## 获取文本是否换行

```dart
bool _isExpansion(String text) {
    TextPainter _textPainter = TextPainter(
        maxLines: widget.maxLines ?? 2,
        ellipsis: '22222',
        text: TextSpan(
          text: text,
          style: widget.textStyle,
        ),
        textDirection: TextDirection.ltr)
      ..layout(maxWidth: widget.maxWidth ?? 1.sw - 40.r, minWidth: 50);
		
  // 判断
    if (_textPainter.didExceedMaxLines) {
      //判断 文本是否需要截断
      return true;
    } else {
      return false;
    }
  }
```

## 获取元素宽度

```dart
WidgetsBinding.instance.addPostFrameCallback(_setTitleWidth);

_setTitleWidth(_) {
    final RenderBox renderContainer =
        _titleWidthKey.currentContext.findRenderObject();
    this.setState(() {
      titleWidth = renderContainer.size.width;
    });
  }
```

## 重启App

```
RestartWidget.restartApp(context);
UniqueKey();
```

## 渐变appbar

```
https://www.jianshu.com/p/b0b1c6308674
```

## flutterDriver 自动化测试



## listview 优化

```
https://zoyi14.smartapps.cn/pages/note/index?slug=4528bec31231&origin=share&hostname=baiduboxapp&_swebfr=1
```

## 自定义appbar

```dart
class CustomAppBar extends PreferredSize {
  @override
  final Widget child;
  final double height;

  CustomAppBar({
    required this.height,
    required this.child,
  }) : super(child: child, preferredSize: Size.fromHeight(height));

  @override
  Widget build(BuildContext context) => child;
}
```

## 触摸收起键盘

```dart
main.dart

builder:(_,child)=>GestureDetector(
      // 触摸收起键盘
        behavior: HitTestBehavior.translucent,
        onTap: () => FocusScope.of(context).requestFocus(FocusNode()
        child:child,
      ),

```

## 保存图片

```
保存线上图片：
  // var response = await Dio().get(url, options: Options(responseType: ResponseType.bytes));
    // final result = await ImageGallerySaver.saveImage(Uint8List.fromList(response.data));
 
 
   本地：
  import 'package:flutter/services.dart' show rootBundle;
ByteData _bytes = await rootBundle.load('assets/images/login/ic_launcher.png');
    final result = await ImageGallerySaver.saveImage(_bytes.buffer.asUint8List());
```

权限申请

```dart
import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:permission_handler/permission_handler.dart';

/// 创建人： Created by zhaolong
/// 创建时间：Created by  on 2020/12/9.
///
/// 可关注公众号：我的大前端生涯   获取最新技术分享
/// 可关注网易云课堂：https://study.163.com/instructor/1021406098.htm
/// 可关注博客：https://blog.csdn.net/zl18603543572
///
/// 代码清单
///权限请求模版
class PermissionRequestWidget extends StatefulWidget {
  final Permission permission;
  final List<String> permissionList;
  final bool isCloseApp;
  final String leftButtonText;

  PermissionRequestWidget(
      {required this.permission,
      required this.permissionList,
      this.leftButtonText = "再考虑一下",
      this.isCloseApp = false});

  @override
  _PermissionRequestWidgetState createState() =>
      _PermissionRequestWidgetState();
}

class _PermissionRequestWidgetState extends State<PermissionRequestWidget>
    with WidgetsBindingObserver {
  //页面的初始化函数
  @override
  void initState() {
    super.initState();
    checkPermisson();
    //注册观察者
    if (WidgetsBinding.instance != null) {
      WidgetsBinding.instance!.addObserver(this);
    }
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    if (state == AppLifecycleState.resumed && _isGoSetting) {
      checkPermisson();
    }
  }

  ///[PermissionStatus.denied] 用户拒绝访问所请求的特性
  ///[PermissionStatus.granted] 用户被授予对所请求特性的访问权。
  ///[PermissionStatus.restricted] iOS 平台 用户拒绝这个权限
  ///[PermissionStatus.limited] 用户已授权此应用程序进行有限访问。
  ///[PermissionStatus.permanentlyDenied] 被永久拒绝
  void checkPermisson({PermissionStatus? status}) async {
    //权限
    Permission permission = widget.permission;

    if (status == null) {
      //权限状态
      status = await permission.status;
    }

    if (!status.isLimited) {
      //第一次申请
      showPermissonAlert(widget.permissionList[0], "同意", permission);
    } else if (status.isDenied) {
      if (Platform.isIOS) {
        showPermissonAlert(widget.permissionList[2], "去设置中心", permission,
            isSetting: true);
        return;
      }
      //用户第一次申请拒绝
      showPermissonAlert(widget.permissionList[1], "重试", permission);
    } else if (status.isPermanentlyDenied) {
      //第二次申请 用户拒绝
      showPermissonAlert(widget.permissionList[2], "去设置中心", permission,
          isSetting: true);
    } else {
      //通过
      Navigator.of(context).pop(true);
    }
  }

  //是否去设置中心
  bool _isGoSetting = false;

  void showPermissonAlert(
      String message, String rightString, Permission permission,
      {bool isSetting = false}) {
    showCupertinoDialog(
        builder: (BuildContext context) {
          return CupertinoAlertDialog(
            title: Text("温馨提示"),
            content: Container(
              padding: EdgeInsets.all(12),
              child: Text(message),
            ),
            actions: [
              //左边的按钮
              CupertinoDialogAction(
                child: Text("${widget.leftButtonText}"),
                onPressed: () {
                  if (widget.isCloseApp) {
                    closeApp();
                  } else {
                    Navigator.of(context).pop(false);
                  }
                },
              ),
              //右边的按钮
              CupertinoDialogAction(
                child: Text("$rightString"),
                onPressed: () {
                  //关闭弹框
                  Navigator.of(context).pop();
                  if (isSetting) {
                    _isGoSetting = true;
                    //去设置中心
                    openAppSettings();
                  } else {
                    //申请权限
                    requestPermiss(permission);
                  }
                },
              )
            ],
          );
        },
        context: context);
  }

  void requestPermiss(Permission permission) async {
    //发起权限申请
    PermissionStatus status = await permission.request();
    //校验
    checkPermisson();
  }

  /// TODO 暂未使用
  void requestPermissionList(List<Permission> list) async {
    //多个权限申请
    Map<Permission, PermissionStatus> statuses = await [
      Permission.location,
      Permission.storage,
    ].request();
  }

  void closeApp() {
    //关闭应用的方法
    SystemChannels.platform.invokeMethod("SystemNavigator.pop");
  }

  @override
  void dispose() {
    //注销观察者
    if (WidgetsBinding.instance != null) {
      WidgetsBinding.instance!.removeObserver(this);
    }

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
    );
  }
}

```

## 获取粘贴内容

```dart
... with WidgetsBindingObserver {}



@override
void initState(){
      WidgetsBinding.instance?.addObserver(this);
}

///监听应用从后台切换到前台时，读取粘贴板中的数据，验证URL，已保存分享
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    if (state == AppLifecycleState.resumed) {
      var clipboardData = Clipboard.getData(Clipboard.kTextPlain);
      clipboardData.then((value){
        debugPrint("clipboardData=> ${value?.text}");
        if(value != null
            && value.text != null
            && value.text!.isNotEmpty
            && (value.text!.startsWith("https://")
            || value.text!.startsWith("http://"))) {
          Get.dialog(ShareArticleDialog(url :  value.text!));
        }
      });
    }
  }
```



## flutter 插件

### 国外论坛

```
https://dev.to/
```

### 瀑布流

flutter_staggered_grid_view

### bottombar

```dart
curved_navigation_bar
```



### 工具集

```
https://dev.to/parabeac/5-tools-to-supercharge-your-flutter-development-1m0l

https://pub.flutter-io.cn/packages/pk_skeleton
```



### flutter_swiper

地址:https://pub.dev/packages/flutter_swiper

```dart
import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';


class Home extends StatefulWidget {
  Home({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  var title;

  Widget _swiperview() {
    List<String> imgList = [
      "https://zhijia-pro.oss-cn-shenzhen.aliyuncs.com/h5/ad/AI%E9%A3%8E%E6%A0%BCh5.png",
      "https://zhijia-pro.oss-cn-shenzhen.aliyuncs.com/h5/ad/AI%E6%99%BA%E9%80%89%20%28h5%29.png",
      "https://zhijia-pro.oss-cn-shenzhen.aliyuncs.com/h5/ad/0%E5%85%83%E6%90%9E%E5%AE%9A%E8%AE%BE%E8%AE%A1h5.png",
    ];

    return Container(
        // 必须设置宽高 或AspectRatio 设置宽高比
      child: AspectRatio(
        aspectRatio: 540 / 216,
        child: Swiper(
          itemBuilder: (BuildContext context, int index) {
            return new Image.network(
              imgList[index],
              fit: BoxFit.cover,
            );
          },
          itemCount: imgList.length,
          // pagination: new SwiperPagination(),
          pagination: SwiperPagination(
            builder: RectSwiperPaginationBuilder(
              size: Size(20.0, 8.0),
              activeSize: Size(20.0, 8.0),
              activeColor: Colors.white,
              color: Colors.black,
            ),
            alignment: Alignment.bottomCenter,
          ),

          // control: new SwiperControl(),
          autoplay: true,
          loop: true,
          // viewportFraction: 0.8,
          // scale: 0.9,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        _swiperview(),
      ],
    );
  }
}
```

### flutter_screenutil 

```
dependencies:
  flutter:
    sdk: flutter
  # 添加依赖
  flutter_screenutil: ^2.3.0
```

```
import 'package:flutter_screenutil/flutter_screenutil.dart';
```



```
https://pub.dev/packages/flutter_screenutil
```

```
// 需要放入build 中; 要放入路由之后;
ScreenUtil.init(context, width: 750, height: 1334, allowFontScaling: false);
  
   width: ScreenUtil().setWidth(335),
   height: ScreenUtil().setHeight(221),
```

### url_launcher

```css
1、在默认浏览器中打开网址
    http:<URL> , https:<URL>
    http://flutter.io
2、发送邮件
    mailto:<email address>subject=<subject>&body=<body>
    mailto:smith@example.org?subject=News&body=New%20plugin
3、拨打电话
    tel:<phone number>
  callurl =  'tel:+1 555 010 999'
3、发送信息
    sms:<phone number> 
    sms:5550101234
        
launch(callurl)        
canLaunch(url)   
```

### 调试工具

```
https://flutter.dev/docs/development/tools/devtools/vscode
```

获取设备信息

```
https://segmentfault.com/a/1190000014913010?utm_source=index-hottest
device_info: 
```

定位

```
amap_location: 
```

permission_handler 

```
权限
```

getui

```dart
https://github.com/GetuiLaboratory/getui-flutter-plugin
```



## 安卓 cpu版本

```
 flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi
```

引用: https://blog.csdn.net/ouyang_peng/article/details/51168072

1. armeabiv-v7a: 第7代及以上的 ARM 处理器。2011年15月以后的生产的大部分Android设备都使用它.
2. arm64-v8a: 第8代、64位ARM处理器，很少设备，三星 Galaxy S6是其中之一。
3. armeabi: 第5代、第6代的ARM处理器，早期的手机用的比较多。
4. x86: 平板、模拟器用得比较多。
5. x86_64: 64位的平板。

## 启动页

生成

```
https://appicon.co/
https://icon.wuruihong.com/
```



```xml
android>app>main>AndroidManifest.xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="tx">

   <application .....>
        <activity ......>
        	...... 
            // 加入如下
            <meta-data
              android:name="io.flutter.app.android.SplashScreenUntilFirstFrame"
              android:value="true"
             />

        </activity>
			......
    </application>
</manifest>

```

```xml
android > app > main > res > drawable

<?xml version="1.0" encoding="utf-8"?>
<!-- Modify this file to customize your launch splash screen -->
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@android:color/white" />

    <!-- 加入如下-->
    <item>
        <bitmap
            android:gravity="center"
            android:src="@mipmap/launch_image" />
         <!-- launch_image.png 为当前目录下的图片 -->
    </item>
</layer-list>
```

```
ios
ios\Runner\Assets.xcassets\LaunchImage.imageset
替换LaunchImage.png 中的图片
```

全屏展示图片

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Modify this file to customize your launch splash screen -->
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@android:color/white" />

    <!-- You can insert your own image assets here -->
    <item>
        <bitmap
            android:gravity="fill"
            android:mipMap="true"
            android:src="@drawable/launch_image" />
    </item>
</layer-list>

```



## 打包

参考：https://www.jianshu.com/p/04eb531da438

```dart
项目根目录/android/app/src/main/AndroidManifest.xml

android:label="flutter_app"   //配置APP的名称，支持中文
android:icon="@mipmap/ic_launcher" //APP图标的文件名称,所以这个图标文件名可以在这个地方配置
```

生成 keystore

```


在VScode输入flutter doctor -v找到Android toolchain栏目下的Java binary at：,复制这个标题项的地址。
我Mac的地址是/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home/bin/java
在VScode的终端输入查询到的java根目录地址以及keytool -genkey -v -keystore F:/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key 

即：/Applications/'Android Studio.app'/Contents/jre/jdk/Contents/Home/bin/keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
回车后，他会要求你输入密钥库口令，记住你的口令，稍后会用到。
继续操作后，还会要求你的密钥密码，同样也要记住这个密码。
之后在你的user目录下生成key.jks.这个key.jks路径可以在上面的命令行中修改。记住这个文件不能共享给任何人!
有了这个key.jks文件后，可以到项目目录下的android文件夹下，创建一个名为key.properties的文件，并打开粘贴下面的代码。

```

### build.gradle

```dart
buildscript {
    ext.kotlin_version = '1.3.50'
    repositories {
//        google()
//        jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.0'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}

allprojects {
    repositories {
//        google()
//        jcenter()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
    }
}

rootProject.buildDir = '../build'
subprojects {
    project.buildDir = "${rootProject.buildDir}/${project.name}"
}
subprojects {
    project.evaluationDependsOn(':app')
}

task clean(type: Delete) {
    delete rootProject.buildDir
}

```

app下 build.gradle

```
def localProperties = new Properties()
def localPropertiesFile = rootProject.file('local.properties')
if (localPropertiesFile.exists()) {
    localPropertiesFile.withReader('UTF-8') { reader ->
        localProperties.load(reader)
    }
}

def flutterRoot = localProperties.getProperty('flutter.sdk')
if (flutterRoot == null) {
    throw new GradleException("Flutter SDK not found. Define location with flutter.sdk in the local.properties file.")
}

def flutterVersionCode = localProperties.getProperty('flutter.versionCode')
if (flutterVersionCode == null) {
    flutterVersionCode = '1'
}

def flutterVersionName = localProperties.getProperty('flutter.versionName')
if (flutterVersionName == null) {
    flutterVersionName = '1.0'
}

apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply from: "$flutterRoot/packages/flutter_tools/gradle/flutter.gradle"

// 新增
def keystorePropertiesFile = rootProject.file("key.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))

android {
    compileSdkVersion 28

    sourceSets {
        main.java.srcDirs += 'src/main/kotlin'
    }

    lintOptions {
        disable 'InvalidPackage'
        checkReleaseBuilds false //新增
    }

    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "com.example.myjd"
        minSdkVersion 16
        targetSdkVersion 28
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }

    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig signingConfigs.release
            // signingConfig signingConfigs.debug
        }
    }
}

flutter {
    source '../..'
}

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
}

```

android 目录下 创建key.properties

```
storePassword=woainia520
keyPassword=woainia520
keyAlias=key
storeFile=F:/key.jks
```

打包命令

```
flutter build apk
```

在线生成图标

```
https://appiconmaker.co/Home/

https://icon.wuruihong.com

代码插件：flutter_launcher_icons
https://pub.dev/packages/flutter_launcher_icons#-readme-tab-
```

声明

```
<!--用于进行网络定位-->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"></uses-permission>
<!--用于访问GPS定位-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"></uses-permission>
<!--用于获取运营商信息，用于支持提供运营商信息相关的接口-->
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses-permission>
<!--用于访问wifi网络信息，wifi信息会用于进行网络定位-->
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"></uses-permission>
<!--用于获取wifi的获取权限，wifi信息会用来进行网络定位-->
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"></uses-permission>
<!--用于访问网络，网络定位需要上网-->
<uses-permission android:name="android.permission.INTERNET"></uses-permission>
<!--用于读取手机当前的状态-->
<uses-permission android:name="android.permission.READ_PHONE_STATE"></uses-permission>
<!--用于写入缓存数据到扩展存储卡-->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>
<!--用于申请调用A-GPS模块-->
<uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"></uses-permission>
<!--用于申请获取蓝牙信息进行室内定位-->
<uses-permission android:name="android.permission.BLUETOOTH"></uses-permission>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"></uses-permission>
```

### 修改包名

```
包名
Android 是在 android ▸ app ▸ src ▸ main ▸ AndroidManifest.xml 中修改package="xxx.xxx.xxx";
以及在 android ▸ app ▸ src ▸ build.gradle中修改applicationId "xxx.xxx.xxx";
并且需要修改android ▸ app ▸ src ▸ main ▸ ...... ▸ MainActivity.java对应的包路径

iOS 在 ios ▸ Runner ▸ Info.plist 中修改CFBundleIdentifier对应的Value

写法与原生相同，并且可以不一致。

PS:不推荐修改包名，包名最好在项目开始时定下...之后修改可能会出点什么小问题...

应用名称
Android 是在 android ▸ app ▸ src ▸ main ▸ AndroidManifest.xml 中修改android:label="XXX";
iOS 在 ios ▸ Runner ▸ Info.plist 中修改CFBundleName对应的Value
图标
Android 在android ▸ app ▸ src ▸ res ▸ mipmap-... 文件夹中替换相应图片
iOS 在 ios ▸ Runner ▸ Assets.xcassets ▸ AppIcon.appiconset文件夹中替换相应尺寸的图片， 如果使用不同的文件名，那还必须更新同一目录中的Contents.json文件。
启动图片
Android 在android ▸ app ▸ src ▸ res ▸ drawable ▸ launch_background.xml 通过自定义drawable来实现自定义启动界面。
iOS 在 ios ▸ Runner ▸ Assets.xcassets ▸ LaunchImage.imageset文件夹中替换相应尺寸的图片， 如果使用不同的文件名，那还必须更新同一目录中的Contents.json文件。
其他方式
可以使用Xcode打开ios文件夹下的Runner.xcworkspace项目，像原生项目一样修改。
```

### 分包

```
flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi
```

### 混淆

```dart
flutter build apk --obfuscate --split-debug-info=/<project-name>/<directory>

flutter build apk --obfuscate --split-debug-info=splitMap
    
    
flutter build apk --obfuscate --split-debug-info=/<project-name>/<directory> --target-platform android-arm,android-arm64,android-x64 --split-per-abi
```

- --obfuscate：开启混淆开关。
- --split-debug-info：混淆生成的map符号表缓存到此位置。







## 教程

```
这个项目屌  收录了Flutter 300多个组件演示   https://github.com/toly1994328/FlutterUnit
```



```
http://laomengit.com/
```

```
咸鱼技术分享
https://www.yuque.com/xytech/flutter/lgxv30
```

## 开源项目

```
git clone git@github.com:cnad666/flutter_use.git
git clone git@github.com:simplezhli/flutter_deer.git
git clone git@github.com:toly1994328/flutterunit.git
git clone https://github.com/sunyongsheng/Allpass.git
git clone https://github.com/Sky24n/flutter_wanandroid
git clone https://gitee.com/shizidada/moose_app
git clone git@github.com:ertcs/smart_home.git

https://github.com/toly1994328/FlutterUnit

https://pub.dev/packages/expandable_text

https://guoshuyu.cn/home/web/#/

getx项目
https://github.com/jhflovehqy/flutter_bolg_manage

问题博客
https://www.didierboelens.com/blog/

ui框架
 http://imp-fe.sm.cn/millui/
 https://my.oschina.net/u/4082303/blog/4416515
```

https://github.com/best-flutter?page=1



## flutter系统样式

```
https://material.io/design/typography/the-type-system.html#applying-the-type-scale
```



## 常见问题

### flutter 环境区分

```dart
const bool kReleaseMode = bool.fromEnvironment('dart.vm.product', defaultValue: false);

const bool kProfileMode = bool.fromEnvironment('dart.vm.profile', defaultValue: false);

const bool kDebugMode = !kReleaseMode && !kProfileMode;

const double precisionErrorTolerance = 1e-10;

const bool kIsWeb = identical(0, 0.0);
```

### android 多渠道打包

```dart
flutter build apk  --dart-define="APP_CHANNEL=huawei"  --dart-define="ENV=prod" 

/// 获取命令行参数
const _channel = String.fromEnvironment(APP_CHANNEL); // 输出:huawei;

```

### build.gradle

```java
def localProperties = new Properties()
def localPropertiesFile = rootProject.file('local.properties')
if (localPropertiesFile.exists()) {
    localPropertiesFile.withReader('UTF-8') { reader ->
        localProperties.load(reader)
    }
}

def flutterRoot = localProperties.getProperty('flutter.sdk')
if (flutterRoot == null) {
    throw new GradleException("Flutter SDK not found. Define location with flutter.sdk in the local.properties file.")
}

def flutterVersionCode = localProperties.getProperty('flutter.versionCode')
if (flutterVersionCode == null) {
    flutterVersionCode = '1'
}

def flutterVersionName = localProperties.getProperty('flutter.versionName')
if (flutterVersionName == null) {
    flutterVersionName = '1.0'
}

apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply from: "$flutterRoot/packages/flutter_tools/gradle/flutter.gradle"


def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
// 多渠道打包
def dartEnvironmentVariables = [
        APP_CHANNEL: 'all',
        ENV: 'test',
]
if (project.hasProperty('dart-defines')) {
    dartEnvironmentVariables = dartEnvironmentVariables + project.property('dart-defines')
            .split(',')
            .collectEntries { entry ->
                def pair = URLDecoder.decode(entry,"UTF-8").split('=')
                [(pair.first()): pair.last()]
            }
}

// 测试
def ZJJPUSH_APPKEY = ""

if(dartEnvironmentVariables.ENV == "prod"){
//    正式
    ZJJPUSH_APPKEY = ""
}


android {
    compileSdkVersion 30
    aaptOptions.cruncherEnabled = false
    aaptOptions.useNewCruncher = false

    sourceSets {
        main.java.srcDirs += 'src/main/kotlin'
    }
    lintOptions {
        disable 'InvalidPackage'
        checkReleaseBuilds false
        abortOnError false
    }
    defaultConfig {
        // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "top.zhijia.zjmerchant"
        minSdkVersion 19
        targetSdkVersion 30
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName

        ndk {
        // 极光配置 选择要添加的对应 cpu 类型的 .so 库。
        // abiFilters 'armeabi', 'armeabi-v7a', 'x86', 'x86_64', 'mips', 'mips64', 'arm64-v8a'
            abiFilters 'armeabi','armeabi-v7a','arm64-v8a'
        }
        // 打包带版本号
        setProperty("archivesBaseName", "zjmerchant-${dartEnvironmentVariables.APP_CHANNEL}-${dartEnvironmentVariables.ENV}" + flutterVersionName + "(${flutterVersionCode})"+"-${releaseTime()}")
        manifestPlaceholders = [
        // 极光配置
                JPUSH_PKGNAME: "top.zhijia.zjmerchant",
                // JPUSH_APPKEY : "2e2a0023411164440e80d4da", /* 正式 NOTE: JPush 上注册的包名对应的 Appkey.*/
                JPUSH_APPKEY : "${ZJJPUSH_APPKEY}", /*测试*/
                JPUSH_CHANNEL: "${dartEnvironmentVariables.APP_CHANNEL}", /*暂时填写默认值即可.*/

                // MEIZU_APPKEY : "MZ-魅族的APPKEY",
                // MEIZU_APPID : "MZ-魅族的APPID",
                HUAWEI_APPID : "",
                HUAWEI_APPKEY : "",

                XIAOMI_APPID  : "MI-",
                XIAOMI_APPKEY : "MI-",

                OPPO_APPID : "OP-", // OPPO平台注册的appid
                OPPO_APPKEY : "OP-", // OPPO平台注册的appkey
                OPPO_APPSECRET: "OP-",//OPPO平台注册的appsecret

                // VIVO_APPKEY : "xxxxxxx", // VIVO平台注册的appkey
                // VIVO_APPID : "xxxxxx", // VIVO平台注册的appid 

                // MEIZU_APPKEY : "MZ-xxxxx", // 魅族平台注册的appkey
                // MEIZU_APPID : "MZ-xxxxxx", // 魅族平台注册的appid

        ]
    }
  
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
        
        debug {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            // signingConfig signingConfigs.debug
            signingConfig signingConfigs.release
            // 解决本地存储
            // minifyEnabled false
            // shrinkResources false
            useProguard true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
        // debug {
          
        //     ndk { abiFilters "armeabi-v7a", 'x86', 'x86_64'}
        // }
        // debug {
        // //   真机
        //     ndk { abiFilters "armeabi-v7a"}
        // }
           //   虚拟机
        debug {
            ndk { abiFilters 'x86'}
        }

    }


}

flutter {
    source '../..'
}
def releaseTime() {
  return new Date().format("yyyyMMddHHmm", TimeZone.getTimeZone("GMT+08:00"))
}
dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
    implementation 'com.huawei.hms:push:5.3.0.301'
    implementation 'cn.jiguang.sdk.plugin:huawei:4.0.8'
    implementation 'cn.jiguang.sdk.plugin:xiaomi:4.0.8'//版本号和对应的JPush版本号相同
    implementation 'cn.jiguang.sdk.plugin:oppo:4.0.8'//版本号和对应的JPush版本号相同
    // implementation 'cn.jiguang.sdk.plugin:vivo:4.0.8'//版本号和对应的JPush版本号相同
}
 // 华为推送
apply plugin: 'com.huawei.agconnect'


```

### 检测https 忽略握手

```dart
 /// 检测https 忽略握手
  static void getHttpAdapter() async {
    try {
      (dio.httpClientAdapter as DefaultHttpClientAdapter).onHttpClientCreate =
          (client) {
        client.badCertificateCallback =
            (X509Certificate cert, String host, int port) {
          return true;
        };
      };
    } catch (e) {
      return print(e);
    }
  }


 /// 创建 dio 实例对象
  static Future<Dio> createInstance() async {
    if (dio == null) {
      dio = new Dio(options);

      try {
        /// 不是生产环境
        if (!bool.fromEnvironment("dart.vm.product")) {
          /// 打印日志
          dio.interceptors.add(HttpInterceptorsLog());
        } else {
          /// 忽略握手
          getHttpAdapter();
        }
      } catch (e) {
        print('错误：获取《bool.fromEnvironment("dart.vm.product")》错误');
      }
      dio.interceptors.add(HttpInterceptors());
    }
    return dio;
  }
```

## 在线代码

```
https://replit.com/languages/dart
```



## 代码规范

 咸鱼推荐https://juejin.cn/post/7009148829366747173

```
https://dart.dev/guides/language/effective-dart/documentation

https://github.com/alibaba/flutter-go/blob/master/Flutter_Go%20%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.md

## 获取点击元素位置

```dart
  final RenderBox renderBox = tabkey.currentContext.findRenderObject();
    Size _size = renderBox.size

    Offset _offset = renderBox.localToGlobal(Offset.zero);


https://www.jianshu.com/p/263534bac15d
  // RenderAbstractViewport? viewport = RenderAbstractViewport.of(_renderBox);

    // /// Distance between top edge of screen and MyWidget bottom edge
    // var offsetToRevealLeading = viewport!.getOffsetToReveal(_renderBox!, 0.0);
    // print(offsetToRevealLeading);

    // /// Distance between bottom edge of screen and MyWidget top edge
    // var offsetToRevealTrailingEdge = viewport.getOffsetToReveal(_renderBox!, 1.0);
    // print(offsetToRevealTrailingEdge);



if (MediaQuery.of(context).viewInsets.bottom == 0) {
        //关闭键盘
} else {
        //显示键盘
}
```

## 设计规范

```dart
https://material.io/design/typography/the-type-system.html#type-scale
```

## 动画

```
https://rive.app/
```



## http限制

```xml
https://blog.csdn.net/weixin_44137575/article/details/109045633

android:
  AndroidManifest.xml
      <application
          android:name="io.flutter.app.FlutterApplication"
          android:label="织家BOS"
          android:icon="@mipmap/ic_launcher"
          android:usesCleartextTraffic="true" // +
          android:networkSecurityConfig="@xml/network_security_config"> // +

res下新建xml文件夹 》新建 network_security_config.xml 文件》

  <?xml version="1.0" encoding="utf-8"?>
  <network-security-config>
      <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
          <certificates src="system" />
        </trust-anchors>
      </base-config>
  </network-security-config>


ios：xcode
  info。plist
   App Transport Security Settings
      Allow Arbitrary Loads   YES


```

## 物理返回键问题

```
 // fix: Android 物理返回键，无法返回上一页问题 @https://github.com/flutter/flutter/issues/66349
      // WillPopScope + onWillPop 就是解决这个问题的关键
```

