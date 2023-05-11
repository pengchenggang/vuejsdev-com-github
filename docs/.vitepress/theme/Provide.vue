<template>
  <slot></slot>
</template>

<script>
import { ref, reactive, provide } from "vue"
export default {
  provide () {
    return {
      provide1: this.provide1
    }
  },
  data () {
    return { 
      provide1: {
        currentLine: '',
        player: null,
      },
    }
  },
  // setup (props, context) {
  //   // let provide = {
  //   //   currentLine: '123'
  //   // }
  //   // provide('provide', provide)
  //   return {
  //   }
  // },
  mounted () {
    this.provide1.player = new Audio()
  },
};
</script>

<style>
</style>