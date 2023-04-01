const express = require('express');
const { connection } = require("./config/db");


require("dotenv").config();


const app = express();
const cookieParser=require('cookie-parser')
app.use(cors());
app.use(cookieParser())
app.use(express.json())


app.get('/', (req, res) => {
       res.json({ "msg": "Welcome to Seoux Bodycare! on your "})
})

const {userRouter}=require("./routes/user.route")
app.use("/users",userRouter)



const {authenticate}=require("./middlewares/authenticate.middle")



const { Categorylist } = require("./routes/CategoryList");
const { Workingproflist } = require("./routes/WorkingProfList");
const {booking}=require("./routes/bookingRoute")


app.use("/",Categorylist);
app.use("/",Workingproflist);
app.use("/",booking)






app.listen(3000, async () => {
       try {
              await connection;
              console.log("Connected to Database");

              console.log(`Listening on ${3000}`);

       } catch (error) {
              console.log("Failed while connecting to Database");
              console.log(error);
       }
})

