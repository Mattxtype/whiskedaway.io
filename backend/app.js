const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const recipeRoutes = require('./routes/recipes');

app.use(bodyParser.urlencoded({extended: false}));

app.use('recipe', recipeRoutes);

app.listen(80);