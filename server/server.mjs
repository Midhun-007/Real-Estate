import express, { request, response } from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import passport from "passport"
import mongoose from "mongoose"

const app=express();

mongoose.connect('mongodb://localhost:27017/realEs').then(()=>{console.log("connected to database")}).catch((err)=>{console.log(err)})

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
app.listen(PORT,()=>{
    console.log("server has started "+PORT)
})