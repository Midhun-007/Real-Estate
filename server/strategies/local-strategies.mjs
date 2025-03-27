import passport from "passport"
import { Strategy as LocalStrategy, Strategy } from "passport-local"
import SignupData from "../mongoose/schemas/user.mjs"
import { request, response } from "express"

passport.serializeUser((user,done)=>{
    console.log("inside serialzer")
    done(null,user.id)
})

passport.deserializeUser(async (id,done)=>{
    console.log("inside deserializer ")
    console.log(`deserializing user :${id}`)
    try{
        const user =await SignupData.findByID(id)
        if(!user) throw new Error("no user")
        done(null,user)
    }
    catch(err){
        done(err,null)
    }
})

export default passport.use(new LocalStrategyStrategy
    (async (username,password,done)=>{
    try{
        const user =await SignupData.findOne({username})
        if(!user) return done(null,false,{msg:"User not found"})

        if(!(password===user.password)){
            return done(null, false, { message: "Incorrect password" })
        }
        return done(null, user);
    }
    catch(err){
        return done(err);
    }
}))