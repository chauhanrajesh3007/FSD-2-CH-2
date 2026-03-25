//Event Module (5-Marks)
// -->to use an event module:
// e=require("events")
// ee=new e()

//-->to create an event & bind with handler:
//ee.on(eventname,handler)

const e=require("events")
const ee=new e()
// function fun(a,b){
//     console.log("Hello "+a+b)
// }
// ee.on("start",fun)
// ee.emit("start",20,26)

// ee.on("start",(a,b)=>{
//     console.log("Hello "+a+b)
// })
// ee.emit("start",10,20)

// ee.emit("start")
// ee.on("start",()=>{
//     console.log("Hello ")
// })


// function fun(){
//     console.log("Hello")
//     }
// ee.addListener("start",fun)
// ee.emit("start")

// function fun(){
//     console.log("Hello")
//     }
//     function fun1(){
//         console.log("Hello1")
//     }
// ee.addListener("start",fun)
// ee.on("start",fun1)
// ee.emit("start")

//-->to remove/unbind a listner:
// ee.removeListener(eventname,listner)
// function fun(){
//     console.log("Hello")
//     }
//     function fun1(){
//         console.log("Hello1")
//     }
// ee.addListener("start",fun)
// ee.on("start",fun1)
// ee.removeListener("start",fun)
// ee.emit("start")

//-->to remove all listner/to delete a event:
// ee.removeAllListeners(eventname)

// function fun(){
//     console.log("Hello")
//     }
//     function fun1(){
//         console.log("Hello1")
//     }
// ee.addListener("start",fun)
// ee.on("start",fun1)
// ee.removeAllListeners("start")
// ee.emit("start")

//-->to count no of listners bind with event:
// ee.listenerCount(event)

function fun(){
    console.log("Hello")
    }
    function fun1(){
        console.log("Hello1")
    }
ee.addListener("start",fun)
ee.on("start",fun1)
var c=ee.listenerCount("start")
console.log(c)
ee.emit("start")

