
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { login } from "../controllers/login.controller.js";


const userRouter = Router();

// User authentication routes
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(login);

export {userRouter}