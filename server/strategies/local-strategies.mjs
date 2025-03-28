import passport from "passport"
import { Strategy as LocalStrategy, Strategy } from "passport-local"
import SignupData from "../mongoose/schemas/user.mjs"
import { request, response } from "express"

passport.serializeUser((user,done)=>{
    console.log("inside serialzer")
    done(null,user._id)
})

passport.deserializeUser(async (id,done)=>{
    console.log("inside deserializer ")
    console.log(`deserializing user :${id}`)
    try{
        const user =await SignupData.findById(id)
        if(!user){
            console.log("User not found in database");
             throw new Error("no user")
             
        }
        done(null,user)
    }
    catch(err){
        done(err,null)
    }
})

export default passport.use(new  Strategy({ usernameField: "username", passwordField: "password" },
    (async (username,password,done)=>{
    try{
        console.log("localstrategy")
        const user =await SignupData.findOne({Username:username})
        console.log(user)
        if(!user) return done(null,false,{msg:"User not found"})

        if(!(password===user.Password)){
            console.log({ message: "Incorrect password" })
            return done(null, false, { message: "Incorrect password" })
        }
        console.log("success")
        return done(null, user);
    }
    catch(err){
        return done(err);
    }
})))