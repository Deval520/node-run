let fs = require("fs")

//stream
let readStream = fs.createReadStream("file/input.txt") //创建一个可读stream流
let writeStream = fs.createWriteStream("file/output.txt")//可写stream流
