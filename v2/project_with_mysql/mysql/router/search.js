const
  mysql = require("mysql"),
  utils = require("../../utils/utils"),
  Config = require("../config")


/**
 * @public
 * @param  {[type]} reqJSON [description]
 * @param  {[type]} req     [description]
 * @param  {[type]} res     [description]
 * @param  {[type]} type    [description]
 * @return {[type]}         [description]
 */
exports.search = function (reqJSON, req, res, type){
  let result_JSON = {
    status: 10001,
    message: null,
    result: []
  }
  if(!reqJSON.keyWorlds){
    return HandleNullKeyWorlds(req, res, result_JSON, type)
  }
  sqlConnect(req, res, reqJSON, result_JSON, type)
}

/**
 * database 请求
 * @private
 * @param {object} req
 * @param {object} res
 * @param {object} reqJSON
 * @param {object} result_JSON
 * @param {string} type
 * @return {null}
 */

function sqlConnect(req, res, reqJSON, result_JSON, type){

  let resultArr = []
  const connection = mysql.createConnection(Config.config)
  connection.connect()
  let selectSql = "SELECT * FROM testTwo"
  connection.query(selectSql, function(err, result){
    connection.end()
    if(err){
      res.writeHead(400, {"Content-Type": "application/json"})
      res.write(err.message)
      utils.HandleError(HandleError, type)
      return res.end()
    }

    //数据过滤

    for(let i=0; i<result.length; i++){
      if(result[i].keyWorlds == reqJSON.keyWorlds){
        resultArr.push(result[i])
      }
    }
    resultArr = resultArr
    result_JSON.status = 10000
    result_JSON.result = resultArr
    result_JSON.message = null
    res.writeHead(200, {"Content-Type": "application/json"})
    res.write(JSON.stringify(result_JSON))
    res.end()
  })
}


/**
 * keyWorlds 为空
 * @private
 * @param {object} req
 * @param {object} res
 * @param {object} resultJSON
 * @param {string} type
 * @return {null}
 */

function HandleNullKeyWorlds(req, res, resultJSON, type){
  res.writeHead(200, {"Content-Type": "application/json"})
  resultJSON.message = type
  res.write(JSON.stringify(resultJSON))
  res.end()
}

module.exports = exports
