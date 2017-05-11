const
  path = require("path"),
  fs = require("fs"),
  utils = require("../utils/utils")

let dataStr = ""

/**
 * @private
 * @param {object} req
 * @param {object} res
 * @param {string} pathname
 * @param {string} type
 * @return {null}
 */

function readStatic(req, res, pathname, type){
  dataStr = ""
  fs.stat(pathname, function(err, stats){
    if(err){
      res.writeHead(404)
      res.write("404 NOT FOUND")
      res.end()
      return utils.HandleError(err, type)
    }

    let readStream = fs.createReadStream(pathname)
    readStream.on("data", data)
    readStream.on("error", function(err){
      res.writeHead(404)
      res.write("404 NOT FOUND")
      res.end()
      return utils.HandleError(err, type)
    })
    readStream.on("end", function(){
      res.writeHead(200)
      res.write(dataStr.toString())
      res.end()
    })
  })
}

/**
 * @private
 * @param {object} chunk
 * @return {null}
 */
function data(chunk){
  dataStr += chunk
}

/**
 * load index
 * @public
 * @param {object} req
 * @param {object} res
 * @return {null}
 */

exports.LoadIndex = function(req, res){
  let pathname = "../public/index.html"
  let filename = path.join(__dirname, pathname)
  readStatic(req, res, filename, "STATIC FILE")
}

exports.LoadFile = function(req, res, pathname){
  let pathName = "../public" + pathname
  let filename = path.join(__dirname, pathName)
  readStatic(req, res, filename, "STATIC FILE")
}

module.exports = exports
