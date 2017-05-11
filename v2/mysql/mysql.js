const
  mysql = require("mysql"),
  colors = require("colors")


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testfirst"
})

connection.connect()

let sql = "SELECT * FROM websites"

connection.query(sql, function(err, result){
  if(err){
    let msg = "[SELECT ERROR]: " + err.message
    console.log(msg.red)
    return
  }

  console.log(result)
})

connection.end()
