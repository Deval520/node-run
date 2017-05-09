// var http = require('http');
// var url = require('url');
// var util = require('util');
//
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);
//回声server
const http = require("http")
const util = require("util")
const url = require("url")

function serve(){

  let args = Array.prototype.slice.apply(arguments)
  let req = args[0]
  let res = args[1]

  res.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"})
  res.end(util.inspect(url.parse(req.url,true)))

}

http.createServer.apply(http,[serve]).listen(9000)
console.log.call(console,...["server run at :localhost:9000"])
