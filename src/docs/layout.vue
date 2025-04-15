
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { menu } from '../router/menu';
import {LogoGithub,Fish} from '@vicons/ionicons5'
import version from '../version';
const router = useRouter()

const gotoGithub =()=>{
    window.open('https://github.com/HarukiMisora/noStyleUi')
}
const gotoLilmonix3 =()=>{
    window.open('https://www.iamwzc.com/')
}


</script>

<template>
    <w-div bg="white" >
        <w-div  w="p100" h="60" :flex="['j-between','i-center']" style="border-bottom: 1px solid #99999980;">
            <w-div flex="center" pl="20" c="primary">
                <w-span  @click="router.push('/home')" f="28" fw="600">No Style Ui</w-span>
            </w-div>
            <w-div p="20" :flex="['g-20','i-center']">
                <w-button @click="gotoLilmonix3">
                    <Fish class="w-18 mr-5"></Fish>lilmonix3
                </w-button>
                <w-button @click="gotoGithub">
                    <LogoGithub  class="w-18 mr-5"></LogoGithub>Github
                </w-button>
                <w-span style="user-select: none;" c="primary">{{version}}</w-span>
            </w-div>

        </w-div>
        <w-div  w="p100" h="$calc(100vh - 60px)" flex=""   >
            <w-div  w="200" style="border-right: 1px solid #99999980;" pt="10" c="primary" px="5">
                <w-div v-for="item in menu"  >
                    <w-div h="40" flex="i-center" pl="10" radius="2" c="gray">{{ item.label }}</w-div>
                    <router-link  v-for="child in item.children" :to="{name:child.name}" class="c-black w-p100" style="text-decoration: none;">

                    <w-div h="40"  :flex="['i-center']"  :bg="child.name===router.currentRoute.value.name?'#21a75580':''" pl="20" radius="2" my="2">
                        <w-div c="black">
                                {{ child.label }}
                        </w-div>
                    </w-div>

                    </router-link>

         
                </w-div>
            </w-div>
            <w-div class="overflow"  :flex="['1','col']"  p="20px">
                <img src="/turn1.webp" style="position: absolute;z-index: 0;left: 50%;top: 50%;transform: translate(calc(-50% + 100px),calc(-50% - 30px));width: 30%;"  />
                <router-view v-slot="{Component}">
                  <transition name="ttt" mode="out-in">
                    <component :is="Component" style="z-index: 1;" />
                  </transition>
                </router-view>
            </w-div>
        </w-div>
    </w-div>
</template>

<style lang="scss" scoped>
.ttt-enter-active,
.ttt-leave-active {
  transition: all 0.25s ease;
}

.ttt-enter-from{
transform: translateX(100%);
}
.ttt-leave-to {
  transform: translateX(-100%);
}
.overflow{
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 5px;
      transition: 0.3s ease-in-out;
      height: 10px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background: var(--primary);
      transition: 0.3s ease-in-out;
      cursor: move;
      &:hover{
        background: var(--primary-hover);
      }

    }
}

</style>