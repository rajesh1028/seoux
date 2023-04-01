const express = require("express");
const { SlotBookingModel } = require("../models/SlotBookingModel");
// const {WorkingProfModel}=require("./")

const booking = express.Router();



booking.get("/get",async(req,res)=>{
    let data=await SlotBookingModel.find()
    res.json("Your all slots")
    console.log(data);
    // let newdate=new Date()
    // console.log(newdate)
})

booking.post("/bookslot",async(req,res)=>{
    let newdate=new Date()
    // console.log(newdate)
    const {uniqueId,date,name,time} =req.body
try {
    let prev=await SlotBookingModel.findOne({uniqueId})
    if(prev){
        res.json("Slot already available")
    }else{
       
    let data= await SlotBookingModel.insertMany({uniqueId,date:newdate,name,time})
    res.json("slot added successfully")
    }
} catch (error) {
    res.json("error in adding slot")
    console.log(error)
}
   
})


booking.delete("/deleteSlot/:id",async(req,res)=>{
    const _id=req.params.id
    const {uniqueId,date,name,time} =req.body
   
    
    try {
    
        const pre=await SlotBookingModel.findByIdAndDelete({_id})
        res.json("slot deleted successfully")
        // console.log(pre)
} catch (error) {
    res.json("error in deleting slot")
    console.log(error)
}
   
})






module.exports ={booking}