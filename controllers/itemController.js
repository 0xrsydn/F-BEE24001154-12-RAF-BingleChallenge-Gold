const { Item } = require('../models');

class ItemController {
  async getItems(req, res) {
    try {
      const items = await Item.findAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ItemController();
