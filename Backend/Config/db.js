const mongoose = require('mongoose');
require("dotenv").config();
mongoose.set("strictQuery", true);

const MONGODB_URL = process.env.MONGODB_URL;
// const connection = mongoose.connect("mongodb+srv://omhari:iqoo@cluster0.ej7gnt2.mongodb.net/Beauty?retryWrites=true&w=majority");

const connection = mongoose.connect(MONGODB_URL);

module.exports = {

       connection
}