

<script lang='ts' setup>
import { as } from '../assets/assets';


</script>

<template>
    <w-div bg="white" p="20" class="flex-1" >
        <h1 mb="40">WSpan 盒子</h1>
        <w-span>它负责渲染一个普通的 {{ '<span></span>' }},除此之外的一切用法与效果都完全继承<router-link class="mx-5" to="/docs/div" >WDiv</router-link>的一切属性,请前往 <router-link class="mx-5" to="/docs/div" >WDiv文档</router-link>查阅</w-span>
        <w-div my="10" p="20" radius="12" :bg="[as.img,'s-cover','r-n']" h="$calc(100vh - 183px)"> 
        </w-div>
    </w-div>

</template>

<style lang='scss'>

</style>
