
<template >
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1 class="mb-10">WButton 按钮</h1>
            <no-tice msg="WButton同样继承 WDiv 属性样式的用法。"></no-tice>
        </w-div>
        <GridMode>
            <CodePreview  title="基础按钮 - type"   >
                <w-div flex="g-15">
                    <w-button type="default">default</w-button>
                    <w-button type="primary">primary</w-button>
                    <w-button type="success">success</w-button>
                    <w-button type="warning">warning</w-button>
                    <w-button type="error">error</w-button>
                    <w-button type="tertiary">tertiary</w-button>
                    <w-button type="none">none</w-button>
                </w-div>
            </CodePreview>
            <CodePreview  title="点击特效 - effect" >
                <w-div mb="5">注意：text的点击特效，我建议只在flex-x的布局下使用。type为none的按钮，box的点击特效无法生效！</w-div>
                <w-div flex="g-15">
                    <w-button type="default" >default</w-button>
                    <w-button type="primary" effect="box">box</w-button>
                    <w-button type="success" effect="text">text</w-button>
                    <w-button type="warning" effect="biger">biger</w-button>
                    <w-button type="error"   effect="small">small</w-button>
                    <w-button type="tertiary"effect="rotate">rotate</w-button>
                    <w-button type="primary" effect="rotate">长按</w-button>
                    <w-button type="success" effect="none">none</w-button>
                </w-div>
            </CodePreview>
            <CodePreview  title="抽象按钮 - abstract" >
                <w-div flex="g-15">
                    <w-button type="default">default</w-button>
                    <w-button type="primary" abstract="unseen" >unseen</w-button>
                    <w-button type="success" abstract="unseen">unseen</w-button>
                    <w-button type="warning" abstract="dash">dash</w-button>
                    <w-button type="error" abstract="glass">glass</w-button>
                    <w-button type="tertiary" abstract="round">round</w-button>
                </w-div>
            </CodePreview>
            <CodePreview  title="抽象按钮 - glass" >
                <NoTice msg="在左边抽象按钮的介绍中，看上去glass和unseen是没有什么区别的！因为那里是白色背景的天下，glass会在背景是图片的场景下工作。" class="mb-10"></NoTice>
                <w-div :bg="[as.img,'cover']" h="150" p="20" :flex="['col','g-20','j-center']">
                    <w-div flex="g-15" >
                        <w-button type="default" abstract="unseen">unseen</w-button>
                        <w-button type="primary" abstract="unseen">unseen</w-button>
                        <w-button type="success" abstract="unseen">unseen</w-button>
                        <w-button type="warning" abstract="unseen">unseen</w-button>
                        <w-button type="error" abstract="unseen">unseen</w-button>
                        <w-button type="tertiary" abstract="unseen">unseen</w-button>
                    </w-div>
                    <w-div flex="g-15" >
                        <w-button type="default" abstract="glass">glass</w-button>
                        <w-button type="primary" abstract="glass">glass</w-button>
                        <w-button type="success" abstract="glass">glass</w-button>
                        <w-button type="warning" abstract="glass">glass</w-button>
                        <w-button type="error" abstract="glass">glass</w-button>
                        <w-button type="tertiary" abstract="glass">glass</w-button>
                    </w-div>
                </w-div>

            </CodePreview>
            
            <CodePreview  title="圆角按钮 - round" >
                <w-div flex="g-15" mb="15">
                    <w-button type="default" round>default</w-button>
                    <w-button type="primary" round>primary</w-button>
                    <w-button type="success" round>success</w-button>
                    <w-button type="warning" round>warning</w-button>
                    <w-button type="error"   round>error</w-button>
                    <w-button type="tertiary"round>tertiary</w-button>
                </w-div>
                <w-div flex="g-15">
                    <w-button type="default" round>default</w-button>
                    <w-button type="primary" abstract="unseen" round>unseen</w-button>
                    <w-button type="success" abstract="unseen" round>unseen</w-button>
                    <w-button type="warning" abstract="dash"   round>dash</w-button>
                    <w-button type="error"   abstract="glass"  round>glass</w-button>
                    <w-button type="tertiary"abstract="round"  round>round</w-button>
                </w-div>
            </CodePreview>
            <CodePreview  title="继承WDiv 属性 - 自定义样式" dir="left" >
                <w-div :flex="['g-15','wrap']">
                    <w-button type="default" w="200">lang...default</w-button>
                    <w-button type="primary" bg="#a150df">#a150df primary</w-button>
                    <w-button type="success" :bg="[as.head,'cover']" c="red" fw="800">沉鱼落雁</w-button>
                    <w-button type="warning" h="100" f="25" effect="biger" >
                        <w-div :bg="[as.img,'cover']">送给你</w-div>
                    </w-button>
                    <w-button type="error" f="9" h="0">不能再矮了</w-button>
                    <w-button type="tertiary" effect="none" c="red">tertiary</w-button>
                </w-div>
            </CodePreview>


            <CodePreview  title="禁用状态 - disabled" >
                <w-div flex="g-15" mb="15">
                    <w-button disabled  type="default">default</w-button>
                    <w-button disabled type="primary">primary</w-button>
                    <w-button disabled type="success">success</w-button>
                    <w-button disabled type="warning">warning</w-button>
                    <w-button disabled type="error">error</w-button>
                    <w-button disabled type="tertiary">tertiary</w-button>
                    <w-button disabled type="none">none</w-button>
                </w-div>
                <w-div flex="g-15" mb="15">
                    <w-button disabled type="default">default</w-button>
                    <w-button disabled type="primary" abstract="unseen">unseen</w-button>
                    <w-button disabled type="success" abstract="unseen">unseen</w-button>
                    <w-button disabled type="warning" abstract="dash">dash</w-button>
                    <w-button disabled type="error" abstract="glass">glass</w-button>
                    <w-button disabled type="tertiary" abstract="round">round</w-button>
                    <w-button disabled type="none">none</w-button>
                </w-div>
                <w-div :flex="['g-15','wrap']">
                    <w-button disabled type="default" w="200">lang...default</w-button>
                    <w-button disabled type="primary" bg="#a150df">#a150df primary</w-button>
                    <w-button disabled type="success" :bg="[as.head,'cover']" c="red" fw="800">沉鱼落雁</w-button>
                    <w-button disabled type="warning" h="100" f="25" effect="biger">
                        <w-div :bg="[as.img,'cover']">送给你</w-div>
                    </w-button>
                </w-div>
            </CodePreview>
            <CodePreview  title="(加载/等待)状态 loading" >
                <w-div flex="g-15" mb="15">
                    <w-button loading type="default">default</w-button>
                    <w-button loading type="primary">primary</w-button>
                    <w-button loading type="success">success</w-button>
                    <w-button loading type="warning">warning</w-button>
                    <w-button loading type="error">error</w-button>
                    <w-button loading type="tertiary">tertiary</w-button>
                    <w-button loading type="none">none</w-button>
                </w-div>
                <w-div flex="g-15" mb="15">
                    <w-button loading type="default">default</w-button>
                    <w-button loading type="primary" abstract="unseen">unseen</w-button>
                    <w-button loading type="success" abstract="unseen">unseen</w-button>
                    <w-button loading type="warning" abstract="dash">dash</w-button>
                    <w-button loading type="error" abstract="glass">glass</w-button>
                    <w-button loading type="tertiary" abstract="round">round</w-button>
                    <w-button loading type="none">none</w-button>
                </w-div>
                <w-div :flex="['g-15','wrap']">
                    <w-button loading type="default" w="200">lang...default</w-button>
                    <w-button loading type="primary" bg="#a150df">#a150df primary</w-button>
                    <w-button loading type="success" :bg="[as.head,'cover']" c="red" fw="800">沉鱼落雁</w-button>
                    <w-button loading type="warning" h="100" f="25" effect="biger">
                        <w-div :bg="[as.img,'cover']">送给你</w-div>
                    </w-button>
                </w-div>
            </CodePreview>

            <CodePreview  title="图标" >
                    <w-div flex="g-15" >
                        <w-button  type="default" @click="setLoading('default')" :loading="loadings.default">
                            <!--svg也是可以的-->
                            <template #icon>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M512 256c0-16.54-14.27-46.76-45.61-74a207.06 207.06 0 0 0-60.28-36.12a3.15 3.15 0 0 0-3.93 1.56c-.15.29-.3.57-.47.86l-9.59 15.9a183.24 183.24 0 0 0 .07 183.78l.23.39l8.74 16a4 4 0 0 0 4.94 1.82C479.63 337.42 512 281.49 512 256zm-93.92-.14a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M335.45 256a214.8 214.8 0 0 1 29.08-108l.12-.21l4.62-7.67a4 4 0 0 0-2.59-6a284.29 284.29 0 0 0-39.26-5.39a7.94 7.94 0 0 1-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16 16 0 0 0-18 20.18l10.62 37.17a4 4 0 0 1-2.42 4.84c-36.85 13.69-68.59 38.75-91.74 57.85a8 8 0 0 1-10.06.06q-4.72-3.75-9.69-7.39c-39.64-28.95-86.21-32.76-88.17-32.9a16 16 0 0 0-16.83 19.4c.42 1.93 9.19 40.69 31.7 71.61a8.09 8.09 0 0 1 0 9.55C9.57 291.52.8 330.29.38 332.22a16 16 0 0 0 16.83 19.4c2-.14 48.53-4 88.12-32.88q4.85-3.56 9.47-7.22a8 8 0 0 1 10.06.07c23.25 19.19 55.05 44.28 92 58a4 4 0 0 1 2.42 4.83l-10.66 37.18a16 16 0 0 0 18 20.18c17.16-2.9 51.88-12.86 96.05-46.83a8.15 8.15 0 0 1 4.36-1.65a287.36 287.36 0 0 0 39.22-5.3a4 4 0 0 0 2.69-5.83l-4.51-8.29A214.81 214.81 0 0 1 335.45 256z" fill="currentColor"></path></svg>
                            </template>
                            default
                        </w-button>
                        <w-button type="primary" @click="setLoading('primary')" :loading="loadings.primary">
                            <template #icon>
                                <Aperture></Aperture>
                            </template>
                            primary
                        </w-button>
                        <w-button type="success" @click="setLoading('success')" :loading="loadings.success">
                            <template #icon>
                                <Aperture></Aperture>
                            </template>
                            success
                        </w-button>
                        <w-button type="warning" @click="setLoading('warning')" :loading="loadings.warning">
                            <template #icon>
                                <Aperture></Aperture>
                            </template>
                            warning
                        </w-button>
                        <w-button type="error" @click="setLoading('error')" :loading="loadings.error">
                            <template #icon>
                                <Aperture></Aperture>
                            </template>
                            error
                        </w-button>
                        <w-button type="tertiary" @click="setLoading('tertiary')" :loading="loadings.tertiary">
                            <template #icon>
                                <Aperture></Aperture>
                            </template>
                            tertiary
                        </w-button>
                    </w-div>
            </CodePreview>
        


      
            <CodePreview  title="尺寸 - size" >
                <w-div :flex="['g-15','wrap']" mb="15">
                    <w-button type="default" size="mini">mini</w-button>
                    <w-button type="primary" size="small">small</w-button>
                    <w-button type="success" size="default">default</w-button>
                    <w-button type="warning" size="biger">biger</w-button>
                </w-div>
                <w-div :flex="['g-15','wrap']" mb="15">
                    <w-button type="default" size="mini" round>mini</w-button>
                    <w-button type="primary" size="small" round>small</w-button>
                    <w-button type="success" size="default" round>default</w-button>
                    <w-button type="warning" size="biger" round>biger</w-button>
                </w-div>
                <w-div :flex="['g-15','wrap']">
                    <w-button type="default" size="mini"    abstract="round">mini</w-button>
                    <w-button type="primary" size="small"   abstract="round">small</w-button>
                    <w-button type="success" size="default" abstract="round">default</w-button>
                    <w-button type="warning" size="biger"   abstract="round">biger</w-button>
                </w-div>
            </CodePreview>
        
        </GridMode>
        <w-div p="20">
            <PropsDisplay title="Button props" :props="ButtonProps" :noneed="['units']"></PropsDisplay>
        </w-div>
        <w-div p="20">
            <w-h1 mb="10">Button slots</w-h1>
            <h3>defalut&nbsp;&nbsp;按钮内容</h3>
            <h3>icon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按钮图标</h3>
        </w-div>

    </w-div>

