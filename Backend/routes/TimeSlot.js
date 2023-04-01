const mongoose = require("mongoose");
const express = require("express");
const { SlotBookingModel } = require("../models/SlotBookingModel");

const timeSlot = express.Router();




timeSlot.post("/booktime/:uniqueID", async(req,res)=>{
    let uniqueID = req.params.uniqueID;
    const {date,time,available,booked} = req.body;
    try {
        let data = new SlotBookingModel({uniqueID,date,available,booked});
        await data.save();
       res.json({msg:"data has been added"});
    } catch (error) {
       res.json({msg:"something went wrong while adding"}); 
    }
});


timeSlot.get("/gettime", async(req,res)=>{
    try {
        const data = await SlotBookingModel.find()
        res.json(data);
    } catch (error) {
        res.send("something went wrong");
        console.log(error)
    }
});

// update


// delete

