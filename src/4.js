let events = require("events")
let eventEmitter = new events.EventEmitter()

const handle1 = (arg1,arg2) => {
  let sum = arg1 + arg2
  console.log(sum);
}
const handle2 = (arg1,arg2) => {
  let p = arg1 * arg2
  console.log(p);
}
const error = () => {
  console.log("broken")
}

// eventEmitter.once("done",handle1) //单次监听
// eventEmitter.emit("done",1,2)
eventEmitter.addListener("to", handle2)
// eventEmitter.on("error",error)
eventEmitter.on("to", handle1)
// eventEmitter.on("error",error)
// eventEmitter.emit("error")
// eventEmitter.emit("to",2,3)
console.log(events.EventEmitter.listenerCount(eventEmitter,"to"));
