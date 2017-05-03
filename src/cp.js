let fs = require("fs")
let zlib = require("zlib")

console.log(process.argv[2], "->", process.argv[3])
let ReadStream = fs.createReadStream(process.argv[2])
let WriteStream = fs.createWriteStream(process.argv[3])

const end = () => {
  console.log("read end")
  WriteStream.end()
}
const error = (err) => {
  console.log(err.stack)
}
const finish = () => {
  console.log("finish")
}
const open = () => {
  ReadStream.pipe(WriteStream)
}
WriteStream.on("error",error)
WriteStream.on("finish",finish)
ReadStream.on("error",error)
ReadStream.on("end",end)
ReadStream.on("open",open)
