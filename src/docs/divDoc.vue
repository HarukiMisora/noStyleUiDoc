<template >
    <w-div class="flex-1" bg="white" p="20">
        <w-div p="20" flex="col">
            <w-h1 mb="10">WDiv 盒子</w-h1>
            <NoTice title="作用" msg="它负责渲染一个普通的\<div><\/div>，但是我将css样式 “属性化”与“command化”了，我们可以通过属性去定义样式，这和直接定义class或者style有什么区别？我们可以往后看！"></NoTice>
        </w-div>
        <w-div p="20" >
            <h1 mb="40">基础用法</h1>
            <w-span>我们可以使用各种各样的属性（props）去定义盒子的样式,列如 w="25" 意思就是 class = "w-25"，至于挂载css的数值最大值与最小值范围可以通过引入不同的配置文件，更大的允许范围意味着更大的css文件，或者通过
                <w-span c="blue"> css配置工具 </w-span>生成更加自由的数值范围
            </w-span>
            <w-div>当然我还提供了多种单位符$、p、v...等等，还有命令集等等，让我们样式的设定变得更加自由,比如命令符 $ 可以不再受挂载的css最大值的限制,它可以让我们的样式挂载到style上</w-div>
        </w-div>
        <w-div p="20">
            <w-div>
                <w-div :flex="['g-2']"  >
                    <w-div v-for="i in 35" :p="i" :w="10+i" :h="10+i" :f="i+14" bg="red" :c="`$rgb(${0+i*7},0,0)`" flex="" style="align-items: center;justify-content: center;">
                        {{ i }}
                    </w-div>
                </w-div>
                <w-div :flex="['g-2']"  >
                    <w-div v-for="i in 35" :p="36-i" :w="45-i" :h="45-i" :f="i+14" :bg="`$rgb(0,${0+i*7},0)`" flex="" style="align-items: center;justify-content: center;">
                        {{ 36-i }}
                    </w-div>
                </w-div>
                
            </w-div>
        </w-div>

 
        <PropsDisplay :props="pxsProps">
            <CodePreview title="像素Porps" :text='`\`\`\`html\n<w-div w="150" h="150" p="20" radius="8" f="24" bg="red">title</w-div>\n\`\`\``'>
                <w-div mb="10">通过w、h、p、m、radius等属性定义盒子的宽高以及内外边距</w-div>
                <w-div w="100" h="100" p="20" radius="8" f="24"  bg="red">title</w-div>
            </CodePreview>
        </PropsDisplay>
    

        <PropsDisplay  :props="backgroundProps">
            <CodePreview title="bg 属性集合" :text="bgCode">
                <w-div mb="10">传入字符串时，仅支持颜色与图片地址，可以使用$单位符;当传入一个数组时，它可以同时支持下面一系列的属性；</w-div>
                <w-div :flex="['g-10','wrap']" c="red">
                    <w-group w="150" h="150" p="20" radius="8" f="24" :bg="as.img">
                        <w-div :bg="['s-fill','r-n','c-black','p-top']">图1</w-div>
                        <w-div :bg="['s-contain','r-n','c-black','p-top']">图2</w-div>
                        <w-div :bg="['s-cover','r-n','c-black']">图3</w-div>
                        <w-div :bg="['s-cover','r-n',]">图4</w-div>
                        <w-div :bg="['s-none','r-n','c-black']">图5</w-div>
                        <w-div :bg="['w-100']">图6</w-div>
                        <w-div :bg="['w-125','s-contain','r-n','c-green']">图7</w-div>
                    </w-group>
                </w-div>
            </CodePreview>
            <w-div mt="5">不知道上面代码中的WGroup是什么？请查阅 <router-link class="mx-5" to="/docs/group" >WGroup文档</router-link></w-div>
        </PropsDisplay>
        <NoTice title="注意" msg="w和h会组合成{background-size:w h}到style属性里，当你只使用w或h其中一个属性时，另一个属性默认为auto,也就是会根据你设定宽度或者高度自动的修订图片大小以适应原始图片比列。当你真的仅想更改其中一个属性时，而另一个属性想要保持原始图片的大小，你应该将另一个属性手动设置为原始图片的宽度或者高度。" ></NoTice>

        <PropsDisplay  :props="flexProps" >
            <CodePreview title="flex属性集合" :text="flexCode" mt="10">
                <w-div :flex="['wrap' ,'j-between']" c="red">
                    <w-div :flex="['g-10','wrap']" c="red">
                        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'s-fill','r-n','c-black','p-top']"    flex="j-start">图1</w-div>
                        <w-div w="150" h="100" p="20" radius="8" f="24"  :bg="[as.img,'s-contain','r-n','c-black','p-top']" flex="j-center">图2</w-div>
                        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'s-cover','r-n','c-black']"           flex="j-end">图3</w-div>
                    </w-div>
                    <w-div :flex="['col','j-around']" c="red" bg="img.png">
                        <w-div w="150" h="40"  radius="8" f="16"  bg="$#e1e1e1"  flex="i-start">上</w-div>
                        <w-div w="150" h="40"  radius="8" f="16"  bg="$#e1e1e1"  flex="i-center">中</w-div>
                        <w-div w="150" h="40"  radius="8" f="16"  bg="$#e1e1e1"  flex="i-end">下</w-div>
                    </w-div>
                    <w-div :flex="['g-30','wrap','i-center']" c="red"  >
                        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'s-none','r-n','c-black']"             flex >图5</w-div>
                        <w-div w="150" h="100" p="20" radius="8" f="24"  :bg="[as.img,'w-100']"                              flex="center">图6</w-div>
                        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'w-125','s-contain','r-n','c-green']" :flex="['i-end','j-end']">图7</w-div>
                    </w-div>
                </w-div>
            </CodePreview>
     
        </PropsDisplay>

        

    </w-div>
