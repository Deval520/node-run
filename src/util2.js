const util = require("util")

//util.inspect(object,[showHidden],[depth],[colors])
function Book(auh,pri){
  this.author = auh
  this.price = pri
}
// Book.prototype.class = "Book"
Book.prototype.toString = function(arg){
    this.class = arg
    console.log("{author: "+ this.author + ",price: " + this.price +"}")
    // console.log(arg)
    console.log(this.class)

}

let math = new Book("aa",32)
// console.log(util.inspect(math,true))
math.toString("math")
console.log(math.author)
console.log(math.class)
console.log(math.hasOwnProperty("class")) //本地属性
console.log(math.hasOwnProperty("toString")) //prototype对象属性
let music = new Book("cc",50)
music.toString("music")
console.log(math.toString == music.toString)
console.log(math.class == music.class)

console.log(math.constructor)

console.log(music.constructor == math.constructor) //两个实例constructor都是指向同一个内存地址
console.log(math.prototype == music.prototype)     //同一个prototype对象
let obj1 = math.constructor
// obj1.constructor = math
math.call(obj1)

let obj2 = music.constructor
// obj2.constructor = music
music.call(obj2)

console.log(obj1 == obj2)
