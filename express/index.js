import express from "express";
import userData from "./users.json" with { type: "json" };

const app = express();

app.get("/", (req, res) => {
    res.send(userData)  
});
app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id)
    let filterData = userData.filter((user)=>user.id===id);
    res.send(filterData);
})

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
