# vscode设置推荐
::: details 目录
[[toc]]
:::
> 一些常用设置

## Edit. 1: Goto Location
> vscode 多个定义，直接跳转到主定义 不进行选择
* Editor - Goto Location: Multiple Definitions
* 配置里面 搜 多，都改成 goto [看图](https://www.cnblogs.com/pengchenggang/p/15958159.html)
::: tip
当装了多个自动跳转的插件的时候，Ctrl+左键 会让选择跳转到哪个定义
:::

## Flow. 2: 创建tag并送到远程
> 给项目打标签，vscode里面叫标记
1. 创建tag
* 左侧 源代码管理 右上角 `...`
* 标记 -> 创建标记
* 输入tag名称 回车
* 输入tag描述
2. 查看tag `git tag`
3. 推送tag `git push origin --tags`
