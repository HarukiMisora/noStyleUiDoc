<script setup lang="ts">



</script>

<template>

<router-view v-slot="{ Component }" grid>
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style scoped lang="scss">

.fade-enter-active{
  transition: all .5s ease;
  position: absolute;
  width: 100%;
}
.fade-leave-active {
  transition: all .5s ease;
  position: absolute;
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
  transform: translate(100vw,100vh);
}



</style>
