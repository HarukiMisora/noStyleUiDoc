




<script lang='ts' setup>
/** 
* @desc 安装
* @groupName 快速上手
*/
import CodePreview from '../components/codePreview.vue';

import Notice from '../components/notice.vue';

const allCode = `
import { createApp } from 'vue'
import App from './App.vue'

import {propStyle} from 'propstyle' //引入propstyle组件
import 'propstyle/style' //引入propstyle的全局样式 （非常不推荐，这是本框架早期的方案，缺点是预设的css文件大而不全。我推荐启用编译选项，你用到什么样式，才会自动生成什么样式。） 
import 'propstyle/ui' //引入propstyle的ui库样式 （propstyle也有内置的ui库，但目前只做了一个button按钮，暂时没有做其他组件。
// 一是因为我的重心不再UI组件上，
// 二是我在考虑UI组件要不要迁离propStyle框架，成立一个新的项目propStyleUi分离出去。因为我觉得UI组件有点脱离我对propStyle的定义了。
// ）

createApp(App).use(propStyle).mount('#app')`;

const needCode = `
\<script lang="ts" setup>
import { WDiv } from 'propstyle';

<\/script>

<template>
    <w-div></w-div>
</template>

<style></style>`;


</script>

<template>
    <w-div p="40" bg="white" :flex="['col','1','g-20']">
        <code-preview title="安装" :text="`nmp i propstyle`" lang="bash" :abs-show="true" :show="true">
            <Notice class="mt-5" title="警告" msg='因为目前还在开发调试阶段，写得比较随缘尚不全面，所以目前不太建议投入生产。' type="danger"></notice>

        </code-preview>
        <CodePreview  title="全局引入" :text="allCode" lang="ts" :abs-show="true" :show="true" >
            <Notice class="mt-5" title="提示" msg='本框架的核心组件都是没有样式的功能组件，非UI组件。在启用了静态编译选项之后，任何原生DOM，第三方UI库，你的自定义组件都可以享受propStyle的样式定义规则，且注册propStyle的组件并非必须的，但我推荐全局引入组件，一是组件属性具备代码提示，二是确实方便使用。' >
            </Notice>
        </CodePreview>
        <CodePreview  title="按需引入" :text="needCode" :show="true">
            <!-- <Notice class="mt-5" title="注意" msg='目前按需引入还是需要在main.ts中引入全局css。这是因为所有组件都依赖于这个全局css' type="warning"></Notice> -->

        </CodePreview>
    </w-div>            
</template>

<style lang='scss'>

</style>
