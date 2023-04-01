const mongoose = require("mongoose");

const SlotBookingSchema = mongoose.Schema({
  uniqueId: {
    type: Number,
    require: true,
  },
  date:{
    type:Date,
    require:true
  },
  time:{
    type:Array
  },
  available:{
    type:Array,// [8:00,]
  },
  booked:{
    type:Array,
  }
},{
    versionKey:false

});

const SlotBookingModel = mongoose.model("booking", SlotBookingSchema);

module.exports = {
  SlotBookingModel
};
