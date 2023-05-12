# 代码片段

::: details 目录
[[toc]]
:::

> vscode 中按 ctrl+p 输入 vue.json 即可打开 vue 模板

- 第一次 设置 - 用户代码片段(Configure User Snippets)
- vscode 代码片段生成器 https://snippet-generator.app/

## Step. 1: massCode 代码片段管理

> 就现在 windows 上使用，也就这个好用了

- 下载 https://github.com/massCodeIO/massCode/releases
- vscode 安装插件后 搜索`massCode` 安装插件
- ctrl + shift + p 输入 massCode: Search 后 再输入 搜索代码片段名称即可
::: tip 设置快捷键
  vscode 可以将搜索这个命令设置快捷键，我设置 ctrl+shift+i 后，只要输入快捷键就能搜索了
:::

## Step. 2: Vue2 init

> Vue2 的初始化代码

```json
// C:\Users\Reciter\AppData\Roaming\Code\User\snippets\vue.json
{
  "vue2初始化模板": {
    "prefix": "vue2init",
    "body": [
      "<template>",
      "  <div>",
      "    ${0}",
      "  </div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: '$TM_FILENAME_BASE',",
      "  props: {},",
      "  components: {},",
      "  data () {",
      "    return {",
      "    }",
      "  },",
      "  watch: {},",
      "  computed: {},",
      "  methods: {},",
      "  created () { },",
      "  activated () { },",
      "  mounted () { },",
      "  beforeDestroy () { }",
      "}",
      "</script>",
      "",
      "<style>",
      "</style>"
    ],
    "description": "vue2初始化模板-描述"
  }
}
```
