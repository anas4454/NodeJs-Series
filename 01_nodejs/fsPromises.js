const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname;

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// fs.promises.readFile(filePath ,"utf-8")
// .then((data) =>console.log(data))
// .catch((err)=>console.error(err))



// fs.promises.appendFile(filePath ,"/nTHis is second data added","utf-8")
// .then(console.log("file update successfully"))
// .catch((err)=>console.error(err))


fs.promises.unlink(filePath )
.then(console.log("file delete successfully"))
.catch((err)=>console.error(err))
