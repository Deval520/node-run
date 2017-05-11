const
  mysql = require("mysql"),
  colors = require("colors")

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  passworld: "",
  database: "testfirst"
}

let connection = mysql.createConnection(config)
connection.connect()

let updateSql = "UPDATE websites SET name = ?, url = ? WHERE id = ?"
let updateSqlParams = ["testUpdate", "testUpdates.com.cn", 7]

connection.query(updateSql, updateSqlParams, function(err, result){
  let time = new Date()

  if(err){
      let msg = "[UPDATE ERROR]: " + time.toString() + "\n" +
                err.message + "\n"
      return console.log(msg.red)
  }

  let msg = "Time: " + time.toString()
  console.log(msg.gray)
  console.log(result)
  console.log("\n")
})
connection.end()
