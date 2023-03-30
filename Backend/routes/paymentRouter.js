const express = require("express");
const { PaymentModel } = require("../models/payment.model");

const paymentRouter = express.Router();

paymentRouter.get("/", async (req, res) => {
    try {
        let payment_history = await PaymentModel.find();
        res.send({ "payment": payment_history });
    } catch (error) {
        res.send(error);
    }
})

paymentRouter.post("/add", async (req, res) => {
    const { name, email, address, city, state, zipcode, name_on_card, card_number, expiry_month, expiry_year, cvv } = req.body;

    try {
        if (name && email && address && city && state && zipcode && name_on_card && card_number && expiry_month && expiry_year && cvv) {
            const payment = new PaymentModel({ name, email, address, city, state, zipcode, name_on_card, card_number, expiry_month, expiry_year, cvv });
            await payment.save();
            res.send("payment done successfully");
        } else {
            console.log("please fill all the details");
            res.send("please fill all the details");
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})


module.exports = { paymentRouter }