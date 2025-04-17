
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import { createCode } from '../components/createCode';
import { as } from '../assets/assets';
import PropsDisplay from '../components/propsDisplay.vue';
import { inject } from 'vue';

const baseCode = createCode(`
<w-div :flex="['g-10','wrap']">
    <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
        <w-div bd="solid #f00"></w-div>
        <w-div bd="dashed red"></w-div>
        <w-div bd="dotted blue"></w-div>
        <w-div bd="double red+blue"></w-div>
    </w-group>
</w-div>
<w-div :flex="['g-10','wrap']" mt="5">
    <w-group radius="5" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
        <w-div bd="groove"></w-div>
        <w-div bd="outset red"></w-div>
        <w-div bd="inset blue"></w-div>
        <w-div bd="ridge"></w-div>
    </w-group>
</w-div>
`)
const directionCode = createCode(`
<w-div :flex="['g-10','wrap']" c="green">
        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
            <w-div bd="l-solid t-dashed r-double b-dotted"></w-div>
            <w-div bd="dashed-red x-solid"></w-div>
            <w-div bd="dotted blue y-red"></w-div>
            <w-div bd="double r-solid-red+#fff"></w-div>
        </w-group>
</w-div>
<w-div :flex="['g-10','wrap']">
    <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
        <w-div bd="t-groove"></w-div>
        <w-div bd="r-outset-red"></w-div>
        <w-div bd="b-inset blue"></w-div>
        <w-div bd="l-ridge"></w-div>
    </w-group>
</w-div>
`)
const sizeCode = createCode(`
<w-div :flex="['g-10','wrap']" c="green">
        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
            <w-div bd="l-solid t-dashed r-double b-dotted 10"></w-div>
            <w-div bd="dashed-red-10 x-solid-5"></w-div>
            <w-div bd="dotted blue y-red-10"></w-div>
            <w-div bd="double r-solid r-red+#fff-1"></w-div>
        </w-group>
</w-div>
<w-div :flex="['g-10','wrap']">
    <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
        <w-div bd="t-groove-7"></w-div>
        <w-div bd="r-outset-red-8"></w-div>
        <w-div bd="b-9-inset blue"></w-div>
        <w-div bd="l-ridge-10"></w-div>
    </w-group>
</w-div>
`)
const tipCode = createCode(`
<w-div :flex="['g-10','wrap']" c="green">
    <w-group bd="solid #87ceeb 1" radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
        <w-div bd="x-red"  >
            <w-span bg="#1e1e1eff" c="white">red生效</w-span>
        </w-div>
        <w-div bd="x-#f00">
            <w-span bg="#1e1e1eff" c="white">#F00生效</w-span>
        </w-div>
        <w-div bd="x-rgb(255,0,0)">
            <w-span bg="#1e1e1eff" c="white">rgb(255,0,0)生效</w-span>
        </w-div>
        <w-div bd="x-red-red">
            <w-span bg="#1e1e1eff" c="white">red-red生效</w-span>
        </w-div>
    </w-group>
    </w-div>
<w-div :flex="['g-10','wrap']">
    <w-group bd="solid-skyblue-1" radius="5" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
        <w-div bd="x-red"  >
            <w-span bg="#1e1e1eff" c="white">red生效</w-span>
        </w-div>
        <w-div bd="x-#f00">
            <w-span bg="#1e1e1eff" c="white">#F00生效</w-span>
        </w-div>
        <w-div bd="x-rgb(255,0,0)">
            <w-span bg="#1e1e1eff" c="white">rgb(255,0,0)生效</w-span>
        </w-div>
        <w-div bd="x-red-red">
            <w-span bg="#1e1e1eff" c="white">red-red生效</w-span>
        </w-div>
    </w-group>
</w-div>
`)

const gridMode = inject<boolean>('gridMode')

const  bdProps = ([
    // {
    //     prop:'无前缀，直接放图片URL地址',
    //     text:'backgrund-image',
    //     type:'jpg|png|gif',
    //     default:'-',
    //     units:'-'
    // },
    {
        prop:'无前缀，直接定义颜色',
        text:'border-color',
        type:'cssColor|HEX|RGB|RGBA',
        default:'-',
        units:'-'
    },
    {
        prop:'无前缀，直接定义边框样式',
        text:'border-style',
        type:'dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid',
        default:'-',
        units:'-'
    },
    {
        prop:'无前缀，直接输入数字',
        text:'border-width',
        type:'number',
        default:'-',
        units:'-'
    },
    {
        prop:'t',
        text:'定义上边框样式',
        type:'边框样式|颜色|尺寸',
        default:'-',
        units:'-'
    },
    {
        prop:'r',
        text:'定义右边框样式',
        type:'边框样式|颜色|尺寸',
        default:'-',
        units:'-'
    },
    {
        prop:'b',
        text:'定义下边框样式',
        type:'边框样式|颜色|尺寸',
        default:'-',
        units:'-'
    },
    {
        prop:'l',
        text:'定义左边框样式',
        type:'边框样式|颜色|尺寸',
        default:'-',
        units:'-'
    },
   
])

</script>

