import { userModel} from "../model/user.model.ts";
// import { Request, Response } from "express";
import jwt from "jsonwebtoken";



/**
 * -user register  controller
 * -POST /api/auth/register
 */

export async function userRegisterController(req:any, res:any){
    const {email,password,name} = req.body;

    const isexist = await userModel.findOne({email});
    if(isexist){
        return res.status(402).json({message:"User already exists",status:"failed"});
    }
    const user=await userModel.create({email,password,name});

    const token =jwt.sign({userId:user._id},process.env.JWT_SECRET!,{expiresIn:"1d"});

    res.cookie("token",token);
    res.status(201).json({
        user:{
            id:user._id,
            email:user.email,
            name:user.name
        }
    })

    return res.status(200).json({message:"User registered successfully",status:"success",user,token});

}


