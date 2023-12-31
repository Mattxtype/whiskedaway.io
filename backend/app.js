const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

const recipeRoutes = require("./routes/recipes");
const tipRoutes = require("./routes/tips");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use('/recipe', recipeRoutes);

app.use('/tip', tipRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@whiskedaway.0ieu3oc.mongodb.net/recipe`
  )
  .then((result) => {
    console.log("connected to MONGODB");
    app.listen(80);
  })
  .catch((err) => {
    console.log("failed to connect to MONGODB")
    console.log(err);
  });
