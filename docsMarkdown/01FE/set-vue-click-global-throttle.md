# Button的全局节流
::: details 目录
[[toc]]
:::
> 这是一个系统默认配置 所有系统的按钮要防止连续点击的暴力测试
>
> 这不是防抖函数，防抖函数不适合这里，这是节流函数

## Step. 1: 注册函数

> 将函数注入到 Vue 当中

```js
// @/main.js
import setVueClickGlobalThrottle from "@/libs/common/setVueClickGlobalThrottle.js"
setVueClickGlobalThrottle(Vue) // 将所有click 进行节流处理
```

## Step. 2: 局部节流函数失效处理

> 并不是所有按钮需要节流

```js
<Button :notThrottle="true"> &#8593; </Button>
```

## Code. 3: setVueClickGlobalThrottle.js 源码
> 这里的节流时间为1000毫秒，具体可以自行修改
```js
// @/libs/common/setVueClickGlobalThrottle.js
const setVueClickGlobalThrottle = Vue => {
  // 节流
  const on = Vue.prototype.$on
  Vue.prototype.$on = function (event, func) {
    // console.info('全局拦截 click $on事件 event', event)
    // console.info('节流 func', func)
    let previous = 0
    let newFunc = func
    if (event === "click") {
      // console.info('全局拦截 click 事件 setVueClickGlobalThrottle')
      newFunc = function () {
        const now = new Date().getTime()
        if (this.$attrs.notThrottle || previous + 1000 <= now) {
          console.info("this, arguments", this, arguments)
          func.apply(this, arguments)
          previous = now
        }
      }
    }
    on.call(this, event, newFunc)
  }
}

export default setVueClickGlobalThrottle
```
