import { userModel} from "../model/user.model";
import { Request, Response } from "express";

/**
 * -user register  controller
 * -POST /api/auth/register
 */

export async function userRegisterController(req:Request, res:Response){
    const {email,password,name} = req.body;


    const isexist = await userModel.findOne({email});
    if(isexist){
        return res.status(400).json({message:"User already exists"});
    }
    await userModel.create({email,password,name});

    return res.status(200).json({message:"User registered successfully"});



}


