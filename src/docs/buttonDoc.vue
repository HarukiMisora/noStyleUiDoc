<template >
    <w-div class="flex-1" bg="white" p="40">
        <w-div p="20">
            <h1 class="mb-10">WButton 按钮</h1>
            <no-tice msg="WButton同样继承 WDiv 属性样式的用法。"></no-tice>
        </w-div>
        <w-div :flex="['j-evenly']" >
            <w-div w="p48" :flex="['col','g-10']">
                <CodePreview  title="基础按钮 - type" :text="baseCode">
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
                <CodePreview  title="抽象按钮 - abstract" :text="abstractCode">
                    <w-div flex="g-15">
                        <w-button type="default">default</w-button>
                        <w-button type="primary" abstract="unseen">unseen</w-button>
                        <w-button type="success" abstract="unseen">unseen</w-button>
                        <w-button type="warning" abstract="dash">dash</w-button>
                        <w-button type="error" abstract="glass">glass</w-button>
                        <w-button type="tertiary" abstract="round">round</w-button>
                        <w-button type="none">none</w-button>
                    </w-div>
                </CodePreview>
                <CodePreview  title="继承WDiv 属性 - 自定义样式" :text="WDivCode">
                    <w-div :flex="['g-15','wrap']">
                        <w-button type="default" w="200">lang...default</w-button>
                        <w-button type="primary" bg="$#a150df">#a150df primary</w-button>
                        <w-button type="success" :bg="[as.head,'s-cover']" c="red" fw="800">沉鱼落雁</w-button>
                        <w-button type="warning" h="100" f="25" effect="biger">
                            <w-div :bg="[as.img,'s-cover']">送给你</w-div>
                        </w-button>
                        <w-button type="error" f="9" h="0">不能再矮了</w-button>
                        <w-button type="tertiary" effect="none" c="red">tertiary</w-button>
                    </w-div>
                </CodePreview>
            </w-div>
            <w-div w="p48" :flex="['col','g-10']">
                <CodePreview  title="点击特效 - effect" :text="effectCode">
                    <w-div mb="5">注意：text的点击特效，我建议只在flex-x的布局下使用。type为none的按钮，box的点击特效无法生效！</w-div>
                    <w-div flex="g-15">
                        <w-button type="default" >default</w-button>
                        <w-button type="primary" effect="box">box</w-button>
                        <w-button type="success" effect="text">text</w-button>
                        <w-button type="warning" effect="biger">biger</w-button>
                        <w-button type="error"   effect="small">small</w-button>
                        <w-button type="tertiary"effect="rotate">rotate</w-button>
                        <w-button type="primary" effect="rotate">长按</w-button>
                        <w-button type="none"    effect="none">none</w-button>
                    </w-div>
                </CodePreview>
                <CodePreview  title="抽象按钮 - glass" :text="glassCode">
                    <NoTice msg="在左边抽象按钮的介绍中，看上去glass和unseen是没有什么区别的！因为那里是白色背景的天下，glass会在背景是图片的场景下工作。" class="mb-10"></NoTice>
                    <w-div :bg="[as.img,'s-cover']" h="150" p="20" :flex="['col','g-20','j-center']">
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
            </w-div>
        
        </w-div>
    </w-div>

</template>
<script lang="ts" setup>
import CodePreview from '../components/codePreview.vue';
import NoTice from '../components/notice.vue';
import { createCode } from '../components/createCode';
import { as } from '../assets/assets';

const baseCode = createCode(`
<w-div flex="g-15">
    <w-button type="default">default</w-button>
    <w-button type="primary">primary</w-button>
    <w-button type="success">success</w-button>
    <w-button type="warning">warning</w-button>
    <w-button type="error">error</w-button>
    <w-button type="tertiary">tertiary</w-button>
    <w-button type="none">none</w-button>
</w-div>
`)
const effectCode =createCode(`
<w-div flex="g-15">
    <w-button type="default" >default</w-button>
    <w-button type="primary" effect="box">box</w-button>
    <w-button type="success" effect="text">text</w-button>
    <w-button type="warning" effect="biger">biger</w-button>
    <w-button type="error"   effect="small">small</w-button>
    <w-button type="tertiary"effect="rotate">rotate</w-button>
    <w-button type="primary" effect="rotate">长按</w-button>
    <w-button type="none"    effect="none">none</w-button>
</w-div>
`)
const abstractCode =createCode(`
<w-div flex="g-15">
    <w-button type="default">default</w-button>
    <w-button type="primary" abstract="unseen">unseen</w-button>
    <w-button type="success" abstract="unseen">unseen</w-button>
    <w-button type="warning" abstract="dash">dash</w-button>
    <w-button type="error" abstract="glass">glass</w-button>
    <w-button type="tertiary" abstract="round">round</w-button>
    <w-button type="none">none</w-button>
</w-div>
`)
const glassCode =createCode(`
<w-div :bg="[as.img,'s-cover']" h="150" p="20" :flex="['col','g-20','j-center']">
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
`)
const WDivCode =createCode(`
<w-div :flex="['g-15','wrap']">
    <w-button type="default" w="200">lang...default</w-button>
    <w-button type="primary" bg="$#a150df">#a150df primary</w-button>
    <w-button type="success" :bg="[as.head,'s-cover']" c="red" fw="800">沉鱼落雁</w-button>
    <w-button type="warning" h="100" f="25" effect="biger">
        <w-div :bg="[as.img,'s-cover']">送给你</w-div>
    </w-button>
    <w-button type="error" f="9" h="0">不能再矮了</w-button>
    <w-button type="tertiary" effect="none" c="red">tertiary</w-button>
</w-div>
`)
</script>
<style lang="">
    
</style>