const a = require("events")
const emitter = new a();
emitter.on("response",()=>{
    console.log("Data recived");
})
emitter.emit("response")
emitter.on("res",()=>{
    console.log("${a}");
})
const aa = "68748"
console.log("hello , ${aa}");
console.log(`hello , ${aa}`);