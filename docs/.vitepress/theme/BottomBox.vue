<template>
  <div
       style="position: fixed; height:60px; opacity: 1; bottom:0; left:0; width: 100%; text-align: center;z-index: 100; background-color: #f0f0f0; padding: 2px 20px;">
  </div>
  <div style="position: fixed; bottom:0; left:0; width: 100%; text-align: center;z-index: 100; padding: 2px 20px;">
    <slot></slot>
  </div>
</template>

<script>
// import { ref, reactive, computed } from "vue"
export default {
  // setup (props, context) {
  //   return {
  //   }
  // },
};
</script>

<style>
</style>