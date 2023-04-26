# flutter 路由



## 普通路由与传参



## 命名路由与传参

1. MaterialApp routes 注册命名路由；
2. Navigator.pushNamed(context, '路由名' , arguments:参数) 进行路由跳转与传参；
3. ModalRoute.of(context)!.settings.arguments 获取参数；
4.  Navigator.pop(context, 参数) 关闭页面并向上一页面传参；
5. Navigator.pushNamed 中通过await 或 .then 接收关闭页面返回的参数；

```dart
/// main.dart

import 'package:stufl/page/home.dart';
import 'package:stufl/page/login.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/login', 		/// 初始路径
      routes: { 									/// 命名路由声明
        '/login': (_) => const LoginPage(),
        '/home': (_) => HomePage(),
      },
    );
  }
}
```

```dart
 /// 返回的是Future类，可以使用await 或 .then 接收返回的参数
var result = await Navigator.pushNamed(
              context,
              '/home', 							/// 路由路径
              arguments: {'id': 1}, /// 路由参数
            );
print(result); // 2022
```

```dart
/// home.dart
final arg = ModalRoute.of(context)!.settings.arguments as Map<String, num>;
Navigator.pop(context, 2022);
```





## Navigator Api

### of 

```dart
Navigator.of(context).pushNamed('/home'); /// NavigatorState


Navigator.pushNamed(context, '/home') 
  
 /// pushNamed 源码
 static Future<T?> pushNamed<T extends Object?>(
    BuildContext context,
    String routeName, {
    Object? arguments,
  }) {
    return Navigator.of(context).pushNamed<T>(routeName, arguments: arguments);
  }
```

### push 

### pushNamed

```dart
/// 进入下一个页面
Navigator.push<void>(
    context,
     MaterialPageRoute<void>(
       builder: (BuildContext context) => const MyPage(),
     ),
);

Navigator.pushNamed(context, '/home');
```

### pushAndRemoveUntil 

### pushNamedAndRemoveUntil

将给定路由推送到Navigator，删除先前的路由，直到该函数的参数predicate返回true为止。

1. 从栈顶开始删除页面直到predicate=true；
2. 再将给定的新路由入栈；

```dart
 Navigator.of(context).pushNamedAndRemoveUntil(
              '/detail',
   /// typedef RoutePredicate = bool Function(Route<dynamic> route);
              (route) => false, /// false 将前面页面全部删除，Navigator.popUntil 
              arguments: {'id': 2},
            );

/// 页面栈：/home 》/A 》/B 执行后：/home 》/C
Navigator.of(context).pushNamedAndRemoveUntil(
              '/C',
              (route) {
                return route.settings.name == '/home';
              },
              arguments: {'id': 2},
            );

/// 与上同
Navigator.of(context).pushNamedAndRemoveUntil(
              '/D',
              ModalRoute.withName('/home'),
              arguments: {'id': 2},
            );
```



pushReplacement 路由替换。

pushReplacementNamed 这个也是替换路由操作。推送一个命名路由到Navigator，新路由完成动画之后处理上一个路由。



replace 将Navigator中的路由替换成一个新路由。

replaceRouteBelow 将Navigator中的路由替换成一个新路由，要替换的路由是是传入参数anchorRouter里面的路由。



pop 导航到新页面，或者返回到上个页面。



canPop 判断是否可以导航到新页面

maybePop 可能会导航到新页面



popAndPushNamed 指定一个路由路径，并导航到新页面。

popUntil 反复执行pop 直到该函数的参数predicate返回true为止。



removeRoute 从Navigator中删除路由，同时执行Route.dispose操作。

removeRouteBelow 从Navigator中删除路由，同时执行Route.dispose操作，要替换的路由是传入参数anchorRouter里面的路由。



## MaterialApp中的路由配置

### MaterialApp

```

```



### home

### initialRoute

### routes

### 

### navigatorKey

### onGenerateRoute

#### navigatorObservers

