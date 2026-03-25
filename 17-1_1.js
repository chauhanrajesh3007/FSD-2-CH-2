var fs=require("fs")
fs.rename("a.txt","b.txt",(err)=>{
    if (err) throw err 
    console.log("renamed successfully")
})

//fs.unlink(filename,cb)
fs.unlink("b.txt",(err)=>{
    if (err) throw err 
    console.log("deleted successfully")
})
