const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("../Rest api for social media/routes/News-routes")
const newsRoutes = require('./routes/News-routes');
const app = express();     
app.use(express.json()); 
mongoose
  .connect("mongodb://127.0.0.1:27017/socialmediaapi")
  .then(() => app.listen(5000))
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error: " + err));
 
app.use("/user",userRoute);

