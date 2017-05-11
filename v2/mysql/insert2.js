const
  mysql = require("mysql"),
  colors = require("colors")

const config = {
  host: "localhost",
  port: 3306,
  passworld: "",
  user: "root",
  database: "testfirst"
}

let connection = mysql.createConnection(config)
connection.connect()

let insertSql = "INSERT INTO websites(id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)"
let insertSqlParams =["testWebsites", "google.com.hk", "2991", "USA"]

connection.query(insertSql, insertSqlParams, function(err, result){
  let time = new Date()
  if(err){
    let msg = "Time: " + time.toString() + "\n" +
              "Error: " + err.message + "\n"
    return console.log(msg.red)
  }

  let msg = "Time: " + time.toString() + "\n" +
            result + "\n"
  console.log(msg.gray)
})

connection.end()
