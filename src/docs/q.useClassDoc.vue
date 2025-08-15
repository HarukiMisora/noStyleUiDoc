
<script lang='ts' setup>
/**
 * @desc useClass
 * @groupName Function
 */
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import CodePreviewTip from '../components/codePreviewTip.vue';
import { ref } from 'vue';
import { useClass } from 'propstyle';
useClass('c','',['white','black','pink'])
const color = ref<string>(useClass('c','red',['blue','green'])) 
const count = ref<number>(0)
const count2 = ref<number>(0)
const color2 = ref<string>('red')
const width = ref<number>(50)
function click(){
  count.value++
  color.value = ['red','blue','green'][count.value%3]
}
function click2(){
  count2.value++
  color2.value = ['red','blue','green'][count2.value%3]
  width.value = width.value === 50? 100 : 50
}
function create(text:string){
  return text
}

useClass('w','',['50%','100%'])

const code = `
#### 有时候我们需要用一个变量来控制颜色，比如上面这个点击按钮，这个按钮的颜色会在红蓝绿之间切换。但是编译过程无法捕获到这个变量的具体值究竟有哪些，所以需要用到useClass函数来手动创建样式。（useClass创建的样式是全局生效）
\`\`\`ts
<script lang='ts' setup>
import { useClass } from 'propstyle';
//颜色，第一个参数是属性                        
const color = ref<string>(useClas\s('c','red',['blue','green'])); 
const count = ref<number>(0); //点击计数
function click(){
  count.value++
  color.value = ['red','blue','green'][count.value%3]
}
\<\/script>
\`\`\`
\`\`\`html
<template>
  <w-div  w="150" @click="click" :c="color">
    click me:{{ count }} {{ ['红','蓝','绿'][count%3] }}
  </w-div>
</template>
\`\`\`

`
const code2 =`#### √ useClass函数可以不用绑定到变量。
#### 由于上面的例子中已经全局创建了'red','blue','green'三个颜色，所以这里不需要重复创建，不过就算重复创建也没有什么影响，我过滤了这种行为，使其不会真的被重复创建。
#### 你可能会认为A.vue组件未被创建的时候，B.vue组件就无法使用A.vue组件中创建的样式。实际上你不用考虑哪个组件先加载，因为编译插件是在预编译阶段生成样式，原理是扫描并解析你的vue文件，收集其propStyle以及useClass函数，然后转换成新的vue代码返回给原本的解析器。
### × useClass 形参不能存在变量名
\`\`\`ts
<script lang='ts' setup>
import { useClass } from 'propstyle';
const width = ref<number>(50)
const color = ref<string>('red') 
const count = ref<number>(0); //点击计数

const regColors = ['white','black','yellow']
useClas\s('w','',['50%','100%'])
useClas\s('c','',['white','black','yellow']) //√ 这里可以生效
useClas\s('c','',regColors)  // × 编译阶段我不会去执行你的js代码，我无法获取变量具体的值，所以不能传递一个变量给我。
function click(){
  count.value++
  color.value = ['red','blue','green'][count.value%3]
  width.value = width.value === 50? 100 : 50
}
\<\/script>
\`\`\`
\`\`\`html
<template>
  <w-div  transition :w="width+'%'" @click="click" :bg="color" :c="['white','black','pink'][(count+1)%3]">
    click me:{{ count }} {{ ['红','蓝','绿'][count%3] }}
  </w-div>
</template>
\`\`\``
 //const str =  useClass('c','red',['blue','green'])

</script>

<template>
    <w-div class="flex-1" bg="white" p="40"  >
        <w-div p="20">
            <h1>useClass</h1>
            <notice class="mt-10" title="作用" msg="编译过程无法捕获到变量的具体值，所以需要用到useClass函数来手动创建样式。<br/>形参<br/>@prop：属性名 stirng (必须)<br/>@value：属性值 string (必须)<br/>@expects?：预期值  string[] (可选)<br/> @returns  返回value"></notice>
        </w-div>

            <codePreview  title="返回值赋给变量" :show="true" :text="code" :create="create" >

              <CodePreviewTip style="user-select: none;">
                <w-div  w="150" @click="click" :c="color" >click me:{{ count }} {{ ['红','蓝','绿'][count%3] }}</w-div>
              </CodePreviewTip>
              
            </codePreview>
            <codePreview  title="无需返回值" :show="true" :text="code2" :create="create" >

              <CodePreviewTip style="user-select: none;">
                <w-div transition :w="width+'%'" @click="click2" :bg="color2" :c="['white','black','pink'][(count2+1)%3]" >click me:{{ count2 }} {{ ['红','蓝','绿'][count2%3] }}</w-div>
              </CodePreviewTip>
              
            </codePreview>
         


    </w-div>
</template>

<style lang='scss'>

</style>
