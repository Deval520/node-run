let fs = require("fs")
let zlib = require("zlib")

let ReadStream = new fs.createReadStream("file/input.txt")
let WriteStream = new fs.createWriteStream("file/output02.txt")

ReadStream.setEncoding("ascii")
// WriteStream.setEncoding("ascii")

const end = () => {
  console.log("read end")
}
const error = (err) => {
  console.log(err.stack)
}
const finish = () => {
  console.log("write finish")
}
ReadStream.on("error",error)
ReadStream.on("end",end)
WriteStream.on("error",error)
WriteStream.on("finish",finish)

ReadStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("file/output02.txt.gz"))
