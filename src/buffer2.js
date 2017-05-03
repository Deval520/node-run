// let buffer1 = new Buffer()
// len = buffer1.write("www.runoob.com");
// debugger
// let buffer2 = new Buffer()
// buffer2.write("百度","utf8")
// let buffer3 = Buffer.concat([buffer1,buffer2])
// console.log(buffer3.toString())
// let buffer1 = new Buffer("www")
// let buffer2 = new Buffer(".baidu.com")
// let buffer3 = Buffer.concat([buffer1,buffer2])
// console.log(buffer3.toString())

let buffer1 = new Buffer(10)
let buffer2 = new Buffer(10)
buffer1.write("www")
buffer2.write(".baidu.com")
let buffer3 = Buffer.concat([buffer1,buffer2])
console.log(buffer3.toString())
console.log(buffer3.toJSON())
