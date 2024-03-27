import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

const app=express();

const port=process.env.PORT;

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on port: ${port}`);
    })
})
.catch((error)=>{
    console.log("Error connecting database",error);
})



