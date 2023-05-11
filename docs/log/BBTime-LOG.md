# BBTime-LOG
::: details 目录
[[toc]]
:::
记录下碎碎念 https://www.ourboard.io/b/3d420ff8-e740-4e40-950f-caa46aa9c4d1

## Log. 1: AutoNumber成功发布到vscode插件市场了
`20220906`
> 在vscode插件里面搜索`autoNumber`即可

## Log. 2: AutoNumber.js 改成vscode插件了
`20220901`
> 虽然没有放到公网的市场上，但是也不错了，就差一步。
> * 很多时候就是这个网站他打不开打不开打不开，哎~
> * [autonumber-for-vscode-0.0.1.vsix 下载](https://files.cnblogs.com/files/pengchenggang/autonumber-for-vscode-0.0.1.zip)

## Log. 3: 复盘总结 改为 过程回溯
`20220901`
> 今天看抖音说 自己给不了自己复盘，只能别人给你复盘，因为他们的眼界会比你宽广。
* 你自己那个叫 `过程回溯`，你要是有问题，你之前不就解决了吗，你要是没有发现问题，再看一遍也不可能发现问题啊。
* Process backtracking 过程回溯

## Log. 4: 自动编号脚本 
`20220901`
> 写博客标题时候发现 英文类型名+`.`+空格+编号+`:`+空格+标题，这个特别好看
* But 上下挪顺序的时候差点没玩死我呀
* 所以写了个 autoNumber的脚本 自动改编号用。
* 现在还是命令式的，后期有时间改成vscode插件好了。


## Log. 5: 添加Algolia搜索 
`20220829`

> 本来想自己做一个搜索，但是发现插槽里面写的组件，会导致vitepress有问题，还是申请了Algolia。

## Log. 6: 打包要是有错误，网站会发布失败 
`20220826` `打包发布`

> 打包失败在发布脚本里面不给报错提示啊！！
```js
next => {
    exec('vitepress build docs', (err, stdout, stderr) => {
      if (err) {
        console.info("子进程启动失败：", err)
        process.exit()
      } else {
        console.info("子进程标准输出：", stdout)
        console.info('stderr:', stderr)
        next()
      }
    })
  },
```
解决了 嘿嘿~


## Log. 7: 开发模式-打包模式变更 失败了 
`20220825` `奇思妙想`
> 感觉每次发布都要build，提交git，服务器拉取git，时间比较长，在服务器直接使用开发模式，直接更新改的那个文件，速度就会快很多。
* 经过实验，发现两个问题
1. 虽然没有build，但是速度也没变快
2. 网站相应速度变的很慢
3. 移动端打不开了

结果又换回了`打包模式`