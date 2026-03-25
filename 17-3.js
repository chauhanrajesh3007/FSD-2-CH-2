//write node js to create a folder named "node" create one file name "write.txt" having data hello append some data to the same file read the
//data in file and display in console rename the file with write1.txt after that delete the folder node

var fs=require("fs")

// fs.mkdirSync("node")
// fs.writeFileSync("node/write.txt","Hello")
// fs.appendFileSync("node/write.txt","Hello World")
// var data=fs.readFileSync("node/write.txt")
// console.log(data.toString())
// fs.renameSync("node/write.txt","node/write1.txt")
fs.unlinkSync("node/write1.txt")
fs.rmdirSync("node")