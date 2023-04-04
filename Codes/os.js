const os = require("os");
const a = {
    "Userinfo":os.userInfo(),
    "Up time":os.uptime(),
    "Type":os.type(),
    "Total Memory":os.totalmem(),
    "Free Memory":os.freemem()
}
console.log(a);