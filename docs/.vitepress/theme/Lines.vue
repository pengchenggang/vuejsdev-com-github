<template>
  <div style="position: relative;">
    <span style="line-height:55px;">
      <span :class="e1currentLine">
        <slot name="e1"></slot>
      </span>
      <bo>
        <slot name="c1"></slot>
      </bo>

      <span :class="e2currentLine">
        <slot name="e2"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
        </ph>
        <slot name="c2"></slot>
      </bo>
      <span :class="e3currentLine">
        <slot name="e3"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
          <slot name="e2"></slot>
        </ph>
        <slot name="c3"></slot>
      </bo>
      <span :class="e4currentLine">
        <slot name="e4"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
          <slot name="e2"></slot>
          <slot name="e3"></slot>
        </ph>
        <slot name="c4"></slot>
      </bo>

      <span :class="e5currentLine">
        <slot name="e5"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
          <slot name="e2"></slot>
          <slot name="e3"></slot>
          <slot name="e4"></slot>
        </ph>
        <slot name="c5"></slot>
      </bo>

      <span :class="e6currentLine">
        <slot name="e6"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
          <slot name="e2"></slot>
          <slot name="e3"></slot>
          <slot name="e4"></slot>
          <slot name="e5"></slot>
        </ph>
        <slot name="c6"></slot>
      </bo>

      <span :class="e7currentLine">
      <slot name="e7"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
          <slot name="e2"></slot>
          <slot name="e3"></slot>
          <slot name="e4"></slot>
          <slot name="e5"></slot>
          <slot name="e6"></slot>
        </ph>
        <slot name="c7"></slot>
      </bo>

      <span :class="e8currentLine">
      <slot name="e8"></slot>
      </span>
      <bo>
        <ph>
          <slot name="e1"></slot>
          <slot name="e2"></slot>
          <slot name="e3"></slot>
          <slot name="e4"></slot>
          <slot name="e5"></slot>
          <slot name="e6"></slot>
          <slot name="e7"></slot>
        </ph>
        <slot name="c8"></slot>
      </bo>
    </span>
  </div>
</template>

