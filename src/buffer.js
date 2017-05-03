let buf = new Buffer(5)
// let len = buf.write("www.baidu.com",0,3,"utf8")z
for(let i=0;i<5;i++){
  buf[i] = i + 97
}
// console.log(len)
// let buf2 = new Buffer()
// let len2 = buf2.write([0,1,2,3,4,5,6])
let buf2 = new Buffer([0,1,2,3])
// console.log(buf2.toString())
console.log(buf.toString("ascii"))
console.log(buf.toJSON(buf))
let buf3 = new Buffer("www.baidu.com")
console.log(buf3.toString("utf8"))
console.log(buf3.toJSON())

// let buf3 = new Buffer(20)
