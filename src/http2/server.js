const http = require("http")
const fs = require("fs")
const url = require("url")
let buf = new Buffer(1024*1024*2)  //分配一个2M的buffer区

function server(){
  let args = Array.prototype.slice.apply(arguments)

  let req = args[0]
  let res = args[1]

  let pathname = url.parse(req.url).pathname
  console.log.call(console,pathname.substr(1))
  //router
  fs.open(pathname.substr(1),"r+",open)
  function open(){
    let args = Array.prototype.slice.call(arguments)
    let err = args[0]
    let fd = args[1]

    if(err) return console.log(err)

    fs.read(fd,buf,0,buf.length,0,function(){
      let err = arguments[0]
      let bytes = arguments[1]

      if(err){
        res.writeHead(404,{"Content-Type": "text/html"})
        res.write(404)
        res.end()
      }else{
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(buf.slice.apply(buf,[0,bytes]).toString())
        res.end()
      }

    })
  }

}

http.createServer.call(http,server).listen(9000)
console.log.apply(console,["server run at localhost:9000"])
