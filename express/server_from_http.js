const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("Server created successfukky");
    res.writeHead(200,{'content-type':'text/html'}); // Always come first write always comes after writehead
    //res.write("sssssss");
    console.log(req.url); // Give the url user requesting like /contact , /home
    if(req.url=='/home'){
        res.write("<h1>This is a home page</h1>")
    }
    if(req.url=='/contact'){
        res.write("<h1>This is a contact page</h1>")
    }

    res.write("<h1>Hello world</h1>");
    res.write("/simple.html");
    res.end("Also write here");

})

server.listen(1000)