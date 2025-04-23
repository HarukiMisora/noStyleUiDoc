

<script lang="ts" setup>
import { inject } from 'vue'

const gridMode = inject<boolean>('gridMode')


</script>

<template>
  <w-div grid="col--650 g-20">
    <template v-if="!gridMode">
        <w-div flex="g-20 col" :ghost="gridMode" v-if="$slots.default">
        <template v-for="(child, index) in $slots.default()" :key="index">

          <component :is="child" v-if="(index + 1) % 2 === 1"/>
        </template>
      </w-div>

      <w-div flex="g-20 col" :ghost="gridMode" v-if="$slots.default">
        <template v-for="(child, index) in $slots.default()" :key="index">
          <component :is="child" v-if="(index + 1) % 2 === 0" />
        </template> 
      </w-div>

    </template>
    <slot v-else></slot>

  </w-div>
</template>


<style></style>