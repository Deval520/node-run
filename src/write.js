let fs = require("fs")

let data = "哈哈哈哈"

let writeStream = fs.createWriteStream("file/input2.txt")
writeStream.write(data,"utf-8")
writeStream.end()

const finish = () => {
  console.log("finish")
}

const err = (err) => {
  console.log(err.stack)
}

writeStream.on("finish",finish)
writeStream.on("error",err)
console.log("over")
