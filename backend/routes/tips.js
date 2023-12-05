const express = require('express');

const tipsController = require('../controllers/tipsController');

const router = express.Router();

// /tip/add-tip => POST
router.post('/add-tip', tipsController.postAddTip);

// /tip/get-random-tip => GET
router.get('/get-random-tip', tipsController.getRandomTip);

module.exports = router;