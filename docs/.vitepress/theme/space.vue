<template>
    <span style="color: white;" v-for="(item, index) in arr" :key="index">-</span>
</template>

<script>
import { ref, reactive } from "vue"
export default {
  props: {
    l: {
      type: String,
      default: "1"
    },
  },
  setup (props, context) {
    const len = parseInt(props.l)
    const arr = new Array(len)
    return {
      arr: arr,
    }
  },
};
</script>

<style>
</style>