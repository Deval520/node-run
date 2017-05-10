const
  http = require("http"),
  Router = require("../router/router")

const config = {
  port: 9090
}

http.createServer(Router.router).listen(config.port)
