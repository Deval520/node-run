const Print = require("../print")

//init
let buf = new Buffer(1024*1024) //2KB buffer will
let buf1 = new Buffer("asdf","utf-8")
let buf2 = new Buffer([1,2,344])

// Print.print(buf2.toJSON().data)
// Print.print(buf1.toString())

//write(string,[offset],[length],[encoding])
/**
 * @string:
 * @offset:
 * @length:
 * @encoding:
 */

let strBuf = new Buffer(1024*1024) //1kb
let str = "hello,Wrold你好"
let len = Buffer.prototype.write.apply(strBuf,[str,0,strBuf.length,"ascii"])  //return bytes
Print.print(Buffer.prototype.slice.apply(strBuf,[0,strBuf.length]).toString())
// Print.print(strBuf.length)
Print.print(len)

//toString([encoding],[start],[end])
/**
 * @encoding:
 * @start:
 * @end:
 */

let bufChar = new Buffer(26) //save a to z
for(let i=0; i<26; i++){
  bufChar[i] = i + 97
}
Print.print(bufChar.toString("base64"))

//toJSON(buffer)
let json = Buffer.prototype.toJSON.apply(bufChar,[bufChar]) //return json
Print.print(json)  //{type: "json", data: [97-122]}

//class method concat(list)
let newBuf = Buffer.concat([strBuf,bufChar])
Print.print(newBuf.toString("utf-8")) //return newBuffer

//copy(target[,targetStart][,sourceStart][,sourceEnd])
//        version1
let sourceBuf = new Buffer(",wrold")
let targetBuf = new Buffer("hello")
let bf = new Buffer(1024)
let nbf = Buffer.concat([sourceBuf,targetBuf])
Buffer.prototype.copy.apply(nbf,[bf,0])
Print.print(Buffer.prototype.toString.apply(bf,["utf-8",0,nbf.length]))
//        version2
let sourcebuf = new Buffer("abc")
let targetbuf = new Buffer("def")
Buffer.prototype.copy.apply(sourcebuf,[targetbuf,1,0,sourcebuf.length])
Print.print(Buffer.prototype.toString.apply(targetbuf,[]))  //dab only copy max bytes

//slice([start][,end])
let slibuf1 = new Buffer(1024)
// let slibuf2 = new Buffer(1024)
Buffer.prototype.write.apply(slibuf1,["abc",0,3,"utf-8"])
// Buffer.prototype.write.call(slibuf2,"def",0,3,"utf-8")
let newslicebf = Buffer.prototype.slice.call(slibuf1,0,2)  //return a new buffer field but &newbuffer === &oldbuffer
Print.print(Buffer.prototype.toString.apply(newslicebf,[]))
//check if the &newbuffer is the same as the &oldbuffer
newslicebf[1] = 97+26-1
Print.print(Buffer.prototype.toString.apply(newslicebf,[0]))
Print.print(Buffer.prototype.toString.apply(slibuf1.slice.call(slibuf1,0,3),[0])) //azc true
