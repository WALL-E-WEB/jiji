

https://api.flutter.dev/

# MaterialApp

```dart
new MaterialApp(
  title: title,
  theme: new ThemeData(
    brightness: Brightness.dark,
    primaryColor: Colors.lightBlue[800],
    accentColor: Colors.cyan[600],
  ),
);
```

```dart
局部主题
new Theme(
  // Create a unique theme with "new ThemeData"
  data: new ThemeData(
    accentColor: Colors.yellow,
  ),
  child: new FloatingActionButton(
    onPressed: () {},
    child: new Icon(Icons.add),
  ),
);
```

```dart
使用主题色

new Container(
  color: Theme.of(context).accentColor,
  child: new Text(
    'Text with a background color',
    style: Theme.of(context).textTheme.title,
  ),
);
```

```dart
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
```



```dart
  factory ThemeData({
    Brightness? brightness, 
    VisualDensity? visualDensity,
    MaterialColor? primarySwatch,
    Color? primaryColor,
    Brightness? primaryColorBrightness,
    Color? primaryColorLight,
    Color? primaryColorDark,
    Color? accentColor,
    Brightness? accentColorBrightness,
    Color? canvasColor,
    Color? shadowColor,
    Color? scaffoldBackgroundColor,
    Color? bottomAppBarColor,
    Color? cardColor,
    Color? dividerColor,
    Color? focusColor,
    Color? hoverColor,
    Color? highlightColor,
    Color? splashColor,
    InteractiveInkFeatureFactory? splashFactory,
    Color? selectedRowColor,
    Color? unselectedWidgetColor,
    Color? disabledColor,
    Color? buttonColor,
    ButtonThemeData? buttonTheme,
    ToggleButtonsThemeData? toggleButtonsTheme,
    Color? secondaryHeaderColor,
    @Deprecated(
      'Use TextSelectionThemeData.selectionColor instead. '
      'This feature was deprecated after v1.23.0-4.0.pre.'
    )
    Color? textSelectionColor,
    @Deprecated(
      'Use TextSelectionThemeData.cursorColor instead. '
      'This feature was deprecated after v1.23.0-4.0.pre.'
    )
    Color? cursorColor,
    @Deprecated(
      'Use TextSelectionThemeData.selectionHandleColor instead. '
      'This feature was deprecated after v1.23.0-4.0.pre.'
    )
    Color? textSelectionHandleColor,
    Color? backgroundColor,
    Color? dialogBackgroundColor,
    Color? indicatorColor,
    Color? hintColor,
    Color? errorColor,
    Color? toggleableActiveColor,
    String? fontFamily,
    TextTheme? textTheme,
    TextTheme? primaryTextTheme,
    TextTheme? accentTextTheme,
    InputDecorationTheme? inputDecorationTheme,
    IconThemeData? iconTheme,
    IconThemeData? primaryIconTheme,
    IconThemeData? accentIconTheme,
    SliderThemeData? sliderTheme,
    TabBarTheme? tabBarTheme,
    TooltipThemeData? tooltipTheme,
    CardTheme? cardTheme,
    ChipThemeData? chipTheme,
    TargetPlatform? platform,
    MaterialTapTargetSize? materialTapTargetSize,
    bool? applyElevationOverlayColor,
    PageTransitionsTheme? pageTransitionsTheme,
    AppBarTheme? appBarTheme,
    ScrollbarThemeData? scrollbarTheme,
    BottomAppBarTheme? bottomAppBarTheme,
    ColorScheme? colorScheme,
    DialogTheme? dialogTheme,
    FloatingActionButtonThemeData? floatingActionButtonTheme,
    NavigationRailThemeData? navigationRailTheme,
    Typography? typography,
    NoDefaultCupertinoThemeData? cupertinoOverrideTheme,
    SnackBarThemeData? snackBarTheme,
    BottomSheetThemeData? bottomSheetTheme,
    PopupMenuThemeData? popupMenuTheme,
    MaterialBannerThemeData? bannerTheme,
    DividerThemeData? dividerTheme,
    ButtonBarThemeData? buttonBarTheme,
    BottomNavigationBarThemeData? bottomNavigationBarTheme,
    TimePickerThemeData? timePickerTheme,
    TextButtonThemeData? textButtonTheme,
    ElevatedButtonThemeData? elevatedButtonTheme,
    OutlinedButtonThemeData? outlinedButtonTheme,
    TextSelectionThemeData? textSelectionTheme,
    DataTableThemeData? dataTableTheme,
    CheckboxThemeData? checkboxTheme,
    RadioThemeData? radioTheme,
    SwitchThemeData? switchTheme,
    bool? fixTextFieldOutlineLabel,
    @Deprecated(
      'No longer used by the framework, please remove any reference to it. '
      'This feature was deprecated after v1.23.0-4.0.pre.'
    )
    bool? useTextSelectionTheme,
  })
```

# MediaQuery

|                       |                                                              |
| --------------------- | ------------------------------------------------------------ |
| size                  | 一个包含宽度和高度的对象，单位是dp（乘以密度就是你设备的像素） |
| devicePixelRatio      | 密度（像素比）                                               |
| textScaleFactor       | 每个逻辑像素的字体像素数                                     |
| platformBrightness    | 主机平台当前亮度模式                                         |
| viewInsets            | 完全被系统UI(通常是设备的键盘)遮挡的显示部分                 |
| padding               | 我们通常取上边刘海高度和下边导航高度                         |
| viewPadding           | 被系统遮挡的部分，通常指“刘海屏”或者系统状态栏，此值独立于`padding`和`viewInsets`，它们的值从`MediaQuery`控件边界的边缘开始测量。在移动设备上，通常是全屏。 |
| systemGestureInsets   | 显示屏边缘上系统“消耗”的区域输入事件，并阻止将这些事件传递给应用。比如在Android Q手势滑动用于页面导航（ios也一样），比如左滑退出当前页面。 |
| physicalDepth         | 设备的最大深度，类似于三维空间的Z轴。                        |
|                       |                                                              |
| alwaysUse24HourFormat | 格式化时间时是否使用24小时格式                               |
| accessibleNavigation  | 用户是否使用TalkBack或VoiceOver等辅助功能服务与应用程序进行交互 |
| invertColors          | 设备是否反转平台的颜色                                       |
| disableAnimations     | 平台是否要求尽可能禁用或减少动画                             |
| boldText              | 平台是否请求使用粗体字体重绘制文本                           |
| orientation           | 是横屏还是竖屏。                                             |






# MaterialStateProperty

```dart
 MaterialStateProperty.all();
 
 MaterialStateProperty.resolveWith((MaterialState state){
     // 判断当前状态
 	 if (states.contains(MaterialState.pressed)) {
       return const Color(_pressedColor);
     }
     return const Color(_defaultColor);
 })
     

```

```dart
enum MaterialState {
  hovered,
  focused,
  pressed,
  dragged,
  selected,
  disabled,
  error,
}
```





# Event

## GestureRecognizer

```dart
class _GestureRecognizerDemo extends StatefulWidget {
  @override
  __GestureRecognizerDemoState createState() => __GestureRecognizerDemoState();
}

class __GestureRecognizerDemoState extends State<_GestureRecognizerDemo> {
  TapGestureRecognizer _tapGestureRecognizer = TapGestureRecognizer();

  // 变色开关
  bool _toggle = false;

  @override
  void dispose() {
    // GestureRecognizer一定要调用其dispose方法释放资源
    _tapGestureRecognizer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text.rich(
        TextSpan(
          children: [
            TextSpan(text: '测试'),
            TextSpan(
              text: '点我变色',
              style: TextStyle(
                fontSize: 20.0,
                color: _toggle ? Colors.blue : Colors.red,
              ),
              recognizer: _tapGestureRecognizer
                ..onTap = () {
                  setState(() {
                    _toggle = !_toggle;
                  });
                },
            ),
            TextSpan(text: '测试'),
          ],
        ),
      ),
    );
  }
}
```

## GestureDetector

https://segmentfault.com/a/1190000011555283

```dart
clclass _ScaleDemo extends StatefulWidget {
  @override
  __ScaleDemoState createState() => __ScaleDemoState();
}

class __ScaleDemoState extends State<_ScaleDemo> {
  double _width = 200.0;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: GestureDetector(
        child: Container(
          color: Colors.red,
          width: _width,
          height: 200.0,
        ),
        onScaleUpdate: (ScaleUpdateDetails detail) {
          // 缩放倍数在0.8到10倍之间
          _width = 200 * detail.scale.clamp(.8, 10.0);
        },
      ),
    );
  }
}

```

## Listener

```dart
Listener({
 Key key,
 this.onPointerDown, //手指按下回调
 this.onPointerMove, //手指移动回调
 this.onPointerUp,//手指抬起回调
 this.onPointerCancel,//触摸事件取消回调
 this.behavior = HitTestBehavior.deferToChild, //在命中测试期间如何表现
 Widget child
})
```

```dart
class AbsorbPointerDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Listener(
      child: AbsorbPointer(
        child: Listener(
          child: Container(
            color: Colors.blue,
            width: 200.0,
            height: 200.0,
          ),
          onPointerDown: (event) => print("in"),
        ),
      ),
      onPointerDown: (event) => print("up"),
    );
  }
}

AbsorbPointer : 点击container 只输出up；
IgnorePointer ：点击container 无输出
```



# Botton

## MaterialButton

 有主题的button，官网不推荐使用此控件，

## RawMaterialButton 

不适用当前Theme或者ButtonTheme的控件 ， 如果自定义，官方推荐使用这个

## 	TextBotton

### 		1.params:

```dart
 const TextButton({
    Key? key,
    required VoidCallback? onPressed, // 点击
    VoidCallback? onLongPress, // 长按
    ButtonStyle? style, // 样式
    FocusNode? focusNode, 
    bool autofocus = false,
    Clip clipBehavior = Clip.none,
    required Widget child,
  }) 
```

### 		2.ButtonStyle

```dart
const ButtonStyle({
    this.textStyle, 
    // MaterialStateProperty.all(TextStyle(fontSize: 18, color: Colors.red)),
    //背景颜色
    backgroundColor: MaterialStateProperty.resolveWith((states) {
          //设置按下时的背景颜色
          if (states.contains(MaterialState.pressed)) {
            return Colors.blue[200];
          }
          //默认不使用背景颜色
          return null;
    }),
    this.foregroundColor, // 前景色 文字颜色 textStyle<foregroundColor < child
    this.overlayColor, // 点击后波纹颜色
    this.shadowColor,
    this.elevation, // 阴影  MaterialStateProperty.all(0)
    this.padding, // 内边距 MaterialStateProperty.all(EdgeInsets.all(0))
    this.minimumSize, // 最小值 MaterialStateProperty.all(Size(200, 200))
    // 内边框
    // MaterialStateProperty.all(BorderSide(color: Colors.grey, width: 0)),
    this.side,
    //外边框装饰 会覆盖 side 配置的样式shape: MaterialStateProperty.all(StadiumBorder()),
    this.shape,
    this.mouseCursor,
    this.visualDensity, // 按钮布局的紧凑程度
    // 点击范围 MaterialTapTargetSize.padded 默认最小点击48X48
    // MaterialTapTargetSize.shrinkWrap 作战区域
    this.tapTargetSize, 
    this.animationDuration, //[shape]和[elevation]的动画更改的持续时间。
    // 检测到的手势是否应提供声音和/或触觉反馈。例如，在Android上，点击会产生咔哒声，启用反馈后，长按会产生短暂的振动。通常，组件默认值为true。
    this.enableFeedback,
    this.alignment, // 对齐方式alignment:Alignment.bottomLeft
  });

```