<template>
    <w-div class="flex-1" bg="white" p="40"  >
        <w-div p="20">
            <h1>bd 属性集</h1>
            <notice class="mt-10" title="作用" msg="定义盒子的border边框样式"></notice>
        </w-div>
        <w-div grid="col--650px g-20" >
            <w-ghost flex="g-20 col" :ghost="gridMode">
                <codePreview  title="基础用法" :text="baseCode">
                    <w-div mb="5">
                    在上一个发布版本[0.2.19]中bd属性的 颜色混合 不要求你将所有颜色连在一起，但从现在版本开始，所有的颜色混合都必须要用+号将要混合的颜色连接起来。
                    </w-div>
                    <w-div :flex="['g-10','wrap']">
                        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
                            <w-div bd="solid #f00"></w-div>
                            <w-div bd="dashed red"></w-div>
                            <w-div bd="dotted blue"></w-div>
                            <w-div bd="double red+blue"></w-div>
                        </w-group>
                    </w-div>
                    <w-div :flex="['g-10','wrap']" mt="5">
                        <w-group radius="5" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
                            <w-div bd="groove"></w-div>
                            <w-div bd="outset red"></w-div>
                            <w-div bd="inset blue"></w-div>
                            <w-div bd="ridge"></w-div>
                        </w-group>
                    </w-div>
                </codePreview>
                <codePreview  title="尺寸" :text="sizeCode">
                    <w-div :flex="['g-10','wrap']" c="green">
                            <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
                                <w-div bd="l-solid t-dashed r-double b-dotted 10"></w-div>
                                <w-div bd="dashed-red-10 x-solid-5"></w-div>
                                <w-div bd="dotted blue y-red-10"></w-div>
                                <w-div bd="double r-solid r-red+#fff-1"></w-div>
                            </w-group>
                    </w-div>
                    <w-div :flex="['g-10','wrap']">
                        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
                            <w-div bd="t-groove-7"></w-div>
                            <w-div bd="r-outset-red-8"></w-div>
                            <w-div bd="b-9-inset blue"></w-div>
                            <w-div bd="l-ridge-10"></w-div>
                        </w-group>
                    </w-div>
                </codePreview>
            </w-ghost>

            <w-ghost flex="g-20 col" :ghost="gridMode">
                <codePreview  title="指定方向" grid="item grow-2-3" :text="directionCode">
                    <w-div mb="5">直接输入1-solid-red默认是应用到4个方向。现在我们可以用前缀t、r、b、l、x、y去告诉它我要指定方向的样式</w-div>
                    <w-div :flex="['g-10','wrap']" c="green">
                            <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
                                <w-div bd="l-solid t-dashed r-double b-dotted"></w-div>
                                <w-div bd="dashed-red x-solid"></w-div>
                                <w-div bd="dotted blue y-red"></w-div>
                                <w-div bd="double r-solid-red+#fff"></w-div>
                            </w-group>
                    </w-div>
                    <w-div :flex="['g-10','wrap']">
                        <w-group radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" c="green">
                            <w-div bd="t-groove"></w-div>
                            <w-div bd="r-outset-red"></w-div>
                            <w-div bd="b-inset blue"></w-div>
                            <w-div bd="l-ridge"></w-div>
                        </w-group>
                    </w-div>
                </codePreview>
                <codePreview  title="注意事项" :text="tipCode">
                    <w-div mb="5">上个发布版本[0.2.19]的注意事项中的一个缺陷在这个版本已经处理了，这里的red总是生效。</w-div>
                    <w-div :flex="['g-10','wrap']" c="green">
                        <w-group bd="solid #87ceeb 1" radius="p50" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
                            <w-div bd="x-red"  >
                                <w-span bg="#1e1e1eff" c="white">red生效</w-span>
                            </w-div>
                            <w-div bd="x-#f00">
                                <w-span bg="#1e1e1eff" c="white">#F00生效</w-span>
                            </w-div>
                            <w-div bd="x-rgb(255,0,0)">
                                <w-span bg="#1e1e1eff" c="white">rgb(255,0,0)生效</w-span>
                            </w-div>
                            <w-div bd="x-red-red">
                                <w-span bg="#1e1e1eff" c="white">red-red生效</w-span>
                            </w-div>
                        </w-group>
                        </w-div>
                    <w-div :flex="['g-10','wrap']">
                        <w-group bd="solid-skyblue-1" radius="5" w="100" h="100" flex="center" :bg="[as.head,'fill']" >
                            <w-div bd="x-red"  >
                                <w-span bg="#1e1e1eff" c="white">red生效</w-span>
                            </w-div>
                            <w-div bd="x-#f00">
                                <w-span bg="#1e1e1eff" c="white">#F00生效</w-span>
                            </w-div>
                            <w-div bd="x-rgb(255,0,0)">
                                <w-span bg="#1e1e1eff" c="white">rgb(255,0,0)生效</w-span>
                            </w-div>
                            <w-div bd="x-red-red">
                                <w-span bg="#1e1e1eff" c="white">red-red生效</w-span>
                            </w-div>
                        </w-group>
                    </w-div>
                </codePreview>
            </w-ghost>
        </w-div>

        <PropsDisplay  :props="bdProps">
                <w-h1 px="20" pt="20" >API</w-h1>
        </PropsDisplay>

    </w-div>
</template>

<style lang='scss'>

</style>
