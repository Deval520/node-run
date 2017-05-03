let http = require("http")
let url = require("url")

const start = (route) => {
  const onRequest = (req,res) => {
    let pathname = url.parse(req.url).pathname
    // console.log(pathname)
    route(pathname)

    res.writeHead(200,{"Content-Type": "text/plain"})
    res.write("helloworld")
    res.end()
  }

  http.createServer(onRequest).listen(9000)
  console.log("server has started")
}

exports.start = start
// console.log(_filename)
