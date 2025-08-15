


<script lang='ts' setup>
/**
 * @desc 编译选项
 * @groupName 快速上手
 */
import { as } from '../assets/assets';
import CodePreview from '../components/codePreview.vue';


const code= `//vite.config.ts
import { propStyleCompile } from 'propstyle'
export default defineConfig({
  ...
  plugins: [ 
    vue(), 
    //在vue插件之后
    propStyleCompile(),
  ],
  ...
})
`
const code2= `//vite.config.ts
import { propStyleCompile } from 'propstyle'
export default defineConfig({
  ...
  plugins: [ 
    vue(), 
    //在vue插件之后
    propStyleCompile({    
      //不建议开启debug，我的垃圾log太多了。
      debug: false, 
      /*
      * justForBuild 只在打包阶段生效，不影响开发环境。
      * (不建议设为true，其实这是我用来调试差异的。浏览器解析与node环境解析会存在一些微妙的差异，我希望你始终设为false，以node环境编译的结果为准)
      * {Boolean} 默认 false
      */
      justForBuild: false,  

      /*
      * wGroupSpecialName w-group组件的别名，如果你在项目中使用了别名，需要你手动告诉编译插件你用了哪些别名
      * {string[]} 默认 []
      */
      wGroupSpecialName: ['myGroup'],

      /*
      * log 捕获我的垃圾日志输出,你可以通过传递一个function来决定要输出哪些日志。
      * {Function} 默认 console.log
      */
      log: (...args)=>{
        if(args....){
          console.log('xxxxx':args[0])
        }
      },

      /*
      * indexFile 入口文件,这是一个function，插件会扫描你的scr目录，将扫描到的文件路径传给这个方法，你需要返回一个boolean值来告诉插件哪一个文件是入口文件。
      * {(url: string) => boolean} 默认读取src/main.ts或者src/main.js
      */
      indexFile: (url) =>{
        //如果你的入口文件不是默认的main.ts，而是index.ts，你可以像这样指定入口文件。
        return url.endsWith('src/index.ts')
      },

      /*
      * includePath 编译时要处理的文件夹，默认是src目录下的所有*.vue文件，但保不齐还有人会改成其它的目录。 
      * {string[]} 默认 ['src/']
      */
      includePath: ['src/','src2/'];

      /*
      * excludePath 要排除的文件夹，默认为空,如果你不想某些文件夹下的文件被编译，你可以通过这个参数排除掉。
      * {string[]} 默认 []
      */
      excludePath: ['src/noNeedCompile/'];

      /*
      * compileBefore 编译前的钩子函数，你可以在这里对代码进行预处理。
      * {(code: string, id: string) => string} 默认 (code, id) => code
      */
      compileBefore:(code,id){
         //在这里对代码进行预处理，比如添加一些注释，或者修改一些变量名。
         return '/* 我是编译前的注释 */\\n' + code
      }; 
    }),
  ],
  ...
})
`

const codeBuild =`<div class="c-red">hello world</div>
<w-div 
  :bg="as.img"
  class="transition-all-0-3s-ease bs-cover bd-s-solid
  w-100p h-200 flex flex-center hover-100p-auto 
  hover-c0008 hover-50 hover-bd-l-c-cfff8 hover-bd-r-c-cfff8 
  hover-bd-l-15vw hover-bd-r-15vw hover-bd-s-solid">
</w-div>`


</script>

<template>
    <w-div   :flex="['col','1','g-20']" bg="white" p="20">
      <w-div p="20" flex="col" >
          <w-h1 mb="10">compile 静态样式编译插件</w-h1>
          <w-div>
            <w-p>它是用来将*.vue文件中的静态prop style编译成对应css样式的插件。这样做有什么好处？</w-p>
            <w-p mt="5">帮助prop style在编译阶段就将样式注入到组件中，避免在用户浏览器环境中去解析prop style的规则。</w-p>
            <w-p mt="5">同时也会智能收集并生成对应的样式表，无需再引入全局样式，减少不必要的css样式。</w-p>
            <w-p mt="5">也就是说，它可以提高我们的组件渲染性能，减少浏览器的内存占用，</w-p>
            <w-p mt="5">而且，因为解析prop style规则的过程也脱离了vue的环境，所以我也有了让它对你自定义的组件以及HTML原生盒子也能生效的能力。</w-p>
            <!-- <w-p mt="5">同样的，我也可以让它对react组件也支持，但我目前还没有兼容react的打算，因为太麻烦了。</w-p> -->
          </w-div>
      </w-div>

        <h2 pl="40">直观感受编译插件的作用，将propStyle转为class样式的过程放到了预编译阶段。</h2>
      <w-div p="20">
        <w-div flex="g-20 i-center">
          <codePreview  flex="1 item" title="编译前"   :show="true" hideButton>
<div c="red">hello world</div>
<w-div 
  transition 
  :bg="as.img"
  s.-bg="cover"
  bd="solid" w="100%" h="200" flex="center"
  hover="bg=size-100% bd=50;solid;#0008;x-15vw-#fff8">
</w-div>

          </codePreview>
          =>
          
          <Code-Preview flex="1 item" title="编译后"  :text="codeBuild"   :show="true" hideButton>
            <div class="c-red">hello world</div>
            <w-div :bg="as.img" class="transition-all-0-3s-ease bs-cover bd-s-solid w-100p h-200 flex flex-center hover-100p-auto hover-c0008 hover-50 hover-bd-l-c-cfff8 hover-bd-r-c-cfff8 hover-bd-l-15vw hover-bd-r-15vw hover-bd-s-solid" ></w-div>
          </Code-Preview>
        </w-div>


        <CodePreview  title="基础使用方法" lang="ts" :text="code" :show="true">
        </CodePreview>
        <CodePreview  title="进阶参数配置" lang="ts" :text="code2" :show="true">
        </CodePreview>

      </w-div>



  </w-div>

</template>

<style lang='scss'>

</style>
