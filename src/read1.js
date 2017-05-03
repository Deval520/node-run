let fs = require("fs")
let readStrem = fs.createReadStream("file/input.txt")

let str = ""

const data = (chunk) => {
  str += chunk
}

const end = () => {
  console.log(str)
}

const err = (err) => {
  console.log(err.stack)
}

//所有数据已被写入系统底层
const finish = (args) => {
  console.log(args)
  console.log("dsd")
}

readStrem.on("data",data)
readStrem.on("end",end)
readStrem.on("error",err)
readStrem.on("finish",finish)
console.log("over")
