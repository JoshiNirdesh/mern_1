import express from "express"
import path from "path"
const app = express();

const absPath = path.resolve("view");
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("This is the home page");
})
app.get("/login",(req,res)=>{
    res.sendFile(absPath+"/login.html")
})
app.post("/submit",(req,res)=>{
    console.log(req.body);
      res.send("Form submitted successfully");


})
app.listen(4000);
