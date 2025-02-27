<script lang='ts' setup>
const props = defineProps<{
    title?:string,
    props?:{
        prop:string
        type:string
        default:string
        text:string
        units:string
    }[]
}>()

</script>

<template>
        <w-div>
            <h1 mb="40" >{{title}}</h1>    
            <slot></slot>
        </w-div>
        <w-div p="20">
            <w-div :flex="['col']" >
                <w-div flex="" style="justify-content: space-between;">
                    <w-span w="p20">属性名</w-span>
                    <w-span w="p20">对应样式/说明</w-span>
                    <w-span w="p20">类型</w-span>
                    <w-span w="p20">默认值</w-span>
                    <w-span w="p20">支持的单位符</w-span>
                </w-div>
                <w-div flex="" style="justify-content: space-between;"pt="10" v-for="i in props.props" :key="i.prop">
                    <w-span w="p20">{{  i.prop}}</w-span>
                    <w-span w="p20">{{i.text}}</w-span>
                    <w-span w="p20">{{ i.type}}</w-span>
                    <w-span w="p20">{{ i.default }}</w-span>
                    <w-span w="p20">{{ i.units }}</w-span>
                </w-div>
            </w-div> 
        </w-div>

</template>

<style lang='scss'>
span{
    user-select: text;
}

</style>
