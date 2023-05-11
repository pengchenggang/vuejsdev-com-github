# asyncTool.js 异步执行工具

::: details 目录
[[toc]]
:::

> 所有的业务逻辑，超过两个后，均要用此工具编写逻辑

## Step. 1: getAc 使用方法

1. 注册 asyncTool

```js
// src/main.js
import asyncTool from "@/libs/common/asyncTool"
Vue.prototype.$getAc = () => {
  return new asyncTool()
}
```

2. 常规使用方法

```js
const ac = this.$getAc()
ac.use(this.businessLogic1)
ac.use(this.businessLogic2)
ac.run()

// methods 里面
businessLogic1 (ctx, next) {
  // 业务逻辑1
  next()
},
businessLogic2 (ctx, next) {
  // 业务逻辑2
  next()
},
```


## Meth. 2: use 方法
> 作用：添加一个函数进入序列
> 
> 目的：注入上下文ctx 和 next 进入函数体

```js
const ac = this.$getAc()
ac.ctx.abc = 'hello'
ac.use(this.businessLogic1)
ac.run()
// methods 里面
businessLogic1 (ctx, next) {
  // ctx 是上下文
  // next 是指向下一个函数 使用方法 next()
  console.info('ctx.abc', ctx.abc) // hello
}
```

## Meth. 3: run 方法
> 作用：执行当前方法序列
> 
> 目的：执行方法序列，可以添加最后一个lastCallBack

```js
const ac = this.$getAc()
ac.use(this.businessLogic1)
ac.use(this.businessLogic2)
ac.use(this.businessLogic3)
// ac.run() // 调用方式1
ac.run(() => { // 调用方式2
  // ac对象可以进行分发传递，最后可以进行最后一次尾调用
  // 如果用use添加后再run,会产生重复use添加的问题
  // doSomething
})
```

## Meth. 4: nextJump 方法
> 作用：跳过下一个方法
> 
> 目的：常见于根据条件是否执行下一个方法

```js
businessLogic1 (ctx, next) {
  // 业务逻辑1
  if (a === 'ok') {
    next()
  } else {
    ctx.nextJump() // 默认跳过下一个方法
  }
},
```

## Meth. 5: goto 方法
> 作用：跳到指定的方法
> 
> 目的：常见于大跳转的业务逻辑，执行完本逻辑要执行最后几个公共逻辑，跳过中间的check

```js
const ac = this.$getAc()
ac.use(this.businessLogic1)
ac.use(this.businessLogic2)
ac.use(this.businessLogic3)
ac.use(this.businessLogic4)
ac.use(this.businessLogic5)
ac.use(this.businessLogic6, { ref: 'businessLogic6'})
ac.use(this.businessLogic7)
ac.run()

// methods 里面
businessLogic2 (ctx, next) {
  // 业务逻辑2
  if (a === 'ok') {
    next()
  } else {
    ctx.goto('businessLogic6') // 跳到指定的业务逻辑
  }
}
```

## Meth. 6: ifTo 方法
> 作用：跳过当前方法
> 
> 目的：常见于条件内部直接判断

```js
// methods 里面
businessLogic1 (ctx, next) {
  // 算是个语法糖 目的为占用一行 使得代码简洁
  // 加叹号求反的目的是 如果条件不符合 就next，条件符合就执行后面的代码
  if (ctx.ifTo(!ctx.modifyIsTrue, next)) return
  // 其他业务代码...
}
```

## Meth. 7: 批量动态调用接口
> 对于一个数组，批量调用接口
```js
getUnLocalNames (ctx, next) {
  // 新建和改名字没保存的，不能进行全部保存
  let unLocalNames = []
  this.tagListByR.forEach(item => {
    if (item.type === 'new') {
      unLocalNames.push(item.tagName)
    }
  })

  const ac = this.$getAc()
  ac.ctx.unLocalNames = unLocalNames
  this.tagListByR.forEach(item => {
    if (item.type === 'modify') {
      ac.use((ctx1, next1) => {
        apiRequest('getAppoint', { id: item.filePath }).then(data => {
          if (item.tagName !== data.xingMing) {
            ctx1.unLocalNames.push(item.tagName)
          }
          next1()
        }, err => {
          alert(err)
        })
      })
    }
  })
  ac.run(() => {
    ctx.unLocalNames = unLocalNames
    next()
  })
},
```

## Code. 8: asyncTool.js 源码

```js
// @/libs/common/asyncTool.js
// 创建时间 2020.03.11
// 更新于 2022.08.29

class asyncTool {
  // eslint-disable-next-line
  constructor() {
    this.arr = []
    this.ctx = {
      goto: this.goto,
      _root: this,
      ifTo: this.ifTo,
      nextJump: this.nextJump,
    }
    this.cIndex = 0
    this.next = null
  }

  nextJump(number = 1) {
    this._root.cIndex = this._root.cIndex + number + 1
    const one = this._root.arr[this._root.cIndex]
    console.info(
      `%cnextJump one 跳过后 ${number}个 的执行函数是: ${one.func.name} `,
      "color:green",
    )
    this._root._innerRun(one.func, one.next)
  }

  ifTo(boolValue, next) {
    if (boolValue) {
      next()
      return true
    } else {
      return false
    }
  }

  goto(funcName) {
    let runIndex = -1
    console.info("this.arr", this)
    this._root.arr.map((item, index) => {
      if (item.ref === funcName) {
        runIndex = index
      }
    })
    if (runIndex !== -1) {
      this._root.cIndex = runIndex
      this._root._innerRun(
        this._root.arr[runIndex].func,
        this._root.arr[runIndex].next,
      )
    } else {
      console.error("未找到goto方法名为" + funcName + "的函数")
    }
  }

  use(func, outParams) {
    const initParams = {
      ref: "",
    }
    const params = { ...initParams, ...outParams }
    const into = {
      ...params,
      func,
      next: () => {},
    }
    this.arr.push(into)
    if (this.arr.length > 1) {
      const index = this.arr.length - 2
      const nextFunc = () => {
        // console.info('func.length', func.length)
        this.cIndex = index + 1
        this._innerRun(func, this.arr[index + 1].next)
      }
      this.arr[index].next = nextFunc
    }
    return this
  }

  getFuncName(fun) {
    // console.info('fun', fun.toString())
    var ret = fun.toString()
    ret = ret.substr("function ".length)
    ret = ret.substr(0, ret.indexOf("("))
    return ret
  }

  _innerRun(func, next) {
    // console.info('this', this)
    // console.info('func', func)
    console.info(
      `%cfuncName: ${func.name ? func.name : ""}-${this.getFuncName(
        func,
      )}-ref:${this.arr[this.cIndex].ref}`,
      "color:green",
    )
    this.next = next
    if (func.length === 0) {
      func()
    }
    if (func.length === 1) {
      func(next)
    }
    if (func.length === 2) {
      func(this.ctx, next)
    }
  }

  run(lastCallBack) {
    // 插入最后回调执行，但是不影响 数组的内容，避免反复执行会重复插入
    if (lastCallBack && this.arr.length > 0) {
      const lastIndex = this.arr.length - 1
      this.arr[lastIndex].next = lastCallBack
    }
    if (this.arr.length > 0) {
      this._innerRun(this.arr[0].func, this.arr[0].next)
      // console.info('asyncTool func.length', this.arr[0].func.length)
    }
  }
}

export default asyncTool
```