</template>
<script lang="ts" setup>

import PropsDisplay from '../components/propsDisplay.vue';
import CodePreview from '../components/codePreview.vue';
import NoTice from '../components/notice.vue';
import {createCode} from '../components/createCode'

import { as } from '../assets/assets';

const pxs = ['w','h','x','y','f','fw','p','px','py','pl','pt','pb','pr','m','mx','my','ml','mt','mb','mr','radius']
const pxsText:{[key in typeof pxs[number]]:string} ={
    w:'width',
    h:'height',
    x:'x',
    y:'y',
    f:'font-size',
    fw:'font-weight',
    radius:'border-radius',
    p:'padding',
    pt:'padding-top',
    pb:'padding-bottom',
    pl:'padding-left',
    pr:'padding-right',
    px:'padding',
    py:'padding',
    
    m:'margin',
    mt:'margin-top',
    mb:'margin-bottom',
    ml:'margin-left',
    mr:'margin-right',
    mx:'margin',
    my:'margin',
}
const pxsProps = pxs.map((prop)=>{
    return  {
        prop,
        type:'string|number',
        default:'-',
        text:pxsText[prop],
        units:'p，v，$'
    }
})

const backgroundProps = ([
{
        prop:'无，直接放URL',
        text:'backgrund-image',
        type:'jpg|png|gif',
        default:'-',
        units:'$(仅在bg属性的值不为数组时生效)'
    },
    {
        prop:'c',
        text:'backgrund-color',
        type:'cssColor',
        default:'-',
        units:'$(仅在bg属性的值不为数组时生效)'
    },
    {
        prop:'s',
        text:'模仿 object-fit 的效果',
        type:'fill|contain|cover|none',
        default:'-',
        units:'-'
    },
    {
        prop:'x',
        text:'background-position-x',
        type:`string|'right'|'left'`,
        default:'-',
        units:'p，v'
    },
    {
        prop:'y',
        text:'background-position-y',
        type:`string|'top'|'bottom'`,
        default:'-',
        units:'p，v'
    },
    {
        prop:'w',
        text:'background-size',
        type:'string',
        default:'-',
        units:'p，v'
    },
    {
        prop:'h',
        text:'background-size',
        type:'string',
        default:'-',
        units:'p，v'
    },
])
const bgCode = `

\`\`\`html
<w-div :flex="['g-10','wrap']" c="red">
    <w-group w="150" h="150" p="20" radius="8" f="24" :bg="as.img">
        <w-div :bg="['s-fill','r-n','c-black','p-top']">图1</w-div>
        <w-div :bg="['s-contain','r-n','c-black','p-top']">图2</w-div>
        <w-div :bg="['s-cover','r-n','c-black']">图3</w-div>
        <w-div :bg="['s-cover','r-n',]">图4</w-div>
        <w-div :bg="['s-none','r-n','c-black']">图5</w-div>
        <w-div :bg="['w-100']">图6</w-div>
        <w-div :bg="['w-125','s-contain','r-n','c-green']">图7</w-div>
    </w-group>
</w-div>
\`\`\`

`
const flexCode = createCode(`
<w-div :flex="['wrap' ,'j-between']" c="red">
    <w-div :flex="['g-10','wrap']" c="red">
        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'s-fill','r-n','c-black','p-top']"    flex="j-start">图1</w-div>
        <w-div w="150" h="100" p="20" radius="8" f="24"  :bg="[as.img,'s-contain','r-n','c-black','p-top']" flex="j-center">图2</w-div>
        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'s-cover','r-n','c-black']"           flex="j-end">图3</w-div>
    </w-div>
    <w-div :flex="['col','j-around']" c="red" bg="img.png">
        <w-div w="150" h="40"  radius="8" f="16"  bg="$#e1e1e1"  flex="i-start">上</w-div>
        <w-div w="150" h="40"  radius="8" f="16"  bg="$#e1e1e1"  flex="i-center">中</w-div>
        <w-div w="150" h="40"  radius="8" f="16"  bg="$#e1e1e1"  flex="i-end">下</w-div>
    </w-div>
    <w-div :flex="['g-30','wrap','i-center']" c="red"  >
        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'s-none','r-n','c-black']"             flex >图5</w-div>
        <w-div w="150" h="100" p="20" radius="8" f="24"  :bg="[as.img,'w-100']"                              flex="center">图6</w-div>
        <w-div w="150" h="150" p="20" radius="8" f="24"  :bg="[as.img,'w-125','s-contain','r-n','c-green']" :flex="['i-end','j-end']">图7</w-div>
    </w-div>
</w-div>
`)

