const http = require ("http");
const fs = require("fs");
const queryString = require("querystring");

http.createServer((req,res)=>{
    fs.readFile("../html/form.html","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"});
            res.write("Internal Server Error");
            res.end();
        }
        if(req.url=="/"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        }
        else if (req.url=="/submit"){
            let dataBody = [];
            req.on("data",(chunk)=>{
                dataBody.push(chunk);
            })
            req.on("end",()=>{
                let rowData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rowData);
                res.writeHead(200,{"content-type":"text/html"});
            res.write(`<h2>Data Submitted</h2>
                    Name : <p>${readableData.name}</p>
                `)
                            res.end();

            })
            
        }
        
    })
}).listen(4000);