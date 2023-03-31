const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: Number,
    message: String
})

const FeedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports = { FeedbackModel }