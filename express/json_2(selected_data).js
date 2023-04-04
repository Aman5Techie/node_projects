const ex = require('express')
const {products} = require("./data")
const path = require("path")


// pro = products
const app = ex();
app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1><a href='/api/product'>product</a>")
})

app.get('/api/product',(req,res)=>{
    const data = products.map((pro)=>{// pro have all data
        const{id,name,image} = pro
        return {id,name,image}
    })
    // res.send("Data")
    res.json(data)
    console.log(req.url);
})
// MY MEytHOS
// app.get('/api/product/*',(req,res)=>{
//     const idd = req.url.split('/').pop()
//     const data = products.find((pro)=>pro.id == idd)
//     console.log( typeof(pro));
//     // res.send("Data")
//     res.json(data)
// })

// Teacher Method
app.get('/api/product/:ids',(req,res)=>{
    const {ids} = req.params;
    const single = products.find(
        (pro)=> pro.id == ids)
    // res.send("Data")
    if(!single){
        return res.send("Not exist")
    }
    res.json(single)
})



app.listen(1000,()=>{
    console.log("started");
})