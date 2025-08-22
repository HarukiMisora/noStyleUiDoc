<script lang='ts' setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    title?:string,
    props?:any[]
    cols?:Array<{label:string,key:string}>
}>(),{
    cols:()=>[
        {
            label:'前缀名/参数名',
            key:'prop'
        },
        {
            label:'对应样式/说明',
            key:'text'
        },
        {
            label:'类型',
            key:'type'
        },
        {
            label:'默认值',
            key:'default'
        },
    ]
})
const w = computed(()=>{
    return 100/(props.cols.length)
})

</script>

<template>
        <w-div>
            <h1  >{{title}}</h1>    
            <slot></slot>
        </w-div>
        <w-div p="20">
            <w-div :flex="['col']" class="area">
                <w-div flex="" style="justify-content: space-between;">
                    <w-group :w="`${w}%`" pr="20" py="5">
                        <w-span v-for="col in cols"  >{{ col.label }}</w-span>
           
                    </w-group>
                </w-div>
                <w-div :flex="['j-between']"  v-for="i in props.props" :key="i.prop" class="group" hover="bg=#ccc" transition=".2s">
                    <w-group :w="`${w}%`" pr="20" py="5">
                        <w-span  v-for="col in cols" >{{i[col.key]}}</w-span>

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
