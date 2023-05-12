# vue项目根目录配置文件
::: details 目录
[[toc]]
:::

> 根目录有很多常见的配置文件，这里重点强调下jsconfig.json

## Part. 1: package.json - 入口文件
> 作用：package.json 是一个项目的入口，可以用 `npm init -y` 创建
```json
// jsconfig.json
{
  "name": "projectName", // 项目名称
  "version": "1.0.0", // 版本号
  "author": "authorName<123456@qq.com>", // 作者
  "private": false, // 是否可以打包发布，设置true就变成私有，就不允许打包发布
  "type": "module", // 模块类型 是 CommonJS 还是 ES Module 默认不写是 CommonJS
  "script": {}, // 执行命令脚本
  "dependencies": {}, // 依赖库 --save 开发和打包后都带上的库
  "devDependencies": {}, // 开发依赖库 --save-dev 只有开发的时候带上的库
  "browserslist": [], // 根据浏览器环境，智能添加css前缀和js的polyfill垫片
  "gitHooks": {}, // 钩子配置 经常会换成Husky
  "lint-staged": {}, // 代码检查配置
}
```

## Part. 2: jsconfig.json - 舒适度文件
> 作用：提高在写项目时舒适度的。如果是ts，文件名会是 `tsconfig.json`
1. `jsconfig.json` 存在的目录表示本项目的根目录
2. vscode 会识别vue文件中的import export的变量，文件中的函数，可以自动跳转。
::: tip 坑中回忆
vscode 函数 变量 自动跳转的坑：
* 根目录没有 `jsconfig.json` 有些会不起作用
* 根目录没有 `jsconfig.json` 自动跳转的插件也会不起作用
* 自动跳转的插件 不要装重复了，导致冲突
:::
```json
// jsconfig.json
{
  "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "allowSyntheticDefaultImports": true,
      "baseUrl": "./",
      "paths": {
        "@/*": ["src/*"]
      }
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
      "node_modules"
  ]
}
```

## Part. 3: .eslintignore - 代码校验忽略
> 作用: 哪些目录 文件 不进行 eslint校验
```ini
// .eslintignore
/public/pdfjs/
```

## Part. 4: .eslintrc.js - 代码校验配置
> 作用: eslint校验
::: tip 坑中回忆
写代码的时候，你会发现eslint对你的各种报错，可以到这里将提示的报错配置都给关上。
:::
```js
// .eslintrc.js
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项是用来指定eslint解析器的，解析器必须符合规则，
  // babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/
  // master/RULES.md#javascript-standard-style
  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，
  // 如果你使用vs-code我觉得应该可以避免出错
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // required to lint *.vue files
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，
  // 下面这个配置是用来规范html的
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
  // 下面这些rules是用来设置从插件来的规范代码的规则，
  // 使用必须去掉前缀eslint-plugin-
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  //"error" -> 2 开启错误规则
  // 了解了上面这些，下面这些代码相信也看的明白了
  rules: {
    'no-unused-vars': 'off',
    'indent': ['off', 2],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'spaced-comment': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [
      2, {
        'x-invalid-end-tag': false
      }],
    'no-undef': 'off'
  }
}
```

## Part. 5: .gitignore - git忽略
> git提交会忽略哪些文件
```js
// .gitignore 这里就是举个例子
# dependencies
/node_modules
```

## Part. 6: .babelrc - 编译器
> Babel编译器 主要作用是将高级的代码编译成低级的代码，使浏览器都能识别
```json
{
  "presets": [
    "@vue/app"
  ]
}
```

## Part. 7: .editorconfig - 统一编码风格
> 作用: 多人开发时候统一 项目编码风格
* vscode 需要装插件 `EditorConfig for VS Code`
::: tip 坑中回忆 存盘后git发现所有行都有变化
* 拉下来的老项目 一保存，所有行都变化了，但是代码没有变化
* 最后发现是回车换行的问题
* `.editorconfig` end_of_line = lf 选择行尾序列
* 老项目不动代码存盘 文件变动 CRLF 的问题
:::
```ini
// .editorconfig
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

## Part. 8: .npmrc - 指定npm源
> 设置项目的npm源，这样就不使用全局的npm源
* 这样可以保证不论那个开发人员在安装的时候都指定项目的源，不受当前npm环境影响
```ini
registry=http://192.168.100.100:8081/nexus/content/groups/npm-all/
ELECTRON_MIRROR=https://repo.huaweicloud.com/electron/
```

## Part. 9: .postcssrc.js - css加前缀
> 兼容各种浏览器css，给css加前缀
* 不用理，都帮你弄好了，vue项目默认创建
```js
// .postcssrc.js
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
```
## Part. 10: .travis.yml - 自动构建
> 作用: Travis.yml是持续集成（Travis CI）的配置文件
* 不用理，谁用CI谁再配置
```text
// .travis.yml
language: node_js
node_js: stable
script: npm run lint
notifications:
  email: false
```

## Part. 11: alias.config.js - vue别名
> vue 配置别名用的
```js
// alias.config.js
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      '_c': resolve('src/components')
    }
  }
}
```

## Part. 12: cypress.json - 测试配置
> 作用: Cypress是前端测试框架
* 不用理，前端一般没时间写测试用例，没时间test
```json
// cypress.json
{
  "pluginsFile": "tests/e2e/plugins/index.js"
}
```

## Part. 13: .favorites.json - 收藏夹配置
> 作用：vscode文件收藏夹配置文件
* 扩展 Favorites 作者 kdcro101 配置文件自动生成
```js
// .favorites.json
[
  {} // 收藏的文件
]
```

## Part. 14: vue.config.js - vue2配置
> vue2 项目配置文件，webpack的配置可以写在这里
```js
// vue.config.js
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'yourname_web/'
  : 'yourname_web/'

const getTimeStamp = () => {
  let ret = ''
  const date = new Date()
  ret += date.getFullYear()
  ret += '-' + (date.getMonth() + 1)
  ret += '-' + date.getDate()
  ret += '_' + date.getHours()
  ret += '-' + date.getMinutes()
  ret += '-' + date.getSeconds()
  return ret
}

module.exports = {
  outputDir: 'yourname_web',
  // outputDir: `dist/js_${getTimeStamp()}`,
  baseUrl: BASE_URL,
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${getTimeStamp()}.js`,
      chunkFilename: `js/[name].${getTimeStamp()}.js`
    }
  },
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.resolve.alias
      .set('@', resolve('src')) 
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，
  // 那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    sockHost: 'http://localhost:8080/',
    disableHostCheck: true
    // proxy: 'localhost:3000'
  }
}
```

## Proc. 15: 过程回溯
> 这里粗略的写了下常用配置文件的作用，如果需要深入，可以自行网上查找资料
* 主要目的是在看项目目录的时候，心中对每个文件都清晰明了
* 很多时候，并不太需要深入每个配置文件
