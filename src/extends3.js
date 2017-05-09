const util = require("util")

//util.inherits(constructor,superConstructor)  子类只会继承父类prototype
function supe(){
  let args = Array.prototype.slice.call(arguments)
  this.name = args[0]
  this.color = args[1]
}

supe.prototype.showName = function(){
  console.log(this.name)
}

function sub(){
  let args = Array.prototype.slice.bind(arguments)()
  this.name = args[0]
  this.sex = args[2]
}
sub.prototype = new Object({
  showSex: function(){
    console.log(this.sex)
  }
})

sub.prototype.constructor = sub

util.inherits(sub,supe)

let sup1 = new supe("super","green")
let sub1 = new sub("sub","red","male")

sub.prototype.showName.call(sub1)
console.log(sub1.color)  //没有继承supe constructor中的color属性
sub1.showSex()


//util.inspect(object,[showhidden],[depth],[colors])

console.log(util.inspect(sup1))
console.log(util.inspect(sub1))
console.log(util.inspect(sup1,true,3)) //并不会调用toString()方法 不是简单的string输出

//util.isArray(obe)

console.log(util.isArray([]))
console.log(Object.prototype.toString.apply([]) == "[object Array]")
