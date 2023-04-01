const mongoose = require("mongoose");
const express = require("express");
const { SlotBookingModel } = require("../models/SlotBookingModel");

const timeSlot = express.Router();



timeSlot.post("/booktime/:uniqueId", async (req, res) => {
    let uniqueId = req.params.uniqueId;
    let {date, slots} = req.body;
    let arr = [];
    let today = new Date();
    for (var i = 0; i < 7; i++) {
        // Create a new date for each day of the week
        var dates = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

        // Get the cell for the current day

        // Set the cell's text to the current date and day of the week
        let day = dates.toLocaleDateString("en-US", { day: "numeric" });

        arr.push(+day);
    }
    // console.log(arr);
    if(arr.includes(date)){
        try {
            let data = new SlotBookingModel({ uniqueId, date, slots });
            await data.save();
            res.json({ msg: "data has been added", data });
        } catch (error) {
            res.json({ msg: "something went wrong while adding" });
        }
    }else{
        res.json({msg:"Invalid Date"});
    }
    
});


timeSlot.get("/gettime", async (req, res) => {
    try {
        const data = await SlotBookingModel.find()
        res.json(data);
    } catch (error) {
        res.send("something went wrong");
        console.log(error)
    }
});

// update

timeSlot.patch("/addtime/:uniqueId", async (req, res) => {
    let uniqueId = req.params.uniqueId;
    let date = new Date();
    const { slots } = req.body; // slots must be array
    try {
        let data = await SlotBookingModel.updateOne({ uniqueId }, { uniqueId, date, slots });
        // console.log(await SlotBookingModel.find({uniqueId}));
        res.json({ msg: "slots has been added successfully" });
    } catch (error) {
        res.json({ msg: "something went wrong while adding" });
    }
});


// delete


module.exports = { timeSlot }