<script>
// <Lines>
// <template #e1></template>
// <template #c1></template>
// <template #e2></template>
// <template #c2></template>
// <template #e3></template>
// <template #c3></template>
// <template #e4></template>
// <template #c4></template>
// <template #e5></template>
// <template #c5></template>
// <template #e6></template>
// <template #c6></template>
// <template #e7></template>
// <template #c7></template>
// </Lines>
import { ref, reactive, watch, inject } from "vue"
import bo from './box.vue'
import ph from './Placeholder.vue'
export default {
  components: {
    bo,
    ph
  },
  props: {
    sound: {
      type: String,
      default: "",
    },
  },
  inject: ['provide1'],
  created () {
    // console.info('provide', this.provide)
  },
  watch: {
    'provide1.currentLine': function (val, oldVal) {
      // console.info('cl', val)
      // console.info('watch provide1.currentLine', val)
      if (this.e1Sound.includes(val)) {
        this.e1currentLine = 'currentLine'
      } else {
        this.e1currentLine = ''
      }

      if (this.e2Sound.includes(val)) {
        this.e2currentLine = 'currentLine'
      } else {
        this.e2currentLine = ''
      }

      if (this.e3Sound.includes(val)) {
        this.e3currentLine = 'currentLine'
      } else {
        this.e3currentLine = ''
      }

      if (this.e4Sound.includes(val)) {
        this.e4currentLine = 'currentLine'
      } else {
        this.e4currentLine = ''
      }

      if (this.e5Sound.includes(val)) {
        this.e5currentLine = 'currentLine'
      } else {
        this.e5currentLine = ''
      }

      if (this.e6Sound.includes(val)) {
        this.e6currentLine = 'currentLine'
      } else {
        this.e6currentLine = ''
      }

      if (this.e7Sound.includes(val)) {
        this.e7currentLine = 'currentLine'
      } else {
        this.e7currentLine = ''
      }

      if (this.e8Sound.includes(val)) {
        this.e8currentLine = 'currentLine'
      } else {
        this.e8currentLine = ''
      }
    },
  },
  data () {
    return { 
      e1currentLine: '',
      e2currentLine: '',
      e3currentLine: '',
      e4currentLine: '',
      e5currentLine: '',
      e6currentLine: '',
      e7currentLine: '',
      e8currentLine: '',
      e1Sound: '',
      e2Sound: '',
      e3Sound: '',
      e4Sound: '',
      e5Sound: '',
      e6Sound: '',
      e7Sound: '',
      e8Sound: '',
    }
  },
  mounted () {
    const soundArr = this.sound.split(',')
    this.e1Sound = soundArr[0] ? soundArr[0].split('#') : ''
    this.e2Sound = soundArr[1] ? soundArr[1].split('#') : ''
    this.e3Sound = soundArr[2] ? soundArr[2].split('#') : ''
    this.e4Sound = soundArr[3] ? soundArr[3].split('#') : ''
    this.e5Sound = soundArr[4] ? soundArr[4].split('#') : ''
    this.e6Sound = soundArr[5] ? soundArr[5].split('#') : ''
    this.e7Sound = soundArr[6] ? soundArr[6].split('#') : ''
    this.e8Sound = soundArr[7] ? soundArr[7].split('#') : ''
  },
  // setup (props, context) {
  //   const soundArr = props.sound.split(',')
  //   const e1Sound = soundArr[0] ? soundArr[0].split('#') : ''
  //   let e1currentLine = ref('')
  //   const e2Sound = soundArr[1] ? soundArr[1].split('#') : ''
  //   let e2currentLine = ref('')
  //   const e3Sound = soundArr[2] ? soundArr[2].split('#') : ''
  //   let e3currentLine = ref('')
  //   const e4Sound = soundArr[3] ? soundArr[3].split('#') : ''
  //   let e4currentLine = ref('')
  //   const e5Sound = soundArr[4] ? soundArr[4].split('#') : ''
  //   let e5currentLine = ref('')
  //   const e6Sound = soundArr[5] ? soundArr[5].split('#') : ''
  //   let e6currentLine = ref('')
  //   const e7Sound = soundArr[6] ? soundArr[6].split('#') : ''
  //   let e7currentLine = ref('')
  //   const e8Sound = soundArr[7] ? soundArr[7].split('#') : ''
  //   let e8currentLine = ref('')


  //   let provide1 = inject('provide1')
  //   // console.info('provide1.currentLine', provide1.currentLine)
  //   watch(provide1.currentLine, (val, oldVal) => {
  //     console.info('watch provide1.currentLine', val)
  //     if (e1Sound.includes(val)) {
  //       e1currentLine.value = 'currentLine'
  //     } else {
  //       e1currentLine.value = ''
  //     }

  //     if (e2Sound.includes(val)) {
  //       e2currentLine.value = 'currentLine'
  //     } else {
  //       e2currentLine.value = ''
  //     }

  //     if (e3Sound.includes(val)) {
  //       e3currentLine.value = 'currentLine'
  //     } else {
  //       e3currentLine.value = ''
  //     }

  //     if (e4Sound.includes(val)) {
  //       e4currentLine.value = 'currentLine'
  //     } else {
  //       e4currentLine.value = ''
  //     }

  //     if (e5Sound.includes(val)) {
  //       e5currentLine.value = 'currentLine'
  //     } else {
  //       e5currentLine.value = ''
  //     }

  //     if (e6Sound.includes(val)) {
  //       e6currentLine.value = 'currentLine'
  //     } else {
  //       e6currentLine.value = ''
  //     }

  //     if (e7Sound.includes(val)) {
  //       e7currentLine.value = 'currentLine'
  //     } else {
  //       e7currentLine.value = ''
  //     }

  //     if (e8Sound.includes(val)) {
  //       e8currentLine.value = 'currentLine'
  //     } else {
  //       e8currentLine.value = ''
  //     }
  //   })

  //   // if (e1Sound) {
  //   //   console.info('e1Sound', e1Sound)
  //   //   console.info('e2Sound', e2Sound)
  //   // }
  //   return {
  //     e1currentLine,
  //     e2currentLine,
  //     e3currentLine,
  //     e4currentLine,
  //     e5currentLine,
  //     e6currentLine,
  //     e7currentLine,
  //     e8currentLine,
  //   }
  // },
};
</script>

<style>
.currentLine {
  /* text-decoration:underline; */
  /* background-color: #99befd; */
  border-bottom: 1px solid #99befd;
  padding-bottom: 7px;
}
</style>