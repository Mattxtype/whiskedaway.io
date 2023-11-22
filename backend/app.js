const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const recipeRoutes = require("./routes/recipes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/recipe', recipeRoutes);

mongoose
  .connect(
    `mongodb+srv://MattKRose:wLq2LveGqBfB4I19@whiskedaway.0ieu3oc.mongodb.net/recipe`
  )
  .then((result) => {
    console.log("connected to database");
    app.listen(80);
  })
  .catch((err) => {
    console.log(err);
  });
