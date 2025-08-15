
<script lang='ts' setup>
/**
 * @desc static标识
 * @groupName props
 */
import notice from '../components/notice.vue';
import codePreview from '../components/codePreview.vue';
import CodePreviewTip from '../components/codePreviewTip.vue';
import { as } from '../assets/assets';

</script>

<template>
    <w-div class="flex-1" bg="white" p="40"  >
        <w-div p="20">
            <h1>static/s.</h1>
            <notice class="mt-10" title="作用" msg="它不是生成样式的prop，它是其它生成样式的prop的一种标识符。用来强调这个prop是绝对静态的，不会随着组件的状态变化而变化。"></notice>
        </w-div>

            <codePreview  title="强调静态prop" :show="true"  >
              <CodePreviewTip>
                有时候，我们的prop会用到变量，prop就会成为bind属性，但是bind属性我无法去编译成静态的样式，因为它是动态的。而对于prop集合来说，很可能并不是所有的样式都是动态的，有可能存在动静结合的情况，比如下面这个案例,虽然最终的效果都是一模一样的，但实际上它们并不一样，前者不强调静态属性，它包含的所有样式都是在浏览器端通过js实时控制的。而后者强调了static属性，它强调的静态样式在预编译阶段就已经被编译成了普通的css样式，没有额外的性能开销。
              </CodePreviewTip>
              <CodePreviewTip >
                <w-div w="100" flex="center col">
                  不强调static
                  <span>↓</span>
                </w-div>
              </CodePreviewTip>
              <w-div w="100" h="100" :bg="as.head + ' size-100-100 r-n'"  bd="red 1px solid" ></w-div>
              <CodePreviewTip >
                <w-div w="100" flex="center col">
                  强调static
                  <span>↓</span>
                </w-div>
              </CodePreviewTip>
              <w-div w="100" h="100" :bg="as.head" static-bg="size-100-100 r-n"  bd="red 1px solid" ></w-div>
            </codePreview>
            <codePreview  title="语法糖" :show="true"  >
              <CodePreviewTip style="user-select: none;">
                s. = static
              </CodePreviewTip>
              <w-div w="100" h="100" :bg="as.head" s.-bg="size-100-100 r-n"  bd="red 1px solid" ></w-div>
            </codePreview>
         


    </w-div>
</template>

<style lang='scss'>

</style>
