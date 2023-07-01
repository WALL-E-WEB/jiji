<template>
  <div>大家分开多久</div>
</template>

<script>
import { getCurrentInstance, defineComponent,onBeforeRouteUpdate } from 'vue'


export default defineComponent({
setup(props) {
    getCurrentInstance();
     console.log('ddd');
     onBeforeRouteUpdate((v)=>{
          console.log('ddd',v);
     });
},
  updated() {
      console.log('ddd');
  },
})
</script>