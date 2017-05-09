const fs = require("fs")
const util = require("util")

//aSync() 异步读取
// fs.readFile("file/input.txt",function(err,data){
//   if(err) return console.error(err)
//   console.log(data.toString())
//   console.log(data) //Buffer
// })
//
// console.log("read over")

//fs.open(path,flags,[mode],callback)
/*
  flags 以什么模式打开文件
 */


fs.open("file/input.txt","r+",open)
function open(err,data){

  //what's data?
  if(err) return console.error(err)

  console.log(Object.prototype.toString.apply(data)) //默认读取 Buffer
  console.log(data)
  // console.log(data.toString())
  // console.log()
  console.log(util.inspect(data))
}
