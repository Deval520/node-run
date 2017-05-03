let events = require("events")
let eventEmitter = new events.EventEmitter()

//addListener
function add(...args1){
  console.log(args1.length);
}
function subtraction(...args2){
  let arr = []
  for(let val in args2){
    arr.push(val * val)
  }
  return arr
}
const once = () => {
  console.log("once func")
}
const newListener = (args) => {
  console.log(args)
}


eventEmitter.addListener("one",add)
eventEmitter.on("one",subtraction)
eventEmitter.once("one",once)
// eventEmitter.newListener(newListener)
// eventEmitter.emit("three")
// eventEmitter.removeListener("two")
// eventEmitter.removeListener("one",add)
// eventEmitter.removeAllListeners("one")
eventEmitter.setMaxListeners(20)
let arr = eventEmitter.listeners("one")

let eventListeners = events.EventEmitter.listenerCount(eventEmitter,"one")
eventEmitter.emit("two",1,2,44,45)
// console.log(arr2)
// eventEmitter.emit("one",1,34,4,5,56,6)
console.log(eventListeners);
console.log(arr)
