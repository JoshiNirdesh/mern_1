import express from "express";
import path from "path"
const absPath = path.resolve("view")
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(absPath+"/home.html");
})
app.get("/login",(req,res)=>{
    res.sendFile(absPath+"/login.html");
})
app.get("/about",(req,res)=>{
    res.sendFile(absPath+"/about.html");
})

app.listen(3000);