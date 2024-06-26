import { type } from "express/lib/response";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
},
{timestamps:true})
// for time of creation and time of edit

const User=mongoose.model('User',userSchema)
export default User;