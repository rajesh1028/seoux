const mongoose = require("mongoose");

const WorkingProfSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    service: {
      type: String,
      require: true,
    },
    rate: {
      type: Number,
      require:true
    },
    img: {
      type: String,
      require:true
    },
  },
  {
    versionKey: false,
  }
);

const WorkingProfModel = mongoose.model("WorkingProf", WorkingProfSchema);

module.exports = {
  WorkingProfModel,
};
