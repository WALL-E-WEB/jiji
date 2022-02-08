# 四大组件

## 设计思想

Android应用模型的设计思想来自Web 2.0的Mashup概念，是基于组件的应用设计模式。在该模型下，每个应用都由一系列的组件搭建而成，组件通过应用的配置文件描述功能。Android依照组件的配置信息，了解各个组件的功能并进行调度。

什么是Mashup？

源于流行音乐，mashup 是从两首不同的歌曲（通常属于不同的流派）中混合演唱和乐器的音轨而构成的一首新歌。最初广泛流行起来的 mashup 之一是一个 Web 站点，它将芝加哥警局在线数据库中的犯罪记录与 Google Maps 上的地图复合在一起。用户可以与 mashup 站点进行交互，例如告诉它在图形界面上显示一个包含图钉的地图，图钉展示南加州最近所有入室抢劫案件的详细信息。这种概念和呈现方式非常简单，犯罪和地图数据复合之后提供的可视化的功能非常强大。

Web上充满了表面上可以满足一切需要的网站。开发者认识到这些资源，决心重新加以利用，对它们进行扩充，而不是模仿它们的功能。重新利用和扩充这些资源的结果就是mashup概念，目的就是为了避免**做重复的工作**。

Android中的Mashup

有这样一个例子描述，“你为心仪的女生写了一封热情洋溢的电子情书，需要选一张最帅气的照片作为附件。于是，你点击选择图片作为附件，此时设备上你最常用的图片应用跳了出来，通过它，你很快就找到了最帅的那张照片，添加到电子邮件中并发送了出去”。这里涉及了两款应用，邮件应用和图库应用，两款应用协同完成了用户的需求。

## Activity

实际上相当于一个页面，但它是一个重量级的组件，内部持有一个`PhoneWindow`，主要作为显示页面的容器。安卓APP中必须有一个Activity。关于Activity的详细剖析《Android 进阶之了解源码——Activity启动》](https://blog.csdn.net/yingshukun/article/details/79188368)

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20201727.jpg)

Activity的任务栈

Android中使用任务栈来管理页面，通常一个应用默认开启一个任务栈，也可主动创建新任务栈。任务栈中管理着相关的Activity页面。

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/Snipaste_2020-08-29_13-56-22.jpg)

当应用在前后台切换时，存在移栈的操作

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20181008231659412814.png)

Activity共有四种启动模式

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/u=4163417439,105180815&fm=26&gp=0.jpg)

- **standard** 　标准启动模式，也是默认启动模式

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20181008231659508521.png)

- **singleTop**

  栈顶复用模式。启动一个Activity的时候如果发现栈顶已经存在这个Activity了，就不会去重新创建新的Activity，而是复用这个栈顶已经存在的Activity，避免同一个Activity被重复创建。

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20181008231659945061.png)

- **singleTask**

  栈内复用模式。开启一个Activity的时候，检查任务栈里面是否存在这个Activity的实例，如果存在的话清除任务栈中在这个Activity之上的所有其他Activity。

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20181008231700267339.png)

- **singleInstance**

　　单例复用模式。在启动的时候，会开启一个新的任务栈，这个任务栈里只管理一个Activity的实例。它会使系统中只存在唯一的该Activity实例，无论是从何处启动。即全局唯一。

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20181008231700630634.png)

清单文件中配置启动模式

```xml
<activity
    android:name=".MyActivity"
    android:launchMode="singleTask"
    android:label="@string/app_name" />
```

关于Activity的使用，有两大步骤

- 自定义Activity，通常会继承自`AppCompatActivity`，在某种情况下可以直接继承`Activity`
- `AndroidManifest`文件中进行配置

## Intent

一般翻译为意图。

对于基于组件的应用开发而言，不仅需要构造和寻找符合需求的组件，更重要的是要将组件有机地连接起来，互联互通交换信息，才能够最终提供应用所期望的服务。而为了能够更好地实现组件复用，充分地利用每一个组件的能力，就需要这些组件连接的模式足够灵活和统一，并且可以进行动态地扩展。因此Android提供了意图机制。

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/Snipaste_2020-08-31_18-47-50.jpg)

- 调用组件 调用组件是连接请求的发起者，它期望寻找其他组件来帮助完成所需的功能。调用组件可以是界面组件、服务组件或触发器组件，通过调用`Context.startActivity`和`Context.bindService`等函数发起对目标组件的连接请求。
- 实现组件 实现组件指的是响应调用者请求完成所需任务的组件。在Android中，每个组件都可以作为调用者请求第三方帮助，也都可以扮演实现者去完成对应的请求。对于实现组件而言，它不需要关注其调用者是谁，只需要依照请求者发送的Intent对象去执行相关功能即可。
- 组件管理服务 在调用组件与实现组件的连接过程中，组件管理服务扮演了调度者的角色。它从调用组件中接收到Intent对象，然后将该对象与应用管理服务收集到的组件`Intent Filter`对象进行比较，从中选择出符合调用组件需求的实现组件，最后构造并调用实现组件对象。组件管理服务是一个系统服务，运行在系统核心进程的独立线程中，通过进程间通信机制，与各个组件进行交互。

