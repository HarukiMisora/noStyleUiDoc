
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import propsDisplay from '../components/propsDisplay.vue';
import { createCode } from '../components/createCode';
import { as } from '../assets/assets';
import { ref } from 'vue';
const img = ref(as.img)
const bgCode = createCode(`
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
`)
const imgCode = createCode(`
<script>
import { as } from '../assets/assets';
const img = as.img
<\/script>

<template>
    <w-div :flex="['g-10', 'wrap']">
        <w-group w="100" h="100" c="red" bg="center">
            <w-div bg="/img.png" >引入public目录下的图片</w-div>
            <w-div bg="/img.png">引入组件相对路径的图片</w-div>
            <w-div :bg="img">
                变量名动态引入
                <w-div  :flex="['j-around']" pt="20">
                    <w-button type="success" @click="img=as.img">图1</w-button>
                    <w-button type="success" @click="img=as.head">图2</w-button>
                </w-div>
            </w-div>
        </w-group>
    </w-div>
</template>
`)
const sizeCode = createCode(`
<w-div :flex="['g-10', 'wrap']">
    <w-group w="100" h="100" c="red" >
        <w-div bg="/img.png w-75" ></w-div>
        <w-div bg="/img.png h-75"></w-div>
        <w-div :bg="\`\${img} w-75 h-75\`">
            <w-div  :flex="['j-around']" pt="60">
                <w-button type="success" @click="img=as.img">图1</w-button>
                <w-button type="success" @click="img=as.head">图2</w-button>
            </w-div>
        </w-div>
        <w-div bg="/img.png w-p100" >
            p100 = 100%
        </w-div>
        <w-div bg="/img.png h-v100">
            v100 = 100vh或者100vw
        </w-div>
    </w-group>
</w-div>
`)
const positionCode = createCode(`
<w-div :flex="['g-10', 'wrap']">
    <w-group w="$calc(95% / 3)" h="150" c="#fff" bg="green w-75 h-75 r-n /img.png" >
        <w-div bg="left" >left</w-div>
        <w-div bg="top-center" >top-center</w-div>
        <w-div bg="right">right</w-div>
        <w-div bg="left-center">left-center</w-div>
        <w-div :bg="\`\${img} center\`">center</w-div>
        <w-div bg="right-center">right-center</w-div>
        <w-div bg="bottom-left">bottom-left</w-div>
        <w-div bg="center-bottom">center-bottom</w-div>
        <w-div bg="right-bottom">right-bottom</w-div>
        <w-div bg="x-100">x-100 距离左边100px</w-div>
        <w-div bg="x-p50">x-p50 距离左边50%(position) </w-div>
        <w-div bg="x-100 y-p100">x-100 y-p100 距离左边100px，距离顶边100% </w-div>
    </w-group>
</w-div>
`)
const repeatCode = createCode(`
<w-div :flex="['g-10', 'wrap']">
                                <!--绿色背景↓来自这里-->
    <w-group w="100" h="100" c="#fff" bg="green" >
        <w-div bg="/img.png w-75 r-x" >r-x 横向填充</w-div>
        <w-div bg="/img.png h-75 r-y">r-y 竖向填充</w-div>
        <w-div :bg="\`\${img} w-75 h-75 r-n\`">
            r-n 不填充
        </w-div>
    </w-group>
</w-div>
`)
const fillCode = createCode(`
<w-div :flex="['g-10', 'wrap']">
    <w-group w="200" h="200" c="white" :bg="\`green r-n \${img}\`" >
        <w-div  style="position: relative;">默认没设置的情况{{img==='/head.png'?';图2宽高一模一样，所以fill、contain、cover从视觉表现上一模一样的，但样式表上它们是有区别的。':""}}
            <w-div w="p100"  :flex="['j-around']" pb="20" style="position: absolute;bottom: 0;">
                <w-button type="success" @click="img=as.img">图1</w-button>
                <w-button type="success" @click="img=as.head">图2</w-button>
            </w-div>
        </w-div>
        <w-div bg="fill" >fill 其实 ≈ backgroundSize:100% 100%</w-div>
        <w-div bg="contain">contain 铺满高度然后自适应宽度并居中</w-div>
        <w-div bg="cover">cover 铺满宽度然后自适应高度并居中</w-div>
        <w-div bg="none">none 其实 = center</w-div>
    </w-group>
</w-div>
`)


