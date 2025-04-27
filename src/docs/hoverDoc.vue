
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import { as } from '../assets/assets';
import PropsDisplay from '../components/propsDisplay.vue';
import GridMode from '../components/gridMode.vue';

const  bdProps = ([
    {
        prop:'c',
        text:'color',
        type:'cssColor|HEX|RGB|RGBA',
        default:'-',
        units:'-'
    },
    {
        prop:'bg',
        text:'bg属性集',
        type:'-',
        default:'-',
        units:'-'
    },
    {
        prop:'bd',
        text:'bd属性集',
        type:'-',
        default:'-',
        units:'-'
    },
   
])

</script>

<template>
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1>hover 属性集</h1>
            <notice class="mt-10" title="作用" msg="定义盒子的鼠标 hover 样式;hover属性集一条参数的前缀是其它属性集的名称，比如你想实现hover更换背景色，应该是hover='bg=red'。<br/>而对子参数的前缀与值，比如你想实现hover改变图片的backgroundPosition属性,你可以参考bg属性，bg='size-50'，要在hover里面实现这个效果应该是hover='bg=x-10'<br/>多条子参数连接起来应该是hover='bg=red;p-50;w-500;fill'"></notice>
        </w-div>
        <GridMode>
            <codePreview  title="基础用法" >
                <w-div flex="g-10">
                    <w-group flex="center" >
                        <w-div hover="c=red">red</w-div>
                        <w-div hover="c=#0f0">#0f0</w-div>
                        <w-div hover="c=rgb(0,0,255)">rgb(0,0,255)</w-div>
                        <w-div hover="c=red+blue">red+blue</w-div>
                    </w-group>
                </w-div> 
                <w-div flex="g-10" pt="10">
                    <w-group flex="center"  c="#fff" bg="red" >
                        <w-div hover="c=black bg=green">背景颜色</w-div>
                        <w-div hover="c=black bg=#0f0">背景颜色</w-div>
                        <w-div hover="c=red bg=rgb(0,0,0)">背景颜色</w-div>
                        <w-div hover="bg=rgba(0,0,0,0.5)-#fff">背景颜色</w-div>
                    </w-group>
                </w-div>
                <w-div :bg="as.img+' size-50% center'" h="125" mt="20" hover="bg=size-100%" transition=".2s"></w-div>
            </codePreview>

            <codePreview  title="背景图片" >
                <w-div :flex="['g-10','wrap']" c="green">
                    <w-group transition radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" :hover="`bg=${as.img};cover`" >
                        <w-div bd="l-solid t-dashed r-double b-dotted" ></w-div>
                        <w-div bd="dashed red x-solid"></w-div>
                        <w-div bd="dotted blue y-red" hover="bg-none"></w-div>
                        <w-div bd="double r-solid-red+#fff"></w-div>
                    </w-group>
                </w-div>
                <w-div :flex="['g-10','wrap']">
                    <w-group transition radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill','r-n']" hover="bg=cover;size-50">
                        <w-div bd="t-groove" hover="bg=left"></w-div>
                        <w-div bd="r-outset-red" hover="bg=right"></w-div>
                        <w-div bd="b-inset blue" hover="bg=top;center"></w-div>
                        <w-div bd="l-ridge" hover="bg=bottom;center"></w-div>
                    </w-group>
                </w-div>
            </codePreview>
            <codePreview  title="边框" >
                <w-div :flex="['g-10','wrap']" c="green">
                    <w-group  radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" hover="bd=gray;" >
                        <w-div bd="l-solid t-dashed r-double b-dotted" ></w-div>
                        <w-div bd="dashed red x-solid"></w-div>
                        <w-div bd="dotted blue y-red" hover="bg-none"></w-div>
                        <w-div bd="double r-solid-red+#fff"></w-div>
                    </w-group>
                </w-div>
                <w-div :flex="['g-10','wrap']">
                    <w-group transition=".1s" radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill','r-n']" hover="bd=solid;10">
                        <w-div bd="t-groove" hover="bg=left"></w-div>
                        <w-div bd="r-outset-red" hover="bg=right"></w-div>
                        <w-div bd="b-inset blue" hover="bg=top;center"></w-div>
                        <w-div bd="l-ridge" hover="bg=bottom;center"></w-div>
                    </w-group>
                </w-div>
            </codePreview>
            <codePreview  title="组合样式" >
                <w-div 
    transition 
    :bg="as.img+' cover '"
    bd="solid" w="100%" h="200" flex="center"
    hover="bg=size-100% bd=50;solid;#0008;x-15vw-#fff8 ">
                </w-div>
            </codePreview>

        </GridMode>

        <PropsDisplay  :props="bdProps">
                <w-h1 px="20" pt="20" >API</w-h1>
                <w-div px="20" pt="20" >无，参考其它的prop属性，这里我列一些目前版本支持的prop属性</w-div>
        </PropsDisplay>

    </w-div>
</template>

<style lang='scss'>

</style>
