import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email :{
        type : String,
        required : [true,"Email is required for creating user "],
        trim:true,
        lowercase:true,
        unique:[true,"Email already exists"],
        match:[ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email address" ],
    },
    name:{
        type:String,
        required:[true,"Name is required for creating user"],

    },
    password:{
        type:String,
        required:[true,"Password is required for creating user"],
        minlength:[6,"Password must be at least 6 characters long"],
        select:false,
    },
    systemUser:{
        type:Boolean
    }
})

export const User = mongoose.model("User", userSchema)