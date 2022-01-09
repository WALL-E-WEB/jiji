# Vue3.0



## Ref toRef toRefs



### Ref Reactive

```vue
const count = ref(0)
const obj = reactive({ count: 0 })

用于创建简单类型的响应式对象
用来定义对象数组的响应式
```

### toRef

https://v3.cn.vuejs.org/api/refs-api.html#toref

```
toRef是对ref数据的引用
```

### toRefs

https://v3.cn.vuejs.org/api/refs-api.html#torefs

```
防止解构失去响应式；
```