### shape

```dart
shape:MaterialStateProperty.all( OutlinedBorder ); 

	StadiumBorder() // 椭圆
        
    RoundedRectangleBorder( // 自定义圆角
       borderRadius: BorderRadius.all(
          Radius.circular(4),
       ),
    )
    
    BeveledRectangleBorder( // 切角
       borderRadius: BorderRadius.all(
       Radius.circular(20),
      ),
    ),
```

##### OutlinedBorder

```dart
Inheritance
Object > ShapeBorder > OutlinedBorder
    
Implementers
    BeveledRectangleBorder

    CircleBorder

    ContinuousRectangleBorder

    MaterialStateOutlinedBorder

    RoundedRectangle

    BorderStadiumBorder
    
```



### factory

```
factory TextButton.icon({
    Key? key,
    required VoidCallback? onPressed,
    VoidCallback? onLongPress,
    ButtonStyle? style,
    FocusNode? focusNode,
    bool? autofocus,
    Clip? clipBehavior,
    required Widget icon,
    required Widget label,
  }) 
```

### styleFrom

```dart
// 定义样式主题 颜色
TextButton(
   style: TextButton.styleFrom(primary: Colors.green),
)
```



## OutlinedButton

## ElevatedButton 

## IconButton

## PopupMenuButton

```
  PopupMenuButton(
          onSelected: (result) {
            print(result);
          },
          onCanceled: () {
            print('cansel');
          },
          initialValue: 0,
          tooltip: 'tooltip',
          enableFeedback: true,
          offset: Offset(0.5, -10),
          elevation: 10,
          icon: Text('icon'),
          itemBuilder: (BuildContext context) => <PopupMenuEntry>[
            const PopupMenuItem(
              value: 4,
              enabled: false,
              child: Text('Working a lot harder'),
            ),
            const PopupMenuItem(
              value: 3,
              child: Text('Being a lot smarter'),
            ),
            const PopupMenuItem(
              value: 2,
              child: Text('Being a self-starter'),
            ),
            const PopupMenuItem(
              value: 11,
              child: Text('Placed in charge of trading charter'),
            ),
          ],
        ),
```



## DropdownButton

```
DropdownButton({
	Key key,
	@required this.items,       // 下拉选项列表
	this.selectedItemBuilder,   // 选项 item 构造器
	this.value,                 // 选中内容
	this.hint,                  // 启动状态下默认内容
	this.disabledHint,          // 禁用状态下默认内容
	@required this.onChanged,   // 选择 item 回调
	this.elevation = 8,         // 阴影高度
	this.style,                 // 选项列表 item 样式
	this.underline,             // 按钮下划线
	this.icon,                  // 下拉按钮图标
	this.iconDisabledColor,     // 禁用状态下图标颜色
	this.iconEnabledColor,      // 启动时图标颜色
	this.iconSize = 24.0,       // 图标尺寸
	this.isDense = false,       // 是否降低按钮高度
	this.isExpanded = false,    // 是否将下拉列表内容设置水平填充

const DropdownMenuItem({
	Key key,
	this.value,             // 对应选中状态内容
 	@required this.child,   // 下拉列表 item 内容
})
```



## FloatingActionButton



## ButtonBar

```
const ButtonBar({
	Key? key,
	this.alignment,
	this.mainAxisSize,
	this.buttonTextTheme,
	this.buttonMinWidth,
	this.buttonHeight,
	this.buttonPadding,
	this.buttonAlignedDropdown,
	this.layoutBehavior,
	this.overflowDirection,
	this.overflowButtonSpacing,
	this.children = const <Widget>[],
}) 
```

# Text

自定义绘制文本 https://zhuanlan.zhihu.com/p/144426357

```
@override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Container(
        color: Colors.lime,
        alignment: Alignment.center,
        child: Container(
          alignment: Alignment.center,
          child: Container(
            height: 200,
            width: 400,
            color: Colors.purple,
            child: CustomPaint(
              painter: Text2Painter(),
            ),
          )

        ),
      ),
    );
  }
  
class Text2Painter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    var baseLine = TextBaseline.alphabetic;
    //var baseLine = TextBaseline.ideographic;

    final textStyle =
        TextStyle(color: Colors.white, fontSize: 100, textBaseline: baseLine);
    final textSpan = TextSpan(
      text: 'My文字',
      style: textStyle,
    );
    final textPainter = TextPainter(
      text: textSpan,
      textDirection: TextDirection.ltr,
    );
    textPainter.layout(
      minWidth: 0,
      maxWidth: size.width,
    );

    final left = 0.0;
    final top = 0.0;
    final right = textPainter.width;
    final bottom = textPainter.height;
    final rect = Rect.fromLTRB(left, top, right, bottom);
    final paint = Paint()
      ..color = Colors.red
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    canvas.drawRect(rect, paint);

    // draw the baseline
    final distanceToBaseline =
        textPainter.computeDistanceToActualBaseline(baseLine);

    canvas.drawLine(
      Offset(0, distanceToBaseline),
      Offset(textPainter.width, distanceToBaseline),
      paint..color = Colors.blue..strokeWidth = 5,
    );

    // draw the text
    final offset = Offset(0, 0);
    textPainter.paint(canvas, offset);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}
```



# Stack

```dart

```

## Positioned

## Positioned.fill 

## Align



# Layout

## 	LayoutBuilder

```dart
LayoutBuilder(
	builder:(context,constraints){
		return:SizeBox(
			height:constraints.maxHeight,
		)
	}
)
```

## OreientationBuilder

```
用于适配横竖屏
```



# ScrollView 

## SingleChildScrollView

```dart
超出自动滚动
```



## CustomScrollView

```dart
 Key? key,
    Axis scrollDirection = Axis.vertical,
    bool reverse = false,
    ScrollController? controller,
    bool? primary,
    ScrollPhysics? physics,
    bool shrinkWrap = false,
    Key? center,
    double anchor = 0.0,
    double? cacheExtent,
    this.slivers = const <Widget>[],
    int? semanticChildCount,
    DragStartBehavior dragStartBehavior = DragStartBehavior.start,
    ScrollViewKeyboardDismissBehavior keyboardDismissBehavior = ScrollViewKeyboardDismissBehavior.manual,
    String? restorationId,
    Clip clipBehavior = Clip.hardEdge,
```

```dart
CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            leading: Icon(Icons.arrow_back_ios),
            title: Text('伸缩头部'),
            actions: <Widget>[
              IconButton(icon: Icon(Icons.android), onPressed: () {}),
              IconButton(icon: Icon(Icons.print), onPressed: () {}),
            ],
            backgroundColor: Theme.of(context).accentColor,
            expandedHeight: 200.0,
            floating: true,
            snap: false,
            pinned: true,
          ),
          ///间距
          SliverPadding(
            padding: EdgeInsets.all(5),
          ),
          SliverFixedExtentList(
            ///子条目的高度
            itemExtent: 60.,
            ///子条目布局构建代理
            delegate: new SliverChildBuilderDelegate(
              (BuildContext context, num index) {
                ///子条目的布局样式
                return Text('item')
              },
              ///子条目的个数
              childCount: 40,
            ),
          )
        ],
      ),
```

### SliverAppBar

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
      //背景
    flexibleSpace: FlexibleSpaceBar(
              collapseMode: CollapseMode.pin,
              title: Text('title'),
              background: Align(
                alignment: Alignment.topCenter,
                child: Container(
                  child: Text(
                    'dddd',
                    style: TextStyle(
                      fontSize: 40,
                      color: Colors.black,
                    ),
                  ),
                ),
              ),
            ),
  })

```

#### CollapseMode

```dart
parallax, // FlexibleSpaceBar 渐变隐藏

pin, // 一起滑动隐藏

none, // 到顶直接隐藏
```



```
 pinned: false, 
 floating: false,
 snap: false
 
 整体全部
```



```
 pinned: true, 
 floating: false,
 snap: false
 
  顶部收缩显示自动显示appber；
```

```
pinned: true, 
floating: true, 
snap: true:

只要下滑就开始下拉头部
```

```
pinned: false, 
floating: false, 
snap: true:

上滑动全部隐藏
```

### SliverPersistentHeader

自定义SliverAppBar

```dart
SliverPersistentHeader(
            floating: false,//floating 与pinned 不能同时为true
            pinned: true,
            delegate: _SliverAppBarDelegate(
                minHeight: 50.0,
                maxHeight: 200.0,
                child: Container(
                  color: Colors.lightBlue,
                  child: Center(
                    child: Text('可伸缩头部--位置随意'),
                  ),
                )
            ),
          )
```

```dart
 SliverPersistentHeaderDelegate 为接口


class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
  _SliverAppBarDelegate({
    @required this.minHeight,
    @required this.maxHeight,
    @required this.child,
  });
 
  final double minHeight;
  final double maxHeight;
  final Widget child;
 
  @override
  double get minExtent => minHeight;
 
  @override
  double get maxExtent => math.max(maxHeight, minHeight);
 
  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return new SizedBox.expand(child: child);
  }
 
  @override
  bool shouldRebuild(_SliverAppBarDelegate oldDelegate) {
    return maxHeight != oldDelegate.maxHeight ||
        minHeight != oldDelegate.minHeight ||
        child != oldDelegate.child;
  }
}


//重写build()、get maxExtent、get minExtent和shouldRebuild()这四个方法，
```

```dart
class MySliverPersistentHeaderDelegate extends SliverPersistentHeaderDelegate {
  @override
  Widget build(
      BuildContext context, double shrinkOffset, bool overlapsContent) {
    return Container(
        color: Colors.blue,
        alignment: Alignment.center,
        child: Text('我是一个SliverPersistentHeader',
            style: TextStyle(color: Colors.white)));
  }

  @override
  double get maxExtent => 200.0;

  @override
  double get minExtent => 100.0;

  @override
  bool shouldRebuild(SliverPersistentHeaderDelegate oldDelegate) =>
      false; // 如果内容需要更新，设置为true
}
```



### SliverFixedExtentList

SliverFixedExtentList是固定子控件的高度的

```dart
    SliverFixedExtentList(
            ///子条目的高度
            itemExtent: 40,

            ///子条目布局构建代理
            delegate: new SliverChildBuilderDelegate(
              (BuildContext context, num index) {
                ///子条目的布局样式
                return Container(
                  color: Colors.red,
                  child: Text("list $index"),
                  margin: EdgeInsets.only(bottom: 10),
                );
              },

              ///子条目的个数
              childCount: 20,
            ),
          ),
```

### SliverFillViewport

SliverFillViewport生成的每一个item都占满全屏

```dart
CustomScrollView(
  slivers: <Widget>[
    SliverFillViewport(
      delegate: SliverChildBuilderDelegate((context, index) {
        return Container(
          color: Colors.primaries[index % Colors.primaries.length],
        );
      }, childCount: 4),
      viewportFraction: 1.0,
    )
  ],
)
```

### SliverAnimatedList

item 新增与删除带动画

```dart
var _key = GlobalKey<SliverAnimatedListState>();
SliverAnimatedList(
      key: _key,
      initialItemCount: _list.length,
      itemBuilder:
          (BuildContext context, int index, Animation<double> animation) {
        return _buildItem(_list[index].toString(), animation);
      },
    ),

