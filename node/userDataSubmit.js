const queryString = require("querystring");

function userDataSubmit (req,res){
    let dataBody = [];
    req.on("data",(chunk)=>{
        dataBody.push(chunk);
    })
    req.on("end",()=>{
        let rowData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rowData);
        let data = `Name : ${readableData.name} Email : ${readableData.email}`;
        console.log(data);
    })
    res.end("Data Submitted");
}
module.exports = userDataSubmit;