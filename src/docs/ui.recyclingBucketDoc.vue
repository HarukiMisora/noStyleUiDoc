
<script setup lang="ts">
/**
 * @desc ReclingBucket 回收桶
 * @groupName 组件
 */
import NoTice from '../components/notice.vue';
// import GridMode from '../components/gridMode.vue';
import CodePreview from '../components/codePreview.vue';
import { CartSharp, GameController } from '@vicons/ionicons5';
import {  path } from '../assets/assets';
import {  ref } from 'vue';
import Goods from '../components/recyclingBucketHelper/goods.vue';
import CodePreviewTip from '../components/codePreviewTip.vue';

import PropsDisplay from '../components/propsDisplay.vue';
const bucketRef = ref()
const bucketRef2 = ref()
const bucketRef3 = ref()
const bucketRef4 = ref()
const bucketRef5 = ref()

const cartNumber = ref(0)
const cartNumber2 = ref(0)
const cartNumber3 = ref(0)
const cartNumber4 = ref(0)
const cartNumber5 = ref(0)
const goodsRefs = ref()
const goodsRefs4 = ref()
const goodsRefs5 = ref()
const goodsList = ref([
  {
    id:1,
    name:'Mount & Blade II Bannerlord',
    price:248,
    img:path('/MountBladeIIBannerlord.png')
  },
  {
    id:2,
    name:'Half - Life 2',
    price:42,
    img:path('/HalfLife2.jpg')
  },
  {
    id:3,
    name:'portal 2',
    price:42,
    img:path('/Portal2.jpg')
  },
  {
    id:4,
    name:'The Elder Scrolls V: Skyrim',
    price:165,
    img:path('/TheElderScrollsVSkyrim.jpg')
  },
  {
    id:5,
    name:'doki doki literature club',
    price:0,
    img:path('/DokiDokiLiteratureClub.jpg')
  },
  {
    id:6,
    name:'Miside',
    price:52,
    img:path('/Miside.png')
  }
])



function addGoods(event: MouseEvent) {
  bucketRef.value.recycle(event)
  cartNumber.value++
}
function addGoods2(event: MouseEvent) { 
  bucketRef2.value.recycle(event.target)
  cartNumber2.value++
}
function addGoods3(index: number) { 
  bucketRef3.value.recycle(goodsRefs.value[index])
  cartNumber3.value++
}
function addGoods4(index: number) { 
  bucketRef4.value.recycle(goodsRefs4.value[index])
  cartNumber4.value++
}
function addGoods5(index: number) { 
  const  callBack = ()=> {cartNumber5.value++}
  const options = index%2===0?{
    moveEffect: ['small','rotate'],
    effect:'shake',
    callBack
  }:{
    moveEffect: ['small'],
    effect:'flash',
    callBack
  }
  bucketRef5.value.recycle(goodsRefs5.value[index],options)
}


const code1 = `const bucketRef = ref()
const cartNumber = ref(0)
const goodsList = ref<{
  id:number,
  name:string,
  price:number,
  img:string
}>([])

function addGoods(event: MouseEvent) {
  bucketRef.value.recycle(event)
  cartNumber.value++
}

getList()`

const code2 = `const bucketRef2 = ref()
const cartNumber2 = ref(0)
const goodsList = ref<{
  id:number,
  name:string,
  price:number,
  img:string
}>([])

function addGoods2(event: MouseEvent) {
  bucketRef2.value.recycle(event.target)
  cartNumber2.value++
}
getList()`

const code3 = `const bucketRef3 = ref()
const cartNumber3 = ref(0)
const goodsRefs = ref()
const goodsList = ref<{
  id:number,
  name:string,
  price:number,
  img:string
}>([])

function addGoods3(index: number) {
  bucketRef3.value.recycle(goodsRefs.value[index])
  cartNumber3.value++
}
getList()`
const code4 = `const bucketRef4 = ref()
const cartNumber4 = ref(0)
const goodsRef4 = ref()
const goodsList = ref<{
  id:number,
  name:string,
  price:number,
  img:string
}>([])

function addGoods4(index: number) {
  bucketRef4.value.recycle(goodsRefs4.value[index])
  cartNumber4.value++
}
getList()`
const code5 = `const bucketRef5 = ref()
const cartNumber5 = ref(0)
const goodsRef5 = ref()
const goodsList = ref<{
  id:number,
  name:string,
  price:number,
  img:string
}>([])

function addGoods5(index: number) {
  const options = index%2===0?{
    moveEffect: ['small','rotate'],
    effect:'shake'
  }:{
    moveEffect: ['small'],
    effect:'flash'  
  }
  bucketRef5.value.recycle(goodsRefs5.value[index],options)
  cartNumber5.value++
}
getList()`


