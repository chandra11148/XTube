import express from "express";
import mongoose from "mongoose";
import dotev from "dotenv";
import usersRoute from "../SERVER/routes/user.js";
import videosRoute from "../SERVER/routes/video.js";
import commentsRoute from "../SERVER/routes/comment.js";
import authRoute from "../SERVER/routes/auth.js";
import bodyParser from "body-parser";

const app = express();
dotev.config();

const PORT = 8082;
const connect = () =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to DB");
    }).catch(err=>{throw err});
}
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/videos",videosRoute);
app.use("/api/comments",commentsRoute);
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    });
})

app.listen(PORT,()=>{
    connect();
    console.log("Listening at 8082...");
})
