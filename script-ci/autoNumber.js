// 每次换后面的参数
// Step. 1: 当前md文件标题栏右键 复制相对路径
// Step. 2: 在powershell(Ctrl+`)里面输入 npm run autoNumber (shift+Ins)
// Tips. 3: 下次如果还是上次的文件，可以直接按上箭头
// Tpis. 4: 执行脚本前确保文件已经保存过
// "autoNumber": "node script-ci/autoNumber.js",
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const path = resolve(__dirname, '../' + process.argv[2])
const data = readFileSync(path, { encoding: 'utf-8' })

const arr = data.split('\r\n')
let index = 1
// 二级标题格式
// ## Plug. 21: Path Intellisense
const reg = /(## [\s\S]*?\. )[\d\d].?(:)/
const retArr = arr.map(item => {
  if (reg.test(item)) {
    const c_item = item
    const str = item.replace(reg, "$1" + index + "$2")
    const c_str = str
    if (c_item !== c_str) {
      console.info('old: ', c_item)
      console.info('new: ', c_str)
      console.info('---')
    }
    index = index + 1
    return str
  } else {
    return item
  }
})
const outStr = retArr.join('\r\n')
writeFileSync(path, outStr)

// console.info('process.argv', process.argv[2])