删除:
 _key.currentState.removeItem(_index,
                (context, animation) => _buildItem(item, animation));
插入:
_key.currentState.insertItem(_index);
```

### SliverFillRemaining

组件充满视口剩余空间

```dart
CustomScrollView(
  slivers: <Widget>[
    SliverToBoxAdapter(
      child: Container(
        color: Colors.amber[300],
        height: 150.0,
      ),
    ),
    SliverFillRemaining(
      hasScrollBody: false,
      child: Container(
        color: Colors.blue[100],
        child: Icon(
          Icons.sentiment_very_satisfied,
          size: 75,
          color: Colors.blue[900],
        ),
      ),
    ),
  ],
)
```



### SliverList

与listView类似

delegate两种表现形式：SliverChildBuilderDelegate和SliverChildListDelegate，

```dart
 SliverList(
            delegate: SliverChildListDelegate([
              ListTile(title: Text('固定条数1'),),
              ListTile(title: Text('固定条数2'),),
              ListTile(title: Text('固定条数3'),),
            ]),
 )

 SliverList(
    delegate: SliverChildBuilderDelegate((BuildContext context, int index){
      return ListTile(title: Text('高度不固定${index+1}'),);
            }, childCount: 10),
)
```

#### delegate

##### SliverGridDelegateWithFixedCrossAxisCount

按个数排列

```dart
  required this.crossAxisCount,
    this.mainAxisSpacing = 0.0,
    this.crossAxisSpacing = 0.0,
    this.childAspectRatio = 1.0,
    this.mainAxisExtent,
```

##### SliverGridDelegateWithMaxCrossAxisExtent

 item按大小排列 

```dart
  required this.maxCrossAxisExtent,
    this.mainAxisSpacing = 0.0,
    this.crossAxisSpacing = 0.0,
    this.childAspectRatio = 1.0,
    this.mainAxisExtent,
```

### SliverGrid

SliverGridDelegateWithMaxCrossAxisExtent:设置子元素最大宽度;

SliverGridDelegateWithFixedCrossAxisCount:设置一行个数

```dart
SliverGrid(
  delegate: SliverChildBuilderDelegate((BuildContext context, int index){
     return ListTile(title: Text('slivergird'),);
  }, 
  childCount: 10),
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
      crossAxisCount: 2, childAspectRatio: 8.0),
    
//gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 20,  ),
)
```

#### SliverGrid.count

#### SliverGrid.extent



### SliverToBoxAdapter

```dart
 SliverToBoxAdapter(
            child: TextField(decoration: InputDecoration(hintText: '普通widget'),),
          )
```

### SliverOpacity



```dart
SliverOpacity(
  opacity: 0.5,
  sliver: SliverList(
    delegate: SliverChildBuilderDelegate((content, index) {
      return Container(
        height: 65,
        color: Colors.primaries[index % Colors.primaries.length],
      );
    }, childCount: 50),
  ),
),
```

### SliverPrototypeExtentList



```dart
CustomScrollView(
  slivers: <Widget>[
    SliverPrototypeExtentList(
      prototypeItem: Text('老孟',style: TextStyle(fontSize: 28),),
      delegate: SliverChildBuilderDelegate((content, index) {
        return Container(
          color: Colors.primaries[index % Colors.primaries.length],
        );
      }, childCount: 50),
    ),
  ],
)
```



### SliverPadding

```dart
SliverPadding(
            padding: EdgeInsets.all(10.0),
            sliver: SliverList(
              delegate: SliverChildListDelegate([
                ListTile(title: Text('固定条数1'),),
                ListTile(title: Text('固定条数2'),),
                ListTile(title: Text('固定条数3'),),
              ]),
            ),
          )
```

### SliverSafeArea



### SliverLayoutBuilder

根据组件的约束条件提供子组件

```
CustomScrollView(
  slivers: <Widget>[
    SliverLayoutBuilder(
      builder: (BuildContext context, SliverConstraints constraints) {
        print('${constraints.userScrollDirection}');
        var color = Colors.red;
        if (constraints.userScrollDirection == ScrollDirection.forward) {
          color = Colors.blue;
        }
        return SliverToBoxAdapter(
            child: Container(
          height: 100,
          color: color,
        ));
      },
    ),
  ],
)
```



## ListView

## NestedScrollView

## SingleChildScrollView

```dart
https://segmentfault.com/a/1190000019756746
NestedScrollView(
              controller: _listViewCtr,
              headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
              return [
              	SliverOverlapAbsorber(
                    handle: NestedScrollView.sliverOverlapAbsorberHandleFor(context),
                    sliver: SliverAppBar(
                      backgroundColor: ZjColor.scaffoldBg,
                      forceElevated: innerBoxIsScrolled,
                      automaticallyImplyLeading: false,
                      bottom: PreferredSize(
                          preferredSize: Size(1.sw, 192.w - ZjAppBarStyle.heigth),
                          child: SizedBox()),
                      expandedHeight:,
                      flexibleSpace:,
                      ),
                 ),
                  ///停留在顶部的TabBar
                  SliverPersistentHeader(
                    pinned: true,
                    delegate: ZjAppBarDelegate(
                      child: ZjTabBlock(
                        width: 1.sw / 4,
                        controller: _timeTabController,
                        onTap: (index) {
                          _timeTabController.animateTo(index);
                        },
                        tapTitleList: ['详细资料', '跟进记录'],
                      ),
                    ),
                  ),
              ];
             },
  						body:Widget

)
```

## GridView

```
 GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 50,
          mainAxisExtent: 40,
        ),
        itemBuilder: (itemBuilder, index) {
          return Text('data');
        },
      ),
```

### SliverGridDelegateWithFixedCrossAxisCount

按个数排列

```dart
  required this.crossAxisCount,
    this.mainAxisSpacing = 0.0,
    this.crossAxisSpacing = 0.0,
    this.childAspectRatio = 1.0,
    this.mainAxisExtent,
```

### SliverGridDelegateWithMaxCrossAxisExtent

 item按大小排列 

```dart
  required this.maxCrossAxisExtent,
    this.mainAxisSpacing = 0.0,
    this.crossAxisSpacing = 0.0,
    this.childAspectRatio = 1.0,
    this.mainAxisExtent,
```



## ListView

```dart
ListView({
  Axis scrollDirection = Axis.vertical,
  ScrollController controller,
  ScrollPhysics physics,
    // 长度是否仅包裹其内容的长度
  bool shrinkWrap = false,
  EdgeInsetsGeometry padding,
  this.itemExtent,
    // 预渲染区域长度
  double cacheExtent,
  List<Widget> children = const <Widget>[],
})
```

### ListView.build()

```
itemCount: 列表中元素的数量；
itemBuilder: 子元素的渲染方法，允许自定义子元素组件（等同于rn中FlatList组件的renderItem属性）。
```

### ListView.separated()

```dart
class FriendList extends StatelessWidget {
  const FriendList({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: friendListData.length,
      itemBuilder: (context, index) {
        return FriendCard(data: friendListData[index]);
      },
      // 构建下划线
      separatorBuilder: (context, index) {
        return Divider(
          height: .5,
          indent: 75,
          color: Color(0xFFDDDDDD),
        );
      },
    );
  }
}
```

### ListView.custom

### 清除回回弹样式

```

怎样去除这个蓝色回弹效果呢？两步轻松搞定

第一步：用 ScrollConfiguration 组件包裹 ListView 组件

ScrollConfiguration(
  behavior: CusBehavior(), // 自定义的 behavior
  child: ListView(),
);

第二步： 自定义一个 behavior

class CusBehavior extends ScrollBehavior {
  @override
  Widget buildViewportChrome(
      BuildContext context, Widget child, AxisDirection axisDirection) {
    if (Platform.isAndroid || Platform.isFuchsia) return child;
    return super.buildViewportChrome(context, child, axisDirection);
  }
}

```



## ListWheelScrollView

带有缩放动画滚动

![image-20210501151350791](/image/flutter/image-20210501151350791.png)

```dart
ListWheelScrollView(
        itemExtent: 44,
        useMagnifier: true,
        overAndUnderCenterOpacity: 0.5,
        physics: FixedExtentScrollPhysics(),
        children: [
          Container(
              height: 88, width: 300, color: Colors.blue, child: Text('1')),
        ],
      ),
```



## pageView

```

```

## ReorderAbleListView

```
可拖动列表
```

## Draggable

```
横向排列 可拖拽

Draggable (
	child:
	feedback: // 拖动后移动的 widget
	childwhenDragginh: // 拖动后原位置 widget
)
```



## scrollber

```
滚动列表 带滚动条
```

## Dismissible

```dart
行可左右滑动移除；

const Dismissible({
    required Key key // UniqueKey(); valueKey(item.id)
    required this.child,
    this.background, // start widget
    this.secondaryBackground, // end widget
     
    this.confirmDismiss,// (){}
    //  confirmDismiss:(dismissDirection) async{
    //    await Future.delayed(Duration(seconds:2));
    //    return false;
    // }
    this.onResize,
    // 判断 滑动方向
    this.onDismissed,// (dismissDirection){}
    
    this.direction = DismissDirection.horizontal,
    // 多长时间后 消失
    this.resizeDuration = const Duration(milliseconds: 300),
    // 滑动距离
   // dismissThresholds:{
   //     DismissThresholds:StartToEnd:0.4,
   // }
    
    // 回弹 默认 不超过40%
    this.dismissThresholds = const <DismissDirection, double>{},
   
    // 活动移动动画 时间
    this.movementDuration = const Duration(milliseconds: 200), 
    
    this.crossAxisEndOffset = 0.0,
    this.dragStartBehavior = DragStartBehavior.start,
    this.behavior = HitTestBehavior.opaque,
  })
