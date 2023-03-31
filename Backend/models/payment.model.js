const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    name_on_card: String,
    card_number: Number,
    expiry_month: Number,
    expiry_year: Number,
    cvv: Number

})

const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = { PaymentModel }