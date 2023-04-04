const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1> Home page </h1>")
    // res.write("page")
    // res.end()
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page </h1>")
})
// For any other about and home
app.all("*",(req,res)=>{
    res.send("<H1> NOT FOUND </H1>").status(404)
})

//  methods are get, post, put, delete, all, use, listen
app.listen(1000,()=>{
    console.log("Port listening on 5000");
})