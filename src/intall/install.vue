




<script lang='ts' setup>
import CodePreview from '../components/codePreview.vue';
import { createCode } from '../components/createCode';
import Notice from '../components/notice.vue';

const allCode = createCode(`
import { createApp } from 'vue'
import App from './App.vue'
import nostyleui from 'nostyleui/index'
import 'nostyleui/style'

createApp(App).use(nostyleui).mount('#app')
`,'ts')
const needCode = createCode(`
\<script lang="ts" setup>
import { WDiv } from 'nostyleui';

<\/script>

<template>
    <w-div></w-div>
</template>

<style></style>
`,'html');

// const importCode =createCode(`
// {
//   "extends": "@vue/tsconfig/tsconfig.json",
//   "compilerOptions": {
//     "incremental": true,
//     "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

//     /* Linting */
//     "strict": true,
//     "noUnusedLocals": true,
//     "noUnusedParameters": true,
//     "noFallthroughCasesInSwitch": true
//   },
//   "include": ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.vue" ,"node_modules/nostyleui/interface.d.ts"]
// }
// `,'json')
</script>

<template>
    <w-div p="40" bg="white" :flex="['col','1','g-20']">
        <CodePreview title="安装" :text="createCode('nmp i -D nostyleui\n','bash\n')" :show="true">
            <Notice class="mt-5" title="警告" msg='因为目前还在开发调试阶段，写得比较随缘也不全面，碎片化时间更新，也没做版本管理，我写一点往上面发布一点。所以目前非常不建议投入生产。' type="danger"></Notice>

        </CodePreview>
        <CodePreview  title="全局引入" :text="allCode" :show="true">
            
        </CodePreview>
        <CodePreview  title="按需引入" :text="needCode" :show="true">
            <Notice class="mt-5" title="注意" msg='目前按需引入还是需要在main.ts中引入全局css。这是因为所有组件都依赖于这个全局css' type="warning"></Notice>

        </CodePreview>
        <!-- <CodePreview  title="关于IDEA和vscode的代码提示()" :text="importCode" :show="true">
            如果你想在你的编辑器中激活相应的代码提示，目前的话你需要手动在tsconfig.json 或者你的 tsconfig.xxx.json 加入 "node_modules/nostyleui/interface.d.ts",就像下面json这样做。
        </CodePreview> -->
    </w-div>            
</template>

<style lang='scss'>

</style>
