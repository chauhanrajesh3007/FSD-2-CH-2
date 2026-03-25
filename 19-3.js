// write node js script to handle events as ask below
// 1.check the radius is negative or not if negative then display massage radius must be positive else display peremeter 
// of a circle 
// 2.check the side is negative or not if negative then display side must be positive else display perremeter of square.

const e=require("events")
const ee=new e()
 ee.on("negrad",()=>{
    console.log("radius must be positive")
 })

 ee.on("negsid",()=>{
    console.log("side must be positive")
 })

 ee.on("eval",(r,s)=>{
    if(r<0){
        ee.emit("negrad")
    }
    else{
        cr=2*3.14*r
        console.log("perimeter of circle:",cr)
    }
    if(s<0){
        ee.emit("negsid")
    }
    else{
        sr=4*s
        console.log("perimeter of squareL:",sr)
    }
 })
//  ee.emit("eval",10,5)
//  ee.emit("eval",-2,5)
 ee.emit("eval",10,-2)