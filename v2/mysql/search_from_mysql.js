const
  mysql = require("mysql"),
  colors = require("colors")

const config = {
  host: "localhost",
  user: "root",
  passworld: "",
  database: "testfirst"
}

let connection = mysql.createConnection(config)
connection.connect()

let sql = "SELECT * FROM test"
let sql2 = "SELECT * FROM websites"

connection.query(sql2, function(err, result){
  if(err){
    let msg = "[SELECT ERROR]: " + err.message
    return console.log(msg.red)
  }

   try {
     console.log(result.toJSON())
   } catch (e) {
     let msg = "\n" + e.message + "\n"
     console.log(msg.red)
   } finally {
     console.log("\n" + "end" + "\n")
   }

})

connection.end()
