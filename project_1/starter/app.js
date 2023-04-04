console.log('Task Manager App')
const app = require("express")()
const router = require('./router/tasks')

app.get('/',(req,res)=>{
    res.send("HOme page")
})

app.use("/api/v1",router)


app.listen(1000,()=>{
    console.log("Server Started Successfully on 1000");
})