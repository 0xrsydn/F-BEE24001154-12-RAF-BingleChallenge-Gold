module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalPrice: DataTypes.DECIMAL
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.belongsToMany(models.Item, {
      through: 'OrderItem',
      foreignKey: 'orderId'
    });
  };
  return Order;
};
