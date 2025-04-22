
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import propsDisplay from '../components/propsDisplay.vue';
import { createCode } from '../components/createCode';

import  flexCode  from './tsx/flex.vsx';``
console.log(flexCode.test2);

const baseCode = flexCode.test2
const imgCode = createCode(flexCode.directionFlex)
const gCode = createCode(`
<w-div flex="g-10">
    <w-group w="30" h="30">
        <w-div bg="red"></w-div>
        <w-div bg="c-red"></w-div>
        <w-div bg="green"></w-div>
        <w-div bg="c-green"></w-div>
        <w-div bg="#00F"></w-div>
        <w-div bg="#0000FF"></w-div>
        <w-div bg="rgb(255,255,0)"></w-div>
        <w-div bg="rgba(255,255,0,0.5)"></w-div>
        <w-div bg="red-green-#00f-rgba(255,255,0,0.5)"></w-div>
    </w-group>
</w-div>
<w-div :flex="['g-10','col']">
    <w-group w="30" h="30">
        <w-div bg="red"></w-div>
        <w-div bg="c-red"></w-div>
        <w-div bg="green"></w-div>
        <w-div bg="c-green"></w-div>
    </w-group>
</w-div>
`)
const itemsCode = createCode(`
<w-div flex h="150" c="#fff" bg="green" >
    <w-group flex="1" bd="solid red 1">
        <w-div bd="r-0" :flex="['i-start']" >i-start</w-div>
        <w-div bd="r-0" :flex="['i-center']" >i-center</w-div>
        <w-div  :flex="['i-end']" >i-end</w-div>
    </w-group>
</w-div>
`)
const justifyCode = createCode(`
<w-div flex h="150" c="#fff" bg="green" >
    <w-group flex="1" bd="solid red 1">
        <w-div  :flex="['i-start','j-end']" >
            <w-div>i-start </w-div>
            <w-div>j-end </w-div>
        </w-div>
        <w-div  :flex="['i-center','j-center']" >
            <w-div>i-center </w-div>
            <w-div>j-center </w-div>
        </w-div>
        <w-div  :flex="['i-end', 'j-start']" >
            <w-div>i-end </w-div>
            <w-div>j-start </w-div>
        </w-div>
    </w-group>
</w-div>
<w-div flex h="150" c="#fff" bg="green" >
    <w-group flex="1" bd="solid red 1">
        <w-div  :flex="['i-start','j-around']" >
            <w-div>i-start </w-div>
            <w-div>j-around </w-div>
        </w-div>
        <w-div  :flex="['i-center','j-between']" >
            <w-div>i-center </w-div>
            <w-div>j-between </w-div>
        </w-div>
        <w-div  :flex="['i-end', 'j-evenly']" >
            <w-div>i-end </w-div>
            <w-div>j-start </w-div>
        </w-div>
    </w-group>
</w-div>
`)


const flexProps = ([
    {
        prop:'col',
        text:'flex-direction',
        type:'-',
        default:'column',
        units:'-'
    },
    {
        prop:'col-r',
        text:'flex-direction',
        type:'-',
        default:'column-reverse',
        units:'-'
    },
    {
        prop:'row',
        text:'flex-direction',
        type:'-',
        default:'row',
        units:'-'
    },
    {
        prop:'row-r',
        text:'flex-direction',
        type:'-',
        default:'row-reverse',
        units:'-'
    },
    {
        prop:'g',
        text:'gap',
        type:'Number',
        default:'-',
        units:'-'
    },
    {
        prop:'wrap',
        text:'flex-wrap',
        type:'-',
        default:'wrap',
        units:'-'
    },
    {
        prop:'nowarp',
        text:'flex-nowrap',
        type:'-',
        default:'nowrap',
        units:'-'
    },
    {
        prop:'center',
        text:'align-items,justify-content',
        type:'-',
        default:'center',
        units:'-'
    },
    {
        prop:'i',
        text:'align-items',
        type:'"start"|"center"|"end"',
        default:'-',
        units:'-'
    },
    {
        prop:'j',
        text:'justify-content',
        type:'"start"|"center"|"end"|"around"|"evenly"|"between"',
        default:'-',
        units:'-'
    },
    {
        prop:'1',
        text:'flex',
        type:'-',
        default:'1',
        units:'-'
    },


  
])

</script>

<template>
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1>flex 属性集</h1>
            <notice class="mt-10" title="作用" msg="定义盒子的flex布局样式"></notice>
        </w-div>
        <w-div grid="col--650 g-20">
            <w-ghost :flex="['col','g-20']">
                <codePreview  title="基础用法 " :text="baseCode" >
                    <!-- <w-div pb="5">flex可以是一个布尔属性</w-div> -->
                </codePreview>
                <codePreview  title="间距 g-number" :text="gCode"></codePreview>
                <codePreview  title="分布 i" :text="itemsCode"></codePreview>
            </w-ghost>
            <w-ghost :flex="['col','g-20']">
                <codePreview  title="方向 col row col-r row-r" :text="imgCode"></codePreview>
                <codePreview  title="分布 j" :text="justifyCode"></codePreview>
            </w-ghost>
        </w-div>
        <propsDisplay  :props="flexProps">
                <w-h1 px="20" pt="20" >API</w-h1>
        </propsDisplay>


    </w-div>
</template>

<style lang='scss'>

</style>
