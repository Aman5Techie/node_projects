const { products } = require('./data')

const app = require('express')()

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get("/info/q",(req,res)=>{ // written as /info/q?parameters eg id = 5 & name = ll
    const {search,range} = req.query;
    let pro = [...products]
    if(search){
          pro= pro.filter((proo)=>{
            return proo.name.startsWith(search)
        })
    }
    if(range){
        pro = pro.slice(0,Number(range))
    } 
    if(pro.length < 1){
        return res.status(404).send("No info found")
    }
    console.log(req.query,search,range);
    res.send(pro)

})


app.listen(1000)
// pro = [...products]
// console.log(pro);
