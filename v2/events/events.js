const
  events = require("events"),
  eventEmitter = new events.EventEmitter(),
  Print = require("../print")

function handle1(args1,args2){
  Print.print(args1,args2)
}

function handle2(args1,args2){
  Print.print("sum is",args1+args2)
}

/*
  on
 */
eventEmitter.on("handle",handle1)
eventEmitter.on("handle",handle2)

eventEmitter.emit("handle",2,3)

//addListeners(event,listener)
const eventEmitter2 = new events.EventEmitter()
// eventEmitter2.addListener("handle",handle1)
eventEmitter2.addListener("handle",handle2)
eventEmitter2.emit("handle",4,4)

//once(event,listener)

eventEmitter2.once("once",handle2)
eventEmitter2.emit("once",5,5)
eventEmitter2.emit("once",3,3)  //only execute once once and no throw error

//removeListener(event,listener)
eventEmitter2.removeListener("handle",handle2)
eventEmitter2.emit("handle",10,10)  //will not excute handle2 listener and no throw error

//listeners(event)
Print.print(eventEmitter2.listeners("handle"))  //empty []
Print.print(eventEmitter.listeners("handle")) //[[Function: handle1],[Function: handle2]]

//class method:listenerCount(emitter,event)
Print.print(events.EventEmitter.listenerCount(eventEmitter2,"handle")) //zero
Print.print(events.EventEmitter.listenerCount(eventEmitter,"handle"))  //2


//error
//
//summary
/*
  多数时候并不会直接使用new events.EventEmitter的实例
  node 很多模块中 fs net http 是EventEmitter的子类并on了很多event
  所以直接使用即可
 */