需要注意，四大组件中，ContentProvider是唯一不使用意图机制的组件。

一般将Intent分为两种：

- 显式`Intent`

  直接通过名称启动指定的目标组件，通过其构造方法`Intent(Context packageContext, Class class)`来实现

- 隐式`Intent`

  没有明确指定要启动哪个目标组件，而是指定`action`和`category`等属性信息，系统根据这些信息进行分析，然后寻找符合要求的目标组件。各种系统功能的调用，如调用通讯录、发短信、发邮件等都是采用隐式Intent来实现

使用Intent启动Activity的几种写法

```java
// 1.显式Intent

// 最简单的写法，适合启动本应用内部自己的Activity
Intent intent = new Intent(this,SecondActivity.class);
startActivity(intent);

// 适合启动其他应用的Activity
Intent intent = new Intent();
intent.setComponent(new ComponentName("org.bczl.helloworld","org.bczl.helloworld.SecondActivity"));
startActivity(intent);

// 以上的简化写法，其内部封装了ComponentName
Intent intent = new Intent();
intent.setClassName("org.bczl.helloworld","org.bczl.helloworld.SecondActivity")
startActivity(intent);

// 2.隐式Intent

// 调用浏览器，打开指定的网站
Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setData(Uri.parse("https://www.baidu.com/"));
startActivity(intent);

// 启动自定义的action
Intent intent = new Intent("org.bczl.helloworld.custom_action");
startActivity(intent);
```

我们还可以利用Intent启动指定包名的App

```java
Intent intent = getPackageManager().getLaunchIntentForPackage("packageName");
if (intent != null){
    startActivity(intent);
}
```

注意，当使用Intent启动服务时，则使用`startService`方法。另外，Intent还能设置一些标志位，在启动Activity时非常有用，例如：遇到退出登录时，需要将界面跳转到登录界面，并将栈中所有Activity清空

```java
Intent intent = new Intent();
intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK|Intent.FLAG_ACTIVITY_NEW_TASK);
startActivity(intent);
```

`FLAG_ACTIVITY_CLEAR_TASK`这个标志表示清除之前所有已经打开的Activity，必须跟`FLAG_ACTIVITY_NEW_TASK`一起使用

使用`Intent`传送数据

```java
Intent intent = new Intent();
// 放置数据
intent.putExtra("key","value");
// 取出数据
intent.getStringExtra("key");
```

它有一些列`put`开头的方法用于存放各种类型数据，使用对应的`get`开头的方法取出

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/Snipaste_2020-09-10_20-43-49.jpg)

