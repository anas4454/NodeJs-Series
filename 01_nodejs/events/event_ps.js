const EventEmitter = require("events");

const emitter = new EventEmitter()

const eventCounts = {
    "user-login" : 0,
    "user-purchase" : 0,
    "profile-update" : 0,
    "user-logout" : 0,
}


emitter.on("user-login" , (username)=>{
     eventCounts["user-login"]++;
    console.log(`${username} logged In `)
})
emitter.on("user-purchase" , (username , dev)=>{
     eventCounts["user-purchase"]++;
    console.log(`${username} purchase ${dev} `)
})
emitter.on("profile-update" , (username , email)=>{
    eventCounts["profile-update"]++;
    console.log(`${username} update ${email} `)
})
emitter.on("user-logout" , (username)=>{
    eventCounts["user-logout"]++;
    console.log(`${username} logged out `)
})

emitter.on("summary" , ()=>{
    console.log(eventCounts);
})


emitter.emit("user-login" , "Anas")
emitter.emit("user-purchase" , "Anas" , "Mobile")
emitter.emit("profile-update" , "Anas" ,"email")
emitter.emit("user-logout" , "Anas")

emitter.emit("summary")
