const
  http = require("http"),
  router = require("../router/router")

const config = {
  port: 3030
}

http.createServer(router.Router).listen(config.port)
