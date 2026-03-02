import Router from "express";
import { userRegisterController } from "../controllers/authcontroller.ts";

const authrouter = Router();

authrouter.post("/register", userRegisterController);


export default authrouter;