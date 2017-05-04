const util = require("util")

//util.inherits(constructor,superConstructor)
function Person(){
  this.name = "dhsd"
  this.toString = function(){
    return this.name
  }
}

let obj = new Person()
//uitl.inspect(obj,[ishidden],) 将某个对象转成字符串
console.log(util.inspect(obj,true))

//js 基于ptototype 的面向对象编程
/*
  每一个构造函数 都有一个prototype属性指向另一个对象,这个对象的所有属性和方法都会被constructor实例继承,并且都指向同一个地址
 */
function Cat(name,color){//constructor
  this.name = name
  this.color = color
}
Cat.prototype.toString = function(){
  console.log("[name: " + this.name + "," + "color: " + this.color + "]")
}

let cat1 = new Cat("mimi","blue")
let cat2 = new Cat("miao","black")
cat1.toString()
console.log(cat1.toString == cat2.toString)//都是指向同一个内存地址 节约内存

//判断prototype对象和实例间是否继承
console.log(Cat.prototype.isPrototypeOf(cat1))
console.log(cat1.hasOwnProperty("name"))
console.log(cat1.hasOwnProperty("toString"))//继承自prototype的属性