#### onGenerateTitle

#### onUnknownRoute



## Navigator 2.0

https://www.raywenderlich.com/19457817-flutter-navigator-2-0-and-deep-links#toc-anchor-001

https://flutter.cn/community/tutorials

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:stufl/page/home.dart';
import 'package:stufl/page/login.dart';

import 'page/detail.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      routeInformationParser: MyRouteParser(),
      routerDelegate: MyRouteDelegate(
        onGenerateRoute: (settings) {
          return MaterialPageRoute(
            settings: settings,
            builder: ((context) {
              return const HomePage();
            }),
          );
        },
      ),
    );
  }
}

class MyRouteDelegate extends RouterDelegate<String>
    with PopNavigatorRouterDelegateMixin<String>, ChangeNotifier {
  final _stack = <String>[];

  static MyRouteDelegate of(BuildContext context) {
    final delegate = Router.of(context).routerDelegate;
    assert(delegate is MyRouteDelegate, 'Delegate type must match');
    return delegate as MyRouteDelegate;
  }

  MyRouteDelegate({
    required this.onGenerateRoute,
  });

  final RouteFactory onGenerateRoute;

  @override
  GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

  @override
  String? get currentConfiguration => _stack.isNotEmpty ? _stack.last : null;

  List<String> get stack => List.unmodifiable(_stack);

  void toName(String newRoute) {
    _stack.add(newRoute);
    notifyListeners();
  }

  void push(String newRoute) {
    _stack.add(newRoute);
    notifyListeners();
  }

  void remove(String routeName) {
    _stack.remove(routeName);
    notifyListeners();
  }

  void pop() {
    _stack.remove(_stack.last);
    notifyListeners();
  }

  bool _onPopPage(Route<dynamic> route, dynamic result) {
    if (_stack.isNotEmpty) {
      if (_stack.last == route.settings.name) {
        _stack.remove(route.settings.name);
        notifyListeners();
      }
    }
    return route.didPop(result);
  }

  @override
  Future<void> setInitialRoutePath(String configuration) {
    return setNewRoutePath(configuration);
  }

  @override
  Future<void> setNewRoutePath(String configuration) {
    _stack
      ..clear()
      ..add(configuration);
    return SynchronousFuture<void>(null);
  }

  @override
  Widget build(BuildContext context) {
    return Navigator(
      key: navigatorKey,
      onPopPage: _onPopPage,
      initialRoute: '/',
      onGenerateRoute: (settings) {
        return MaterialPageRoute(
          settings: settings,
          builder: ((context) {
            return const HomePage();
          }),
        );
      },
      pages: [
        for (final name in _stack)
          MyPage(
            key: ValueKey(name),
            name: name,
            builder: routerNames[name] as Widget Function(BuildContext),
          ),
      ],
    );
  }
}

final routerNames = {
  "/": (context) => const HomePage(),
  "/login": (context) => const LoginPage(),
};

class MyPage<T> extends Page<T> {
  const MyPage({
    required LocalKey key,
    required String name,
    required this.builder,
  }) : super(key: key, name: name);

  final WidgetBuilder builder;

  @override
  Route<T> createRoute(BuildContext context) {
    return MaterialPageRoute(
      settings: this,
      builder: builder,
    );
  }

  @override
  String toString() => '$name';
}

class MyRouteParser extends RouteInformationParser<String> {
  // 接受系统传递给我们的路由信息 routeInformation，然后，返回转发给我们之前定义的路由代理 RouterDelegate，
  // 解析后的类型为 RouteInformationParser 的泛型类型，即这里的 String
  @override
  Future<String> parseRouteInformation(RouteInformation routeInformation) {
    var location = routeInformation.location;
    return SynchronousFuture(location!);
  }

  // 返回一个 RouteInformation 对象，表示从传入的 configuration 恢复路由信息。
  @override
  RouteInformation restoreRouteInformation(String configuration) {
    return RouteInformation(location: configuration);
  }
}

```

d