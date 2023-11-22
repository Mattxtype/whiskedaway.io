const express = require('express');

const recipesController = require('../controllers/recipesController');

const router = express.Router();

router.get('/getLatestRecipe', recipesController.getLatestRecipes);

module.exports = router;