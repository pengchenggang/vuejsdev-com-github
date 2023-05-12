# 开发前小知识
::: details 目录
[[toc]]
:::
> 作为开发 Github 是要必须的学习的，那么第一步就是要可以访问。

::: tip 小提示
很多时候你就差一个关键字而已~ ：）
:::

## Step. 1: 打开 Github
> Github一般情况下是打不开的，所以一定要先攻克这个，这里推荐用软件的方式，比较省心。

* 方案1 FastGithub.UI https://www.cr173.com/soft/670733.html
* 方案2 hosts https://raw.hellogithub.com/hosts
* 方案3 购买vpn 具体名称这里就不提了。

## Step. 2: 解决跨域问题
> 很多时候，你会遇到莫名的跨域问题，有时候后台报错也会显示前台跨域，导致也不知道是不是真的跨域。

**解决方案**
1. 安装 [双核浏览器](https://b.cqttech.com/index) **最新的chrome已经不支持跨域设置**
2. `chrome://flags/#same-site-by-default-cookies` 设置 Disabled
3. `chrome://flags/#enable-removing-all-third-party-cookies` 设置 Disabled
4. 如果你是多站点，使用Nginx，使其变成一个域,我的配置文件还有代理中转后台。
::: details Nginx 配置文件代码
```r
# nginx-authenticate.conf
server {
  listen       8888;
  server_name  localhost;

  location /siteName {
    # 这种方式 访问时候要用ip调用 不要用localhost 要不会显示跨域
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'POST,GET,OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'Authorization'; #跨域设置

    # proxy_pass http://192.168.111.111:9090/sitename-api/; # 后台人员名称
    proxy_pass http://192.168.111.112:9090/sitename-api/; # 后台人员名称2

  }

  location /siteName2 {
    proxy_pass http://127.0.0.1:5001/siteName2/;
  }

  location /siteName3 {
    proxy_pass http://127.0.0.1:8080/siteName3/;
  }
  
  #error_page  404              /404.html;

  # redirect server error pages to the static page /50x.html
  #
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
      root   html;
  }
}
```
:::
4. 后台请求头设置跨域代码，这样前后台就打通不跨域了。后台处理好option请求，不要报错。
```java
header("Access-Control-Allow-Origin","源地址";
header("Access-Control-Allow-Credentials", "true");
// 这里 源地址 不能是*，可以设置成 谁请求你，你就设置成他的地址
```
 5. 如果后台需要session，前台请求的axios设置 `withCredentials: true`,发送请求自动携带cookie。
 [java 携带session 前台传递cookie 跨域解决方案 vue + java](https://www.cnblogs.com/pengchenggang/p/16595453.html)

 ::: tip 如果这个时候还发生跨域
 当你发现，某个接口，或某几个接口跨域，其他接口不跨域，基本上就是后台代码发生错误导致。
 :::

## Step. 3: Node.js 环境安装
> 学习前端 先安装下node环境
* https://nodejs.org/zh-cn/ 选择 长期维护版 安装一下即可。
```
npm -v
```
## Step. 4: vscode 开发软件安装
> 开发软件选择的ide，这里是vscode
>
> vscode 不适合java的开发，java开发用idea
* https://code.visualstudio.com/Download 选择 64bit的 安装一下即可


## Step. 5: 蓝奏云
> 如果有一些免费共享的软件，可以上传到这里
* https://up.woozooo.com/u

## Step. 6: 前端面试题库
* https://github.com/febobo/web-interview

## Step. 7: git 环境安装
> 代码仓库环境 早些年还有svn，现在都改成git了
* http://git-scm.com/downloads 下载安装下即可

## Step. 8: Nginx 环境安装
> 这是一个绿色软件 解压即可使用
* http://nginx.org/en/download.html 下载 nginx/Windows-1.23.1 安装即可

## Step. 9: Nexus npm私仓
> 解压运行 启动服务
* https://pan.baidu.com/s/1EoaesjSZDKdLflCVlN_dOg 提取码: 52jc
* [npm nexus 私服搭建使用(本地)](https://www.jianshu.com/p/e437d8e694a0)
* [Nexus npm 搭建私有仓库 很好很强大 nrm electronjs](https://www.cnblogs.com/pengchenggang/p/15561928.html)

## Step. 10: MobaXterm1_CHS1 SSH客户端
> SSH客户端 每日必备
* https://wws.lanzoul.com/ihPjM0blkwni 密码:8cz1 这个自己下载吧，安装即可

## Step. 11: php study 环境安装
> 这个软件 可以快速搞定mysql数据库
* https://www.xp.cn/ 选择windows版本 安装即可

## Step. 12: Sourcetree gitGUI
> 一款git可视化工具 每日必备
* https://www.sourcetreeapp.com/ 安装即可

## Step. 13: Navicat 数据库连接
> 一款数据库连接可视化软件
* 下载:https://wws.lanzoul.com/iAiUq0bllfqf 密码:5pya
* 补丁忘了是不是这个了，先安装程序，如果不用装补丁，就不装了。

## Step. 14: `draw.io` 画图软件
> 推荐vscode插件用
* https://app.diagrams.net/ 在线 软件打开 或者 vscode插件

## Step. 15: hotkeyp 快捷键
> 设置全局快捷键 我习惯有 Alt+小键盘+ 等
* 下载:https://wws.lanzoul.com/iti5r0bllmub 密码:3409 安装即可

## Step. 16: Rolan 1.1.3 快捷方式启动
> 我习惯设定 Alt+1 显示
>
> 这个版本比较老，但是新版收费了
* https://www.cnblogs.com/pengchenggang/p/10198390.html 下载安装即可

## Step. 17: java8 环境安装
> 搜 jdk-8u271-windows-x64.exe 进行安装
* [SpringBoot 学习记录 2021.05.13 Started](https://www.cnblogs.com/pengchenggang/p/14763236.html)

## Step. 18: Maven3 环境安装
> java的库，和npm一个意思
* https://www.baidu.com/s?wd=Maven3 自己找下，安装即可
* 这个Maven3 我这不到2G 我就不传了

## Step. 19: apache-tomcat-8.5.8
> 这个属于非常常用的java环境 必备
* 下载:https://wws.lanzoul.com/ihiUD0blly6j 密码:2k4a 安装即可

## Step. 20: Everything 本地搜索
> 这个我的习惯设置 alt + Num0 为快捷键
* https://www.voidtools.com/zh-cn/ 下载安装即可

## Step. 21: python3 环境安装
> python3.9脚本还是会经常用到，麻烦的是和别人的python2.7脚本切换环境
* https://www.python.org/downloads/ 如果打不开就换个下载地址
* [菜鸟教程：python3基础教程](https://www.runoob.com/python3/python3-tutorial.html)

## Step. 22: 向日葵远程控制
> 有时候会需要远程帮助，这个软件非常有用。
* https://sunlogin.oray.com/ 下载安装即可

## Step. 23: VM虚拟机 VMware
> VMware Workstation Pro V15.0.0 为了这个软件，16G都不够，最好32G内存起步
* [VMware Workstation Pro V15.0.0](https://www.baidu.com/s?wd=VMware%20Workstation%20Pro%20V15.0.0)
::: tip 坑中回忆
装centOS的时候，vm启动系统总是崩溃，最后换了个镜像，ok完美安装了，所以有时候是镜像的问题。
:::

## Step. 24: IDEA
> 这个本来应该不放这么靠后的，现在顺序也就这样了
* https://www.baidu.com/s?wd=idea%20%E4%B8%8B%E8%BD%BD 这是个神器

## Step. 25: Aardio 开发环境
> windows 开发exe的IDE，我非常喜欢~
* https://www.aardio.com/ 下载安装即可

## Step. 26: Xmind 思维导图
> 这个思维导图软件足够用了
* https://www.xmind.cn/ 下载安装即可

## Step. 27: 幕布 大纲模式
> 大纲模式 最好用的软件，300个免费节点 够用了
* https://mubu.com/apps 下载安装即可

## Step. 28: onenote2016
> 这是一个本地的记事本软件，我不喜欢在线的
* https://www.baidu.com/s?wd=onenote2016 下载安装即可

## Step. 29: Obsidian
> 如果写本地文档 这个够用了，关键能插入图片和显示标题
* https://obsidian.md/ 下载安装即可

## Step. 30: Typora
> markdown 写作利器，可以自己找找老版本的用
* https://typoraio.cn/ 注意：官方收费了

## Step. 31: OBS 录课直播
> 颠覆录屏的软件，强大到没朋友，关键还免费
* https://obsproject.com/ 下载安装即可

## Step. 32: Captura 录屏工具
> Captura屏幕录制含ffmpeg 主要有区域录制
* 下载:https://wws.lanzoul.com/iqDrS0b2owoj 密码:6toy

## Step. 33: 剪映 专业版
> 想当年PR AE C4D, 如今 剪映 竟然破局了~ 夸张了 :)
* https://lv.ulikecam.com/ 下载安装即可

## Step. 34: Android Studio 开发环境
> React Native 开发安卓软件用到的环境
* https://developer.android.google.cn/studio
* https://www.baidu.com/s?wd=Android%20Studio

## Step. 35: Axure RP 9 原型设计
> 产品画原型图，用这个软件
* 外链:https://wws.lanzoul.com/b03paemkf 密码:dmvj

## Step. 36: apifox api测试工具
> 同类产品还有 postman apipost
* https://www.apifox.cn/

## Step. 37: snipaste 截图工具
> 这个F3贴图功能实在是太帅了，比微信的截图强调~ 感谢同事 _BugMaker 的分享
* https://www.snipaste.com/download.html
* https://www.onlinedown.net/soft/583826.htm

## Soft. 38: Notepad2 简体中文记事本
> 这个记事本非常好，替代windows默认记事本
* [文本编辑器Notepad2 v4.22.07(r4278)_简体中文绿色版](https://myqqjd.com/180.html)

## Serv. 39: 禅道 - 项目管理软件
> 服务器软件 产品和你的沟通桥梁 甩锅神器
* https://www.zentao.net/

## Serv. 40: gitLab - git代码平台
> 服务器软件 linux软件 `ce表示开源` `el表示centos 选64位` `el6对应CentOS 6`
* https://packages.gitlab.com/gitlab/gitlab-ce

## Serv. 41: onlyOffice
> 服务器软件 简单易懂 就是线上的office 感觉产品用的更多一些
* https://github.com/ONLYOFFICE/CommunityServer
* `docker network create --driver bridge onlyoffice` docker安装
* [搭建团队文档协作平台（OnlyOffice）](https://zhuanlan.zhihu.com/p/45644488)


## Proc. 42: 过程回溯
> 这里是我电脑上对于开发来说常用到软件，当然还有制作视频等其他的爱好，有些软件就没提现在这里。
::: tip 其他常用软件
软件：PS AI AE PR AU C4D 石墨文档 格式工厂 Delphi7 Lantern Notion TortoiseSVN `Visual Studio 2017` postman `iMindMap 10` 向日葵 火狐 火柴(两次ctrl)
:::

::: tip 之前叫做复盘总结
因为自己没有办法给自己复盘，复盘只能从第3方无利益角度给你复盘，指出相应的问题和提升的空间。
:::

**后期再想到什么，再加到这个列表里来吧** `20220830`