// giteeUpdate.js
// let exec = require('child_process').exec
import { exec } from 'child_process' 
// let async = require("async")
import async from 'async'

async.series([
  next => { exec("ssh root@117.50.187.55 '/root/vuejsdev.sh'", () => next()) },
  next => {
    console.info('3. 发布网站完成！')
    next()
  },
])
