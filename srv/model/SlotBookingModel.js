const mongoose = require("mongoose");

const SlotBookingSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  bookedAt:{
    type:Date,
    require:true
  }
},{
    versionKey:false
});

const SlotBookingModel = mongoose.model("booking", CategorySchema);

module.exports = {
  SlotBookingModel,
};
