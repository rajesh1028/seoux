const express = require("express");
const { CategoryModel } = require("../models/CategoryModel");

const Categorylist = express.Router();

// for adding new category (only accacable for admin)

Categorylist.post("/addCategory",async (req, res) => {
  const { service, desc, img } = req.body;
  const Alreadydata = await CategoryModel.find({service});
  if (Alreadydata.length > 0) {
    res.json({ msg: "Category already exist" });
  } else {
    try {
      const data = new CategoryModel({service, desc, img});
      await data.save();
      res.json({ msg: "Category has been added in the list" });
    } catch (error) {
      res.send({ msg: "404 something went wrong" });
      console.log(error);
    }
  }
});

// for getting category in page

Categorylist.get("/getcategory",async(req,res)=>{
  try {
    const data = await CategoryModel.find();
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
})

// update -->


// delete-->

module.exports = {
  Categorylist
};
