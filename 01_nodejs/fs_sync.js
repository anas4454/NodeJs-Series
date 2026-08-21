const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname , fileName)

// const store = fs.writeFileSync(filePath , "this is the comment updates" , "utf-8");

// console.log(store);

// const readFile =fs.readFileSync(filePath , "utf-8")

// console.log(readFile)

const appendFile = fs.appendFileSync(filePath , "This is the initial Data" , "utf-8")
console.log(appendFile)

const fileDelete = fs.unlinkSync(filePath);

console.log(fileDelete);
