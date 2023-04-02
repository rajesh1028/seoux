const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  service: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  servicefor:{
    type:String,
    require:true
  }
},{
  versionKey:false
});

const CategoryModel = mongoose.model("category",CategorySchema);

module.exports = {
  CategoryModel
}


