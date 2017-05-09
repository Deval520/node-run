const fs = require("fs")
const util = require("util")

//异步读取文件 并关闭
//fs.read(fd,buffer,offset,length,position,callback)
/**
 * @fd: fs.open() 返回的文件描述符
 * @buffer: 数据需要写入的缓冲区
 * @offset: 缓冲区写入的偏移量
 * @length: 从文件中读取的字节数
 * @position: 文件读取的起始位置 null则从文件当前指针位置开始读
 * @callback: (err,bytesRead,buffer)
 */
let buf = new Buffer(1024)
fs.open("file/input.txt","r+",open)

function open(){
  let args = Array.prototype.slice.apply(arguments)
  if(args[0]) return cnsole.error(args[0])
  let fo = args[1]
  console.log(fo)  //10
  fs.read(fo,buf,0,buf.length,0,read)
}

function read(){
  if(arguments[0]) return console.error(arguments[0])
  // console.log(arguments[1])
  console.log.apply(console,[arguments[1]])

  //输出读取的字节
  if(arguments[1] > 0) console.log.apply(console,[buf.slice(0,arguments[1]).toString()])
}
