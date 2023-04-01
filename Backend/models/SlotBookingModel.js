const mongoose = require("mongoose");

const SlotBookingSchema = mongoose.Schema({
  uniqueId: {
    type: Number,
    require: true,
  },
  

  date:{
    type:Date,
    require:true
  }
},{
    versionKey:false

});

const SlotBookingModel = mongoose.model("booking", SlotBookingSchema);

module.exports = {
  SlotBookingModel,
};
