const fs = require("fs")
const util = require("util")
let buf = new Buffer(1)
function write(err){
  if(err) return console.error(err)
  fs.readFile("file/input.txt",function(err,data){
    if(err) return console.error(err)
    // console.log.apply(console,data)
    // consol
    console.log.apply(console,[Object.prototype.toString.apply(data)])
    console.log(data.toString())
    console.log(typeof buf)
  })
}

// fs.writeFile(file,data,[options],cb)  options编码方式 默认UTF8
fs.writeFile("file/input.txt","Heihei","UTF8",write)  //覆盖之前文件内容
console.constructor.prototype.log.apply(console,["over"])
