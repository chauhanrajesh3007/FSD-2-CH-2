// write a node js script to create two listnbers for a common event print no of event associated with end a amitter
// remove one of the listner and call remaining listner again also print no of remaining listner.
const e=require("events")
const ee=new e()

function fun(){
    console.log("Hii!!")
}
function fun1(){
    console.log("How Are You??")
}
ee.on("start",fun)
ee.on("start",fun1)
ee.emit("start")
var c=ee.listenerCount("start")
console.log(c)

ee.removeListener("start",fun)
var c=ee.listenerCount("start")
console.log(c)
ee.emit("start")

