const express= require("express");
const { connection } = require("./config/connection");
const { Categorylist } = require("./routes/CategoryList");
const { Workingproflist } = require("./routes/WorkingProfList");
var cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors());

app.use("/",Categorylist);
app.use("/",Workingproflist);



app.listen(8080,async()=>{
   try {
       await connection;
       console.log("app is connected to db");
   } catch (error) {
       console.log("something went wrong with connection");
   }
   console.log("8080 is working")
})