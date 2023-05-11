<template>
  <span style="font-size: 14px; display: inline-block; line-height:54px; margin-left: 30px; cursor: pointer;"
        @click="playAudioHandleAgent">
    [ {{ startStatus === 'stop' ? '开始播放' : '暂停播放'}} ]
  </span>
  <!-- <span @click="playAudioHandleForPause"
        style="font-size: 14px; display: inline-block; line-height:54px; margin-left: 15px; cursor: pointer;">[ 暂停
    ]</span> -->
  <span @click="playAudioHandleForStop"
        style="font-size: 14px; display: inline-block; line-height:54px; margin-left: 30px; cursor: pointer;">[ 停止
    ]</span>
  <!-- <audio ref="playerRef"
         :src="'https://www.vuejsdev.com'+src"
         preload="auto"
         loop></audio> -->
</template>

<script>
// https://gitee.com/Fang3s/howler.js
import { ref, inject } from "vue"
import { Howl, Howler } from 'howler'

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    s: {
      type: Array,
      default: []
    },
  },
  data () {
    return {
      Howler,
      startStatus: 'stop',
      player: null,
      myInterval: {
        value: null
      },
    }
  },
  inject: ['provide1'],
  mounted () {
    const mp3Url = this.src
    // this.player = new Audio(mp3Url)
    // this.player.preload = "auto"
    this.player = new Howl({
      src: [mp3Url],
      preload: false,
      // html5: true,
      loop: true
    })

    // this.player = this.$refs.playerRef
    window.player = this.player

    // this.player.addEventListener('loadedmetadata', function () {
    //   _player.load()
    // })

    let s = this.s.map(arr => {
      return [this.getSeconds(arr[0]), this.getSeconds(arr[1]), arr[2]]
    })

    // const _player = this.player

    // this.$nextTick(() => {
    //   let _myInterval = this.myInterval
    //   const _provide1 = this.provide1
    //   const _player = this.player
    //   this.player.addEventListener("playing", function () {
    //     _myInterval.value = setInterval(function () {
    //       // console.info('this.player.currentTime', _player.currentTime)
    //       s.forEach(arr => {
    //         if (_player.currentTime > arr[0] && _player.currentTime < arr[1]) {
    //           _provide1.currentLine = arr[2]
    //         }
    //       })
    //     }, 500)
    //   })
    // })

  },
  methods: {
    getSeconds (str) {
      const arr = str.split(':')
      return Number(arr[0]) * 60 + parseFloat(arr[1])
    },
    playAudioHandleForStop () {
      // console.info('this.player', this.player)
      clearInterval(this.myInterval.value)
      this.player.load()
      this.player.pause()
      this.player.currentTime = 0
      this.currentLine = ''
      this.startStatus = 'stop'
    },
    playAudioHandleForPause () {
      // console.info('this.player', this.player)
      clearInterval(this.myInterval.value)
      this.player.pause()
    },
    playAudioHandleAgent () {
      if (this.startStatus === 'stop') {
        // 进行播放
        this.playAudioHandle()
        this.startStatus = 'playing'
      } else {
        // 暂停播放
        this.playAudioHandleForPause()
        this.startStatus = 'stop'
      }
    },
    playAudioHandle () {
      // console.info('playAudioHandle this.provide1.currentLine', this.provide1.currentLine)
      // let ct = ''
      // if (this.provide1.currentLine !== '') {
      //   this.s.forEach(itemArr => {
      //     if (itemArr[2] === this.provide1.currentLine) {
      //       console.info('itemArr', itemArr)
      //       ct = this.getSeconds(itemArr[0])
      //       console.info('this.player.currentTime', this.player.currentTime)
      //     }
      //   })
      // }
      const speed = window.localStorage.getItem('speed') ? window.localStorage.getItem('speed') : false
      const slowSpeed = 0.4
      const playbackRate = speed === 'true' ? 1 : slowSpeed
      this.player.playbackRate = playbackRate
      this.player.loop = true
      // this.player.src = this.src
      this.player.play()
      // if (ct !== '') {
      //   this.player.currentTime = ct
      // }

    },
  },
};
</script>

<style>
</style>