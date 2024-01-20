const express = require('express');

const recipesController = require('../controllers/recipesController');

const router = express.Router();

// /recipe/add-recipe => POST
router.post('/add-recipe', recipesController.postAddRecipe)

// /recipe/get-latest-recipes => GET
router.get('/get-latest-recipes', recipesController.getLatestRecipe);

// /recipe/get-all-recipes => GET
router.get('/get-all-recipes', recipesController.getallRecipe);

module.exports = router;