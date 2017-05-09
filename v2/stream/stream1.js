const
  Print = require("../print"),
  fs = require("fs")

let writeStream = fs.createWriteStream("../file/input.txt")
let readStream = fs.createReadStream("../file/input.txt")

let writeData = "hello, do you know me?"
let readData = ""

//writeData -> Buffer -> file/input.txt
writeStream.constructor.prototype.write.apply(writeStream,[writeData])
writeStream.end()  //if there is no end() will not excute finish listener

writeStream.on("finish",function(){
  Print.print("finish")
})

writeStream.on("error",function(err){
  console.error.apply(console,[err])
})

readStream.on("data",function(chunk){
  readData += chunk
  Print.print(Buffer.prototype.toString.apply(chunk,["UTF8",0,chunk.length]))
})

readStream.on("error",function(err){
  console.error.apply(console,[err])
})

readStream.on("end",function(){
  Print.print(readData)
})

//pipe -> next
