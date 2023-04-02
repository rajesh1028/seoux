const express= require("express")
const newApp=express();
const fetch=(...args) =>import("node-fetch")
.then(({default:fetch})=>fetch(...args));

require("dotenv").config()

let p=process.env.CLIENT_ID
let t=process.env.CLIENT_SECRET



app.get("/",(req,res)=>{
    res.send("base api")
})



app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/auth/github",async(req,res)=>{
    const {code}=req.query
    // console.log(code)
   
    const accesstoken=await fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        headers:{
       "content-type":"application/json",
       Accept:"application/json"
        },
    
    body:JSON.stringify({
        client_id:p,
        client_secret:t,
        code:code
    })
 }).then((res)=>res.json())
 console.log(accesstoken)

 
 const userDetails=await fetch("https://api.github.com/user",{
    headers:{
    Authorization:`Bearer ${accesstoken.access_token}`
    }
 }).then((res)=>res.json())
//  console.log(userDetails)

 res.send("sign up in progesss")
})
app.listen(3000,()=>{
    console.log("server 3000")
})


