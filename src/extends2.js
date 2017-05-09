function defined(v){
  return v != undefined
}

function Class(){
  //prototype obj
  let base = {}
  //arguments[] object
  for(let i=0; i<arguments.length; i++){
    //保持每一个对象的constructor 纯净不被污染
    let o = arguments[i].prototype
    o.constructor = arguments[i]

  }
}


//constructor prototype
function Person(){
  this.name = arguments[0]
  return 1  //只是单纯的函数返回
}
// Person.prototype = {
//   getName: function(){
//     console.log(this.name)
//   }
// }

Person.prototype = new Object({  //Person.prototype.constructor = Object
  getName: function(){
    console.log(this.name)
  }
})

// Person.prototype.constructor = Person
// Person.prototype.constructor.call(Person)
Person.prototype.constructor = Person

let p = new Person("dsad")
// p.call()
p.getName()
// console.log(Person(1))

console.log(p.constructor === Person)  //true
console.log(Person.constructor === Person)  //false   构造函数自身的constructor 为 Function
console.log(Person.constructor === Function)  //true
console.log(Person.prototype.constructor === Person)  //true
console.log(p.constructor.prototype.constructor === Person)  //true
console.log(p.constructor === Object)
console.log(Person.prototype.constructor === Object)
console.log(Object.constructor.prototype)
// console.log(p.prototype)
// console.log(p.constructor.prototype.constructor == Person.prototype.constructor == Person)

//print
function print(){
  let args = Array.prototype.slice.call(arguments)
  args.unshift("Test")
  console.log.apply(console,args)
}

function Cat(){   //{}
  let args = Array.prototype.slice.apply(arguments)  //[].slice.apply()  ||  [1,23,4].call()
  args.push("Cat")
  this.name = args[0]
  this.color = args[1]
}
Cat.prototype = new Object({
  getName: function(){
    print(this.name)
  },
  getColor: function(){
    print(this.color)
  }
})
// console.log(Cat.prototype.constructor)
Cat.prototype.constructor = Cat
// console.log(Cat.prototype.constructor)

function Fish(){
  let args = Array.prototype.slice.call(arguments)
  args.push("Fish")
  this.age = args[0]
  this.weight = args[1]
  this.name = args[2]
}
Fish.prototype = new Object({
  getAge: function(){
    print(this.age)
  },
  getWeight: function(){
    print(this.weight)
  },
  getName: function(){
    print(this.name)
  }
})
Fish.prototype.constructor = Fish

let cat = new Cat("cat","green")
cat.getName()
let fish = new Fish(1,10,"fish")
fish.getName()
fish.getName.call(cat)

function Student(){
  let args = Array.prototype.slice.call(arguments)
  this.name = args[0]
  this.class = args[1]
}

Student.prototype = new Object({
  getName: function(){
    console.log(this.name)
  }
})

Student.prototype.constructor = Student

// Student.prototype.constructor = Student
// console.log(Student.prototype.constructor)
let std = new Student("deval","vocal")
for(let attr in std){
  print(std[attr])
}
console.log(std)
// console.log(std.getName())
std.getName()
Student.prototype.getName.apply(std)
Student.prototype.getName.bind(std)()
std.getName.apply(std)

// console.log(Object.prototype.toString.call(std))

//check is Array
console.log(Object.prototype.toString.call([]) == "[object Array]")
console.log(Object.prototype.toString.call({}))
console.log({}.toString())
console.log(Object.prototype.toString.call(function(){}));
// console.log(Function.prototype.toString.call({}))
console.log(function(){return 1}.toString());
console.log(Function.prototype)
console.log(Student.prototype)
console.log(Function)
console.log(Object.prototype == new Object({}))
