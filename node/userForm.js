const fs = require("fs");
function userForm (req,res){
    fs.readFile("../html/form.html","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"});
            res.write("Internal Server")
            res.end();
        }
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        res.end();
    })
}
module.exports = userForm;