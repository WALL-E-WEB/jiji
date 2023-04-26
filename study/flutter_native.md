# flutter与原生通信

https://docs.flutter.dev/development/platform-integration/platform-channels

## flutter 与 Android通信

### MethodChannel

用于传递方法调用

**flutter 端：**

```dart
import 'package:flutter/services.dart';

class FlAndAChannel {
  static String _channelName = 'com.your.your/your';
  static late MethodChannel _methodhannel;
  static void init() {
    /// 注册
    _methodhannel = MethodChannel(_channelName);
  }

  static listener() {
    /// 监听原生的 invokeMethod
    _methodhannel.setMethodCallHandler((call) {
      if (call.method == 'yourMethodName') {
        print(call.arguments); // yourMethodName method
      } else if (call.method == 'yourMethodName2') {
        print(call.arguments); // yourMethodName2 method
      }
      return Future.value(null);
    });
  }

  static Future<void> send() async {
    /// 触发原生的 methodName 方法
    var result = await _methodhannel.invokeMethod('methodName');
    Map<String, dynamic> _data = json.decode(result);
  }
}
```

**android 端:**

```kotlin
import androidx.annotation.NonNull
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
  // 与flutter端 _channelName 相同 
  private val CHANNEL = "com.your.your/your"

  override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
    super.configureFlutterEngine(flutterEngine)
    // 注册监听
    MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
      call, result ->
      
      if (call.method == "yourMethodName") {
				// TODO
        result.success("yourMethodName method")
      } else  if (call.method == "yourMethodName2") {
				// TODO
        result.success("yourMethodName2 method")
      } else {
        result.notImplemented()
      }
    }
  }
}
```



### BasicMessageChannel

用于传递字符串和半结构化的信息

**flutter  端：**

```dart
BasicMessageChannel _bChannel = BasicMessageChannel('d',StandardMessageCodec());
/// 发送消息 navite返回结果
var result = await _bChannel.send({'name': 'laomeng', 'age': 18});
var name = result['name'];
var age = result['age'];

/// 监听
 _bChannel.setMessageHandler((message) {
      print(message);
      return Future.value(null);
    });
```

| 编码类型             | 消息格式             |
| :------------------- | :------------------- |
| BinaryCodec          | 发送二进制消息时     |
| JSONMessageCodec     | 发送Json格式消息时   |
| StandardMessageCodec | 发送基本型数据时     |
| StringCodec          | 发送String类型消息时 |

**Android 端：**

```kotlin
class MainActivity : FlutterActivity() {

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        BasicMessageChannelDemo(flutterEngine.dartExecutor.binaryMessenger)
        flutterEngine.plugins.add(MyPlugin())
    }
}


class BasicMessageChannelDemo(messenger: BinaryMessenger) : BasicMessageChannel.MessageHandler<Any> {

    private var channel: BasicMessageChannel<Any>

    init {
        channel = BasicMessageChannel(messenger, "com.your.your/your", StandardMessageCodec())
        channel.setMessageHandler(this)
    }

  override 
  fun onMessage(message: Any?, reply: BasicMessageChannel.Reply<Any>) {
        val name = (message as Map<String, Any>)["name"]
        val age = (message as Map<String, Any>)["age"]

        var map = mapOf("name" to "hello,$name",
                "age" to "$age"
        )

        reply.reply(map)
    }
}

// message 是传入的参数，由于 Flutter 端传入的是 Map，所以上面的解析按照 Map 解析。
// reply.reply() 是返回给 Flutter 的结果。
```

```kotlin

class MainActivity: FlutterActivity() {
    override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
        GeneratedPluginRegistrant.registerWith(flutterEngine)
 
        val channel = BasicMessageChannel(
                flutterEngine.dartExecutor.binaryMessenger,
                "com.example.messagechannel/interop",
                StringCodec.INSTANCE)
 
        // Receive messages from Dart
        channel.setMessageHandler { message, reply ->
            Log.d("Android", "Received message = $message")
            reply.reply("Reply from Android")
        }
 
        // Send message to Dart
        Handler().postDelayed({
            channel.send("Hello World from Android") { reply ->
                Log.d("Android", "$reply")
            }
        }, 500)
    }
}

```



### EventChannel

用于数据流（event streams）的通信。有监听功能，比如电量变化之后直接推送数据给flutter端

**flutter 端：**

```dart
//创建通道
final EventChannel eventChannel = const EventChannel('eventChannel');

//开始监听数据
eventChannel.receiveBroadcastStream().listen((event) {
  print(event.toString());
});

```

**android 端：**

```kotlin

class MainActivity: FlutterActivity() {
    private lateinit var channel: EventChannel
    var eventSink: EventSink? = null
 
    override fun configureFlutterEngine(@NonNull flutterEngine: FlutterEngine) {
        GeneratedPluginRegistrant.registerWith(flutterEngine)
 
        channel = EventChannel(flutterEngine.dartExecutor.binaryMessenger, "com.example.eventchannel/interop")
        channel.setStreamHandler(
                object : StreamHandler {
                    override fun onListen(arguments: Any?, events: EventSink) {
                        eventSink = events
                        Log.d("Android", "EventChannel onListen called")
                        Handler().postDelayed({
                            eventSink?.success("Android")
                            //eventSink?.endOfStream()
                            //eventSink?.error("error code", "error message","error details")
                        }, 500)
                    }
                    override fun onCancel(arguments: Any?) {
                        Log.w("Android", "EventChannel onCancel called")
                    }
                })
    }
}

```



## flutter 与 Android 消息通信示例

