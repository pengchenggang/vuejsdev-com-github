<template>
  <span style="
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      line-height: 12px;
    ">
    <span style="display: block; font-size: 12px; color: #b0b0b0;">{{ Chinese }}</span>
    <span style="display: block; color: #2f497a;">
      <slot></slot>
    </span>
    <span style="display: block; font-size: 12px; margin-bottom: 4px; color: #b0b0b0;">{{ phonetic }}</span>
  </span>
</template>

<script>
import { ref, reactive } from "vue"
import dict from "./dict.js"
export default {
  props: {
    p: { // 音标
      type: String,
      default: "",
    },
    p2: {
      type: Boolean,
      default: false
    },
    p3: {
      type: Boolean,
      default: false
    },
    c: { // 中文
      type: String,
      default: "",
    },
    c2: {
      type: Boolean,
      default: false
    },
  },
  setup (props, context) {
    const defaults = context.slots.default()
    const word = defaults[0].children
    // console.info('word ', word)
    const w = dict[word.toLowerCase()]
    if (!w) {
      console.error('没有这个单词在字典中：', word)
    }

    let phoneticValue = w.phonetic
    let ChineseValue = w.Chinese

    if (props.p2) { // 第二个
      phoneticValue = w.phonetic2
    }

    if (props.p3) { // 第三个
      phoneticValue = w.phonetic3
    }

    if (props.c2) {
      ChineseValue = w.Chinese2
    }
    if (props.p !== '') {
      phoneticValue = props.p
    }

    if (props.c !== '') {
      ChineseValue = props.c
    }


    // 用法 <w>第一个音标</w> <w w2>第二个音标</w>
    return {
      phonetic: phoneticValue,
      Chinese: ChineseValue,
    }
  },
  mounted () {
    // console.info(this.$refs.phoneticRef.clientWidth);
  },
};
</script>

<style>
</style>