const fs = require("fs")
const util = require("util")

let buf = new Buffer(1024)
let fd = null
//阅读文件
fs.open("file/input.txt","r+",open)

function open(){
  let args = Array.prototype.slice.call(arguments)
  let err = args[0]
  fd = args[1]
  if(err) return console.error(err)

  fs.read(fd,buf,0,buf.length,0,read)
}

// let arr = [1,2,3,4]
// console.log.apply(console,[util.inspect(Array.prototype.constructor,true,10)])

function read(){
  let args = Array.prototype.slice.call(arguments)
  let err = args[0]
  let bytes = args[1]
  let buf1 = args[2]
  if(err) return console.error.apply(console,[err])

  console.log.call(console,bytes)
  if(bytes > 0) console.log.apply(console,[Buffer.prototype.slice.apply(buf1,[0,bytes]).toString()])
  if(bytes > 0) console.log.apply(console,[buf.slice(0,bytes).toString()])
  console.log.apply(console,[fd])
  fs.close(fd,close)
}

function close(err){
  if(err) return console.error(err)
  console.log("文件关闭")
}
