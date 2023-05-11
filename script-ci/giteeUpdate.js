// giteeUpdate.js
// let exec = require('child_process').exec
import { exec } from 'child_process' 
// let async = require("async")
import async from 'async'

async.series([
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
  next => {
    console.info('1. 打包完成！')
    next()
  },
  next => { exec('git add .', () => next()) },
  next => { exec('git push', () => next()) },
  next => { exec('git commit -m buildFastByGiteeUpdate', () => next()) },
  next => { exec('git push -u origin master', () => next()) },
  next => {
    console.info('2. git push完成！')
    next()
  },
  next => { exec("ssh root@117.50.187.55 '/root/vuejsdev.sh'", () => next()) },
  next => {
    console.info('3. 发布网站完成！')
    next()
  },
])
