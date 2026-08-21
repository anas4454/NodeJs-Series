const { log } = require("console");
const path = require("path");

console.log(__dirname);

console.log(__filename);
// console.log(__filename);

const filePath = path.join("folder", "student" ,"data.txt")

const parseData = path.parse(filePath);
const resolveData = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);


console.log({filePath , parseData , resolveData , extName , dirName , baseName});