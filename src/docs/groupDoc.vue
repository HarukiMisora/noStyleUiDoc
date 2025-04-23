
<script lang='ts' setup>
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import { path } from '../assets/assets';
import { as } from '../assets/assets';
import GridMode from '../components/gridMode.vue';


</script>

<template>
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1 >WGroup 属性容器</h1>
            <notice class="mt-10" title="作用" :msg="`它不产生任何DOM结构，WGroup只负责装载一级子元素的共有属性。它同样完全继承WDom的一切属性，可以参考 <a class='mx-5' href='${path('/#/docs/div')}' >WDom文档</a>查阅`"></notice>
        </w-div>
        <GridMode grid="col--650px g-20">
            <codePreview  title="基础用法-装载与继承" >
                <w-div mb="5">
                    这四个盒子本身并没有添加任何的属性与样式，它们的属性样式完全继承WGroup装载的属性样式。继承只对一级子元素有效，不会破坏子元素的子元素的样式，比如这最后一个元素里的“雁”。
                </w-div>
                <w-div flex="g-10">
                <w-group radius="p50" w="100" h="100" flex="center" :bg="`${as.head} fill`" c="red">
                    <w-div>沉</w-div>
                    <w-div>鱼</w-div>
                    <w-div>落</w-div>
                    <w-div>
                        <w-div bg="green">雁</w-div>
                    </w-div>
                </w-group>
            </w-div>
            </codePreview>
            <codePreview  title="复写">
                <w-div mb="5">有统一的，也有特殊的，子元素自有属性可以复写继承属性是理所当然的。注意：对于命令集的复写，目前默认是合并复写，绝对覆盖的设定参数会在后续版本中添加。</w-div>
                <w-div flex="g-10">
                    <w-group radius="p50" w="100" h="100" flex="center" :bg="`${as.head} fill`" c="red">
                        <w-div c="green" f="24" fw="800">举</w-div>
                        <w-div :bg="['top','cover','size-50']">世</w-div>
                        <w-div bg="black" flex="i-end">无</w-div>
                        <w-div>双</w-div>
                    </w-group>
                </w-div>
            </codePreview>
            <codePreview  title="嵌套继承" >
                <w-div mb="5">
                    WGroup同样可以继承上级WGroup的属性，然后分发给下级盒子继承。同样下级的WGroup也可以再自己的作用域里复写上级WGroup的属性。
                    <w-div flex>
                        <w-group radius="p50" w="100" h="100" flex="center" :bg="`${as.head} fill`" c="red">
                            <w-group>
                                <w-div>沉</w-div>
                                <w-div>鱼</w-div>
                            </w-group>
                            <w-group radius="p25"  :bg="['p-50']">
                                <w-div>落</w-div>
                                <w-div>雁</w-div>
                            </w-group>
                        </w-group>
                    </w-div>
                </w-div>
            </codePreview>

            <codePreview  title="自定义继承" >
                <w-div mb="5">除了自带的属性样式可以装载和继承，WGroup还允许你针对自己的自定义组件的属性进行装载与继承。</w-div>
                <w-div flex="g-10">
                    <w-group :cus-props="[['type','primary'],['effect','text']]">
                        <w-button>沉</w-button>
                        <w-button>鱼</w-button>
                        <w-button>落</w-button>
                        <w-button>雁</w-button>
                    </w-group>
                    <w-button type="error" effect="biger">，</w-button>
                    <w-group :cus-props="[['type','success']]">
                        <w-button>举</w-button>
                        <w-button>世</w-button>
                        <w-button>无</w-button>
                        <w-button>双</w-button>
                    </w-group>
                </w-div>
            </codePreview>

        </GridMode>

        <w-div p="20">
            <h1>Props</h1>
            <w-div mt="20">cusPorps?:[propName,propValue][]  自定义继承属性</w-div>
            <w-div mt="20">其余属性样式与WDom一致，请前往 <router-link class="mx-5" to="/docs/div" >WDom文档</router-link>查阅 </w-div>
        </w-div>




    </w-div>
</template>

<style lang='scss'>

</style>