```dart
 static const String methodName = 'zjAndroidPush';

  static MethodChannel _methodChannel = MethodChannel(methodName);

  /// flutter  invokeMethod to android
  static void sendToAndroid() async {
    var result = await _methodChannel.invokeMethod(methodName);
    Map<String, dynamic> data = json.decode(result);
  }

  ///
  /// android  invokeMethod callback
  ///
  static void _msglistenerCallbackInit() {
    _methodChannel.setMethodCallHandler((call) {
      if (call.method == 'msgCallback') {
        _msgHandler(call);
      }
      return null;
    });
  }
```

android

```dart
package top.zhijia.zjmerchant;

// import android.app.Activity;
// import android.os.Bundle;
// import android.text.TextUtils;
// import android.util.Log;
// import android.widget.TextView;

import android.content.Intent;
// import org.json.JSONException;
// import org.json.JSONObject;
import android.view.WindowManager;
import android.app.Activity;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.lifecycle.Lifecycle;

import org.json.JSONException;
import org.json.JSONObject;

import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.android.FlutterFragment;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister;
import io.flutter.plugin.common.MethodChannel;

import io.flutter.plugin.common.BinaryMessenger;

/**
 * Created by jiguang on 17/7/5.
 */
// Activity FlutterActivity
public class MainActivity extends FlutterActivity {
    private static final String TAG = "OpenClickActivity";
    /**
     * 消息Id
     **/
    private static final String KEY_MSGID = "msg_id";
    /**
     * 该通知的下发通道
     **/
    private static final String KEY_WHICH_PUSH_SDK = "rom_type";
    /**
     * 通知标题
     **/
    private static final String KEY_TITLE = "n_title";
    /**
     * 通知内容
     **/
    private static final String KEY_CONTENT = "n_content";
    /**
     * 通知附加字段
     **/
    private static final String KEY_EXTRAS = "n_extras";
    /**
     * 通知附加字段
     **/
    private static MethodChannel methodChannel;
    /**
     * 厂商通道 通知消息 的参数
     **/
    private static String pushExtras;
    /**
     * flutter 通信
     **/
    private static BinaryMessenger messenger;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "---onCreate---");
    }

    /**
     * 二次点击 执行
     **/
    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Log.d(TAG, "---onNewIntent---");
        setIntent(intent);
        if (messenger != null) {
            msgHandler(messenger);
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "--onStart--");
        if (messenger != null) {
            msgHandler(messenger);
        }

    }

    /**
     * 二次点击
     **/
    @Override
    protected void onResume() {
        super.onResume();
        Log.d(TAG, "--onResume--");
    }

    /**
     * flutter 通信
     **/
    @Override
    public void configureFlutterEngine(FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
        messenger = flutterEngine.getDartExecutor();
        msgHandler(messenger);
        Log.d(TAG, "-configureFlutterEngine");
    }

    /**
     * flutter 消息处理
     **/
    public void msgHandler(BinaryMessenger messenger) {
        // 与flutter 建立连接
        if (methodChannel == null) {

            methodChannel = new MethodChannel(messenger, "zjAndroidPush");
        }

        handleOpenClick(methodChannel);

        methodChannel.setMethodCallHandler(
                (call, result) -> {
                    if (call.method.equals("zjAndroidPush")) {
                        Log.d(TAG, "消息了了了了了了");
                        //  触发 flutter 的方法
                        methodChannel.invokeMethod("msgCallback", pushExtras);
                        result.success(pushExtras);
                    } else {
                        result.notImplemented();
                    }
                });
    }

    private void handleOpenClick(MethodChannel methodChannel) {
        Log.d(TAG, "用户点击打开了通知");
        String data = null;
        //获取华为平台附带的jpush信息
        if (getIntent().getData() != null) {
            data = getIntent().getData().toString();
        }

        //获取fcm、oppo、vivo、华硕、小米平台附带的jpush信息
        if (TextUtils.isEmpty(data) && getIntent().getExtras() != null) {
            data = getIntent().getExtras().getString("JMessageExtra");
        }

        Log.w(TAG, "msg content is " + String.valueOf(data));
        if (TextUtils.isEmpty(data)) return;
        try {
            JSONObject jsonObject = new JSONObject(data);
            String msgId = jsonObject.optString(KEY_MSGID);
            byte whichPushSDK = (byte) jsonObject.optInt(KEY_WHICH_PUSH_SDK);
            String title = jsonObject.optString(KEY_TITLE);
            String content = jsonObject.optString(KEY_CONTENT);
            String extras = jsonObject.optString(KEY_EXTRAS);
            StringBuilder sb = new StringBuilder();
            sb.append("msgId:");
            sb.append(String.valueOf(msgId));
            sb.append("\n");
            sb.append("title:");
            sb.append(String.valueOf(title));
            sb.append("\n");
            sb.append("content:");
            sb.append(String.valueOf(content));
            sb.append("\n");
            sb.append("extras:");
            sb.append(String.valueOf(extras));
            sb.append("\n");
            sb.append("platform:");
            sb.append(getPushSDKName(whichPushSDK));
            Log.w(TAG + "--2", sb.toString());
            pushExtras = extras;
            //上报点击事件
            methodChannel.invokeMethod("msgCallback", extras);

        } catch (JSONException e) {
            Log.w(TAG, "parse notification error");
        }
    }

    private String getPushSDKName(byte whichPushSDK) {
        String name;
        switch (whichPushSDK) {
            case 0:
                name = "jpush";
                break;
            case 1:
                name = "xiaomi";
                break;
            case 2:
                name = "huawei";
                break;
            case 3:
                name = "meizu";
                break;
            case 4:
                name = "oppo";
                break;
            case 5:
                name = "vivo";
                break;
            case 6:
                name = "asus";
                break;
            case 8:
                name = "fcm";
                break;
            default:
                name = "jpush";
        }
        return name;
    }

}


```

