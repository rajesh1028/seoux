const express = require("express");
const { SlotBookingModel } = require("../models/CategoryModel");
// const {WorkingProfModel}=require("./")

const booking = express.Router();



booking.get("/h",async(req,res)=>{
    res.json("booking")
    let newdate=new Date()
    console.log(newdate)
})

booking.post("/bookslot",async(req,res)=>{
    
try {
    const {uniqueId,name,date,time} =req.body
    let data= await SlotBookingModel.insertMany({uniqueId,name,time})
    res.json("slot added successfully")
} catch (error) {
    res.json("error in adding slot")
}
   
})



module.exports ={booking}