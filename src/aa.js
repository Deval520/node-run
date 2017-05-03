let fs = require("fs")

let readStream = fs.createReadStream("file/input.txt")
let writeStream = fs.createWriteStream("file/input3.txt")

let str = ""
const data = (chunk) => {
  str += chunk
}
const error = (err) => {
  console.log(err.stack)
}

const finish = (args) => {
  console.log(args)
  console.log("finish")
}
const end = () => {
  console.log(str)
  //write
  writeStream.write(str,"utf-8")
  writeStream.end()
  writeStream.on("error",error)
  writeStream.on("finish",finish)
}

readStream.on("data",data)
readStream.on("end",end)
