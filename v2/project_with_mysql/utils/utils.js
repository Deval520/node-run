const colors = require("colors")

/**
 * @public
 * @param {object} [err]
 * @param {string} [type]
 * @return {null}
 */

exports.HandleError = function(err, type){
  let time = new Date()
  let msg = "-------------------------------------------" + "\n" +
            "Time: " + time.toString() + "\n" +
            err + "\n" +
            "-------------------------------------------"
  console.log(msg.red)
}

/**
 * @public
 * @param {string} [data]
 * @param {string} [type]
 * @return {null}
 */

exports.HandleRecord = function(data, type){
  let time = new Date()
  let msg = "Time: " + time.toString() + "\n" +
            type + ": " + data + "\n"
  console.log(msg.gray)
}

module.exports = exports