const propsApi = [
     {
        prop:'duration',
        text:'回收过程持续时间(毫秒)',
        type:"number",
        default:"750"
    },
    {
      prop:'delay',
      text:'回收延迟时间(毫秒)',
      type:"number",
      default:"0"
    },
    {
      prop:'easing',
      text:'回收过程缓动参数',
      type:"string",
      default:"ease"
    },
    {
      prop:'moveEffect',
      text:'回收物品的运动特效',
      type:"Array<'rotate'|'small'>",
      default:'[]'
    },
    {
      prop:'effect',
      text:'回收桶收到物品时的特效',
      type:"shake|flash|none",
      default:"none"
    }
] 
const soltsApi = [
    {
      prop:'item',
      text:'回收物品的插槽',
    }
]
const ExposesApi = [
  {
    prop:'recycle',
    text:'回收物品的方法',
    type:"(event: MouseEvent|Element,options:optionsT) => void",
  }
]
const optionsTIterface  =[ 
  {
    prop:'startX',
    text:'回收物品的起始X坐标',
    type:"number",
    default:"自动计算鼠标位置/DOM节点位置"
  },
  {
    prop:'startY',
    text:'回收物品的起始Y坐标',
    type:"number",
    default:"自动计算鼠标位置/DOM节点位置"
  },
  {
    prop:'endX',
    text:'回收物品的结束X坐标',
    type:"number",
    default:"自动计算回收桶组件的位置"
  },
  {
    prop:'endY',
    text:'回收物品的结束Y坐标',
    type:"number",
    default:"自动计算回收桶组件的位置"
  },
  ...propsApi,
]
 


