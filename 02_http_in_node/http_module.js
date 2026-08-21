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

    if(req.url === "/contact"){
        res.write("I am Muhammad Anas , I lived in bahawalpur , constact us for more info")
        res.end();
    }
})




const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})

