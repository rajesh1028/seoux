const express = require('express');
const { connection } = require("./config/db");
const { feedbackRouter } = require("./routes/feedbackRoute");
const { paymentRouter } = require("./routes/paymentRouter");


require("dotenv").config();



const PORT = process.env.PORT;
const cors = require("cors");//


const app = express();//
app.use(cors());//
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())



// app.get('/', (req, res) => { 
//        console.log(req.device); 
//        res.json({ "msg": "Welcome to Seoux Bodycare! on your " + req.device.type.toUpperCase()
//  })
//  });
app.get('/', (req, res) => {
       res.json({ "msg": "Welcome to Seoux Bodycare! on your " })
})

const { userRouter } = require("./routes/user.route")
app.use("/users", userRouter);


// end points for feedback and payment
app.use("/feedback", feedbackRouter);
app.use("/payment", paymentRouter);


//////////////////////////////////////////////


const { authenticate } = require("./middlewares/authenticate.middle")
// app.use(authenticate)




app.listen(PORT, async () => {
       try {
              await connection;
              console.log("Connected to Database");
       } catch (error) {
              console.log("Failed while connecting to Database");
              console.log(error);
       }
       console.log(`Listening on ${PORT}`);
})