关于Intent的详细使用，参见 [Intent 和 Intent 过滤器](https://developer.android.google.cn/guide/components/intents-filters?hl=zh_cn)

Android 内置了许多常用的Action，可查阅 [通用Intent 文档](https://developer.android.google.cn/guide/components/intents-common?hl=zh_cn#top_of_page)

**一些使用实例**

调用系统分享功能，参见 [强制使用应用选择器](https://developer.android.google.cn/guide/components/intents-filters?hl=zh_cn#ForceChooser)

```java
Intent intent = new Intent(Intent.ACTION_SEND);
//设置一个明确的MIME类型，例如"image/*"之类
intent.setType("text/plain");
// 要分享的内容，这里是纯文本内容
intent.putExtra(Intent.EXTRA_TEXT, "我是被分享的字符串");
intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
// 设置分享弹框的标题
startActivity(Intent.createChooser(intent, "我是分享标题"));
```

拉起拨号盘应用，并传递号码

```java
Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:10086"));
startActivity(intent);
```

直接拨号。注意，需要运行时权限`android.permission.CALL_PHONE`

```java
Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:10086"));
startActivity(intent);
```

调用短信APP发短信

```java
Intent intent = new Intent(Intent.ACTION_VIEW,Uri.parse("smsto:10086"));
intent.putExtra("sms_body", "这是短信的内容");
startActivity(intent);
```

选择图库照片

```java
Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
intent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI,"image/*");
startActivityForResult(intent,12);
```

发送邮件

```java
Intent intent = new Intent(Intent.ACTION_SEND);
intent.putExtra(Intent.EXTRA_EMAIL, "to@abc.com");
intent.putExtra(Intent.EXTRA_SUBJECT, "这是邮件标题");
intent.putExtra(Intent.EXTRA_TEXT, "这是邮件的内容");
intent.setType("text/plain");
startActivity(Intent.createChooser(it, "选择邮箱客户端"));
```

调用系统播放器播放音频

```java
Intent intent = new Intent(Intent.ACTION_VIEW);
// 将路径转为uri，这里将sdcard上的01.mp3路径转为uri
intent.setDataAndType(Uri.fromFile(new File(Environment.getExternalStorageDirectory(),"01.mp3")), "audio/mp3");
startActivity(it);
```

注意，在API 24+以上版本，不能直接使用`file://`型的uri，以上代码会报错，有两种解决办法

- 简单处理一下，可以使用反射黑科技关闭系统的路径检查，先调用如下代码关闭，再执行以上代码

```java
try{
    Method m = StrictMode.class.getMethod("disableDeathOnFileUriExposure");
    m.invoke(null);
}catch(Exception e){
    e.printStackTrace();
}
```

- 谷歌推荐的解决方法，是使用`FileProvider`来处理，详细配置过程，见官方文档 [设置文件共享](https://developer.android.google.cn/training/secure-file-sharing/setup-sharing?hl=zh_cn)

  注意，`filepaths.xml` 文件应如下配置

  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <paths xmlns:android="http://schemas.android.com/apk/res/android">
      <external-path name="external_files" path="."/>
  </paths>
  ```

  使用时，将`Uri uri=Uri.fromFile(xxxx)`改为`Uri uri=FileProvider.getUriForFile(context, context.getPackageName() + ".provider", xxxx)`

## Service

是一种可在后台执行长时间运行操作而不提供界面的应用组件。服务可由其他应用组件启动，而且即使用户切换到其他应用，服务仍将在后台继续运行。此外，组件可通过绑定到服务与之进行交互，甚至是执行进程间通信 (IPC)。例如，服务可在后台处理网络事务、播放音乐，执行文件 I/O 或与内容提供程序进行交互。

总的来说，它非常适合去执行那些不需要和用户交互而且还要求长期运行的任务。

服务有三种不同的类型

- 前台服务

- 后台服务

  - `Service`

  - `IntentService`

    内部封装了线程，简化了自己处理异步线程的步骤

- 绑定服务

了解更多关于服务的概念和用法，可参阅 [服务中文文档](https://developer.android.google.cn/guide/components/services?hl=zh_cn)。

特别注意：**如果`targetSdkVersion` 设置的 API 级别是 26 或更高版本，且应用本身未在前台运行时，系统会对[运行后台服务施加限制](https://developer.android.google.cn/about/versions/oreo/background?hl=zh_cn)。在诸如此类的大多数情况下，可以参考[后台处理指南](https://developer.android.google.cn/guide/background?hl=zh_cn)**

**什么是后台服务？**

主要有两种情况，1.在没有界面的情况下启动的服务（即没有Activity）；2.当前Activity失去焦点（锁屏、回到桌面、切换到其他APP）超过60秒以上，此时在Activity中启动服务也是后台服务。

可以使用如下方法验证，将Activity切后台，70秒之后启动一个服务，Android 8.0则会报错：`java.lang.IllegalStateException: Not allowed to start service Intent`

```java
// 设置一个70秒延时任务
new Handler().postDelayed(new Runnable(){
    public void run() {
        startService(new Intent(MainActivity.this,MyService.class));
    }
}, 70000);
```

用于服务限制目的的后台定义与内存管理使用的定义不同，一个应用按照内存管理的定义可能处于后台，但按照能够启动服务的定义又处于前台。**具有可见 Activity（不管该 Activity 已启动还是已暂停），将被视为处于前台**。注意，**绑定服务**不受8.0后台限制的影响。

从Android 8.0 开始，已经不能启动后台服务，可行的替代方案有：

- 前台服务

- [JobScheduler](https://developer.android.google.cn/topic/performance/background-optimization?hl=zh_cn)

  是Android 5.0添加的新API，允许开发者在符合某些条件时创建执行在后台的任务。该机制要求至少是API 21版本，无法向后兼容。

- [JobService](https://developer.android.google.cn/reference/android/app/job/JobService?hl=zh_cn)

  是Android 5.0时加入的组件，结合了JobScheduler机制。适用于需要特定条件下才执行后台任务的场景，它由系统统一管理和调度。

- [JobIntentService](https://developer.android.google.cn/reference/androidx/core/app/JobIntentService)

- [WorkManager](https://developer.android.google.cn/topic/libraries/architecture/workmanager?hl=zh_cn)

### JobService使用

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/c5f6c2951b8fd.png)

`JobService`本质上是一个回调，我们把这个回调注册给系统的`JobScheduler`，有系统根据我们设置的一些条件，来安排如何以及什么时候来执行这个回调任务。

- 首先创建`JobInfo`，描述我们需要启动一个什么样的任务
- 创建`JobScheduler`负责对`JobService`的调度

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/0d0a837a6e574.png)

| 对比角度   | Service                                                      | JobService                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 实现原理   | 由APP侧发出请求，ActivityManagerService接收请求后进行调度，通知APP侧进行创建，开始(绑定)，停止(解绑)和销毁Service。 | 由APP侧发出请求，JobSchedulerService接收请求后，通过ActivityManagerService去调度JobService的创建，绑定和解绑。并由JobSchedulerService自己进行JobService的开始，取消和停止等操作。即JobService是由系统负责调用和维护 |
| 启动条件   | Service的启动并没有什么特定的条件设置。如果说非要有什么具体的执行条件的话，就是APP侧自己根据业务逻辑在适当的时候调用startService()或者bindService()。 | JobService的执行需要至少一个条件。没有条件的JobService是无法启动的，在创建JobInfo的时候会抛出异常。 |
| 运行时间   | onStartCommand()的回调在UI线程，不可执行耗时逻辑，否则可能造成ANR。 | onStartJob()的回调在UI线程，不可执行耗时逻辑，否则可能造成ANR或者Job被强制销毁(超过8s)。并且，JobService里即便新起了线程，处理的时间也不能超过10min，否则Job将被强制销毁。 |
| 启动角度   | onStartCommand()里返回START_STICKY可以告诉AMS在被停止后自动启动。 | onStopJob()里返回true，即可在被强制停止后再度启动起来。      |
| 扩展性     | APP侧可以通过Binder创建远程Service进行IPC。                  | JobService的绑定实际上是由JobSchedulerService自己去做的。绑定后产生的Binder用于和JobSchedulerService进行IPC，APP侧无法通过JobService扩展去实现别的IPC功能。 |
| 实际应用上 | 适合需要常驻后台，立即执行，进行数据获取，功能维持的场景。比如 音乐播放，定位，邮件收发等。 | 适合不需要常驻后台，不需要立即执行，在某种条件下触发，执行简单任务的场景。比如 联系人信息变化后的快捷方式的更新，定期的更新电话程序的联系人信息，壁纸更改后去从壁纸提取颜色的后台任务。 |

**JobService API**

| 方法            | 参数                                                        | 描述                                                         |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| `onStartJob()`  | `params`：包含用于配置/识别任务的参数，由系统传递           | 任务开始时的回调，实现实际的工作逻辑。执行该方法时需要返回一个布尔值，返回true时，任务将保持活动状态，直到系统调用`jobFinished`或者直到该任务所需的条件不在满足；返回false，系统会自动结束任务；只要任务正在执行，系统就会代表应用程序保留一个唤醒锁。 |
| `jobFinished()` | `wantsReschedule`：若希望系统再次执行该任务，则应设置为true | 调用此方法通知JobScheduler该任务已完成。当系统收到此消息时，它会释放为该任务保留的唤醒锁。注意，该方法执行完后不会回调`onStopJob()`，但会回调`onDestroy()` |
| `onStopJob()`   | 同上                                                        | 当JobScheduler发觉该任务条件不满足时，或者任务被抢占或被取消时的强制回调。注意，如果想在这种意外的情况下让任务重新开始，返回值应该设置为true |
| `onCreate()`    | 从父类Service继承的方法                                     | 可以在这里设置BroadcastReceiver或者ContentObserver           |
| `onDestroy()`   | Service被销毁前的回调                                       | 可以在这里注销BroadcastReceiver或者ContentObserver           |

**JobScheduler API**

| 方法名              | 描述                                                    |
| ------------------- | ------------------------------------------------------- |
| schedule()          | 安排一个任务                                            |
| enqueue()           | 安排一个任务，但是可以将一个任务排入队列                |
| cancel()            | 取消一个指定ID的任务                                    |
| cancelAll()         | 取消该app所有的注册到JobScheduler里的任务               |
| getAllPendingJobs() | 获取该app所有的注册到JobScheduler里未完成的任务列表     |
| getPendingJob()     | 按照ID检索获得JobScheduler里未完成的该任务的JobInfo信息 |

`JobInfo.Builder`中有许多方法用于设置运行后台任何的条件，详细见[JobInfo.Builder 文档](https://developer.android.google.cn/reference/android/app/job/JobInfo.Builder)

使用JobService的一些注意事项

- JobInfo创建的时候必须设置一个任务执行的条件。否则会抛出`IllegalArgumentException "You're trying to build a job with no constraints, this is not allowed."`异常
- 同一个进程里只能有唯一的Job ID。否则新的Job会抢占已经运行的Job，导致该Job被异常终止
- `JobService`因运行条件变化被强制停止后想在条件恢复时自启动，就需要让`onStopJob()`返回true
- 主动`cancel`了Job，即使`onStopJob()`返回true系统也不会再度启动该Job
- 如果要执行长时间任务，`onStartJob()`应返回true。不然`onStartJob()`刚回调结束， 任务就会被停止

从`JobService`派生子类

```java
public class MyJobService extends JobService {

    public static final int JOB_ID = 0;
    public static final int JOB_OVERDIDE_DEADLINE = 1000;

    private static final String TAG = "MyJobService";

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG, "onCreate-->");
    }

    @Override
    public boolean onStartJob(JobParameters jobParameters) {
        Log.d(TAG, "onStartJob-->");
        return true;
    }

    @Override
    public boolean onStopJob(JobParameters jobParameters) {
        Log.d(TAG, "onStopJob-->");
        return false;
    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "onDestroy-->");
        super.onDestroy();
    }
}
```

在`AndroidManifest.xml`中声明`service`和权限

```
<service android:name=".MyJobService" android:permission="android.permission.BIND_JOB_SERVICE"/ >
```

将任务交给系统的`JobScheduler`机制，让系统来安排调用

```java
final JobInfo.Builder builder = new JobInfo.Builder(MyJobService.JOB_ID,
        new ComponentName(context, MyJobService.class));
builder.setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY);  // 需要在有网络状态下运行
builder.setRequiresCharging(false);                        // 设置true表示仅在充电时运行
builder.setOverrideDeadline(MyJobService.JOB_OVERDIDE_DEADLINE); // 设置任务被立即执行的最大延迟期限

