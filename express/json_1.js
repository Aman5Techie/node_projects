const express = require('express')
const app = express()
const {products} = require("./data")
// const a = require('./data')
// console.log(typeof(a));

app.get('/',(req,res)=>{
    // res.json([{name:"Aman"},{name:"html"}])
    // res.json({"name":"aman","class":"btech"})
    // res.json([{name:"Aman"},{name:"html"}])
    res.json(products)
})


app.listen(1000,()=>{
    console.log("listening in 1000");
})