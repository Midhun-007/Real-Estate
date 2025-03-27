import mongoose from "mongoose";

const SignupSchema=new mongoose.Schema({
    Username:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    Labelname:{
        type:mongoose.SchemaTypes.String,
        
    },
    Password:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    createdAt:{
        type:mongoose.SchemaTypes.Date,
        default:new Date()
    }
})
const SignupData=new mongoose.model("SignupData",SignupSchema)
export default SignupData;