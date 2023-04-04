const http = require('http');
const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.write("Server os created successfulyy");
    res.end();
}
if (req.url === '/home') {
    res.write("Home page is created Successfully");
    res.end();
}

})
server.listen(1000) // Go to chrome write localhost:1000