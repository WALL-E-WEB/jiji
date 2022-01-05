## 防抖截流

### 防抖

```dart
import 'dart:async';

/// 函数防抖
///
/// [func]: 要执行的方法
/// [delay]: 要迟延的时长
Function debounce(
  Function func, [
  Duration delay = const Duration(milliseconds: 2000),
]) {
  Timer timer;
  Function target = () {
    if (timer?.isActive ?? false) {
      timer?.cancel();
    }
    timer = Timer(delay, () {
      func?.call();
    });
  };
  return target;
}

/// 使用
debounce(() {})；
```

### 截流

```dart
Function debounce(
  Function callback, [
  Duration delay = const Duration(milliseconds: 2000),
]) {
 var debounceActive = false;
 if (debounceActive) return;
  debounceActive = true;
  await Future.delayed(delay);
  debounceActive = false;
  callback();
}
```





## tab实现

```dart
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';



class ZjTabBlockScroll extends StatefulWidget {
  final int initIndex;
  final Function(int) onTap;
  final List<String> tapTitleList;
  final TabController? controller;

  final double? height;
  const ZjTabBlockScroll({
    Key? key,
    this.initIndex = 0,
    this.controller,
    required this.onTap,
    required this.tapTitleList,
    this.height,
  }) : super(key: key);

  @override
  _SaleClueTabState createState() => _SaleClueTabState();
}

class _SaleClueTabState extends State<ZjTabBlockScroll> {
  int _index = 0;

  // double _animationValue = 0;
  // double _value = 0;

  List<GlobalKey> tabItemKeyList = [];
  List<double> tabItemWidthList = [];

  ScrollController _controller = ScrollController();
  ValueNotifier<double> _position = ValueNotifier<double>(0);

  @override
  void initState() {
    super.initState();
    _index = widget.initIndex;
    widget.controller?.addListener(() {
      setState(() {
        _index = widget.controller?.index ?? 0;
      });
    });

    widget.controller?.animation?.addListener(() {
      _position.value = widget.controller?.animation?.value ?? 0;
    });

    widget.tapTitleList.forEach((element) {
      tabItemKeyList.add(GlobalKey());
    });

    WidgetsBinding.instance!.addPostFrameCallback((timeStamp) {
      if (tabItemWidthList.isEmpty) {
        tabItemKeyList.forEach((element) {
          RenderObject renderObject = element.currentContext!.findRenderObject() as RenderObject;
          tabItemWidthList.add(renderObject.paintBounds.size.width);
        });

        setState(() {});
      }
    });
  }

  setStateIndexToJumpto(int i) {
    if (tabItemWidthList.isNotEmpty) {
      RenderObject renderObject =
          tabItemKeyList[i].currentContext!.findRenderObject() as RenderObject;
      var translation = renderObject.getTransformTo(null).getTranslation();

      double half = 1.sw / 2;
      double centerXLeft = half - tabItemWidthList[i] / 2;
      double centerXRight = half + tabItemWidthList[i] / 2;

      if (translation.x >= centerXLeft && translation.x <= centerXRight) return;

      if (translation.x < half) {
        double jumpto = _controller.offset - tabItemWidthList[i];
        if (jumpto <= _controller.position.minScrollExtent) {
          _animateTo(_controller.position.minScrollExtent);
        } else {
          _animateTo(jumpto);
        }
      } else {
        double jumpto = _controller.offset + tabItemWidthList[i];
        if (jumpto >= _controller.position.maxScrollExtent) {
          _animateTo(_controller.position.maxScrollExtent);
        } else {
          _animateTo(jumpto);
        }
      }
    }
  }

  _animateTo(double p) {
    _controller.animateTo(p, duration: Duration(milliseconds: 300), curve: Curves.linear);
  }

  double getPositionLeft(double i) {
    if (tabItemWidthList.length == 0) return 0.0;
    double _p = 0;
    int len = i.toInt();
    List.generate(len, (index) {
      _p += tabItemWidthList[index];
    });
    double value = i - len;
    if (len == tabItemWidthList.length - 1) {
      return _p + value * (tabItemWidthList[len]);
    }
    return _p + value * (tabItemWidthList[len + 1]);
  }

  @override
  void dispose() {
    super.dispose();
    widget.controller?.dispose();
    _controller.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      shrinkWrap: true,
      controller: _controller,
      children: [
        Container(
          alignment: Alignment.centerLeft,
          decoration: BoxDecoration(color: Colors.white, boxShadow: [
            BoxShadow(
              color: ZjColor.divider,
              blurRadius: 1,
            )
          ]),
          child: Stack(
            children: [
              tabItemWidthList.isEmpty
                  ? SizedBox()
                  : ValueListenableBuilder(
                      valueListenable: _position,
                      builder: (c, double i, w) {
                        return Positioned(
                          left: getPositionLeft(i),
                          child: Container(
                            width: tabItemWidthList[i.toInt()],
                            color: ZjColor.active,
                            height: widget.height ?? 46.w,
                          ),
                        );
                      },
                    ),
              Row(
                children: List.generate(
                  widget.tapTitleList.length,
                  (index) => GestureDetector(
                    behavior: HitTestBehavior.opaque,
                    onTap: () {
                      widget.onTap(index);

                      setStateIndexToJumpto(index);
                    },
                    child: Container(
                      key: tabItemKeyList[index],
                      alignment: Alignment.center,
                      padding: EdgeInsets.symmetric(horizontal: 15.w),
                      child: Text(
                        '${widget.tapTitleList[index]}',
                        style: ZjTextStyle.h3Primary.copyWith(
                            fontWeight: _index == index ? FontWeight.w500 : FontWeight.w400,
                            color: _index == index ? ZjColorText.white : ZjColorText.active,
                            shadows: [
                              Shadow(
                                blurRadius: 4.0,
                                color: _index != index ? ZjColorText.white : ZjColorText.active,
                              )
                            ]),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

```



