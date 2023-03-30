const express = require("express");
const { CategoryModel } = require("../models/CategoryModel");
const { WorkingProfModel } = require("../models/WorkingProfModel");

const Workingproflist = express.Router();

// for adding new workingprof (only accacable for admin)

Workingproflist.post("/addWorker", async (req, res) => {
  const { name, gender, service, rate, img } = req.body;
  const Alreadydata = await WorkingProfModel.find({ name });
  if (Alreadydata.length > 0) {
    res.json({ msg: "Worker already exist" });
  } else {
    try {
      const data = new WorkingProfModel({ name, gender, service, rate, img });
      await data.save();
      res.json({ msg: "Worker has been added in the list" });
    } catch (error) {
      res.send({ msg: "404 something went wrong" });
      console.log(error);
    }
  }
});

// for getting category in page

Workingproflist.get("/getWorker/:clickedservice", async (req, res) => {
  
  let selectedservice=req.params.clickedservice
  try {
    const data = await WorkingProfModel.find({service:selectedservice});
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
});





module.exports = {
  Workingproflist,
};
