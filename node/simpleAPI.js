const http = require("http");

const users = [
    {
        name:"Ram",
        email : "ram@gmail.com",
        age : 18
    },
    {
        name:"shyam",
        email : "shyam@gmail.com",
        age : 14
    },
    {
        name:"hari",
        email : "hari@gmail.com",
        age : 15
    }
]

http.createServer((req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
}).listen(1700);