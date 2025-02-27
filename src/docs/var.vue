

<script lang='ts' setup>
import { WData } from 'nostyleui/noStyleUi/test/data';


const baseUse =`
\`\`\`html
<w-div mt="20">
    <w-var var="name" val="lilmonix3"></w-var>
    <w-div>My name is {{ WData.get('name') }}</w-div>
    <w-var var="name" val="wow"></w-var>
    <w-div>My name is {{ WData.get('name') }}</w-div>
</w-div>
\`\`\`


`

</script>

<template>
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1>WVar 变量声明盒子</h1>
            <w-span>一切命令盒子都不产生DOM结构!<br/><br/>WVar允许你再HTML里面声明"响应式"变量或者普通的常量以及变量，严格意义上来说，它并不具备响应式，但它能做到这个效果,由原本vue的响应数据响应时去带动更新这个变量与对应的视图。</w-span><br/>
            <w-span>这或许会让你感到一定困惑，我为什么需要在HTML里面去声明变量？说实话，我也有点困惑，我为什么要写这个玩意？我有写这个玩意的初衷，但是当我真的写出来之后我就重新思考了一下，这个做法真的好吗？既然写都写出来了，先放着吧，以后确实用不上了再删。</w-span>
        </w-div>
        <w-div p="20">
            <h1>WVar 基础用法</h1>
            <v-md-preview :text="baseUse"></v-md-preview>
            <w-div mt="20">
                <w-var var="name" val="lilmonix3"></w-var>
                <w-var var="color" val="red"></w-var>
                <w-div >My name is {{ WData.get('name') }}</w-div>
                <w-var var="name" val="wow"></w-var>
                <w-div>My name is {{ WData.get('name') }}</w-div>
            </w-div>
        </w-div>
    </w-div>
</template>

<style lang='scss'>

</style>
