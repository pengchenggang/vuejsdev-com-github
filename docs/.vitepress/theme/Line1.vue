<template>
  <span style="line-height:55px;">
    <slot></slot>
  </span>
</template>

<script>
import { ref, reactive } from "vue"
export default {
  setup (props, context) {
    const defaults = context.slots.default();
    console.info('defaults', defaults)
    return {}
  },
};
</script>

<style>
</style>