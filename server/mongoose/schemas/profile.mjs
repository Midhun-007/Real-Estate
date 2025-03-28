import mongoose from "mongoose";

const ProfileSchema=new mongoose.Schema({
    id:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    Username:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    Phone:{
        type:mongoose.SchemaTypes.String,
        
    },
    Email:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    Address:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    createdAt:{
        type:mongoose.SchemaTypes.Date,
        default:new Date()
    }
})
const ProfileData=new mongoose.model("ProfileData",ProfileSchema)
export default ProfileData;