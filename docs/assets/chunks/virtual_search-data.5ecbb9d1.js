[[toc]]
:::

所有的业务逻辑，超过两个后，均要用此工具编写逻辑

`,l:"01FE/async-tool.html",a:"asynctool-js-异步执行工具"},"0.1":{t:"Step. 1: getAc 使用方法\r",p:`
注册 asyncTool

// src/main.js
import asyncTool from &quot;@/li ...`,l:"01FE/async-tool.html#step-1-getac-使用方法",a:"step-1-getac-使用方法"},"0.2":{t:"Meth. 2: use 方法\r",p:`
作用：添加一个函数进入序列
目的：注入上下文ctx 和 next 进入函数体

const ac = this.$getA ...`,l:"01FE/async-tool.html#meth-2-use-方法",a:"meth-2-use-方法"},"0.3":{t:"Meth. 3: run 方法\r",p:`
作用：执行当前方法序列
目的：执行方法序列，可以添加最后一个lastCallBack

const ac = this.$ ...`,l:"01FE/async-tool.html#meth-3-run-方法",a:"meth-3-run-方法"},"0.4":{t:"Meth. 4: nextJump 方法\r",p:`
作用：跳过下一个方法
目的：常见于根据条件是否执行下一个方法

businessLogic1 (ctx, next) {
 ...`,l:"01FE/async-tool.html#meth-4-nextjump-方法",a:"meth-4-nextjump-方法"},"0.5":{t:"Meth. 5: goto 方法\r",p:`
作用：跳到指定的方法
目的：常见于大跳转的业务逻辑，执行完本逻辑要执行最后几个公共逻辑，跳过中间的check

const ...`,l:"01FE/async-tool.html#meth-5-goto-方法",a:"meth-5-goto-方法"},"0.6":{t:"Meth. 6: ifTo 方法\r",p:`
作用：跳过当前方法
目的：常见于条件内部直接判断

// methods 里面
businessLogic1 (ctx,  ...`,l:"01FE/async-tool.html#meth-6-ifto-方法",a:"meth-6-ifto-方法"},"0.7":{t:"Meth. 7: 批量动态调用接口\r",p:`
对于一个数组，批量调用接口

getUnLocalNames (ctx, next) {
  // 新建和改名字没保存的， ...`,l:"01FE/async-tool.html#meth-7-批量动态调用接口",a:"meth-7-批量动态调用接口"},"0.8":{t:"Code. 8: asyncTool.js 源码\r",p:`// @/libs/common/asyncTool.js
// 创建时间 2020.03.11
// 更新于 2022.0 ...`,l:"01FE/async-tool.html#code-8-asynctool-js-源码",a:"code-8-asynctool-js-源码"},"1.0":{t:"# AutoNumber VsCode插件开发\r",p:`::: details 目录
[[toc]]
:::

需要将autoNumber.js脚本改为插件模式，右键就将当前mar ...`,l:"01FE/autoNumber-vsc-plugin-dev.html",a:"autonumber-vscode插件开发"},"1.1":{t:"Step. 2: 安装脚手架\r",p:`
先全局安装脚手架

npm install -g yo generator-code

`,l:"01FE/autoNumber-vsc-plugin-dev.html#step-2-安装脚手架",a:"step-2-安装脚手架"},"1.2":{t:"Step. 3: 创建空项目\r",p:`
上代码

yo code

We're constantly looking for ways to make yo be ...`,l:"01FE/autoNumber-vsc-plugin-dev.html#step-3-创建空项目",a:"step-3-创建空项目"},"1.3":{t:"Step. 4: 打包发布\r",p:`
全局安装 vsce

npm install -g vsce

`,l:"01FE/autoNumber-vsc-plugin-dev.html#step-4-打包发布",a:"step-4-打包发布"},"1.4":{t:"Step. 5: 本地打包\r",p:`
打包插件，让修改README.md 改成了这个插件的说明文档后，就可以打包

vsce package

`,l:"01FE/autoNumber-vsc-plugin-dev.html#step-5-本地打包",a:"step-5-本地打包"},"1.5":{t:"Step. 6: 上传vscode插件库\r",p:`
将自己的插件传到公网上，通过搜索AutoNumber就可以找到我的插件
publishing-extension crea ...`,l:"01FE/autoNumber-vsc-plugin-dev.html#step-6-上传vscode插件库",a:"step-6-上传vscode插件库"},"1.6":{t:"Down. 7: 下载插件\r",p:`
点击插件 右上角... 选择 从VSIX 安装


第一个开发vscode插件 还有点小兴奋
autonumber-for ...`,l:"01FE/autoNumber-vsc-plugin-dev.html#down-7-下载插件",a:"down-7-下载插件"},"1.7":{t:"Step. 8: 开源地址\r",p:`
代码已开源 欢迎访问
https://gitee.com/pengchenggang/autonumber-for-vsc ...`,l:"01FE/autoNumber-vsc-plugin-dev.html#step-8-开源地址",a:"step-8-开源地址"},"1.8":{t:"Refer. 9: 参考资料\r",p:`
vscode插件开发-web前端之春秋战国
登录401的解决方案

`,l:"01FE/autoNumber-vsc-plugin-dev.html#refer-9-参考资料",a:"refer-9-参考资料"},"2.0":{t:"# 常用编码集\r",p:`::: details 目录
[[toc]]
:::

常见编码 Unicode、ASCII、GBK、GB2312、UTF- ...`,l:"01FE/common-code-set.html",a:"常用编码集"},"2.1":{t:"Part. 1: Unicode 编码\r",p:`
当你看到&amp;#开头的编码，能意识到是 Unicode编码。

例如：
&gt; &amp;#62;
↑ &amp;# ...`,l:"01FE/common-code-set.html#part-1-unicode-编码",a:"part-1-unicode-编码"},"2.2":{t:"Part. 2: ASCII 编码\r",p:`
这种编码就是可见代码，没有所谓“乱码”的东西在里面。

例如：
&gt; ↑
`,l:"01FE/common-code-set.html#part-2-ascii-编码",a:"part-2-ascii-编码"},"2.3":{t:"Part. 3: HTML 实体名称\r",p:`
出现在页面的 编码， ASCII 可打印字符 (字符代码 32-127) 可显示字符编号范围是32-126（0x20-0x ...`,l:"01FE/common-code-set.html#part-3-html-实体名称",a:"part-3-html-实体名称"},"2.4":{t:"Part. 4: UTF8 编码\r",p:`
以 &amp;#x开头的就是 utf-8 编码

例如：
编码转换 &amp;#x7F16;&amp;#x7801;&am ...`,l:"01FE/common-code-set.html#part-4-utf8-编码",a:"part-4-utf8-编码"},"2.5":{t:"Part. 5: URL 编码解码\r",p:`

encodeURI编码,不会对特殊符号编码
encodeURIComponent编码方式,会对特殊符号编码


例如：编 ...`,l:"01FE/common-code-set.html#part-5-url-编码解码",a:"part-5-url-编码解码"},"2.6":{t:"Part. 6: native 编码\r",p:`
原理：逐个转换为unicode编码（这个返回值是 0 – 65535 之间的整数），unicode转化为16进制,再添加上 ...`,l:"01FE/common-code-set.html#part-6-native-编码",a:"part-6-native-编码"},"2.7":{t:"Part. 7: 在线转换工具\r",p:`

在线懒人工具-编码转换


菜鸟工具-编码转换


`,l:"01FE/common-code-set.html#part-7-在线转换工具",a:"part-7-在线转换工具"},"3.0":{t:"# CommonJs VS ES Module\r",p:`::: details 目录
[[toc]]
:::

这里的环境是指在 Node.js 下，有两种模块系统规范。简单来说就 ...`,l:"01FE/commonjs-esmodule.html",a:"commonjs-vs-es-module"},"3.1":{t:"Part. 1: CommonJs\r",p:`CommonJs 官网 https://www.commonjs.org/

这里都是最常用的方法，用多少写多少。

导出用 ...`,l:"01FE/commonjs-esmodule.html#part-1-commonjs",a:"part-1-commonjs"},"3.2":{t:"Part. 2: ES Module\r",p:"ES Module 脚本扩展名是 .mjs，如果要改成.js,需要在 package.json 的 type: &quot; ...",l:"01FE/commonjs-esmodule.html#part-2-es-module",a:"part-2-es-module"},"3.3":{t:"Part. 3: CJS 对比 ESM 表\r",p:`vue.config.js 用的是 CJS，但是 vue 开发里面的代码都是用的 ESM。



&lt;div style ...`,l:"01FE/commonjs-esmodule.html#part-3-cjs-对比-esm-表",a:"part-3-cjs-对比-esm-表"},"3.4":{t:"Code. 4: 获取文件路径\r",p:`默认是 当前目录 + 文件相对路径，这个默认不对，应该是 文件当前目录 + 文件相对路径。

CommonJS 代码

co ...`,l:"01FE/commonjs-esmodule.html#code-4-获取文件路径",a:"code-4-获取文件路径"},"4.0":{t:"# ES6循环使用手册",p:`::: details 目录
[[toc]]
:::

数组的循环 对象的循环 备查

`,l:"01FE/es6-loop.html",a:"es6循环使用手册"},"4.1":{t:"Array. 1: filter() 方法",p:`
实例1：返回大于18的数组字


返回数组 ages 中所有元素都大于 18 的元素:

var ages = [32,  ...`,l:"01FE/es6-loop.html#array-1-filter-方法",a:"array-1-filter-方法"},"4.2":{t:"Array. 2: forEach",p:`
语法

array.forEach(function(currentValue, index, arr), thisVal ...`,l:"01FE/es6-loop.html#array-2-foreach",a:"array-2-foreach"},"4.3":{t:"Array. 3: for循环",p:`
代码

for (var num =1; num&lt;=10; num++) {
    document.write( ...`,l:"01FE/es6-loop.html#array-3-for循环",a:"array-3-for循环"},"4.4":{t:"Array. 4: map()循环",p:`map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。

注意：是返回一个新数组，而不会改变 ...`,l:"01FE/es6-loop.html#array-4-map-循环",a:"array-4-map-循环"},"4.5":{t:"Array. 5: some()，every()循环遍历",p:`::: tip
some()，every()循环遍历，统计数组是否满足某个条件
:::

这两个方法类似“断言”（asser ...`,l:"01FE/es6-loop.html#array-5-some-every-循环遍历",a:"array-5-some-every-循环遍历"},"4.6":{t:"Array. 6: reduce()，reduceRight()",p:`
reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右 ...`,l:"01FE/es6-loop.html#array-6-reduce-reduceright",a:"array-6-reduce-reduceright"},"4.7":{t:"Object. 7: for-in遍历",p:`
for-in 循环主要用于遍历对象
for()中的格式：for(keys in zhangsan){}
keys表示obj ...`,l:"01FE/es6-loop.html#object-7-for-in遍历",a:"object-7-for-in遍历"},"4.8":{t:"Object. 8: Object.values()",p:"Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ...",l:"01FE/es6-loop.html#object-8-object-values",a:"object-8-object-values"},"4.9":{t:"Object. 9: Object.keys遍历属性",p:"Object.keys 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名，且只返回 ...",l:"01FE/es6-loop.html#object-9-object-keys遍历属性",a:"object-9-object-keys遍历属性"},"4.10":{t:"Object. 10: Object.getOwnPropertyNames()遍历属性",p:"Object.getOwnPropertyNames 方法与 Object.keys 类似，也是接受一个对象作为参数，返回一 ...",l:"01FE/es6-loop.html#object-10-object-getownpropertynames-遍历属性",a:"object-10-object-getownpropertynames-遍历属性"},"4.11":{t:"ArrObj. 11: for-of循环(ES6)",p:`
全能循环 得value值
ES6 借鉴 C++、Java、C# 和 Python 语言，引入了for...of循环，作为遍 ...`,l:"01FE/es6-loop.html#arrobj-11-for-of循环-es6",a:"arrobj-11-for-of循环-es6"},"5.0":{t:"# 开发前小知识\r",p:`::: details 目录
[[toc]]
:::

作为开发 Github 是要必须的学习的，那么第一步就是要可以访问。 ...`,l:"01FE/must-know-knowledge.html",a:"开发前小知识"},"5.1":{t:"Step. 1: 打开 Github\r",p:`
Github一般情况下是打不开的，所以一定要先攻克这个，这里推荐用软件的方式，比较省心。


方案1 FastGithub ...`,l:"01FE/must-know-knowledge.html#step-1-打开-github",a:"step-1-打开-github"},"5.2":{t:"Step. 2: 解决跨域问题\r",p:`
很多时候，你会遇到莫名的跨域问题，有时候后台报错也会显示前台跨域，导致也不知道是不是真的跨域。

解决方案

安装 双核浏 ...`,l:"01FE/must-know-knowledge.html#step-2-解决跨域问题",a:"step-2-解决跨域问题"},"5.3":{t:"Step. 3: Node.js 环境安装\r",p:`
学习前端 先安装下node环境
https://nodejs.org/zh-cn/ 选择 长期维护版 安装一下即可。

n ...`,l:"01FE/must-know-knowledge.html#step-3-node-js-环境安装",a:"step-3-node-js-环境安装"},"5.4":{t:"Step. 4: vscode 开发软件安装\r",p:`
开发软件选择的ide，这里是vscode
vscode 不适合java的开发，java开发用idea https://co ...`,l:"01FE/must-know-knowledge.html#step-4-vscode-开发软件安装",a:"step-4-vscode-开发软件安装"},"5.5":{t:"Step. 5: 蓝奏云\r",p:`
如果有一些免费共享的软件，可以上传到这里


https://up.woozooo.com/u

`,l:"01FE/must-know-knowledge.html#step-5-蓝奏云",a:"step-5-蓝奏云"},"5.6":{t:"Step. 6: 前端面试题库\r",p:`
https://github.com/febobo/web-interview

`,l:"01FE/must-know-knowledge.html#step-6-前端面试题库",a:"step-6-前端面试题库"},"5.7":{t:"Step. 7: git 环境安装\r",p:`
代码仓库环境 早些年还有svn，现在都改成git了


http://git-scm.com/downloads 下载安装 ...`,l:"01FE/must-know-knowledge.html#step-7-git-环境安装",a:"step-7-git-环境安装"},"5.8":{t:"Step. 8: Nginx 环境安装\r",p:`
这是一个绿色软件 解压即可使用


http://nginx.org/en/download.html 下载 nginx/ ...`,l:"01FE/must-know-knowledge.html#step-8-nginx-环境安装",a:"step-8-nginx-环境安装"},"5.9":{t:"Step. 9: Nexus npm私仓\r",p:`
解压运行 启动服务
https://pan.baidu.com/s/1EoaesjSZDKdLflCVlN_dOg 提取码 ...`,l:"01FE/must-know-knowledge.html#step-9-nexus-npm私仓",a:"step-9-nexus-npm私仓"},"5.10":{t:"Step. 10: MobaXterm1_CHS1 SSH客户端\r",p:`
SSH客户端 每日必备


https://wws.lanzoul.com/ihPjM0blkwni 密码:8cz1 这个 ...`,l:"01FE/must-know-knowledge.html#step-10-mobaxterm1-chs1-ssh客户端",a:"step-10-mobaxterm1-chs1-ssh客户端"},"5.11":{t:"Step. 11: php study 环境安装\r",p:`
这个软件 可以快速搞定mysql数据库


https://www.xp.cn/ 选择windows版本 安装即可

`,l:"01FE/must-know-knowledge.html#step-11-php-study-环境安装",a:"step-11-php-study-环境安装"},"5.12":{t:"Step. 12: Sourcetree gitGUI\r",p:`
一款git可视化工具 每日必备


https://www.sourcetreeapp.com/ 安装即可

`,l:"01FE/must-know-knowledge.html#step-12-sourcetree-gitgui",a:"step-12-sourcetree-gitgui"},"5.13":{t:"Step. 13: Navicat 数据库连接\r",p:`
一款数据库连接可视化软件


下载:https://wws.lanzoul.com/iAiUq0bllfqf 密码:5py ...`,l:"01FE/must-know-knowledge.html#step-13-navicat-数据库连接",a:"step-13-navicat-数据库连接"},"5.14":{t:"Step. 14: `draw.io` 画图软件\r",p:`
推荐vscode插件用


https://app.diagrams.net/ 在线 软件打开 或者 vscode插件

`,l:"01FE/must-know-knowledge.html#step-14-draw-io-画图软件",a:"step-14-draw-io-画图软件"},"5.15":{t:"Step. 15: hotkeyp 快捷键\r",p:`
设置全局快捷键 我习惯有 Alt+小键盘+ 等


下载:https://wws.lanzoul.com/iti5r0bl ...`,l:"01FE/must-know-knowledge.html#step-15-hotkeyp-快捷键",a:"step-15-hotkeyp-快捷键"},"5.16":{t:"Step. 16: Rolan 1.1.3 快捷方式启动\r",p:`
我习惯设定 Alt+1 显示
这个版本比较老，但是新版收费了


https://www.cnblogs.com/peng ...`,l:"01FE/must-know-knowledge.html#step-16-rolan-1-1-3-快捷方式启动",a:"step-16-rolan-1-1-3-快捷方式启动"},"5.17":{t:"Step. 17: java8 环境安装\r",p:`
搜 jdk-8u271-windows-x64.exe 进行安装


SpringBoot 学习记录 2021.05.13 ...`,l:"01FE/must-know-knowledge.html#step-17-java8-环境安装",a:"step-17-java8-环境安装"},"5.18":{t:"Step. 18: Maven3 环境安装\r",p:`
java的库，和npm一个意思


https://www.baidu.com/s?wd=Maven3 自己找下，安装即可 ...`,l:"01FE/must-know-knowledge.html#step-18-maven3-环境安装",a:"step-18-maven3-环境安装"},"5.19":{t:"Step. 19: apache-tomcat-8.5.8\r",p:`
这个属于非常常用的java环境 必备


下载:https://wws.lanzoul.com/ihiUD0blly6j  ...`,l:"01FE/must-know-knowledge.html#step-19-apache-tomcat-8-5-8",a:"step-19-apache-tomcat-8-5-8"},"5.20":{t:"Step. 20: Everything 本地搜索\r",p:`
这个我的习惯设置 alt + Num0 为快捷键


https://www.voidtools.com/zh-cn/ 下 ...`,l:"01FE/must-know-knowledge.html#step-20-everything-本地搜索",a:"step-20-everything-本地搜索"},"5.21":{t:"Step. 21: python3 环境安装\r",p:`
python3.9脚本还是会经常用到，麻烦的是和别人的python2.7脚本切换环境


https://www.pyth ...`,l:"01FE/must-know-knowledge.html#step-21-python3-环境安装",a:"step-21-python3-环境安装"},"5.22":{t:"Step. 22: 向日葵远程控制\r",p:`
有时候会需要远程帮助，这个软件非常有用。


https://sunlogin.oray.com/ 下载安装即可

`,l:"01FE/must-know-knowledge.html#step-22-向日葵远程控制",a:"step-22-向日葵远程控制"},"5.23":{t:"Step. 23: VM虚拟机 VMware\r",p:`
VMware Workstation Pro V15.0.0 为了这个软件，16G都不够，最好32G内存起步


VMwa ...`,l:"01FE/must-know-knowledge.html#step-23-vm虚拟机-vmware",a:"step-23-vm虚拟机-vmware"},"5.24":{t:"Step. 24: IDEA\r",p:`
这个本来应该不放这么靠后的，现在顺序也就这样了


https://www.baidu.com/s?wd=idea%20% ...`,l:"01FE/must-know-knowledge.html#step-24-idea",a:"step-24-idea"},"5.25":{t:"Step. 25: Aardio 开发环境\r",p:`
windows 开发exe的IDE，我非常喜欢~


https://www.aardio.com/ 下载安装即可

`,l:"01FE/must-know-knowledge.html#step-25-aardio-开发环境",a:"step-25-aardio-开发环境"},"5.26":{t:"Step. 26: Xmind 思维导图\r",p:`
这个思维导图软件足够用了


https://www.xmind.cn/ 下载安装即可

`,l:"01FE/must-know-knowledge.html#step-26-xmind-思维导图",a:"step-26-xmind-思维导图"},"5.27":{t:"Step. 27: 幕布 大纲模式\r",p:`
大纲模式 最好用的软件，300个免费节点 够用了


https://mubu.com/apps 下载安装即可

`,l:"01FE/must-know-knowledge.html#step-27-幕布-大纲模式",a:"step-27-幕布-大纲模式"},"5.28":{t:"Step. 28: onenote2016\r",p:`
这是一个本地的记事本软件，我不喜欢在线的


https://www.baidu.com/s?wd=onenote2016 ...`,l:"01FE/must-know-knowledge.html#step-28-onenote2016",a:"step-28-onenote2016"},"5.29":{t:"Step. 29: Obsidian\r",p:`
如果写本地文档 这个够用了，关键能插入图片和显示标题


https://obsidian.md/ 下载安装即可

`,l:"01FE/must-know-knowledge.html#step-29-obsidian",a:"step-29-obsidian"},"5.30":{t:"Step. 30: Typora\r",p:`
markdown 写作利器，可以自己找找老版本的用


https://typoraio.cn/ 注意：官方收费了

`,l:"01FE/must-know-knowledge.html#step-30-typora",a:"step-30-typora"},"5.31":{t:"Step. 31: OBS 录课直播\r",p:`
颠覆录屏的软件，强大到没朋友，关键还免费


https://obsproject.com/ 下载安装即可

`,l:"01FE/must-know-knowledge.html#step-31-obs-录课直播",a:"step-31-obs-录课直播"},"5.32":{t:"Step. 32: Captura 录屏工具\r",p:`
Captura屏幕录制含ffmpeg 主要有区域录制


下载:https://wws.lanzoul.com/iqDrS ...`,l:"01FE/must-know-knowledge.html#step-32-captura-录屏工具",a:"step-32-captura-录屏工具"},"5.33":{t:"Step. 33: 剪映 专业版\r",p:`
想当年PR AE C4D, 如今 剪映 竟然破局了~ 夸张了 :)


https://lv.ulikecam.com/  ...`,l:"01FE/must-know-knowledge.html#step-33-剪映-专业版",a:"step-33-剪映-专业版"},"5.34":{t:"Step. 34: Android Studio 开发环境\r",p:`
React Native 开发安卓软件用到的环境
https://developer.android.google.cn/ ...`,l:"01FE/must-know-knowledge.html#step-34-android-studio-开发环境",a:"step-34-android-studio-开发环境"},"5.35":{t:"Step. 35: Axure RP 9 原型设计\r",p:`
产品画原型图，用这个软件


外链:https://wws.lanzoul.com/b03paemkf 密码:dmvj

`,l:"01FE/must-know-knowledge.html#step-35-axure-rp-9-原型设计",a:"step-35-axure-rp-9-原型设计"},"5.36":{t:"Step. 36: apifox api测试工具\r",p:`
同类产品还有 postman apipost


https://www.apifox.cn/

`,l:"01FE/must-know-knowledge.html#step-36-apifox-api测试工具",a:"step-36-apifox-api测试工具"},"5.37":{t:"Step. 37: snipaste 截图工具\r",p:`
这个F3贴图功能实在是太帅了，比微信的截图强调~ 感谢同事 _BugMaker 的分享
https://www.snipa ...`,l:"01FE/must-know-knowledge.html#step-37-snipaste-截图工具",a:"step-37-snipaste-截图工具"},"5.38":{t:"Soft. 38: Notepad2 简体中文记事本\r",p:`
这个记事本非常好，替代windows默认记事本


文本编辑器Notepad2 v4.22.07(r4278)_简体中文绿 ...`,l:"01FE/must-know-knowledge.html#soft-38-notepad2-简体中文记事本",a:"soft-38-notepad2-简体中文记事本"},"5.39":{t:"Serv. 39: 禅道 - 项目管理软件\r",p:`
服务器软件 产品和你的沟通桥梁 甩锅神器


https://www.zentao.net/

`,l:"01FE/must-know-knowledge.html#serv-39-禅道-项目管理软件",a:"serv-39-禅道-项目管理软件"},"5.40":{t:"Serv. 40: gitLab - git代码平台\r",p:`
服务器软件 linux软件 ce表示开源 el表示centos 选64位 el6对应CentOS 6


https:// ...`,l:"01FE/must-know-knowledge.html#serv-40-gitlab-git代码平台",a:"serv-40-gitlab-git代码平台"},"5.41":{t:"Serv. 41: onlyOffice\r",p:`
服务器软件 简单易懂 就是线上的office 感觉产品用的更多一些
https://github.com/ONLYOFFI ...`,l:"01FE/must-know-knowledge.html#serv-41-onlyoffice",a:"serv-41-onlyoffice"},"5.42":{t:"Proc. 42: 过程回溯\r",p:`
这里是我电脑上对于开发来说常用到软件，当然还有制作视频等其他的爱好，有些软件就没提现在这里。
::: tip 其他常用软件 ...`,l:"01FE/must-know-knowledge.html#proc-42-过程回溯",a:"proc-42-过程回溯"},"6.0":{t:"# NestJS 学习内容\r",p:`
NestJS 学习总结

`,l:"01FE/nestjs-study.html",a:"nestjs-学习内容"},"6.1":{t:"Step. 1: 全局安装包\r",p:`pnpm add -g @nestjs/cli nodemon ts-node
nest new nestjs-api

`,l:"01FE/nestjs-study.html#step-1-全局安装包",a:"step-1-全局安装包"},"6.2":{t:"Step. 2: 安装相关依赖\r",p:"pnpm add prisma-binding @prisma/client mockjs @nestjs/config c ...",l:"01FE/nestjs-study.html#step-2-安装相关依赖",a:"step-2-安装相关依赖"},"6.3":{t:"Step. 3: prettierrc 配置文件\r",p:`{
  &quot;arrowParens&quot;: &quot;always&quot;,
  &quot;brack ...`,l:"01FE/nestjs-study.html#step-3-prettierrc-配置文件",a:"step-3-prettierrc-配置文件"},"6.4":{t:"Step. 4: package.json 修改\r",p:`-&quot;start:dev&quot;: &quot;nest start --watch&quot;,
+&quot ...`,l:"01FE/nestjs-study.html#step-4-package-json-修改",a:"step-4-package-json-修改"},"6.5":{t:"Step. 5: nest-cli.json 修改\r",p:`{
  &quot;$schema&quot;: &quot;https://json.schemastore.org/ne ...`,l:"01FE/nestjs-study.html#step-5-nest-cli-json-修改",a:"step-5-nest-cli-json-修改"},"6.6":{t:"Step. 6: 数据库连接\r",p:`npx prisma init


会创建.env文件与prisma文件夹


.env 修改数据库连接

DATABASE ...`,l:"01FE/nestjs-study.html#step-6-数据库连接",a:"step-6-数据库连接"},"6.7":{t:"Step. 7: 定义数据库结构\r",p:`
npx prisma db pull 这条命令可以按照数据库生成schema.prisma文件
下面我们按照写配置文件 生 ...`,l:"01FE/nestjs-study.html#step-7-定义数据库结构",a:"step-7-定义数据库结构"},"6.8":{t:"Step. 8: 生成迁移\r",p:`npx prisma migrate dev


根据定义生成迁移文件
执行新的迁移文件修改数据表
生成 Prisma Cl ...`,l:"01FE/nestjs-study.html#step-8-生成迁移",a:"step-8-生成迁移"},"6.9":{t:"Step. 9: 重置数据库\r",p:`npx prisma migrate reset


删除数据库
创建同名数据库
执行所有迁移文件
运行 seed 数据填充 ...`,l:"01FE/nestjs-study.html#step-9-重置数据库",a:"step-9-重置数据库"},"6.10":{t:"Step. 10: 数据填充\r",p:`
首先在package.json中定义命令，后面可以调用 npx prisma db seed 命令实现填充

{
  &q ...`,l:"01FE/nestjs-study.html#step-10-数据填充",a:"step-10-数据填充"},"6.11":{t:"Step. 11: eslint 一个内联报错\r",p:`
Delete ␍eslintprettier/prettier


原因就是 win/apple/linux 系统的回车  ...`,l:"01FE/nestjs-study.html#step-11-eslint-一个内联报错",a:"step-11-eslint-一个内联报错"},"6.12":{t:"Step. 12: 添加prisma数据库读取工具包\r",p:`
全局的一个数据库读取工具包

n g mo prisma
n g s prisma


代码

// src/prisma ...`,l:"01FE/nestjs-study.html#step-12-添加prisma数据库读取工具包",a:"step-12-添加prisma数据库读取工具包"},"6.13":{t:"Step. 12: 添加 DTO 数据格式\r",p:`
ts 最大的特点就是要有type，所以对于article来说，就要有它对应的DTO


数据传输对象（DTO）(Data  ...`,l:"01FE/nestjs-study.html#step-12-添加-dto-数据格式",a:"step-12-添加-dto-数据格式"},"6.14":{t:"Step. 13: 添加控制器-路由设置\r",p:`
先在控制器添加上路由先能访问

import { Body, Controller, Delete, Get, Param ...`,l:"01FE/nestjs-study.html#step-13-添加控制器-路由设置",a:"step-13-添加控制器-路由设置"},"6.15":{t:"Step. 14: 添加控制器的服务Servce\r",p:`
控制器调用服务，服务里面写相关数据的内容

import { Injectable } from '@nestjs/com ...`,l:"01FE/nestjs-study.html#step-14-添加控制器的服务servce",a:"step-14-添加控制器的服务servce"},"7.0":{t:"# Node.js 常用函数\r",p:`
总结常用 node 函数 用的 ESM 模块。

// package.json
&quot;type&quot;: &q ...`,l:"01FE/node-js-common-function.html",a:"node-js-常用函数"},"7.1":{t:"Func. 1: 读取文件-同步/异步\r",p:`
读取 path 文件 ESM模式


同步读取文件

import { readFileSync } from &quot ...`,l:"01FE/node-js-common-function.html#func-1-读取文件-同步-异步",a:"func-1-读取文件-同步-异步"},"7.2":{t:"Func. 2: 写入文件-同步\r",p:"import { writeFileSync, mkdirSync, existsSync } from &quot;fs& ...",l:"01FE/node-js-common-function.html#func-2-写入文件-同步",a:"func-2-写入文件-同步"},"7.3":{t:"Para. 3: 入参 process.argv\r",p:`
脚本接收的参数 以数组的形式接收

console.info('process.argv', process.argv)
 ...`,l:"01FE/node-js-common-function.html#para-3-入参-process-argv",a:"para-3-入参-process-argv"},"7.4":{t:"Func. 4: 查看module全部模块\r",p:`
查看node环境 全部模块

// commonjs
const {builtinModules} = require(' ...`,l:"01FE/node-js-common-function.html#func-4-查看module全部模块",a:"func-4-查看module全部模块"},"8.0":{t:"# Button的全局节流\r",p:`::: details 目录
[[toc]]
:::

这是一个系统默认配置 所有系统的按钮要防止连续点击的暴力测试
这不是 ...`,l:"01FE/set-vue-click-global-throttle.html",a:"button的全局节流"},"8.1":{t:"Step. 1: 注册函数\r",p:`
将函数注入到 Vue 当中

// @/main.js
import setVueClickGlobalThrottle  ...`,l:"01FE/set-vue-click-global-throttle.html#step-1-注册函数",a:"step-1-注册函数"},"8.2":{t:"Step. 2: 局部节流函数失效处理\r",p:`
并不是所有按钮需要节流

&lt;Button :notThrottle=&quot;true&quot;&gt; &am ...`,l:"01FE/set-vue-click-global-throttle.html#step-2-局部节流函数失效处理",a:"step-2-局部节流函数失效处理"},"8.3":{t:"Code. 3: setVueClickGlobalThrottle.js 源码\r",p:`
这里的节流时间为1000毫秒，具体可以自行修改

// @/libs/common/setVueClickGlobalTh ...`,l:"01FE/set-vue-click-global-throttle.html#code-3-setvueclickglobalthrottle-js-源码",a:"code-3-setvueclickglobalthrottle-js-源码"},"9.0":{t:"# 代码片段\r",p:`::: details 目录
[[toc]]
:::

vscode 中按 ctrl+p 输入 vue.json 即可打开  ...`,l:"01FE/snippets-lab.html",a:"代码片段"},"9.1":{t:"Step. 1: massCode 代码片段管理\r",p:`
就现在 windows 上使用，也就这个好用了


下载 https://github.com/massCodeIO/ma ...`,l:"01FE/snippets-lab.html#step-1-masscode-代码片段管理",a:"step-1-masscode-代码片段管理"},"9.2":{t:"Step. 2: Vue2 init\r",p:`
Vue2 的初始化代码

// C:\\Users\\Reciter\\AppData\\Roaming\\Code\\User\\sn ...`,l:"01FE/snippets-lab.html#step-2-vue2-init",a:"step-2-vue2-init"},"10.0":{t:"# vscode 自动格式化(vue)\r",p:`::: details 目录
[[toc]]
:::

这篇文章主要讲解下vue开发代码自动格式化，力争讲明白。
::: t ...`,l:"01FE/vscode-auto-format.html",a:"vscode-自动格式化-vue"},"10.1":{t:"Step. 1: .editorconfig\r",p:`
编辑器的格式化配置文件
::: details 配置文件代码

// .editorconfig
root = true
 ...`,l:"01FE/vscode-auto-format.html#step-1-editorconfig",a:"step-1-editorconfig"},"10.2":{t:"Step. 2: jsconfig.json\r",p:`
这个配置文件很重要，代码自动跳转就靠它了
::: details 配置文件代码

{
  &quot;compilerOp ...`,l:"01FE/vscode-auto-format.html#step-2-jsconfig-json",a:"step-2-jsconfig-json"},"10.3":{t:"Step. 3: .eslintrc.js\r",p:`
eslint别的不熟没事，rules一定要会看，vscode报错的时候，ctrl+v过来设置关闭验证用

::: deta ...`,l:"01FE/vscode-auto-format.html#step-3-eslintrc-js",a:"step-3-eslintrc-js"},"10.4":{t:"Step. 4: settings.json\r",p:`
前面几个配置文件都是这个文件的外层文件，一定要重视


editor 编辑器设置
eslint-代码检测设置
其他文件配置 ...`,l:"01FE/vscode-auto-format.html#step-4-settings-json",a:"step-4-settings-json"},"10.5":{t:"Step. 5: editor 编辑器设置\r",p:`{
  // 自动格式化配置 Start
  // 自动格式化配置-editor-编辑器部分
  &quot;editor. ...`,l:"01FE/vscode-auto-format.html#step-5-editor-编辑器设置",a:"step-5-editor-编辑器设置"},"10.6":{t:"Step. 6: eslint-代码检测设置\r",p:`{
  // 自动格式化配置-eslint-代码检测
  &quot;eslint.alwaysShowStatus&quo ...`,l:"01FE/vscode-auto-format.html#step-6-eslint-代码检测设置",a:"step-6-eslint-代码检测设置"},"10.7":{t:"Step. 7: 其他文件配置设置\r",p:`{
 // 自动格式化配置-其他文件配置
  &quot;[markdown]&quot;: {
    &quot;edi ...`,l:"01FE/vscode-auto-format.html#step-7-其他文件配置设置",a:"step-7-其他文件配置设置"},"10.8":{t:"Step. 8: vue格式化文件设置 vetur\r",p:`{
  // 自动格式化配置-Vue文件配置
  &quot;[vue]&quot;: {
    // &quot;edi ...`,l:"01FE/vscode-auto-format.html#step-8-vue格式化文件设置-vetur",a:"step-8-vue格式化文件设置-vetur"},"10.9":{t:"Step. 9: javascript设置（vetur内部和外部js）\r",p:`{
  // 自动格式化配置-Vue文件配置-vetur-(vscode-typescript = vscode.types ...`,l:"01FE/vscode-auto-format.html#step-9-javascript设置-vetur内部和外部js",a:"step-9-javascript设置-vetur内部和外部js"},"10.10":{t:"Step. 10: 智能友好设置\r",p:`{
  // 自动格式化配置-智能友好
  &quot;tabnine.experimentalAutoImports&qu ...`,l:"01FE/vscode-auto-format.html#step-10-智能友好设置",a:"step-10-智能友好设置"},"11.0":{t:"# Vscode 插件推荐\r",p:`::: details 目录
[[toc]]
:::

vscode 作为前端开发，需要搭建下开发环境，改的地方还是挺多的。 ...`,l:"01FE/vscode-plugin-recommend.html",a:"vscode-插件推荐"},"11.1":{t:"Font. 1: 字体推荐\r",p:`
开发环境 一个好字体，至关重要


Fira Code 程序员字体 https://github.com/tonsky/F ...`,l:"01FE/vscode-plugin-recommend.html#font-1-字体推荐",a:"font-1-字体推荐"},"11.2":{t:"Them. 2: Ayu 主题\r",p:`
主题相当重要，整个风格会一下子高大上起来


Ayu Mirage 这是一款暗黑色的主题
插件搜索 Ayu 作者 teab ...`,l:"01FE/vscode-plugin-recommend.html#them-2-ayu-主题",a:"them-2-ayu-主题"},"11.3":{t:"Them. 3: Spacegray VSCode\r",p:`
之前用的一款主题 Base 16 Eighties 这个风格我就特别喜欢


插件搜索 Spacegray VSCode  ...`,l:"01FE/vscode-plugin-recommend.html#them-3-spacegray-vscode",a:"them-3-spacegray-vscode"},"11.4":{t:"Plug. 4: Vetur vue2工具\r",p:`
开发vue2的vscode官方插件


插件搜索 Vetur 作者 Pine Wu

`,l:"01FE/vscode-plugin-recommend.html#plug-4-vetur-vue2工具",a:"plug-4-vetur-vue2工具"},"11.5":{t:"Plug. 5: volar vue3工具\r",p:`
开发vue3的vscode官方插件 Vue Language Features (Volar)


插件搜索 Volar  ...`,l:"01FE/vscode-plugin-recommend.html#plug-5-volar-vue3工具",a:"plug-5-volar-vue3工具"},"11.6":{t:"Plug. 6: Tabnine AI - 必备\r",p:`
代码智能提示 用了就回不去了 关键是免费


插件搜索 Tabnine AI 作者 TabNine

`,l:"01FE/vscode-plugin-recommend.html#plug-6-tabnine-ai-必备",a:"plug-6-tabnine-ai-必备"},"11.7":{t:"Plug. 7: Favorites 插件\r",p:`
当前项目 收藏重要的页面


插件搜索 Favorites 作者 kdcro101 下载量 3万
根目录会生成 .favo ...`,l:"01FE/vscode-plugin-recommend.html#plug-7-favorites-插件",a:"plug-7-favorites-插件"},"11.8":{t:"Plug. 8: 别名路径跳转 插件\r",p:`
ctrl + 鼠标左键 点击 变量 函数名 自动跳转


插件搜索 别名路径跳转 作者 lihuiwang
要有 jsco ...`,l:"01FE/vscode-plugin-recommend.html#plug-8-别名路径跳转-插件",a:"plug-8-别名路径跳转-插件"},"11.9":{t:"Plug. 9: Auto Close Tag\r",p:`
自动闭合标签 插件


插件搜索 Auto Close Tag 作者 Jun Han

`,l:"01FE/vscode-plugin-recommend.html#plug-9-auto-close-tag",a:"plug-9-auto-close-tag"},"11.10":{t:"Plug. 10: Auto Rename Tag\r",p:`
标签自动改名 插件


插件搜索 Auto Rename Tag 作者 Jun Han

`,l:"01FE/vscode-plugin-recommend.html#plug-10-auto-rename-tag",a:"plug-10-auto-rename-tag"},"11.11":{t:"Plug. 11: Beautify 插件\r",p:`
代码格式化插件 这个插件用做vetur的html 格式化工具


插件搜索 Beautify 作者 HookQR
这个插件 ...`,l:"01FE/vscode-plugin-recommend.html#plug-11-beautify-插件",a:"plug-11-beautify-插件"},"11.12":{t:"Plug. 12: Prettier - Code formatter\r",p:`
代码格式化插件 这个插件用做vetur的css less 格式化工具


插件搜索 Prettier 作者 Prettie ...`,l:"01FE/vscode-plugin-recommend.html#plug-12-prettier-code-formatter",a:"plug-12-prettier-code-formatter"},"11.13":{t:"Plug. 13: Bracket Pair Color DLW\r",p:`
彩虹括号 插件


插件搜索 Bracket Pair Color DLW 作者 Bracket Pair Color D ...`,l:"01FE/vscode-plugin-recommend.html#plug-13-bracket-pair-color-dlw",a:"plug-13-bracket-pair-color-dlw"},"11.14":{t:"Plug. 14: Chinese 插件\r",p:`
简体中文 全称是 Chinese (Simplified) (简体中文) Language Pack for Visual ...`,l:"01FE/vscode-plugin-recommend.html#plug-14-chinese-插件",a:"plug-14-chinese-插件"},"11.15":{t:"Plug. 15: CSS Navigation\r",p:`
css 自动跳转


插件搜索 CSS Navigation 作者 pucelle

`,l:"01FE/vscode-plugin-recommend.html#plug-15-css-navigation",a:"plug-15-css-navigation"},"11.16":{t:"Plug. 16: `Draw.io Integration`\r",p:`
画图软件 必备


插件搜索 Draw.io 作者 Henning Dieterichs

`,l:"01FE/vscode-plugin-recommend.html#plug-16-draw-io-integration",a:"plug-16-draw-io-integration"},"11.17":{t:"Plug. 17: EditorConfig for VS Code\r",p:`
项目编码的基础设施


插件搜索 EditorConfig 作者 EditorConfig

`,l:"01FE/vscode-plugin-recommend.html#plug-17-editorconfig-for-vs-code",a:"plug-17-editorconfig-for-vs-code"},"11.18":{t:"Plug. 18: Error Lens 插件\r",p:`
错误信息直接显示在当前行的后面 特别直观


插件搜索 Error Lens 作者 Alexander

`,l:"01FE/vscode-plugin-recommend.html#plug-18-error-lens-插件",a:"plug-18-error-lens-插件"},"11.19":{t:"Plug. 19: ESLint 插件\r",p:`
代码校验插件 属于必备插件


插件搜索 ESLint 作者 Dirk Baeumer

`,l:"01FE/vscode-plugin-recommend.html#plug-19-eslint-插件",a:"plug-19-eslint-插件"},"11.20":{t:"Plug. 20: Git History 插件\r",p:`
git提交的历史记录 看看谁改出的bug :)


插件搜索 Git History 作者 Don Jayamanne

`,l:"01FE/vscode-plugin-recommend.html#plug-20-git-history-插件",a:"plug-20-git-history-插件"},"11.21":{t:"Plug. 21: npm 插件\r",p:`
执行 package.json 的 script 脚本，必装插件


插件搜索 npm 作者 egamma

`,l:"01FE/vscode-plugin-recommend.html#plug-21-npm-插件",a:"plug-21-npm-插件"},"11.22":{t:"Plug. 22: Npm Intellisense\r",p:`
导入导出 包名 的自动联想，必装插件


插件搜索 Npm Intellisense 作者 Christian Kohle ...`,l:"01FE/vscode-plugin-recommend.html#plug-22-npm-intellisense",a:"plug-22-npm-intellisense"},"11.23":{t:"Plug. 23: npm-links 插件\r",p:`
显示依赖包的文件位置 主要看全局依赖包的位置，必装插件


插件搜索 npm-links 作者 Dolov

`,l:"01FE/vscode-plugin-recommend.html#plug-23-npm-links-插件",a:"plug-23-npm-links-插件"},"11.24":{t:"Plug. 24: Path Intellisense\r",p:`
路径的自动联想 必装插件


插件搜索 Path Intellisense 作者 Christian Kohler

`,l:"01FE/vscode-plugin-recommend.html#plug-24-path-intellisense",a:"plug-24-path-intellisense"},"11.25":{t:"Plug. 25: Paste Image 插件\r",p:`
截图后粘贴到vscode里面，这个不常用，因为 Obsidian Typora支持直接显示


插件搜索 Paste Im ...`,l:"01FE/vscode-plugin-recommend.html#plug-25-paste-image-插件",a:"plug-25-paste-image-插件"},"11.26":{t:"Plug. 26: Project Manager\r",p:`
将多个项目都显示在左侧列表 好切换，由于我用rolan，所以这个不太常用


插件搜索 Project Manager 作 ...`,l:"01FE/vscode-plugin-recommend.html#plug-26-project-manager",a:"plug-26-project-manager"},"11.27":{t:"Plug. 27: Live Server\r",p:`
在html文件右键 直接开服务 很方便


插件搜索 Live Server 作者 Ritwick Dey

`,l:"01FE/vscode-plugin-recommend.html#plug-27-live-server",a:"plug-27-live-server"},"11.28":{t:"Plug. 28: SFTP\r",p:`
自动将代码传送到ftp空间，自动脚本发布代码用的


插件搜索 SFTP 作者 liximomo

`,l:"01FE/vscode-plugin-recommend.html#plug-28-sftp",a:"plug-28-sftp"},"11.29":{t:"Plug. 29: Template String Converter\r",p:`
字符串里面输入变量 &quot;Menu:&quot; -&gt; \`Menu:\${candy}\`


插件搜索 Temp ...`,l:"01FE/vscode-plugin-recommend.html#plug-29-template-string-converter",a:"plug-29-template-string-converter"},"11.30":{t:"Plug. 30: TypeScript Importer\r",p:`
ts开发使用 自动搜索ts定义 导入等等


插件搜索 TypeScript Importer 作者 pmneo

`,l:"01FE/vscode-plugin-recommend.html#plug-30-typescript-importer",a:"plug-30-typescript-importer"},"11.31":{t:"Plug. 31: Visual Studio IntelliCode\r",p:`
vscode 自动联想插件


插件搜索 Visual Studio IntelliCode 作者 Microsoft

`,l:"01FE/vscode-plugin-recommend.html#plug-31-visual-studio-intellicode",a:"plug-31-visual-studio-intellicode"},"11.32":{t:"Plug. 32: vue-helper 自动跳转\r",p:`
代码自动跳转


插件搜索 vue-helper 作者 shenjiaolong

`,l:"01FE/vscode-plugin-recommend.html#plug-32-vue-helper-自动跳转",a:"plug-32-vue-helper-自动跳转"},"11.33":{t:"Plug. 33: Dyno File Utils\r",p:`2022年09月08日 星期四

Dyno File Utils - VSCode Extension 新建目录 新建文件  ...`,l:"01FE/vscode-plugin-recommend.html#plug-33-dyno-file-utils",a:"plug-33-dyno-file-utils"},"12.0":{t:"# vscode设置推荐\r",p:`::: details 目录
[[toc]]
:::

一些常用设置

`,l:"01FE/vscode-set-recommend.html",a:"vscode设置推荐"},"12.1":{t:"Edit. 1: Goto Location\r",p:`
vscode 多个定义，直接跳转到主定义 不进行选择
Editor - Goto Location: Multiple D ...`,l:"01FE/vscode-set-recommend.html#edit-1-goto-location",a:"edit-1-goto-location"},"12.2":{t:"Flow. 2: 创建tag并送到远程\r",p:`
给项目打标签，vscode里面叫标记


创建tag


左侧 源代码管理 右上角 ...
标记 -&gt; 创建标记
输 ...`,l:"01FE/vscode-set-recommend.html#flow-2-创建tag并送到远程",a:"flow-2-创建tag并送到远程"},"13.0":{t:"# vue项目根目录配置文件\r",p:`::: details 目录
[[toc]]
:::

根目录有很多常见的配置文件，这里重点强调下jsconfig.json ...`,l:"01FE/vue-root-directory.html",a:"vue项目根目录配置文件"},"13.1":{t:"Part. 1: package.json - 入口文件\r",p:`
作用：package.json 是一个项目的入口，可以用 npm init -y 创建

// jsconfig.json ...`,l:"01FE/vue-root-directory.html#part-1-package-json-入口文件",a:"part-1-package-json-入口文件"},"13.2":{t:"Part. 2: jsconfig.json - 舒适度文件\r",p:`
作用：提高在写项目时舒适度的。如果是ts，文件名会是 tsconfig.json


jsconfig.json 存在的目 ...`,l:"01FE/vue-root-directory.html#part-2-jsconfig-json-舒适度文件",a:"part-2-jsconfig-json-舒适度文件"},"13.3":{t:"Part. 3: .eslintignore - 代码校验忽略\r",p:`
作用: 哪些目录 文件 不进行 eslint校验

// .eslintignore
/public/pdfjs/

`,l:"01FE/vue-root-directory.html#part-3-eslintignore-代码校验忽略",a:"part-3-eslintignore-代码校验忽略"},"13.4":{t:"Part. 4: .eslintrc.js - 代码校验配置\r",p:`
作用: eslint校验
::: tip 坑中回忆
写代码的时候，你会发现eslint对你的各种报错，可以到这里将提示的报 ...`,l:"01FE/vue-root-directory.html#part-4-eslintrc-js-代码校验配置",a:"part-4-eslintrc-js-代码校验配置"},"13.5":{t:"Part. 5: .gitignore - git忽略\r",p:`
git提交会忽略哪些文件

// .gitignore 这里就是举个例子
# dependencies
/node_mod ...`,l:"01FE/vue-root-directory.html#part-5-gitignore-git忽略",a:"part-5-gitignore-git忽略"},"13.6":{t:"Part. 6: .babelrc - 编译器\r",p:`
Babel编译器 主要作用是将高级的代码编译成低级的代码，使浏览器都能识别

{
  &quot;presets&quot ...`,l:"01FE/vue-root-directory.html#part-6-babelrc-编译器",a:"part-6-babelrc-编译器"},"13.7":{t:"Part. 7: .editorconfig - 统一编码风格\r",p:`
作用: 多人开发时候统一 项目编码风格


vscode 需要装插件 EditorConfig for VS Code
: ...`,l:"01FE/vue-root-directory.html#part-7-editorconfig-统一编码风格",a:"part-7-editorconfig-统一编码风格"},"13.8":{t:"Part. 8: .npmrc - 指定npm源\r",p:`
设置项目的npm源，这样就不使用全局的npm源


这样可以保证不论那个开发人员在安装的时候都指定项目的源，不受当前npm ...`,l:"01FE/vue-root-directory.html#part-8-npmrc-指定npm源",a:"part-8-npmrc-指定npm源"},"13.9":{t:"Part. 9: .postcssrc.js - css加前缀\r",p:`
兼容各种浏览器css，给css加前缀


不用理，都帮你弄好了，vue项目默认创建

// .postcssrc.js
m ...`,l:"01FE/vue-root-directory.html#part-9-postcssrc-js-css加前缀",a:"part-9-postcssrc-js-css加前缀"},"13.10":{t:"Part. 10: .travis.yml - 自动构建\r",p:`
作用: Travis.yml是持续集成（Travis CI）的配置文件


不用理，谁用CI谁再配置

// .travi ...`,l:"01FE/vue-root-directory.html#part-10-travis-yml-自动构建",a:"part-10-travis-yml-自动构建"},"13.11":{t:"Part. 11: alias.config.js - vue别名\r",p:`
vue 配置别名用的

// alias.config.js
function resolve (dir) {
  ret ...`,l:"01FE/vue-root-directory.html#part-11-alias-config-js-vue别名",a:"part-11-alias-config-js-vue别名"},"13.12":{t:"Part. 12: cypress.json - 测试配置\r",p:`
作用: Cypress是前端测试框架


不用理，前端一般没时间写测试用例，没时间test

// cypress.jso ...`,l:"01FE/vue-root-directory.html#part-12-cypress-json-测试配置",a:"part-12-cypress-json-测试配置"},"13.13":{t:"Part. 13: .favorites.json - 收藏夹配置\r",p:`
作用：vscode文件收藏夹配置文件


扩展 Favorites 作者 kdcro101 配置文件自动生成

// .f ...`,l:"01FE/vue-root-directory.html#part-13-favorites-json-收藏夹配置",a:"part-13-favorites-json-收藏夹配置"},"13.14":{t:"Part. 14: vue.config.js - vue2配置\r",p:`
vue2 项目配置文件，webpack的配置可以写在这里

// vue.config.js
const path = r ...`,l:"01FE/vue-root-directory.html#part-14-vue-config-js-vue2配置",a:"part-14-vue-config-js-vue2配置"},"13.15":{t:"Proc. 15: 过程回溯\r",p:`
这里粗略的写了下常用配置文件的作用，如果需要深入，可以自行网上查找资料


主要目的是在看项目目录的时候，心中对每个文件都 ...`,l:"01FE/vue-root-directory.html#proc-15-过程回溯",a:"proc-15-过程回溯"},"14.0":{t:"# 单词本z\r",p:`
这里的单词就是很随性的记忆，来源有生活中能见到的，或者抖音见到的等等~~
::: details 目录
[[toc]]
: ...`,l:"01FE/words.html",a:"单词本z"},"14.1":{t:"approachable 易理解的\r",p:"\r",l:"01FE/words.html#approachable-易理解的",a:"approachable-易理解的"},"14.2":{t:"reserved 保留\r",p:`
re 再一次 = 回
serv 服务
回头服务 = 保留 [rɪˈzɜːrvd]

`,l:"01FE/words.html#reserved-保留",a:"reserved-保留"},"14.3":{t:"girl gir=gen l女\r",p:`
gir = gen 出生
l = lady 女士中的女 标识女性
girl = 小女孩

`,l:"01FE/words.html#girl-gir-gen-l女",a:"girl-gir-gen-l女"},"14.4":{t:"boy bo=born y男\r",p:`
bo = born 出生
y = 男性 雄性染色体用Y表示
boy = 小男孩

`,l:"01FE/words.html#boy-bo-born-y男",a:"boy-bo-born-y男"},"14.5":{t:"glue 胶水\r",p:`
gl = go + l光线 = 去 光线 = 发光
gl = 发光 = 发散
u 通 n = on 有接触
glu = 发 ...`,l:"01FE/words.html#glue-胶水",a:"glue-胶水"},"14.6":{t:"whale wa哇-惊叹词-大型海洋生物-鲸鱼\r",p:`
来自古英语hwael,大型海洋生物，鲸，海象等，后用于指鲸。
w = water l 表示 长长的，也就是巨大的 = 大型 ...`,l:"01FE/words.html#whale-wa哇-惊叹词-大型海洋生物-鲸鱼",a:"whale-wa哇-惊叹词-大型海洋生物-鲸鱼"},"14.7":{t:"private v自己-私人的\r",p:`pri 来自PIEper,向前，穿过

pri = pre 向前（这么理解也说的过去）
v = f = self 自己
v  ...`,l:"01FE/words.html#private-v自己-私人的",a:"private-v自己-私人的"},"14.8":{t:"coast 逼近的地方-海岸\r",p:`
coast (n.) - &quot;margin of the land&quot;
来自拉丁语costa,肋骨，边
根 ...`,l:"01FE/words.html#coast-逼近的地方-海岸",a:"coast-逼近的地方-海岸"},"14.9":{t:"after apo 后\r",p:`
来自PIE*apo,后面 ter 比较级
这里 af 表示后面 根据 bpmf互换原则 f = p
apo = 向后 a表 ...`,l:"01FE/words.html#after-apo-后",a:"after-apo-后"},"14.10":{t:"board br 砍-板-船-菜板-关系\r",p:`
来自PIE*bherdh,砍，这是一个古老的单词，转义很多
b 爆发 oa 元音 不表意 r 生长 d 状态字母 过去式
 ...`,l:"01FE/words.html#board-br-砍-板-船-菜板-关系",a:"board-br-砍-板-船-菜板-关系"},"14.11":{t:"chime 重复的响声\r",p:`
来自拉丁语cymbalum,词源同cymbal.
chim = cim = sam = same 一样 同样
这里 cim ...`,l:"01FE/words.html#chime-重复的响声",a:"chime-重复的响声"},"14.12":{t:"court 围绕得到 - 法院 讨好\r",p:`
c 表示得到 catch助记
ourt = turn = around = 围绕
围绕得到某一事物的地方或者行为

英[k ...`,l:"01FE/words.html#court-围绕得到-法院-讨好",a:"court-围绕得到-法院-讨好"},"14.13":{t:"pollute 向前释放 污染\r",p:`
pol = por = pro = 向前
lut = 释放 (ps里面有lut的概念)
e 动词
向前释放 -&gt; 污 ...`,l:"01FE/words.html#pollute-向前释放-污染",a:"pollute-向前释放-污染"},"14.14":{t:"hire = 抽象here = 聘用\r",p:`
用词根 here 粘 黏 去联系记忆
聘用 租 借 就是关系的粘 黏

英 [ˈhaɪə(r)]   美 [ˈhaɪər] ...`,l:"01FE/words.html#hire-抽象here-聘用",a:"hire-抽象here-聘用"},"14.15":{t:"dangle 悬荡\r",p:`dangle = dance + toggle dan 向上跳 gle 摆动
dangle 英 [ˈdæŋɡl]   美 [ ...`,l:"01FE/words.html#dangle-悬荡",a:"dangle-悬荡"},"14.16":{t:"exploration - flow out - 探险\r",p:`
exploration plor,ploit — flow out ,weep


今天新学了个单词 exploratio ...`,l:"01FE/words.html#exploration-flow-out-探险",a:"exploration-flow-out-探险"},"14.17":{t:"launch = to throw - 发射\r",p:`
词根 launc = lanc = to throw
表示 to throw 的词根有三组

拉丁语的lanc/launc ...`,l:"01FE/words.html#launch-to-throw-发射",a:"launch-to-throw-发射"},"14.18":{t:"escort 护卫, 护送\r",p:`
单词本z escort 护卫 es=ex 出去 cor=con=com 一起, 一起出去 = 护卫


es = ex = ...`,l:"01FE/words.html#escort-护卫-护送",a:"escort-护卫-护送"},"14.19":{t:"ambition 雄心\r",p:`
amb = ab = about = around = 环绕
it = go = 走
ion 名词
重点是 amb 环绕  ...`,l:"01FE/words.html#ambition-雄心",a:"ambition-雄心"},"14.20":{t:"ctrl = control = 控制\r",p:`
con = com = 一起
tr- = 踩 踏 - 原始印欧语形式为 *der-
contra = 相对，相反（一起踩踏 ...`,l:"01FE/words.html#ctrl-control-控制",a:"ctrl-control-控制"},"14.21":{t:"shift = 转移\r",p:`
shi 流出
f 过程
t = do 这里shi流出，主要表意的是sh，用小孩shishi去记忆流出
shit shed
 ...`,l:"01FE/words.html#shift-转移",a:"shift-转移"},"14.22":{t:"alt = alter = 改变\r",p:`al- 不同 同源else的 el 这里是al -ter 比较级

特别 不同 = 改变（和以前特别不一样）

词源说明（童 ...`,l:"01FE/words.html#alt-alter-改变",a:"alt-alter-改变"},"14.23":{t:"custom 习惯\r",p:`
单词本z custom cu = com 一起 都， st=suet 自己， om 尾缀， 都是自己身上的 = 习惯，习俗 ...`,l:"01FE/words.html#custom-习惯",a:"custom-习惯"},"14.24":{t:"develop 发展\r",p:`
单词本z develop vel = 到上面 从下面到上面的一种过程 抽象是相对从无到有


发展 开发
de = dow ...`,l:"01FE/words.html#develop-发展",a:"develop-发展"},"14.25":{t:"attitude 态度\r",p:`
aptitude的变体 原指绘画或雕像时模特的姿势，通常都看起来比较优雅，后指傲慢的态度。
-itude : 表名词，“性 ...`,l:"01FE/words.html#attitude-态度",a:"attitude-态度"},"14.26":{t:"habit 习惯\r",p:`
hab = had(have过去式) = 持有
it = 走
habit = 一直持有 = 抽象角度就是一个人的习惯
长袍 ...`,l:"01FE/words.html#habit-习惯",a:"habit-习惯"},"14.27":{t:"bizarre 奇怪的（外貌）\r",p:`
bi = beard 胡须
zar 奇怪的 re = er 尾缀 或者理解成双写r加e zar 参考 pizza 披萨 p ...`,l:"01FE/words.html#bizarre-奇怪的-外貌",a:"bizarre-奇怪的-外貌"},"14.28":{t:"lean 依靠\r",p:`
从 clime 气候 演变过来，希腊人发现气候是由于太阳光线角度不同导致的
c = s 加强语气 l = 线 = 光线 m ...`,l:"01FE/words.html#lean-依靠",a:"lean-依靠"},"16.0":{t:"# BBTime-LOG\r",p:`::: details 目录
[[toc]]
:::
记录下碎碎念 https://www.ourboard.io/b/3d ...`,l:"log/BBTime-LOG.html",a:"bbtime-log"},"16.1":{t:"Log. 1: AutoNumber成功发布到vscode插件市场了\r",p:`20220906

在vscode插件里面搜索autoNumber即可

`,l:"log/BBTime-LOG.html#log-1-autonumber成功发布到vscode插件市场了",a:"log-1-autonumber成功发布到vscode插件市场了"},"16.2":{t:"Log. 2: AutoNumber.js 改成vscode插件了\r",p:`20220901

虽然没有放到公网的市场上，但是也不错了，就差一步。

很多时候就是这个网站他打不开打不开打不开，哎~
a ...`,l:"log/BBTime-LOG.html#log-2-autonumber-js-改成vscode插件了",a:"log-2-autonumber-js-改成vscode插件了"},"16.3":{t:"Log. 3: 复盘总结 改为 过程回溯\r",p:`20220901

今天看抖音说 自己给不了自己复盘，只能别人给你复盘，因为他们的眼界会比你宽广。


你自己那个叫 过程回 ...`,l:"log/BBTime-LOG.html#log-3-复盘总结-改为-过程回溯",a:"log-3-复盘总结-改为-过程回溯"},"16.4":{t:"Log. 4: 自动编号脚本 \r",p:`20220901

写博客标题时候发现 英文类型名+.+空格+编号+:+空格+标题，这个特别好看


But 上下挪顺序的时 ...`,l:"log/BBTime-LOG.html#log-4-自动编号脚本",a:"log-4-自动编号脚本"},"16.5":{t:"Log. 5: 添加Algolia搜索 \r",p:`20220829

本来想自己做一个搜索，但是发现插槽里面写的组件，会导致vitepress有问题，还是申请了Algolia ...`,l:"log/BBTime-LOG.html#log-5-添加algolia搜索",a:"log-5-添加algolia搜索"},"16.6":{t:"Log. 6: 打包要是有错误，网站会发布失败 \r",p:`20220826 打包发布

打包失败在发布脚本里面不给报错提示啊！！

next =&gt; {
    exec('vi ...`,l:"log/BBTime-LOG.html#log-6-打包要是有错误-网站会发布失败",a:"log-6-打包要是有错误-网站会发布失败"},"16.7":{t:"Log. 7: 开发模式-打包模式变更 失败了 \r",p:`20220825 奇思妙想

感觉每次发布都要build，提交git，服务器拉取git，时间比较长，在服务器直接使用开发模式 ...`,l:"log/BBTime-LOG.html#log-7-开发模式-打包模式变更-失败了",a:"log-7-开发模式-打包模式变更-失败了"},"17.0":{t:"# 更新日志\r",p:`::: details 目录
[[toc]]
:::
日常更新维护日志和站点服务搭建都放在这里面



调试
发布




 ...`,l:"log/log.html",a:"更新日志"},"17.1":{t:"Log. 1: 安装了宝塔\r",p:`2022年9月8日

之前服务器上 装了nginx mysql等等，今天看抖音，感觉安装个宝塔试试。


由于之前装过mys ...`,l:"log/log.html#log-1-安装了宝塔",a:"log-1-安装了宝塔"},"17.2":{t:"Log. 2: Markdown 语法\r",p:`https://vitepress.vuejs.org/guide/markdown
`,l:"log/log.html#log-2-markdown-语法",a:"log-2-markdown-语法"},"17.3":{t:"Log. 3: 站点环境\r",p:`当前站点域名服务器购买地址

域名在华为云购买 https://www.huaweicloud.com/

到期时间 202 ...`,l:"log/log.html#log-3-站点环境",a:"log-3-站点环境"},"17.4":{t:"Log. 4: 服务器环境\r",p:`服务器环境及搭建已经装了哪些软件，站点是如何发布的，开发工作流等等。
镜像: CentOS 8.3 64位
CPU: 1核
 ...`,l:"log/log.html#log-4-服务器环境",a:"log-4-服务器环境"},"17.5":{t:"Log. 5: 服务器站点搭建\r",p:"主要是利用 Nginx 代理转发，用 pm2 持续开启进程。http-server 开启 8080 服务，然后 Nginx  ...",l:"log/log.html#log-5-服务器站点搭建",a:"log-5-服务器站点搭建"},"17.6":{t:"Log. 6: 前端网站发布工作流\r",p:"利用 nodejs 脚本一键发布，在 package.json 的 script 里面执行脚本 &quot;打包并发布&qu ...",l:"log/log.html#log-6-前端网站发布工作流",a:"log-6-前端网站发布工作流"},"18.0":{t:"# nginxConfig 配置文件备份\r",p:`::: details 目录
[[toc]]
:::

备份下配置代码

`,l:"log/nginx-config.html",a:"nginxconfig-配置文件备份"},"18.1":{t:"Step. 1: 服务器 nginx config\r",p:`
代码备份
::: details 代码

#user  nobody;
worker_processes  1;

#er ...`,l:"log/nginx-config.html#step-1-服务器-nginx-config",a:"step-1-服务器-nginx-config"},"18.2":{t:"Step. 2: 宝塔 nginx 初始化配置\r",p:`
代码备份
::: details 代码

user  www www;
worker_processes auto;
er ...`,l:"log/nginx-config.html#step-2-宝塔-nginx-初始化配置",a:"step-2-宝塔-nginx-初始化配置"}},o={previewLength:62,buttonLabel:"Search",placeholder:"Search docs",allow:[],ignore:[],encode:!1,tokenize:"full"},t={INDEX_DATA:e,PREVIEW_LOOKUP:n,Options:o};export{t as default};