const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

router.post('/', orderController.createOrder.bind(orderController));
router.put('/:id/status', orderController.updateOrderStatus.bind(orderController));

module.exports = router;
