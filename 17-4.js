//Path Module
//1.basename() --> path extension
//2.dirname()--> path of file(folder)
//3.extname() -->extension 
//4.parse() -->object of folder

var pm=require("path")
var a="D:/LJ/abc.html"
console.log(pm.basename(a))
console.log(pm.dirname(a))
console.log(pm.extname(a))
console.log(pm.parse(a))
var fs=require("fs")
fs.mkdirSync(pm.dirname(a))
if (pm.extname(a) == ".txt"){
    fs.writeFileSync(a,"This is text File")
}
else{
    fs.writeFileSync(a,'<h1 style="color:blue> this is html file </h1>')
}