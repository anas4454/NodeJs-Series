const crypto = require("crypto");

const hash = crypto.createHash("sha256").update("hello world").digest("hex");
const hash2 = crypto.createHash("md5")

// const password = crypto.scrypt("mypassword" , "randomSalt" , 64 , (err , derivedKey)=>{
//     if(err) throw err;

//     console.log(derivedKey.toString("hex"))
// })

// console.log(password);

const secret ="my-secret-key";
// const salt = crypto.randomBytes(16).toString("hex");
const salt = crypto.createHmac("sha256" , secret).update("hello world").digest("hex");

console.log(salt);

