const http = require("http")
const util = require("util")
const url = require("url")


function serve(){
  let args = Array.prototype.slice.call(arguments)
  let req = args[0]
  let res = args[1]

  res.writeHead(200,{"Content-Type": "text/plain; charset=UTF8"})

  let params = url.parse(req.url,true).query
  res.write("aa: " + params.aa)
  res.write("\n")
  res.write("bb: " + params.bb)
  res.write("\n")
  // res.write("url: " + )
  res.write(util.inspect(url.parse(req.url,true)))
  res.end()
}

http.createServer.apply(http,[serve]).listen(10000)

console.log.apply(console,["server run at 10000 port"])
