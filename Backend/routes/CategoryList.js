const express = require("express");
const { CategoryModel } = require("../models/CategoryModel");

const Categorylist = express.Router();

// for adding new category (only accacable for admin)

Categorylist.post("/addCategory",async (req, res) => {
  const { service, desc, img,servicefor } = req.body;
  const Alreadydata = await CategoryModel.find({service});
  if (Alreadydata.length > 0) {
    res.json({ msg: "Category already exist" });
  } else {
    try {
      const data = new CategoryModel({service, desc, img,servicefor});
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

// get category by gender( service for )

Categorylist.get("/getcategory/:servicefor",async(req,res)=>{

  let servicefor=req.params.servicefor;
  try {
    const data = await CategoryModel.find({servicefor:servicefor});
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
})


//for get service name

Categorylist.get("/getcategory/name/:id",async(req,res)=>{
  let service_id=req.params.id
  console.log(service_id)
  try {
    const data = await CategoryModel.find({_id:service_id});
    res.json(data);
  } catch (error) {
    res.send("404 Not found");
  }
})

// update -->


Categorylist.patch("/updateCategory/:id",async (req, res) => {
  let serviceid=req.params.id;
 // const { service, desc, img,servicefor } = req.body;
 const payload = req.body;

  const Alreadydata = await CategoryModel.find({_id:serviceid});

  
  if (Alreadydata.length > 0) {
    //res.json({ msg: "Category already exist" });
    try {

      await CategoryModel.findByIdAndUpdate({_id:serviceid},payload);
      return res.send({"msg":"update successfully"})
      
    } catch (error) {
      return res.send({"msg":"Not updated"})
    }
  } else {
    res.send({msg:"service is not available"})
  }
});



// delete-->


Categorylist.delete("/deleteCategory/:id",async (req, res) => {
  let serviceid=req.params.id;
 // const { service, desc, img,servicefor } = req.body;
 

  const Alreadydata = await CategoryModel.find({_id:serviceid});

  
  if (Alreadydata.length > 0) {
    
    try {

      await CategoryModel.findByIdAndRemove({_id:serviceid});
      return res.send({"msg":"deletesuccessfully"})
      
    } catch (error) {
      return res.send({"msg":"Not deleted"})
    }
  } else {
    res.send({msg:"service is not available"})
  }
});




module.exports = {
  Categorylist
};
