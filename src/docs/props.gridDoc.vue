
<script lang='ts' setup>
/**
 * @desc grid属性集
 * @groupName props
 */
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';

import PropsDisplay from '../components/propsDisplay.vue';

import GridMode from '../components/gridMode.vue';
import CodePreviewTip from '../components/codePreviewTip.vue';
import { ref } from 'vue';
const min = ref('10')
const max = ref('?')


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
            <h1>grid 属性集</h1>
            <notice class="mt-20" title="作用" msg="定义盒子的 grid布局 样式"></notice>
        </w-div>
        <GridMode >
            <codePreview  title="列 col-{列数}-{最小宽度}-{最大宽度}" >
                <CodePreviewTip>
                    col-3 定义3列，默认平均分配。g-5 定义每列的间隔为5px
                </CodePreviewTip>
                <w-div grid="col-3 g-5">
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
            </codePreview>
            <codePreview  title="col 自动宽度"  >
                <w-div mb="5">col-3-100 定义每列最小宽度为100px,最大宽度默认为1fr，当每列数量的最小宽度之和小于grid容器的宽度时，会自动铺满剩余空间，所以在这里你看不出什么变化。</w-div>
                <w-div grid="col-3-100 g-5">
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
                <w-div mb="5">
                    col-3-?-100 定义每列的最大宽度为100px，最小宽度默认为auto，它不会自动铺满剩余空间，当每列的最大宽度之和大于grid容器的宽度时，会根据容器自适应宽度而不会溢出。
                </w-div>
                <w-div grid="col-3-?-100 g-5" >
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
                极端案例 col-3-1000 与 col-3-?-1000, 所以再使用自动宽度时，设置最大宽度比最小宽度更安全。
                <w-div grid="col-3-1000 g-5" mb="20">
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
                <w-div grid="col-3-?-1000 g-5" >
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
            </codePreview>
            <codePreview  title="col 固定宽度" >
                <CodePreviewTip>
                    有的时候，你或许就希望它能有一个固定死的宽度,比如{ col-300-300 }，我就希望它有300px
                </CodePreviewTip>
                <w-div grid="col-3-300-300 g-5" style="overflow-x: auto;">
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
                <CodePreviewTip>
                    当然，你也可以给一个范围，比如{ col-100-300 }，你可以试着缩小浏览器的宽度，看看两者的区别。
                </CodePreviewTip>
                <w-div grid="col-3-100-300 g-5" style="overflow-x: auto;">
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
            </codePreview>


            <codePreview  title="col 自动列数" dir="left">
                <CodePreviewTip>你也可以设定每列盒子的大小，自动分配列数</CodePreviewTip>
                <w-div mb="5">
                    min：<input v-model="min" style="width: 50px;"  />
                    max：<input v-model="max" style="width: 50px;"  />
                    both：<input style="width: 50px;" @input="(e)=>{const target = e.target as HTMLInputElement; min=target?.value; max=target?.value}"  />
                </w-div>
                hello col
                <w-div :grid="`col-?-${min}-${max} g-5`" style="overflow-x: auto;">
                    <w-div v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">{{ i }}</w-div>
                </w-div>
            </codePreview>   
            <codePreview  title="row 行" dir="right">
                <CodePreviewTip>它的用法和col一模一样，只不过它是控制行的。</CodePreviewTip>
                <w-div mb="5">
                    min：<input v-model="min" style="width: 50px;"  />
                    max：<input v-model="max" style="width: 50px;"  />
                    both：<input style="width: 50px;" @input="(e)=>{const target = e.target as HTMLInputElement; min=target?.value; max=target?.value}"  />
                </w-div>
                hello row
                <w-div :grid="`row-?-${min}-${max} g-5`" style="overflow-x: auto;" >
                    <w-div  @click="min='10';max='?'" v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">点我恢复{{ min}}</w-div>
                </w-div>
            </codePreview>
            <codePreview  title="row 固定行数的注意事项" dir="left">
                <CodePreviewTip>通常情况下，我们不会设置行数。当然我们也可以进行一个设定，比如{ row-2-${min}-${max} }
                    <br/>
                    但是，如果你设置的行数小于实际的行数，那么多余的行将不会受到高度控制的影响。
                </CodePreviewTip>
                <w-div mb="5">
                    min：<input v-model="min" style="width: 50px;"  />
                    max：<input v-model="max" style="width: 50px;"  />
                    both：<input style="width: 50px;" @input="(e)=>{const target = e.target as HTMLInputElement; min=target?.value; max=target?.value}"  />
                </w-div>
                hello row
                <w-div :grid="`row-2-${min}-${max} g-5`" style="overflow-x: auto;" >
                    <w-div  @click="min='10';max='?'" v-for="i in 9" radius="4" :key="i" bg="#44567245" flex="center">点我恢复{{ i }}</w-div>
                </w-div>
            </codePreview>
            <codePreview  title="你可以同时使用col和row" dir="right">
                <w-div grid="col-3 row-?-45-40 g-5"  >
                    <w-div  @click="min='10';max='?'" v-for="i in '123456789,0.'" transition radius="4" :key="i" bg="#44567245" flex="center" hover="bg=#123456 c=white">{{ i }}</w-div>
                </w-div>
            </codePreview>
            <codePreview  title="grid 子元素的定位与大小" dir="left">
                <CodePreviewTip>
                    例子 grid=“item grow-1-5 gcol-2-3” item 是在声明我只是一个子元素，而非一个grid容器,grow-1-5 表示该子元素从行位置1开始占据到5，gcol-2-3 表示该子元素从列位置2开始占据到3。那么这个位置怎么看呢？看看第一列的盒子，1368 <br/>
                    {1}--🎄1--{2}--🎄3--{3}--🎄6--{4}--🎄8--{5} 。小学数学题，1-4 之间有5段。
                </CodePreviewTip>
                <w-div grid="col-3 row-?-45-40 g-5"  >
                    <w-div  v-for="i in '12346789'" :key="i" transition radius="4"  bg="#44567245" flex="center" hover="bg=#123456 c=white">🎄{{ i }}</w-div>
                    <w-div grid="item grow-1-5 gcol-2-3" transition radius="4"  bg="#44567245" flex="center" hover="bg=#123456 c=white">
                        🧦5
                    </w-div>
                </w-div>
            </codePreview>
        </GridMode>

        <PropsDisplay  :props="bdProps">
                <w-h1 px="20" pt="20" >API</w-h1>
        </PropsDisplay>

    </w-div>
</template>

<style lang='scss'>

</style>
