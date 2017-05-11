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

let addSql = "INSERT INTO test(id, msg) VALUES(0,?)"
let addSqlParams = ["test INSERT"]
connection.query(addSql, addSqlParams, function(err, result){
  if(err){
    let time = new Date()
    let msg = "Time: " + time.toString() + "\n" +
              "INSERT ERROR: " + err.message + "\n"
    return console.log(msg.red)
  }

  let time = new Date()
  let msg = "Time: " + time.toString() + "\n" +
            "Result: " + result + "\n"
  console.log(msg.gray)
})

connection.end()
