const fs = require("fs");
const path = require("path");

const filePath = __dirname;

fs.promises
.readdir(filePath)
.then((data)=>console.log(data))
.catch((err)=>console.error(err))

const readFolder = async()=>{
    try{
     const response = await   fs.promises.readdir(filePath);
     console.log(response)
    }
    catch(error){
        console.error(error);
    }
}

readFolder();