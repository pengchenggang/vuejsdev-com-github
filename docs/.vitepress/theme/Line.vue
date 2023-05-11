<template>
  <span
    style="
      vertical-align: middle;
      line-height: 12px;
      margin-top: 20px;
    "
  >
    <!-- <span style="display: block; position: absolute; word-wrap: break-word; top: -12px; font-size: 12px; color: #b0b0b0;">{{ s }}</span> -->
    <ruby><slot></slot><rt style="text-align: left;">{{ s }}</rt></ruby>
  </span>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  props: {
    s: {
      type: String,
      default: "",
    }
  },
  setup(props, context) {
    // console.info('props ', props)
    return {
      s: props.s
    }
  },
};
</script>

<style>
</style>