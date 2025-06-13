


<script lang='ts' setup>
/**
 * @desc 编译选项
 * @groupName 快速上手
 */
import CodePreview from '../components/codePreview.vue';


const code= `//vite.config.ts
import { propStyleCompile } from 'nostyleui'

export default defineConfig({
  ...
  plugins: [ 
    vue(), //在vue插件之后
    propStyleCompile({    
      //不建议开启debug，我的垃圾log太多了。
      debug: false, 

      //只在构建阶段生效，不影响开发环境。但是在build前，最好在开发跑一下这个插件看看有没有样式编译错误的地方。如果有
      justForBuild: true,  

      //log?:(...args:any[])=>void,日志输出方法，你可以自定义输出的内容，我会把一堆 垃圾日志 通过这个函数打印出来

      //WGroup用到过的别名 => 如果你对WGroup组件使用了你自定义的别名，这会导致插件无法认识WGroup组件，所以我需要你来告诉我你用过哪些别名
      //wGroupSpecialName?: string[];

    })
  ],
  ...
})



`


</script>

<template>
    <w-div   :flex="['col','1','g-20']" bg="white" p="20">
      <w-div p="20" flex="col" >
          <w-h1 mb="10">compile 静态样式编译插件</w-h1>
          <w-div>
            <w-p>它是用来将.vue文件中的静态prop style编译成对应css样式的插件。这样做有什么好处？</w-p>
            <w-p mt="5">帮助prop style在编译阶段就将样式注入到组件中，避免在用户浏览器环境中注入一堆prop然后跑vue组件里面解析prop style的规则最后生成样式的过程。</w-p>
            <w-p mt="5">也就是说，它可以提高我们的组件渲染性能，减少浏览器的内存占用。</w-p>
            <w-p mt="5">同时，因为解析prop style规则的过程脱离了vue的环境，所以我也有了让它对你自定义的组件以及HTML原生盒子也能生效的能力。</w-p>
            <w-p mt="5">同样的，我也可以让它对react组件也支持，但我目前还并没有这么做。</w-p>
          </w-div>
      </w-div>
      <w-div p="20">
        <CodePreview  title="使用方法" lang="ts" :text="code" :show="true">
        </CodePreview>

      </w-div>



  </w-div>

</template>

<style lang='scss'>

</style>
