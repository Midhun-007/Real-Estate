import express, { request, response } from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import passport from "passport"
import mongoose from "mongoose"
import cors from "cors"
import SignupData from "./mongoose/schemas/user.mjs"
const app=express();

mongoose.connect('mongodb://localhost:27017/server').then(()=>{console.log("connected to database")}).catch((err)=>{console.log(err)})
app.use(cors()); 
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:"midhun",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*5
    }
}))

app.use(passport.initialize())
app.use(passport.session())

const PORT=3000;

app.get("/",(request,response)=>{
    request.session.visited=true
    console.log(request.url)
    return response.status(200).send({msg:"hi"})
})
app.post("/api/data",async (request,response)=>{
    console.log(request.body)
    try{
        const data=request.body.data
        if(data){
            if(!data.Username||!data.Password)throw new Error("Fill the details")
                const newUSer=await SignupData.create(data)
                return response.json({ message: "Data received successfully", receivedData: request.body })
        }
       
    }
    catch(err){
        return response.json({message:"Fill the data"})
    }
    
})
app.post("api/login")
app.listen(PORT,()=>{
    console.log("server has started "+PORT)
})
