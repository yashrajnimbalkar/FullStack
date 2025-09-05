const fs = require('fs')

// fs.writeFile('hey.txt', 'my name is rahul', function(err){
//     if(err){
//         console.error("Some error in creating file")
//     }
//     else{
//         console.log("File created successfully")
//     }
// })


// fs.appendFile('hey.txt', ', Whats your name ?', function(err){
//     if(err){
//         console.error("Some error in creating file")
//     }
//     else{
//         console.log("File created successfully")
//     }
// })

// fs.rename('hey.txt', 'hello.txt', function(err){
//     if(err){
//         console.error("Some error in renaming")
//     }
//     else{
//         console.log("Renamed")
//     }
// })
// fs.copyFile('hello.txt', './copy/rahul.txt', function(err){
//     if(err){
//         console.error(err.message)
//     }
//     else{
//         console.log("copied")
//     }
// })

// fs.unlink('copy/rahul.txt', function(err){
//     if(err){
//         console.error(err.message)
//     }
//     else{
//         console.log("removed")
//     }
// })


fs.rm('./copy',{recursive:true}, function(err){
    if(err){
        console.error(err.message)
    }
    else{
        console.log("removed")
    }
})