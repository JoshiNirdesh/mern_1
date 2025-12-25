import express from "express";
const app = express();

function checkAgeRouteMiddleware(req,res,next){
    if(!req.query.age || req.query.age<18){
        res.send("You are not allowed");
    }
    else{
        next();
    }
}

app.get("/",(req,res)=>{
    res.send("This is the home page");
})
app.get("/login",(req,res)=>{
    res.send("This is the login page");
})
app.get("/users",checkAgeRouteMiddleware,(req,res)=>{
    res.send("This is the user page")
})
app.get("/product",checkAgeRouteMiddleware,(req,res)=>{
    res.send("This is the product page");
})
app.listen(3000);