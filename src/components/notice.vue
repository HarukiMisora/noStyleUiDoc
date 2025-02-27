


<script lang='ts' setup>

const prop = defineProps<{msg:string,title?:string,type?:string}>()
</script>

<template>
    <v-md-preview :text="`:::${type||'tip'} ${title||'提示'}\n${prop.msg}\n:::`"></v-md-preview>

</template>

<style lang='scss'>

</style>
