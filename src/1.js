//非阻塞 读取文件
let fs = require("fs")

const fscb = (err,data) => {
  if(err) return console.error(err)
  console.log(data.toString())
}

fs.readFile("file/input.txt",(err,data) => fscb(err,data))

console.log("程序执行完毕")
