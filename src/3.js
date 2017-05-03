let events = require("events")
let eventEmitter = new events.EventEmitter()

const handle1 = (arg1,arg2) => {
  console.log(arg1,arg2)
}

const handle2 = (arg1,arg2) => {
  console.log(arg1);
}

eventEmitter.on("handle", handle1)
eventEmitter.on("handle",handle2)

eventEmitter.emit("handle",1,2)
eventEmitter.emit("handle",3,4)
console.log(eventEmitter.listeners("handle"))
