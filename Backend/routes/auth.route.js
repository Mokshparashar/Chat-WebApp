import  express, { Router }  from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import protectRoute from '../middleware/protectRoute.js';
// import User from "../Models/user.model.js";
const router = Router();


router.post("/signup",protectRoute, signup ); 

router.post("/login",protectRoute, login); 


router.post("/logout",protectRoute,logout); 

export default router;