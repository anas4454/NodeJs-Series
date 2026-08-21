const http = require("http")

const server = http.createServer((req , res) =>{
    if(req.url === "/"){
        res.write("I am Muhammad Anas")
        res.end();
    }


    if(req.url === "/me"){
        res.write("I am Muhammad Anas , I lived in bahawalpur")
        res.end();
    }
})




const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})

