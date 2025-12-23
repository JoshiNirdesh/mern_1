const http = require("http");

http.createServer((req,res)=>{
    res.write("<h1>Hello Nirdes </h1>");
    res.end("Hello");
}).listen(4800);