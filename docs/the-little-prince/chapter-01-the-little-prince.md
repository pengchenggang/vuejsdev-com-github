# Chapter 1 - The little prince

<Provide>

<!-- <audio id="aud_nov_audio" controls="controls" src="/the-little-prince-audio/c01.m4a">你的浏览器不支持音频</audio>
<pa src="c01.m4a" showStop /> -->

<Lines sound="c01_01,c01_02,c01_03,c01_04,c01_05">
<template #e1>I <w>lived</w><l/> <w>all</w><l/> <w>alone</w>,<pa s="c01_01" /></template>
<template #c1>我就这样孤独地生活着,</template>
<template #e2><w>without</w> <w>anyone</w> I <w>could</w> <w>really</w> <w>talk</w> <w>to</w>,<pa s="c01_02" /> </template>
<template #c2>没有一个能真正谈得来的人，</template>
<template #e3><w>until</w><l/> I <w>had</w> <w>to</w> <w>make</w> a <w>crash</w> <w>landing</w><pa s="c01_03" /></template>
<template #c3>发生了那次故障。</template>
<template #e4> <w>in</w><l/> <w p3>the</w> <w>Sahara</w> <w>Desert</w><pa s="c01_04" /></template>
<template #c4>在撒哈拉沙漠上</template>
<template #e5> <w>six</w> <w>years</w><l/> <w>ago</w>.<pa s="c01_05" /></template>
<template #c5>一直到六年前</template>
</Lines>

<Lines sound="c01_06,c01_07#c01_08,c01_09#c01_10,c01_11,c01_12#c01_13">
<template #e1><w>Something</w> <w>in</w> <w>my</w> <w>plane</w>'s <w>engine</w> <w>had</w> <w>broken</w>,<pa s="c01_06" /> </template>
<template #c1>我的发动机里有个东西损坏了。</template>
<template #e2><w>and</w> <w>since</w><l/> I <w>had</w> <w>neither</w><l/> a <w>mechanic</w><pa s="c01_07" /> <w>nor</w> <w>passengers</w><l/> <w>in</w> <w>the</w> <w>plane</w> <w>with</w> <w>me</w>,<pa s="c01_08" /> </template>
<template #c2>当时由于我既没有带机械师也没有带旅客，</template>
<template #e3>I <w>was</w> <w>preparing</w> <w>to</w> <w>undertake</w> <w>the</w> <w>difficult</w><l/> <w>repair</w> <w>job</w> <pa s="c01_09" /> <w>by</w> <w>myself</w>.<pa s="c01_10" /></template>
<template #c3>我就试图独自完成这个困难的维修工作。</template>
<template #e4><w>For</w> <w>me</w> <w>it</w><d/> <w>was</w><l/> a <w>matter</w><l/> <w>of</w> <w>life</w> <w>or</w> <w>death</w>: <pa s="c01_11" /></template>
<template #c4>这对我来说是个生与死的问题。</template>
<template #e5>I <d2/><w>had</w><l/> <w>only</w><d/><l/> <w>enough</w> <w>drinking</w> <w>water</w><pa s="c01_12" /> <w>for</w> <w>eight</w> <w>days</w>.<pa s="c01_13" /></template>
<template #c5>我随身带的水只够饮用一星期。</template>
</Lines>

<!-- ::: tip 发音笔记 ::: -->
<BottomBox>
<SpeedSwitch />
<!-- /the-little-prince-audio/c01.m4a -->
<PlayAudioBox src="/vuejsdev-com-github/the-little-prince/c01.m4a" :s="[
  ['0:12.767', '0:14.577', 'c01_01'],
  ['0:15.296', '0:18.522', 'c01_02'],
  ['0:19.752', '0:22.561', 'c01_03'],
  ['0:22.596', '0:24.269', 'c01_04'],
  ['0:24.269', '0:25.473', 'c01_05'],
  ['0:27.463', '0:30.355', 'c01_06'],
  ['0:31.445', '0:34.289', 'c01_07'],
  ['0:34.227', '0:36.811', 'c01_08'],
  ['0:37.000', '0:40.647', 'c01_09'],
  ['0:40.647', '0:42.367', 'c01_10'],
  ['0:43.391', '0:46.367', 'c01_11'],
  ['0:47.000', '0:49.347', 'c01_12'],
  ['0:49.617', '0:51.504', 'c01_13']
]"/>
</BottomBox>

</Provide>

<script setup>
import w from '../../docs/.vitepress/theme/Word.vue'
import Lines from '../../docs/.vitepress/theme/Lines.vue'
import pa from '../../docs/.vitepress/theme/PlayAudio.vue'
import PlayAudioBox from '../../docs/.vitepress/theme/PlayAudioBox.vue'
import l from '../../docs/.vitepress/theme/Liandu.vue'
import d from '../../docs/.vitepress/theme/DeleteChar.vue'
import d2 from '../../docs/.vitepress/theme/DeleteChar2.vue'
import SpeedSwitch from '../../docs/.vitepress/theme/SpeedSwitch.vue'
import Provide from '../../docs/.vitepress/theme/Provide.vue'
import BottomBox from '../../docs/.vitepress/theme/BottomBox.vue'
</script>
