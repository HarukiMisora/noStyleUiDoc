


<script lang='ts' setup>
import CodePreview from '../components/codePreview.vue';


</script>

<template>
    <w-div class="flex-1" bg="white" p="20">
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
        <CodePreview  title="使用方法" lang="ts">
          const ts = ``;
          asd
        </CodePreview>

      </w-div>



  </w-div>

</template>

<style lang='scss'>

</style>
