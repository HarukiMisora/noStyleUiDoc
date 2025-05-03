<script lang='ts' setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    title?:string,
    props?:{
        prop?:string
        type?:string
        default?:string
        text?:string
        units?:string
    }[]
    noneed?:('prop'|'type'|'defalut'|'text'|'units')[]
}>(),{
    noneed:()=>[]
})
const needs:typeof props.noneed = ['prop','type','defalut','text','units']
const need = computed(()=>{
    return needs.filter((value:typeof props.noneed[number])=>{
        return !props.noneed.includes(value)
    })
})
const w = computed(()=>{
    return 100/(need.value.length)
})

</script>

<template>
        <w-div>
            <h1 mb="40" >{{title}}</h1>    
            <slot></slot>
        </w-div>
        <w-div p="20">
            <w-div :flex="['col']" class="area">
                <w-div flex="" style="justify-content: space-between;">
                    <w-group :w="`${w}%`" pr="20" py="5">
                        <w-span  v-if="need.includes('prop')">前缀名/参数名</w-span>
                        <w-span  v-if="need.includes('text')">对应样式/说明</w-span>
                        <w-span  v-if="need.includes('type')">类型</w-span>
                        <w-span  v-if="need.includes('defalut')">默认值</w-span>
                        <w-span  v-if="need.includes('units')">支持的单位符(即将弃用)</w-span>
                    </w-group>
                </w-div>
                <w-div :flex="['j-between']"  v-for="i in props.props" :key="i.prop" class="group" hover="bg=gray" transition=".2s">
                    <w-group :w="`${w}%`" pr="20" py="5">
                        <w-span  v-if="need.includes('prop')">{{i.prop}}</w-span>
                        <w-span  v-if="need.includes('text')">{{i.text}}</w-span>
                        <w-span  v-if="need.includes('type')">{{i.type}}</w-span>
                        <w-span  v-if="need.includes('defalut')">{{i.default}}</w-span>
                        <w-span  v-if="need.includes('units')">{{i.units}}</w-span>
                    </w-group>

                </w-div>
            </w-div> 
        </w-div>

</template>

<style lang='scss'>
.area span{
    user-select: text;
    line-break: anywhere;
    border-top: 1px solid #99999930;
    display: flex;
    align-items: center;
}

</style>
