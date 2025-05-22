



<script setup lang="ts">
/**
 * @desc position属性集
 * @groupName props
 */
import CodePreview from '../components/codePreview.vue';
import CodePreviewTip from '../components/codePreviewTip.vue';
import GridMode from '../components/gridMode.vue';
import Page from '../components/page.vue';

</script>

<template>
  <Page title="position属性集" msg="定义盒子的 position定位 样式" position="rel">
    <GridMode>
      <CodePreview title="定位规则 rel abs fixed sty stc">
        <CodePreviewTip>sty=sticky,stc=static，缩写与全称都可以，但abs与rel只能用缩写，没有对全称做扩展。</CodePreviewTip>
        <w-div bg="#ccc" h="700px" style="overflow-y: scroll; overflow-x: hidden;"  >
          <w-div h="1200px">
            <w-group bg="#1e1e1e" p="5" flex="center" c="white" mb="1">
              <w-div position="abs t-20">abs</w-div>
              <w-div position="fixed r-90 t-80 z-9">fixed</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="sty t-35" bg="#f00">sty</w-div>
              <w-div position="sticky t-70 z-1" bg="#f00">sticky</w-div>
              <w-div position="stc t-35">stc</w-div>
              <w-div position="static t-35">static</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
              <w-div position="rel t-35">rel</w-div>
            </w-group>
          </w-div>
        </w-div>
      </CodePreview>
      <CodePreview title="位置l t r b" >
        <w-div bg="#ccc" h="250px" position="rel">
          <w-group bg="#1e1e1e" p="5" flex="center" c="white">
            <w-div position="abs l-20 t-20">l-20 t-20</w-div>
            <w-div position="abs r-20 b-20">r-20 b-20</w-div>
            <w-div position="abs l-50% t-50%">l-50% t-50%</w-div>
          </w-group>
        </w-div>
      </CodePreview>
      <CodePreview title="层级 z-index"  dir="right">
        <w-div h="360" bg="#ccc" position="rel">
          <w-div w="100" h="100" :bg="`#0${i%10}0`" c="white" flex="i-center" :position="`abs l-${i*25} t-50 z-${i}`" v-for="i in 25" :key="i">{{ i }}</w-div>
          <w-div w="100" h="100" :bg="`#0${i%10}0`" c="white" flex="i-center j-end" :position="`abs l-${i*25} b-50 z-${25-i}`" v-for="i in 25" :key="i">{{ i }}</w-div>
        </w-div>
      </CodePreview>
    </GridMode>
  </Page>
</template>



<style scoped>

</style>