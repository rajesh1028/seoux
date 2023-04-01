const mongoose = require("mongoose");

const SlotBookingSchema = mongoose.Schema({
  uniqueId: {
    type: String,
    require: true
  },
  date: {
    type: Number,
    require: true
  },
  slots: {
    type: Object
  }
  // available: {
  //   type: Array
  // },
  // booked: {
  //   type: Array
  // }
}, {
  versionKey: false

});

const SlotBookingModel = mongoose.model("booking", SlotBookingSchema);

module.exports = {
  SlotBookingModel
};