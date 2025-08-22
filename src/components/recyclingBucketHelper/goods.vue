

<template>
    <w-div  hover="bd=1;red;solid"  bd="1 #ddd solid" p="5" radius="8"  w="200" flex="col j-between" style="user-select: none;">
      <w-div  h="200" w="188" :bg="`${props.img}`" s.-bg="cover r-n" radius="8">
      </w-div>
      <w-div flex="1 col j-between">
        <w-p px="5">{{ props.name }}</w-p>
        <w-p px="5" c="red" flex="j-between">
          <span>￥{{ price||'FREE' }} {{ price?'元':'!' }}</span>
          <slot></slot>
        </w-p>
      </w-div>


    </w-div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string,
  price: number,
  img:string
}>()

</script>

<style lang="scss" scoped>

</style>