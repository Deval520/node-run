const
  mysql = require("mysql"),
  colors = require("colors")

const config = {
  host: "localhost",
  port: 3306,
  database: "testfirst",
  user: "root",
  passworld: ""
}

let connection = mysql.createConnection(config)
connection.connect()

// let updateSql = "UPDATE websites SET name=?,country=? WHERE id=?"
// let updateSqlParams = ["test UPDATE", "CN", 6]
let updateSql = "UPDATE websites SET name=?,url=?,country=? WHERE id=?"
let updateSqlParams = ["testWebsites", "test.com", "CN", 7]
let deleteSql = "DELETE FROM websites WHERE id=?"
let deleteSqlParams = [7]

connection.query(deleteSql, deleteSqlParams, function(err, result){
  let time = new Date()
  if(err){
    let msg = "Time: " + time.toString() + "\n" +
              err.message
    return console.log(msg.red)
  }

  let msg = "Time: " + time.toString()
  console.log(msg.gray)
  console.log(result)
  console.log()
})

connection.end()
