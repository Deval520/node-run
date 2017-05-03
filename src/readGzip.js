let fs = require("fs")
let zlib = require("zlib")

let readStream = fs.createReadStream("file/output02.txt.gz")
let writeStream = fs.createWriteStream("file/zlip.output.txt")

// readStream.setEncoding("ascii")

const end = () => {
  console.log("read end")
}
const finish = () => {
  console.log("finish")
}
const error = (err) => {
  console.log(err.stack)
}
readStream.on("end",end)
readStream.on("error",error)
writeStream.on("finish",finish)
writeStream.on("error",error)

readStream.pipe(zlib.createGunzip()).pipe(writeStream)
