

<script lang="ts" setup>
import { inject, onMounted } from 'vue'

const gridMode = inject<boolean>('gridMode')

onMounted(()=>{
  
})

</script>

<template>
  <w-div grid="col--650 g-20" style="align-items: stretch">

    <template v-if="!gridMode">
      
      <w-div flex="g-20 col j-start" v-if="$slots.default" style="height: 100%;">
        <template v-for="(child, index) in $slots.default()" :key="index">
          <component :is="child" v-if="(index + 1) % 2 === 1&&child.props?.dir !=='right'||child.props?.dir==='left'"/>
        </template>
      </w-div>
      <w-div flex="g-20 col j-start" v-if="$slots.default" style="height: 100%;">
        <template v-for="(child, index) in $slots.default()" :key="index">
          <component :is="child" v-if="(index + 1) % 2 === 0&&child.props?.dir !=='left'||child.props?.dir==='right'" />
        </template> 
      </w-div>
    </template>
    <slot v-else></slot>

  </w-div>
</template>


<style></style>