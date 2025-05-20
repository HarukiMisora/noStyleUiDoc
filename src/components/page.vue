

<script setup lang="ts">
import notice from './notice.vue';
const props = withDefaults(defineProps<{
  title: string
  msgType?:string
  msg: string
}>(),{
  msgType: 'info'
})
  
</script>


<template>
      <w-div class="flex-1" bg="white" p="40"  >
        <w-div p="20">
          <h1>{{title}}</h1>
          <notice class="mt-10" title="作用" msg="定义盒子的 position布局 样式"></notice>
        </w-div>
      </w-div>

</template>


<style scoped>

</style>