# Vue3.0

## vue3特点

```js
1.改用Proxy实现响应式; proxy取代Object.deFineProperty;
2.compositionApi:可以将同一个功能的逻辑，组织在一个函数内部，利于维护。
```

## Proxy Reflect

```js
1.在深度监听，性能更好：
	 Object.defineProperty： 深度监听需要一次性递归；
	 Proxy：递归实现深度监听，但是是在get时递归的；
2.可以监听 新增/删除 属性：
		Object.defineProperty：this.$set(this.obj, "b", 1)；
		Proxy：新增触发set，删除触发deleteProperty;
3.可监听数组变化：
		Object.defineProperty：重写数组方法，实现监听；
		Proxy：新增触发get、set，删除触发deleteProperty;
```



## Ref toRef toRefs



### Ref Reactive

```js
const count = ref(0)
const obj = reactive({ count: 0 })

用于创建简单类型的响应式对象
用来定义对象数组的响应式
```

### toRef

https://v3.cn.vuejs.org/api/refs-api.html#toref

```js
toRef是对ref数据的引用
```

### toRefs

https://v3.cn.vuejs.org/api/refs-api.html#torefs

```js
防止解构失去响应式；
```



## watch

```typescript
watch(ref, () => {
    console.log(state, '改变')
})

watch(
  ()=>reactive.name, 
  () => {
    console.log(state, '改变');
	}
)

watch(
  () => props.total,
  (count, prevCount) => {
  	/// ...
  }
);
```



## script setup

https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95

```typescript
<script setup lang="ts">

</script>
```



### props

```typescript
const props = defineProps({
  pageIndex: {
    type: Number,
    required: true
  },
  pageSize:Number
});
```

**watch props**

```typescript
import {  watch } from 'vue'
watch(
  () => props.total,
  (count, prevCount) => {
    if (count != prevCount) {
      total.value = count ? count : 0;
    }
  }
);

```

### emit

```typescript
const emit = defineEmits([
  "update:pageIndex", // 声明自定义 model
  "update:pageSize", // 声明自定义 model
  "page-change"
]);

  emit("update:pageSize", val);
  emit("page-change", pageIndex.value, val);


```

**自定义v-model** 使用

```typescript
<TableWrap
      v-model:pageIndex="params.pageIndex"
      v-model:pageSize="params.pageSize"
      @page-change="onPageChange"
      :total="totalCountRef"
    > 
    ///....
```



## 数组声明

```typescript
<script setup lang="ts">
let tableDataRef = ref([]);
let tableDataRef2 = reactive([]);
		
		let  newArr = [1,2,3];
		tableDataRef.value = newArr;
		tableDataRef2.push(...newArr);
</script>
```

