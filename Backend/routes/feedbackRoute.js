const express = require("express");
const { FeedbackModel } = require("../models/feedback.model");

const feedbackRouter = express.Router();

feedbackRouter.get("/", async (req, res) => {
    try {
        const feedback = await FeedbackModel.find();
        res.send({ "feedbacks": feedback });
    } catch (error) {
        res.send(error);
    }
})

feedbackRouter.post("/add", async (req, res) => {
    const { name, email, message } = req.body;
    try {
        if (name && email && message) {
            const feedback = new FeedbackModel({ name, email, message });
            await feedback.save();
            res.send("feedback received successfully");
        } else {
            console.log("please fill all the details");
            res.send("please fill all the details");
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})


module.exports = { feedbackRouter }