```



# Refresh

## RefreshIndicator

```
下拉刷新
```

```dart
RefreshIndicator 与NestedScrollView 不触发下拉刷新问题；

 RefreshIndicator(
      notificationPredicate: (notification) {
        return true;
       onRefresh：(){
       	 ...
       	 return true;
       }
  },
```



## CupertinoSliverRefreshControl

```dart
 return Scaffold(
      appBar: AppBar(
        title: Text("下拉刷新"),
      ),
      body: CustomScrollView(
        physics: BouncingScrollPhysics(), // 很重要
        slivers: <Widget>[
          //下拉刷新组件
          CupertinoSliverRefreshControl(
              //刷新触发拉距
            refreshTriggerPullDistance: 60, 
             // 刷新指标范围
            refreshIndicatorExtent: 10.0,
            //下拉刷新回调
            onRefresh: () async {
              //模拟网络请求
              await Future.delayed(Duration(milliseconds: 1000));
              //结束刷新
              return Future.value(true);
            },
          ),
          //列表
          SliverList(
            delegate: SliverChildBuilderDelegate((content, index) {
              return ListTile(
                title: Text('测试数据$index'),
              );
            }, childCount: 100),
          )
        ],
      ),
    );

```



# Sliver

## SliverAppBar

```dart
SliverAppBar(
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

)
```

## SliverPersistentHeader

## SliverList

## SliverFixedExtentList

```dart
SliverFixedExtentList(
    ///子条目的高度
    itemExtent: 40,
    ///子条目布局构建代理
    delegate: new SliverChildBuilderDelegate(
        (BuildContext context, num index) {
                ///子条目的布局样式
                return Container(
                  color: Colors.red,
                  child: Text("list $index"),
                  margin: EdgeInsets.only(bottom: 10),
                );
         },
         ///子条目的个数
         childCount: 40,
     ),
)
```



## SliverGrid

## SliverToBoxAdapter

## SliverPadding

```
 required this.padding,
    Widget? sliver,
```

## SliverFillViewport

```dart
占满一屏幕剩余高度
```

# Form

## Form

```dart
GlobalKey<FormState> _formKey = GlobalKey<FormState>();

_formKey.currentState!.validate();
```



## FormField

```dart
FormField(
       initialValue: 'ccc',
       validator: (v) {
          return '错误2';
       },
       builder: (FormFieldState<dynamic> field) {
          return Container(
             child: Column(
                        children: <Widget>[
                          Text('${field.value}'),
                          Text('${field.errorText}'),
                          TextButton(
                              onPressed: () {
                                field.validate();
                              },
                              child: Text('data'))
                        ],
                      ),
                    );
                  },
                ),
```



# Dailog

## showDialog

```dart
var res = await showDialog<Future>(
      context: context,
      barrierDismissible: false, // 是否点击遮罩关闭
      useRootNavigator: true, //指定context 最近或最远的根目录
      useSafeArea: true, // 是否开启安区区域
      barrierColor:Colors.black54,  // 遮罩背景颜色
      routeSettings:''
      builder: (BuildContext context) {
      	 BuildContext iscontext = context; // 父级的
         bool isShowPhone = true;
        return StatefulBuilder(builder: (context, state // 自己的setstate) {
        	return  ElevatedButton(
                       onPressed: () {
                         Navigator.of(context).pop(false); // 返回值
                       },
                       child: Text('close'),
               );
        }
      }
```

### AlertDialog

可设置按钮 弹窗

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

```使用
  showDialog(
              context: context,
              builder: (BuildContext context) {
                return AlertDialog(
                  title: Text('title'),
                  content: Text('content'),
                  actions: [
                    TextButton(onPressed: () {}, child: Text('取消')),
                    TextButton(onPressed: () {}, child: Text('确定')),
                  ],
                );
              },
            );
```

### SimpleDialog 

```dart
 showDialog(
              context: context,
              builder: (BuildContext context) {
                return SimpleDialog(
                  semanticLabel: '22',
                  title: Text('title'),
                  children: [
                    TextButton(onPressed: () {}, child: Text('内容 多了可滚动')),
                  ],
                );
              },
            );
```

## Overlay

```
//获取实例
OverlayState overlayState = Overlay.of(_context);
//创建OverlayEntry
OverlayEntry overlayEntry = OverlayEntry(builder);
//显示到屏幕上
overlayState.insert(_overlayEntry);
//移除屏幕
overlayEntry.remove();
```



## showGeneralDialog

自定义弹窗

```dart
 showGeneralDialog(
              context: context,
              barrierDismissible: true,
              barrierLabel: '2',
     			//动画时常
              transitionDuration: Duration(milliseconds: 200),
     			// 进出动画 默认动画是渐隐渐显 以下为缩放
              transitionBuilder: (BuildContext context,
                  Animation<double> animation,
                  Animation<double> secondaryAnimation,
                  Widget child) {
                return ScaleTransition(scale: animation, child: child);
              },
              pageBuilder: (BuildContext context, Animation<double> animation,
                  Animation<double> secondaryAnimation) {
                return Center(
                  child: Container(
                    height: 300,
                    width: 250,
                    color: Colors.lightGreenAccent,
                    child: Text('oo'),
                  ),
                );
              },
            );
```

## showAboutDialog

showAboutDialog 为function;

aboutDialog 为widget;

```dart
都默认有两个按钮
	- 产看许可 // 点击进入 showLicensePage
	- 关闭

```



### AboutDialog

```dart
 showAboutDialog(
              context: context,
              applicationIcon: Icon(Icons.home), // 应用程序的图标
              applicationName: '应用程序名称', //应用程序名称
              applicationVersion: '0.0.0',
              applicationLegalese: '著作权（copyright）的提示',
              children: <Widget>[Text('内容')],
            );
```

```dart
源码
void showAboutDialog({
  required BuildContext context,
  String? applicationName,
  String? applicationVersion,
  Widget? applicationIcon,
  String? applicationLegalese,
  List<Widget>? children,
  bool useRootNavigator = true,
  RouteSettings? routeSettings,
}) {
  assert(context != null);
  assert(useRootNavigator != null);
  showDialog<void>(
    context: context,
    useRootNavigator: useRootNavigator,
    builder: (BuildContext context) {
      return AboutDialog(
        applicationName: applicationName,
        applicationVersion: applicationVersion,
        applicationIcon: applicationIcon,
        applicationLegalese: applicationLegalese,
        children: children,
      );
    },
    routeSettings: routeSettings,
  );
}
```

## showModalBottomSheet

```
showModalBottomSheet(
                context: context,
                isScrollControlled: true,
                builder: (BuildContext context) {
                  return Text('22');
                });
```



## showCupertinoDialog

苹果风格 AlertDialog

```dart
showCupertinoDialog(
                context: context,
                builder: (context) {
                  return CupertinoAlertDialog(
                    title: Text('title'),
                    content: Text('body'),
                    actions: [
                      TextButton(onPressed: () {}, child: Text('取消')),
                      TextButton(onPressed: () {}, child: Text('确定')),
                    ],
                  );
                },
              );
```

## showCupertinoModalPopup

底部弹出按钮

```dart
   showCupertinoModalPopup(
              context: context,
              builder: (BuildContext context) {
                return CupertinoActionSheet(
                  title: Text('提示'),
                  message: Text('是否要删除当前项？'),
                  actions: <Widget>[
                    CupertinoActionSheetAction(
                      child: Text('删除'),
                      onPressed: () {},
                      isDefaultAction: true,
                    ),
                    CupertinoActionSheetAction(
                      child: Text('取消'),
                      onPressed: () {},
                      isDestructiveAction: true,
                    ),
                  ],
                );
              },
            );
```

## CupertinoPicker

```dart
底部picker
CupertinoPicker(
      itemExtent: 40,
      onSelectedItemChanged: (position){
        print('The position is ${names[position]}');
      }, children: names.map((e){
        return Text(e);
  }).toList());
```



## showMenu

```dart
showMenu(
              context: context,
              position: RelativeRect.fill,
              items: <PopupMenuEntry>[
                PopupMenuItem(child: Text('语文')),
                PopupMenuDivider(),
                CheckedPopupMenuItem(
                  child: Text('数学'),
                  checked: true,
                ),
                PopupMenuDivider(),
                PopupMenuItem(child: Text('英语')),
              ],
            );
```

## showSearch

搜索 需要重新方法

```dart
showSearch(context: context, delegate: CustomSearchDelegate());

class CustomSearchDelegate extends SearchDelegate<String>{
  @override
  List<Widget> buildActions(BuildContext context) {
    return null;
  }

  @override
  Widget buildLeading(BuildContext context) {
    return null;
  }

  @override
  Widget buildResults(BuildContext context) {
    return null;
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    return null;
  }

}
```





---

# Loading

## CupertinoActivityIndicator

苹果风格loding

```

CupertinoActivityIndicator(
                            radius: 20, // 大小
                            animating: true, // 动画
                          );
```

## CircularProgressIndicator

```dart
const CircularProgressIndicator({
    Key key,
    // [0，1] 的浮点数，用来表示进度多少，0 表示无进度，1 表示进度已完成。
    // 如果 value 为 null，则显示一个动画，否则显示一个定值 
    double value,
    // 进度条背景颜色，默认颜色 ThemeData.backgroundColor
    Color backgroundColor,
    // Animation 类型的参数，用来设定进度值的颜色，默认颜色 ThemeData.accentColor，如果想自定义颜色，
    // 则使用 AlwaysStoppedAnimation<Color>(color)
    Animation<Color> valueColor,
    // 用于画圆的线的宽度，默认为 4
    this.strokeWidth = 4.0,
    String semanticsLabel,
    String semanticsValue,
  })
```



# Toast

## 	SnackBar

底部弹出

![image-20210422001730396](/image/flutter/image-20210422001730396.png)

```
  Scaffold.of(context).showSnackBar(SnackBar(
                content: Text('我是消息：$index'),
              ));
              
```



## ExpansionPaneList

```
搜索下拉
   ExpansionPanelList(
          expansionCallback: (int panelIndex, bool isExpanded) {
            print('$panelIndex');
            setState(() {
              _isExpanded = !_isExpanded;
            });
          },
          expandedHeaderPadding:EdgeInsets.all(16),
          children: [
            ExpansionPanel(
              isExpanded: _isExpanded,
              body: Text('body'),
              headerBuilder: (BuildContext context, bool isExpanded) {
                print('$isExpanded');
                return Text('headerBuilder');
              },
            ),

          ],
        ),
```

# Tag



## chip

```
圆形小标签
 this.avatar,
    required this.label,
    this.labelStyle,
    this.labelPadding,
    this.deleteIcon,
    this.onDeleted,
    this.deleteIconColor,
    this.useDeleteButtonTooltip = true,
    this.deleteButtonTooltipMessage,
    this.side,
    this.shape,
    this.clipBehavior = Clip.none,
    this.focusNode,
    this.autofocus = false,
    this.backgroundColor,
    this.padding,
    this.visualDensity,
    this.materialTapTargetSize,
    this.elevation,
    this.shadowColor,
```

## ActionChip

```

```

## FilterChip

```
有两个状态
```

## ChoiceChip

```
 类似单选
 ChoiceChip(label: Text('label'), selected: true)
```



## Divider

下划线

```
  Divider(
          height:2,
          color: Colors.red,
        ),
```

# Table

## DataTable

```dart
   DataTable(
        sortColumnIndex:0, // 排序栏下标
    	sortAscending:true,// 正序
          columns: [
            DataColumn(label: Text('1')),
            DataColumn(label: Text('2')),
          ],
          rows: [
            DataRow(
              cells: [
                DataCell(Text('11')),
                DataCell(Text('12')),
              ],
            ),
            DataRow(
              cells: [
                DataCell(Text('11')),
                DataCell(Text('12')),
              ],
            )
          ],
        ),
```

## PaginatedDataTable

有分页器表格

```
 Key? key,
    this.header,
    this.actions,
    required this.columns,
    this.sortColumnIndex,
    this.sortAscending = true,
    this.onSelectAll,
    this.dataRowHeight = kMinInteractiveDimension,
    this.headingRowHeight = 56.0,
    this.horizontalMargin = 24.0,
    this.columnSpacing = 56.0,
    this.showCheckboxColumn = true,
    this.initialFirstRowIndex = 0,
    this.onPageChanged,
    this.rowsPerPage = defaultRowsPerPage,
    this.availableRowsPerPage = const <int>[defaultRowsPerPage, defaultRowsPerPage * 2, defaultRowsPerPage * 5, defaultRowsPerPage * 10],
    this.onRowsPerPageChanged,
    this.dragStartBehavior = DragStartBehavior.start,
```



# Visibility

## Offstage

```
不可保持状态
```



## Visibility

```bash
可保持状态
```



# other

## Card

```

```

## Steppar

```
步骤器
```

## Divider

线条

```
Divider
```



# InteractiveView

可缩放视图组建

# image

## 	BoxFit

```
BoxFit.fill:充满父容器。

BoxFit.contain:尽可能大，保持图片分辨率。

BoxFit.cover:充满容器，可能会被截断。

BoxFit.none:图片居中显示，不改变分大小，可能会被截断。

BoxFit.fitWidth:图片填满宽度，高度可能会被截断

BoxFit.fitHeight:图片填满高度，宽度可能会被截断

BoxFit.scaleDown:图片可以完整显示，但是可能不能填充满。
```



# ValueNotifier

## 基本用法

```dart
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
              builder: _buildWithValue,
              valueListenable: _counter,
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

Widget _buildWithValue(BuildContext context, int value, Widget child) {
   return Text(
     '$value',
     style: Theme.of(context).textTheme.headline4,
   );
}

```

## 自定义监听

```
定了监听类
class UserNotifier extends ValueNotifier<UserInfo> {

  UserNotifier(UserInfo userInfo): super(userInfo);

  void setName(String name) {
    ///赋值 这里需要注意的是 如果没有给 ValueNotifier 赋值 UserInfo 对象时
    /// value 会出现空指针异常
    value.name =name;
    ///通知更新
    notifyListeners();
  }

}

```

```dart
model

class UserInfo {
  String name;
  int age ;
}
```

```dart
使用

UserNotifier _testUserNotifier = UserNotifier(UserInfo(name: "", age: 0));

 ///第二步 定义
 Widget buildUserListenableBuilder() {
   return ValueListenableBuilder(
     ///数据发生变化时回调
     builder: (context, value, child) {
       return Text("姓名是：${value.name}  年龄是: ${value.age}");
     },
     ///监听的数据
     valueListenable: _testUserNotifier,
   );
 }


void testUserFunction() {
   _testUserNotifier.setName("李四");
}
```

## 数组更新

```dart
class UserUpdate<T> extends ValueNotifier<T> {
  UserUpdate(T c) : super(c);

  void setUpdate(a) {
    /// 内容部自带变量 
    print('---${value}');
    notifyListeners();
  }
}
```

```dart
 UserUpdate<List<int>>  _userUpdate;

  List<int> a = [5, 6];

  @override
  void initState() {
    super.initState();
    _userUpdate = UserUpdate<List<int>>(a);  // 绑定依赖
  }

	ValueListenableBuilder<List>(
          builder:
        _buildWithValue(BuildContext context, List value, Widget child){ 
               return Text('${value.toString()}';
  )}
          valueListenable: _userUpdate,
),
```

## ChangeNotifier

​	监听数据变化, 多用于实现controller

```dart
class Counter extends ChangeNotifier{//这里也可以使用with来进行实现
  int _count = 0;//数值计算

  int get count => _count;

  addCount(){
    _count++;
    notifyListeners();
  }

}

/// 使用
Counter _counter = new Counter();
_counter.addListener(() {
  //数值改变的监听
  print('YM------>新数值:${_counter.count}');
});

 _counter.addCount();

```

## Callback



```dart
ValueChanged 
typedef ValueChanged<T> = void Function(T value);

VoidCallback

typedef ValueSetter<T> = void Function(T value);

typedef ValueGetter<T> = T Function();

typedef AsyncCallback = Future<void> Function();

typedef AsyncValueSetter<T> = Future<void> Function(T value);

typedef AsyncValueGetter<T> = Future<T> Function();
```



# animations

https://api.flutter.dev/flutter/animation/animation-library.html

https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html

制作动画网站

```
https://rive.app
```



## AnimationController

### 属性

`AnimationController` 构造函数值中可以配置如下属性：

| 参数              | 类型              | 默认值                                             | 含义           |
| ----------------- | ----------------- | -------------------------------------------------- | -------------- |
| value             | double            | null                                               | 动画器初始值   |
| duration          | Duration          | null                                               | 动画器时长     |
| reverseDuration   | Duration          | null                                               | 动画器反向时长 |
| lowerBound        | double            | 0.0                                                | 动画器下界     |
| upperBound        | double            | 1.0                                                | 动画器上界     |
| animationBehavior | AnimationBehavior | normal *会减少其时长*<br />preserve *会保持其行为* | 动画器行为     |
| vsync             | TickerProvider    | required                                           | Ticker提供器   |

### 方法：

| 方法名              | 作用           |                                                              |
| ------------------- | -------------- | ------------------------------------------------------------ |
| forward             | 开始动画       |                                                              |
| reverse             | 反向启动动画   |                                                              |
| reset               | 重置至初始值   |                                                              |
| stop                | 停止           | {bool canceled}                                              |
| repeat              | 反复动画       | {   double? min,   double? max,   bool reverse = **false**,   Duration? period  } |
| fling               | 猛的达到最大值 |                                                              |
| fling               | 猛的达到最大值 |                                                              |
| animateBack(double) | 动画至某个值   | state = AnimationStatus.dismissed                            |
| animateTo(double)   |                | state=AnimationStatus.completed                              |
| dispose             | 销毁           |                                                              |

```dart
enum AnimationStatus {
  /// The animation is stopped at the beginning.
  /// 动画结束是数值在下界
  dismissed,

  /// The animation is running from beginning to end.
  /// 动画开始从 [下界-->上界] 运动 (即正向)
  forward,

  /// The animation is running backwards, from end to beginning.
  /// 动画开始从 [上界-->下界 运动 (即反向)
  reverse,

  /// The animation is stopped at the end.
  /// 动画结束是数值在上界
  completed,
}

```

### fling

```dart
{
 double velocity = 1.0, // 速度
 SpringDescription? springDescription, 
 AnimationBehavior? animationBehavior
}

const SpringDescription({
    required this.mass, // 质量
    required this.stiffness, // 刚度
    required this.damping, // 阻尼
  }); 
默认：
final SpringDescription _kFlingSpringDescription = SpringDescription.withDampingRatio(
  mass: 1.0,
  stiffness: 500.0,
  ratio: 1.0,
);
```

### addStatusListener

```dart
..addStatusListener(_listenStatus);
void _listenStatus(AnimationStatus status) {
  print(status);
}
```

## AnimatedWidget

### AnimationBuilder

```dart
with SingleTickerProviderStateMixin 

AnimationController _animationController;

initState(){
	_animationController = AnimationController(
		duration:Duration(seconds:4),
		vsync:thuis
	);
}

AnimationBuilder(
	animation:_animationController,
	builder:(context,child){
		return Text('dd',style:TextStyle(
			fontSize:_animationController.value, // 0.0 - 1.0
		),
		),
	}
)
```

### DefaultTextStyleTransition

```

```

### PositionedTransition

```
https://api.flutter-io.cn/flutter/widgets/PositionedTransition-class.html
```

### RelativePositionedTransition

```dart
RelativePositionedTransition(
              size: biggest,
              rect: RectTween(
                begin: const Rect.fromLTWH(0, 0, bigLogo, bigLogo),
                end: Rect.fromLTWH(biggest.width - smallLogo,
                    biggest.height - smallLogo, smallLogo, smallLogo),
              ).animate(CurvedAnimation(
                parent: _controller,
                curve: Curves.elasticInOut,
              )) as Animation<Rect>,
              child: const Padding(
                  padding: EdgeInsets.all(8), child: FlutterLogo()),
            ),
```

### RotationTransition

```

```

### FadeTransition

```

```

### AnimatedModalBarrier

```

```



### ScaleTransition

```dart
class AnimDemo extends StatefulWidget {
  @override
  _AnimDemoState createState() => _AnimDemoState();
}

class _AnimDemoState extends State<AnimDemo>
    with SingleTickerProviderStateMixin {
  AnimationController _ctrl;
  Animation<double> animation;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    );
    animation = Tween<double>(begin: 0.3, end: 1.0)
        .chain(CurveTween(curve: Curves.ease))
        .animate(_ctrl);
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: () => _ctrl.forward(from: 0),
        child: Container(
          color: Colors.grey.withAlpha(22),
          width: 100,
          height: 100,
          child: ScaleTransition(
            scale: animation,
            child: _buildChild(),
          ),
        ));
  }

  Widget _buildChild() => const Icon(
        Icons.camera_outlined,
        color: Colors.green,
        size: 60,
      );
}
```

### SlideTransition 平移变换

```
 _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    );
		// 初始化 Offset 动画器
    animation = Tween<Offset>(
      begin: Offset.zero,
      end: Offset(0.5, 0.5),
    ).animate(_ctrl);
    
