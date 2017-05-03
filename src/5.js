let events = require("events")
let eventEmitter = new events.EventEmitter()

function handle1(args1, args2){
  let sum = args1 + args2
  console.log(sum);
}

function handle2(args1,args2){
  let od = args1 * args2
  console.log(od);
}

eventEmitter.on("doOne",handle1)
eventEmitter.on("doOne",handle2)
eventEmitter.on("doTwo",handle2)

eventEmitter.emit("doOne",1,2)
