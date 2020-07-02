const express = require("express")
const mongoose = require("mongoose")
const controller = require("./controller/workout-controller")

// localhost
// mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds125225.mlab.com:25225/heroku_kpwtdf12", 
{ useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(controller)

  app.listen(PORT, () => {
    console.log(`API Server now listening on PORT ${PORT}`)
  })