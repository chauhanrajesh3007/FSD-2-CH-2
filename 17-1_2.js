var fs=require("fs")
// fs.mkdir("fsd",(err)=>{ //--> to add a folder.
//     if(err) throw err
//     console.log("folder addded successfully")
// })


// fs.rmdir("fsd",(err)=>{ //--> to delete a perticular folder if folder empty then delete
//     if(err) throw err
//     console.log("folder deleted successfully")
// })

fs.readFile("b.txt","utf-8",(err,data)=>{
    if (err) throw err 
    console.log(data)
})