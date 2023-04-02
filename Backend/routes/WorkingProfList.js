const express = require("express");
const { CategoryModel } = require("../models/CategoryModel");
const { WorkingProfModel } = require("../models/WorkingProfModel");

const Workingproflist = express.Router();

// for adding new workingprof (only accacable for admin)


Workingproflist.post("/addWorker", async (req, res) => {
  const { name, gender, service, rate, img, email, mob } = req.body;
  const Alreadydata = await WorkingProfModel.find({ name });
  if (Alreadydata.length > 0) {
    res.json({ msg: "Worker already exist" });
  } else {
    try {
      const data = new WorkingProfModel({ name, gender, service, rate, img, email, mob });
      await data.save();
      res.json({ msg: "Worker has been added in the list" });
    } catch (error) {
      res.send({ msg: "404 something went wrong" });
      console.log(error);
    }
  }
});

// for getting category in page


Workingproflist.get("/getWorker", async (req, res) => {

  // let selectedservice=req.params.clickedservice
  try {
    const data = await WorkingProfModel.find();
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
});

// get particular id
Workingproflist.get("/getWorkers/:id", async (req, res) => {

  let id = req.params.id;
  try {
    const data = await WorkingProfModel.findById(id);
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
});


Workingproflist.get("/getWorker/:clicked_service", async (req, res) => {

  let selectedservice = req.params.clicked_service
  console.log(selectedservice)
  try {
    const data = await WorkingProfModel.find({ service: selectedservice });
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
});


// delete prof 

Workingproflist.delete("/deleteworker/:id",async(req,res)=>{
  let profid=req.params.id
  const Alreadydata = await WorkingProfModel.find({_id:profid});

  
  if (Alreadydata.length > 0) {
    
    try {

      await WorkingProfModel.findByIdAndRemove({_id:profid});
      return res.send({"msg":"deletesuccessfully"})
      
    } catch (error) {
      return res.send({"msg":"Not deleted"})
    }
  } else {
    res.send({msg:"prof is not available"})
  }
})





module.exports = {
  Workingproflist,
};
