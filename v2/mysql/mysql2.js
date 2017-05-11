const
  mysql = require("mysql"),
  colors = require("colors")

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  passworld: "",
  port: "3306",
  database: "testfirst"
})

connection.connect()

let addSql = "INSERT INTO test(Id,msg) VALUES(0,?)"
let data = ["test insert"]
// let addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)'
// let data = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN']

connection.query(addSql, data, function(err, result){
  if(err){
    let msg = "[INSERT ERROR]: " + err
    return console.log(msg.red)
  }

  console.log(result)
})

connection.end()
