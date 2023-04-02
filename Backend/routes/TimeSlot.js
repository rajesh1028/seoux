const mongoose = require("mongoose");
const express = require("express");
const { SlotBookingModel } = require("../models/SlotBookingModel");

const timeSlot = express.Router();



timeSlot.post("/booktime/:uniqueId", async (req, res) => {
    let uniqueId = req.params.uniqueId;
    let { date, slots } = req.body;
    let arr = [];
    let today = new Date();
    for (var i = 0; i < 7; i++) {
        var dates = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
        let day = dates.toLocaleDateString("en-US", { day: "numeric" });
        arr.push(+day);
    }

    if (arr.includes(date)) {
        try {
            let data = new SlotBookingModel({ uniqueId, date, slots });
            await data.save();
            res.json({ msg: "data has been added", data });
        } catch (error) {
            res.json({ msg: "something went wrong while adding" });
        }
    } else {
        res.json({ msg: "Invalid Date" });
    }

});

// gettime using query

timeSlot.get("/gettime/:uniqueId", async (req, res) => {
    let uniqueId = req.params.uniqueId;
    try {
        const data = await SlotBookingModel.find({uniqueId});
        res.json(data);
    } catch (error) {
        res.send("something went wrong");
        console.log(error)
    }
});


// get all time

timeSlot.get("/gettime", async (req, res) => {
    try {
        const data = await SlotBookingModel.find();
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

// disable button

timeSlot.patch("/hidetime/:uniqueId/:button", async (req, res) => {
    let uniqueId = req.params.uniqueId;
    let button = req.params.button;
    // let date = new Date();
    // const { slots } = req.body; // slots must be array
    try {
        let data = await SlotBookingModel.findOne({ uniqueId });
        let slots = data.slots;
        console.log(slots);
        let i = 1;
        for (let slot in slots) {
            if (i == button) {
                slots[slot] = false;
            }
            i++;
        }
        if (i <= button) console.log("enter a valid button");

        let result = await SlotBookingModel.updateOne({ uniqueId }, { slots });
        console.log(result);
        res.json({ msg: "slots has been added successfully" });
    } catch (error) {
        res.json({ msg: "something went wrong while adding" });
    }
});


// delete


module.exports = { timeSlot }