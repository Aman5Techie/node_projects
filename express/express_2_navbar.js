const express = require('express')
const path = require('path')
const app = express();
const a = path.resolve(__dirname,'./navbar-app/index.html')
app.get('/',(req,res)=>{
   // res.send("<h1>Home page</h1>")
    // res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    res.sendFile(a)
})

app.use(express.static('./files')) // Use all files at once

app.all('*',(req,res)=>{
    res.send("<h1>Invalid page</h1>")
})


app.listen(1000,()=>{
    console.log("listeining on 1000");
})