</template>
<script lang="ts" setup>
/**
 * @desc Button 按钮
 * @groupName 组件
 */
import CodePreview from '../components/codePreview.vue';
import NoTice from '../components/notice.vue';
import { as } from '../assets/assets';
import {Aperture} from '@vicons/ionicons5'
import { ref } from 'vue';
import PropsDisplay from '../components/propsDisplay.vue';
import GridMode from '../components/gridMode.vue';

const loadings = ref(<{[k:string]:any}>{})
const setLoading = (type:string)=>{
    loadings.value[type] = true
    setTimeout(() => {
        loadings.value[type] = false
    }, 1500);
}

const ButtonProps = [
    {
        prop:'type',
        text:'按钮类型/样式',
        type:"'defalut'|'primary'|'success'|'info'|'warning'|'error'|'tertiary'|'none'",
        default:"'defalut'"
    },
    {
        prop:'effect',
        text:'点击特效',
        type:"'box'|'text'|'biger'|'small'|'rotate'|'none'",
        default:"'box'"
    },   
    {
        prop:'abstract',
        text:'抽象按钮类型',
        type:"'unseen'|'dash'|'biger'|'glass'|'round'",
        default:"-"
    },
    {
        prop:'round',
        text:'圆角按钮？',
        type:"boolean",
        default:"false"
    },    
    {
        prop:'loading',
        text:'加载状态？',
        type:"boolean",
        default:"false"
    },
    {
        prop:'disabled',
        text:'禁用状态？',
        type:"boolean",
        default:"false"
    },
    {
        prop:'size',
        text:'尺寸',
        type:"'mini'|'small'|'default'|'biger'",
        default:"'defalut'"
    }
]




</script>
<style lang="">
    
</style>