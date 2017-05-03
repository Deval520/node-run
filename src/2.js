let events = require("events")
let eventEmitter = new events.EventEmitter()

const handle1 = () => {
  console.log("handle1")
  eventEmitter.emit("two")
}

const handle2 = () => {
  console.log("handle2")
  // eventEmitter.emit("one")
}

eventEmitter.on("one",handle1)
eventEmitter.on("two",handle2)
eventEmitter.emit("one")
