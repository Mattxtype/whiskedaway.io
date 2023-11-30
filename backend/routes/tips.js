const express = require('express');

const tipsController = require('../controllers/tipsController');

const router = express.Router();

// /recipe/add-recipe => POST
router.post('/add-tip', tipsController.postAddTip);

module.exports = router;