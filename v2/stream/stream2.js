const
  fs = require("fs"),
  Print = require("../print")

let readStream = fs.createReadStream("../file/input.txt")
let writeStream = fs.createWriteStream("../file/output.txt")

//pipe
readStream.pipe(writeStream)

readStream.on("error",function(err){
  return console.error.bind(console)(err)
})
readStream.on("data",function(chunk){
  Print.print(Buffer.prototype.toString.apply(chunk,["UTF8",0,chunk.length]))
})
readStream.on("end",function(){
  Print.print("end")
})

writeStream.on("finish",function(){
  Print.print("finish")
})
writeStream.on("error",function(err){
  return console.error.bind(console)(err)
})

//pipe() -> next