SlideTransition(
    textDirection: TextDirection.rtl,
		position: animation,
		child: _buildChild(),
),
```

### AlignTransition 对齐动画

```
  _ctrl = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    );

    animation = AlignmentTween(
      begin: Alignment.center,
      end: Alignment.bottomRight,
    ).chain(CurveTween(curve: Curves.ease)).animate(_ctrl);
```

### DecoratedBoxTransition 装饰动画

```dart
Animation<Decoration> animation;

animation = DecorationTween(
    begin: const BoxDecoration(
        color: Colors.deepPurple,
        borderRadius: BorderRadius.all(Radius.circular(30)),
        boxShadow: [
          BoxShadow(
              offset: Offset(1, 1),
              color: Colors.purple,
              blurRadius: 5,
              spreadRadius: 2)
        ]),
    end: const BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.all(Radius.circular(10)),
        boxShadow: [
          BoxShadow(
              offset: Offset(1, 1),
              color: Colors.blue,
              blurRadius: 10,
              spreadRadius: 0)
        ])).animate(_ctrl);

```

## ImplicitlyAnimatedWidget 

https://api.flutter-io.cn/flutter/widgets/ImplicitlyAnimatedWidget-class.html

隐式动画

### AnimatedOpacity 透明度动画

```

```

### AnimatedAlign

```
AnimatedAlign(
            alignment: Alignment.bottomLeft,
            duration: Duration(seconds: 1),
            child: Container(
              height: 100,
              width: 100,
              color: Colors.red,
            ),
          ),
```

### AnimatedContainer

```

```

### RotationTransition

```

```

### AnimatedAlign

```

```

### AnimatedDefaultTextStyle

```

```

### AnimatedOpacity

```

```

### AnimatedPadding

```

```



### TweenAnimationBuilder 渐变动画器

```dart
TweenAnimationBuilder<Color>(
        tween: ColorTween(begin: Colors.blue, end: _selected?color1:color2),
        duration: Duration(seconds: 1),
        builder: (_, Color color, Widget child) => Container(
          width: 60,
          height: 60,
          child: child,
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(8),
          ),
        ),
        child: _buildChild(),
      );
```

### AnimatedPhysicalModel

```
   AnimatedPhysicalModel(
            borderRadius: BorderRadius.circular(_animated ? 20 : 10),
            shape: _animated ? BoxShape.rectangle : BoxShape.circle,
            color: _animated ? Colors.blue : Colors.red,
            elevation: _animated ? 18 : 8,
            shadowColor: !_animated ? Colors.blue : Colors.red,
            child: Container(
              height: 100,
              width: 100,
            ),
            duration: Duration(seconds: 1),
          ),
     
