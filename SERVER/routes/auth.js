import express from "express";
import  { test }  from "../controllers/user.js";
import { signup } from "../controllers/auth.js";

const route = express.Router();

//CREATE USER
route.post("/signup",signup);
//SIGN IN
route.post("/signin",);
//GOOGLE AUTH
route.post("/google",);


export default route;