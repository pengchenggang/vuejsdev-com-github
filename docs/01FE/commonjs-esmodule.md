# CommonJs VS ES Module

::: details 目录
[[toc]]
:::

> 这里的环境是指在 Node.js 下，有两种模块系统规范。简单来说就是**导入导出**的规范。两种规范语法不同。

**CommonJS** 是由 Mozilla 的工程师 Kevin Dangoor 于 2009 年 8 月改名的，原项目叫做 ServerJS，是在 2009 年 1 月创建的。

**ES Module** 简称 ESM，ESM 是 ES6 开发的规范。ES6 于 2015 年 6 月正式发布，ES Module 于 2019 年 5 月 21 日被 Firefox 67+，Safari 11.1+，Chrome 63+支持。这里的 ES = `ECMAScript`。

| 模块系统规范 | 发布年份 |
| ------------ | :------: |
| CommonJS     | 2009 年  |
| ES Module    | 2015 年  |

::: tip
vue 开发用的是 ES Module 规范。

node.js 默认是 CommonJS，如果要修改的话，需要在 package.json 的 type: "module"，就是用 ES Module 了。
:::

> 常见规范有 AMD、CMD、UMD、CommonJS、ES Module

- [node10 年查看大图](https://www.cnblogs.com/pengchenggang/p/16545920.html)

Node.js 开始是用的 CommonJs

Node.js 从 v13.2.0 之后也引入了规范的 ES Modules 机制

## Part. 1: CommonJs

CommonJs 官网 https://www.commonjs.org/

> 这里都是最常用的方法，用多少写多少。

**导出用法**

```js
// 导出方法1
exports.a = 1
exports.b = 2
exports.c = () => a + b

// 导出方法2
module.exports = {
  a,
  b,
  c,
}

// 方法1 和 方法2 不能同时使用，因为指针会被覆盖
```

**导出原理**

```js
// 其实就是外层套了一个函数 两个入参
function (module, exports) {
  // 所以你可以对 module.exports 赋值
  // 还可以对 exports.属性 赋值
  // 原理就是 入参不能被赋值，但是它的属性你可以赋值
}
```

**导入用法**

```js
const { a, b, c } = require("./abc.js")
const aaa = require("./abc.js")
```

## Part. 2: ES Module

ES Module 脚本扩展名是 `.mjs`，如果要改成`.js`,需要在 package.json 的 type: "module"。

**导出**

```js
// 导出单个对象
export let abc = "abc"
export const func = () => {}

// 导出默认对象
const abc = { a, b, c }
export default abc
```

**导入**

```js
// 静态导入 最常用
import obj from "abc"
import { bcd } from "abc"
import obj from "./abc"

// 动态导入 import() 是 promise
;(async function () {
  const { abc } = await import("./yourjs.mjs")
})()

import("./yourjs.mjs").then(res => {
  console.info("res.abc", res.abc)
})
```

## Part. 3: CJS 对比 ESM 表

vue.config.js 用的是 CJS，但是 vue 开发里面的代码都是用的 ESM。

| <div style="width:100px">-</div> | CommonJS                                 | ES Module                        |
| -------------------------------- | ---------------------------------------- | -------------------------------- |
| 年份                             | 2009 年                                  | 2015 年                          |
| 导出单属性                       | `exports.a = 1;`                         | `export let abc = 'abc';`        |
| 导出 Default                     | `module.exports = abc;`                  | `export default abc;`            |
| 导入-静态                        | -                                        | `import obj from 'abc';`         |
| 导入-动态                        | `const {a, b, c} = require('./abc.js');` | `import('./yourjs.mjs')` promise |
| 默认扩展名                       | .js                                      | .mjs                             |

## Code. 4: 获取文件路径

默认是 当前目录 + 文件相对路径，**这个默认不对**，应该是 文件当前目录 + 文件相对路径。

- CommonJS 代码

```js
const path = require("path")
const resolve = dir => path.join(__dirname, dir)

const path = resolve("aaa/data.json")
```

- ES Module 代码

```js
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const path = resolve(__dirname, "corpus/data.json")

const data = readFileSync(path, { encoding: "utf-8" }) // 赠送个读取文件函数
```
