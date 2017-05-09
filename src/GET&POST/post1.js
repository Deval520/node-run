const http = require("http")
const querystring = require("querystring")
const util = require("util")

//回声服务
function server(){
  let args = Array.prototype.slice.apply(arguments)
  let req = args[0]
  let res = args[1]

  let post = ""
  req.on("data",reqdata)
  req.on("end",reqend)

  function reqdata(chunk){
    post += chunk
  }

  function reqend(){
    // console.log(post)
    post = querystring.parse(post)
    res.end(util.inspect(post))
  }
}

http.createServer.apply(http,[server]).listen(9000)
