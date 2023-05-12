# Node.js 常用函数

> 总结常用 node 函数 用的 ESM 模块。

```js
// package.json
"type": "module",
```

## Func. 1: 读取文件-同步/异步

> 读取 path 文件 `ESM模式`

- 同步读取文件

```js
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const path = resolve(__dirname, "path/data.json")
const data = readFileSync(path, { encoding: "utf-8" })
console.log(data)
```

- 异步读取文件 - 异步函数可以配合 getAc

```js
import { readFile } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const path = resolve(__dirname, "path/data.json")
readFile(path, { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    console.log(data)
  } else {
    console.error(err)
  }
})
```
## Func. 2: 写入文件-同步
```js
import { writeFileSync, mkdirSync, existsSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
const __dirname = dirname(fileURLToPath(import.meta.url))
const title = '111'
const outputDir = resolve(__dirname, "output")
const outputFile = resolve(outputDir, `${title}.txt`)

// 检查outputDir是否存在，没有则创建一个
if (!existsSync(outputDir)) {
  mkdirSync(outputDir)
}

const text = `123`
writeFileSync(outputFile, text) // 将text写入outputFile文件中

return outputFile
```
## Para. 3: 入参 process.argv
> 脚本接收的参数 以数组的形式接收
```js
console.info('process.argv', process.argv)
```

## Func. 4: 查看module全部模块
> 查看node环境 全部模块
```js
// commonjs
const {builtinModules} = require('module');
console.log(builtinModules);
// esm
import {builtinModules} from 'module'
console.log(builtinModules);
// output
[
  '_http_agent',         '_http_client',        '_http_common',
  '_http_incoming',      '_http_outgoing',      '_http_server',
  '_stream_duplex',      '_stream_passthrough', '_stream_readable',
  '_stream_transform',   '_stream_wrap',        '_stream_writable',
  '_tls_common',         '_tls_wrap',           'assert',
  'assert/strict',       'async_hooks',         'buffer',
  'child_process',       'cluster',             'console',
  'constants',           'crypto',              'dgram',
  'diagnostics_channel', 'dns',                 'dns/promises',
  'domain',              'events',              'fs',
  'fs/promises',         'http',                'http2',
  'https',               'inspector',           'module',
  'net',                 'os',                  'path',
  'path/posix',          'path/win32',          'perf_hooks',
  'process',             'punycode',            'querystring',
  'readline',            'repl',                'stream',
  'stream/consumers',    'stream/promises',     'stream/web',
  'string_decoder',      'sys',                 'timers',
  'timers/promises',     'tls',                 'trace_events',
  'tty',                 'url',                 'util',
  'util/types',          'v8',                  'vm',
  'worker_threads',      'zlib'
]
```
