const fs = require("fs");
const path = require("path");

const fileName="fsasync.txt";

const filePath = path.join(__dirname , fileName);

// const write = fs.writeFile(filePath , "this is the comment", "utf-8" , (err)=>{
//     if(err)console.error(err);
//     else console.log("file has been saved");
// });

// const read = fs.readFile(filePath , "utf-8", (err , data)=>{
//     if(err) console.error(err)
//         else console.log(data)
// })


const append = fs.appendFile(filePath ,"\nupdate to it" , "utf-8", (err )=>{
    if(err) console.error(err)
        else console.log("update")
})

fs.unlink(filePath , (err )=>{
    if(err) console.error(err)
        else console.log("deleted")
})