const http = require('http');
const fs = require('fs');

const fun = (req,res)=>{
    // res.writeHead(200,{content-type})
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('simple.html',null,(err,data)=>{
        res.write(data)
        res.end()
    })
}
http.createServer(fun).listen(1000)
// ANOTHER METHOD EASY ONE
const http = require('http');
const fs = require('fs');

const funn = (req,res)=>{
    // res.writeHead(200,{content-type})
    res.writeHead(200,{'content-type':'text/html'});
    const data = fs.readFileSync('simple.html',"utf-8")
    res.write(data)
    res.end()
}
http.createServer(funn).listen(8000)