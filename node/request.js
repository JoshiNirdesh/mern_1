const http = require('http');

http.createServer((req,res)=>{
    if(req.url == "/"){
        res.write("This is a home page");
        res.end();
    }
    else if (req.url == "/about"){
        res.write("This is a about page");
        res.end();
    }
    else{
        res.write("Other pages");
        res.end();
    }
    res.end();
}).listen(1200);