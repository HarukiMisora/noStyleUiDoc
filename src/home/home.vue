

<template >
   <w-div  class="main" h="100vh" flex="col center"  radius="25" style="opacity: 0.9;">
    <w-div class="title" f="80" fw="800" c="primary"  style="text-align: center;" >
      <w-span @mouseenter="mouseEnter(index)"  class="word" :class="{up:ups[index]}" v-for="(i,index) in title" :key="i">{{ i }}</w-span>
    </w-div>
    <w-div   >FOR VUE3</w-div>
    <w-div flex="g-20" mt="50">
      <!-- <w-button type="primary">切换主题</w-button> -->
      <w-button  type="primary"  @click="start">开始使用</w-button>
    </w-div>
  </w-div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const start =()=>{
  // mouseEnter(-1)
  // setTimeout(()=>{
    router.push('/docs/introduction')
  // },1350)
}
const words =[
  {
    text:'我就知道你会这样做.....',
    function:()=>{}
  },
  {
    text:'嘿！停下！',
    function:()=>{}
  },
  {
    text:'警告！你这样的行为可能会导致程序错误！',
    function:()=>{}
  },
  {
    text:'EROOR:SYSCODE-4008451',
    function:()=>{
      alert('EROOR:SYSCOODE-666666')
      alert('EROOR:SYSCOODE-004514')
      alert('EROOR:SYSCOODE-784515')
      alert('EROOR:SYSCOODE-156456')
      alert('EROOR:SYSCOODE-145478')
      alert('正在帮你打开原神~(⊙ˍ⊙)')
      window.open('https://ys.mihoyo.com/')
    }
  },
  {
    text:'你再试试？',
    function:()=>{
      mouseEnter =()=>{
        if(times>100){
          alert(words[wordsIndex].text)
          words[wordsIndex].function()
          wordsIndex++
          times =0
        }
        times++
      }
    }
  },
  {
    text:'不是，哥们~都这样了你还要继续啊？',
    function:()=>{}
  },
  {
    text:'GOOD!随你便吧',
    function:()=>{
      mouseEnter =()=>{
        
      }
    }
  }
  
]
let wordsIndex =0

const title = 'Prop Style !';
const l = title.length
const ups = ref(new Array(l).fill(false))
let times:number =0
let mouseEnter = (index:number)=>{
  if(times>100){
    alert(words[wordsIndex].text)
    words[wordsIndex].function()
    wordsIndex++
    times =0
  }
  times++
  const deepTime = 25
  let leftTime = 50
  let rightTime = leftTime
  for (let i =index+1;i< l;i++){
     setTimeout(()=>{
      ups.value[i] = true
      // console.log(ups.value);
      setTimeout(()=>{
        ups.value[i] = false
      },leftTime+deepTime)
    },leftTime)
    leftTime+=deepTime
  }
  for (let i =index-1;i>= 0;i--){
    setTimeout(()=>{
      ups.value[i] = true
      // console.log(ups.value);
      setTimeout(()=>{
        ups.value[i] = false
      },rightTime+deepTime)
    },rightTime)
    rightTime+=deepTime
  }

  
}
</script>
<style lang="scss" scoped>
.main{
  background: -webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); 
  background: linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); 
}
.title{
  .word{
    position: relative;
    transition: all .5s ease;
    top: 0;
    &.up{
      top: -300px;
      color: #A770EF;
    }
    &:hover{
      top: -10px;
      // margin: 500px;
      
    }
  }
}
</style>