final JobScheduler scheduler = context.getSystemService(JobScheduler.class);
scheduler.schedule(builder.build());
```

另外，`builder`还可以通过`setPeriodic()`设置周期性任务，但最小间隔时间是15分钟，传入小于15分钟的值是无效的。还需要注意，`setMinimumLatencyc()`和`setOverrideDeadlinec()`不能同`setPeriodicc()`一起使用，会引起报错。

### JobIntentService

它是IntentService + JobScheduler的实现，极大简化了代码使用，但也有明显缺陷，即无法立即执行，它的执行由JobScheduler机制来调度。具体使用，可参照 [官方文档示例](https://developer.android.google.cn/reference/androidx/core/app/JobIntentService)

### 前台服务

如果我们需要一个立即执行的，且优先级较高的服务处理即时任务，那么在Android 8.0之后的版本上，可以将后台服务升级为前台服务。

```java
// 兼容低版本，启动服务
if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
    context.startForegroundService(new Intent(getApplicationContext(),MyService.class));
} else{
    context.startService(new Intent(getApplicationContext(),MyService.class));
}
```

服务代码

```java
    @Override
    public void onCreate() {
        super.onCreate();
        Log.d("TestService","onCreate");
        Notification notification = createForegroundNotification();
        //启动通知 ,id不能为0
        startForeground(1, notification);

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d("TestService","onStartCommand");
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        Log.d("TestService","onDestroy");
        // 关闭通知
        stopForeground(true);
        super.onDestroy();
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    /**
     * 设置服务在通知栏的显示情况
     */
    private Notification createForegroundNotification() {
        NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        // 创建唯一的通道id
        String chanId = "myId";

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            //通道名称，用于在系统设置=》通知中显示
            String channelName = "这是我们的前台测试";
            //通道的重要程度
            int importance = NotificationManager.IMPORTANCE_HIGH;
            NotificationChannel notificationChannel = new NotificationChannel(chanId, channelName, importance);
            notificationChannel.setDescription("Channel description");
            //设置呼吸灯
            notificationChannel.enableLights(true);
            notificationChannel.setLightColor(Color.RED);
            //震动
            notificationChannel.setVibrationPattern(new long[]{0, 1000, 500, 1000});
            notificationChannel.enableVibration(true);

            if (notificationManager != null) {
                // 向系统注册通知渠道
                notificationManager.createNotificationChannel(notificationChannel);
            }
        }

        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, chanId);
        //通知栏的小图标
        builder.setSmallIcon(R.mipmap.ic_launcher);
        //通知标题
        builder.setContentTitle("前台通知你");
        //通知内容
        builder.setContentText("这是一个前台服务测试，请不要清除它");
        //设置通知显示的时间
        builder.setWhen(System.currentTimeMillis());
        //设置点击响应
        Intent activityIntent = new Intent(this, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 1, activityIntent, PendingIntent.FLAG_UPDATE_CURRENT);
        builder.setContentIntent(pendingIntent);

        //创建通知并返回
        return builder.build();
    }
}
```

需要特别注意，在Android 9.0及以上版本时，启动前台服务，还需要配置一个权限

```xml
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

