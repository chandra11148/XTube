import express from "express";
import mongoose from "mongoose";
import dotev from "dotenv";
import { test } from "./controllers/user";
const app = express();
dotev.config();

const PORT = 8082;
const connect = () =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to DB");
    }).catch(err=>{throw err});
}
// app.use("/api/users",userRoute);
app.listen(PORT,()=>{
    connect();
    console.log("Listening at 8082...");
})