const backgroundProps = ([
    {
        prop:'无前缀，直接放图片URL地址',
        text:'backgrund-image',
        type:'jpg|png|gif',
        default:'-',
        units:'-'
    },
    {
        prop:'无前缀，直接定义颜色',
        text:'backgrund-color',
        type:'cssColor|HEX|RGB|RGBA',
        default:'-',
        units:'-'
    },
    {
        prop:'c',
        text:'backgrund-color',
        type:'cssColor',
        default:'-',
        units:'-'
    },
    {
        prop:'w',
        text:'background-size',
        type:'string|number',
        default:'-',
        units:'p，v'
    },
    {
        prop:'h',
        text:'background-size',
        type:'string|number',
        default:'-',
        units:'p，v'
    },
    {
        prop:'s',
        text:'模仿 object-fit 的效果',
        type:'fill|contain|cover|none',
        default:'-',
        units:'-'
    },
    {
        prop:'fill',
        text:'模仿 object-fit:fill 的效果',
        type:'-',
        default:'-',
        units:'-'
    },
    {
        prop:'contain',
        text:'模仿 object-fit:contain 的效果',
        type:'-',
        default:'-',
        units:'-'
    },
    {
        prop:'cover',
        text:'模仿 object-fit:cover 的效果',
        type:'-',
        default:'-',
        units:'-'
    },
    {
        prop:'none',
        text:'模仿 object-fit:none 的效果',
        type:'-',
        default:'-',
        units:'-'
    },
    {
        prop:'x',
        text:'background-position-x',
        type:`string|number|'right'|'left'|'center'`,
        default:'-',
        units:'p，v'
    },
    {
        prop:'y',
        text:'background-position-y',
        type:`string|number|'top'|'bottom'|'center'`,
        default:'-',
        units:'p，v'
    },
    {
        prop:'left',
        text:'background-position-x',
        type:`-`,
        default:'left',
        units:'-'
    },
    {
        prop:'right',
        text:'background-position-x',
        type:`-`,
        default:'right',
        units:'-'
    },
    {
        prop:'top',
        text:'background-position-y',
        type:`-`,
        default:'top',
        units:'-'
    },
    {
        prop:'bottom',
        text:'background-position-y',
        type:`-`,
        default:'bottom',
        units:'-'
    },
    {
        prop:'center',
        text:'background-position-x,background-position-y',
        type:`-`,
        default:'center',
        units:'-'
    },
    {
        prop:'r',
        text:'background-repeat',
        type:`'x'|'y'|'n'`,
        default:'-',
        units:'-'
    }
])

</script>

