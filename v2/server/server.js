const
  http = require("http"),
  Router = require("../Router/Router");

const config = {
  port: 2333
}

http.createServer(Router.router).listen(config.port)
