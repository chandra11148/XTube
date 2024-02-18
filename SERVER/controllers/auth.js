import mongoose from "mongoose";
import YoutubeUser from "../models/YoutubeUser.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res,next)=>{
    
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new YoutubeUser({...req.body,password:hash});
        await newUser.save();
        res.status(200).send("user created");
    }catch(err){
        next(err);
    }
}