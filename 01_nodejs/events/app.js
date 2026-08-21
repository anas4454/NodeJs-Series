const EventEmitter = require("events");

const emitter =new EventEmitter()

// emitter.on("greet" ,()=>{
//     console.log(`hello Anas`)
// } )

// emitter.emit("greet");

emitter.on("greet",(username , pro) =>{
    console.log(`hello ${username} ${pro}`)
})

emitter.emit("greet" , "Anas Ali" , "Software Engineer")