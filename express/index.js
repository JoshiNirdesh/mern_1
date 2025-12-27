import express from 'express'
import mongoose from 'mongoose';
import studentModel from './model/studentModel.js';
const app = express();

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("Connected");
})

app.get("/",async(req,res)=>{
    const studentData = await studentModel.find();
    res.send(studentData);
})

app.listen(4000);
