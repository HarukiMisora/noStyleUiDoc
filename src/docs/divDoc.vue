<template >
    <w-div class="flex-1" bg="white" p="20">
        <w-div p="20" flex="col">
            <w-h1 mb="10">WDom 盒子</w-h1>
            <NoTice title="作用" msg="它负责渲染一个普通的没有任何样式的原生盒子，比如\<w-div><\/w-div>将会渲染一个\<div><\/div>，不同的是，我将css样式 “属性化”了，我们可以通过属性去定义样式，这和直接定义class或者style有什么区别？我们可以往后看！"></NoTice>
        </w-div>
        <w-div px="20">
            <w-h1 f="18">支持的盒子</w-h1>
            <w-ul px="20">
                <w-group pt="10">
                    <w-li>
                        &lt;w-div&gt;&lt;/w-div&gt;
                    </w-li>
                    <w-li>
                        &lt;w-span&gt;&lt;/w-span&gt;
                    </w-li>
                    <w-li>
                        &lt;w-p&gt;&lt;/w-p&gt;
                    </w-li>
                    <w-li>
                        &lt;w-a&gt;&lt;/w-a&gt;
                    </w-li>
                    <w-li>
                        &lt;w-h1&gt;&lt;/w-h1&gt;
                    </w-li>
                    <w-li>
                        &lt;w-img&gt;&lt;/w-img&gt;
                    </w-li>
                    <w-li>
                        &lt;w-ul&gt;&lt;/w-ul&gt;
                    </w-li>
                    <w-li>
                        &lt;w-ol&gt;&lt;/w-ol&gt;
                    </w-li>
                    <w-li>
                        &lt;w-li&gt;&lt;/w-li&gt;
                    </w-li>
                    <w-li>
                        &lt;w-canvas&gt;&lt;/w-canvas&gt;
                    </w-li>
                    <w-li>
                        &lt;w-video&gt;&lt;/w-video&gt;
                    </w-li>
                    <w-li>
                        &lt;w-tarck&gt;&lt;/w-tarck&gt;
                    </w-li>
                    <w-li>
                        &lt;w-meter&gt;&lt;/w-meter&gt;
                    </w-li>
                    <w-li>
                        &lt;w-details&gt;&lt;/w-details&gt;
                    </w-li>
                    <w-li>
                        &lt;w-summary&gt;&lt;/w-summary&gt;
                    </w-li>
                </w-group>
            </w-ul>
        </w-div>
        <w-div p="20" >
            <h1 mb="40">基础用法</h1>
            <w-span>我们可以使用各种各样的属性（props）去定义盒子的样式,列如 w="25" 意思就是 class = "w-25"，至于挂载css的数值最大值与最小值范围可以通过引入不同的配置文件，更大的允许范围意味着更大的css文件，或者通过
                <w-span c="blue"> css配置工具 </w-span>生成更加自由的数值范围
            </w-span>
            <w-div>当然我还提供了多种单位符$、p、v...等等，还有命令集等等，让我们样式的设定变得更加自由,比如命令符 $ 可以不再受挂载的css最大值的限制,它可以让我们的样式挂载到style上</w-div>
            <w-div>注意：上面这些$、p、v单位符，我认为我有非常大的概率会删除并弃用这些东西，我可能会让程序自动的去操作，当然这个想法还有待争议，会暂且保留一段时间，不过即便要保留，我也会换个更优雅的方式，总之目前的方案，一定会被弃用。</w-div>
        </w-div>
        <w-div pb="20">
            <CodePreview title="常见的布局案例" :text='baseCode'>
                <w-div flex bg="$#e1e1e1" bd="solid-1">
                    <w-div h="300" w="200" bg="gray" p="20" :flex="['g-10','col']">
                        <w-group flex hover="red bg-blue">
                            <w-span >举世无双</w-span>
                            <w-span >聪明绝顶</w-span>
                            <w-span >沉鱼落雁</w-span>
                            <w-span hover="red blue black bg-rgb(0,0,0)">hover字体的颜色也可以混合。</w-span>
                        </w-group>
                    </w-div>
                    <w-div  :flex="['1','col']">
                        <w-group p="20" :bg="[as.img,'cover','h-p100','r-n','center']" h="$calc(100% / 4)" bd="b-1-solid-#0f0">
                            <w-div bg="right">
                                WGrop的作用是装载共有样式然后分发给子盒子,当然子盒自身的属性优先生效。
                            </w-div>
                            <w-div bg="red-blue-green" >
                                多个颜色拼接可以混合颜色，red+blue+green 就是这个背景色。
                                
                            </w-div>
                            <w-div :bg="['red-green-blue','right']" >
                                颜色混合的顺序是从左到右混合。red+green+blue 会是这个背景色
                            </w-div>
                            <w-div  :hover="`${as.head}  bg-right red`" bd="none">
                                <w-span hover="blue">
                                    hover属性可以直接便捷的创建hover的样式,这里有红色(父)和蓝色(子)两种hover样式。
                                </w-span>
                            </w-div>
                        </w-group>
                    </w-div>
                </w-div>
            </CodePreview>
        </w-div>


 
        <PropsDisplay :props="pxsProps">
            <CodePreview title="像素Porps" :text='`\`\`\`html\n<w-div w="100" h="100" p="20" radius="8" f="24" fw="600"  bg="red">title</w-div>\n\`\`\``'>
                <w-div mb="10">通过w、h、p、m、radius等属性定义盒子的宽高以及内外边距</w-div>
                <w-div w="100" h="100" p="20" radius="8" f="24" fw="600"  bg="red">title</w-div>
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


const baseCode = createCode(`
\<script>
    const as = {
        img: path('/img.png'),
        head: path('/head.png')
    }
<\/script>
<template>
    <w-div flex bg="$#e1e1e1" bd="solid-1">
        <w-div h="300" w="200" bg="gray" p="20" :flex="['g-10','col']">
            <w-group flex hover="red bg-blue">
                <w-span >举世无双</w-span>
                <w-span >聪明绝顶</w-span>
                <w-span >沉鱼落雁</w-span>
                <w-span hover="red blue black bg-rgb(0,0,0)">hover字体的颜色也可以混合。</w-span>
            </w-group>
        </w-div>
        <w-div  :flex="['1','col']">
            <w-group p="20" :bg="[as.img,'cover','h-p100','r-n','center']" h="$calc(100% / 4)" bd="b-1-solid-#0f0">
                <w-div bg="right">
                    WGrop的作用是装载共有样式然后分发给子盒子,当然子盒自身的属性优先生效。
                </w-div>
                <w-div bg="red-blue-green" >
                    多个颜色拼接可以混合颜色，red+blue+green 就是这个背景色。
                    
                </w-div>
                <w-div :bg="['red-green-blue','right']" >
                    颜色混合的顺序是从左到右混合。red+green+blue 会是这个背景色
                </w-div>
                <w-div  :hover="\`${as.head}  bg-right red\`" bd="none">
                    <w-span hover="blue">
                        hover属性可以直接便捷的创建hover的样式,这里有红色(父)和蓝色(子)两种hover样式。
                    </w-span>
                </w-div>
            </w-group>
        </w-div>
    </w-div>
</template>
`)




</script>
<style lang="">
    
</style>