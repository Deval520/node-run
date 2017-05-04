//多重继承  每一次继承constructor都会扩展
$defined = function(v){
  return v != undefined
}

const Class = function(){
  let base = {}
  for(let i=0;i<arguments.length; i++){
    var o = arguments[k].prototype
    o.constructor = arguments[k]
    //call 和apply是为了改变运行时的this
    //call(this,args1,args2,...)
    //apply(this,[arg1,arg2,...]) this为想指定运行时的上下文
    arguments[k].call(o)
    for(let key in o) base[k] = o[key]
  }

  function Klass(){
    //每个calss 都只有一个 cache
    let clso = null
    if(arguments.length <=0 && clso != null ){

    }
  }
}

// Array.prototype.push.apply(targetArr,argsArr) //this指定targetArr

//获取数组中最大值和最小值
let arr = [3251,12,4432432,1323,343]

let maxNum = Math.max.apply(Math,arr)   //指定max这个方法运行时还是挂在Math下面
console.log(maxNum)
console.log(Math.max(2,31,43))
let aa = [1,334]
console.log(Object.prototype.toString)
console.log(aa.toString())// 转成字符串了
console.log(Object.prototype.toString.call(aa))
// console.log(aa.slice())
let bb = aa.slice() //返回一个新的数组 内存地址不一样
console.log(aa == bb)
console.log(Object.prototype.toString.apply(bb))

//自定义一个console.log 前缀加上(app)
function log(){
  //arguments为伪数组 没有数组方法
  let args = Array.prototype.slice.apply(arguments)
  args.unshift("(app)")
  console.log.call(console,...args)
}

let srr = [1,23,34]
let srr2 = [2,23,34]
let srrDou = srr.slice.apply(srr2)
let srrDou2 = Array.prototype.slice.call(srr2)

log(1,23,4,"dsa")
log(srrDou)
log(srrDou2)