## 获取元素信息

```dart
Offset? getPositionFromKey(GlobalKey key) {
  final RenderBox? box = key.currentContext?.findRenderObject() as RenderBox?;
  return box?.localToGlobal(Offset.zero);
}

Size? getSizeFromKey(GlobalKey key) {
  final RenderBox? box = key.currentContext?.findRenderObject() as RenderBox?;
  return box?.size;
}

Offset getCenterOffsetFromKey(GlobalKey key) {
  final size = getSizeFromKey(key);
  final pos = getPositionFromKey(key);
  if (pos != null && size != null)
    return Offset(pos.dx + size.width / 2, pos.dy + size.height / 2);
  else
    return Offset.zero;
}
```

## HslColor

```dart
class HslColor {
  double h;
  double s;
  double l;
  double a;

  HslColor({required this.h, required this.s, required this.l, this.a = 0.0});

  String toString() {
    return "HSL(h: $h, s: $s, l: $l, a: $a)";
  }
}
```

## doubleFormatter

```dart
import 'package:flutter/services.dart';

class RegExInputFormatter implements TextInputFormatter {
  final RegExp _regExp;

  RegExInputFormatter._(this._regExp);

  factory RegExInputFormatter.withRegex(String regexString) {
    try {
      final regex = RegExp(regexString);
      return RegExInputFormatter._(regex);
    } catch (e) {
      // Something not right with regex string.
      assert(false, e.toString());
      return RegExInputFormatter._(RegExp(''));
    }
  }

  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    final oldValueValid = _isValid(oldValue.text);
    final newValueValid = _isValid(newValue.text);
    if (oldValueValid && !newValueValid) {
      return oldValue;
    }
    return newValue;
  }

  bool _isValid(String value) {
    try {
      final matches = _regExp.allMatches(value);
      for (Match match in matches) {
        if (match.start == 0 && match.end == value.length) {
          return true;
        }
      }
      return false;
    } catch (e) {
      // Invalid regex
      assert(false, e.toString());
      return true;
    }
  }
}

final doubleFormatter =
    RegExInputFormatter.withRegex('^\$|^(0|([1-9][0-9]{0,}))(\\.[0-9]{0,})?\$');

```



## 数据处理

### array 转 tree

```dart
final Map departmentItemMap = {}; 
List arrayToTree(List items) {
    List result = []; // 存放结果集
    //
    items.forEach((item) {
      dynamic id = item['id'];
      dynamic pid = item['parentid'];

      if (!departmentItemMap.containsKey(id)) {
        departmentItemMap[id] = {
          "children": [],
        };
      }

      departmentItemMap[id] = {...item, "children": departmentItemMap[id]['children']};

      var treeItem = departmentItemMap[id];

      if (pid == 0) {
        result.add(treeItem);
      } else {
        if (!departmentItemMap.containsKey(pid)) {
          departmentItemMap[pid] = {
            "children": [],
          };
        }
        departmentItemMap[pid]['children'].add(treeItem);
      }
    });
    return result;
  }
```

