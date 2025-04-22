
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import propsDisplay from '../components/propsDisplay.vue';


import  flexCode  from './tsx/flex.vsx';``


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
                <codePreview  title="基础用法 " :text="flexCode.baseCode" >
                    <!-- <w-div pb="5">flex可以是一个布尔属性</w-div> -->
                </codePreview>
                <codePreview  title="间距 g-number" :text="flexCode.gapCode"></codePreview>
                <codePreview  title="分布 i" :text="flexCode.itemsCode"></codePreview>
            </w-ghost>
            <w-ghost :flex="['col','g-20']">
                <codePreview  title="方向 col row col-r row-r" :text="flexCode.direction"></codePreview>
                <codePreview  title="分布 j" :text="flexCode.justifyCode"></codePreview>
            </w-ghost>
        </w-div>
        <propsDisplay  :props="flexProps">
                <w-h1 px="20" pt="20" >API</w-h1>
        </propsDisplay>


    </w-div>
</template>

<style lang='scss'>

</style>
