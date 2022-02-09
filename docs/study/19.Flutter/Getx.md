# Getx

https://github.com/jonataslaw/getx/blob/master/README.zh-cn.md



## obs

```dart
final name = ''.obs;
final isLogged = false.obs;
final count = 0.obs;
final balance = 0.0.obs;
final number = 0.obs;
final items = <String>[].obs;
final myMap = <String, int>{}.obs;

// 自定义类 - 可以是任何类
final user = User().obs;

final flag = false.obs;
	// 在真/假之间切换数值
	flag.toggle();
	// 将 "value "设为空。
	flag.nil();

final abc = [0,1,2].obs;

class User {
    String name, last;
    int age;
    User({this.name, this.last, this.age});

    @override
    String toString() => '$name $last, $age years old';
}

final user = User(name: 'John', last: 'Doe', age: 33).obs;

  // `user`是 "响应式 "的，但里面的属性却不是!
  // 所以，如果我们改变其中的一些变量：
  user.value.name = 'Roi';
  // 小部件不会重建！ 
  // 对于自定义类，我们需要手动 "通知 "改变。
  user.refresh();

  // 或者我们可以使用`update()`方法!
  user.update((value){
    value.name='Roi';
  });
```



## 视图

```dart
// 写法1 
  Obx(()=>Text('${logic.count}'))
// 写法2
GetBuilder<TestLogic>(
        id: 'TestLogic',
        init: TestLogic(),
        builder: (logic) {
          return ListView(
            children: [
              Container(
                child: Obx(() => Text('${logic.cout.value}')),
              ),
              ElevatedButton(
                  onPressed: () {
                    logic.cout.value = logic.cout.value + 1;
                  },
                  child: Text('data'))
            ],
          );
        },
      ),
// 写法3
GetX<TestLogic>(
            init: TestLogic(),
            builder: (controller) {
              print("count 3 rebuild");
              return TextButton(
                  onPressed: () {
                    controller.cout.value++;
                  },
                  child: Text('${controller.cout.value}'));
            },
          ),
```

### GetView

```dart
class GetPage extends GetView<MyController> {
	
  @override
  Widget build(BuildContext context) {
      // 注册
    	Get.put(MyController());
    	return Text('${controller.count}');
  }
}
```

### GetWidget

```dart

```

## Bindings

```dart
class HomeBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<HomeController>(() => HomeController());
    Get.put<Service>(()=> Api());
  }
}
```



## Worker

```
onInit中使用;

ever(litnersval,(val){});
once(litnersval,(val){});
everAll

/// 防抖 等待3秒后触发
debounce(litnersval,(val){},time:Duration(seconds:3));
/// 节流 3秒只触发一次
interval(litnersval,(val){},time:Duration(seconds:3));
```

## util

```dart
// 改变主题
Get.changeTheme(ThemeData.light()); 
```

