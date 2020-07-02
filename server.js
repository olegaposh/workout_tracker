const express = require("express")
const mongoose = require("mongoose")
const controller = require("./controller/workout-controller")


mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 8080;
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(controller)

  app.listen(PORT, () => {
    console.log(`server listening on: http://localhost:${PORT}`)
  })