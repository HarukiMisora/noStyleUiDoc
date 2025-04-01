
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import { createCode } from '../components/createCode';
import { as } from '../assets/assets';
import PropsDisplay from '../components/propsDisplay.vue';

const baseCode = createCode(`
<w-div flex="g-10">
    <w-group flex="center"   >
        <w-div hover="red">red</w-div>
        <w-div hover="#0f0">#0f0</w-div>
        <w-div hover="rgb(0,0,255)">rgb(0,0,255)</w-div>
        <w-div hover="red-blue">red blue</w-div>
    </w-group>
</w-div> 
<w-div flex="g-10" pt="10">
    <w-group flex="center"  c="#fff" bg="red" >
        <w-div hover="black bg-green">背景颜色</w-div>
        <w-div hover="black bg-#0f0">背景颜色</w-div>
        <w-div hover="red bg-rgb(0,0,0)">背景颜色</w-div>
        <w-div hover="bg-rgba(0,0,0,0.5)-#fff">背景颜色</w-div>
    </w-group>
</w-div>
<w-div :bg="as.img+' w-60 center'" h="125" mt="20" hover="bg-w:p100" style="transition: all .2s ease;">
    <w-span c="#fff" bg="#0008">transition将在下个发布版本加入，配合hover就可以实现一些像这样的过渡动画了。</w-span>
</w-div>
`)
const directionCode = createCode(`
<w-div :flex="['g-10','wrap']" c="green">
    <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" :hover="as.img+' bg-cover'" >
        <w-div bd="l-solid t-dashed r-double b-dotted" ></w-div>
        <w-div bd="dashed-red x-solid"></w-div>
        <w-div bd="dotted blue y-red" hover="bg-none"></w-div>
        <w-div bd="double r-solid-red-#fff"></w-div>
    </w-group>
</w-div>
<w-div :flex="['g-10','wrap']">
    <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill','r-n']" hover="bg-cover-w:50">
        <w-div bd="t-groove" hover="bg-left"></w-div>
        <w-div bd="r-outset-red" hover="bg-right"></w-div>
        <w-div bd="b-inset blue" hover="bg-top-center"></w-div>
        <w-div bd="l-ridge" hover="bg-bottom-center"></w-div>
    </w-group>
</w-div>
`)




const  bdProps = ([
    {
        prop:'无前缀，直接放图片URL地址',
        text:'backgrund-image',
        type:'jpg|png|gif',
        default:'-',
        units:'-'
    },
    {
        prop:'无前缀，直接定义颜色',
        text:'color',
        type:'cssColor|HEX|RGB|RGBA',
        default:'-',
        units:'-'
    },
    // {
    //     prop:'无前缀，直接定义边框样式',
    //     text:'border-style',
    //     type:'dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid',
    //     default:'-',
    //     units:'-'
    // },
    // {
    //     prop:'无前缀，直接输入数字',
    //     text:'border-width',
    //     type:'number',
    //     default:'-',
    //     units:'-'
    // },
    {
        prop:'bg',
        text:'bg属性集',
        type:'-',
        default:'-',
        units:'-'
    },
    // {
    //     prop:'t',
    //     text:'定义上边框样式',
    //     type:'边框样式|颜色|尺寸',
    //     default:'-',
    //     units:'-'
    // },
    // {
    //     prop:'r',
    //     text:'定义右边框样式',
    //     type:'边框样式|颜色|尺寸',
    //     default:'-',
    //     units:'-'
    // },
    // {
    //     prop:'b',
    //     text:'定义下边框样式',
    //     type:'边框样式|颜色|尺寸',
    //     default:'-',
    //     units:'-'
    // },
    // {
    //     prop:'l',
    //     text:'定义左边框样式',
    //     type:'边框样式|颜色|尺寸',
    //     default:'-',
    //     units:'-'
    // },
   
])

</script>

<template>
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1>hover 属性集</h1>
            <notice class="mt-10" title="作用" msg="定义盒子的鼠标 hover 样式;hover属性集一条参数的前缀是其它属性集的名称，比如你想实现hover更换背景色，应该是hover='bg-red'。<br/>而对子参数的前缀与值，比如你想实现hover改变图片的backgroundPosition属性,你可以参考bg属性，bg='x-50'，要在hover里面实现这个效果应该是hover='bg-x:10'<br/>多条子参数连接起来应该是hover='bg-red-x:50-w:500-fill'"></notice>
        </w-div>
        <w-div :flex="['wrap','j-evenly']">
            <w-div w="p48">
                <w-div :flex="['col','g-10']">
                    <codePreview  title="基础用法" :text="baseCode">
                        <w-div flex="g-10">
                            <w-group flex="center"   >
                                <w-div hover="red">red</w-div>
                                <w-div hover="#0f0">#0f0</w-div>
                                <w-div hover="rgb(0,0,255)">rgb(0,0,255)</w-div>
                                <w-div hover="red-blue">red blue</w-div>
                            </w-group>
                        </w-div> 
                        <w-div flex="g-10" pt="10">
                            <w-group flex="center"  c="#fff" bg="red" >
                                <w-div hover="black bg-green">背景颜色</w-div>
                                <w-div hover="black bg-#0f0">背景颜色</w-div>
                                <w-div hover="red bg-rgb(0,0,0)">背景颜色</w-div>
                                <w-div hover="bg-rgba(0,0,0,0.5)-#fff">背景颜色</w-div>
                            </w-group>
                        </w-div>
                        <w-div :bg="as.img+' w-60 center'" h="125" mt="20" hover="bg-w:p100" style="transition: all .2s ease;">
                            <w-span c="#fff" bg="#0008">transition将在下个发布版本加入，配合hover就可以实现一些像这样的过渡动画了。</w-span>
                        </w-div>
                    </codePreview>
                </w-div>

            </w-div>
            <w-div w="p48" :flex="['col','g-10']">
                <codePreview  title="背景图片" :text="directionCode">
                    <w-div :flex="['g-10','wrap']" c="green">
                        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" :hover="as.img+' bg-cover'" >
                            <w-div bd="l-solid t-dashed r-double b-dotted" ></w-div>
                            <w-div bd="dashed-red x-solid"></w-div>
                            <w-div bd="dotted blue y-red" hover="bg-none"></w-div>
                            <w-div bd="double r-solid-red-#fff"></w-div>
                        </w-group>
                    </w-div>
                    <w-div :flex="['g-10','wrap']">
                        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill','r-n']" hover="bg-cover-w:50">
                            <w-div bd="t-groove" hover="bg-left"></w-div>
                            <w-div bd="r-outset-red" hover="bg-right"></w-div>
                            <w-div bd="b-inset blue" hover="bg-top-center"></w-div>
                            <w-div bd="l-ridge" hover="bg-bottom-center"></w-div>
                        </w-group>
                    </w-div>
                </codePreview>
            </w-div>
            
 
        </w-div>

        <PropsDisplay  :props="bdProps">
                <w-h1 px="20" pt="20" >API</w-h1>
                <w-div px="20" pt="20" >无，参考其它的prop属性，这里我列一些目前版本支持的prop属性</w-div>
        </PropsDisplay>

    </w-div>
</template>

<style lang='scss'>

</style>
