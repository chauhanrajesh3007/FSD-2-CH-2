//write a node js script to write text "you are creating a file" to help.txt file after that add data "new" to the sem file after that read 
//the data from file and print the consol after finishing read opration print thank you in console write append read all must be maintain all
//the opration are the asynchronous.

var fs=require("fs")

fs.writeFile("help.txt","You are creating a file",(err)=>{
    if (err) throw err 
    console.log("writing file successfully")


fs.appendFile("help.txt","new",(err)=>{
    if (err) throw err
    console.log("append successfully")



fs.readFile("help.txt","utf-8",(err,data)=>{
    if (err) throw err
    console.log(data)
    console.log("Thank you")
}) }) })