const flexProps=[
    {
        prop:'col',
        text:'flex-direction:column',
        type:"'col'",
        default:'-',
        units:'-'
    },
    {
        prop:'row',
        text:'flex-direction:row',
        type:"'row'",
        default:'-',
        units:'-'
    },
    {
        prop:'col-r',
        text:'flex-direction:column-reverse',
        type:"'col-r'",
        default:'-',
        units:'-'
    },
    {
        prop:'row-r',
        text:'flex-direction:row-reverse',
        type:"'row-r'",
        default:'-',
        units:'-'
    },
    {
        prop:'inh',
        text:'flex-direction:inherit',
        type:"'inh'",
        default:'-',
        units:'-'
    },
    {
        prop:'ini',
        text:'flex-direction:initial',
        type:"'ini'",
        default:'-',
        units:'-'
    },
    {
        prop:'un',
        text:'flex-direction:unset',
        type:"'un'",
        default:'-',
        units:'-'
    },
    {
        prop:'g',
        text:'gap',
        type:"string",
        default:'-',
        units:'-'
    },
    {
        prop:'wrap',
        text:'flex-wrap:wrap',
        type:"'row'",
        default:'-',
        units:'-'
    },
    {
        prop:'nowrap',
        text:'flex-wrap:nowrap',
        type:"'row'",
        default:'-',
        units:'-'
    },
    {
        prop:'center',
        text:'align-items: center;justify-content: center;',
        type:"'row'",
        default:'-',
        units:'-'
    },
    {
        prop:'i',
        text:'items-align',
        type:"'start'|'center'|'end'",
        default:'-',
        units:'-'
    },
    {
        prop:'j',
        text:'justify-content',
        type:"'start'|'center'|'end'|'around'|'between'|'evenly'",
        default:'-',
        units:'-'
    },
    {
        prop:'1',
        text:'flex:1',
        type:"'1'",
        default:'-',
        units:'-'
    },
]


</script>
<style lang="">
    
</style>