</script>
<template>
  <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1 class="mb-10">WRecyclingBucket 回收桶</h1>
            <no-tice title="作用" msg="这是一个播放动画的组件,用于将一个元素移动到“桶”里面。比如购物车、道具背包、下载列表等。"></no-tice>
        </w-div>
        <!-- <GridMode> -->
            <CodePreview  title="常用案例 - 购物车 - 接收MouseEvent"  :js="code1" >
                <CodePreviewTip>
                  首先你需要给回收桶组件绑定一个ref，然后在通过ref来调用组件的recycle方法。<br/>
                  其参数1可以接收一个[MouseEvent|DOM节点|REF节点]，当接收到MouseEvent时，recycle方法会在鼠标位置创建一个半透明的小圆DOM元素被回收到桶里面。<br/>
                  当然你也可以通过item插槽来决定接收MouseEvent时创建自定义的回收物品。比如下面案例中的红色游戏手柄图标。
                </CodePreviewTip>
                <w-recycling-bucket ref="bucketRef" mt="20" >
                  <w-div f="18" w="200" position="rel" flex>
                    <CartSharp w="50"></CartSharp>
                    <span v-if="cartNumber" c="#fff" bg="red" w="25" h="25" fw="800" flex="center" radius="50%" position="abs l-50 b-40 ">{{ cartNumber }}</span>
                  </w-div>
                  <template #item>
                    <GameController  w="50" c="red"></GameController>
                  </template>
                </w-recycling-bucket>
                <!--商品列表-->
                <w-div flex="g-10 wrap" p="20">
                    <Goods 
      v-for="i in goodsList" 
      :key="i.id" 
      :name="i.name" 
      :price="i.price"
      :img="i.img" 
      >
          <w-button size="mini" type="primary" @click="addGoods"> 加入购物车</w-button>

                    </Goods>
                </w-div>
            </CodePreview>
            <CodePreview  title="常用案例 - 购物车 - 接收DOM节点"  :js="code2" >
                <CodePreviewTip>
                  当接收到DOM节点时，recycle方法会克隆该DOM节点并回收之<br/>
                  列如这个案例，我将MouseEvent.target的DOM节点传递给recycle方法，这样就可以实现点击什么元素就回收什么元素。<br/>
                  试试点击封面图、游戏名称、价格、按钮等都可以回收。
                </CodePreviewTip>
                <w-recycling-bucket ref="bucketRef2" mt="20" >
                  <w-div f="18" w="200" position="rel" flex>
                    <CartSharp w="50"></CartSharp>
                    <span v-if="cartNumber2" c="#fff" bg="red" w="25" h="25" fw="800" flex="center" radius="50%" position="abs l-50 b-40 ">{{ cartNumber2 }}</span>
                  </w-div>
                </w-recycling-bucket>
                <!--商品列表-->
                <w-div flex="g-10 wrap" p="20">
                    <Goods 
      v-for="i in goodsList" 
      :key="i.id" 
      :name="i.name" 
      :price="i.price"
      :img="i.img" 
      @click="addGoods2"
      >
          <w-button size="mini" type="primary" > 加入购物车</w-button>

                    </Goods>
                </w-div>
            </CodePreview>
            <CodePreview  title="常用案例 - 购物车 - 接收Ref节点"  :js="code3" >
                <CodePreviewTip>
                  当接收到Ref节点时，recycle方法会克隆该Ref节点对应的DOM节点并回收之<br/>
                  列如这个案例，我将goods组件整体传递给recycle方法，这样就可以实现回收整个组件。<br/>
                </CodePreviewTip>
                <w-recycling-bucket ref="bucketRef3" mt="20" >
                  <w-div f="18" w="200" position="rel" flex>
                    <CartSharp w="50"></CartSharp>
                    <span v-if="cartNumber3" c="#fff" bg="red" w="25" h="25" fw="800" flex="center" radius="50%" position="abs l-50 b-40 ">{{ cartNumber3 }}</span>
                  </w-div>
                </w-recycling-bucket>
                <!--商品列表-->
                <w-div flex="g-10 wrap" p="20">
                    <Goods 
      v-for="(i,index) in goodsList" 
      :key="i.id" 
      :name="i.name" 
      :price="i.price"
      :img="i.img" 
      ref="goodsRefs"
      >
          <w-button size="mini" type="primary" @click="addGoods3(index)"> 加入购物车</w-button>

                  </Goods>
                </w-div>
            </CodePreview>
            <CodePreview  title="常用案例 - 购物车 - 回收动画 moveEffect与effect"  :js="code4" >
                <CodePreviewTip>
                  上面例子中将整个Goods组件回收，感觉元素太大了。<br/>
                  我们可以通过prop moveEffect 来设置回收动画，small可以让元素在回收过程中持续变小直至消失,它是一个数组，可以同时设置多个动画效果。<br/>
                  这里我设置了['rotate','small']动画，让元素在回收过程中持续变小并持续旋转。另外easing可以设置动画的缓动函数，和CSS的transition相同。<br/>
                  effect则是决定回收桶收到元素时的动画效果。
                </CodePreviewTip>
                <w-recycling-bucket ref="bucketRef4" mt="20" :move-effect="['rotate','small']" easing="ease-in-out" effect="shake" >
                  <w-div f="18" w="200" position="rel" flex>
                    <CartSharp w="50"></CartSharp>
                    <span v-if="cartNumber4" c="#fff" bg="red" w="25" h="25" fw="800" flex="center" radius="50%" position="abs l-50 b-40 ">{{ cartNumber4 }}</span>
                  </w-div>
                </w-recycling-bucket>
                <!--商品列表-->
                <w-div flex="g-10 wrap" p="20">
                    <Goods 
      v-for="(i,index) in goodsList" 
      :key="i.id" 
      :name="i.name" 
      :price="i.price"
      :img="i.img" 
      ref="goodsRefs4"
      >
          <w-button size="mini" type="primary" @click="addGoods4(index)"> 加入购物车</w-button>
                  </Goods>
                </w-div>
            </CodePreview>
            <CodePreview  title="常用案例 - 购物车 - 自定义回收事件"  :js="code5" >
                <CodePreviewTip>
                  上面的所有例子中，recycle都只用到了参数1，现在解锁参数2的用途，它可以让单次点击区别与组件统一的回收效果。<br/>
                  我想让它奇数旋转，偶数不旋转，想让它偶数闪烁，奇数震动。<br/>
                  另外callBack可以确保动画结束后执行回调函数，可以让计数器在收到回收事件后才增加。<br/>
                </CodePreviewTip>
                <w-recycling-bucket ref="bucketRef5" mt="20" :move-effect="['rotate','small']" easing="ease-in-out" >
                  <w-div f="18" w="200" position="rel" flex>
                    <CartSharp w="50"></CartSharp>
                    <span v-if="cartNumber5" c="#fff" bg="red" w="25" h="25" fw="800" flex="center" radius="50%" position="abs l-50 b-40 ">{{ cartNumber5 }}</span>
                  </w-div>
                </w-recycling-bucket>
                <!--商品列表-->
                <w-div flex="g-10 wrap" p="20">
                    <Goods 
      v-for="(i,index) in goodsList" 
      :key="i.id" 
      :name="i.name" 
      :price="i.price"
      :img="i.img" 
      ref="goodsRefs5"
      >
          <w-button size="mini" type="primary" @click="addGoods5(index)"> 加入购物车</w-button>
                  </Goods>
                </w-div>
            </CodePreview>
        <w-div p="20">
            <PropsDisplay title="Props" :props="propsApi" :cols="[
              {
                label:'名称',
                key:'prop'
              },
              {
                label:'说明',
                key:'text'
              },
              {
                label:'类型',
                key:'type'
              },
              {
                label:'默认值',
                key:'default'
              }
            ]" ></PropsDisplay>
        </w-div>
                <w-div p="20">
            <PropsDisplay title="Slots" :props="soltsApi" :cols="[
              {
                label:'插槽',
                key:'prop'
              },
              {
                label:'说明',
                key:'text'
              }
            ]" ></PropsDisplay>
        </w-div>
        <w-div p="20">
            <PropsDisplay title="Exposes" :props="ExposesApi" :cols="[
              {
                label:'名称',
                key:'prop'
              },
              {
                label:'说明',
                key:'text'
              },
              {
                label:'类型',
                key:'type'
              }
            ]" ></PropsDisplay>
        </w-div>
                <w-div p="20">
            <PropsDisplay title="optionsT" :props="optionsTIterface" :cols="[
              {
                label:'属性',
                key:'prop'
              },
              {
                label:'说明',
                key:'text'
              },
              {
                label:'类型',
                key:'type'
              },
              {
                label:'默认值',
                key:'default'
              }
            ]" ></PropsDisplay>
        </w-div>
        <!-- </GridMode> -->
  </w-div>
</template>



<style lang="scss" scoped>

</style>