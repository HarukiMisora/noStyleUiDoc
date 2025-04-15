
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { menu } from '../router/menu';
import {LogoGithub,Fish} from '@vicons/ionicons5'
import version from '../version';
import { computed, ref, watchEffect } from 'vue';
import type { WDiv } from 'nostyleui/types/index.js';
const router = useRouter()
const scrollBoxRef = ref<InstanceType<typeof WDiv>|null>(null)
const gotoGithub =()=>{
    window.open('https://github.com/HarukiMisora/noStyleUi')
}
const gotoLilmonix3 =()=>{
    window.open('https://www.iamwzc.com/')
}
const offsetTops:{[key:string]:number} = {}

const goToNextPage = ()=>{
  offsetTops[<string>router.currentRoute.value.name] = scrollBoxRef.value?.$el.scrollTop
}
const showTip = ref(false)
const tipTop = computed(() => {
  const el = scrollBoxRef.value?.$el;
  if (!el) return 0;
  
  const top = (offsetTops[router.currentRoute.value.name as string] || 0);
  const scrollHeight = el.scrollHeight;
  const clientHeight = el.offsetHeight;
  
  // 添加安全检查
  if (scrollHeight <= clientHeight) return 0;
  
  // 计算百分比并限制在 0-100 范围内
  const percentage = (top / (scrollHeight)) * 100;
  return `${percentage}%`;
});


let timer:any = null
let timerClose:any = null

watchEffect(()=>{
  if(router.currentRoute.value.name){
    clearTimeout(timer)
    clearTimeout(timerClose)
    showTip.value = false
    const top = offsetTops[<string>router.currentRoute.value.name] || 0
    // console.log(offsetTops);

    //等待页面跳转动画结束后再滚动
    timer = setTimeout(()=>{
      scrollBoxRef.value?.$el.scrollTo({behavior:'smooth',top})
      showTip.value = true
      //滚动之后，提示1500ms后消失并删除历史记录
      timerClose = setTimeout(()=>{
        showTip.value = false
        delete offsetTops[<string>router.currentRoute.value.name]
      },1500)
    },500)
  }
})

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
                    <router-link @click="goToNextPage" v-for="child in item.children" :to="{name:child.name}" class="c-black w-p100" style="text-decoration: none;">

                    <w-div h="40"  :flex="['i-center']"  :bg="child.name===router.currentRoute.value.name?'#21a75580':''" pl="20" radius="2" my="2">
                        <w-div c="black">
                                {{ child.label }}
                        </w-div>
                    </w-div>
                    </router-link>
                </w-div>
            </w-div>
            <w-div class="overflow"  :flex="['1','col']"  p="20px" ref="scrollBoxRef">
                <img src="/turn1.webp" style="position: absolute;z-index: 0;left: 50%;top: 50%;transform: translate(calc(-50% + 100px),calc(-50% - 30px));width: 30%;"  />
                <router-view v-slot="{Component}">
                  <transition name="ttt" mode="out-in">
                    <component :is="Component" style="z-index: 1;"   />
                  </transition>
                </router-view>
            </w-div>
            <transition name="tip-fade" mode="out-in">
              <div class="tip" :style="{top:tipTop}"  v-if="showTip&&offsetTops[<string>router.currentRoute.value.name]">你之前浏览到了这里</div>
            </transition>
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
.tip-fade-enter-active,
.tip-fade-leave-active {
  transition: all 0.25s ease;
}

.tip-fade-enter-from,
.tip-fade-leave-to {
transform: translateX(100%);
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
.tip{
  position: fixed;
  right: 15px;
  top: 0;
  background-color: #1e1e1e;
  color: white;
  padding:5px 10px;
  border-radius: 5px;
  // transition: all 0.3s ease-in-out;
  z-index: 9;
  // transform: translateY(-100%);
  &::after{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    // background-color: #1e1e1e;
    position: absolute;
    right: -5px;
    bottom: 3px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #1e1e1e; 
  }
}

</style>