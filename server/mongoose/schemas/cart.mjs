import mongoose from "mongoose";

const CartSchema=new mongoose.Schema({
    id:{
        type:mongoose.SchemaTypes.String
    },
    title:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    price:{
        type:mongoose.SchemaTypes.String,
        
    },
    location:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    
    createdAt:{
        type:mongoose.SchemaTypes.Date,
        default:new Date()
    }
})
const CartData=new mongoose.model("CartData",CartSchema)
export default CartData;