### WorkManager

用于支持Android后台任务，提供延迟、周期性，约束性需求的后台任务。任务是交给系统统一调度的，适合一些轻量级的后台功能使用。还能支持在Doze模式下运行后台任务，WorkManager会在Doze模式的窗口期运行任务。其设计用意就是取代后台服务，由系统统一管理你的周期性后台服务，并且自动兼容API23以下版本，API23以下版本自动在底层使用`AlarmManager` + `BroadcastReceiver`实现，而高于API23会使用`JobScheduler`实现。因此，其内部本身是对`JobScheduler`的封装，并且解决了`JobScheduler`无法向后兼容的问题，是谷歌官方极力推荐的方案。另关于 Doze模式详细介绍，可参阅一篇 [翻译资料](https://blog.csdn.net/licaomengRICE/article/details/48735957)

![img](https://developer.android.google.cn/images/topic/libraries/architecture/workmanager/overview-criteria.png)

**使用要点**

1. 针对不需要及时完成的任务。如，发送应用程序日志、同步应用程序数据、备份用户数据等，这些任务并不需要立即完成。如果我们自己来管理这些任务，逻辑可能会非常复杂，若API使用不恰当，可能会消耗大量电量
2. 确保任务一定会被执行。即使应用程序当前不在运行中，甚至在设备重启过后，任务仍然会在适当的时刻被执行。因为WorkManager有自己的数据库，关于任务的所有信息和数据都保存在该数据库中。因此，只要提交了任务，就能够保证完成任务。
3. 兼容范围广。最低能兼容API Level 14。

**概念解释**

WorkManager API使用了几个不同的类，以下是最重要的WorkManager类：

- [Worker](https://developer.android.google.cn/reference/androidx/work/Worker.html)：指定需要执行的任务，继承此类并在此处执行工作
- [WorkRequest](https://developer.android.google.cn/reference/androidx/work/WorkRequest.html)：表示一个单独的任务。WorkRequest对象指定哪个Worker类应该执行任务。你可以向WorkRequest对象添加细节，指定任务应该在哪些条件下运行。每个WorkRequest都有一个自动生成的惟一ID；可以使用该ID执行诸如取消队列中的任务或获取任务的状态之类的操作。WorkRequest是一个抽象类；在代码中，你应当使用它的某个子类，[OneTimeWorkRequest](https://developer.android.google.cn/reference/androidx/work/OneTimeWorkRequest.html)或[PeriodicWorkRequest](https://developer.android.google.cn/reference/androidx/work/PeriodicWorkRequest.html)
- [WorkRequest.Builder](https://developer.android.google.cn/reference/androidx/work/WorkRequest.Builder.html)：创建WorkRequest对象的帮助类。你将使用一个子类，[OneTimeWorkRequest.Builder](https://developer.android.google.cn/reference/androidx/work/OneTimeWorkRequest.Builder.html)或[PeriodicWorkRequest.Builder](https://developer.android.google.cn/reference/androidx/work/PeriodicWorkRequest.Builder.html)
- [Constraints](https://developer.android.google.cn/reference/androidx/work/Constraints.html)：指定任务的约束条件（例如，“仅当设备连接到网络时”）。你通过[Constraints.Builder](https://developer.android.google.cn/reference/androidx/work/Constraints.Builder.html)创建 Constraints对象。在创建WorkRequest之前，传递Constraints 对象给`WorkRequest.Builder`
- [WorkManager](https://developer.android.google.cn/reference/androidx/work/WorkManager.html)：对`WorkRequest`进行排队和管理。将WorkRequest对象传递给WorkManager来执行任务。WorkManager以分散系统资源负载的方式调度任务，同时遵守你指定的约束
- [WorkStatus](https://developer.android.google.cn/reference/androidx/work/WorkStatus.html)：包含有关特定任务的信息。WorkManager为每个WorkRequest对象提供[LiveData](https://developer.android.google.cn/reference/android/arch/lifecycle/LiveData.html)。LiveData保存一个WorkStatus对象；通过观察`LiveData`，可以确定当前任务的状态，并在任务完成后获得到返回值。

**使用步骤：**

一、继承`Worker`定义任务

二、使用`WorkRequest`配置任务：

1. 创建任务触发条件
2. 创建`WorkRequest`，并设置触发条件
3. 设置延迟执行任务
4. 设置退避策略（即任务执行时出现了异常，你希望如何重试该任务）
5. 给任务设置tag标签

三、提交任务给系统

四、观察任务的状态（可主动获取或实时监听）

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/2019012020201011.png)

**WorkManager有两种工作类型**

- `OneTimeWorkRequest` : 一次性任务，成功执行后，便彻底结束。
- `PeriodicWorkRequest`: 周期性任务，按照设定的时间定期执行。

注意，周期性任务的间隔时间不能少于15分钟。

关于WorkManager 的简单使用，参阅官方文档 [WorkManager 快速入门](https://developer.android.google.cn/topic/libraries/architecture/workmanager/basics.html)，关于其版本号，可查询[版本发布](https://developer.android.google.cn/jetpack/androidx/releases/work?hl=zh_cn)。关于周期性任务的使用流程，与一次性任务大致相同，但需要注意，`PeriodicWorkRequest`入队后也会立即执行，所以你如果需要一开始就延迟，应当设置延迟时间

```java
// 设置任务执行时的约束条件
Constraints constraints = new Constraints.Builder()
        .setRequiresDeviceIdle(true)//触发时设备是否为空闲
        .setRequiresCharging(true)//触发时设备是否充电
        .setRequiredNetworkType(NetworkType.UNMETERED)//触发时网络状态
        .setRequiresBatteryNotLow(true)//指定设备电池是否不应低于临界阈值
        .setRequiresStorageNotLow(true)//指定设备可用存储是否不应低于临界阈值
        .build();

PeriodicWorkRequest periodicWorkRequest = new PeriodicWorkRequest.Builder(MyWorker.class, 15 ,TimeUnit.MINUTES)
        .setConstraints(constraints)
        .build();

// 设置任务监听
WorkManager.getInstance(MainActivity.this).getWorkInfoByIdLiveData(periodicWorkRequest.getId()).observe(MainActivity.this, new Observer<WorkInfo>() {
                    @Override
                    public void onChanged(WorkInfo workInfo) {
                        switch (workInfo.getState()) {
                            case RUNNING:
                                Log.d("WorkManager", "当前进度 = " + workInfo.getProgress().getInt("Progress", 0));
                                break;
                            case CANCELLED:
                                Log.d("WorkManager", "取消任务");
                                break;
                            default:
                        }
                    }
                });

WorkManager.getInstance(MainActivity.this).enqueue(periodicWorkRequest);
```

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/20190120203119855.png)

注意，`Worker`的父类是`ListenableWorker`，其中定义了许多方法，我们可以查看[ListenableWorker文档](https://developer.android.google.cn/reference/androidx/work/ListenableWorker)了解更多，通过该类，还可以自定义异步任务的实现方式。另外，关于WorkManager 的一些高级用法，请参阅[WorkManager 高级主题](https://developer.android.google.cn/topic/libraries/architecture/workmanager/advanced.html)

使用过程中需要注意：一个Worker最多有十分钟的时间来完成其执行并返回一个Result。在这个时间结束后，Worker将被提示停止。

如需在`WorkManager`与`Worker`间的传递参数，查看[这里的示例](https://developer.android.google.cn/topic/libraries/architecture/workmanager/how-to/define-work#assign_input_data)，但请注意，Data只能用于传递一些小的基本类型的数据，且数据最大不能超过10KB。

## Broadcast Receiver

广播是Android中的一种系统级的通信机制。Android中的每个应用程序都可以对自己感兴趣的广播进行注册，这样该程序就只会接收到自己所关心的广播内容，这些广播可能是来自于系统的，也可能是来自于其他应用程序的。Android提供了一套完整的API，允许应用程序自由地发送和接收广播。

接收广播需要用到一个新的组件——广播接收器（Broadcast Receiver）。

Android中的广播主要可以分为两种类型：

- 标准广播

  是一种完全异步执行的广播，在广播发出之后，所有的广播接收器几乎都会在同一时刻接收到这条广播消息，因此它们之间没有任何先后顺序可言。这种广播的效率会比较高，但同时也意味着它是无法被截断的

- 有序广播

  是一种同步执行的广播，在广播发出之后，同一时刻只会有一个广播接收器能够收到这条广播消息，当这个广播接收器中的逻辑执行完毕后，广播才会继续传递。所以此时的广播接收器是有先后顺序的，优先级高的广播接收器就可以先收到广播消息，并且前面的广播接收器还可以截断正在传递的广播，这样后面的广播接收器就无法收到广播消息了。

更多广播的细节，请查阅 [广播概览文档](https://developer.android.google.cn/guide/components/broadcasts)。同时应当熟悉高版本中，系统对广播的限制，查阅 [后台执行限制](https://developer.android.google.cn/about/versions/oreo/background?hl=zh_cn)

Android内置了很多系统级别的广播，我们可以在应用程序中通过监听这些广播来得到各种系统的状态信息。比如手机开机完成后会发出一条广播，电池的电量发生变化会发出一条广播，时间或时区发生改变也会发出一条广播，等等。如果想要接收到这些广播，就需要使用广播接收器，而要使用广播接收器，必须先对感兴趣的广播进行注册，注册广播的方式有两种：

- **静态注册**

  在`AndroidManifest.xml`中通过配置去注册的广播称为静态注册。详细参见 [静态注册属性文档](https://developer.android.google.cn/guide/topics/manifest/receiver-element?hl=zh_cn)

  ```xml
  <receiver
      android:name=".MyReceiver">
      //设置静态优先级 1000
      <intent-filter android:priority="1000">
            <action android:name="broadcast_test" />
      </intent-filter>
  </receiver>
  ```

- **动态注册**

  通过在代码中调用方法去注册，则称为动态注册。

  ```java
  IntentFilter filter = new IntentFilter();
  filter.addAction(Intent.ACTION_SCREEN_ON);
  // 设置动态广播接收器优先级
  filter.setPriority(IntentFilter.SYSTEM_HIGH_PRIORITY);
  
  mContext.registerReceiver(
      new BroadcastReceiver() {
         @Override
            public void onReceive(Context context, Intent intent) {
                String action = intent.getAction();
                if (action.equals(Intent.ACTION_SCREEN_ON)) {
                    handleScreenStateChanged();
            }
        }, filter);
  ```

**静态注册与动态注册的区别**

1. 动态注册广播不是常驻型广播，注册与注销必须成对使用，一般在`onCreate`中注册，`onDestroy`中注销。如果当前程序的进程并未运行，则不会接收到广播。静态注册是常驻型，也就是说程序并未启动时，如果有广播到来，程序会被系统自动运行。
2. 当广播为有序广播时，优先级高的先接收（不分静态和动态）。同优先级的广播接收器，则动态优先于静态
3. 同类型的同优先级的广播接收器，静态：先扫描的优先于后扫描的，动态：先注册的优先于后注册的接收
4. 当广播为标准广播时，无视优先级，动态注册的优先于静态注册的。

关于所有的系统广播常量列表，可以去SDK目录下的`platforms\android-29\data`中查看`broadcast_actions.txt`文件。

Android 8.0及其以上版本中仍可用于静态[注册的系统广播](https://developer.android.google.cn/guide/components/broadcast-exceptions?hl=zh_cn)

## ContentProvider

是一个跨进程数据共享组件。除了数据共享，还能实现跨进程的方法调用和通知。Android为常见的一些数据提供了默认的ContentProvider（包括音频、视频、图片、日历和通讯录等）。

![img](https://gitee.com/arcticfox1919/ImageHosting/raw/master/img/Snipaste_2020-09-06_18-56-59.jpg)

Android系统中关于内置的`ContentProvider`参数，可查询 [provider文档](https://developer.android.google.cn/reference/android/provider/package-summary)

以下是一段查询`ContentProvider`的标准模板代码，查询指定类型的图片

```java
private void getPhotoInfo(Context c) {
    Uri imgUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;

    String[] proj = { MediaStore.Images.Media._ID
            , MediaStore.Images.Media.DATA
            ,MediaStore.Images.Media.SIZE
            ,MediaStore.Images.Media.DISPLAY_NAME};

    Cursor cursor = null;
    try {
        cursor = c.getContentResolver().query(imgUri,
                proj,
                MediaStore.Images.Media.MIME_TYPE + "=? or " + MediaStore.Images.Media.MIME_TYPE + "=?",
                new String[]{"image/jpeg", "image/png"},
                MediaStore.Images.Media.DATE_MODIFIED+" desc");

        if(cursor != null) {
            while (cursor.moveToNext()) {
                // 图片的路径
                String path = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DATA));
                // 图标大小
                int size = cursor.getInt(cursor.getColumnIndex(MediaStore.Images.Media.SIZE)) / 1024;
                // 图片文件名
                String displayName = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DISPLAY_NAME));

                Log.d("AllPhotoInfo",path);
            }
        }
    }catch (Exception e){
        e.printStackTrace();
    }finally {
        if (cursor != null) cursor.close();
    }
}
```

如需要查询所有类型图片，则将查询条件传`null`

```java
cursor = c.getContentResolver().query(imgUri,
        proj,
        null,
        null,
        MediaStore.Images.Media.DATE_MODIFIED+" desc");
```

不要忘记申请权限。在android 6.0及更高版本上，需要动态申请该权限。

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
```

除此外，`ContentProvider`还提供了监听机制，当数据发生变化时，我们可以通过监听器来监听这种变化。

自定义类继承`ContentObserver`

```java
public class MyContentObserver extends ContentObserver {

    public MyContent(Handler handler) {
        super(handler);
    }

    @Override
    public void onChange(boolean selfChange) {
        this.onChange(selfChange,null);
    }

    @Override
    public void onChange(boolean selfChange, Uri uri) {
        Log.d("MyContentObserver",uri.toString());
    }
}
```

注册监听器

```java
getContentResolver().registerContentObserver(
    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,true,new MyContentObserver(mHandler));
```

注意，在适当的时候一定要注销监听器

```java
getContentResolver().unregisterContentObserver(mContentObserver);
```

更多细节可查询[ContentObserver 文档](https://developer.android.google.cn/reference/android/database/ContentObserver)，需要注意，`registerContentObserver`方法有三个参数，其中第一个为需要监听的`Uri`，第二个为是否精确匹配，第三个为监听器的实例对象。

当第二个参数为false 表示精确匹配，例：

```
content://bczl.xyz/student
content://bczl.xyz/student/#
content://bczl.xyz/student/home
```

如果我们监听的Uri是第一个，那么精确匹配情况下，后面两种Uri是不会监听的，因此一般都将此参数设为true

如需在当前内置存储中通过`ContentProvider`查询所有文件信息，可以使用如下Uri

```java
Uri fileUri = MediaStore.Files.getContentUri("external");
```

------