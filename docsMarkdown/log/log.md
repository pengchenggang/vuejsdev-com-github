# 更新日志

::: details 目录
[[toc]]
:::

日常更新维护日志和站点服务搭建都放在这里面

| 调试 | 发布 |
|---|---|
| <a href="http://localhost:8086/log/log.html" target="_blank" rel="noreferrer">本机开发地址</a> | [在线发布地址](https://www.vuejsdev.com/log/log.html) |

## Log. 1: 安装了宝塔
`2022年9月8日`
> 之前服务器上 装了nginx mysql等等，今天看抖音，感觉安装个宝塔试试。
* 由于之前装过mysql什么的，宝塔再装一遍就重复了
* 这个装好后开的13890端口，服务器防护墙规则要添加这个端口
* 宝塔官网 https://www.bt.cn/
* 需要在官网注册手机号，绑定安装的系统

## Log. 2: Markdown 语法

https://vitepress.vuejs.org/guide/markdown

## Log. 3: 站点环境

当前站点域名服务器购买地址

- 域名在`华为云`购买 https://www.huaweicloud.com/
  - 到期时间 2023-07-21
  - 华为云域名续费相对贵一些，3 个月后可以转到 ucloud
- 服务器在`ucloud`购买 https://console.ucloud.cn/
  - 到期时间 2025-07-14

::: tip 坑中回忆 - 空间域名备案
最先买了个域名，觉得哪里买都 ok，就在个大品牌买就 ok 了，阿里、华为、腾讯，肯定牛气呗，最后在华为买了个域名。

然后看了下服务器，本着哪个便宜来哪个的原则，就上的 ucloud 服务器。

备案的时候就蒙了，因为开始以为在华为备案，一通认证，最后发现服务器在哪里就在哪里备案。

以后再购买的时候，服务器和域名一定要在一个地方买省得麻烦，还得来回切换。
:::

## Log. 4: 服务器环境

服务器环境及搭建已经装了哪些软件，站点是如何发布的，开发工作流等等。

```
镜像: CentOS 8.3 64位
CPU: 1核
内存: 2G
系统盘总容量: 40GB
数据盘总容量: 0GB
```

::: tip 坑中回忆 - CentOS 版本问题
创建服务器的时候 我选择了最新版的 CentOS 8，无知的少年就此开始了悲催的旅程

后来发现主流的操作系统是 CentOS 7，网上解决 bug 的方案基本都是 7 的。

主要区别就是 目录结构等等不一样，会造成解决一个问题会很繁琐，本来一个前端搞这个就不是很熟，自己还搞这种为难自己的事情。
:::

## Log. 5: 服务器站点搭建

主要是利用 Nginx 代理转发，用 pm2 持续开启进程。http-server 开启 8080 服务，然后 Nginx 映射到根目录，这里主要为了后期 nestjs 开服务，映射 api 目录。

- Nginx 开启后台进程会一直在
- http-server 服务要用 pm2 进行进程持续开启

::: tip 坑中回忆 - Nginx 安装及 https 协议
Nginx 安装比较简单，拉一个包安装到指定位置就好了。关键是 https 协议，要先申请证书，然后配置在 Nginx 中，还要从新编译 Nginx，这个时候要回到 Nginx 的安装包，这一通找啊~
:::

- 本机连服务器 `MobaXterm1_CHS1`
- 显示当前目录 `pwd`
- nginx 安装包软件目录 编译时候用 `/nginx/nginx-1.18.0/`
- nginx 配置文件 `/usr/local/nginx/conf/nginx.conf`
- nginx 启动 `nginx -t && nginx -s reload`
- nginx 停止 `nginx -s stop`
- nginx 做软连接 `ln -s /usr/local/nginx/sbin/nginx /usr/local/sbin`
- 启动前端 `cd /root/vuejsdev-com/docs/.vitepress/dist && pm2 start http-server --name vuejsdevFE-8080 -- -p 8080`
- 启动前端调试 `cd /root/vuejsdev-com && pm2 start npm --name npm8080VuejsdevFE -- run dev8080`
- 启动后端 `cd /root/gateway-study && pm2 start dist/src/main.js`
- pm2 删除进程 `pm2 delete all`
- pm2 重启进程 `pm2 restart vuejsdev-com`
- 查看当前 tomcat 是否启动 `ps -ef|grep tomcat`
- 查看当前 node 是否启动 `ps -ef|grep node`
```
www       756970  756959  0 14:14 ?        00:00:00 node /root/vuejsdev-com/node_modules/.bin/vitepress serve docs
```
- 删除进程 `kill -9 756970` `kill -9 pid`

::: info git pull 不用每次输入账号密码
git config --global credential.helper store

给脚本赋值权限 `chomd 777 nest.sh`
:::

**不常用命令**

- 查看硬盘空间 `df -h`
- 查看 cpu 内存 `top`

## Log. 6: 前端网站发布工作流

利用 nodejs 脚本一键发布，在 package.json 的 script 里面执行脚本 `"打包并发布": "node script-ci/giteeUpdate.js",`

```js
// giteeUpdate.js
let exec = require("child_process").exec
let async = require("async")

async.series([
  next => {
    exec("vitepress build docs", () => next())
  },
  next => {
    console.info("1. 打包完成！")
    next()
  },
  next => {
    exec("git add .", () => next())
  },
  next => {
    exec("git push", () => next())
  },
  next => {
    exec("git commit -m buildFastByGiteeUpdate", () => next())
  },
  next => {
    exec("git push -u origin master", () => next())
  },
  next => {
    console.info("2. git push完成！")
    next()
  },
  next => {
    exec("ssh root@117.50.187.55 '/root/vuejsdev.sh'", () => next())
  },
  next => {
    console.info("打包发布网站完成！")
    next()
  },
])
```

服务器端的脚本相对简单一些，pull 一下就可以了

```bash
#!/bin/bash
cd /root/vuejsdev-com
git pull
#npm run build
#pm2 delete nest
#pm2 start node --name nest -- dist/src/main
echo "devjsdev-com gitee is ok"
```

配置好脚本，每次自动打包，上传到 gitee，然后服务器拉取一下就 ok 了。