<template>
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1>bg 属性集</h1>
            <notice class="mt-10" title="作用" msg="定义盒子的背景样式"></notice>
        </w-div>
        <w-div :flex="['wrap','j-evenly']" >
            <w-div w="p48">
                <w-div :flex="['col','g-10']">
                    <codePreview  title="背景颜色 c" :text="bgCode">
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
                    </codePreview>
                    <codePreview  title="背景图片大小 w h" :text="sizeCode">
                        <w-div>只定义w时,高度会自适应保持原图片比列</w-div>
                        <w-div pb="20">只定义h时,宽度会自适应保持原图片比列</w-div>
                        <w-div :flex="['g-10', 'wrap']">
                            <w-group w="100" h="100" c="red" >
                                <w-div :bg="`${as.img} w-75`" ></w-div>
                                <w-div :bg="`${as.img} h-75`"></w-div>
                                <w-div :bg="`${img} w-75 h-75`">
                                    <w-div  :flex="['j-around']" pt="60">
                                        <w-button type="success" @click="img=as.img">图1</w-button>
                                        <w-button type="success" @click="img=as.head">图2</w-button>
                                    </w-div>
                                </w-div>
                                <w-div :bg="`${as.img} w-p100`" >
                                    p100 = 100%
                                </w-div>
                                <w-div :bg="`${as.img} h-v100`">
                                    v100 = 100vh或者100vw
                                </w-div>
                            </w-group>
                        </w-div>
                    </codePreview>
                <codePreview  title="背景图片位置 x y" :text="positionCode">
                        <w-div pb="20">
                            right-top和top-right、left-bottom和bottom-left是一个意思，并不要求你一定要把x方向或者y方向放在前面。但请不要键入left-right、bottom-top这种让计算机摸不着头脑的冲突语句。
                        </w-div>
                        <w-div :flex="['g-10', 'wrap']">
                            <w-group w="$calc(95% / 3)" h="150" c="#fff" :bg="`green w-75 h-75 r-n ${as.img}`" >
                                <w-div bg="left" >left</w-div>
                                <w-div bg="top-center" >top-center</w-div>
                                <w-div bg="right">right</w-div>
                                <w-div bg="left-center">left-center</w-div>
                                <w-div :bg="`${img} center`">center</w-div>
                                <w-div bg="right-center">right-center</w-div>
                                <w-div bg="bottom-left">bottom-left</w-div>
                                <w-div bg="center-bottom">center-bottom</w-div>
                                <w-div bg="right-bottom">right-bottom</w-div>
                                <w-div bg="x-100">x-100 距离左边100px</w-div>
                                <w-div bg="x-p50">x-p50 距离左边50%(position) </w-div>
                                <w-div bg="x-100 y-p100">x-100 y-p100 距离左边100px，距离顶边100% </w-div>
                            </w-group>
                        </w-div>
                </codePreview>
                </w-div>
                

            </w-div>
            <w-div w="p48" :flex="['col','g-10']">
                <codePreview  title="背景图片" :text="imgCode">
                    <w-div pb="20">我去，随便找的背景图片原始尺寸有这么大的吗？</w-div>
                    <w-div :flex="['g-10', 'wrap']">
                        <w-group w="100" h="100" c="red" bg="center">
                            <w-div :bg="`${as.img}`" >引入public目录下的图片</w-div>
                            <w-div :bg="`${as.img}`">引入组件相对路径的图片</w-div>
                            <w-div :bg="img">
                                变量名动态引入
                                <w-div  :flex="['j-around']" pt="20">
                                    <w-button type="success" @click="img=as.img">图1</w-button>
                                    <w-button type="success" @click="img=as.head">图2</w-button>
                                </w-div>
                            </w-div>
                        </w-group>
                    </w-div>
                </codePreview>
                <codePreview  title="背景图片重复填充 r" :text="repeatCode">
                    <w-div :flex="['g-10', 'wrap']">
                                                    <!--绿色背景↓来自这里-->
                        <w-group w="100" h="100" c="#fff" bg="green" >
                            <w-div :bg="`${as.img} w-75 r-x`" >r-x 横向填充</w-div>
                            <w-div :bg="`${as.img} h-75 r-y`">r-y 竖向填充</w-div>
                            <w-div :bg="`${img} w-75 h-75 r-n`">
                                r-n 不填充
                            </w-div>
                        </w-group>
                    </w-div>
                </codePreview>
                <codePreview  title="智能填充 模拟 img 的objcet-fill" :text="fillCode">
                        <w-div pb="20">
                            right-top和top-right、left-bottom和bottom-left是一个意思，并不要求你一定要把x方向或者y方向放在前面。
                        </w-div>
                        <w-div :flex="['g-10', 'wrap']">
                            <w-group w="200" h="200" c="white" :bg="`green r-n ${img}`" >
                                <w-div  style="position: relative;">默认没设置的情况{{img==='/head.png'?';图2宽高一模一样，所以fill、contain、cover从视觉表现上一模一样的，但样式表上它们是有区别的。':""}}
                                    <w-div w="p100"  :flex="['j-around']" pb="20" style="position: absolute;bottom: 0;">
                                        <w-button type="success" @click="img=as.img">图1</w-button>
                                        <w-button type="success" @click="img=as.head">图2</w-button>
                                    </w-div>
                                </w-div>
                                <w-div bg="fill" >fill 其实 ≈ backgroundSize:100% 100%</w-div>
                                <w-div bg="contain">contain 铺满高度然后自适应宽度并居中</w-div>
                                <w-div bg="cover">cover 铺满宽度然后自适应高度并居中</w-div>
                                <w-div bg="none">none 其实 = center</w-div>
                            </w-group>
                        </w-div>
                </codePreview>
            </w-div>
            
 
        </w-div>


        <propsDisplay  :props="backgroundProps">
                <w-h1 px="20" pt="20" >API</w-h1>
        </propsDisplay>


    </w-div>
</template>

<style lang='scss'>

</style>
