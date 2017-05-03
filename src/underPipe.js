// let fs = require("fs")
// let stream = require("stream")
//
// let readAble = new stream.Readable()
// let writeStream = new fs.createWriteStream("file/output2.txt")
//
// readAble.push("helloworld")
// readAble.push(null)
//
// //data => *.txt
// readAble.pipe(writeStream)

//创建一个Readable() stream流 并写入文件
let fs = require("fs")
let stream = require("stream")

let Readable = new stream.Readable()
let WriteStream = new fs.createWriteStream("file/output01.txt")
// let ReadStream = new fs.createReadStream("file/input01.txt")

Readable.setEncoding("utf-8")
Readable.push("hello")
Readable.push("world")
Readable.push(null)

const finish = () => {
  console.log("finish")
}
const error = (err) => {
  console.log(err.stack)
}

WriteStream.on("finish",finish)
WriteStream.on("error",error)

Readable.pipe(WriteStream)
