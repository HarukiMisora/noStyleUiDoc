



<script lang='ts' setup>
import { ref } from 'vue';


const prop =defineProps<{text:string,title:string,show?:boolean}>()
const showCode = ref(prop.show)
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
            <w-div>
                <slot></slot>
            </w-div>
     
        </w-div>
        <w-div :h="showCode?'auto':0" style="overflow: hidden;" class="t" :class="{show:showCode}">
            <v-md-preview :text="prop.text"></v-md-preview>
        </w-div>

    </w-div>
</template>

<style lang='scss' scoped>
.t{
    opacity: 0;
    transition: all .5s ease;
    &.show{
        opacity: 1;
    }
}

</style>
