const { Order, OrderItem, Item } = require('../models');

class OrderController {
  async createOrder(req, res) {
    try {
      const { userId, items } = req.body;
      let totalPrice = 0;
      for (const item of items) {
        const itemData = await Item.findByPk(item.id);
        if (itemData) {
          totalPrice += itemData.price * item.quantity;
        }
      }
      const order = await Order.create({ userId, status: 'pending', totalPrice });
      for (const item of items) {
        await OrderItem.create({ orderId: order.id, itemId: item.id, quantity: item.quantity });
      }
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateOrderStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const order = await Order.findByPk(id);
      if (order) {
        order.status = status;
        await order.save();
        res.json(order);
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (error) {
      res.status 500).json({ error: error.message });
    }
  }
}

module.exports = new OrderController();
