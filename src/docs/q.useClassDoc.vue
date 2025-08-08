
<script lang='ts' setup>
/**
 * @desc useClass
 * @groupName Function
 */
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';

import { as } from '../assets/assets';
import PropsDisplay from '../components/propsDisplay.vue';

import GridMode from '../components/gridMode.vue';


</script>

<template>
    <w-div class="flex-1" bg="white" p="40"  >
        <w-div p="20">
            <h1>useClass</h1>
            <notice class="mt-10" title="作用" msg="手动创建无法被插件捕获的样式<br/>形参<br/>·prop：属性名 stirng (必须)<br/>·value：属性值 string (必须)<br/>·expects?： string[] 预期值(可选)"></notice>
        </w-div>
            <codePreview  title="基础用法" :show="true" >
              <div :c="color" bg="">const corlor = red</div>
            </codePreview>
         

        <PropsDisplay  :props="bdProps">
                <w-h1 px="20" pt="20" >API</w-h1>
        </PropsDisplay>

    </w-div>
</template>

<style lang='scss'>

</style>
