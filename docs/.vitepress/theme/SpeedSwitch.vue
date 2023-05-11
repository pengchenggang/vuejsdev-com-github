<template>
  <!-- <span class="action1"
       style="font-size:14px; line-height:42px; dsiplay: inline-block;">
     <a @click="setSpeed"
       class="ssbtn VPButton1 medium1 brand1">{{ speedComputed }}</a></span> -->
  <span style="font-size: 14px; display: inline-block; line-height:54px; cursor: pointer;"
        @click="setSpeed">
    [ {{ speedComputed }} ]
  </span>
</template>

<script>
import { ref, reactive, computed } from "vue"
export default {
  data () {
    return {
      speed: 'true'
    }
  },
  methods: {
    setSpeed () {
      // console.info('setSpeed', speed.value)
      this.speed = this.speed === 'true' ? 'false' : 'true'
      window.localStorage.setItem('speed', this.speed)
    },
  },
  computed: {
    speedComputed () {
      return this.speed === 'true' ? '常速播放' : '慢速播放'
    },
    speedComputed2 () {
      return this.speed === 'true' ? '慢速播放' : '常速播放'
    },
  },
  mounted () {
    this.speed = window.localStorage.getItem('speed') ? window.localStorage.getItem('speed') : false
  }
  // setup (props, context) {
  //   let speed = ref(window.localStorage.getItem('speed') ? window.localStorage.getItem('speed') : false)
  //   const setSpeed = () => {
  //     console.info('setSpeed', speed.value)
  //     speed.value = speed.value === 'true' ? 'false' : 'true'
  //     window.localStorage.setItem('speed', speed.value)
  //   }

  //   const speedComputed = computed(() => {
  //     console.info('speedComputed', speed.value)
  //     return speed.value === 'true' ? '常速播放' : '慢速播放'
  //   })

  //   const speedComputed2 = computed(() => {
  //     console.info('speedComputed', speed.value)
  //     return speed.value === 'true' ? '慢速播放' : '常速播放'
  //   })

  //   return {
  //     speedComputed,
  //     speedComputed2,
  //     setSpeed,
  //     speed
  //   }
  // },
};
</script>

<style>
.VPButton1.brand1 {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.VPButton1.medium1 {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.VPButton1 {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
}
.action1 {
  float: left;
  flex-shrink: 0;
  padding: 6px;
}
.ssbtn {
  color: var(--vp-button-brand-text);
}
.vp-doc .ssbtn:hover {
  /* color: -webkit-link; */
  color: var(--vp-button-brand-text);
  cursor: pointer;
  text-decoration: underline;
}
.vp-doc .ssbtn2:hover {
  /* color: -webkit-link; */
  /* color: var(--vp-button-brand-text); */
  cursor: pointer;
  text-decoration: underline;
}
.VPButton1.alt1 {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}
</style>