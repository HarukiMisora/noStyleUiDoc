



<script lang='ts' setup>
import { computed, ref, compile ,createApp, onMounted} from 'vue';


const prop =defineProps<{text:string,title:string,show?:boolean}>()
const showCode = ref(prop.show)
const previewRef = ref<any>()
const h = computed(()=>{
	return (previewRef.value?.$el.clientHeight || 0)
}) 

import nostyleui, { WDiv } from 'nostyleui';

const contentRef = ref<any>()

onMounted(()=>{
    // 编译字符串模板为渲染函数
    const render = compile(prop.text.replace(/^.*```.*$/gm,''));
    // 手动创建并挂载组件
    const app = createApp({
        render,
    });
    app.use(nostyleui).mount(contentRef.value.$el);
})







</script>

<template>
    <w-div style="border: 1px solid #99999930;">
        <w-div  radius="8" p="20" >
            <w-div pb="10"  flex="j-between">
                <h1>{{ title }}</h1>
                <w-div class="flex">
                    <w-button type="primary" @click="showCode=!showCode">{{showCode?'收起代码':'展开代码'}}</w-button>
                </w-div>
            </w-div>
            <div>
                <slot></slot>
                <w-div ref="contentRef" id="test" >
                </w-div>
            </div>

            
        </w-div>
        <transition name="slide-fade" mode="out-in">
						<w-div v-if="showCode" :h="h" style="overflow: hidden;" w="p100">
            	<v-md-preview :text="prop.text" ref="previewRef" ></v-md-preview>
            </w-div>
        </transition>


    </w-div>
</template>

<style lang='scss' scoped>

.slide-fade-enter-active{
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from{

	height:  0;
	opacity: 0;
}
.slide-fade-leave-to {
	height:  0;
	opacity: 0;
}

</style>
