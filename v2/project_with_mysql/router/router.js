const
  url = require("url"),
  utils = require("../utils/utils"),
  loadStatic = require("../controller/loadStaticFile")

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
        //POST request post(req, res)
      break;
    default:
        loadStatic.LoadFile(req, res, pathname)
  }
}

module.exports = exports
