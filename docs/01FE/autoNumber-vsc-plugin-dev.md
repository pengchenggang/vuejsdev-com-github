# AutoNumber VsCode插件开发
::: details 目录
[[toc]]
:::
> 需要将autoNumber.js脚本改为插件模式，右键就将当前markdown文档格式化
* autoNumber.js 功能：将markdown二级标题 `## XXXX. 1: Title` 的数字自动格式化
* 插件名称: AutoNumber For Vscode

## Step. 2: 安装脚手架
> 先全局安装脚手架
```js
npm install -g yo generator-code
```

## Step. 3: 创建空项目
> 上代码
```cmd
yo code
```

```
We're constantly looking for ways to make yo better! 
May we anonymously report usage statistics to improve the tool over time?
More info: https://github.com/yeoman/insight & http://yeoman.io

我们一直在寻找让你变得更好的方法！
我们是否可以匿名报告使用统计数据，以随着时间的推移改进该工具？
更多信息：https://github.com/yeoman/insight & http://yeoman.io
```
* 选 N

```cmd
? What type of extension do you want to create? (Use arrow keys)
> New Extension (TypeScript)
  New Extension (JavaScript)
  New Color Theme
  New Language Support
  New Code Snippets
  New Keymap
  New Extension Pack
  New Language Pack (Localization)
  New Web Extension (TypeScript)
  New Notebook Renderer (TypeScript)
```
* 选择 New Extension (JavaScript)
* 因为我们就是个js脚本

```cmd
What's the name of your extension? ()
```
* 输入 AutoNumber For Vscode

```cmd
 What's the identifier of your extension? (autonumber-for-vscode) 
 你扩展的id是什么
```
* 输入回车

```cmd
What's the description of your extension? ()
扩展的详细信息
```
* 输入回车

```cmd
Enable JavaScript type checking in 'jsconfig.json'? (y/N)
在“jsconfig”中启用JavaScript类型检查。json？（是/否）
```
* 输入 y

```cmd
? Initialize a git repository? (Y/n)
初始化一个git仓库
```
* 输入 n
* 先本地搞一个，也不发布

```cmd
? Which package manager to use? (Use arrow keys)
> npm
  yarn
  pnpm
```
* 选择 npm 即可

```
? Do you want to open the new folder with Visual Studio Code? (Use arrow keys)
> Open with `code`
  Skip
```
* 选择 Open

> 生成项目文件
```cmd
.vscode
node_modules
test
.eslintrc.json
.vscodeignore
CHANGELOG.md
extension.js
jsconfig.json
package-lock.json
package.json
README.md
```

* 按 F5 启动调试, 每次改代码我都要关了再从新F5

## Step. 4: 打包发布
> 全局安装 vsce
```js
npm install -g vsce
```

## Step. 5: 本地打包
> 打包插件，让修改README.md 改成了这个插件的说明文档后，就可以打包
```js
vsce package
```

## Step. 6: 上传vscode插件库
> 将自己的插件传到公网上，通过搜索AutoNumber就可以找到我的插件
* [publishing-extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
* [create-organization](https://docs.microsoft.com/zh-cn/azure/devops/organizations/accounts/create-organization?view=azure-devops)
* 发布到插件市场了，搜索 autoNumber 即可


## Down. 7: 下载插件
> 点击插件 右上角... 选择 从VSIX 安装
* 第一个开发vscode插件 还有点小兴奋
* [autonumber-for-vscode-0.0.1.vsix 下载](https://files.cnblogs.com/files/pengchenggang/autonumber-for-vscode-0.0.1.zip)

## Step. 8: 开源地址
> 代码已开源 欢迎访问
* https://gitee.com/pengchenggang/autonumber-for-vscode
* 插件的市场列表 https://dev.azure.com/pengchenggang/

## Refer. 9: 参考资料
* [vscode插件开发-web前端之春秋战国](https://www.cnblogs.com/ecmasea/articles/13986332.html)
* [登录401的解决方案](https://blog.csdn.net/qq_35332184/article/details/120848103)