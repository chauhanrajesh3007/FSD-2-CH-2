// write node js script to handle events to write data in file,add data in the same file and read the file and display data 
// in console all the operation are the asynchronous the sequence must be contain event.

var fs=require("fs")

const e=require("events")
const ee=new e()

function fun(){
    fs.writeFile("R1.txt","Hello!!",(err)=>{
        if (err) throw err 
        console.log("writing file successfully")
        ee.emit("add")})
    }
    function fun1(){
    fs.appendFile("R1.txt"," How Are you??",(err)=>{
        if (err) throw err
        console.log("append successfully")
        ee.emit("read")})
    }

    function fun2(){
    fs.readFile("R1.txt","utf-8",(err,data)=>{
        if (err) throw err
        console.log(data)})
    }

ee.on("write",fun)
ee.on("add",fun1)
ee.on("read",fun2)

ee.emit("write")