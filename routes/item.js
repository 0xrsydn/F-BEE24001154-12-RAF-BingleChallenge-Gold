const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');

router.get('/', itemController.getItems.bind(itemController));

module.exports = router;
