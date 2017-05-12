const
  url = require("url"),
  utils = require("../utils/utils"),
  loadStatic = require("../controller/loadStaticFile"),
  mysqlRouter = require("../mysql/post")

/**
 * router
 * @public
 * @param  {object} req [description]
 * @param  {object} res [description]
 * @return {null}     [description]
 */
exports.Router = function(req, res){
  let pathname = url.parse(req.url).pathname
  utils.HandleRecord(pathname, "pathname")

  switch (pathname) {
    case "" :
    case "/" :
    case "/index" :
        loadStatic.LoadIndex(req, res)
      break;
    case "/GET" :
        //GET request
      break;
    case "/POST" :
      //请求 返回 Content-Type皆为application/json
      mysqlRouter.mySqlRouter(req, res)
      break;
    default:
        loadStatic.LoadFile(req, res, pathname)
  }
}

module.exports = exports
