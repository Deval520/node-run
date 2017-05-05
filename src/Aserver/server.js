const http = require("http")
const url = require("url")
const fs = require("fs")
let buf = new Buffer(1024*1024*2)  //2M Buffer

function server(req,res){
  let pathname = url.parse.apply(url,[req.url]).pathname.substr(1)

  fs.open(pathname,"r+",function(err,fd){
    open(err,fd,res)
  })
}


function open(err,fd,res){
  if(err) {
    res.writeHead(404,{"Content-Type": "text/html"})
    res.write("404 NOT FOUND")
    res.end()
    return console.log.call(console,err)
  }
  fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err) {
      console.log.apply(console,[err])
      //404 not found
      res.writeHead(404,{"Content-Type": "text/html"})
      res.write("404: Not found")
    }else{
      //200 ok
      let data = Buffer.prototype.slice.apply(buf,[0,buf.length]).toString()
      res.writeHead(200,{"Content-Type": "text/html"})
      res.write(data)
    }
    res.end()
    fs.close(fd,function(err){
      if(err) console.log.apply(console,[err])
      console.log.apply(console,["close"])
    })
  })
}

http.createServer(server).listen(9000)

console.log.apply(console,["server run at 9000 port"])
