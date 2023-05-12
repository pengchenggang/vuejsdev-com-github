# vscode 自动格式化(vue)
::: details 目录
[[toc]]
:::
> 这篇文章主要讲解下vue开发代码自动格式化，力争讲明白。
::: tip 
* eslint 插件要安装
:::

## Step. 1: .editorconfig
> 编辑器的格式化配置文件
::: details 配置文件代码
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
:::

## Step. 2: jsconfig.json
> 这个配置文件很重要，代码自动跳转就靠它了
::: details 配置文件代码
```json
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
:::

## Step. 3: .eslintrc.js
> eslint别的不熟没事，rules一定要会看，vscode报错的时候，ctrl+v过来设置关闭验证用

::: details 配置文件代码
```js
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
```
:::

## Step. 4: settings.json
> 前面几个配置文件都是这个文件的外层文件，一定要重视
* editor 编辑器设置
* eslint-代码检测设置
* 其他文件配置设置
* vue格式化文件设置 vetur
::: tip vue单独设置
单独设置html js css 单独格式化
:::
* javascript设置（vetur内部和外部js）
* 智能友好设置

## Step. 5: editor 编辑器设置
```json
{
  // 自动格式化配置 Start
  // 自动格式化配置-editor-编辑器部分
  "editor.formatOnSave": false, // 这个保存时候进行格式化 - 多项目的时候关闭自动格式化
  "editor.codeActionsOnSave": {
    // 保存时候 eslint修复
    "source.fixAll.eslint": false,
    "addMissingImports": false
  },
  "editor.fontSize": 20,
  "editor.fontLigatures": false,
  "editor.fontWeight": "400",
  "editor.lineHeight": 34,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,
  "editor.wordWrap": "off",
  "editor.renderLineHighlight": "gutter",
  "editor.roundedSelection": true,
  "editor.renderControlCharacters": true,
  "editor.dragAndDrop": false,
  "editor.minimap.enabled": true,
  "editor.minimap.showSlider": "mouseover",
  "editor.minimap.renderCharacters": true,
  "editor.minimap.maxColumn": 200,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.suggestSelection": "first",
  "editor.fontFamily": "'Fira Code', '霞鹜文楷等宽 Light', Consolas,  'Courier New'",
  "editor.gotoLocation.multipleDeclarations": "goto",
  "editor.gotoLocation.multipleDefinitions": "goto",
  "editor.gotoLocation.multipleImplementations": "goto",
  "editor.gotoLocation.multipleReferences": "goto",
  "editor.gotoLocation.multipleTypeDefinitions": "goto",
  "editor.guides.indentation": true,
  "editor.accessibilitySupport": "off",
}
```
## Step. 6: eslint-代码检测设置
```json
{
  // 自动格式化配置-eslint-代码检测
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ],
}
```
## Step. 7: 其他文件配置设置
```json
{
 // 自动格式化配置-其他文件配置
  "[markdown]": {
    "editor.minimap.enabled": true,
    "editor.wordWrap": "on",
    "editor.quickSuggestions": {
      "comments": "off",
      "strings": "off",
      "other": "off"
    },
    "editor.formatOnSave": false
  },
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  
  "[html]": {
    // "editor.formatOnSave": false,
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features" // esbenp.prettier-vscode HookyQR.beautify
  }, 
}
```
## Step. 8: vue格式化文件设置 vetur
```json
{
  // 自动格式化配置-Vue文件配置
  "[vue]": {
    // "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // "editor.defaultFormatter": "HookyQR.beautify"
    "editor.defaultFormatter": "octref.vetur"
  },
  "files.associations": {
    "*.vue": "vue" // 应该vetur用
  },
  // 自动格式化配置-Vue文件配置-vetur
  "vetur.format.enable": true,
  "vetur.validation.template": true,
  "vetur.validation.script": true,
  "vetur.validation.style": true,
  "vetur.format.options.tabSize": 2, // 每个缩进级别的空格数，由所有格式化程序继承
  "vetur.format.scriptInitialIndent": false, // js部分是否有初始缩进
  "vetur.format.defaultFormatter.js": "vscode-typescript", // prettier-eslint vscode-typescript prettier
  "vetur.format.defaultFormatter.html": "js-beautify-html", // js-beautify-html
  "vetur.format.defaultFormatter.css": "prettier", // prettier
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned", // 属性折行对齐方式
      "wrap_line_length": 120, // 设置一行多少字符换行
      "end_with_newline": false
    },
    "prettier": {
      "semi": false,
      "trailingComma": "all",
      "arrowParens": "avoid",
    },
  },
}
```
## Step. 9: javascript设置（vetur内部和外部js）
```json
{
  // 自动格式化配置-Vue文件配置-vetur-(vscode-typescript = vscode.typescript-language-features)
  "javascript.format.enable": true, // 20211102bug 发现js格式化不起错用，这个是false 并且[javascript] 需要注释掉
  "javascript.format.insertSpaceAfterConstructor": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
  "javascript.format.insertSpaceAfterSemicolonInForStatements": true,
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, // 让函数名和后面的括号之间加个空格
  "javascript.format.insertSpaceAfterCommaDelimiter": true, // 逗号后面有空格
  "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true, // 运算符前后有空格
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true, // 大括号前面插空格
  "javascript.format.insertSpaceAfterKeywordsInControlFlowStatements": true, // 关键字后面加空格
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true, // 匿名函数后面加空格
  "javascript.format.semicolons": "remove", // 要设置 vscode.typescript-language-features
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "js/ts.implicitProjectConfig.experimentalDecorators": true,
}
```


## Step. 10: 智能友好设置
```json
{
  // 自动格式化配置-智能友好
  "tabnine.experimentalAutoImports": true,
  "vue-helper.alias": {
    "_c": "src/components/",
    "@": "src/"
  },
  "vue-helper.componentPrefix": {
    "alias": "@",
    "path": "src"
  },
  "vue-helper.componentPath": [
    "./*",
    "./components/*"
  ],
  "alias-skip.mappings": {
    "@": "/src",
    "_c": "/src/components"
  },
  // 自动格式化配置 End
}
```