```

### AnimatedTheme

```
  AnimatedTheme(
            duration: Duration(seconds: 5),
            data: ThemeData(
              primarySwatch: Colors.yellow,
              buttonColor: Colors.red,
              cardColor: _myColor,
            ),
            child: InkWell(
              child: Column(
                children: [
                  Card(
                    child: Container(
                      width: 200,
                      height: 200,
                      child: Text("请点方块"),
                    ),
                  ),
                ],
              ),
              onTap: () {
                setState(() {
                  _myColor = _myColor == Colors.red ? Colors.blue : Colors.red;
                  print("object");
                });
              },
            ),
          ),
```

### AnimatedSize

```

```

### AnimatedSwitcher

```

```

### AnimatedCrossFade 交叉淡入 

```dart
   AnimatedCrossFade(
              duration: const Duration(seconds: 3),
              firstChild: const FlutterLogo(
                  style: FlutterLogoStyle.horizontal, size: 100.0),
              secondChild: const FlutterLogo(
                  style: FlutterLogoStyle.stacked, size: 200.0),
              crossFadeState: _animated
                  ? CrossFadeState.showFirst
                  : CrossFadeState.showSecond,
              layoutBuilder:
                  (topChild, topChildKey, bottomChild, bottomChildKey) {
                return Stack(
                  // overflow: Overflow.visible,
                  alignment: Alignment.center,
                  children: <Widget>[
                    Positioned(
                      key: topChildKey,
                      child: topChild,
                    ),
                    Positioned(
                      key: bottomChildKey,
                      top: 0,
                      child: bottomChild,
                    ),
                  ],
                );
              })
```

### AnimatedPositionedDirectional

```

```

### AnimatedPositioned

```

```



## Hero

```dart
 Hero(
      tag: 'tag1',
      child: Image.asset(
            'assets/1.png',
            width: 100,
            height: 100,
 )),
```

# Curves

```
https://api.flutter.dev/flutter/animation/Curves-class.html

flare_flutter
```

```
https://blog.csdn.net/qq_17766199/article/details/95632571
```

```dart
class AnimationRoute extends StatefulWidget {
  @override
  AnimationRouteState createState() => AnimationRouteState();
}
 
class AnimationRouteState extends State<AnimationRoute> with SingleTickerProviderStateMixin {
 
  Animation<double> animation;
  AnimationController controller;
 
  initState() {
    super.initState();
    // Controller设置动画时长
    // vsync设置一个TickerProvider，当前State 混合了SingleTickerProviderStateMixin就是一个TickerProvider
    controller = AnimationController(
        duration: Duration(seconds: 5),
        vsync: this //
    );
    // 设置动画曲线，开始快慢，先加速后减速
    animation=CurvedAnimation(parent: controller, curve: Curves.easeInOut);
    // Tween设置动画的区间值，animate()方法传入一个Animation，AnimationController继承Animation
    animation = new Tween(begin: 100.0, end: 500.0).animate(animation)
      // addListener监听动画每一帧的回调，这个调用setState()刷新UI
      ..addListener(() {
        setState(()=>{});
      });
    //启动动画(正向执行)
    controller.forward();
  }
 
  @override
  Widget build(BuildContext context) {
    return Center(
      // 这里显示一个方形区域，随着动画执行不断变大
      child: Container(
        color: Colors.green,
        width: animation.value,
        height: animation.value,
      ),
    );
  }
 
