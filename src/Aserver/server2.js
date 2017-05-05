const
  fs = require("fs"),
  url = require("url"),
  path = require("path"),
  http = require("http")

const root = path.resolve(process.argv[2] || ".")

function server(req,res){
  let pathname = url.parse(req.url).pathname
  let filepath = path.join(root,pathname)

  //file stats
  fs.stat(filepath,function(err,stats){
    stat(err,stats,res,filepath)
  })
}

function stat(err,stats,res,filepath){
  //err message 404 NOTFOUND
  if(err || !stats.isFile()){
    console.error(err)
    res.writeHead(404,{"Content-Type": "text/html"})
    res.write("404 NOT FOUND!")
    return res.end()
  }

  res.writeHead(200,{"Content-Type": "text/html"})
  fs.createReadStream(filepath).pipe(res)
}

http.createServer.apply(http,[server]).listen(9000)

console.log.apply(console,["server run at port 9000"])
