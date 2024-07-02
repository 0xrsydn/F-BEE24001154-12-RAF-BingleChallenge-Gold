module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    Item.belongsToMany(models.Order, {
      through: 'OrderItem',
      foreignKey: 'itemId'
    });
  };
  return Item;
};
