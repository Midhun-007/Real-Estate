import express, { request, response } from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import passport from "passport"
import mongoose from "mongoose"
import cors from "cors"
import SignupData from "./mongoose/schemas/user.mjs"
import "./strategies/local-strategies.mjs";
import ProfileData from "./mongoose/schemas/profile.mjs"
import { data } from "react-router-dom"
const app=express();

mongoose.connect('mongodb://localhost:27017/server').then(console.log("connected to database")).catch((err)=>{console.log(err)})
app.use(cors({origin: "http://localhost:5173", // Allow React frontend
    credentials: true })); 
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:"midhun",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*30,
        httpOnly: true, // Prevents client-side JavaScript from accessing cookies
        secure: false, // Set `true` if using HTTPS
        sameSite: "lax"
    }
}))

app.use(passport.initialize())
app.use(passport.session())

const PORT=3000;

const resolveRequest=(req,res,next)=>{
    if (!req.body || !req.body.data) {
        console.error("resolveRequest Error: req.body or req.body.data is undefined");
        return res.status(400).json({ error: "Invalid request format. Expected 'data' object in request body." });
    }

    // Safely assign values
    req.body.username = req.body.data.Username || "";
    req.body.password = req.body.data.Password || "";
    console.log("in resolve")
    next()
}


app.get("/",(request,response)=>{
    
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
app.post("/api/login",resolveRequest,passport.authenticate('local'),(request,response)=>{
    request.session.visited=true
    console.log(request.session)
    console.log(request.body)
    console.log(request.session.passport)
    return response.json({ message: "Data received successfully", receivedData: request.body })
})


app.get("/api/profile",(request,response)=>{
   
   console.log("Session Passport:", request.session.passport);
    console.log("User:", request.user);
    console.log("Is Authenticated:", request.isAuthenticated());
    
    const userid=request.session.passport.user
    async function received(request) {
        const userdata=await SignupData.findById(userid)
        const username=userdata.Username
        console.log(`username:${username}`)
        const backdata= await ProfileData.findOne({Username:username})
        console.log(`backdata:${backdata}`)
        if(backdata){
            response.json({data:backdata})
            console.log("backdata sent")
        }
        else{
            response.json({data:"null"})
        }
    }
    received()
})

app.post("/api/profile",(request,response)=>{
    console.log("inside profile")
    const {Username,Phone,Email,Address}=request.body.data
    const id=request.user._id
    const list={id,Username,Phone,Email,Address}
    console.log("Request Body:", JSON.stringify(request.body.data))
    if(!request.body) return response.status(400).send({msg:"server side error"});
    async function profilefetch(request) {
        const prof=await ProfileData.findOne({id:id})
        console.log(prof)
        
        if(!prof) {
            const  newProf=await ProfileData.create(list)
        }
        else{
            const updatedUSer=await ProfileData.updateOne({id:id},{
                $set:{
                    "Username":Username,
                    "Phone":Phone,
                    "Email":Email,
                    "Address":Address
                }
            })
            const updatedLogin =await SignupData.updateOne({_id:id},{
                "Username":Username
            })
        }
        return true;
       
    }   
    profilefetch(request)


})
app.listen(PORT,()=>{
    console.log("server has started "+PORT)
})
