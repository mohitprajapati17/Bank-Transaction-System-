import { userModel} from "../model/user.model";
import { Request, Response } from "express";

/**
 * -user register  controller
 * -POST /api/auth/register
 */

export function userRegisterController(req:Request, res:Response){
    const {email,password} = req.body;

}


