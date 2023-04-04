const app = require('express')()

const middleware =(req,res,next)=>{
    console.log(req.method,req.url);
    next()

}

const middleware_2 = (req,res,next)=>{
    console.log("Middle ware 2 suc==='johncessfull");
    next()
}

const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user==='aman'){
        req.user = {name : "aman",net_worth : 99999999999999999}
        next()
    }
    else{
        res.status(401).send("Not authorisze")
    }

}



// app.use(middleware) // Use middleware in all
app.use([middleware,middleware_2,authorize]) // Use 2 middleware toghter I>E exectued in the order
// app.use("/about",middleware) // Use middleware only urls after /about


app.get('/',middleware,(req,res)=>{
    res.send("<h1>Home Page</h1> ")
})
app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1> ")
})



app.listen(1000,()=>{
    console.log("Listeing on port 1000");
})