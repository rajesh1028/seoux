const mongoose = require("mongoose");
const express = require("express");
const { SlotBookingModel } = require("../model/SlotBookingModel");

const timeSlot = express.Router();


// accacable for everyone

timeSlot.post("/booktime", async(req,res)=>{
    const {name, userId, bookedAt } = req.body;
    try {
        const data = new SlotBookingModel({name,userId,bookedAt})
        await data.save();
        res.json({msg:"Your timeslot is booked"})
    } catch (error) {
        res.json({msg:"Something went wrong with timesolt"});
        console.log(error);
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

