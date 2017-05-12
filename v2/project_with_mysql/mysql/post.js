const
    utils = require("../utils/utils"),
    searchSql = require("./router/search"),
    querystring = require("querystring")

/**
 * mysql 路由 通过action 不同进行不同的处理
 * @public
 * @param {object} req
 * @param {object} res
 * @return {null}
 */

exports.mySqlRouter = function(req, res){
    //处理req Content-Type: application/json 节省带宽
    // utils.HandleRecord(req.headers['content-type'], "Content-Type")

    let post = ""
    req.on("data", function(chunk){
      post += chunk
    })
    req.on("end", function(){
      utils.HandleRecord(post, "request")
      // let reqJSON = querystring.parse(post, "&", "=")
      let reqJSON = JSON.parse(post)
      let action = reqJSON.action

      switch (action) {
        case 3000:
          searchSql.search(reqJSON, req, res, "SELECT search")
          break;
        default:

      }
    })
}

module.exports = exports
