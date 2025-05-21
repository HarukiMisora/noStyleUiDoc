

<script setup lang="ts">
import notice from './notice.vue';
const props = withDefaults(defineProps<{
  title: string
  msgType?:string
  msg: string
  msgKeyWord?:string
}>(),{
  msgType: 'tip',
  msgKeyWord:'作用'
})
  
</script>


<template>
      <w-div class="flex-1" bg="white" p="40"  >
        <w-div p="20">
          <h1>{{title}}</h1>
          <notice :type="msgType" class="mt-10" :title="msgKeyWord" :msg="msg"></notice>
        </w-div>
        <slot></slot>
        <!-- <GridMode><slot></slot></GridMode> -->
      </w-div>

</template>


<style scoped>

</style>