  @override
  void dispose() {
    // 释放资源
    controller.dispose();
    super.dispose();
  }
}
 
 
```

## 

# Tween

AnimationController调用Tween

```dart
_animation = _controller.drive(Tween(begin: 100.0, end: 200.0);

_animation = _controller.drive(CurveTween(curve: Curves.linear)).drive(Tween(begin: 100.0, end: 200.0);

```

Tween调用AnimationController

```
 _animation = Tween(begin: 100.0, end: 200.0).animate(_controller);
 
 _animation = Tween(begin: 100.0, end: 200.0)
    .chain(CurveTween(curve: Curves.linear))
    .animate(_controller);
```



## 方法：

chain：

```dart
 intAnim = IntTween(begin: 0, end: 200)
        .chain(CurveTween(curve: Curves.easeIn))
        .animate(_ctrl);
```

animate：

```

```

evaluate：

```
获取animation.value 对应的 de tween 的值
```

transform：

```
Tween.transform(0.1);
转换为tween 对应的值
```



## 使用：

```dart

late AnimationController _ctrl;
late Animation<int> intAnim;

_ctrl = AnimationController(
      vsync: this,
      value: 0,
      lowerBound: 0,
      animationBehavior: AnimationBehavior.preserve,
      reverseDuration: Duration(milliseconds: 5000),
      duration: animDuration,
    )
   
    intAnim = IntTween(begin: 0, end: 200).animate(_ctrl);

child: AnimatedBuilder(
                  animation: _ctrl,
                  builder: (context, w) {
                    return Container(
                      width: intAnim.value.toDouble(),
                      height: intAnim.value.toDouble(),
                      decoration: const BoxDecoration(
                          color: Colors.blue, shape: BoxShape.circle),
                      alignment: Alignment.center,
                      child: Text('${intAnim.value}'),
                    );
                  },
                ),
```

## IntTween

```dart
 Animation<int> intAnim = IntTween(begin: 0,end: 200).animate(controller);
```

## ColorTween

```dart
Animation<Color> colorAnim = ColorTween(begin: Colors.grey,end: Colors.red).animate(controller);
```

## ReverseTween

```dart
Animation<Color> colorAnim = ReverseTween(begin: Colors.grey,end: Colors.red).animate(controller);
```

## SizeTween

```

```

## RectTween

```

```

## StepTween

```dart
  Animation<int> stepAnim = StepTween(begin: _stepNum,end: 0).animate(controller);
```

## ConstantTween

```dart
Animation<int> constantAnim = ConstantTween<int>(5).animate(controller);
```



## TweenSequence

```dart
一个红色的盒子，动画时长为6秒，前40%的时间大小从100->200，然后保持200不变20%的时间，最后40%的时间大小从200->300，这种效果通过TweenSequence实现，代码如下：

_animation = TweenSequence([
  TweenSequenceItem(
      tween: Tween(begin: 100.0, end: 200.0)
          .chain(CurveTween(curve: Curves.easeIn)),
      weight: 40),
  TweenSequenceItem(tween: ConstantTween<double>(200.0), weight: 20),
  TweenSequenceItem(tween: Tween(begin: 200.0, end: 300.0), weight: 40),
]).animate(_animationController);
```

## TweenAnimationBuilder

```dart
TweenAnimationBuilder(
	duration:Duration(seconds:1),
	tween:Tween(begin:0.0,end:1.0),
	builder:(context,tween,child){
		return Text('dd',style:TextStyle(
			fontSize:tween,
		),
		),
	}
)
```



# ScrollPhysics

```dart
https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html

https://cloud.tencent.com/developer/article/1516957	

https://cloud.tencent.com/developer/article/1516957
```

```dart
Scroll view中:

BouncingScrollPhysics ：允许滚动超出边界，但之后内容会反弹回来。
ClampingScrollPhysics ： 防止滚动超出边界，夹住 。
AlwaysScrollableScrollPhysics ：始终响应用户的滚动。 
NeverScrollableScrollPhysics ：不响应用户的滚动。

FixedExtentScrollPhysics // ListWheelScrollView 中回弹 匹配
PageScrollPhysics // 滚动 只会对齐顶部或底部
RangeMaintainingScrollPhysics

BouncingScrollPhysics
```



# findRenderObject

```dart
1.首先先需要对控件进行渲染

初始化GlobalKey ：GlobalKey anchorKey = GlobalKey();

2.在需要测量的控件的下面添加key：

child: Text("点击弹出悬浮窗",
  style: TextStyle(fontSize: 20),
  key: anchorKey
),
3.获取控件的坐标：

RenderBox renderBox = anchorKey.currentContext.findRenderObject();
var offset =  renderBox.localToGlobal(Offset.zero);
控件的横坐标：offset.dx

控件的纵坐标：offset.dy

如果想获得控件正下方的坐标：

 RenderBox renderBox = anchorKey.currentContext.findRenderObject();
 var offset =  renderBox.localToGlobal(Offset(0.0, renderBox.size.height));
   控件下方的横坐标：offset.dx

   控件下方的纵坐标：offset.dy
       
       
  
 translation = object?.getTransformTo(null)?.getTranslation();

 translation.y 
```

# 约束盒子

紧元素：大小为固定值； (w=200.0, h=200.0) ；

松原生：大小在一个范围内；(0.0<=w<=411.4, 0.0<=h<=692.6) ；

```dart
https://www.cnblogs.com/holy-loki/p/9735056.html
```



## SizedBox

```
紧元素 设置具体尺寸
```



```

```



**ConstrainedBox(限定最大最小宽高布局)**

**LimitedBox(限定最大宽高布局)**

**AspectRatio(调整宽高比)**

**FractionallySizedBox(百分比布局)**

### SizedBox(设置具体尺寸)

# ClipPath

## ClipPath

```dart
 ClipPath(
          //定义裁切路径
          clipper: BackgroundClipper(),
          child: buildContainer(context),
        ),
```

## CustomClipper

```dart
class BackgroundClipper extends CustomClipper\<Rect|| Path || RRect \> {
  @override
  getClip(Size size) {
    double roundnessFactor = 50.0;
    Path path = Path();

    //移动到A点
    path.moveTo(0, size.height * 0.33);
    //画直线到B点 同时也充当 下一个二阶贝塞尔曲线 的起点
    path.lineTo(0, size.height - roundnessFactor);

    //二阶贝塞尔曲线 只有一个控制点
    // 控制点 C (0, size.height)
    // 终点 D (roundnessFactor, size.height)
    path.quadraticBezierTo(0, size.height, roundnessFactor, size.height);

    //二阶贝塞尔曲线 只有一个控制点
    //画直线到 E点 同时也充当 二阶贝塞尔曲线 的起点
    path.lineTo(size.width - roundnessFactor, size.height);
    // 控制点 F (size.width, size.height)
    // 终点 G (size.width, size.height - roundnessFactor)
    path.quadraticBezierTo(
        size.width, size.height, size.width, size.height - roundnessFactor);

    //二阶贝塞尔曲线 只有一个控制点
    //画直线到 H 点 同时也充当 二阶贝塞尔曲线 的起点
    path.lineTo(size.width, roundnessFactor * 2);
    // 控制点 M 与 终点 K
    path.quadraticBezierTo(size.width - 10, roundnessFactor,
        size.width - roundnessFactor * 1.5, roundnessFactor * 1.5);

    //二阶贝塞尔曲线 只有一个控制点
    //画直线到 T点 同时也充当 二阶贝塞尔曲线 的起点
    path.lineTo(
        roundnessFactor * 0.6, size.height * 0.33 - roundnessFactor * 0.3);
    //控制点 W Z
    path.quadraticBezierTo(
        0, size.height * 0.33, 0, size.height * 0.33 + roundnessFactor);
    Rect rect =
        Rect.fromCenter(center: Offset(50, 50), width: 100, height: 100);
    return rect || path;
  }

  @override
  bool shouldReclip(covariant CustomClipper oldClipper) {
    return true;
  }
}
```

## CustomPaint

```dart
CustomPaint(
   painter: PaintCustom(),
   size: Size(
            1.sw,
             200.w + kToolbarHeight,
   ),
)；
```

## CustomPainter

```dart
class PaintCustom extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.blue
      ..style = PaintingStyle.fill
      ..strokeWidth = 1;

    Path path = Path();
    path.moveTo(0, 0);
    path.lineTo(size.width, 0);
    path.lineTo(size.width, size.height - 56);

    path.cubicTo(
      size.width,
      size.height - 56,
      size.width / 2,
      size.height + 20,
      0,
      size.height - 56,
    );

    path.lineTo(0, size.height - 56);

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}
```



## Paint

### 属性

| 属性          | 类型          | 说明                                                         |
| :------------ | :------------ | :----------------------------------------------------------- |
| isAntiAlias   | bool          | 是否开启抗锯齿，开启抗锯齿能够是边缘平滑，当然也更消耗系统资源 |
| color         | Color         | 颜色                                                         |
| colorFilter   | ColorFilter   | 会对颜色进行变换                                             |
| filterQuality | FilterQuality | 设置绘制的图像质量                                           |
| invertColors  | bool          | 是否使用反向颜色。绘制图片时也能够反转图片的颜色             |
| maskFilter    | MaskFilter    | 设置遮罩效果。比如高斯模糊                                   |
| shader        | Shader        | 渐变颜色。会覆盖color                                        |
| strokeCap     | StrokeCap     | 设置绘制形状的边缘风格。如圆角、方形等                       |
| strokeJoin    | StrokeJoin    | 设置两个绘制形状衔接处的风格。如圆角、方形等                 |
| strokeWidth   | double        | 画笔的宽度                                                   |
| style         | PaintingStyle | 填充方式。PaintingStyle.fill-充满；PaintingStyle.stroke-空心 |
| blendMode     | BlendMode     | 像素混合模式。当画一个shape或者合成图层的时候会生效。        |

### blendMode

```dart
https://api.flutter.dev/flutter/dart-ui/BlendMode-class.html
```



## Path

### Path的常用方法

| 方法名         | 作用                                     |
| -------------- | ---------------------------------------- |
| moveTo         | 将路径起始点移动到指定的位置             |
| relativeMoveTo | 相对于当前位置移动到                     |
| lineTo         | 从当前位置连接指定点                     |
| relativeLineTo | 相对当前位置连接到                       |
| arcTo          | 曲线。rect 画圆弧                        |
| conicTo        | 塞曲线 3点画圆弧                         |
| add**          | 添加其他图形，如addArc，在路径是添加圆弧 |
| contains       | 路径上是否包括某点                       |
| transfor       | 给路径做matrix4变换                      |
| combine        | 结合两个路径                             |
| close          | 关闭路径，连接路径的起始点               |
| reset          | 重置路径，恢复到默认状态                 |

### cubicTo

贝塞尔曲线

```dart
void cubicTo(double x1, double y1, double x2, double y2, double x3, double y3);
							左													圆弧最高点										右

```



## canvas

### drawPath

```dart
Path path = Path();
path.moveTo(100, 100);
path.lineTo(200, 200);
path.lineTo(250, 200);
path.lineTo(200, 250);
canvas.drawPath(path, paint);
```



### drawLine

```
canvas.drawLine(Offset(10, 10), Offset(250, 250), paint);

```

### drawPoints

绘制点

```dart
drawPoints(PointMode pointMode, List points, Paint paint)

///PointMode的枚举类型有三个，points（点），lines（线，隔点连接），polygon（线，相邻连接)
```

### drawCircle

```dart
drawCircle(Offset c, double radius, Paint paint)
```

### drawOval

绘制椭圆

```dart
drawOval(Rect rect, Paint paint)
  
  //使用左上和右下角坐标来确定矩形的大小和位置,椭圆是在这个矩形之中内切的
    Rect rect1 = Rect.fromPoints(Offset(150.0, 200.0), Offset(300.0, 250.0));
    canvas.drawOval(rect1, _paint);

```



### drawArc

绘制圆弧

```dart
void drawArc(Rect rect, double startAngle, double sweepAngle, bool useCenter, Paint paint);

startAngle:开始位置；
sweepAngle：结束位置；pi；
useCenter：true：连接圆心；

Rect rect2 = Rect.fromCircle(
        center: Offset(rect.width / 2, rect.height / 2),
        radius: rect.height / 2);
    canvas.drawArc(rect2, pi, pi / 2, false, paint);
```

### drawColor

```dart
void drawColor(Color color, BlendMode blendMode);
```

### drawImage

```dart
void drawImage(Image image, Offset p, Paint paint)
  
  
  
```

### drawParagraph

可以绘制文字效果与 **TextPainter** 效果相同；

文字段落 **Paragraph** 是 **dart.ui** 中的类，用构造器方式进行内容绑定；**ParagraphStyle** 用来设置文字的样式属性，包括文字位置/方向/字体粗细/文字样式/行数等；其中 **ellipsis** 用来设置内容超出范围截取时最后展示内容，可随意编辑；

```dart
ParagraphBuilder pb = ParagraphBuilder(ParagraphStyle(
  textAlign: TextAlign.center,
  fontWeight: FontWeight.w600,
  fontStyle: FontStyle.normal,
  fontSize: 18,
))
  ..pushStyle(ui.TextStyle(color: Colors.blue))
  ..addText(
      'Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。');
ParagraphConstraints pc = ParagraphConstraints(width: Screen.width - 60);
Paragraph paragraph = pb.build()..layout(pc);
canvas.drawParagraph(paragraph, Offset(30, 30));

pb = ParagraphBuilder(ParagraphStyle(
  fontStyle: FontStyle.normal,
  fontWeight: FontWeight.w300,
  fontSize: 18,
))
  ..pushStyle(ui.TextStyle(color: Colors.red))
  ..addText(
      'Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。');
pc = ParagraphConstraints(width: Screen.width - 60);
paragraph = pb.build()..layout(pc);
canvas.drawParagraph(paragraph, Offset(30, 180));

pb = ParagraphBuilder(ParagraphStyle(
  fontStyle: FontStyle.normal,
  fontSize: 18,
  maxLines: 3,
  ellipsis: '...',
))
  ..pushStyle(ui.TextStyle(color: Colors.green))
  ..addText(
      'Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。');
pc = ParagraphConstraints(width: Screen.width - 60);
paragraph = pb.build()..layout(pc);
canvas.drawParagraph(paragraph, Offset(30, 340));
```

### drawImageNine

```
canvas.drawImage(this.image, ui.Offset(60.0, 540.0), Paint());
canvas.drawImageNine(
    this.image,
    Rect.fromLTWH(0, 0, 120, 60),
    Rect.fromLTWH(
        60, 1020, image.width.toDouble() - 120, image.height.toDouble()),
    Paint());
```



### drawDRRect

绘制圆角矩形

```dart
drawRRect(RRect rrect, Paint paint)；
  
Rect rect = Rect.fromCircle(center: Offset(100.0, 150.0), radius: 50.0);
    //根据上面的矩形,构建一个圆角矩形
RRect rrect = RRect.fromRectAndRadius(rect, Radius.circular(20.0));
canvas.drawRRect(rrect, paint);
```

### drawRRect

绘制双圆角矩形

```dart
drawDRRect(RRect outer, RRect inner, Paint paint);
```

### drawShadow

```dart
canvas.drawShadow(
    Path()
      ..moveTo(30.0, 90.0)..lineTo(120.0, 90.0)
      ..lineTo(120.0, 120.0)..lineTo(30.0, 120.0),
    Colors.blue, 10, false);
```



### translate

```

```

### rotate

```

```

### skew

```dart
// 水平方向斜近 30 度，竖直方向不变
canvas.skew(0.6, 0);
```

### save

```
save/restore 保存/恢复
 save/savelayer 即保存当前画布，restore 即恢复当前画布，也可以理解为清空重新绘制；save/restore 可以多次，以栈的方式存储，可以通过进栈/出栈到当具体某一层；但是和尚测试时发现与 save/restore 需要成对出现，否则回报不匹配异常；
```



### scale

```javascript

```

## Rect

```dart
fromPoints(Offset a, Offset b)
//使用左上和右下角坐标来确定矩形的大小和位置

fromCircle({ Offset center, double radius })
//使用圆的圆心点坐标和半径和确定外切矩形的大小和位置

fromLTRB(double left, double top, double right, double bottom)
//使用矩形左边的X坐标、矩形顶部的Y坐标、矩形右边的X坐标、矩形底部的Y坐标来确定矩形的大小和位置

fromLTWH(double left, double top, double width, double height)
//使用矩形左边的X坐标、矩形顶部的Y坐标矩形的宽高来确定矩形的大小和位置
  
RRect.fromLTRBXY 前四个参数用来绘制矩形位置，剩余两个参数绘制固定 x/y 弧度；
RRect.fromLTRBR 前四个参数用来绘制矩形位置，最后一个参数绘制 Radius 弧度；
RRect.fromLTRBAndCorners 前四个参数用来绘制矩形位置，剩余四个可选择参数，根据需求设置四个角 Radius 弧度，可不同；
RRect.fromRectXY 第一个参数绘制矩形，可以用上面介绍的多种矩形绘制方式，剩余两个参数绘制固定 x/y 弧度；
RRect.fromRectAndRadius 第一个参数绘制矩形，可以用上面介绍的多种矩形绘制方式，最后一个参数绘制 Radius 弧度；
RRect.fromRectAndCorners第一个参数绘制矩形，可以用上面介绍的多种矩形绘制方式，剩余四个可选择参数，根据需求设置四个角 Radius 弧度，最为灵活。

```

## Clip
```
- [ClipRect](https://api.flutter.dev/flutter/widgets/ClipRect-class.html), which can be customized with a CustomClipper\Rect\.
- [ClipRRect](https://api.flutter.dev/flutter/widgets/ClipRRect-class.html), which can be customized with a CustomClipper\RRect\
- [ClipOval](https://api.flutter.dev/flutter/widgets/ClipOval-class.html), which can be customized with a CustomClipper\Rect\
- [ClipPath](https://api.flutter.dev/flutter/widgets/ClipPath-class.html), which can be customized with a CustomClipper\Path\
```
### ClipRect 

```dart
ClipRect({ Key? key, 
this.clipper, /// CustomClipper\<Rect\>?
this.clipBehavior = Clip.hardEdge, 
Widget? child });
```

### ClipRRect

```
裁剪圆角矩形
```

### ClipOval

```
裁剪圆形
```

### ClipPath

```
 const ClipPath({
    Key? key,
    this.clipper, // CustomClipper\<Path\>?
    this.clipBehavior = Clip.antiAlias,
    Widget? child,
  }) 
```



# ShapeBorder



```dart
class SimpleShapeBoder extends ShapeBorder{
  @override
  EdgeInsetsGeometry get dimensions => null;

  @override
  Path getInnerPath(Rect rect, {TextDirection textDirection}) {
    return null;
  }

  @override
  Path getOuterPath(Rect rect, {TextDirection textDirection}) {
    return null;
  }

  @override
  void paint(Canvas canvas, Rect rect, {TextDirection textDirection}) {
    // 这个方法就是实现具体绘制的方法
  }

  @override
  ShapeBorder scale(double t) {
    return null;
  }
  
}
```



## BoxBorder

```
Border
```



## OutlinedBorder

### RoundedRectangleBorder

### StadiumBorder

### CircleBorder

### ContinuousRectangleBorder

### BeveledRectangleBorder

### MaterialStateOutlinedBorder

## InputBorder

### OutlineInputBorder

### UnderlineInputBorder

# Futuer

## sync 

立即执行

```
scheduleMicrotask(()=>{});

Futuer.value(1).then((value)=>print(value));

```

## value

```

```

## Microtask



### microtask

```
Future.microtask(()=>print('1'))
```



## Event

### delayed

```
Future(()=>print('1'))
Future.delayed(Duration.zero,()=>print('1'));
Future.delayed(Duration(seconds:1),()=>print('1'))
```

## FutuerBuilder

```dart
FutuerBuilder(
	futuer:
	initialData:'初始值' // snapshot.data的初始值
	builder:(context,snapshot){
		snapshot.connectionState == ConnectionState.waiting 
		if(snapshot.connectionState == ConnectionState.done){
			if(snapshot.hasError){
				return '错误';
			}
			return  "正确";
		}
        
        throw "dd"
	}
)
```



```
FutuerBuilder(
	futuer:
	builder:(context,snapshot){
		if(snapshot.hasData){ return  ;}
		if(snapshot.hasErrow){return error;}
		return  'init';
	}
)
```

## Streambulder

```dart
Stream stream = StreamController();
Stream stream = StreamController.broacase();// 监听多个 广播

@override
void dispose(){
    controller.close();
    super.dispose();
}
stream.
stream.distinct(); //相同值 只会build 一次


Streambulder(
	stream:stream,
	builder:(context,snapshot){
		switch(snapshot.connetionState){
			case ConnectionState.none:
				return '没有数据';
				break;
			case ConnectionState.waiting:
				return '等待';
				break;
			case ConnectionState.active:
				if(snapshot.hasError){
					return ''
				}
				if(snapshot.hasdata){
					return ''
				}
				break;
			case ConnectionState.done:
				return '关闭';
				break;
}
	}
)
```

## Completer

实现Promise

```dart
Future openImagePicker () {
    Complete completer = new Completer();
    ImagePicker.singlePicker(
       context, 
       singleCallback: (data) {
         completer.complete(data);
       },
       failCallback:(err) {
         completer.catchError(err); 
       }
    );
     
    return completer.future;
}
```

# 导入导出

https://juejin.cn/post/6844904042133454855

```dart
//  定义库的名字
library global;

//  文件中引用的公共包
import 'dart:convert';
//  组成这个库的其他文件
part './model/User.dart';


///
//  指明与其关联的父库
part of global;

//  定义其他内容
class FriendInfo {
    ...
}
```

# 文件读写



packages **path_provider**

```

```



**path_provider**（版本：1.6.14）提供了8个方法获取不同的文件路径，目前 Flutter（Flutter 1.20.1 • channel stable ）只发布了正式版本的 Android 和 iOS，因此下面仅介绍 Android 和 iOS 平台的文件路径。

## getTemporaryDirectory

临时目录，适用于下载的缓存文件，此目录随时可以清除，此目录为应用程序私有目录，其他应用程序无法访问此目录。

Android 上对应`getCacheDir`。

iOS上对应`NSCachesDirectory`。

## getApplicationSupportDirectory

应用程序可以在其中放置应用程序支持文件的目录的路径。

将此文件用于您不想向用户公开的文件。 您的应用不应将此目录用于存放用户数据文件。

在iOS上，对应`NSApplicationSupportDirectory` ，如果此目录不存在，则会自动创建。 

在Android上，对应`getFilesDir`。

## getLibraryDirectory

应用程序可以在其中存储持久性文件，备份文件以及对用户不可见的文件的目录路径，例如storage.sqlite.db。

在Android上，此函数抛出[UnsupportedError]异常，没有等效项路径存在。

## getApplicationDocumentsDirectory

应用程序可能在其中放置用户生成的数据或应用程序无法重新创建的数据的目录路径。

在iOS上，对应`NSDocumentDirectory` API。 如果数据不是用户生成的，考虑使用[getApplicationSupportDirectory]。

在Android上，对应`getDataDirectory` API。 如果要让用户看到数据，请考虑改用[getExternalStorageDirectory]。

## getExternalStorageDirectory

应用程序可以访问顶级存储的目录的路径。由于此功能仅在Android上可用，因此应在发出此函数调用之前确定当前操作系统。

在iOS上，此功能会引发[UnsupportedError]异常，因为无法在应用程序的沙箱外部访问。

在Android上，对应`getExternalFilesDir（null）`。

## getExternalCacheDirectories

存储特定于应用程序的外部缓存数据的目录的路径。 这些路径通常位于外部存储（如单独的分区或SD卡）上。 电话可能具有多个可用的存储目录。 由于此功能仅在Android上可用，因此应在发出此函数调用之前确定当前操作系统。 在iOS上，此功能会抛出UnsupportedError，因为这是不可能的在应用程序的沙箱外部访问。

在Android上，对应`Context.getExternalCacheDirs（）`或API Level 低于19的`Context.getExternalCacheDir（）`。

## getExternalStorageDirectories

可以存储应用程序特定数据的目录的路径。 这些路径通常位于外部存储（如单独的分区或SD卡）上。 由于此功能仅在Android上可用，因此应在发出此函数调用之前确定当前操作系统。 在iOS上，此功能会抛出UnsupportedError，因为这是不可能的在应用程序的沙箱外部访问。 在Android上，对应`Context.getExternalFilesDirs（String type）`或API Level 低于19的`Context.getExternalFilesDir（String type）`。

## getDownloadsDirectory

存储下载文件的目录的路径，这通常仅与台式机操作系统有关。 在Android和iOS上，此函数将引发[UnsupportedError]异常。

## 目录结构

## android

###  **内部存储**

用于保存应用的私有文件，其他应用无法访问这些数据，创建的文件在此应用的包名目录下，没有 **root 权限** 的手机无法在手机的 **文件管理** 应用中看到此目录，



```dart
data
	｜__data
			｜__com.zhijia.top
						|__app_flutter 				// 对应 getApplicationDocumentsDirectory方法
						|		|__flutter_assets
						|		|__cache 					// 对应 getTemporaryDirectory 方法，用于缓存文件，此目录随时可能被系统清除。
  					|		|__dbName 				// 使用 sqlite 的默认路径，sqlite 也可以指定位置。
						|__code_cache 				// 此目录存储 Flutter 相关代码和资源。
						|		|__flutter_engine // Flutter 渲染引擎
						|		|		|__temp id
						|		|				|__skia
						|		|__flutter_guidePVWGEK
						|				|__flutter_guide
						|						|__build
						|								|__flutter_assets // Flutter 资源文件
						|										|__assets
						|										|__fonts
						|										|__packages
  					|
						|__files  						// 对应 getApplicationSupportDirectory 方法。
						|__shared_prefs 			// SharePreferences 的默认路径
```



- cache 目录：对应 **getTemporaryDirectory** 方法，用于缓存文件，此目录随时可能被系统清除。
- files 目录：对应 **getApplicationSupportDirectory** 方法。
- code_cache：此目录存储 Flutter 相关代码和资源。
  - flutter_engine/skia：Flutter 渲染引擎。
  - flutter_guidePVWGWK/flutter_guide/build/flutter_assets：Flutter 资源文件。
- shared_prefs： **SharePreferences** 的默认路径。
- app_flutter：对应 **getApplicationDocumentsDirectory**方法。
- app_flutter/dbName：使用 **sqlite** 的默认路径，**sqlite** 也可以指定位置。

内部存储的特点：

- 安全性，其他应用无法访问这些数据。
- 当应用卸载的时候，这些数据也会被删除，避免垃圾文件。
- 不需要申请额外权限。
- 存储的空间有限，此目录数据随时可能被系统清除，也可以通过 **设置** 中的 **清除数据** 可以清除此目录数据。
- **国内特色**，不同手机厂商对此目录做了不同的限制，比如总体大小限制、单个应用程序所占空间大小限制、清除数据策略不同等。

### **外部存储**

外部存储可以通过手机的 **文件管理** 应用查看

​	Android/data/包名:

- cache：缓存目录，对应 **getExternalCacheDirectories** 方法。
- files：对应 **getExternalStorageDirectories** 方法。



此目录的特点：

- 当应用卸载的时候，这些数据也会被删除，避免垃圾文件。
- 不需要申请额外权限。
- 空间大且不会被系统清除，通过 **设置** 中的 **清除数据** 可以清除此目录数据。
- 用户可以直接对文件进行删除、导入操作。

外部存储除了 **Android/data/** 目录，还有和此目录同级的目录，特点：

- 所有应用程序均可访问。
- 用户可以直接对文件进行删除、导入操作。
- 需要申请**读写权限**。

Android 官方对此目录的管理越来越严格， **Android 11** 系统已经开始强制执行分区存储，详情见：https://developer.android.com/preview/privacy/storage?hl=zh-cn

![img](http://img.laomengit.com/20200908213136.jpg)

##  iOS 文件存储

iOS 文件存储相比 Android 要简单的多，因为 iOS 对用户隐私保护非常严格，每个 iOS 应用程序都有一个单独的文件系统，而且只能在对应的文件系统中进行操作，此区域被称为沙盒。

![img](http://img.laomengit.com/20200908213129.png)

每个应用沙盒含有3个文件夹：Documents, Library 和 tmp：

- Documents：应用程序数据文件写入到这个目录下。这个目录用于存储用户数据。保存应用程序的重要数据文件和用户数据文件等。iTunes 同步时会备份该目录，对应 **getApplicationDocumentsDirectory** 方法。
- Library：对应getLibraryDirectory方法。
  - Caches：保存应用程序使用时产生的支持文件、缓存文件、日志文件等，比如下载的音乐,视频,SDWebImage缓存等。对应 **getTemporaryDirectory** 方法。
  - Preferences：包含应用程序的偏好设置文件，iCloud会备份设置信息。
  - Application Support：对应 **getApplicationSupportDirectory** 方法。
- tmp：存放临时文件，不会被备份，而且这个文件下的数据有可能随时被清除的可能，按照官方说法每三天清理一次缓存数据。

![img](http://img.laomengit.com/20200908213141.png)



## SharedPreferences



## **SQLite**

# 文章

```dart
闲鱼对Flutter-Native混合工程解耦的探索
  https://www.yuque.com/xytech/flutter/sh4fbm
https://www.yuque.com/xytech/flutter/wmnulp

美团
  https://tech.meituan.com/

淘系
  https://fed.taobao.org/blogs/?spm=taofed.homepage.header.3.7eab5ac8YRTp1F

袁辉辉 字节跳动
 http://gityuan.com/


https://www.tangshuang.net/wordpress
```

# flutter 书籍

```dart
flutter实战 第二版
https://book.flutterchina.club/chapter6/gridview.html


https://dart.academy/
```

# ui框架

```


ui框架集合
 https://my.oschina.net/u/4082303/blog/4416515
 
 
https://github.com/flutterchina/flukit


贝壳
	https://bruno.ke.com/page/
	
可视化flutter 
	https://app.flutterflow.io/create-account
	https://ui.flutterdart.cn/
```

# 热更新 

```
热更新 Flutter Fair
	https://fair.58.com/guide/#architecture

设计与思考
https://fair.58.com/zh/article/fair_design.html#fair%E6%9E%B6%E6%9E%84
```

