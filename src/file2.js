const fs = require("fs")
const util = require("util")

//fs.stat(path,cb(err,stats))  stats实例返回给回调  可以通过stats实例的方法判断文件的具体信息

//print
function print(){
  let args = Array.prototype.slice.apply(arguments)
  args.unshift("file2.js:")
  args.push("\n")
  console.log.apply(console,args)
}

fs.stat("http/server.js",function(err,stats){
  if(err) return console.error(err)
  // print(stats.isFile())
  // print(stats.constructor.prototype.isFile.call(stats))
  // print(stats.isDirectory())
  // print(stats.constructor.prototype)
  // print(util.inspect(stats.constructor,true,3))
  print(stats.constructor)

})

// console.log(fs.constructor.prototype.stat.)
