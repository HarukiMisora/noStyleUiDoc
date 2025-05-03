

<script lang='ts' setup>
import { as,path } from '../assets/assets';
import Notice from '../components/notice.vue';

</script>

<template>
    <w-div bg="white" p="20" class="flex-1" >
        <h1 mb="40">WSpan 盒子</h1>
        <Notice :msg="`它负责渲染一个普通的\<span><\/span>,除此之外的一切用法与效果都完全继承WDiv的一切属性,请前往<a class='mx-5' href='${path('/#/docs/div')}' >WDiv文档</a>查阅`"></Notice>
        <w-div my="10" p="20" radius="12" :bg="[as.img,'s-cover','r-n']" h="calc(100vh - 183px)"> </w-div>
    </w-div>

</template>

<style lang='scss'>

</style>
