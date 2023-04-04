const app = require("express")()

app.get('/',(req,res)=>{
    res.send("Home Page")



})

app.listen(1000)